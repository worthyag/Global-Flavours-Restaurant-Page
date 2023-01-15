/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  margin: 0;\\n  color: #555;\\n  background-color: #fff;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\n.container {\\n  margin: 20px 120px;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #555;\\n}\\n\\nheader .container {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\nheader .container .title .branding {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 8px;\\n}\\nheader .container .title .branding img {\\n  height: 3.5em;\\n  margin-bottom: -20px;\\n}\\nheader .container .title .branding h1 {\\n  margin-top: 0;\\n  margin-bottom: -20px;\\n  font-size: 3em;\\n}\\nheader .container .title p {\\n  text-align: center;\\n  font-weight: 300;\\n  font-style: italic;\\n}\\nheader .container nav {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 32px;\\n  border-radius: 2px;\\n}\\nheader .container nav a.current button {\\n  background-color: #6453a6;\\n  color: #fff;\\n  border: 2px solid #6453a6;\\n  border-bottom: none;\\n}\\nheader .container nav a button {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  font-size: 16px;\\n  background-color: rgba(132, 111, 217, 0.8392156863);\\n  border: 2px dashed #6453a6;\\n  color: #fff;\\n  padding: 8px 12px;\\n  border-radius: 2px 2px 0 0;\\n  border-bottom: none;\\n}\\nheader .container nav a button:hover {\\n  background-color: #6453a6;\\n  color: #fff;\\n}\\n\\nmain .container .boxes {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 12px;\\n  flex-wrap: wrap;\\n}\\nmain .container .boxes div.box:nth-child(1) {\\n  flex-basis: 18%;\\n}\\nmain .container .boxes div.box {\\n  flex: 1;\\n  flex-basis: 32%;\\n  height: 300px;\\n  position: relative;\\n}\\nmain .container .boxes div.box img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  border-radius: 8px;\\n}\\nmain .container .boxes div.box .description {\\n  visibility: hidden;\\n  position: absolute;\\n  height: 300px;\\n  border-radius: 8px;\\n  opacity: 0;\\n  margin-top: 0;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  background: #6453a6;\\n  color: #fff;\\n  text-align: center;\\n  vertical-align: center;\\n  transition: opacity 0.2s, visibility 0.2s;\\n}\\nmain .container .boxes div.box .description img {\\n  height: 50px;\\n  width: 50px;\\n  padding-top: 50px;\\n}\\nmain .container .boxes div.box .description p {\\n  padding: 50px;\\n  padding-top: 0;\\n}\\nmain .container .boxes div.box:hover .description {\\n  visibility: visible;\\n  opacity: 1;\\n}\\n\\nmain#menu .container .boxes div.box:nth-child(5n) {\\n  flex-basis: 40%;\\n}\\nmain#menu .container .boxes div.box {\\n  flex-basis: 20%;\\n  height: 250px;\\n}\\nmain#menu .container .boxes div.box .description {\\n  height: 250px;\\n  border-radius: 8px;\\n  overflow-y: scroll;\\n}\\nmain#menu .container .boxes div.box .description img {\\n  height: 30px;\\n  width: 30px;\\n  padding-top: 20px;\\n}\\nmain#menu .container .boxes div.box .description p {\\n  padding: 8px 16px;\\n  padding-top: 0;\\n}\\nmain#menu .container .boxes div.box .description p.heading {\\n  font-size: 1.3em;\\n  font-weight: 600;\\n}\\nmain#menu .container .boxes div.box .description span {\\n  background-color: #fff;\\n  color: #555;\\n  padding: 8px;\\n  border-radius: 2px;\\n}\\n\\nsection.form .container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 60vh;\\n}\\nsection.form .container h2 {\\n  font-size: 2.4em;\\n  margin-bottom: 32px;\\n}\\nsection.form .container form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n  gap: 28px;\\n}\\nsection.form .container form label {\\n  font-weight: 600;\\n  margin-right: 16px;\\n}\\nsection.form .container form input {\\n  height: 30px;\\n  width: 300px;\\n}\\nsection.form .container form input[type=submit] {\\n  width: 100%;\\n  height: auto;\\n  background-color: #6453a6;\\n  color: #fff;\\n  border: none;\\n  font-size: 20px;\\n  font-weight: 600;\\n  padding: 8px 16px;\\n  border-radius: 4px;\\n  margin-top: 20px;\\n}\\nsection.form .container form input[type=submit]:hover {\\n  background-color: rgba(132, 111, 217, 0.8392156863);\\n  cursor: pointer;\\n}\\n\\nsection.contact-us {\\n  background-color: #6453a6;\\n  color: #fff;\\n  text-align: center;\\n  padding: 20px;\\n}\\nsection.contact-us .group {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 12px;\\n}\\nsection.contact-us .group .group-heading {\\n  font-weight: 600;\\n}\\nsection.contact-us .group .group-heading::after {\\n  content: \\\" ~ \\\";\\n  font-weight: 400;\\n}\\n\\nsection.socials {\\n  text-align: center;\\n  padding: 20px;\\n}\\nsection.socials img {\\n  height: 20px;\\n  padding: 0 16px;\\n}\\n\\nfooter {\\n  margin-top: 50px;\\n}\\nfooter p {\\n  text-align: center;\\n}\\nfooter p img {\\n  margin-bottom: -7px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets.js":
/*!***********************!*\
  !*** ./src/assets.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_box_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/box-1.jpg */ \"./src/assets/box-1.jpg\");\n/* harmony import */ var _assets_box_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/box-2.jpg */ \"./src/assets/box-2.jpg\");\n/* harmony import */ var _assets_box_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/box-3.jpg */ \"./src/assets/box-3.jpg\");\n/* harmony import */ var _assets_box_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/box-4.jpg */ \"./src/assets/box-4.jpg\");\n/* harmony import */ var _assets_box_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/box-5.jpg */ \"./src/assets/box-5.jpg\");\n/* harmony import */ var _assets_box_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/box-6.jpg */ \"./src/assets/box-6.jpg\");\n/* harmony import */ var _assets_menu_1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/menu-1.jpg */ \"./src/assets/menu-1.jpg\");\n/* harmony import */ var _assets_menu_2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/menu-2.jpg */ \"./src/assets/menu-2.jpg\");\n/* harmony import */ var _assets_menu_3_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/menu-3.jpg */ \"./src/assets/menu-3.jpg\");\n/* harmony import */ var _assets_menu_4_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/menu-4.jpg */ \"./src/assets/menu-4.jpg\");\n/* harmony import */ var _assets_menu_5_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/menu-5.jpg */ \"./src/assets/menu-5.jpg\");\n/* harmony import */ var _assets_menu_6_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/menu-6.jpg */ \"./src/assets/menu-6.jpg\");\n/* harmony import */ var _assets_menu_7_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/menu-7.jpg */ \"./src/assets/menu-7.jpg\");\n/* harmony import */ var _assets_menu_8_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/menu-8.jpg */ \"./src/assets/menu-8.jpg\");\n/* harmony import */ var _assets_menu_9_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/menu-9.jpg */ \"./src/assets/menu-9.jpg\");\n/* harmony import */ var _assets_menu_10_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/menu-10.jpg */ \"./src/assets/menu-10.jpg\");\n/* harmony import */ var _assets_menu_11_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/menu-11.jpg */ \"./src/assets/menu-11.jpg\");\n/* harmony import */ var _assets_menu_12_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/menu-12.jpg */ \"./src/assets/menu-12.jpg\");\n/* harmony import */ var _assets_menu_13_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/menu-13.jpg */ \"./src/assets/menu-13.jpg\");\n/* harmony import */ var _assets_menu_14_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/menu-14.jpg */ \"./src/assets/menu-14.jpg\");\n/* harmony import */ var _assets_menu_15_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/menu-15.jpg */ \"./src/assets/menu-15.jpg\");\n/* harmony import */ var _assets_menu_16_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/menu-16.jpg */ \"./src/assets/menu-16.jpg\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _assets_logo_white_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/logo-white.svg */ \"./src/assets/logo-white.svg\");\n/* harmony import */ var _assets_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/instagram-icon.svg */ \"./src/assets/instagram-icon.svg\");\n/* harmony import */ var _assets_twitter_icon_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/twitter-icon.svg */ \"./src/assets/twitter-icon.svg\");\n/* harmony import */ var _assets_youtube_icon_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/youtube-icon.svg */ \"./src/assets/youtube-icon.svg\");\n/* harmony import */ var _assets_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/facebook-icon.svg */ \"./src/assets/facebook-icon.svg\");\n/* harmony import */ var _assets_github_icon_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/github-icon.svg */ \"./src/assets/github-icon.svg\");\n// Importing the images\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Importing the icons\n\n\n\n\n\n\n\n\nfunction addSrc(element, src) {\n    element.src = src;\n}\n\n\nfunction generateAssets() {\n    // Logos\n    const logoImg = document.querySelectorAll('.logo-img');\n\n    for (let i = 0; i < logoImg.length; i++) {\n        logoImg[i].src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_22__;\n    }\n\n    const logoWhiteImg = document.querySelectorAll('.logo-white-img');\n\n    for (let i = 0; i < logoWhiteImg.length; i++) {\n        logoWhiteImg[i].src = _assets_logo_white_svg__WEBPACK_IMPORTED_MODULE_23__;\n    }\n\n    // Boxes\n    addSrc(document.getElementById('box-1'), _assets_box_1_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    addSrc(document.getElementById('box-2'), _assets_box_2_jpg__WEBPACK_IMPORTED_MODULE_1__);\n    addSrc(document.getElementById('box-3'), _assets_box_3_jpg__WEBPACK_IMPORTED_MODULE_2__);\n    addSrc(document.getElementById('box-4'), _assets_box_4_jpg__WEBPACK_IMPORTED_MODULE_3__);\n    addSrc(document.getElementById('box-5'), _assets_box_5_jpg__WEBPACK_IMPORTED_MODULE_4__);\n    addSrc(document.getElementById('box-6'), _assets_box_6_jpg__WEBPACK_IMPORTED_MODULE_5__);\n\n    // Menu Items\n    addSrc(document.getElementById('menu-1'), _assets_menu_1_jpg__WEBPACK_IMPORTED_MODULE_6__);\n    addSrc(document.getElementById('menu-2'), _assets_menu_2_jpg__WEBPACK_IMPORTED_MODULE_7__);\n    addSrc(document.getElementById('menu-3'), _assets_menu_3_jpg__WEBPACK_IMPORTED_MODULE_8__);\n    addSrc(document.getElementById('menu-4'), _assets_menu_4_jpg__WEBPACK_IMPORTED_MODULE_9__);\n    addSrc(document.getElementById('menu-5'), _assets_menu_5_jpg__WEBPACK_IMPORTED_MODULE_10__);\n    addSrc(document.getElementById('menu-6'), _assets_menu_6_jpg__WEBPACK_IMPORTED_MODULE_11__);\n    addSrc(document.getElementById('menu-7'), _assets_menu_7_jpg__WEBPACK_IMPORTED_MODULE_12__);\n    addSrc(document.getElementById('menu-8'), _assets_menu_8_jpg__WEBPACK_IMPORTED_MODULE_13__);\n    addSrc(document.getElementById('menu-9'), _assets_menu_9_jpg__WEBPACK_IMPORTED_MODULE_14__);\n    addSrc(document.getElementById('menu-10'), _assets_menu_10_jpg__WEBPACK_IMPORTED_MODULE_15__);\n    addSrc(document.getElementById('menu-11'), _assets_menu_11_jpg__WEBPACK_IMPORTED_MODULE_16__);\n    addSrc(document.getElementById('menu-12'), _assets_menu_12_jpg__WEBPACK_IMPORTED_MODULE_17__);\n    addSrc(document.getElementById('menu-13'), _assets_menu_13_jpg__WEBPACK_IMPORTED_MODULE_18__);\n    addSrc(document.getElementById('menu-14'), _assets_menu_14_jpg__WEBPACK_IMPORTED_MODULE_19__);\n    addSrc(document.getElementById('menu-15'), _assets_menu_15_jpg__WEBPACK_IMPORTED_MODULE_20__);\n    addSrc(document.getElementById('menu-16'), _assets_menu_16_jpg__WEBPACK_IMPORTED_MODULE_21__);\n\n    // Icons\n    addSrc(document.getElementById('instagram'), _assets_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_24__);\n    addSrc(document.getElementById('twitter'), _assets_twitter_icon_svg__WEBPACK_IMPORTED_MODULE_25__);\n    addSrc(document.getElementById('youtube'), _assets_youtube_icon_svg__WEBPACK_IMPORTED_MODULE_26__);\n    addSrc(document.getElementById('facebook'), _assets_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_27__);\n\n    \n\n    for (let img of document.querySelectorAll('.github')) {\n        img.src = _assets_github_icon_svg__WEBPACK_IMPORTED_MODULE_28__;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAssets);\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets */ \"./src/assets.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\n(0,_assets__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n\n\nconsole.log(\"I a working!\");\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/box-1.jpg":
/*!******************************!*\
  !*** ./src/assets/box-1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"box-1.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/box-1.jpg?");

/***/ }),

/***/ "./src/assets/box-2.jpg":
/*!******************************!*\
  !*** ./src/assets/box-2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"box-2.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/box-2.jpg?");

/***/ }),

/***/ "./src/assets/box-3.jpg":
/*!******************************!*\
  !*** ./src/assets/box-3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"box-3.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/box-3.jpg?");

/***/ }),

/***/ "./src/assets/box-4.jpg":
/*!******************************!*\
  !*** ./src/assets/box-4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"box-4.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/box-4.jpg?");

/***/ }),

/***/ "./src/assets/box-5.jpg":
/*!******************************!*\
  !*** ./src/assets/box-5.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"box-5.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/box-5.jpg?");

/***/ }),

/***/ "./src/assets/box-6.jpg":
/*!******************************!*\
  !*** ./src/assets/box-6.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"box-6.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/box-6.jpg?");

/***/ }),

/***/ "./src/assets/facebook-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/facebook-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"facebook-icon.svg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/facebook-icon.svg?");

/***/ }),

/***/ "./src/assets/github-icon.svg":
/*!************************************!*\
  !*** ./src/assets/github-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"github-icon.svg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/github-icon.svg?");

/***/ }),

/***/ "./src/assets/instagram-icon.svg":
/*!***************************************!*\
  !*** ./src/assets/instagram-icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"instagram-icon.svg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/instagram-icon.svg?");

/***/ }),

/***/ "./src/assets/logo-white.svg":
/*!***********************************!*\
  !*** ./src/assets/logo-white.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"logo-white.svg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/logo-white.svg?");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"logo.svg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/logo.svg?");

/***/ }),

/***/ "./src/assets/menu-1.jpg":
/*!*******************************!*\
  !*** ./src/assets/menu-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-1.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-1.jpg?");

/***/ }),

/***/ "./src/assets/menu-10.jpg":
/*!********************************!*\
  !*** ./src/assets/menu-10.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-10.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-10.jpg?");

/***/ }),

/***/ "./src/assets/menu-11.jpg":
/*!********************************!*\
  !*** ./src/assets/menu-11.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-11.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-11.jpg?");

/***/ }),

/***/ "./src/assets/menu-12.jpg":
/*!********************************!*\
  !*** ./src/assets/menu-12.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-12.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-12.jpg?");

/***/ }),

/***/ "./src/assets/menu-13.jpg":
/*!********************************!*\
  !*** ./src/assets/menu-13.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-13.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-13.jpg?");

/***/ }),

/***/ "./src/assets/menu-14.jpg":
/*!********************************!*\
  !*** ./src/assets/menu-14.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-14.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-14.jpg?");

/***/ }),

/***/ "./src/assets/menu-15.jpg":
/*!********************************!*\
  !*** ./src/assets/menu-15.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-15.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-15.jpg?");

/***/ }),

/***/ "./src/assets/menu-16.jpg":
/*!********************************!*\
  !*** ./src/assets/menu-16.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-16.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-16.jpg?");

/***/ }),

/***/ "./src/assets/menu-2.jpg":
/*!*******************************!*\
  !*** ./src/assets/menu-2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-2.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-2.jpg?");

/***/ }),

/***/ "./src/assets/menu-3.jpg":
/*!*******************************!*\
  !*** ./src/assets/menu-3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-3.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-3.jpg?");

/***/ }),

/***/ "./src/assets/menu-4.jpg":
/*!*******************************!*\
  !*** ./src/assets/menu-4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-4.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-4.jpg?");

/***/ }),

/***/ "./src/assets/menu-5.jpg":
/*!*******************************!*\
  !*** ./src/assets/menu-5.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-5.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-5.jpg?");

/***/ }),

/***/ "./src/assets/menu-6.jpg":
/*!*******************************!*\
  !*** ./src/assets/menu-6.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-6.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-6.jpg?");

/***/ }),

/***/ "./src/assets/menu-7.jpg":
/*!*******************************!*\
  !*** ./src/assets/menu-7.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-7.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-7.jpg?");

/***/ }),

/***/ "./src/assets/menu-8.jpg":
/*!*******************************!*\
  !*** ./src/assets/menu-8.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-8.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-8.jpg?");

/***/ }),

/***/ "./src/assets/menu-9.jpg":
/*!*******************************!*\
  !*** ./src/assets/menu-9.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu-9.jpg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/menu-9.jpg?");

/***/ }),

/***/ "./src/assets/twitter-icon.svg":
/*!*************************************!*\
  !*** ./src/assets/twitter-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"twitter-icon.svg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/twitter-icon.svg?");

/***/ }),

/***/ "./src/assets/youtube-icon.svg":
/*!*************************************!*\
  !*** ./src/assets/youtube-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"youtube-icon.svg\";\n\n//# sourceURL=webpack://global-flavours-restaurant-page/./src/assets/youtube-icon.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;