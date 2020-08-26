export default {
  displayName: "navs",
  name: "navs",
  homepage:
    "https://www.patternfly.org/v4/C:dev\tailor\bootstrap-components-dssrcpingendocomponents\navs.html",
};

export const variants = [
  {
    displayName: 1,
    picture: {
      src: "./pictures/navs/navs-1.png",
      width: 866,
      height: 120,
    },
    snippet: {
      html: `<ul class="nav pi-draggable">
    <li class="nav-item">
      <a href="#" class="nav-link active">Nav item</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link active">Nav item</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Drop</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
  </ul>`,
    },
  },
  {
    displayName: 2,
    picture: {
      src: "./pictures/navs/navs-2.png",
      width: 866,
      height: 120,
    },
    snippet: {
      html: `<ul class="nav nav-pills pi-draggable">
    <li class="nav-item"> <a href="#" class="active nav-link">Nav pill</a> </li>
    <li class="nav-item"> <a class="nav-link" href="#">Nav pill</a> </li>
    <li class="nav-item"> <a href="#" class="nav-link disabled">Nav pill</a> </li>
  </ul>`,
    },
  },
  {
    displayName: 3,
    picture: {
      src: "./pictures/navs/navs-3.png",
      width: 866,
      height: 128,
    },
    snippet: {
      html: `<ul class="nav nav-pills pi-draggable">
    <li class="nav-item"> <a href="#" class="active nav-link"><i class="d-block fa fa-lg fa-bell-o"></i></a> </li>
    <li class="nav-item"> <a href="#" class="nav-link"><i class="d-block fa fa-lg fa-area-chart"></i></a> </li>
    <li class="nav-item"> <a class="nav-link" href="#"><i class="d-block fa fa-lg fa-clock-o"></i></a> </li>
    <li class="nav-item"> <a href="#" class="nav-link"><i class="d-block fa fa-lg fa-cloud-upload"></i></a> </li>
  </ul>`,
    },
  },
  {
    displayName: 4,
    picture: {
      src: "./pictures/navs/navs-4.png",
      width: 866,
      height: 96,
    },
    snippet: {
      html: `<ul class="pi-draggable breadcrumb">
    <li class="breadcrumb-item"> <a href="#">Home</a> </li>
    <li class="breadcrumb-item active">Link</li>
    <li class="breadcrumb-item active">Link</li>
  </ul>`,
    },
  },
  {
    displayName: 5,
    picture: {
      src: "./pictures/navs/navs-5.png",
      width: 866,
      height: 228,
    },
    snippet: {
      html: `<ul class="pagination pi-draggable">
    <li class="page-item"> <a class="page-link" href="#"> <span>«</span></a> </li>
    <li class="page-item active"> <a class="page-link" href="#">1</a> </li>
    <li class="page-item"> <a class="page-link" href="#">2</a> </li>
    <li class="page-item"> <a class="page-link" href="#">3</a> </li>
    <li class="page-item"> <a class="page-link" href="#">4</a> </li>
    <li class="page-item"> <a class="page-link" href="#"> <span>»</span></a> </li>
  </ul>`,
    },
  },
  {
    displayName: 6,
    picture: {
      src: "./pictures/navs/navs-6.png",
      width: 866,
      height: 228,
    },
    snippet: {
      html: `<ul class="pagination pi-draggable">
    <li class="page-item"> <a class="page-link" href="#">Prev</a> </li>
    <li class="page-item"> <a class="page-link" href="#">1</a> </li>
    <li class="page-item"> <a class="page-link" href="#">2</a> </li>
    <li class="page-item active"> <a class="page-link" href="#">3</a> </li>
    <li class="page-item"> <a class="page-link" href="#">4</a> </li>
    <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
  </ul>`,
    },
  },
  {
    displayName: 7,
    picture: {
      src: "./pictures/navs/navs-7.png",
      width: 866,
      height: 78,
    },
    snippet: {
      html: `<div class="pi-wrapper pi-draggable">
    <ul class="nav nav-tabs">
      <li class="nav-item"> <a href="" class="active nav-link" data-toggle="tab" data-target="#tabone">Tab 1</a> </li>
      <li class="nav-item"> <a class="nav-link" href="" data-toggle="tab" data-target="#tabtwo">Tab 2</a> </li>
      <li class="nav-item"> <a href="" class="nav-link" data-toggle="tab" data-target="#tabthree">Tab 3</a> </li>
    </ul>
    <div class="tab-content mt-2">
      <div class="tab-pane fade show active" id="tabone" role="tabpanel">
        <p class="">When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms.</p>
      </div>
      <div class="tab-pane fade" id="tabtwo" role="tabpanel">
        <p class="">Who formed us in his own image, and the breath of that universal love which bears and sustains us. And then, my friend.</p>
      </div>
      <div class="tab-pane fade" id="tabthree" role="tabpanel">
        <p class="">In my soul and absorb its power, like the form of a beloved mistress, then I often think with longing.</p>
      </div>
    </div>
  </div>`,
    },
  },
  {
    displayName: 8,
    picture: {
      src: "./pictures/navs/navs-8.png",
      width: 866,
      height: 78,
    },
    snippet: {
      html: `<div class="pi-wrapper pi-draggable">
    <ul class="nav nav-tabs">
      <li class="nav-item"> <a href="" class="active nav-link" data-toggle="pill" data-target="#tabone"><i class="fa fa-home"></i> Tab 1</a> </li>
      <li class="nav-item"> <a class="nav-link" href="" data-toggle="pill" data-target="#tabtwo"><i class="fa fa-bed"></i> Tab 2</a> </li>
      <li class="nav-item"> <a href="" class="nav-link" data-toggle="pill" data-target="#tabthree"><i class="fa fa-shower"></i> Tab 3</a> </li>
    </ul>
    <div class="tab-content mt-2">
      <div class="tab-pane fade show active" id="tabone" role="tabpanel">
        <p class="">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.</p>
      </div>
      <div class="tab-pane fade" id="tabtwo" role="tabpanel">
        <p class="">Which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.</p>
      </div>
      <div class="tab-pane fade" id="tabthree" role="tabpanel">
        <p class="">When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.</p>
      </div>
    </div>
  </div>`,
    },
  },
  {
    displayName: 9,
    picture: {
      src: "./pictures/navs/navs-9.png",
      width: 866,
      height: 76,
    },
    snippet: {
      html: `<div class="pi-wrapper pi-draggable">
    <ul class="nav nav-pills">
      <li class="nav-item"> <a href="" class="active nav-link" data-toggle="pill" data-target="#tabone">Tab 1</a> </li>
      <li class="nav-item"> <a class="nav-link" href="" data-toggle="pill" data-target="#tabtwo">Tab 2</a> </li>
      <li class="nav-item"> <a href="" class="nav-link" data-toggle="pill" data-target="#tabthree">Tab 3</a> </li>
    </ul>
    <div class="tab-content mt-2">
      <div class="tab-pane fade show active" id="tabone" role="tabpanel">
        <p class="">Which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.</p>
      </div>
      <div class="tab-pane fade" id="tabtwo" role="tabpanel">
        <p class="">When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.</p>
      </div>
      <div class="tab-pane fade" id="tabthree" role="tabpanel">
        <p class="">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.</p>
      </div>
    </div>
  </div>`,
    },
  },
  {
    displayName: 10,
    picture: {
      src: "./pictures/navs/navs-10.png",
      width: 866,
      height: 76,
    },
    snippet: {
      html: `<div class="pi-wrapper pi-draggable">
    <ul class="nav nav-pills">
      <li class="nav-item"> <a href="" class="active nav-link" data-toggle="pill" data-target="#tabone"><i class="fa fa-lg fa-envelope-open"></i> </a> </li>
      <li class="nav-item"> <a class="nav-link" href="" data-toggle="pill" data-target="#tabtwo"><i class="fa fa-lg fa-comment"></i></a> </li>
      <li class="nav-item"> <a href="" class="nav-link" data-toggle="pill" data-target="#tabthree"><i class="fa fa-lg fa-cog"></i></a> </li>
    </ul>
    <div class="tab-content mt-2">
      <div class="tab-pane fade show active" id="tabone" role="tabpanel">
        <p class="">Who formed us in his own image, and the breath of that universal love which bears and sustains us. And then, my friend.</p>
      </div>
      <div class="tab-pane fade" id="tabtwo" role="tabpanel">
        <p class="">Which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.</p>
      </div>
      <div class="tab-pane fade" id="tabthree" role="tabpanel">
        <p class="">When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms.</p>
      </div>
    </div>
  </div>`,
    },
  },
  {
    displayName: 11,
    picture: {
      src: "./pictures/navs/navs-11.png",
      width: 866,
      height: 192,
    },
    snippet: {
      html: `<div class="row  pi-draggable">
      <div class="col-3">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item"> <a href="" class="active nav-link" data-toggle="pill" data-target="#tabone">Tab 1</a> </li>
          <li class="nav-item"> <a class="nav-link" href="" data-toggle="pill" data-target="#tabtwo">Tab 2</a> </li>
          <li class="nav-item"> <a href="" class="nav-link" data-toggle="pill" data-target="#tabthree">Tab 3</a> </li>
        </ul>
      </div>
      <div class="col-9">
        <div class="tab-content">
          <div class="tab-pane fade show active" id="tabone" role="tabpanel">
            <p class="">In my soul and absorb its power, like the form of a beloved mistress, then I often think with longing. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
          </div>
          <div class="tab-pane fade" id="tabtwo" role="tabpanel">
            <p class=""> I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>
          </div>
          <div class="tab-pane fade" id="tabthree" role="tabpanel">
            <p class="">Which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite. When I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms.</p>
          </div>
        </div>
      </div>
    </div>`,
    },
  },
];
