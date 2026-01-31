// modules/forums/native/posts/reactions/ForumPostReactionButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        _fun76468: for (var _fun76468_ip = 0;;) switch (_fun76468_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.colors;
                var11 = var0.emoji;
                var8 = var0.onPress;
                var7 = var0.onLongPress;
                var15 = var0.containerStyle;
                var10 = var0.count;
                var6 = var0.emojiSize;
                var13 = var0.selected;
                var9 = var0.animate;
                var5 = var0.animateCount;
                var4 = var0.accessible;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useEmojiColorPalette;
                var2 = var1.bind(var2)(var12);
                var14 = {};
                var1 = null;
                var16 = var1 != var2;
                var18 = '';
                var12 = var18;
                if (!var16) {
                    _fun76468_ip = 213;
                    continue _fun76468
                }
            case 120:
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var16 = 15;
                var16 = var19[var16];
                var20 = var17.bind(var3)(var16);
                var19 = var20.hex2rgb;
                var16 = var1 == var2;
                var17 = undefined;
                if (var16) {
                    _fun76468_ip = 160;
                    continue _fun76468
                }
            case 155:
                var17 = var2.backgroundColor;
            case 160:
                var16 = var1 == var2;
                var21 = undefined;
                if (var16) {
                    _fun76468_ip = 174;
                    continue _fun76468
                }
            case 169:
                var21 = var2.opacity;
            case 174:
                var22 = var1 != var21;
                var16 = 0.15;
                if (!var22) {
                    _fun76468_ip = 194;
                    continue _fun76468
                }
            case 191:
                var16 = var21;
            case 194:
                var16 = var19.bind(var20)(var17, var16);
                var17 = var1 != var16;
                var12 = var18;
                if (!var17) {
                    _fun76468_ip = 213;
                    continue _fun76468
                }
            case 210:
                var12 = var16;
            case 213:
                var14.backgroundColor = var12;
                var16 = var1 == var2;
                var12 = undefined;
                if (var16) {
                    _fun76468_ip = 231;
                    continue _fun76468
                }
            case 226:
                var12 = var2.backgroundColor;
            case 231:
                var14.borderColor = var12;
                var12 = 0;
                if (!var13) {
                    _fun76468_ip = 251;
                    continue _fun76468
                }
            case 241:
                var12 = 1.5;
            case 251:
                var14.borderWidth = var12;
                var12 = {};
                var13 = var1 == var2;
                var1 = undefined;
                if (var13) {
                    _fun76468_ip = 273;
                    continue _fun76468
                }
            case 267:
                var1 = var2.accentColor;
            case 273:
                var12.color = var1;
                var2 = _closure1_slot6;
                var1 = _closure1_slot9;
                var0 = {};
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var0.containerStyle = var13;
                var0.textStyle = var12;
                var12 = false;
                var0.selected = var12;
                var0.emoji = var11;
                var0.count = var10;
                var0.animate = var9;
                var0.onPress = var8;
                var0.onLongPress = var7;
                var0.emojiSize = var6;
                var0.animateCount = var5;
                var0.accessible = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var1 = function arg0() {
        _fun76469: for (var _fun76469_ip = 0;;) switch (_fun76469_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.emoji;
                var7 = var0.onPress;
                var6 = var0.onLongPress;
                var14 = var0.textStyle;
                var21 = var0.containerStyle;
                var13 = var0.count;
                var15 = var0.emojiSize;
                var19 = var0.selected;
                var17 = var0.animate;
                var12 = var0.animateCount;
                var16 = var0.accessible;
                var4 = var0.disabled;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun76469_ip = 80;
                    continue _fun76469
                }
            case 78:
                var4 = false;
            case 80:
                var0 = _closure1_slot7;
                var10 = var0.bind(var3)();
                var0 = var8.id;
                var5 = null;
                var0 = var5 != var0;
                var11 = undefined;
                if (!var0) {
                    _fun76469_ip = 167;
                    continue _fun76469
                }
            case 107:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getEmojiURL;
                var0 = {};
                var18 = var8.id;
                var0.id = var18;
                if (!var17) {
                    _fun76469_ip = 153;
                    continue _fun76469
                }
            case 147:
                var17 = var8.animated;
            case 153:
                var0.animated = var17;
                var0.size = var15;
                var11 = var1.bind(var2)(var0);
            case 167:
                var20 = undefined;
                if (!var19) {
                    _fun76469_ip = 178;
                    continue _fun76469
                }
            case 172:
                var20 = var10.selected;
            case 178:
                var2 = _closure1_slot5;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 7;
                var0 = var15[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var22 = var10.container;
                var18 = new Array(3);
                var18[0] = var22;
                var18[1] = var21;
                var18[2] = var20;
                var0.style = var18;
                var0.accessible = var16;
                var16 = 17;
                var16 = var15[var16];
                var18 = var17.bind(var3)(var16);
                var17 = var18.getAccessibleEmojiDisplayName;
                var23 = false;
                var27 = var18;
                var26 = var19;
                var25 = var13;
                var24 = var8;
                var16 = var27[var17](var26, var25, var24, var23, var22);
                var0.accessibilityLabel = var16;
                var0.onPress = var7;
                var0.onLongPress = var6;
                var0.disabled = var4;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var4 = 18;
                var4 = var15[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var15 = var10.textEmoji;
                var4.textEmojiStyle = var15;
                var15 = var10.imageEmoji;
                var4.fastImageStyle = var15;
                var4.src = var11;
                var8 = var8.name;
                var4.name = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var5 = var5 != var13;
                if (!var5) {
                    _fun76469_ip = 377;
                    continue _fun76469
                }
            case 371:
                var6 = 0;
                var5 = var13 > var6;
            case 377:
                if (!var5) {
                    _fun76469_ip = 457;
                    continue _fun76469
                }
            case 380:
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.countContainer;
                var6.style = var10;
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var15 = _closure1_slot2;
                var9 = 19;
                var9 = var15[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.textStyle = var14;
                var9.count = var13;
                var9.animate = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 457:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var8 = var7[var0];
    var5 = arg3;
    var0 = undefined;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.jsxs;
    var _closure1_slot5 = var8;
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'paddingHorizontal': 8,
        'borderRadius': null,
        'borderWidth': 1.5,
        'borderColor': null,
        'backgroundColor': null,
        'minWidth': 32,
        'minHeight': 26,
        'maxHeight': 26
    };
    var11 = 4;
    var12 = var7[var11];
    var12 = var13.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var10.borderRadius = var12;
    var12 = 1.5;
    var14 = var7[var11];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var10.borderColor = var14;
    var14 = var7[var11];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var10.backgroundColor = var14;
    var5.container = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var13.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BRAND_560;
    var10.borderColor = var14;
    var10.borderWidth = var12;
    var12 = 5;
    var12 = var7[var12];
    var15 = var6.bind(var0)(var12);
    var14 = var15.hexWithOpacity;
    var12 = var7[var11];
    var12 = var13.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var13 = var12.BRAND_500;
    var12 = 0.3;
    var12 = var14.bind(var15)(var13, var12);
    var10.backgroundColor = var12;
    var5.selected = var10;
    var10 = {};
    var12 = 12;
    var10.fontSize = var12;
    var5.textEmoji = var10;
    var10 = {
        'height': 16,
        'width': 16
    };
    var5.imageEmoji = var10;
    var10 = {};
    var10.paddingStart = var11;
    var5.countContainer = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/native/posts/reactions/ForumPostReactionButton.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 14;
    var2.DEFAULT_EMOJI_SIZE = var5;
    var5 = function arg0() {
        var0 = arg0;
        var8 = var0.count;
        var2 = var0.threadId;
        var10 = var0.containerStyle;
        var0 = _closure1_slot7;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 6;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.threadId = var2;
        var0 = var1.bind(var3)(var0);
        var6 = var0.onTapReactionCount;
        var2 = _closure1_slot6;
        var5 = _closure1_slot0;
        var0 = 7;
        var0 = var7[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {};
        var11 = true;
        var0.accessible = var11;
        var11 = 8;
        var12 = var7[var11];
        var12 = var5.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var7[var11];
        var11 = var5.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.N8hbZB;
        var11 = var12.bind(var13)(var11);
        var0.accessibilityLabel = var11;
        var11 = var9.container;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var0.style = var9;
        var0.onPress = var6;
        var6 = _closure1_slot5;
        var4 = 9;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'heading-sm/medium',
            'color': 'interactive-text-default'
        };
        var7 = ['+'];
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.AdditionalReactionCount = var5;
    var5 = function arg0() {
        _fun76471: for (var _fun76471_ip = 0;;) switch (_fun76471_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.threadId;
                var8 = var0.containerStyle;
                var1 = var0.reactionType;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun76471_ip = 62;
                    continue _fun76471
                }
            case 27:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 10;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ReactionTypes;
                var1 = var0.NORMAL;
            case 62:
                var0 = _closure1_slot7;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 6;
                var0 = var11[var0];
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var0.threadId = var5;
                var0.reactionType = var1;
                var0 = var2.bind(var3)(var0);
                var5 = var0.onTapAddReaction;
                var10 = _closure1_slot0;
                var0 = 11;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var0 = var0.ADD_REACTION_ICON_COMPONENTS;
                var6 = var0[var1];
                var2 = _closure1_slot6;
                var0 = 7;
                var0 = var11[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var9 = var7.container;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var0.style = var7;
                var7 = true;
                var0.accessible = var7;
                var7 = 8;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.lfIHs4;
                var7 = var8.bind(var9)(var7);
                var0.accessibilityLabel = var7;
                var0.onPress = var5;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = 'xs';
                var4.size = var7;
                var4 = var5.bind(var3)(var6, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.AddReactionButton = var5;
    var4 = function arg0() {
        _fun76472: for (var _fun76472_ip = 0;;) switch (_fun76472_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.thread;
                var12 = var0.reaction;
                var _closure2_slot0 = var12;
                var5 = var0.animateCount;
                var9 = var0.containerStyle;
                var8 = var0.textStyle;
                var16 = var0.locationAnalyticsObject;
                var _closure2_slot1 = var16;
                var7 = var0.emojiSize;
                var4 = undefined;
                if (!(var7 === var4)) {
                    _fun76472_ip = 64;
                    continue _fun76472
                }
            case 61:
                var7 = 14;
            case 64:
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 12;
                var0 = var13[var0];
                var0 = var10.bind(var4)(var0);
                var0 = var0.bind(var4)(var11);
                var2 = var0.disableReactionCreates;
                _closure2_slot2 = var2;
                var0 = var0.disableReactionUpdates;
                _closure2_slot3 = var0;
                var6 = 6;
                var6 = var13[var6];
                var10 = var10.bind(var4)(var6);
                var6 = {};
                var11 = var11.id;
                var6.threadId = var11;
                var6 = var10.bind(var4)(var6);
                var10 = var6.onTapReaction;
                _closure2_slot4 = var10;
                var15 = var6.onLongTapReaction;
                _closure2_slot5 = var15;
                var11 = _closure1_slot0;
                var6 = 13;
                var6 = var13[var6];
                var6 = var11.bind(var4)(var6);
                var11 = var6.AnimateEmoji;
                var6 = var11.useSetting;
                var6 = var6.bind(var11)();
                var14 = _closure1_slot3;
                var13 = var14.useCallback;
                var11 = new Array(5);
                var11[0] = var2;
                var11[1] = var0;
                var11[2] = var16;
                var11[3] = var10;
                var11[4] = var12;
                var10 = function() { // Environment: var3
                    var2 = _closure2_slot4;
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1.reaction = var3;
                    var3 = _closure2_slot2;
                    var1.disableReactionCreates = var3;
                    var3 = _closure2_slot3;
                    var1.disableReactionUpdates = var3;
                    var0 = _closure2_slot1;
                    var1.locationAnalyticsObject = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var13.bind(var14)(var10, var11);
                var13 = var14.useCallback;
                var10 = new Array(2);
                var10[0] = var15;
                var10[1] = var12;
                var3 = function() { // Environment: var3
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10 = var13.bind(var14)(var3, var10);
                var13 = !var2;
                if (var13) {
                    _fun76472_ip = 294;
                    continue _fun76472
                }
            case 291:
                var13 = !var0;
            case 294:
                var2 = var12.burst_count;
                var0 = 0;
                if (!(!(var2 > var0))) {
                    _fun76472_ip = 395;
                    continue _fun76472
                }
            case 306:
                var3 = _closure1_slot6;
                var2 = _closure1_slot9;
                var0 = {};
                var0.accessible = var13;
                var14 = var12.emoji;
                var0.emoji = var14;
                var14 = var12.me;
                var0.selected = var14;
                var14 = var12.count;
                var0.count = var14;
                var0.onPress = var11;
                var0.onLongPress = var10;
                var0.containerStyle = var9;
                var0.textStyle = var8;
                var0.emojiSize = var7;
                var0.animate = var6;
                var0.animateCount = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun76472_ip = 502;
                continue _fun76472;
            case 395:
                var3 = _closure1_slot6;
                var2 = _closure1_slot8;
                var1 = {};
                var1.accessible = var13;
                var13 = var12.emoji;
                var1.emoji = var13;
                var13 = var12.me_burst;
                var1.selected = var13;
                var13 = var12.burst_colors;
                var14 = null;
                if (!(var14 == var13)) {
                    _fun76472_ip = 447;
                    continue _fun76472
                }
            case 443:
                var13 = new Array(0);
            case 447:
                var1.colors = var13;
                var12 = var12.burst_count;
                var1.count = var12;
                var1.onPress = var11;
                var1.onLongPress = var10;
                var1.containerStyle = var9;
                var1.textStyle = var8;
                var1.emojiSize = var7;
                var1.animate = var6;
                var1.animateCount = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 502:
                return var0;
        }
    };
    var2.ForumPostReactionButton = var4;
    var2.BurstReactionButton = var3;
    var2.ReactionButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3199, 9714, 4865, 1234, 3900, 6516, 9179, 9171, 1348, 9183, 668, 1417, 3061, 5731, 9723, 2]);