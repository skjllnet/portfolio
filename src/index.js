import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import copyText from "./scripts/copyText";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
copyText();
