// modules/spotify/SpotifyActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var10 = function(arg0, arg1, arg2, arg3) { // Original name: apiRequest, environment: var1
        _fun50051: for (var _fun50051_ip = 0;;) switch (_fun50051_ip) {
            case 0:
                var3 = arg0;
                var4 = arg3;
                var1 = arguments[4];
                var _closure2_slot0 = var3;
                var2 = arg1;
                var _closure2_slot1 = var2;
                var _closure2_slot2 = var4;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun50051_ip = 35;
                    continue _fun50051
                }
            case 32:
                var1 = 1;
            case 35:
                var _closure2_slot3 = var1;
                var1 = {};
                var9 = var1;
                var8 = var4;
                var4 = copyDataProperties(var9, var8);
                var5 = {};
                var4 = global;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var6 = 'Bearer ';
                var4 = arg2;
                var4 = var7.bind(var6)(var4);
                var5.authorization = var4;
                var4 = 'headers';
                var1[var4] = var5;
                _closure2_slot2 = var1;
                var3 = var3.bind(var2)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun50052: for (var _fun50052_ip = 0;;) switch (_fun50052_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.status;
                            var1 = 202;
                            var0 = var3;
                            if (!(var1 === var2)) {
                                _fun50052_ip = 37;
                                continue _fun50052
                            }
                        case 18:
                            var1 = global;
                            var2 = var1.Promise;
                            var1 = var2.reject;
                            var0 = var1.bind(var2)(var3);
                        case 37:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    _fun50053: for (var _fun50053_ip = 0;;) switch (_fun50053_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot2;
                            var4 = var3.onlyRetryOnAuthorizationErrors;
                            var3 = true;
                            var3 = var3 !== var4;
                            if (!var3) {
                                _fun50053_ip = 39;
                                continue _fun50053
                            }
                        case 27:
                            var5 = var2.status;
                            var4 = 202;
                            var3 = var4 === var5;
                        case 39:
                            var5 = var2.status;
                            var4 = 401;
                            if (!(var4 !== var5)) {
                                _fun50053_ip = 57;
                                continue _fun50053
                            }
                        case 54:
                            if (!var3) {
                                _fun50053_ip = 67;
                                continue _fun50053
                            }
                        case 57:
                            var3 = _closure2_slot3;
                            var0 = 0;
                            if (!(!(var3 > var0))) {
                                _fun50053_ip = 88;
                                continue _fun50053
                            }
                        case 67:
                            var0 = global;
                            var3 = var0.Promise;
                            var0 = var3.reject;
                            var0 = var0.bind(var3)(var2);
                            _fun50053_ip = 207;
                            continue _fun50053;
                        case 88:
                            var3 = var2.status;
                            var2 = 202;
                            if (!(var2 !== var3)) {
                                _fun50053_ip = 120;
                                continue _fun50053
                            }
                        case 100:
                            var2 = global;
                            var3 = var2.Promise;
                            var2 = var3.resolve;
                            var4 = var2.bind(var3)();
                            _fun50053_ip = 162;
                            continue _fun50053;
                        case 120:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 3;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var3);
                            var3 = var5.timeoutPromise;
                            var2 = 5000;
                            var4 = var3.bind(var5)(var2);
                        case 162:
                            var3 = var4.then;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot11;
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.then;
                            var2 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.body;
                                var9 = var0.access_token;
                                var5 = _closure1_slot10;
                                var11 = _closure2_slot0;
                                var10 = _closure2_slot1;
                                var8 = _closure2_slot2;
                                var1 = _closure2_slot3;
                                var0 = 1;
                                var7 = var1 - var0;
                                var12 = undefined;
                                var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                                return var0;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = global;
                                var2 = var1.Promise;
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var3 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = global;
                                    var2 = var1.setImmediate;
                                    var1 = undefined;
                                    var0 = function() { // Environment: var0
                                        var2 = _closure5_slot0;
                                        var1 = _closure4_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var4 = var1;
                                var0 = new var4[var2](var3, var2);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 207:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot10 = var10;
    var3 = function(arg0) { // Original name: getAccessToken, environment: var1
        var7 = arg0;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot7;
        var5 = var6.CONNECTION_ACCESS_TOKEN;
        var4 = _closure1_slot8;
        var4 = var4.SPOTIFY;
        var4 = var5.bind(var6)(var4, var7);
        var1.url = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.catch;
        var1 = function(arg0) { // Environment: var0
            _fun50060: for (var _fun50060_ip = 0;;) switch (_fun50060_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2.body;
                    var1 = null;
                    var1 = var1 == var0;
                    var3 = undefined;
                    var4 = undefined;
                    if (var1) {
                        _fun50060_ip = 26;
                        continue _fun50060
                    }
                case 21:
                    var4 = var0.code;
                case 26:
                    var1 = _closure1_slot6;
                    var1 = var1.CONNECTION_REVOKED;
                    if (!(var4 !== var1)) {
                        _fun50060_ip = 199;
                        continue _fun50060
                    }
                case 46:
                    var4 = var2.status;
                    var1 = 429;
                    if (!(var1 === var4)) {
                        _fun50060_ip = 253;
                        continue _fun50060
                    }
                case 64:
                    var1 = var2.headers;
                    var4 = var1["retry-after"];
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var1 = var6[var1];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.Millis;
                    var1 = var1.SECOND;
                    var1 = var4 * var1;
                    var4 = global;
                    var4 = var4.isNaN;
                    var4 = var4.bind(var3)(var1);
                    var6 = 5000;
                    var5 = var6;
                    if (var4) {
                        _fun50060_ip = 149;
                        continue _fun50060
                    }
                case 137:
                    var4 = 0;
                    var5 = var6;
                    if (!(var4 !== var1)) {
                        _fun50060_ip = 149;
                        continue _fun50060
                    }
                case 146:
                    var5 = var1;
                case 149:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 3;
                    var1 = var6[var1];
                    var4 = var4.bind(var3)(var1);
                    var1 = var4.timeoutPromise;
                    var5 = var1.bind(var4)(var5);
                    var4 = var5.then;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot11;
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    return var1;
                case 199:
                    var1 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 5;
                    var0 = var4[var0];
                    var3 = var1.bind(var3)(var0);
                    var1 = var3.dispatch;
                    var0 = {};
                    var4 = 'SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE';
                    var0.type = var4;
                    var4 = _closure2_slot0;
                    var0.accountId = var4;
                    var0 = var1.bind(var3)(var0);
                case 253:
                    var0 = global;
                    var1 = var0.Promise;
                    var0 = var1.reject;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.body;
            var4 = var1.access_token;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'SPOTIFY_ACCOUNT_ACCESS_TOKEN';
            var1.type = var5;
            var5 = _closure2_slot0;
            var1.accountId = var5;
            var1.accessToken = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot11 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot4 = var5;
    var4 = var4.SpotifyEndpoints;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.AbortCodes;
    var _closure1_slot6 = var5;
    var5 = var4.Endpoints;
    var _closure1_slot7 = var5;
    var4 = var4.PlatformTypes;
    var _closure1_slot8 = var4;
    var4 = {};
    var11 = var10.bind;
    var5 = 4;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.HTTP;
    var8 = var8.get;
    var9 = null;
    var8 = var11.bind(var10)(var9, var8);
    var4.get = var8;
    var8 = var10.bind;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.HTTP;
    var5 = var5.put;
    var5 = var8.bind(var10)(var9, var5);
    var4.put = var5;
    var _closure1_slot9 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/spotify/SpotifyActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var2.SpotifyAPI = var4;
    var2.getAccessToken = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: subscribePlayerStateNotifications, environment: var1
        _fun50063: for (var _fun50063_ip = 0;;) switch (_fun50063_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var7 = arg2;
                var1 = arguments[3];
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var7;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun50063_ip = 35;
                    continue _fun50063
                }
            case 32:
                var1 = 2;
            case 35:
                var _closure2_slot3 = var1;
                var3 = _closure1_slot9;
                var2 = var3.put;
                var1 = {};
                var6 = _closure1_slot5;
                var6 = var6.NOTIFICATIONS_PLAYER;
                var1.url = var6;
                var6 = {};
                var6.connection_id = var7;
                var1.query = var6;
                var2 = var2.bind(var3)(var5, var4, var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    _fun50064: for (var _fun50064_ip = 0;;) switch (_fun50064_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = 0;
                            if (!(!(var1 <= var0))) {
                                _fun50064_ip = 74;
                                continue _fun50064
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.timeoutPromise;
                            var0 = 5000;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.then;
                            var0 = function() { // Environment: var0
                                var5 = _closure1_slot12;
                                var9 = _closure2_slot0;
                                var8 = _closure2_slot1;
                                var7 = _closure2_slot2;
                                var1 = _closure2_slot3;
                                var0 = 1;
                                var6 = var1 - var0;
                                var10 = undefined;
                                var0 = var10[var5](var9, var8, var7, var6, var5);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun50064_ip = 96;
                            continue _fun50064;
                        case 74:
                            var1 = global;
                            var3 = var1.Promise;
                            var2 = var3.reject;
                            var1 = arg0;
                            var0 = var2.bind(var3)(var1);
                        case 96:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var2.subscribePlayerStateNotifications = var3;
    var3 = function(arg0, arg1) { // Original name: getProfile, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot9;
        var3 = var4.get;
        var2 = {};
        var1 = _closure1_slot5;
        var1 = var1.PROFILE;
        var2.url = var1;
        var1 = arg1;
        var2 = var3.bind(var4)(var5, var1, var2);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'SPOTIFY_PROFILE_UPDATE';
            var1.type = var4;
            var4 = _closure2_slot0;
            var1.accountId = var4;
            var4 = var0.body;
            var5 = var4.product;
            var4 = 'premium';
            var4 = var4 === var5;
            var1.isPremium = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getProfile = var3;
    var3 = function(arg0, arg1) { // Original name: getDevices, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot9;
        var3 = var4.get;
        var2 = {};
        var1 = _closure1_slot5;
        var1 = var1.PLAYER_DEVICES;
        var2.url = var1;
        var1 = arg1;
        var2 = var3.bind(var4)(var5, var1, var2);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            _fun50069: for (var _fun50069_ip = 0;;) switch (_fun50069_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.body;
                    if (!var1) {
                        _fun50069_ip = 86;
                        continue _fun50069
                    }
                case 11:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SPOTIFY_SET_DEVICES';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.accountId = var4;
                    var4 = var0.body;
                    var4 = var4.devices;
                    var1.devices = var4;
                    var1 = var2.bind(var3)(var1);
                case 86:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getDevices = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: play, environment: var1
        _fun50070: for (var _fun50070_ip = 0;;) switch (_fun50070_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var10 = arg2;
                var2 = arguments[4];
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var10;
                var9 = undefined;
                if (!(var2 === var9)) {
                    _fun50070_ip = 34;
                    continue _fun50070
                }
            case 32:
                var2 = {};
            case 34:
                var _closure2_slot3 = var9;
                var _closure2_slot4 = var9;
                var _closure2_slot5 = var9;
                var6 = _closure1_slot5;
                var8 = var6.PLAYER_OPEN;
                var7 = arg3;
                var3 = false;
                var11 = var8.bind(var6)(var7, var10, var3);
                var7 = var2.deviceId;
                _closure2_slot3 = var7;
                var8 = var2.position;
                _closure2_slot4 = var8;
                var10 = var2.contextUri;
                var2 = var2.repeat;
                _closure2_slot5 = var2;
                var3 = _closure1_slot9;
                var2 = var3.put;
                var1 = {};
                var6 = var6.PLAYER_PLAY;
                var1.url = var6;
                var6 = {};
                var6.device_id = var7;
                var1.query = var6;
                var6 = {};
                var7 = null;
                var13 = var7 != var10;
                var12 = undefined;
                if (!var13) {
                    _fun50070_ip = 156;
                    continue _fun50070
                }
            case 153:
                var12 = var10;
            case 156:
                var6.context_uri = var12;
                var13 = var7 == var10;
                var12 = undefined;
                if (!var13) {
                    _fun50070_ip = 181;
                    continue _fun50070
                }
            case 170:
                var13 = new Array(1);
                var13[0] = var11;
                var12 = var13;
            case 181:
                var6.uris = var12;
                var10 = var7 != var10;
                var9 = undefined;
                if (!var10) {
                    _fun50070_ip = 206;
                    continue _fun50070
                }
            case 197:
                var10 = {};
                var10.uri = var11;
                var9 = var10;
            case 206:
                var6.offset = var9;
                var9 = var7 != var8;
                var7 = 0;
                if (!var9) {
                    _fun50070_ip = 223;
                    continue _fun50070
                }
            case 220:
                var7 = var8;
            case 223:
                var6.position_ms = var7;
                var1.body = var6;
                var3 = var2.bind(var3)(var5, var4, var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun50071: for (var _fun50071_ip = 0;;) switch (_fun50071_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun50071_ip = 95;
                                continue _fun50071
                            }
                        case 16:
                            var5 = _closure1_slot9;
                            var4 = var5.put;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var1 = {};
                            var6 = _closure1_slot5;
                            var6 = var6.PLAYER_REPEAT;
                            var1.url = var6;
                            var6 = {};
                            var8 = _closure2_slot3;
                            var6.device_id = var8;
                            var8 = _closure2_slot5;
                            var7 = 'off';
                            if (!var8) {
                                _fun50071_ip = 79;
                                continue _fun50071
                            }
                        case 75:
                            var7 = 'context';
                        case 79:
                            var6.state = var7;
                            var1.query = var6;
                            var0 = var4.bind(var5)(var3, var2, var1);
                        case 95:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun50072: for (var _fun50072_ip = 0;;) switch (_fun50072_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'SPOTIFY_PLAYER_PLAY';
                            var0.type = var3;
                            var3 = _closure2_slot2;
                            var0.id = var3;
                            var5 = _closure2_slot4;
                            var3 = null;
                            var5 = var3 != var5;
                            var3 = 0;
                            if (!var5) {
                                _fun50072_ip = 70;
                                continue _fun50072
                            }
                        case 66:
                            var3 = _closure2_slot4;
                        case 70:
                            var0.position = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = arg0;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.play = var3;
    var3 = function(arg0, arg1) { // Original name: pause, environment: var1
        var4 = _closure1_slot9;
        var3 = var4.put;
        var2 = {};
        var0 = _closure1_slot5;
        var0 = var0.PLAYER_PAUSE;
        var2.url = var0;
        var1 = arg0;
        var0 = arg1;
        var2 = var3.bind(var4)(var1, var0, var2);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'SPOTIFY_PLAYER_PAUSE';
            var0.type = var3;
            var0 = var1.bind(var2)(var0);
            var0 = arg0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.pause = var3;
    var3 = function() { // Original name: fetchIsSpotifyProtocolRegistered, environment: var1
        _fun50075: for (var _fun50075_ip = 0;;) switch (_fun50075_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.isProtocolRegistered;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun50075_ip = 107;
                    continue _fun50075
                }
            case 20:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.isDesktop;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun50075_ip = 107;
                    continue _fun50075
                }
            case 55:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isProtocolRegistered;
                var0 = _closure1_slot4;
                var2 = var1.bind(var2)(var0);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SPOTIFY_SET_PROTOCOL_REGISTERED';
                    var1.type = var4;
                    var4 = arg0;
                    var1.isRegistered = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var2.fetchIsSpotifyProtocolRegistered = var3;
    var1 = function(arg0, arg1) { // Original name: setActiveDevice, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SPOTIFY_SET_ACTIVE_DEVICE';
        var1.type = var4;
        var4 = arg0;
        var1.accountId = var4;
        var4 = arg1;
        var1.deviceId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setActiveDevice = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5612, 5610, 660, 3589, 507, 806, 667, 478, 5613, 2]);