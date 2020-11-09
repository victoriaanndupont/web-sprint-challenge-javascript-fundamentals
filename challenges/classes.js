// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{ constructor(length, width, height) {
    this.length = length
    this.height = height
    this.width = width
}

calcVolume((length, width, height) => {
  return (length * width * height)
})

calcSurfaceArea = ((length, width, height)=>{
  return (2*(length * width + length * height + width * height))
})

  const cuboid = new CuboidMaker (4,5,5)
}
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(CuboidMaker.volume(4,5,5)); // 100
// console.log(CuboidMaker.surfaceArea(4,5,5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.