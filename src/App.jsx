import {useState} from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WidgetBoundary from "./components/WidgetBoundary";
import KPIs from "./components/KPIs";
import Revenue from "./components/Revenue";
import Health from "./components/Health";
import Transactions from "./components/Transactions";
import Notifications from "./components/Notifications";
import Incident from "./components/Incident";

export default function App(){
 const [revenueCrash,setRevenueCrash]=useState(false);
 return <div className="shell"><Sidebar/><div className="main"><Header/><main>
  <div className="title"><div><small>OPERATIONS / OVERVIEW</small><h1>Resilience command center</h1><p>Monitor business performance, infrastructure health and isolated UI failures.</p></div><button className="demo" onClick={()=>setRevenueCrash(true)}>Simulate revenue failure</button></div>
  <WidgetBoundary name="KPI Metrics"><KPIs/></WidgetBoundary>
  <div className="cols"><WidgetBoundary name="Revenue Analytics"><Revenue crash={revenueCrash}/></WidgetBoundary><WidgetBoundary name="System Health"><Health/></WidgetBoundary></div>
  <div className="cols"><WidgetBoundary name="Recent Transactions"><Transactions/></WidgetBoundary><WidgetBoundary name="Notifications"><Notifications/></WidgetBoundary></div>
  <WidgetBoundary name="Incident Center"><Incident/></WidgetBoundary>
 </main></div></div>;
}