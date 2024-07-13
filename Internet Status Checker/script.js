window.addEventListener("load", checkInternetConnection);

function checkInternetConnection(){
    const status = document.getElementById("internet_status");
    const address = document.getElementById("ip_address");
    const strength = document.getElementById("network_strength");

    status.textContent = "Checking...";

    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=>response.json())
        .then((data)=>{

            address.textContent = data.ip;
            status.textContent = "Connected";
    
            const connection = navigator.connection;
            strength.textContent = connection ? connection.downlink + ' mbps' : "Unknown";
        })
        .catch(()=>{
            status.textContent = "Disconnected";
            address.textContent = '-';
            strength.textContent = '-';
        })

    }
    else{
        status.textContent = "Disconnected";
        address.textContent = "-";
        strength.textContent = "-";
    }
}