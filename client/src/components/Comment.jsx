import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
        <span className="text-xs text-red-300 hover:text-red-500 cursor-pointer">
          delete
        </span>
      </div>
      <div className="mt-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          voluptates nam? Culpa, labore vel suscipit quod quibusdam iure
          doloribus est architecto perferendis ab velit nesciunt. Ipsa cumque
          sunt molestias reprehenderit?
        </p>
      </div>
    </div>
  );
};

export default Comment;
