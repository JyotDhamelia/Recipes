"use client"
import { title } from "@/components/primitives";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button,Image} from "@nextui-org/react";

export default function ContactPage() {
	const list = [
		{
		  title: "Pizza",
		  img: "/images/fruit-1.jpeg",
		  price: "$5.50",
		},
		{
		  title: "Pasta",
		  img: "/images/fruit-2.jpeg",
		  price: "$3.00",
		},

	  ];
	const [isFollowed, setIsFollowed] = React.useState(false);

	return (
		<div>
		<h1 className="text-6xl	font-extrabold	text-emerald-500">Recipes</h1>
		<div>
			<div className="gap-4 flex grid grid-rows-2">
      {list.map((item, index) => (
        <Card className='w-[200px]' shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
		</div>
		</div>
	);
}
