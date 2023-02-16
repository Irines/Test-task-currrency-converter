import "../styles/footer.sass"
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>{`${year} All rights reserved`}</p>
        </footer>
    );
}

export default Footer;