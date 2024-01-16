console.log("[megogo.js] loading...");

window.addEventListener("message", 
  function (pEvent) 
  {
      // if (pEvent.data.method && pEvent.data.method.substr(0, 8) === 'landing:') 
      // {
      //     var methodName = pEvent.data.method.substr(8);
      //     GetLandingMessage(methodName, pEvent.data.data);
      // }
      console.log("[megogo.js] megogoGetMessage", pEvent.data.method + " " + pEvent.data.data)
      if(gameInstance!=null)
      {
        console.log("[megogo.js] megogoGetMessage with gameInstance not null")
        gameInstance.SendMessage('MegogoHelper', 'GetMessage', pEvent.data.method + " " + pEvent.data.data);
      }
      else
      {
        console.log("[megogo.js] megogoGetMessage with gameInstance = null [!!!]")
      }
  }, 
  false);


  
function megogoSendMessage(name, data) 
{
  console.log("[megogo.js] megogoSendMessage", name, data)
  window.parent.postMessage(
  {
      method: name,
      data: data,
  },
  '*');
}

megogoSendMessage("landing:loaded", null);
