export default {
  displayName: "js-items",
  name: "js-items",
  homepage:
    "https://www.patternfly.org/v4/C:dev\tailor\bootstrap-components-dssrcpingendocomponentsjs-items.html",
};

export const variants = [
  {
    displayName: 1,
    picture: {
      src: "./pictures/js-items/js-items-1.png",
      width: 882,
      height: 90,
    },
    snippet: {
      html: `<div class="alert alert-primary pi-draggable" role="alert">
    <button type="button" class="close" data-dismiss="alert">×</button>
    <h4 class="alert-heading">Well done!</h4>
    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>`,
    },
  },
  {
    displayName: 2,
    picture: {
      src: "./pictures/js-items/js-items-2.png",
      width: 882,
      height: 16,
    },
    snippet: {
      html: `<div class="progress pi-draggable">
    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 50%">50%</div>
  </div>`,
    },
  },
  {
    displayName: 3,
    picture: {
      src: "./pictures/js-items/js-items-3.png",
      width: 882,
      height: 86,
    },
    snippet: {
      html: `<div class="toast pi-draggable" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="mr-auto">Bootstrap</strong>
      <small class="text-muted">2 seconds ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      Heads up, toasts will stack automatically
    </div>
  </div>`,
    },
  },
  {
    displayName: 4,
    picture: {
      src: "./pictures/js-items/js-items-4.png",
      width: 866,
      height: 264,
    },
    snippet: {
      html: `<div class="modal pi-draggable">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5> <button type="button" class="close" data-dismiss="modal"> <span>×</span> </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer"> <button type="button" class="btn btn-primary">Save changes</button> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> </div>
      </div>
    </div>
  </div>`,
    },
  },
];
