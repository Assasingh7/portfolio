
import { motion } from 'framer-motion';
import storeit from "../assets/storeit.png"
import video from "../assets/video.png"
import meta from "../assets/meta.png"
const projects = [
  {
    id: 1,
    title: 'Store It',
    description: 'An application similar to Google drive with great ui ',
    image: storeit,
    demoLink: 'https://store-3yzkafubv-assa-singhs-projects.vercel.app',
    codeLink: 'https://github.com/Assasingh7/store-it',
  },
  {
    id: 2,
    title: 'Video Conference',
    description: 'A real-time video conference app with Stream.io and next.js.',
    image: video,
    demoLink: 'https://video-conferencing-app-a8w7-npcxl8cqr-assa-singhs-projects.vercel.app',
    codeLink: 'https://github.com/Assasingh7/Video-conferencing-app',
  },
  {
    id: 3,
    title: 'xmeta',
    description: 'A metaverse application with Next.js and WebRTC.',
    image: meta,
    demoLink: 'https://github.com/Assasingh7/metax',
    codeLink: 'https://github.com/Assasingh7/metax',
  },
];

const ProjectsSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
