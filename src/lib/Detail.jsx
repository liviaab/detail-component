import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import requests from '../services/requests'
import './Detail.css'

export default class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book: {
        "id": 0,
        "name": "",
        "description": "",
        "author": "",
        "year": null,
        "edition": 0,
        "isbn": null,
        "price": null,
        "dimensions": "",
        "weight": 0,
        "language": ""
      }
    }
  }

  componentDidMount() {
    const { history } = this.props

    if (!history) return

    const bookId = parseInt(history.replace("/", ""))

    const book = requests().get(bookId)
    this.setState({ book })
  }

  render() {
    const { book } = this.state

    return(
      <div className="book-detail">
        <h3>{book.name}</h3>
        <h5>{book.author}</h5>
        <p>{book.description}</p>
        <p>Ano: {book.year} | Edição: {book.edition} | ISBN: {book.isbn}<br/>
          Dimensõs:{book.dimensions} | Peso: {book.weight}g<br/>
          Idioma: {book.language}<br/><br/>
          <strong>Preço: {book.price}</strong>
        </p>
      </div>
    )
  }
}
