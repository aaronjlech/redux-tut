import React from 'react';


const Comments = React.createClass({

   renderComment(comment, i){
      console.log(comment);
      return(
         <div className="comment" key={i}>
            <p>
               <strong>{comment.user}</strong>
               {comment.text}]
               <button className="remove-comment">&times;</button>
            </p>
         </div>
      )
   },

   render(){

      return(
         <div className="comment">
            {this.props.postComments.map(this.renderComment)}
            Im a comment
         </div>
      )
   }

})

export default Comments;
