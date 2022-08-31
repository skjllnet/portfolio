import initScrollReveal from "./src/scripts/scrollReveal";
import initTiltEffect from "./src//scripts/tiltAnimation";
import { targetElements, defaultProps } from "./src//data/scrollRevealConfig";
import copyText from "./src//scripts/copyText";
import theYear from "./src//scripts/theYear";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
copyText();
theYear();
