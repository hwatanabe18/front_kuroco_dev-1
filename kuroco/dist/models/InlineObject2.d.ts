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
 * @interface InlineObject2
 */
export interface InlineObject2 {
    /**
     * Token
     * @type {string}
     * @memberof InlineObject2
     */
    loginId: string;
    /**
     * Current Login Password
     * @type {string}
     * @memberof InlineObject2
     */
    currentPassword: string;
    /**
     * New Password
     * @type {string}
     * @memberof InlineObject2
     */
    newPassword: string;
}
export declare const InlineObject2Description = "{\n    /**\n     * Token\n     * @type {string}\n     */\n    loginId: string;\n    /**\n     * Current Login Password\n     * @type {string}\n     */\n    currentPassword: string;\n    /**\n     * New Password\n     * @type {string}\n     */\n    newPassword: string;\n}";
export declare function InlineObject2FromJSON(json: any): InlineObject2;
export declare function InlineObject2FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject2;
export declare function InlineObject2ToJSON(value?: InlineObject2 | null): any;
//# sourceMappingURL=InlineObject2.d.ts.map