class Engine {
  constructor (timeStep, update, render) {
    // amount of time that's accumulated since the last update
    this.accumulatedTime = 0
    // the most recent timestamp of loop execution
    this.recentTime = undefined
    // reference to the AFR
    this.animationFrameRequest = undefined
    // frames per second
    this.timeStep = timeStep
    // the update function
    this.update = update
    // whether or not the update function has been called since the last cycle
    this.updated = false
    // the render function
    this.render = render

    // start engine
    this.start = () => {
      this.accumulatedTime = this.timeStep
      this.recentTime = window.performance.now()
      this.animationFrameRequest = window.requestAnimationFrame(this.run)
    }

    // run engine
    this.run = (timeStamp) => {
      this.accumulatedTime += (timeStamp - this.recentTime)
      this.recentTime = timeStamp

      // never allow three full frames to pass without an update
      if (this.accumulatedTime >= this.timeStep * 3) {
        this.accumulatedTime = this.timeStep
      }

      // call update function if enough time has passed
      while (this.accumulatedTime >= this.timeStep) {
        this.accumulatedTime -= this.timeStep
        this.update()
        this.updated = true
      }

      // only draw when the game has updated
      if (this.updated) {
        this.render()
        this.updated = false
      }
      this.animationFrameRequest = window.requestAnimationFrame(this.run)
    }

    // stop engine
    this.stop = () => {
      window.cancelAnimationFrame(this.animationFrameRequest)
    }
  }
}

export { Engine }
