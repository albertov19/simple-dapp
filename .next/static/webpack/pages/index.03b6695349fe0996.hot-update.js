"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @metamask/detect-provider */ \"./node_modules/@metamask/detect-provider/dist/index.js\");\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Contract Stuff\nconst contractAddress = \"0x356bbbA2821F97E81B0eE759a727EFe9b1fAfbAC\";\nconst contractABI = [\n    {\n        anonymous: false,\n        inputs: [\n            {\n                indexed: false,\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"Increment\",\n        type: \"event\"\n    },\n    {\n        anonymous: false,\n        inputs: [\n            {\n                indexed: false,\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        name: \"Reset\",\n        type: \"event\"\n    },\n    {\n        inputs: [],\n        name: \"increment\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"number\",\n        outputs: [\n            {\n                internalType: \"uint256\",\n                name: \"\",\n                type: \"uint256\"\n            }\n        ],\n        stateMutability: \"view\",\n        type: \"function\"\n    },\n    {\n        inputs: [],\n        name: \"reset\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\"\n    }\n];\n// Provider\nconst endpoint = \"https://rpc.api.moonbase.moonbeam.network/\";\nconst provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.StaticJsonRpcProvider(endpoint);\nconst incrementerREAD = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, contractABI, provider);\nconst SimpleDapp = ()=>{\n    _s();\n    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Renders first\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkMetamask();\n        getValue();\n    }, []);\n    const checkMetamask = async ()=>{\n        const provider = await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_3___default()({\n            mustBeMetaMask: true\n        });\n        if (provider) {\n            const chainId = await provider.request({\n                method: \"eth_chainId\"\n            });\n            let networkName;\n            switch(chainId){\n                case \"0x507\":\n                    networkName = \"Moonbase Alpha\";\n                    break;\n                default:\n                    networkName = \"\";\n                    setAccount(\"Only Moonbase Alpha Supported\");\n                    break;\n            }\n            if (networkName !== \"\") {\n                const accounts = await ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                // Update State\n                if (accounts) {\n                    setAccount(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.getAddress(accounts[0]));\n                    setNetwork(networkName);\n                }\n            }\n        } else {\n            // MetaMask not detected\n            setAccount(\"MetaMask not Detected\");\n        }\n    };\n    const getValue = async ()=>{\n        const value = await incrementerREAD.number();\n        setNumber(value.toString());\n    };\n    const increment = async ()=>{\n        // Create Write-Version Contract interface\n        let wallet;\n        let incrementerWRITE;\n        if (typeof ethereum !== \"undefined\" && ethereum.chainId === \"0x507\") {\n            wallet = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum).getSigner();\n            incrementerWRITE = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, contractABI, wallet);\n        } else {\n            console.error(\"NO METAMASK DETECTED!\");\n        }\n        // Send Increment Tx\n        const tx = await incrementerWRITE.increment();\n        await tx.wait();\n        await getValue();\n    };\n    const reset = async ()=>{\n        setNumber(\"Resetting ...\");\n        // Create Write-Version Contract interface\n        let wallet;\n        let incrementerWRITE;\n        if (typeof ethereum !== \"undefined\" && ethereum.chainId === \"0x507\") {\n            wallet = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(ethereum).getSigner();\n            incrementerWRITE = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(contractAddress, contractABI, wallet);\n        } else {\n            console.error(\"NO METAMASK DETECTED!\");\n        }\n        // Send Reset Tx\n        const tx = await incrementerWRITE.reset();\n        await tx.wait();\n        await getValue();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Simple Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                        lineNumber: 162,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        sizes: \"32x32\",\n                        href: \"https://cdn-icons-png.flaticon.com/512/919/919851.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                        lineNumber: 163,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: account\n                    }, void 0, false, {\n                        fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                        lineNumber: 166,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: network\n                    }, void 0, false, {\n                        fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                        lineNumber: 167,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: number\n                    }, void 0, false, {\n                        fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                        lineNumber: 168,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                onClick: increment,\n                                children: \"Increase\"\n                            }, void 0, false, {\n                                fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                                lineNumber: 170,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                onClick: reset,\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                                lineNumber: 171,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                        lineNumber: 169,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/purestake/data/workshops/20230316_ChainlinkES/simple-dapp/pages/index.js\",\n        lineNumber: 160,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SimpleDapp, \"iuTlZvfzfKKRwVweT7wy9bEhtXY=\");\n_c = SimpleDapp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleDapp);\nvar _c;\n$RefreshReg$(_c, \"SimpleDapp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24sIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyIGZyb20gJ0BtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXInO1xuXG4vLyBDb250cmFjdCBTdHVmZlxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4MzU2YmJiQTI4MjFGOTdFODFCMGVFNzU5YTcyN0VGZTliMWZBZmJBQyc7XG5jb25zdCBjb250cmFjdEFCSSA9IFtcbiAge1xuICAgIGFub255bW91czogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IGZhbHNlLFxuICAgICAgICBpbnRlcm5hbFR5cGU6ICd1aW50MjU2JyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHR5cGU6ICd1aW50MjU2JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBuYW1lOiAnSW5jcmVtZW50JyxcbiAgICB0eXBlOiAnZXZlbnQnLFxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogZmFsc2UsXG4gICAgICAgIGludGVybmFsVHlwZTogJ3VpbnQyNTYnLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgdHlwZTogJ3VpbnQyNTYnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG5hbWU6ICdSZXNldCcsXG4gICAgdHlwZTogJ2V2ZW50JyxcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogJ2luY3JlbWVudCcsXG4gICAgb3V0cHV0czogW10sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiAnbm9ucGF5YWJsZScsXG4gICAgdHlwZTogJ2Z1bmN0aW9uJyxcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogJ251bWJlcicsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6ICd1aW50MjU2JyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHR5cGU6ICd1aW50MjU2JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6ICd2aWV3JyxcbiAgICB0eXBlOiAnZnVuY3Rpb24nLFxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiAncmVzZXQnLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogJ25vbnBheWFibGUnLFxuICAgIHR5cGU6ICdmdW5jdGlvbicsXG4gIH0sXG5dO1xuXG4vLyBQcm92aWRlclxuY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9ycGMuYXBpLm1vb25iYXNlLm1vb25iZWFtLm5ldHdvcmsvJztcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuU3RhdGljSnNvblJwY1Byb3ZpZGVyKGVuZHBvaW50KTtcbmNvbnN0IGluY3JlbWVudGVyUkVBRCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSSwgcHJvdmlkZXIpO1xuXG5jb25zdCBTaW1wbGVEYXBwID0gKCkgPT4ge1xuICBjb25zdCBbbmV0d29yaywgc2V0TmV0d29ya10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBSZW5kZXJzIGZpcnN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tNZXRhbWFzaygpO1xuXG4gICAgZ2V0VmFsdWUoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoZWNrTWV0YW1hc2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyKHsgbXVzdEJlTWV0YU1hc2s6IHRydWUgfSk7XG5cbiAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgIGNvbnN0IGNoYWluSWQgPSBhd2FpdCBwcm92aWRlci5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAnZXRoX2NoYWluSWQnLFxuICAgICAgfSk7XG5cbiAgICAgIGxldCBuZXR3b3JrTmFtZTtcbiAgICAgIHN3aXRjaCAoY2hhaW5JZCkge1xuICAgICAgICBjYXNlICcweDUwNyc6XG4gICAgICAgICAgbmV0d29ya05hbWUgPSAnTW9vbmJhc2UgQWxwaGEnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG5ldHdvcmtOYW1lID0gJyc7XG4gICAgICAgICAgc2V0QWNjb3VudCgnT25seSBNb29uYmFzZSBBbHBoYSBTdXBwb3J0ZWQnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChuZXR3b3JrTmFtZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFN0YXRlXG4gICAgICAgIGlmIChhY2NvdW50cykge1xuICAgICAgICAgIHNldEFjY291bnQoZXRoZXJzLnV0aWxzLmdldEFkZHJlc3MoYWNjb3VudHNbMF0pKTtcbiAgICAgICAgICBzZXROZXR3b3JrKG5ldHdvcmtOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNZXRhTWFzayBub3QgZGV0ZWN0ZWRcbiAgICAgIHNldEFjY291bnQoJ01ldGFNYXNrIG5vdCBEZXRlY3RlZCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRWYWx1ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGluY3JlbWVudGVyUkVBRC5udW1iZXIoKTtcbiAgICBzZXROdW1iZXIodmFsdWUudG9TdHJpbmcoKSk7XG4gIH07XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIENyZWF0ZSBXcml0ZS1WZXJzaW9uIENvbnRyYWN0IGludGVyZmFjZVxuICAgIGxldCB3YWxsZXQ7XG4gICAgbGV0IGluY3JlbWVudGVyV1JJVEU7XG4gICAgaWYgKHR5cGVvZiBldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcgJiYgZXRoZXJldW0uY2hhaW5JZCA9PT0gJzB4NTA3Jykge1xuICAgICAgd2FsbGV0ID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKS5nZXRTaWduZXIoKTtcbiAgICAgIGluY3JlbWVudGVyV1JJVEUgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgY29udHJhY3RBQkksIHdhbGxldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05PIE1FVEFNQVNLIERFVEVDVEVEIScpO1xuICAgIH1cblxuICAgIC8vIFNlbmQgSW5jcmVtZW50IFR4XG4gICAgY29uc3QgdHggPSBhd2FpdCBpbmNyZW1lbnRlcldSSVRFLmluY3JlbWVudCgpO1xuICAgIGF3YWl0IHR4LndhaXQoKTtcblxuICAgIGF3YWl0IGdldFZhbHVlKCk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TnVtYmVyKCdSZXNldHRpbmcgLi4uJyk7XG4gICAgLy8gQ3JlYXRlIFdyaXRlLVZlcnNpb24gQ29udHJhY3QgaW50ZXJmYWNlXG4gICAgbGV0IHdhbGxldDtcbiAgICBsZXQgaW5jcmVtZW50ZXJXUklURTtcbiAgICBpZiAodHlwZW9mIGV0aGVyZXVtICE9PSAndW5kZWZpbmVkJyAmJiBldGhlcmV1bS5jaGFpbklkID09PSAnMHg1MDcnKSB7XG4gICAgICB3YWxsZXQgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pLmdldFNpZ25lcigpO1xuICAgICAgaW5jcmVtZW50ZXJXUklURSA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSSwgd2FsbGV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignTk8gTUVUQU1BU0sgREVURUNURUQhJyk7XG4gICAgfVxuXG4gICAgLy8gU2VuZCBSZXNldCBUeFxuICAgIGNvbnN0IHR4ID0gYXdhaXQgaW5jcmVtZW50ZXJXUklURS5yZXNldCgpO1xuICAgIGF3YWl0IHR4LndhaXQoKTtcblxuICAgIGF3YWl0IGdldFZhbHVlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaW1wbGUgRGFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMzJ4MzInIGhyZWY9J2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzkxOS85MTk4NTEucG5nJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+e2FjY291bnR9PC9wPlxuICAgICAgICA8cD57bmV0d29ya308L3A+XG4gICAgICAgIDxwPntudW1iZXJ9PC9wPlxuICAgICAgICA8Rm9ybT5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2luY3JlbWVudH0+SW5jcmVhc2U8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Jlc2V0fT5SZXNldDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZURhcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsIkZvcm0iLCJldGhlcnMiLCJIZWFkIiwiZGV0ZWN0RXRoZXJldW1Qcm92aWRlciIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0QUJJIiwiYW5vbnltb3VzIiwiaW5wdXRzIiwiaW5kZXhlZCIsImludGVybmFsVHlwZSIsIm5hbWUiLCJ0eXBlIiwib3V0cHV0cyIsInN0YXRlTXV0YWJpbGl0eSIsImVuZHBvaW50IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJTdGF0aWNKc29uUnBjUHJvdmlkZXIiLCJpbmNyZW1lbnRlclJFQUQiLCJDb250cmFjdCIsIlNpbXBsZURhcHAiLCJuZXR3b3JrIiwic2V0TmV0d29yayIsImFjY291bnQiLCJzZXRBY2NvdW50IiwibnVtYmVyIiwic2V0TnVtYmVyIiwiY2hlY2tNZXRhbWFzayIsImdldFZhbHVlIiwibXVzdEJlTWV0YU1hc2siLCJjaGFpbklkIiwicmVxdWVzdCIsIm1ldGhvZCIsIm5ldHdvcmtOYW1lIiwiYWNjb3VudHMiLCJldGhlcmV1bSIsInV0aWxzIiwiZ2V0QWRkcmVzcyIsInZhbHVlIiwidG9TdHJpbmciLCJpbmNyZW1lbnQiLCJ3YWxsZXQiLCJpbmNyZW1lbnRlcldSSVRFIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiY29uc29sZSIsImVycm9yIiwidHgiLCJ3YWl0IiwicmVzZXQiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJzaXplcyIsImhyZWYiLCJkaXYiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});