const test = () => {
    const xhr  = new XMLHttpRequest();
    xhr.open('get', '//test.yuanclan.cn', true);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return;
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        }else{
            console.error(xhr.error);
        }
    }
}
window['test'] = test;
