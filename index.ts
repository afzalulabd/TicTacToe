window.onload=()=>{
    let tic = new tictactoe();
    let playbutton:HTMLButtonElement=<HTMLButtonElement> document.getElementById("replay");
    playbutton.onclick=()=>{tic.allclear()};
    let box1:HTMLButtonElement = <HTMLButtonElement> document.getElementById('1');
    box1.onclick=()=>{tic.print("1")};
    let box2:HTMLButtonElement =<HTMLButtonElement> document.getElementById('2');
    box2.onclick=()=>{tic.print("2")};
    let box3:HTMLButtonElement =<HTMLButtonElement> document.getElementById('3');
    box3.onclick=()=>{tic.print("3")};
    let box4:HTMLButtonElement =<HTMLButtonElement> document.getElementById('4');
    box4.onclick=()=>{tic.print("4")};
    let box5:HTMLButtonElement =<HTMLButtonElement> document.getElementById('5')
    box5.onclick=()=>{tic.print("5")};
    let box6:HTMLButtonElement =<HTMLButtonElement> document.getElementById('6')
    box6.onclick=()=>{tic.print("6")};
    let box7:HTMLButtonElement =<HTMLButtonElement> document.getElementById('7')
    box7.onclick=()=>{tic.print("7")};
    let box8:HTMLButtonElement =<HTMLButtonElement> document.getElementById('8')
    box8.onclick=()=>{tic.print("8")};
    let box9:HTMLButtonElement =<HTMLButtonElement> document.getElementById('9')
    box9.onclick=()=>{tic.print("9")};
}

class tictactoe{
    manualcount :number=0;
    x : any;
    winval:string="";
    wholearr = ["123","456","789","159","357","369","258","147"] ;
    winarr:string[]=[];
    alreadyselected:string[]=[];
    myVar:number=0;
  
   
   

     filterXO(){
        const box = document.querySelectorAll(".box");
         let totalX="";  let totalO="";
            box.forEach(val => {
             if(val.innerHTML==='X'){
               console.log(val.id, val.innerHTML);
               totalX+=val.id;
              
             }else if(val.innerHTML==='O'){
               console.log(val.id, val.innerHTML);
               totalO+=val.id;
             }
           });
           if(!this.verify(totalX)){
               if(this.verify(totalO)){
                   this.selectWinnerBoxes();
               }
           }else{
               this.selectWinnerBoxes();
           }   
        }
    

        selectWinnerBoxes() {
            this.winarr=this.winval.split("");
           let first:HTMLElement=<HTMLElement> document.getElementById(this.winarr[0]);
           first.classList.add("win");
           let second:HTMLElement=<HTMLElement> document.getElementById(this.winarr[1]);
           second.classList.add("win");
           let third:HTMLElement=<HTMLElement> document.getElementById(this.winarr[2]);
           third.classList.add("win");
           let replay:HTMLElement =<HTMLElement> document.getElementById("turn")
           replay.innerHTML = third.innerHTML+" is a winner";
        }
       
         verify(total:string){
           let inarr=[];
           let val:boolean=false;
           console.log("manualcount : "+this.manualcount)
               if(this.manualcount===3){
               val=(this.wholearr.indexOf(total) !== -1);
               this.winval=total;
               console.log(val)
               }else{
                   inarr.push(total.slice(1, 4))
                   inarr.push(total.slice(0, 3))
                   inarr.push(total.split("")[0]+total.slice(2, 4))
                   inarr.push(total.slice(0, 2)+total.split("")[3])
                   console.log(inarr)
                   for(var i=0;i<inarr.length;i++){
       
                       if(this.wholearr.indexOf(inarr[i] )!== -1){
                           console.log(inarr[i]+" : "+(this.wholearr.indexOf(inarr[i])!== -1))
                           val=(this.wholearr.indexOf(inarr[i])!== -1);
                           this.winval=inarr[i];
                           break;
                       }else{
                           console.log(inarr[i]+" : "+(this.wholearr.indexOf(inarr[i])!== -1))
                           val=(this.wholearr.indexOf(inarr[i]) !== -1);
                       }
                   }
                   console.log(val)   
               }
            return val;
        }

      print(idval:string){
        let replay:HTMLElement =<HTMLElement> document.getElementById("turn");
        if(!((replay.innerHTML).indexOf("is a winner")!== -1)){
          let enterval:HTMLElement =<HTMLElement> document.getElementById(idval);
          enterval.innerHTML = "X";
          this.manualcount++;
          this.computer(idval);
        }else{
         this.allclear(); 
        }
    }

         computer(getid :string){
            this.alreadyselected.push(getid);
            console.log("getid : "+getid);
            this.x = Math.floor((Math.random() * 9) + 1);
           if(this.manualcount<5){
               this.myVar = setInterval(()=>this.includescheck(this.x), 10);    
           } 
        }
           
        
         includescheck(x:any){
   
            console.log("inside includes check : "+this.alreadyselected)
            if(this.alreadyselected.indexOf(x.toString()) !== -1){
            x = Math.floor((Math.random() * 9) + 1);
            console.log("Inside includes condn : "+x)
             }
        
          if(!(this.alreadyselected.indexOf(x.toString()) !== -1)){
              console.log("clearinterval")
              clearInterval(this.myVar);
              let computerval:HTMLElement =<HTMLElement> document.getElementById(x.toString())
              computerval.innerHTML = "O";
              this.alreadyselected.push(x.toString());
              console.log(this.alreadyselected);
              this.filterXO();
          }
        
        }
         allclear(){
            let box1:HTMLElement = <HTMLElement> document.getElementById('1');
            box1.innerHTML = "";
            let box2:HTMLElement =<HTMLElement> document.getElementById('2');
            box2.innerHTML = "";
            let box3:HTMLElement =<HTMLElement> document.getElementById('3');
            box3.innerHTML = "";
            let box4:HTMLElement =<HTMLElement> document.getElementById('4');
            box4.innerHTML = "";
            let box5:HTMLElement =<HTMLElement> document.getElementById('5')
            box5.innerHTML = "";
            let box6:HTMLElement =<HTMLElement> document.getElementById('6')
            box6.innerHTML = "";
            let box7:HTMLElement =<HTMLElement> document.getElementById('7')
            box7.innerHTML = "";
            let box8:HTMLElement =<HTMLElement> document.getElementById('8')
            box8.innerHTML = "";
            let box9:HTMLElement =<HTMLElement> document.getElementById('9')
            box9.innerHTML = "";
            if(this.winarr.length>1){
            let winbox1:HTMLElement =<HTMLElement> document.getElementById(this.winarr[0]);
            winbox1.classList.remove("win");
            let winbox2:HTMLElement =<HTMLElement> document.getElementById(this.winarr[1]);
            winbox2.classList.remove("win");
            let winbox3:HTMLElement =<HTMLElement> document.getElementById(this.winarr[2]);
            winbox3.classList.remove("win");
            let replay:HTMLElement =<HTMLElement> document.getElementById("turn")
            replay.innerHTML ="Play";
            }
            this.alreadyselected=[];
            this.manualcount=0;
         }

}
    


