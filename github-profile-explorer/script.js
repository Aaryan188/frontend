document.getElementById('githubForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    
    document.getElementById('userInfo').innerHTML = '';

    // Note: For production, use environment variables or server-side authentication
    // For now, users can add their token here if needed
    const GITHUB_TOKEN = ''; // Add your GitHub token here if you have rate limit issues

    const headers = {
        'Accept': 'application/vnd.github.v3+json'
    };

    // Add authorization header only if token is provided
    if (GITHUB_TOKEN) {
        headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    fetch(`https://api.github.com/users/${username}`, { headers })
        .then(response => {
            if (response.status === 403) {
                throw new Error('Rate limit exceeded. Please wait an hour and try again.');
            }
            if (response.status === 404) {
                throw new Error('User not found. Please check the username.');
            }
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            return response.json();
        })
        .then(userData => {
            const userInfo = document.getElementById('userInfo');
            userInfo.innerHTML = `
                <div class="profile">
                    <div class="profile-header">
                        <img class="avatar" src="${userData.avatar_url}" alt="Profile">
                        <div class="profile-info">
                            <h2>${userData.name || username}</h2>
                            <p>@${userData.login}</p>
                        </div>
                    </div>
                    <div class="stats">
                        <div class="stat">
                            <div class="stat-value">${userData.public_repos}</div>
                            <div class="stat-label">Repositories</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${userData.followers}</div>
                            <div class="stat-label">Followers</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${userData.following}</div>
                            <div class="stat-label">Following</div>
                        </div>
                    </div>
                    <div class="repos-grid"></div>
                </div>
            `;
            return fetch(`https://api.github.com/users/${username}/repos`, { headers });
        })
        .then(response => response.json())
        .then(repos => {
            const reposGrid = document.querySelector('.repos-grid');
            repos.forEach(repo => {
                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.target = '_blank';
                repoLink.className = 'repo-link';
                repoLink.textContent = repo.name;
                reposGrid.appendChild(repoLink);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('userInfo').innerHTML = `
                <div class="error">
                    ${error.message}
                    <br><br>
                    <small>GitHub API allows 60 requests per hour. If you've been testing a lot, please wait before trying again.</small>
                </div>
            `;
        });
});