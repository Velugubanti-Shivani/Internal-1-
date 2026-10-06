import { DollarSign, ShoppingBag, Users, PackageCheck, ArrowUpRight } from "lucide-react";
const data=[
 ["Gross Revenue","₹12.48L","+18.4%",DollarSign],
 ["Total Orders","8,421","+12.8%",ShoppingBag],
 ["Active Customers","5,932","+9.6%",Users],
 ["Fulfilled","96.8%","+2.1%",PackageCheck]
];
export default function KPIs(){
 return <div className="kpis">{data.map(([t,v,c,I])=><div className="kpi" key={t}><div className="kpi-head"><span>{t}</span><em><I size={16}/></em></div><strong>{v}</strong><small><ArrowUpRight size={13}/>{c} <span>vs last month</span></small></div>)}</div>;
}