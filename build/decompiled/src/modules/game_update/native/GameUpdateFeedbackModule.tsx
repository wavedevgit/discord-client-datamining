// modules/game_update/native/GameUpdateFeedbackModule.tsx
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useState;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'gap': 16
    };
    var3.container = var8;
    var8 = {
        'width': '100%',
        'flexDirection': 'row',
        'gap': 8
    };
    var3.buttonContainer = var8;
    var8 = {};
    var8.flex = var9;
    var3.buttonWrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_update/native/GameUpdateFeedbackModule.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GameUpdateFeedbackModule, environment: var1
        _fun118439: for (var _fun118439_ip = 0;;) switch (_fun118439_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.gameName;
                var1 = var0.gameUpdateId;
                var _closure2_slot0 = var1;
                var0 = var0.gameId;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot9;
                var3 = undefined;
                var20 = var0.bind(var3)();
                var0 = _closure1_slot4;
                var11 = null;
                var2 = var0.bind(var3)(var11);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var18 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot2 = var0;
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var20.container;
                var0.style = var4;
                var6 = _closure1_slot7;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 6;
                var4 = var13[var4];
                var4 = var8.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-subtle'
                };
                var19 = 7;
                var7 = var13[var19];
                var7 = var8.bind(var3)(var7);
                var10 = var7.intl;
                var9 = var10.formatToPlainString;
                var8 = _closure1_slot1;
                var7 = 8;
                var7 = var13[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7["/MxjmI"];
                var7 = {};
                var13 = var11 != var12;
                var11 = '';
                if (!var13) {
                    _fun118439_ip = 209;
                    continue _fun118439
                }
            case 206:
                var11 = var12;
            case 209:
                var7.gameName = var11;
                var7 = var9.bind(var10)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var20.buttonContainer;
                var5.style = var8;
                var9 = _closure1_slot7;
                var8 = {};
                var10 = var20.buttonWrapper;
                var8.style = var10;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var17 = 9;
                var10 = var10[var17];
                var10 = var11.bind(var3)(var10);
                var22 = var10.Button;
                var10 = {};
                var16 = 'tertiary';
                var12 = 'interested';
                var11 = var16;
                if (!(var12 === var18)) {
                    _fun118439_ip = 323;
                    continue _fun118439
                }
            case 319:
                var11 = 'active';
            case 323:
                var10.variant = var11;
                var21 = 'md';
                var10.size = var21;
                var11 = _closure1_slot7;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var23 = 10;
                var23 = var12[var23];
                var23 = var13.bind(var3)(var23);
                var24 = var23.ThumbsUpIcon;
                var23 = {};
                var23.size = var21;
                var23 = var11.bind(var3)(var24, var23);
                var10.icon = var23;
                var23 = var12[var19];
                var23 = var13.bind(var3)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var12[var19];
                var23 = var13.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.DlcqlU;
                var23 = var24.bind(var25)(var23);
                var10.text = var23;
                var23 = function() { // Original name: onPress, environment: var14
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = 'interested';
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot6;
                    var2 = var1.GAME_UPDATE_ARTICLE_CLICKED;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.game_id = var6;
                    var5 = _closure2_slot0;
                    var1.game_update_id = var5;
                    var5 = 'FEEDBACK_INTERESTED';
                    var1.action = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var10.onPress = var23;
                var10 = var9.bind(var3)(var22, var10);
                var8.children = var10;
                var9 = var9.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var10 = _closure1_slot5;
                var9 = {};
                var20 = var20.buttonWrapper;
                var9.style = var20;
                var12 = var12[var17];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Button;
                var12 = {};
                var17 = 'not_interested';
                if (!(var17 === var18)) {
                    _fun118439_ip = 513;
                    continue _fun118439
                }
            case 507:
                var16 = 'destructive';
            case 513:
                var12.variant = var16;
                var12.size = var21;
                var20 = _closure1_slot7;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var16 = 12;
                var16 = var15[var16];
                var16 = var18.bind(var3)(var16);
                var17 = var16.ThumbsDownIcon;
                var16 = {};
                var16.size = var21;
                var16 = var20.bind(var3)(var17, var16);
                var12.icon = var16;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.f3Pet9;
                var15 = var16.bind(var17)(var15);
                var12.text = var15;
                var14 = function() { // Original name: onPress, environment: var14
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = 'not_interested';
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot6;
                    var2 = var1.GAME_UPDATE_ARTICLE_CLICKED;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.game_id = var6;
                    var5 = _closure2_slot0;
                    var1.game_update_id = var5;
                    var5 = 'FEEDBACK_NOT_INTERESTED';
                    var1.action = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var12.onPress = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GameUpdateFeedbackModule = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 3895, 1234, 2491, 4037, 13587, 795, 13589, 2]);