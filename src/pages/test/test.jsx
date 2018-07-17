import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Toast} from 'antd-mobile'
import { saveFormData, saveImg, clearData } from '@/store/home/action';
import { console_string } from '@/store/test/action';
import { List,InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

const Item = List.Item;
const Brief = Item.Brief;


class test extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        testName: PropTypes.string.isRequired
    }

    handleInput = event => {
        // console.log(this.props.console_string(event.target.value).string)
        this.props.saveFormData(event.target.value,'orderSum')
    }

    render() {
        return (<div>
            {this.props.testName}
            <input type="text" onInput={this.handleInput}/>
        </div>)
    }

    componentDidMount() {
        Toast.info('正在使用antd')
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        testName: state.formData.orderSum,
        // testPhone:state.formData.phoneNo
    }
}

const BasicTestWrapper = createForm()(test);

export default connect(mapStateToProps,{
    console_string,saveFormData
})(BasicTestWrapper)
