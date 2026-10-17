export const starterServices = [
  {id:'s1',name:'Wash & Fold',category:'Laundry',type:'kg',price:75,icon:'shirt'},
  {id:'s2',name:'Wash & Dry',category:'Laundry',type:'kg',price:95,icon:'washing-machine'},
  {id:'s3',name:'Ironing',category:'Care',type:'piece',price:25,icon:'wind'},
  {id:'s4',name:'Bedsheet',category:'Bedding',type:'piece',price:120,icon:'bed-double'},
  {id:'s5',name:'Comforter',category:'Bedding',type:'piece',price:260,icon:'layers'},
  {id:'s6',name:'Special Care',category:'Care',type:'piece',price:180,icon:'sparkles'}
];
export const starterCustomers = [
  {id:'c1',name:'Maria Santos',phone:'0917 234 5678',address:'Quezon City',notes:'Separate delicate items'},
  {id:'c2',name:'Juan Dela Cruz',phone:'0918 456 7890',address:'Makati City',notes:''},
  {id:'c3',name:'Ana Reyes',phone:'0919 876 5432',address:'Pasig City',notes:'Use mild detergent'},
  {id:'c4',name:'Paolo Garcia',phone:'0920 123 4567',address:'Quezon City',notes:''},
  {id:'c5',name:'Sofia Mendoza',phone:'0921 345 6789',address:'Mandaluyong',notes:''}
];
const isoDays = (offset)=>{let d=new Date();d.setDate(d.getDate()+offset);return d.toISOString()};
export const starterOrders = [
 {id:'LB-1001',customerId:'c1',customerName:'Maria Santos',channel:'Walk-in',items:[{name:'Wash & Fold',qty:5,unit:'kg',price:75,total:375}],subtotal:375,rushFee:0,customFee:0,discount:0,total:375,payments:[{amount:375,method:'GCash',date:isoDays(-1)}],status:'Ready',createdAt:isoDays(-1),dueAt:isoDays(0),notes:''},
 {id:'LB-1002',customerId:'c2',customerName:'Juan Dela Cruz',channel:'Pickup / Delivery',items:[{name:'Wash & Dry',qty:7,unit:'kg',price:95,total:665}],subtotal:665,rushFee:100,customFee:0,discount:0,total:765,payments:[{amount:300,method:'Cash',date:isoDays(0)}],status:'Washing',createdAt:isoDays(0),dueAt:isoDays(1),notes:'Pickup from reception'},
 {id:'LB-1003',customerId:'c3',customerName:'Ana Reyes',channel:'Walk-in',items:[{name:'Ironing',qty:8,unit:'piece',price:25,total:200}],subtotal:200,rushFee:0,customFee:0,discount:0,total:200,payments:[],status:'Received',createdAt:isoDays(0),dueAt:isoDays(2),notes:''},
 {id:'LB-1004',customerId:'c4',customerName:'Paolo Garcia',channel:'Walk-in',items:[{name:'Comforter',qty:2,unit:'piece',price:260,total:520}],subtotal:520,rushFee:0,customFee:0,discount:0,total:520,payments:[{amount:520,method:'Card',date:isoDays(-2)}],status:'Released',createdAt:isoDays(-3),dueAt:isoDays(-1),notes:''},
 {id:'LB-1005',customerId:'c5',customerName:'Sofia Mendoza',channel:'Walk-in',items:[{name:'Bedsheet',qty:3,unit:'piece',price:120,total:360}],subtotal:360,rushFee:0,customFee:0,discount:0,total:360,payments:[{amount:360,method:'Cash',date:isoDays(-1)}],status:'Drying',createdAt:isoDays(-1),dueAt:isoDays(0),notes:''}
];
export const money=n=>'₱'+Number(n||0).toLocaleString('en-PH',{minimumFractionDigits:2,maximumFractionDigits:2});
export const paid=o=>(o.payments||[]).reduce((s,p)=>s+Number(p.amount),0);
export const balance=o=>Math.max(0,Number(o.total)-paid(o));
export const day=s=>s?new Date(s).toLocaleDateString('en-PH',{month:'short',day:'numeric',year:'numeric'}):'—';
export const statuses=['Received','Washing','Drying','Ready','Released'];
