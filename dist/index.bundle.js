"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'JetBrains Mono', monospace;\\r\\n  width: 50vw;\\r\\n  max-width: 700px;\\r\\n  height: 70vh;\\r\\n  border: solid black;\\r\\n  margin: 15vh 25vw;\\r\\n  box-sizing: border-box;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n#titleSect {\\r\\n  padding: 2vh 2vw;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: solid black 3px;\\r\\n}\\r\\n\\r\\n#renew {\\r\\n  /* color: black; */\\r\\n  /* display: flex; */\\r\\n  /* align-items: center; */\\r\\n  /* border: none; */\\r\\n}\\r\\n\\r\\n#listTitle {\\r\\n  font-size: 2rem;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#formSect {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#inputForm {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  padding: 0 2vw;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: solid black 3px;\\r\\n  height: 7vh;\\r\\n}\\r\\n\\r\\n#taskInput {\\r\\n  border: none;\\r\\n  font-size: 1.2rem;\\r\\n  font-family: 'JetBrains Mono', monospace;\\r\\n  padding: 2vh 0;\\r\\n  width: 90%;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#addTaskBttn {\\r\\n  position: relative;\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n  padding: 0;\\r\\n  width: 10%;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.taskWrap {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 2vh;\\r\\n  gap: 10px;\\r\\n  border-bottom: solid black 1px;\\r\\n}\\r\\n\\r\\n.moreBttn {\\r\\n  margin-left: auto;\\r\\n  width: 30px;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  width: 15px;\\r\\n  height: 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.taskLabel {\\r\\n  font-size: 1rem;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  font-family: 'JetBrains', monospace;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.taskLabel::selection {\\r\\n  color: white;\\r\\n  background: black;\\r\\n}\\r\\n\\r\\n#clearBttnSect {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  border-top: solid black 3px;\\r\\n  margin-top: auto;\\r\\n}\\r\\n\\r\\n#clearBttn {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.moreMenu {\\r\\n  margin-left: auto;\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  width: 120px;\\r\\n  justify-content: end;\\r\\n}\\r\\n\\r\\n.menuVis {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.menuHide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n@media all and (max-width: 768px) {\\r\\n  body {\\r\\n    width: 80vw;\\r\\n    margin: 15vh 10vw;\\r\\n    height: 70vh;\\r\\n  }\\r\\n\\r\\n  .taskWrap {\\r\\n    max-width: 80vw;\\r\\n    gap: 0;\\r\\n  }\\r\\n\\r\\n  .taskLabel {\\r\\n    max-width: 30vw;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n/* harmony import */ var _modules_vars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/vars.js */ \"./src/modules/vars.js\");\n\n\n\n\nconst tasksArr = new _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const hola = JSON.parse(localStorage.getItem('tasks'));\n  if (hola !== null) {\n    for (let i = 0; i < hola.length; i += 1) {\n      tasksArr.pushi(hola[i]);\n    }\n  }\n  tasksArr.createHTML();\n});\n\n_modules_vars_js__WEBPACK_IMPORTED_MODULE_2__.addTaskBttn.addEventListener('submit', (evt) => {\n  evt.preventDefault();\n  _modules_vars_js__WEBPACK_IMPORTED_MODULE_2__.listSection.innerHTML = '';\n  const taskInput = document.getElementById('taskInput');\n  tasksArr.getTaskName(taskInput);\n  tasksArr.setIndex();\n  tasksArr.createHTML();\n  tasksArr.addToLocalStorage();\n});\n\n_modules_vars_js__WEBPACK_IMPORTED_MODULE_2__.clearBttn.addEventListener('click', () => {\n  tasksArr.clearTasks();\n});\n\n_modules_vars_js__WEBPACK_IMPORTED_MODULE_2__.renewBttn.addEventListener('click', () => {\n  localStorage.clear();\n  _modules_vars_js__WEBPACK_IMPORTED_MODULE_2__.listSection.innerHTML = '';\n  tasksArr.deleteArr();\n});\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Methods)\n/* harmony export */ });\n/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vars.js */ \"./src/modules/vars.js\");\n\n\nclass Methods {\n  constructor() {\n    this.tasksArr = [];\n  }\n\n  pushi(array) {\n    this.tasksArr.push(array);\n    return this.tasksArr;\n  }\n\n  deleteArr() {\n    while(this.tasksArr.length > 0) {\n      this.tasksArr.pop();\n    }\n    return this.tasksArr;\n  }\n\n  static editTask(label, edBttn, dnBttn) {\n    edBttn.classList.replace('menuVis', 'menuHide');\n    dnBttn.classList.replace('menuHide', 'menuVis');\n    label.readOnly = false;\n    label.select();\n  }\n\n  createHTML() {\n    const { tasksArr } = this;\n    for (let i = 0; i < tasksArr.length; i += 1) {\n      const taskDesc = tasksArr[i].description;\n      const taskStatus = tasksArr[i].completed;\n      const taskIndex = tasksArr[i].index;\n\n      const taskWrap = document.createElement('div');\n      taskWrap.setAttribute('id', taskStatus);\n      taskWrap.classList.add('taskWrap');\n      taskWrap.setAttribute('id', taskIndex);\n      _vars_js__WEBPACK_IMPORTED_MODULE_0__.listSection.appendChild(taskWrap);\n\n      const checkbox = document.createElement('input');\n      checkbox.setAttribute('type', 'checkbox');\n      checkbox.setAttribute('name', `checkbox${taskIndex}`);\n      checkbox.classList.add('checkbox');\n      taskWrap.append(checkbox);\n\n      const taskLabel = document.createElement('input');\n      taskLabel.setAttribute('type', 'text');\n      taskLabel.setAttribute('value', taskDesc);\n      taskLabel.readOnly = true;\n      taskLabel.classList.add('taskLabel');\n      taskLabel.setAttribute('id', `text${taskIndex}`);\n      taskLabel.innerHTML = taskDesc;\n      taskWrap.append(taskLabel);\n\n      const moreMenu = document.createElement('div');\n      moreMenu.classList.add('menuHide');\n      moreMenu.classList.add('moreMenu');\n      const editBttn = document.createElement('span');\n      editBttn.classList.add('material-symbols-outlined');\n      editBttn.classList.add('menuVis');\n      editBttn.innerHTML = 'edit';\n      moreMenu.append(editBttn);\n      const doneBttn = document.createElement('span');\n      doneBttn.classList.add('material-symbols-outlined');\n      doneBttn.classList.add('menuHide');\n      doneBttn.innerHTML = 'done';\n      moreMenu.append(doneBttn);\n      const deleteBttn = document.createElement('span');\n      deleteBttn.classList.add('material-symbols-outlined');\n      deleteBttn.innerHTML = 'delete';\n      moreMenu.append(deleteBttn);\n      const closeMenu = document.createElement('span');\n      closeMenu.classList.add('material-symbols-outlined');\n      moreMenu.append(closeMenu);\n      closeMenu.innerHTML = 'close';\n      taskWrap.append(moreMenu);\n\n      const moreBttn = document.createElement('span');\n      moreBttn.classList.add('material-symbols-outlined');\n      moreBttn.classList.add('moreBttn');\n      moreBttn.classList.add('menuVis');\n      moreBttn.innerHTML = 'chevron_left';\n\n      editBttn.addEventListener('click', () => {\n        Methods.editTask(taskLabel, editBttn, doneBttn);\n      });\n      doneBttn.addEventListener('click', () => {\n        // eslint-disable-next-line no-use-before-define\n        this.editLocalSt(editBttn, doneBttn, taskLabel, taskWrap.id);\n      });\n\n      moreBttn.addEventListener('click', () => {\n        moreMenu.classList.replace('menuHide', 'menuVis');\n        moreBttn.classList.replace('menuVis', 'menuHide');\n      });\n      closeMenu.addEventListener('click', () => {\n        moreBttn.classList.replace('menuHide', 'menuVis');\n        moreMenu.classList.replace('menuVis', 'menuHide');\n      });\n\n      checkbox.addEventListener('click', (e) => {\n        // eslint-disable-next-line no-use-before-define\n        this.taskStatusModifier(e);\n      });\n\n      deleteBttn.addEventListener('click', (e) => {\n        // eslint-disable-next-line no-use-before-define\n        this.deleteTask(e);\n      });\n\n      taskWrap.append(moreBttn);\n    }\n  }\n\n  getTaskName(taskInput) {\n    const { tasksArr } = this;\n    const newTask = new _vars_js__WEBPACK_IMPORTED_MODULE_0__.Task(taskInput.value);\n    tasksArr.push(newTask);\n    taskInput.value = '';\n  }\n\n  addToLocalStorage() {\n    const { tasksArr } = this;\n    const arrLocalStorage = JSON.stringify(tasksArr);\n    localStorage.setItem('tasks', arrLocalStorage);\n  }\n\n  static addAsObject(tasksArr) {\n    const arrLocalStorage = JSON.stringify(tasksArr);\n    localStorage.setItem('objeto', arrLocalStorage);\n  }\n\n  setIndex() {\n    const { tasksArr } = this;\n    for (let i = 0; i < tasksArr.length; i += 1) {\n      tasksArr[i].index = i + 1;\n    }\n  }\n\n  taskStatusModifier(e) {\n    const { tasksArr } = this;\n    const box = e.target.checked;\n    const div = e.target.parentNode.childNodes[1];\n    const id = e.target.parentNode.id - 1;\n    if (box === true) {\n      div.classList.add('completed');\n      tasksArr[id].completed = true;\n      this.addToLocalStorage();\n    }\n    if (box === false) {\n      div.classList.remove('completed');\n      tasksArr[id].completed = false;\n      this.addToLocalStorage();\n    }\n  }\n\n  editLocalSt(edBttn, dnBttn, label, currentIndex) {\n    const { tasksArr } = this;\n    edBttn.classList.replace('menuHide', 'menuVis');\n    dnBttn.classList.replace('menuVis', 'menuHide');\n    label.readOnly = true;\n\n    for (let i = 0; i < tasksArr.length; i += 1) {\n      if ((currentIndex - 1) === i) {\n        tasksArr[i].description = label.value;\n      }\n    }\n    this.addToLocalStorage();\n  }\n\n  deleteTask(e) {\n    const { tasksArr } = this;\n    _vars_js__WEBPACK_IMPORTED_MODULE_0__.listSection.innerHTML = '';\n    const taskID = e.target.parentNode.parentNode.id - 1;\n\n    for (let i = 0; i < tasksArr.length; i += 1) {\n      if (taskID === i) {\n        tasksArr.splice(i, 1);\n      }\n    }\n\n    this.setIndex();\n    this.addToLocalStorage();\n    this.createHTML();\n  }\n\n  clearTasks() {\n    const { tasksArr } = this;\n    _vars_js__WEBPACK_IMPORTED_MODULE_0__.listSection.innerHTML = '';\n    for (let i = 0; i < tasksArr.length; i += 1) {\n      if (tasksArr[i].completed === true) {\n        tasksArr.splice(i, 1);\n        i -= 1;\n      }\n    }\n    this.setIndex();\n    this.addToLocalStorage();\n    this.createHTML();\n  }\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/vars.js":
/*!*****************************!*\
  !*** ./src/modules/vars.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"addTaskBttn\": () => (/* binding */ addTaskBttn),\n/* harmony export */   \"clearBttn\": () => (/* binding */ clearBttn),\n/* harmony export */   \"listSection\": () => (/* binding */ listSection),\n/* harmony export */   \"renewBttn\": () => (/* binding */ renewBttn)\n/* harmony export */ });\nconst listSection = document.getElementById('listSect');\nconst addTaskBttn = document.getElementById('inputForm');\nconst clearBttn = document.getElementById('clearBttn');\nconst renewBttn = document.getElementById('renew');\n\nclass Task {\n  constructor(description) {\n    this.description = description;\n    this.completed = false;\n    this.index = undefined;\n  }\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/vars.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);