import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  const skills = [
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "React", level: 80, color: "bg-blue-500" },
    { name: "TypeScript", level: 75, color: "bg-blue-600" },
    { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
    { name: "Node.js", level: 70, color: "bg-green-500" },
    { name: "Git", level: 85, color: "bg-red-500" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setSkillsAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="animate-fade-in">
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <img
                    className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white animate-scale-in"
                    src="/img/84440ab5-2cc9-44af-a6b6-4d2d15d31418.jpg"
                    alt="Profile Photo"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-slide-in-right">
                  John Developer
                </h1>
                <p className="text-xl text-gray-600 mb-8 animate-fade-in">
                  Full Stack Developer & UI/UX Enthusiast
                </p>
                <div className="flex justify-center space-x-4 animate-fade-in">
                  <Button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Contact Me
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:scale-105 transition-all duration-300"
                  >
                    <Icon name="Download" size={16} className="mr-2" />
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in">
              Here's what I work with
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress
                      value={skillsAnimated ? skill.level : 0}
                      className="h-3 transition-all duration-1000 ease-out"
                      style={{ transitionDelay: `${index * 200}ms` }}
                    />
                    <div
                      className={`absolute top-0 left-0 h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: skillsAnimated ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 animate-fade-in">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in">
              I'm a passionate developer with expertise in modern web
              technologies. I love creating beautiful, functional applications
              that solve real-world problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in">
                <Icon
                  name="Code"
                  size={48}
                  className="mx-auto mb-4 text-blue-500"
                />
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-gray-600">
                  Writing maintainable and scalable code
                </p>
              </Card>

              <Card
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                <Icon
                  name="Palette"
                  size={48}
                  className="mx-auto mb-4 text-purple-500"
                />
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-600">
                  Creating beautiful user experiences
                </p>
              </Card>

              <Card
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <Icon
                  name="Zap"
                  size={48}
                  className="mx-auto mb-4 text-yellow-500"
                />
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-gray-600">
                  Optimizing for speed and efficiency
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-gray-300 animate-fade-in">
            Ready to bring your ideas to life? Let's connect!
          </p>

          <div className="flex justify-center space-x-6 animate-fade-in">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
              <Icon name="Github" size={20} className="mr-2" />
              GitHub
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-105">
              <Icon name="Linkedin" size={20} className="mr-2" />
              LinkedIn
            </Button>
            <Button className="bg-gray-600 hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <Icon name="Mail" size={20} className="mr-2" />
              Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
