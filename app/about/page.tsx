"use client"
import { title } from "@/components/primitives";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function AboutPage() {
	const [isFollowed, setIsFollowed] = React.useState(false);

	return (
		<div>
			<h1 className="text-6xl	font-extrabold	text-emerald-500">About</h1>
			<Card className="max-w-[340px] mt-3">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/ninad.jpeg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Ninad Vyas</h4>
            <a href="https://ninadvyas.tech" target='_blank'><h5 className="text-small tracking-tight text-default-400">@ninadvsd</h5></a>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
       		 Developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span className="pt-2">
          #cookie
          <span className="py-2" aria-label="computer" role="img">
            
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
      </CardFooter>
    </Card>
		</div>
	);
}
