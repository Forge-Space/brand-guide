# Contributing to Brand Guide

Thank you for contributing to Forge Space Brand Guide, the official brand identity library and design system documentation. This guide covers everything you need to know to submit high-quality contributions.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Requirements](#development-requirements)
- [Submitting Changes](#submitting-changes)
- [Review Process](#review-process)

---

## Code of Conduct

All contributors are expected to be respectful, constructive, and professional. Harassment or exclusionary behavior will not be tolerated.

---

## Getting Started

### 1. Fork and clone

```bash
git clone https://github.com/Forge-Space/brand-guide.git
cd brand-guide
npm install
```

### 2. Create a feature branch

```bash
git checkout -b feat/my-feature
# or
git checkout -b fix/issue-description
```

Branch naming conventions:
- `feat/*` - New features or brand assets
- `fix/*` - Bug fixes or visual corrections
- `chore/*` - Maintenance tasks
- `docs/*` - Documentation updates
- `refactor/*` - Code refactoring

### 3. Validate your environment

```bash
npm run lint
npm run build       # Builds both Astro site and npm library
npm test
```

---

## Development Requirements

### Dual-Purpose Project

Brand Guide serves two purposes:
1. **Astro site** - Public brand documentation at brand.forgespace.co
2. **npm library** - `@forgespace/brand-guide` for programmatic brand identity access

Changes should consider both use cases.

### Code Standards

- **TypeScript only** - All new code must be TypeScript
- **Function size** - Keep functions under 50 lines
- **Cyclomatic complexity** - Maximum complexity of 10 per function
- **Line width** - Maximum 100 characters per line
- **No comments** - Write self-documenting code unless clarification is absolutely necessary

### Brand Asset Guidelines

When adding or modifying brand assets:
- Export all logo variants in SVG, PNG (2048px), and WEBP (2048px) formats
- Ensure accessibility: minimum WCAG AA contrast ratios
- Follow naming conventions: `{brand}-{variant}-{tint}.{ext}` (e.g., `forge-wordmark-purple.svg`)
- Update `src/identity.ts` with new variants
- Add usage examples to relevant Astro pages

### Testing

- **Minimum 80% test coverage** for TypeScript utilities
- Test brand identity structure and type exports
- Validate asset generation scripts

```bash
# Run all tests
npm test

# Build and validate outputs
npm run build
```

### Quality Gates

Before opening a PR, ensure:

```bash
npm run lint          # ESLint passes
npm run build         # Both Astro site and npm library build
npm test              # All tests pass
```

---

## Submitting Changes

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add Modern Horn monochrome purple palette
fix: correct WCAG contrast ratio for secondary color
refactor: simplify brand identity export structure
chore: regenerate PNG/WEBP assets with sharp
docs: add repository branding guidelines
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `perf`, `chore`, `ci`, `style`

### Checklist before opening a PR

- [ ] Code follows TypeScript standards (functions <50 lines, complexity <10)
- [ ] Brand assets exported in all required formats (SVG, PNG, WEBP)
- [ ] Tests added for new functionality with ≥80% coverage
- [ ] All tests pass: `npm test`
- [ ] Lint checks pass: `npm run lint`
- [ ] Both builds succeed: `npm run build` (Astro + library)
- [ ] CHANGELOG.md updated under `[Unreleased]` section
- [ ] README.md updated if brand identity or public API changed
- [ ] Commit messages follow conventional commit format

### Opening the Pull Request

1. Push your branch: `git push origin feat/my-feature`
2. Open a PR against `main`
3. Fill in the PR template with:
   - Summary of changes
   - Visual previews (for brand asset changes)
   - Test plan
   - Breaking changes (if any)
4. Request a review from a maintainer

---

## Review Process

1. **Automated CI** runs lint, type-check, build, tests, and security scans
2. **Maintainer review** checks visual quality, brand consistency, and documentation
3. **Approval** requires CI passing + at least 1 maintainer approval
4. **Merge** is done by a maintainer using squash merge

Typical review turnaround: 2–5 business days.

---

## Questions?

Open a [GitHub Discussion](https://github.com/Forge-Space/brand-guide/discussions) or file an [issue](https://github.com/Forge-Space/brand-guide/issues).
