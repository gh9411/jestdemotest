
module.exports = {
    reporters: [
      'default',
      [ 'jest-junit', {
        outputDirectory: "./output",
        outputName: "report.junit"
      } ]
    ]
};