const Animation = require('Animation') // animation module
const Scene = require('Scene') // Scene imported

// const TouchGestures = require('TouchGestures')
const sceneRoot = Scene.root

Promise.all([
  sceneRoot.findFirst('out'),
  sceneRoot.findFirst('helice_2'),
  sceneRoot.findFirst('planeTracker0')
])
  .then(function (object) {
    const base = object[0] // assigns out to base
    const rotor = object[1]
    const planeTracker = object[2]

    // Animation : 1) Driver 2) Sampler 3) .animate(Driver, Sampler)

    const baseDriverParameters = {
      durationMilliseconds: 100, // 0.1 sec
      loopCount: Infinity, // infinte loop
      mirror: false
    }

    const bodyDriverParameters = {
      durationMilliseconds: 4000, // 4sec
      loopCount: Infinity,
      mirror: true
    }

    const baseDriver = Animation.timeDriver(baseDriverParameters) // drivers
    const bodyDriver = Animation.timeDriver(bodyDriverParameters)

    var Pi = Math.PI // 3.14
    const baseSampler = Animation.samplers.linear(0, 2 * Pi) // samplers for the base rotor
    const bodySampler = Animation.samplers.linear(-Pi / 6, Pi / 6) // samplers for the body

    // transform
    base.transform.rotationZ = Animation.animate(bodyDriver, bodySampler)
    rotor.transform.rotationZ = Animation.animate(baseDriver, baseSampler)

    baseDriver.start()
    bodyDriver.start()
  })
