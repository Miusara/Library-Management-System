import React from  "react";
import '../Home.css';

function Home() {
    return(
    <>
     <div class = "pg">
        <div class="box1"></div>
        <div class="box2">
            <a href="/add" class="button"><span>Books Management</span></a>
            <a href="#" class="button"><span>Transaction Management</span></a>
            <a href="#" class="button"><span>Membership Management</span></a>
            <a href="#" class="button"><span>Payment Management</span></a>
        </div>
     </div>
    </>
  )
}

export default Home;