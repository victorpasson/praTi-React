import classes from "./Main.module.css"

//const books = ["O Hobbit", "Harry Potter", "Nárnia"]

const Main = ({props}) => {

    //const chosenBook = Math.random() > 0.5 ? books[0] : books[1];

    return (
        <div>
            <h1 className={classes.HelloWorld}>Livro Escolhido</h1>
            <p>
                {props.author}
            </p>
            <p>
                {props.favoriteBook}
            </p>
        </div>
    )
}

export default Main;