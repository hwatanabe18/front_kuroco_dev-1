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
/**
 *
 * @export
 * @interface InlineObject5
 */
export interface InlineObject5 {
    /**
     * Topic title
     * @type {string}
     * @memberof InlineObject5
     */
    subject: string;
    /**
     * Category ID * 2 => CategoryForMultiple1 * 9 => CategoryForMultiple2
     * @type {number}
     * @memberof InlineObject5
     */
    contentsType?: InlineObject5ContentsTypeEnum;
    /**
     * Date
     * @type {Date}
     * @memberof InlineObject5
     */
    ymd?: Date;
    /**
     * Published / Not published
     * @type {string}
     * @memberof InlineObject5
     */
    openType?: InlineObject5OpenTypeEnum;
    /**
     * Display all topics to logged in members, regardless ther public/hidden status
     * @type {number}
     * @memberof InlineObject5
     */
    topicsFlg?: InlineObject5TopicsFlgEnum;
    /**
     * Season
     * @type {number}
     * @memberof InlineObject5
     */
    season?: number;
    /**
     * Contents
     * @type {string}
     * @memberof InlineObject5
     */
    contents?: string;
    /**
     * display up
     * @type {number}
     * @memberof InlineObject5
     */
    regularFlg?: number;
    /**
     * Display method
     * @type {number}
     * @memberof InlineObject5
     */
    linkFlg?: number;
    /**
     * Link
     * @type {string}
     * @memberof InlineObject5
     */
    linkUrl?: string;
    /**
     * Text
     * @type {Array<string | object>}
     * @memberof InlineObject5
     */
    extCol01?: Array<string | object>;
    /**
     * TextArea
     * @type {Array<string | object>}
     * @memberof InlineObject5
     */
    extCol02?: Array<string | object>;
    /**
     * Select
     * @type {Array<object | string | object>}
     * @memberof InlineObject5
     */
    extCol03?: Array<object | string | object>;
    /**
     * Checkbox
     * @type {Array<Array<object | string> | object>}
     * @memberof InlineObject5
     */
    extCol04?: Array<Array<object | string> | object>;
    /**
     * Date
     * @type {Array<Date | object | object>}
     * @memberof InlineObject5
     */
    extCol07?: Array<Date | object | object>;
    /**
     * DateTime
     * @type {Array<string | object | object>}
     * @memberof InlineObject5
     */
    extCol08?: Array<string | object | object>;
    /**
     * Tdfk
     * @type {Array<object>}
     * @memberof InlineObject5
     */
    extCol05?: Array<object>;
    /**
     * TdfkAndCity
     * @type {Array<object>}
     * @memberof InlineObject5
     */
    extCol15?: Array<object>;
    /**
     * Table
     * @type {Array<object | string | object>}
     * @memberof InlineObject5
     */
    extCol06?: Array<object | string | object>;
    /**
     * Relation
     * @type {Array<number | object>}
     * @memberof InlineObject5
     */
    extCol09?: Array<number | object>;
    /**
     * Private File
     * @type {Array<object>}
     * @memberof InlineObject5
     */
    extCol11?: Array<object>;
    /**
     * JSON
     * @type {Array<object>}
     * @memberof InlineObject5
     */
    extJsn12?: Array<object>;
    /**
     * HTML
     * @type {Array<string | object>}
     * @memberof InlineObject5
     */
    extCol13?: Array<string | object>;
    /**
     * Wysiwyg
     * @type {Array<string | object>}
     * @memberof InlineObject5
     */
    extCol14?: Array<string | object>;
    /**
     * /label/send_validate
     * @type {boolean}
     * @memberof InlineObject5
     */
    validateOnly?: boolean;
}
export declare const InlineObject5Description = "{\n    /**\n     * Topic title\n     * @type {string}\n     */\n    subject: string;\n    /**\n     * Category ID * 2 => CategoryForMultiple1 * 9 => CategoryForMultiple2\n     * @type {number}\n     */\n    contentsType?: InlineObject5ContentsTypeEnum;\n    /**\n     * Date\n     * @type {Date}\n     */\n    ymd?: Date;\n    /**\n     * Published / Not published\n     * @type {string}\n     */\n    openType?: InlineObject5OpenTypeEnum;\n    /**\n     * Display all topics to logged in members, regardless ther public/hidden status\n     * @type {number}\n     */\n    topicsFlg?: InlineObject5TopicsFlgEnum;\n    /**\n     * Season\n     * @type {number}\n     */\n    season?: number;\n    /**\n     * Contents\n     * @type {string}\n     */\n    contents?: string;\n    /**\n     * display up\n     * @type {number}\n     */\n    regularFlg?: number;\n    /**\n     * Display method\n     * @type {number}\n     */\n    linkFlg?: number;\n    /**\n     * Link\n     * @type {string}\n     */\n    linkUrl?: string;\n    /**\n     * Text\n     * @type {Array<string | object>}\n     */\n    extCol01?: Array<string | object>;\n    /**\n     * TextArea\n     * @type {Array<string | object>}\n     */\n    extCol02?: Array<string | object>;\n    /**\n     * Select\n     * @type {Array<object | string | object>}\n     */\n    extCol03?: Array<object | string | object>;\n    /**\n     * Checkbox\n     * @type {Array<Array<object | string> | object>}\n     */\n    extCol04?: Array<Array<object | string> | object>;\n    /**\n     * Date\n     * @type {Array<Date | object | object>}\n     */\n    extCol07?: Array<Date | object | object>;\n    /**\n     * DateTime\n     * @type {Array<string | object | object>}\n     */\n    extCol08?: Array<string | object | object>;\n    /**\n     * Tdfk\n     * @type {Array<object>}\n     */\n    extCol05?: Array<object>;\n    /**\n     * TdfkAndCity\n     * @type {Array<object>}\n     */\n    extCol15?: Array<object>;\n    /**\n     * Table\n     * @type {Array<object | string | object>}\n     */\n    extCol06?: Array<object | string | object>;\n    /**\n     * Relation\n     * @type {Array<number | object>}\n     */\n    extCol09?: Array<number | object>;\n    /**\n     * Private File\n     * @type {Array<object>}\n     */\n    extCol11?: Array<object>;\n    /**\n     * JSON\n     * @type {Array<object>}\n     */\n    extJsn12?: Array<object>;\n    /**\n     * HTML\n     * @type {Array<string | object>}\n     */\n    extCol13?: Array<string | object>;\n    /**\n     * Wysiwyg\n     * @type {Array<string | object>}\n     */\n    extCol14?: Array<string | object>;\n    /**\n     * /label/send_validate\n     * @type {boolean}\n     */\n    validateOnly?: boolean;\n}";
export declare function InlineObject5FromJSON(json: any): InlineObject5;
export declare function InlineObject5FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject5;
export declare function InlineObject5ToJSON(value?: InlineObject5 | null): any;
/**
* @export
* @enum {string}
*/
export declare enum InlineObject5ContentsTypeEnum {
    _2 = 2,
    _9 = 9
}
/**
* @export
* @enum {string}
*/
export declare enum InlineObject5OpenTypeEnum {
    _open = "open",
    _close = "close",
    _default = "default"
}
/**
* @export
* @enum {string}
*/
export declare enum InlineObject5TopicsFlgEnum {
    _0 = 0,
    _1 = 1
}
//# sourceMappingURL=InlineObject5.d.ts.map