let frame = 'someFrameValue';  // or undefined

// Constructing an object conditionally including the 'frame' property
let config = {
  type: 'chart',
  width: 800,
  height: 600,
  ...(frame !== undefined ? { frame: frame } : {})
};

console.log(config);
