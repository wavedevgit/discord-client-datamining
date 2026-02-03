// modules/launchpad/native/shared/SimpleGuild.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getGuildIconSource;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/shared/SimpleGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109969: for (var _fun109969_ip = 0;;) switch (_fun109969_ip) {
            case 0:
                var0 = arg0;
                var33 = var0.guildIconRef;
                var15 = var0.style;
                var4 = var0.guildId;
                var _closure2_slot0 = var4;
                var30 = var0.onPress;
                var27 = var0.onLongPress;
                var7 = var0.onAccessibilityAction;
                var9 = var0.onLayout;
                var31 = var0.backgroundColor;
                var2 = var0.animated;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun109969_ip = 67;
                    continue _fun109969
                }
            case 65:
                var2 = true;
            case 67:
                var24 = var0.altDefaultBackground;
                if (!(var24 === var3)) {
                    _fun109969_ip = 81;
                    continue _fun109969
                }
            case 79:
                var24 = false;
            case 81:
                var10 = var0.selected;
                if (!(var10 === var3)) {
                    _fun109969_ip = 93;
                    continue _fun109969
                }
            case 91:
                var10 = false;
            case 93:
                var20 = var0.size;
                var25 = var0.iconSize;
                if (!(var25 === var3)) {
                    _fun109969_ip = 143;
                    continue _fun109969
                }
            case 108:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 5;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.GuildIconSizes;
                var25 = var5.LARGE;
            case 143:
                var14 = var0.borderRadius;
                var29 = var0.unread;
                var28 = var0.badge;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var8 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 6;
                var6 = var0[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.bind(var3)();
                var8 = var6.iconStroke;
                var12 = var6.iconBackground;
                var11 = var6.iconBackgroundBrand;
                var6 = _closure1_slot0;
                var13 = 7;
                var0 = var0[var13];
                var17 = var6.bind(var3)(var0);
                var16 = var17.useStateFromStores;
                var0 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var26 = var16.bind(var17)(var6, var0);
                var19 = null;
                var6 = var19 == var26;
                var0 = undefined;
                if (var6) {
                    _fun109969_ip = 279;
                    continue _fun109969
                }
            case 274:
                var0 = var26.name;
            case 279:
                var6 = var19 != var0;
                var17 = '';
                if (!var6) {
                    _fun109969_ip = 293;
                    continue _fun109969
                }
            case 290:
                var17 = var0;
            case 293:
                _closure2_slot1 = var17;
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var13];
                var18 = var6.bind(var3)(var0);
                var16 = var18.useStateFromStoresObject;
                var0 = _closure1_slot5;
                var13 = new Array(1);
                var13[0] = var0;
                var6 = new Array(1);
                var6[0] = var4;
                var0 = function() { // Environment: var1
                    var0 = {};
                    var3 = _closure1_slot5;
                    var1 = var3.hasUnread;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var2);
                    var0.unread = var1;
                    var1 = var3.getMentionCount;
                    var1 = var1.bind(var3)(var2);
                    var0.badge = var1;
                    return var0;
                };
                var0 = var16.bind(var18)(var13, var0, var6);
                var23 = var0.unread;
                _closure2_slot2 = var23;
                var18 = var0.badge;
                _closure2_slot3 = var18;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 8;
                var0 = var13[var0];
                var0 = var6.bind(var3)(var0);
                if (var2) {
                    _fun109969_ip = 405;
                    continue _fun109969
                }
            case 397:
                var2 = var0.SimpleGuildContainer;
                _fun109969_ip = 411;
                continue _fun109969;
            case 405:
                var2 = var0.SimpleGuildContainerAnimated;
            case 411:
                var13 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 9;
                var6 = var0[var6];
                var13 = var13.bind(var3)(var6);
                var6 = {};
                var6.size = var20;
                var6.style = var15;
                var6 = var13.bind(var3)(var6);
                var16 = var6.containerSize;
                var21 = var6.containerSizeStyle;
                var32 = var6.containerStyles;
                var15 = _closure1_slot3;
                var13 = var15.useMemo;
                var6 = new Array(3);
                var6[0] = var17;
                var6[1] = var23;
                var6[2] = var18;
                var1 = function() { // Environment: var1
                    _fun109972: for (var _fun109972_ip = 0;;) switch (_fun109972_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = '';
                            if (!(var0 !== var2)) {
                                _fun109972_ip = 291;
                                continue _fun109972
                            }
                        case 18:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun109972_ip = 41;
                                continue _fun109972
                            }
                        case 28:
                            var2 = _closure2_slot3;
                            var0 = 0;
                            if (!(!(var2 > var0))) {
                                _fun109972_ip = 208;
                                continue _fun109972
                            }
                        case 41:
                            var2 = _closure2_slot2;
                            var0 = true;
                            if (!(var0 !== var2)) {
                                _fun109972_ip = 134;
                                continue _fun109972
                            }
                        case 51:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 10;
                            var3 = var6[var0];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var0 = var6[var0];
                            var0 = var5.bind(var2)(var0);
                            var0 = var0.t;
                            var2 = var0["/uzRss"];
                            var0 = {};
                            var5 = _closure2_slot1;
                            var0.guildName = var5;
                            var5 = _closure2_slot3;
                            var0.mentions = var5;
                            var0 = var3.bind(var4)(var2, var0);
                            _fun109972_ip = 206;
                            continue _fun109972;
                        case 134:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 10;
                            var4 = var7[var2];
                            var3 = undefined;
                            var4 = var6.bind(var3)(var4);
                            var5 = var4.intl;
                            var4 = var5.formatToPlainString;
                            var2 = var7[var2];
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.t;
                            var3 = var2.lzqe42;
                            var2 = {};
                            var6 = _closure2_slot1;
                            var2.guildName = var6;
                            var0 = var4.bind(var5)(var3, var2);
                        case 206:
                            _fun109972_ip = 289;
                            continue _fun109972;
                        case 208:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 10;
                            var4 = var7[var2];
                            var3 = undefined;
                            var4 = var6.bind(var3)(var4);
                            var5 = var4.intl;
                            var4 = var5.formatToPlainString;
                            var2 = var7[var2];
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.t;
                            var3 = var2["/uzRss"];
                            var2 = {};
                            var6 = _closure2_slot1;
                            var2.guildName = var6;
                            var6 = _closure2_slot3;
                            var2.mentions = var6;
                            var0 = var4.bind(var5)(var3, var2);
                        case 289:
                            _fun109972_ip = 295;
                            continue _fun109972;
                        case 291:
                            var0 = _closure2_slot1;
                        case 295:
                            return var0;
                    }
                };
                var6 = var13.bind(var15)(var1, var6);
                var1 = _closure1_slot0;
                var22 = 11;
                var0 = var0[var22];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useActivityIndicatorState;
                var17 = var0.bind(var1)(var4);
                var4 = var23;
                if (var23) {
                    _fun109969_ip = 538;
                    continue _fun109969
                }
            case 535:
                var4 = var10;
            case 538:
                if (var4) {
                    _fun109969_ip = 547;
                    continue _fun109969
                }
            case 541:
                var0 = 0;
                var4 = var18 > var0;
            case 547:
                if (var4) {
                    _fun109969_ip = 559;
                    continue _fun109969
                }
            case 550:
                var0 = var17.source;
                var4 = var19 != var0;
            case 559:
                if (!var4) {
                    _fun109969_ip = 570;
                    continue _fun109969
                }
            case 562:
                var0 = 'transparent';
                var4 = var0 === var31;
            case 570:
                var0 = var19 != var26;
                var15 = undefined;
                if (!var0) {
                    _fun109969_ip = 599;
                    continue _fun109969
                }
            case 579:
                var1 = _closure1_slot4;
                var0 = var10;
                if (!var0) {
                    _fun109969_ip = 592;
                    continue _fun109969
                }
            case 589:
                var0 = !var4;
            case 592:
                var15 = var1.bind(var3)(var26, var16, var0);
            case 599:
                if (!(var19 !== var15)) {
                    _fun109969_ip = 625;
                    continue _fun109969
                }
            case 603:
                var1 = 'object';
                var0 = typeof var15;
                if (!(var1 === var0)) {
                    _fun109969_ip = 625;
                    continue _fun109969
                }
            case 614:
                var0 = 'uri';
                var0 = var0 in var15;
                if (var0) {
                    _fun109969_ip = 631;
                    continue _fun109969
                }
            case 625:
                var13 = var19 != var15;
                _fun109969_ip = 640;
                continue _fun109969;
            case 631:
                var0 = var15.uri;
                var13 = var19 != var0;
            case 640:
                var1 = _closure1_slot7;
                var0 = {};
                var0.guildIconRef = var33;
                var34 = var19 == var26;
                var33 = undefined;
                if (var34) {
                    _fun109969_ip = 665;
                    continue _fun109969
                }
            case 660:
                var33 = var26.id;
            case 665:
                var0.guildId = var33;
                var0.style = var32;
                var0.backgroundColor = var31;
                var0.selected = var10;
                var0.size = var20;
                var0.borderRadius = var14;
                var0.onPress = var30;
                var0.onLongPress = var27;
                var27 = var23;
                if (!(var19 != var29)) {
                    _fun109969_ip = 709;
                    continue _fun109969
                }
            case 706:
                var27 = var29;
            case 709:
                var0.unread = var27;
                var27 = var18;
                if (!(var19 != var28)) {
                    _fun109969_ip = 724;
                    continue _fun109969
                }
            case 721:
                var27 = var28;
            case 724:
                var0.badge = var27;
                var0.onLayout = var9;
                var0.onAccessibilityAction = var7;
                var0.accessibilityLabel = var6;
                var0.usingCutout = var4;
                var0.activityIndicatorState = var17;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                if (var4) {
                    _fun109969_ip = 832;
                    continue _fun109969
                }
            case 768:
                var4 = 5;
                var4 = var9[var4];
                var5 = var6.bind(var3)(var4);
                var4 = {};
                var4.guild = var26;
                var4.size = var25;
                var4.selected = var10;
                var4.animate = var10;
                var4.TABS_altDefaultBackground = var24;
                var24 = var19 != var20;
                var20 = null;
                if (!var24) {
                    _fun109969_ip = 817;
                    continue _fun109969
                }
            case 814:
                var20 = var21;
            case 817:
                var4.style = var20;
                var4 = var7.bind(var3)(var5, var4);
                _fun109969_ip = 985;
                continue _fun109969;
            case 832:
                var5 = 12;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {
                    'cutoutBottomRightSize': null,
                    'cutoutBottomRightInsetX': 6,
                    'cutoutBottomRightInsetY': 7,
                    'cutoutTopRightSize': null,
                    'cutoutTopRightInsetX': 8,
                    'cutoutTopRightInsetY': 8
                };
                var9 = 0;
                var21 = var18 > var9;
                var18 = 13;
                var20 = var18;
                if (var21) {
                    _fun109969_ip = 884;
                    continue _fun109969
                }
            case 873:
                var21 = 0;
                if (!var23) {
                    _fun109969_ip = 881;
                    continue _fun109969
                }
            case 878:
                var21 = var22;
            case 881:
                var20 = var21;
            case 884:
                var5.cutoutBottomRightSize = var20;
                var17 = var17.source;
                var19 = var19 != var17;
                var17 = 0;
                if (!var19) {
                    _fun109969_ip = 907;
                    continue _fun109969
                }
            case 904:
                var17 = var18;
            case 907:
                var5.cutoutTopRightSize = var17;
                var5.imageSize = var16;
                var5.imageSource = var15;
                var5.imageBorderRadius = var14;
                if (var13) {
                    _fun109969_ip = 938;
                    continue _fun109969
                }
            case 931:
                var11 = var11.color;
                _fun109969_ip = 943;
                continue _fun109969;
            case 938:
                var11 = var12.color;
            case 943:
                var5.imageBackgroundColor = var11;
                var9 = 0;
                if (!var10) {
                    _fun109969_ip = 956;
                    continue _fun109969
                }
            case 953:
                var9 = 3;
            case 956:
                var5.clipOuterAmount = var9;
                var9 = 1;
                var5.borderStroke = var9;
                var8 = var8.color;
                var5.borderStrokeColor = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 985:
                var0.children = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1416, 8619, 1410, 33, 7388, 14148, 566, 14149, 14151, 1234, 13156, 14150, 2]);