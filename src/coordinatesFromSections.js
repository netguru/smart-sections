export function coordinatesFromSection(sectionEl) {
  const { top, bottom } = sectionEl.getBoundingClientRect();
  return {
    top: top + window.pageYOffset,
    bottom: bottom + window.pageYOffset
  };
}

export function coordinatesFromSections(sectionsEl) {
  return Object.keys(sectionsEl).reduce((acc, sectionName) => {
    const sectionEl = sectionsEl[sectionName];
    const { top, bottom } = sectionEl.getBoundingClientRect();
    return {
      ...acc,
      [sectionName]: {
        top: top + window.pageYOffset,
        bottom: bottom + window.pageYOffset
      }
    };
  }, {});
}
