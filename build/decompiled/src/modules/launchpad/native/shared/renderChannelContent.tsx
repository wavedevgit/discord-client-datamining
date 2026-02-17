// modules/launchpad/native/shared/renderChannelContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun110740: for (var _fun110740_ip = 0;;) switch (_fun110740_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var5;
            var0 = function arg0() {
                _fun110741: for (var _fun110741_ip = 0;;) switch (_fun110741_ip) {
                    case 0:
                        var2 = arg0;
                        var37 = var2.name;
                        var21 = var2.subtitle;
                        var35 = var2.unread;
                        var30 = var2.resolvedUnreadSetting;
                        var0 = var2.locked;
                        var22 = var2.muted;
                        var18 = var2.lastMessageTimestampString;
                        var1 = var2.channel;
                        var31 = var2.channelCategoryName;
                        var29 = var2.connected;
                        var27 = var2.mentionCount;
                        var17 = var2.mentionBadge;
                        var32 = var2.isSubscriptionGated;
                        var36 = var2.needSubscriptionToAccess;
                        var2 = _closure1_slot9;
                        var3 = undefined;
                        var14 = var2.bind(var3)();
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var2 = var4.bind(var3)(var2);
                        var25 = var2.bind(var3)();
                        var26 = null;
                        var34 = var26 != var1;
                        if (!var34) {
                            _fun110741_ip = 162;
                            continue _fun110741
                        }
                    case 131:
                        if (var0) {
                            _fun110741_ip = 159;
                            continue _fun110741
                        }
                    case 134:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var2 = var5[var2];
                        var2 = var4.bind(var3)(var2);
                        var0 = var2.bind(var3)(var1);
                    case 159:
                        var34 = var0;
                    case 162:
                        var0 = var26 == var1;
                        var33 = undefined;
                        if (var0) {
                            _fun110741_ip = 181;
                            continue _fun110741
                        }
                    case 171:
                        var0 = var1.isNSFW;
                        var33 = var0.bind(var1)();
                    case 181:
                        var1 = _closure1_slot3;
                        var0 = var1.isValidElement;
                        var15 = var0.bind(var1)(var21);
                        var19 = var26 != var18;
                        var12 = var19;
                        if (!var19) {
                            _fun110741_ip = 210;
                            continue _fun110741
                        }
                    case 206:
                        var12 = var26 == var17;
                    case 210:
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var4 = var14.channelContent;
                        var0.style = var4;
                        var6 = _closure1_slot8;
                        var5 = _closure1_slot4;
                        var4 = {};
                        var7 = var14.channelContainer;
                        var4.style = var7;
                        var9 = _closure1_slot8;
                        var8 = _closure1_slot4;
                        var7 = {};
                        var11 = var14.leftBox;
                        var10 = new Array(2);
                        var10[0] = var11;
                        var11 = {};
                        var16 = 'center';
                        if (!var15) {
                            _fun110741_ip = 289;
                            continue _fun110741
                        }
                    case 283:
                        var16 = 'space-between';
                    case 289:
                        var11.justifyContent = var16;
                        var10[1] = var11;
                        var7.style = var10;
                        var16 = _closure1_slot8;
                        var11 = _closure1_slot4;
                        var10 = {};
                        var20 = {
                            'flexDirection': 'row',
                            'paddingRight': null,
                            'alignItems': 'center'
                        };
                        var23 = 0;
                        var24 = 0;
                        if (!var12) {
                            _fun110741_ip = 335;
                            continue _fun110741
                        }
                    case 332:
                        var24 = 30;
                    case 335:
                        var20.paddingRight = var24;
                        var10.style = var20;
                        var28 = _closure1_slot7;
                        var24 = _closure1_slot1;
                        var38 = _closure1_slot2;
                        var20 = 9;
                        var20 = var38[var20];
                        var24 = var24.bind(var3)(var20);
                        var20 = {};
                        var20.title = var37;
                        var20.muted = var22;
                        var20.unread = var35;
                        if (!(var26 == var30)) {
                            _fun110741_ip = 399;
                            continue _fun110741
                        }
                    case 389:
                        var35 = _closure1_slot6;
                        var30 = var35.ONLY_MENTIONS;
                    case 399:
                        var20.resolvedUnreadSetting = var30;
                        var20.connected = var29;
                        var24 = var28.bind(var3)(var24, var20);
                        var20 = new Array(3);
                        var20[0] = var24;
                        var28 = var26 != var31;
                        var24 = null;
                        if (!var28) {
                            _fun110741_ip = 499;
                            continue _fun110741
                        }
                    case 432:
                        var30 = _closure1_slot7;
                        var29 = _closure1_slot0;
                        var35 = _closure1_slot2;
                        var28 = 10;
                        var28 = var35[var28];
                        var28 = var29.bind(var3)(var28);
                        var29 = var28.Text;
                        var28 = {
                            'variant': 'text-xs/bold',
                            'color': 'text-muted'
                        };
                        var35 = {};
                        var37 = 4;
                        var35.marginRight = var37;
                        var28.style = var35;
                        var28.children = var31;
                        var24 = var30.bind(var3)(var29, var28);
                    case 499:
                        var20[1] = var24;
                        var24 = var34;
                        if (var34) {
                            _fun110741_ip = 512;
                            continue _fun110741
                        }
                    case 509:
                        var24 = var33;
                    case 512:
                        if (!var24) {
                            _fun110741_ip = 781;
                            continue _fun110741
                        }
                    case 518:
                        var30 = _closure1_slot8;
                        var29 = _closure1_slot4;
                        var28 = {};
                        var35 = var14.channelTraits;
                        var31 = new Array(2);
                        var31[0] = var35;
                        var35 = {};
                        var37 = 1;
                        var38 = var37;
                        if (!var34) {
                            _fun110741_ip = 562;
                            continue _fun110741
                        }
                    case 553:
                        var38 = var37;
                        if (!var33) {
                            _fun110741_ip = 562;
                            continue _fun110741
                        }
                    case 559:
                        var38 = 2;
                    case 562:
                        var37 = 14;
                        var37 = var37 * var38;
                        var35.maxWidth = var37;
                        var31[1] = var35;
                        var28.style = var31;
                        if (!var34) {
                            _fun110741_ip = 645;
                            continue _fun110741
                        }
                    case 585:
                        var37 = _closure1_slot7;
                        var35 = _closure1_slot0;
                        var38 = _closure1_slot2;
                        var31 = 11;
                        var31 = var38[var31];
                        var31 = var35.bind(var3)(var31);
                        var35 = var31.LockIcon;
                        var31 = {
                            'size': 'xxs',
                            'color': 'icon-muted'
                        };
                        var38 = var14.channelTraitIcon;
                        var31.style = var38;
                        var34 = var37.bind(var3)(var35, var31);
                    case 645:
                        var31 = new Array(3);
                        var31[0] = var34;
                        if (!var33) {
                            _fun110741_ip = 716;
                            continue _fun110741
                        }
                    case 656:
                        var37 = _closure1_slot7;
                        var35 = _closure1_slot0;
                        var38 = _closure1_slot2;
                        var34 = 12;
                        var34 = var38[var34];
                        var34 = var35.bind(var3)(var34);
                        var35 = var34.WarningIcon;
                        var34 = {
                            'size': 'xxs',
                            'color': 'icon-muted'
                        };
                        var38 = var14.channelTraitIcon;
                        var34.style = var38;
                        var33 = var37.bind(var3)(var35, var34);
                    case 716:
                        var31[1] = var33;
                        if (!var32) {
                            _fun110741_ip = 767;
                            continue _fun110741
                        }
                    case 723:
                        var35 = _closure1_slot7;
                        var34 = _closure1_slot1;
                        var37 = _closure1_slot2;
                        var33 = 13;
                        var33 = var37[var33];
                        var34 = var34.bind(var3)(var33);
                        var33 = {};
                        var33.locked = var36;
                        var36 = true;
                        var33.isInMainTabsExperiment = var36;
                        var32 = var35.bind(var3)(var34, var33);
                    case 767:
                        var31[2] = var32;
                        var28.children = var31;
                        var24 = var30.bind(var3)(var29, var28);
                    case 781:
                        var20[2] = var24;
                        var10.children = var20;
                        var11 = var16.bind(var3)(var11, var10);
                        var10 = new Array(2);
                        var10[0] = var11;
                        var11 = null;
                        if (!var15) {
                            _fun110741_ip = 898;
                            continue _fun110741
                        }
                    case 808:
                        var20 = _closure1_slot7;
                        var16 = _closure1_slot4;
                        var15 = {};
                        var24 = {};
                        var28 = var26 != var27;
                        var26 = 0;
                        if (!var28) {
                            _fun110741_ip = 832;
                            continue _fun110741
                        }
                    case 829:
                        var26 = var27;
                    case 832:
                        var26 = var26 > var23;
                        var23 = 0;
                        if (!var26) {
                            _fun110741_ip = 844;
                            continue _fun110741
                        }
                    case 841:
                        var23 = 20;
                    case 844:
                        var24.paddingRight = var23;
                        var23 = new Array(2);
                        var23[0] = var24;
                        var24 = {};
                        var25 = var25.messagePreview;
                        var25 = var25.margin;
                        var25 = var25.marginTop;
                        var24.marginTop = var25;
                        var23[1] = var24;
                        var15.style = var23;
                        var15.children = var21;
                        var11 = var20.bind(var3)(var16, var15);
                    case 898:
                        var10[1] = var11;
                        var7.children = var10;
                        var8 = var9.bind(var3)(var8, var7);
                        var7 = new Array(2);
                        var7[0] = var8;
                        var10 = _closure1_slot8;
                        var9 = _closure1_slot4;
                        var8 = {};
                        if (var12) {
                            _fun110741_ip = 941;
                            continue _fun110741
                        }
                    case 933:
                        var11 = var14.rightBox;
                        _fun110741_ip = 947;
                        continue _fun110741;
                    case 941:
                        var11 = var14.rightContentAbsolute;
                    case 947:
                        var8.style = var11;
                        var14 = var19;
                        if (!var19) {
                            _fun110741_ip = 1041;
                            continue _fun110741
                        }
                    case 957:
                        var16 = _closure1_slot7;
                        var15 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var11 = 10;
                        var11 = var20[var11];
                        var11 = var15.bind(var3)(var11);
                        var15 = var11.Text;
                        var11 = {
                            'variant': 'text-xs/medium',
                            'color': 'text-muted',
                            'style': null,
                            'maxFontSizeMultiplier': 1.75
                        };
                        var20 = {};
                        var21 = 'auto';
                        var20.marginLeft = var21;
                        var21 = 1;
                        if (var22) {
                            _fun110741_ip = 1021;
                            continue _fun110741
                        }
                    case 1017:
                        var21 = _closure1_slot5;
                    case 1021:
                        var20.opacity = var21;
                        var11.style = var20;
                        var11.children = var18;
                        var14 = var16.bind(var3)(var15, var11);
                    case 1041:
                        var11 = new Array(3);
                        var11[0] = var14;
                        var16 = _closure1_slot7;
                        var15 = _closure1_slot4;
                        var14 = {};
                        var18 = new Array(2);
                        var20 = {
                            'alignItems': 'center',
                            'paddingLeft': 4
                        };
                        var18[0] = var20;
                        if (!var19) {
                            _fun110741_ip = 1096;
                            continue _fun110741
                        }
                    case 1084:
                        var20 = {};
                        var21 = 5;
                        var20.marginTop = var21;
                        var19 = var20;
                    case 1096:
                        var18[1] = var19;
                        var14.style = var18;
                        var14.children = var17;
                        var14 = var16.bind(var3)(var15, var14);
                        var11[1] = var14;
                        if (!var12) {
                            _fun110741_ip = 1150;
                            continue _fun110741
                        }
                    case 1121:
                        var15 = _closure1_slot7;
                        var14 = _closure1_slot4;
                        var13 = {};
                        var16 = {};
                        var17 = 1;
                        var16.flex = var17;
                        var13.style = var16;
                        var12 = var15.bind(var3)(var14, var13);
                    case 1150:
                        var11[2] = var12;
                        var8.children = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[1] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot10 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var9 = 0;
            var6 = var5[var9];
            var3 = arg3;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot3 = var3;
            var11 = 1;
            var3 = var5[var11];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var10 = 2;
            var3 = var5[var10];
            var3 = var4.bind(var0)(var3);
            var13 = var3.SUBTITLE_OPACITY_NORMAL;
            var _closure1_slot5 = var13;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.UnreadSetting;
            var _closure1_slot6 = var3;
            var12 = 4;
            var3 = var5[var12];
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
            var8 = {};
            var8.flex = var11;
            var11 = 6;
            var14 = var5[var11];
            var15 = var4.bind(var0)(var14);
            var14 = var15.isIOS;
            var15 = var14.bind(var15)();
            var14 = -1;
            if (!var15) {
                _fun110740_ip = 243;
                continue _fun110740
            }
        case 240:
            var14 = var10;
        case 243:
            var8.marginTop = var14;
            var3.channelContent = var8;
            var8 = {
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems': 'center',
                'justifyContent': 'space-between'
            };
            var3.channelContainer = var8;
            var8 = {
                'flexDirection': 'column',
                'alignItems': 'flex-start',
                'flexShrink': 1
            };
            var3.leftBox = var8;
            var8 = {
                'flexDirection': 'column',
                'alignItems': 'flex-end'
            };
            var3.rightBox = var8;
            var8 = {
                'position': 'absolute',
                'right': 0,
                'top': 0
            };
            var3.rightContentAbsolute = var8;
            var8 = {
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var3.channelTraits = var8;
            var8 = {};
            var8.opacity = var13;
            var8.marginRight = var12;
            var11 = var5[var11];
            var12 = var4.bind(var0)(var11);
            var11 = var12.isAndroid;
            var11 = var11.bind(var12)();
            var9 = 0;
            if (!var11) {
                _fun110740_ip = 385;
                continue _fun110740
            }
        case 382:
            var9 = var10;
        case 385:
            var8.marginTop = var9;
            var3.channelTraitIcon = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot9 = var3;
            var3 = 14;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/launchpad/native/shared/renderChannelContent.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                var3 = _closure1_slot7;
                var2 = _closure1_slot10;
                var1 = {};
                var4 = arg0;
                var5 = var1;
                var0 = copyDataProperties(var5, var4);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8835, 4312, 33, 1297, 478, 14223, 4592, 14229, 3940, 4867, 6522, 13333, 2]);