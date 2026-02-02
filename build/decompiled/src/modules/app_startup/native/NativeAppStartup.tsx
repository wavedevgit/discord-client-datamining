// modules/app_startup/native/NativeAppStartup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function arg0, arg1() {
        _fun111931: for (var _fun111931_ip = 0;;) switch (_fun111931_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun111931_ip = 46;
                    continue _fun111931
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun111931_ip = 55;
                    continue _fun111931
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun111931_ip = 345;
                    continue _fun111931
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun111931_ip = 323;
                    continue _fun111931
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun111931_ip = 283;
                    continue _fun111931
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun111931_ip = 270;
                    continue _fun111931
                }
            case 110:
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
                    _fun111931_ip = 163;
                    continue _fun111931
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun111931_ip = 179;
                    continue _fun111931
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun111931_ip = 249;
                    continue _fun111931
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun111931_ip = 249;
                    continue _fun111931
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun111931_ip = 234;
                    continue _fun111931
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun111931_ip = 247;
                    continue _fun111931
                }
            case 234:
                var8 = _closure1_slot27;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun111931_ip = 265;
                continue _fun111931;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun111931_ip = 283;
                continue _fun111931;
            case 270:
                var6 = _closure1_slot27;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun111931_ip = 323;
                    continue _fun111931
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun111931_ip = 330;
                    continue _fun111931
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun111932: for (var _fun111932_ip = 0;;) switch (_fun111932_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun111932_ip = 56;
                                continue _fun111932
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
                            _fun111932_ip = 67;
                            continue _fun111932;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1() {
        _fun111933: for (var _fun111933_ip = 0;;) switch (_fun111933_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun111933_ip = 23;
                    continue _fun111933
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun111933_ip = 33;
                    continue _fun111933
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
                    _fun111933_ip = 70;
                    continue _fun111933
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun111933_ip = 55;
                    continue _fun111933
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun111934: for (var _fun111934_ip = 0;;) switch (_fun111934_ip) {
            case 0:
                var4 = arg0;
            case 3: // try_start_0
                var0 = global;
                var2 = var0.URL;
                var6 = var4;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                var2 = var0.searchParams;
                var1 = var2.get;
                var0 = 'fromAppsFlyer';
                var1 = var1.bind(var2)(var0);
            case 56: // try_end0
                var0 = 'true';
                var0 = var0 === var1;
                return var0;
            case 66: // catch_target0
                CatchBlockStart(arg_register = 0);
                var3 = _closure1_slot19;
                var2 = var3.error;
                var1 = {};
                var1.url = var4;
                var1.error = var0;
                var0 = 'Failed to parse URL in linkFromAppsFlyer';
                var0 = var2.bind(var3)(var0, var1);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot30;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun111938: for (var _fun111938_ip = 0;;) switch (_fun111938_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun111938_ip = 320;
                            continue _fun111938
                        }
                    case 10:
                        var2 = new Array(0);
                        var1 = _closure1_slot9;
                        var4 = var1.DeepLinkManager;
                        var1 = var4.getInitialURL;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 43);
                    case 41:
                        return var1;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun111938_ip = 317;
                            continue _fun111938
                        }
                    case 52:
                        var5 = null;
                        if (!(var5 != var1)) {
                            _fun111938_ip = 67;
                            continue _fun111938
                        }
                    case 58:
                        var4 = var1.url;
                        if (!(var5 == var4)) {
                            _fun111938_ip = 160;
                            continue _fun111938
                        }
                    case 67:
                        var6 = _closure1_slot7;
                        var4 = var6.getInitialURL;
                        var4 = var4.bind(var6)();
                        SaveGenerator(address = 85);
                    case 83:
                        return var4;
                    case 85:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun111938_ip = 157;
                            continue _fun111938
                        }
                    case 91:
                        if (!(var5 != var4)) {
                            _fun111938_ip = 314;
                            continue _fun111938
                        }
                    case 98:
                        var6 = var2.push;
                        var5 = {};
                        var5.url = var4;
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var7 = 14;
                        var8 = var8[var7];
                        var7 = undefined;
                        var7 = var9.bind(var7)(var8);
                        var7 = var7.DeeplinkSource;
                        var7 = var7.ReactNativeLinking;
                        var5.source = var7;
                        var5 = var6.bind(var2)(var5);
                        _fun111938_ip = 314;
                        continue _fun111938;
                    case 157:
                        return var4;
                    case 160:
                        var5 = _closure1_slot28;
                        var4 = var1.url;
                        var6 = undefined;
                        var4 = var5.bind(var6)(var4);
                        if (var4) {
                            _fun111938_ip = 238;
                            continue _fun111938
                        }
                    case 179:
                        var5 = var2.push;
                        var4 = {};
                        var7 = var1.url;
                        var4.url = var7;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var7 = 14;
                        var7 = var9[var7];
                        var7 = var8.bind(var6)(var7);
                        var7 = var7.DeeplinkSource;
                        var7 = var7.OS;
                        var4.source = var7;
                        var4 = var5.bind(var2)(var4);
                        _fun111938_ip = 314;
                        continue _fun111938;
                    case 238:
                        var4 = var1.isDeferred;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var3 = 14;
                        var3 = var7[var3];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.DeeplinkSource;
                        if (var4) {
                            _fun111938_ip = 283;
                            continue _fun111938
                        }
                    case 275:
                        var5 = var3.AppsFlyer;
                        _fun111938_ip = 289;
                        continue _fun111938;
                    case 283:
                        var5 = var3.AppsFlyerDeferred;
                    case 289:
                        var4 = var2.push;
                        var3 = {};
                        var6 = var1.url;
                        var3.url = var6;
                        var3.source = var5;
                        var3 = var4.bind(var2)(var3);
                    case 314:
                        return var2;
                    case 317:
                        return var1;
                    case 320:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot30 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = 'handleURL';
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var3.bind(var0)(var2, var1);
        var3 = var1.default;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        _fun111941: for (var _fun111941_ip = 0;;) switch (_fun111941_ip) {
            case 0:
                var0 = function arg0() {
                    _fun111942: for (var _fun111942_ip = 0;;) switch (_fun111942_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun111942_ip = 29;
                                continue _fun111942
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var4);
                            _fun111942_ip = 111;
                            continue _fun111942;
                        case 29:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 15;
                            var0 = var3[var0];
                            var1 = undefined;
                            var6 = var2.bind(var1)(var0);
                            var5 = 'receiveNotification';
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 28;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var6.bind(var1)(var5, var0);
                            var0 = var0.default;
                            var0 = var0.bind(var1)(var4);
                            var0 = 12;
                            var0 = var3[var0];
                            var0 = var2.bind(var1)(var0);
                            var1 = var0.extraProperties;
                            var0 = true;
                            var1.tapped_notification = var0;
                        case 111:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot3 = var0;
                var4 = function arg0() {
                    _fun111944: for (var _fun111944_ip = 0;;) switch (_fun111944_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun111944_ip = 29;
                                continue _fun111944
                            }
                        case 13:
                            var1 = _closure2_slot2;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                            _fun111944_ip = 86;
                            continue _fun111944;
                        case 29:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 15;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = 'LocalPushNotificationActionCreators';
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 29;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var4.bind(var1)(var3, var0);
                            var0 = var0.receiveLocalNotification;
                            var0 = var0.bind(var1)(var2);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot4 = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 17;
                var2 = var6[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var9 = var2.Emitter;
                var8 = var9.injectBatchEmitChanges;
                var7 = _closure1_slot0;
                var2 = 18;
                var2 = var6[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.batchUpdates;
                var2 = var8.bind(var9)(var2);
                var2 = 19;
                var2 = var6[var2];
                var2 = var7.bind(var3)(var2);
                var8 = var2.TelemetryRingLifecycle;
                var2 = var8.initialize;
                var2 = var2.bind(var8)();
                var2 = 20;
                var2 = var6[var2];
                var8 = var7.bind(var3)(var2);
                var7 = var8.installWebsocketTelemetryHook;
                var2 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 21;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.append;
                    var1 = _closure1_slot14;
                    var2 = var1.WEBSOCKET_MESSAGE_RECEIVED;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var2 = var7.bind(var8)(var2);
                var9 = _closure1_slot7;
                var8 = var9.addEventListener;
                var7 = 'url';
                var2 = function(arg0) { // Environment: var1
                    _fun111947: for (var _fun111947_ip = 0;;) switch (_fun111947_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.url;
                            var _closure3_slot0 = var3;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 22;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.isAndroid;
                            var4 = var4.bind(var5)();
                            if (!var4) {
                                _fun111947_ip = 60;
                                continue _fun111947
                            }
                        case 52:
                            var5 = _closure1_slot20;
                            var4 = var5 === var3;
                        case 60:
                            if (var4) {
                                _fun111947_ip = 88;
                                continue _fun111947
                            }
                        case 63:
                            _closure1_slot20 = var3;
                            var3 = _closure1_slot25;
                            var2 = var3.then;
                            var1 = function() { // Environment: var1
                                _fun111948: for (var _fun111948_ip = 0;;) switch (_fun111948_ip) {
                                    case 0:
                                        var3 = _closure1_slot19;
                                        var2 = var3.log;
                                        var5 = _closure3_slot0;
                                        var1 = global;
                                        var0 = var1.HermesInternal;
                                        var6 = var0.concat;
                                        var0 = 'Handling URL: ';
                                        var0 = var6.bind(var0)(var5);
                                        var0 = var2.bind(var3)(var0);
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot3;
                                        var0 = 23;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var6 = var3.bind(var0)(var2);
                                        var3 = var6.mark;
                                        var1 = var1.HermesInternal;
                                        var2 = var1.concat;
                                        var1 = 'Handle URL ';
                                        var2 = var2.bind(var1)(var5);
                                        var1 = '❗';
                                        var1 = var3.bind(var6)(var1, var2);
                                        var3 = _closure1_slot31;
                                        var2 = {};
                                        var2.url = var5;
                                        var1 = _closure1_slot28;
                                        var1 = var1.bind(var0)(var5);
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot3;
                                        var4 = 14;
                                        var4 = var6[var4];
                                        var4 = var5.bind(var0)(var4);
                                        var4 = var4.DeeplinkSource;
                                        if (var1) {
                                            _fun111948_ip = 164;
                                            continue _fun111948
                                        }
                                    case 156:
                                        var1 = var4.OS;
                                        _fun111948_ip = 170;
                                        continue _fun111948;
                                    case 164:
                                        var1 = var4.AppsFlyer;
                                    case 170:
                                        var2.source = var1;
                                        var1 = false;
                                        var1 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                        case 88:
                            return var0;
                    }
                };
                var2 = var8.bind(var9)(var7, var2);
                var8 = _closure1_slot8;
                var7 = var8.ignoreLogs;
                var2 = ['Non-serializable values were found in the navigation state', 'Overriding previous layout animation with new one before the first began', 'Check the render method of `SceneView`', 'Open debugger to view warnings.'];
                var2 = var7.bind(var8)(var2);
                var2 = 24;
                var7 = var6[var2];
                var8 = var5.bind(var3)(var7);
                var7 = var8.getInitialBundleDownloaded;
                var9 = var7.bind(var8)();
                var8 = var9.then;
                var7 = function(arg0) { // Environment: var1
                    _fun111949: for (var _fun111949_ip = 0;;) switch (_fun111949_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = null;
                            var1 = var3 != var0;
                            if (!var1) {
                                _fun111949_ip = 22;
                                continue _fun111949
                            }
                        case 12:
                            var2 = var0.versionRequired;
                            var1 = var3 != var2;
                        case 22:
                            if (!var1) {
                                _fun111949_ip = 112;
                                continue _fun111949
                            }
                        case 25:
                            var4 = _closure1_slot19;
                            var3 = var4.verbose;
                            var6 = var0.versionRequired;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var5 = var2.concat;
                            var2 = 'Get initial downloaded bundle ';
                            var2 = var5.bind(var2)(var6);
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 25;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.prepareUpdate;
                            var0 = var0.versionRequired;
                            var0 = var1.bind(var2)(var0);
                        case 112:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var8.bind(var9)(var7);
                var7 = var6[var2];
                var10 = var5.bind(var3)(var7);
                var9 = var10.addEventListener;
                var8 = 'downloaded';
                var7 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var3 = var0.versionRequired;
                    var4 = _closure1_slot19;
                    var2 = var4.verbose;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = 'Bundle Event: bundle downloaded for ';
                    var1 = var5.bind(var1)(var3);
                    var1 = var2.bind(var4)(var1);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 25;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.prepareUpdate;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var7 = var9.bind(var10)(var8, var7);
                var7 = var6[var2];
                var8 = var5.bind(var3)(var7);
                var7 = var8.getInitialOtaUpdateChecked;
                var9 = var7.bind(var8)();
                var8 = var9.then;
                var7 = function(arg0) { // Environment: var1
                    _fun111951: for (var _fun111951_ip = 0;;) switch (_fun111951_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.metrics;
                            var3 = _closure1_slot19;
                            var1 = var3.verbose;
                            var0 = 'Initial OTA update check metrics';
                            var0 = var1.bind(var3)(var0, var2);
                            var1 = _closure1_slot26;
                            var0 = undefined;
                            var4 = var1.bind(var0)(var2);
                            var2 = var4.bind(var0)();
                            var1 = var2.done;
                            var3 = 24;
                            if (var1) {
                                _fun111951_ip = 108;
                                continue _fun111951
                            }
                        case 60:
                            var7 = var2.value;
                            var6 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var1 = var1[var3];
                            var6 = var6.bind(var0)(var1);
                            var1 = var6.emitOtaMetric;
                            var1 = var1.bind(var6)(var7);
                            var6 = var4.bind(var0)();
                            var1 = var6.done;
                            var2 = var6;
                            if (!var1) {
                                _fun111951_ip = 60;
                                continue _fun111951
                            }
                        case 108:
                            return var0;
                    }
                };
                var7 = var8.bind(var9)(var7);
                var2 = var6[var2];
                var7 = var5.bind(var3)(var2);
                var6 = var7.addEventListener;
                var5 = 'otaUpdateChecked';
                var2 = function(arg0) { // Environment: var1
                    _fun111952: for (var _fun111952_ip = 0;;) switch (_fun111952_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.metrics;
                            var3 = _closure1_slot19;
                            var1 = var3.verbose;
                            var0 = 'OTA update check metrics';
                            var0 = var1.bind(var3)(var0, var2);
                            var1 = _closure1_slot26;
                            var0 = undefined;
                            var4 = var1.bind(var0)(var2);
                            var2 = var4.bind(var0)();
                            var1 = var2.done;
                            var3 = 24;
                            if (var1) {
                                _fun111952_ip = 108;
                                continue _fun111952
                            }
                        case 60:
                            var7 = var2.value;
                            var6 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var1 = var1[var3];
                            var6 = var6.bind(var0)(var1);
                            var1 = var6.emitOtaMetric;
                            var1 = var1.bind(var6)(var7);
                            var6 = var4.bind(var0)();
                            var1 = var6.done;
                            var2 = var6;
                            if (!var1) {
                                _fun111952_ip = 60;
                                continue _fun111952
                            }
                        case 108:
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var5, var2);
                var5 = _closure1_slot12;
                var2 = var5.getState;
                var5 = var2.bind(var5)();
                var2 = _closure1_slot6;
                var2 = var2.currentState;
                if (!(var5 !== var2)) {
                    _fun111941_ip = 426;
                    continue _fun111941
                }
            case 369:
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 15;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = 'handleAppStateChange';
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = var6.bind(var3)(var5, var2);
                var5 = var2.default;
                var2 = _closure1_slot6;
                var2 = var2.currentState;
                var2 = var5.bind(var3)(var2);
            case 426:
                var7 = _closure1_slot6;
                var6 = var7.addEventListener;
                var5 = 'change';
                var2 = function(arg0) { // Environment: var1
                    var5 = arg0;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 12;
                    var4 = var3[var1];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var4);
                    var4 = var4.imports;
                    var6 = var4.appStateChangeStart;
                    var4 = var6.record;
                    var4 = var4.bind(var6)();
                    var4 = 23;
                    var4 = var3[var4];
                    var6 = var2.bind(var0)(var4);
                    var4 = var6.resumeTracing;
                    var4 = var4.bind(var6)();
                    var4 = 27;
                    var4 = var3[var4];
                    var7 = var2.bind(var0)(var4);
                    var6 = var7.addBreadcrumb;
                    var4 = {};
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = 'App state changed to ';
                    var8 = var9.bind(var8)(var5);
                    var4.message = var8;
                    var8 = 'appState';
                    var4.category = var8;
                    var4 = var6.bind(var7)(var4);
                    var4 = 15;
                    var4 = var3[var4];
                    var7 = var2.bind(var0)(var4);
                    var6 = 'handleAppStateChange';
                    var4 = function() { // Environment: var4
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 26;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4 = var7.bind(var0)(var6, var4);
                    var4 = var4.default;
                    var4 = var4.bind(var0)(var5);
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.imports;
                    var2 = var1.appStateChangeEnd;
                    var1 = var2.record;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var2 = var6.bind(var7)(var5, var2);
                var2 = _closure1_slot9;
                var5 = var2.Hosts;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun111941_ip = 603;
                    continue _fun111941
                }
            case 472:
                var2 = _closure1_slot9;
                var7 = var2.Hosts;
                var6 = var7.setHosts;
                var2 = global;
                var5 = var2.location;
                var9 = var5.protocol;
                var5 = var2.window;
                var5 = var5.GLOBAL_ENV;
                var8 = var5.API_ENDPOINT;
                var5 = var2.HermesInternal;
                var5 = var5.concat;
                var11 = '';
                var5 = var5.bind(var11)(var9, var8);
                var8 = var2.location;
                var10 = var8.protocol;
                var8 = var2.window;
                var8 = var8.GLOBAL_ENV;
                var9 = var8.CDN_HOST;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var2 = '//';
                var2 = var8.bind(var11)(var10, var2, var9);
                var2 = var6.bind(var7)(var5, var2);
            case 603:
                var2 = false;
                var _closure2_slot0 = var2;
                var2 = new Array(0);
                var _closure2_slot1 = var2;
                var2 = new Array(0);
                var _closure2_slot2 = var2;
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 30;
                var6 = var5[var0];
                var9 = var2.bind(var3)(var6);
                var8 = var9.addNotificationEventListener;
                var7 = 'notification';
                var6 = function(arg0) { // Environment: var1
                    _fun111956: for (var _fun111956_ip = 0;;) switch (_fun111956_ip) {
                        case 0:
                            var2 = _closure1_slot12;
                            var1 = var2.getState;
                            var1 = var1.bind(var2)();
                            var4 = _closure1_slot19;
                            var3 = var4.log;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var5 = var2.concat;
                            var2 = 'Push notification received, the app state is ';
                            var2 = var5.bind(var2)(var1);
                            var2 = var3.bind(var4)(var2);
                            var0 = _closure1_slot13;
                            var0 = var0.ACTIVE;
                            if (!(var1 !== var0)) {
                                _fun111956_ip = 86;
                                continue _fun111956
                            }
                        case 69:
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var8.bind(var9)(var7, var6);
                var0 = var5[var0];
                var3 = var2.bind(var3)(var0);
                var2 = var3.addNotificationEventListener;
                var0 = 'localNotification';
                var0 = var2.bind(var3)(var0, var4);
                var0 = {};
                var1 = function() {
                    var1 = true;
                    _closure2_slot0 = var1;
                    var3 = _closure2_slot1;
                    var2 = var3.forEach;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot2;
                    var2 = var3.forEach;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot1;
                    var1 = 0;
                    var2.length = var1;
                    var0 = _closure2_slot2;
                    var0.length = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.onStorageInitialize = var1;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun111960: for (var _fun111960_ip = 0;;) switch (_fun111960_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun111960_ip = 264;
                            continue _fun111960
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var6 = 31;
                        var1 = var1[var6];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var7 = var1.Storage;
                        var5 = var7.get;
                        var1 = _closure1_slot14;
                        var4 = var1.APP_FIRST_LAUNCHED;
                        var1 = true;
                        var1 = var5.bind(var7)(var4, var1);
                        if (!var1) {
                            _fun111960_ip = 258;
                            continue _fun111960
                        }
                    case 70:
                        var4 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var1 = 32;
                        var1 = var10[var1];
                        var8 = var4.bind(var2)(var1);
                        var7 = var8.track;
                        var1 = _closure1_slot14;
                        var5 = var1.APP_FIRST_LAUNCHED;
                        var4 = {};
                        var9 = _closure1_slot0;
                        var1 = 22;
                        var1 = var10[var1];
                        var9 = var9.bind(var2)(var1);
                        var1 = var9.isAndroid;
                        var1 = var1.bind(var9)();
                        var9 = _closure1_slot18;
                        if (var1) {
                            _fun111960_ip = 148;
                            continue _fun111960
                        }
                    case 140:
                        var1 = var9.IOS;
                        _fun111960_ip = 154;
                        continue _fun111960;
                    case 148:
                        var1 = var9.ANDROID;
                    case 154:
                        var4.platform = var1;
                        var1 = _closure1_slot9;
                        var10 = var1.InstallReferrer;
                        var1 = null;
                        var9 = var1 == var10;
                        var1 = undefined;
                        if (var9) {
                            _fun111960_ip = 191;
                            continue _fun111960
                        }
                    case 182:
                        var9 = var10.get;
                        var1 = var9.bind(var10)();
                    case 191:
                        SaveGenerator(address = 195);
                    case 193:
                        return var1;
                    case 195:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 9);
                        if (var9) {
                            _fun111960_ip = 261;
                            continue _fun111960
                        }
                    case 201:
                        var4.referrer = var1;
                        var4 = var7.bind(var8)(var5, var4);
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var6];
                        var4 = var5.bind(var2)(var4);
                        var6 = var4.Storage;
                        var5 = var6.set;
                        var3 = _closure1_slot14;
                        var4 = var3.APP_FIRST_LAUNCHED;
                        var3 = false;
                        var3 = var5.bind(var6)(var4, var3);
                    case 258:
                        return var2;
                    case 261:
                        return var1;
                    case 264:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot33 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot35;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun111964: for (var _fun111964_ip = 0;;) switch (_fun111964_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun111964_ip = 213;
                            continue _fun111964
                        }
                    case 12:
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                    case 18: // try_start_0
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var6 = 12;
                        var2 = var7[var6];
                        var2 = var5.bind(var1)(var2);
                        var5 = var2.loadStorage;
                        var2 = var5.recordStart;
                        var2 = var2.bind(var5)();
                        var5 = _closure1_slot0;
                        var2 = 31;
                        var2 = var7[var2];
                        var2 = var5.bind(var1)(var2);
                        var8 = var2.Storage;
                        var7 = var8.refresh;
                        var5 = _closure1_slot17;
                        var2 = new Array(0);
                        var2 = var7.bind(var8)(var2, var5);
                        SaveGenerator(address = 103);
                    case 101:
                        return var2;
                    case 103:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun111964_ip = 181;
                            continue _fun111964
                        }
                    case 109:
                        _closure4_slot0 = var2;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var7 = var4[var6];
                        var7 = var5.bind(var1)(var7);
                        var8 = var7.loadStorage;
                        var7 = var8.recordEnd;
                        var7 = var7.bind(var8)();
                        var4 = var4[var6];
                        var4 = var5.bind(var1)(var4);
                        var5 = var4.parseStorage;
                        var4 = var5.measureAsync;
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 31;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.Storage;
                            var1 = var2.parse;
                            var0 = _closure4_slot0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var4.bind(var5)(var3);
                    case 179: // try_end0
                        _fun111964_ip = 210;
                        continue _fun111964;
                    case 181:
                        return var2;
                    case 184: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var4 = _closure1_slot19;
                        var3 = var4.error;
                        var2 = 'Unable to load Storage';
                        var2 = var3.bind(var4)(var2, var5);
                    case 210:
                        return var1;
                    case 213:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot35 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        _fun111966: for (var _fun111966_ip = 0;;) switch (_fun111966_ip) {
            case 0: // try_start_0
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 34;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.initialize;
                var0 = var0.bind(var1)();
            case 35: // try_end0
                _fun111966_ip = 96;
                continue _fun111966;
            case 37: // catch_target0
                CatchBlockStart(arg_register = 2);
                var4 = _closure1_slot19;
                var3 = var4.warn;
                var1 = 'DatabaseManager.initialize errored.';
                var1 = var3.bind(var4)(var1, var2);
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 27;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.captureException;
                var0 = var0.bind(var1)(var2);
            case 96:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot38;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun111970: for (var _fun111970_ip = 0;;) switch (_fun111970_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun111970_ip = 285;
                            continue _fun111970
                        }
                    case 12:
                        var1 = arg0;
                        var4 = var1.log;
                        var6 = undefined;
                        var _closure4_slot0 = var6;
                        SaveGenerator(address = 30);
                    case 28:
                        return var6;
                    case 30:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun111970_ip = 282;
                            continue _fun111970
                        }
                    case 39:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var2 = 36;
                        var2 = var5[var2];
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.preloadAllIntlMessageFiles;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 76);
                    case 74:
                        return var2;
                    case 76:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun111970_ip = 279;
                            continue _fun111970
                        }
                    case 85:
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var3 = 37;
                        var3 = var9[var3];
                        var5 = var5.bind(var6)(var3);
                        var3 = var5.waitForAllDefaultIntlMessagesLoaded;
                        var3 = var3.bind(var5)();
                        SaveGenerator(address = 119);
                    case 117:
                        return var3;
                    case 119:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun111970_ip = 276;
                            continue _fun111970
                        }
                    case 128:
                        if (!var4) {
                            _fun111970_ip = 180;
                            continue _fun111970
                        }
                    case 131:
                        var5 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var4 = 23;
                        var4 = var9[var4];
                        var11 = var5.bind(var6)(var4);
                        var10 = var11.markAndLog;
                        var9 = _closure1_slot19;
                        var5 = '🌎';
                        var4 = 'i18n loaded';
                        var4 = var10.bind(var11)(var9, var5, var4);
                    case 180:
                        var9 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var5 = 39;
                        var5 = var4[var5];
                        var9 = var9.bind(var6)(var5);
                        var5 = 38;
                        var5 = var4[var5];
                        var4 = var4.paths;
                        var4 = var9.bind(var6)(var5, var4);
                        SaveGenerator(address = 222);
                    case 220:
                        return var4;
                    case 222:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun111970_ip = 273;
                            continue _fun111970
                        }
                    case 228:
                        var5 = var4.default;
                        _closure4_slot0 = var5;
                        var5 = var5.bind(var6)();
                        SaveGenerator(address = 245);
                    case 243:
                        return var5;
                    case 245:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 9);
                        if (var9) {
                            _fun111970_ip = 270;
                            continue _fun111970
                        }
                    case 251:
                        var8 = _closure1_slot10;
                        var7 = function() { // Environment: var7
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var7 = var8.bind(var6)(var7);
                        return var6;
                    case 270:
                        return var5;
                    case 273:
                        return var4;
                    case 276:
                        return var3;
                    case 279:
                        return var2;
                    case 282:
                        return var1;
                    case 285:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot38 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot38 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun111974: for (var _fun111974_ip = 0;;) switch (_fun111974_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun111974_ip = 1754;
                            continue _fun111974
                        }
                    case 12:
                        var3 = undefined;
                        var _closure4_slot0 = var3;
                        var2 = _closure1_slot24;
                        var1 = _closure1_slot23;
                        var1 = var1.Full;
                        if (!(var2 === var1)) {
                            _fun111974_ip = 87;
                            continue _fun111974
                        }
                    case 39:
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 27;
                        var1 = var5[var1];
                        var5 = var2.bind(var3)(var1);
                        var2 = var5.addBreadcrumb;
                        var1 = {};
                        var6 = 'Init called when already initialized';
                        var1.message = var6;
                        var1 = var2.bind(var5)(var1);
                        _fun111974_ip = 1745;
                        continue _fun111974;
                    case 87:
                        var2 = _closure1_slot24;
                        var1 = _closure1_slot23;
                        var1 = var1.HeadlessRan;
                        var5 = var2 === var1;
                        var1 = _closure1_slot23;
                        var1 = var1.Full;
                        _closure1_slot24 = var1;
                        var13 = undefined;
                        if (var5) {
                            _fun111974_ip = 138;
                            continue _fun111974
                        }
                    case 124:
                        var1 = _closure1_slot32;
                        var1 = var1.bind(var3)();
                        var13 = var1.onStorageInitialize;
                    case 138:
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 22;
                        var1 = var6[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.isAndroid;
                        var1 = var1.bind(var2)();
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var2 = 40;
                        var2 = var8[var2];
                        var6 = var6.bind(var3)(var2);
                        if (var1) {
                            _fun111974_ip = 203;
                            continue _fun111974
                        }
                    case 191:
                        var1 = var6.lockOrientationForiOS;
                        var1 = var1.bind(var6)();
                        _fun111974_ip = 223;
                        continue _fun111974;
                    case 203:
                        var2 = var6.unlockOrientation;
                        var1 = {};
                        var8 = false;
                        var1.unlockAfterRotatingToPreviousLock = var8;
                        var1 = var2.bind(var6)(var1);
                    case 223:
                        var12 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var8 = 12;
                        var1 = var10[var8];
                        var2 = var12.bind(var3)(var1);
                        var1 = _closure1_slot6;
                        var6 = var1.currentState;
                        var1 = _closure1_slot13;
                        var1 = var1.BACKGROUND;
                        var1 = var6 === var1;
                        var2.didBackgroundApp = var1;
                        var1 = var10[var8];
                        var1 = var12.bind(var3)(var1);
                        var1 = var1.imports;
                        var2 = var1.loadStorageStart;
                        var1 = var2.record;
                        var1 = var1.bind(var2)();
                        var2 = global;
                        var9 = var2.Promise;
                        var6 = var9.all;
                        var1 = _closure1_slot29;
                        var11 = var1.bind(var3)();
                        var1 = new Array(5);
                        var1[0] = var11;
                        var11 = 30;
                        var11 = var10[var11];
                        var12 = var12.bind(var3)(var11);
                        var11 = var12.getInitialNotification;
                        var14 = var11.bind(var12)();
                        var12 = var14.catch;
                        var11 = function() { // Environment: var7
                            var0 = null;
                            return var0;
                        };
                        var11 = var12.bind(var14)(var11);
                        var1[1] = var11;
                        var11 = _closure1_slot34;
                        var11 = var11.bind(var3)();
                        var1[2] = var11;
                        var11 = _closure1_slot36;
                        var11 = var11.bind(var3)();
                        var1[3] = var11;
                        var12 = _closure1_slot0;
                        var14 = 39;
                        var11 = var10[var14];
                        var12 = var12.bind(var3)(var11);
                        var11 = 41;
                        var11 = var10[var11];
                        var10 = var10.paths;
                        var12 = var12.bind(var3)(var11, var10);
                        var11 = var12.then;
                        var10 = function(arg0) { // Environment: var7
                            var0 = arg0;
                            var1 = var0.default;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            return var0;
                        };
                        var10 = var11.bind(var12)(var10);
                        var1[4] = var10;
                        var1 = var6.bind(var9)(var1);
                        SaveGenerator(address = 466);
                    case 464:
                        return var1;
                    case 466:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun111974_ip = 1751;
                            continue _fun111974
                        }
                    case 475:
                        var9 = _closure1_slot4;
                        var6 = 2;
                        var11 = var9.bind(var3)(var1, var6);
                        var10 = 0;
                        var18 = var11[var10];
                        var9 = 1;
                        var16 = var11[var9];
                        var12 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var11 = var11[var8];
                        var11 = var12.bind(var3)(var11);
                        var11 = var11.imports;
                        var12 = var11.loadStorageEnd;
                        var11 = var12.record;
                        var11 = var11.bind(var12)();
                        if (var5) {
                            _fun111974_ip = 562;
                            continue _fun111974
                        }
                    case 543:
                        var12 = _closure1_slot37;
                        var11 = {};
                        var15 = true;
                        var11.log = var15;
                        var12 = var12.bind(var3)(var11);
                        _fun111974_ip = 578;
                        continue _fun111974;
                    case 562:
                        var15 = var2.Promise;
                        var11 = var15.resolve;
                        var12 = var11.bind(var15)();
                    case 578:
                        var15 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var19 = 23;
                        var11 = var11[var19];
                        var20 = var15.bind(var3)(var11);
                        var17 = var20.markAndLog;
                        var15 = _closure1_slot19;
                        var21 = '🏃';
                        var11 = 'The initial promise has resolved';
                        var11 = var17.bind(var20)(var15, var21, var11);
                        var11 = null;
                        var15 = var11 != var18;
                        if (!var15) {
                            _fun111974_ip = 643;
                            continue _fun111974
                        }
                    case 634:
                        var17 = var18.length;
                        var15 = var17 > var10;
                    case 643:
                        if (!var15) {
                            _fun111974_ip = 667;
                            continue _fun111974
                        }
                    case 646:
                        var20 = _closure1_slot19;
                        var17 = var20.log;
                        var15 = 'initialURLs';
                        var15 = var17.bind(var20)(var15, var18);
                    case 667:
                        if (!(var11 != var16)) {
                            _fun111974_ip = 692;
                            continue _fun111974
                        }
                    case 671:
                        var20 = _closure1_slot19;
                        var17 = var20.log;
                        var15 = 'initialNotification';
                        var15 = var17.bind(var20)(var15, var16);
                    case 692:
                        var17 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var20 = 31;
                        var15 = var15[var20];
                        var15 = var17.bind(var3)(var15);
                        var22 = var15.Storage;
                        var17 = var22.get;
                        var15 = _closure1_slot15;
                        var15 = var17.bind(var22)(var15);
                        if (!(var11 == var15)) {
                            _fun111974_ip = 789;
                            continue _fun111974
                        }
                    case 736:
                        var17 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var15 = var15[var20];
                        var15 = var17.bind(var3)(var15);
                        var22 = var15.Storage;
                        var20 = var22.set;
                        var17 = _closure1_slot15;
                        var23 = var2.Date;
                        var15 = var23.now;
                        var15 = var15.bind(var23)();
                        var15 = var20.bind(var22)(var17, var15);
                    case 789:
                        var15 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot33;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var15 = var15.bind(var3)();
                        if (var5) {
                            _fun111974_ip = 819;
                            continue _fun111974
                        }
                    case 803:
                        var15 = _closure1_slot41;
                        var15 = var15.bind(var3)();
                        if (!(var11 != var13)) {
                            _fun111974_ip = 819;
                            continue _fun111974
                        }
                    case 815:
                        var13 = var13.bind(var3)();
                    case 819:
                        var17 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var15 = 15;
                        var13 = var13[var15];
                        var20 = var17.bind(var3)(var13);
                        var17 = 'DispatcherBridge';
                        var13 = function() { // Environment: var7
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 42;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var13 = var20.bind(var3)(var17, var13);
                        var17 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var13 = var13[var19];
                        var20 = var17.bind(var3)(var13);
                        if (var5) {
                            _fun111974_ip = 906;
                            continue _fun111974
                        }
                    case 878:
                        var19 = var20.time;
                        var17 = 'Flux.initialize()';
                        var13 = function() { // Environment: var7
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 17;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.initialize;
                            var2 = var2.bind(var3)();
                            var3 = _closure1_slot19;
                            var2 = var3.verbose;
                            var1 = 'Flux has initialized';
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var13 = var19.bind(var20)(var21, var17, var13);
                        _fun111974_ip = 929;
                        continue _fun111974;
                    case 906:
                        var19 = var20.markAndLog;
                        var17 = _closure1_slot19;
                        var13 = 'Flux already initialized.';
                        var13 = var19.bind(var20)(var17, var21, var13);
                    case 929:
                        var17 = _closure1_slot1;
                        var19 = _closure1_slot3;
                        var13 = 43;
                        var13 = var19[var13];
                        var13 = var17.bind(var3)(var13);
                        var13 = var13.bind(var3)();
                        var17 = _closure1_slot0;
                        var13 = 44;
                        var13 = var19[var13];
                        var17 = var17.bind(var3)(var13);
                        var13 = var17.setupLibdiscoreTimersMonitor;
                        var13 = var13.bind(var17)();
                        var17 = var18.forEach;
                        var13 = function(arg0) { // Environment: var7
                            var3 = arg0;
                            var1 = var3.url;
                            _closure1_slot20 = var1;
                            var2 = _closure1_slot31;
                            var0 = undefined;
                            var1 = true;
                            var1 = var2.bind(var0)(var3, var1);
                            return var0;
                        };
                        var13 = var17.bind(var18)(var13);
                        var17 = var11 != var16;
                        var13 = false;
                        if (!var17) {
                            _fun111974_ip = 1074;
                            continue _fun111974
                        }
                    case 1005:
                        var18 = _closure1_slot1;
                        var17 = _closure1_slot3;
                        var15 = var17[var15];
                        var20 = var18.bind(var3)(var15);
                        var19 = 'receiveNotification';
                        var15 = function() { // Environment: var7
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 28;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var15 = var20.bind(var3)(var19, var15);
                        var15 = var15.default;
                        var17 = var17[var8];
                        var17 = var18.bind(var3)(var17);
                        var18 = var17.extraProperties;
                        var17 = true;
                        var18.tapped_notification = var17;
                        var13 = var15.bind(var3)(var16);
                    case 1074:
                        if (var13) {
                            _fun111974_ip = 1173;
                            continue _fun111974
                        }
                    case 1077:
                        var15 = _closure1_slot11;
                        var13 = var15.getChannelId;
                        var17 = var13.bind(var15)();
                        if (!(var11 != var17)) {
                            _fun111974_ip = 1173;
                            continue _fun111974
                        }
                    case 1095:
                        var15 = _closure1_slot1;
                        var19 = _closure1_slot3;
                        var13 = 45;
                        var13 = var19[var13];
                        var16 = var15.bind(var3)(var13);
                        var15 = var16.fetchMessages;
                        var13 = {
                            'channelId': null,
                            'isPreload': true,
                            'skipLocalFetch': true
                        };
                        var13.channelId = var17;
                        var18 = _closure1_slot0;
                        var17 = 46;
                        var17 = var19[var17];
                        var17 = var18.bind(var3)(var17);
                        var17 = var17.INITIAL_MESSAGE_FETCH_KEY;
                        var13.fetchKey = var17;
                        var13 = var15.bind(var16)(var13);
                    case 1173:
                        var13 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var8 = var15[var8];
                        var8 = var13.bind(var3)(var8);
                        var8 = var8.imports;
                        var13 = var8.loadMiniCacheStart;
                        var8 = var13.record;
                        var8 = var8.bind(var13)();
                        var16 = var2.Promise;
                        var8 = var16.prototype;
                        var13 = Object.create(var8, {
                            constructor: {
                                value: var16
                            }
                        });
                        var26 = function(arg0) { // Environment: var7
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 39;
                            var3 = var2[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = 47;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var4.bind(var0)(var3, var2);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var3 = var0.default;
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var1 = 48;
                                var1 = var4[var1];
                                var4 = undefined;
                                var2 = var2.bind(var4)(var1);
                                var1 = var2.computeInitialNavigationState;
                                var2 = var1.bind(var2)();
                                var1 = _closure1_slot4;
                                var0 = 1;
                                var1 = var1.bind(var4)(var2, var0);
                                var0 = 0;
                                var2 = var1[var0];
                                var1 = var3.loadCacheAsync;
                                var0 = function() { // Environment: var0
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot3;
                                    var0 = 49;
                                    var1 = var4[var0];
                                    var0 = undefined;
                                    var1 = var3.bind(var0)(var1);
                                    var1 = var1.default;
                                    var2 = 50;
                                    var2 = var4[var2];
                                    var2 = var3.bind(var0)(var2);
                                    var2 = var2.default;
                                    var5 = 51;
                                    var5 = var4[var5];
                                    var6 = var3.bind(var0)(var5);
                                    var5 = var6.updateSaturation;
                                    var2 = var2.saturation;
                                    var2 = var5.bind(var6)(var2);
                                    var2 = 52;
                                    var2 = var4[var2];
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.updateTheme;
                                    var1 = var1.theme;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = _closure5_slot0;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var0 = var1.bind(var3)(var2, var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var27 = var13;
                        var8 = new var27[var16](var26, var25);
                        var16 = var8 instanceof Object ? var8 : var13;
                        var13 = _closure1_slot2;
                        var8 = 53;
                        var8 = var15[var8];
                        var13 = var13.bind(var3)(var8);
                        var8 = var13.getToken;
                        var8 = var8.bind(var13)();
                        if (!(var11 == var8)) {
                            _fun111974_ip = 1317;
                            continue _fun111974
                        }
                    case 1275:
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var8 = 54;
                        var8 = var13[var8];
                        var11 = var11.bind(var3)(var8);
                        var8 = var11.beginLoadedExperimentsTimeout;
                        var8 = var8.bind(var11)();
                        var8 = var11.getPromise;
                        var15 = var8.bind(var11)();
                        _fun111974_ip = 1333;
                        continue _fun111974;
                    case 1317:
                        var11 = var2.Promise;
                        var8 = var11.resolve;
                        var15 = var8.bind(var11)();
                    case 1333:
                        var13 = var2.Promise;
                        var11 = var13.all;
                        var8 = new Array(2);
                        var8[0] = var16;
                        var8[1] = var15;
                        var13 = var11.bind(var13)(var8);
                        var11 = var13.then;
                        var8 = function() { // Environment: var7
                            var1 = _closure1_slot22;
                            var0 = var1.resolve;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                        };
                        var8 = var11.bind(var13)(var8);
                        var11 = var2.Promise;
                        var8 = var11.all;
                        var15 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var2 = var13[var14];
                        var17 = var15.bind(var3)(var2);
                        var2 = 55;
                        var16 = var13[var2];
                        var2 = var13.paths;
                        var16 = var17.bind(var3)(var16, var2);
                        var2 = new Array(6);
                        var2[0] = var16;
                        var16 = var13[var14];
                        var18 = var15.bind(var3)(var16);
                        var16 = 56;
                        var17 = var13[var16];
                        var16 = var13.paths;
                        var16 = var18.bind(var3)(var17, var16);
                        var2[1] = var16;
                        var16 = var13[var14];
                        var18 = var15.bind(var3)(var16);
                        var16 = 57;
                        var17 = var13[var16];
                        var16 = var13.paths;
                        var16 = var18.bind(var3)(var17, var16);
                        var2[2] = var16;
                        var16 = var13[var14];
                        var18 = var15.bind(var3)(var16);
                        var16 = 58;
                        var17 = var13[var16];
                        var16 = var13.paths;
                        var16 = var18.bind(var3)(var17, var16);
                        var2[3] = var16;
                        var14 = var13[var14];
                        var15 = var15.bind(var3)(var14);
                        var14 = 59;
                        var14 = var13[var14];
                        var13 = var13.paths;
                        var13 = var15.bind(var3)(var14, var13);
                        var2[4] = var13;
                        var2[5] = var12;
                        var2 = var8.bind(var11)(var2);
                        SaveGenerator(address = 1571);
                    case 1569:
                        return var2;
                    case 1571:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun111974_ip = 1748;
                            continue _fun111974
                        }
                    case 1580:
                        var11 = _closure1_slot4;
                        var8 = 5;
                        var8 = var11.bind(var3)(var2, var8);
                        var10 = var8[var10];
                        var9 = var8[var9];
                        var11 = var9.default;
                        var6 = var8[var6];
                        var10 = var6.default;
                        var6 = 3;
                        var6 = var8[var6];
                        var9 = var6.default;
                        _closure4_slot0 = var9;
                        var6 = 4;
                        var6 = var8[var6];
                        var8 = var11.registerNotificationCategories;
                        var8 = var8.bind(var11)();
                        var8 = var11.registerListener;
                        var8 = var8.bind(var11)();
                        var8 = var10.loadServer;
                        var8 = var8.bind(var10)();
                        var8 = var9.addChangeListener;
                        var7 = function() { // Environment: var7
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 30;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.setApplicationIconBadgeNumber;
                            var4 = _closure4_slot0;
                            var1 = var4.getTotalMentionCount;
                            var1 = var1.bind(var4)();
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var7 = var8.bind(var9)(var7);
                        if (var5) {
                            _fun111974_ip = 1703;
                            continue _fun111974
                        }
                    case 1693:
                        var5 = var6.init;
                        var5 = var5.bind(var6)();
                    case 1703:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var4 = 60;
                        var4 = var6[var4];
                        var4 = var5.bind(var3)(var4);
                        var4 = 61;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.initSessionHeartbeatScheduler;
                        var4 = var4.bind(var5)();
                    case 1745:
                        return var3;
                    case 1748:
                        return var2;
                    case 1751:
                        return var1;
                    case 1754:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot39 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun111989: for (var _fun111989_ip = 0;;) switch (_fun111989_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun111989_ip = 390;
                            continue _fun111989
                        }
                    case 10:
                        var2 = _closure1_slot24;
                        var1 = _closure1_slot23;
                        var1 = var1.None;
                        if (!(var2 === var1)) {
                            _fun111989_ip = 379;
                            continue _fun111989
                        }
                    case 34:
                        var1 = _closure1_slot23;
                        var1 = var1.HeadlessRan;
                        _closure1_slot24 = var1;
                        var1 = _closure1_slot32;
                        var4 = undefined;
                        var1 = var1.bind(var4)();
                        var2 = var1.onStorageInitialize;
                        var5 = global;
                        var7 = var5.Promise;
                        var6 = var7.all;
                        var1 = _closure1_slot34;
                        var8 = var1.bind(var4)();
                        var1 = new Array(3);
                        var1[0] = var8;
                        var8 = _closure1_slot36;
                        var8 = var8.bind(var4)();
                        var1[1] = var8;
                        var9 = _closure1_slot37;
                        var8 = {};
                        var10 = false;
                        var8.log = var10;
                        var8 = var9.bind(var4)(var8);
                        var1[2] = var8;
                        var1 = var6.bind(var7)(var1);
                        SaveGenerator(address = 136);
                    case 134:
                        return var1;
                    case 136:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun111989_ip = 387;
                            continue _fun111989
                        }
                    case 145:
                        var6 = _closure1_slot41;
                        var6 = var6.bind(var4)();
                        var2 = var2.bind(var4)();
                        var8 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var6 = 62;
                        var6 = var2[var6];
                        var6 = var8.bind(var4)(var6);
                        var6 = 42;
                        var6 = var2[var6];
                        var6 = var8.bind(var4)(var6);
                        var7 = _closure1_slot1;
                        var6 = 17;
                        var6 = var2[var6];
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.initialize;
                        var6 = var6.bind(var7)();
                        var7 = 39;
                        var6 = var2[var7];
                        var10 = var8.bind(var4)(var6);
                        var6 = 47;
                        var9 = var2[var6];
                        var6 = var2.paths;
                        var10 = var10.bind(var4)(var9, var6);
                        var9 = var10.then;
                        var6 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var3 = var0.default;
                            var2 = var3.loadCacheAsync;
                            var1 = {};
                            var0 = 'other';
                            var1.page = var0;
                            var0 = function() { // Environment: var0
                                var1 = _closure1_slot22;
                                var0 = var1.resolve;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var9.bind(var10)(var6);
                        var6 = var5.Promise;
                        var5 = var6.all;
                        var7 = var2[var7];
                        var8 = var8.bind(var4)(var7);
                        var7 = 59;
                        var7 = var2[var7];
                        var2 = var2.paths;
                        var7 = var8.bind(var4)(var7, var2);
                        var2 = new Array(1);
                        var2[0] = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 320);
                    case 318:
                        return var2;
                    case 320:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun111989_ip = 384;
                            continue _fun111989
                        }
                    case 326:
                        var6 = _closure1_slot4;
                        var5 = 1;
                        var6 = var6.bind(var4)(var2, var5);
                        var5 = 0;
                        var6 = var6[var5];
                        var5 = var6.init;
                        var5 = var5.bind(var6)();
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 43;
                        var3 = var6[var3];
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.bind(var4)();
                    case 379:
                        var3 = undefined;
                        return var3;
                    case 384:
                        return var2;
                    case 387:
                        return var1;
                    case 390:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot40 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot40 = var0;
    var0 = function() {
        _fun111992: for (var _fun111992_ip = 0;;) switch (_fun111992_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot3;
                var6 = 31;
                var2 = var0[var6];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var4 = var2.Storage;
                var3 = var4.get;
                var2 = _closure1_slot16;
                var2 = var3.bind(var4)(var2);
                var4 = null;
                if (!(var4 != var2)) {
                    _fun111992_ip = 77;
                    continue _fun111992
                }
            case 51:
                var5 = _closure1_slot19;
                var3 = var5.verbose;
                var2 = 'No need to apply token storage fix as token already exists.';
                var2 = var3.bind(var5)(var2);
                _fun111992_ip = 248;
                continue _fun111992;
            case 77:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 22;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun111992_ip = 128;
                    continue _fun111992
                }
            case 110:
                var2 = _closure1_slot9;
                var2 = var2.DCDFastConnectManager;
                var7 = var2.token;
                _fun111992_ip = 164;
                continue _fun111992;
            case 128:
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 33;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getConstants;
                var2 = var2.bind(var3)();
                var7 = var2.token;
            case 164:
                if (!(var4 == var7)) {
                    _fun111992_ip = 190;
                    continue _fun111992
                }
            case 168:
                var5 = _closure1_slot19;
                var3 = var5.log;
                var2 = 'Cannot apply token storage fix as token not in NSUserDefaults.';
                var2 = var3.bind(var5)(var2);
                _fun111992_ip = 248;
                continue _fun111992;
            case 190:
                var5 = _closure1_slot19;
                var3 = var5.log;
                var2 = 'Applying token storage fix.';
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var2 = var3.bind(var0)(var2);
                var5 = var2.Storage;
                var3 = var5.set;
                var2 = _closure1_slot16;
                var2 = var3.bind(var5)(var2, var7);
            case 248:
                var5 = _closure1_slot2;
                var3 = _closure1_slot3;
                var2 = 53;
                var7 = var3[var2];
                var8 = var5.bind(var0)(var7);
                var7 = var8.init;
                var7 = var7.bind(var8)();
                var2 = var3[var2];
                var5 = var5.bind(var0)(var2);
                var2 = var5.getToken;
                var2 = var2.bind(var5)();
                var2 = var4 != var2;
                var5 = _closure1_slot0;
                var3 = var3[var6];
                var3 = var5.bind(var0)(var3);
                var6 = var3.Storage;
                var5 = var6.get;
                var3 = _closure1_slot16;
                var3 = var5.bind(var6)(var3);
                var6 = var4 != var3;
                var5 = _closure1_slot19;
                var4 = var5.verbose;
                var3 = {};
                var3.storageHasToken = var6;
                var3.tokenManagerHasToken = var2;
                var2 = 'Token manager has initialized';
                var2 = var4.bind(var5)(var2, var3);
                var1 = _closure1_slot21;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var8 = global;
    var9 = var8.Object;
    var4 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var9)(var2, var0, var3);
    var13 = 0;
    var3 = var6[var13];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var12 = 1;
    var3 = var6[var12];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var11 = 2;
    var3 = var6[var11];
    var3 = var5.bind(var0)(var3);
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.AppState;
    var _closure1_slot6 = var4;
    var4 = var3.Linking;
    var _closure1_slot7 = var4;
    var4 = var3.LogBox;
    var _closure1_slot8 = var4;
    var3 = var3.NativeModules;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.subscribeToIntlLoadingSuccess;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = 10;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = 11;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.AppStates;
    var _closure1_slot13 = var4;
    var4 = var3.AnalyticEvents;
    var _closure1_slot14 = var4;
    var4 = var3.FIRST_RUN_DATE_KEY;
    var _closure1_slot15 = var4;
    var4 = var3.TOKEN_KEY;
    var _closure1_slot16 = var4;
    var4 = var3.STORAGE_SECURE_KEYS;
    var _closure1_slot17 = var4;
    var3 = var3.Platforms;
    var _closure1_slot18 = var3;
    var4 = 12;
    var3 = var6[var4];
    var3 = var7.bind(var0)(var3);
    var9 = var3.loadImports;
    var3 = var9.recordEnd;
    var3 = var3.bind(var9)();
    var3 = 13;
    var3 = var6[var3];
    var10 = var7.bind(var0)(var3);
    var3 = var10.prototype;
    var9 = Object.create(var3, {
        constructor: {
            value: var10
        }
    });
    var16 = 'index.native.tsx';
    var17 = var9;
    var3 = new var17[var10](var16, var15);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot19 = var3;
    var3 = null;
    var _closure1_slot20 = var3;
    var3 = 35;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Future;
    var9 = var3.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var3
        }
    });
    var17 = var9;
    var3 = new var17[var3](var16);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot22 = var3;
    var9 = {};
    var9.None = var13;
    var10 = 'None';
    var9[var13] = var10;
    var9.HeadlessRan = var12;
    var10 = 'HeadlessRan';
    var9[var12] = var10;
    var9.Full = var11;
    var10 = 'Full';
    var9[var11] = var10;
    var _closure1_slot23 = var9;
    var9 = var9.None;
    var _closure1_slot24 = var9;
    var10 = var8.Promise;
    var8 = var10.prototype;
    var9 = Object.create(var8, {
        constructor: {
            value: var10
        }
    });
    var16 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure1_slot21 = var0;
        var0 = undefined;
        return var0;
    };
    var17 = var9;
    var8 = new var17[var10](var16, var15);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot25 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var7 = var4.loadIndex;
    var4 = var7.recordEnd;
    var4 = var4.bind(var7)();
    var4 = 63;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_startup/native/NativeAppStartup.tsx';
    var4 = var5.bind(var6)(var4);
    var2.applicationReady = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot39;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.init = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot40;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.initHeadlessTask = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 14344, 14394, 27, 14409, 1677, 1661, 5248, 4279, 14410, 660, 14, 3, 14989, 4350, 14990, 566, 802, 1209, 14992, 12578, 478, 20, 9978, 14993, 14994, 1207, 14995, 15015, 8574, 587, 795, 480, 1653, 4642, 1688, 1272, 15016, 1307, 7781, 15018, 15020, 15022, 15023, 8409, 4346, 4331, 3882, 3157, 1298, 12728, 14104, 804, 12572, 4278, 12732, 12738, 8587, 15024, 4926, 4280, 4331, 2]);