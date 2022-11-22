import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, sourcename } =
      this.props;
    return (
      <div className="bg-dark" style={{ margin: "20px", color: "#ffffff" }}>
        <div
          className="card cardcss bg-dark"
          style={{ width: "100%", minHeight: "400px" }}
        >
          <img
            src={
              imgurl
                ? imgurl
                : "https://4.bp.blogspot.com/-8zAqWdOkwBU/X8VAVaj_B0I/AAAAAAAAAD0/U-fgooS2NvQRe7Ug5u6H6JEdsNtnoo4xACK4BGAYYCw/s1600/ailcofficial.com.png"
            }
            class="card-img-top"
            alt="image_not_found"
            style={{ width: "100%", height: "12rem" }}
          />
          <div className="card-body" style={{ padding: "5px" }}>
            <span
              class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{
                zIndex: "1",
                left: "90%",
              }}
            >
              {sourcename}
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : <span>Anonymus</span>} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary bg-dark "
              style={{ color: "orange" }}
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
