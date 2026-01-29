// modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Keyboard;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexDirection': 'column',
        'alignItems': 'stretch',
        'paddingHorizontal': 0
    };
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/MemberVerificationFormRenderer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: MemberVerificationFormRenderer, environment: var1
        _fun60292: for (var _fun60292_ip = 0;;) switch (_fun60292_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.rulesChannelId;
                var _closure2_slot0 = var1;
                var7 = var0.formFields;
                var1 = var0.onChange;
                var _closure2_slot1 = var1;
                var0 = var0.verification;
                var _closure2_slot2 = var0;
                var1 = _closure1_slot6;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var4 = null;
                var6 = var4 == var7;
                var4 = undefined;
                if (var6) {
                    _fun60292_ip = 99;
                    continue _fun60292
                }
            case 84:
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var4 = arg1;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'verification-field-';
                    var3 = var1.bind(var0)(var4);
                    var2 = function(arg0, arg1, arg2) { // Environment: var0
                        _fun60294: for (var _fun60294_ip = 0;;) switch (_fun60294_ip) {
                            case 0:
                                var6 = arg0;
                                var4 = arg2;
                                var0 = arg1;
                                var _closure4_slot0 = var0;
                                var2 = var6.field_type;
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var8 = 4;
                                var1 = var1[var8];
                                var3 = undefined;
                                var1 = var7.bind(var3)(var1);
                                var1 = var1.VerificationFormFieldTypes;
                                var1 = var1.TERMS;
                                if (!(var1 !== var2)) {
                                    _fun60294_ip = 409;
                                    continue _fun60294
                                }
                            case 65:
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var8];
                                var1 = var7.bind(var3)(var1);
                                var1 = var1.VerificationFormFieldTypes;
                                var1 = var1.VERIFICATION;
                                if (!(var1 !== var2)) {
                                    _fun60294_ip = 357;
                                    continue _fun60294
                                }
                            case 101:
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var8];
                                var1 = var7.bind(var3)(var1);
                                var1 = var1.VerificationFormFieldTypes;
                                var1 = var1.TEXT_INPUT;
                                if (!(var1 !== var2)) {
                                    _fun60294_ip = 307;
                                    continue _fun60294
                                }
                            case 137:
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var8];
                                var1 = var7.bind(var3)(var1);
                                var1 = var1.VerificationFormFieldTypes;
                                var1 = var1.PARAGRAPH;
                                if (!(var1 !== var2)) {
                                    _fun60294_ip = 257;
                                    continue _fun60294
                                }
                            case 170:
                                var7 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var8];
                                var1 = var7.bind(var3)(var1);
                                var1 = var1.VerificationFormFieldTypes;
                                var1 = var1.MULTIPLE_CHOICE;
                                if (!(var1 !== var2)) {
                                    _fun60294_ip = 207;
                                    continue _fun60294
                                }
                            case 203:
                                var1 = null;
                                return var1;
                            case 207:
                                var7 = _closure1_slot5;
                                var2 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var1 = 9;
                                var1 = var8[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var1.field = var6;
                                var8 = function(arg0) { // Original name: onChange, environment: var5
                                    var3 = _closure2_slot1;
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var3.bind(var0)(var2, var1);
                                    var2 = _closure1_slot3;
                                    var1 = var2.dismiss;
                                    var1 = var1.bind(var2)();
                                    return var0;
                                };
                                var1.onChange = var8;
                                var1 = var7.bind(var3)(var2, var1, var4);
                                return var1;
                            case 257:
                                var7 = _closure1_slot5;
                                var2 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var1 = 8;
                                var1 = var8[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var1.field = var6;
                                var8 = function(arg0) { // Original name: onChange, environment: var5
                                    var3 = _closure2_slot1;
                                    var2 = _closure4_slot0;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var2, var0);
                                    return var0;
                                };
                                var1.onChange = var8;
                                var1 = var7.bind(var3)(var2, var1, var4);
                                return var1;
                            case 307:
                                var7 = _closure1_slot5;
                                var2 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var1 = 7;
                                var1 = var8[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var1.field = var6;
                                var8 = function(arg0) { // Original name: onChange, environment: var5
                                    var3 = _closure2_slot1;
                                    var2 = _closure4_slot0;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var2, var0);
                                    return var0;
                                };
                                var1.onChange = var8;
                                var1 = var7.bind(var3)(var2, var1, var4);
                                return var1;
                            case 357:
                                var7 = _closure1_slot5;
                                var2 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var1 = 6;
                                var1 = var8[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var8 = _closure2_slot2;
                                var1.verification = var8;
                                var1.field = var6;
                                var1 = var7.bind(var3)(var2, var1, var4);
                                return var1;
                            case 409:
                                var2 = _closure1_slot5;
                                var1 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var0 = 5;
                                var0 = var7[var0];
                                var1 = var1.bind(var3)(var0);
                                var0 = {};
                                var0.field = var6;
                                var6 = _closure2_slot0;
                                var0.rulesChannelId = var6;
                                var5 = function(arg0) { // Original name: onChange, environment: var5
                                    var3 = _closure2_slot1;
                                    var2 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var3.bind(var0)(var2, var1);
                                    var2 = _closure1_slot3;
                                    var1 = var2.dismiss;
                                    var1 = var1.bind(var2)();
                                    return var0;
                                };
                                var0.onChange = var5;
                                var0 = var2.bind(var3)(var1, var0, var4);
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0, var4, var3);
                    return var0;
                };
                var4 = var6.bind(var7)(var5);
            case 99:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3175, 7419, 7420, 7546, 7547, 7548, 2]);