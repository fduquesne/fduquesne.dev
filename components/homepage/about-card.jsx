const AboutCard = ({ icon, text }) => {
  return (
    <div className="flex items-center px-8 py-6 border border-gray-800 rounded-lg">
      {icon}
      <p className="flex-1 pl-6 text-sm">{text}</p>
    </div>
  );
};

export default AboutCard;
