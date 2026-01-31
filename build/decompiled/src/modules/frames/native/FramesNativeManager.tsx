// modules/frames/native/FramesNativeManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun63005: for (var _fun63005_ip = 0;;) switch (_fun63005_ip) {
        case 0:
            var5 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var6;
            var0 = function() {
                _fun63006: for (var _fun63006_ip = 0;;) switch (_fun63006_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun63006_ip = 74;
                        continue _fun63006;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot15 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot15 = var0;
            var0 = function arg0, arg1, arg2, arg3() {
                _fun63009: for (var _fun63009_ip = 0;;) switch (_fun63009_ip) {
                    case 0:
                        var4 = arg0;
                        var6 = arg2;
                        var _closure2_slot0 = var6;
                        var5 = _closure1_slot7;
                        var3 = _closure1_slot6;
                        var0 = 1;
                        var2 = 3;
                        var7 = var0 & var2;
                        var0 = var4;
                        if (!var7) {
                            _fun63009_ip = 44;
                            continue _fun63009
                        }
                    case 39:
                        var0 = var4.prototype;
                    case 44:
                        var4 = undefined;
                        var3 = var3.bind(var4)(var0);
                        var0 = arg1;
                        var4 = var5.bind(var4)(var3, var0, var6);
                        var _closure2_slot1 = var4;
                        var0 = 2;
                        var2 = var0 & var2;
                        var0 = var4;
                        if (!var2) {
                            _fun63009_ip = 97;
                            continue _fun63009
                        }
                    case 78:
                        var3 = 'function';
                        var2 = typeof var4;
                        var0 = var4;
                        if (!(var3 === var2)) {
                            _fun63009_ip = 97;
                            continue _fun63009
                        }
                    case 92:
                        var0 = function(arg0) { // Environment: var1
                            var3 = _closure2_slot1;
                            var2 = var3.apply;
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                    case 97:
                        return var0;
                }
            };
            var _closure1_slot16 = var0;
            var0 = function() {
                var0 = undefined;
                var3 = _closure1_slot18;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot17 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot9;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun63014: for (var _fun63014_ip = 0;;) switch (_fun63014_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun63014_ip = 113;
                                    continue _fun63014
                                }
                            case 7:
                                var1 = arg0;
                            case 10: // try_start_0
                                var3 = _closure1_slot13;
                                var2 = var3.injectJavaScript;
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var4 = 14;
                                var4 = var5[var4];
                                var5 = undefined;
                                var4 = var6.bind(var5)(var4);
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                                SaveGenerator(address = 59);
                            case 57:
                                return var1;
                            case 59:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun63014_ip = 67;
                                    continue _fun63014
                                }
                            case 65: // try_end0
                                _fun63014_ip = 108;
                                continue _fun63014;
                            case 67:
                                return var1;
                            case 70: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 15;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.captureException;
                                var1 = var1.bind(var2)(var3);
                            case 108:
                                var1 = undefined;
                                return var1;
                            case 113:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot18 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot18 = var0;
            var0 = global;
            var8 = var0.Object;
            var4 = var8.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var8)(var2, var0, var1);
            var0 = 0;
            var1 = var6[var0];
            var0 = undefined;
            var1 = var7.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 3;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 4;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot7 = var1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot8 = var1;
            var1 = 6;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot9 = var1;
            var1 = 7;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var10 = var1.NativeEventEmitter;
            var1 = 8;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot10 = var1;
            var1 = 9;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var1 = var1.ComponentActions;
            var _closure1_slot11 = var1;
            var1 = 10;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var1 = var1.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
            var _closure1_slot12 = var1;
            var1 = 11;
            var1 = var6[var1];
            var8 = var5.bind(var0)(var1);
            var4 = var8.getWebViewProxy;
            var1 = 'FRAME_WEB_VIEW_KEY';
            var4 = var4.bind(var8)(var1);
            var _closure1_slot13 = var4;
            var4 = 12;
            var4 = var6[var4];
            var8 = var5.bind(var0)(var4);
            var4 = var8.isAndroid;
            var8 = var4.bind(var8)();
            var4 = null;
            if (!var8) {
                _fun63005_ip = 375;
                continue _fun63005
            }
        case 343:
            var8 = 13;
            var8 = var6[var8];
            var13 = var7.bind(var0)(var8);
            var9 = var10.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var10
                }
            });
            var14 = var9;
            var8 = new var14[var10](var13, var12);
            var4 = var8 instanceof Object ? var8 : var9;
        case 375:
            var _closure1_slot14 = var4;
            var4 = 24;
            var4 = var6[var4];
            var4 = var7.bind(var0)(var4);
            var3 = function(arg0) { // Environment: var3
                var3 = function() {
                    _fun63016: for (var _fun63016_ip = 0;;) switch (_fun63016_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot3;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot6;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot5;
                            var0 = _closure1_slot15;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun63016_ip = 69;
                                continue _fun63016
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun63016_ip = 105;
                            continue _fun63016;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot6;
                            var5 = var5.bind(var2)(var3);
                            var5 = var5.constructor;
                            var4 = arguments;
                            var0 = var6.bind(var7)(var8, var4, var5);
                        case 105:
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot8;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot4;
                var4 = {};
                var0 = '_initialize';
                var4.key = var0;
                var0 = function() {
                    _fun63017: for (var _fun63017_ip = 0;;) switch (_fun63017_ip) {
                        case 0:
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var7 = _closure1_slot16;
                            var13 = _closure2_slot0;
                            var0 = undefined;
                            var12 = '_initialize';
                            var10 = 3;
                            var14 = undefined;
                            var11 = var2;
                            var5 = var14[var7](var13, var12, var11, var10, var9);
                            var4 = new Array(0);
                            var4 = var5.bind(var0)(var4);
                            var6 = var2.lifecycleSubscription;
                            var4 = null;
                            if (!(var4 != var6)) {
                                _fun63017_ip = 72;
                                continue _fun63017
                            }
                        case 62:
                            var5 = var6.remove;
                            var5 = var5.bind(var6)();
                        case 72:
                            var5 = _closure1_slot14;
                            var6 = var4 == var5;
                            var5 = undefined;
                            if (var6) {
                                _fun63017_ip = 112;
                                continue _fun63017
                            }
                        case 85:
                            var9 = _closure1_slot14;
                            var8 = var9.addListener;
                            var7 = 'onHostDestroy';
                            var6 = function() { // Environment: var1
                                _fun63018: for (var _fun63018_ip = 0;;) switch (_fun63018_ip) {
                                    case 0:
                                        var1 = _closure1_slot10;
                                        var0 = var1.getConnectedFrame;
                                        var3 = var0.bind(var1)();
                                        var0 = null;
                                        if (!(var0 != var3)) {
                                            _fun63018_ip = 52;
                                            continue _fun63018
                                        }
                                    case 23:
                                        var2 = _closure3_slot0;
                                        var1 = var2.leaveFrame;
                                        var0 = {};
                                        var3 = var3.applicationId;
                                        var0.applicationId = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = var8.bind(var9)(var7, var6);
                        case 112:
                            var2.lifecycleSubscription = var5;
                            var5 = var2.scriptMessageSubscription;
                            if (!(var4 != var5)) {
                                _fun63017_ip = 138;
                                continue _fun63017
                            }
                        case 128:
                            var4 = var5.remove;
                            var4 = var4.bind(var5)();
                        case 138:
                            var4 = _closure1_slot13;
                            var3 = var4.addOnMessageListener;
                            var1 = function(arg0) { // Environment: var1
                                _fun63019: for (var _fun63019_ip = 0;;) switch (_fun63019_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = undefined;
                                        var7 = undefined;
                                        var9 = undefined;
                                        var6 = undefined;
                                        var3 = undefined;
                                        var5 = undefined;
                                    case 15: // try_start_0
                                        var4 = global;
                                        var10 = var4.JSON;
                                        var8 = var10.parse;
                                        var4 = var1;
                                        var4 = var4.data;
                                        var7 = var8.bind(var10)(var4);
                                        var10 = _closure1_slot10;
                                        var8 = var10.getConnectedFrame;
                                        var8 = var8.bind(var10)();
                                        var9 = var8;
                                        var10 = null;
                                        var11 = var10 == var8;
                                        var8 = undefined;
                                        if (var11) {
                                            _fun63019_ip = 78;
                                            continue _fun63019
                                        }
                                    case 73:
                                        var8 = var9.url;
                                    case 78:
                                        var6 = var8;
                                        var9 = var7;
                                        var11 = 'object';
                                        var9 = typeof var9;
                                        var9 = var11 === var9;
                                        var8 = var9;
                                        if (!var9) {
                                            _fun63019_ip = 108;
                                            continue _fun63019
                                        }
                                    case 101:
                                        var9 = var6;
                                        var8 = var10 != var9;
                                    case 108:
                                        if (!var8) {
                                            _fun63019_ip = 148;
                                            continue _fun63019
                                        }
                                    case 111:
                                        var9 = _closure1_slot1;
                                        var10 = _closure1_slot2;
                                        var8 = 16;
                                        var8 = var10[var8];
                                        var9 = var9.bind(var0)(var8);
                                        var8 = var9.handleMessage;
                                        var4 = _closure1_slot17;
                                        var4 = var8.bind(var9)(var7, var6, var4);
                                    case 148: // try_end0
                                        _fun63019_ip = 398;
                                        continue _fun63019;
                                    case 153: // catch_target0
                                        CatchBlockStart(arg_register = 6);
                                        var2 = var6;
                                        var4 = global;
                                        var4 = var4.SyntaxError;
                                        var4 = var6 instanceof var4;
                                        if (var4) {
                                            _fun63019_ip = 175;
                                            continue _fun63019
                                        }
                                    case 173:
                                        throw var2;
                                    case 175:
                                        var2 = var1.data;
                                        var1 = _closure1_slot12;
                                        if (!(var2 === var1)) {
                                            _fun63019_ip = 398;
                                            continue _fun63019
                                        }
                                    case 194:
                                        var2 = _closure1_slot10;
                                        var1 = var2.getConnectedFrame;
                                        var1 = var1.bind(var2)();
                                        var3 = var1;
                                        var2 = null;
                                        var6 = var2 == var1;
                                        var1 = undefined;
                                        if (var6) {
                                            _fun63019_ip = 227;
                                            continue _fun63019
                                        }
                                    case 222:
                                        var1 = var3.applicationId;
                                    case 227:
                                        var5 = var1;
                                        if (!(var2 != var1)) {
                                            _fun63019_ip = 398;
                                            continue _fun63019
                                        }
                                    case 237:
                                        var3 = _closure3_slot0;
                                        var2 = var3.leaveFrame;
                                        var1 = {};
                                        var1.applicationId = var5;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var1 = 17;
                                        var1 = var8[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.show;
                                        var1 = {};
                                        var7 = _closure1_slot0;
                                        var4 = 18;
                                        var5 = var8[var4];
                                        var5 = var7.bind(var0)(var5);
                                        var9 = var5.intl;
                                        var6 = var9.string;
                                        var5 = var8[var4];
                                        var5 = var7.bind(var0)(var5);
                                        var5 = var5.t;
                                        var5 = var5.tYBBWz;
                                        var5 = var6.bind(var9)(var5);
                                        var1.body = var5;
                                        var5 = var8[var4];
                                        var5 = var7.bind(var0)(var5);
                                        var6 = var5.intl;
                                        var5 = var6.string;
                                        var4 = var8[var4];
                                        var4 = var7.bind(var0)(var4);
                                        var4 = var4.t;
                                        var4 = var4.BddRzS;
                                        var4 = var5.bind(var6)(var4);
                                        var1.confirmText = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 398:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1);
                            var2.scriptMessageSubscription = var1;
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(9);
                var0[0] = var4;
                var4 = {};
                var6 = '_terminate';
                var4.key = var6;
                var6 = function() {
                    _fun63020: for (var _fun63020_ip = 0;;) switch (_fun63020_ip) {
                        case 0:
                            var2 = this;
                            var5 = _closure1_slot16;
                            var9 = _closure2_slot0;
                            var0 = undefined;
                            var8 = '_terminate';
                            var6 = 3;
                            var10 = undefined;
                            var7 = var2;
                            var3 = var10[var5](var9, var8, var7, var6, var5);
                            var1 = new Array(0);
                            var1 = var3.bind(var0)(var1);
                            var4 = var2.lifecycleSubscription;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun63020_ip = 66;
                                continue _fun63020
                            }
                        case 56:
                            var3 = var4.remove;
                            var3 = var3.bind(var4)();
                        case 66:
                            var2 = var2.scriptMessageSubscription;
                            if (!(var1 != var2)) {
                                _fun63020_ip = 86;
                                continue _fun63020
                            }
                        case 76:
                            var1 = var2.remove;
                            var1 = var1.bind(var2)();
                        case 86:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'showRPCDisconnectErrorUI';
                var4.key = var6;
                var6 = function arg0() {
                    var0 = arg0;
                    var9 = var0.code;
                    var4 = var0.message;
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var0 = 17;
                    var1 = var10[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 18;
                    var7 = var10[var5];
                    var7 = var6.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToPlainString;
                    var5 = var10[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.t;
                    var6 = var5.hbiAO6;
                    var5 = {};
                    var5.code = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var1.title = var5;
                    var1.body = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'leaveFrame';
                var4.key = var6;
                var6 = function arg0() {
                    _fun63022: for (var _fun63022_ip = 0;;) switch (_fun63022_ip) {
                        case 0:
                            var3 = this;
                            var0 = arg0;
                            var4 = var0.applicationId;
                            var0 = var3.releaseWebView;
                            var0 = var0.bind(var3)();
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.isNotNullish;
                            var1 = var1.bind(var2)(var4);
                            if (!var1) {
                                _fun63022_ip = 79;
                                continue _fun63022
                            }
                        case 60:
                            var2 = var3.clearFrameState;
                            var1 = {};
                            var1.applicationId = var4;
                            var1 = var2.bind(var3)(var1);
                        case 79:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'clearFrameState';
                var4.key = var6;
                var6 = function arg0() {
                    var0 = arg0;
                    var4 = var0.applicationId;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 20;
                    var1 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.stopFrame;
                    var1 = {};
                    var1.applicationId = var4;
                    var1 = var5.bind(var6)(var1);
                    var1 = 21;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {
                        'type': 'FRAME_SET_ORIENTATION_LOCK_STATE',
                        'applicationId': null,
                        'lockState': null,
                        'pictureInPictureLockState': null
                    };
                    var1.applicationId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'releaseWebView';
                var4.key = var6;
                var6 = function() {
                    _fun63024: for (var _fun63024_ip = 0;;) switch (_fun63024_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.releaseFrameId;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun63024_ip = 91;
                                continue _fun63024
                            }
                        case 19:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 22;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var5 = var2.ComponentDispatch;
                            var4 = var5.dispatch;
                            var2 = _closure1_slot11;
                            var3 = var2.IFRAME_UNMOUNT;
                            var2 = {};
                            var2.id = var0;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure1_slot13;
                            var1 = var2.releaseWebView;
                            var1 = var1.bind(var2)();
                        case 91:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'releaseFrameId';
                var4.key = var6;
                var6 = function() {
                    var2 = this;
                    var0 = var2.frameId;
                    var1 = undefined;
                    var2.frameId = var1;
                    return var0;
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'hasFrameId';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var1 = var0.frameId;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'getOrCreateFrameId';
                var4.key = var6;
                var5 = function() {
                    _fun63027: for (var _fun63027_ip = 0;;) switch (_fun63027_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.frameId;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun63027_ip = 58;
                                continue _fun63027
                            }
                        case 15:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 23;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var1 = var3.v4;
                            var1 = var1.bind(var3)();
                            var2.frameId = var1;
                            return var1;
                        case 58:
                            return var0;
                    }
                };
                var4.value = var5;
                var0[8] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var3 = var3.bind(var0)(var4);
            var4 = 'FramesNativeManager';
            var3.displayName = var4;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var14 = var4;
            var3 = new var14[var3](var13);
            var3 = var3 instanceof Object ? var3 : var4;
            var4 = 25;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/frames/native/FramesNativeManager.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var2.FRAME_WEB_VIEW_KEY = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 5, 27, 7878, 660, 3416, 5905, 479, 7883, 7884, 1207, 7885, 3895, 1234, 1304, 7900, 806, 1229, 491, 7942, 2]);