// modules/gateway/native/fast_connect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var3 = function() {
        _fun1092: for (var _fun1092_ip = 0;;) switch (_fun1092_ip) {
            case 0:
                var0 = global;
                var0 = var0.window;
                var1 = var0.WebSocket;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun1092_ip = 45;
                    continue _fun1092
                }
            case 20:
                var2 = _closure1_slot7;
                var1 = var2.log;
                var0 = 'Skipping fast_connect because `window.WebSocket` does not exist.';
                var0 = var1.bind(var2)(var0);
                _fun1092_ip = 58;
                continue _fun1092;
            case 45:
                var1 = function() {
                    _fun1093: for (var _fun1093_ip = 0;;) switch (_fun1093_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var10 = 4;
                            var1 = var0[var10];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.isAndroid;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun1093_ip = 58;
                                continue _fun1093
                            }
                        case 40:
                            var1 = _closure1_slot4;
                            var1 = var1.DCDCompressionManager;
                            var7 = var1.supportsZstd;
                            _fun1093_ip = 94;
                            continue _fun1093;
                        case 58:
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 10;
                            var1 = var5[var1];
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.getConstants;
                            var1 = var1.bind(var3)();
                            var7 = var1.supportsZstd;
                        case 94:
                            var12 = 'zlib-stream';
                            if (!var7) {
                                _fun1093_ip = 109;
                                continue _fun1093
                            }
                        case 103:
                            var12 = 'zstd-stream';
                        case 109:
                            var3 = global;
                            var1 = var3.window;
                            var1 = var1.GLOBAL_ENV;
                            var17 = var1.GATEWAY_ENDPOINT;
                            var1 = var3.window;
                            var1 = var1.GLOBAL_ENV;
                            var15 = var1.API_VERSION;
                            var1 = var3.HermesInternal;
                            var8 = var1.concat;
                            var18 = '';
                            var16 = '/?encoding=json&v=';
                            var14 = '&compress=';
                            var13 = var12;
                            var6 = var18[var8](var17, var16, var15, var14, var13, var12);
                            var8 = _closure1_slot7;
                            var5 = var8.log;
                            var1 = '[FAST CONNECT] ';
                            var1 = var1 + var6;
                            var1 = var5.bind(var8)(var1);
                            var5 = var3.Date;
                            var1 = var5.now;
                            var1 = var1.bind(var5)();
                            var _closure3_slot0 = var1;
                            var5 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var1 = 11;
                            var1 = var8[var1];
                            var1 = var5.bind(var0)(var1);
                            var1 = var1.bind(var0)(var6);
                            var8 = var3.parseFloat;
                            var5 = var1._socketId;
                            var8 = var8.bind(var0)(var5);
                            var5 = var3.isNaN;
                            var5 = var5.bind(var0)(var8);
                            if (var5) {
                                _fun1093_ip = 568;
                                continue _fun1093
                            }
                        case 283:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var5 = var5[var10];
                            var9 = var9.bind(var0)(var5);
                            var5 = var9.isAndroid;
                            var5 = var5.bind(var9)();
                            if (var7) {
                                _fun1093_ip = 372;
                                continue _fun1093
                            }
                        case 313:
                            if (var5) {
                                _fun1093_ip = 339;
                                continue _fun1093
                            }
                        case 316:
                            var7 = _closure1_slot4;
                            var9 = var7.DCDCompressionManager;
                            var7 = var9.enableZlibStreamSupport;
                            var7 = var7.bind(var9)(var8);
                            _fun1093_ip = 432;
                            continue _fun1093;
                        case 339:
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var7 = 10;
                            var7 = var10[var7];
                            var9 = var9.bind(var0)(var7);
                            var7 = var9.enableZlibStreamSupport;
                            var7 = var7.bind(var9)(var8);
                            _fun1093_ip = 432;
                            continue _fun1093;
                        case 372:
                            if (var5) {
                                _fun1093_ip = 401;
                                continue _fun1093
                            }
                        case 375:
                            var5 = _closure1_slot4;
                            var9 = var5.DCDCompressionManager;
                            var7 = var9.enableZstdStreamSupport;
                            var5 = 0;
                            var5 = var7.bind(var9)(var8, var5);
                            _fun1093_ip = 432;
                            continue _fun1093;
                        case 401:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var5 = 10;
                            var5 = var9[var5];
                            var7 = var7.bind(var0)(var5);
                            var5 = var7.enableZstdStreamSupport;
                            var5 = var5.bind(var7)(var8);
                        case 432:
                            var5 = {
                                'open': false,
                                'gateway': null,
                                'identify': false,
                                'messages': null,
                                'clientState': null
                            };
                            var5.gateway = var6;
                            var6 = new Array(0);
                            var5.messages = var6;
                            var _closure3_slot1 = var5;
                            var6 = function() { // Environment: var4
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 12;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.mark;
                                var3 = '🌐';
                                var2 = 'Fastconnect socket opened';
                                var2 = var4.bind(var5)(var3, var2);
                                var4 = _closure1_slot7;
                                var3 = var4.log;
                                var2 = global;
                                var5 = var2.Date;
                                var1 = var5.now;
                                var6 = var1.bind(var5)();
                                var5 = _closure3_slot0;
                                var8 = var6 - var5;
                                var5 = _closure3_slot1;
                                var7 = var5.identify;
                                var2 = var2.HermesInternal;
                                var6 = var2.concat;
                                var5 = 'connected and identified in ';
                                var2 = 'ms didIdentify:';
                                var2 = var6.bind(var5)(var8, var2, var7);
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure3_slot1;
                                var1 = true;
                                var2.open = var1;
                                return var0;
                            };
                            var1.onopen = var6;
                            var6 = function() { // Environment: var4
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.mark;
                                var2 = '🌐';
                                var1 = 'Fastconnect socket close';
                                var1 = var3.bind(var4)(var2, var1);
                                var1 = global;
                                var2 = var1.window;
                                var1 = null;
                                var2._ws = var1;
                                return var0;
                            };
                            var1.onerror = var6;
                            var1.onclose = var6;
                            var4 = function(arg0) { // Environment: var4
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.mark;
                                var2 = '🌐';
                                var1 = 'Fastconnect socket message';
                                var1 = var3.bind(var4)(var2, var1);
                                var1 = _closure3_slot1;
                                var3 = var1.messages;
                                var2 = var3.push;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onmessage = var4;
                            var4 = var3.window;
                            var3 = {};
                            var3.ws = var1;
                            var3.state = var5;
                            var4._ws = var3;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 12;
                            var3 = var5[var3];
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.mark;
                            var4 = '🌐';
                            var3 = 'Fastconnect socket created';
                            var3 = var5.bind(var6)(var4, var3);
                            _fun1093_ip = 595;
                            continue _fun1093;
                        case 568:
                            var4 = _closure1_slot7;
                            var3 = var4.log;
                            var2 = var1._socketId;
                            var1 = '[FAST CONNECT] Unable to create socketId from NaN value ';
                            var1 = var3.bind(var4)(var1, var2);
                        case 595:
                            return var0;
                    }
                };
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 58:
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.NativeModules;
    var _closure1_slot4 = var7;
    var7 = var4.Platform;
    var4 = var4.AppState;
    var _closure1_slot5 = var4;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var6[var7];
    var9 = var8.bind(var0)(var7);
    var7 = var9.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var12 = 'FAST CONNECT';
    var13 = var8;
    var7 = new var13[var9](var12, var11);
    var9 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot7 = var9;
    var8 = var9.info;
    var7 = var4.currentState;
    var4 = 'initial app state (import time)';
    var4 = var8.bind(var9)(var4, var7);
    var4 = var3.bind(var0)();
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gateway/native/fast_connect.tsx';
    var4 = var5.bind(var6)(var4);
    var2.createFastConnectSocket = var3;
    var3 = function() {
        _fun1097: for (var _fun1097_ip = 0;;) switch (_fun1097_ip) {
            case 0:
                var0 = global;
                var1 = var0.window;
                var2 = var1._ws;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun1097_ip = 60;
                    continue _fun1097
                }
            case 20:
                var2 = var0.window;
                var2 = var2._ws;
                var3 = var2.ws;
                var2 = var3.close;
                var2 = var2.bind(var3)();
                var0 = var0.window;
                var0._ws = var1;
            case 60:
                var0 = undefined;
                return var0;
        }
    };
    var2.closeFastConnectSocket = var3;
    var1 = function() {
        _fun1098: for (var _fun1098_ip = 0;;) switch (_fun1098_ip) {
            case 0:
                var0 = global;
                var0 = var0.window;
                var1 = var0._ws;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun1098_ip = 45;
                    continue _fun1098
                }
            case 20:
                var2 = _closure1_slot7;
                var1 = var2.log;
                var0 = 'Skipping identifyWebSocket because socket is null';
                var0 = var1.bind(var2)(var0);
                _fun1098_ip = 94;
                continue _fun1098;
            case 45:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.beginFastConnect;
                var1 = var2.measure;
                var0 = function() { // Environment: var0
                    _fun1099: for (var _fun1099_ip = 0;;) switch (_fun1099_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.loadFastConnectNativeModule;
                            var2 = var3.measure;
                            var1 = function() { // Environment: var1
                                _fun1100: for (var _fun1100_ip = 0;;) switch (_fun1100_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var0 = 4;
                                        var0 = var3[var0];
                                        var3 = undefined;
                                        var2 = var2.bind(var3)(var0);
                                        var0 = var2.isAndroid;
                                        var0 = var0.bind(var2)();
                                        if (var0) {
                                            _fun1100_ip = 56;
                                            continue _fun1100
                                        }
                                    case 38:
                                        var0 = _closure1_slot4;
                                        var0 = var0.DCDFastConnectManager;
                                        var0 = var0.token;
                                        _fun1100_ip = 107;
                                        continue _fun1100;
                                    case 56:
                                        var2 = _closure1_slot1;
                                        var4 = _closure1_slot3;
                                        var1 = 5;
                                        var1 = var4[var1];
                                        var2 = var2.bind(var3)(var1);
                                        var1 = var2.getConstants;
                                        var1 = var1.bind(var2)();
                                        var2 = var1.token;
                                        var1 = null;
                                        var3 = var1 != var2;
                                        if (!var3) {
                                            _fun1100_ip = 104;
                                            continue _fun1100
                                        }
                                    case 101:
                                        var1 = var2;
                                    case 104:
                                        var0 = var1;
                                    case 107:
                                        return var0;
                                }
                            };
                            var6 = var2.bind(var3)(var1);
                            var9 = null;
                            if (!(var9 != var6)) {
                                _fun1099_ip = 63;
                                continue _fun1099
                            }
                        case 55:
                            var1 = '';
                            if (!(var1 === var6)) {
                                _fun1099_ip = 88;
                                continue _fun1099
                            }
                        case 63:
                            var3 = _closure1_slot7;
                            var2 = var3.log;
                            var1 = 'Skipping fast_connect because we could not find a token to connect with.';
                            var1 = var2.bind(var3)(var1);
                            _fun1099_ip = 783;
                            continue _fun1099;
                        case 88:
                            var4 = global;
                            var1 = var4.window;
                            var2 = var1._ws;
                            var1 = var2.ws;
                            var2 = var2.state;
                            var5 = var1._socketId;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var12 = 4;
                            var1 = var1[var12];
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.isAndroid;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun1099_ip = 169;
                                continue _fun1099
                            }
                        case 152:
                            var1 = _closure1_slot4;
                            var1 = var1.DCDFastConnectManager;
                            var1 = var1.userId;
                            _fun1099_ip = 204;
                            continue _fun1099;
                        case 169:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var3 = 5;
                            var3 = var8[var3];
                            var7 = var7.bind(var0)(var3);
                            var3 = var7.getConstants;
                            var3 = var3.bind(var7)();
                            var1 = var3.userId;
                        case 204:
                            var3 = var9 != var1;
                            var11 = null;
                            if (!var3) {
                                _fun1099_ip = 216;
                                continue _fun1099
                            }
                        case 213:
                            var11 = var1;
                        case 216:
                            var13 = _closure1_slot7;
                            var8 = var13.info;
                            var3 = _closure1_slot5;
                            var7 = var3.currentState;
                            var1 = 'prepareIdentify: app state: ';
                            var1 = var8.bind(var13)(var1, var7);
                            var1 = {};
                            var1.token = var6;
                            var6 = {};
                            var8 = _closure1_slot2;
                            var13 = _closure1_slot3;
                            var7 = 6;
                            var7 = var13[var7];
                            var14 = var8.bind(var0)(var7);
                            var7 = var14.getSuperProperties;
                            var19 = var7.bind(var14)();
                            var20 = var6;
                            var7 = copyDataProperties(var20, var19);
                            var7 = var3.currentState;
                            var3 = 'client_app_state';
                            var6[var3] = var7;
                            var3 = true;
                            var7 = 'is_fast_connect';
                            var6[var7] = var3;
                            var7 = 7;
                            var7 = var13[var7];
                            var8 = var8.bind(var0)(var7);
                            var7 = var8.describeConnectionReasons;
                            var8 = var7.bind(var8)();
                            var7 = 'gateway_connect_reasons';
                            var6[var7] = var8;
                            var1.properties = var6;
                            var14 = _closure1_slot0;
                            var6 = 8;
                            var6 = var13[var6];
                            var8 = var14.bind(var0)(var6);
                            var7 = var8.getClientCapabilities;
                            var6 = {};
                            var13 = var13[var12];
                            var14 = var14.bind(var0)(var13);
                            var13 = var14.isAndroid;
                            var13 = var13.bind(var14)();
                            if (var13) {
                                _fun1099_ip = 430;
                                continue _fun1099
                            }
                        case 402:
                            var13 = _closure1_slot4;
                            var13 = var13.DCDFastConnectManager;
                            var14 = var13.useChannelObfuscation;
                            var13 = var9 != var14;
                            if (!var13) {
                                _fun1099_ip = 428;
                                continue _fun1099
                            }
                        case 425:
                            var13 = var14;
                        case 428:
                            _fun1099_ip = 479;
                            continue _fun1099;
                        case 430:
                            var15 = _closure1_slot1;
                            var16 = _closure1_slot3;
                            var14 = 5;
                            var14 = var16[var14];
                            var15 = var15.bind(var0)(var14);
                            var14 = var15.getConstants;
                            var14 = var14.bind(var15)();
                            var15 = var14.useChannelObfuscation;
                            var14 = var9 != var15;
                            if (!var14) {
                                _fun1099_ip = 476;
                                continue _fun1099
                            }
                        case 473:
                            var14 = var15;
                        case 476:
                            var13 = var14;
                        case 479:
                            var6.useChannelObfuscation = var13;
                            var6 = var7.bind(var8)(var6);
                            var1.capabilities = var6;
                            var6 = {};
                            var7 = {};
                            var6.guild_versions = var7;
                            var1.client_state = var6;
                            var8 = var4.JSON;
                            var7 = var8.stringify;
                            var6 = {};
                            var13 = 2;
                            var6.op = var13;
                            var6.d = var1;
                            var8 = var7.bind(var8)(var6);
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var6 = var6[var12];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.isAndroid;
                            var6 = var6.bind(var7)();
                            if (var6) {
                                _fun1099_ip = 644;
                                continue _fun1099
                            }
                        case 568:
                            var6 = _closure1_slot4;
                            var12 = var6.DCDFastConnectManager;
                            var7 = var12.prepareIdentify;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot3;
                            var6 = 9;
                            var6 = var14[var6];
                            var13 = var13.bind(var0)(var6);
                            var6 = var13.isCacheEnabled;
                            var13 = var6.bind(var13)();
                            var6 = null;
                            if (!var13) {
                                _fun1099_ip = 623;
                                continue _fun1099
                            }
                        case 619:
                            var6 = _closure1_slot6;
                        case 623:
                            var21 = var12;
                            var20 = var11;
                            var19 = var8;
                            var18 = var5;
                            var17 = var6;
                            var6 = var21[var7](var20, var19, var18, var17, var16);
                            _fun1099_ip = 765;
                            continue _fun1099;
                        case 644:
                            var7 = var9 == var11;
                            var6 = undefined;
                            if (var7) {
                                _fun1099_ip = 662;
                                continue _fun1099
                            }
                        case 653:
                            var7 = var11.toString;
                            var6 = var7.bind(var11)();
                        case 662:
                            var7 = var9 != var6;
                            var9 = null;
                            if (!var7) {
                                _fun1099_ip = 674;
                                continue _fun1099
                            }
                        case 671:
                            var9 = var6;
                        case 674:
                            var7 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var6 = 5;
                            var6 = var12[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.prepareIdentify;
                            var4 = var4.parseFloat;
                            var5 = var4.bind(var0)(var5);
                            var11 = _closure1_slot0;
                            var4 = 9;
                            var4 = var12[var4];
                            var11 = var11.bind(var0)(var4);
                            var4 = var11.isCacheEnabled;
                            var11 = var4.bind(var11)();
                            var4 = undefined;
                            if (!var11) {
                                _fun1099_ip = 746;
                                continue _fun1099
                            }
                        case 742:
                            var4 = _closure1_slot6;
                        case 746:
                            var21 = var7;
                            var20 = var9;
                            var19 = var8;
                            var18 = var5;
                            var17 = var4;
                            var4 = var21[var6](var20, var19, var18, var17, var16);
                        case 765:
                            var1 = var1.client_state;
                            var2.identify = var3;
                            var2.clientState = var1;
                        case 783:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 94:
                var0 = undefined;
                return var0;
        }
    };
    var2.identifyWebSocket = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [26, 27, 477, 3, 478, 480, 481, 659, 12454, 12228, 12435, 12424, 20, 14, 2]);