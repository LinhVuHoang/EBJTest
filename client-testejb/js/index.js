document.addEventListener('DOMContentLoaded',function (){


    var tableBody = document.getElementById('my-table-data');
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if(xmlHttpRequest.readyState ==4 && xmlHttpRequest.status ==200){
            var data = JSON.parse(xmlHttpRequest.responseText);
            var newcontent ='';
            for(let i =0;i<data.length;i++){
                let value =data[i].loanamount*data[i].rate*(Math.pow(data[i].loanamount+data[i].rate,data[i].period)/(Math.pow(data[i].loanamount+data[i].rate,data[i].period)-1))*(data[i].loanamount/12);
                newcontent +=`<tr>
<td>${data[i].loanamount}</td>
<td>${data[i].period}</td>
<td>${data[i].rate}</td>
<td>${value}</td>
</tr>
`;
            }
            tableBody.innerHTML = newcontent;
        }
    }
    xmlHttpRequest.open('get','http://localhost:8080/api/v1/loans',false)
    xmlHttpRequest.send();
})