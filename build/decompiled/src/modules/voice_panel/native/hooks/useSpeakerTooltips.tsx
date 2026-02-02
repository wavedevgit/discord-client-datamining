// modules/voice_panel/native/hooks/useSpeakerTooltips.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        var4 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var7;
        var6 = _closure1_slot4;
        var5 = var6.useCallback;
        var3 = new Array(1);
        var3[0] = var4;
        var2 = function() { // Environment: var1
            _fun111109: for (var _fun111109_ip = 0;;) switch (_fun111109_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.visible;
                    if (!var1) {
                        _fun111109_ip = 30;
                        continue _fun111109
                    }
                case 16:
                    var1 = _closure2_slot0;
                    var0 = var1.onDismiss;
                    var0 = var0.bind(var1)();
                case 30:
                    var0 = undefined;
                    return var0;
            }
        };
        var6 = var5.bind(var6)(var2, var3);
        var _closure2_slot2 = var6;
        var5 = _closure1_slot4;
        var3 = var5.useEffect;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() { // Environment: var1
            _fun111110: for (var _fun111110_ip = 0;;) switch (_fun111110_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun111110_ip = 20;
                        continue _fun111110
                    }
                case 10:
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 20:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var5)(var1, var2);
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 16;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.useCoachmark;
        var1 = arg0;
        var1 = var2.bind(var3)(var1, var4);
        return var0;
    };
    var _closure1_slot12 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.setVoiceUpsellDismissed;
    var _closure1_slot5 = var6;
    var3 = var3.useConsoleVoiceUpsellStore;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/hooks/useSpeakerTooltips.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun111111: for (var _fun111111_ip = 0;;) switch (_fun111111_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var12 = _closure1_slot1;
                var21 = _closure1_slot2;
                var0 = 6;
                var2 = var21[var0];
                var0 = undefined;
                var2 = var12.bind(var0)(var2);
                var11 = var2.bind(var0)();
                var _closure2_slot1 = var11;
                var2 = _closure1_slot6;
                var2 = var2.bind(var0)();
                var2 = var2.voiceUpsellDismissed;
                var _closure2_slot2 = var2;
                var5 = 7;
                var5 = var21[var5];
                var5 = var12.bind(var0)(var5);
                var7 = var5.bind(var0)(var0);
                var _closure2_slot3 = var7;
                var20 = _closure1_slot0;
                var5 = 8;
                var5 = var21[var5];
                var8 = var20.bind(var0)(var5);
                var5 = var8.useIsVoicePanelFullscreen;
                var10 = var5.bind(var8)();
                var9 = _closure1_slot4;
                var8 = var9.useContext;
                var5 = 9;
                var5 = var21[var5];
                var5 = var12.bind(var0)(var5);
                var5 = var8.bind(var9)(var5);
                var17 = var5.controlsSpecs;
                var _closure2_slot4 = var17;
                var9 = _closure1_slot4;
                var8 = var9.useState;
                var5 = true;
                var8 = var8.bind(var9)(var5);
                var5 = _closure1_slot3;
                var12 = 2;
                var13 = var5.bind(var0)(var8, var12);
                var5 = 0;
                var9 = var13[var5];
                var8 = 1;
                var18 = var13[var8];
                var _closure2_slot5 = var18;
                var19 = 10;
                var13 = var21[var19];
                var16 = var20.bind(var0)(var13);
                var15 = var16.useAnimatedReaction;
                var14 = function() {
                    var1 = _closure2_slot4;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.mode;
                    return var0;
                };
                var13 = {};
                var13.controlsSpecs = var17;
                var14.__closure = var13;
                var13 = 13952338295275.0;
                var14.__workletHash = var13;
                var13 = _closure1_slot10;
                var14.__initData = var13;
                var13 = function arg0, arg1() {
                    _fun111113: for (var _fun111113_ip = 0;;) switch (_fun111113_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            if (!(var3 !== var0)) {
                                _fun111113_ip = 71;
                                continue _fun111113
                            }
                        case 10:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.runOnJS;
                            var1 = _closure2_slot5;
                            var1 = var4.bind(var5)(var1);
                            var0 = _closure1_slot7;
                            var0 = var0.FLOATING_DEFAULT;
                            var0 = var3 === var0;
                            var0 = var1.bind(var2)(var0);
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var17 = {};
                var19 = var21[var19];
                var19 = var20.bind(var0)(var19);
                var19 = var19.runOnJS;
                var17.runOnJS = var19;
                var17.setIsShowingControls = var18;
                var18 = _closure1_slot7;
                var17.VoicePanelControlsModes = var18;
                var13.__closure = var17;
                var17 = 5084069556209.0;
                var13.__workletHash = var17;
                var17 = _closure1_slot11;
                var13.__initData = var17;
                var13 = var15.bind(var16)(var14, var13);
                if (!var3) {
                    _fun111111_ip = 344;
                    continue _fun111111
                }
            case 341:
                var3 = var10;
            case 344:
                if (!var3) {
                    _fun111111_ip = 350;
                    continue _fun111111
                }
            case 347:
                var3 = var9;
            case 350:
                _closure2_slot0 = var3;
                var13 = _closure1_slot4;
                var10 = var13.useMemo;
                var9 = new Array(2);
                var9[0] = var3;
                var9[1] = var7;
                var7 = function() { // Environment: var6
                    _fun111114: for (var _fun111114_ip = 0;;) switch (_fun111114_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun111114_ip = 16;
                                continue _fun111114
                            }
                        case 10:
                            var0 = new Array(0);
                            _fun111114_ip = 20;
                            continue _fun111114;
                        case 16:
                            var0 = _closure2_slot3;
                        case 20:
                            return var0;
                    }
                };
                var13 = var10.bind(var13)(var7, var9);
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 11;
                var7 = var9[var7];
                var10 = var10.bind(var0)(var7);
                var7 = var10.useSelectedDismissibleContent;
                var10 = var7.bind(var10)(var13);
                var7 = _closure1_slot3;
                var7 = var7.bind(var0)(var10, var12);
                var5 = var7[var5];
                var _closure2_slot6 = var5;
                var12 = var7[var8];
                var _closure2_slot7 = var12;
                var8 = _closure1_slot1;
                var7 = 12;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var10 = var7.bind(var0)();
                var _closure2_slot8 = var10;
                var9 = _closure1_slot4;
                var8 = var9.useMemo;
                var7 = new Array(3);
                var7[0] = var3;
                var7[1] = var12;
                var7[2] = var5;
                var5 = function() { // Environment: var6
                    _fun111115: for (var _fun111115_ip = 0;;) switch (_fun111115_ip) {
                        case 0:
                            var0 = {};
                            var2 = 'bottom';
                            var0.position = var2;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 13;
                            var4 = var8[var2];
                            var6 = undefined;
                            var4 = var7.bind(var6)(var4);
                            var9 = var4.intl;
                            var5 = var9.string;
                            var4 = var8[var2];
                            var4 = var7.bind(var6)(var4);
                            var4 = var4.t;
                            var4 = var4.O2WA4u;
                            var4 = var5.bind(var9)(var4);
                            var0.title = var4;
                            var4 = var8[var2];
                            var4 = var7.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var2 = var8[var2];
                            var2 = var7.bind(var6)(var2);
                            var2 = var2.t;
                            var2 = var2.fr5bJy;
                            var2 = var4.bind(var5)(var2);
                            var0.description = var2;
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun111115_ip = 176;
                                continue _fun111115
                            }
                        case 136:
                            var4 = _closure2_slot6;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 14;
                            var3 = var7[var3];
                            var3 = var5.bind(var6)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.DONUT_MOBILE_NUX;
                            var2 = var4 === var3;
                        case 176:
                            var0.visible = var2;
                            var2 = function() {
                                var3 = _closure1_slot9;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 15;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var0.renderImgComponent = var2;
                            var2 = true;
                            var0.withBlurBackground = var2;
                            var1 = function() {
                                var2 = _closure2_slot7;
                                var0 = _closure1_slot8;
                                var1 = var0.UNKNOWN;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onDismiss = var1;
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var5, var7);
                var _closure2_slot9 = var5;
                var9 = _closure1_slot4;
                var8 = var9.useMemo;
                var7 = new Array(4);
                var7[0] = var11;
                var7[1] = var3;
                var7[2] = var2;
                var2 = var5.visible;
                var7[3] = var2;
                var2 = function() { // Environment: var6
                    _fun111118: for (var _fun111118_ip = 0;;) switch (_fun111118_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 != var1;
                            var2 = null;
                            if (!var1) {
                                _fun111118_ip = 58;
                                continue _fun111118
                            }
                        case 18:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 15;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.getConsoleInfo;
                            var1 = _closure2_slot1;
                            var2 = var4.bind(var5)(var1);
                        case 58:
                            var4 = _closure2_slot0;
                            if (!var4) {
                                _fun111118_ip = 72;
                                continue _fun111118
                            }
                        case 65:
                            var1 = _closure2_slot2;
                            var4 = !var1;
                        case 72:
                            if (!var4) {
                                _fun111118_ip = 79;
                                continue _fun111118
                            }
                        case 75:
                            var4 = var3 != var2;
                        case 79:
                            if (!var4) {
                                _fun111118_ip = 95;
                                continue _fun111118
                            }
                        case 82:
                            var0 = _closure2_slot9;
                            var0 = var0.visible;
                            var4 = !var0;
                        case 95:
                            var0 = {};
                            var1 = 'bottom';
                            var0.position = var1;
                            var5 = var3 == var2;
                            var7 = undefined;
                            if (var5) {
                                _fun111118_ip = 120;
                                continue _fun111118
                            }
                        case 114:
                            var7 = var2.connectLabel;
                        case 120:
                            var8 = var3 != var7;
                            var5 = '';
                            var6 = var5;
                            if (!var8) {
                                _fun111118_ip = 137;
                                continue _fun111118
                            }
                        case 134:
                            var6 = var7;
                        case 137:
                            var0.title = var6;
                            var7 = var3 == var2;
                            var6 = undefined;
                            if (var7) {
                                _fun111118_ip = 156;
                                continue _fun111118
                            }
                        case 150:
                            var6 = var2.connectSublabel;
                        case 156:
                            var7 = var3 != var6;
                            if (!var7) {
                                _fun111118_ip = 166;
                                continue _fun111118
                            }
                        case 163:
                            var5 = var6;
                        case 166:
                            var0.description = var5;
                            var0.visible = var4;
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun111118_ip = 189;
                                continue _fun111118
                            }
                        case 184:
                            var1 = var2.icon;
                        case 189:
                            var0.imgSource = var1;
                            var1 = true;
                            var0.withBlurBackground = var1;
                            var1 = function() {
                                var2 = _closure1_slot5;
                                var0 = undefined;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onDismiss = var1;
                            return var0;
                    }
                };
                var2 = var8.bind(var9)(var2, var7);
                var11 = var5.visible;
                if (var11) {
                    _fun111111_ip = 574;
                    continue _fun111111
                }
            case 568:
                var11 = var2.visible;
            case 574:
                var _closure2_slot10 = var11;
                var9 = _closure1_slot4;
                var8 = var9.useEffect;
                var7 = new Array(2);
                var7[0] = var11;
                var7[1] = var10;
                var6 = function() { // Environment: var6
                    _fun111120: for (var _fun111120_ip = 0;;) switch (_fun111120_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            var2 = _closure2_slot8;
                            if (var0) {
                                _fun111120_ip = 26;
                                continue _fun111120
                            }
                        case 14:
                            var0 = var2.unlock;
                            var0 = var0.bind(var2)();
                            _fun111120_ip = 50;
                            continue _fun111120;
                        case 26:
                            var1 = var2.lock;
                            var0 = _closure1_slot7;
                            var0 = var0.FLOATING_DEFAULT;
                            var0 = var1.bind(var2)(var0);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var8.bind(var9)(var6, var7);
                var1 = _closure1_slot12;
                var5 = var1.bind(var0)(var4, var5, var3);
                var1 = var1.bind(var0)(var4, var2, var3);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 8644, 11771, 1369, 33, 8662, 8664, 7844, 11772, 3681, 5921, 14221, 1234, 1358, 14257, 6980, 2]);