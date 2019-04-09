var oDiv = document.getElementsByTagName('div')[0];
oDiv.style.height = '500px';
oDiv.style.width = '500px';
oDiv.style.borderRadius = '50%';
oDiv.style.backgroundColor = 'red';
oDiv.style.textAlign = 'center';
oDiv.style.lineHeight = '500px';
oDiv.style.fontSize = '200px';
oDiv.style.color = 'white';

var count = 0;
oDiv.onclick = function () {
    count ++;
    if(count % 2 == 1) {
        this.style.backgroundColor = 'green';
        this.innerHTML = '我';
    }else{
        
        this.style.backgroundColor = 'purple'; 
        this.innerHTML = '爱你';
    }
}