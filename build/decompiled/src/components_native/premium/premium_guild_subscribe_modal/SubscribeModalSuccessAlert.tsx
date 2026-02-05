// components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.Image;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 24;
    var8 = {
        'paddingHorizontal': 24,
        'paddingBottom': 16,
        'paddingTop': 4,
        'alignItems': 'stretch'
    };
    var3.wrapper = var8;
    var8 = {
        'width': 'auto',
        'height': 112,
        'alignSelf': 'center'
    };
    var3.animation = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.text = var8;
    var8 = {
        'padding': 2,
        'borderRadius': null,
        'marginTop': 8
    };
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var3.activated = var8;
    var8 = {
        'backgroundColor': null,
        'paddingVertical': 12,
        'paddingHorizontal': 20,
        'alignItems': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var3.activatedBackground = var8;
    var8 = {};
    var10 = 220;
    var8.width = var10;
    var3.activatedImage = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.successInfo = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var6 = {};
    var3 = 'entry';
    var6.ENTRY = var3;
    var3 = 'idle';
    var6.IDLE = var3;
    var3 = {};
    var8 = var6.ENTRY;
    var7 = {
        'BEG': 0,
        'END': 180
    };
    var3[var8] = var7;
    var8 = var6.IDLE;
    var7 = {
        'BEG': 180,
        'END': 360
    };
    var3[var8] = var7;
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var9 = var0.nextScene;
        var8 = var0.onSceneComplete;
        var7 = var0.loop;
        var0 = _closure1_slot10;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 7;
        var0 = var6[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.nextScene = var9;
        var0.onSceneComplete = var8;
        var0.loop = var7;
        var7 = _closure1_slot11;
        var0.sceneSegments = var7;
        var5 = var5.animation;
        var0.style = var5;
        var5 = _closure1_slot0;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var0.source = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var3;
    var3.Scenes = var6;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78856: for (var _fun78856_ip = 0;;) switch (_fun78856_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var2 = var0.guildBoostSlots;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var0 = _closure1_slot10;
                var18 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var4.bind(var5)(var1, var0);
                var1 = null;
                var16 = var1 != var2;
                if (!var16) {
                    _fun78856_ip = 118;
                    continue _fun78856
                }
            case 100:
                var4 = var2.some;
                var0 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var1 = var0.premiumGuildSubscription;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var16 = var4.bind(var2)(var0);
            case 118:
                var4 = var1 == var2;
                var0 = undefined;
                if (var4) {
                    _fun78856_ip = 132;
                    continue _fun78856
                }
            case 127:
                var0 = var2.length;
            case 132:
                var2 = var1 != var0;
                var1 = 1;
                var19 = var1;
                if (!var2) {
                    _fun78856_ip = 148;
                    continue _fun78856
                }
            case 145:
                var19 = var0;
            case 148:
                var9 = _closure1_slot4;
                var2 = var9.useState;
                var5 = _closure1_slot12;
                var0 = var5.Scenes;
                var0 = var0.ENTRY;
                var0 = var2.bind(var9)(var0);
                var7 = _closure1_slot3;
                var4 = 2;
                var0 = var7.bind(var3)(var0, var4);
                var2 = 0;
                var10 = var0[var2];
                var0 = var0[var1];
                _closure2_slot1 = var0;
                var8 = var9.useState;
                var0 = false;
                var0 = var8.bind(var9)(var0);
                var0 = var7.bind(var3)(var0, var4);
                var7 = var0[var2];
                var0 = var0[var1];
                _closure2_slot2 = var0;
                var8 = _closure1_slot1;
                var22 = _closure1_slot2;
                var0 = 10;
                var0 = var22[var0];
                var0 = var8.bind(var3)(var0);
                var17 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var0 = 11;
                var0 = var22[var0];
                var1 = var8.bind(var3)(var0);
                var0 = {};
                var4 = var18.wrapper;
                var0.style = var4;
                var15 = _closure1_slot0;
                var21 = 12;
                var4 = var22[var21];
                var4 = var15.bind(var3)(var4);
                var11 = var4.intl;
                var9 = var11.string;
                var4 = var22[var21];
                var4 = var15.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.YKxJCI;
                var4 = var9.bind(var11)(var4);
                var0.confirmText = var4;
                var4 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 13;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.close;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot0;
                    var1 = 14;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.closeApplyBoostModal;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0.onConfirm = var4;
                var9 = _closure1_slot8;
                var4 = {};
                var4.nextScene = var10;
                var4.loop = var7;
                var6 = function arg0() {
                    _fun78860: for (var _fun78860_ip = 0;;) switch (_fun78860_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot12;
                            var1 = var1.Scenes;
                            var1 = var1.ENTRY;
                            if (!(var1 !== var2)) {
                                _fun78860_ip = 68;
                                continue _fun78860
                            }
                        case 26:
                            var1 = _closure1_slot12;
                            var1 = var1.Scenes;
                            var1 = var1.IDLE;
                            if (!(var1 !== var2)) {
                                _fun78860_ip = 50;
                                continue _fun78860
                            }
                        case 46:
                            var1 = undefined;
                            return var1;
                        case 50:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        case 68:
                            var2 = _closure2_slot1;
                            var0 = _closure1_slot12;
                            var0 = var0.Scenes;
                            var1 = var0.IDLE;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4.onSceneComplete = var6;
                var5 = var9.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = 15;
                var7 = var22[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var10 = var18.activated;
                var7.style = var10;
                var10 = 16;
                var11 = var22[var10];
                var11 = var15.bind(var3)(var11);
                var11 = var11.HorizontalGradient;
                var11 = var11.START;
                var7.start = var11;
                var11 = var22[var10];
                var11 = var15.bind(var3)(var11);
                var11 = var11.HorizontalGradient;
                var11 = var11.END;
                var7.end = var11;
                var10 = var22[var10];
                var10 = var15.bind(var3)(var10);
                var10 = var10.Gradients;
                var10 = var10.PREMIUM_GUILD;
                var7.colors = var10;
                var10 = {};
                var11 = var18.activatedBackground;
                var10.style = var11;
                var12 = _closure1_slot6;
                var11 = {};
                var14 = var18.activatedImage;
                var11.style = var14;
                var14 = 17;
                var14 = var22[var14];
                var15 = var15.bind(var3)(var14);
                var14 = var15.isThemeLight;
                var14 = var14.bind(var15)(var17);
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                if (var14) {
                    _fun78856_ip = 583;
                    continue _fun78856
                }
            case 569:
                var14 = 19;
                var14 = var22[var14];
                var14 = var17.bind(var3)(var14);
                _fun78856_ip = 595;
                continue _fun78856;
            case 583:
                var15 = 18;
                var15 = var22[var15];
                var14 = var17.bind(var3)(var15);
            case 595:
                var11.source = var14;
                var11 = var9.bind(var3)(var12, var11);
                var10.children = var11;
                var10 = var9.bind(var3)(var6, var10);
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot9;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var18.successInfo;
                var8.style = var11;
                var15 = _closure1_slot8;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = 20;
                var11 = var11[var12];
                var11 = var14.bind(var3)(var11);
                var14 = var11.Text;
                var11 = {};
                var17 = var18.text;
                var11.style = var17;
                var17 = 'text-sm/medium';
                var11.variant = var17;
                var25 = _closure1_slot0;
                var22 = _closure1_slot2;
                var23 = var22[var21];
                var23 = var25.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var22[var21];
                var22 = var25.bind(var3)(var22);
                var22 = var22.t;
                if (var16) {
                    _fun78856_ip = 760;
                    continue _fun78856
                }
            case 745:
                var16 = var22.d81BkZ;
                var16 = var23.bind(var24)(var16);
                _fun78856_ip = 773;
                continue _fun78856;
            case 760:
                var22 = var22.RMmWY3;
                var16 = var23.bind(var24)(var22);
            case 773:
                var11.children = var16;
                var14 = var15.bind(var3)(var14, var11);
                var11 = new Array(2);
                var11[0] = var14;
                var14 = _closure1_slot8;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = var15[var12];
                var12 = var16.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {};
                var18 = var18.text;
                var12.style = var18;
                var12.variant = var17;
                var17 = var15[var21];
                var17 = var16.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.format;
                var15 = var15[var21];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var16 = var15.r0IGsP;
                var15 = {};
                var20 = var20.name;
                var15.guildName = var20;
                var15.guildSubscriptionQuantity = var19;
                var15 = var17.bind(var18)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 33, 1297, 671, 10052, 10053, 566, 3246, 3937, 1234, 3936, 9970, 4098, 670, 3206, 10054, 10055, 3941, 2]);