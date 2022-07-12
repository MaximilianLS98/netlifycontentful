function Post({ description, title }) {
    // let { file, imgDescription } = image;

    return (
        <div className="post">
            {/* <img alt={imgDescription} src={`https:${file.url}`} /> */}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Post;