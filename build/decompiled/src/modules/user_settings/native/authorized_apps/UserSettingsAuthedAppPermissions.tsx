// modules/user_settings/native/authorized_apps/UserSettingsAuthedAppPermissions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun82094: for (var _fun82094_ip = 0;;) switch (_fun82094_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun82094_ip = 45;
                    continue _fun82094
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun82094_ip = 54;
                    continue _fun82094
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun82094_ip = 344;
                    continue _fun82094
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun82094_ip = 322;
                    continue _fun82094
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun82094_ip = 282;
                    continue _fun82094
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun82094_ip = 269;
                    continue _fun82094
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun82094_ip = 162;
                    continue _fun82094
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun82094_ip = 178;
                    continue _fun82094
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun82094_ip = 248;
                    continue _fun82094
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun82094_ip = 248;
                    continue _fun82094
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun82094_ip = 233;
                    continue _fun82094
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun82094_ip = 246;
                    continue _fun82094
                }
            case 233:
                var8 = _closure1_slot9;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun82094_ip = 264;
                continue _fun82094;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun82094_ip = 282;
                continue _fun82094;
            case 269:
                var6 = _closure1_slot9;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun82094_ip = 322;
                    continue _fun82094
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun82094_ip = 329;
                    continue _fun82094
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun82095: for (var _fun82095_ip = 0;;) switch (_fun82095_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun82095_ip = 56;
                                continue _fun82095
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun82095_ip = 67;
                            continue _fun82095;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun82096: for (var _fun82096_ip = 0;;) switch (_fun82096_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun82096_ip = 23;
                    continue _fun82096
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun82096_ip = 33;
                    continue _fun82096
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun82096_ip = 70;
                    continue _fun82096
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun82096_ip = 55;
                    continue _fun82096
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ScrollView;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'paddingHorizontal': 16,
        'paddingVertical': 24
    };
    var6.container = var3;
    var3 = {
        'flexDirection': 'row',
        'marginTop': 8
    };
    var6.permissionContainer = var3;
    var3 = {};
    var3.marginTop = var9;
    var6.permissionIcon = var3;
    var3 = 12;
    var9 = {
        'flexShrink': 1,
        'marginLeft': 12
    };
    var6.permissionText = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/authorized_apps/UserSettingsAuthedAppPermissions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserSettingsAuthedAppPermissions, environment: var1
        var0 = arg0;
        var1 = var0.oauth2Token;
        var2 = _closure1_slot7;
        var3 = undefined;
        var5 = var2.bind(var3)();
        var _closure2_slot0 = var5;
        var2 = var1.application;
        var _closure2_slot1 = var2;
        var2 = var1.scopes;
        var _closure2_slot2 = var2;
        var1 = var1.disclosures;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var5.container;
        var0.contentContainerStyle = var5;
        var4 = function() { // Environment: var4
            _fun82098: for (var _fun82098_ip = 0;;) switch (_fun82098_ip) {
                case 0:
                    var9 = new Array(0);
                    var _closure3_slot0 = var9;
                    var1 = _closure1_slot8;
                    var0 = _closure2_slot2;
                    var3 = undefined;
                    var10 = var1.bind(var3)(var0);
                    var2 = var10.bind(var3)();
                    var0 = var2.done;
                    var15 = 6;
                    var8 = 4;
                    var1 = 0;
                    var5 = 5;
                    if (var0) {
                        _fun82098_ip = 231;
                        continue _fun82098
                    }
                case 57:
                    var11 = var2.value;
                    var14 = var9.push;
                    var12 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var13 = var0[var8];
                    var17 = var12.bind(var3)(var13);
                    var16 = var17.getScopeNames;
                    var13 = _closure2_slot2;
                    var19 = var16.bind(var17)(var11, var13);
                    var13 = new Array(0);
                    var20 = var13;
                    var18 = 0;
                    var16 = arraySpread(var20, var19, var18);
                    var20 = var14;
                    var19 = var13;
                    var18 = var9;
                    var13 = apply(var20, var19, var18);
                    var0 = var0[var5];
                    var0 = var12.bind(var3)(var0);
                    var0 = var0.OAuth2Scopes;
                    var0 = var0.APPLICATIONS_COMMANDS;
                    if (!(var11 === var0)) {
                        _fun82098_ip = 213;
                        continue _fun82098
                    }
                case 151:
                    var11 = var9.push;
                    var14 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var12 = var0[var15];
                    var12 = var14.bind(var3)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var0 = var0[var15];
                    var0 = var14.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.Ls2XRq;
                    var0 = var12.bind(var13)(var0);
                    var0 = var11.bind(var9)(var0);
                case 213:
                    var11 = var10.bind(var3)();
                    var0 = var11.done;
                    var2 = var11;
                    if (!var0) {
                        _fun82098_ip = 57;
                        continue _fun82098
                    }
                case 231:
                    var0 = var9.length;
                    if (!(!(var0 > var1))) {
                        _fun82098_ip = 265;
                        continue _fun82098
                    }
                case 240:
                    var2 = _closure2_slot3;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun82098_ip = 263;
                        continue _fun82098
                    }
                case 250:
                    var0 = _closure2_slot3;
                    var0 = var0.length;
                    if (!(!(var0 > var1))) {
                        _fun82098_ip = 265;
                        continue _fun82098
                    }
                case 263:
                    return var3;
                case 265:
                    var2 = _closure1_slot6;
                    var1 = _closure1_slot4;
                    var0 = {};
                    var10 = _closure1_slot5;
                    var14 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 7;
                    var4 = var11[var5];
                    var4 = var14.bind(var3)(var4);
                    var8 = var4.Text;
                    var4 = {
                        'variant': 'heading-sm/semibold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var12 = _closure2_slot1;
                    var12 = var12.name;
                    var4.children = var12;
                    var8 = var10.bind(var3)(var8, var4);
                    var4 = new Array(4);
                    var4[0] = var8;
                    var5 = var11[var5];
                    var5 = var14.bind(var3)(var5);
                    var8 = var5.Text;
                    var5 = {
                        'variant': 'heading-sm/semibold',
                        'color': 'text-default'
                    };
                    var12 = var11[var15];
                    var12 = var14.bind(var3)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var11[var15];
                    var11 = var14.bind(var3)(var11);
                    var11 = var11.t;
                    var11 = var11.xrmhRX;
                    var11 = var12.bind(var13)(var11);
                    var5.children = var11;
                    var5 = var10.bind(var3)(var8, var5);
                    var4[1] = var5;
                    var8 = var9.map;
                    var5 = function(arg0, arg1) { // Environment: var6
                        var4 = _closure1_slot6;
                        var3 = _closure1_slot4;
                        var2 = {};
                        var8 = _closure2_slot0;
                        var0 = var8.permissionContainer;
                        var2.style = var0;
                        var7 = _closure1_slot5;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var0 = 8;
                        var0 = var9[var0];
                        var1 = undefined;
                        var0 = var6.bind(var1)(var0);
                        var5 = var0.CircleCheckIcon;
                        var0 = {};
                        var11 = var8.permissionIcon;
                        var0.style = var11;
                        var11 = 'xs';
                        var0.size = var11;
                        var11 = _closure1_slot1;
                        var10 = 9;
                        var10 = var9[var10];
                        var10 = var11.bind(var1)(var10);
                        var10 = var10.colors;
                        var10 = var10.STATUS_POSITIVE;
                        var0.color = var10;
                        var5 = var7.bind(var1)(var5, var0);
                        var0 = new Array(2);
                        var0[0] = var5;
                        var5 = 7;
                        var5 = var9[var5];
                        var5 = var6.bind(var1)(var5);
                        var6 = var5.Text;
                        var5 = {
                            'style': null,
                            'variant': 'text-sm/normal',
                            'color': 'text-default'
                        };
                        var8 = var8.permissionText;
                        var5.style = var8;
                        var8 = arg0;
                        var5.children = var8;
                        var5 = var7.bind(var1)(var6, var5);
                        var0[1] = var5;
                        var2.children = var0;
                        var0 = arg1;
                        var0 = var4.bind(var1)(var3, var2, var0);
                        return var0;
                    };
                    var5 = var8.bind(var9)(var5);
                    var4[2] = var5;
                    var8 = _closure2_slot3;
                    var5 = null;
                    var8 = var5 == var8;
                    var5 = undefined;
                    if (var8) {
                        _fun82098_ip = 488;
                        continue _fun82098
                    }
                case 467:
                    var8 = _closure2_slot3;
                    var7 = var8.map;
                    var6 = function(arg0, arg1) { // Environment: var6
                        _fun82100: for (var _fun82100_ip = 0;;) switch (_fun82100_ip) {
                            case 0:
                                var12 = arg0;
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 10;
                                var0 = var3[var0];
                                var5 = undefined;
                                var2 = var2.bind(var5)(var0);
                                var0 = var2.getTextForDisclosure;
                                var9 = var0.bind(var2)(var12);
                                var0 = null;
                                var2 = var0 != var9;
                                if (!var2) {
                                    _fun82100_ip = 222;
                                    continue _fun82100
                                }
                            case 51:
                                var4 = _closure1_slot6;
                                var3 = _closure1_slot4;
                                var2 = {};
                                var10 = _closure2_slot0;
                                var6 = var10.permissionContainer;
                                var2.style = var6;
                                var8 = _closure1_slot5;
                                var7 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var1 = 11;
                                var1 = var11[var1];
                                var1 = var7.bind(var5)(var1);
                                var6 = var1.DisclosureIcon;
                                var1 = {};
                                var13 = var10.permissionIcon;
                                var1.style = var13;
                                var1.disclosure = var12;
                                var6 = var8.bind(var5)(var6, var1);
                                var1 = new Array(2);
                                var1[0] = var6;
                                var6 = 7;
                                var6 = var11[var6];
                                var6 = var7.bind(var5)(var6);
                                var7 = var6.Text;
                                var6 = {};
                                var10 = var10.permissionText;
                                var6.style = var10;
                                var10 = 'text-sm/normal';
                                var6.variant = var10;
                                var6.children = var9;
                                var6 = var8.bind(var5)(var7, var6);
                                var1[1] = var6;
                                var2.children = var1;
                                var1 = _closure3_slot0;
                                var6 = var1.length;
                                var1 = arg1;
                                var1 = var1 + var6;
                                var0 = var4.bind(var5)(var3, var2, var1);
                            case 222:
                                return var0;
                        }
                    };
                    var5 = var7.bind(var8)(var6);
                case 488:
                    var4[3] = var5;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4 = var4.bind(var3)();
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3297, 3298, 1234, 3895, 3230, 671, 5304, 10454, 2]);