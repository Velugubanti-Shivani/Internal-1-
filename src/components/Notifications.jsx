import { Bell,Package,CreditCard,AlertCircle } from "lucide-react";
import { useState } from "react";
export default function Notifications(){
 const [fail,setFail]=useState(false);
 if(fail) throw new Error("Notification widget crashed during render.");
 return <section className="panel"><div className="panel-head"><div><small>ACTIVITY</small><h2>Notifications</h2></div><b className="badge">3 new</b></div>
 <div className="notification"><span className="purple"><Package size={16}/></span><div><b>Order dispatched</b><p>#FG-84290 is on its way.</p><small>4 min ago</small></div></div>
 <div className="notification"><span className="green"><CreditCard size={16}/></span><div><b>Payment received</b><p>₹18,450 payment confirmed.</p><small>17 min ago</small></div></div>
 <div className="notification"><span className="orange"><AlertCircle size={16}/></span><div><b>Inventory warning</b><p>SKU-449 is below reorder level.</p><small>31 min ago</small></div></div>
 <button className="fail-btn" onClick={()=>setFail(true)}><Bell size={14}/> Simulate widget failure</button>
 </section>;
}