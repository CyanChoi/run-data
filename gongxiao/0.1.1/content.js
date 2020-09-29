console.log('aaa')
function aa(){
    alert('aaa');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "abc", true);
    xhr.setRequestHeader('uid', '2020092snlmmn');
    xhr.setRequestHeader('ec-token', '46d9c4a');
    xhr.onreadystatechange = function() {
        console.log('xhr-----------------',xhr)
      // if (xhr.readyState == 4) {
      //   // innerText不会给攻击者注入HTML元素的机会.
      //   document.getElementById("resp").innerText = xhr.responseText;
      // }
    }
    xhr.send();
}
window.onload = function(){


    document.getElementById("J_run").onclick = ()=>{
        aa();
    };




}
