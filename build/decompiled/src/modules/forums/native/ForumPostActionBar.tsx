// modules/forums/native/ForumPostActionBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
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
    var14 = 0;
    var3 = var5[var14];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var15 = var3.StyleSheet;
    var6 = var3.useWindowDimensions;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsSections;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var13 = 8;
    var3 = var5[var13];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var10 = {
        'overflow': 'hidden',
        'paddingHorizontal': 12,
        'paddingVertical': 8,
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var3 = 12;
    var11 = 9;
    var16 = var5[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var16;
    var15 = var15.hairlineWidth;
    var10.borderBottomWidth = var15;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var10.borderBottomColor = var15;
    var6.actionBarContainer = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var6.actionRow = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var6.reactionRow = var10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 8,
        'height': 28,
        'marginRight': 4,
        'borderRadius': null,
        'borderWidth': 1
    };
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var10.borderRadius = var15;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10.backgroundColor = var15;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10.borderColor = var15;
    var6.actionButton = var10;
    var10 = {};
    var15 = 'flex-end';
    var10.justifyContent = var15;
    var6.actionButtonsContainer = var10;
    var10 = {};
    var10.marginRight = var14;
    var6.lastActionButton = var10;
    var10 = {};
    var10.marginLeft = var13;
    var6.buttonText = var10;
    var10 = {};
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10.backgroundColor = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10.borderColor = var11;
    var6.reactionButton = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot12 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var9 = var6.CheckmarkLargeIcon;
    var8 = 'xs';
    var6 = {
        'size': 'xs',
        'color': 'text-brand'
    };
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot13 = var6;
    var6 = 11;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var9 = var6.BellIcon;
    var6 = {};
    var6.size = var8;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot14 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.LinkIcon;
    var3 = {};
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot15 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/ForumPostActionBar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77346: for (var _fun77346_ip = 0;;) switch (_fun77346_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.channel;
                var _closure2_slot0 = var20;
                var0 = _closure1_slot12;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 13;
                var4 = var2[var0];
                var7 = var1.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var13
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.parent_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var6.bind(var7)(var5, var4);
                var4 = 14;
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
                var4 = function() { // Environment: var13
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
                var0 = function() { // Environment: var13
                    _fun77349: for (var _fun77349_ip = 0;;) switch (_fun77349_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun77349_ip = 38;
                                continue _fun77349
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
                var9 = var5.bind(var6)(var4, var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var3)();
                var0 = var0.width;
                var _closure2_slot3 = var0;
                var6 = _closure1_slot3;
                var5 = var6.useState;
                var4 = 0;
                var10 = var5.bind(var6)(var4);
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7.bind(var3)(var10, var5);
                var17 = var5[var4];
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot4 = var4;
                var5 = var6.useCallback;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function(arg0) { // Environment: var13
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
                var10 = var5.bind(var6)(var0, var4);
                var16 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.handleToggleFollowForumPost;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = 16;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useGradientTop;
                var5 = var0.bind(var1)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var15.actionBarContainer;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var4 = null;
                var5 = var4 != var18;
                if (!var5) {
                    _fun77346_ip = 462;
                    continue _fun77346
                }
            case 359:
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var4 = {};
                var11 = var15.reactionRow;
                var4.style = var11;
                var14 = _closure1_slot0;
                var21 = _closure1_slot1;
                var11 = 17;
                var11 = var21[var11];
                var11 = var14.bind(var3)(var11);
                var14 = var11.ForumPostActionBarReactions;
                var11 = {};
                var11.thread = var20;
                var11.parentChannel = var19;
                var11.firstMessage = var18;
                var11.containerWidth = var17;
                var18 = var15.reactionButton;
                var17 = new Array(1);
                var17[0] = var18;
                var11.reactionContainerStyle = var17;
                var11 = var7.bind(var3)(var14, var11);
                var4.children = var11;
                var5 = var7.bind(var3)(var6, var4);
            case 462:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var14 = var15.actionRow;
                var11 = new Array(2);
                var11[0] = var14;
                var14 = var15.actionButtonsContainer;
                var11[1] = var14;
                var5.style = var11;
                var5.onLayout = var10;
                var9 = !var9;
                if (!var9) {
                    _fun77346_ip = 939;
                    continue _fun77346
                }
            case 522:
                var11 = _closure1_slot11;
                var14 = _closure1_slot0;
                var17 = _closure1_slot1;
                var10 = 18;
                var10 = var17[var10];
                var10 = var14.bind(var3)(var10);
                var10 = var10.PressableOpacity;
                var14 = {};
                var17 = true;
                var14.accessible = var17;
                var23 = _closure1_slot0;
                var24 = _closure1_slot1;
                var20 = 19;
                var17 = var24[var20];
                var17 = var23.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var24[var20];
                var17 = var23.bind(var3)(var17);
                var17 = var17.t;
                if (var8) {
                    _fun77346_ip = 770;
                    continue _fun77346
                }
            case 610:
                var8 = var17["DjZ+6E"];
                var8 = var18.bind(var19)(var8);
                var14.accessibilityLabel = var8;
                var8 = var15.actionButton;
                var14.style = var8;
                var14.onPress = var16;
                var21 = _closure1_slot14;
                var8 = new Array(2);
                var8[0] = var21;
                var25 = _closure1_slot10;
                var21 = 20;
                var21 = var24[var21];
                var21 = var23.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'interactive-text-default'
                };
                var26 = var15.buttonText;
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
                _fun77346_ip = 933;
                continue _fun77346;
            case 770:
                var17 = var17.G3ooHD;
                var17 = var18.bind(var19)(var17);
                var14.accessibilityLabel = var17;
                var17 = var15.actionButton;
                var14.style = var17;
                var14.onPress = var16;
                var17 = _closure1_slot13;
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot10;
                var17 = 20;
                var17 = var24[var17];
                var17 = var23.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-brand'
                };
                var22 = var15.buttonText;
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
                var16[1] = var17;
                var14.children = var16;
                var8 = var14;
            case 933:
                var9 = var11.bind(var3)(var10, var8);
            case 939:
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot10;
                var18 = _closure1_slot0;
                var19 = _closure1_slot1;
                var9 = 18;
                var9 = var19[var9];
                var9 = var18.bind(var3)(var9);
                var10 = var9.PressableOpacity;
                var9 = {};
                var14 = true;
                var9.accessible = var14;
                var14 = 19;
                var16 = var19[var14];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var19[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.WqhZss;
                var14 = var16.bind(var17)(var14);
                var9.accessibilityLabel = var14;
                var16 = var15.actionButton;
                var14 = new Array(2);
                var14[0] = var16;
                var15 = var15.lastActionButton;
                var14[1] = var15;
                var9.style = var14;
                var13 = function() {
                    _fun77352: for (var _fun77352_ip = 0;;) switch (_fun77352_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.getGuildId;
                            var4 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun77352_ip = 86;
                                continue _fun77352
                            }
                        case 23:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 15;
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
                var9.onPress = var13;
                var12 = _closure1_slot15;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3094, 3095, 1372, 660, 33, 1297, 671, 3263, 8303, 3255, 566, 9477, 9449, 7718, 9797, 4880, 1234, 3938, 2]);