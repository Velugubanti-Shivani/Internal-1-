import { LayoutDashboard, BarChart3, ShoppingCart, Users, Boxes, Activity, Settings, ShieldCheck } from "lucide-react";

const links=[
 ["Overview",LayoutDashboard],["Analytics",BarChart3],["Orders",ShoppingCart],
 ["Customers",Users],["Inventory",Boxes],["Monitoring",Activity]
];

export default function Sidebar(){
 return <aside className="sidebar">
   <div className="brand"><div className="brand-mark"><ShieldCheck size={20}/></div><div><b>FaultGuard</b><span>Operations Center</span></div></div>
   <small className="nav-label">WORKSPACE</small>
   <div className="nav-list">{links.map(([name,Icon],i)=><div className={"nav-item "+(i===0?"active":"")} key={name}><Icon size={17}/>{name}</div>)}</div>
   <div className="sidebar-bottom"><div className="nav-item"><Settings size={17}/>Settings</div><div className="profile"><div className="avatar">SG</div><div><b>System Admin</b><span>Administrator</span></div></div></div>
 </aside>;
}