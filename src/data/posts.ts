export interface Post {
  id: number;
  profileImg: string;
  userName: string;
  postImg: string;
  postTitle: string;
  numberLikes: number;
  description: string;
  hashtags: {id:number, text:string}[];
  numberOfComments: number;
  liked: boolean;
}

export const posts: Post [] = [
    {
      id: 1,
      profileImg: "/images/profile_pictures/1.jpg",
      userName: "user1",
      postImg: "/images/post_pictures/1.jpg",
      postTitle:"product title one",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 2,
      profileImg: "/images/profile_pictures/2.jpg",
      userName: "user2",
      postImg: "/images/post_pictures/2.jpg",
      postTitle: "post title 2",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 3,
      profileImg: "/images/profile_pictures/3.jpg",
      userName: "user3",
      postImg: "/images/post_pictures/3.jpg",
      postTitle: "post title 3",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 4,
      profileImg: "/images/profile_pictures/4.jpg",
      userName: "user4",
      postImg: "/images/post_pictures/4.jpg",
      postTitle: "post title 4",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 5,
      profileImg: "/images/profile_pictures/5.jpg",
      userName: "user5",
      postImg: "/images/post_pictures/5.jpg",
      postTitle: "post title 5",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 6,
      profileImg: "/images/profile_pictures/6.jpg",
      userName: "user6",
      postImg: "/images/post_pictures/6.jpg",
      postTitle: "post title 6",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 7,
      profileImg: "/images/profile_pictures/7.jpg",
      userName: "user7",
      postImg: "/images/post_pictures/7.jpg",
      postTitle: "post title 7",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 8,
      profileImg: "/images/profile_pictures/8.jpg",
      userName: "user8",
      postImg: "/images/post_pictures/8.jpg",
      postTitle: "post title 8",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 9,
      profileImg: "/images/profile_pictures/9.jpg",
      userName: "user9",
      postImg: "/images/post_pictures/9.jpg",
      postTitle: "post title 9",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 10,
      profileImg: "/images/profile_pictures/10.jpg",
      userName: "user10",
      postImg: "/images/post_pictures/10.jpg",
      postTitle: "post title 10",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 11,
      profileImg: "/images/profile_pictures/11.jpg",
      userName: "user11",
      postImg: "/images/post_pictures/11.jpg",
      postTitle: "post title 11",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 12,
      profileImg: "/images/profile_pictures/12.jpg",
      userName: "user12",
      postImg: "/images/post_pictures/12.jpg",
      postTitle: "post title 12",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 13,
      profileImg: "/images/profile_pictures/13.jpg",
      userName: "user13",
      postImg: "/images/post_pictures/13.jpg",
      postTitle: "post title 13",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 14,
      profileImg: "/images/profile_pictures/14.jpg",
      userName: "user14",
      postImg: "/images/post_pictures/14.jpg",
      postTitle: "post title 14",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    {
      id: 15,
      profileImg: "/images/profile_pictures/15.jpg",
      userName: "user15",
      postImg: "/images/post_pictures/15.jpg",
      postTitle: "post title 15",
      numberLikes: 32,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      hashtags: [{id: 1, text:"post"}, {id: 2, text:"nature"}, {id: 3, text:"green"}],
      numberOfComments: 12,
      liked: false 
    },
    
  ];
  