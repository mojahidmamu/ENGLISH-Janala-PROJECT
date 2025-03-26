import { motion } from "framer-motion";

const Learn = () => {
  const words = [
    { word: "Ephemeral", meaning: "Lasting for a very short time" },
    {
      word: "Serendipity",
      meaning: "Finding something good without looking for it",
    },
    { word: "Pernicious", meaning: "Having a harmful effect, in a subtle way" },
    { word: "Ineffable", meaning: "Too great to be expressed in words" },
    {
      word: "Quintessential",
      meaning: "Representing the most perfect example of something",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📖 Vocabulary Section
      </motion.h1>

      {/* Word Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {words.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-lg border-l-4 border-blue-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-xl font-semibold text-gray-800">{item.word}</h2>
            <p className="text-gray-600">{item.meaning}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
