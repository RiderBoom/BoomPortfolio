import test from 'node:test';
import assert from 'node:assert/strict';
import { profileData, projectCategories, projectsData, servicesData } from '../src/data/portfolioData.js';

test('portfolio contact links are configured', () => {
  assert.match(profileData.contact.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  assert.equal(profileData.contact.github, 'https://github.com/RiderBoom');
  assert.notEqual(profileData.contact.linkedin, 'https://linkedin.com');
});

test('every project belongs to a visible category and has a valid live URL', () => {
  for (const project of projectsData) {
    assert.ok(projectCategories.includes(project.category));
    assert.ok(project.liveUrl === '#' || URL.canParse(project.liveUrl));
    assert.ok(project.highlights.length >= 2);
  }
});

test('service identifiers are unique', () => {
  assert.equal(new Set(servicesData.map(({ id }) => id)).size, servicesData.length);
});
