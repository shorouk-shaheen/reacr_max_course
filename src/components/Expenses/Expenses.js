import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020')

    const filterByYear = (selecedYear) => {
        setSelectedYear(selecedYear)
    }
    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === selectedYear)
    return (
        <div>
            <li>
            <Card className="expenses">
                <ExpenseFilter selected= {selectedYear} onSelectYear={filterByYear}/>
                <ExpensesList items = {filteredExpenses}/>
            </Card>
            </li>
        </div>
    )
}

export default Expenses;