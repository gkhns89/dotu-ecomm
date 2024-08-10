import featured1 from "../../assets/images/featuredBlog/blogFeatured-1.jpeg";
import featured2 from "../../assets/images/featuredBlog/blogFeatured-2.jpeg";
import featured3 from "../../assets/images/featuredBlog/blogFeatured-3.jpeg";
const FeaturedBlogData = () => {
  return [
    {
      id: 0,
      picture: featured1,
      nav: { nav1: "Google", nav2: "Tranding", nav3: "New" },
      title: {
        title1: "Koudetat à la Maison #1",
        title2: "(L 'intégrale)",
      },
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "11 April 2021",
      comments: "1 comment",
      moreInfo: "Learn More",
    },
    {
      id: 1,
      picture: featured2,
      nav: { nav1: "Google", nav2: "Tranding", nav3: "New" },
      title: {
        title1: "Koudetat à la Maison #1",
        title2: "(L 'intégrale)",
      },
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "23 April 2022",
      comments: "3 comments",
      moreInfo: "Learn More",
    },
    {
      id: 2,
      picture: featured3,
      nav: { nav1: "Google", nav2: "Tranding", nav3: "New" },
      title: {
        title1: "Koudetat à la Maison #1",
        title2: "(L 'intégrale)",
      },
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "12 May 2023",
      comments: "5 comments",
      moreInfo: "Learn More",
    },
  ];
};

export default FeaturedBlogData;