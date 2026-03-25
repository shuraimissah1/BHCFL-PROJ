import React from "react";
import Link from "next/link";

export const metadata = {
	title: "Scholarships — Membership",
	description: "Scholarships and financial support resources for Black Homeschoolers of Central Florida (BHCFL)",
};

export default function ScholarshipsPage() {
	return (
		<div style={{width: '100%', height: '100%', minHeight: '600px'}}>
			<iframe
				src="/scholarships/index.html"
				title="Scholarships"
				style={{width: '100%', height: '100%', minHeight: '800px', border: '0'}}
			/>
		</div>
	);
}
