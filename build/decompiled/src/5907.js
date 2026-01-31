// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun52045: for (var _fun52045_ip = 0;;) switch (_fun52045_ip) {
        case 0:
            var5 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var4 = this;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var6;
            var0 = global;
            var9 = var0.Object;
            var8 = var9.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var3);
            var3 = 0;
            var8 = var6[var3];
            var0 = undefined;
            var8 = var5.bind(var0)(var8);
            var9 = var8.useCallback;
            var _closure1_slot2 = var9;
            var9 = var8.useMemo;
            var _closure1_slot3 = var9;
            var9 = var8.useRef;
            var _closure1_slot4 = var9;
            var8 = var8.useState;
            var _closure1_slot5 = var8;
            var3 = var6[var3];
            var3 = var7.bind(var0)(var3);
            var3 = 1;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var7 = var3.Linking;
            var _closure1_slot6 = var7;
            var7 = var3.View;
            var _closure1_slot7 = var7;
            var7 = var3.ActivityIndicator;
            var _closure1_slot8 = var7;
            var7 = var3.Text;
            var _closure1_slot9 = var7;
            var3 = var3.Platform;
            var3 = 2;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var5 = var3.jsx;
            var _closure1_slot10 = var5;
            var3 = var3.jsxs;
            var _closure1_slot11 = var3;
            var3 = var4;
            if (!var3) {
                _fun52045_ip = 213;
                continue _fun52045
            }
        case 207:
            var3 = var4.__spreadArray;
        case 213:
            if (var3) {
                _fun52045_ip = 221;
                continue _fun52045
            }
        case 216:
            var3 = function(arg0, arg1, arg2) { // Environment: var1
                _fun52046: for (var _fun52046_ip = 0;;) switch (_fun52046_ip) {
                    case 0:
                        var2 = arg0;
                        var5 = arg1;
                        var0 = undefined;
                        var1 = arg2;
                        if (var1) {
                            _fun52046_ip = 26;
                            continue _fun52046
                        }
                    case 14:
                        var3 = arguments.length;
                        var0 = 2;
                        var1 = undefined;
                        if (!(var0 === var3)) {
                            _fun52046_ip = 122;
                            continue _fun52046
                        }
                    case 26:
                        var7 = var5.length;
                        var6 = 0;
                        var8 = var6 < var7;
                        var4 = global;
                        var3 = undefined;
                        var0 = 0;
                        var1 = undefined;
                        if (!var8) {
                            _fun52046_ip = 122;
                            continue _fun52046
                        }
                    case 48:
                        var9 = !var3;
                        if (!var9) {
                            _fun52046_ip = 58;
                            continue _fun52046
                        }
                    case 54:
                        var9 = var0 in var5;
                    case 58:
                        var8 = var3;
                        if (var9) {
                            _fun52046_ip = 109;
                            continue _fun52046
                        }
                    case 64:
                        var9 = var3;
                        if (var3) {
                            _fun52046_ip = 98;
                            continue _fun52046
                        }
                    case 70:
                        var10 = var4.Array;
                        var10 = var10.prototype;
                        var11 = var10.slice;
                        var10 = var11.call;
                        var9 = var10.bind(var11)(var5, var6, var0);
                    case 98:
                        var10 = var5[var0];
                        var9[var0] = var10;
                        var8 = var9;
                    case 109:
                        var0 = var0 + 1;
                        var3 = var8;
                        var1 = var3;
                        if (var0 < var7) {
                            _fun52046_ip = 48;
                            continue _fun52046
                        }
                    case 122:
                        var0 = var2.concat;
                        if (var1) {
                            _fun52046_ip = 158;
                            continue _fun52046
                        }
                    case 130:
                        var3 = global;
                        var3 = var3.Array;
                        var3 = var3.prototype;
                        var4 = var3.slice;
                        var3 = var4.call;
                        var1 = var3.bind(var4)(var5);
                    case 158:
                        var0 = var0.bind(var2)(var1);
                        return var0;
                }
            };
        case 221:
            var _closure1_slot12 = var3;
            var3 = function arg0() {
                var2 = '^';
                var1 = var2.concat;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 3;
                var0 = var4[var0];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = arg0;
                var5 = var3.bind(var4)(var0);
                var4 = var5.replace;
                var3 = /\\\*/g;
                var0 = '.*';
                var0 = var4.bind(var5)(var3, var0);
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot13 = var3;
            var3 = function arg0, arg1, arg2() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun52049: for (var _fun52049_ip = 0;;) switch (_fun52049_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.nativeEvent;
                            var4 = var6.url;
                            var _closure3_slot0 = var4;
                            var3 = var6.lockIdentifier;
                            var10 = _closure2_slot1;
                            var9 = _closure1_slot12;
                            if (var10) {
                                _fun52049_ip = 49;
                                continue _fun52049
                            }
                        case 45:
                            var10 = new Array(0);
                        case 49:
                            var0 = undefined;
                            var8 = ['about:blank'];
                            var7 = true;
                            var10 = var9.bind(var0)(var8, var10, var7);
                            var9 = var10.map;
                            var8 = _closure1_slot13;
                            var9 = var9.bind(var10)(var8);
                            var8 = function arg0, arg1() {
                                _fun52050: for (var _fun52050_ip = 0;;) switch (_fun52050_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var4 = /^[A-Za-z][A-Za-z0-9+\-.]+:(\\/\\ / ) ? [ ^ \/]*/;
                                    var3 = var4.exec;
                                    var1 = arg1;
                                    var4 = var3.bind(var4)(var1);
                                    var1 = '';
                                    var3 = null;
                                    if (!(var3 !== var4)) {
                                        _fun52050_ip = 49;
                                        continue _fun52050
                                    }
                                    case 43:
                                    var3 = 0;
                                    var1 = var4[var3];
                                    case 49:
                                    var _closure4_slot0 = var1;
                                    var1 = var2.some;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = global;
                                        var2 = var0.RegExp;
                                        var0 = var2.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var3 = arg0;
                                        var4 = var1;
                                        var0 = new var4[var2](var3, var2);
                                        var2 = var0 instanceof Object ? var0 : var1;
                                        var1 = var2.test;
                                        var0 = _closure4_slot0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                }
                            };
                            var8 = var8.bind(var0)(var9, var4);
                            if (var8) {
                                _fun52049_ip = 148;
                                continue _fun52049
                            }
                        case 98:
                            var8 = _closure1_slot6;
                            var5 = var8.canOpenURL;
                            var9 = var5.bind(var8)(var4);
                            var8 = var9.then;
                            var5 = function(arg0) { // Environment: var2
                                _fun52052: for (var _fun52052_ip = 0;;) switch (_fun52052_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (var0) {
                                            _fun52052_ip = 51;
                                            continue _fun52052
                                        }
                                    case 6:
                                        var0 = global;
                                        var2 = var0.console;
                                        var1 = var2.warn;
                                        var4 = "Can't open url: ";
                                        var3 = var4.concat;
                                        var0 = _closure3_slot0;
                                        var0 = var3.bind(var4)(var0);
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    case 51:
                                        var2 = _closure1_slot6;
                                        var1 = var2.openURL;
                                        var0 = _closure3_slot0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var8 = var8.bind(var9)(var5);
                            var5 = var8.catch;
                            var2 = function(arg0) { // Environment: var2
                                var0 = global;
                                var3 = var0.console;
                                var2 = var3.warn;
                                var1 = 'Error opening URL: ';
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var2 = var5.bind(var8)(var2);
                            var2 = false;
                            _fun52049_ip = 166;
                            continue _fun52049;
                        case 148:
                            var5 = _closure2_slot2;
                            var2 = true;
                            if (!var5) {
                                _fun52049_ip = 166;
                                continue _fun52049
                            }
                        case 157:
                            var5 = _closure2_slot2;
                            var2 = var5.bind(var0)(var6);
                        case 166:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)(var2, var4, var3);
                            return var0;
                    }
                };
                return var0;
            };
            var _closure1_slot14 = var3;
            var4 = ['http://*', 'https://*'];
            var2.defaultOriginWhitelist = var4;
            var2.createOnShouldStartLoadWithRequest = var3;
            var3 = function() {
                var3 = _closure1_slot10;
                var2 = _closure1_slot7;
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var5 = var5[var0];
                var0 = undefined;
                var5 = var6.bind(var0)(var5);
                var5 = var5.loadingOrErrorView;
                var1.style = var5;
                var5 = _closure1_slot8;
                var4 = {};
                var4 = var3.bind(var0)(var5, var4);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.defaultRenderLoading = var3;
            var3 = function arg0, arg1, arg2() {
                var3 = _closure1_slot11;
                var2 = _closure1_slot7;
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 4;
                var5 = var10[var8];
                var0 = undefined;
                var5 = var9.bind(var0)(var5);
                var5 = var5.loadingOrErrorView;
                var1.style = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot9;
                var4 = {};
                var5 = var10[var8];
                var5 = var9.bind(var0)(var5);
                var5 = var5.errorTextTitle;
                var4.style = var5;
                var5 = 'Error loading page';
                var4.children = var5;
                var5 = var7.bind(var0)(var6, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var5 = {};
                var11 = var10[var8];
                var11 = var9.bind(var0)(var11);
                var11 = var11.errorText;
                var5.style = var11;
                var13 = 'Domain: ';
                var12 = var13.concat;
                var11 = arg0;
                var11 = var12.bind(var13)(var11);
                var5.children = var11;
                var5 = var7.bind(var0)(var6, var5);
                var4[1] = var5;
                var5 = {};
                var11 = var10[var8];
                var11 = var9.bind(var0)(var11);
                var11 = var11.errorText;
                var5.style = var11;
                var13 = 'Error Code: ';
                var12 = var13.concat;
                var11 = arg1;
                var11 = var12.bind(var13)(var11);
                var5.children = var11;
                var5 = var7.bind(var0)(var6, var5);
                var4[2] = var5;
                var5 = {};
                var8 = var10[var8];
                var8 = var9.bind(var0)(var8);
                var8 = var8.errorText;
                var5.style = var8;
                var10 = 'Description: ';
                var9 = var10.concat;
                var8 = arg2;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var0)(var6, var5);
                var4[3] = var5;
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.defaultRenderError = var3;
            var1 = function arg0() {
                _fun52056: for (var _fun52056_ip = 0;;) switch (_fun52056_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.startInLoadingState;
                        var8 = var1.onNavigationStateChange;
                        var _closure2_slot0 = var8;
                        var10 = var1.onLoadStart;
                        var _closure2_slot1 = var10;
                        var20 = var1.onLoad;
                        var _closure2_slot2 = var20;
                        var0 = var1.onLoadProgress;
                        var _closure2_slot3 = var0;
                        var19 = var1.onLoadEnd;
                        var _closure2_slot4 = var19;
                        var9 = var1.onError;
                        var _closure2_slot5 = var9;
                        var7 = var1.onHttpErrorProp;
                        var _closure2_slot6 = var7;
                        var4 = var1.onMessageProp;
                        var _closure2_slot7 = var4;
                        var6 = var1.onRenderProcessGoneProp;
                        var _closure2_slot8 = var6;
                        var5 = var1.onContentProcessDidTerminateProp;
                        var _closure2_slot9 = var5;
                        var18 = var1.originWhitelist;
                        var _closure2_slot10 = var18;
                        var17 = var1.onShouldStartLoadWithRequestProp;
                        var _closure2_slot11 = var17;
                        var16 = var1.onShouldStartLoadWithRequestCallback;
                        var _closure2_slot12 = var16;
                        var2 = _closure1_slot5;
                        var1 = 'IDLE';
                        if (!var3) {
                            _fun52056_ip = 161;
                            continue _fun52056
                        }
                    case 157:
                        var1 = 'LOADING';
                    case 161:
                        var15 = undefined;
                        var2 = var2.bind(var15)(var1);
                        var1 = 0;
                        var3 = var2[var1];
                        var21 = 1;
                        var2 = var2[var21];
                        var _closure2_slot13 = var2;
                        var11 = _closure1_slot5;
                        var14 = null;
                        var11 = var11.bind(var15)(var14);
                        var1 = var11[var1];
                        var11 = var11[var21];
                        var _closure2_slot14 = var11;
                        var11 = _closure1_slot4;
                        var11 = var11.bind(var15)(var14);
                        var _closure2_slot15 = var11;
                        var14 = _closure1_slot2;
                        var11 = new Array(1);
                        var11[0] = var8;
                        var8 = function(arg0) { // Environment: var12
                            _fun52057: for (var _fun52057_ip = 0;;) switch (_fun52057_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun52057_ip = 33;
                                        continue _fun52057
                                    }
                                case 13:
                                    var2 = _closure2_slot0;
                                    var0 = arg0;
                                    var1 = var0.nativeEvent;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 33:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var8 = var14.bind(var15)(var8, var11);
                        var _closure2_slot16 = var8;
                        var11 = new Array(2);
                        var11[0] = var10;
                        var11[1] = var8;
                        var10 = function(arg0) { // Environment: var12
                            _fun52058: for (var _fun52058_ip = 0;;) switch (_fun52058_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = _closure2_slot15;
                                    var1 = var2.nativeEvent;
                                    var1 = var1.url;
                                    var3.current = var1;
                                    var3 = _closure2_slot1;
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun52058_ip = 48;
                                        continue _fun52058
                                    }
                                case 37:
                                    var3 = _closure2_slot1;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                case 48:
                                    var1 = _closure2_slot16;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)(var2);
                                    return var0;
                            }
                        };
                        var11 = var14.bind(var15)(var10, var11);
                        var10 = new Array(2);
                        var10[0] = var9;
                        var10[1] = var19;
                        var9 = function(arg0) { // Environment: var12
                            _fun52059: for (var _fun52059_ip = 0;;) switch (_fun52059_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.persist;
                                    var1 = var1.bind(var0)();
                                    var2 = _closure2_slot5;
                                    if (var2) {
                                        _fun52059_ip = 56;
                                        continue _fun52059
                                    }
                                case 23:
                                    var2 = global;
                                    var5 = var2.console;
                                    var4 = var5.warn;
                                    var3 = var0.nativeEvent;
                                    var2 = 'Encountered an error loading page';
                                    var2 = var4.bind(var5)(var2, var3);
                                    _fun52059_ip = 67;
                                    continue _fun52059;
                                case 56:
                                    var3 = _closure2_slot5;
                                    var2 = undefined;
                                    var2 = var3.bind(var2)(var0);
                                case 67:
                                    var3 = _closure2_slot4;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun52059_ip = 88;
                                        continue _fun52059
                                    }
                                case 77:
                                    var3 = _closure2_slot4;
                                    var2 = undefined;
                                    var2 = var3.bind(var2)(var0);
                                case 88:
                                    var2 = var0.isDefaultPrevented;
                                    var2 = var2.bind(var0)();
                                    if (var2) {
                                        _fun52059_ip = 131;
                                        continue _fun52059
                                    }
                                case 101:
                                    var4 = _closure2_slot13;
                                    var2 = undefined;
                                    var3 = 'ERROR';
                                    var3 = var4.bind(var2)(var3);
                                    var1 = _closure2_slot14;
                                    var0 = var0.nativeEvent;
                                    var0 = var1.bind(var2)(var0);
                                case 131:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var9 = var14.bind(var15)(var9, var10);
                        var10 = new Array(1);
                        var10[0] = var7;
                        var7 = function(arg0) { // Environment: var12
                            _fun52060: for (var _fun52060_ip = 0;;) switch (_fun52060_ip) {
                                case 0:
                                    var2 = _closure2_slot6;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun52060_ip = 27;
                                        continue _fun52060
                                    }
                                case 13:
                                    var2 = _closure2_slot6;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                case 27:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7 = var14.bind(var15)(var7, var10);
                        var10 = new Array(1);
                        var10[0] = var6;
                        var6 = function(arg0) { // Environment: var12
                            _fun52061: for (var _fun52061_ip = 0;;) switch (_fun52061_ip) {
                                case 0:
                                    var2 = _closure2_slot8;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun52061_ip = 27;
                                        continue _fun52061
                                    }
                                case 13:
                                    var2 = _closure2_slot8;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                case 27:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var6 = var14.bind(var15)(var6, var10);
                        var10 = new Array(1);
                        var10[0] = var5;
                        var5 = function(arg0) { // Environment: var12
                            _fun52062: for (var _fun52062_ip = 0;;) switch (_fun52062_ip) {
                                case 0:
                                    var2 = _closure2_slot9;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun52062_ip = 27;
                                        continue _fun52062
                                    }
                                case 13:
                                    var2 = _closure2_slot9;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                case 27:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var5 = var14.bind(var15)(var5, var10);
                        var10 = new Array(3);
                        var10[0] = var20;
                        var10[1] = var19;
                        var10[2] = var8;
                        var8 = function(arg0) { // Environment: var12
                            _fun52063: for (var _fun52063_ip = 0;;) switch (_fun52063_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure2_slot2;
                                    var3 = null;
                                    if (!(var3 != var1)) {
                                        _fun52063_ip = 27;
                                        continue _fun52063
                                    }
                                case 16:
                                    var4 = _closure2_slot2;
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var2);
                                case 27:
                                    var1 = _closure2_slot4;
                                    if (!(var3 != var1)) {
                                        _fun52063_ip = 46;
                                        continue _fun52063
                                    }
                                case 35:
                                    var3 = _closure2_slot4;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                case 46:
                                    var1 = var2.nativeEvent;
                                    var3 = var1.url;
                                    var1 = _closure2_slot15;
                                    var1 = var1.current;
                                    if (!(var3 === var1)) {
                                        _fun52063_ip = 85;
                                        continue _fun52063
                                    }
                                case 70:
                                    var4 = _closure2_slot13;
                                    var3 = undefined;
                                    var1 = 'IDLE';
                                    var1 = var4.bind(var3)(var1);
                                case 85:
                                    var1 = _closure2_slot16;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)(var2);
                                    return var0;
                            }
                        };
                        var8 = var14.bind(var15)(var8, var10);
                        var10 = new Array(1);
                        var10[0] = var4;
                        var4 = function(arg0) { // Environment: var12
                            _fun52064: for (var _fun52064_ip = 0;;) switch (_fun52064_ip) {
                                case 0:
                                    var2 = _closure2_slot7;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun52064_ip = 27;
                                        continue _fun52064
                                    }
                                case 13:
                                    var2 = _closure2_slot7;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                case 27:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var14.bind(var15)(var4, var10);
                        var10 = new Array(1);
                        var10[0] = var0;
                        var0 = function(arg0) { // Environment: var12
                            _fun52065: for (var _fun52065_ip = 0;;) switch (_fun52065_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2.nativeEvent;
                                    var1 = var0.progress;
                                    var0 = 1;
                                    if (!(var0 === var1)) {
                                        _fun52065_ip = 43;
                                        continue _fun52065
                                    }
                                case 22:
                                    var3 = _closure2_slot13;
                                    var1 = undefined;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun52066: for (var _fun52066_ip = 0;;) switch (_fun52066_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = 'IDLE';
                                                var2 = 'LOADING';
                                                if (!(var2 !== var1)) {
                                                    _fun52066_ip = 18;
                                                    continue _fun52066
                                                }
                                            case 15:
                                                var0 = var1;
                                            case 18:
                                                return var0;
                                        }
                                    };
                                    var0 = var3.bind(var1)(var0);
                                case 43:
                                    var3 = _closure2_slot3;
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun52065_ip = 67;
                                        continue _fun52065
                                    }
                                case 56:
                                    var1 = _closure2_slot3;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2);
                                case 67:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var10 = var14.bind(var15)(var0, var10);
                        var0 = {};
                        var14 = _closure1_slot3;
                        var13 = new Array(3);
                        var13[0] = var18;
                        var13[1] = var17;
                        var13[2] = var16;
                        var12 = function() { // Environment: var12
                            var4 = _closure1_slot14;
                            var3 = _closure2_slot12;
                            var2 = _closure2_slot10;
                            var1 = _closure2_slot11;
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3, var2, var1);
                            return var0;
                        };
                        var12 = var14.bind(var15)(var12, var13);
                        var0.onShouldStartLoadWithRequest = var12;
                        var0.onLoadingStart = var11;
                        var0.onLoadingProgress = var10;
                        var0.onLoadingError = var9;
                        var0.onLoadingFinish = var8;
                        var0.onHttpError = var7;
                        var0.onRenderProcessGone = var6;
                        var0.onContentProcessDidTerminate = var5;
                        var0.onMessage = var4;
                        var0.viewState = var3;
                        var0.setViewState = var2;
                        var0.lastErrorEvent = var1;
                        return var0;
                }
            };
            var2.useWebWiewLogic = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 5908, 5909]);