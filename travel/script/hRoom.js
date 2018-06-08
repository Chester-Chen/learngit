
var elem = document.querySelector("header");
var headroom = new Headroom(elem, {
    "offset": 205,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned": "bounceInDown",
      "unpinned": "bounceOutUp"
    }
  });
  headroom.init();
  
