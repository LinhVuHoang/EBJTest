document.addEventListener('DOMContentLoaded',function (){


    var tableBody = document.getElementById('my-table-data');
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function (){
        if(xmlHttpRequest.readyState ==4 && xmlHttpRequest.status ==200){
            var data = JSON.parse(xmlHttpRequest.responseText);
            var newcontent ='';
            for(let i =0;i<data.length;i++){
                newcontent +=`<tr>
<td>${data[i].loanamount}</td>
<td>${data[i].period}</td>
<td>${data[i].rate}</td>
<script type="text/javascript">
var eim =0
 eim= parseInt(loanamount)*parseFloat(rate)*((pow(parseInt(loanamount)+parseFloat(rate),parseInt(period))/((pow(parseInt(loanamount)+parseFloat(rate),parseInt(period))-1))
        ))*(parseInt(loanamount)/12);
        document.getElementById('eim').innerHTML= eim;
        </script>
<td type="number" id="eim"/>
</tr>`;
            }
            tableBody.innerHTML = newcontent;
        }
    }
    xmlHttpRequest.open('get','http://localhost:8080/api/v1/loans',false)
    xmlHttpRequest.send();
})