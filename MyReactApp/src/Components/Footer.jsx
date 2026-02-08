export default function Footer(props) {
    return (
        <footer>
            <p> {props.year} {props.company} </p>
            <p>© 2026 My Website. All rights reserved.</p>

            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </footer>
    );
}
