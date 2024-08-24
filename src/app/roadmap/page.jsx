import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "../../components/ui/card";
import Link from "next/link";

// Example data structure for subjects, chapters, modules, and resources
const subjectsData = [
  {
    title: "Physics",
    description: "Notes for the subject of Physics.",
    link: "https://www.cin.ufpe.br/~cavmj/Machine%20-%20Learning%20-%20Tom%20Mitchell.pdf",
    chapters: [
      {
        title: "Chapter 1: Laws of Motion",
        description: "Understanding the principles of motion.",
        modules: [
          {
            title: "Module 1: Introduction",
            description: "An overview of the laws of motion.",
            resources: [
              {
                type: "Video",
                title: "Video: Introduction to motion",
                link: "https://www.youtube.com/watch?v=8wZugqi_uCg",
              },
              {
                type: "Worksheet",
                title: "Worksheet: Laws of motion",
              },
              {
                type: "Simulation",
                title: "Simulation: Force and acceleration",
              },
            ],
          },
          {
            title: "Module 2: Inertia",
            description: "Exploring the concept of inertia.",
            resources: [
              {
                type: "Video",
                title: "Video: Inertia and mass",
              },
              {
                type: "Experiment",
                title: "Experiment: Rolling ball",
              },
              {
                type: "Quiz",
                title: "Quiz: Understanding inertia",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Machine Learning",
    description: "Notes for the subject of Machine Learning.",
    chapters: [
      {
        title: "Chapter 1: Introduction to ML",
        description: "Understanding the basics of Machine Learning.",
        modules: [
          {
            title: "Module 1: Types of ML",
            description: "An overview of different types of Machine Learning.",
            resources: [
              {
                type: "Video",
                title: "Video: Introduction to ML types",
              },
              {
                type: "Worksheet",
                title: "Worksheet: ML algorithms comparison",
                link: "https://www.datacamp.com/cheat-sheet/machine-learning-cheat-sheet",
              },
              {
                type: "Example",
                title: "Example: Supervised vs. Unsupervised",
              },
            ],
          },
          {
            title: "Module 2: Regression",
            description: "Understanding regression in Machine Learning.",
            resources: [
              {
                type: "Video",
                title: "Video: Introduction to regression",
              },
              {
                type: "Example",
                title: "Example: Linear regression",
              },
              {
                type: "Exercise",
                title: "Exercise: Predictive modeling",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function Component() {
  return (
    <div className="flex">
      {subjectsData.map((subject, index) => (
        <Card
          key={index}
          className="max-w-2xl my-5 mx-auto bg-slate-800 text-white"
        >
          <CardHeader>
            <CardTitle>{subject.title}</CardTitle>
            <CardDescription>{subject.description}</CardDescription>
            {subject.link && (
              <Link href={subject.link} className="underline text-blue-400">
                Go To Book
              </Link>
            )}
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex gap-2 p-4">
              {subject.chapters.map((chapter, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{chapter.title}</CardTitle>
                    <CardDescription>{chapter.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      {chapter.modules.map((module, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle>{module.title}</CardTitle>
                            <CardDescription>
                              {module.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid gap-2">
                              {module.resources.map((resource, index) => (
                                <Card key={index}>
                                  <CardHeader>
                                    <CardTitle>{resource.type}</CardTitle>
                                    <CardDescription>
                                      {resource.title}
                                    </CardDescription>
                                    {resource.link && (
                                      <a
                                        href={resource.link}
                                        className="underline text-blue-400"
                                      >
                                        Go To Resource
                                      </a>
                                    )}
                                  </CardHeader>
                                </Card>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Example usage:
// <Component data={subjectsData} />
