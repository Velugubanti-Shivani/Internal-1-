import { Search, Bell, CircleHelp } from "lucide-react";
export default function Header(){
 return <header className="header">
  <div className="search"><Search size={16}/><input placeholder="Search orders, customers, incidents..."/><kbd>⌘ K</kbd></div>
  <div className="header-right"><span className="operational"><i/>All systems operational</span><CircleHelp size={18}/><div className="bell"><Bell size={18}/><b>3</b></div></div>
 </header>;
}