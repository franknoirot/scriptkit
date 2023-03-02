// Name: Blog status

import "@johnlindquist/kit"

const badge = await widget(`<div class="p-4">
    <p class="flex"><a class="block mr-2 bold no-underline hover:text-sky-600" href="https://franknoirot.co">franknoirot.co </a>
        <a href="https://app.netlify.com/sites/franknoirot-2022/deploys">
            <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/9538147e-1a12-4da8-8471-3215bb5c0781/deploy-status">
        </a>
    </p>
</div>`, {
    alwaysOnTop: true,
    // transparent: true,
    // hasShadow: false,
});

setInterval()