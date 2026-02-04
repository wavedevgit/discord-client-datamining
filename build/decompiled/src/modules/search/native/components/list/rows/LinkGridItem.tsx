// modules/search/native/components/list/rows/LinkGridItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun105595: for (var _fun105595_ip = 0;;) switch (_fun105595_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var3 = arg2;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var3;
                var2 = global;
                var5 = var2.Array;
                var2 = var5.isArray;
                var2 = var2.bind(var5)(var0);
                if (var2) {
                    _fun105595_ip = 140;
                    continue _fun105595
                }
            case 40:
                var5 = var0.type;
                var2 = 'link';
                if (!(var2 !== var5)) {
                    _fun105595_ip = 100;
                    continue _fun105595
                }
            case 53:
                var5 = var0.type;
                var2 = 'channelMention';
                if (!(var2 !== var5)) {
                    _fun105595_ip = 100;
                    continue _fun105595
                }
            case 66:
                var5 = var0.content;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun105595_ip = 157;
                    continue _fun105595
                }
            case 77:
                var6 = _closure1_slot14;
                var5 = var0.content;
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var4, var3);
                _fun105595_ip = 157;
                continue _fun105595;
            case 100:
                var2 = 0;
                if (!(var2 !== var4)) {
                    _fun105595_ip = 131;
                    continue _fun105595
                }
            case 106:
                var5 = _closure1_slot14;
                var2 = 1;
                var4 = var4 - var2;
                var2 = undefined;
                var2 = var5.bind(var2)(var0, var4, var3);
                _fun105595_ip = 157;
                continue _fun105595;
            case 131:
                var2 = undefined;
                var2 = var3.bind(var2)(var0);
                _fun105595_ip = 157;
                continue _fun105595;
            case 140:
                var2 = var0.forEach;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var4 = _closure1_slot14;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
            case 157:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun105597: for (var _fun105597_ip = 0;;) switch (_fun105597_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.author;
                var _closure2_slot0 = var13;
                var4 = var1.linkIndex;
                var _closure2_slot1 = var4;
                var9 = var1.channelId;
                var _closure2_slot2 = var9;
                var8 = var1.messageId;
                var _closure2_slot3 = var8;
                var2 = var1.onPressSearchLink;
                var _closure2_slot4 = var2;
                var7 = var1.onPress;
                var _closure2_slot5 = var7;
                var22 = var1.imageStyle;
                var5 = var1.containerStyle;
                var1 = _closure1_slot13;
                var3 = undefined;
                var21 = var1.bind(var3)();
                var _closure2_slot6 = var21;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 9;
                var12 = var11[var1];
                var16 = var6.bind(var3)(var12);
                var15 = var16.useStateFromStores;
                var12 = _closure1_slot8;
                var14 = new Array(1);
                var14[0] = var12;
                var12 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getMessage;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var15.bind(var16)(var14, var12);
                var _closure2_slot7 = var16;
                var1 = var11[var1];
                var12 = var6.bind(var3)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var11.bind(var12)(var6, var1);
                var _closure2_slot8 = var11;
                var12 = _closure1_slot4;
                var6 = var12.useState;
                var1 = null;
                var14 = var6.bind(var12)(var1);
                var12 = _closure1_slot3;
                var6 = 2;
                var12 = var12.bind(var3)(var14, var6);
                var6 = 0;
                var14 = var12[var6];
                var _closure2_slot9 = var14;
                var6 = 1;
                var6 = var12[var6];
                var _closure2_slot10 = var6;
                var15 = _closure1_slot4;
                var12 = var15.useCallback;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var4 = _closure1_slot14;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var4 = var12.bind(var15)(var4, var6);
                var _closure2_slot11 = var4;
                var15 = _closure1_slot4;
                var12 = var15.useMemo;
                var6 = new Array(2);
                var6[0] = var16;
                var6[1] = var4;
                var4 = function() { // Environment: var0
                    _fun105601: for (var _fun105601_ip = 0;;) switch (_fun105601_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun105601_ip = 168;
                                continue _fun105601
                            }
                        case 16:
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 11;
                            var0 = var8[var0];
                            var3 = undefined;
                            var7 = var5.bind(var3)(var0);
                            var6 = var7.renderMessageMarkupWithParser;
                            var0 = 12;
                            var0 = var8[var0];
                            var0 = var5.bind(var3)(var0);
                            var2 = var0.NativeSearchResultLinkPreviewParser;
                            var1 = _closure2_slot7;
                            var0 = {};
                            var9 = _closure2_slot11;
                            var0.postProcessor = var9;
                            var0 = var6.bind(var7)(var2, var1, var0);
                            var7 = var0.content;
                            var2 = _closure1_slot11;
                            var1 = _closure1_slot5;
                            var0 = {};
                            var6 = 'none';
                            var0.pointerEvents = var6;
                            var6 = _closure1_slot11;
                            var4 = 13;
                            var4 = var8[var4];
                            var4 = var5.bind(var3)(var4);
                            var5 = var4.Text;
                            var4 = {
                                'variant': 'text-md/semibold',
                                'color': 'mobile-text-heading-primary',
                                'lineClamp': 1
                            };
                            var4.children = var7;
                            var4 = var6.bind(var3)(var5, var4);
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 168:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 10;
                            var1 = var5[var0];
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var5[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0.mE3KJN;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var17 = var12.bind(var15)(var4, var6);
                var15 = _closure1_slot4;
                var12 = var15.useMemo;
                var6 = new Array(2);
                var6[0] = var14;
                var4 = var21.tapToSee;
                var6[1] = var4;
                var4 = function() { // Environment: var0
                    _fun105602: for (var _fun105602_ip = 0;;) switch (_fun105602_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun105602_ip = 65;
                                continue _fun105602
                            }
                        case 13:
                            var1 = _closure2_slot9;
                            var3 = var1.type;
                            var1 = 'link';
                            if (!(var1 === var3)) {
                                _fun105602_ip = 65;
                                continue _fun105602
                            }
                        case 30:
                            var1 = _closure2_slot9;
                            var1 = var1.target;
                            if (!(var2 != var1)) {
                                _fun105602_ip = 65;
                                continue _fun105602
                            }
                        case 44:
                            var1 = _closure2_slot9;
                            var3 = var1.target;
                            var1 = '';
                            if (!(var1 === var3)) {
                                _fun105602_ip = 297;
                                continue _fun105602
                            }
                        case 65:
                            var1 = _closure2_slot9;
                            if (!(var2 != var1)) {
                                _fun105602_ip = 108;
                                continue _fun105602
                            }
                        case 73:
                            var1 = _closure2_slot9;
                            var1 = var2 == var1;
                            var4 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun105602_ip = 97;
                                continue _fun105602
                            }
                        case 88:
                            var1 = _closure2_slot9;
                            var2 = var1.type;
                        case 97:
                            var1 = 'channelMention';
                            if (!(var1 !== var2)) {
                                _fun105602_ip = 229;
                                continue _fun105602
                            }
                        case 108:
                            var5 = _closure1_slot11;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 13;
                            var1 = var10[var1];
                            var3 = undefined;
                            var1 = var9.bind(var3)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'variant': 'text-xs/normal',
                                'color': 'interactive-text-default',
                                'lineClamp': 1
                            };
                            var6 = _closure2_slot6;
                            var6 = var6.tapToSee;
                            var1.style = var6;
                            var6 = 10;
                            var7 = var10[var6];
                            var7 = var9.bind(var3)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var3)(var6);
                            var6 = var6.t;
                            var6 = var6.q2IIoP;
                            var6 = var7.bind(var8)(var6);
                            var1.children = var6;
                            var1 = var5.bind(var3)(var2, var1);
                            return var1;
                        case 229:
                            var1 = _closure2_slot9;
                            var5 = var1.originalLink;
                            var3 = _closure1_slot11;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 13;
                            var1 = var6[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.Text;
                            var1 = {
                                'variant': 'text-xs/normal',
                                'color': 'text-link',
                                'lineClamp': 1
                            };
                            var1.children = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 297:
                            var0 = _closure2_slot9;
                            var4 = var0.target;
                            var3 = _closure1_slot11;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.Text;
                            var0 = {
                                'variant': 'text-xs/normal',
                                'color': 'text-link',
                                'lineClamp': 1
                            };
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var16 = var12.bind(var15)(var4, var6);
                var15 = _closure1_slot4;
                var12 = var15.useMemo;
                var6 = var1 == var14;
                var4 = undefined;
                if (var6) {
                    _fun105597_ip = 370;
                    continue _fun105597
                }
            case 364:
                var4 = var14.target;
            case 370:
                var6 = new Array(2);
                var6[0] = var4;
                var18 = var1 == var14;
                var4 = undefined;
                if (var18) {
                    _fun105597_ip = 392;
                    continue _fun105597
                }
            case 387:
                var4 = var14.type;
            case 392:
                var6[1] = var4;
                var4 = function() { // Environment: var0
                    _fun105603: for (var _fun105603_ip = 0;;) switch (_fun105603_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var0 = null;
                            var0 = var0 == var2;
                            var3 = undefined;
                            var2 = undefined;
                            if (var0) {
                                _fun105603_ip = 29;
                                continue _fun105603
                            }
                        case 20:
                            var0 = _closure2_slot9;
                            var2 = var0.type;
                        case 29:
                            var0 = 'channelMention';
                            if (!(var0 !== var2)) {
                                _fun105603_ip = 165;
                                continue _fun105603
                            }
                        case 40:
                            var0 = 'link';
                            if (!(var0 !== var2)) {
                                _fun105603_ip = 99;
                                continue _fun105603
                            }
                        case 48:
                            var4 = _closure1_slot11;
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 16;
                            var0 = var5[var0];
                            var0 = var2.bind(var3)(var0);
                            var2 = var0.LinkIcon;
                            var0 = {};
                            var5 = 'lg';
                            var0.size = var5;
                            var0 = var4.bind(var3)(var2, var0);
                            return var0;
                        case 99:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 15;
                            var2 = var5[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.getUrlIcon;
                            var1 = _closure2_slot9;
                            var1 = var1.target;
                            var2 = var2.bind(var4)(var1);
                            var1 = _closure1_slot11;
                            var0 = {};
                            var4 = 'lg';
                            var0.size = var4;
                            var0 = var1.bind(var3)(var2, var0);
                            return var0;
                        case 165:
                            var2 = _closure1_slot11;
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 14;
                            var0 = var4[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.ChatIcon;
                            var0 = {};
                            var4 = 'lg';
                            var0.size = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var20 = var12.bind(var15)(var4, var6);
                var12 = _closure1_slot4;
                var6 = var12.useCallback;
                var4 = new Array(5);
                var4[0] = var9;
                var4[1] = var8;
                var4[2] = var14;
                var4[3] = var7;
                var4[4] = var2;
                var2 = function() { // Environment: var0
                    _fun105604: for (var _fun105604_ip = 0;;) switch (_fun105604_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun105604_ip = 189;
                                continue _fun105604
                            }
                        case 16:
                            var1 = _closure2_slot9;
                            var2 = var1.type;
                            var1 = 'link';
                            if (!(var1 !== var2)) {
                                _fun105604_ip = 105;
                                continue _fun105604
                            }
                        case 33:
                            var1 = _closure2_slot9;
                            var2 = var1.type;
                            var1 = 'channelMention';
                            if (!(var1 === var2)) {
                                _fun105604_ip = 218;
                                continue _fun105604
                            }
                        case 53:
                            var3 = _closure2_slot4;
                            var2 = {};
                            var1 = _closure2_slot9;
                            var1 = var1.originalLink;
                            var2.url = var1;
                            var1 = true;
                            var2.trusted = var1;
                            var1 = _closure2_slot3;
                            var2.messageId = var1;
                            var1 = _closure2_slot2;
                            var2.channelId = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun105604_ip = 218;
                            continue _fun105604;
                        case 105:
                            var3 = _closure2_slot4;
                            var2 = {};
                            var6 = _closure2_slot9;
                            var1 = var6.target;
                            var2.url = var1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 17;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.isLinkTrusted;
                            var4 = var4.bind(var5)(var6);
                            var2.trusted = var4;
                            var4 = _closure2_slot3;
                            var2.messageId = var4;
                            var4 = _closure2_slot2;
                            var2.channelId = var4;
                            var1 = var3.bind(var1)(var2);
                            _fun105604_ip = 218;
                            continue _fun105604;
                        case 189:
                            var2 = _closure2_slot5;
                            var1 = {};
                            var3 = _closure2_slot2;
                            var1.channelId = var3;
                            var0 = _closure2_slot3;
                            var1.messageId = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 218:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var6.bind(var12)(var2, var4);
                var12 = _closure1_slot4;
                var6 = var12.useMemo;
                var2 = new Array(2);
                var2[0] = var13;
                var14 = var1 == var11;
                var1 = undefined;
                if (var14) {
                    _fun105597_ip = 486;
                    continue _fun105597
                }
            case 481:
                var1 = var11.guild_id;
            case 486:
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun105605: for (var _fun105605_ip = 0;;) switch (_fun105605_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.getAvatarSource;
                            var4 = _closure2_slot8;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun105605_ip = 37;
                                continue _fun105605
                            }
                        case 28:
                            var3 = _closure2_slot8;
                            var0 = var3.guild_id;
                        case 37:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var12 = var6.bind(var12)(var1, var2);
                var6 = _closure1_slot4;
                var2 = var6.useCallback;
                var1 = new Array(3);
                var1[0] = var9;
                var1[1] = var8;
                var1[2] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot5;
                    var1 = {};
                    var3 = _closure2_slot2;
                    var1.channelId = var3;
                    var0 = _closure2_slot3;
                    var1.messageId = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot12;
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 18;
                var0 = var14[var8];
                var0 = var9.bind(var3)(var0);
                var1 = var0.SearchListCardContainer;
                var0 = {};
                var0.containerStyle = var5;
                var0.onPress = var4;
                var6 = _closure1_slot11;
                var4 = var14[var8];
                var4 = var9.bind(var3)(var4);
                var5 = var4.SearchListCardThumbnail;
                var4 = {};
                var19 = _closure1_slot11;
                var18 = _closure1_slot5;
                var7 = {};
                var23 = var21.iconContainer;
                var21 = new Array(2);
                var21[0] = var23;
                var21[1] = var22;
                var7.style = var21;
                var7.children = var20;
                var7 = var19.bind(var3)(var18, var7);
                var4.thumbnail = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var5 = var14[var8];
                var5 = var9.bind(var3)(var5);
                var6 = var5.SearchListCardContent;
                var5 = {};
                var5.label = var17;
                var5.subLabel = var16;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot11;
                var5 = 19;
                var5 = var14[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.PressableHighlight;
                var5 = {};
                var5.onPress = var15;
                var10 = _closure1_slot11;
                var8 = var14[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.SearchListCardFooter;
                var8 = {};
                var8.author = var13;
                var8.avatarSource = var12;
                var8.channel = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun105607: for (var _fun105607_ip = 0;;) switch (_fun105607_ip) {
            case 0:
                var2 = arg0;
                var21 = var2.embed;
                var _closure2_slot0 = var21;
                var16 = var2.sources;
                var _closure2_slot1 = var16;
                var13 = var2.author;
                var _closure2_slot2 = var13;
                var15 = var2.channelId;
                var _closure2_slot3 = var15;
                var14 = var2.messageId;
                var _closure2_slot4 = var14;
                var1 = var2.onPressSearchLink;
                var _closure2_slot5 = var1;
                var6 = var2.onPress;
                var _closure2_slot6 = var6;
                var20 = var2.imageStyle;
                var _closure2_slot7 = var20;
                var7 = var2.containerStyle;
                var3 = undefined;
                var _closure2_slot12 = var3;
                var2 = _closure1_slot13;
                var2 = var2.bind(var3)();
                var _closure2_slot8 = var2;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 9;
                var9 = var8[var4];
                var17 = var5.bind(var3)(var9);
                var12 = var17.useStateFromStores;
                var9 = _closure1_slot8;
                var11 = new Array(1);
                var11[0] = var9;
                var9 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getMessage;
                    var0 = _closure2_slot4;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var12.bind(var17)(var11, var9);
                var4 = var8[var4];
                var11 = var5.bind(var3)(var4);
                var8 = var11.useStateFromStores;
                var4 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var8.bind(var11)(var5, var4);
                var _closure2_slot9 = var11;
                var4 = _closure1_slot6;
                var4 = var4.bind(var3)();
                var19 = var4.scale;
                var _closure2_slot10 = var19;
                var17 = var21.url;
                var _closure2_slot11 = var17;
                var8 = var21.rawTitle;
                var18 = null;
                if (!(var18 == var8)) {
                    _fun105607_ip = 264;
                    continue _fun105607
                }
            case 241:
                var5 = var21.author;
                var12 = var18 == var5;
                var4 = undefined;
                if (var12) {
                    _fun105607_ip = 261;
                    continue _fun105607
                }
            case 256:
                var4 = var5.name;
            case 261:
                var8 = var4;
            case 264:
                if (!(var18 == var8)) {
                    _fun105607_ip = 273;
                    continue _fun105607
                }
            case 268:
                var8 = var21.url;
            case 273:
                _closure2_slot12 = var8;
                var12 = _closure1_slot4;
                var5 = var12.useMemo;
                var22 = var13.id;
                var4 = new Array(8);
                var4[0] = var22;
                var4[1] = var15;
                var4[2] = var21;
                var4[3] = var20;
                var4[4] = var14;
                var4[5] = var19;
                var4[6] = var16;
                var2 = var2.iconContainer;
                var4[7] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.SearchEmbedMediaImage;
                    var0 = {};
                    var5 = _closure2_slot4;
                    var0.messageId = var5;
                    var5 = _closure2_slot3;
                    var0.channelId = var5;
                    var5 = _closure2_slot2;
                    var5 = var5.id;
                    var0.authorId = var5;
                    var5 = _closure2_slot1;
                    var0.sources = var5;
                    var5 = _closure2_slot0;
                    var0.embed = var5;
                    var5 = _closure2_slot7;
                    var0.containerStyle = var5;
                    var7 = function() {
                        var3 = _closure1_slot11;
                        var2 = _closure1_slot5;
                        var1 = {};
                        var4 = _closure2_slot8;
                        var6 = var4.iconContainer;
                        var4 = new Array(2);
                        var4[0] = var6;
                        var5 = _closure2_slot7;
                        var4[1] = var5;
                        var1.style = var4;
                        var6 = _closure1_slot11;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 16;
                        var4 = var4[var0];
                        var0 = undefined;
                        var4 = var5.bind(var0)(var4);
                        var5 = var4.LinkIcon;
                        var4 = {};
                        var7 = 'md';
                        var4.size = var7;
                        var4 = var6.bind(var0)(var5, var4);
                        var1.children = var4;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var0.renderFallback = var7;
                    var6 = _closure2_slot10;
                    var0.scale = var6;
                    var7 = var5.height;
                    var6 = _closure1_slot9;
                    var6 = var7 + var6;
                    var0.containerHeight = var6;
                    var5 = var5.width;
                    var4 = _closure1_slot9;
                    var4 = var5 + var4;
                    var0.containerWidth = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var19 = var5.bind(var12)(var2, var4);
                var12 = _closure1_slot4;
                var5 = var12.useMemo;
                var4 = new Array(2);
                var4[0] = var13;
                var16 = var18 == var11;
                var2 = undefined;
                if (var16) {
                    _fun105607_ip = 377;
                    continue _fun105607
                }
            case 372:
                var2 = var11.guild_id;
            case 377:
                var4[1] = var2;
                var2 = function() { // Environment: var0
                    _fun105612: for (var _fun105612_ip = 0;;) switch (_fun105612_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = var2.getAvatarSource;
                            var4 = _closure2_slot9;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun105612_ip = 37;
                                continue _fun105612
                            }
                        case 28:
                            var3 = _closure2_slot9;
                            var0 = var3.guild_id;
                        case 37:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var12 = var5.bind(var12)(var2, var4);
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var2 = new Array(5);
                var2[0] = var17;
                var2[1] = var1;
                var2[2] = var8;
                var2[3] = var15;
                var2[4] = var14;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 21;
                    var1 = var6[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var7 = _closure2_slot11;
                    var1 = null;
                    var2 = var1 != var7;
                    var1 = '[LinkGridItem] Embed url cannot be null';
                    var1 = var5.bind(var0)(var2, var1);
                    var2 = _closure2_slot5;
                    var1 = {};
                    var1.url = var7;
                    var5 = _closure1_slot0;
                    var4 = 22;
                    var4 = var6[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.isLinkTrusted;
                    var4 = _closure2_slot12;
                    var4 = var5.bind(var6)(var7, var4);
                    var1.trusted = var4;
                    var4 = _closure2_slot4;
                    var1.messageId = var4;
                    var3 = _closure2_slot3;
                    var1.channelId = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot4;
                var2 = var5.useCallback;
                var1 = new Array(3);
                var1[0] = var15;
                var1[1] = var14;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot6;
                    var1 = {};
                    var3 = _closure2_slot3;
                    var1.channelId = var3;
                    var0 = _closure2_slot4;
                    var1.messageId = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot12;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var14 = 18;
                var0 = var5[var14];
                var0 = var6.bind(var3)(var0);
                var1 = var0.SearchListCardContainer;
                var0 = {};
                var0.containerStyle = var7;
                var0.onPress = var4;
                var16 = _closure1_slot11;
                var4 = var5[var14];
                var4 = var6.bind(var3)(var4);
                var7 = var4.SearchListCardThumbnail;
                var4 = {};
                var4.thumbnail = var19;
                var7 = var16.bind(var3)(var7, var4);
                var4 = new Array(3);
                var4[0] = var7;
                var7 = _closure1_slot11;
                var5 = var5[var14];
                var5 = var6.bind(var3)(var5);
                var6 = var5.SearchListCardContent;
                var5 = {};
                if (!(var18 == var9)) {
                    _fun105607_ip = 639;
                    continue _fun105607
                }
            case 584:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var9 = 10;
                var16 = var21[var9];
                var16 = var20.bind(var3)(var16);
                var19 = var16.intl;
                var16 = var19.string;
                var9 = var21[var9];
                var9 = var20.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.mE3KJN;
                var8 = var16.bind(var19)(var9);
            case 639:
                var5.label = var8;
                var16 = _closure1_slot11;
                var9 = _closure1_slot0;
                var19 = _closure1_slot2;
                var8 = 13;
                var8 = var19[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-link',
                    'lineClamp': 1
                };
                if (!(var18 == var17)) {
                    _fun105607_ip = 745;
                    continue _fun105607
                }
            case 690:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 10;
                var19 = var22[var18];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.q2IIoP;
                var17 = var19.bind(var20)(var18);
            case 745:
                var8.children = var17;
                var8 = var16.bind(var3)(var9, var8);
                var5.subLabel = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot11;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 19;
                var5 = var8[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.PressableHighlight;
                var5 = {};
                var5.onPress = var15;
                var10 = _closure1_slot11;
                var8 = var8[var14];
                var8 = var9.bind(var3)(var8);
                var9 = var8.SearchListCardFooter;
                var8 = {};
                var8.author = var13;
                var8.avatarSource = var12;
                var8.channel = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.useWindowDimensions;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.FILE_OR_LINK_IMAGE_BUFFER;
    var _closure1_slot9 = var7;
    var3 = var3.SearchLinkTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.container = var9;
    var9 = {};
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderTopLeftRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderTopRightRadius = var10;
    var3.imageContainer = var9;
    var9 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.iconContainer = var9;
    var9 = {};
    var10 = 'italic';
    var9.fontStyle = var10;
    var3.tapToSee = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105615: for (var _fun105615_ip = 0;;) switch (_fun105615_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.data;
                var6 = var0.onPressSearchLink;
                var5 = var0.onPress;
                var4 = var0.imageStyle;
                var0 = var0.containerStyle;
                var3 = var7.type;
                var2 = _closure1_slot10;
                var2 = var2.EMBED;
                if (!(var2 !== var3)) {
                    _fun105615_ip = 150;
                    continue _fun105615
                }
            case 53:
                var2 = _closure1_slot10;
                var2 = var2.TEXT;
                if (!(var2 !== var3)) {
                    _fun105615_ip = 71;
                    continue _fun105615
                }
            case 67:
                var2 = null;
                return var2;
            case 71:
                var9 = _closure1_slot11;
                var8 = _closure1_slot15;
                var3 = {};
                var2 = var7.messageId;
                var3.messageId = var2;
                var2 = var7.channelId;
                var3.channelId = var2;
                var2 = var7.author;
                var3.author = var2;
                var2 = var7.linkIndex;
                var3.linkIndex = var2;
                var3.onPressSearchLink = var6;
                var3.onPress = var5;
                var3.imageStyle = var4;
                var3.containerStyle = var0;
                var2 = undefined;
                var2 = var9.bind(var2)(var8, var3);
                return var2;
            case 150:
                var3 = _closure1_slot11;
                var2 = _closure1_slot16;
                var1 = {};
                var8 = var7.embed;
                var1.embed = var8;
                var8 = var7.sources;
                var1.sources = var8;
                var8 = var7.messageId;
                var1.messageId = var8;
                var8 = var7.channelId;
                var1.channelId = var8;
                var8 = var7.author;
                var1.author = var8;
                var7 = var7.linkIndex;
                var1.linkIndex = var7;
                var1.onPressSearchLink = var6;
                var1.onPress = var5;
                var1.imageStyle = var4;
                var1.containerStyle = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/LinkGridItem.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 4226, 8917, 33, 1297, 671, 566, 1234, 6788, 13763, 3941, 4838, 11676, 3254, 9717, 13755, 4902, 13751, 44, 5890, 2]);