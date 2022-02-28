document.addEventListener('DOMContentLoaded',function (){
    var btnSubmit = document.getElementById("btn-submit");
    var txtLoanAmount = document.forms['loan-form']['loanamount'];
    var txtPeriod = document.forms['loan-form']['period'];
    var txtRate = document.forms['loan-form']['rate'];
    var btnsubmit = document.getElementById("btn-submit");
    btnsubmit.onclick = function () {
        var loanamount = txtLoanAmount.value;
        var period = txtPeriod.value;
        var rate = txtRate.value;
        var dataToSend = {
            "loanamount": loanamount,
            "period": period,
            "rate": rate,
        }
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            //kiểm tra khi trạng thái request đã hoàn thành và thành công(status =200) hoặc thất bại (404,500...)
            if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 201) {
                alert('Create product success!');
                window.location.href = "/client-testejb/index.html";
            }
        }
        xmlHttpRequest.open('post','http://localhost:8080/api/v1/loans',false)
        xmlHttpRequest.setRequestHeader('Content-Type','application/json');
        xmlHttpRequest.send(JSON.stringify(dataToSend));
    }
})