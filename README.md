
## DevOps class at INSA Rennes, CS dep

A team is composed of three students.
Each team has to:
 - select a research paper to read and present;
 - build a devops toolchain for the app RennesGo

# Project

The given app RennesGo is currently not built in a devops toolchain.
RennesGo uses the Rennes openAPI, so be careful not to flood it (mock data in dev mode).

You have to select tools, change the app, improve it to build, package, release, deploy, and monitor the app as automatically as possible.

Several points are mandatory.

Following the Devops steps:

**code**

Mandatory: 
 - put your code on git

Optional:
 - Add new features


**test**

*backend*

Mandatory:
- unit test
- code convention (eg checkstyle)
- linters (eg spotbugs, errorprone)
- code coverage (fail if < x %)
- mutation analysis (eg [Descartes](https://github.com/STAMP-project/pitest-descartes/) tool for extreme mutation)

To do so, complete the Maven configuration file.

Optional:
- security analysis
- performance testing
- write new linters (eg using [Spoon](https://github.com/INRIA/spoon)
- or any relevant idea


*frontend*

Mandatory:
- front-end unit test (need to mock the back-end and its REST API, HTTP interceptor)
- system test (E2E testing) using [Protractor](https://www.protractortest.org).
- code convention
- linters
- code coverage (fail if < x %)


Optional:
- security analysis
- or any relevant idea


**build**


Mandatory:
- Two jenkinsfiles to specify how the back and the front are built
- Deploy a Jenkins somewhere on the planet that uses these jenkinsfile
- most of the tools used in the code step must stop a build if KO



**package**


Mandatory:
- Write two dockerfiles to launch the back and the front as micro-services



**deploy**

Mandatory:
- Continuous delivery: on each build success, the docker images are deployed on servers

Challenges:
- continuous service: how not to lose context? This may require to modify the back.


Some tools: watchtower, https://github.com/pyouroboros/ouroboros, https://docs.docker.com/engine/swarm/, https://www.portainer.io/, https://docs.docker.com/compose/

**operate**

Optional: 
- Chaos engineering: how to be resilient to failures?
- A/B testing


**monitor**

Optional: 
- log useful data
- use data mining techniques to extract information from logs
- monitor crashes and provide feedback to developers

Some tools: logstash, eliasticsearch, kibana



