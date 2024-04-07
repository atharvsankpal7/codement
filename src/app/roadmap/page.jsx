import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "../../components/ui/card";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex ">
      <Card className=" max-w-2xl my-5 mx-auto  bg-slate-800 text-white">
        <CardHeader>
          <CardTitle>Physics</CardTitle>
          <CardDescription>Notes for the subject of Physics.</CardDescription>
          <Link
            href="https://www.cin.ufpe.br/~cavmj/Machine%20-%20Learning%20-%20Tom%20Mitchell.pdf"
            className="underline text-blue-400"
          >
            Go To Book
          </Link>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex gap-2 p-4 ">
            <Card>
              <CardHeader>
                <CardTitle>Chapter 1: Laws of Motion</CardTitle>
                <CardDescription>
                  Understanding the principles of motion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Module 1: Introduction</CardTitle>
                      <CardDescription>
                        An overview of the laws of motion.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <Card>
                          <CardHeader>
                            <CardTitle>Teacher's Note</CardTitle>
                            <CardDescription>
                              Additional resources for teaching this module.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="grid gap-2 list-disc pl-8">
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=8wZugqi_uCg"
                                  className="underline text-blue-400 "
                                >
                                  Video: Introduction to motion
                                </a>
                              </li>
                              <li>Worksheet: Laws of motion</li>
                              <li>Simulation: Force and acceleration</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Module 2: Inertia</CardTitle>
                      <CardDescription>
                        Exploring the concept of inertia.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Teacher's Note</CardTitle>
                            <CardDescription>
                              Additional resources for teaching this module.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="grid gap-2 list-disc pl-8">
                              <li>Video: Inertia and mass</li>
                              <li>Experiment: Rolling ball</li>
                              <li>Quiz: Understanding inertia</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card className=" max-w-2xl my-5 bg-slate-800 mx-auto text-white">
        <CardHeader>
          <CardTitle>Machine Learning</CardTitle>
          <CardDescription>
            Notes for the subject of Machine Learning.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex gap-2 p-4 ">
            <Card>
              <CardHeader>
                <CardTitle>Chapter 1: Introduction to ML</CardTitle>
                <CardDescription>
                  Understanding the basics of Machine Learning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Module 1: Types of ML</CardTitle>
                      <CardDescription>
                        An overview of different types of Machine Learning.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <Card>
                          <CardHeader>
                            <CardTitle>Teacher's Note</CardTitle>
                            <CardDescription>
                              Additional resources for teaching this module.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="grid gap-2 list-disc pl-8">
                              <li>Video: Introduction to ML types</li>
                              <li>
                                <a href="https://www.datacamp.com/cheat-sheet/machine-learning-cheat-sheet" className="underline text-blue-400">
                                  Worksheet: ML algorithms comparison
                                </a>
                              </li>
                              <li>Example: Supervised vs. Unsupervised</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Module 2: Regression</CardTitle>
                      <CardDescription>
                        Understanding regression in Machine Learning.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Teacher's Note</CardTitle>
                            <CardDescription>
                              Additional resources for teaching this module.
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="grid gap-2 list-disc pl-8">
                              <li>Video: Introduction to regression</li>
                              <li>Example: Linear regression</li>
                              <li>Exercise: Predictive modeling</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
