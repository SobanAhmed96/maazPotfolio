import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const About = () => {
  const [tab, setTab] = useState("skills");
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, amount: 0.3 });

  // 🔥 Firebase Skills State
  const [skills, setSkills] = useState([]);
  const [loadingSkills, setLoadingSkills] = useState(true);

  // FETCH SKILLS
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const snapshot = await getDocs(collection(db, "skills"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
      setLoadingSkills(false);
    };

    fetchSkills();
  }, []);

  const experience = (
    <ul className="text-gray-300 space-y-2 list-disc list-inside">
      <li>
        Built a <strong>Flutter E-Commerce App</strong> featuring product
        listings, cart system, Firebase authentication, and real-time order
        management.
      </li>
      <li>
        Developed a <strong>Medical / Healthcare App</strong> with
        appointment booking, patient records, and Firebase Firestore
        integration.
      </li>
      <li>
        Created a <strong>Coaching Management App</strong> for student
        enrollment, attendance tracking, and notifications using Flutter &
        Firebase.
      </li>
      <li>
        Implemented a <strong>Real-Time Chat Application</strong> with
        instant messaging, media sharing, and Firebase real-time database.
      </li>
      <li>
        Integrated <strong>REST APIs</strong>, push notifications, and state
        management for scalable mobile applications.
      </li>
      <li>
        Deployed and tested apps on <strong>Android devices</strong> and
        optimized performance for smooth user experience.
      </li>
    </ul>
  );

  const education = (
    <ul className="text-gray-300 space-y-2 list-disc list-inside">
      <li>
        Currently studying in Pre-Engineering with a strong focus on Computer
        Science and programming fundamentals.
      </li>
      <li>
        Completed professional training and online certifications in Flutter
        & Firebase App Development.
      </li>
      <li>
        Continuously learning modern mobile app technologies and UI/UX design
        principles.
      </li>
      <li>
        Actively building real-world Flutter projects to strengthen practical
        development skills.
      </li>
    </ul>
  );

  const fadeSlide = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="about"
      ref={aboutRef}
      className="bg-[#0e1121] text-white px-6 py-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT: About Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-pink-500 text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed space-y-4">
            Hello! My name is <strong className="text-white">Maaz</strong>, and
            I am a highly motivated and passionate{" "}
            <strong className="text-white">Flutter Developer</strong>{" "}
            specializing in building cross-platform mobile applications with{" "}
            <strong className="text-white">Flutter & Firebase</strong>.
            <br /><br />
            As a developer, I bring creativity, problem-solving skills, and a
            strong focus on performance and clean UI/UX.
            <br /><br />
            My journey started with basic programming concepts and quickly
            expanded into <strong className="text-white">Dart, Flutter, Firebase</strong>.
            <br /><br />
            I'm excited to continuously grow in the tech field.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Tabs */}
          <div className="flex gap-4 items-center mb-6">
            {["skills", "experience", "education"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-4 py-1 rounded-full text-sm font-semibold border ${
                  tab === item
                    ? "bg-pink-500 text-white border-pink-500"
                    : "text-gray-400 border-gray-500"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              {/* 🔥 SKILLS FIREBASE */}
              {tab === "skills" && (
                <>
                  {loadingSkills ? (
                    <p className="text-gray-400">Loading skills...</p>
                  ) : skills.length === 0 ? (
                    <p className="text-gray-400">No skills found</p>
                  ) : (
                    skills.map((skill, index) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.03 }}
                      >
                        <div className="flex justify-between text-sm mb-1 uppercase text-gray-300 font-semibold">
                          <span>{skill.name}</span>
                          <span>{skill.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-blue-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percent}%` }}
                            transition={{ duration: 0.8, delay: index * 0.03 }}
                          />
                        </div>
                      </motion.div>
                    ))
                  )}
                </>
              )}

              {tab === "experience" && experience}
              {tab === "education" && education}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
