# Shopify 2.0

This repository contains the source code for the Coding Quiz Pro.

## Table of Contents

[description](#description)  
[installation](#installation)  
[usage](#usage)  
[credits](#credits/contact)  
[contact](#contact)
[license](#license)

## Description

Coding Quiz Pro is an upgraded version of my first coding quiz project, found here:

https://rrich-kray.github.io/coding-quiz/

This is essentially a Coding quiz refactor using React, intended to further my competency with the framework. As such, it is entirely front-end based; all usernames and their associated scores are stored in local storage, similiar to its predecessor.

In its current build, the application:

- Presents users with a landing page consisting of "Start Game" and "View Scores" options.
- Allows users to take a timed quiz
- Allows users to view user scores

## Installation

No installation required. Simply follow the link below to access the application.

https://rrich-kray.github.io/coding-quiz-pro/

## How it Works

As previously stated, Coding Quiz Pro was built entirely using the React framework. Components are conditinally rendered based on a "currenPage" global state that is changed whenever the user navigates to a different section of the application. This is accomplished using function closures in child components. React useState is used to maintain user scores, deplete remaining time and display questions.

## License

Copyright (c) 2022, Ryan Kray
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE file in the root directory of this source tree and reproduced below.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. All advertising materials mentioning features or use of this software must display the following acknowledgement: This product includes software developed by Ryan Kray.
4. Neither the name of this application's developer nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER ''AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
