(function() {
  var Main;

  if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
  }

  window.map = function(value, min1, max1, min2, max2) {
    return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
  };

  window.uniforms1 = {
    time: {
      type: "f",
      value: 1.0
    },
    resolution: {
      type: "v2",
      value: new THREE.Vector2()
    }
  };

  window.FW = {};

  if (typeof SC !== "undefined" && SC !== null) {
    SC.initialize({
      client_id: "7da24ca214bf72b66ed2494117d05480"
    });
  }

  FW.sfxVolume = 0.2;

  FW.globalTick = 0.16;

  FW.development = true;

  window.soundOn = !FW.development;

  window.onload = function() {
    var infoEl, infoShowing;
    FW.myWorld = new FW.World();
    FW.myWorld.animate();
    FW.main = new FW.Main();
    infoEl = document.getElementsByClassName('infoWrapper')[0];
    infoShowing = false;
    return document.onclick = function(event) {
      var el;
      el = event.target;
      if (el.className === "icon") {
        infoEl.style.display = infoShowing ? 'none' : 'block';
        return infoShowing = !infoShowing;
      }
    };
  };

  FW.Main = Main = (function() {
    function Main() {
      if (soundOn) {
        SC.stream("/tracks/north-atlantic-drift-canvas-02", function(sound) {
          if (soundOn) {
            return sound.play();
          }
        });
      }
    }

    return Main;

  })();

}).call(this);
