var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();//var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    document.getElementById("datetxt").value = date;

function home(){
    window.location='/'
}
function myFunction() {
  document.getElementById("cashtxt").value="";
  document.getElementById("checktxt").value="";
  document.getElementById("subtotaltxt").value="";
  document.getElementById("cashbacktxt").value="";
  document.getElementById("totalxt").value="";
  document.getElementById("nametxt").value="";
  document.getElementById("accounttxt").value="";
}
function myFunction0(){
        var a=0,b=0;
        if(document.getElementById('cashtxt').value!=="")
        {
            a=parseFloat(document.getElementById('cashtxt').value)
        }
        if(document.getElementById('checktxt').value!=="")
        {
            b=parseFloat(document.getElementById('checktxt').value)
        }
        if(a>=0 || b>=0)
        {
            const c=a+b
            document.getElementById('subtotaltxt').value=parseFloat(c)
        }
        else
        {
            alert("Amount must be positive.")
        }
    
        const d=parseFloat(document.getElementById('subtotaltxt').value)
        var e=0;
        if(document.getElementById('cashbacktxt').value!=="")
        {
            e=parseFloat(document.getElementById('cashbacktxt').value)
        }
        if(e<d/2 && e>=0)
        {
            const f=d-e
            document.getElementById('totalxt').value=parseFloat(f)
        }
        else
        {
            alert('Cashback can be availaed less than 50% of subtotal.')
            document.getElementById('cashbacktxt').value=""
        }
        
    }