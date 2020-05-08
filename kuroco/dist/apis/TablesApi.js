/* tslint:disable */
/* eslint-disable */
import { __awaiter, __extends, __generator } from "tslib";
/**
 * Test
 * test
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
var usingModelsDescription = {};
var TablesApiRcmsApi1FirebaseMetaGetRequestDescription = (function (usingModelsDescription) { return "{\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n    multiple?: number;\n    outputAs?: string;\n}"; })(usingModelsDescription);
var TablesApiRcmsApi1TablesChecksheetGetRequestDescription = (function (usingModelsDescription) { return "{\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n    keyIdx?: Array<number>;\n    valueIdx?: Array<number>;\n    multiple?: number;\n    outputAs?: string;\n}"; })(usingModelsDescription);
var TablesApiRcmsApi1TablesDateGetRequestDescription = (function (usingModelsDescription) { return "{\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n    keyIdx?: Array<number>;\n    valueIdx?: Array<number>;\n    multiple?: number;\n    outputAs?: string;\n}"; })(usingModelsDescription);
var TablesApiRcmsApi1TablesInvalidGetRequestDescription = (function (usingModelsDescription) { return "{\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n    keyIdx?: Array<number>;\n    valueIdx?: Array<number>;\n    multiple?: number;\n    outputAs?: string;\n}"; })(usingModelsDescription);
var TablesApiRcmsApi1TablesMatrixGetRequestDescription = (function (usingModelsDescription) { return "{\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n    keyIdx?: Array<number>;\n    valueIdx?: Array<number>;\n    multiple?: number;\n    outputAs?: string;\n}"; })(usingModelsDescription);
var TablesApiRcmsApi1TablesSimpleGetRequestDescription = (function (usingModelsDescription) { return "{\n    outputFormat?: string;\n    lang?: string;\n    charset?: string;\n    keyIdx?: Array<number>;\n    valueIdx?: Array<number>;\n    multiple?: number;\n    outputAs?: string;\n    groupBy?: string;\n    groupAs?: string;\n}"; })(usingModelsDescription);
/**
 * no description
 */
var TablesApi = /** @class */ (function (_super) {
    __extends(TablesApi, _super);
    function TablesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TablesApi, "className", {
        get: function () {
            return 'TablesApi';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TablesApi, "infos", {
        get: function () {
            return [
                {
                    class: TablesApi,
                    url: "/rcms-api/1/firebase/meta",
                    requestMethodName: 'rcmsApi1FirebaseMetaGet',
                    requestRequiredParamSample: {},
                    requestParamInterfaceDescription: TablesApiRcmsApi1FirebaseMetaGetRequestDescription,
                },
                {
                    class: TablesApi,
                    url: "/rcms-api/1/tables/checksheet",
                    requestMethodName: 'rcmsApi1TablesChecksheetGet',
                    requestRequiredParamSample: {},
                    requestParamInterfaceDescription: TablesApiRcmsApi1TablesChecksheetGetRequestDescription,
                },
                {
                    class: TablesApi,
                    url: "/rcms-api/1/tables/date",
                    requestMethodName: 'rcmsApi1TablesDateGet',
                    requestRequiredParamSample: {},
                    requestParamInterfaceDescription: TablesApiRcmsApi1TablesDateGetRequestDescription,
                },
                {
                    class: TablesApi,
                    url: "/rcms-api/1/tables/invalid",
                    requestMethodName: 'rcmsApi1TablesInvalidGet',
                    requestRequiredParamSample: {},
                    requestParamInterfaceDescription: TablesApiRcmsApi1TablesInvalidGetRequestDescription,
                },
                {
                    class: TablesApi,
                    url: "/rcms-api/1/tables/matrix",
                    requestMethodName: 'rcmsApi1TablesMatrixGet',
                    requestRequiredParamSample: {},
                    requestParamInterfaceDescription: TablesApiRcmsApi1TablesMatrixGetRequestDescription,
                },
                {
                    class: TablesApi,
                    url: "/rcms-api/1/tables/simple",
                    requestMethodName: 'rcmsApi1TablesSimpleGet',
                    requestRequiredParamSample: {},
                    requestParamInterfaceDescription: TablesApiRcmsApi1TablesSimpleGetRequestDescription,
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  ### **Master::list (v1)**   ## Controller parameters  > **csvtable_id** `6`  > **key_idx** `0`  > **value_idx** `1`
     */
    TablesApi.prototype.rcmsApi1FirebaseMetaGet = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1FirebaseMetaGetRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1FirebaseMetaGetRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1FirebaseMetaGet.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1FirebaseMetaGet({})'
                                            ].join('\n'));
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        if (requestParameters.multiple !== undefined) {
                                            queryParameters['multiple'] = requestParameters.multiple;
                                        }
                                        if (requestParameters.outputAs !== undefined) {
                                            queryParameters['outputAs'] = requestParameters.outputAs;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/firebase/meta",
                                                method: 'GET',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1FirebaseMetaGetRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Master::list (v1)**   ## Controller parameters  > **csvtable_id** `4`
     */
    TablesApi.prototype.rcmsApi1TablesChecksheetGet = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1TablesChecksheetGetRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1TablesChecksheetGetRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1TablesChecksheetGet.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1TablesChecksheetGet({})'
                                            ].join('\n'));
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        if (requestParameters.keyIdx) {
                                            queryParameters['key_idx[]'] = requestParameters.keyIdx;
                                        }
                                        if (requestParameters.valueIdx) {
                                            queryParameters['value_idx[]'] = requestParameters.valueIdx;
                                        }
                                        if (requestParameters.multiple !== undefined) {
                                            queryParameters['multiple'] = requestParameters.multiple;
                                        }
                                        if (requestParameters.outputAs !== undefined) {
                                            queryParameters['outputAs'] = requestParameters.outputAs;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/tables/checksheet",
                                                method: 'GET',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1TablesChecksheetGetRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Master::list (v1)**   ## Controller parameters  > **csvtable_id** `3`
     */
    TablesApi.prototype.rcmsApi1TablesDateGet = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1TablesDateGetRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1TablesDateGetRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1TablesDateGet.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1TablesDateGet({})'
                                            ].join('\n'));
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        if (requestParameters.keyIdx) {
                                            queryParameters['key_idx[]'] = requestParameters.keyIdx;
                                        }
                                        if (requestParameters.valueIdx) {
                                            queryParameters['value_idx[]'] = requestParameters.valueIdx;
                                        }
                                        if (requestParameters.multiple !== undefined) {
                                            queryParameters['multiple'] = requestParameters.multiple;
                                        }
                                        if (requestParameters.outputAs !== undefined) {
                                            queryParameters['outputAs'] = requestParameters.outputAs;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/tables/date",
                                                method: 'GET',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1TablesDateGetRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Master::list (v1)**   ## Controller parameters  > **csvtable_id** `5`
     */
    TablesApi.prototype.rcmsApi1TablesInvalidGet = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1TablesInvalidGetRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1TablesInvalidGetRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1TablesInvalidGet.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1TablesInvalidGet({})'
                                            ].join('\n'));
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        if (requestParameters.keyIdx) {
                                            queryParameters['key_idx[]'] = requestParameters.keyIdx;
                                        }
                                        if (requestParameters.valueIdx) {
                                            queryParameters['value_idx[]'] = requestParameters.valueIdx;
                                        }
                                        if (requestParameters.multiple !== undefined) {
                                            queryParameters['multiple'] = requestParameters.multiple;
                                        }
                                        if (requestParameters.outputAs !== undefined) {
                                            queryParameters['outputAs'] = requestParameters.outputAs;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/tables/invalid",
                                                method: 'GET',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1TablesInvalidGetRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Master::list (v1)**   ## Controller parameters  > **csvtable_id** `2`
     */
    TablesApi.prototype.rcmsApi1TablesMatrixGet = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1TablesMatrixGetRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1TablesMatrixGetRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1TablesMatrixGet.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1TablesMatrixGet({})'
                                            ].join('\n'));
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        if (requestParameters.keyIdx) {
                                            queryParameters['key_idx[]'] = requestParameters.keyIdx;
                                        }
                                        if (requestParameters.valueIdx) {
                                            queryParameters['value_idx[]'] = requestParameters.valueIdx;
                                        }
                                        if (requestParameters.multiple !== undefined) {
                                            queryParameters['multiple'] = requestParameters.multiple;
                                        }
                                        if (requestParameters.outputAs !== undefined) {
                                            queryParameters['outputAs'] = requestParameters.outputAs;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/tables/matrix",
                                                method: 'GET',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1TablesMatrixGetRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *  ### **Master::list (v1)**   ## Controller parameters  > **csvtable_id** `1`
     */
    TablesApi.prototype.rcmsApi1TablesSimpleGet = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var rcmsApi1TablesSimpleGetRaw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rcmsApi1TablesSimpleGetRaw = function (requestParameters) { return __awaiter(_this, void 0, void 0, function () {
                            var queryParameters, headerParameters, response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (requestParameters === null || requestParameters === undefined) {
                                            throw new runtime.RequiredError('request parameter was null or undefined', [
                                                'request parameter was null or undefined when calling rcmsApi1TablesSimpleGet.',
                                                'This method requires parameters even if defined parameters are all optional (not required).',
                                                'In case of that, please specify empty Object.',
                                                'e.g. rcmsApi1TablesSimpleGet({})'
                                            ].join('\n'));
                                        }
                                        queryParameters = {};
                                        if (requestParameters.outputFormat !== undefined) {
                                            queryParameters['_output_format'] = requestParameters.outputFormat;
                                        }
                                        if (requestParameters.lang !== undefined) {
                                            queryParameters['_lang'] = requestParameters.lang;
                                        }
                                        if (requestParameters.charset !== undefined) {
                                            queryParameters['_charset'] = requestParameters.charset;
                                        }
                                        if (requestParameters.keyIdx) {
                                            queryParameters['key_idx[]'] = requestParameters.keyIdx;
                                        }
                                        if (requestParameters.valueIdx) {
                                            queryParameters['value_idx[]'] = requestParameters.valueIdx;
                                        }
                                        if (requestParameters.multiple !== undefined) {
                                            queryParameters['multiple'] = requestParameters.multiple;
                                        }
                                        if (requestParameters.outputAs !== undefined) {
                                            queryParameters['outputAs'] = requestParameters.outputAs;
                                        }
                                        if (requestParameters.groupBy !== undefined) {
                                            queryParameters['groupBy'] = requestParameters.groupBy;
                                        }
                                        if (requestParameters.groupAs !== undefined) {
                                            queryParameters['groupAs'] = requestParameters.groupAs;
                                        }
                                        headerParameters = {};
                                        if (this.configuration && this.configuration.apiKey) {
                                            headerParameters["X-RCMS-API-ACCESS-TOKEN"] = this.configuration.apiKey("X-RCMS-API-ACCESS-TOKEN"); // Token-Auth authentication
                                        }
                                        return [4 /*yield*/, this.request({
                                                path: "/rcms-api/1/tables/simple",
                                                method: 'GET',
                                                headers: headerParameters,
                                                query: queryParameters,
                                            })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                                }
                            });
                        }); };
                        return [4 /*yield*/, rcmsApi1TablesSimpleGetRaw(requestParameters)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TablesApi;
}(runtime.BaseAPI));
export { TablesApi };