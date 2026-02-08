import './Header.css';

export default function Header(props) {
    return (
        <header> <h1> {props.title}</h1>
        <div className="navigation">
           
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <h1>This is my first react app</h1>
        </div>
        </header>
    );
}
