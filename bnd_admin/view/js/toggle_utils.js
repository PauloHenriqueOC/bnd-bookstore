
const emptyContainer = document.querySelector('#empty-item-container')
const selectedItemContainer = document.querySelector('#selected-item-container')
const newBookForm = document.querySelector('#book-edit-form')
const formHeader = document.querySelector('#form-header')
const saveBtnForm = document.querySelector('#save-form-btn')
const editBtnForm = document.querySelector('#edit-form-btn')
const deleteBtnForm = document.querySelector('#delete-form-btn')
const cancelBtnForm = document.querySelector('#cancel-form-btn')

export function toggleDetails() {
    emptyContainer.classList.add('hidden-component')
    cancelBtnForm.classList.add('hidden-component')
    saveBtnForm.classList.add('hidden-component')
    newBookForm.classList.add('hidden-component')

    formHeader.classList.remove('hidden-component')
    selectedItemContainer.classList.remove('hidden-component')
    deleteBtnForm.classList.remove('hidden-component')
    editBtnForm.classList.remove('hidden-component')
}

export function toggleForm() {
    emptyContainer.classList.add('hidden-component')
    selectedItemContainer.classList.add('hidden-component')
    deleteBtnForm.classList.add('hidden-component')
    editBtnForm.classList.add('hidden-component')
    formHeader.classList.add('hidden-component')

    newBookForm.classList.remove('hidden-component')
    cancelBtnForm.classList.remove('hidden-component')
    saveBtnForm.classList.remove('hidden-component')
}

export function toggleEmptyState() {
    emptyContainer.classList.remove('hidden-component')

    formHeader.classList.add('hidden-component')
    selectedItemContainer.classList.add('hidden-component')
    newBookForm.classList.add('hidden-component')
    deleteBtnForm.classList.add('hidden-component')
    editBtnForm.classList.add('hidden-component')
    cancelBtnForm.classList.add('hidden-component')
    saveBtnForm.classList.add('hidden-component')
}