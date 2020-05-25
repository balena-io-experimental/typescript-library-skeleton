# typescript-library-skeleton
This is a skeleton project for TypeScript libraries.

## Integrating with balenaCI

After cloning & scaffolding the repository
* Reset the package.json version to the desired one for the initial release, eg `0.1.0`.
* Delete the CHANGELOG.md & .versionbot folder.
* Set the appropriate .github/CODEOWNERS.
* Push the schaffolded project to `master`
* Create a new branch and open a PR for it.
* After balenaCI picks up the PR, go to the repository's settings page and add a
  `master` branch protection rule and mark the balenaCI checks as required.
