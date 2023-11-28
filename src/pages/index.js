import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
    const {data: session} = useSession();
    return (
        <div>
            <Head>
                <title>oAuth</title>
                <meta name="description" content="oAuth app build with nextjs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!session ? (
                <>
                    <h4>Not signed in</h4>
                    <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            ) :
                <div className="container">
                    <h1 className="mx-auto">
                        Welcome, {session.user.name}
                    </h1>
                    <ul class="recipes">
                        <li class="recipe">
                            <Image src="/images/smoothie.png" alt="smoothie recipe icon" width={40} height={50} />
                            <h4>Banana Boost</h4>
                            <p>Banana, Vanilla ice cream, Milk</p>
                        </li>
                        <li class="recipe">
                            <Image src="/images/smoothie.png" alt="smoothie recipe icon" width={40} height={50} />
                            <h4>Tropical Twist</h4>
                            <p>Peach, Pinapple, Apple juice</p>
                        </li>
                        <li class="recipe">
                            <Image src="/images/smoothie.png" alt="smoothie recipe icon" width={40} height={50} />
                            <h4>Protein Packer</h4>
                            <p>Oats, Peanut butter, Milk, Banana, Blueberries</p>
                        </li>
                        <li class="recipe">
                            <Image src="/images/smoothie.png" alt="smoothie recipe icon" width={40} height={50} />
                            <h4>Banana Boost</h4>
                            <p>Banana, Vanilla ice cream, Milk</p>
                        </li>
                        <li class="recipe">
                            <Image src="/images/smoothie.png" alt="smoothie recipe icon" width={40} height={50} />
                            <h4>Tropical Twist</h4>
                            <p>Peach, Pinapple, Apple juice</p>
                        </li>
                        <li class="recipe">
                            <Image src="/images/smoothie.png" alt="smoothie recipe icon" width={40} height={50} />
                            <h4>Protein Packer</h4>
                            <p>Oats, Peanut butter, Milk, Banana, Blueberries</p>
                        </li>
                    </ul>

                    <button onClick={() => signOut()}>signOut</button>
                </div>
            }
        </div>
    )
}
