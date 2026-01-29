// modules/voice_panel/native/controller/usePanelOpenState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelModes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ComponentActions;
    var _closure1_slot7 = var6;
    var3 = var3.Routes;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controller/usePanelOpenState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: usePanelOpenState, environment: var1
        var6 = arg0;
        var9 = arg1;
        var8 = arg2;
        var3 = arg3;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var9;
        var _closure2_slot2 = var8;
        var _closure2_slot3 = var3;
        var12 = function() { // Original name: doCloseChannel, environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getState;
            var2 = var0.bind(var1)();
            var1 = var2.closeChannel;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var _closure2_slot4 = var12;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var13 = 5;
        var4 = var15[var13];
        var0 = undefined;
        var10 = var14.bind(var0)(var4);
        var7 = var10.useAnimatedReaction;
        var5 = function() { // Original name: v, environment: var1
            var0 = {};
            var2 = _closure2_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.connected = var1;
            return var0;
        };
        var4 = {};
        var4.connected = var3;
        var5.__closure = var4;
        var4 = 8350408810765.0;
        var5.__workletHash = var4;
        var4 = _closure1_slot9;
        var5.__initData = var4;
        var4 = function(arg0, arg1) { // Original name: O, environment: var1
            _fun111185: for (var _fun111185_ip = 0;;) switch (_fun111185_ip) {
                case 0:
                    var1 = arg1;
                    var0 = arg0;
                    var2 = var0.connected;
                    var0 = null;
                    var4 = var0 == var1;
                    var0 = undefined;
                    var3 = undefined;
                    if (var4) {
                        _fun111185_ip = 31;
                        continue _fun111185
                    }
                case 25:
                    var3 = var1.connected;
                case 31:
                    var1 = true;
                    var1 = var1 === var3;
                    if (!var1) {
                        _fun111185_ip = 43;
                        continue _fun111185
                    }
                case 40:
                    var1 = !var2;
                case 43:
                    if (!var1) {
                        _fun111185_ip = 90;
                        continue _fun111185
                    }
                case 46:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.runOnJS;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.bind(var0)();
                case 90:
                    return var0;
            }
        };
        var11 = {};
        var13 = var15[var13];
        var13 = var14.bind(var0)(var13);
        var13 = var13.runOnJS;
        var11.runOnJS = var13;
        var11.doCloseChannel = var12;
        var4.__closure = var11;
        var11 = 9166012598595.0;
        var4.__workletHash = var11;
        var11 = _closure1_slot10;
        var4.__initData = var11;
        var4 = var7.bind(var10)(var5, var4);
        var4 = _closure1_slot4;
        var7 = var4.useEffect;
        var5 = new Array(4);
        var5[0] = var6;
        var5[1] = var9;
        var5[2] = var8;
        var5[3] = var3;
        var3 = function() { // Environment: var1
            var10 = function(arg0) { // Original name: componentActionOpen, environment: var0
                _fun111187: for (var _fun111187_ip = 0;;) switch (_fun111187_ip) {
                    case 0:
                        var2 = _closure2_slot0;
                        var1 = arg0;
                        var1 = var1.channelId;
                        var1 = var2 === var1;
                        if (!var1) {
                            _fun111187_ip = 52;
                            continue _fun111187
                        }
                    case 22:
                        var3 = _closure2_slot1;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot6;
                        var2 = var2.PANEL;
                        var1 = var3 !== var2;
                    case 52:
                        if (!var1) {
                            _fun111187_ip = 79;
                            continue _fun111187
                        }
                    case 55:
                        var2 = _closure2_slot2;
                        var0 = _closure1_slot6;
                        var1 = var0.PANEL;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 79:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot0 = var10;
            var4 = function() { // Original name: componentActionClose, environment: var0
                _fun111188: for (var _fun111188_ip = 0;;) switch (_fun111188_ip) {
                    case 0:
                        var2 = _closure2_slot3;
                        var0 = var2.get;
                        var2 = var0.bind(var2)();
                        if (var2) {
                            _fun111188_ip = 53;
                            continue _fun111188
                        }
                    case 22:
                        var3 = _closure1_slot5;
                        var2 = var3.getState;
                        var4 = var2.bind(var3)();
                        var3 = var4.closeChannel;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        _fun111188_ip = 101;
                        continue _fun111188;
                    case 53:
                        var3 = _closure2_slot1;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot6;
                        var2 = var2.PIP;
                        if (!(var3 !== var2)) {
                            _fun111188_ip = 101;
                            continue _fun111188
                        }
                    case 80:
                        var2 = _closure2_slot2;
                        var0 = _closure1_slot6;
                        var1 = var0.PIP;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 101:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot1 = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var7 = var6[var2];
            var3 = undefined;
            var7 = var5.bind(var3)(var7);
            var9 = var7.ComponentDispatch;
            var8 = var9.subscribe;
            var1 = _closure1_slot7;
            var7 = var1.VOICE_PANEL_OPEN;
            var7 = var8.bind(var9)(var7, var10);
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var3 = var2.ComponentDispatch;
            var2 = var3.subscribe;
            var1 = var1.VOICE_PANEL_CLOSE;
            var1 = var2.bind(var3)(var1, var4);
            var0 = function() { // Environment: var0
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var2 = var5[var3];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var9 = var2.ComponentDispatch;
                var8 = var9.unsubscribe;
                var2 = _closure1_slot7;
                var7 = var2.VOICE_PANEL_OPEN;
                var6 = _closure3_slot0;
                var6 = var8.bind(var9)(var7, var6);
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.unsubscribe;
                var2 = var2.VOICE_PANEL_CLOSE;
                var1 = _closure3_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            return var0;
        };
        var3 = var7.bind(var4)(var3, var5);
        var5 = var4.useState;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.getHistory;
            var0 = var0.bind(var1)();
            var0 = var0.location;
            var0 = var0.pathname;
            return var0;
        };
        var5 = var5.bind(var4)(var3);
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3.bind(var0)(var5, var2);
        var2 = 0;
        var5 = var3[var2];
        var _closure2_slot5 = var5;
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot6 = var2;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.addRouteChangeListener;
            var1 = function(arg0) { // Environment: var0
                _fun111192: for (var _fun111192_ip = 0;;) switch (_fun111192_ip) {
                    case 0:
                        var6 = arg0;
                        var1 = _closure2_slot5;
                        var0 = var6.pathname;
                        if (!(var1 !== var0)) {
                            _fun111192_ip = 241;
                            continue _fun111192
                        }
                    case 23:
                        var2 = _closure2_slot6;
                        var0 = _closure2_slot5;
                        var1 = undefined;
                        var0 = var2.bind(var1)(var0);
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 8;
                        var2 = var7[var2];
                        var9 = var5.bind(var1)(var2);
                        var8 = var9.matchPath;
                        var4 = var6.pathname;
                        var2 = {};
                        var13 = _closure1_slot8;
                        var12 = var13.CHANNEL;
                        var10 = 9;
                        var11 = var7[var10];
                        var11 = var5.bind(var1)(var11);
                        var14 = var11.RouteParam;
                        var11 = var14.guildId;
                        var11 = var11.bind(var14)();
                        var10 = var7[var10];
                        var10 = var5.bind(var1)(var10);
                        var14 = var10.RouteParam;
                        var10 = var14.channelId;
                        var10 = var10.bind(var14)();
                        var10 = var12.bind(var13)(var11, var10);
                        var2.path = var10;
                        var4 = var8.bind(var9)(var4, var2);
                        var2 = 10;
                        var2 = var7[var2];
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.extractParamsFromVoiceModalRoute;
                        var2 = var2.bind(var5)(var6);
                        var5 = var2.voiceChannelId;
                        var2 = null;
                        if (!(var2 == var5)) {
                            _fun111192_ip = 241;
                            continue _fun111192
                        }
                    case 188:
                        var2 = var2 != var4;
                        if (!var2) {
                            _fun111192_ip = 214;
                            continue _fun111192
                        }
                    case 195:
                        var4 = var4.params;
                        var4 = var4.channelId;
                        var3 = _closure2_slot0;
                        var2 = var4 === var3;
                    case 214:
                        if (var2) {
                            _fun111192_ip = 241;
                            continue _fun111192
                        }
                    case 217:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 11;
                        var0 = var3[var0];
                        var0 = var2.bind(var1)(var0);
                        var0 = var0.bind(var1)();
                    case 241:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.removeRouteChangeListener;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 7837, 11816, 660, 3677, 1229, 12856, 3177, 3187, 11885, 7899, 2]);