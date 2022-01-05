const Message = ({ message }) => {
  const formattedDate = new Date(message.timestamp).toLocaleDateString('en-EN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="mt-6">
      <div className="pb-2 text-lg">{message.text}</div>
      <div className="flex">
        <div className="flex flex-1">
          <div className="text-gray-500 dark:text-gray-400">{message.nickname}</div>
          <div className="text-gray-400 dark:text-gray-500">&nbsp;•&nbsp;{formattedDate}</div>
        </div>
        {message.reaction && (
          <div className="text-gray-400">
            Reacted by Florian with : <span className="text-xl">{message.reaction}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
