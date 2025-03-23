import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";



const App = () => {
  const dataSales = [
    { name: "Mon", online: 12, offline: 8 },
    { name: "Tue", online: 18, offline: 12 },
    { name: "Wed", online: 15, offline: 10 },
    { name: "Thu", online: 20, offline: 15 },
    { name: "Fri", online: 25, offline: 18 },
    { name: "Sat", online: 22, offline: 16 },
    { name: "Sun", online: 28, offline: 20 },
  ];

   const data = [
    { name: "Last ", online: 12, offline: 8 },
    { name: "This ", online: 18, offline: 12 },
    { name: "Last", online: 15, offline: 10 },
    { name: "Last", online: 20, offline: 15 },
    { name: "last", online: 25, offline: 18 },
    { name: "Last", online: 22, offline: 16 },
    { name: "This", online: 28, offline: 20 },
  ];

  const targetRealityData = [
    { name: "Jan", reality: 8200, target: 12000 },
    { name: "Feb", reality: 9000, target: 12500 },
    { name: "Mar", reality: 8500, target: 12100 },
    { name: "Apr", reality: 9100, target: 12800 },
  ];

  const topProducts = [
    { id: 1, name: "Home  Range", popularity: 45, sales: "45%", color: "bg-blue-400" },
    { id: 2, name: " Tv", popularity: 29, sales: "29%", color: "bg-green-400" },
    { id: 3, name: " Mobile", popularity: 18, sales: "18%", color: "bg-purple-400" },
    { id: 4, name: " Smartwatches", popularity: 25, sales: "25%", color: "bg-orange-400" },
  ];

 return (
    <div className='flex h-full bg-gray-200'>
      
      
      <div className="side-bar w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-5">Dabang</h2>
        <ul>
          <li className="p-3 bg-blue-500 text-white rounded-md mb-2">Dashboard</li>
          <li className="p-3 hover:bg-gray-200 rounded-md"><i className=" font-semibold text-slate-400 ri-arrow-up-line"></i> Leaderboard</li>
          <li className="p-3 hover:bg-gray-200 rounded-md">Orders</li>
          <li className="p-3 hover:bg-gray-200 rounded-md"> <i className=' font-semibold text-slate-400 ri-expand-left-right-line'></i>Products</li>
          <li className="p-3 hover:bg-gray-200 rounded-md">Sales Reports</li>
          <li className="p-3 hover:bg-gray-200 rounded-md">Messages</li>
          
          <li className="p-3 hover:bg-gray-200 rounded-md"> <i className=" ri-gear "></i>Settings</li>
          
          <li className="p-3 hover:bg-gray-200 rounded-md">Sign Out</li>
        </ul>
      </div>

      

      <main className='w-full p-6 flex flex-col gap-6'>
      <nav className=" p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
        <input type="text" placeholder="Search here.." className=" flex p-2 w-2xl items-center justify-between bg-purple-100 rounded-md" />
        
        <i className="ri-notification-3-line text-xl cursor-pointer"></i>
        <div className="flex items-center gap-2">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className="rounded-full w-8 h-8" />
          <span>User</span>
        </div>
      </div>
      
    </nav>
      <div className=" bg-white p-6 rounded-md shadow-md">
           <h1 className='font-semibold text-3xl'> Today's Sales </h1>
            <h2 className='font-medium text-lg text-slate-400'>Sales Summery</h2>
          <div className='grid grid-cols-4 gap-4'>
                
          <div className=" p-4 bg-red-100 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">$1k</h3>
            <p>Total Sales</p>
          </div>
          <div className=" p-4 bg-amber-100 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">300</h3>
            <p>Total Orders</p>
          </div>
          <div className=" p-4 bg-green-100 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">5</h3>
            <p>Products Sold</p>
          </div>
          <div className=" p-4 bg-purple-100 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">8</h3>
            <p>New Customers</p>
          </div>
            </div>
        </div>
        

         <div className="grid grid-cols-3 gap-4 mt-6">
          <div className=" total-rev p-4 bg-white rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-3">Total Revenue</h3>
            <ResponsiveContainer className="px-2 py-1" width="100%" height={200}>
              <BarChart data={dataSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="online" fill="blue" />
                <Bar dataKey="offline" fill="green" />
              </BarChart>
            </ResponsiveContainer>
              <h3 className=" flex gap-4  items-center justify-center text-lg font-semibold mb-3">Online Sales <span className='flex text-6xl mb-8 text-blue-400'>.</span> Offline Sales <span className=' flex mb-8 text-6xl text-green-400'>.</span></h3>
          </div>

          <div className="Customer-sat p-4 bg-white rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-3">Customer Satisfaction</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="online" stroke="blue" strokeWidth={2} />
                <Line type="monotone" dataKey="offline" stroke="green" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <h3 className=" flex gap-4  items-center justify-center text-lg font-semibold mb-3">Last Month <span className='font-bold'>$3,004</span> <span className='flex text-6xl mb-8 text-blue-400'>.</span>  This Month <span className='font-bold'>$4,504</span> <span className=' flex mb-8 text-6xl text-green-400'>.</span></h3>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Target vs Reality</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={targetRealityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="reality" fill="green" />
            <Bar dataKey="target" fill="yellow" />
          </BarChart>
        </ResponsiveContainer>
        <h3 className=" flex gap-4  items-center justify-center text-lg font-semibold mb-3">Reality Sales <span className='font-bold text text-green-400'>$3,004</span>  Target Sales <span className='font-bold text-amber-400'>$4,504</span> </h3>

      </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="top-product bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold">Top Products</h2>
          <ul>
            {topProducts.map((product) => (
              <li key={product.id} className="flex justify-between items-center py-2 border-b">
                <span>{product.name}</span>
                <div className="w-1/3 bg-gray-200 rounded-full h-2">
                  <div className={`h-2 ${product.color} rounded-full`} style={{ width: `${product.popularity}%` }}></div>
                </div>
                <span>{product.sales}</span>
              </li>
            ))}
          </ul>
        </div>


          <div className="Target-vs-Reality bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Target vs Reality</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={targetRealityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="reality" fill="green" />
            <Bar dataKey="target" fill="yellow" />
          </BarChart>
        </ResponsiveContainer>
        <h3 className=" flex gap-4  items-center justify-center text-lg font-semibold mb-3">Reality Sales <span className='font-bold text text-green-400'>$3,004</span>  Target Sales <span className='font-bold text-amber-400'>$4,504</span> </h3>

      </div>
        </div>
      </main>
      
    </div>
  )
}

export default App
