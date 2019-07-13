import React from "react";

class DropMenu extends React.Component {
    render() {
        import('../Assets/css/drop_menu.css');
        return (
            <div className={this.props.show ? "drop-menu": "drop-menu hide"}>
                {this.props.children}
            </div>
        );
    }
}
export default DropMenu;