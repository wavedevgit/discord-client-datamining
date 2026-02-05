// modules/messages/renderMessageMarkup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var4 = function arg0, arg1() {
        _fun56161: for (var _fun56161_ip = 0;;) switch (_fun56161_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot6;
                var1 = {};
                var0 = var2.channel_id;
                var1.channelId = var0;
                var0 = var2.id;
                var1.messageId = var0;
                var0 = arg1;
                var1.renderOptions = var0;
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var0 = var2.webhookId;
                var1 = null;
                var4 = var1 != var0;
                var0 = {};
                var8 = var0;
                var7 = var3;
                var5 = copyDataProperties(var8, var7);
                var5 = var4;
                if (var5) {
                    _fun56161_ip = 81;
                    continue _fun56161
                }
            case 75:
                var5 = var3.allowLinks;
            case 81:
                var3 = 'allowLinks';
                var0[var3] = var5;
                var3 = 'allowEmojiLinks';
                var0[var3] = var4;
                var4 = var2.mentionChannels;
                var3 = 'mentionChannels';
                var0[var3] = var4;
                var2 = var2.soundboardSounds;
                if (!(var1 == var2)) {
                    _fun56161_ip = 128;
                    continue _fun56161
                }
            case 124:
                var2 = new Array(0);
            case 128:
                var1 = 'soundboardSounds';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var2 = var0.messageId;
        var1 = var0.renderOptions;
        var0 = {};
        var0.channelId = var3;
        var0.messageId = var2;
        var2 = global;
        var5 = var2.Boolean;
        var3 = var1.allowLinks;
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var0.allowLinks = var3;
        var5 = var2.Boolean;
        var3 = var1.allowDevLinks;
        var3 = var5.bind(var4)(var3);
        var0.allowDevLinks = var3;
        var5 = var2.Boolean;
        var3 = var1.allowGameMentions;
        var3 = var5.bind(var4)(var3);
        var0.allowGameMentions = var3;
        var5 = var2.Boolean;
        var3 = var1.allowTimeMentionInput;
        var3 = var5.bind(var4)(var3);
        var0.allowTimeMentionInput = var3;
        var5 = var2.Boolean;
        var3 = var1.formatInline;
        var3 = var5.bind(var4)(var3);
        var0.formatInline = var3;
        var5 = var2.Boolean;
        var3 = var1.noStyleAndInteraction;
        var3 = var5.bind(var4)(var3);
        var0.noStyleAndInteraction = var3;
        var5 = var2.Boolean;
        var3 = var1.allowHeading;
        var3 = var5.bind(var4)(var3);
        var0.allowHeading = var3;
        var5 = var2.Boolean;
        var3 = var1.allowList;
        var3 = var5.bind(var4)(var3);
        var0.allowList = var3;
        var5 = var2.Boolean;
        var3 = var1.previewLinkTarget;
        var3 = var5.bind(var4)(var3);
        var0.previewLinkTarget = var3;
        var5 = var2.Boolean;
        var3 = var1.disableAnimatedEmoji;
        var3 = var5.bind(var4)(var3);
        var0.disableAnimatedEmoji = var3;
        var5 = var2.Boolean;
        var3 = var1.isInteracting;
        var3 = var5.bind(var4)(var3);
        var0.isInteracting = var3;
        var5 = false;
        var0.allowEmojiLinks = var5;
        var3 = true;
        var0.disableAutoBlockNewlines = var3;
        var6 = new Array(0);
        var0.mentionChannels = var6;
        var6 = new Array(0);
        var0.soundboardSounds = var6;
        var0.muted = var5;
        var0.unknownUserMentionPlaceholder = var3;
        var3 = var1.viewingChannelId;
        var0.viewingChannelId = var3;
        var3 = var2.Boolean;
        var2 = var1.forceWhite;
        var2 = var3.bind(var4)(var2);
        var0.forceWhite = var2;
        var1 = var1.textColor;
        var0.textColor = var1;
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = function arg0, arg1, arg2() {
        _fun56163: for (var _fun56163_ip = 0;;) switch (_fun56163_ip) {
            case 0:
                var3 = arg1;
                var1 = arg2;
                var _closure2_slot0 = var3;
                var4 = var1.toAST;
                var6 = undefined;
                var0 = var6 !== var4;
                if (!var0) {
                    _fun56163_ip = 32;
                    continue _fun56163
                }
            case 29:
                var0 = var4;
            case 32:
                var _closure2_slot1 = var0;
                var4 = var1.hideSimpleEmbedContent;
                var0 = var6 === var4;
                if (var0) {
                    _fun56163_ip = 52;
                    continue _fun56163
                }
            case 49:
                var0 = var4;
            case 52:
                var _closure2_slot2 = var0;
                var4 = var1.formatInline;
                var0 = var6 !== var4;
                if (!var0) {
                    _fun56163_ip = 72;
                    continue _fun56163
                }
            case 69:
                var0 = var4;
            case 72:
                var _closure2_slot3 = var0;
                var0 = var1.postProcessor;
                var _closure2_slot4 = var0;
                var4 = var1.contentMessage;
                var _closure2_slot5 = var4;
                var0 = false;
                var _closure2_slot6 = var0;
                var _closure2_slot7 = var0;
                var5 = null;
                var0 = var3;
                if (!(var5 != var4)) {
                    _fun56163_ip = 118;
                    continue _fun56163
                }
            case 115:
                var0 = var4;
            case 118:
                var5 = var0.content;
                var _closure2_slot8 = var5;
                var0 = _closure1_slot5;
                var8 = var0.bind(var6)(var3, var1);
                var3 = arg0;
                var9 = true;
                var7 = function(arg0, arg1, arg2) { // Environment: var2
                    _fun56164: for (var _fun56164_ip = 0;;) switch (_fun56164_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = arg1;
                            var1 = arg2;
                            var6 = null;
                            var2 = var6 != var1;
                            if (!var2) {
                                _fun56164_ip = 23;
                                continue _fun56164
                            }
                        case 20:
                            var2 = var1;
                        case 23:
                            _closure2_slot7 = var2;
                            var7 = global;
                            var5 = var7.Array;
                            var2 = var5.isArray;
                            var2 = var2.bind(var5)(var3);
                            var8 = var3;
                            if (var2) {
                                _fun56164_ip = 65;
                                continue _fun56164
                            }
                        case 54:
                            var2 = new Array(1);
                            var2[0] = var3;
                            var8 = var2;
                        case 65:
                            var2 = _closure2_slot7;
                            if (!var2) {
                                _fun56164_ip = 124;
                                continue _fun56164
                            }
                        case 72:
                            var3 = {};
                            var2 = 'text';
                            var3.type = var2;
                            var2 = _closure2_slot8;
                            var3.content = var2;
                            var2 = {};
                            var5 = 0;
                            var2.index = var5;
                            var5 = _closure2_slot8;
                            var2[0] = var5;
                            var3.originalMatch = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var8 = var2;
                        case 124:
                            var2 = _closure2_slot2;
                            var5 = var8;
                            if (!var2) {
                                _fun56164_ip = 304;
                                continue _fun56164
                            }
                        case 137:
                            var2 = _closure2_slot5;
                            if (!(var6 == var2)) {
                                _fun56164_ip = 151;
                                continue _fun56164
                            }
                        case 145:
                            var2 = _closure2_slot0;
                            _fun56164_ip = 155;
                            continue _fun56164;
                        case 151:
                            var2 = _closure2_slot5;
                        case 155:
                            var10 = var2.embeds;
                            var3 = var8.length;
                            var9 = 1;
                            var2 = var8;
                            if (!(var9 === var3)) {
                                _fun56164_ip = 301;
                                continue _fun56164
                            }
                        case 179:
                            var3 = var10.length;
                            var2 = var8;
                            if (!(var9 === var3)) {
                                _fun56164_ip = 301;
                                continue _fun56164
                            }
                        case 191:
                            var9 = 0;
                            var3 = var8[var9];
                            var10 = var10[var9];
                            var11 = var3.type;
                            var9 = 'link';
                            if (!(var9 !== var11)) {
                                _fun56164_ip = 230;
                                continue _fun56164
                            }
                        case 214:
                            var9 = var3.type;
                            var3 = 'attachmentLink';
                            var2 = var8;
                            if (!(var3 === var9)) {
                                _fun56164_ip = 301;
                                continue _fun56164
                            }
                        case 230:
                            var12 = _closure1_slot3;
                            var11 = var12.has;
                            var9 = var10.type;
                            var9 = var11.bind(var12)(var9);
                            var2 = var8;
                            if (!var9) {
                                _fun56164_ip = 301;
                                continue _fun56164
                            }
                        case 258:
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 3;
                            var9 = var9[var3];
                            var3 = undefined;
                            var9 = var11.bind(var3)(var9);
                            var3 = var9.isEmbedInline;
                            var3 = var3.bind(var9)(var10);
                            var2 = var8;
                            if (!var3) {
                                _fun56164_ip = 301;
                                continue _fun56164
                            }
                        case 297:
                            var2 = new Array(0);
                        case 301:
                            var5 = var2;
                        case 304:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun56164_ip = 407;
                                continue _fun56164
                            }
                        case 311:
                            if (var4) {
                                _fun56164_ip = 393;
                                continue _fun56164
                            }
                        case 314:
                            var2 = 0;
                            var3 = var5[var2];
                            var8 = var3.type;
                            var3 = 'paragraph';
                            var3 = var3 === var8;
                            if (!var3) {
                                _fun56164_ip = 355;
                                continue _fun56164
                            }
                        case 336:
                            var8 = var5[var2];
                            var9 = var8.content;
                            var8 = var7.Array;
                            var3 = var9 instanceof var8;
                        case 355:
                            if (!var3) {
                                _fun56164_ip = 407;
                                continue _fun56164
                            }
                        case 358:
                            var3 = var5[var2];
                            var9 = _closure1_slot9;
                            var2 = var5[var2];
                            var2 = var2.content;
                            var8 = undefined;
                            var8 = var9.bind(var8)(var2);
                            var3.content = var2;
                            _fun56164_ip = 407;
                            continue _fun56164;
                        case 393:
                            var3 = _closure1_slot9;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var5);
                        case 407:
                            var3 = _closure2_slot1;
                            var2 = var5;
                            if (!var3) {
                                _fun56164_ip = 439;
                                continue _fun56164
                            }
                        case 417:
                            var3 = function arg0() {
                                var2 = arg0;
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    _fun56168: for (var _fun56168_ip = 0;;) switch (_fun56168_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var2 = var1.type;
                                            var0 = 'link';
                                            var0 = var0 !== var2;
                                            if (var0) {
                                                _fun56168_ip = 64;
                                                continue _fun56168
                                            }
                                        case 19:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 4;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var3 = var4.bind(var2)(var3);
                                            var2 = var3.isBuildOverrideLink;
                                            var1 = var1.target;
                                            var1 = var2.bind(var3)(var1);
                                            var0 = !var1;
                                        case 64:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var8 = undefined;
                            var5 = var3.bind(var8)(var5);
                            var3 = function arg0() {
                                var2 = arg0;
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    _fun56166: for (var _fun56166_ip = 0;;) switch (_fun56166_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var2 = var1.type;
                                            var0 = 'link';
                                            var0 = var0 !== var2;
                                            if (var0) {
                                                _fun56166_ip = 64;
                                                continue _fun56166
                                            }
                                        case 19:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 5;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var3 = var4.bind(var2)(var3);
                                            var2 = var3.isExperimentEmbedURL;
                                            var1 = var1.target;
                                            var1 = var2.bind(var3)(var1);
                                            var0 = !var1;
                                        case 64:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var3.bind(var8)(var5);
                        case 439:
                            var0 = function arg0() {
                                var2 = arg0;
                                var3 = var2.some;
                                var1 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.type;
                                    var0 = 'link';
                                    var0 = var0 !== var1;
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    _fun56171: for (var _fun56171_ip = 0;;) switch (_fun56171_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var1 = var3.type;
                                            var0 = 'link';
                                            var0 = var0 === var1;
                                            var1 = var3.target;
                                            var2 = null;
                                            var4 = var2 != var1;
                                            var1 = null;
                                            if (!var4) {
                                                _fun56171_ip = 75;
                                                continue _fun56171
                                            }
                                        case 33:
                                            var6 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var4 = 1;
                                            var5 = var5[var4];
                                            var4 = undefined;
                                            var5 = var6.bind(var4)(var5);
                                            var4 = var5.parseQuestsEmbedCode;
                                            var3 = var3.target;
                                            var1 = var4.bind(var5)(var3);
                                        case 75:
                                            if (!var0) {
                                                _fun56171_ip = 82;
                                                continue _fun56171
                                            }
                                        case 78:
                                            var0 = var2 != var1;
                                        case 82:
                                            if (!var0) {
                                                _fun56171_ip = 95;
                                                continue _fun56171
                                            }
                                        case 85:
                                            var1 = _closure4_slot0;
                                            var0 = !var1;
                                        case 95:
                                            var0 = !var0;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var3 = undefined;
                            var2 = var0.bind(var3)(var2);
                            var0 = _closure2_slot0;
                            var0 = var0.embeds;
                            var0 = var0.length;
                            var5 = 0;
                            if (!(var0 > var5)) {
                                _fun56164_ip = 557;
                                continue _fun56164
                            }
                        case 472:
                            if (var4) {
                                _fun56164_ip = 541;
                                continue _fun56164
                            }
                        case 475:
                            var0 = var2[var5];
                            var10 = var0.type;
                            var9 = 'paragraph';
                            var0 = false;
                            if (!(var9 === var10)) {
                                _fun56164_ip = 553;
                                continue _fun56164
                            }
                        case 494:
                            var9 = var2[var5];
                            var9 = var9.content;
                            var7 = var7.Array;
                            var7 = var9 instanceof var7;
                            var0 = false;
                            if (!var7) {
                                _fun56164_ip = 553;
                                continue _fun56164
                            }
                        case 518:
                            var7 = _closure1_slot11;
                            var5 = var2[var5];
                            var5 = var5.content;
                            var0 = var7.bind(var3)(var5);
                            _fun56164_ip = 553;
                            continue _fun56164;
                        case 541:
                            var5 = _closure1_slot11;
                            var0 = var5.bind(var3)(var2);
                        case 553:
                            _closure2_slot6 = var0;
                        case 557:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun56164_ip = 576;
                                continue _fun56164
                            }
                        case 564:
                            var0 = _closure1_slot12;
                            var0 = var0.bind(var3)(var2);
                        case 576:
                            var5 = _closure2_slot4;
                            var0 = var2;
                            if (!(var6 != var5)) {
                                _fun56164_ip = 597;
                                continue _fun56164
                            }
                        case 587:
                            var1 = _closure2_slot4;
                            var0 = var1.bind(var3)(var2, var4);
                        case 597:
                            return var0;
                    }
                };
                var11 = undefined;
                var10 = var5;
                var1 = var11[var3](var10, var9, var8, var7, var6);
                var0 = {};
                var3 = _closure2_slot6;
                var0.hasSpoilerEmbeds = var3;
                var2 = _closure2_slot7;
                var0.hasBailedAst = var2;
                var0.content = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        var5 = {
            'allowLinks': false,
            'allowDevLinks': false,
            'allowEmojiLinks': false,
            'mentionChannels': null,
            'soundboardSounds': null,
            'isInteracting': false,
            'formatInline': false,
            'noStyleAndInteraction': false,
            'allowHeading': false,
            'allowList': false,
            'allowGameMentions': false,
            'disableAutoBlockNewlines': true,
            'highlightWord': null,
            'disableAnimatedEmoji': false
        };
        var0 = false;
        var1 = new Array(0);
        var5.mentionChannels = var1;
        var1 = new Array(0);
        var5.soundboardSounds = var1;
        var8 = true;
        var1 = arg2;
        var5.highlightWord = var1;
        var1 = arg3;
        var5.channelId = var1;
        var5.muted = var0;
        var3 = arg0;
        var10 = undefined;
        var9 = arg1;
        var6 = function(arg0) { // Environment: var0
            _fun56173: for (var _fun56173_ip = 0;;) switch (_fun56173_ip) {
                case 0:
                    var2 = arg0;
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.isArray;
                    var1 = var0.bind(var1)(var2);
                    var0 = var2;
                    if (var1) {
                        _fun56173_ip = 38;
                        continue _fun56173
                    }
                case 27:
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0 = var1;
                case 38:
                    return var0;
            }
        };
        var7 = var5;
        var0 = var10[var3](var9, var8, var7, var6, var5);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun56174: for (var _fun56174_ip = 0;;) switch (_fun56174_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.some;
                var2 = function(arg0) { // Environment: var1
                    _fun56175: for (var _fun56175_ip = 0;;) switch (_fun56175_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.type;
                            var0 = 'emoji';
                            var0 = var0 !== var1;
                            if (!var0) {
                                _fun56175_ip = 32;
                                continue _fun56175
                            }
                        case 19:
                            var3 = var2.type;
                            var1 = 'customEmoji';
                            var0 = var1 !== var3;
                        case 32:
                            if (!var0) {
                                _fun56175_ip = 80;
                                continue _fun56175
                            }
                        case 35:
                            var1 = var2.content;
                            var3 = 'string';
                            var1 = typeof var1;
                            var1 = var3 !== var1;
                            if (var1) {
                                _fun56175_ip = 77;
                                continue _fun56175
                            }
                        case 54:
                            var3 = var2.content;
                            var2 = var3.trim;
                            var3 = var2.bind(var3)();
                            var2 = '';
                            var1 = var2 !== var3;
                        case 77:
                            var0 = var1;
                        case 80:
                            return var0;
                    }
                };
                var2 = var3.bind(var0)(var2);
                if (var2) {
                    _fun56174_ip = 73;
                    continue _fun56174
                }
            case 24:
                var2 = 0;
                var _closure2_slot0 = var2;
                var3 = var0.forEach;
                var2 = function(arg0) { // Environment: var1
                    _fun56176: for (var _fun56176_ip = 0;;) switch (_fun56176_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.type;
                            var0 = 'emoji';
                            var0 = var0 !== var2;
                            if (!var0) {
                                _fun56176_ip = 32;
                                continue _fun56176
                            }
                        case 19:
                            var2 = var1.type;
                            var1 = 'customEmoji';
                            var0 = var1 !== var2;
                        case 32:
                            if (var0) {
                                _fun56176_ip = 53;
                                continue _fun56176
                            }
                        case 35:
                            var2 = _closure2_slot0;
                            var0 = 1;
                            var0 = var2 + var0;
                            _closure2_slot0 = var0;
                        case 53:
                            var1 = _closure2_slot0;
                            var0 = 30;
                            if (!(!(var1 > var0))) {
                                _fun56176_ip = 71;
                                continue _fun56176
                            }
                        case 67:
                            var0 = undefined;
                            return var0;
                        case 71:
                            var0 = false;
                            return var0;
                    }
                };
                var2 = var3.bind(var0)(var2);
                var3 = _closure2_slot0;
                var2 = 30;
                if (!(!(var3 > var2))) {
                    _fun56174_ip = 71;
                    continue _fun56174
                }
            case 56:
                var2 = var0.forEach;
                var1 = function(arg0) { // Environment: var1
                    var1 = true;
                    var0 = arg0;
                    var0.jumboable = var1;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
            case 71:
                return var0;
            case 73:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun56178: for (var _fun56178_ip = 0;;) switch (_fun56178_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var7;
                var3 = global;
                var1 = var3.Array;
                var1 = var2 instanceof var1;
                if (var1) {
                    _fun56178_ip = 122;
                    continue _fun56178
                }
            case 27:
                var6 = undefined;
                var1 = var7.bind(var6)(var2);
                var4 = null;
                if (!(var4 == var1)) {
                    _fun56178_ip = 120;
                    continue _fun56178
                }
            case 40:
                var5 = var2.content;
                var4 = var3.Array;
                var4 = var5 instanceof var4;
                if (var4) {
                    _fun56178_ip = 99;
                    continue _fun56178
                }
            case 58:
                var4 = var2.items;
                var3 = var3.Array;
                var3 = var4 instanceof var3;
                if (!var3) {
                    _fun56178_ip = 97;
                    continue _fun56178
                }
            case 76:
                var8 = var2.items;
                var5 = var8.some;
                var4 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot10;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var3 = var5.bind(var8)(var4);
            case 97:
                _fun56178_ip = 117;
                continue _fun56178;
            case 99:
                var5 = _closure1_slot10;
                var4 = var2.content;
                var3 = var5.bind(var6)(var4, var7);
            case 117:
                var1 = var3;
            case 120:
                return var1;
            case 122:
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot10;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var3 = _closure1_slot10;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            _fun56182: for (var _fun56182_ip = 0;;) switch (_fun56182_ip) {
                case 0:
                    var4 = arg0;
                    var2 = var4.type;
                    var1 = 'spoiler';
                    var0 = null;
                    if (!(var1 === var2)) {
                        _fun56182_ip = 40;
                        continue _fun56182
                    }
                case 18:
                    var3 = _closure1_slot10;
                    var2 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun56183: for (var _fun56183_ip = 0;;) switch (_fun56183_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.type;
                                var0 = 'link';
                                var0 = var0 === var2;
                                if (var0) {
                                    _fun56183_ip = 32;
                                    continue _fun56183
                                }
                            case 19:
                                var2 = var1.type;
                                var1 = 'attachmentLink';
                                var0 = var1 === var2;
                            case 32:
                                if (var0) {
                                    _fun56183_ip = 37;
                                    continue _fun56183
                                }
                            case 35:
                                var0 = null;
                            case 37:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var2)(var4, var1);
                case 40:
                    return var0;
            }
        };
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun56185: for (var _fun56185_ip = 0;;) switch (_fun56185_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure1_slot4;
                    var3 = var4.has;
                    var2 = var0.type;
                    var2 = var3.bind(var4)(var2);
                    if (!var2) {
                        _fun56185_ip = 39;
                        continue _fun56185
                    }
                case 28:
                    var4 = var0.content;
                    var3 = null;
                    var2 = var3 != var4;
                case 39:
                    if (!var2) {
                        _fun56185_ip = 250;
                        continue _fun56185
                    }
                case 45:
                    var5 = global;
                    var4 = var5.Array;
                    var3 = var4.isArray;
                    var2 = var0.content;
                    var2 = var3.bind(var4)(var2);
                    if (var2) {
                        _fun56185_ip = 234;
                        continue _fun56185
                    }
                case 74:
                    var2 = var0.content;
                    var3 = 'string';
                    var2 = typeof var2;
                    if (!(var3 !== var2)) {
                        _fun56185_ip = 190;
                        continue _fun56185
                    }
                case 90:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.captureMessage;
                    var10 = var0.type;
                    var2 = var0.content;
                    var7 = var5.Object;
                    var6 = var7.keys;
                    var11 = var6.bind(var7)(var0);
                    var5 = var5.HermesInternal;
                    var8 = var5.concat;
                    var16 = 'AST node type:';
                    var14 = ' with content typeof ';
                    var13 = typeof var2;
                    var12 = '. Keys ';
                    var15 = var10;
                    var2 = var16[var8](var15, var14, var13, var12, var11, var10);
                    var2 = var3.bind(var4)(var2);
                    _fun56185_ip = 250;
                    continue _fun56185;
                case 190:
                    var5 = var0.content;
                    var4 = var5.replace;
                    var3 = /\n/g;
                    var2 = ' ';
                    var2 = var4.bind(var5)(var3, var2);
                    var0.content = var2;
                    _fun56185_ip = 250;
                    continue _fun56185;
                case 234:
                    var2 = _closure1_slot12;
                    var1 = var0.content;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 250:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var8 = var7[var0];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var9 = var8.MessageEmbedTypes;
    var10 = var5.Set;
    var11 = var9.IMAGE;
    var8 = new Array(2);
    var8[0] = var11;
    var9 = var9.GIFV;
    var8[1] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var15 = var9;
    var14 = var8;
    var8 = new var15[var10](var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot3 = var8;
    var9 = var5.Set;
    var5 = var9.prototype;
    var8 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var14 = ['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler'];
    var15 = var8;
    var5 = new var15[var9](var14, var13);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot4 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/renderMessageMarkup.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        _fun56186: for (var _fun56186_ip = 0;;) switch (_fun56186_ip) {
            case 0:
                var4 = arguments[1];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun56186_ip = 11;
                    continue _fun56186
                }
            case 9:
                var4 = {};
            case 11:
                var2 = _closure1_slot7;
                var1 = var4.formatInline;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 2;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                if (var1) {
                    _fun56186_ip = 55;
                    continue _fun56186
                }
            case 47:
                var1 = var0.parse;
                _fun56186_ip = 61;
                continue _fun56186;
            case 55:
                var1 = var0.parseInlineReply;
            case 61:
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var2.default = var5;
    var2.getInitialParserStateFromMessage = var4;
    var2.getInitialParserState = var3;
    var3 = function arg0, arg1() {
        _fun56187: for (var _fun56187_ip = 0;;) switch (_fun56187_ip) {
            case 0:
                var4 = arguments[2];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun56187_ip = 11;
                    continue _fun56187
                }
            case 9:
                var4 = {};
            case 11:
                var2 = _closure1_slot7;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var2.renderMessageMarkupWithParser = var3;
    var3 = function arg0() {
        _fun56188: for (var _fun56188_ip = 0;;) switch (_fun56188_ip) {
            case 0:
                var0 = arguments[1];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun56188_ip = 11;
                    continue _fun56188
                }
            case 9:
                var0 = {};
            case 11:
                var3 = _closure1_slot7;
                var2 = var0.formatInline;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 2;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                if (var2) {
                    _fun56188_ip = 55;
                    continue _fun56188
                }
            case 47:
                var2 = var1.parseToAST;
                _fun56188_ip = 61;
                continue _fun56188;
            case 55:
                var2 = var1.parseInlineReplyToAST;
            case 61:
                var1 = {};
                var9 = var1;
                var8 = var0;
                var0 = copyDataProperties(var9, var8);
                var5 = true;
                var0 = 'toAST';
                var1[var0] = var5;
                var0 = arg0;
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.renderMessageMarkupToAST = var3;
    var3 = function arg0, arg1() {
        _fun56189: for (var _fun56189_ip = 0;;) switch (_fun56189_ip) {
            case 0:
                var4 = arguments[2];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun56189_ip = 11;
                    continue _fun56189
                }
            case 9:
                var4 = {};
            case 11:
                var2 = function arg0, arg1() {
                    var1 = arg1;
                    var9 = var1.content;
                    var4 = {
                        'allowLinks': false,
                        'allowDevLinks': false,
                        'allowEmojiLinks': false,
                        'mentionChannels': null,
                        'soundboardSounds': null,
                        'isInteracting': false,
                        'formatInline': true,
                        'noStyleAndInteraction': false,
                        'allowHeading': false,
                        'allowList': false,
                        'allowGameMentions': false,
                        'disableAutoBlockNewlines': true,
                        'previewLinkTarget': false,
                        'disableAnimatedEmoji': true
                    };
                    var0 = false;
                    var2 = new Array(0);
                    var4.mentionChannels = var2;
                    var2 = new Array(0);
                    var4.soundboardSounds = var2;
                    var3 = true;
                    var2 = var1.guildId;
                    var4.guildId = var2;
                    var1 = var1.channelId;
                    var4.channelId = var1;
                    var4.muted = var0;
                    var4.disablePressableChannelMention = var3;
                    var2 = arg0;
                    var10 = undefined;
                    var6 = function(arg0) { // Environment: var0
                        _fun56191: for (var _fun56191_ip = 0;;) switch (_fun56191_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = global;
                                var1 = var0.Array;
                                var0 = var1.isArray;
                                var1 = var0.bind(var1)(var2);
                                var0 = var2;
                                if (var1) {
                                    _fun56191_ip = 38;
                                    continue _fun56191
                                }
                            case 27:
                                var1 = new Array(1);
                                var1[0] = var2;
                                var0 = var1;
                            case 38:
                                return var0;
                        }
                    };
                    var8 = true;
                    var7 = var4;
                    var0 = var10[var2](var9, var8, var7, var6, var5);
                    return var0;
                };
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var2.renderMessageContentMarkup = var3;
    var3 = function arg0, arg1, arg2() {
        var5 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var4 = undefined;
        var0 = var1.bind(var4)(var0);
        var9 = var0.parseAutoModerationSystemMessage;
        var8 = arg0;
        var7 = arg1;
        var6 = arg2;
        var10 = undefined;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.renderAutomodMessageMarkup = var3;
    var1 = function arg0, arg1, arg2() {
        var5 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var0 = var2[var0];
        var4 = undefined;
        var0 = var1.bind(var4)(var0);
        var9 = var0.parseAutoModerationSystemMessageToAST;
        var8 = arg0;
        var7 = arg1;
        var6 = arg2;
        var10 = undefined;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.renderAutomodMessageMarkupToAST = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3322, 4783, 3996, 1592, 3328, 1207, 2]);