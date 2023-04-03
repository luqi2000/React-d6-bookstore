import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: " ",
    selected: false
  };

  componentDidMount = () => {
    this.fetchComment();
  };

  fetchComment = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzY0NGY4MWI0MjAwMTM5YjI4MGEiLCJpYXQiOjE2ODA1MjYxODQsImV4cCI6MTY4MTczNTc4NH0.8POGLAsqsgdFy9EaFrkIP5bY6QtVoJt66bn4nmAPwHA"
        }
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
        console.log(data);
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  render() {
    return <CommentList comments={this.state.comments}></CommentList>;
  }
}
export default CommentArea;
