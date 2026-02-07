// modules/user_settings/native/chat/SettingsChatScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun85957: for (var _fun85957_ip = 0;;) switch (_fun85957_ip) {
            case 0:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 9;
                var0 = var8[var0];
                var3 = undefined;
                var1 = var9.bind(var3)(var0);
                var0 = var1.useStackNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var0 = _closure1_slot11;
                var26 = var0.bind(var3)();
                var0 = 10;
                var0 = var8[var0];
                var4 = var9.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = _closure1_slot6;
                var1[1] = var0;
                var0 = function() { // Environment: var23
                    var2 = _closure1_slot6;
                    var1 = var2.getPremiumTypeSubscription;
                    var3 = var1.bind(var2)();
                    var2 = _closure1_slot5;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var0 = var1.hasPremiumSubscriptionToDisplay;
                    var0 = var0.bind(var1)(var2, var3);
                    return var0;
                };
                var5 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = _closure1_slot9;
                var16 = 12;
                var4 = var8[var16];
                var4 = var9.bind(var3)(var4);
                var6 = var4.TextWithIOSLinkWorkaround;
                var4 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var24 = 13;
                var10 = var8[var24];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var8[var24];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8["Up+hSO"];
                var8 = {};
                var12 = 'https://support.discord.com/hc/articles/9665451164951';
                var8.supportURL = var12;
                var8 = var10.bind(var11)(var9, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var5 = !var5;
                if (!var5) {
                    _fun85957_ip = 567;
                    continue _fun85957
                }
            case 233:
                var8 = _closure1_slot9;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var26.card;
                var6.style = var9;
                var11 = _closure1_slot9;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = 14;
                var9 = var19[var9];
                var9 = var20.bind(var3)(var9);
                var10 = var9.Card;
                var9 = {
                    'border': 'none',
                    'shadow': 'none'
                };
                var14 = _closure1_slot10;
                var13 = _closure1_slot4;
                var12 = {};
                var15 = var26.cardContent;
                var12.style = var15;
                var21 = _closure1_slot9;
                var25 = _closure1_slot1;
                var22 = 15;
                var15 = var19[var22];
                var18 = var25.bind(var3)(var15);
                var15 = {};
                var26 = var26.cardIcon;
                var15.style = var26;
                var26 = 16;
                var26 = var19[var26];
                var26 = var25.bind(var3)(var26);
                var15.source = var26;
                var22 = var19[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.Sizes;
                var22 = var22.SMALL;
                var15.size = var22;
                var22 = 8;
                var22 = var19[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.unsafe_rawColors;
                var22 = var22.PRIMARY_400;
                var15.color = var22;
                var18 = var21.bind(var3)(var18, var15);
                var15 = new Array(2);
                var15[0] = var18;
                var18 = _closure1_slot9;
                var16 = var19[var16];
                var16 = var20.bind(var3)(var16);
                var17 = var16.TextWithIOSLinkWorkaround;
                var16 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var21 = var19[var24];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var19 = var19[var24];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19.uW1zul;
                var19 = {};
                var23 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.setSection;
                    var2 = _closure1_slot8;
                    var2 = var2.PREMIUM;
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var1 = _closure1_slot8;
                    var2 = var1.PREMIUM;
                    var1 = {};
                    var5 = true;
                    var1.isFromTextSection = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var19.onClick = var23;
                var19 = var21.bind(var22)(var20, var19);
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var15[1] = var16;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 567:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MobileSetting;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginTop': 8,
        'borderColor': null,
        'borderWidth': 1
    };
    var9 = 8;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.REDESIGN_INPUT_CONTROL_SELECTED;
    var8.borderColor = var10;
    var10 = var5[var9];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var8.borderRadius = var10;
    var3.card = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.cardContent = var8;
    var8 = {};
    var8.marginEnd = var9;
    var3.cardIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/chat/SettingsChatScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun85960: for (var _fun85960_ip = 0;;) switch (_fun85960_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.route;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var7 = null;
                var8 = var7 == var2;
                var3 = undefined;
                var6 = undefined;
                if (var8) {
                    _fun85960_ip = 61;
                    continue _fun85960
                }
            case 40:
                var2 = var2.params;
                var7 = var7 == var2;
                var6 = undefined;
                if (var7) {
                    _fun85960_ip = 61;
                    continue _fun85960
                }
            case 55:
                var6 = var2.initialSetting;
            case 61:
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var1
                    _fun85961: for (var _fun85961_ip = 0;;) switch (_fun85961_ip) {
                        case 0:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var0 = 18;
                            var0 = var10[var0];
                            var6 = undefined;
                            var2 = var9.bind(var6)(var0);
                            var1 = var2.createList;
                            var0 = {};
                            var4 = {};
                            var5 = 13;
                            var3 = var10[var5];
                            var3 = var9.bind(var6)(var3);
                            var11 = var3.intl;
                            var7 = var11.string;
                            var3 = var10[var5];
                            var3 = var9.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3.U68Dgp;
                            var3 = var7.bind(var11)(var3);
                            var4.label = var3;
                            var7 = _closure1_slot7;
                            var11 = var7.DISPLAY_MEDIA_LINKS;
                            var3 = new Array(3);
                            var3[0] = var11;
                            var11 = var7.DISPLAY_MEDIA_UPLOADS;
                            var3[1] = var11;
                            var11 = var7.IMAGE_DESCRIPTIONS;
                            var3[2] = var11;
                            var4.settings = var3;
                            var3 = var10[var5];
                            var3 = var9.bind(var6)(var3);
                            var12 = var3.intl;
                            var11 = var12.string;
                            var3 = var10[var5];
                            var3 = var9.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3.T0rbtM;
                            var3 = var11.bind(var12)(var3);
                            var4.subLabel = var3;
                            var3 = new Array(9);
                            var3[0] = var4;
                            var4 = {};
                            var11 = var10[var5];
                            var11 = var9.bind(var6)(var11);
                            var13 = var11.intl;
                            var12 = var13.string;
                            var11 = var10[var5];
                            var11 = var9.bind(var6)(var11);
                            var11 = var11.t;
                            var11 = var11.YTnrbV;
                            var11 = var12.bind(var13)(var11);
                            var4.label = var11;
                            var12 = var7.SAVE_CAMERA_UPLOADS_TO_DEVICE;
                            var11 = new Array(1);
                            var11[0] = var12;
                            var4.settings = var11;
                            var11 = var10[var5];
                            var11 = var9.bind(var6)(var11);
                            var13 = var11.intl;
                            var12 = var13.string;
                            var11 = var10[var5];
                            var11 = var9.bind(var6)(var11);
                            var11 = var11.t;
                            var11 = var11.eZmJYE;
                            var11 = var12.bind(var13)(var11);
                            var4.subLabel = var11;
                            var3[1] = var4;
                            var4 = {};
                            var12 = var7.VIDEO_UPLOAD_QUALITY;
                            var11 = new Array(1);
                            var11[0] = var12;
                            var4.settings = var11;
                            var12 = _closure1_slot9;
                            var11 = _closure1_slot12;
                            var8 = {};
                            var8 = var12.bind(var6)(var11, var8);
                            var4.subLabel = var8;
                            var3[2] = var4;
                            var4 = {};
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8.fyG8t2;
                            var8 = var11.bind(var12)(var8);
                            var4.label = var8;
                            var11 = var7.DATA_SAVING_MODE;
                            var8 = new Array(1);
                            var8[0] = var11;
                            var4.settings = var8;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8["wC0+Ph"];
                            var8 = var11.bind(var12)(var8);
                            var4.subLabel = var8;
                            var3[3] = var4;
                            var4 = {};
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8.PWZOn4;
                            var8 = var11.bind(var12)(var8);
                            var4.label = var8;
                            var11 = var7.EMBED_AND_LINK_PREVIEWS;
                            var8 = new Array(1);
                            var8[0] = var11;
                            var4.settings = var8;
                            var3[4] = var4;
                            var4 = {};
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8.sMOuuS;
                            var8 = var11.bind(var12)(var8);
                            var4.label = var8;
                            var11 = var7.EMOJI_REACTIONS_ON_MESSAGES;
                            var8 = new Array(2);
                            var8[0] = var11;
                            var11 = var7.CHAT_EMOJI_EMOTICONS;
                            var8[1] = var11;
                            var4.settings = var8;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8["20dvuQ"];
                            var8 = var11.bind(var12)(var8);
                            var4.subLabel = var8;
                            var3[5] = var4;
                            var4 = {};
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8["29xPVZ"];
                            var8 = var11.bind(var12)(var8);
                            var4.label = var8;
                            var11 = var7.STICKER_AUTOCOMPLETE;
                            var8 = new Array(1);
                            var8[0] = var11;
                            var4.settings = var8;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8["/eVrj8"];
                            var8 = var11.bind(var12)(var8);
                            var4.subLabel = var8;
                            var3[6] = var4;
                            var4 = {};
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8["4NDJgM"];
                            var8 = var11.bind(var12)(var8);
                            var4.label = var8;
                            var11 = var7.SWIPE_RIGHT_TO_LEFT;
                            var8 = new Array(3);
                            var8[0] = var11;
                            var11 = var7.DOUBLE_TAP_TO_REACT_ENABLED;
                            var8[1] = var11;
                            var11 = var7.DOUBLE_TAP_EMOJI;
                            var8[2] = var11;
                            var4.settings = var8;
                            var3[7] = var4;
                            var4 = {};
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var12 = var8.intl;
                            var11 = var12.string;
                            var8 = var10[var5];
                            var8 = var9.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8.BkuOO6;
                            var8 = var11.bind(var12)(var8);
                            var4.label = var8;
                            var8 = var7.TEXT_AND_MEDIA_SYNC;
                            var7 = new Array(1);
                            var7[0] = var8;
                            var4.settings = var7;
                            var7 = var10[var5];
                            var7 = var9.bind(var6)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var5 = var10[var5];
                            var5 = var9.bind(var6)(var5);
                            var5 = var5.t;
                            var5 = var5.p4IKE9;
                            var5 = var7.bind(var8)(var5);
                            var4.subLabel = var5;
                            var3[8] = var4;
                            var0.sections = var3;
                            var3 = _closure2_slot0;
                            var5 = null;
                            var7 = var5 == var3;
                            var3 = undefined;
                            if (var7) {
                                _fun85961_ip = 1076;
                                continue _fun85961
                            }
                        case 1051:
                            var4 = _closure2_slot0;
                            var4 = var4.params;
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun85961_ip = 1076;
                                continue _fun85961
                            }
                        case 1070:
                            var3 = var4.initialSetting;
                        case 1076:
                            var0.scrollTarget = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 19;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.node = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 3119, 7077, 660, 33, 1297, 671, 1469, 632, 3111, 5384, 1234, 4902, 4086, 6728, 7295, 9067, 10260, 2]);