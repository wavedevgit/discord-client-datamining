// modules/guild_onboarding_home/native/ResourceChannelButtons.tsx
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'padding': 12
    };
    var3 = 12;
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var6.wrapper = var9;
    var9 = {
        'paddingHorizontal': 12,
        'flex': 1
    };
    var6.button = var9;
    var9 = {};
    var12 = 8;
    var9.width = var12;
    var6.spacer = var9;
    var9 = {
        'flex': 1,
        'textAlign': 'center'
    };
    var6.buttonText = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9.color = var10;
    var6.iconColor = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/native/ResourceChannelButtons.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89698: for (var _fun89698_ip = 0;;) switch (_fun89698_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot7;
                var4 = undefined;
                var15 = var1.bind(var4)();
                var _closure2_slot1 = var15;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.usePreviousAndNextResourceChannel;
                var1 = var0.guild_id;
                var0 = var0.id;
                var2 = var2.bind(var3)(var1, var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var4)(var2, var0);
                var0 = 0;
                var8 = var1[var0];
                var _closure2_slot2 = var8;
                var0 = 1;
                var11 = var1[var0];
                var _closure2_slot3 = var11;
                var6 = null;
                if (!(var6 == var8)) {
                    _fun89698_ip = 125;
                    continue _fun89698
                }
            case 113:
                var1 = var6 == var11;
                var0 = null;
                if (var1) {
                    _fun89698_ip = 445;
                    continue _fun89698
                }
            case 125:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var15.wrapper;
                var1.style = var5;
                var9 = var6 != var8;
                if (!var9) {
                    _fun89698_ip = 262;
                    continue _fun89698
                }
            case 152:
                var13 = _closure1_slot5;
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 7;
                var5 = var17[var14];
                var12 = var16.bind(var4)(var5);
                var5 = {};
                var18 = var15.button;
                var5.style = var18;
                var18 = var15.buttonText;
                var5.textStyle = var18;
                var14 = var17[var14];
                var14 = var16.bind(var4)(var14);
                var14 = var14.Colors;
                var14 = var14.GREY;
                var5.color = var14;
                var14 = var8.title;
                var5.text = var14;
                var14 = function() {
                    var3 = _closure1_slot5;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 8;
                    var0 = var6[var0];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.iconColor;
                    var4 = var4.color;
                    var0.color = var4;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var0.source = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.renderIcon = var14;
                var14 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.selectHomeResourceChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var0 = _closure2_slot2;
                    var0 = var0.channelId;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5.onPress = var14;
                var9 = var13.bind(var4)(var12, var5);
            case 262:
                var5 = new Array(3);
                var5[0] = var9;
                var8 = var6 != var8;
                if (!var8) {
                    _fun89698_ip = 281;
                    continue _fun89698
                }
            case 277:
                var8 = var6 != var11;
            case 281:
                if (!var8) {
                    _fun89698_ip = 310;
                    continue _fun89698
                }
            case 284:
                var13 = _closure1_slot5;
                var12 = _closure1_slot4;
                var9 = {};
                var14 = var15.spacer;
                var9.style = var14;
                var8 = var13.bind(var4)(var12, var9);
            case 310:
                var5[1] = var8;
                var6 = var6 != var11;
                if (!var6) {
                    _fun89698_ip = 431;
                    continue _fun89698
                }
            case 321:
                var9 = _closure1_slot5;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 7;
                var7 = var14[var12];
                var8 = var13.bind(var4)(var7);
                var7 = {};
                var16 = var15.button;
                var7.style = var16;
                var15 = var15.buttonText;
                var7.textStyle = var15;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.Colors;
                var12 = var12.BRAND;
                var7.color = var12;
                var11 = var11.title;
                var7.text = var11;
                var11 = function() {
                    var3 = _closure1_slot5;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 8;
                    var0 = var6[var0];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.iconColor;
                    var4 = var4.color;
                    var0.color = var4;
                    var4 = 11;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var0.source = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var7.renderRightIcon = var11;
                var10 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.selectHomeResourceChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var0 = _closure2_slot3;
                    var0 = var0.channelId;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7.onPress = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 431:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 445:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 11658, 4873, 4086, 9921, 11659, 11661, 2]);