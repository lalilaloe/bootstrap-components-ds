# Bootstrap components design system

Bootstrap-components-ds is a package that describes components taken from Pingendo ui kit, so that a design tool like Hadron can use it to provide a design experience with its components.

All credits go to [Pingendo](https://www.patternfly.org), i just made it usable as design system in Hadron.

## Theme Options
You can use the different design themes available at [Pingendo Library](https://library.pingendo.com/#themes) or create your own, you can use the css to edit or modify scss from Pingendo libary

## Installation

Add bootstrap-components-ds as a dependency to your project

```bash
npm install bootstrap-components-ds
```

## Converting components with variants from Pingendo source

Of course not everything was done by hand, i created a small script to automatically generate the design systems json files and take screenshots of the  elements.

To run the script yourself execute the following commands.

*Requirements*
- run ```firefox.exe -headless -marionette -safe-mode``` or set ```marionette.enabled``` to ```true``` in ```about:config```
- you can use chrome by changing the import to ```const foxr = require('puppeteer'); ``` See
[https://github.com/puppeteer/puppeteer](https://github.com/puppeteer/puppeteer)

```bash
# install dependencies (seperate npm project, might be transfered to own repo in the future)
cd convert
npm install

# start converting
npm start

# to clean up the files after conversion
npm run prettier

# if you want to check if the files are exported correctly
npm run lint
```

## Contributing
Requests are welcome. Especially when using the convert script for another project, we might be able to make it universal and move it to a repo of it's own. Please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)