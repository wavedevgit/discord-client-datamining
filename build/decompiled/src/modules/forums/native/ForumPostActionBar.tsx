// modules/forums/native/ForumPostActionBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var12 = 0;
    var3 = var5[var12];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.StyleSheet;
    var6 = var3.useWindowDimensions;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsSections;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var11 = 8;
    var3 = var5[var11];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'overflow': 'hidden',
        'paddingHorizontal': 12,
        'paddingVertical': 8,
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var9 = 9;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var14;
    var13 = var13.hairlineWidth;
    var8.borderBottomWidth = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var8.borderBottomColor = var13;
    var3.actionBarContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var3.actionRow = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var3.reactionRow = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 8,
        'height': 28,
        'marginRight': 4,
        'borderRadius': null,
        'borderWidth': 1
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var8.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var8.borderColor = var13;
    var3.actionButton = var8;
    var8 = {};
    var13 = 'flex-end';
    var8.justifyContent = var13;
    var3.actionButtonsContainer = var8;
    var8 = {};
    var8.marginRight = var12;
    var3.lastActionButton = var8;
    var8 = {};
    var8.marginLeft = var11;
    var3.buttonText = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var11;
    var3.icon = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_BRAND;
    var8.color = var11;
    var3.iconSelected = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var8.borderColor = var9;
    var3.reactionButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/ForumPostActionBar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77191: for (var _fun77191_ip = 0;;) switch (_fun77191_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.channel;
                var _closure2_slot0 = var20;
                var0 = _closure1_slot12;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 10;
                var4 = var2[var0];
                var7 = var1.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var12
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.parent_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var6.bind(var7)(var5, var4);
                var4 = 11;
                var4 = var2[var4];
                var5 = var1.bind(var3)(var4);
                var4 = var5.useFirstForumPostMessage;
                var4 = var4.bind(var5)(var20);
                var18 = var4.firstMessage;
                var4 = var2[var0];
                var7 = var1.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var12
                    var2 = _closure1_slot7;
                    var1 = var2.hasJoined;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var6.bind(var7)(var5, var4);
                var _closure2_slot1 = var8;
                var4 = var20.getGuildId;
                var4 = var4.bind(var20)();
                var _closure2_slot2 = var4;
                var0 = var2[var0];
                var6 = var1.bind(var3)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var12
                    _fun77194: for (var _fun77194_ip = 0;;) switch (_fun77194_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun77194_ip = 38;
                                continue _fun77194
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.isLurking;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var10 = var5.bind(var6)(var4, var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)();
                var0 = var0.width;
                var _closure2_slot3 = var0;
                var6 = _closure1_slot3;
                var5 = var6.useState;
                var4 = 0;
                var11 = var5.bind(var6)(var4);
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7.bind(var3)(var11, var5);
                var17 = var5[var4];
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot4 = var4;
                var5 = var6.useCallback;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function(arg0) { // Environment: var12
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot3;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.width;
                    var1 = var1 - var0;
                    var0 = 40;
                    var1 = var1 - var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var5.bind(var6)(var0, var4);
                var15 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.handleToggleFollowForumPost;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = 13;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useGradientTop;
                var5 = var0.bind(var1)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var16.actionBarContainer;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var4 = null;
                var5 = var4 != var18;
                if (!var5) {
                    _fun77191_ip = 462;
                    continue _fun77191
                }
            case 359:
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var4 = {};
                var13 = var16.reactionRow;
                var4.style = var13;
                var14 = _closure1_slot0;
                var21 = _closure1_slot1;
                var13 = 14;
                var13 = var21[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.ForumPostActionBarReactions;
                var13 = {};
                var13.thread = var20;
                var13.parentChannel = var19;
                var13.firstMessage = var18;
                var13.containerWidth = var17;
                var18 = var16.reactionButton;
                var17 = new Array(1);
                var17[0] = var18;
                var13.reactionContainerStyle = var17;
                var13 = var7.bind(var3)(var14, var13);
                var4.children = var13;
                var5 = var7.bind(var3)(var6, var4);
            case 462:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var14 = var16.actionRow;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = var16.actionButtonsContainer;
                var13[1] = var14;
                var5.style = var13;
                var5.onLayout = var11;
                var10 = !var10;
                if (!var10) {
                    _fun77191_ip = 1003;
                    continue _fun77191
                }
            case 522:
                var13 = _closure1_slot11;
                var14 = _closure1_slot0;
                var17 = _closure1_slot1;
                var11 = 15;
                var11 = var17[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.PressableOpacity;
                var14 = {};
                var17 = true;
                var14.accessible = var17;
                var23 = _closure1_slot0;
                var24 = _closure1_slot1;
                var20 = 16;
                var17 = var24[var20];
                var17 = var23.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var24[var20];
                var17 = var23.bind(var3)(var17);
                var17 = var17.t;
                if (var8) {
                    _fun77191_ip = 800;
                    continue _fun77191
                }
            case 610:
                var8 = var17["DjZ+6E"];
                var8 = var18.bind(var19)(var8);
                var14.accessibilityLabel = var8;
                var8 = var16.actionButton;
                var14.style = var8;
                var14.onPress = var15;
                var25 = _closure1_slot10;
                var8 = 19;
                var8 = var24[var8];
                var8 = var23.bind(var3)(var8);
                var21 = var8.BellIcon;
                var8 = {};
                var22 = 'xs';
                var8.size = var22;
                var21 = var25.bind(var3)(var21, var8);
                var8 = new Array(2);
                var8[0] = var21;
                var21 = 18;
                var21 = var24[var21];
                var21 = var23.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'interactive-text-default'
                };
                var26 = var16.buttonText;
                var21.style = var26;
                var26 = var24[var20];
                var26 = var23.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var24[var20];
                var26 = var23.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26["0rQinA"];
                var26 = var27.bind(var28)(var26);
                var21.children = var26;
                var21 = var25.bind(var3)(var22, var21);
                var8[1] = var21;
                var14.children = var8;
                var8 = var14;
                _fun77191_ip = 997;
                continue _fun77191;
            case 800:
                var17 = var17.G3ooHD;
                var17 = var18.bind(var19)(var17);
                var14.accessibilityLabel = var17;
                var17 = var16.actionButton;
                var14.style = var17;
                var14.onPress = var15;
                var19 = _closure1_slot10;
                var15 = 17;
                var15 = var24[var15];
                var15 = var23.bind(var3)(var15);
                var17 = var15.CheckmarkLargeIcon;
                var15 = {
                    'size': 'xs',
                    'color': 'text-brand'
                };
                var17 = var19.bind(var3)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var17 = 18;
                var17 = var24[var17];
                var17 = var23.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-brand'
                };
                var22 = var16.buttonText;
                var21 = new Array(1);
                var21[0] = var22;
                var17.style = var21;
                var21 = var24[var20];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var24[var20];
                var20 = var23.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["OtF+lC"];
                var20 = var21.bind(var22)(var20);
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var15[1] = var17;
                var14.children = var15;
                var8 = var14;
            case 997:
                var10 = var13.bind(var3)(var11, var8);
            case 1003:
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot10;
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var9 = 15;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.PressableOpacity;
                var9 = {};
                var15 = true;
                var9.accessible = var15;
                var15 = 16;
                var17 = var14[var15];
                var17 = var13.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var14[var15];
                var15 = var13.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.WqhZss;
                var15 = var17.bind(var18)(var15);
                var9.accessibilityLabel = var15;
                var17 = var16.actionButton;
                var15 = new Array(2);
                var15[0] = var17;
                var16 = var16.lastActionButton;
                var15[1] = var16;
                var9.style = var15;
                var12 = function() {
                    _fun77197: for (var _fun77197_ip = 0;;) switch (_fun77197_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.getGuildId;
                            var4 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun77197_ip = 86;
                                continue _fun77197
                            }
                        case 23:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.handleCopyLinkForumPost;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var0 = {};
                            var5 = _closure1_slot9;
                            var5 = var5.CHANNEL_HEADER;
                            var0.section = var5;
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9.onPress = var12;
                var12 = 20;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.LinkIcon;
                var12 = {};
                var14 = 'xs';
                var12.size = var14;
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
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3092, 3093, 1372, 660, 33, 1297, 671, 566, 9796, 9251, 8931, 9856, 4904, 1234, 3262, 3941, 8192, 3254, 2]);