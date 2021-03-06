# wolkenkit

wolkenkit is a CQRS and event-sourcing framework for JavaScript and Node.js.

![wolkenkit](images/logo.png "wolkenkit")

> wolkenkit is a CQRS and event-sourcing framework for JavaScript and Node.js. wolkenkit uses an event-driven model based on DDD to setup an API for your business in no time. This way, wolkenkit bridges the language gap between your domain and technology.

## Table of contents

<!-- toc -->

- [Installation](#installation)
- [Quick start](#quick-start)
- [Getting help](#getting-help)
  * [Reporting an issue](#reporting-an-issue)
  * [Asking a question](#asking-a-question)
  * [Getting support](#getting-support)
- [Finding the code](#finding-the-code)
- [Running the build](#running-the-build)
- [License](#license)

<!-- tocstop -->

## Installation

```shell
$ npm install -g wolkenkit
```

## Quick start

For details see the [wolkenkit website](https://www.wolkenkit.io) and the [documentation](https://docs.wolkenkit.io). Also, you are welcome to <a href="http://slackin.wolkenkit.io" target="_blank" rel="noopener noreferrer">join us on Slack</a>, and have a look at the [previously asked questions at Stack Overflow](http://stackoverflow.com/questions/tagged/wolkenkit).

If you are curious on what's next, have a look at the [roadmap](roadmap.md).

## Getting help

If you need any help with wolkenkit, consider the following options. Also, you are welcome to <a href="http://slackin.wolkenkit.io" target="_blank" rel="noopener noreferrer">join us on Slack</a>.

### Reporting an issue

If you have found an issue please first have a look at the [previously reported issues](https://github.com/thenativeweb/wolkenkit/issues) to verify whether the issue has already been reported.

If not, [report a new issue](https://github.com/thenativeweb/wolkenkit/issues/new) and provide any steps required to reproduce the issue, as well as the expected and the actual result. Additionally provide the versions of wolkenkit and Docker, and the type and architecture of the operating system you are using.

Ideally you can also include a [short but complete code sample](http://www.yoda.arachsys.com/csharp/complete.html) to reproduce the issue. Anyway, depending on the issue, we know that this is not always possible.

Although wolkenkit is developed using multiple repositories, please report any issues to the [thenativeweb/wolkenkit](https://github.com/thenativeweb/wolkenkit/issues) repository, as this is the primary contact point.

### Asking a question

If you want to ask a question please first have a look at the [previously asked questions at Stack Overflow](http://stackoverflow.com/questions/tagged/wolkenkit) to verify whether your question has already been asked.

If not, [ask a new question](http://stackoverflow.com/questions/ask) and tag it with `wolkenkit`.

### Getting support

If you need help by the original authors of wolkenkit, e.g. to address issues specific to your environment or project, you may be interested in a paid support plan. For that, feel free to [contact the native web](mailto:hello@thenativeweb.io).

## Finding the code

Since wolkenkit is a distributed application, its code is spread across various repositories. To get started, have a look at these primary repositories:

- [wolkenkit-broker](https://github.com/thenativeweb/wolkenkit-broker)
- [wolkenkit-core](https://github.com/thenativeweb/wolkenkit-core)
- [wolkenkit-flows](https://github.com/thenativeweb/wolkenkit-flows)
- [wolkenkit-depot-file](https://github.com/thenativeweb/wolkenkit-depot-file)

Additionally, you may want to have a look at these repositories that contain the most important supporting modules:

- [tailwind](https://github.com/thenativeweb/tailwind)
- [sparbuch](https://github.com/thenativeweb/sparbuch)
- [commands-events](https://github.com/thenativeweb/commands-events)

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ bot
```

## License

Copyright (c) 2014-2017 the native web.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see [GNU Licenses](http://www.gnu.org/licenses/).
