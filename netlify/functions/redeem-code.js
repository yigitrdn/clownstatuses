const crypto=require('crypto');
function safeEqual(a,b){const ba=Buffer.from(a,'hex');const bb=Buffer.from(b,'hex');if(ba.length!==bb.length)return false;return crypto.timingSafeEqual(ba,bb);}
exports.handler=async(event)=>{
 if(event.httpMethod!=='POST')return{statusCode:405,body:'Method not allowed'};
 try{
  const {code}=JSON.parse(event.body||'{}');
  const hash=crypto.createHash('sha256').update(code).digest('hex');
  const hashes=[process.env.CODE1_HASH,process.env.CODE2_HASH].filter(Boolean);
  const match=hashes.some(h=>safeEqual(hash,h));
  if(!match)return{statusCode:400,body:JSON.stringify({ok:false,message:'Kod geçersiz'})};
  return{statusCode:200,body:JSON.stringify({ok:true})};
 }catch(e){return{statusCode:500,body:JSON.stringify({ok:false,message:'Sunucu hatası'})};}
}
