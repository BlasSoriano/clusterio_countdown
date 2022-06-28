import React, { useContext, useEffect, useState } from "react";
import { libPlugin } from "@clusterio/lib";
import { PageLayout } from "@clusterio/web_ui";
import { Form, Input, Label } from "antd";

function CountdownPage() {
    return <PageLayout nav={[{ name: "Countdown" }]}>
        <h2>Countdown</h2>
            <p>
                <Form>
                    <label for="event-time">Choose date and time for the start of the event: </label>
                    <input type="datetime-local" 
                        id="event-time" name="event-time"
                        value="2022-06-19T05:30" min="2018-06-07T00:00" max="2024-06-28T00:00"
                    />
                </Form>
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