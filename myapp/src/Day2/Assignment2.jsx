import React from 'react'
import Counter from './Que1/Counter'
import PersonForm from './Que2/PersonForm'
import Todos from './Que3/Todo'
import RandomNumberGenerator from './Que4/RandomNumberGenerator'
import StepCounter from './Que5/StepCounter'
import Clock from './Que6/Clock'
import Notification from './Que7/Notification'
import Slideshow from './Que8/Slideshow'
import Switcher from './Que9/Switcher'
import { ThemeProvider } from './Que9/ThemeProvider'

import { CartProvider } from './Que11/CartContext'
import Products from './Que11/Products' 
import Cart from './Que11/Cart'
import VoteReducer from './Que12/VoteReducer'
import Parent from './Que13/Parent'
import StudentList from './Que15/StudentList'
import EmployeeSalary from './Que16/EmployeeSalary'
import Storage from './Que18/Storage'
import CountDownTimer from './Que19/CountDownTimer'
import TaskList from './Que14/TaskList'
import LanguageSwitcher from './Que10/LanguageSwitcher'
import CopyButton from './Que17/CopyButton'



const imageUrls = 
["https://avatar.iran.liara.run/public/job/police/male",
"https://avatar.iran.liara.run/public/job/police/female",
"https://avatar.iran.liara.run/public/job/lawyer/male"]

<<<<<<< HEAD
function Assignment2() {
  return (
    <div>
      {/* <Counter/>
      <PersonForm />
      <Todos/>
      <RandomNumberGenerator/>
      <StepCounter/> */}
      <Clock/>
      {/* <Notification/>
=======

const tasks = [
  { name: "Eat", isCompleted: false },
  { name: "Sleep", isCompleted: false },
  { name: "Repeat", isCompleted: false },
];
function Assignment2() {
  return (
    <div>
      <Counter/>
      <PersonForm />
      <Todos/>
      <RandomNumberGenerator/>
      <StepCounter/>
      <Clock/>
      <Notification/>
>>>>>>> cd008919a01c623d8ac1c1aa913ff39bf452d124
      <Slideshow images={imageUrls} />

      <ThemeProvider>
         <Switcher/>
      </ThemeProvider>
      <LanguageSwitcher />
      <CartProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <Products />
        <Cart/>
      </div>
    </CartProvider>
    

< VoteReducer/>
<Parent />
<TaskList tasks={tasks}/>
<StudentList /> 
<EmployeeSalary/>
<CopyButton />
<Storage />
<CountDownTimer />
    </div>
  )
}

export default Assignment2
