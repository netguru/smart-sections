import { calculateScrollPoint } from './calculateScrollPoint';

export function recalculateSections(
  coordinates,
  readingLine,
  fixedReadingLine,
  sections
) {
  return Object.keys(coordinates).map((sectionName, i, arr) => {
    const section = coordinates[sectionName];
    let active = false;
    const isOnReadingLine =
      section.top <= readingLine && section.bottom > readingLine;
    const isTheFirstSection = i === 0;
    const isTheLastSection = i === arr.length - 1;
    const isReadingLineAbove = readingLine < section.top;
    const isReadingLineBelow = readingLine > section.top;
    const isOnFixedReadingLine =
      section.top <= fixedReadingLine && section.bottom > fixedReadingLine;
    const isInOrAboveFixedReadingLine =
      isOnFixedReadingLine || section.top < fixedReadingLine;
    const isInOrBelowFixedReadingLine =
      isOnFixedReadingLine || section.top > fixedReadingLine;
    const isTheFirstSection
    if (
      isOnReadingLine ||
      (isTheFirstSection && isReadingLineAbove && isInOrAboveFixedReadingLine) ||
      (isTheLastSection && isReadingLineBelow && isInOrBelowFixedReadingLine)
    ) {
      active = true;
    }
    const yScrollPoint = calculateScrollPoint(sections, sectionName);
    return {
      name: sectionName,
      scroll: e => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();
        window.scrollTo(0, yScrollPoint);
      },
      active,
      yScrollPoint
    };
  });
}
