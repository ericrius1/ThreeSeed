
if !Detector.webgl
   Detector.addGetWebGLMessage()


window.map = (value, min1, max1, min2, max2) ->
  min2 + (max2 - min2) * ((value - min1) / (max1 - min1))

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
window.FW = {}
SC?.initialize({
    client_id: "7da24ca214bf72b66ed2494117d05480",
});

FW.sfxVolume = 0.2
FW.globalTick = 0.16
FW.development = true
window.soundOn = !FW.development

window.onload = ->
  FW.myWorld = new FW.World()
  FW.myWorld.animate()
  FW.main = new FW.Main()
  infoEl = document.getElementsByClassName('infoWrapper')[0]
  infoShowing = false
  document.onclick = (event)-> 
    el = event.target;
    if (el.className is "icon") 
      infoEl.style.display = if infoShowing then 'none' else 'block'
      infoShowing = !infoShowing;

FW.Main = class Main
  constructor: ->
    if soundOn
      #Put a sound you want from soundcloud here
      SC.stream "/tracks/north-atlantic-drift-canvas-02", (sound)->
        if soundOn
          sound.play()





