class ApiFeatures {
    constructor(query, querystr) {
        this.query = query;
        this.querystr = querystr;
    }

    search() {
        const keyword = this.querystr.keyword ?
            {
                name: {
                    $regex: this.querystr.keyword,
                    $options: 'i'
                }
            }
            : {

            }


        this.query = this.query.find({ ...keyword })
        return this;
    }

    filter() {
        const queryCopy = { ...this.querystr }

        // removing some feilds for category
        const removeFeilds = ['keyword', 'page', 'limit']
        removeFeilds.forEach(key => delete queryCopy[key])

        //filter for price and rating
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`)

        this.query = this.query.find(JSON.parse(queryStr))
        return this;

    }

    pagination(resutPerPage){
        const currentPage =  Number(this.querystr.page) || 1;
        const skip = (resutPerPage) * (currentPage - 1);
        this.query = this.query.limit(resutPerPage).skip(skip)
        return this;
    }


}
module.exports = ApiFeatures