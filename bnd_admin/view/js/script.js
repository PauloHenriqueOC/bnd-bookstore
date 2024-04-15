import { getBookList } from "../../domain/get_book_list_uc.js";
import { getCategList } from "../../domain/get_cathegory_list_uc.js";
import { setNewBook } from "../../domain/set_new_book_uc.js";

import { toggleDetails, toggleForm, toggleEmptyState } from "./toggle_utils.js";


const emptyContainer = document.querySelector('#empty-item-container')
const selectedItemContainer = document.querySelector('#selected-item-container')
const newBookForm = document.querySelector('#book-edit-form')
const insertItemBtn = document.querySelector('#new-item-btn')
const booksOptionBtn = document.querySelector('#books-option-btn')
const categOptionBtn = document.querySelector('#categ-option-btn')
const formHeader = document.querySelector('#form-header')
const saveBtnForm = document.querySelector('#save-form-btn')
const editBtnForm = document.querySelector('#edit-form-btn')
const deleteBtnForm = document.querySelector('#delete-form-btn')
const cancelBtnForm = document.querySelector('#cancel-form-btn')

const listItems = document.querySelector('#list-items')

const bookList = await getBookList()
const categList = await getCategList()

const option = {
    book: 'book-option',
    categ: 'categ-option'
}

await onClickOption(option.book)

booksOptionBtn.addEventListener('click', () => {
    onClickOption(option.book)
})

categOptionBtn.addEventListener('click', () => {
    onClickOption(option.categ)
})

insertItemBtn.addEventListener('click', () => {
    onClickInsertItem()
})

cancelBtnForm.addEventListener('click', () => {
    toggleEmptyState()
})

editBtnForm.addEventListener('click', () => {
    onCLickEditItemForm()
})

saveBtnForm.addEventListener('click', () => {
    onClickSaveBtnForm()
})

async function onClickOption(value) {
    if (value === option.book) {
        booksOptionBtn.classList.add('option-selected')
        categOptionBtn.classList.remove('option-selected')

        appendList(bookList, value)
    }

    if (value === option.categ) {
        categOptionBtn.classList.add('option-selected')
        booksOptionBtn.classList.remove('option-selected')

        appendList(categList, value)
    }
    
}

function appendList(list, optionValue) {
    listItems.innerHTML = ''

    list.forEach(element => {
        const templateString = `
            <li>
                <div id="li-item-container">
                    <p id="item-title">${ optionValue === option.book ? element.title : element.name }</p>
                    <p id="item-code">#${ optionValue === option.book ? element.id : element.id }</p>
                </div>
            </li>
        `
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(templateString, "text/html")
        const item = htmlTemplate.querySelector("li")

        listItems.appendChild(item)
    });

    // Add event for each item
    const itemsList = document.querySelectorAll('#items-container li')
    itemsList.forEach((item) => {
        const title = item.querySelector('#item-title')
        const code = item.querySelector('#item-code')

        title.addEventListener('click', () => {
            const id = parseInt(code.innerHTML.replace('#', ''))
            setDetails(id, optionValue)
        })
    })
}

function onClickInsertItem() {
    toggleForm()

    const titleInput = document.querySelector('#book-name')
    const authorInput = document.querySelector('#book-author')
    const cathegoryOptions = document.querySelector('#cathegory-options')

    titleInput.value = ''
    authorInput.value = ''
    cathegoryOptions.innerHTML = ''

    categList.forEach(element => {
        const templateString = `<option value="${ element.id }">${ element.name }</option>`
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(templateString, "text/html")
        const item = htmlTemplate.querySelector("option")

        cathegoryOptions.appendChild(item)
    })
}

function onClickSaveBtnForm() {
    const titleInput = document.querySelector('#book-name')
    const authorInput = document.querySelector('#book-author')
    const cathegoryOptions = document.querySelector('#cathegory-options')

    setNewBook(
        titleInput.value,
        authorInput.value,
        cathegoryOptions.value
    )
}

async function setDetails(id, optionValue) {
    toggleDetails()
    
    const title = document.querySelector('#header-title')
    const code = document.querySelector('#header-id')
    const firstLabel = document.querySelector('#first-label')
    const firstValue = document.querySelector('#first-value')
    const secondLabel = document.querySelector('#second-label')
    const secondValue = document.querySelector('#second-value')

    const item = optionValue === option.book ? 
        bookList.find((obj) => obj.id === id) : 
        categList.find((obj) => obj.id === id)

    title.innerHTML = `${ optionValue === option.book ? item.title : item.name }`
    code.innerHTML = `#${ optionValue === option.book ? item.id : item.id }`
    firstLabel.innerHTML = `${ optionValue === option.book ? 'Autor:' : 'Descrição:' }`
    firstValue.innerHTML = `${ optionValue === option.book ? item.author : item.description }`
    secondLabel.innerHTML = `${ optionValue === option.book ? 'Categoria:' : 'Data de registro:' }`
    secondValue.innerHTML = `${ optionValue === option.book ? item.nameCateg : item.registerDate }`
}

function onCLickEditItemForm() {
    toggleForm()

    const idText = document.querySelector('#header-id').innerHTML.replace('#', '')
    const id = parseInt(idText)

    const titleInput = document.querySelector('#book-name')
    const authorInput = document.querySelector('#book-author')
    const cathegoryOptions = document.querySelector('#cathegory-options')

    const book = bookList.find((obj) => obj.id === id)

    titleInput.value = book.title
    authorInput.value = book.author

    cathegoryOptions.innerHTML = ''
    categList.forEach(element => {
        const templateString = `<option value="${ element.id }" ${ element.id === id ? 'selected' : '' } >${ element.name }</option>`
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(templateString, "text/html")
        const item = htmlTemplate.querySelector("option")

        cathegoryOptions.appendChild(item)
    })
}