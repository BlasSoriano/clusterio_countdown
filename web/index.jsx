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
        this.countdown = new Map();

        this.pages = [
			{
				path: "/countdown",
				sidebarName: "Countdown",
				permission: "countdown.countdown.view",
				content: <CountdownPage/>,
			},
		];
    }
}