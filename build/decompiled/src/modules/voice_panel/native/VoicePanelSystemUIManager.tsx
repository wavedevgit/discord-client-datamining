// modules/voice_panel/native/VoicePanelSystemUIManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelModes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var7 = var3.Fragment;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 'function VoicePanelSystemUIManagerTsx1(){const{focused,mode,controlsSpecs,windowDimensions}=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};}';
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function VoicePanelSystemUIManagerTsx2(props,previous){const{cheapWorkletShallowEqual,runOnJS,handleStateChange}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(handleStateChange)(props);}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: VoicePanelSystemUIManager, environment: var1
        _fun111261: for (var _fun111261_ip = 0;;) switch (_fun111261_ip) {
            case 0:
                var7 = _closure1_slot4;
                var2 = var7.useContext;
                var4 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 7;
                var1 = var14[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var2.bind(var7)(var1);
                var18 = var2.focused;
                var _closure2_slot0 = var18;
                var1 = var2.channelId;
                var _closure2_slot1 = var1;
                var17 = var2.mode;
                var _closure2_slot2 = var17;
                var16 = var2.controlsSpecs;
                var _closure2_slot3 = var16;
                var15 = var2.windowDimensions;
                var _closure2_slot4 = var15;
                var2 = var7.useState;
                var4 = true;
                var2 = var2.bind(var7)(var4);
                var12 = _closure1_slot3;
                var10 = 2;
                var2 = var12.bind(var3)(var2, var10);
                var8 = 0;
                var11 = var2[var8];
                var6 = 1;
                var2 = var2[var6];
                var _closure2_slot5 = var2;
                var2 = var7.useState;
                var2 = var2.bind(var7)(var4);
                var2 = var12.bind(var3)(var2, var10);
                var4 = var2[var8];
                var2 = var2[var6];
                var _closure2_slot6 = var2;
                var2 = var7.useState;
                var13 = false;
                var2 = var2.bind(var7)(var13);
                var2 = var12.bind(var3)(var2, var10);
                var9 = var2[var8];
                var2 = var2[var6];
                var _closure2_slot7 = var2;
                var2 = var7.useState;
                var2 = var2.bind(var7)(var13);
                var2 = var12.bind(var3)(var2, var10);
                var8 = var2[var8];
                var2 = var2[var6];
                var _closure2_slot8 = var2;
                var6 = var7.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var5 = function(arg0) { // Original name: updateState, environment: var1
                        var0 = arg0;
                        var2 = var0.focusedId;
                        var _closure4_slot0 = var2;
                        var2 = var0.mode;
                        var _closure4_slot1 = var2;
                        var2 = var0.controlsMode;
                        var _closure4_slot2 = var2;
                        var0 = var0.landscape;
                        var _closure4_slot3 = var0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 8;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.batchUpdates;
                        var1 = function() { // Environment: var1
                            _fun111264: for (var _fun111264_ip = 0;;) switch (_fun111264_ip) {
                                case 0:
                                    var4 = _closure2_slot6;
                                    var5 = _closure4_slot1;
                                    var0 = _closure1_slot6;
                                    var2 = var0.PIP;
                                    var0 = undefined;
                                    var2 = var5 !== var2;
                                    var2 = var4.bind(var0)(var2);
                                    var4 = _closure4_slot2;
                                    var2 = _closure1_slot7;
                                    var2 = var2.HIDDEN;
                                    var4 = var4 !== var2;
                                    var2 = _closure4_slot0;
                                    var5 = null;
                                    var7 = var5 != var2;
                                    var2 = !var7;
                                    if (var7) {
                                        _fun111264_ip = 79;
                                        continue _fun111264
                                    }
                                case 72:
                                    var7 = _closure4_slot3;
                                    var2 = !var7;
                                case 79:
                                    if (var2) {
                                        _fun111264_ip = 85;
                                        continue _fun111264
                                    }
                                case 82:
                                    var2 = var4;
                                case 85:
                                    var4 = _closure2_slot5;
                                    var4 = var4.bind(var0)(var2);
                                    var4 = _closure4_slot0;
                                    var7 = var5 != var4;
                                    var4 = var2;
                                    var2 = undefined;
                                    if (!var7) {
                                        _fun111264_ip = 134;
                                        continue _fun111264
                                    }
                                case 110:
                                    var9 = _closure1_slot5;
                                    var8 = var9.getParticipant;
                                    var7 = _closure2_slot1;
                                    var6 = _closure4_slot0;
                                    var2 = var8.bind(var9)(var7, var6);
                                case 134:
                                    var6 = var5 == var2;
                                    var5 = undefined;
                                    if (var6) {
                                        _fun111264_ip = 148;
                                        continue _fun111264
                                    }
                                case 143:
                                    var5 = var2.type;
                                case 148:
                                    var2 = _closure1_slot8;
                                    var2 = var2.ACTIVITY;
                                    var2 = var5 === var2;
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 9;
                                    var3 = var6[var3];
                                    var5 = var5.bind(var0)(var3);
                                    var3 = var5.isIOS;
                                    var3 = var3.bind(var5)();
                                    var5 = !var3;
                                    var3 = !var5;
                                    if (var5) {
                                        _fun111264_ip = 204;
                                        continue _fun111264
                                    }
                                case 201:
                                    var3 = var2;
                                case 204:
                                    var2 = _closure2_slot8;
                                    var2 = var2.bind(var0)(var3);
                                    var2 = _closure2_slot7;
                                    var1 = !var4;
                                    if (var4) {
                                        _fun111264_ip = 226;
                                        continue _fun111264
                                    }
                                case 223:
                                    var1 = !var3;
                                case 226:
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var _closure3_slot0 = var5;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = {};
                    var2 = 2000;
                    var3.maxWait = var2;
                    var2 = 500;
                    var2 = var4.bind(var0)(var5, var2, var3);
                    var _closure3_slot1 = var2;
                    var _closure3_slot2 = var0;
                    var0 = {};
                    var2 = function() { // Original name: cancelPendingDebounce, environment: var1
                        var1 = _closure3_slot1;
                        var0 = var1.cancel;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.cancelPendingDebounce = var2;
                    var1 = function(arg0) { // Original name: handleStateChange, environment: var1
                        _fun111266: for (var _fun111266_ip = 0;;) switch (_fun111266_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure3_slot2;
                                var1 = var2.focusedId;
                                if (!(var3 === var1)) {
                                    _fun111266_ip = 47;
                                    continue _fun111266
                                }
                            case 20:
                                var3 = _closure3_slot1;
                                var1 = var3.cancel;
                                var1 = var1.bind(var3)();
                                var3 = _closure3_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                _fun111266_ip = 68;
                                continue _fun111266;
                            case 47:
                                var1 = var2.focusedId;
                                _closure3_slot2 = var1;
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 68:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleStateChange = var1;
                    return var0;
                };
                var2 = var6.bind(var7)(var1, var2);
                var1 = var2.cancelPendingDebounce;
                var _closure2_slot9 = var1;
                var10 = var2.handleStateChange;
                var _closure2_slot10 = var10;
                var6 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot9;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var1 = var6.bind(var7)(var1, var2);
                var13 = _closure1_slot0;
                var12 = 11;
                var1 = var14[var12];
                var6 = var13.bind(var3)(var1);
                var2 = var6.useAnimatedReaction;
                var1 = function() { // Original name: v, environment: var0
                    _fun111269: for (var _fun111269_ip = 0;;) switch (_fun111269_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = null;
                            var4 = var2 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun111269_ip = 34;
                                continue _fun111269
                            }
                        case 29:
                            var2 = var3.id;
                        case 34:
                            var0.focusedId = var2;
                            var3 = _closure2_slot2;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var0.mode = var2;
                            var3 = _closure2_slot3;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var2 = var2.mode;
                            var0.controlsMode = var2;
                            var2 = _closure2_slot4;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var1 = var1.landscape;
                            var0.landscape = var1;
                            return var0;
                    }
                };
                var7 = {};
                var7.focused = var18;
                var7.mode = var17;
                var7.controlsSpecs = var16;
                var7.windowDimensions = var15;
                var1.__closure = var7;
                var7 = 2478376475717.0;
                var1.__workletHash = var7;
                var7 = _closure1_slot12;
                var1.__initData = var7;
                var0 = function(arg0, arg1) { // Original name: u, environment: var0
                    _fun111270: for (var _fun111270_ip = 0;;) switch (_fun111270_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = arg1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 12;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.cheapWorkletShallowEqual;
                            var3 = null;
                            var7 = var3 != var6;
                            var3 = undefined;
                            if (!var7) {
                                _fun111270_ip = 51;
                                continue _fun111270
                            }
                        case 48:
                            var3 = var6;
                        case 51:
                            var3 = var4.bind(var5)(var2, var3);
                            if (var3) {
                                _fun111270_ip = 102;
                                continue _fun111270
                            }
                        case 60:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 11;
                            var1 = var4[var1];
                            var4 = var3.bind(var0)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure2_slot10;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var0)(var2);
                        case 102:
                            return var0;
                    }
                };
                var7 = {};
                var15 = 12;
                var15 = var14[var15];
                var15 = var13.bind(var3)(var15);
                var15 = var15.cheapWorkletShallowEqual;
                var7.cheapWorkletShallowEqual = var15;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.runOnJS;
                var7.runOnJS = var12;
                var7.handleStateChange = var10;
                var0.__closure = var7;
                var7 = 3592680244658.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot13;
                var0.__initData = var7;
                var0 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot10;
                var0 = {};
                var6 = null;
                if (!var4) {
                    _fun111261_ip = 531;
                    continue _fun111261
                }
            case 480:
                var10 = _closure1_slot9;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 13;
                var4 = var12[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var11 = !var11;
                var4.hidden = var11;
                var11 = 'light-content';
                var4.barStyle = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 531:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 14;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.prefersHidden = var9;
                var5.prefersDeferringSystemGestures = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/VoicePanelSystemUIManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3902, 11816, 11814, 3482, 33, 11815, 802, 478, 5645, 3677, 5257, 7850, 7852, 2]);