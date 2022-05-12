1. `curl https://cli-assets.heroku.com/install-ubuntu.sh | sh`
1. `heroku login -i` or `heroku login --interactive`
1. `heroku create [optional-name]`
1. `heroku git:remote -a myherokuapp`
1. Go to Heroku, find your app, go to settings. Find the buildpack settings, select Add Buildpack and enter in this url `https://buildpack-registry.s3.amazonaws.com/buildpacks/mars/create-react-app.tgz`
