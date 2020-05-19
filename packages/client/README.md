The client package was originally cloned from the [sveltejs/template](https://github.com/sveltejs/template) repository. This utilizes npm-run-all rather than serve function found in the original rollup config file. That caused a bug in local development with not closing port processes, occupying memory resources. This issue is documented [here](https://github.com/sveltejs/template/issues/124).

### Working Locally

This project (globally) has a preference of [yarn](https://classic.yarnpkg.com/en/) for managing dependencies. To work locally on the client, you should be in the client directory, run the following commands (one at a time).

```bash
yarn install
yarn dev
```

You should then be able to load up localhost:5000 in your browser and see the result.
