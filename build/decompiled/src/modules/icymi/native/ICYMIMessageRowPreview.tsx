// modules/icymi/native/ICYMIMessageRowPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        _fun104030: for (var _fun104030_ip = 0;;) switch (_fun104030_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot4;
                var0 = var0.IMAGE;
                var0 = var2 === var0;
                if (var0) {
                    _fun104030_ip = 37;
                    continue _fun104030
                }
            case 23:
                var1 = _closure1_slot4;
                var1 = var1.GIFV;
                var0 = var2 === var1;
            case 37:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun104031: for (var _fun104031_ip = 0;;) switch (_fun104031_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.message;
                var1 = var0.lineClamp;
                var _closure2_slot0 = var1;
                var5 = var0.messageSizeCacheRef;
                var2 = var0.messageOptions;
                var _closure2_slot1 = var2;
                var4 = var0.maxHeight;
                var9 = var0.pointerEvents;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun104031_ip = 58;
                    continue _fun104031
                }
            case 54:
                var9 = 'none';
            case 58:
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 7;
                var6 = var10[var6];
                var6 = var1.bind(var3)(var6);
                var12 = var6.bind(var3)();
                var11 = _closure1_slot0;
                var6 = 8;
                var6 = var10[var6];
                var14 = var11.bind(var3)(var6);
                var13 = var14.createNativeStyleProperties;
                var6 = {};
                var15 = 9;
                var15 = var10[var15];
                var15 = var1.bind(var3)(var15);
                var15 = var15.colors;
                var15 = var15.TEXT_DEFAULT;
                var6.seeMoreLabelColor = var15;
                var6 = var13.bind(var14)(var6);
                var6 = var6.bind(var3)(var12);
                _closure2_slot2 = var6;
                var6 = 10;
                var12 = var10[var6];
                var12 = var11.bind(var3)(var12);
                var13 = var12.RenderEmbeds;
                var12 = var13.getSetting;
                var15 = var12.bind(var13)();
                _closure2_slot3 = var15;
                var12 = var10[var6];
                var12 = var11.bind(var3)(var12);
                var13 = var12.InlineEmbedMedia;
                var12 = var13.getSetting;
                var14 = var12.bind(var13)();
                _closure2_slot4 = var14;
                var6 = var10[var6];
                var6 = var11.bind(var3)(var6);
                var11 = var6.InlineAttachmentMedia;
                var6 = var11.getSetting;
                var13 = var6.bind(var11)();
                _closure2_slot5 = var13;
                var12 = _closure1_slot3;
                var11 = var12.useMemo;
                var6 = new Array(4);
                var6[0] = var15;
                var6[1] = var14;
                var6[2] = var13;
                var6[3] = var2;
                var2 = function() { // Environment: var8
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var7 = var1;
                    var0 = new var7[var0](var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var2 = var0.setOptions;
                    var1 = {
                        'renderEmbeds': null,
                        'inlineEmbedMedia': null,
                        'inlineAttachmentMedia': null,
                        'renderReactions': false,
                        'animateEmoji': false,
                        'gifAutoPlay': false,
                        'renderReplies': false,
                        'renderCodedLinks': false,
                        'renderGiftCode': false,
                        'renderActivityInviteEmbed': false,
                        'renderThreadEmbeds': false,
                        'renderForumPostActions': false,
                        'ignoreMentioned': true,
                        'enableSwipeActions': false,
                        'renderExecutedCommands': false,
                        'useAlternateEmbedColors': true
                    };
                    var4 = _closure2_slot3;
                    var1.renderEmbeds = var4;
                    var4 = _closure2_slot4;
                    var1.inlineEmbedMedia = var4;
                    var4 = _closure2_slot5;
                    var1.inlineAttachmentMedia = var4;
                    var5 = _closure2_slot1;
                    var6 = var1;
                    var3 = copyDataProperties(var6, var5);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var11.bind(var12)(var2, var6);
                var2 = _closure1_slot5;
                var0 = 12;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.pointerEvents = var9;
                var9 = 0;
                var0.horizontalOffset = var9;
                var8 = function arg0() {
                    _fun104033: for (var _fun104033_ip = 0;;) switch (_fun104033_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.MessageContextType;
                            var1 = var1.SEARCH;
                            var2.contextType = var1;
                            var5 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var5)) {
                                _fun104033_ip = 160;
                                continue _fun104033
                            }
                        case 59:
                            var1 = {};
                            var5 = _closure2_slot0;
                            var1.numberOfLines = var5;
                            var5 = false;
                            var1.expandable = var5;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var4 = 14;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.qCozu3;
                            var4 = var5.bind(var6)(var4);
                            var1.seeMoreLabel = var4;
                            var3 = _closure2_slot2;
                            var3 = var3.seeMoreLabelColor;
                            var1.seeMoreLabelColor = var3;
                            var2.truncation = var1;
                        case 160:
                            return var0;
                    }
                };
                var0.modifyRow = var8;
                var0.message = var7;
                var0.rowGenerator = var6;
                var0.messageSizeCacheRef = var5;
                var0.maxHeight = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var7[var0];
    var3 = arg3;
    var0 = undefined;
    var8 = var3.bind(var0)(var4);
    var _closure1_slot3 = var8;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.MessageEmbedTypes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var4 = var8.memo;
    var3 = function(arg0) { // Environment: var1
        var5 = arg0;
        var2 = var5.message;
        var _closure2_slot0 = var2;
        var4 = var5.messageOptions;
        var0 = null;
        var3 = Object.create(var0);
        var0 = 0;
        var3.message = var0;
        var3.messageOptions = var0;
        var11 = {};
        var10 = var5;
        var9 = var3;
        var6 = copyDataProperties(var11, var10, var9);
        var _closure2_slot1 = var6;
        var7 = _closure1_slot3;
        var5 = var7.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var1
            var4 = _closure2_slot0;
            var2 = var4.set;
            var1 = 'content';
            var3 = null;
            var5 = var2.bind(var4)(var1, var3);
            var4 = var5.embeds;
            var2 = var4.filter;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot6;
                var0 = arg0;
                var1 = var0.type;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var4 = var2.bind(var4)(var1);
            var2 = var5.set;
            var1 = 'embeds';
            var4 = var2.bind(var5)(var1, var4);
            var2 = var4.attachments;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.isMediaAttachment;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var1.bind(var2)(var0);
            var1 = var4.set;
            var0 = 'attachments';
            var2 = var1.bind(var4)(var0, var2);
            var1 = var2.set;
            var0 = 'editedTimestamp';
            var0 = var1.bind(var2)(var0, var3);
            return var0;
        };
        var7 = var5.bind(var7)(var2, var3);
        var _closure2_slot2 = var7;
        var5 = _closure1_slot3;
        var3 = var5.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var7 = var6.muted;
        var2[1] = var7;
        var6 = var6.lineClamp;
        var2[2] = var6;
        var1 = function() { // Environment: var1
            _fun104038: for (var _fun104038_ip = 0;;) switch (_fun104038_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot2;
                    var0.message = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.ChannelListLayoutTypes;
                    var2 = var2.COZY;
                    var0.layout = var2;
                    var2 = _closure2_slot1;
                    var3 = var2.muted;
                    var2 = null;
                    var2 = var2 != var3;
                    if (!var2) {
                        _fun104038_ip = 77;
                        continue _fun104038
                    }
                case 74:
                    var2 = var3;
                case 77:
                    var0.muted = var2;
                    var1 = _closure2_slot1;
                    var1 = var1.lineClamp;
                    var0.lineClamp = var1;
                    return var0;
            }
        };
        var10 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot5;
        var2 = _closure1_slot7;
        var1 = {};
        var11 = var1;
        var5 = copyDataProperties(var11, var10);
        var5 = {};
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 5;
        var6 = var6[var0];
        var0 = undefined;
        var6 = var7.bind(var0)(var6);
        var10 = var6.DEFAULT_OPTIONS;
        var11 = var5;
        var6 = copyDataProperties(var11, var10);
        var7 = true;
        var6 = 'ignoreMentioned';
        var5[var6] = var7;
        var8 = false;
        var6 = 'renderReplies';
        var5[var6] = var8;
        var6 = 'renderThreadEmbeds';
        var5[var6] = var8;
        var6 = 'renderReactions';
        var5[var6] = var8;
        var6 = 'renderEmbeds';
        var5[var6] = var7;
        var6 = 'gifAutoPlay';
        var5[var6] = var7;
        var6 = 'animateEmoji';
        var5[var6] = var7;
        var6 = 'renderPolls';
        var5[var6] = var7;
        var6 = 'inlineEmbedMedia';
        var5[var6] = var7;
        var6 = 'renderForumPostActions';
        var5[var6] = var8;
        var6 = 'renderAttachments';
        var5[var6] = var7;
        var11 = var5;
        var10 = var4;
        var4 = copyDataProperties(var11, var10);
        var4 = 'messageOptions';
        var1[var4] = var5;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = var4.bind(var8)(var3);
    var5 = var8.memo;
    var3 = function(arg0) { // Environment: var1
        var5 = arg0;
        var2 = var5.message;
        var _closure2_slot0 = var2;
        var4 = var5.messageOptions;
        var0 = null;
        var3 = Object.create(var0);
        var0 = 0;
        var3.message = var0;
        var3.messageOptions = var0;
        var11 = {};
        var10 = var5;
        var9 = var3;
        var6 = copyDataProperties(var11, var10, var9);
        var _closure2_slot1 = var6;
        var7 = _closure1_slot3;
        var5 = var7.useMemo;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var1
            var4 = _closure2_slot0;
            var2 = var4.set;
            var1 = 'content';
            var3 = null;
            var7 = var2.bind(var4)(var1, var3);
            var4 = var7.embeds;
            var2 = var4.filter;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot6;
                var0 = arg0;
                var1 = var0.type;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = !var0;
                return var0;
            };
            var2 = var2.bind(var4)(var1);
            var4 = var7.set;
            var1 = var2.slice;
            var6 = 0;
            var5 = 1;
            var2 = var1.bind(var2)(var6, var5);
            var1 = 'embeds';
            var4 = var4.bind(var7)(var1, var2);
            var2 = var4.attachments;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.isMediaAttachment;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var2 = var4.set;
            var0 = var1.slice;
            var1 = var0.bind(var1)(var6, var5);
            var0 = 'attachments';
            var2 = var2.bind(var4)(var0, var1);
            var1 = var2.set;
            var0 = 'editedTimestamp';
            var0 = var1.bind(var2)(var0, var3);
            return var0;
        };
        var7 = var5.bind(var7)(var2, var3);
        var _closure2_slot2 = var7;
        var5 = _closure1_slot3;
        var3 = var5.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var7 = var6.muted;
        var2[1] = var7;
        var6 = var6.lineClamp;
        var2[2] = var6;
        var1 = function() { // Environment: var1
            _fun104043: for (var _fun104043_ip = 0;;) switch (_fun104043_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot2;
                    var0.message = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.ChannelListLayoutTypes;
                    var2 = var2.COZY;
                    var0.layout = var2;
                    var2 = _closure2_slot1;
                    var3 = var2.muted;
                    var2 = null;
                    var2 = var2 != var3;
                    if (!var2) {
                        _fun104043_ip = 77;
                        continue _fun104043
                    }
                case 74:
                    var2 = var3;
                case 77:
                    var0.muted = var2;
                    var1 = _closure2_slot1;
                    var1 = var1.lineClamp;
                    var0.lineClamp = var1;
                    return var0;
            }
        };
        var10 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot5;
        var2 = _closure1_slot7;
        var1 = {};
        var11 = var1;
        var5 = copyDataProperties(var11, var10);
        var5 = {};
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 5;
        var6 = var6[var0];
        var0 = undefined;
        var6 = var7.bind(var0)(var6);
        var10 = var6.DEFAULT_OPTIONS;
        var11 = var5;
        var6 = copyDataProperties(var11, var10);
        var7 = true;
        var6 = 'ignoreMentioned';
        var5[var6] = var7;
        var8 = false;
        var6 = 'renderReplies';
        var5[var6] = var8;
        var6 = 'renderThreadEmbeds';
        var5[var6] = var8;
        var6 = 'renderReactions';
        var5[var6] = var8;
        var6 = 'renderEmbeds';
        var5[var6] = var7;
        var6 = 'renderAttachments';
        var5[var6] = var7;
        var11 = var5;
        var10 = var4;
        var4 = copyDataProperties(var11, var10);
        var4 = 'messageOptions';
        var1[var4] = var5;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var5.bind(var8)(var3);
    var5 = var8.memo;
    var1 = function(arg0) { // Environment: var1
        var5 = arg0;
        var1 = var5.message;
        var _closure2_slot0 = var1;
        var4 = var5.messageOptions;
        var2 = null;
        var3 = Object.create(var2);
        var2 = 0;
        var3.message = var2;
        var3.messageOptions = var2;
        var12 = {};
        var11 = var5;
        var10 = var3;
        var7 = copyDataProperties(var12, var11, var10);
        var _closure2_slot1 = var7;
        var5 = _closure1_slot3;
        var3 = var5.useMemo;
        var2 = new Array(4);
        var2[0] = var1;
        var8 = var7.lineClamp;
        var2[1] = var8;
        var8 = var7.muted;
        var2[2] = var8;
        var7 = var7.pointerEvents;
        var2[3] = var7;
        var0 = function() { // Environment: var0
            _fun104045: for (var _fun104045_ip = 0;;) switch (_fun104045_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.message = var2;
                    var2 = _closure2_slot1;
                    var3 = var2.lineClamp;
                    var0.lineClamp = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 4;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.ChannelListLayoutTypes;
                    var3 = var3.COZY;
                    var0.layout = var3;
                    var3 = var2.muted;
                    var2 = null;
                    var2 = var2 != var3;
                    if (!var2) {
                        _fun104045_ip = 88;
                        continue _fun104045
                    }
                case 85:
                    var2 = var3;
                case 88:
                    var0.muted = var2;
                    var1 = _closure2_slot1;
                    var1 = var1.pointerEvents;
                    var0.pointerEvents = var1;
                    return var0;
            }
        };
        var11 = var3.bind(var5)(var0, var2);
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 6;
        var0 = var9[var0];
        var3 = undefined;
        var0 = var2.bind(var3)(var0);
        var7 = var0.bind(var3)(var1);
        var2 = _closure1_slot5;
        var1 = _closure1_slot7;
        var0 = {};
        var12 = var0;
        var5 = copyDataProperties(var12, var11);
        var5 = {};
        var8 = _closure1_slot0;
        var6 = 5;
        var6 = var9[var6];
        var6 = var8.bind(var3)(var6);
        var11 = var6.DEFAULT_OPTIONS;
        var12 = var5;
        var6 = copyDataProperties(var12, var11);
        var9 = true;
        var6 = 'ignoreMentioned';
        var5[var6] = var9;
        var8 = false;
        var6 = 'renderReplies';
        var5[var6] = var8;
        var6 = 'renderThreadEmbeds';
        var5[var6] = var8;
        var6 = 'renderReactions';
        var5[var6] = var8;
        var6 = 'gifAutoPlay';
        var5[var6] = var9;
        var6 = 'animateEmoji';
        var5[var6] = var9;
        var6 = 'renderPolls';
        var5[var6] = var9;
        var6 = 'renderForumPostActions';
        var5[var6] = var8;
        var6 = 'renderAttachments';
        var5[var6] = var7;
        var6 = 'renderEmbeds';
        var5[var6] = var7;
        var6 = 'inlineEmbedMedia';
        var5[var6] = var7;
        var12 = var5;
        var11 = var4;
        var4 = copyDataProperties(var12, var11);
        var4 = 'messageOptions';
        var0[var4] = var5;
        var5 = '...';
        var4 = 'seeMoreLabel';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var5.bind(var8)(var1);
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIMessageRowPreview.tsx';
    var5 = var6.bind(var7)(var5);
    var2.MediaOnlyRowPreview = var4;
    var2.NonMediaEmbedsRowPreview = var3;
    var2.MessageRowPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 8887, 8802, 6518, 4282, 3246, 1297, 671, 1348, 6516, 8813, 6833, 1234, 2]);