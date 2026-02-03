// modules/guild_onboarding/native/ChannelsAndRolesModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun77903: for (var _fun77903_ip = 0;;) switch (_fun77903_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.guildId;
                var _closure2_slot0 = var9;
                var7 = var1.defaultTab;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot10;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var8 = var2.bind(var3)(var1);
                var4 = var8.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var8)(var2, var1);
                var4 = _closure1_slot1;
                var1 = 9;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var4 = var1.bind(var3)(var2);
                var _closure2_slot1 = var4;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var5 = null;
                if (!(var5 == var7)) {
                    _fun77903_ip = 159;
                    continue _fun77903
                }
            case 135:
                var10 = _closure1_slot7;
                if (var4) {
                    _fun77903_ip = 150;
                    continue _fun77903
                }
            case 142:
                var8 = var10.BROWSE;
                _fun77903_ip = 156;
                continue _fun77903;
            case 150:
                var8 = var10.CUSTOMIZE;
            case 156:
                var7 = var8;
            case 159:
                var7 = var1.bind(var2)(var7);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var7, var1);
                var11 = 0;
                var7 = var2[var11];
                _closure2_slot2 = var7;
                var1 = 1;
                var10 = var2[var1];
                _closure2_slot3 = var10;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 10;
                var1 = var17[var1];
                var8 = var16.bind(var3)(var1);
                var2 = var8.useSegmentedControlState;
                var1 = {};
                var1.pageWidth = var11;
                var1.defaultIndex = var7;
                var1.onSetActiveIndex = var10;
                var11 = 11;
                var13 = var17[var11];
                var13 = var16.bind(var3)(var13);
                var15 = var13.intl;
                var14 = var15.string;
                var13 = var17[var11];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.F1VixV;
                var13 = var14.bind(var15)(var13);
                var14 = new Array(2);
                var14[0] = var13;
                var13 = var17[var11];
                var13 = var16.bind(var3)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var11 = var17[var11];
                var11 = var16.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.MWmtj8;
                var11 = var13.bind(var15)(var11);
                var14[1] = var11;
                var13 = var14.map;
                var11 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = {};
                    var0.id = var1;
                    var0.label = var1;
                    var1 = null;
                    var0.page = var1;
                    return var0;
                };
                var11 = var13.bind(var14)(var11);
                var1.items = var11;
                var15 = var2.bind(var8)(var1);
                _closure2_slot4 = var15;
                var8 = _closure1_slot4;
                var2 = var8.useEffect;
                var1 = new Array(3);
                var1[0] = var4;
                var1[1] = var7;
                var1[2] = var15;
                var0 = function() { // Environment: var0
                    _fun77906: for (var _fun77906_ip = 0;;) switch (_fun77906_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun77906_ip = 31;
                                continue _fun77906
                            }
                        case 10:
                            var3 = _closure2_slot2;
                            var2 = _closure1_slot7;
                            var2 = var2.CUSTOMIZE;
                            var0 = var3 !== var2;
                        case 31:
                            if (var0) {
                                _fun77906_ip = 86;
                                continue _fun77906
                            }
                        case 34:
                            var4 = _closure2_slot3;
                            var2 = _closure1_slot7;
                            var3 = var2.BROWSE;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var3 = _closure2_slot4;
                            var2 = var3.setActiveIndex;
                            var0 = _closure1_slot7;
                            var1 = var0.BROWSE;
                            var0 = false;
                            var0 = var2.bind(var3)(var1, var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var8)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var8 = var12.screen;
                var0.style = var8;
                var5 = null;
                if (!var4) {
                    _fun77903_ip = 513;
                    continue _fun77903
                }
            case 441:
                var11 = _closure1_slot8;
                var8 = _closure1_slot5;
                var4 = {};
                var12 = var12.tabBar;
                var4.style = var12;
                var14 = _closure1_slot8;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 12;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.SegmentedControl;
                var12 = {};
                var12.state = var15;
                var12 = var14.bind(var3)(var13, var12);
                var4.children = var12;
                var5 = var11.bind(var3)(var8, var4);
            case 513:
                var4 = new Array(2);
                var4[0] = var5;
                var5 = _closure1_slot7;
                var5 = var5.CUSTOMIZE;
                if (!(var7 !== var5)) {
                    _fun77903_ip = 573;
                    continue _fun77903
                }
            case 535:
                var8 = _closure1_slot8;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 14;
                var5 = var11[var5];
                var7 = var7.bind(var3)(var5);
                var5 = {};
                var5.guildId = var9;
                var5 = var8.bind(var3)(var7, var5);
                _fun77903_ip = 614;
                continue _fun77903;
            case 573:
                var8 = _closure1_slot8;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 13;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.setTab = var10;
                var6.guildId = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 614:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildOnboardingTab;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var3.screen = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingHorizontal = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingTop = var9;
    var3.tabBar = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/ChannelsAndRolesModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77907: for (var _fun77907_ip = 0;;) switch (_fun77907_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var0 = var0.defaultTab;
                var _closure2_slot1 = var0;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var3 = undefined;
                var5 = var1.bind(var3)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var4
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var2.bind(var5)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 9;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var5 = var0.bind(var3)(var2);
                var2 = _closure1_slot8;
                var0 = 15;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = 'channelAndRolesModal';
                var0.screenKey = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 11;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                if (var5) {
                    _fun77907_ip = 189;
                    continue _fun77907
                }
            case 176:
                var5 = var6.et6wav;
                var5 = var7.bind(var8)(var5);
                _fun77907_ip = 200;
                continue _fun77907;
            case 189:
                var6 = var6.h9mGOP;
                var5 = var7.bind(var8)(var6);
            case 200:
                var0.title = var5;
                var4 = function() {
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var0 = _closure2_slot1;
                    var1.defaultTab = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.render = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 4583, 33, 1297, 671, 632, 5609, 7795, 1234, 8188, 9883, 9901, 9119, 2]);