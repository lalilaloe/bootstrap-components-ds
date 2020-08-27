export default {
  displayName: "buttons",
  name: "buttons",
  homepage:
    "https://www.patternfly.org/v4//mnt/d/tailor/bootstrap-components-ds/src/pingendo/components/buttons.html",
};

export const variants = [
  {
    displayName: 1,
    picture: {
      src: "./pictures/buttons/buttons-1.png",
      width: 70,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-primary " href="#">Button</a>`,
    },
  },
  {
    displayName: 2,
    picture: {
      src: "./pictures/buttons/buttons-2.png",
      width: 97,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-secondary " href="#">Secondary</a>`,
    },
  },
  {
    displayName: 3,
    picture: {
      src: "./pictures/buttons/buttons-3.png",
      width: 51,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-info " href="#">Info</a>`,
    },
  },
  {
    displayName: 4,
    picture: {
      src: "./pictures/buttons/buttons-4.png",
      width: 58,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-light " href="#">Light</a>`,
    },
  },
  {
    displayName: 5,
    picture: {
      src: "./pictures/buttons/buttons-5.png",
      width: 57,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-dark " href="#">Dark</a>`,
    },
  },
  {
    displayName: 6,
    picture: {
      src: "./pictures/buttons/buttons-6.png",
      width: 74,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-outline-primary " href="#">Outline</a>`,
    },
  },
  {
    displayName: 7,
    picture: {
      src: "./pictures/buttons/buttons-7.png",
      width: 97,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-outline-secondary " href="#">Secondary</a>`,
    },
  },
  {
    displayName: 8,
    picture: {
      src: "./pictures/buttons/buttons-8.png",
      width: 51,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-outline-info " href="#">Info</a>`,
    },
  },
  {
    displayName: 9,
    picture: {
      src: "./pictures/buttons/buttons-9.png",
      width: 58,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-outline-light " href="#">Light</a>`,
    },
  },
  {
    displayName: 10,
    picture: {
      src: "./pictures/buttons/buttons-10.png",
      width: 57,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-outline-dark " href="#">Dark</a>`,
    },
  },
  {
    displayName: 11,
    picture: {
      src: "./pictures/buttons/buttons-11.png",
      width: 52,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-link " href="#">Link</a>`,
    },
  },
  {
    displayName: 12,
    picture: {
      src: "./pictures/buttons/buttons-12.png",
      width: 46,
      height: 42,
    },
    snippet: {
      html: `<a class="btn btn-primary " href="#"><i class="fa fa-star fa-fw fa-1x py-1"></i></a>`,
    },
  },
  {
    displayName: 13,
    picture: {
      src: "./pictures/buttons/buttons-13.png",
      width: 108,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-primary " href="#"><i class="fa fa-download fa-fw"></i>&nbsp;Left icon </a>`,
    },
  },
  {
    displayName: 14,
    picture: {
      src: "./pictures/buttons/buttons-14.png",
      width: 117,
      height: 38,
    },
    snippet: {
      html: `<a class="btn btn-outline-primary " href="#">Right icon <i class="fa fa-shopping-cart fa-fw"></i> </a>`,
    },
  },
  {
    displayName: 15,
    picture: {
      src: "./pictures/buttons/buttons-15.png",
      width: 113,
      height: 38,
    },
    snippet: {
      html: `<div class="btn-group ">
    <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> Dropdown </button>
    <div class="dropdown-menu"> <a class="dropdown-item" href="#">Action</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>`,
    },
  },
  {
    displayName: 16,
    picture: {
      src: "./pictures/buttons/buttons-16.png",
      width: 93,
      height: 38,
    },
    snippet: {
      html: `<div class="btn-group dropup ">
    <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> Dropup </button>
    <div class="dropdown-menu"> <a class="dropdown-item" href="#">Action</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>`,
    },
  },
  {
    displayName: 17,
    picture: {
      src: "./pictures/buttons/buttons-17.png",
      width: 103,
      height: 38,
    },
    snippet: {
      html: `<div class="btn-group dropright ">
    <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> Dropright </button>
    <div class="dropdown-menu"> <a class="dropdown-item" href="#">Action</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>`,
    },
  },
  {
    displayName: 18,
    picture: {
      src: "./pictures/buttons/buttons-18.png",
      width: 93,
      height: 38,
    },
    snippet: {
      html: `<div class="btn-group dropleft ">
    <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> Dropleft </button>
    <div class="dropdown-menu"> <a class="dropdown-item" href="#">Action</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>`,
    },
  },
  {
    displayName: 19,
    picture: {
      src: "./pictures/buttons/buttons-19.png",
      width: 156,
      height: 38,
    },
    snippet: {
      html: `<div class="btn-group ">
    <button type="button" class="btn btn-primary">Split Dropdown</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false"></button>
    <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(128px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>`,
    },
  },
  {
    displayName: 20,
    picture: {
      src: "./pictures/buttons/buttons-20.png",
      width: 112,
      height: 38,
    },
    snippet: {
      html: `<div class="btn-group ">
    <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> With Form </button>
    <div class="dropdown-menu">
      <form class="p-3">
        <div class="form-group">
          <label for="exampleDropdownFormEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
        </div>
        <div class="form-group">
          <label for="exampleDropdownFormPassword1">Password</label>
          <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="dropdownCheck">
          <label class="form-check-label" for="dropdownCheck"> Remember me </label>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">New around here? Sign up</a>
      <a class="dropdown-item" href="#">Forgot password?</a>
    </div>
  </div>`,
    },
  },
  {
    displayName: 21,
    picture: {
      src: "./pictures/buttons/buttons-21.png",
      width: 111,
      height: 38,
    },
    snippet: {
      html: `<button class="btn btn-primary " type="button">
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`,
    },
  },
  {
    displayName: 22,
    picture: {
      src: "./pictures/buttons/buttons-22.png",
      width: 177,
      height: 38,
    },
    snippet: {
      html: `<div class=" btn-group"> <a href="#" class="btn btn-primary">Btn 1</a> <a href="#" class="btn btn-primary">Btn 2</a> <a href="#" class="btn btn-primary">Btn 3</a> </div>`,
    },
  },
  {
    displayName: 23,
    picture: {
      src: "./pictures/buttons/buttons-23.png",
      width: 122,
      height: 38,
    },
    snippet: {
      html: `<div class=" btn-group"> <a href="#" class="btn btn-outline-primary">Btn A</a> <a href="#" class="btn btn-primary">Btn B</a> </div>`,
    },
  },
  {
    displayName: 24,
    picture: {
      src: "./pictures/buttons/buttons-24.png",
      width: 177,
      height: 38,
    },
    snippet: {
      html: `<div class="btn-group btn-group-toggle " data-toggle="buttons">
    <label class="btn btn-primary active">
      <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Radio On </label>
    <label class="btn btn-primary">
      <input type="radio" name="options" id="option2" autocomplete="off"> Radio Off </label>
  </div>`,
    },
  },
  {
    displayName: 25,
    picture: {
      src: "./pictures/buttons/buttons-25.png",
      width: 46,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#55acee" target="_blank"><i class="fa fa-twitter fa-fw fa-1x py-1"></i></a>`,
    },
  },
  {
    displayName: 26,
    picture: {
      src: "./pictures/buttons/buttons-26.png",
      width: 89,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#55acee" target="_blank"><i class="fa fa-twitter fa-fw fa-1x py-1"></i> Tweet</a>`,
    },
  },
  {
    displayName: 27,
    picture: {
      src: "./pictures/buttons/buttons-27.png",
      width: 94,
      height: 42,
    },
    snippet: {
      html: `<a class="btn btn-link " style="color:#55acee" target="_blank" href="#"><i class="fa fa-twitter fa-fw fa-1x py-1"></i> Twitter</a>`,
    },
  },
  {
    displayName: 28,
    picture: {
      src: "./pictures/buttons/buttons-28.png",
      width: 46,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#3b5998" target="_blank"><i class="fa fa-facebook fa-fw fa-1x py-1"></i></a>`,
    },
  },
  {
    displayName: 29,
    picture: {
      src: "./pictures/buttons/buttons-29.png",
      width: 88,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#3b5998" target="_blank"><i class="fa fa-facebook-square fa-fw fa-1x py-1"></i> Share</a>`,
    },
  },
  {
    displayName: 30,
    picture: {
      src: "./pictures/buttons/buttons-30.png",
      width: 114,
      height: 42,
    },
    snippet: {
      html: `<a class="btn btn-link " href="#" style="color:#3b5998" target="_blank"><i class="fa fa-facebook-official fa-fw fa-1x py-1"></i> Facebook</a>`,
    },
  },
  {
    displayName: 31,
    picture: {
      src: "./pictures/buttons/buttons-31.png",
      width: 46,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#dd4b39" target="_blank"><i class="fa fa-google-plus fa-fw fa-1x py-1"></i></a>`,
    },
  },
  {
    displayName: 32,
    picture: {
      src: "./pictures/buttons/buttons-32.png",
      width: 88,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#dd4b39" target="_blank"><i class="fa fa-google-plus-circle fa-fw fa-1x py-1"></i> Share</a>`,
    },
  },
  {
    displayName: 33,
    picture: {
      src: "./pictures/buttons/buttons-33.png",
      width: 99,
      height: 42,
    },
    snippet: {
      html: `<a class="btn btn-link " href="#" style="color:#dd4b39" target="_blank"><i class="fa fa-google-plus-official fa-fw fa-1x py-1"></i> Google</a>`,
    },
  },
  {
    displayName: 34,
    picture: {
      src: "./pictures/buttons/buttons-34.png",
      width: 46,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#0976b4" target="_blank"><i class="fa fa-linkedin fa-fw fa-1x py-1"></i></a>`,
    },
  },
  {
    displayName: 35,
    picture: {
      src: "./pictures/buttons/buttons-35.png",
      width: 77,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#0976b4" target="_blank"><i class="fa fa-linkedin-square fa-fw fa-1x py-1"></i>&nbsp;Link</a>`,
    },
  },
  {
    displayName: 36,
    picture: {
      src: "./pictures/buttons/buttons-36.png",
      width: 106,
      height: 42,
    },
    snippet: {
      html: `<a class="btn btn-link " href="#" style="color:#0976b4" target="_blank"><i class="fa fa-linkedin-square fa-fw fa-1x py-1"></i> Linkedin</a>`,
    },
  },
  {
    displayName: 37,
    picture: {
      src: "./pictures/buttons/buttons-37.png",
      width: 46,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#cc2127" target="_blank"><i class="fa fa-pinterest-p fa-fw fa-1x py-1"></i></a>`,
    },
  },
  {
    displayName: 38,
    picture: {
      src: "./pictures/buttons/buttons-38.png",
      width: 83,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#cc2127" target="_blank"><i class="fa fa-pinterest-square fa-fw fa-1x py-1"></i> Pin it</a>`,
    },
  },
  {
    displayName: 39,
    picture: {
      src: "./pictures/buttons/buttons-39.png",
      width: 108,
      height: 42,
    },
    snippet: {
      html: `<a class="btn btn-link " href="#" style="color:#cc2127" target="_blank"><i class="fa fa-pinterest fa-fw fa-1x py-1"></i> Pinterest</a>`,
    },
  },
  {
    displayName: 40,
    picture: {
      src: "./pictures/buttons/buttons-40.png",
      width: 46,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#e52d27" target="_blank"><i class="fa fa-youtube-play fa-fw fa-1x py-1"></i></a>`,
    },
  },
  {
    displayName: 41,
    picture: {
      src: "./pictures/buttons/buttons-41.png",
      width: 82,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#e52d27" target="_blank"><i class="fa fa-youtube fa-fw fa-1x py-1"></i> View</a>`,
    },
  },
  {
    displayName: 42,
    picture: {
      src: "./pictures/buttons/buttons-42.png",
      width: 106,
      height: 42,
    },
    snippet: {
      html: `<a class="btn btn-link " href="#" style="color:#e52d27" target="_blank"><i class="fa fa-youtube-square fa-fw fa-1x py-1"></i> Youtube</a>`,
    },
  },
  {
    displayName: 43,
    picture: {
      src: "./pictures/buttons/buttons-43.png",
      width: 46,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#ff4500" target="_blank"><i class="fa fa-reddit-alien fa-fw fa-1x py-1"></i></a>`,
    },
  },
  {
    displayName: 44,
    picture: {
      src: "./pictures/buttons/buttons-44.png",
      width: 78,
      height: 42,
    },
    snippet: {
      html: `<a class="btn text-white " href="#" style="background:#ff4500" target="_blank"><i class="fa fa-reddit fa-fw fa-1x py-1"></i> Post</a>`,
    },
  },
  {
    displayName: 45,
    picture: {
      src: "./pictures/buttons/buttons-45.png",
      width: 93,
      height: 42,
    },
    snippet: {
      html: `<a class="btn btn-link " href="#" style="color:#ff4500" target="_blank"><i class="fa fa-reddit fa-fw fa-1x py-1"></i> Reddit</a>`,
    },
  },
];
