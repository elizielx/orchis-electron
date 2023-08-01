import { useState } from "react";
import Routes from "./routes";
import { ipcLink } from "electron-trpc/renderer";
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// @ts-ignore - FIXME: this is a workaround to get the type of the router or anything outside of the renderer folder
import type { AppRouter } from "../../../main/api";

export const trpcReact = createTRPCReact<AppRouter>();

export default function Root(): JSX.Element {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpcReact.createClient({
            links: [ipcLink()],
        })
    );

    return (
        <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <Routes />
            </QueryClientProvider>
        </trpcReact.Provider>
    );
}
