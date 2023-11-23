import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllImages,
  getSingleImage
} from "../redux/reducers/gallerySlice";
import Header from "./Header";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, []);

  const { images, categories } = useSelector((state) => state.gallery);

  const handleCategories = (id) => {
    dispatch(getSingleImage(id));
  };

  const [activeCategory, setActiveCategory] = useState("all"); // Set initial active category to 'all'

  const handle = (categoryId) => {
    // Update the active category when a button is clicked
    setActiveCategory(categoryId);
    // Additional logic or dispatch if needed
  };

  return (
    <>
      <Header />
      <div className="container my-3">
        <h5 style={{ textAlign: "center", margin: "50px 0" }}>
          Welcome to our online art.This Gallery is dedicated to providing
          photographers, artists, and art collectors with an open place to
          Showcase artwork online{" "}
        </h5>
        <div className="row ">
          <div align="center">
            <button
              onClick={() => {
                handle("all");
                dispatch(getAllImages());
              }}
              className={`btn border ${
                activeCategory === "all" ? "btn-primary" : "btn-default"
              } filter-button`}
              data-filter="all"
            >
              All
            </button>

            {categories &&
              categories.map((item) => {
                return (
                  <button
                    onClick={() => {
                      handle(item.name);
                      handleCategories(item._id);
                    }}
                    className={`btn ${
                      activeCategory === item.name
                        ? "btn-primary"
                        : "btn-default"
                    } filter-button border mx-4 px-1"
                  data-filter="hdpe`}
                  >
                    {item.name}
                  </button>
                );
              })}
          </div>

          <br />

          {images.length > 0 ? (
            images.map((item) => {
              return (
                <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe my-4">
                  <img
                    src={`http://localhost:8000/${item.name}`}
                    className="img img-responsive"
                    height="300px"
                    width="300px"
                  />
                </div>
              );
            })
          ) : (
            <h4 style={{ textAlign: "center", marginTop: "150px" }}>
              No Data Available
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
