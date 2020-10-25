import request from 'network/request.js'

export default function homeRequest(){
    return request('/home/multidata');
}