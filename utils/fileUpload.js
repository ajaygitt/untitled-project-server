const AWS = require("aws-sdk");
const s3bucket = new AWS.S3({
    accessKeyId: process.env.IAM_ACCESS_KEY,
    secretAccessKey: process.env.IAM_SECRET_KEY,
    Bucket: process.env.AWS_FILES_BUCKET,
});

exports.s3FileUpload = async (req) => {


    return new Promise((resolve, reject) => {

        let file = req.files.resumefile;
        let currentTime = Date.now();

        let name = currentTime + file.name;
        var params = {
            Bucket: process.env.AWS_FILES_BUCKET,
            Key: name,
            Body: file.data,
        };


        s3bucket.upload(params, (err, data) => {
            if (err) {
                reject(err)
                console.log(err)
            }
            else {
                console.log("THIS IS MY FILES PATHHHHH", data.Location);
                resolve(data.Location)

            }
        })

    })

};