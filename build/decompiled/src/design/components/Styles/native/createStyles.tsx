// design/components/Styles/native/createStyles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var3 = 0;
        var2 = copyRestArgs(var3);
        var1 = var2.join;
        var0 = '';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var3 = function arg0() {
        _fun14046: for (var _fun14046_ip = 0;;) switch (_fun14046_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot3;
                var0 = undefined;
                var0 = var1.bind(var0)(var4);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun14046_ip = 25;
                    continue _fun14046
                }
            case 23:
                return var0;
            case 25:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var1 = 'Unable to parse color: "';
                var0 = '"';
                var6 = var3.bind(var1)(var4, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = function arg0, arg1() {
        _fun14047: for (var _fun14047_ip = 0;;) switch (_fun14047_ip) {
            case 0:
                var31 = arg0;
                var30 = arg1;
                var29 = var30.theme;
                var28 = var30.saturation;
                var27 = var30.contrast;
                var0 = {};
                var25 = var31;
                var21 = undefined;
                var19 = 4;
                var18 = 6;
                var17 = 5;
                var16 = 1;
                var15 = 'text';
                var14 = 'generic';
                var13 = 'color';
                var12 = 'border';
                var11 = 'borderColor';
                var10 = 'background';
                var9 = 'backgroundColor';
                var8 = 0;
                var7 = '#';
                var6 = 'string';
                var5 = var16 !== var28;
                var4 = 'resolve';
                var3 = null;
                var2 = undefined;
                var1 = undefined;
                for (var22 in var25)
                    case 109: {
                        var33 = var2;
                        var32 = var1;
                        case 127: var35 = var22;
                        var36 = var31[var35];
                        var34 = var3 != var36;
                        if (!var34) {
                            _fun14047_ip = 156;
                            continue _fun14047
                        }
                        case 141: var38 = var36.hasOwnProperty;
                        var37 = _closure1_slot6;
                        var34 = var38.bind(var36)(var37);
                        case 156: var37 = var36;
                        if (!var34) {
                            _fun14047_ip = 175;
                            continue _fun14047
                        }
                        case 162: var34 = _closure1_slot6;
                        var34 = var36[var34];
                        var37 = var34.bind(var36)(var30);
                        case 175: if (!(var3 != var37)) {
                            _fun14047_ip = 196;
                            continue _fun14047
                        }
                        case 179: var34 = var37.hasOwnProperty;
                        var34 = var34.bind(var37)(var4);
                        if (var34) {
                            _fun14047_ip = 514;
                            continue _fun14047
                        }
                        case 196: var36 = _closure1_slot1;
                        var34 = _closure1_slot2;
                        var34 = var34[var17];
                        var34 = var36.bind(var21)(var34);
                        var36 = var34.internal;
                        var34 = var36.isSemanticColor;
                        var34 = var34.bind(var36)(var37);
                        if (var34) {
                            _fun14047_ip = 439;
                            continue _fun14047
                        }
                        case 236: if (var5) {
                            _fun14047_ip = 255;
                            continue _fun14047
                        }
                        case 239: var34 = var37;
                        var2 = var33;
                        var1 = var32;
                        if (!(var16 !== var27)) {
                            _fun14047_ip = 430;
                            continue _fun14047
                        }
                        case 255: var36 = typeof var37;
                        var34 = var37;
                        var2 = var33;
                        var1 = var32;
                        if (!(var6 === var36)) {
                            _fun14047_ip = 430;
                            continue _fun14047
                        }
                        case 274: var36 = var37[var8];
                        var34 = var37;
                        var2 = var33;
                        var1 = var32;
                        if (!(var7 === var36)) {
                            _fun14047_ip = 430;
                            continue _fun14047
                        }
                        case 294: var38 = var10;
                        if (!(var9 !== var35)) {
                            _fun14047_ip = 324;
                            continue _fun14047
                        }
                        case 301: var36 = var12;
                        if (!(var11 !== var35)) {
                            _fun14047_ip = 321;
                            continue _fun14047
                        }
                        case 308: var39 = var14;
                        if (!(var13 === var35)) {
                            _fun14047_ip = 318;
                            continue _fun14047
                        }
                        case 315: var39 = var15;
                        case 318: var36 = var39;
                        case 321: var38 = var36;
                        case 324: var41 = var37;
                        if (!var5) {
                            _fun14047_ip = 366;
                            continue _fun14047
                        }
                        case 330: var39 = _closure1_slot1;
                        var36 = _closure1_slot2;
                        var36 = var36[var17];
                        var36 = var39.bind(var21)(var36);
                        var39 = var36.internal;
                        var36 = var39.adjustColorSaturation;
                        var41 = var36.bind(var39)(var37, var28, var38);
                        case 366: var36 = var41;
                        if (!(var16 !== var27)) {
                            _fun14047_ip = 421;
                            continue _fun14047
                        }
                        case 373: var40 = _closure1_slot1;
                        var39 = _closure1_slot2;
                        var39 = var39[var17];
                        var39 = var40.bind(var21)(var39);
                        var40 = var39.internal;
                        var39 = var40.adjustColorContrast;
                        var46 = var40;
                        var45 = var41;
                        var44 = var27;
                        var43 = var38;
                        var42 = var29;
                        var36 = var46[var39](var45, var44, var43, var42, var41);
                        case 421: var34 = var36;
                        var2 = var38;
                        var1 = var34;
                        case 430: var0[var35] = var34;
                        _fun14047_ip = 109;
                        continue _fun14047;
                        case 439: var38 = _closure1_slot0;
                        var34 = _closure1_slot2;
                        var36 = var34[var18];
                        var38 = var38.bind(var21)(var36);
                        var36 = var38.getSemanticColorContextFromThemeContext;
                        var38 = var36.bind(var38)(var30);
                        var36 = _closure1_slot1;
                        var34 = var34[var17];
                        var34 = var36.bind(var21)(var34);
                        var36 = var34.internal;
                        var34 = var36.resolveSemanticColor;
                        var34 = var34.bind(var36)(var29, var37, var38);
                        var0[var35] = var34;
                        var2 = var33;
                        var1 = var32;
                        _fun14047_ip = 109;
                        continue _fun14047;
                        case 514: var36 = var37.resolve;
                        var38 = _closure1_slot0;
                        var34 = _closure1_slot2;
                        var34 = var34[var19];
                        var38 = var38.bind(var21)(var34);
                        var34 = var38.isAndroid;
                        var34 = var34.bind(var38)();
                        var34 = var36.bind(var37)(var29, var34);
                        var0[var35] = var34;
                        var2 = var33;
                        var1 = var32;
                        _fun14047_ip = 109;
                        continue _fun14047;
                    }
            case 568:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var7);
    var7 = var7.processColor;
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var9 = var4.Set;
    var7 = var9.prototype;
    var14 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var13 = ['backgroundColor', 'borderBottomColor', 'borderColor', 'borderEndColor', 'borderLeftColor', 'borderRightColor', 'borderStartColor', 'borderTopColor', 'color', 'shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'elevation', 'textDecorationColor', 'textShadowColor', 'tintColor'];
    var7 = new var14[var9](var13, var12);
    var8 = var4.Symbol;
    var7 = var8.for;
    var4 = 'dynamicToken';
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function createStylesTsx1(){const{resolved,withTiming,interpolateColor,themeIndex,timingStandard}=this.__closure;const styles={};for(const propertyName in resolved){const value=resolved[propertyName];if(Array.isArray(value)){styles[propertyName]=withTiming(interpolateColor(themeIndex.get(),[0,1,2],value),timingStandard);}else{styles[propertyName]=value;}}return styles;}';
    var4.code = var7;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Styles/native/createStyles.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = _closure1_slot6;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0[var2] = var1;
        return var0;
    };
    var2.experimental_createToken = var4;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = global;
        var2 = var2.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot1 = var2;
        var2 = 'function';
        var1 = typeof var1;
        var1 = var2 === var1;
        var _closure2_slot2 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun14051: for (var _fun14051_ip = 0;;) switch (_fun14051_ip) {
                case 0:
                    var16 = 0;
                    var12 = copyRestArgs(var16);
                    var _closure3_slot0 = var12;
                    var11 = undefined;
                    var _closure3_slot2 = var11;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 3;
                    var1 = var4[var1];
                    var2 = var2.bind(var11)(var1);
                    var1 = var2.useThemeContext;
                    var2 = var1.bind(var2)();
                    var _closure3_slot1 = var2;
                    var1 = _closure1_slot8;
                    var0 = new Array(1);
                    var16 = var0;
                    var15 = var12;
                    var14 = 0;
                    var4 = arraySpread(var16, var15, var14);
                    var2 = var2.key;
                    var0[var4] = var2;
                    var2 = 1;
                    var2 = var4 + var2;
                    var16 = var1;
                    var15 = var0;
                    var14 = undefined;
                    var4 = apply(var16, var15, var14);
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var4);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun14051_ip = 267;
                        continue _fun14051
                    }
                case 130:
                    var1 = {};
                    _closure3_slot2 = var1;
                    var5 = _closure2_slot2;
                    var7 = global;
                    var8 = var7.Object;
                    var6 = var8.keys;
                    var9 = _closure2_slot0;
                    if (var5) {
                        _fun14051_ip = 167;
                        continue _fun14051
                    }
                case 160:
                    var10 = var6.bind(var8)(var9);
                    _fun14051_ip = 200;
                    continue _fun14051;
                case 167:
                    var5 = new Array(0);
                    var16 = var5;
                    var15 = var12;
                    var14 = 0;
                    var12 = arraySpread(var16, var15, var14);
                    var16 = var9;
                    var15 = var5;
                    var14 = undefined;
                    var5 = apply(var16, var15, var14);
                    var10 = var6.bind(var8)(var5);
                case 200:
                    var6 = var7.Object;
                    var5 = var6.defineProperties;
                    var8 = var7.Object;
                    var7 = var8.fromEntries;
                    var9 = var10.map;
                    var3 = function(arg0) { // Environment: var3
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var0 = new Array(2);
                        var0[0] = var1;
                        var1 = {
                            'configurable': true,
                            'enumerable': true
                        };
                        var2 = function() {
                            _fun14053: for (var _fun14053_ip = 0;;) switch (_fun14053_ip) {
                                case 0:
                                    var4 = _closure1_slot10;
                                    var0 = _closure2_slot2;
                                    var3 = _closure2_slot0;
                                    if (var0) {
                                        _fun14053_ip = 26;
                                        continue _fun14053
                                    }
                                case 21:
                                    var0 = var3;
                                    _fun14053_ip = 58;
                                    continue _fun14053;
                                case 26:
                                    var8 = _closure3_slot0;
                                    var2 = new Array(0);
                                    var7 = 0;
                                    var9 = var2;
                                    var1 = arraySpread(var9, var8, var7);
                                    var7 = undefined;
                                    var9 = var3;
                                    var8 = var2;
                                    var0 = apply(var9, var8, var7);
                                case 58:
                                    var5 = _closure4_slot0;
                                    var3 = var0[var5];
                                    var2 = _closure3_slot1;
                                    var0 = undefined;
                                    var0 = var4.bind(var0)(var3, var2);
                                    var2 = global;
                                    var4 = var2.Object;
                                    var3 = var4.defineProperty;
                                    var2 = _closure3_slot2;
                                    var1 = {};
                                    var1.value = var0;
                                    var6 = true;
                                    var1.enumerable = var6;
                                    var1 = var3.bind(var4)(var2, var5, var1);
                                    return var0;
                            }
                        };
                        var1.get = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var3 = var9.bind(var10)(var3);
                    var3 = var7.bind(var8)(var3);
                    var3 = var5.bind(var6)(var1, var3);
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    return var1;
                case 267:
                    return var0;
            }
        };
        return var0;
    };
    var2.createStyles = var4;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun14055: for (var _fun14055_ip = 0;;) switch (_fun14055_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                    var0 = var0.FALLBACK_THEME_CONTEXT_VALUE;
                    var5 = _closure2_slot1;
                    var1 = var5.get;
                    var0 = var2.key;
                    var0 = var1.bind(var5)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun14055_ip = 168;
                        continue _fun14055
                    }
                case 68:
                    var1 = {};
                    var _closure3_slot1 = var1;
                    var7 = global;
                    var8 = var7.Object;
                    var6 = var8.keys;
                    var5 = _closure2_slot0;
                    var10 = var6.bind(var8)(var5);
                    var6 = var7.Object;
                    var5 = var6.defineProperties;
                    var8 = var7.Object;
                    var7 = var8.fromEntries;
                    var9 = var10.map;
                    var4 = function(arg0) { // Environment: var4
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var0 = new Array(2);
                        var0[0] = var1;
                        var1 = {
                            'configurable': true,
                            'enumerable': true
                        };
                        var2 = function() {
                            var4 = _closure1_slot10;
                            var0 = _closure2_slot0;
                            var5 = _closure4_slot0;
                            var3 = var0[var5];
                            var2 = _closure3_slot0;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2);
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.defineProperty;
                            var2 = _closure3_slot1;
                            var1 = {};
                            var1.value = var0;
                            var6 = true;
                            var1.enumerable = var6;
                            var1 = var3.bind(var4)(var2, var5, var1);
                            return var0;
                        };
                        var1.get = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var4 = var9.bind(var10)(var4);
                    var4 = var7.bind(var8)(var4);
                    var4 = var5.bind(var6)(var1, var4);
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = var2.key;
                    var2 = var3.bind(var4)(var2, var1);
                    return var1;
                case 168:
                    return var0;
            }
        };
        return var0;
    };
    var2.createLegacyClassComponentStyles = var4;
    var4 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 3;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = var1.useThemeContext;
        var1 = var0.bind(var1)();
        var0 = arg0;
        var0 = var0.bind(var2)(var1);
        return var0;
    };
    var2.useLegacyClassComponentStyles = var4;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun14060: for (var _fun14060_ip = 0;;) switch (_fun14060_ip) {
                case 0:
                    var13 = 0;
                    var9 = copyRestArgs(var13);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 3;
                    var0 = var3[var0];
                    var6 = undefined;
                    var2 = var2.bind(var6)(var0);
                    var0 = var2.useThemeContext;
                    var5 = var0.bind(var2)();
                    var2 = _closure1_slot8;
                    var0 = new Array(1);
                    var13 = var0;
                    var12 = var9;
                    var11 = 0;
                    var4 = arraySpread(var13, var12, var11);
                    var3 = var5.key;
                    var0[var4] = var3;
                    var3 = 1;
                    var3 = var4 + var3;
                    var13 = var2;
                    var12 = var0;
                    var11 = undefined;
                    var4 = apply(var13, var12, var11);
                    var3 = _closure2_slot1;
                    var0 = var3.get;
                    var0 = var0.bind(var3)(var4);
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun14060_ip = 193;
                        continue _fun14060
                    }
                case 113:
                    var3 = _closure1_slot10;
                    var1 = _closure2_slot0;
                    var7 = 'function';
                    var1 = typeof var1;
                    if (!(var7 !== var1)) {
                        _fun14060_ip = 138;
                        continue _fun14060
                    }
                case 132:
                    var1 = _closure2_slot0;
                    _fun14060_ip = 170;
                    continue _fun14060;
                case 138:
                    var8 = _closure2_slot0;
                    var7 = new Array(0);
                    var13 = var7;
                    var12 = var9;
                    var11 = 0;
                    var9 = arraySpread(var13, var12, var11);
                    var13 = var8;
                    var12 = var7;
                    var11 = undefined;
                    var1 = apply(var13, var12, var11);
                case 170:
                    var1 = var3.bind(var6)(var1, var5);
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    return var1;
                case 193:
                    return var0;
            }
        };
        return var0;
    };
    var2.createStyleProperties = var4;
    var2.processColorOrThrow = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot1 = var1;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun14062: for (var _fun14062_ip = 0;;) switch (_fun14062_ip) {
                case 0:
                    var4 = 1;
                    var17 = var4;
                    var11 = copyRestArgs(var17);
                    var0 = _closure1_slot4;
                    var3 = var0.saturation;
                    var0 = _closure1_slot5;
                    var0 = var0.gradientPreset;
                    var1 = null;
                    var2 = var1 != var0;
                    var5 = null;
                    if (!var2) {
                        _fun14062_ip = 47;
                        continue _fun14062
                    }
                case 44:
                    var5 = var0;
                case 47:
                    var0 = var1 != var5;
                    var8 = 0;
                    var6 = 0;
                    if (!var0) {
                        _fun14062_ip = 166;
                        continue _fun14062
                    }
                case 58:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var14 = 3;
                    var0 = var0[var14];
                    var13 = undefined;
                    var7 = var2.bind(var13)(var0);
                    var2 = var7.setThemeFlag;
                    var9 = var5.theme;
                    var0 = 'light';
                    if (!(var0 !== var9)) {
                        _fun14062_ip = 131;
                        continue _fun14062
                    }
                case 100:
                    var9 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var14];
                    var0 = var9.bind(var13)(var0);
                    var0 = var0.ThemeContextFlags;
                    var0 = var0.MOBILE_DARK_GRADIENT_THEME_ENABLED;
                    _fun14062_ip = 160;
                    continue _fun14062;
                case 131:
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var9 = var9[var14];
                    var9 = var12.bind(var13)(var9);
                    var9 = var9.ThemeContextFlags;
                    var0 = var9.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
                case 160:
                    var6 = var2.bind(var7)(var8, var0);
                case 166:
                    var0 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 3;
                    var2 = var9[var2];
                    var9 = undefined;
                    var2 = var7.bind(var9)(var2);
                    var16 = var2.FALLBACK_THEME_CONTEXT_VALUE;
                    var17 = var0;
                    var2 = copyDataProperties(var17, var16);
                    var2 = 'flags';
                    var0[var2] = var6;
                    var2 = 'gradient';
                    var0[var2] = var5;
                    var2 = 'saturation';
                    var0[var2] = var3;
                    var3 = arg0;
                    var2 = 'theme';
                    var0[var2] = var3;
                    var2 = global;
                    var3 = var2.JSON;
                    var2 = var3.stringify;
                    var2 = var2.bind(var3)(var0);
                    var5 = {};
                    var17 = var5;
                    var16 = var0;
                    var0 = copyDataProperties(var17, var16);
                    var0 = 'key';
                    var5[var0] = var2;
                    var2 = _closure1_slot8;
                    var0 = new Array(1);
                    var17 = var0;
                    var16 = var11;
                    var15 = 0;
                    var3 = arraySpread(var17, var16, var15);
                    var6 = var5.key;
                    var0[var3] = var6;
                    var3 = var3 + var4;
                    var17 = var2;
                    var16 = var0;
                    var15 = undefined;
                    var4 = apply(var17, var16, var15);
                    var3 = _closure2_slot1;
                    var0 = var3.get;
                    var0 = var0.bind(var3)(var4);
                    if (!(var1 == var0)) {
                        _fun14062_ip = 474;
                        continue _fun14062
                    }
                case 352:
                    var3 = _closure1_slot10;
                    var1 = _closure2_slot0;
                    var6 = 'function';
                    var1 = typeof var1;
                    if (!(var6 !== var1)) {
                        _fun14062_ip = 377;
                        continue _fun14062
                    }
                case 371:
                    var1 = _closure2_slot0;
                    _fun14062_ip = 409;
                    continue _fun14062;
                case 377:
                    var7 = _closure2_slot0;
                    var6 = new Array(0);
                    var17 = var6;
                    var16 = var11;
                    var15 = 0;
                    var8 = arraySpread(var17, var16, var15);
                    var17 = var7;
                    var16 = var6;
                    var15 = undefined;
                    var1 = apply(var17, var16, var15);
                case 409:
                    var1 = var3.bind(var9)(var1, var5);
                    var7 = var1;
                    for (var3 in var7)
                        case 426: {
                            case 435: var12 = var3;
                            var13 = var1[var12];
                            var11 = _closure1_slot9;
                            var11 = var11.bind(var9)(var13);
                            var1[var12] = var11;
                            _fun14062_ip = 426;
                            continue _fun14062;
                        }
                case 457:
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    return var1;
                case 474:
                    return var0;
            }
        };
        return var0;
    };
    var2.createNativeStyleProperties = var3;
    var1 = function arg0() {
        _fun14063: for (var _fun14063_ip = 0;;) switch (_fun14063_ip) {
            case 0:
                var13 = arg0;
                var12 = {};
                var _closure2_slot0 = var12;
                var10 = var13;
                var5 = 5;
                var4 = undefined;
                var3 = 'light';
                var2 = 'darker';
                var1 = 'midnight';
                for (var7 in var10)
                    case 45: {
                        case 57: var15 = var7;
                        var18 = var13[var15];
                        var16 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var14 = var14[var5];
                        var14 = var16.bind(var4)(var14);
                        var16 = var14.internal;
                        var14 = var16.isSemanticColor;
                        var14 = var14.bind(var16)(var18);
                        if (var14) {
                            _fun14063_ip = 107;
                            continue _fun14063
                        }
                        case 101: var12[var15] = var18;
                        _fun14063_ip = 45;
                        continue _fun14063;
                        case 107: var17 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var14 = var16[var5];
                        var14 = var17.bind(var4)(var14);
                        var19 = var14.internal;
                        var14 = var19.resolveSemanticColor;
                        var19 = var14.bind(var19)(var3, var18);
                        var14 = new Array(3);
                        var14[0] = var19;
                        var19 = var16[var5];
                        var19 = var17.bind(var4)(var19);
                        var20 = var19.internal;
                        var19 = var20.resolveSemanticColor;
                        var19 = var19.bind(var20)(var2, var18);
                        var14[1] = var19;
                        var16 = var16[var5];
                        var16 = var17.bind(var4)(var16);
                        var17 = var16.internal;
                        var16 = var17.resolveSemanticColor;
                        var16 = var16.bind(var17)(var1, var18);
                        var14[2] = var16;
                        var12[var15] = var14;
                        _fun14063_ip = 45;
                        continue _fun14063;
                    }
            case 221:
                var0 = function(arg0) { // Environment: var0
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var9 = 7;
                    var1 = var8[var9];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var1);
                    var1 = var2.useAnimatedStyle;
                    var0 = function() {
                        _fun14065: for (var _fun14065_ip = 0;;) switch (_fun14065_ip) {
                            case 0:
                                var0 = {};
                                var12 = _closure2_slot0;
                                var6 = 8;
                                var5 = undefined;
                                var4 = 7;
                                var2 = 9;
                                var1 = global;
                                for (var8 in var12)
                                    case 39: {
                                        case 51: var15 = var8;
                                        var14 = _closure2_slot0;
                                        var23 = var14[var15];
                                        var16 = var1.Array;
                                        var14 = var16.isArray;
                                        var14 = var14.bind(var16)(var23);
                                        if (var14) {
                                            _fun14065_ip = 87;
                                            continue _fun14065
                                        }
                                        case 81: var0[var15] = var23;
                                        _fun14065_ip = 39;
                                        continue _fun14065;
                                        case 87: var19 = _closure1_slot0;
                                        var14 = _closure1_slot2;
                                        var16 = var14[var6];
                                        var18 = var19.bind(var5)(var16);
                                        var17 = var18.withTiming;
                                        var16 = var14[var4];
                                        var22 = var19.bind(var5)(var16);
                                        var21 = var22.interpolateColor;
                                        var20 = _closure3_slot0;
                                        var16 = var20.get;
                                        var20 = var16.bind(var20)();
                                        var16 = [0, 1, 2];
                                        var16 = var21.bind(var22)(var20, var16, var23);
                                        var14 = var14[var2];
                                        var14 = var19.bind(var5)(var14);
                                        var14 = var14.timingStandard;
                                        var14 = var17.bind(var18)(var16, var14);
                                        var0[var15] = var14;
                                        _fun14065_ip = 39;
                                        continue _fun14065;
                                    }
                            case 182:
                                return var0;
                        }
                    };
                    var4 = {};
                    var10 = _closure2_slot0;
                    var4.resolved = var10;
                    var10 = 8;
                    var10 = var8[var10];
                    var10 = var7.bind(var6)(var10);
                    var10 = var10.withTiming;
                    var4.withTiming = var10;
                    var9 = var8[var9];
                    var9 = var7.bind(var6)(var9);
                    var9 = var9.interpolateColor;
                    var4.interpolateColor = var9;
                    var4.themeIndex = var5;
                    var5 = 9;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.timingStandard;
                    var4.timingStandard = var5;
                    var0.__closure = var4;
                    var4 = 15640881185419.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot7;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                return var0;
        }
    };
    var2.createAnimatedThemedStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1298, 3210, 3161, 478, 671, 3154, 3721, 4097, 4883, 2]);