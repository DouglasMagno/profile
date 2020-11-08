import MarkdownIt from "markdown-it";

export const profile = async () => {
    return window.axios.get('https://api.github.com/users/DouglasMagno');
};

export const repositories = async (tags) => {
    const url = tags.length ? `https://api.github.com/search/repositories?q=${tags} in:readme+user:DouglasMagno` : "https://api.github.com/users/DouglasMagno/repos";
    return await axios.get(url);
};

export const getRepository = async (repository, project) => {
    await axios.get(`https://api.github.com/repos/DouglasMagno/${repository}`).then((response) => {
        project.title = response.data.name;
        project.description = response.data.description;
        project.defaultBranch = response.data.default_branch;
    });
    const requestLanguages = axios.get(`https://api.github.com/repos/DouglasMagno/${repository}/languages`);
    const requestReadme = axios.get(`https://raw.githubusercontent.com/DouglasMagno/${repository}/${project.defaultBranch}/README.md`);
    await axios.all([requestLanguages, requestReadme]).then(axios.spread((...responses) => {
        const responseLanguages = responses[0];
        const responseReadme = responses[1];
        const md = new MarkdownIt();
        project.readme = md.render(responseReadme.data);
        project.languages = responseLanguages.data;
    }));
    return project;
};
