import {UserButton } from '@clerk/nextjs'
import React from "react"

function DashHeader() {
    return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>
          
        </div>

        <div>
            <UserButton/>
        </div>
    </div>
    );
}

export default DashHeader;