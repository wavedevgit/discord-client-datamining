// modules/message_previews/native/MessagePreviewMarkup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.layout;
        var12 = var0.color;
        var11 = var0.fontScale;
        var10 = var0.maxFontSizeMultiplier;
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 0;
        var0 = var9[var0];
        var2 = undefined;
        var1 = var8.bind(var2)(var0);
        var0 = 1;
        var0 = var9[var0];
        var0 = var8.bind(var2)(var0);
        var3 = var0.RULES;
        var0 = new Array(2);
        var0[0] = var3;
        var3 = 2;
        var3 = var9[var3];
        var3 = var8.bind(var2)(var3);
        var14 = undefined;
        var13 = var7;
        var3 = var14[var3](var13, var12, var11, var10, var9);
        var0[1] = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var0;
    var6 = function arg0() {
        var0 = arg0;
        var3 = var0.tree;
        var2 = var0.initialParserState;
        var8 = var0.layout;
        var7 = var0.color;
        var6 = var0.fontScale;
        var1 = var0.maxFontSizeMultiplier;
        var5 = _closure1_slot4;
        var4 = {};
        var4.layout = var8;
        var4.color = var7;
        var4.fontScale = var6;
        var4.maxFontSizeMultiplier = var1;
        var1 = undefined;
        var8 = var5.bind(var1)(var4);
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 3;
        var4 = var7[var0];
        var5 = var6.bind(var1)(var4);
        var4 = var5.reactFor;
        var0 = var7[var0];
        var7 = var6.bind(var1)(var0);
        var6 = var7.ruleOutput;
        var0 = 'react';
        var0 = var6.bind(var7)(var8, var0);
        var0 = var4.bind(var5)(var0);
        var0 = var0.bind(var1)(var3, var2);
        return var0;
    };
    var _closure1_slot5 = var6;
    var5 = function arg0() {
        var0 = arg0;
        var6 = var0.layout;
        var5 = var0.color;
        var4 = var0.fontScale;
        var3 = var0.maxFontSizeMultiplier;
        var2 = _closure1_slot4;
        var1 = {};
        var1.layout = var6;
        var1.color = var5;
        var1.fontScale = var4;
        var1.maxFontSizeMultiplier = var3;
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 4;
        var0 = var4[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.astParserFor;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var _closure1_slot6 = var5;
    var1 = function arg0() {
        _fun70078: for (var _fun70078_ip = 0;;) switch (_fun70078_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.content;
                var10 = var0.layout;
                var9 = var0.color;
                var8 = var0.initialParserState;
                var7 = var0.postProcessor;
                var6 = var0.fontScale;
                var5 = var0.maxFontSizeMultiplier;
                var1 = _closure1_slot3;
                var0 = var1.get;
                var0 = var0.bind(var1)(var4);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun70078_ip = 202;
                    continue _fun70078
                }
            case 69:
                var3 = _closure1_slot6;
                var1 = {};
                var1.layout = var10;
                var1.color = var9;
                var1.fontScale = var6;
                var1.maxFontSizeMultiplier = var5;
                var6 = undefined;
                var5 = var3.bind(var6)(var1);
                var3 = var4.startsWith;
                var1 = '```';
                var1 = var3.bind(var4)(var1);
                var3 = undefined;
                if (var1) {
                    _fun70078_ip = 162;
                    continue _fun70078
                }
            case 123:
                var10 = var4.split;
                var9 = '\n';
                var10 = var10.bind(var4)(var9);
                var9 = 0;
                var9 = var10[var9];
                var11 = var9.includes;
                var10 = '||';
                var1 = var11.bind(var9)(var10);
                var3 = var9;
            case 162:
                if (!var1) {
                    _fun70078_ip = 168;
                    continue _fun70078
                }
            case 165:
                var3 = var4;
            case 168:
                var14 = true;
                var16 = undefined;
                var15 = var3;
                var13 = var8;
                var12 = var7;
                var1 = var16[var5](var15, var14, var13, var12, var11);
                var3 = _closure1_slot3;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                return var1;
            case 202:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var3);
    var0 = 7;
    var3 = var9[var0];
    var0 = undefined;
    var10 = var7.bind(var0)(var3);
    var3 = {};
    var7 = 2000;
    var3.max = var7;
    var7 = var10.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var10
        }
    });
    var15 = var7;
    var14 = var3;
    var3 = new var15[var10](var14, var13);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot3 = var3;
    var7 = 8;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/message_previews/native/MessagePreviewMarkup.tsx';
    var7 = var8.bind(var9)(var7);
    var2.renderASTToReact = var6;
    var2.getMessagePreviewASTParser = var5;
    var4 = function arg0() {
        _fun70079: for (var _fun70079_ip = 0;;) switch (_fun70079_ip) {
            case 0:
                var3 = arg0;
                var11 = var3.content;
                var1 = var3.muted;
                var9 = var3.guildId;
                var0 = var3.channelId;
                var6 = var3.layout;
                var2 = undefined;
                if (!(var6 === var2)) {
                    _fun70079_ip = 71;
                    continue _fun70079
                }
            case 36:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 5;
                var4 = var7[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.ChannelListLayoutTypes;
                var6 = var4.COMPACT;
            case 71:
                var5 = var3.color;
                var10 = var3.postProcessor;
                var13 = var3.disableAnimatedEmoji;
                if (!(var13 === var2)) {
                    _fun70079_ip = 94;
                    continue _fun70079
                }
            case 92:
                var13 = true;
            case 94:
                var4 = var3.fontScale;
                if (!(var4 === var2)) {
                    _fun70079_ip = 107;
                    continue _fun70079
                }
            case 104:
                var4 = 1;
            case 107:
                var3 = var3.maxFontSizeMultiplier;
                var7 = '';
                if (!(var7 !== var11)) {
                    _fun70079_ip = 344;
                    continue _fun70079
                }
            case 124:
                var7 = {
                    'allowLinks': true,
                    'allowDevLinks': false,
                    'allowEmojiLinks': false,
                    'mentionChannels': null,
                    'soundboardSounds': null,
                    'isInteracting': false,
                    'formatInline': true,
                    'noStyleAndInteraction': true,
                    'allowHeading': true,
                    'allowList': true,
                    'allowGameMentions': null,
                    'disableAutoBlockNewlines': true,
                    'previewLinkTarget': false
                };
                var12 = true;
                var8 = new Array(0);
                var7.mentionChannels = var8;
                var8 = new Array(0);
                var7.soundboardSounds = var8;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var14 = 6;
                var14 = var16[var14];
                var14 = var15.bind(var2)(var14);
                var16 = var14.GameMentionsUserExperiment;
                var15 = var16.getCurrentConfig;
                var14 = {};
                var17 = 'message preview';
                var14.location = var17;
                var14 = var15.bind(var16)(var14);
                var14 = var14.enabled;
                var7.allowGameMentions = var14;
                var7.disableAnimatedEmoji = var13;
                var7.unknownUserMentionPlaceholder = var12;
                var7.guildId = var9;
                var7.channelId = var0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun70079_ip = 253;
                    continue _fun70079
                }
            case 250:
                var0 = var1;
            case 253:
                var7.muted = var0;
                var1 = _closure1_slot5;
                var0 = {};
                var9 = _closure1_slot7;
                var8 = {};
                var8.content = var11;
                var8.layout = var6;
                var8.color = var5;
                var8.initialParserState = var7;
                var8.fontScale = var4;
                var8.maxFontSizeMultiplier = var3;
                var8.postProcessor = var10;
                var8 = var9.bind(var2)(var8);
                var0.tree = var8;
                var0.initialParserState = var7;
                var0.layout = var6;
                var0.color = var5;
                var0.fontScale = var4;
                var0.maxFontSizeMultiplier = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 344:
                var0 = null;
                return var0;
        }
    };
    var2.renderMessagePreviewMarkup = var4;
    var2.messagePreviewASTCache = var3;
    var2.getOrParseMessagePreviewMarkupAST = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4777, 4778, 8780, 3137, 4776, 8783, 3983, 1386, 2]);