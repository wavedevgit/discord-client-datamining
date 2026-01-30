// stores/StreamRTCConnectionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun31674: for (var _fun31674_ip = 0;;) switch (_fun31674_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var5;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var8
                _fun31675: for (var _fun31675_ip = 0;;) switch (_fun31675_ip) {
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
                        _fun31675_ip = 74;
                        continue _fun31675;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot24 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot24 = var0;
            var0 = function() { // Original name: destroyStreamRTCConnections, environment: var8
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 14;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.forEach;
                var2 = _closure1_slot23;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun31679: for (var _fun31679_ip = 0;;) switch (_fun31679_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = arg1;
                            var2 = var3.destroy;
                            var4 = var3.isOwner;
                            var0 = 'receiver-disconnect';
                            if (!var4) {
                                _fun31679_ip = 33;
                                continue _fun31679
                            }
                        case 27:
                            var0 = 'sender-disconnect';
                        case 33:
                            var0 = var2.bind(var3)(var0);
                            var2 = _closure1_slot23;
                            var2 = delete var2[var1];
                            var0 = _closure1_slot21;
                            var0 = delete var0[var1];
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var _closure1_slot25 = var0;
            var9 = function() { // Original name: handleRtcAction, environment: var8
                var0 = true;
                return var0;
            };
            var0 = function(arg0) { // Original name: parseSourceType, environment: var8
                _fun31681: for (var _fun31681_ip = 0;;) switch (_fun31681_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun31681_ip = 246;
                            continue _fun31681
                        }
                    case 12:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 19;
                        var0 = var1[var0];
                        var1 = undefined;
                        var0 = var4.bind(var1)(var0);
                        var0 = var0.isPlatformEmbedded;
                        if (var0) {
                            _fun31681_ip = 162;
                            continue _fun31681
                        }
                    case 46:
                        var0 = global;
                        var4 = var0.platform;
                        var6 = var3 == var4;
                        var5 = undefined;
                        if (var6) {
                            _fun31681_ip = 68;
                            continue _fun31681
                        }
                    case 63:
                        var5 = var4.name;
                    case 68:
                        var4 = 'Chrome';
                        if (!(var4 !== var5)) {
                            _fun31681_ip = 162;
                            continue _fun31681
                        }
                    case 78:
                        var4 = var0.platform;
                        var6 = var3 == var4;
                        var5 = undefined;
                        if (var6) {
                            _fun31681_ip = 98;
                            continue _fun31681
                        }
                    case 93:
                        var5 = var4.name;
                    case 98:
                        var4 = 'Firefox';
                        if (!(var4 !== var5)) {
                            _fun31681_ip = 144;
                            continue _fun31681
                        }
                    case 108:
                        var0 = var0.platform;
                        var3 = var3 == var0;
                        var1 = undefined;
                        if (var3) {
                            _fun31681_ip = 128;
                            continue _fun31681
                        }
                    case 123:
                        var1 = var0.name;
                    case 128:
                        var0 = 'Safari';
                        if (!(var0 === var1)) {
                            _fun31681_ip = 222;
                            continue _fun31681
                        }
                    case 138:
                        var0 = 'window';
                        return var0;
                    case 144:
                        var0 = 'screen';
                        var1 = '';
                        if (!(var1 !== var2)) {
                            _fun31681_ip = 160;
                            continue _fun31681
                        }
                    case 156:
                        var0 = 'window';
                    case 160:
                        return var0;
                    case 162:
                        var1 = var2.startsWith;
                        var0 = 'web-contents-media-stream:';
                        var0 = var1.bind(var2)(var0);
                        if (var0) {
                            _fun31681_ip = 240;
                            continue _fun31681
                        }
                    case 182:
                        var1 = var2.startsWith;
                        var0 = 'window:';
                        var0 = var1.bind(var2)(var0);
                        if (var0) {
                            _fun31681_ip = 234;
                            continue _fun31681
                        }
                    case 202:
                        var1 = var2.startsWith;
                        var0 = 'screen:';
                        var0 = var1.bind(var2)(var0);
                        if (var0) {
                            _fun31681_ip = 228;
                            continue _fun31681
                        }
                    case 222:
                        var0 = 'unknown';
                        return var0;
                    case 228:
                        var0 = 'screen';
                        return var0;
                    case 234:
                        var0 = 'window';
                        return var0;
                    case 240:
                        var0 = 'tab';
                        return var0;
                    case 246:
                        var0 = 'unknown';
                        return var0;
                }
            };
            var _closure1_slot26 = var0;
            var0 = global;
            var7 = var0.Object;
            var3 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var7)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 1;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 2;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 3;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot7 = var1;
            var1 = 4;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot8 = var1;
            var1 = 5;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot9 = var1;
            var1 = 6;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot10 = var1;
            var1 = 7;
            var1 = var5[var1];
            var3 = var6.bind(var0)(var1);
            var _closure1_slot11 = var3;
            var1 = 8;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot12 = var1;
            var1 = 9;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot13 = var1;
            var1 = 10;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var7 = var1.RTCConnectionQuality;
            var _closure1_slot14 = var7;
            var1 = var1.StreamLayouts;
            var7 = 11;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var7 = var7.StreamTypes;
            var _closure1_slot15 = var7;
            var7 = {};
            var _closure1_slot16 = var7;
            var7 = {};
            var _closure1_slot17 = var7;
            var7 = {};
            var _closure1_slot18 = var7;
            var7 = {};
            var _closure1_slot19 = var7;
            var7 = {};
            var _closure1_slot20 = var7;
            var7 = {};
            var _closure1_slot21 = var7;
            var1 = var1.PORTRAIT;
            var _closure1_slot22 = var1;
            var1 = {};
            var _closure1_slot23 = var1;
            var1 = 21;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var7 = var1.Store;
            var1 = function(arg0) { // Environment: var8
                var3 = function() { // Original name: StreamRTCConnectionStore, environment: var5
                    _fun31683: for (var _fun31683_ip = 0;;) switch (_fun31683_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot4;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot7;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot6;
                            var0 = _closure1_slot24;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun31683_ip = 69;
                                continue _fun31683
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun31683_ip = 105;
                            continue _fun31683;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot7;
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
                var1 = _closure1_slot5;
                var4 = {};
                var0 = 'initialize';
                var4.key = var0;
                var0 = function() { // Original name: value, environment: var5
                    var5 = this;
                    var4 = var5.waitFor;
                    var9 = _closure1_slot10;
                    var8 = _closure1_slot11;
                    var7 = _closure1_slot13;
                    var6 = _closure1_slot9;
                    var10 = var5;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(17);
                var0[0] = var4;
                var4 = {};
                var6 = 'getRTCConnections';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = _closure1_slot23;
                    return var0;
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'getAllActiveStreamKeys';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = _closure1_slot23;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'getRTCConnection';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = _closure1_slot23;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'getQuality';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun31688: for (var _fun31688_ip = 0;;) switch (_fun31688_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = _closure1_slot11;
                            var2 = var3.bind(var0)(var2);
                            if (!var2) {
                                _fun31688_ip = 73;
                                continue _fun31688
                            }
                        case 40:
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun31688_ip = 73;
                                continue _fun31688
                            }
                        case 46:
                            var3 = _closure1_slot23;
                            var3 = var3[var4];
                            var4 = var2 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun31688_ip = 69;
                                continue _fun31688
                            }
                        case 63:
                            var0 = var3.quality;
                        case 69:
                            if (!(var2 == var0)) {
                                _fun31688_ip = 83;
                                continue _fun31688
                            }
                        case 73:
                            var1 = _closure1_slot14;
                            var0 = var1.UNKNOWN;
                        case 83:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'getMediaSessionId';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun31689: for (var _fun31689_ip = 0;;) switch (_fun31689_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31689_ip = 53;
                                continue _fun31689
                            }
                        case 9:
                            var1 = _closure1_slot23;
                            var4 = var1[var2];
                            var2 = var0 != var4;
                            var1 = undefined;
                            if (!var2) {
                                _fun31689_ip = 51;
                                continue _fun31689
                            }
                        case 29:
                            var3 = var0 != var4;
                            var2 = null;
                            if (!var3) {
                                _fun31689_ip = 48;
                                continue _fun31689
                            }
                        case 38:
                            var3 = var4.getMediaSessionId;
                            var2 = var3.bind(var4)();
                        case 48:
                            var1 = var2;
                        case 51:
                            return var1;
                        case 53:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'getRtcConnectionId';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun31690: for (var _fun31690_ip = 0;;) switch (_fun31690_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31690_ip = 53;
                                continue _fun31690
                            }
                        case 9:
                            var1 = _closure1_slot23;
                            var4 = var1[var2];
                            var2 = var0 != var4;
                            var1 = undefined;
                            if (!var2) {
                                _fun31690_ip = 51;
                                continue _fun31690
                            }
                        case 29:
                            var3 = var0 != var4;
                            var2 = null;
                            if (!var3) {
                                _fun31690_ip = 48;
                                continue _fun31690
                            }
                        case 38:
                            var3 = var4.getRTCConnectionId;
                            var2 = var3.bind(var4)();
                        case 48:
                            var1 = var2;
                        case 51:
                            return var1;
                        case 53:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'getVideoStats';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun31691: for (var _fun31691_ip = 0;;) switch (_fun31691_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31691_ip = 41;
                                continue _fun31691
                            }
                        case 9:
                            var1 = _closure1_slot23;
                            var3 = var1[var2];
                            var2 = var0 != var3;
                            var1 = null;
                            if (!var2) {
                                _fun31691_ip = 39;
                                continue _fun31691
                            }
                        case 29:
                            var2 = var3.getVideoStats;
                            var1 = var2.bind(var3)();
                        case 39:
                            return var1;
                        case 41:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'getHostname';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun31692: for (var _fun31692_ip = 0;;) switch (_fun31692_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun31692_ip = 58;
                                continue _fun31692
                            }
                        case 9:
                            var0 = _closure1_slot23;
                            var1 = var0[var1];
                            var2 = var4 != var1;
                            var3 = '';
                            var0 = var3;
                            if (!var2) {
                                _fun31692_ip = 56;
                                continue _fun31692
                            }
                        case 34:
                            var2 = var1.hostname;
                            var2 = var4 != var2;
                            var0 = var3;
                            if (!var2) {
                                _fun31692_ip = 56;
                                continue _fun31692
                            }
                        case 50:
                            var0 = var1.hostname;
                        case 56:
                            return var0;
                        case 58:
                            var0 = '';
                            return var0;
                    }
                };
                var4.value = var6;
                var0[8] = var4;
                var4 = {};
                var6 = 'getRegion';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun31693: for (var _fun31693_ip = 0;;) switch (_fun31693_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31693_ip = 41;
                                continue _fun31693
                            }
                        case 9:
                            var1 = _closure1_slot23;
                            var3 = var1[var2];
                            var2 = var0 != var3;
                            var1 = null;
                            if (!var2) {
                                _fun31693_ip = 39;
                                continue _fun31693
                            }
                        case 29:
                            var2 = var3.getRegion;
                            var1 = var2.bind(var3)();
                        case 39:
                            return var1;
                        case 41:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[9] = var4;
                var4 = {};
                var6 = 'getMaxViewers';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun31694: for (var _fun31694_ip = 0;;) switch (_fun31694_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31694_ip = 41;
                                continue _fun31694
                            }
                        case 9:
                            var1 = _closure1_slot23;
                            var3 = var1[var2];
                            var2 = var0 != var3;
                            var1 = null;
                            if (!var2) {
                                _fun31694_ip = 39;
                                continue _fun31694
                            }
                        case 29:
                            var2 = var3.getMaxViewers;
                            var1 = var2.bind(var3)();
                        case 39:
                            return var1;
                        case 41:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[10] = var4;
                var4 = {};
                var6 = 'getStreamSourceId';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = _closure1_slot19;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var4.value = var6;
                var0[11] = var4;
                var4 = {};
                var6 = 'getLastNonZeroRemoteVideoSinkWantsTime';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = _closure1_slot21;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var4.value = var6;
                var0[12] = var4;
                var4 = {};
                var6 = 'getUserIds';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun31697: for (var _fun31697_ip = 0;;) switch (_fun31697_ip) {
                        case 0:
                            var1 = _closure1_slot23;
                            var0 = arg0;
                            var2 = var1[var0];
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun31697_ip = 35;
                                continue _fun31697
                            }
                        case 25:
                            var1 = var2.getUserIds;
                            var0 = var1.bind(var2)();
                        case 35:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[13] = var4;
                var4 = {};
                var6 = 'isUserConnected';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun31698: for (var _fun31698_ip = 0;;) switch (_fun31698_ip) {
                        case 0:
                            var1 = _closure1_slot23;
                            var0 = arg0;
                            var3 = var1[var0];
                            var0 = null;
                            var1 = var0 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun31698_ip = 39;
                                continue _fun31698
                            }
                        case 25:
                            var2 = var3.getIsUserConnected;
                            var1 = arg1;
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[14] = var4;
                var4 = {};
                var6 = 'getSecureFramesState';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun31699: for (var _fun31699_ip = 0;;) switch (_fun31699_ip) {
                        case 0:
                            var1 = _closure1_slot23;
                            var0 = arg0;
                            var2 = var1[var0];
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun31699_ip = 35;
                                continue _fun31699
                            }
                        case 25:
                            var1 = var2.getSecureFramesState;
                            var0 = var1.bind(var2)();
                        case 35:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[15] = var4;
                var4 = {};
                var6 = 'getSecureFramesRosterMapEntry';
                var4.key = var6;
                var5 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun31700: for (var _fun31700_ip = 0;;) switch (_fun31700_ip) {
                        case 0:
                            var1 = _closure1_slot23;
                            var0 = arg0;
                            var4 = var1[var0];
                            var1 = null;
                            var2 = var1 == var4;
                            var3 = undefined;
                            if (var2) {
                                _fun31700_ip = 35;
                                continue _fun31700
                            }
                        case 25:
                            var2 = var4.getSecureFramesRosterMap;
                            var3 = var2.bind(var4)();
                        case 35:
                            var1 = var1 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun31700_ip = 57;
                                continue _fun31700
                            }
                        case 44:
                            var2 = var3.get;
                            var1 = arg1;
                            var0 = var2.bind(var3)(var1);
                        case 57:
                            return var0;
                    }
                };
                var4.value = var5;
                var0[16] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var7 = var1.bind(var0)(var7);
            var1 = 'StreamRTCConnectionStore';
            var7.displayName = var1;
            var1 = 17;
            var1 = var5[var1];
            var6 = var6.bind(var0)(var1);
            var1 = var3.isSupported;
            var1 = var1.bind(var3)();
            if (var1) {
                _fun31674_ip = 425;
                continue _fun31674
            }
        case 418:
            var1 = {};
            _fun31674_ip = 594;
            continue _fun31674;
        case 425:
            var3 = {};
            var10 = function(arg0) { // Original name: handleConnectionOpen, environment: var8
                var0 = arg0;
                var1 = var0.sessionId;
                var _closure1_slot3 = var1;
                var1 = _closure1_slot25;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var3.CONNECTION_OPEN = var10;
            var10 = function() { // Original name: handleConnectionClosed, environment: var8
                var1 = null;
                _closure1_slot3 = var1;
                var1 = _closure1_slot25;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var3.CONNECTION_CLOSED = var10;
            var3.RTC_CONNECTION_STATE = var9;
            var3.RTC_CONNECTION_PING = var9;
            var3.RTC_CONNECTION_LOSS_RATE = var9;
            var10 = function(arg0) { // Original name: handleRtcConnectionUpdateId, environment: var8
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.some;
                var1 = _closure1_slot23;
                var0 = function(arg0) { // Environment: var0
                    var0 = _closure2_slot0;
                    var1 = var0.connection;
                    var0 = arg0;
                    var0 = var0 === var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var3.RTC_CONNECTION_UPDATE_ID = var10;
            var3.RTC_CONNECTION_SECURE_FRAMES_UPDATE = var9;
            var9 = function(arg0) { // Original name: handleRtcConnectionRemoteVideoSinkWants, environment: var8
                _fun31705: for (var _fun31705_ip = 0;;) switch (_fun31705_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.context;
                        var6 = var0.wants;
                        var8 = var0.userId;
                        var10 = var0.guildId;
                        var9 = var0.channelId;
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 15;
                        var0 = var4[var0];
                        var7 = undefined;
                        var5 = var2.bind(var7)(var0);
                        var4 = var5.encodeStreamKey;
                        var0 = {};
                        var2 = null;
                        if (!(var2 != var10)) {
                            _fun31705_ip = 80;
                            continue _fun31705
                        }
                    case 68:
                        var11 = _closure1_slot15;
                        var11 = var11.GUILD;
                        _fun31705_ip = 90;
                        continue _fun31705;
                    case 80:
                        var12 = _closure1_slot15;
                        var11 = var12.CALL;
                    case 90:
                        var0.streamType = var11;
                        var0.guildId = var10;
                        var0.channelId = var9;
                        var0.ownerId = var8;
                        var4 = var4.bind(var5)(var0);
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 18;
                        var0 = var8[var0];
                        var0 = var5.bind(var7)(var0);
                        var0 = var0.MediaEngineContextTypes;
                        var0 = var0.STREAM;
                        var0 = var1 === var0;
                        if (!var0) {
                            _fun31705_ip = 164;
                            continue _fun31705
                        }
                    case 152:
                        var1 = _closure1_slot23;
                        var1 = var1[var4];
                        var0 = var2 != var1;
                    case 164:
                        if (!var0) {
                            _fun31705_ip = 241;
                            continue _fun31705
                        }
                    case 167:
                        var2 = global;
                        var5 = var2.Object;
                        var1 = var5.entries;
                        var6 = var1.bind(var5)(var6);
                        var5 = var6.some;
                        var1 = function(arg0) { // Environment: var1
                            _fun31706: for (var _fun31706_ip = 0;;) switch (_fun31706_ip) {
                                case 0:
                                    var4 = arg0;
                                    var0 = var4[Symbol.iterator];
                                    var4 = var0().next;
                                    var2 = var4().value;
                                    var1 = var0;
                                    var6 = undefined;
                                    var3 = var1 === var6;
                                    var1 = undefined;
                                    if (var3) {
                                        _fun31706_ip = 27;
                                        continue _fun31706
                                    }
                                case 24:
                                    var1 = var2;
                                case 27:
                                    var2 = undefined;
                                    if (var3) {
                                        _fun31706_ip = 57;
                                        continue _fun31706
                                    }
                                case 32:
                                    var5 = var4().value;
                                    var4 = var0;
                                    var4 = var4 === var6;
                                    var2 = undefined;
                                    var3 = var4;
                                    if (var4) {
                                        _fun31706_ip = 57;
                                        continue _fun31706
                                    }
                                case 51:
                                    var2 = var5;
                                    var3 = var4;
                                case 57:
                                    if (var3) {
                                        _fun31706_ip = 63;
                                        continue _fun31706
                                    }
                                case 60:
                                    var0.return();
                                case 63:
                                    var0 = 'any';
                                    var0 = var0 !== var1;
                                    if (!var0) {
                                        _fun31706_ip = 80;
                                        continue _fun31706
                                    }
                                case 74:
                                    var1 = 0;
                                    var0 = var1 !== var2;
                                case 80:
                                    return var0;
                            }
                        };
                        var1 = var5.bind(var6)(var1);
                        var5 = !var1;
                        var1 = !var5;
                        if (var5) {
                            _fun31705_ip = 238;
                            continue _fun31705
                        }
                    case 213:
                        var3 = _closure1_slot21;
                        var5 = var2.performance;
                        var2 = var5.now;
                        var2 = var2.bind(var5)();
                        var3[var4] = var2;
                        var1 = undefined;
                    case 238:
                        var0 = var1;
                    case 241:
                        return var0;
                }
            };
            var3.RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS = var9;
            var9 = function(arg0) { // Original name: handleStreamStart, environment: var8
                _fun31707: for (var _fun31707_ip = 0;;) switch (_fun31707_ip) {
                    case 0:
                        var0 = arg0;
                        var15 = var0.streamType;
                        var14 = var0.guildId;
                        var13 = var0.channelId;
                        var12 = var0.appContext;
                        var _closure2_slot0 = var12;
                        var7 = var0.pid;
                        var6 = var0.sourceId;
                        var5 = var0.sourcePid;
                        var1 = var0.nativePickerStyleUsed;
                        var _closure2_slot1 = var1;
                        var3 = var0.goLiveModalDurationMs;
                        var11 = var0.analyticsLocations;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var0 = 15;
                        var2 = var10[var0];
                        var0 = undefined;
                        var9 = var8.bind(var0)(var2);
                        var8 = var9.encodeStreamKey;
                        var2 = {};
                        var2.streamType = var15;
                        var2.guildId = var14;
                        var2.channelId = var13;
                        var14 = _closure1_slot10;
                        var13 = var14.getId;
                        var13 = var13.bind(var14)();
                        var2.ownerId = var13;
                        var2 = var8.bind(var9)(var2);
                        var9 = _closure1_slot16;
                        var8 = {};
                        var8.appContext = var12;
                        var8.analyticsLocations = var11;
                        var9[var2] = var8;
                        var9 = _closure1_slot1;
                        var8 = 14;
                        var8 = var10[var8];
                        var10 = var9.bind(var0)(var8);
                        var9 = var10.forEach;
                        var8 = _closure1_slot23;
                        var4 = function(arg0) { // Environment: var4
                            _fun31708: for (var _fun31708_ip = 0;;) switch (_fun31708_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.analyticsContext;
                                    var0 = var0.isOwner;
                                    var4 = var1.setActionContext;
                                    var3 = _closure2_slot0;
                                    var3 = var4.bind(var1)(var3);
                                    var3 = var1.setNativePickerStyleUsed;
                                    var2 = _closure2_slot1;
                                    var2 = var3.bind(var1)(var2);
                                    if (!var0) {
                                        _fun31708_ip = 65;
                                        continue _fun31708
                                    }
                                case 53:
                                    var0 = var1.trackStart;
                                    var0 = var0.bind(var1)();
                                case 65:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var9.bind(var10)(var8, var4);
                        var4 = null;
                        if (!(var4 == var7)) {
                            _fun31707_ip = 206;
                            continue _fun31707
                        }
                    case 203:
                        var7 = var5;
                    case 206:
                        var5 = _closure1_slot19;
                        var5[var2] = var6;
                        var5 = _closure1_slot18;
                        var5[var2] = var7;
                        if (!(var4 == var7)) {
                            _fun31707_ip = 263;
                            continue _fun31707
                        }
                    case 226:
                        var5 = _closure1_slot23;
                        var5 = var5[var2];
                        if (!(var4 != var5)) {
                            _fun31707_ip = 391;
                            continue _fun31707
                        }
                    case 241:
                        var6 = var5.analyticsContext;
                        var5 = var6.updateStreamApplication;
                        var5 = var5.bind(var6)(var4);
                        _fun31707_ip = 391;
                        continue _fun31707;
                    case 263:
                        var6 = _closure1_slot9;
                        var5 = var6.getGameForPID;
                        var7 = var5.bind(var6)(var7);
                        if (!(var4 != var7)) {
                            _fun31707_ip = 354;
                            continue _fun31707
                        }
                    case 282:
                        var6 = _closure1_slot17;
                        var5 = {};
                        var8 = var7.name;
                        var5.name = var8;
                        var8 = var7.id;
                        var5.id = var8;
                        var8 = var7.exeName;
                        var5.exe = var8;
                        var8 = var7.distributor;
                        var5.distributor = var8;
                        var8 = var7.sku;
                        var5.sku = var8;
                        var7 = var7.gameMetadata;
                        var5.gameMetadata = var7;
                        var6[var2] = var5;
                    case 354:
                        var5 = _closure1_slot23;
                        var5 = var5[var2];
                        if (!(var4 != var5)) {
                            _fun31707_ip = 391;
                            continue _fun31707
                        }
                    case 366:
                        var7 = var5.analyticsContext;
                        var6 = var7.updateStreamApplication;
                        var5 = _closure1_slot17;
                        var5 = var5[var2];
                        var5 = var6.bind(var7)(var5);
                    case 391:
                        if (!(var4 == var3)) {
                            _fun31707_ip = 405;
                            continue _fun31707
                        }
                    case 395:
                        var4 = _closure1_slot20;
                        var4 = delete var4[var2];
                        _fun31707_ip = 413;
                        continue _fun31707;
                    case 405:
                        var1 = _closure1_slot20;
                        var1[var2] = var3;
                    case 413:
                        return var0;
                }
            };
            var3.STREAM_START = var9;
            var9 = function(arg0) { // Original name: handleStreamStop, environment: var8
                var1 = arg0;
                var0 = var1.appContext;
                var _closure2_slot0 = var0;
                var2 = var1.streamKey;
                var5 = _closure1_slot16;
                var4 = {};
                var4.appContext = var0;
                var0 = undefined;
                var4.analyticsLocations = var0;
                var5[var2] = var4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 14;
                var4 = var6[var4];
                var6 = var5.bind(var0)(var4);
                var5 = var6.forEach;
                var4 = _closure1_slot23;
                var3 = function(arg0) { // Environment: var3
                    _fun31710: for (var _fun31710_ip = 0;;) switch (_fun31710_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.analyticsContext;
                            var0 = var0.isOwner;
                            var3 = var1.setActionContext;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var1)(var2);
                            if (!var0) {
                                _fun31710_ip = 48;
                                continue _fun31710
                            }
                        case 36:
                            var0 = var1.trackEnd;
                            var0 = var0.bind(var1)();
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var4, var3);
                var3 = _closure1_slot19;
                var4 = null;
                var3[var2] = var4;
                var3 = _closure1_slot18;
                var3[var2] = var4;
                var1 = _closure1_slot20;
                var1 = delete var1[var2];
                return var0;
            };
            var3.STREAM_STOP = var9;
            var9 = function(arg0) { // Original name: handleStreamCreate, environment: var8
                _fun31711: for (var _fun31711_ip = 0;;) switch (_fun31711_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.streamKey;
                        var8 = var0.rtcServerId;
                        var7 = var0.rtcChannelId;
                        var4 = var0.region;
                        var10 = var0.viewerIds;
                        var0 = _closure1_slot23;
                        var5 = var0[var3];
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 15;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var6.bind(var0)(var2);
                        var2 = var6.decodeStreamKey;
                        var13 = var2.bind(var6)(var3);
                        var11 = null;
                        var2 = var11 == var5;
                        if (!var2) {
                            _fun31711_ip = 90;
                            continue _fun31711
                        }
                    case 86:
                        var2 = var11 != var8;
                    case 90:
                        if (!var2) {
                            _fun31711_ip = 510;
                            continue _fun31711
                        }
                    case 96:
                        var2 = _closure1_slot18;
                        var2 = var2[var3];
                        if (!(var11 == var2)) {
                            _fun31711_ip = 116;
                            continue _fun31711
                        }
                    case 108:
                        var2 = _closure1_slot17;
                        var2[var3] = var11;
                    case 116:
                        var2 = _closure1_slot17;
                        var2 = var2[var3];
                        var2 = var11 == var2;
                        if (!var2) {
                            _fun31711_ip = 143;
                            continue _fun31711
                        }
                    case 131:
                        var6 = _closure1_slot19;
                        var6 = var6[var3];
                        var2 = var11 == var6;
                    case 143:
                        if (!var2) {
                            _fun31711_ip = 190;
                            continue _fun31711
                        }
                    case 146:
                        var6 = _closure1_slot17;
                        var9 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 16;
                        var2 = var12[var2];
                        var12 = var9.bind(var0)(var2);
                        var9 = var12.getStreamerApplication;
                        var2 = _closure1_slot12;
                        var2 = var9.bind(var12)(var13, var2);
                        var6[var3] = var2;
                    case 190:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var9 = 13;
                        var2 = var2[var9];
                        var2 = var6.bind(var0)(var2);
                        var6 = var2.StreamRTCAnalyticsContext;
                        var2 = {};
                        var2.streamRegion = var4;
                        var4 = _closure1_slot17;
                        var4 = var4[var3];
                        var2.streamApplication = var4;
                        var12 = _closure1_slot26;
                        var4 = _closure1_slot19;
                        var4 = var4[var3];
                        var4 = var12.bind(var0)(var4);
                        var2.streamSourceType = var4;
                        var4 = _closure1_slot16;
                        var12 = var4[var3];
                        var13 = var11 == var12;
                        var4 = undefined;
                        if (var13) {
                            _fun31711_ip = 281;
                            continue _fun31711
                        }
                    case 275:
                        var4 = var12.appContext;
                    case 281:
                        var2.actionContext = var4;
                        var12 = var11 != var10;
                        var4 = 0;
                        if (!var12) {
                            _fun31711_ip = 300;
                            continue _fun31711
                        }
                    case 295:
                        var4 = var10.length;
                    case 300:
                        var2.numViewers = var4;
                        var4 = _closure1_slot20;
                        var4 = var4[var3];
                        var2.goLiveModalDurationMs = var4;
                        var4 = _closure1_slot16;
                        var10 = var4[var3];
                        var12 = var11 == var10;
                        var4 = undefined;
                        if (var12) {
                            _fun31711_ip = 341;
                            continue _fun31711
                        }
                    case 335:
                        var4 = var10.analyticsLocations;
                    case 341:
                        var2.analyticsLocations = var4;
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var16 = var4;
                        var15 = var2;
                        var2 = new var16[var6](var15, var14);
                        var4 = var2 instanceof Object ? var2 : var4;
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var10 = 12;
                        var10 = var2[var10];
                        var12 = var6.bind(var0)(var10);
                        var10 = _closure1_slot3;
                        var11 = var11 != var10;
                        var10 = 'Creating RTCConnection without session.';
                        var10 = var12.bind(var0)(var11, var10);
                        var2 = var2[var9];
                        var6 = var6.bind(var0)(var2);
                        var2 = {};
                        var9 = _closure1_slot3;
                        var2.sessionId = var9;
                        var2.streamKey = var3;
                        var2.serverId = var8;
                        var2.channelId = var7;
                        var7 = _closure1_slot22;
                        var2.initialLayout = var7;
                        var2.analyticsContext = var4;
                        var7 = _closure1_slot13;
                        var4 = var7.getMediaSessionId;
                        var4 = var4.bind(var7)();
                        var2.parentMediaSessionId = var4;
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var16 = var4;
                        var15 = var2;
                        var2 = new var16[var6](var15, var14);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var4 = _closure1_slot23;
                        var4[var3] = var2;
                        var5 = var2;
                    case 510:
                        var2 = _closure1_slot21;
                        var2 = delete var2[var3];
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 17;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
                        var1.type = var4;
                        var4 = var5.getMediaEngineConnectionId;
                        var4 = var4.bind(var5)();
                        var1.mediaEngineConnectionId = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var3.STREAM_CREATE = var9;
            var9 = function(arg0) { // Original name: handleStreamServerUpdate, environment: var8
                _fun31712: for (var _fun31712_ip = 0;;) switch (_fun31712_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = _closure1_slot23;
                        var1 = var0.streamKey;
                        var3 = var2[var1];
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun31712_ip = 54;
                            continue _fun31712
                        }
                    case 26:
                        var2 = var3.connect;
                        var1 = var0.endpoint;
                        var0 = var0.token;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    case 54:
                        var0 = false;
                        return var0;
                }
            };
            var3.STREAM_SERVER_UPDATE = var9;
            var9 = function(arg0) { // Original name: handleStreamUpdate, environment: var8
                _fun31713: for (var _fun31713_ip = 0;;) switch (_fun31713_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.streamKey;
                        var0 = var1.viewerIds;
                        var2 = var1.paused;
                        var1 = _closure1_slot23;
                        var1 = var1[var3];
                        var3 = null;
                        if (!(var3 != var1)) {
                            _fun31713_ip = 83;
                            continue _fun31713
                        }
                    case 38:
                        if (!(var3 != var0)) {
                            _fun31713_ip = 66;
                            continue _fun31713
                        }
                    case 42:
                        var4 = var1.analyticsContext;
                        var3 = var4.trackViewerCount;
                        var0 = var0.length;
                        var0 = var3.bind(var4)(var0);
                    case 66:
                        var0 = var1.streamUpdate;
                        var0 = var0.bind(var1)(var2);
                        var0 = undefined;
                        return var0;
                    case 83:
                        var0 = false;
                        return var0;
                }
            };
            var3.STREAM_UPDATE = var9;
            var9 = function(arg0) { // Original name: handleStreamDelete, environment: var8
                _fun31714: for (var _fun31714_ip = 0;;) switch (_fun31714_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.streamKey;
                        var0 = _closure1_slot23;
                        var5 = var0[var2];
                        var0 = null;
                        if (!(var0 != var5)) {
                            _fun31714_ip = 112;
                            continue _fun31714
                        }
                    case 26:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 17;
                        var3 = var3[var0];
                        var0 = undefined;
                        var6 = var4.bind(var0)(var3);
                        var4 = var6.dispatch;
                        var3 = {};
                        var7 = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
                        var3.type = var7;
                        var7 = var5.getMediaEngineConnectionId;
                        var7 = var7.bind(var5)();
                        var3.mediaEngineConnectionId = var7;
                        var3 = var4.bind(var6)(var3);
                        var4 = var5.destroy;
                        var3 = 'stream-end';
                        var3 = var4.bind(var5)(var3);
                        var1 = _closure1_slot23;
                        var1 = delete var1[var2];
                        return var0;
                    case 112:
                        var0 = false;
                        return var0;
                }
            };
            var3.STREAM_DELETE = var9;
            var9 = function(arg0) { // Original name: handleMediaEngineConnectionStats, environment: var8
                var0 = arg0;
                var0 = var0.connectionStats;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 14;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.forEach;
                var2 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = var2.updateStats;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var3.MEDIA_ENGINE_CONNECTION_STATS = var9;
            var9 = function(arg0) { // Original name: handleLayoutUpdate, environment: var8
                var1 = arg0;
                var2 = var1.layout;
                var _closure2_slot0 = var2;
                _closure1_slot22 = var2;
                var2 = global;
                var3 = var2.Object;
                var2 = var3.values;
                var1 = _closure1_slot23;
                var2 = var2.bind(var3)(var1);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.layoutChange;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var3.STREAM_LAYOUT_UPDATE = var9;
            var9 = function(arg0) { // Original name: handleSimulcastDebugOverrideChanged, environment: var8
                var0 = arg0;
                var2 = var0.userId;
                var _closure2_slot0 = var2;
                var2 = var0.context;
                var _closure2_slot1 = var2;
                var0 = var0.quality;
                var _closure2_slot2 = var0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 14;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.forEach;
                var2 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    var4 = arg0;
                    var3 = var4.setSimulcastDebugOverride;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var3.RTC_DEBUG_SET_SIMULCAST_OVERRIDE = var9;
            var8 = function(arg0) { // Original name: handleVideoSizeUpdate, environment: var8
                var0 = arg0;
                var2 = var0.streamId;
                var _closure2_slot0 = var2;
                var2 = var0.dimensions;
                var _closure2_slot1 = var2;
                var0 = var0.zoom;
                var _closure2_slot2 = var0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 14;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.forEach;
                var2 = _closure1_slot23;
                var1 = function(arg0) { // Environment: var1
                    _fun31722: for (var _fun31722_ip = 0;;) switch (_fun31722_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun31722_ip = 37;
                                continue _fun31722
                            }
                        case 9:
                            var3 = var4.setVideoSize;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var3.VIDEO_SIZE_UPDATE = var8;
            var1 = var3;
        case 594:
            var3 = var7.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var7
                }
            });
            var14 = var3;
            var13 = var6;
            var12 = var1;
            var1 = new var14[var7](var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 22;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'stores/StreamRTCConnectionStore.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3442, 1216, 3435, 3569, 3477, 660, 3465, 44, 3582, 22, 3464, 6503, 806, 3592, 478, 12255, 566, 2]);