import React, { useContext, useEffect, useState } from "react";
import { libPlugin } from "@clusterio/lib";
import { PageLayout } from "@clusterio/web_ui";

function CountdownPage() {
    return <PageLayout nav={[{ name: "Countdown" }]}>
        <h2>Countdown</h2>
            <p>
                Test
            </p>
    </PageLayout>;
}

export class WebPlugin extends libPlugin.BaseWebPlugin {
    async init() {
        this.pages = [
			{
				sidebarName: "Countdown",
				path: "/countdown",
				permission: "countdown.countdown.view",
				content: <CountdownPage/>,
			},
		];
    }
}