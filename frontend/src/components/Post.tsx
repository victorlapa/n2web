interface Props {
  username: string;
  children: React.ReactNode;
}

const Post = ({ username, children }: Props) => {
  return (
    <div className="h-60 w-full bg-slate-900 p-4 pt-6 shadow-lg">
      <h6 className="font-bold text-sky-500">{username}</h6>
      <p className="pt-2 text-slate-300">{children}</p>
    </div>
  );
};

export default Post;
