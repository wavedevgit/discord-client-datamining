// modules/message_request/native/MessageRequestPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.Fonts;
    var7 = var3.AnalyticEvents;
    var _closure1_slot6 = var7;
    var3 = var3.MessageFlags;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'italic';
    var9.fontStyle = var10;
    var14 = 6;
    var10 = var5[var14];
    var17 = var16.bind(var0)(var10);
    var11 = var13.PRIMARY_MEDIUM;
    var12 = 7;
    var10 = var5[var12];
    var10 = var16.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var15 = 12;
    var19 = var17.bind(var0)(var11, var10, var15);
    var20 = var9;
    var10 = copyDataProperties(var20, var19);
    var11 = 16;
    var10 = 'lineHeight';
    var9[var10] = var11;
    var3.systemContent = var9;
    var9 = {};
    var14 = var5[var14];
    var14 = var16.bind(var0)(var14);
    var13 = var13.PRIMARY_MEDIUM;
    var12 = var5[var12];
    var12 = var16.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_DEFAULT;
    var19 = var14.bind(var0)(var13, var12, var15);
    var20 = var9;
    var12 = copyDataProperties(var20, var19);
    var9[var10] = var11;
    var3.messageContent = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun109521: for (var _fun109521_ip = 0;;) switch (_fun109521_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.channel;
                var _closure2_slot0 = var13;
                var5 = var0.style;
                var0 = _closure1_slot9;
                var3 = undefined;
                var0 = var0.bind(var3)();
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var6 = var7.bind(var3)(var1);
                var1 = var6.useMessageRequestPreview;
                var6 = var1.bind(var6)(var13);
                var10 = var6.loaded;
                var1 = var6.error;
                var11 = var6.message;
                var _closure2_slot1 = var11;
                var6 = 9;
                var6 = var8[var6];
                var12 = var7.bind(var3)(var6);
                var9 = var12.useStateFromStoresObject;
                var6 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var6;
                var7 = new Array(1);
                var7[0] = var11;
                var6 = function() { // Environment: var2
                    _fun109522: for (var _fun109522_ip = 0;;) switch (_fun109522_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun109522_ip = 40;
                                continue _fun109522
                            }
                        case 18:
                            var6 = _closure1_slot5;
                            var5 = var6.isBlockedForMessage;
                            var4 = _closure2_slot1;
                            var1 = var5.bind(var6)(var4);
                        case 40:
                            var0.isBlocked = var1;
                            var1 = _closure2_slot1;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun109522_ip = 78;
                                continue _fun109522
                            }
                        case 56:
                            var4 = _closure1_slot5;
                            var3 = var4.isIgnoredForMessage;
                            var2 = _closure2_slot1;
                            var1 = var3.bind(var4)(var2);
                        case 78:
                            var0.isIgnored = var1;
                            return var0;
                    }
                };
                var6 = var9.bind(var12)(var8, var6, var7);
                var9 = var6.isBlocked;
                var8 = var6.isIgnored;
                var12 = _closure1_slot3;
                var7 = var12.useEffect;
                var6 = new Array(2);
                var6[0] = var13;
                var6[1] = var11;
                var2 = function() { // Environment: var2
                    _fun109523: for (var _fun109523_ip = 0;;) switch (_fun109523_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun109523_ip = 105;
                                continue _fun109523
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot6;
                            var1 = var0.MESSAGE_REQUEST_PREVIEW_VIEWED;
                            var0 = {};
                            var5 = _closure2_slot0;
                            var6 = var5.isSpam;
                            var0.is_spam = var6;
                            var5 = var5.id;
                            var0.channel_id = var5;
                            var4 = _closure2_slot1;
                            var4 = var4.author;
                            var4 = var4.id;
                            var0.other_user_id = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var12)(var2, var6);
                if (var1) {
                    _fun109521_ip = 953;
                    continue _fun109521
                }
            case 187:
                var2 = null;
                var1 = false;
                var6 = null;
                if (!var10) {
                    _fun109521_ip = 1012;
                    continue _fun109521
                }
            case 199:
                if (!(var2 != var11)) {
                    _fun109521_ip = 209;
                    continue _fun109521
                }
            case 203:
                if (var9) {
                    _fun109521_ip = 892;
                    continue _fun109521
                }
            case 209:
                if (!(var2 != var11)) {
                    _fun109521_ip = 219;
                    continue _fun109521
                }
            case 213:
                if (var8) {
                    _fun109521_ip = 831;
                    continue _fun109521
                }
            case 219:
                var9 = var2 == var11;
                var8 = undefined;
                if (var9) {
                    _fun109521_ip = 233;
                    continue _fun109521
                }
            case 228:
                var8 = var11.content;
            case 233:
                if (!(var2 != var8)) {
                    _fun109521_ip = 253;
                    continue _fun109521
                }
            case 237:
                var9 = var11.content;
                var8 = '';
                if (!(var8 === var9)) {
                    _fun109521_ip = 680;
                    continue _fun109521
                }
            case 253:
                if (!(var2 == var11)) {
                    _fun109521_ip = 321;
                    continue _fun109521
                }
            case 257:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 11;
                var9 = var13[var8];
                var9 = var12.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var13[var8];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["0KfDxM"];
                var6 = var9.bind(var10)(var8);
                var1 = false;
                _fun109521_ip = 1012;
                continue _fun109521;
            case 321:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 13;
                var8 = var10[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.getMessageStickers;
                var8 = var8.bind(var9)(var11);
                var9 = var8.length;
                var8 = 0;
                if (!(!(var9 > var8))) {
                    _fun109521_ip = 613;
                    continue _fun109521
                }
            case 366:
                var8 = var11.interaction;
                if (!(var2 == var8)) {
                    _fun109521_ip = 556;
                    continue _fun109521
                }
            case 379:
                var9 = var11.hasFlag;
                var8 = _closure1_slot7;
                var8 = var8.IS_VOICE_MESSAGE;
                var8 = var9.bind(var11)(var8);
                if (var8) {
                    _fun109521_ip = 499;
                    continue _fun109521
                }
            case 403:
                var9 = var11.hasFlag;
                var8 = _closure1_slot7;
                var8 = var8.IS_COMPONENTS_V2;
                var8 = var9.bind(var11)(var8);
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 11;
                var10 = var14[var9];
                var10 = var13.bind(var3)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                if (var8) {
                    _fun109521_ip = 486;
                    continue _fun109521
                }
            case 471:
                var8 = var9.LoMGlg;
                var8 = var10.bind(var12)(var8);
                _fun109521_ip = 497;
                continue _fun109521;
            case 486:
                var9 = var9.Xxm5i3;
                var8 = var10.bind(var12)(var9);
            case 497:
                _fun109521_ip = 554;
                continue _fun109521;
            case 499:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 11;
                var10 = var14[var9];
                var10 = var13.bind(var3)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["6bhHrc"];
                var8 = var10.bind(var12)(var9);
            case 554:
                _fun109521_ip = 611;
                continue _fun109521;
            case 556:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 11;
                var10 = var14[var9];
                var10 = var13.bind(var3)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["2v7kfl"];
                var8 = var10.bind(var12)(var9);
            case 611:
                _fun109521_ip = 670;
                continue _fun109521;
            case 613:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 11;
                var10 = var14[var9];
                var10 = var13.bind(var3)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["zuI+by"];
                var8 = var10.bind(var12)(var9);
            case 670:
                var6 = var8;
                var1 = false;
                _fun109521_ip = 1012;
                continue _fun109521;
            case 680:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 12;
                var8 = var10[var8];
                var10 = var9.bind(var3)(var8);
                var8 = {};
                var9 = true;
                var8.noStyleAndInteraction = var9;
                var8 = var10.bind(var3)(var11, var8);
                var8 = var8.content;
                var10 = global;
                var11 = var10.Array;
                var10 = var11.isArray;
                var10 = var10.bind(var11)(var8);
                if (!var10) {
                    _fun109521_ip = 752;
                    continue _fun109521
                }
            case 741:
                var11 = var8.length;
                var10 = 0;
                if (!(var10 !== var11)) {
                    _fun109521_ip = 767;
                    continue _fun109521
                }
            case 752:
                var2 = var2 == var8;
                var1 = true;
                var6 = var8;
                if (!var2) {
                    _fun109521_ip = 1012;
                    continue _fun109521
                }
            case 767:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 11;
                var8 = var11[var2];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var11[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["262oPB"];
                var6 = var8.bind(var9)(var2);
                var1 = false;
                _fun109521_ip = 1012;
                continue _fun109521;
            case 831:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 11;
                var8 = var11[var2];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var11[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.uxrh1O;
                var6 = var8.bind(var9)(var2);
                var1 = false;
                _fun109521_ip = 1012;
                continue _fun109521;
            case 892:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 11;
                var8 = var11[var2];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var2 = var11[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["WPe+xL"];
                var6 = var8.bind(var9)(var2);
                var1 = false;
                _fun109521_ip = 1012;
                continue _fun109521;
            case 953:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 11;
                var7 = var10[var2];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var10[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.BZHld2;
                var6 = var7.bind(var8)(var2);
                var1 = false;
            case 1012:
                if (var1) {
                    _fun109521_ip = 1023;
                    continue _fun109521
                }
            case 1015:
                var7 = var0.systemContent;
                _fun109521_ip = 1029;
                continue _fun109521;
            case 1023:
                var7 = var0.messageContent;
            case 1029:
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var5;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 14;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.LegacyText;
                var4 = {
                    'style': null,
                    'numberOfLines': 3,
                    'ellipsizeMode': 'tail'
                };
                var4.style = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/message_request/native/MessageRequestPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3100, 660, 33, 1297, 4682, 671, 14088, 566, 795, 1234, 6788, 3999, 4876, 2]);