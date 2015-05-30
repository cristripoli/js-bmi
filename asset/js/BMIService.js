var BMIService = {
    
    getIndex: function(weight, height) {
        if(typeof(height) !== 'number' && typeof(weight) !== 'number'){
            return null;
        }
        return weight/(height*height);
    },
    
    getDescription: function (index) {
        //TODO to be implemented
        return "";
    }
};