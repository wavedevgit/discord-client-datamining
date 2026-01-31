// modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var7 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {};
    var12 = var7.absoluteFillObject;
    var13 = var8;
    var9 = copyDataProperties(var13, var12);
    var10 = 'hidden';
    var9 = 'overflow';
    var8[var9] = var10;
    var3.visualEffectView = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91495: for (var _fun91495_ip = 0;;) switch (_fun91495_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channel;
                var _closure2_slot0 = var10;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 4;
                var1 = var7[var6];
                var3 = undefined;
                var5 = var4.bind(var3)(var1);
                var1 = 5;
                var1 = var7[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.VOICE_ACTION_SHEET;
                var1 = var5.bind(var3)(var1);
                var5 = var1.analyticsLocations;
                var8 = _closure1_slot0;
                var1 = 6;
                var1 = var7[var1];
                var11 = var8.bind(var3)(var1);
                var9 = var11.useStateFromStores;
                var1 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var1;
                var1 = function() { // Environment: var2
                    var2 = _closure1_slot5;
                    var1 = var2.countVoiceStatesForChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var0 = var0 === var1;
                    return var0;
                };
                var1 = var9.bind(var11)(var8, var1);
                var11 = _closure1_slot3;
                var9 = var11.useEffect;
                var8 = new Array(1);
                var8[0] = var10;
                var2 = function() { // Environment: var2
                    _fun91497: for (var _fun91497_ip = 0;;) switch (_fun91497_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 7;
                            var0 = var6[var0];
                            var3 = undefined;
                            var5 = var2.bind(var3)(var0);
                            var4 = var5.isModalOpen;
                            var0 = 8;
                            var0 = var6[var0];
                            var7 = var2.bind(var3)(var0);
                            var6 = var7.getVoiceChannelKey;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var2 = var6.bind(var7)(var2);
                            var2 = var4.bind(var5)(var2);
                            if (var2) {
                                _fun91497_ip = 109;
                                continue _fun91497
                            }
                        case 74:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 9;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.initialize;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 109:
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.terminate;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            return var0;
                    }
                };
                var2 = var9.bind(var11)(var2, var8);
                var2 = 10;
                var2 = var7[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.requiresVoiceChannelsOnboard;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun91495_ip = 458;
                    continue _fun91495
                }
            case 172:
                if (var1) {
                    _fun91495_ip = 346;
                    continue _fun91495
                }
            case 178:
                var4 = _closure1_slot6;
                var2 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 11;
                var1 = var14[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.ActionSheet;
                var1 = {
                    'scrollable': true,
                    'startExpanded': true
                };
                var9 = _closure1_slot7;
                var8 = _closure1_slot4;
                var7 = {};
                var15 = _closure1_slot8;
                var11 = var15.container;
                var7.style = var11;
                var13 = _closure1_slot1;
                var11 = 15;
                var11 = var14[var11];
                var12 = var13.bind(var3)(var11);
                var11 = {};
                var16 = 'dark';
                var11.blurTheme = var16;
                var15 = var15.visualEffectView;
                var11.style = var15;
                var12 = var4.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = 16;
                var12 = var14[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var12.channel = var10;
                var12 = var4.bind(var3)(var13, var12);
                var11[1] = var12;
                var7.children = var11;
                var7 = var9.bind(var3)(var8, var7);
                var1.children = var7;
                var4 = var4.bind(var3)(var2, var1);
                _fun91495_ip = 456;
                continue _fun91495;
            case 346:
                var7 = _closure1_slot7;
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 11;
                var1 = var13[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.ActionSheet;
                var1 = {};
                var12 = _closure1_slot6;
                var11 = _closure1_slot1;
                var8 = 13;
                var8 = var13[var8];
                var9 = var11.bind(var3)(var8);
                var8 = {};
                var8.channel = var10;
                var9 = var12.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = 14;
                var9 = var13[var9];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var9.channel = var10;
                var9 = var12.bind(var3)(var11, var9);
                var8[1] = var9;
                var1.children = var8;
                var4 = var7.bind(var3)(var2, var1);
            case 456:
                _fun91495_ip = 528;
                continue _fun91495;
            case 458:
                var7 = _closure1_slot6;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 11;
                var1 = var11[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.ActionSheet;
                var1 = {};
                var9 = _closure1_slot1;
                var8 = 12;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.channel = var10;
                var8 = var7.bind(var3)(var9, var8);
                var1.children = var8;
                var4 = var7.bind(var3)(var2, var1);
            case 528:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3485, 33, 5688, 5541, 566, 3878, 7838, 11849, 11850, 5171, 11853, 11856, 11857, 4032, 11860, 2]);