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

/***/ "./src/currentWeather.js":
/*!*******************************!*\
  !*** ./src/currentWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _openWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openWeather */ \"./src/openWeather.js\");\n\n\n\nasync function CurrentWeather(location) {\n    const data = await (0,_openWeather__WEBPACK_IMPORTED_MODULE_0__.getCurrentData)(location);\n    const coords = await (0,_openWeather__WEBPACK_IMPORTED_MODULE_0__.getCoordinates)(location);\n    const name = `${coords.name}, ${coords.country}`;\n    const { main: weather, description, icon } = data.weather[0];\n    const { temp: temperature, feels_like: feels, pressure, humidity } = data.main;\n    const { deg: windDegree, speed: windSpeed } = data.wind;\n\n    return {\n        name, weather, description, icon,\n        temperature, feels, pressure, humidity,\n        windDegree, windSpeed\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentWeather);\n\n//# sourceURL=webpack://weather-app/./src/currentWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _currentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentWeather */ \"./src/currentWeather.js\");\n\n\nconst tokyo = (0,_currentWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('tokyo');\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/openWeather.js":
/*!****************************!*\
  !*** ./src/openWeather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCoordinates\": () => (/* binding */ getCoordinates),\n/* harmony export */   \"getCurrentData\": () => (/* binding */ getCurrentData),\n/* harmony export */   \"getDailyData\": () => (/* binding */ getDailyData)\n/* harmony export */ });\n\nconst KEY = '38e5c0d2f94d0db0af3651a34cae725c';\nasync function getCoordinates(name) {\n    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${KEY}`,{mode: \"cors\"});\n    const data = await response.json();\n    return data[0];\n}\n\n// imperial = farenheit, metric = celsius\nasync function getCurrentData(name, units = 'metric') {\n    const { lat, lon } = await getCoordinates(name);\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${KEY}`, {mode: 'cors'});\n    return response.json();\n}\n\nasync function getDailyData(name, units = 'metric') {\n    const { lat, lon } = await getCoordinates(name);\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${KEY}`, { mode: 'cors' });\n    return response.json();\n}\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/openWeather.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;