import React from 'react'
import ControlledComp from './Que1/ControlledComp'
import Form from './Que2/Form'
import InputComponent from './Que3/InputComponent'


import Validation from './Que4/Validation'
import Dropdown from './Que5/DropDown'
import Todo from './Que6/Todo'
import SearchFilter from './Que7/SearchFilter'
import Temperature from './Que8/Temperature'

import Sidebar from './Que9/Sidebar'
import LoginForm from './Que10/LoginForm'
import FormDialog from './Que11/FormDialog'
import DataTable from './Que12/DataTable'
import Login from './Que13/Login'
import  {FormValidation } from './Que14/FormValidation'
const Assignment4 = () => {
  return (
    <div>
      <ControlledComp/>
      <Form />
      <InputComponent/>
      <Validation/>
      <Dropdown/>
      <Todo />
      <SearchFilter/>
      <Temperature/>
      <Sidebar/>
      <LoginForm/>
      <FormDialog/>
      <DataTable/>
      <Login/>
      <FormValidation/>
    </div>
  )
}

export default Assignment4
