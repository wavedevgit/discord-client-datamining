// modules/icymi/native/ICYMICardInCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun103987: for (var _fun103987_ip = 0;;) switch (_fun103987_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.length;
                var1 = 20;
                var0 = var4;
                if (!(var2 > var1)) {
                    _fun103987_ip = 63;
                    continue _fun103987
                }
            case 18:
                var3 = var4.slice;
                var2 = 0;
                var1 = 17;
                var4 = var3.bind(var4)(var2, var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '...';
                var0 = var3.bind(var2)(var4, var1);
            case 63:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var12 = var0.guild;
        var11 = var0.author;
        var0 = _closure1_slot12;
        var3 = undefined;
        var13 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = {
            'width': 40,
            'height': 40
        };
        var0.style = var4;
        var8 = _closure1_slot9;
        var6 = _closure1_slot1;
        var10 = _closure1_slot2;
        var14 = 9;
        var4 = var10[var14];
        var7 = var6.bind(var3)(var4);
        var4 = {};
        var15 = {
            'shape': null,
            'x': 18,
            'y': 18,
            'size': 24
        };
        var9 = _closure1_slot0;
        var14 = var10[var14];
        var14 = var9.bind(var3)(var14);
        var14 = var14.CutoutShape;
        var14 = var14.Circle;
        var15.shape = var14;
        var14 = new Array(1);
        var14[0] = var15;
        var4.cutouts = var14;
        var16 = _closure1_slot9;
        var17 = 10;
        var14 = var10[var17];
        var15 = var6.bind(var3)(var14);
        var14 = {};
        var14.guild = var12;
        var17 = var10[var17];
        var17 = var9.bind(var3)(var17);
        var17 = var17.GuildIconSizes;
        var17 = var17.SMALL_32;
        var14.size = var17;
        var14 = var16.bind(var3)(var15, var14);
        var4.children = var14;
        var7 = var8.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot9;
        var8 = 11;
        var5 = var10[var8];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var14 = true;
        var5.animate = var14;
        var13 = var13.authorAvatar;
        var5.style = var13;
        var12 = var12.id;
        var5.guildId = var12;
        var5.user = var11;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.AvatarSizes;
        var8 = var8.XSMALL_20;
        var5.size = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.jsxs;
    var _closure1_slot10 = var6;
    var3 = var3.Fragment;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createICYMIStyles;
    var3 = function(arg0) { // Environment: var1
        var7 = arg0;
        var0 = {};
        var1 = {};
        var2 = var7.margin;
        var1.marginTop = var2;
        var0.container = var1;
        var6 = 1;
        var1 = {
            'flex': 1,
            'overflow': 'hidden'
        };
        var0.content = var1;
        var1 = {
            'flexDirection': 'row',
            'justifyContent': 'space-between',
            'alignItems': 'center'
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 8;
        var8 = var5[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_4;
        var1.paddingBottom = var8;
        var8 = var7.margin;
        var1.marginHorizontal = var8;
        var0.channelNameAndAccessory = var1;
        var1 = {};
        var8 = 'column';
        var1.flexDirection = var8;
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_4;
        var1.paddingBottom = var8;
        var7 = var7.margin;
        var1.marginHorizontal = var7;
        var0.channelNameAndAccessoryLarge = var1;
        var1 = {
            'flexDirection': 'row',
            'flexGrow': 1
        };
        var0.header = var1;
        var1 = {
            'flexGrow': 1,
            'flexShrink': 1
        };
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var1.marginLeft = var7;
        var0.headerInfo = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between',
            'marginBottom': 2
        };
        var0.title = var1;
        var1 = {
            'flexShrink': 1,
            'flexGrow': 0,
            'flexDirection': 'row',
            'alignItems': 'center',
            'gap': 6
        };
        var0.titleLeft = var1;
        var1 = {
            'flexDirection': 'row',
            'justifyContent': 'space-between'
        };
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.radii;
        var7 = var7.sm;
        var1.borderRadius = var7;
        var0.subTitleContainer = var1;
        var1 = {
            'flexShrink': 1,
            'flexGrow': 0,
            'width': '100%'
        };
        var0.subtitle = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'gap': 2
        };
        var0.genContentSubtitle = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'gap': 2,
            'flex': 1
        };
        var0.genContentSubtitleChannel = var1;
        var1 = {};
        var1.paddingVertical = var6;
        var0.subtitleTrailing = var1;
        var1 = {
            'height': 1,
            'width': '100%'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BORDER_SUBTLE;
        var1.backgroundColor = var6;
        var0.separator = var1;
        var1 = {
            'borderBottomWidth': 1,
            'borderBottomColor': null,
            'flexShrink': 0
        };
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.BORDER_STRONG;
        var1.borderBottomColor = var2;
        var0.normalContent = var1;
        var1 = {
            'position': 'absolute',
            'right': 0,
            'bottom': 0
        };
        var0.authorAvatar = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ICYMICardInCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun103990: for (var _fun103990_ip = 0;;) switch (_fun103990_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.children;
                var22 = var4.message;
                var _closure2_slot0 = var22;
                var2 = var4.actionLabel;
                var _closure2_slot1 = var2;
                var36 = var4.timestamp;
                var12 = var4.id;
                var _closure2_slot2 = var12;
                var1 = var4.interactionType;
                var _closure2_slot3 = var1;
                var11 = var4.onHeaderPress;
                var _closure2_slot4 = var11;
                var10 = var4.onHeaderLongPress;
                var7 = var4.channelId;
                var _closure2_slot5 = var7;
                var20 = var4.guildId;
                var30 = var4.hideTimestamp;
                var3 = undefined;
                if (!(var30 === var3)) {
                    _fun103990_ip = 98;
                    continue _fun103990
                }
            case 96:
                var30 = false;
            case 98:
                var23 = var4.shouldFeatureUser;
                if (!(var23 === var3)) {
                    _fun103990_ip = 110;
                    continue _fun103990
                }
            case 108:
                var23 = false;
            case 110:
                var _closure2_slot6 = var23;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var4 = _closure1_slot12;
                var9 = var4.bind(var3)();
                _closure2_slot7 = var9;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 12;
                var4 = var13[var4];
                var6 = var14.bind(var3)(var4);
                var4 = var6.useFontScale;
                var6 = var4.bind(var6)();
                _closure2_slot8 = var6;
                var4 = 13;
                var13 = var13[var4];
                var16 = var14.bind(var3)(var13);
                var15 = var16.useStateFromStores;
                var13 = _closure1_slot5;
                var14 = new Array(1);
                var14[0] = var13;
                var13 = new Array(1);
                var13[0] = var7;
                var7 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot5;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var15.bind(var16)(var14, var7, var13);
                _closure2_slot9 = var13;
                var21 = null;
                var14 = var21 == var13;
                var7 = undefined;
                if (var14) {
                    _fun103990_ip = 266;
                    continue _fun103990
                }
            case 261:
                var7 = var13.guild_id;
            case 266:
                if (!(var21 != var7)) {
                    _fun103990_ip = 273;
                    continue _fun103990
                }
            case 270:
                var20 = var7;
            case 273:
                _closure2_slot10 = var20;
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var14 = var15[var4];
                var19 = var7.bind(var3)(var14);
                var18 = var19.useStateFromStores;
                var14 = _closure1_slot7;
                var17 = new Array(1);
                var17[0] = var14;
                var16 = new Array(1);
                var16[0] = var20;
                var14 = function() { // Environment: var0
                    _fun103992: for (var _fun103992_ip = 0;;) switch (_fun103992_ip) {
                        case 0:
                            var2 = _closure2_slot10;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun103992_ip = 37;
                                continue _fun103992
                            }
                        case 16:
                            var3 = _closure1_slot7;
                            var2 = var3.getGuild;
                            var1 = _closure2_slot10;
                            var0 = var2.bind(var3)(var1);
                        case 37:
                            return var0;
                    }
                };
                var14 = var18.bind(var19)(var17, var14, var16);
                _closure2_slot11 = var14;
                var4 = var15[var4];
                var18 = var7.bind(var3)(var4);
                var17 = var18.useStateFromStores;
                var4 = _closure1_slot6;
                var16 = new Array(1);
                var16[0] = var4;
                var7 = new Array(3);
                var7[0] = var23;
                var7[1] = var20;
                var7[2] = var22;
                var4 = function() { // Environment: var0
                    _fun103993: for (var _fun103993_ip = 0;;) switch (_fun103993_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var3 = null;
                            var0 = null;
                            if (!var2) {
                                _fun103993_ip = 102;
                                continue _fun103993
                            }
                        case 14:
                            var2 = _closure2_slot10;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun103993_ip = 102;
                                continue _fun103993
                            }
                        case 27:
                            var2 = _closure2_slot0;
                            var4 = var3 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun103993_ip = 55;
                                continue _fun103993
                            }
                        case 40:
                            var4 = _closure2_slot0;
                            var4 = var4.author;
                            var2 = var4.id;
                        case 55:
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun103993_ip = 102;
                                continue _fun103993
                            }
                        case 64:
                            var4 = _closure1_slot6;
                            var3 = var4.getMember;
                            var2 = _closure2_slot10;
                            var1 = _closure2_slot0;
                            var1 = var1.author;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 102:
                            return var0;
                    }
                };
                var18 = var17.bind(var18)(var16, var4, var7);
                _closure2_slot12 = var18;
                var7 = _closure1_slot1;
                var4 = 14;
                var4 = var15[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var16 = var21 == var22;
                var15 = undefined;
                if (var16) {
                    _fun103990_ip = 444;
                    continue _fun103990
                }
            case 424:
                var16 = var22.author;
                var17 = var21 == var16;
                var15 = undefined;
                if (var17) {
                    _fun103990_ip = 444;
                    continue _fun103990
                }
            case 439:
                var15 = var16.id;
            case 444:
                var4.userId = var15;
                var19 = var7.bind(var3)(var4);
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 15;
                var4 = var15[var4];
                var17 = var7.bind(var3)(var4);
                var16 = var17.useDisplayNameStylesFont;
                var4 = {};
                var4.displayNameStyles = var19;
                var16 = var16.bind(var17)(var4);
                _closure2_slot13 = var16;
                var4 = 16;
                var4 = var15[var4];
                var17 = var7.bind(var3)(var4);
                var15 = var17.useName;
                var4 = var21 == var13;
                var7 = undefined;
                if (var4) {
                    _fun103990_ip = 527;
                    continue _fun103990
                }
            case 522:
                var7 = var13.id;
            case 527:
                var19 = var21 == var22;
                var4 = undefined;
                if (var19) {
                    _fun103990_ip = 542;
                    continue _fun103990
                }
            case 536:
                var4 = var22.author;
            case 542:
                var4 = var15.bind(var17)(var20, var7, var4);
                var19 = null;
                if (!var23) {
                    _fun103990_ip = 599;
                    continue _fun103990
                }
            case 554:
                var15 = var21 == var22;
                var7 = undefined;
                if (var15) {
                    _fun103990_ip = 569;
                    continue _fun103990
                }
            case 563:
                var7 = var22.author;
            case 569:
                var7 = var21 != var7;
                var19 = null;
                if (!var7) {
                    _fun103990_ip = 599;
                    continue _fun103990
                }
            case 578:
                var7 = var21 != var20;
                var19 = null;
                if (!var7) {
                    _fun103990_ip = 599;
                    continue _fun103990
                }
            case 587:
                var7 = var21 != var13;
                var19 = null;
                if (!var7) {
                    _fun103990_ip = 599;
                    continue _fun103990
                }
            case 596:
                var19 = var4;
            case 599:
                _closure2_slot14 = var19;
                var17 = _closure1_slot3;
                var15 = var17.useMemo;
                var7 = new Array(3);
                var7[0] = var14;
                var7[1] = var23;
                var24 = var21 == var22;
                var4 = undefined;
                if (var24) {
                    _fun103990_ip = 639;
                    continue _fun103990
                }
            case 633:
                var4 = var22.author;
            case 639:
                var7[2] = var4;
                var4 = function() { // Environment: var0
                    _fun103994: for (var _fun103994_ip = 0;;) switch (_fun103994_ip) {
                        case 0:
                            var0 = _closure2_slot11;
                            var2 = null;
                            var1 = var2 == var0;
                            var0 = null;
                            if (var1) {
                                _fun103994_ip = 178;
                                continue _fun103994
                            }
                        case 21:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun103994_ip = 57;
                                continue _fun103994
                            }
                        case 28:
                            var1 = _closure2_slot0;
                            var3 = var2 == var1;
                            var5 = undefined;
                            var1 = undefined;
                            if (var3) {
                                _fun103994_ip = 53;
                                continue _fun103994
                            }
                        case 43:
                            var3 = _closure2_slot0;
                            var1 = var3.author;
                        case 53:
                            if (!(var2 == var1)) {
                                _fun103994_ip = 133;
                                continue _fun103994
                            }
                        case 57:
                            var4 = _closure1_slot9;
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 10;
                            var1 = var9[var7];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var10 = _closure2_slot11;
                            var1.guild = var10;
                            var8 = _closure1_slot0;
                            var7 = var9[var7];
                            var7 = var8.bind(var3)(var7);
                            var7 = var7.GuildIconSizes;
                            var7 = var7.NORMAL;
                            var1.size = var7;
                            var1 = var4.bind(var3)(var2, var1);
                            _fun103994_ip = 175;
                            continue _fun103994;
                        case 133:
                            var4 = _closure1_slot9;
                            var3 = _closure1_slot14;
                            var2 = {};
                            var7 = _closure2_slot11;
                            var2.guild = var7;
                            var6 = _closure2_slot0;
                            var6 = var6.author;
                            var2.author = var6;
                            var1 = var4.bind(var5)(var3, var2);
                        case 175:
                            var0 = var1;
                        case 178:
                            return var0;
                    }
                };
                var17 = var15.bind(var17)(var4, var7);
                var15 = _closure1_slot3;
                var24 = var15.useMemo;
                var7 = new Array(1);
                var7[0] = var14;
                var4 = function() { // Environment: var0
                    _fun103995: for (var _fun103995_ip = 0;;) switch (_fun103995_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun103995_ip = 109;
                                continue _fun103995
                            }
                        case 16:
                            var5 = _closure1_slot9;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 17;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.Text;
                            var2 = {
                                'style': null,
                                'lineClamp': 1,
                                'variant': 'text-md/semibold',
                                'color': 'mobile-text-heading-primary'
                            };
                            var6 = {};
                            var7 = 225;
                            var6.maxWidth = var7;
                            var2.style = var6;
                            var6 = _closure2_slot11;
                            var6 = var6.name;
                            var2.children = var6;
                            var1 = _closure2_slot11;
                            var1 = var1.id;
                            var0 = var5.bind(var4)(var3, var2, var1);
                        case 109:
                            return var0;
                    }
                };
                var31 = var24.bind(var15)(var4, var7);
                var7 = var15.useMemo;
                var4 = new Array(11);
                var4[0] = var23;
                var23 = var21 == var22;
                var21 = undefined;
                if (var23) {
                    _fun103990_ip = 714;
                    continue _fun103990
                }
            case 708:
                var21 = var22.author;
            case 714:
                var4[1] = var21;
                var4[2] = var20;
                var4[3] = var13;
                var4[4] = var19;
                var4[5] = var18;
                var4[6] = var16;
                var16 = var9.genContentSubtitle;
                var4[7] = var16;
                var16 = var9.genContentSubtitleChannel;
                var4[8] = var16;
                var4[9] = var11;
                var4[10] = var2;
                var2 = function() { // Environment: var0
                    _fun103996: for (var _fun103996_ip = 0;;) switch (_fun103996_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            if (!var0) {
                                _fun103996_ip = 68;
                                continue _fun103996
                            }
                        case 10:
                            var0 = _closure2_slot0;
                            var9 = null;
                            var1 = var9 == var0;
                            var3 = undefined;
                            var0 = undefined;
                            if (var1) {
                                _fun103996_ip = 37;
                                continue _fun103996
                            }
                        case 27:
                            var1 = _closure2_slot0;
                            var0 = var1.author;
                        case 37:
                            if (!(var9 != var0)) {
                                _fun103996_ip = 68;
                                continue _fun103996
                            }
                        case 41:
                            var0 = _closure2_slot10;
                            if (!(var9 != var0)) {
                                _fun103996_ip = 68;
                                continue _fun103996
                            }
                        case 49:
                            var0 = _closure2_slot9;
                            if (!(var9 != var0)) {
                                _fun103996_ip = 68;
                                continue _fun103996
                            }
                        case 57:
                            var0 = _closure2_slot14;
                            if (!(var9 == var0)) {
                                _fun103996_ip = 552;
                                continue _fun103996
                            }
                        case 68:
                            var0 = _closure2_slot9;
                            var6 = null;
                            if (!(var6 == var0)) {
                                _fun103996_ip = 111;
                                continue _fun103996
                            }
                        case 78:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 20;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var22 = var0.TextIcon;
                            _fun103996_ip = 151;
                            continue _fun103996;
                        case 111:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getIconForChannel;
                            var0 = _closure2_slot9;
                            var22 = var1.bind(var2)(var0);
                        case 151:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var0 = _closure2_slot7;
                            var0 = var0.genContentSubtitle;
                            var1.style = var0;
                            var8 = _closure1_slot9;
                            var7 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var20 = 17;
                            var5 = var0[var20];
                            var0 = undefined;
                            var5 = var7.bind(var0)(var5);
                            var7 = var5.Text;
                            var5 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var10 = _closure2_slot1;
                            var5.children = var10;
                            var7 = var8.bind(var0)(var7, var5);
                            var5 = new Array(2);
                            var5[0] = var7;
                            var7 = _closure2_slot9;
                            var7 = var6 != var7;
                            var6 = null;
                            if (!var7) {
                                _fun103996_ip = 536;
                                continue _fun103996
                            }
                        case 261:
                            var10 = _closure1_slot10;
                            var8 = _closure1_slot11;
                            var7 = {};
                            var14 = _closure1_slot9;
                            var18 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var11 = var17[var20];
                            var11 = var18.bind(var0)(var11);
                            var13 = var11.Text;
                            var11 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var15 = 19;
                            var16 = var17[var15];
                            var16 = var18.bind(var0)(var16);
                            var21 = var16.intl;
                            var16 = var21.string;
                            var15 = var17[var15];
                            var15 = var18.bind(var0)(var15);
                            var15 = var15.t;
                            var15 = var15.CHUAYk;
                            var15 = var16.bind(var21)(var15);
                            var11.children = var15;
                            var13 = var14.bind(var0)(var13, var11);
                            var11 = new Array(2);
                            var11[0] = var13;
                            var15 = _closure1_slot10;
                            var14 = _closure1_slot4;
                            var13 = {};
                            var16 = _closure2_slot7;
                            var16 = var16.genContentSubtitleChannel;
                            var13.style = var16;
                            var21 = _closure1_slot9;
                            var16 = {
                                'size': 'xs',
                                'color': 'text-default'
                            };
                            var21 = var21.bind(var0)(var22, var16);
                            var16 = new Array(2);
                            var16[0] = var21;
                            var19 = _closure1_slot9;
                            var17 = var17[var20];
                            var17 = var18.bind(var0)(var17);
                            var18 = var17.Text;
                            var17 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-default',
                                'onPress': null,
                                'style': null,
                                'lineClamp': 1,
                                'ellipsizeMode': 'tail'
                            };
                            var20 = _closure2_slot4;
                            var17.onPress = var20;
                            var20 = {};
                            var21 = 1;
                            var20.flex = var21;
                            var17.style = var20;
                            var20 = _closure2_slot9;
                            var20 = var20.name;
                            var17.children = var20;
                            var17 = var19.bind(var0)(var18, var17);
                            var16[1] = var17;
                            var13.children = var16;
                            var13 = var15.bind(var0)(var14, var13);
                            var11[1] = var13;
                            var7.children = var11;
                            var6 = var10.bind(var0)(var8, var7);
                        case 536:
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var4.bind(var0)(var2, var1);
                            return var0;
                        case 552:
                            var0 = _closure2_slot12;
                            var0 = var9 == var0;
                            var7 = undefined;
                            if (var0) {
                                _fun103996_ip = 575;
                                continue _fun103996
                            }
                        case 565:
                            var0 = _closure2_slot12;
                            var7 = var0.colorString;
                        case 575:
                            if (!(var9 == var7)) {
                                _fun103996_ip = 586;
                                continue _fun103996
                            }
                        case 579:
                            var7 = _closure1_slot8;
                        case 586:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 18;
                            var0 = var4[var0];
                            var2 = var5.bind(var3)(var0);
                            var1 = var2.getIconForChannel;
                            var0 = _closure2_slot9;
                            var15 = var1.bind(var2)(var0);
                            var2 = _closure1_slot10;
                            var1 = _closure1_slot4;
                            var0 = {};
                            var6 = _closure2_slot7;
                            var6 = var6.genContentSubtitle;
                            var0.style = var6;
                            var6 = _closure1_slot9;
                            var13 = 17;
                            var4 = var4[var13];
                            var4 = var5.bind(var3)(var4);
                            var5 = var4.Text;
                            var4 = {};
                            var8 = 'text-sm/semibold';
                            var4.variant = var8;
                            var8 = {};
                            var8.color = var7;
                            var7 = new Array(2);
                            var7[0] = var8;
                            var8 = _closure2_slot13;
                            var9 = var9 != var8;
                            var8 = undefined;
                            if (!var9) {
                                _fun103996_ip = 722;
                                continue _fun103996
                            }
                        case 708:
                            var9 = {};
                            var10 = _closure2_slot13;
                            var9.fontFamily = var10;
                            var8 = var9;
                        case 722:
                            var7[1] = var8;
                            var4.style = var7;
                            var8 = _closure1_slot13;
                            var7 = _closure2_slot14;
                            var7 = var8.bind(var3)(var7);
                            var4.children = var7;
                            var5 = var6.bind(var3)(var5, var4);
                            var4 = new Array(3);
                            var4[0] = var5;
                            var7 = _closure1_slot9;
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = var9[var13];
                            var5 = var10.bind(var3)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var8 = 19;
                            var14 = var9[var8];
                            var14 = var10.bind(var3)(var14);
                            var16 = var14.intl;
                            var14 = var16.string;
                            var8 = var9[var8];
                            var8 = var10.bind(var3)(var8);
                            var8 = var8.t;
                            var8 = var8.CHUAYk;
                            var8 = var14.bind(var16)(var8);
                            var5.children = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var4[1] = var5;
                            var7 = _closure1_slot10;
                            var6 = _closure1_slot4;
                            var5 = {};
                            var8 = _closure2_slot7;
                            var8 = var8.genContentSubtitleChannel;
                            var5.style = var8;
                            var14 = _closure1_slot9;
                            var8 = {
                                'size': 'xs',
                                'color': 'text-default'
                            };
                            var14 = var14.bind(var3)(var15, var8);
                            var8 = new Array(2);
                            var8[0] = var14;
                            var11 = _closure1_slot9;
                            var9 = var9[var13];
                            var9 = var10.bind(var3)(var9);
                            var10 = var9.Text;
                            var9 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-default',
                                'onPress': null,
                                'style': null,
                                'lineClamp': 1,
                                'ellipsizeMode': 'tail'
                            };
                            var13 = _closure2_slot4;
                            var9.onPress = var13;
                            var13 = {};
                            var14 = 1;
                            var13.flex = var14;
                            var9.style = var13;
                            var12 = _closure2_slot9;
                            var12 = var12.name;
                            var9.children = var12;
                            var9 = var11.bind(var3)(var10, var9);
                            var8[1] = var9;
                            var5.children = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var4[2] = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var27 = var7.bind(var15)(var2, var4);
                var4 = _closure1_slot3;
                var7 = var4.useCallback;
                var2 = new Array(4);
                var2[0] = var14;
                var2[1] = var13;
                var2[2] = var12;
                var2[3] = var1;
                var1 = function() { // Environment: var0
                    _fun103997: for (var _fun103997_ip = 0;;) switch (_fun103997_ip) {
                        case 0:
                            var0 = _closure2_slot11;
                            var2 = null;
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun103997_ip = 24;
                                continue _fun103997
                            }
                        case 16:
                            var1 = _closure2_slot9;
                            var0 = var2 != var1;
                        case 24:
                            if (!var0) {
                                _fun103997_ip = 107;
                                continue _fun103997
                            }
                        case 27:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 21;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.openDetailsActionSheet;
                            var0 = {};
                            var4 = _closure2_slot11;
                            var4 = var4.id;
                            var0.guildId = var4;
                            var4 = _closure2_slot9;
                            var4 = var4.id;
                            var0.channelId = var4;
                            var4 = _closure2_slot2;
                            var0.id = var4;
                            var3 = _closure2_slot3;
                            var0.type = var3;
                            var0 = var1.bind(var2)(var0);
                        case 107:
                            var0 = undefined;
                            return var0;
                    }
                };
                var28 = var7.bind(var4)(var1, var2);
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var6 = var9.channelNameAndAccessoryLarge;
                var1[1] = var6;
                var6 = var9.channelNameAndAccessory;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun103998: for (var _fun103998_ip = 0;;) switch (_fun103998_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var0 = 1.8;
                            if (!(!(var2 > var0))) {
                                _fun103998_ip = 33;
                                continue _fun103998
                            }
                        case 21:
                            var0 = _closure2_slot7;
                            var0 = var0.channelNameAndAccessory;
                            _fun103998_ip = 43;
                            continue _fun103998;
                        case 33:
                            var1 = _closure2_slot7;
                            var0 = var1.channelNameAndAccessoryLarge;
                        case 43:
                            return var0;
                    }
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var9.container;
                var0.style = var4;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var24 = 22;
                var4 = var4[var24];
                var4 = var6.bind(var3)(var4);
                var6 = var4.PressableHighlight;
                var4 = {};
                var4.onPress = var11;
                var4.onLongPress = var10;
                var10 = var9.content;
                var4.style = var10;
                var12 = _closure1_slot9;
                var11 = _closure1_slot4;
                var10 = {};
                var10.style = var13;
                var15 = _closure1_slot10;
                var14 = _closure1_slot4;
                var13 = {};
                var16 = var9.header;
                var13.style = var16;
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot10;
                var18 = _closure1_slot4;
                var17 = {};
                var20 = var9.headerInfo;
                var17.style = var20;
                var22 = _closure1_slot10;
                var21 = _closure1_slot4;
                var20 = {};
                var23 = var9.title;
                var20.style = var23;
                var26 = _closure1_slot10;
                var25 = _closure1_slot4;
                var23 = {};
                var29 = var9.titleLeft;
                var23.style = var29;
                var29 = new Array(2);
                var29[0] = var31;
                var30 = !var30;
                if (!var30) {
                    _fun103990_ip = 1126;
                    continue _fun103990
                }
            case 1050:
                var33 = _closure1_slot9;
                var35 = _closure1_slot0;
                var37 = _closure1_slot2;
                var31 = 17;
                var31 = var37[var31];
                var31 = var35.bind(var3)(var31);
                var32 = var31.Text;
                var31 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var34 = 23;
                var34 = var37[var34];
                var35 = var35.bind(var3)(var34);
                var34 = var35.getRelativeTimestamp;
                var34 = var34.bind(var35)(var36);
                var31.children = var34;
                var30 = var33.bind(var3)(var32, var31);
            case 1126:
                var29[1] = var30;
                var23.children = var29;
                var25 = var26.bind(var3)(var25, var23);
                var23 = new Array(2);
                var23[0] = var25;
                var26 = _closure1_slot9;
                var29 = _closure1_slot0;
                var33 = _closure1_slot2;
                var24 = var33[var24];
                var24 = var29.bind(var3)(var24);
                var25 = var24.PressableOpacity;
                var24 = {};
                var24.onPress = var28;
                var28 = var9.subtitleTrailing;
                var24.style = var28;
                var31 = 8;
                var24.hitSlop = var31;
                var30 = _closure1_slot9;
                var28 = 24;
                var28 = var33[var28];
                var28 = var29.bind(var3)(var28);
                var29 = var28.MoreHorizontalIcon;
                var28 = {};
                var32 = _closure1_slot1;
                var31 = var33[var31];
                var31 = var32.bind(var3)(var31);
                var31 = var31.colors;
                var31 = var31.ICON_MUTED;
                var28.color = var31;
                var31 = 'sm';
                var28.size = var31;
                var28 = var30.bind(var3)(var29, var28);
                var24.children = var28;
                var24 = var26.bind(var3)(var25, var24);
                var23[1] = var24;
                var20.children = var23;
                var21 = var22.bind(var3)(var21, var20);
                var20 = new Array(2);
                var20[0] = var21;
                var23 = _closure1_slot9;
                var22 = _closure1_slot4;
                var21 = {};
                var24 = var9.subTitleContainer;
                var21.style = var24;
                var26 = _closure1_slot9;
                var25 = _closure1_slot4;
                var24 = {};
                var28 = var9.subtitle;
                var24.style = var28;
                var24.children = var27;
                var24 = var26.bind(var3)(var25, var24);
                var21.children = var24;
                var21 = var23.bind(var3)(var22, var21);
                var20[1] = var21;
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var4.children = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var9.normalContent;
                var5.style = var9;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1672, 1410, 660, 33, 13489, 671, 5421, 7357, 5416, 4051, 566, 3945, 6884, 3922, 3902, 13531, 1234, 4811, 13529, 4867, 4188, 8895, 2]);