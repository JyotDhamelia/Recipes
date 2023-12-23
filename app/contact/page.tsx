"use client"
import { title } from "@/components/primitives";
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function ContactPage() {
	const [isFollowed, setIsFollowed] = React.useState(false);

	return (
		<div>
			<h1 className="text-6xl	font-extrabold	text-emerald-500">Contact</h1>
		</div>
	);
}
