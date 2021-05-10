import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer TFMkbX1XRT9lP8EiDXO5BrKmzpxXqic4UQXZESs1Wf9Zea09doe1_4A_PYQ8TOcV2f0E1FE3jLf51ch5Ofa23tW-zL1tzEfs08Xgcym08nTMzbZQ6akLsTZRV0-BYHYx'
    }
});


