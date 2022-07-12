/* eslint-disable @next/next/no-img-element */
function Post({ date, image, title }) {
    let { file, description } = image;

    return (
        <div className="post">
            {/* <img alt={description} src={`https:${file.url}`} /> */}
            <div className="description">{description}</div>
            <h2>{title}</h2>
            <p>{date.substring(0, 10)}</p>
        </div>
    );
}

export default Post;