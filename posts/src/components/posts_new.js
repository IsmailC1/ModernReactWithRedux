import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>Title</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  renderTagsField() {}

  render() {
    return (
      <form>
        <Field name="title" component={this.renderField} />
        <Field name="tags" component={this.renderTagsField} />
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm"
})(PostsNew);
