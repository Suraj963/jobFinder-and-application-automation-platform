const JobCard = ({ title, company, location, platform, type, experience, description, link, checked, onCheck }) => {
    return (
        <div className="bg-slate-50 border border-white-300 rounded-xl shadow-lg p-3 sm:p-5 mb-4 w-full max-w-[260px] sm:max-w-xs text-gray-900 flex flex-col relative text-sm sm:text-base sm:min-h-[220px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 animate-card-fade">
            <input type="checkbox" checked={checked} onChange={onCheck} className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 accent-blue-500" />
            <div className="flex justify-between items-center mb-1 sm:mb-2">
                <h2 className="text-lg sm:text-xl font-bold" style={{ color: 'wheat' }}>{title}</h2>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm mb-1 sm:mb-2">
                <span className="font-bold" style={{ color: 'wheat' }}>{company}</span>
                <span className="text-gray-400">| {location}</span>
                <span className="text-gray-400">| {type}</span>
                <span className="text-gray-400">| {experience}</span>
            </div>
            <p className="text-gray-300 mb-8 sm:mb-10 line-clamp-2">{description}</p>
            <div className="absolute left-3 sm:left-5 bottom-3 sm:bottom-4 text-xs bg-blue-600 px-2 py-1 rounded-full pointer-events-none select-none z-10 whitespace-nowrap min-w-[60px] sm:min-w-[70px] text-center">
                {platform}
            </div>
        </div>
    );
}

export default JobCard;