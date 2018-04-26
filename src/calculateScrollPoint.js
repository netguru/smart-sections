import { getDocumentHeight, getViewportHeight } from './domUtils';
import { calculateReadingLine } from './readingLine';
import { coordinatesFromSection } from './coordinatesFromSections';

export function calculateScrollPoint(sections, sectionName) {
  const viewportHeight = getViewportHeight();
  const sectionEl = sections[sectionName];
  const elementCoordinates = coordinatesFromSection(sectionEl);
  const isTheLastElement =
    Object.keys(sections)[Object.keys(sections).length - 1] === sectionName;
  const toBottom = elementCoordinates.bottom - viewportHeight / 3;
  const toTop = elementCoordinates.top;
  if (isTheLastElement) return toTop;
  const result = Math.min(toBottom, toTop);
  const readingLine = calculateReadingLine(
    result,
    viewportHeight,
    getDocumentHeight()
  );
  if (readingLine > elementCoordinates.bottom) {
    return result - (readingLine - elementCoordinates.bottom) / 3;
  }
  return result;
}
