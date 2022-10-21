import { Component } from "react";

export class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('mount run')
    }
    componentWillUnmount() {
        console.log('Unmount run')
    }
    render() {
        console.log('props: ',this.props);
        return ;
    }
};