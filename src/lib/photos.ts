import banquetHall from "@/assets/photos/banquet-hall.jpg";
import banquetTable from "@/assets/photos/banquet-table.jpg";
import aoDaiTable from "@/assets/photos/ao-dai-table.jpg";
import bingoTable from "@/assets/photos/bingo-table.jpg";
import coffeeByHandGroup from "@/assets/photos/coffee-by-hand-group.jpg";
import facePainting from "@/assets/photos/face-painting.jpg";
import fieldDayGame from "@/assets/photos/field-day-game.jpg";
import fieldDayRibbons from "@/assets/photos/field-day-ribbons.jpg";
import parkGroup from "@/assets/photos/park-group.jpg";
import picnicPavilion from "@/assets/photos/picnic-pavilion.jpg";
import stagePerformance from "@/assets/photos/stage-performance.jpg";

// All community photos live here. To swap one, drop a new file into
// src/assets/photos/ and change its import above. Executive board headshots
// are separate (see routes/leadership.tsx).
export type Photo = { src: string; alt: string };

export const PHOTOS = {
  banquetHall: {
    src: banquetHall,
    alt: "Students seated at round tables with green tablecloths in a school commons during a GAASA event",
  },
  banquetTable: {
    src: banquetTable,
    alt: "Students in formal outfits seated around a table with a blue tablecloth",
  },
  aoDaiTable: {
    src: aoDaiTable,
    alt: "Students in white áo dài seated together at a decorated table",
  },
  bingoTable: {
    src: bingoTable,
    alt: "Students seated along a long table with bingo cards and drinks",
  },
  coffeeByHandGroup: {
    src: coffeeByHandGroup,
    alt: "A large group of GAASA members posing together outside The Coffee by Hand",
  },
  facePainting: {
    src: facePainting,
    alt: "A student getting face paint applied under a wooden pavilion",
  },
  fieldDayGame: {
    src: fieldDayGame,
    alt: "Students playing a group game on a grass field",
  },
  fieldDayRibbons: {
    src: fieldDayRibbons,
    alt: "Students holding red place ribbons and small snack prizes outdoors",
  },
  parkGroup: {
    src: parkGroup,
    alt: "A group of GAASA members posing together on a park lawn",
  },
  picnicPavilion: {
    src: picnicPavilion,
    alt: "Students gathered at picnic tables under a wooden pavilion",
  },
  stagePerformance: {
    src: stagePerformance,
    alt: "Dancers in football jerseys and white skirts performing on stage",
  },
} satisfies Record<string, Photo>;
