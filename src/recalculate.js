import { recalculateSections } from './recalculateSections';
import { coordinatesFromSections } from './coordinatesFromSections';
import { calculateFixedReadingLine, calculateReadingLine } from './readingLine';
import { getScrollTop, getViewportHeight, getDocumentHeight } from './domUtils';

export function recalculate(sections) {
  const scrollTop = getScrollTop();
  const viewportHeight = getViewportHeight();
  const documentHeight = getDocumentHeight();
  const coordinates = coordinatesFromSections(sections);
  const readingLine = calculateReadingLine(
    scrollTop,
    viewportHeight,
    documentHeight
  );
  const fixedReadingLine = calculateFixedReadingLine(scrollTop, viewportHeight);
  return recalculateSections(
    coordinates,
    readingLine,
    fixedReadingLine,
    sections
  );
}
