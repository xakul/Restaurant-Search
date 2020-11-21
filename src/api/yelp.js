import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization: 'Bearer PeX_MCvaDWtoYUpFedbnIjiI7zaXiJXNU3zUNkAWeprLYunyKkA61sk8VQFBSOgncaF10tZKCemstttj5urlnfkYCIn-p_UqwB1CvN2Ks14vmoe1-IpagneSAkKxX3Yx'
    }
});
