//increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
};

//add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        post, 
        author,
        comment
    }
}

//delete comment
export function removeComment(i, postId) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}