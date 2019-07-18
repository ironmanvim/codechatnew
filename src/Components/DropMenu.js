import React from "react";

class DropMenu extends React.Component {
    render() {
        import('../Assets/css/drop_menu.css');
        return (
            <div className={this.props.show ? "drop-menu": "drop-menu hide"} style={{width: this.props.width, height: this.props.height}}>
                {this.props.children}
                <div className={this.props.arrowType}>

                </div>
            </div>
        );
    }
}
export default DropMenu;