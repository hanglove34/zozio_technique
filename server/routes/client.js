const csv=require('csvtojson')

module.exports = {
    getClientInfos: function(req, res) {
        var result = req.body.resultResearch;
        csv({
            output: "line"
        })
        .fromFile("data/Table-Zozio.csv")
        .then((jsonObj)=>{
            return res.status(200).json(jsonObj);
        })
        
    }
}