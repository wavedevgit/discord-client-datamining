// modules/voice_calls/native/CallStateHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var4;
    var1 = var1.RTCConnectionStates;
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ParticipantTypes;
    var _closure1_slot9 = var1;
    var1 = {};
    var4 = {};
    var7 = false;
    var4.initialized = var7;
    var4.callId = var0;
    var11 = var1;
    var10 = var4;
    var4 = copyDataProperties(var11, var10);
    var _closure1_slot10 = var1;
    var1 = {};
    var4 = 'disconneted';
    var1.DISCONNECTED = var4;
    var4 = 'disconnecting';
    var1.DISCONNECTING = var4;
    var4 = 'connecting';
    var1.CONNECTING = var4;
    var4 = 'ringing';
    var1.RINGING = var4;
    var4 = 'connected';
    var1.CONNECTED = var4;
    var _closure1_slot11 = var1;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/CallStateHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        _fun69615: for (var _fun69615_ip = 0;;) switch (_fun69615_ip) {
            case 0:
                var10 = arguments[0];
                var6 = arguments[1];
                var7 = arguments[2];
                var9 = undefined;
                if (!(var10 === var9)) {
                    _fun69615_ip = 24;
                    continue _fun69615
                }
            case 17:
                var10 = _closure1_slot7;
            case 24:
                var _closure2_slot0 = var10;
                if (!(var6 === var9)) {
                    _fun69615_ip = 34;
                    continue _fun69615
                }
            case 32:
                var6 = false;
            case 34:
                if (!(var7 === var9)) {
                    _fun69615_ip = 40;
                    continue _fun69615
                }
            case 38:
                var7 = false;
            case 40:
                var _closure2_slot1 = var9;
                var _closure2_slot2 = var9;
                var _closure2_slot3 = var9;
                var3 = _closure1_slot4;
                var2 = var3.getId;
                var2 = var2.bind(var3)();
                _closure2_slot1 = var2;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 6;
                var3 = var13[var4];
                var12 = var8.bind(var9)(var3);
                var11 = var12.useStateFromStoresArray;
                var3 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = new Array(2);
                var3[0] = var10;
                var3[1] = var2;
                var2 = function() { // Environment: var1
                    _fun69616: for (var _fun69616_ip = 0;;) switch (_fun69616_ip) {
                        case 0:
                            var3 = _closure1_slot5;
                            var2 = var3.getCall;
                            var0 = _closure2_slot0;
                            var2 = var2.bind(var3)(var0);
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun69616_ip = 37;
                                continue _fun69616
                            }
                        case 31:
                            var0 = new Array(0);
                            _fun69616_ip = 62;
                            continue _fun69616;
                        case 37:
                            var4 = var2.ringing;
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var2
                                var1 = _closure2_slot1;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2);
                        case 62:
                            var2 = _closure1_slot10;
                            var1 = var2.initialized;
                            if (var1) {
                                _fun69616_ip = 86;
                                continue _fun69616
                            }
                        case 75:
                            var4 = var0.length;
                            var3 = 0;
                            var1 = var4 > var3;
                        case 86:
                            var2.initialized = var1;
                            return var0;
                    }
                };
                var3 = var11.bind(var12)(var5, var2, var3);
                var5 = _closure1_slot3;
                var2 = var5.getParticipants;
                var11 = var2.bind(var5)(var10);
                var5 = var11.filter;
                var2 = function(arg0) { // Environment: var1
                    _fun69618: for (var _fun69618_ip = 0;;) switch (_fun69618_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = _closure1_slot9;
                            var0 = var0.ACTIVITY;
                            var0 = var2 !== var0;
                            if (!var0) {
                                _fun69618_ip = 49;
                                continue _fun69618
                            }
                        case 28:
                            var1 = var1.user;
                            var2 = var1.id;
                            var1 = _closure2_slot1;
                            var0 = var2 !== var1;
                        case 49:
                            return var0;
                    }
                };
                var5 = var5.bind(var11)(var2);
                var11 = _closure1_slot1;
                var2 = 7;
                var2 = var13[var2];
                var2 = var11.bind(var9)(var2);
                var11 = var2.bind(var9)();
                _closure2_slot2 = var11;
                var2 = var13[var4];
                var17 = var8.bind(var9)(var2);
                var16 = var17.useStateFromStores;
                var2 = _closure1_slot6;
                var15 = new Array(1);
                var15[0] = var2;
                var14 = var2.getRTCConnectionId;
                var12 = new Array(0);
                var12 = var16.bind(var17)(var15, var14, var12);
                _closure2_slot3 = var12;
                var4 = var13[var4];
                var9 = var8.bind(var9)(var4);
                var8 = var9.useStateFromStores;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = new Array(3);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var10;
                var1 = function() { // Environment: var1
                    _fun69619: for (var _fun69619_ip = 0;;) switch (_fun69619_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            var1 = var2 == var1;
                            var3 = undefined;
                            if (var1) {
                                _fun69619_ip = 27;
                                continue _fun69619
                            }
                        case 18:
                            var1 = _closure2_slot2;
                            var3 = var1.channelId;
                        case 27:
                            var1 = _closure2_slot0;
                            if (!(var3 !== var1)) {
                                _fun69619_ip = 164;
                                continue _fun69619
                            }
                        case 38:
                            var1 = _closure1_slot10;
                            var3 = var1.callId;
                            var1 = _closure2_slot3;
                            var1 = var2 != var1;
                            if (!var1) {
                                _fun69619_ip = 70;
                                continue _fun69619
                            }
                        case 62:
                            var2 = _closure2_slot3;
                            var1 = var3 === var2;
                        case 70:
                            if (var1) {
                                _fun69619_ip = 85;
                                continue _fun69619
                            }
                        case 73:
                            var2 = _closure1_slot10;
                            var1 = false;
                            var2.initialized = var1;
                        case 85:
                            var2 = _closure1_slot10;
                            var0 = _closure2_slot3;
                            var2.callId = var0;
                            var1 = _closure1_slot6;
                            var0 = var1.getState;
                            var0 = var0.bind(var1)();
                            var1 = var2.initialized;
                            if (var1) {
                                _fun69619_ip = 156;
                                continue _fun69619
                            }
                        case 122:
                            var3 = _closure1_slot8;
                            var3 = var3.DISCONNECTED;
                            var3 = var0 !== var3;
                            if (!var3) {
                                _fun69619_ip = 153;
                                continue _fun69619
                            }
                        case 139:
                            var4 = _closure1_slot8;
                            var4 = var4.RTC_DISCONNECTED;
                            var3 = var0 !== var4;
                        case 153:
                            var1 = var3;
                        case 156:
                            var2.initialized = var1;
                            return var0;
                        case 164:
                            var2 = _closure1_slot10;
                            var1 = true;
                            var2.initialized = var1;
                            var0 = _closure1_slot8;
                            var0 = var0.RTC_CONNECTED;
                            return var0;
                    }
                };
                var4 = var8.bind(var9)(var4, var1, var2);
                var2 = _closure1_slot10;
                var1 = var2.initialized;
                if (var1) {
                    _fun69615_ip = 308;
                    continue _fun69615
                }
            case 305:
                var1 = var7;
            case 308:
                var2.initialized = var1;
                var1 = _closure1_slot11;
                var2 = var1.CONNECTING;
                var1 = _closure1_slot10;
                var1 = var1.initialized;
                if (var6) {
                    _fun69615_ip = 429;
                    continue _fun69615
                }
            case 337:
                if (!var1) {
                    _fun69615_ip = 354;
                    continue _fun69615
                }
            case 340:
                var6 = _closure1_slot8;
                var6 = var6.DISCONNECTED;
                if (!(var4 !== var6)) {
                    _fun69615_ip = 417;
                    continue _fun69615
                }
            case 354:
                var7 = var3.length;
                var6 = 0;
                if (!(var7 > var6)) {
                    _fun69615_ip = 379;
                    continue _fun69615
                }
            case 365:
                var5 = var5.length;
                var3 = var3.length;
                if (!(var5 !== var3)) {
                    _fun69615_ip = 405;
                    continue _fun69615
                }
            case 379:
                var3 = _closure1_slot8;
                var3 = var3.RTC_CONNECTED;
                if (!(var4 === var3)) {
                    _fun69615_ip = 439;
                    continue _fun69615
                }
            case 393:
                var3 = _closure1_slot11;
                var2 = var3.CONNECTED;
                _fun69615_ip = 439;
                continue _fun69615;
            case 405:
                var3 = _closure1_slot11;
                var2 = var3.RINGING;
                _fun69615_ip = 439;
                continue _fun69615;
            case 417:
                var3 = _closure1_slot11;
                var2 = var3.DISCONNECTED;
                _fun69615_ip = 439;
                continue _fun69615;
            case 429:
                var0 = _closure1_slot11;
                var2 = var0.DISCONNECTING;
            case 439:
                var0 = {};
                var0.state = var2;
                var0.initialized = var1;
                return var0;
        }
    };
    var2.default = var3;
    var2.CallStates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3948, 1216, 3475, 3518, 660, 3523, 566, 8294, 2]);