const fs = require('fs');
const jsonfile = require('jsonfile');
const foxr = require('foxr').default
const path = require('path');
const slash = require('slash');
const he = require('he');
const sizeOf = require('image-size');
const parseHtml = require('node-html-parser').default;
const serveStatic = require('serve-static');
const connect = require('connect');

function getComponents(dir) {
    const components = []
    for (const file of fs.readdirSync(dir)) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            const subDir = path.join(dir, file)
            for (const componentfile of fs.readdirSync(subDir)) {
                if (fs.statSync(path.join(subDir, componentfile)).isFile() && componentfile.split(".").pop() == "html") {
                    components.push({
                        name: componentfile.split(".").shift(),
                        path: path.join(subDir, componentfile)
                    })
                }
            }
        } else {
            if (fs.statSync(path.join(dir, file)).isFile() && file.split(".").pop() == "html") {
                components.push({
                    name: file.split(".").shift(),
                    path: path.join(dir, file)
                })
            }
        }
    }
    return components
}

async function takeScreenshot(component, variant, screenshotUrl, target, subvariant = false, child = false) {
    const screenshotPath = path.join(screenshotDir, component)
    const screenshotFileName = variant + ".png"
    const screenshotFullPath = path.join(screenshotPath, screenshotFileName)

    if (!fs.existsSync(screenshotFullPath)) {
        if (await page.url() != screenshotUrl) { // If not already on page
            console.log("     Browsing to:", screenshotUrl);
            page.removeAllListeners(); // Avoid MaxListenersExceededWarning that crashes the script when used in large badges

            await page.goto(screenshotUrl, { waitUntil: 'load', timeout: 0 }).catch(error => {
                console.log("ERROR: Can't reach page", screenshotUrl)
                console.log("Are you sure the patterfly docs are locally running? Start it by running npm run start:patternfly")
            })
        }
        await ready(component);

        let element;

        await page.evaluate(function () {
            var examples = document.getElementsByClassName('pi-draggable');
            for (var i = 0; i < examples.length; i++) {
                examples[i].style.display = "block" // Changes preview container size to fit component size
            }
        })
        element = await page.$(target)

        if (!fs.existsSync(screenshotPath)) {
            fs.mkdirSync(screenshotPath, { recursive: true });
        }

        //await page.screenshot({ path: screenshotFullPath })
        if (element) {
            await element.screenshot({ path: screenshotFullPath })
            //console.log("     Screenshot:", screenshotFullPath)
            process.stdout.cursorTo(0);
            process.stdout.write(` ✅ ${subvariant ? child ? '  -' : ' -' : '-'} ` + variant + "\n\033[0G"); // The last bit replaces the whole line
        } else {
            process.stdout.cursorTo(0);
            process.stdout.write(` ❌ ${subvariant ? child ? '  -' : ' -' : '-'} ` + variant + "\n\033[0G")
            return false;
        }
    } else {
        //console.log("     Screenshot exist:", screenshotFullPath)
        process.stdout.cursorTo(0);
        process.stdout.write(` ❎ ${subvariant ? child ? '  -' : ' -' : '-'} ` + variant + "\n\033[0G");
    }
    return screenshotFullPath
}

async function notReady(component) {
    {
        if (!await page.$(".pi-draggable")) {
            return true
        }
    }
    return false
}

async function ready(component) {
    while (await notReady(component)) {
        await new Promise(r => setTimeout(r, 500)) // Wait for page to be ready
    }
}

function getSnippet(screenshotFullPath, htmlCode, variantName) {
    const imageSize = sizeOf(screenshotFullPath);
    const html = `\`${htmlCode.toString()}\``
    return {
        name: variantName,
        screenshot: {
            url: slash(screenshotFullPath.replace(rootDir, '')).replace('/components/', ''),
            width: imageSize.width,
            height: imageSize.height
        },
        html: html
    }
}

function buildComponentJson(component) {
    return `export default {
    displayName: "${component.name}",
    name: "${component.name.toLowerCase()}",
    homepage: "https://www.patternfly.org/v4/${component.path}"
}

${buildVariantJson(component)}`
}

function buildVariantJson(component) {
    const variants = []
    component.variants.forEach(variant => {
        variants.push(objectToString(
            {
                displayName: variant.name,
                picture: {
                    src: `./${variant.screenshot.url}`.replace("//", "/"), // Compatible with windows replacint double slashes
                    width: variant.screenshot.width,
                    height: variant.screenshot.height
                },
                snippet: {
                    html: "html",
                }
            }).replace("\"html\"", variant.html)) // The replace is done to avoid qoutes bing added/processed by objectToString
    });
    return `export const variants = [
${variants.join(',\n')}
]`;
}

function objectToString(input) {
    return JSON.stringify(input).replace(/"([^"]+)":/g, '\n$1:');
}

function launchAssetsServer(port = 8000) {
    connect()
        .use(serveStatic(componentDir))
        .listen(port);

    console.log('Asset server listening on port', port);
}

const rootDir = path.resolve(__dirname, '..');
const componentDir = path.join(rootDir, "/src/pingendo")
const screenshotDir = path.join(rootDir, "/components/pictures");

(async () => {
    // await foxr.launch({
    //     executablePath: 'C:/Program Files/Firefox Developer Edition/firefox.exe'
    // })
    launchAssetsServer();
    const defaultViewport = {
        width: 1000,
        height: 600
    }
    browser = await foxr.connect({
        defaultViewport: defaultViewport
    })
    pages = await browser.pages()
    page = pages[0]; // await browser.newPage() // << gives me an error

    const components = getComponents(componentDir)// for testing use .slice(0, 5); or .filter(c => c == 'name') to limit number of components processed
    console.log("Components found", components.length)
    console.log("Ready to process 🚀:")
    console.log(components.map(c => c.name))
    for (const component of components) {
        console.log("*", component.name) // Log component name
        component.pageData = fs.readFileSync(component.path);
        component.parsedHtml = parseHtml(component.pageData);
        const variants = component.parsedHtml.childNodes.find(c => c.tagName === "html")
            .childNodes.find(c => c.tagName === "body")
            .childNodes.filter(c => c.classNames && c.classNames.includes("pi-draggable"));
        const variantSnippets = []
        for (const variant of variants) {
            variant.classNames.splice(variant.classNames.indexOf("pi-draggable"), 1)
            variant.rawAttrs = variant.rawAttrs.replace("pi-draggable", "") // Remove draggable class
            const variantNumber = variants.indexOf(variant) + 1
            const variantFileName = component.name + "-" + variantNumber
            process.stdout.write("   - " + variantFileName + "\n") // Log variant name 
            const screenshotUrl = slash(`file:///${component.path}`)
            const target = ".pi-draggable"
            let variantTarget = target
            for (let index = 1; index < variantNumber; index++) {
                variantTarget += " ~ " + target // Using ~ selector to select child number by target classes
            }
            //console.log(variantTarget)
            screenshotFullPath = await takeScreenshot(component.name, variantFileName, screenshotUrl, variantTarget)
            variantSnippets.push(getSnippet(screenshotFullPath, variant, variantNumber))
        }

        const outputComponent = buildComponentJson({
            name: component.name,
            path: component.path,
            variants: variantSnippets
        })
        const outputComponentPath = path.join(rootDir, "components", component.name + ".ds.js");
        fs.writeFileSync(outputComponentPath, outputComponent);
        console.log("\n 🎉Succesfull output:", component.name, outputComponentPath, "\n");
    }
    console.log(" 🎉 The End 🥚 ")
    //await browser.close();
})()