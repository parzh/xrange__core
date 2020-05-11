# `@xrange/core`

### The very core of `xrange`, provided as a separate package

<p align="center">
  <sub>
    Created with <a href="https://npmjs.org/package/create-package-typescript"><code>create-package-typescript</code></a>
  </sub>
</p>

## Differences from `xrange`:
- only numeric implementation with two or three numeric arguments: `xrange(start, stop, step?)`;
- no custom errors, such as `"argument is required"` or `"argument must infinite"`;
- no intelligent boundary swapping, &mdash; e.g., `xrange(10, 1)` will not iterate;
- only Node.JS is supported (for now at least);
