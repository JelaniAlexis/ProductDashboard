import './Sidebar.css';

const Sidebar = ({navItems, buttonText}) => {
    let navItemsToRender = navItems.map(item => {
        let notification = item.notifications > 0 ? <div className="sidebar__notification">{item.notifications}</div> : null;

        return(
            <li key={item.name} className="sidebar__li">
                <a href="" className="sidebar__link">{item.name}{notification}</a>
            </li>
        )
    });
    return(
        <section className="sidebar">
            <nav className="sidebar__nav">
                <ul className="sidebar__ul">
                    {navItemsToRender}
                </ul>
            </nav>

            <button className="sidebar__premium">{buttonText}</button>
        </section>
    )
}

export default Sidebar;