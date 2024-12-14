


document.getElementById('dipojit-button').addEventListener('click', function(){
     const dipojit=   document.getElementById('user-dipojit');
     const dipojitValue=dipojit.value;
     const dipojitInner=parseFloat(dipojitValue);

     //work for dipojit amount
     const dipAmnt = document.getElementById('dipojit-amount')
    const dipAmntInner = dipAmnt.innerText;
    const dipAmntInnerPars = parseFloat(dipAmntInner);
    const totalDipojitAmaount=dipojitInner+dipAmntInnerPars
     // calculation
    dipAmnt.innerText=totalDipojitAmaount
    dipojit.value="";

    // mainas widrow to blance
    const blance=document.getElementById('total-blace');
    const blaceInner=blance.innerText;
    const blaceInnerPars=parseFloat(blaceInner);
    //calculation dipojit and blance
    blance.innerText=blaceInnerPars+dipojitInner;

    
    })
//     let's work for widrow

document.getElementById('widrow-button').addEventListener('click',function(){
     
     const widrow = document.getElementById('user-widrow');
     const widrowValue= widrow.value;
     const widrowValuePras=parseFloat(widrowValue)
     

     //get thie widrow amount
     const widrowAmnt= document.getElementById('widrow-amount');
     const widrowInner = widrowAmnt.innerText;
     const widrowInnerPars=parseFloat(widrowInner);
     // calculation
          widrowAmnt.innerText=widrowValuePras+widrowInnerPars;
          widrow.value='';

     // mainas widrow to blance
     const blance=document.getElementById('total-blace');
     const blaceInner=blance.innerText;
     const blaceInnerPars=parseFloat(blaceInner);

     // calculation
     blance.innerText=blaceInnerPars-widrowValuePras;

     console.log(blance)

     

})