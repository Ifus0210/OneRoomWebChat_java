# Core GitHub Concepts

## 1. Commit
- A snapshot of project changes
- Saves the current state of your code
- Each commit has a unique ID (hash) that records who changed what and when
- Includes a message describing the changes

## 2. Push
- Uploads local commits to a remote repository (GitHub)
- Used to share your work with others
- Example command: `git push origin main`

## 3. Pull
- Downloads changes from remote repository to local repository
- Combines fetch and merge operations
- Example command: `git pull origin main`

## 4. Merge
- Combines changes from different branches
- Example: merging a feature branch into main
- May result in conflicts that need manual resolution

## 5. Branch
- Independent line of development
- Allows multiple developers to work simultaneously
- Created from main branch for new features or bug fixes
- Merged back to main when work is complete

## Basic Workflow
1. Create new branch (feature/login)
2. Make changes
3. Commit changes
4. Push to remote repository
5. Create Pull Request
6. Code review and merge to main 