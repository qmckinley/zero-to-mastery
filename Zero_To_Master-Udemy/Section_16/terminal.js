// terminal 
ls                      // lists everything in current Directory
pwd                     // present working Directory
cd                      // change Directory 
cd ..                   // brings one Directory up
cd /                    // root Directory
cd ~                    // user Directory
cd Desktop/test         // access test folder on Desktop
clear                   // clear Terminal
open .                  // opens folder currently in
mkdir folderName        // makes folder in current Directory
touch fileName.path     // creates file in current Directory
open fileName.path      // opens specific file in current Directory
open -a "appName"       // opens specific application
open -a "appName" fileName.path     // opens specific file in specific app
mv fileName.path newFileName.path   // change file name
rm newFileName.path                 // removes file
rm -r folerName                     // removes Directory or folder
say the computer speaks             // say "the computer speaks"

// customize bash
nano ~/.bash_profile    // opens bash profile
source ~/.bash_profile  // reloads profile

// customize fish
fish_config                     // opens window to config
~/.config/fish/config.fish      // access profile
nano ~/.fish_profile            // opens bash profile
source ~/.fish_profile          // reloads profile

// git + github
// create repository / copy https://projectFilePath.git
git clone `https://projectFilePath.git` // download repository / minus back-tics
cd projectFilePath/                     // must be in a folder with a .git Directory
git status                              // check status of files
git add fileName.path                   // includes what will be committed
git add .                               // includes all files to be committed
git commit -m "updateDescription"       // committing changes to gitHub
git push                                // updates gitHub
git pull                                // pull the latest versions
git branch newBranch                    // starts a new branch
git checkout newBranch                  // switch to new branch
git checkout -b newBranch               // starts and switches to, newBranch
git merge master                        // merges master into your branch
git diff                                // see differences
git fetch upstream                      // fetch the branches and their respective commits
git remote -v                           // see current remote repository for your fork
git remote add upstream                 // 
git pull upstream master                //
git merge upstream/master               // merge changes from upstream/master to local master