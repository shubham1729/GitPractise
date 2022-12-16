module.exports = async function (req,res,next) {
    return new Promise(resolve, reject) {
        if(!req.query) {
            reject('No content found!');
        }
        else resolve(res.status(200));
    }
}
