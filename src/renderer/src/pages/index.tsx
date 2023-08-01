import { trpcReact } from "@renderer/core/root";

export default function Home(): JSX.Element {
    const helloWorld = trpcReact.helloWorld.useQuery({ text: "Electron" });

    if (helloWorld.isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <p>{helloWorld.data?.text}</p>
        </div>
    );
}
