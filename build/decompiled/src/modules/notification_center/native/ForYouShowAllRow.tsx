// modules/notification_center/native/ForYouShowAllRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun103280: for (var _fun103280_ip = 0;;) switch (_fun103280_ip) {
            case 0:
                var0 = arg0;
                var22 = var0.children;
                var29 = var0.count;
                var8 = var0.onPress;
                var4 = var0.panelVariant;
                var7 = undefined;
                if (!(var4 === var7)) {
                    _fun103280_ip = 33;
                    continue _fun103280
                }
            case 31:
                var4 = false;
            case 33:
                var24 = _closure1_slot0;
                var26 = _closure1_slot2;
                var23 = 6;
                var0 = var26[var23];
                var1 = var24.bind(var7)(var0);
                var0 = var1.useMessagesTabLayout;
                var5 = var0.bind(var1)(var4);
                var0 = _closure1_slot10;
                var21 = var0.bind(var7)(var5);
                var0 = var26[var23];
                var1 = var24.bind(var7)(var0);
                var0 = var1.getLayoutStyles;
                var25 = var0.bind(var1)(var5);
                var0 = 12;
                var0 = var26[var0];
                var1 = var24.bind(var7)(var0);
                var0 = var1.useFontScale;
                var12 = var0.bind(var1)();
                var0 = 13;
                var0 = var26[var0];
                var3 = var24.bind(var7)(var0);
                var2 = var3.renderChannelPressableWrapper;
                var6 = _closure1_slot7;
                var0 = 14;
                var0 = var26[var0];
                var0 = var24.bind(var7)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var9 = 'button';
                var0.accessibilityRole = var9;
                var9 = var21.rowActive;
                var9 = var9.backgroundColor;
                var0.underlayColor = var9;
                var0.onPress = var8;
                var9 = var21.pressable;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var10 = var25.container;
                var10 = var10.borderRadius;
                var9.borderRadius = var10;
                var8[1] = var9;
                var0.style = var8;
                var8 = 15;
                var8 = var26[var8];
                var11 = var24.bind(var7)(var8);
                var10 = var11.renderChannelWrapper;
                var13 = _closure1_slot9;
                var9 = _closure1_slot8;
                var8 = {};
                var17 = _closure1_slot7;
                var16 = _closure1_slot4;
                var14 = {};
                var18 = var21.avatar;
                var14.style = var18;
                var20 = _closure1_slot7;
                var18 = 16;
                var18 = var26[var18];
                var18 = var24.bind(var7)(var18);
                var19 = var18.AvatarDuoPile;
                var18 = {};
                var23 = var26[var23];
                var24 = var24.bind(var7)(var23);
                var23 = var24.isLayoutCompact;
                var23 = var23.bind(var24)(var5);
                var26 = _closure1_slot0;
                var27 = _closure1_slot2;
                var24 = 11;
                var24 = var27[var24];
                var24 = var26.bind(var7)(var24);
                var24 = var24.AvatarSizes;
                if (var23) {
                    _fun103280_ip = 355;
                    continue _fun103280
                }
            case 347:
                var23 = var24.SMALL;
                _fun103280_ip = 361;
                continue _fun103280;
            case 355:
                var23 = var24.XSMALL_20;
            case 361:
                var18.size = var23;
                var23 = '';
                var18['aria-label'] = var23;
                var18.children = var22;
                var18 = var20.bind(var7)(var19, var18);
                var14.children = var18;
                var16 = var17.bind(var7)(var16, var14);
                var14 = new Array(3);
                var14[0] = var16;
                var18 = _closure1_slot7;
                var17 = _closure1_slot4;
                var16 = {};
                var19 = var21.textContainer;
                var16.style = var19;
                var24 = _closure1_slot7;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var22 = 17;
                var22 = var20[var22];
                var22 = var19.bind(var7)(var22);
                var23 = var22.Text;
                var22 = {
                    'lineClamp': 1,
                    'variant': null,
                    'color': 'text-brand'
                };
                var25 = var25.channelName;
                var25 = var25.text;
                var25 = var25.variant;
                var22.variant = var25;
                var25 = var21.nameText;
                var22.style = var25;
                var25 = 18;
                var26 = var20[var25];
                var26 = var19.bind(var7)(var26);
                var28 = var26.intl;
                var27 = var28.format;
                var25 = var20[var25];
                var25 = var19.bind(var7)(var25);
                var25 = var25.t;
                var26 = var25.NrzztX;
                var25 = {};
                var25.count = var29;
                var25 = var27.bind(var28)(var26, var25);
                var22.children = var25;
                var22 = var24.bind(var7)(var23, var22);
                var16.children = var22;
                var16 = var18.bind(var7)(var17, var16);
                var14[1] = var16;
                var17 = _closure1_slot7;
                var22 = _closure1_slot1;
                var18 = 19;
                var15 = var20[var18];
                var16 = var22.bind(var7)(var15);
                var15 = {};
                var23 = var21.icon;
                var15.style = var23;
                var21 = var21.iconColor;
                var21 = var21.color;
                var15.color = var21;
                var21 = 20;
                var21 = var20[var21];
                var21 = var22.bind(var7)(var21);
                var15.source = var21;
                var18 = var20[var18];
                var18 = var19.bind(var7)(var18);
                var18 = var18.IconSizes;
                var18 = var18.CUSTOM;
                var15.size = var18;
                var15 = var17.bind(var7)(var16, var15);
                var14[2] = var15;
                var8.children = var14;
                var9 = var13.bind(var7)(var9, var8);
                var8 = {};
                var8.layout = var5;
                var8.fontScale = var12;
                var8.panelVariant = var4;
                var8 = var10.bind(var11)(var9, var8);
                var0.children = var8;
                var1 = var6.bind(var7)(var1, var0);
                var0 = {};
                var0.layout = var5;
                var0.panelVariant = var4;
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
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Sections;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun103281: for (var _fun103281_ip = 0;;) switch (_fun103281_ip) {
            case 0:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 6;
                var1 = var10[var0];
                var4 = undefined;
                var5 = var9.bind(var4)(var1);
                var3 = var5.getLayoutStyles;
                var1 = arg0;
                var6 = var3.bind(var5)(var1);
                var0 = var10[var0];
                var3 = var9.bind(var4)(var0);
                var1 = var3.makeSizeStyle;
                var0 = var6.icon;
                var0 = var0.wrapper;
                var0 = var0.size;
                var7 = var1.bind(var3)(var0);
                var0 = {};
                var1 = {};
                var12 = _closure1_slot1;
                var5 = 7;
                var3 = var10[var5];
                var3 = var12.bind(var4)(var3);
                var3 = var3.colors;
                var3 = var3.BACKGROUND_MOD_MUTED;
                var1.backgroundColor = var3;
                var0.rowActive = var1;
                var1 = {};
                var3 = 1;
                var1.flex = var3;
                var0.pressable = var1;
                var1 = {
                    'flexDirection': 'column',
                    'flexGrow': 2,
                    'flexShrink': 2,
                    'alignSelf': 'center',
                    'overflow': 'hidden',
                    'marginTop': 4294967294
                };
                var8 = 2;
                var11 = var10[var5];
                var11 = var12.bind(var4)(var11);
                var11 = var11.spacing;
                var11 = var11.PX_8;
                var1.marginRight = var11;
                var0.textContainer = var1;
                var1 = {};
                var1.flexShrink = var3;
                var3 = 8;
                var3 = var10[var3];
                var9 = var9.bind(var4)(var3);
                var3 = var9.isAndroid;
                var9 = var3.bind(var9)();
                var3 = 0;
                if (!var9) {
                    _fun103281_ip = 213;
                    continue _fun103281
                }
            case 210:
                var3 = var8;
            case 213:
                var1.marginBottom = var3;
                var0.nameText = var1;
                var1 = {
                    'position': 'relative',
                    'borderRadius': null,
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'flexShrink': 0,
                    'flexGrow': 0
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var8 = var2[var5];
                var8 = var3.bind(var4)(var8);
                var8 = var8.radii;
                var8 = var8.round;
                var1.borderRadius = var8;
                var14 = var1;
                var13 = var7;
                var7 = copyDataProperties(var14, var13);
                var6 = var6.icon;
                var6 = var6.margin;
                var7 = var6.marginRight;
                var6 = 4;
                var7 = var7 + var6;
                var6 = 'marginRight';
                var1[var6] = var7;
                var0.avatar = var1;
                var1 = {
                    'width': 8,
                    'height': 32
                };
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_24;
                var1.paddingRight = var6;
                var0.icon = var1;
                var1 = {};
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.INTERACTIVE_TEXT_DEFAULT;
                var1.color = var2;
                var0.iconColor = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/native/ForYouShowAllRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103282: for (var _fun103282_ip = 0;;) switch (_fun103282_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.suggestedFriends;
                var _closure2_slot0 = var6;
                var4 = var0.panelVariant;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun103282_ip = 29;
                    continue _fun103282
                }
            case 27:
                var4 = false;
            case 29:
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var5 = var7.bind(var3)(var2);
                var2 = var5.useNavigation;
                var2 = var2.bind(var5)();
                _closure2_slot1 = var2;
                var5 = 6;
                var5 = var8[var5];
                var7 = var7.bind(var3)(var5);
                var5 = var7.useMessagesTabLayout;
                var9 = var5.bind(var7)(var4);
                _closure2_slot2 = var9;
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var5 = new Array(2);
                var5[0] = var2;
                var5[1] = var6;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot5;
                    var3 = var2.FRIEND_FINDER_SECTION_EXPANDED;
                    var2 = {};
                    var1 = _closure1_slot6;
                    var1 = var1.FRIEND_SUGGESTIONS;
                    var2.section_id = var1;
                    var1 = 2;
                    var2.truncated_count = var1;
                    var6 = _closure2_slot0;
                    var6 = var6.length;
                    var2.expanded_count = var6;
                    var6 = 'NotificationsTab';
                    var2.location = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var4 = _closure2_slot1;
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = 'suggested-friends';
                    var2.screen = var1;
                    var1 = {};
                    var5 = 'card';
                    var1.presentation = var5;
                    var2.params = var1;
                    var1 = 'friends';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var5 = var7.bind(var8)(var2, var5);
                var7 = var8.useMemo;
                var2 = new Array(2);
                var2[0] = var9;
                var2[1] = var6;
                var1 = function() { // Environment: var1
                    var3 = _closure2_slot0;
                    var2 = var3.slice;
                    var1 = 2;
                    var0 = 4;
                    var2 = var2.bind(var3)(var1, var0);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun103285: for (var _fun103285_ip = 0;;) switch (_fun103285_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = _closure1_slot7;
                                var2 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var8 = 11;
                                var1 = var9[var8];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = {};
                                var5 = var0.user;
                                var1.user = var5;
                                var1.guildId = var3;
                                var7 = _closure1_slot0;
                                var5 = 6;
                                var5 = var9[var5];
                                var9 = var7.bind(var3)(var5);
                                var7 = var9.isLayoutCompact;
                                var5 = _closure2_slot2;
                                var5 = var7.bind(var9)(var5);
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var8];
                                var6 = var7.bind(var3)(var6);
                                var6 = var6.AvatarSizes;
                                if (var5) {
                                    _fun103285_ip = 115;
                                    continue _fun103285
                                }
                            case 107:
                                var5 = var6.SMALL;
                                _fun103285_ip = 121;
                                continue _fun103285;
                            case 115:
                                var5 = var6.XSMALL_20;
                            case 121:
                                var1.size = var5;
                                var0 = var0.user;
                                var0 = var0.id;
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var8)(var1, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot11;
                var0 = {};
                var0.children = var7;
                var6 = var6.length;
                var0.count = var6;
                var0.onPress = var5;
                var0.panelVariant = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForYouSuggestedFriendShowAllRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 10446, 33, 1297, 8782, 671, 478, 1469, 795, 5447, 4081, 13485, 4897, 13486, 11426, 3932, 1234, 4077, 4902, 2]);