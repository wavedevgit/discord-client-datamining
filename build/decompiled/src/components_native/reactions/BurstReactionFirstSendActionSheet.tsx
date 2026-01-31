// components_native/reactions/BurstReactionFirstSendActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.hideActionSheet;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingTop': 24,
        'paddingBottom': 24,
        'paddingLeft': 12,
        'paddingRight': 12
    };
    var3.container = var8;
    var8 = {};
    var13 = var9.absoluteFillObject;
    var14 = var8;
    var9 = copyDataProperties(var14, var13);
    var9 = 'flex';
    var8[var9] = var11;
    var11 = 'center';
    var9 = 'alignItems';
    var8[var9] = var11;
    var9 = 'justifyContent';
    var8[var9] = var11;
    var11 = -120;
    var9 = 'top';
    var8[var9] = var11;
    var3.fill = var8;
    var8 = {
        'tintColor': null,
        'width': 37.5,
        'height': 37.5
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_SUBTLE;
    var8.tintColor = var9;
    var3.nitroWheel = var8;
    var8 = {
        'flexDirection': 'row',
        'flexShrink': 1,
        'alignItems': 'center',
        'alignSelf': 'center',
        'textAlign': 'center'
    };
    var3.textContainer = var8;
    var8 = {
        'paddingTop': 8,
        'paddingBottom': 18
    };
    var3.body = var8;
    var8 = {};
    var9 = 16;
    var8.paddingHorizontal = var9;
    var3.content = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/reactions/BurstReactionFirstSendActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var10 = var0.emoji;
        var13 = var0.channelId;
        var9 = var0.messageId;
        var0 = _closure1_slot6;
        var3 = undefined;
        var15 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var17 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 6;
        var0 = var12[var0];
        var0 = var17.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var5 = 7;
        var5 = var12[var5];
        var5 = var17.bind(var3)(var5);
        var5 = var5.BACKDROP_OPACITY;
        var0.backdropOpacity = var5;
        var5 = var15.content;
        var0.contentStyles = var5;
        var6 = _closure1_slot3;
        var5 = {};
        var7 = var15.fill;
        var5.style = var7;
        var11 = _closure1_slot1;
        var7 = 8;
        var7 = var12[var7];
        var8 = var11.bind(var3)(var7);
        var7 = {};
        var7.channelId = var13;
        var7.emoji = var10;
        var7.messageId = var9;
        var9 = 9;
        var9 = var12[var9];
        var9 = var17.bind(var3)(var9);
        var9 = var9.ReactionTypes;
        var9 = var9.BURST;
        var7.reactionType = var9;
        var7 = var2.bind(var3)(var8, var7);
        var5.children = var7;
        var5 = var2.bind(var3)(var6, var5);
        var0.backdropChildren = var5;
        var13 = _closure1_slot7;
        var0.onDismiss = var13;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var15.container;
        var4.style = var7;
        var7 = {};
        var8 = var15.textContainer;
        var7.style = var8;
        var8 = 10;
        var8 = var12[var8];
        var9 = var11.bind(var3)(var8);
        var8 = {};
        var10 = var15.nitroWheel;
        var8.style = var10;
        var9 = var2.bind(var3)(var9, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var9 = 11;
        var10 = var12[var9];
        var10 = var17.bind(var3)(var10);
        var16 = var10.Text;
        var10 = {};
        var14 = 'heading-xl/bold';
        var10.variant = var14;
        var14 = 12;
        var18 = var12[var14];
        var18 = var17.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var12[var14];
        var18 = var17.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.NX7HI7;
        var18 = var19.bind(var20)(var18);
        var10.children = var18;
        var10 = var2.bind(var3)(var16, var10);
        var8[1] = var10;
        var7.children = var8;
        var8 = var5.bind(var3)(var6, var7);
        var7 = new Array(3);
        var7[0] = var8;
        var8 = {};
        var10 = var15.body;
        var8.style = var10;
        var9 = var12[var9];
        var9 = var17.bind(var3)(var9);
        var10 = var9.Text;
        var9 = {};
        var15 = var15.textContainer;
        var9.style = var15;
        var15 = 'text-md/normal';
        var9.variant = var15;
        var15 = var12[var14];
        var15 = var17.bind(var3)(var15);
        var18 = var15.intl;
        var16 = var18.string;
        var15 = var12[var14];
        var15 = var17.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15["2Yp7dF"];
        var15 = var16.bind(var18)(var15);
        var9.children = var15;
        var9 = var2.bind(var3)(var10, var9);
        var8.children = var9;
        var8 = var2.bind(var3)(var6, var8);
        var7[1] = var8;
        var10 = 13;
        var8 = var12[var10];
        var9 = var11.bind(var3)(var8);
        var8 = {};
        var15 = var12[var14];
        var15 = var17.bind(var3)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var12[var14];
        var14 = var17.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14["+IrDzN"];
        var14 = var15.bind(var16)(var14);
        var8.text = var14;
        var8.onPress = var13;
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.Colors;
        var10 = var10.BRAND;
        var8.color = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var5.bind(var3)(var6, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun54477: for (var _fun54477_ip = 0;;) switch (_fun54477_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var5 = var0.messageId;
                var4 = var0.emoji;
                var8 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 5;
                var7 = var2[var3];
                var0 = undefined;
                var8 = var8.bind(var0)(var7);
                var7 = var8.hideActionSheet;
                var7 = var7.bind(var8)();
                var11 = _closure1_slot0;
                var9 = 14;
                var7 = var2[var9];
                var10 = var11.bind(var0)(var7);
                var7 = var10.UNSAFE_isDismissibleContentDismissed;
                var8 = 15;
                var2 = var2[var8];
                var2 = var11.bind(var0)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.SUPER_REACTIONS_FIRST_SENT;
                var2 = var7.bind(var10)(var2);
                if (var2) {
                    _fun54477_ip = 239;
                    continue _fun54477
                }
            case 111:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = var2[var9];
                var10 = var7.bind(var0)(var9);
                var9 = var10.UNSAFE_markDismissibleContentAsDismissed;
                var8 = var2[var8];
                var8 = var7.bind(var0)(var8);
                var8 = var8.DismissibleContent;
                var8 = var8.SUPER_REACTIONS_FIRST_SENT;
                var8 = var9.bind(var10)(var8);
                var8 = _closure1_slot1;
                var3 = var2[var3];
                var9 = var8.bind(var0)(var3);
                var8 = var9.openLazy;
                var3 = 17;
                var3 = var2[var3];
                var7 = var7.bind(var0)(var3);
                var3 = 16;
                var3 = var2[var3];
                var2 = var2.paths;
                var7 = var7.bind(var0)(var3, var2);
                var3 = {};
                var3.channelId = var6;
                var3.messageId = var5;
                var3.emoji = var4;
                var2 = 'BurstReactionFirstSendActionSheet';
                var2 = var8.bind(var9)(var7, var2, var3);
                _fun54477_ip = 294;
                continue _fun54477;
            case 239:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'BURST_REACTION_EFFECT_SEND';
                var1.type = var7;
                var1.channelId = var6;
                var1.messageId = var5;
                var1.emoji = var4;
                var1 = var2.bind(var3)(var1);
            case 294:
                return var0;
        }
    };
    var2.openBurstReactionFirstSendActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3237, 4894, 6518, 6558, 6516, 6567, 3900, 1234, 4836, 3171, 1358, 6557, 1307, 806, 2]);