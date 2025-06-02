
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: "🧠",
      skills: [
        { name: "PyTorch", level: 92, description: "Primary deep learning framework" },
        { name: "SHAP", level: 85, description: "Explainable AI techniques" },
        { name: "LangChain", level: 88, description: "RAG pipeline builder" },
        { name: "LangGraph", level: 80, description: "Multi-turn graph-based agent handling" },
        { name: "LlamaIndex", level: 82, description: "Document indexing for RAG" },
        { name: "HuggingFace Transformers", level: 90, description: "LLM interfacing" },
        { name: "Scikit-learn", level: 95, description: "Classic ML algorithms" },
        { name: "ARIMA", level: 85, description: "Time series forecasting" },
        { name: "Isolation Forest", level: 78, description: "Anomaly detection" },
        { name: "OpenCV", level: 80, description: "Computer vision projects" },
        { name: "Keras", level: 88, description: "Secondary DL framework" },
        { name: "CNNs & GNNs", level: 85, description: "Neural network architectures" }
      ]
    },
    {
      title: "Data Science & Analysis",
      icon: "📊",
      skills: [
        { name: "Pandas", level: 95, description: "Data manipulation & analysis" },
        { name: "NumPy", level: 92, description: "Numerical computing" },
        { name: "Matplotlib", level: 88, description: "Data visualization" },
        { name: "Seaborn", level: 85, description: "Statistical visualization" },
        { name: "EDA Techniques", level: 90, description: "Exploratory data analysis" },
        { name: "PCA", level: 82, description: "Dimensionality reduction" },
        { name: "Naive Bayes", level: 85, description: "Classification algorithms" },
        { name: "Model Evaluation", level: 90, description: "Metrics & validation" },
        { name: "Association Rule Mining", level: 80, description: "Pattern discovery" },
        { name: "Time Series Analysis", level: 88, description: "Temporal data modeling" }
      ]
    },
    {
      title: "Backend & DevOps",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 92, description: "Backend application development" },
        { name: "Flask", level: 88, description: "Python microservices" },
        { name: "Express.js", level: 90, description: "Web application framework" },
        { name: "REST APIs", level: 95, description: "API design & implementation" },
        { name: "Swagger", level: 85, description: "API documentation" },
        { name: "Microservices", level: 82, description: "Distributed architecture" },
        { name: "AWS (EC2, S3, IAM)", level: 85, description: "Cloud infrastructure" },
        { name: "Docker", level: 80, description: "Containerization" },
        { name: "GCP", level: 75, description: "Google Cloud Platform" }
      ]
    },
    {
      title: "Frontend & UI",
      icon: "⚡",
      skills: [
        { name: "React.js", level: 95, description: "Component-based UI development" },
        { name: "Vue.js", level: 88, description: "Progressive framework" },
        { name: "TypeScript", level: 90, description: "Type-safe JavaScript" },
        { name: "HTML/CSS", level: 92, description: "Web fundamentals" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first styling" },
        { name: "Framer Motion", level: 85, description: "Animation library" },
        { name: "Three.js", level: 78, description: "3D graphics" }
      ]
    }
  ];

  const tools = [
    "Git", "GitHub", "VS Code", "Postman", "Jupyter", "Notion", 
    "Figma", "Power BI", "Tableau", "Jest", "Cypress", "Webpack", "Vite"
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      year: "2022",
      icon: "☁️"
    },
    {
      title: "AlgoExpert (100 problems)",
      year: "2022", 
      icon: "🧮"
    },
    {
      title: "Machine Learning A–Z (Udemy)",
      year: "2021",
      icon: "🤖"
    },
    {
      title: "Complete Python Developer (ZTM)",
      year: "2021",
      icon: "🐍"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills spanning AI/ML, Data Science, and Full-Stack Development
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <HoverCard key={skill.name}>
                      <HoverCardTrigger asChild>
                        <motion.div
                          className="group cursor-pointer"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                          whileHover={{ 
                            scale: 1.05,
                            rotateX: 5,
                            rotateY: 5,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:border-purple-400/50">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {skill.name}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="flex justify-between items-center mb-3">
                                <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <motion.div
                                  className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full group-hover:shadow-lg group-hover:shadow-purple-500/50"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.05 + 0.5 }}
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400">{skill.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {skill.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">Proficiency:</span>
                            <Badge variant="secondary" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">🧰</span>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Tools & Technologies
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/30 dark:to-cyan-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700 group-hover:shadow-lg group-hover:shadow-purple-500/30 group-hover:border-purple-400 transition-all duration-300"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">🏅</span>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Certifications
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 text-center group-hover:shadow-2xl group-hover:shadow-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {cert.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
                        {cert.year}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};
