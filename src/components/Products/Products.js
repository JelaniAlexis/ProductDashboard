import './Products.css';

const Products = ({ headerText, buttonSymbol, buttonText, productCards, onButtonClicked}) => {

    let productCardsToRender = productCards.map(product => {

        if (product.name.toLowerCase() === "placeholder") return (
            <li key={product.id} className="productList__item">
                <button onClick={onButtonClicked} className="productList__button">{buttonSymbol || "*"}</button>
                <p className="productList__text">{buttonText || "Add..."}</p>
            </li>
        )
        return (
            <li key={product.id} className="productList__item">
                <img className='productList__img' src={product.img} alt={product.name}></img>
                <div className="productList__fade">
                    <p className="productList__imgText">{product.name}</p>
                </div>
            </li>
        )
    })
    return (
        <section className="products">
            <header className="header">
                <h1 className="header__h1">{headerText}</h1>
            </header>
            <ul className="productList">
                {productCardsToRender}
            </ul>
        </section>
    )
}

export default Products;