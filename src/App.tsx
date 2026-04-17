import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Code2, Briefcase, GraduationCap, Globe, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const portfolioData = {
  zh: {
    personalInfo: {
      name: "张宇扬",
      avatar: "photo.jpg", 
      title: "AI工程 / 全栈开发",
      bio: "💻 我是一名专注于机器学习与可扩展系统的软件工程师，主要从事后端基础设施、云部署以及应用型深度学习，将机器学习想法落地到真实场景中。业余时间我也会开发游戏——一半是出于好奇，一半是有点上头。",
      location: "洛杉矶, 美国",
      email: "yuyangzhang2003@gmail.com",
      github: "https://github.com/YuyangZhangBarry",
      linkedin: "https://www.linkedin.com/in/yuyangz03/",
      resumeZh: "/resume-zh.pdf",
      resumeEn: "/resume-en.pdf",
    },
    educations: [
      {
        id: 1,
        school: "南加州大学",
        logo: "/usc-logo.png",
        degree: "硕士",
        period: "2025.08 - 2027.05",
        gpa: "4.0/4.0",
        description: ["计算机科学"]
      },
      {
        id: 2,
        school: "华中科技大学",
        logo: "/hust-logo.png",
        degree: "本科",
        period: "2021.09 - 2025.06",
        gpa: "3.81/4.0",
        description: ["信息安全"]
      }
    ],
    experiences: [
      {
        id: 1,
        company: "大晟极科技有限公司",
        role: "AI软件工程师实习生",
        period: "2024.05 - 2024.10",
        description: [
          "采集并预处理来自 抖音 的大规模语音数据，微调基于 Sambert 的声学神经网络，实现 12 个省份的方言口音分类，准确率达 93\% 。",
          "设计了基于关键词切片的音频预处理流水线，并微调声学模型，在校园霸凌相关关键词检测任务中达到 0.87 的 F1 分数 。",
          "使用 Express 框架构建 RESTful API，处理音频数据预处理与推理请求，并返回 JSON 格式的结构化分类结果 。",
          "将系统通过 Docker 容器化部署于 AWS 云端，确保了生产环境下的可扩展性与高可用性 。",
          "将深度学习模型适配与评估技术应用于实际场景，在执法与校园安全应用中证明了系统的鲁棒性 。"
        ]
      },
      {
        id: 2,
        company: "中关村实验室",
        role: "软件工程师实习生",
        period: "2023.03 - 2023.11",
        description: [
          "参与开发了一款集成化模糊测试（Fuzzing）平台，通过解耦底层引擎与调度逻辑，实现了 AFL、LibFuzzer 等多种主流测试技术的模块化整合。",
          "设计并实现了动态策略配置模块，允许用户根据目标程序特征灵活定制变异算法与种子筛选策略，显著提升了针对复杂程序的测试灵活性。",
          "通过优化测试用例的变异逻辑与反馈机制，将系统在特定基准测试集上的代码覆盖率从 68\% 提升至 83\%，并成功复现了多处潜在的安全漏洞。"
        ]
      }
    ],
    projects: [
      {
        id: 1,
        name: "天马行空问答",
        description: "一款收录数百个富有想象力问题的问答网页端 App 。基于 Deepseek API 进行智能评分反馈",
        tech: ["Flutter", "FastAPI", "PostgreSQL", "Render","Vercel"],
        link: "https://github.com/YuyangZhangBarry/project-skyhorse",
        demo: "https://web-nine-psi-56.vercel.app/"
      },
      {
        id: 2,
        name: "针对基于扩散模型的图像压缩模型的后门攻击框架",
        description: "针对基于扩散模型的图像压缩模型的后门安全性探索，成功通过数据投毒植入后门，使模型压缩表现大幅下降",
        tech: ["Pytorch", "Diffusion", "VAE", "Backdoor Attack", "Image Compression"],
      },
      {
        id: 3,
        name: "AI 研究助手",
        description: "基于 OpenAI API 构建 AI 研究助手，结合工具调用与 RAG 流程，实现多源信息自动检索与多步推理能力。",
        tech: ["Agent AI", "FastAPI", "multi-agent workflow"],
        //link: "https://github.com/yourusername/project3",
        //demo: "https://demo3.example.com"
      },
      {
        id: 4,
        name: "医学图像分割软件",
        description: "基于 Web 的医疗影像平台，支持医生上传肺部 CT 影像，由后端 3D ResUNet 模型进行处理并实时返回分割结果。",
        tech: ["Pytorch","ResNet", "React Three Fiber","OrbitControls"],
      }
    ],
    ui: {
      greeting: "Hi, 我是",
      education: "教育背景",
      experience: "工作经历",
      projects: "项目经历",
      contactTitle: "准备好聊聊了吗？",
      contactDesc: "我目前正在寻找新的工作机会。如果你觉得我的经历符合你们的团队需求，或者只是想交流一下技术，随时欢迎联系我！",
      contactBtn: "联系我",
      footer: "Built with React & Tailwind CSS.",
      resumeZhLabel: "中文简历",
      resumeEnLabel: "英文简历",
    }
  },
  en: {
    personalInfo: {
      name: "Yuyang Zhang",
      avatar: "photo.jpg",
      title: "AI Engineer / Fullstack Developer",
      bio: "💻 I'm a software engineer focused on machine learning and scalable systems. I work on backend infrastructure, cloud deployment, and applied deep learning — turning ML ideas into real-world applications. I also build games on the side — part curiosity, part obsession.",
      location: "Los Angeles, USA",
      email: "yuyangzhang2003@gmail.com",
      github: "https://github.com/YuyangZhangBarry",
      linkedin: "https://www.linkedin.com/in/yuyangz03/",
      resumeZh: "/resume-zh.pdf",
      resumeEn: "/resume-en.pdf",
    },
    educations: [
      {
        id: 1,
        school: "University of Southern California",
        logo: "/usc-logo.png",
        degree: "Master of Science",
        period: "Aug 2025 - May 2027",
        gpa: "4.0/4.0",
        description: ["Computer Science"]
      },
      {
        id: 2,
        school: "Huazhong University of Science and Technology",
        logo: "/hust-logo.png",
        degree: "Bachelor of Engineering",
        period: "Sep 2021 - Jun 2025",
        gpa: "3.81/4.0",
        description: ["Information Security"]
      }
    ],
    experiences: [
      {
        id: 1,
        company: "Dasoundgen Technology Co., Ltd.",
        role: "Software Engineer Intern",
        period: "May 2024 - Oct 2024",
        description: [
          "Collected and preprocessed large-scale voice data from Douyin, fine-tuning a Sambert-based acoustic neural network to achieve dialect accent classification across 12 provinces with 93% accuracy.",
          "Designed an audio preprocessing pipeline based on keyword slicing and fine-tuned acoustic models, achieving an F1 score of 0.87 in school bullying-related keyword detection tasks.",
          "Built RESTful APIs using the Express framework to handle audio data preprocessing and inference requests, returning structured classification results in JSON format.",
          "Deployed the system via Docker containerization on AWS cloud, ensuring scalability and high availability in the production environment.",
          "Applied deep learning model adaptation and evaluation techniques to real-world scenarios, demonstrating system robustness in law enforcement and campus safety applications."
        ]
      },
      {
        id: 2,
        company: "Zhongguancun Laboratory",
        role: "Software Engineer Intern",
        period: "Mar 2023 - Nov 2023",
        description: [
          "Participated in the development of an integrated fuzzing platform. By decoupling the underlying engine and scheduling logic, achieved modular integration of mainstream testing technologies such as AFL and LibFuzzer.",
          "Designed and implemented a dynamic policy configuration module, allowing users to flexibly customize mutation algorithms and seed selection strategies based on target program characteristics, significantly enhancing testing flexibility for complex programs.",
          "Optimized the mutation logic and feedback mechanism of test cases, increasing the system's code coverage on specific benchmark datasets from 68% to 83%, and successfully reproduced multiple potential security vulnerabilities."
        ]
      }
    ],
    projects: [
      {
        id: 1,
        name: "Imaginative Q&A App",
        description: "A web-based Q&A app featuring hundreds of imaginative questions, with intelligent scoring and feedback powered by the Deepseek API.",
        tech: ["Flutter", "FastAPI", "PostgreSQL", "Render","Vercel"],
        link: "https://github.com/YuyangZhangBarry/project-skyhorse",
        demo: "https://web-nine-psi-56.vercel.app/"
      },
      {
        id: 2,
        name: "Backdoor Attack Framework for Diffusion-based Image Compression Models",
        description: "Explored the backdoor security of diffusion-based image compression models, successfully implanting backdoors through data poisoning to significantly degrade model compression performance.",
        tech: ["Pytorch", "Diffusion", "VAE", "Backdoor Attack", "Image Compression"],
        
      },
      {
        id: 3,
        name: "AI Research Agent",
        description: "Built an AI research Agent based on the OpenAI API, combining tool calling and RAG workflows to achieve automated multi-source information retrieval and multi-step reasoning capabilities.",
        tech: ["Agent AI", "FastAPI", "multi-agent workflow"],
        //link: "https://github.com/yourusername/project3",
        //demo: "https://demo3.example.com"
      },
      {
        id: 4,
        name: "Medical Image Segmentation Software",
        description: "A web-based medical imaging platform that allows doctors to upload lung CT images, processed by a backend 3D ResUNet model to return real-time segmentation results.",
        tech: ["Pytorch", "ResNet", "React Three Fiber", "OrbitControls"],
      }
    ],
    ui: {
      greeting: "Hi, I'm",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      contactTitle: "Ready to connect?",
      contactDesc: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      contactBtn: "Get in touch",
      footer: "Built with React & Tailwind CSS.",
      resumeZhLabel: "Resume (中文)",
      resumeEnLabel: "Résumé (EN)",
    }
  }
};

const SectionHeading = ({
  icon: Icon,
  title,
  variant = 'light',
}: {
  icon: any;
  title: string;
  variant?: 'light' | 'dark';
}) => (
  <div className="flex items-center gap-3 mb-10">
    <div
      className={
        variant === 'dark'
          ? 'p-2.5 rounded-2xl bg-primary-600/15 text-primary-300/90'
          : 'p-2.5 rounded-2xl bg-primary-100/90 text-primary-600'
      }
    >
      <Icon size={22} strokeWidth={1.75} />
    </div>
    <h2
      className={
        variant === 'dark'
          ? 'font-display text-[1.65rem] sm:text-[1.85rem] font-medium tracking-wide text-white/95'
          : 'font-display text-[1.65rem] sm:text-[1.85rem] font-medium tracking-wide text-slate-800/95'
      }
    >
      {title}
    </h2>
  </div>
);

function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  
  const currentData = portfolioData[lang];
  const { personalInfo, educations, experiences, projects, ui } = currentData;

  const toggleLanguage = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="relative min-h-screen bg-primary-50 font-sans selection:bg-primary-200/60 selection:text-primary-900">
      <nav
        className="fixed top-0 right-0 z-[9999] flex justify-end p-6 pt-[max(1.5rem,env(safe-area-inset-top))] pr-[max(1.5rem,env(safe-area-inset-right))]"
        aria-label="Language"
      >
        <button
          type="button"
          onClick={toggleLanguage}
          className="flex min-h-[44px] min-w-[44px] cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-full border border-primary-200/80 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition-colors hover:bg-primary-50 hover:text-primary-600 active:bg-primary-100"
          aria-label={lang === 'zh' ? 'Switch to English' : '切换到中文'}
        >
          <Globe size={18} className="pointer-events-none shrink-0" aria-hidden />
          {lang === 'zh' ? 'English' : '中文'}
        </button>
      </nav>

      {/* Header / Hero Section */}
      <header className="relative overflow-hidden border-b border-primary-200/70">
        {/* 背景层次：渐变 + 柔光斑，随主题色变化 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-100/95 via-white to-primary-50/90" />
          <div className="absolute inset-0 hero-radial-glow" />
          <div className="absolute -right-24 -top-28 h-[22rem] w-[22rem] rounded-full bg-primary-300/45 blur-3xl md:h-[28rem] md:w-[28rem]" />
          <div className="absolute -bottom-36 -left-28 h-80 w-80 rounded-full bg-primary-400/25 blur-3xl" />
          <div className="absolute right-1/3 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-primary-200/50 blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/45 to-transparent opacity-70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32">
          <motion.div 
            key={lang} // Add key to trigger animation on language change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12"
          >
            <div className="max-w-2xl flex-1 text-center md:text-left">
              <h1 className="font-display text-[2.35rem] sm:text-5xl md:text-[3.15rem] font-medium text-slate-800 tracking-tight mb-7 leading-[1.15]">
                {ui.greeting}{' '}
                <span className="text-primary-600 font-medium">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600/95 mb-7 font-normal tracking-wide">
                {personalInfo.title}
              </p>
              <p className="text-base sm:text-[1.05rem] text-slate-600/90 mb-10 leading-[1.92] font-light max-w-2xl whitespace-pre-line mx-auto md:mx-0">
                {personalInfo.bio}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-600/90 text-[0.95rem] tracking-wide mb-10">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-primary-500" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary-900 text-white rounded-xl hover:bg-primary-800 transition-colors font-medium tracking-wide shadow-sm"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 border border-slate-300/80 rounded-xl hover:bg-slate-50/90 transition-colors font-medium tracking-wide shadow-sm"
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>
                {personalInfo.resumeZh ? (
                  <a
                    href={personalInfo.resumeZh}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 border border-primary-200/90 rounded-xl hover:bg-primary-50/80 hover:text-primary-700 transition-colors font-medium tracking-wide shadow-sm"
                  >
                    <FileText size={20} className="text-primary-600 shrink-0" />
                    {ui.resumeZhLabel}
                  </a>
                ) : null}
                {personalInfo.resumeEn ? (
                  <a
                    href={personalInfo.resumeEn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 border border-primary-200/90 rounded-xl hover:bg-primary-50/80 hover:text-primary-700 transition-colors font-medium tracking-wide shadow-sm"
                  >
                    <FileText size={20} className="text-primary-600 shrink-0" />
                    {ui.resumeEnLabel}
                  </a>
                ) : null}
              </div>
            </div>

            {/* Avatar Section */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl ring-2 ring-primary-200/80">
                <img 
                  src={personalInfo.avatar} 
                  alt={personalInfo.name} 
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '60% 55%',
                    transform: 'scale(1.25)',
                    transformOrigin: '27% 50%',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        {/* Education — 浅色带 */}
        <motion.section
          className="bg-white border-y border-primary-100/90 py-20 md:py-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeading icon={GraduationCap} title={ui.education} />
            <div className="space-y-12">
              {educations.map((edu) => (
                <div key={`${lang}-${edu.id}`} className="relative pl-8 md:pl-0">
                  <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                    <div className="mb-4 md:mb-0 md:col-span-1 pt-1">
                      <span className="text-xs sm:text-sm font-medium text-slate-500/90 tracking-[0.14em]">
                        {edu.period}
                      </span>
                    </div>
                    <div className="md:col-span-3 bg-primary-50 p-6 rounded-2xl shadow-sm border border-primary-100 hover:border-primary-200 hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-3">
                          {edu.logo && (
                            <img src={edu.logo} alt={`${edu.school} logo`} className="w-8 h-8 object-contain" />
                          )}
                          <h3 className="font-display text-xl font-medium text-slate-900/95 tracking-wide">
                            {edu.school}
                          </h3>
                        </div>
                        {edu.gpa && (
                          <span className="px-3 py-1 bg-primary-100/95 text-primary-900 text-sm rounded-full font-medium tracking-wide">
                            GPA: {edu.gpa}
                          </span>
                        )}
                      </div>
                      <div className="text-primary-600 font-medium mb-4 tracking-wide">{edu.degree}</div>
                      <ul className="space-y-2.5 text-slate-600/95 leading-relaxed">
                        {edu.description.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary-400 mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience — 深色带（渐变 + 顶光，减轻沉闷） */}
        <motion.section
          className="relative overflow-hidden py-20 md:py-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* 主渐变：纵向深浅交替 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-800 via-primary-900 to-primary-800"
          />
          {/* 斜向叠色，增加冷暖变化 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-600/20 from-[15%] via-transparent via-50% to-primary-900/90 to-[100%]"
          />
          {/* 左侧边缘微光 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-500/15 from-0% via-transparent via-35% to-transparent"
          />
          {/* 底部略压暗，形成轻 vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 from-[50%] to-transparent to-[100%]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_60%_at_50%_-5%,color-mix(in_srgb,var(--color-primary-600)_24%,transparent),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_100%_100%,color-mix(in_srgb,var(--color-primary-100)_10%,transparent),transparent_50%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_0%_50%,color-mix(in_srgb,var(--color-primary-400)_12%,transparent),transparent_60%)]"
          />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <SectionHeading icon={Briefcase} title={ui.experience} variant="dark" />
            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={`${lang}-${exp.id}`} className="relative pl-8 md:pl-0">
                  <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                    <div className="mb-4 md:mb-0 md:col-span-1 pt-1">
                      <span className="text-xs sm:text-sm font-medium text-primary-300/85 tracking-[0.14em]">
                        {exp.period}
                      </span>
                    </div>
                    <div className="md:col-span-3 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg hover:border-primary-500/30 hover:bg-white/[0.07] transition-all">
                      <h3 className="font-display text-xl font-medium text-white/95 mb-1.5 tracking-wide">
                        {exp.role}
                      </h3>
                      <div className="text-primary-300/95 font-medium mb-4 tracking-wide">{exp.company}</div>
                      <ul className="space-y-2.5 text-primary-100/88 leading-relaxed">
                        {exp.description.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects — 回到浅色带，与上下形成节奏 */}
        <motion.section
          className="bg-primary-50 py-20 md:py-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeading icon={Code2} title={ui.projects} />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={`${lang}-${project.id}`} className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 hover:border-primary-200 hover:shadow-md transition-all flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-xl font-medium text-slate-900/95 tracking-wide group-hover:text-primary-600 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-3 text-slate-400">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-slate-600/95 mb-6 flex-grow leading-relaxed text-[0.98rem] font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100/80 text-primary-900/85 text-xs sm:text-sm rounded-full font-normal tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-primary-200/70 py-12 mt-12 md:mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-[1.65rem] sm:text-3xl font-medium text-slate-800/95 tracking-wide mb-6">
            {ui.contactTitle}
          </h2>
          <p className="text-slate-600/95 mb-8 max-w-2xl mx-auto leading-relaxed font-light text-[1.02rem]">
            {ui.contactDesc}
          </p>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-primary-900 rounded-full hover:bg-primary-700 transition-colors font-medium tracking-wide shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
          >
            <Mail size={20} />
            {ui.contactBtn}
          </a>
          <div className="mt-16 text-slate-400/95 text-sm font-light tracking-wide">
            © {new Date().getFullYear()} {personalInfo.name}. {ui.footer}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
