//手写封装一个ajax请求
export default function request(config){
    const baseURL = 'http://123.207.32.32:8000';
    return new Promise((resolve,reject)=>{
        let xml = new XMLHttpRequest();
        xml.open('GET',baseURL+config);
        xml.onreadystatechange = ()=>{
            if(xml.readyState === 4){
                if(xml.status === 200){
                    resolve(JSON.parse(xml.responseText));
                }else{
                    reject('200');
                }
            }else if(xml.status === 404 || xml.status === 500){
                reject(new Error('not found'));
            }
        }
        xml.send();
    })
}