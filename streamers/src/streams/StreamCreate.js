import React from "react";
import { Field , reduxForm } from 'redux-form';

class StreamCreate extends React.Component{

    renderInput(formprops){
        return <div>
            <label>{formprops.label}</label>
            <input {...formprops.input}  />
            {formprops.meta.touched?<div>{formprops.meta.error}</div>:<></>}
        </div>
    }

    onSubmit = (formValues) => {
        console.log(formValues);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label={"Title"} />
                <Field name="description" component={this.renderInput} label={"Description"} />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const err = {};
    if(!formValues.title){
        err.title = "You must enter a title!";
    }
    if(!formValues.description){
        err.description = " You must enter a description!";
    }
    return err;
}

export default reduxForm({form : 'streamCreate', validate : validate})(StreamCreate);