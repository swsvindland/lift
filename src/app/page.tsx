import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const exercises = [
  "Squat",
  "Bench Press",
  "Deadlift",
  "Overhead Press",
  "Barbell Row",
  "Pull-up",
];

const sets = [1, 2, 3, 4, 5];

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-2">
        {exercises.map((exercise) => (
          <Card key={exercise} className="max-w-[400px]">
            <CardHeader className="flex w-full justify-between">
              <div className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{exercise}</p>
                  <p className="text-small text-default-500">Barbell</p>
                </div>
              </div>
              <Button isIconOnly variant="ghost">
                <EllipsisVerticalIcon className="w-8" />
              </Button>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex flex-col gap-2">
                {sets.map((set) => (
                  <div key={set} className="flex gap-2">
                    <Input placeholder="Weight" type="number" />
                    <Input placeholder="Reps" type="number" />
                    <Checkbox />
                  </div>
                ))}
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button color="primary">Click Me</Button>
    </main>
  );
}
