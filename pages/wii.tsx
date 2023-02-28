import { WiiCrt } from "@/components/models/WiiCrt";
import { Button } from "@/components/typography/Button";
import Header from "@/components/typography/Header";
import Paragraph from "@/components/typography/Paragraph";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Wii = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/2">
        <Canvas>
          <OrbitControls
            maxPolarAngle={1.6}
            minPolarAngle={1.6}
            minAzimuthAngle={2.9}
            maxAzimuthAngle={2.9}
            enableZoom={false}
            enablePan={false}
          />
          <PerspectiveCamera makeDefault zoom={0.4} />
          <Stage castShadow={true} environment={"night"} preset="upfront">
            <WiiCrt />
          </Stage>
        </Canvas>
      </div>
      <div className="w-1/2 overflow-y-scroll flex flex-col items-start gap-8 p-16">
        <Header text="Wii" />
        <Paragraph first>
          During late 2009, I recount my father bringing a strange white box
          that resembled a DVD player into our living room. It had a pristine
          glossy finish with gray wires hanging out of its side. I sat on the
          couch in awe as he went behind our Sony plasma TV and began plugging
          in cable after cable. The disc drive on the white box flashed blue for
          a second after he pressed the power button. A health and safety
          warning flashed on the TV, with a prompt asking to press any button to
          continue. My dad tossed me a white stick with the word “Wii” printed
          on the bottom. It resembled a regular TV remote with an A button,
          arrow keys, and extra smaller buttons that I didn{"'"}t really care
          about. I pressed the circular (A) button on the remote. A friendly
          chime boomed through the speakers. An array of icons resembling TV
          channels filled the screen, with numerous sights and sounds.
        </Paragraph>
        <Paragraph>
          “Point your remote at a channel,” my dad said. “Your uncle showed me
          how to do this.”
        </Paragraph>
        <Paragraph>
          I pointed the tip of my remote at the screen. A small on-screen
          pointer followed the intricate motions of my hand. It was like
          controlling with magic. From that moment on, I was hooked. I wiggled
          my hand. Sure enough, the pointer on the screen wiggled too. I drooled
          in awe as I randomly selected a game to play.
        </Paragraph>
        <Paragraph>
          “Oh yeah, your uncle David gave us a Mario Kart game to play. I{"'"}ll
          be in the other room. Go ahead and play!” my dad said.
        </Paragraph>
        <Paragraph>
          Instead of pressing the start button of the game, I moved the remote
          around, still trying to comprehend how the TV knew where I was
          pointing at. At first I thought it was magic, but then I remembered
          that magic didn{"'"}t exist, because my friend Filippo told me that it
          was fake and only in books like Harry Potter. I looked down between me
          and the TV. There were no wires in sight. Was this really the work of
          sorcery and the dark arts? I had to know.
        </Paragraph>
        <Paragraph>
          For the next thirty minutes, I sat on the couch with my attention
          fixed toward the screen, wiggling my controller and watching as the TV
          picked up its movements. My dad walked into the living room again,
          thinking I was finished playing Mario Kart.
        </Paragraph>
        <Paragraph>“Did you like the game?” he asked.</Paragraph>
        <Paragraph>
          “Eureka! Magic exists, and I can prove it!” I exclaimed.
        </Paragraph>
        <Button primary href="/coolmathgames">
          Next {"->"}
        </Button>
      </div>
    </div>
  );
};

export default Wii;
