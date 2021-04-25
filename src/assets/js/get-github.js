'use strict';
import getGithubTemp from './github-temp';

async function getGitData() {
    try {
        const request = fetch('https://api.github.com/users/fourfourty');
        const response = (await request).json();
        return response;
    }
    catch(err) {
        console.log(err);
    }
 }

 export default getGitData;