// modules/markup/native/MarkupMessagePreviewReactRules.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1, arg2() {
        _fun70254: for (var _fun70254_ip = 0;;) switch (_fun70254_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.content;
                var2 = 'string';
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun70254_ip = 65;
                    continue _fun70254
                }
            case 19:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.smartOutput;
                var2 = arg1;
                var0 = arg2;
                var0 = var3.bind(var4)(var1, var2, var0);
                _fun70254_ip = 70;
                continue _fun70254;
            case 65:
                var0 = var1.content;
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var1 = function arg0() {
        _fun70255: for (var _fun70255_ip = 0;;) switch (_fun70255_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.iconColor;
                var _closure2_slot0 = var1;
                var1 = var0.iconSize;
                var _closure2_slot1 = var1;
                var1 = var0.channelIconSize;
                var _closure2_slot2 = var1;
                var0 = var0.customEmojiSize;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun70255_ip = 50;
                    continue _fun70255
                }
            case 47:
                var0 = 15;
            case 50:
                var _closure2_slot3 = var0;
                var0 = {};
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.TEXT;
                var6 = {};
                var8 = _closure1_slot7;
                var6.react = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.STRIKETHROUGH;
                var6 = {};
                var9 = 8;
                var10 = var5[var9];
                var10 = var2.bind(var4)(var10);
                var11 = var10.DEFAULT_RULES;
                var10 = var5[var1];
                var10 = var2.bind(var4)(var10);
                var10 = var10.AST_KEY;
                var10 = var10.STRIKETHROUGH;
                var13 = var11[var10];
                var14 = var6;
                var10 = copyDataProperties(var14, var13);
                var10 = 'react';
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.UNDERLINE;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.UNDERLINE;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.ITALICS;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.ITALICS;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.STRONG;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.STRONG;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.LINK;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.LINK;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.URL;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.URL;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.AUTOLINK;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.AUTOLINK;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.LINE_BREAK;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.LINE_BREAK;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var11 = function() {
                    var0 = '\n';
                    return var0;
                };
                var6[var10] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.HIGHLIGHT;
                var6 = {};
                var11 = function arg0, arg1, arg2() {
                    var0 = arg2;
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 9;
                    var1 = var7[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 4;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.smartOutput;
                    var6 = arg0;
                    var5 = arg1;
                    var5 = var7.bind(var8)(var6, var5, var0);
                    var1.children = var5;
                    var0 = var0.key;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.BLOCK_QUOTE;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.BLOCK_QUOTE;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.PARAGRAPH;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.PARAGRAPH;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var12 = 600;
                var11 = 'order';
                var6[var11] = var12;
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.EMOJI;
                var6 = {};
                var11 = function arg0() {
                    _fun70258: for (var _fun70258_ip = 0;;) switch (_fun70258_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.surrogate;
                            if (var0) {
                                _fun70258_ip = 17;
                                continue _fun70258
                            }
                        case 12:
                            var0 = var1.content;
                        case 17:
                            return var0;
                    }
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.CUSTOM_EMOJI;
                var6 = {};
                var11 = function arg0, arg1, arg2() {
                    _fun70259: for (var _fun70259_ip = 0;;) switch (_fun70259_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = arg2;
                            var1 = var6.src;
                            if (var1) {
                                _fun70259_ip = 23;
                                continue _fun70259
                            }
                        case 15:
                            var1 = var6.alt;
                            return var1;
                        case 23:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 5;
                            var1 = var5[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.makeSizeStyle;
                            var1 = _closure2_slot3;
                            var7 = var2.bind(var3)(var1);
                            var3 = _closure1_slot4;
                            var2 = _closure1_slot1;
                            var1 = 10;
                            var1 = var5[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var5 = new Array(3);
                            var5[0] = var7;
                            var7 = {};
                            var8 = 'contain';
                            var7.resizeMode = var8;
                            var5[1] = var7;
                            var7 = var0.muted;
                            if (!var7) {
                                _fun70259_ip = 132;
                                continue _fun70259
                            }
                        case 119:
                            var8 = {};
                            var9 = _closure1_slot3;
                            var8.opacity = var9;
                            var7 = var8;
                        case 132:
                            var5[2] = var7;
                            var1.style = var5;
                            var5 = {};
                            var6 = var6.src;
                            var5.uri = var6;
                            var1.source = var5;
                            var0 = var0.key;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.SPOILER;
                var6 = {};
                var11 = function arg0, arg1, arg2() {
                    var0 = arg2;
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var1 = var7[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = true;
                    var1.disableReveal = var6;
                    var6 = var0.muted;
                    var1.muted = var6;
                    var6 = _closure1_slot0;
                    var5 = 4;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.smartOutput;
                    var6 = arg0;
                    var5 = arg1;
                    var5 = var7.bind(var8)(var6, var5, var0);
                    var1.children = var5;
                    var0 = var0.key;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.STATIC_ROUTE_LINK;
                var6 = {};
                var11 = function arg0, arg1, arg2() {
                    _fun70261: for (var _fun70261_ip = 0;;) switch (_fun70261_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 4;
                            var0 = var0[var4];
                            var3 = undefined;
                            var6 = var2.bind(var3)(var0);
                            var2 = var6.isStaticRouteIconType;
                            var0 = var5.channelId;
                            var2 = var2.bind(var6)(var0);
                            var0 = null;
                            if (!var2) {
                                _fun70261_ip = 85;
                                continue _fun70261
                            }
                        case 49:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var4];
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.smartOutput;
                            var2 = arg1;
                            var1 = arg2;
                            var0 = var3.bind(var4)(var5, var2, var1);
                        case 85:
                            return var0;
                    }
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.INLINE_CODE;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.INLINE_CODE;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.CODE_BLOCK;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.CODE_BLOCK;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var12 = function arg0, arg1, arg2() {
                    _fun70262: for (var _fun70262_ip = 0;;) switch (_fun70262_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 8;
                            var0 = var5[var0];
                            var3 = undefined;
                            var0 = var4.bind(var3)(var0);
                            var2 = var0.DEFAULT_RULES;
                            var0 = 7;
                            var0 = var5[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.AST_KEY;
                            var0 = var0.CODE_BLOCK;
                            var5 = var2[var0];
                            var4 = var5.parse;
                            var3 = arg0;
                            var2 = arg1;
                            var0 = arg2;
                            var0 = var4.bind(var5)(var3, var2, var0);
                            var3 = var0.lang;
                            var2 = var3.toLowerCase;
                            var3 = var2.bind(var3)();
                            var2 = 'ansi';
                            if (!(var2 === var3)) {
                                _fun70262_ip = 138;
                                continue _fun70262
                            }
                        case 107:
                            var4 = var0.content;
                            var3 = var4.replaceAll;
                            var2 = _closure1_slot6;
                            var1 = '';
                            var1 = var3.bind(var4)(var2, var1);
                            var0.content = var1;
                        case 138:
                            return var0;
                    }
                };
                var11 = 'parse';
                var6[var11] = var12;
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.MENTION;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.MENTION;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.CHANNEL_MENTION;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.CHANNEL_MENTION;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var11 = function arg0, arg1, arg2() {
                    _fun70263: for (var _fun70263_ip = 0;;) switch (_fun70263_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var3 = arg2;
                            var1 = var5.inContent;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun70263_ip = 135;
                                continue _fun70263
                            }
                        case 21:
                            var7 = _closure1_slot5;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var0 = 12;
                            var0 = var10[var0];
                            var6 = undefined;
                            var0 = var9.bind(var6)(var0);
                            var2 = var0.LegacyText;
                            var1 = {};
                            var0 = var5.inContent;
                            var8 = var4.bind(var6)(var0, var3);
                            var0 = new Array(3);
                            var0[0] = var8;
                            var8 = ' › ';
                            var0[1] = var8;
                            var8 = 4;
                            var8 = var10[var8];
                            var9 = var9.bind(var6)(var8);
                            var8 = var9.smartOutput;
                            var8 = var8.bind(var9)(var5, var4, var3);
                            var0[2] = var8;
                            var1.children = var0;
                            var0 = var3.key;
                            var0 = var7.bind(var6)(var2, var1, var0);
                            _fun70263_ip = 173;
                            continue _fun70263;
                        case 135:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var6.bind(var1)(var2);
                            var1 = var2.smartOutput;
                            var0 = var1.bind(var2)(var5, var4, var3);
                        case 173:
                            return var0;
                    }
                };
                var6[var10] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.ATTACHMENT_LINK;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.ATTACHMENT_LINK;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var11 = function arg0, arg1, arg2() {
                    _fun70264: for (var _fun70264_ip = 0;;) switch (_fun70264_ip) {
                        case 0:
                            var0 = arg2;
                            var4 = _closure1_slot5;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 12;
                            var1 = var8[var1];
                            var3 = undefined;
                            var1 = var7.bind(var3)(var1);
                            var2 = var1.LegacyText;
                            var1 = {};
                            var5 = 13;
                            var5 = var8[var5];
                            var7 = var7.bind(var3)(var5);
                            var5 = var7.isFabric;
                            var5 = var5.bind(var7)();
                            var7 = '📎 ';
                            if (var5) {
                                _fun70264_ip = 128;
                                continue _fun70264
                            }
                        case 71:
                            var9 = _closure1_slot4;
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 14;
                            var5 = var10[var5];
                            var5 = var8.bind(var3)(var5);
                            var8 = var5.AttachmentIcon;
                            var5 = {};
                            var11 = _closure2_slot0;
                            var5.color = var11;
                            var10 = _closure2_slot1;
                            var5.size = var10;
                            var7 = var9.bind(var3)(var8, var5);
                        case 128:
                            var5 = new Array(2);
                            var5[0] = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 4;
                            var6 = var8[var6];
                            var9 = var7.bind(var3)(var6);
                            var8 = var9.smartOutput;
                            var7 = arg0;
                            var6 = arg1;
                            var6 = var8.bind(var9)(var7, var6, var0);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var6[var10] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.SOUNDBOARD;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.SOUNDBOARD;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var6[var10] = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.GUILD;
                var6 = {};
                var6.react = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.CHANNEL;
                var6 = {};
                var11 = function arg0, arg1, arg2() {
                    _fun70265: for (var _fun70265_ip = 0;;) switch (_fun70265_ip) {
                        case 0:
                            var10 = arg0;
                            var0 = arg2;
                            var4 = var10.iconType;
                            var1 = 'text';
                            if (!(var1 !== var4)) {
                                _fun70265_ip = 415;
                                continue _fun70265
                            }
                        case 23:
                            var1 = 'forum';
                            if (!(var1 !== var4)) {
                                _fun70265_ip = 415;
                                continue _fun70265
                            }
                        case 36:
                            var1 = 'media';
                            if (!(var1 !== var4)) {
                                _fun70265_ip = 415;
                                continue _fun70265
                            }
                        case 47:
                            var1 = 'thread';
                            if (!(var1 !== var4)) {
                                _fun70265_ip = 406;
                                continue _fun70265
                            }
                        case 58:
                            var1 = 'post';
                            if (!(var1 !== var4)) {
                                _fun70265_ip = 406;
                                continue _fun70265
                            }
                        case 69:
                            var1 = 'message';
                            if (!(var1 !== var4)) {
                                _fun70265_ip = 287;
                                continue _fun70265
                            }
                        case 80:
                            var1 = undefined;
                            var2 = 'voice';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 97:
                            var2 = 'voice-locked';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 114:
                            var2 = 'stage';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 129:
                            var2 = 'stage-locked';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 146:
                            var2 = 'locked';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 161:
                            var2 = 'guide';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 178:
                            var2 = 'home';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 193:
                            var2 = 'browse';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 210:
                            var2 = 'customize';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 227:
                            var2 = 'linked-roles';
                            var7 = undefined;
                            var6 = undefined;
                            if (!(var2 !== var4)) {
                                _fun70265_ip = 421;
                                continue _fun70265
                            }
                        case 244:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 17;
                            var2 = var5[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.assertNever;
                            var2 = var2.bind(var3)(var4);
                            var7 = undefined;
                            var6 = undefined;
                            _fun70265_ip = 421;
                            continue _fun70265;
                        case 287:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.isFabric;
                            var4 = var2.bind(var4)();
                            var2 = '💬';
                            if (var4) {
                                _fun70265_ip = 399;
                                continue _fun70265
                            }
                        case 331:
                            var5 = _closure1_slot4;
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var3 = 15;
                            var3 = var11[var3];
                            var4 = var9.bind(var1)(var3);
                            var3 = {};
                            var8 = 16;
                            var8 = var11[var8];
                            var8 = var9.bind(var1)(var8);
                            var3.source = var8;
                            var9 = _closure2_slot2;
                            var3.size = var9;
                            var8 = _closure2_slot0;
                            var3.themedColor = var8;
                            var2 = var5.bind(var1)(var4, var3);
                        case 399:
                            var7 = var2;
                            var6 = undefined;
                            _fun70265_ip = 421;
                            continue _fun70265;
                        case 406:
                            var7 = '"';
                            var6 = var7;
                            _fun70265_ip = 421;
                            continue _fun70265;
                        case 415:
                            var7 = '#';
                            var6 = undefined;
                        case 421:
                            var4 = _closure1_slot5;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 12;
                            var1 = var9[var1];
                            var3 = undefined;
                            var1 = var8.bind(var3)(var1);
                            var2 = var1.LegacyText;
                            var1 = {};
                            var5 = new Array(3);
                            var5[0] = var7;
                            var7 = 4;
                            var7 = var9[var7];
                            var9 = var8.bind(var3)(var7);
                            var8 = var9.smartOutput;
                            var7 = arg1;
                            var7 = var8.bind(var9)(var10, var7, var0);
                            var5[1] = var7;
                            var5[2] = var6;
                            var1.children = var5;
                            var0 = var0.key;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var6.react = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.COMMAND_MENTION;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.COMMAND_MENTION;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var11 = function arg0, arg1, arg2() {
                    var0 = arg2;
                    var4 = _closure1_slot5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 12;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.LegacyText;
                    var1 = {};
                    var5 = 4;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.smartOutput;
                    var6 = arg0;
                    var5 = arg1;
                    var6 = var7.bind(var8)(var6, var5, var0);
                    var5 = ['/'];
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var0.key;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6[var10] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.TIMESTAMP;
                var6 = {};
                var11 = var5[var9];
                var11 = var2.bind(var4)(var11);
                var12 = var11.DEFAULT_RULES;
                var11 = var5[var1];
                var11 = var2.bind(var4)(var11);
                var11 = var11.AST_KEY;
                var11 = var11.TIMESTAMP;
                var13 = var12[var11];
                var14 = var6;
                var11 = copyDataProperties(var14, var13);
                var11 = function arg0, arg1, arg2() {
                    var4 = _closure1_slot4;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = {};
                    var0 = arg0;
                    var1.node = var0;
                    var0 = null;
                    var1.style = var0;
                    var0 = arg2;
                    var0 = var0.key;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6[var10] = var11;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.LIST;
                var6 = {};
                var9 = var5[var9];
                var9 = var2.bind(var4)(var9);
                var11 = var9.DEFAULT_RULES;
                var9 = var5[var1];
                var9 = var2.bind(var4)(var9);
                var9 = var9.AST_KEY;
                var9 = var9.LIST;
                var13 = var11[var9];
                var14 = var6;
                var9 = copyDataProperties(var14, var13);
                var9 = function arg0, arg1, arg2() {
                    _fun70268: for (var _fun70268_ip = 0;;) switch (_fun70268_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.items;
                            var1 = 0;
                            var0 = var0[var1];
                            var2 = global;
                            var3 = var2.Array;
                            var2 = var3.isArray;
                            var2 = var2.bind(var3)(var0);
                            var5 = var0;
                            if (!var2) {
                                _fun70268_ip = 42;
                                continue _fun70268
                            }
                        case 38:
                            var5 = var0[var1];
                        case 42:
                            var0 = null;
                            var1 = var0 == var5;
                            if (var1) {
                                _fun70268_ip = 95;
                                continue _fun70268
                            }
                        case 51:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 4;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.smartOutput;
                            var2 = arg1;
                            var1 = arg2;
                            var0 = var3.bind(var4)(var5, var2, var1);
                        case 95:
                            return var0;
                    }
                };
                var6[var10] = var9;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.HEADING;
                var6 = {};
                var6.react = var8;
                var0[var7] = var6;
                var6 = var5[var1];
                var6 = var2.bind(var4)(var6);
                var6 = var6.AST_KEY;
                var7 = var6.SUBTEXT;
                var6 = {};
                var6.react = var8;
                var0[var7] = var6;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.AST_KEY;
                var2 = var1.GAME_MENTION;
                var1 = {};
                var3 = function arg0, arg1, arg2() {
                    var0 = arg2;
                    var4 = _closure1_slot5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 12;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.LegacyText;
                    var1 = {};
                    var5 = 4;
                    var5 = var7[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.smartOutput;
                    var6 = arg0;
                    var5 = arg1;
                    var6 = var7.bind(var8)(var6, var5, var0);
                    var5 = ['@'];
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var0.key;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var1.react = var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var8 = var6[var0];
    var7 = arg3;
    var0 = undefined;
    var7 = var7.bind(var0)(var8);
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.MUTED_OPACITY_CONTENT;
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot4 = var8;
    var7 = var7.jsxs;
    var _closure1_slot5 = var7;
    var9 = var4.RegExp;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var12 = var4.ANSI_CONTROL_SEQUENCE_RE;
    var4 = var9.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var9
        }
    });
    var11 = 'g';
    var13 = var7;
    var4 = new var13[var9](var12, var11, var10);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot6 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/native/MarkupMessagePreviewReactRules.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1, arg2, arg3() {
        _fun70270: for (var _fun70270_ip = 0;;) switch (_fun70270_ip) {
            case 0:
                var8 = arg2;
                var7 = arg3;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var2 = undefined;
                var3 = var1.bind(var2)(var0);
                var1 = var3.getLayoutStyles;
                var0 = arg0;
                var5 = var1.bind(var3)(var0);
                var3 = null;
                var4 = var8;
                if (!(var3 != var7)) {
                    _fun70270_ip = 73;
                    continue _fun70270
                }
            case 54:
                var0 = global;
                var1 = var0.Math;
                var0 = var1.min;
                var4 = var0.bind(var1)(var8, var7);
            case 73:
                var1 = _closure1_slot8;
                var0 = {};
                var7 = arg1;
                var0.iconColor = var7;
                var7 = var5.messagePreview;
                var7 = var7.messageTypeIconSizeNew;
                var0.iconSize = var7;
                var7 = var5.messagePreview;
                var7 = var7.messageTypeIconSize;
                var0.channelIconSize = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 6;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var6 = var6.ICON_SIZE;
                var5 = var5.messagePreview;
                var5 = var5.messageTypeIconSizeNew;
                var5 = var6[var5];
                var6 = var3 != var5;
                var3 = 0;
                if (!var6) {
                    _fun70270_ip = 175;
                    continue _fun70270
                }
            case 172:
                var3 = var5;
            case 175:
                var3 = var3 * var4;
                var0.customEmojiSize = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.createMessagePreviewReactRules = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8827, 33, 3942, 7765, 8828, 5410, 4789, 8834, 8835, 4705, 8836, 4879, 3913, 8819, 4928, 4823, 1304, 8837, 2]);