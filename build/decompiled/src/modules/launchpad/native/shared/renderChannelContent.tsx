// modules/launchpad/native/shared/renderChannelContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun110025: for (var _fun110025_ip = 0;;) switch (_fun110025_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var5;
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
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot3 = var3;
            var15 = 1;
            var3 = var5[var15];
            var3 = var4.bind(var0)(var3);
            var6 = var3.View;
            var _closure1_slot4 = var6;
            var7 = var3.StyleSheet;
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
            var6 = var7.create;
            var3 = {};
            var8 = {};
            var8.flex = var15;
            var11 = 5;
            var14 = var5[var11];
            var16 = var4.bind(var0)(var14);
            var14 = var16.isIOS;
            var17 = var14.bind(var16)();
            var14 = -1;
            var16 = var14;
            if (!var17) {
                _fun110025_ip = 229;
                continue _fun110025
            }
        case 226:
            var16 = var10;
        case 229:
            var8.marginTop = var16;
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
            var8 = {};
            var16 = var5[var11];
            var17 = var4.bind(var0)(var16);
            var16 = var17.isAndroid;
            var16 = var16.bind(var17)();
            if (!var16) {
                _fun110025_ip = 341;
                continue _fun110025
            }
        case 338:
            var14 = var15;
        case 341:
            var8.marginTop = var14;
            var14 = 8;
            var8.marginRight = var14;
            var3.channelIcon = var8;
            var8 = {
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var3.channelTraits = var8;
            var8 = {};
            var8.opacity = var13;
            var8.marginRight = var12;
            var13 = var5[var11];
            var14 = var4.bind(var0)(var13);
            var13 = var14.isAndroid;
            var14 = var13.bind(var14)();
            var13 = 0;
            if (!var14) {
                _fun110025_ip = 415;
                continue _fun110025
            }
        case 412:
            var13 = var10;
        case 415:
            var8.marginTop = var13;
            var3.channelTraitIcon = var8;
            var8 = {};
            var8.marginRight = var12;
            var11 = var5[var11];
            var12 = var4.bind(var0)(var11);
            var11 = var12.isAndroid;
            var11 = var11.bind(var12)();
            var9 = 0;
            if (!var11) {
                _fun110025_ip = 458;
                continue _fun110025
            }
        case 455:
            var9 = var10;
        case 458:
            var8.marginTop = var9;
            var3.channelTraitIconMuted = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot9 = var3;
            var3 = 13;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/launchpad/native/shared/renderChannelContent.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun110026: for (var _fun110026_ip = 0;;) switch (_fun110026_ip) {
                    case 0:
                        var2 = arg0;
                        var33 = var2.name;
                        var14 = var2.subtitle;
                        var31 = var2.unread;
                        var26 = var2.resolvedUnreadSetting;
                        var0 = var2.locked;
                        var21 = var2.muted;
                        var17 = var2.lastMessageTimestampString;
                        var1 = var2.channel;
                        var27 = var2.channelCategoryName;
                        var25 = var2.connected;
                        var23 = var2.mentionCount;
                        var16 = var2.mentionBadge;
                        var28 = var2.isSubscriptionGated;
                        var32 = var2.needSubscriptionToAccess;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var20 = var2.bind(var3)();
                        var22 = null;
                        var30 = var22 != var1;
                        if (!var30) {
                            _fun110026_ip = 154;
                            continue _fun110026
                        }
                    case 123:
                        if (var0) {
                            _fun110026_ip = 151;
                            continue _fun110026
                        }
                    case 126:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 7;
                        var2 = var5[var2];
                        var2 = var4.bind(var3)(var2);
                        var0 = var2.bind(var3)(var1);
                    case 151:
                        var30 = var0;
                    case 154:
                        var0 = var22 == var1;
                        var29 = undefined;
                        if (var0) {
                            _fun110026_ip = 173;
                            continue _fun110026
                        }
                    case 163:
                        var0 = var1.isNSFW;
                        var29 = var0.bind(var1)();
                    case 173:
                        var1 = _closure1_slot3;
                        var0 = var1.isValidElement;
                        var9 = var0.bind(var1)(var14);
                        var18 = var22 != var17;
                        var11 = var18;
                        if (!var18) {
                            _fun110026_ip = 202;
                            continue _fun110026
                        }
                    case 198:
                        var11 = var22 == var16;
                    case 202:
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var4 = _closure1_slot9;
                        var4 = var4.channelContent;
                        var0.style = var4;
                        var5 = _closure1_slot8;
                        var4 = {};
                        var6 = _closure1_slot9;
                        var6 = var6.channelContainer;
                        var4.style = var6;
                        var6 = {};
                        var7 = _closure1_slot9;
                        var8 = var7.leftBox;
                        var7 = new Array(2);
                        var7[0] = var8;
                        var8 = {};
                        var10 = 'center';
                        if (!var9) {
                            _fun110026_ip = 281;
                            continue _fun110026
                        }
                    case 275:
                        var10 = 'space-between';
                    case 281:
                        var8.justifyContent = var10;
                        var7[1] = var8;
                        var6.style = var7;
                        var10 = _closure1_slot8;
                        var8 = _closure1_slot4;
                        var7 = {};
                        var13 = {
                            'flexDirection': 'row',
                            'paddingRight': null,
                            'alignItems': 'center'
                        };
                        var15 = 0;
                        var19 = 0;
                        if (!var11) {
                            _fun110026_ip = 327;
                            continue _fun110026
                        }
                    case 324:
                        var19 = 30;
                    case 327:
                        var13.paddingRight = var19;
                        var7.style = var13;
                        var24 = _closure1_slot7;
                        var19 = _closure1_slot1;
                        var34 = _closure1_slot2;
                        var13 = 8;
                        var13 = var34[var13];
                        var19 = var19.bind(var3)(var13);
                        var13 = {};
                        var13.title = var33;
                        var13.muted = var21;
                        var13.unread = var31;
                        if (!(var22 == var26)) {
                            _fun110026_ip = 391;
                            continue _fun110026
                        }
                    case 381:
                        var31 = _closure1_slot6;
                        var26 = var31.ONLY_MENTIONS;
                    case 391:
                        var13.resolvedUnreadSetting = var26;
                        var13.connected = var25;
                        var19 = var24.bind(var3)(var19, var13);
                        var13 = new Array(3);
                        var13[0] = var19;
                        var24 = var22 != var27;
                        var19 = null;
                        if (!var24) {
                            _fun110026_ip = 491;
                            continue _fun110026
                        }
                    case 424:
                        var26 = _closure1_slot7;
                        var25 = _closure1_slot0;
                        var31 = _closure1_slot2;
                        var24 = 9;
                        var24 = var31[var24];
                        var24 = var25.bind(var3)(var24);
                        var25 = var24.Text;
                        var24 = {
                            'variant': 'text-xs/bold',
                            'color': 'text-muted'
                        };
                        var31 = {};
                        var33 = 4;
                        var31.marginRight = var33;
                        var24.style = var31;
                        var24.children = var27;
                        var19 = var26.bind(var3)(var25, var24);
                    case 491:
                        var13[1] = var19;
                        var19 = var30;
                        if (var30) {
                            _fun110026_ip = 504;
                            continue _fun110026
                        }
                    case 501:
                        var19 = var29;
                    case 504:
                        if (!var19) {
                            _fun110026_ip = 785;
                            continue _fun110026
                        }
                    case 510:
                        var26 = _closure1_slot8;
                        var25 = _closure1_slot4;
                        var24 = {};
                        var27 = _closure1_slot9;
                        var31 = var27.channelTraits;
                        var27 = new Array(2);
                        var27[0] = var31;
                        var31 = {};
                        var33 = 1;
                        var34 = var33;
                        if (!var30) {
                            _fun110026_ip = 558;
                            continue _fun110026
                        }
                    case 549:
                        var34 = var33;
                        if (!var29) {
                            _fun110026_ip = 558;
                            continue _fun110026
                        }
                    case 555:
                        var34 = 2;
                    case 558:
                        var33 = 14;
                        var33 = var33 * var34;
                        var31.maxWidth = var33;
                        var27[1] = var31;
                        var24.style = var27;
                        if (!var30) {
                            _fun110026_ip = 645;
                            continue _fun110026
                        }
                    case 581:
                        var33 = _closure1_slot7;
                        var31 = _closure1_slot0;
                        var34 = _closure1_slot2;
                        var27 = 10;
                        var27 = var34[var27];
                        var27 = var31.bind(var3)(var27);
                        var31 = var27.LockIcon;
                        var27 = {
                            'size': 'xxs',
                            'color': 'icon-muted'
                        };
                        var34 = _closure1_slot9;
                        var34 = var34.channelTraitIcon;
                        var27.style = var34;
                        var30 = var33.bind(var3)(var31, var27);
                    case 645:
                        var27 = new Array(3);
                        var27[0] = var30;
                        if (!var29) {
                            _fun110026_ip = 720;
                            continue _fun110026
                        }
                    case 656:
                        var33 = _closure1_slot7;
                        var31 = _closure1_slot0;
                        var34 = _closure1_slot2;
                        var30 = 11;
                        var30 = var34[var30];
                        var30 = var31.bind(var3)(var30);
                        var31 = var30.WarningIcon;
                        var30 = {
                            'size': 'xxs',
                            'color': 'icon-muted'
                        };
                        var34 = _closure1_slot9;
                        var34 = var34.channelTraitIcon;
                        var30.style = var34;
                        var29 = var33.bind(var3)(var31, var30);
                    case 720:
                        var27[1] = var29;
                        if (!var28) {
                            _fun110026_ip = 771;
                            continue _fun110026
                        }
                    case 727:
                        var31 = _closure1_slot7;
                        var30 = _closure1_slot1;
                        var33 = _closure1_slot2;
                        var29 = 12;
                        var29 = var33[var29];
                        var30 = var30.bind(var3)(var29);
                        var29 = {};
                        var29.locked = var32;
                        var32 = true;
                        var29.isInMainTabsExperiment = var32;
                        var28 = var31.bind(var3)(var30, var29);
                    case 771:
                        var27[2] = var28;
                        var24.children = var27;
                        var19 = var26.bind(var3)(var25, var24);
                    case 785:
                        var13[2] = var19;
                        var7.children = var13;
                        var8 = var10.bind(var3)(var8, var7);
                        var7 = new Array(2);
                        var7[0] = var8;
                        var8 = null;
                        if (!var9) {
                            _fun110026_ip = 902;
                            continue _fun110026
                        }
                    case 812:
                        var13 = _closure1_slot7;
                        var10 = _closure1_slot4;
                        var9 = {};
                        var19 = {};
                        var24 = var22 != var23;
                        var22 = 0;
                        if (!var24) {
                            _fun110026_ip = 836;
                            continue _fun110026
                        }
                    case 833:
                        var22 = var23;
                    case 836:
                        var22 = var22 > var15;
                        var15 = 0;
                        if (!var22) {
                            _fun110026_ip = 848;
                            continue _fun110026
                        }
                    case 845:
                        var15 = 20;
                    case 848:
                        var19.paddingRight = var15;
                        var15 = new Array(2);
                        var15[0] = var19;
                        var19 = {};
                        var20 = var20.messagePreview;
                        var20 = var20.margin;
                        var20 = var20.marginTop;
                        var19.marginTop = var20;
                        var15[1] = var19;
                        var9.style = var15;
                        var9.children = var14;
                        var8 = var13.bind(var3)(var10, var9);
                    case 902:
                        var7[1] = var8;
                        var6.children = var7;
                        var7 = var5.bind(var3)(var1, var6);
                        var6 = new Array(2);
                        var6[0] = var7;
                        var9 = _closure1_slot8;
                        var8 = _closure1_slot4;
                        var7 = {};
                        var13 = _closure1_slot9;
                        if (var11) {
                            _fun110026_ip = 949;
                            continue _fun110026
                        }
                    case 941:
                        var10 = var13.rightBox;
                        _fun110026_ip = 955;
                        continue _fun110026;
                    case 949:
                        var10 = var13.rightContentAbsolute;
                    case 955:
                        var7.style = var10;
                        var13 = var18;
                        if (!var18) {
                            _fun110026_ip = 1049;
                            continue _fun110026
                        }
                    case 965:
                        var15 = _closure1_slot7;
                        var14 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var10 = 9;
                        var10 = var19[var10];
                        var10 = var14.bind(var3)(var10);
                        var14 = var10.Text;
                        var10 = {
                            'variant': 'text-xs/medium',
                            'color': 'text-muted',
                            'style': null,
                            'maxFontSizeMultiplier': 1.75
                        };
                        var19 = {};
                        var20 = 'auto';
                        var19.marginLeft = var20;
                        var20 = 1;
                        if (var21) {
                            _fun110026_ip = 1029;
                            continue _fun110026
                        }
                    case 1025:
                        var20 = _closure1_slot5;
                    case 1029:
                        var19.opacity = var20;
                        var10.style = var19;
                        var10.children = var17;
                        var13 = var15.bind(var3)(var14, var10);
                    case 1049:
                        var10 = new Array(3);
                        var10[0] = var13;
                        var15 = _closure1_slot7;
                        var14 = _closure1_slot4;
                        var13 = {};
                        var17 = new Array(2);
                        var19 = {
                            'alignItems': 'center',
                            'paddingLeft': 4
                        };
                        var17[0] = var19;
                        if (!var18) {
                            _fun110026_ip = 1104;
                            continue _fun110026
                        }
                    case 1092:
                        var19 = {};
                        var20 = 5;
                        var19.marginTop = var20;
                        var18 = var19;
                    case 1104:
                        var17[1] = var18;
                        var13.style = var17;
                        var13.children = var16;
                        var13 = var15.bind(var3)(var14, var13);
                        var10[1] = var13;
                        if (!var11) {
                            _fun110026_ip = 1158;
                            continue _fun110026
                        }
                    case 1129:
                        var14 = _closure1_slot7;
                        var13 = _closure1_slot4;
                        var12 = {};
                        var15 = {};
                        var16 = 1;
                        var15.flex = var16;
                        var12.style = var15;
                        var11 = var14.bind(var3)(var13, var12);
                    case 1158:
                        var10[2] = var11;
                        var7.children = var10;
                        var7 = var9.bind(var3)(var8, var7);
                        var6[1] = var7;
                        var4.children = var6;
                        var4 = var5.bind(var3)(var1, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8781, 4300, 33, 478, 14154, 4580, 14160, 3932, 4853, 6439, 13286, 2]);