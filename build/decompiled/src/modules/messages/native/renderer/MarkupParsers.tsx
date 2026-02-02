// modules/messages/native/renderer/MarkupParsers.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageTypes;
    var _closure1_slot3 = var3;
    var7 = {
        'max': inf,
        'maxAge': null,
        'updateAgeOnGet': true
    };
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var8 = var3.MINUTE;
    var3 = 15;
    var3 = var3 * var8;
    var7.maxAge = var3;
    var3 = 2;
    var8 = var5[var3];
    var8 = var6.bind(var0)(var8);
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var15 = var9;
    var14 = var7;
    var8 = new var15[var8](var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot4 = var8;
    var8 = var5[var3];
    var8 = var6.bind(var0)(var8);
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var15 = var9;
    var14 = var7;
    var8 = new var15[var8](var14, var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot5 = var8;
    var8 = var5[var3];
    var10 = var6.bind(var0)(var8);
    var8 = {};
    var14 = var8;
    var13 = var7;
    var9 = copyDataProperties(var14, var13);
    var11 = false;
    var9 = 'updateAgeOnGet';
    var8[var9] = var11;
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
    var _closure1_slot6 = var8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var15 = var6;
    var14 = var7;
    var3 = new var15[var3](var14, var13);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/MarkupParsers.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun55831: for (var _fun55831_ip = 0;;) switch (_fun55831_ip) {
            case 0:
                var7 = arg0;
                var1 = arg1;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '';
                var0 = '-';
                var4 = var3.bind(var2)(var7, var0, var1);
                var3 = _closure1_slot4;
                var0 = var3.get;
                var0 = var0.bind(var3)(var4);
                var3 = null;
                if (!(var3 == var0)) {
                    _fun55831_ip = 118;
                    continue _fun55831
                }
            case 57:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 3;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.parseEmbedTitleToAST;
                var3 = {};
                var3.channelId = var1;
                var1 = true;
                var1 = var5.bind(var6)(var7, var1, var3);
                var3 = _closure1_slot4;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var2.parseEmbedTitleMarkup = var3;
    var3 = function arg0, arg1() {
        _fun55832: for (var _fun55832_ip = 0;;) switch (_fun55832_ip) {
            case 0:
                var7 = arg0;
                var1 = arg1;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var12 = '';
                var10 = '-';
                var8 = '-nolinks';
                var11 = var7;
                var9 = var1;
                var4 = var12[var4](var11, var10, var9, var8, var7);
                var3 = _closure1_slot5;
                var0 = var3.get;
                var0 = var0.bind(var3)(var4);
                var3 = null;
                if (!(var3 == var0)) {
                    _fun55832_ip = 127;
                    continue _fun55832
                }
            case 66:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 3;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.parseEmbedTitleWithoutLinksToAST;
                var3 = {};
                var3.channelId = var1;
                var1 = true;
                var1 = var5.bind(var6)(var7, var1, var3);
                var3 = _closure1_slot5;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                var0 = var1;
            case 127:
                return var0;
        }
    };
    var2.parseEmbedTitleMarkupWithoutLinks = var3;
    var3 = function arg0() {
        _fun55833: for (var _fun55833_ip = 0;;) switch (_fun55833_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.description;
                var0 = var1.channelId;
                var9 = var1.isField;
                var4 = var1.ignoreCache;
                var13 = var1.replaceMap;
                var8 = var1.showListsAndHeaders;
                var7 = var1.showMaskedLinks;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var3 = var3.bind(var2)(var6, var1, var0);
                var5 = _closure1_slot6;
                var2 = var5.get;
                var2 = var2.bind(var5)(var3);
                var5 = null;
                if (!(var5 != var2)) {
                    _fun55833_ip = 99;
                    continue _fun55833
                }
            case 94:
                if (var4) {
                    _fun55833_ip = 99;
                    continue _fun55833
                }
            case 97:
                return var2;
            case 99:
                var11 = var13;
                var2 = var6;
                var6 = var2;
                for (var4 in var11)
                    case 116: {
                        var6 = var2;
                        case 128: var16 = var4;
                        var15 = var2.replaceAll;
                        var14 = var13[var16];
                        var2 = var15.bind(var2)(var16, var14);
                        _fun55833_ip = 116;
                        continue _fun55833;
                    }
            case 149:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 3;
                var4 = var4[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.parseToAST;
                var2 = {
                    'channelId': null,
                    'allowLinks': true,
                    'allowEmojiLinks': true
                };
                var2.channelId = var0;
                var0 = true;
                var9 = !var9;
                if (!var9) {
                    _fun55833_ip = 208;
                    continue _fun55833
                }
            case 205:
                var9 = var8;
            case 208:
                var2.allowHeading = var9;
                var2.allowList = var8;
                var2.previewLinkTarget = var7;
                var0 = var4.bind(var5)(var6, var0, var2);
                var2 = _closure1_slot6;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.parseEmbedDescriptionMarkup = var3;
    var1 = function arg0, arg1, arg2() {
        _fun55834: for (var _fun55834_ip = 0;;) switch (_fun55834_ip) {
            case 0:
                var4 = arg0;
                var12 = arg2;
                var11 = arguments[3];
                var9 = arguments[4];
                var10 = arguments[5];
                var3 = arguments[6];
                var8 = undefined;
                if (!(var11 === var8)) {
                    _fun55834_ip = 26;
                    continue _fun55834
                }
            case 24:
                var11 = false;
            case 26:
                if (!(var9 === var8)) {
                    _fun55834_ip = 32;
                    continue _fun55834
                }
            case 30:
                var9 = false;
            case 32:
                if (!(var10 === var8)) {
                    _fun55834_ip = 38;
                    continue _fun55834
                }
            case 36:
                var10 = false;
            case 38:
                if (!(var3 === var8)) {
                    _fun55834_ip = 44;
                    continue _fun55834
                }
            case 42:
                var3 = false;
            case 44:
                var1 = _closure1_slot7;
                var0 = var1.get;
                var0 = var0.bind(var1)(var4);
                var5 = null;
                if (!(var5 != var0)) {
                    _fun55834_ip = 80;
                    continue _fun55834
                }
            case 67:
                var1 = var0.isInlineReplyPreview;
                if (!(var1 !== var11)) {
                    _fun55834_ip = 453;
                    continue _fun55834
                }
            case 80:
                var6 = var4.type;
                var1 = _closure1_slot3;
                var1 = var1.CHANGELOG;
                if (!(var6 === var1)) {
                    _fun55834_ip = 112;
                    continue _fun55834
                }
            case 99:
                var1 = var4.changelogId;
                if (!(var5 == var1)) {
                    _fun55834_ip = 288;
                    continue _fun55834
                }
            case 112:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var1 = var7[var1];
                var1 = var6.bind(var8)(var1);
                var13 = var1.GameMentionsUserExperiment;
                var5 = var13.getCurrentConfig;
                var1 = {};
                var14 = 'native/MarkupParsers';
                var1.location = var14;
                var1 = var5.bind(var13)(var1);
                var13 = var1.enabled;
                var1 = {};
                var5 = 6;
                var5 = var7[var5];
                var7 = var6.bind(var8)(var5);
                var6 = var7.renderMessageMarkupToAST;
                var5 = {};
                var14 = arg1;
                var5.contentMessage = var14;
                var5.hideSimpleEmbedContent = var12;
                var5.formatInline = var11;
                var14 = var9;
                if (var9) {
                    _fun55834_ip = 215;
                    continue _fun55834
                }
            case 212:
                var14 = var10;
            case 215:
                var5.allowHeading = var14;
                var14 = var9;
                if (var9) {
                    _fun55834_ip = 229;
                    continue _fun55834
                }
            case 226:
                var14 = var10;
            case 229:
                var5.allowList = var14;
                var5.allowLinks = var3;
                var5.allowGameMentions = var13;
                var5.previewLinkTarget = var3;
                var17 = var6.bind(var7)(var4, var5);
                var18 = var1;
                var5 = copyDataProperties(var18, var17);
                var5 = 'isInlineReplyPreview';
                var1[var5] = var11;
                var6 = _closure1_slot7;
                var5 = var6.set;
                var5 = var5.bind(var6)(var4, var1);
                return var1;
            case 288:
                var1 = {
                    'content': null,
                    'isInlineReplyPreview': false,
                    'hasSpoilerEmbeds': false,
                    'hasBailedAst': false
                };
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 3;
                var5 = var14[var5];
                var7 = var6.bind(var8)(var5);
                var6 = var7.astParserFor;
                var13 = _closure1_slot0;
                var5 = 4;
                var5 = var14[var5];
                var15 = var13.bind(var8)(var5);
                var14 = var15.changelogRules;
                var13 = var4.changelogId;
                var5 = true;
                var5 = var14.bind(var15)(var13, var5);
                var7 = var6.bind(var7)(var5);
                var6 = var4.content;
                var5 = {};
                var5.hideSimpleEmbedContent = var12;
                var5.formatInline = var11;
                var11 = var9;
                if (var9) {
                    _fun55834_ip = 395;
                    continue _fun55834
                }
            case 392:
                var11 = var10;
            case 395:
                var5.allowHeading = var11;
                if (var9) {
                    _fun55834_ip = 406;
                    continue _fun55834
                }
            case 403:
                var9 = var10;
            case 406:
                var5.allowList = var9;
                var5.allowLinks = var3;
                var5.previewLinkTarget = var3;
                var3 = false;
                var3 = var7.bind(var8)(var6, var3, var5);
                var1.content = var3;
                var3 = _closure1_slot7;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                return var1;
            case 453:
                return var0;
        }
    };
    var2.parseMessageMarkup = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 667, 1386, 4746, 6738, 3953, 6747, 2]);