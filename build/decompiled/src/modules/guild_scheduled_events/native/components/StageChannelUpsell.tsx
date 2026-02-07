// modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createChannelRecord;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useStageChannelUpsellCardStore;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CREATE_GUILD_EVENT_MODAL_KEY;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center',
        'backgroundColor': null,
        'padding': 16,
        'margin': 16
    };
    var10 = 9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var9 = 16;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderRadius = var10;
    var3.container = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.image = var8;
    var8 = {
        'position': 'absolute',
        'top': 14,
        'right': 14
    };
    var3.closeContainer = var8;
    var8 = {
        'lineHeight': 20,
        'marginBottom': 4
    };
    var3.header = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 4
    };
    var3.description = var8;
    var8 = {};
    var9 = 12;
    var8.marginTop = var9;
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/StageChannelUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66143: for (var _fun66143_ip = 0;;) switch (_fun66143_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var0 = var0.onCreate;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot12;
                var4 = undefined;
                var15 = var0.bind(var4)();
                var0 = _closure1_slot7;
                var2 = var0.bind(var4)();
                var1 = _closure1_slot3;
                var0 = 2;
                var2 = var1.bind(var4)(var2, var0);
                var0 = 0;
                var1 = var2[var0];
                var0 = 1;
                var10 = var2[var0];
                var _closure2_slot2 = var10;
                var0 = null;
                if (var1) {
                    _fun66143_ip = 731;
                    continue _fun66143
                }
            case 83:
                var3 = _closure1_slot11;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var15.container;
                var1.style = var5;
                var8 = _closure1_slot10;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 10;
                var5 = var14[var5];
                var5 = var13.bind(var4)(var5);
                var7 = var5.PressableOpacity;
                var5 = {};
                var5.onPress = var10;
                var10 = 'button';
                var5.accessibilityRole = var10;
                var10 = var15.closeContainer;
                var5.style = var10;
                var12 = _closure1_slot1;
                var10 = 11;
                var10 = var14[var10];
                var11 = var12.bind(var4)(var10);
                var10 = {};
                var16 = 12;
                var16 = var14[var16];
                var16 = var12.bind(var4)(var16);
                var10.source = var16;
                var10 = var8.bind(var4)(var11, var10);
                var5.children = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(6);
                var5[0] = var7;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = 13;
                var10 = var14[var10];
                var10 = var12.bind(var4)(var10);
                var6.source = var10;
                var10 = var15.image;
                var6.style = var10;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var6 = 14;
                var7 = var14[var6];
                var7 = var13.bind(var4)(var7);
                var11 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = var15.header;
                var7.style = var10;
                var10 = 15;
                var16 = var14[var10];
                var16 = var13.bind(var4)(var16);
                var18 = var16.intl;
                var17 = var18.string;
                var16 = var14[var10];
                var16 = var13.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.Sx8Ezi;
                var16 = var17.bind(var18)(var16);
                var7.children = var16;
                var7 = var8.bind(var4)(var11, var7);
                var5[2] = var7;
                var7 = var14[var6];
                var7 = var13.bind(var4)(var7);
                var11 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var16 = var15.description;
                var7.style = var16;
                var16 = var14[var10];
                var16 = var13.bind(var4)(var16);
                var18 = var16.intl;
                var17 = var18.string;
                var16 = var14[var10];
                var16 = var13.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.JUzPhm;
                var16 = var17.bind(var18)(var16);
                var7.children = var16;
                var7 = var8.bind(var4)(var11, var7);
                var5[3] = var7;
                var6 = var14[var6];
                var6 = var13.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var11 = var15.description;
                var6.style = var11;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var18 = var11.intl;
                var17 = var18.format;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var11 = var11.t;
                var16 = var11.Vh7rP7;
                var11 = {};
                var19 = function arg0, arg1() {
                    var4 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-sm/semibold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var11.suggestionsHook = var19;
                var11 = var17.bind(var18)(var16, var11);
                var6.children = var11;
                var6 = var8.bind(var4)(var7, var6);
                var5[4] = var6;
                var11 = 16;
                var6 = var14[var11];
                var7 = var12.bind(var4)(var6);
                var6 = {};
                var15 = var15.button;
                var6.style = var15;
                var15 = var14[var11];
                var15 = var12.bind(var4)(var15);
                var15 = var15.Colors;
                var15 = var15.GREY;
                var6.color = var15;
                var11 = var14[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.Sizes;
                var11 = var11.MEDIUM;
                var6.size = var11;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["X/3SyA"];
                var10 = var11.bind(var12)(var10);
                var6.text = var10;
                var9 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var5 = var3[var1];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var5);
                    var6 = var7.popWithKey;
                    var5 = _closure1_slot8;
                    var5 = var6.bind(var7)(var5);
                    var1 = var3[var1];
                    var8 = var2.bind(var0)(var1);
                    var7 = var8.pushLazy;
                    var5 = _closure1_slot0;
                    var1 = 19;
                    var1 = var3[var1];
                    var6 = var5.bind(var0)(var1);
                    var1 = 18;
                    var5 = var3[var1];
                    var1 = var3.paths;
                    var6 = var6.bind(var0)(var5, var1);
                    var5 = {};
                    var10 = _closure2_slot0;
                    var5.guildId = var10;
                    var9 = _closure1_slot9;
                    var9 = var9.GUILD_STAGE_VOICE;
                    var5.channelType = var9;
                    var9 = function arg0() {
                        _fun66146: for (var _fun66146_ip = 0;;) switch (_fun66146_ip) {
                            case 0:
                                var2 = _closure1_slot6;
                                var1 = {};
                                var3 = arg0;
                                var1.id = var3;
                                var0 = _closure1_slot9;
                                var0 = var0.GUILD_STAGE_VOICE;
                                var1.type = var0;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun66146_ip = 55;
                                    continue _fun66146
                                }
                            case 43:
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var0)(var2);
                            case 55:
                                return var0;
                        }
                    };
                    var5.onChannelCreated = var9;
                    var4 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 17;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.popWithKey;
                        var1 = 'CREATE_CHANNEL_MODAL_KEY';
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var5.onClose = var4;
                    var4 = 'CREATE_CHANNEL_MODAL_KEY';
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    var1 = 20;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var6.onPress = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[5] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 731:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1376, 8198, 8168, 660, 33, 1297, 671, 4904, 4086, 5375, 8199, 3942, 1234, 4875, 4561, 8200, 1307, 3279, 2]);