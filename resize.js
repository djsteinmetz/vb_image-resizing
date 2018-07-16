var Jimp = require("jimp");
var watermark = require('dynamic-watermark');
// open a file called "lenna.png"
Jimp.read("DSC_3183-Enfuse.jpg", function (err, lenna) {
    if (err) throw err;
    lenna.resize(1585, 1058)            // resize
         .quality(85)                // set JPEG quality
         .write("DSC_3183-Enfuse-small.jpg"); // save
         var optionsImageWatermark = {
            type: "image",
            source: "DSC_3183-Enfuse.jpg",
            logo: "Watermark.png",
            destination: "proof.jpg",
            position: {
                logoX : 200,
                logoY : 200,
                logoHeight: 500,
                logoWidth: 1000
            }
        };
    watermark.embed(optionsImageWatermark, function(status) {
    //Do what you want to do here
    console.log(status);
    });
});

