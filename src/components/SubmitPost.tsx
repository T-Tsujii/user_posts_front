const SubmitPost: React.FC = () => {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 select-none">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="post-body">
          内容
        </label>
        <input id="post-body" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight duration-300 focus:outline-none focus:ring" />
      </div>
      <div>
        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded duration-300 focus:outline-none">
          送信
        </button>
      </div>
    </form>
  );
};

export { SubmitPost };
