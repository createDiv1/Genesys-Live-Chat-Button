dkey = "ADD YOUR Deployment KEY";
dRegion = "ADD YOUR REGION";

(function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.com/genesys-bootstrap/genesys.min.js', {
    environment: dkey,
    deploymentId: dRegion
  });

const button = document.createElement('button');
button.style.position = "fixed";
button.style.right = "20px";
button.style.bottom = "20px";
button.style.textAlign = "center";
button.style.borderRadius = "15px";
button.style.backgroundColor = "brown";
button.style.boxShadow = "5px 5px 8px rgba(0,0,0,0.3)";
button.style.color = "white";
button.id = "bcc_custom-launcher";
button.textContent = "Live Chat";
button.onclick = function () {
  Genesys("command", "Messenger.open", {},
    function(o){
     button.style.display = "none";

    },  // if resolved
    function(o){    // if rejected
      Genesys("command", "Messenger.close");
    }
  );
};
document.body.appendChild(button);

Genesys('subscribe','Messenger.opened',function(){
 button.style.display = "none";
});

Genesys("subscribe", "Messenger.closed", function(){
  button.style.display = "block";
});
