// modules/search/native/components/list/SearchMediaImage.tsx
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
        _fun105595: for (var _fun105595_ip = 0;;) switch (_fun105595_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.obscureReason;
                var _closure2_slot0 = var5;
                var8 = var1.height;
                var _closure2_slot1 = var8;
                var1 = var1.width;
                var _closure2_slot2 = var1;
                var2 = _closure1_slot12;
                var3 = undefined;
                var11 = var2.bind(var3)();
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var2 = var4.bind(var3)(var2);
                var6 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var2 = 7;
                var2 = var7[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.isThemeDark;
                var2 = var2.bind(var4)(var6);
                var7 = 'light';
                if (!var2) {
                    _fun105595_ip = 108;
                    continue _fun105595
                }
            case 104:
                var7 = 'dark';
            case 108:
                var6 = _closure1_slot4;
                var4 = var6.useMemo;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot1;
                    var0.height = var2;
                    var1 = _closure2_slot2;
                    var0.width = var1;
                    return var0;
                };
                var8 = var4.bind(var6)(var1, var2);
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun105597: for (var _fun105597_ip = 0;;) switch (_fun105597_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var5 = 8;
                            var1 = var1[var5];
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.ObscureReason;
                            var1 = var1.SPOILER;
                            if (!(var1 !== var2)) {
                                _fun105597_ip = 237;
                                continue _fun105597
                            }
                        case 51:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.ObscureReason;
                            var1 = var1.EXPLICIT_CONTENT;
                            if (!(var1 !== var2)) {
                                _fun105597_ip = 189;
                                continue _fun105597
                            }
                        case 84:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.ObscureReason;
                            var1 = var1.GORE_CONTENT;
                            if (!(var1 !== var2)) {
                                _fun105597_ip = 189;
                                continue _fun105597
                            }
                        case 117:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.ObscureReason;
                            var1 = var1.SELF_HARM_CONTENT;
                            if (!(var1 !== var2)) {
                                _fun105597_ip = 189;
                                continue _fun105597
                            }
                        case 150:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.ObscureReason;
                            var1 = var1.POTENTIAL_EXPLICIT_CONTENT;
                            if (!(var1 !== var2)) {
                                _fun105597_ip = 185;
                                continue _fun105597
                            }
                        case 183:
                            return var3;
                        case 185:
                            var1 = null;
                            return var1;
                        case 189:
                            var4 = _closure1_slot9;
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 10;
                            var1 = var5[var1];
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.ImageWarningIcon;
                            var1 = {};
                            var5 = 'lg';
                            var1.size = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            return var1;
                        case 237:
                            var2 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 9;
                            var0 = var4[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.SpoilerIcon;
                            var0 = {};
                            var4 = 'lg';
                            var0.size = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var9 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot10;
                var0 = {};
                var6 = _closure1_slot9;
                var5 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 11;
                var4 = var12[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.blurTheme = var7;
                var7 = _closure1_slot6;
                var12 = var7.absoluteFill;
                var7 = new Array(2);
                var7[0] = var12;
                var7[1] = var8;
                var4.style = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                var5 = var5 != var9;
                if (!var5) {
                    _fun105595_ip = 313;
                    continue _fun105595
                }
            case 262:
                var8 = _closure1_slot9;
                var7 = _closure1_slot7;
                var6 = {};
                var10 = _closure1_slot6;
                var12 = var10.absoluteFill;
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var11.container;
                var10[1] = var11;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 313:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ImageBackground;
    var _closure1_slot5 = var8;
    var8 = var3.StyleSheet;
    var _closure1_slot6 = var8;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.Fragment;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var9;
    var9 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.sound = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun105598: for (var _fun105598_ip = 0;;) switch (_fun105598_ip) {
            case 0:
                var1 = arg0;
                var20 = var1.mediaUrl;
                var18 = var1.mediaHeight;
                var19 = var1.mediaWidth;
                var7 = var1.containerStyle;
                var17 = var1.placeholder;
                var16 = var1.placeholderVersion;
                var5 = var1.renderFallback;
                var2 = var1.obscureReason;
                var14 = var1.containerHeight;
                var _closure2_slot0 = var14;
                var10 = var1.containerWidth;
                var _closure2_slot1 = var10;
                var4 = var1.scale;
                var8 = _closure1_slot4;
                var6 = var8.useMemo;
                var3 = new Array(2);
                var3[0] = var14;
                var3[1] = var10;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.height = var2;
                    var1 = _closure2_slot1;
                    var0.width = var1;
                    return var0;
                };
                var12 = var6.bind(var8)(var0, var3);
                var0 = null;
                if (!(var0 != var20)) {
                    _fun105598_ip = 708;
                    continue _fun105598
                }
            case 129:
                if (!(var0 != var18)) {
                    _fun105598_ip = 708;
                    continue _fun105598
                }
            case 136:
                if (!(var0 != var19)) {
                    _fun105598_ip = 708;
                    continue _fun105598
                }
            case 143:
                var3 = var14 * var4;
                var4 = var10 * var4;
                if (!(!(var19 > var18))) {
                    _fun105598_ip = 195;
                    continue _fun105598
                }
            case 155:
                var8 = new Array(2);
                var8[0] = var3;
                var6 = global;
                var9 = var6.Math;
                var6 = var9.round;
                var3 = var3 / var19;
                var3 = var18 * var3;
                var3 = var6.bind(var9)(var3);
                var8[1] = var3;
                _fun105598_ip = 236;
                continue _fun105598;
            case 195:
                var3 = global;
                var9 = var3.Math;
                var6 = var9.round;
                var3 = var4 / var18;
                var3 = var19 * var3;
                var6 = var6.bind(var9)(var3);
                var3 = new Array(2);
                var3[0] = var6;
                var3[1] = var4;
                var8 = var3;
            case 236:
                var4 = _closure1_slot3;
                var6 = undefined;
                var3 = 2;
                var4 = var4.bind(var6)(var8, var3);
                var3 = 0;
                var15 = var4[var3];
                var3 = 1;
                var13 = var4[var3];
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 12;
                var3 = var8[var3];
                var11 = var4.bind(var6)(var3);
                var9 = var11.getSrcWithWidthAndHeight;
                var3 = {};
                var3.src = var20;
                var3.sourceWidth = var19;
                var3.sourceHeight = var18;
                var3.targetWidth = var15;
                var3.targetHeight = var13;
                var13 = 'png';
                var3.format = var13;
                var13 = var9.bind(var11)(var3);
                var3 = 13;
                var3 = var8[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.getObscuredAlt;
                var11 = var3.bind(var4)(var2);
                var3 = var0 != var2;
                var8 = null;
                if (!var3) {
                    _fun105598_ip = 391;
                    continue _fun105598
                }
            case 362:
                var9 = _closure1_slot9;
                var4 = _closure1_slot14;
                var3 = {};
                var3.obscureReason = var2;
                var3.height = var14;
                var3.width = var10;
                var8 = var9.bind(var6)(var4, var3);
            case 391:
                var9 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 14;
                var3 = var3[var4];
                var9 = var9.bind(var6)(var3);
                var3 = var9.isAndroid;
                var3 = var3.bind(var9)();
                if (!var3) {
                    _fun105598_ip = 431;
                    continue _fun105598
                }
            case 424:
                if (!(var0 == var2)) {
                    _fun105598_ip = 620;
                    continue _fun105598
                }
            case 431:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var3 = var3.bind(var6)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                var15 = var11;
                if (!var2) {
                    _fun105598_ip = 521;
                    continue _fun105598
                }
            case 464:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 15;
                var3 = var10[var2];
                var3 = var9.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var10[var2];
                var2 = var9.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.jes7FG;
                var15 = var3.bind(var4)(var2);
            case 521:
                var4 = _closure1_slot11;
                var3 = _closure1_slot7;
                var2 = {};
                var2.style = var7;
                var14 = _closure1_slot9;
                var10 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 16;
                var9 = var18[var9];
                var9 = var10.bind(var6)(var9);
                var10 = var9.ImageWithPlaceholder;
                var9 = {};
                var9.style = var12;
                var9.uri = var13;
                var9.placeholder = var17;
                var9.placeholderVersion = var16;
                var9.alt = var15;
                var10 = var14.bind(var6)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var9[1] = var8;
                var2.children = var9;
                var2 = var4.bind(var6)(var3, var2);
                return var2;
            case 620:
                var4 = _closure1_slot11;
                var3 = _closure1_slot7;
                var2 = {};
                var2.style = var7;
                var10 = _closure1_slot9;
                var9 = _closure1_slot5;
                var7 = {};
                var7.style = var12;
                var12 = {};
                var12.uri = var13;
                var7.source = var12;
                var12 = 10;
                var7.blurRadius = var12;
                var12 = 'cover';
                var7.resizeMode = var12;
                var7.accessibilityLabel = var11;
                var9 = var10.bind(var6)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var2.children = var7;
                var2 = var4.bind(var6)(var3, var2);
                return var2;
            case 708:
                var2 = var0 != var5;
                var0 = null;
                if (!var2) {
                    _fun105598_ip = 743;
                    continue _fun105598
                }
            case 717:
                var4 = _closure1_slot9;
                var3 = _closure1_slot10;
                var2 = {};
                var1 = undefined;
                var5 = var5.bind(var1)();
                var2.children = var5;
                var0 = var4.bind(var1)(var3, var2);
            case 743:
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/SearchMediaImage.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var3 = arg0;
        var4 = var3.attachment;
        var _closure2_slot0 = var4;
        var10 = var3.channelId;
        var9 = var3.authorId;
        var2 = {
            'attachment': 0,
            'channelId': 0,
            'authorId': 0
        };
        var13 = null;
        var14 = var2;
        var0 = silentSetPrototypeOf(var14, var13);
        var14 = {};
        var13 = var3;
        var12 = var2;
        var5 = copyDataProperties(var14, var13, var12);
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 17;
        var7 = var6[var3];
        var3 = undefined;
        var8 = var2.bind(var3)(var7);
        var7 = var8.useEnabledHarmTypesBitmaskForChannelAndAuthorId;
        var10 = var7.bind(var8)(var10, var9);
        var _closure2_slot1 = var10;
        var9 = _closure1_slot4;
        var8 = var9.useMemo;
        var7 = new Array(2);
        var7[0] = var4;
        var7[1] = var10;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.getObscureReasonForAttachment;
            var1 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var7 = var8.bind(var9)(var1, var7);
        var1 = 18;
        var1 = var6[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.getAttachmentUrl;
        var6 = var1.bind(var2)(var4);
        var2 = _closure1_slot9;
        var1 = _closure1_slot13;
        var0 = {};
        var14 = var0;
        var13 = var5;
        var5 = copyDataProperties(var14, var13);
        var5 = 'obscureReason';
        var0[var5] = var7;
        var5 = 'mediaUrl';
        var0[var5] = var6;
        var6 = var4.height;
        var5 = 'mediaHeight';
        var0[var5] = var6;
        var5 = var4.width;
        var4 = 'mediaWidth';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SearchAttachmentMediaImage = var3;
    var3 = function arg0() {
        _fun105602: for (var _fun105602_ip = 0;;) switch (_fun105602_ip) {
            case 0:
                var3 = arg0;
                var7 = var3.embed;
                var _closure2_slot0 = var7;
                var0 = var3.sources;
                var _closure2_slot1 = var0;
                var0 = var3.messageId;
                var _closure2_slot2 = var0;
                var11 = var3.channelId;
                var10 = var3.authorId;
                var2 = {
                    'embed': 0,
                    'sources': 0,
                    'messageId': 0,
                    'channelId': 0,
                    'authorId': 0
                };
                var5 = null;
                var14 = var2;
                var13 = null;
                var0 = silentSetPrototypeOf(var14, var13);
                var14 = {};
                var13 = var3;
                var12 = var2;
                var4 = copyDataProperties(var14, var13, var12);
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 17;
                var8 = var2[var3];
                var3 = undefined;
                var9 = var6.bind(var3)(var8);
                var8 = var9.useEnabledHarmTypesBitmaskForChannelAndAuthorId;
                var8 = var8.bind(var9)(var11, var10);
                var _closure2_slot3 = var8;
                var8 = 19;
                var8 = var2[var8];
                var10 = var6.bind(var3)(var8);
                var9 = var10.useStateFromStores;
                var11 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var11;
                var1 = function() { // Environment: var1
                    _fun105603: for (var _fun105603_ip = 0;;) switch (_fun105603_ip) {
                        case 0:
                            var4 = _closure1_slot8;
                            var3 = var4.getMessage;
                            var0 = _closure2_slot2;
                            var6 = var3.bind(var4)(var0);
                            var0 = null;
                            if (!(var0 != var6)) {
                                _fun105603_ip = 145;
                                continue _fun105603
                            }
                        case 31:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 18;
                            var3 = var4[var3];
                            var4 = undefined;
                            var8 = var5.bind(var4)(var3);
                            var7 = var8.flattenSource;
                            var5 = _closure2_slot1;
                            var3 = false;
                            var5 = var7.bind(var8)(var5, var3);
                            var7 = var0 == var5;
                            var3 = undefined;
                            if (var7) {
                                _fun105603_ip = 86;
                                continue _fun105603
                            }
                        case 80:
                            var3 = var5.spoiler;
                        case 86:
                            var5 = var0 != var3;
                            if (!var5) {
                                _fun105603_ip = 96;
                                continue _fun105603
                            }
                        case 93:
                            var5 = var3;
                        case 96:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 13;
                            var2 = var7[var2];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.getObscureReasonForEmbed;
                            var12 = _closure2_slot0;
                            var9 = _closure2_slot3;
                            var13 = var4;
                            var11 = var6;
                            var10 = var5;
                            var1 = var13[var3](var12, var11, var10, var9, var8);
                            return var1;
                        case 145:
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8, var1);
                var1 = var7.thumbnail;
                var10 = 18;
                var2 = var2[var10];
                var6 = var6.bind(var3)(var2);
                var2 = var6.getEmbedMedia;
                var2 = var2.bind(var6)(var7);
                var6 = var5 != var2;
                var7 = null;
                if (!var6) {
                    _fun105602_ip = 231;
                    continue _fun105602
                }
            case 203:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var9 = var9.bind(var3)(var6);
                var6 = var9.getEmbedUrl;
                var7 = var6.bind(var9)(var2);
            case 231:
                if (!(var5 != var1)) {
                    _fun105602_ip = 240;
                    continue _fun105602
                }
            case 235:
                var7 = var1.url;
            case 240:
                if (!(var5 == var1)) {
                    _fun105602_ip = 260;
                    continue _fun105602
                }
            case 244:
                var9 = var5 == var2;
                var6 = undefined;
                if (var9) {
                    _fun105602_ip = 258;
                    continue _fun105602
                }
            case 253:
                var6 = var2.height;
            case 258:
                _fun105602_ip = 265;
                continue _fun105602;
            case 260:
                var6 = var1.height;
            case 265:
                if (!(var5 == var1)) {
                    _fun105602_ip = 285;
                    continue _fun105602
                }
            case 269:
                var9 = var5 == var2;
                var5 = undefined;
                if (var9) {
                    _fun105602_ip = 283;
                    continue _fun105602
                }
            case 278:
                var5 = var2.width;
            case 283:
                _fun105602_ip = 290;
                continue _fun105602;
            case 285:
                var5 = var1.width;
            case 290:
                var2 = _closure1_slot9;
                var1 = _closure1_slot13;
                var0 = {};
                var14 = var0;
                var13 = var4;
                var4 = copyDataProperties(var14, var13);
                var4 = 'obscureReason';
                var0[var4] = var8;
                var4 = 'mediaUrl';
                var0[var4] = var7;
                var4 = 'mediaHeight';
                var0[var4] = var6;
                var4 = 'mediaWidth';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SearchEmbedMediaImage = var3;
    var3 = function arg0() {
        var1 = arg0;
        var9 = var1.height;
        var _closure2_slot0 = var9;
        var8 = var1.width;
        var _closure2_slot1 = var8;
        var7 = var1.containerStyle;
        var1 = _closure1_slot12;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var6 = _closure1_slot4;
        var2 = var6.useMemo;
        var1 = new Array(2);
        var1[0] = var9;
        var1[1] = var8;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot0;
            var0.height = var2;
            var1 = _closure2_slot1;
            var0.width = var1;
            return var0;
        };
        var6 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot9;
        var1 = _closure1_slot7;
        var0 = {};
        var8 = var5.sound;
        var5 = new Array(3);
        var5[0] = var8;
        var5[1] = var7;
        var5[2] = var6;
        var0.style = var5;
        var6 = _closure1_slot9;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 20;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.CirclePlayIcon;
        var4 = {
            'size': 'lg',
            'color': 'interactive-text-default'
        };
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SearchSoundMediaImage = var3;
    var3 = function arg0() {
        var1 = arg0;
        var7 = var1.fileName;
        var10 = var1.height;
        var _closure2_slot0 = var10;
        var9 = var1.width;
        var _closure2_slot1 = var9;
        var8 = var1.containerStyle;
        var1 = _closure1_slot12;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var6 = _closure1_slot4;
        var2 = var6.useMemo;
        var1 = new Array(2);
        var1[0] = var10;
        var1[1] = var9;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot0;
            var0.height = var2;
            var1 = _closure2_slot1;
            var0.width = var1;
            return var0;
        };
        var6 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot9;
        var1 = _closure1_slot7;
        var0 = {};
        var9 = var5.sound;
        var5 = new Array(3);
        var5[0] = var9;
        var5[1] = var8;
        var5[2] = var6;
        var0.style = var5;
        var6 = _closure1_slot9;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 21;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.AttachmentIcon;
        var4 = {};
        var4.fileName = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SearchFileMediaImage = var3;
    var1 = function arg0() {
        var3 = arg0;
        var4 = var3.unfurledMediaItem;
        var _closure2_slot0 = var4;
        var9 = var3.sources;
        var _closure2_slot1 = var9;
        var10 = var3.channelId;
        var7 = var3.authorId;
        var8 = var3.isBot;
        var _closure2_slot2 = var8;
        var2 = {
            'unfurledMediaItem': 0,
            'sources': 0,
            'channelId': 0,
            'authorId': 0,
            'isBot': 0
        };
        var13 = null;
        var14 = var2;
        var0 = silentSetPrototypeOf(var14, var13);
        var14 = {};
        var13 = var3;
        var12 = var2;
        var5 = copyDataProperties(var14, var13, var12);
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 17;
        var2 = var3[var2];
        var3 = undefined;
        var6 = var6.bind(var3)(var2);
        var2 = var6.useEnabledHarmTypesBitmaskForChannelAndAuthorId;
        var10 = var2.bind(var6)(var10, var7);
        var _closure2_slot3 = var10;
        var7 = _closure1_slot4;
        var6 = var7.useMemo;
        var2 = new Array(4);
        var2[0] = var4;
        var2[1] = var10;
        var2[2] = var9;
        var2[3] = var8;
        var1 = function() { // Environment: var1
            _fun105609: for (var _fun105609_ip = 0;;) switch (_fun105609_ip) {
                case 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 13;
                    var0 = var8[var0];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var0);
                    var4 = var5.getObscureReasonForUnfurledMediaItem;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot3;
                    var0 = 18;
                    var0 = var8[var0];
                    var7 = var7.bind(var6)(var0);
                    var6 = var7.flattenSource;
                    var0 = _closure2_slot1;
                    var6 = var6.bind(var7)(var0);
                    var0 = null;
                    var0 = var0 == var6;
                    if (var0) {
                        _fun105609_ip = 87;
                        continue _fun105609
                    }
                case 78:
                    var6 = var6.spoiler;
                    var0 = !var6;
                case 87:
                    var9 = _closure2_slot2;
                    var10 = !var0;
                    var13 = var5;
                    var12 = var3;
                    var11 = var2;
                    var0 = var13[var4](var12, var11, var10, var9, var8);
                    return var0;
            }
        };
        var6 = var6.bind(var7)(var1, var2);
        var2 = _closure1_slot9;
        var1 = _closure1_slot13;
        var0 = {};
        var14 = var0;
        var13 = var5;
        var5 = copyDataProperties(var14, var13);
        var5 = 'obscureReason';
        var0[var5] = var6;
        var6 = var4.proxyUrl;
        var5 = 'mediaUrl';
        var0[var5] = var6;
        var6 = var4.height;
        var5 = 'mediaHeight';
        var0[var5] = var6;
        var5 = var4.width;
        var4 = 'mediaWidth';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.SearchComponentMediaImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4226, 33, 1297, 3246, 3206, 4272, 9635, 4849, 4073, 1463, 11649, 478, 1234, 13774, 9211, 8877, 566, 8871, 8854, 2]);