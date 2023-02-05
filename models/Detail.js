const mongoose = require('mongoose');
const Detail = mongoose.Schema({
    brandName : String,
    brandIconUrl : String,
    links: [
        {
            label : String,
            url : String,
        },
    ],
});

const detail = mongoose.model('detai', Detail);
// module.exports = mongoose.model("detail", Detail);

module.exports = detail;