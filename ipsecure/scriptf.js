(function(){

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

  var canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight;


  var ctx = canvas.getContext("2d");
  //ctx.globalCompositeOperation = "source-over"; //合成方法
  ctx.globalCompositeOperation = "lighter"; //合成方法

  //stats.js
  var stats = new Stats();
  document.body.appendChild( stats.dom );

  var particles = [];
  var pIndex = 0;
  var x, y, frameId;

  //Particle作成
  function Particle(size){
    this.x = canvas.width*Math.random();;
    this.y = canvas.height*Math.random();
    this.vx = 0;
    this.vy = 0;
    this.r = getRandom(-360,360);
    this.gravity = getRandom(0.1,0.2);
    particles[pIndex] = this;
    this.id = pIndex;
    pIndex++;
    this.life = 0;
    this.maxlife = 360;
    this.degree = getRandom(-360,360);
    if (this.r < 0) {
      this.size = Math.floor(getRandom(size/2,size));
    }else{
      this.size = Math.floor(getRandom(size*0.1,size/2));
    }

  };

  Particle.prototype.draw = function(){
    this.degree += getRandom(-2,2);
    this.vx =  Math.cos(this.degree*Math.PI/this.r)*10;
    this.vy =  Math.sin(this.degree*Math.PI/this.r)*10;
    this.vx *= this.gravity;//重力
    this.vy *= this.gravity;//重力
    if (this.r < 0) {
      this.x += this.vx;
      this.y += this.vy;
    }else{
      this.x -= this.vx;
      this.y -= this.vy;
    }



    var grd = ctx.createRadialGradient( this.x+this.size/2,  this.y+this.size/2,  0,  this.x+this.size/2,  this.y+this.size/2, this.size/2);
    grd.addColorStop(0, 'rgba(234, 255, 255, 1)');
    grd.addColorStop(0, 'rgba(234, 255, 79, 0.9)');
    grd.addColorStop(0.8, 'rgba(204, 255, 79, 0.1)');
    grd.addColorStop(1,  'rgba(204, 255, 79, 0)');
    ctx.fillStyle = grd;
    ctx.globalAlpha = Math.abs(Math.sin(this.life*Math.PI/(Math.abs(this.r/4)+30)));
    ctx.beginPath();
    ctx.fillRect( this.x, this.y, this.size, this.size );
    ctx.closePath();
    ctx.fill();
    this.life++;

    if(this.life >= this.maxlife*3/4){
      this.vx *= 2.2;
      this.vy *= 2.2;
      this.x += this.vx;
      this.y += this.vy;
    }

    //lifeがなくなったら紙吹雪を削除
    if(this.life >= this.maxlife){
      delete particles[this.id];
    }
  }





  //GUI
  var params,params_A,params_B,params_C;
  function setGUI(){

    params = {
      'amount': 2,
      'bg_color' : "#000337",
      'size' : 60
    };

    var gui = new dat.GUI();
    gui.add( params, 'amount', 1.0, 10 ).step( 1 );
    gui.addColor( params, 'bg_color');
    gui.add( params, 'size', 5, 100 ).step( 1 );

  }
  setGUI();

  //アニメーション
  function loop(){
    ctx.clearRect(0,0, canvas.width, canvas.height);  //画面の更新
    canvas.style.background = params.bg_color;//背景色変更


    if(frameId % (11-params.amount) == 0){
        new Particle(params.size);
    }

    for(var i in particles){
      particles[i].draw();
    }

    frameId = requestAnimationFrame(loop);
    if(frameId % 2 == 0) { return; }//60fpsを30fpsにする
    stats.update();
  }
  loop();

  //全画面リサイズ
  window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    x = canvas.width / 2;
    y = canvas.height / 2;
  });

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }



})();