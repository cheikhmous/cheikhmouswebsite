(function(){
var q=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
q('.fl').forEach(function(b){b.addEventListener('click',function(){b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')})});
var L=q('.path.sp li'),sd=document.getElementById('sd'),cur=0;
var nx=document.getElementById('nx');function go(i){cur=i;nx.textContent=i===L.length-1?'Opnieuw beginnen':'Volgende stap';L.forEach(function(l,j){l.classList.toggle('on',j<=i);l.firstChild.setAttribute('aria-pressed',j===i)});sd.textContent=L[i].getAttribute('data-d')}
if(L.length){L.forEach(function(l,i){l.addEventListener('click',function(){go(i)})});document.getElementById('nx').addEventListener('click',function(){go((cur+1)%L.length)});go(0)}
var tp=document.getElementById('tp'),tb=q('.tabs button');
tb.forEach(function(b){b.addEventListener('click',function(){tb.forEach(function(o){o.setAttribute('aria-pressed',o===b)});tp.textContent=b.getAttribute('data-t')})});
var cv=document.getElementById('net');if(!cv)return;
var x=cv.getContext('2d'),W,H,N=[],P=[],ca,co,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
function col(){var s=getComputedStyle(document.documentElement);ca=s.getPropertyValue('--a').trim();co=s.getPropertyValue('--o').trim()}
function size(){var r=cv.parentElement.getBoundingClientRect(),d=window.devicePixelRatio||1;W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;x.setTransform(d,0,0,d,0,0);col();var n=Math.max(18,Math.min(55,Math.round(W*H/15000)));N=[];for(var i=0;i<n;i++)N.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35});P=[]}
function draw(){x.clearRect(0,0,W,H);var i,j,a,b,dx,dy,k,D=150;
x.strokeStyle=ca;x.lineWidth=1;
for(i=0;i<N.length;i++)for(j=i+1;j<N.length;j++){dx=N[i].x-N[j].x;dy=N[i].y-N[j].y;k=Math.sqrt(dx*dx+dy*dy);if(k<D){x.globalAlpha=.35*(1-k/D);x.beginPath();x.moveTo(N[i].x,N[i].y);x.lineTo(N[j].x,N[j].y);x.stroke()}}
x.globalAlpha=.8;x.fillStyle=ca;N.forEach(function(n){x.beginPath();x.arc(n.x,n.y,2.6,0,6.3);x.fill()});
x.fillStyle=co;x.globalAlpha=1;P.forEach(function(p){x.beginPath();x.arc(p.a.x+(p.b.x-p.a.x)*p.t,p.a.y+(p.b.y-p.a.y)*p.t,3.6,0,6.3);x.fill()})}
function step(){N.forEach(function(n){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1});
P.forEach(function(p){p.t+=.025});P=P.filter(function(p){return p.t<1});
if(Math.random()<.07){var a=N[Math.floor(Math.random()*N.length)],b=N[Math.floor(Math.random()*N.length)],dx=a.x-b.x,dy=a.y-b.y;if(a!==b&&dx*dx+dy*dy<22500)P.push({a:a,b:b,t:0})}}
function loop(){step();draw();requestAnimationFrame(loop)}
size();if(still)draw();else loop();
window.addEventListener('resize',function(){size();if(still)draw()});
matchMedia('(prefers-color-scheme:dark)').addEventListener('change',function(){col();if(still)draw()});
})();
