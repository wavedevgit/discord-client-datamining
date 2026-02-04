// modules/activities/native/EmbeddedActivitiesNativeManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun63981: for (var _fun63981_ip = 0;;) switch (_fun63981_ip) {
        case 0:
            var5 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var6;
            var0 = function() {
                _fun63982: for (var _fun63982_ip = 0;;) switch (_fun63982_ip) {
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
                        _fun63982_ip = 74;
                        continue _fun63982;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot18 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var0 = function arg0, arg1, arg2, arg3() {
                _fun63985: for (var _fun63985_ip = 0;;) switch (_fun63985_ip) {
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
                            _fun63985_ip = 44;
                            continue _fun63985
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
                            _fun63985_ip = 97;
                            continue _fun63985
                        }
                    case 78:
                        var3 = 'function';
                        var2 = typeof var4;
                        var0 = var4;
                        if (!(var3 === var2)) {
                            _fun63985_ip = 97;
                            continue _fun63985
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
            var _closure1_slot19 = var0;
            var0 = function() {
                var0 = undefined;
                var3 = _closure1_slot21;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot20 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot9;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun63990: for (var _fun63990_ip = 0;;) switch (_fun63990_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun63990_ip = 113;
                                    continue _fun63990
                                }
                            case 7:
                                var1 = arg0;
                            case 10: // try_start_0
                                var3 = _closure1_slot16;
                                var2 = var3.injectJavaScript;
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var4 = 16;
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
                                    _fun63990_ip = 67;
                                    continue _fun63990
                                }
                            case 65: // try_end0
                                _fun63990_ip = 108;
                                continue _fun63990;
                            case 67:
                                return var1;
                            case 70: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 17;
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
                _closure1_slot21 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot21 = var0;
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
            var1 = var7.bind(var0)(var1);
            var _closure1_slot11 = var1;
            var1 = 10;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot12 = var1;
            var1 = 11;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var1 = var1.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
            var _closure1_slot13 = var1;
            var1 = 12;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var4 = var1.AnalyticEvents;
            var _closure1_slot14 = var4;
            var1 = var1.ComponentActions;
            var _closure1_slot15 = var1;
            var1 = 13;
            var1 = var6[var1];
            var8 = var5.bind(var0)(var1);
            var4 = var8.getWebViewProxy;
            var1 = 'EMBEDDED_ACTIVITY_WEB_VIEW_KEY';
            var4 = var4.bind(var8)(var1);
            var _closure1_slot16 = var4;
            var4 = 14;
            var4 = var6[var4];
            var8 = var5.bind(var0)(var4);
            var4 = var8.isAndroid;
            var8 = var4.bind(var8)();
            var4 = null;
            if (!var8) {
                _fun63981_ip = 416;
                continue _fun63981
            }
        case 384:
            var8 = 15;
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
        case 416:
            var _closure1_slot17 = var4;
            var4 = 32;
            var4 = var6[var4];
            var4 = var7.bind(var0)(var4);
            var3 = function(arg0) { // Environment: var3
                var3 = function arg0() {
                    _fun63992: for (var _fun63992_ip = 0;;) switch (_fun63992_ip) {
                        case 0:
                            var4 = this;
                            var12 = 0;
                            var0 = copyRestArgs(var12);
                            var7 = _closure1_slot3;
                            var2 = _closure2_slot0;
                            var3 = undefined;
                            var7 = var7.bind(var3)(var4, var2);
                            var9 = new Array(0);
                            var12 = var9;
                            var11 = var0;
                            var10 = 0;
                            var0 = arraySpread(var12, var11, var10);
                            var0 = _closure1_slot6;
                            var8 = var0.bind(var3)(var2);
                            var2 = _closure1_slot5;
                            var0 = _closure1_slot18;
                            var0 = var0.bind(var3)();
                            if (var0) {
                                _fun63992_ip = 86;
                                continue _fun63992
                            }
                        case 73:
                            var0 = var8.apply;
                            var0 = var0.bind(var8)(var4, var9);
                            _fun63992_ip = 120;
                            continue _fun63992;
                        case 86:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot6;
                            var5 = var5.bind(var3)(var4);
                            var5 = var5.constructor;
                            var0 = var6.bind(var7)(var8, var9, var5);
                        case 120:
                            var0 = var2.bind(var3)(var4, var0);
                            var _closure3_slot0 = var0;
                            var1 = function(arg0) { // Environment: var1
                                _fun63993: for (var _fun63993_ip = 0;;) switch (_fun63993_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var5 = var0.reason;
                                        var4 = var0.application;
                                        var1 = _closure1_slot12;
                                        var0 = var1.getConnectedActivityLocation;
                                        var7 = var0.bind(var1)();
                                        var0 = null;
                                        var1 = var0 == var4;
                                        var0 = undefined;
                                        var6 = undefined;
                                        if (var1) {
                                            _fun63993_ip = 49;
                                            continue _fun63993
                                        }
                                    case 44:
                                        var6 = var4.id;
                                    case 49:
                                        var3 = _closure3_slot0;
                                        var2 = var3.leaveActivity;
                                        var1 = {};
                                        var1.location = var7;
                                        var1.applicationId = var6;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = var3.superHandleRPCDisconnect;
                                        var1 = {};
                                        var1.reason = var5;
                                        var1.application = var4;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var0.handleRPCDisconnect = var1;
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
                    _fun63994: for (var _fun63994_ip = 0;;) switch (_fun63994_ip) {
                        case 0:
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var7 = _closure1_slot19;
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
                                _fun63994_ip = 72;
                                continue _fun63994
                            }
                        case 62:
                            var5 = var6.remove;
                            var5 = var5.bind(var6)();
                        case 72:
                            var5 = _closure1_slot17;
                            var6 = var4 == var5;
                            var5 = undefined;
                            if (var6) {
                                _fun63994_ip = 112;
                                continue _fun63994
                            }
                        case 85:
                            var9 = _closure1_slot17;
                            var8 = var9.addListener;
                            var7 = 'onHostDestroy';
                            var6 = function() { // Environment: var1
                                _fun63995: for (var _fun63995_ip = 0;;) switch (_fun63995_ip) {
                                    case 0:
                                        var2 = _closure1_slot12;
                                        var1 = var2.getConnectedActivityLocation;
                                        var4 = var1.bind(var2)();
                                        var1 = null;
                                        var2 = var1 != var4;
                                        var3 = null;
                                        if (!var2) {
                                            _fun63995_ip = 43;
                                            continue _fun63995
                                        }
                                    case 28:
                                        var2 = _closure1_slot12;
                                        var0 = var2.getSelfEmbeddedActivityForLocation;
                                        var3 = var0.bind(var2)(var4);
                                    case 43:
                                        var0 = var1 != var3;
                                        if (!var0) {
                                            _fun63995_ip = 54;
                                            continue _fun63995
                                        }
                                    case 50:
                                        var0 = var1 != var4;
                                    case 54:
                                        if (!var0) {
                                            _fun63995_ip = 90;
                                            continue _fun63995
                                        }
                                    case 57:
                                        var2 = _closure3_slot0;
                                        var1 = var2.leaveActivity;
                                        var0 = {};
                                        var0.location = var4;
                                        var3 = var3.applicationId;
                                        var0.applicationId = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 90:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = var8.bind(var9)(var7, var6);
                        case 112:
                            var2.lifecycleSubscription = var5;
                            var6 = var2.scriptMessageSubscription;
                            if (!(var4 != var6)) {
                                _fun63994_ip = 138;
                                continue _fun63994
                            }
                        case 128:
                            var5 = var6.remove;
                            var5 = var5.bind(var6)();
                        case 138:
                            var7 = _closure1_slot16;
                            var6 = var7.addOnMessageListener;
                            var5 = function(arg0) { // Environment: var1
                                _fun63996: for (var _fun63996_ip = 0;;) switch (_fun63996_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = undefined;
                                        var8 = undefined;
                                        var12 = undefined;
                                        var10 = undefined;
                                        var4 = undefined;
                                        var7 = undefined;
                                        var6 = undefined;
                                        var5 = undefined;
                                    case 19: // try_start_0
                                        var3 = global;
                                        var11 = var3.JSON;
                                        var9 = var11.parse;
                                        var3 = var1;
                                        var3 = var3.data;
                                        var8 = var9.bind(var11)(var3);
                                        var11 = _closure1_slot12;
                                        var9 = var11.getConnectedActivityLocation;
                                        var9 = var9.bind(var11)();
                                        var12 = var9;
                                        var11 = null;
                                        var13 = var11 != var9;
                                        var9 = null;
                                        if (!var13) {
                                            _fun63996_ip = 92;
                                            continue _fun63996
                                        }
                                    case 77:
                                        var14 = _closure1_slot12;
                                        var13 = var14.getSelfEmbeddedActivityForLocation;
                                        var9 = var13.bind(var14)(var12);
                                    case 92:
                                        var10 = var9;
                                        var12 = var11 == var9;
                                        var9 = undefined;
                                        if (var12) {
                                            _fun63996_ip = 109;
                                            continue _fun63996
                                        }
                                    case 104:
                                        var9 = var10.url;
                                    case 109:
                                        var4 = var9;
                                        var10 = var8;
                                        var12 = 'object';
                                        var10 = typeof var10;
                                        var10 = var12 === var10;
                                        var9 = var10;
                                        if (!var10) {
                                            _fun63996_ip = 139;
                                            continue _fun63996
                                        }
                                    case 132:
                                        var10 = var4;
                                        var9 = var11 != var10;
                                    case 139:
                                        if (!var9) {
                                            _fun63996_ip = 179;
                                            continue _fun63996
                                        }
                                    case 142:
                                        var10 = _closure1_slot1;
                                        var11 = _closure1_slot2;
                                        var9 = 18;
                                        var9 = var11[var9];
                                        var10 = var10.bind(var0)(var9);
                                        var9 = var10.handleMessage;
                                        var3 = _closure1_slot20;
                                        var3 = var9.bind(var10)(var8, var4, var3);
                                    case 179: // try_end0
                                        _fun63996_ip = 492;
                                        continue _fun63996;
                                    case 184: // catch_target0
                                        CatchBlockStart(arg_register = 4);
                                        var2 = var4;
                                        var3 = global;
                                        var3 = var3.SyntaxError;
                                        var3 = var4 instanceof var3;
                                        if (var3) {
                                            _fun63996_ip = 206;
                                            continue _fun63996
                                        }
                                    case 204:
                                        throw var2;
                                    case 206:
                                        var2 = var1.data;
                                        var1 = _closure1_slot13;
                                        if (!(var2 === var1)) {
                                            _fun63996_ip = 492;
                                            continue _fun63996
                                        }
                                    case 225:
                                        var2 = _closure1_slot12;
                                        var1 = var2.getConnectedActivityLocation;
                                        var1 = var1.bind(var2)();
                                        var6 = var1;
                                        var3 = null;
                                        var2 = var3 != var1;
                                        var1 = undefined;
                                        if (!var2) {
                                            _fun63996_ip = 291;
                                            continue _fun63996
                                        }
                                    case 253:
                                        var9 = _closure1_slot12;
                                        var8 = var9.getSelfEmbeddedActivityForLocation;
                                        var2 = var6;
                                        var2 = var8.bind(var9)(var2);
                                        var7 = var2;
                                        var8 = var3 == var2;
                                        var2 = undefined;
                                        if (var8) {
                                            _fun63996_ip = 288;
                                            continue _fun63996
                                        }
                                    case 283:
                                        var2 = var7.applicationId;
                                    case 288:
                                        var1 = var2;
                                    case 291:
                                        var5 = var1;
                                        var2 = var6;
                                        var2 = var3 != var2;
                                        var1 = var2;
                                        if (!var2) {
                                            _fun63996_ip = 314;
                                            continue _fun63996
                                        }
                                    case 307:
                                        var2 = var5;
                                        var1 = var3 != var2;
                                    case 314:
                                        if (!var1) {
                                            _fun63996_ip = 492;
                                            continue _fun63996
                                        }
                                    case 320:
                                        var3 = _closure3_slot0;
                                        var2 = var3.leaveActivity;
                                        var1 = {};
                                        var1.location = var6;
                                        var1.applicationId = var5;
                                        var5 = false;
                                        var1.showFeedback = var5;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var1 = 19;
                                        var1 = var8[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.show;
                                        var1 = {};
                                        var7 = _closure1_slot0;
                                        var4 = 20;
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
                                    case 492:
                                        return var0;
                                }
                            };
                            var5 = var6.bind(var7)(var5);
                            var2.scriptMessageSubscription = var5;
                            var5 = var2.thermalStateSubscription;
                            if (!(var4 != var5)) {
                                _fun63994_ip = 184;
                                continue _fun63994
                            }
                        case 174:
                            var4 = var5.remove;
                            var4 = var4.bind(var5)();
                        case 184:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 21;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.addListener;
                            var1 = function(arg0) { // Environment: var1
                                _fun63997: for (var _fun63997_ip = 0;;) switch (_fun63997_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var9 = var0.rawThermalState;
                                        var2 = _closure1_slot12;
                                        var0 = var2.getConnectedActivityLocation;
                                        var6 = var0.bind(var2)();
                                        var5 = null;
                                        var0 = var5 != var6;
                                        var4 = null;
                                        if (!var0) {
                                            _fun63997_ip = 52;
                                            continue _fun63997
                                        }
                                    case 37:
                                        var2 = _closure1_slot12;
                                        var0 = var2.getSelfEmbeddedActivityForLocation;
                                        var4 = var0.bind(var2)(var6);
                                    case 52:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 22;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.getEmbeddedActivityLocationChannelId;
                                        var11 = var2.bind(var3)(var6);
                                        var3 = _closure1_slot10;
                                        var2 = var3.getBasicChannel;
                                        var10 = var2.bind(var3)(var11);
                                        var3 = var5 == var4;
                                        var2 = undefined;
                                        if (var3) {
                                            _fun63997_ip = 115;
                                            continue _fun63997
                                        }
                                    case 109:
                                        var2 = var4.compositeInstanceId;
                                    case 115:
                                        var6 = var5 == var4;
                                        var3 = undefined;
                                        if (var6) {
                                            _fun63997_ip = 129;
                                            continue _fun63997
                                        }
                                    case 124:
                                        var3 = var4.applicationId;
                                    case 129:
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var4 = 23;
                                        var4 = var7[var4];
                                        var8 = var6.bind(var0)(var4);
                                        var7 = var8.track;
                                        var4 = _closure1_slot14;
                                        var6 = var4.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED;
                                        var4 = {};
                                        var4.channel_id = var11;
                                        var4.application_id = var3;
                                        var4.activity_session_id = var2;
                                        var4.thermal_state = var9;
                                        var11 = var5 == var10;
                                        var9 = undefined;
                                        if (var11) {
                                            _fun63997_ip = 199;
                                            continue _fun63997
                                        }
                                    case 194:
                                        var9 = var10.guild_id;
                                    case 199:
                                        var4.guild_id = var9;
                                        var10 = _closure1_slot11;
                                        var9 = var10.getMediaSessionId;
                                        var9 = var9.bind(var10)();
                                        var4.media_session_id = var9;
                                        var4 = var7.bind(var8)(var6, var4);
                                        var7 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var6 = 24;
                                        var6 = var4[var6];
                                        var8 = var7.bind(var0)(var6);
                                        var7 = var8.dispatch;
                                        var6 = {};
                                        var9 = 'THERMAL_STATE_CHANGE';
                                        var6.type = var9;
                                        var6.applicationId = var3;
                                        var6 = var7.bind(var8)(var6);
                                        var7 = _closure1_slot0;
                                        var6 = 25;
                                        var4 = var4[var6];
                                        var7 = var7.bind(var0)(var4);
                                        var4 = var7.getThermalState;
                                        var4 = var4.bind(var7)();
                                        var2 = var5 != var2;
                                        if (!var2) {
                                            _fun63997_ip = 311;
                                            continue _fun63997
                                        }
                                    case 307:
                                        var2 = var5 != var3;
                                    case 311:
                                        if (!var2) {
                                            _fun63997_ip = 347;
                                            continue _fun63997
                                        }
                                    case 314:
                                        var5 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var6];
                                        var3 = var5.bind(var0)(var3);
                                        var3 = var3.ThermalStates;
                                        var3 = var3.SERIOUS;
                                        var2 = var4 >= var3;
                                    case 347:
                                        if (!var2) {
                                            _fun63997_ip = 380;
                                            continue _fun63997
                                        }
                                    case 350:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 26;
                                        var1 = var3[var1];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.requestRespondToSeriousThermalState;
                                        var1 = var1.bind(var2)();
                                    case 380:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var1);
                            var2.thermalStateSubscription = var1;
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(12);
                var0[0] = var4;
                var4 = {};
                var6 = '_terminate';
                var4.key = var6;
                var6 = function() {
                    _fun63998: for (var _fun63998_ip = 0;;) switch (_fun63998_ip) {
                        case 0:
                            var2 = this;
                            var5 = _closure1_slot19;
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
                                _fun63998_ip = 66;
                                continue _fun63998
                            }
                        case 56:
                            var3 = var4.remove;
                            var3 = var3.bind(var4)();
                        case 66:
                            var4 = var2.scriptMessageSubscription;
                            if (!(var1 != var4)) {
                                _fun63998_ip = 86;
                                continue _fun63998
                            }
                        case 76:
                            var3 = var4.remove;
                            var3 = var3.bind(var4)();
                        case 86:
                            var2 = var2.thermalStateSubscription;
                            if (!(var1 != var2)) {
                                _fun63998_ip = 106;
                                continue _fun63998
                            }
                        case 96:
                            var1 = var2.remove;
                            var1 = var1.bind(var2)();
                        case 106:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'showErrorModal';
                var4.key = var6;
                var6 = function arg0() {
                    var0 = arg0;
                    var9 = var0.code;
                    var4 = var0.message;
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var0 = 19;
                    var1 = var10[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 20;
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
                var6 = 'showLaunchErrorModal';
                var4.key = var6;
                var6 = function arg0() {
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 19;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = 20;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.PtobXW;
                    var4 = var5.bind(var6)(var4);
                    var1.title = var4;
                    var4 = arg0;
                    var1.body = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'showDevShelfOverrideEnabled';
                var4.key = var6;
                var6 = function() {
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 27;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var7 = 'EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED';
                    var1.key = var7;
                    var9 = _closure1_slot0;
                    var4 = 20;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var4 = var6[var4];
                    var4 = var9.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.JfA7IK;
                    var4 = var7.bind(var8)(var4);
                    var1.content = var4;
                    var4 = 28;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var1.icon = var4;
                    var4 = 'status-positive';
                    var1.iconColor = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'releaseWebView';
                var4.key = var6;
                var6 = function() {
                    _fun64002: for (var _fun64002_ip = 0;;) switch (_fun64002_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.releaseFrameId;
                            var0 = var0.bind(var1)();
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun64002_ip = 91;
                                continue _fun64002
                            }
                        case 19:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 29;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var5 = var2.ComponentDispatch;
                            var4 = var5.dispatch;
                            var2 = _closure1_slot15;
                            var3 = var2.IFRAME_UNMOUNT;
                            var2 = {};
                            var2.id = var0;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure1_slot16;
                            var1 = var2.releaseWebView;
                            var1 = var1.bind(var2)();
                        case 91:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'leaveActivity';
                var4.key = var6;
                var6 = function arg0() {
                    _fun64003: for (var _fun64003_ip = 0;;) switch (_fun64003_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = this;
                            var3 = var0.location;
                            var2 = var0.applicationId;
                            var5 = var0.showFeedback;
                            var0 = var4.releaseWebView;
                            var6 = var0.bind(var4)();
                            var0 = null;
                            var1 = var0 != var3;
                            if (!var1) {
                                _fun64003_ip = 77;
                                continue _fun64003
                            }
                        case 41:
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var7 = 30;
                            var8 = var8[var7];
                            var7 = undefined;
                            var8 = var9.bind(var7)(var8);
                            var7 = var8.isNotNullish;
                            var1 = var7.bind(var8)(var2);
                        case 77:
                            if (!var1) {
                                _fun64003_ip = 105;
                                continue _fun64003
                            }
                        case 80:
                            var1 = var4.clearEmbeddedActivityState;
                            var0 = var0 != var6;
                            if (!var0) {
                                _fun64003_ip = 98;
                                continue _fun64003
                            }
                        case 95:
                            var0 = var5;
                        case 98:
                            var0 = var1.bind(var4)(var3, var2, var0);
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'hidePIPEmbed';
                var4.key = var6;
                var6 = function arg0() {
                    _fun64004: for (var _fun64004_ip = 0;;) switch (_fun64004_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            if (!(var1 != var0)) {
                                _fun64004_ip = 13;
                                continue _fun64004
                            }
                        case 9:
                            var0 = undefined;
                            return var0;
                        case 13:
                            var2 = "Cannot destructure 'undefined' or 'null'.";
                            var3 = var1;
                            var0 = throwTypeError(var3, var2);
                            var0 = undefined;
                            throw var0;
                    }
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'clearEmbeddedActivityState';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    var4 = arg1;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 26;
                    var2 = var3[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var2);
                    var5 = var6.stopEmbeddedActivity;
                    var2 = {};
                    var7 = arg0;
                    var2.location = var7;
                    var2.applicationId = var4;
                    var7 = arg2;
                    var2.showFeedback = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot1;
                    var1 = 24;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {
                        'type': 'EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE',
                        'applicationId': null,
                        'lockState': null,
                        'pictureInPictureLockState': null
                    };
                    var1.applicationId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[8] = var4;
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
                var0[9] = var4;
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
                var0[10] = var4;
                var4 = {};
                var6 = 'getOrCreateFrameId';
                var4.key = var6;
                var5 = function() {
                    _fun64008: for (var _fun64008_ip = 0;;) switch (_fun64008_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.frameId;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun64008_ip = 58;
                                continue _fun64008
                            }
                        case 15:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 31;
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
                var0[11] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var3 = var3.bind(var0)(var4);
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var14 = var4;
            var3 = new var14[var3](var13);
            var3 = var3 instanceof Object ? var3 : var4;
            var4 = 33;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/activities/native/EmbeddedActivitiesNativeManager.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var2.EMBEDDED_ACTIVITY_WEB_VIEW_KEY = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 5, 27, 1372, 3518, 1371, 3457, 660, 5943, 478, 7924, 7925, 1207, 7926, 3936, 1234, 7947, 3081, 795, 806, 7949, 7915, 3148, 7950, 1229, 1304, 491, 7951, 2]);