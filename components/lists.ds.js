export default {
  displayName: "lists",
  name: "lists",
  homepage:
    "https://www.patternfly.org/v4/C:dev\tailor\bootstrap-components-dssrcpingendocomponentslists.html",
};

export const variants = [
  {
    displayName: 1,
    picture: {
      src: "./pictures/lists/lists-1.png",
      width: 866,
      height: 246,
    },
    snippet: {
      html: `<div class="list-group pi-draggable">
    <a href="#" class="list-group-item list-group-item-action active"> Cras justo odio </a>
    <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
    <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
    <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
    <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
  </div>`,
    },
  },
  {
    displayName: 2,
    picture: {
      src: "./pictures/lists/lists-2.png",
      width: 866,
      height: 246,
    },
    snippet: {
      html: `<ul class="list-group list-group-flush pi-draggable">
    <li class="list-group-item"><i class="fa fa-cloud text-primary mr-2"></i>Cras justo odio</li>
    <li class="list-group-item"><i class="fa fa-bookmark text-primary mr-2"></i> Dapibus ac facilisis in</li>
    <li class="list-group-item"><i class="fa fa-bell text-primary mr-2"></i> Morbi leo risus</li>
    <li class="list-group-item"><i class="fa fa-life-ring text-primary mr-2"></i> Porta ac consectetur ac</li>
    <li class="list-group-item"><i class="fa fa-paper-plane text-primary mr-2"></i> Vestibulum at eros</li>
  </ul>`,
    },
  },
  {
    displayName: 3,
    picture: {
      src: "./pictures/lists/lists-3.png",
      width: 866,
      height: 148,
    },
    snippet: {
      html: `<ul class="list-group pi-draggable">
    <li class="list-group-item d-flex justify-content-between align-items-center"> Cras justo odio <span class="badge badge-primary badge-pill">14</span> </li>
    <li class="list-group-item d-flex justify-content-between align-items-center"> Dapibus ac facilisis in <span class="badge badge-primary badge-pill">2</span> </li>
    <li class="list-group-item d-flex justify-content-between align-items-center"> Morbi leo risus <span class="badge badge-primary badge-pill">1</span> </li>
  </ul>`,
    },
  },
  {
    displayName: 4,
    picture: {
      src: "./pictures/lists/lists-4.png",
      width: 866,
      height: 189,
    },
    snippet: {
      html: `<ul class="list-group pi-draggable">
    <li class=" border-0 list-group-item d-flex justify-content-between align-items-center"> MY LISTS <i class="fa fa-list text-muted fa-lg"></i></li>
    <li class=" border-0 list-group-item d-flex justify-content-between align-items-center"> ANALYTICS <i class="fa fa-pie-chart text-muted fa-lg"></i></li>
    <li class=" border-0 list-group-item d-flex justify-content-between align-items-center"> SETTINGS <i class="fa fa-cog text-muted fa-lg"></i></li>
    <li class=" border-0 list-group-item d-flex justify-content-between align-items-center"> LOG OUT <i class="fa fa-sign-out text-muted fa-lg"></i></li>
  </ul>`,
    },
  },
  {
    displayName: 5,
    picture: {
      src: "./pictures/lists/lists-5.png",
      width: 866,
      height: 219,
    },
    snippet: {
      html: `<div class="list-group pi-draggable">
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group</h5> <small>3 days ago</small>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> <small>Donec id elit non mi porta.</small>
    </a>
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group </h5> <small class="text-muted">3 days ago</small>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> <small class="text-muted">Donec id elit non mi porta.</small>
    </a>
  </div>`,
    },
  },
];
