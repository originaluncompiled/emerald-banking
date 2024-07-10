import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Dashboard = () => {
  const loggedIn = { firstName: 'Carsten', lastName: 'Dold', email: 'itsreallycarsten@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'to Emerald!'}
            subtext="Access and Manage Your Account & Transactions."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35} //UTILS.TS has the "FormatAmount" function <- make it dynamically change currency
          />
        </header>

        RECENT TRANSACTION
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 123.50 }]}
      />
    </section>
  )
}

export default Dashboard