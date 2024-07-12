import React from "react";

const commentsData = [
  {
    name: "shivam",
    text: "lorem ipsum",
    replies: [],
  },
  {
    name: "shivam",
    text: "lorem ipsum",
    replies: [
      {
        name: "shivam",
        text: "lorem ipsum",
        replies: [],
      },
      {
        name: "shivam",
        text: "lorem ipsum",
        replies: [
          {
            name: "shivam",
            text: "lorem ipsum",
            replies: [
              {
                name: "shivam",
                text: "lorem ipsum",
                replies: [
                  {
                    name: "shivam",
                    text: "lorem ipsum",
                    replies: [
                      {
                        name: "shivam",
                        text: "lorem ipsum",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "shivam",
                    text: "lorem ipsum",
                    replies: [],
                  },
                ],
              },
              {
                name: "shivam",
                text: "lorem ipsum",
                replies: [],
              },
            ],
          },
          {
            name: "shivam",
            text: "lorem ipsum",
            replies: [],
          },
        ],
      },
      {
        name: "shivam",
        text: "lorem ipsum",
        replies: [],
      },
    ],
  },
  {
    name: "shivam",
    text: "lorem ipsum",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-15 h-11"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
