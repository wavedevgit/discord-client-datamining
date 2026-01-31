// modules/markup/PlatformMarkupRules.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun44108: for (var _fun44108_ip = 0;;) switch (_fun44108_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var0 = var2;
                if (!(var1 != var2)) {
                    _fun44108_ip = 72;
                    continue _fun44108
                }
            case 12:
                var3 = 'string';
                var1 = typeof var2;
                var0 = var2;
                if (!(var3 !== var1)) {
                    _fun44108_ip = 72;
                    continue _fun44108
                }
            case 26:
                var1 = global;
                var1 = var1.Array;
                var1 = var2 instanceof var1;
                var3 = var2;
                if (var1) {
                    _fun44108_ip = 55;
                    continue _fun44108
                }
            case 44:
                var1 = new Array(1);
                var1[0] = var2;
                var3 = var1;
            case 55:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun44109: for (var _fun44109_ip = 0;;) switch (_fun44109_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.type;
                            var1 = 'channel';
                            var0 = var2;
                            if (!(var1 === var3)) {
                                _fun44109_ip = 114;
                                continue _fun44109
                            }
                        case 19:
                            var1 = {};
                            var9 = var1;
                            var8 = var2;
                            var3 = copyDataProperties(var9, var8);
                            var5 = _closure1_slot3;
                            var4 = var5.resolveAssetSource;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 1;
                            var6 = var6[var3];
                            var3 = undefined;
                            var7 = var7.bind(var3)(var6);
                            var6 = var7.getChannelMentionIcon;
                            var2 = var2.iconType;
                            var2 = var6.bind(var7)(var2);
                            var2 = var4.bind(var5)(var2);
                            var4 = null;
                            var4 = var4 == var2;
                            if (var4) {
                                _fun44109_ip = 102;
                                continue _fun44109
                            }
                        case 97:
                            var3 = var2.uri;
                        case 102:
                            var2 = 'icon';
                            var1[var2] = var3;
                            var0 = var1;
                        case 114:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 72:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.Image;
    var _closure1_slot3 = var1;
    var1 = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
    var _closure1_slot4 = var1;
    var1 = {};
    var3 = {};
    var7 = ['\\'];
    var3.requiredFirstCharacters = var7;
    var7 = function arg0, arg1() {
        _fun44110: for (var _fun44110_ip = 0;;) switch (_fun44110_ip) {
            case 0:
                var0 = arg1;
                var1 = var0.allowEscape;
                var0 = false;
                if (!(var0 !== var1)) {
                    _fun44110_ip = 148;
                    continue _fun44110
                }
            case 18:
                var2 = /^\\([^0-9A-Za-z\s])/;
                var1 = var2.exec;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var3 = null;
                if (!(var3 != var1)) {
                    _fun44110_ip = 143;
                    continue _fun44110
                }
            case 52:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.hasSurrogates;
                var2 = 0;
                var0 = var1[var2];
                var4 = var4.bind(var5)(var0);
                var0 = null;
                if (var4) {
                    _fun44110_ip = 146;
                    continue _fun44110
                }
            case 99:
                var4 = global;
                var5 = var4.JSON;
                var4 = var5.stringify;
                var2 = var1[var2];
                var5 = var4.bind(var5)(var2);
                var4 = var5.includes;
                var2 = '\\ud';
                var2 = var4.bind(var5)(var2);
                var0 = null;
                if (var2) {
                    _fun44110_ip = 146;
                    continue _fun44110
                }
            case 143:
                var0 = var1;
            case 146:
                return var0;
            case 148:
                var0 = null;
                return var0;
        }
    };
    var3.match = var7;
    var1.escape = var3;
    var3 = {};
    var7 = 3;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.defaultRules;
    var11 = var7.escape;
    var12 = var3;
    var7 = copyDataProperties(var12, var11);
    var7 = 'requiredFirstCharacters';
    var3[var7] = var0;
    var9 = function arg0() {
        var2 = _closure1_slot4;
        var1 = var2.exec;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7 = 'match';
    var3[var7] = var9;
    var1.invisibleUnicode = var3;
    var3 = {};
    var7 = function arg0, arg1, arg2() {
        _fun44112: for (var _fun44112_ip = 0;;) switch (_fun44112_ip) {
            case 0:
                var2 = arg0;
                var0 = arg2;
                var1 = var0.nested;
                if (var1) {
                    _fun44112_ip = 112;
                    continue _fun44112
                }
            case 15:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var5 = undefined;
                var6 = var3.bind(var5)(var1);
                var4 = var6.maybeTranslateSurrogatesToInlineEmoji;
                var3 = 0;
                var1 = var2[var3];
                var4 = var4.bind(var6)(var1);
                var1 = null;
                if (!(var1 != var4)) {
                    _fun44112_ip = 97;
                    continue _fun44112
                }
            case 63:
                var1 = {};
                var8 = var1;
                var7 = var0;
                var0 = copyDataProperties(var8, var7);
                var6 = true;
                var0 = 'nested';
                var1[var0] = var6;
                var0 = arg1;
                var0 = var0.bind(var5)(var4, var1);
                _fun44112_ip = 110;
                continue _fun44112;
            case 97:
                var1 = {};
                var3 = var2[var3];
                var1.content = var3;
                var0 = var1;
            case 110:
                return var0;
            case 112:
                var0 = {};
                var1 = 0;
                var1 = var2[var1];
                var0.content = var1;
                return var0;
        }
    };
    var3.parse = var7;
    var1.text = var3;
    var3 = {};
    var7 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.convertNameToSurrogate;
        var0 = 1;
        var0 = var3[var0];
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var2 = 'emoji';
        var0.type = var2;
        var2 = 0;
        var2 = var3[var2];
        var0.content = var2;
        var0.surrogate = var1;
        return var0;
    };
    var3.parse = var7;
    var1.emoji = var3;
    var3 = {};
    var7 = 4;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.order;
    var3.order = var9;
    var9 = ['<'];
    var3.requiredFirstCharacters = var9;
    var9 = function arg0() {
        var2 = /^<(a)?:(\w+):(\d+)>/;
        var1 = var2.exec;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.match = var9;
    var9 = function arg0, arg1, arg2() {
        _fun44115: for (var _fun44115_ip = 0;;) switch (_fun44115_ip) {
            case 0:
                var2 = arg0;
                var0 = var2[Symbol.iterator];
                var2 = var0().next;
                var1 = var2().value;
                var1 = var0;
                var6 = undefined;
                var1 = var1 === var6;
                var11 = undefined;
                if (var1) {
                    _fun44115_ip = 49;
                    continue _fun44115
                }
            case 24:
                var4 = var2().value;
                var3 = var0;
                var3 = var3 === var6;
                var11 = undefined;
                var1 = var3;
                if (var3) {
                    _fun44115_ip = 49;
                    continue _fun44115
                }
            case 43:
                var11 = var4;
                var1 = var3;
            case 49:
                var4 = undefined;
                if (var1) {
                    _fun44115_ip = 79;
                    continue _fun44115
                }
            case 54:
                var5 = var2().value;
                var3 = var0;
                var3 = var3 === var6;
                var4 = undefined;
                var1 = var3;
                if (var3) {
                    _fun44115_ip = 79;
                    continue _fun44115
                }
            case 73:
                var4 = var5;
                var1 = var3;
            case 79:
                var5 = undefined;
                if (var1) {
                    _fun44115_ip = 109;
                    continue _fun44115
                }
            case 84:
                var3 = var2().value;
                var2 = var0;
                var2 = var2 === var6;
                var5 = undefined;
                var1 = var2;
                if (var2) {
                    _fun44115_ip = 109;
                    continue _fun44115
                }
            case 103:
                var5 = var3;
                var1 = var2;
            case 109:
                if (var1) {
                    _fun44115_ip = 115;
                    continue _fun44115
                }
            case 112:
                var0.return();
            case 115:
                var0 = arg2;
                var3 = var0.disableAnimatedEmoji;
                if (!(var3 === var6)) {
                    _fun44115_ip = 130;
                    continue _fun44115
                }
            case 128:
                var3 = false;
            case 130:
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 5;
                var2 = var7[var0];
                var9 = var1.bind(var6)(var2);
                var8 = var9.getEmojiURL;
                var2 = {};
                var2.id = var5;
                var10 = 'a';
                var10 = var10 === var11;
                var2.animated = var10;
                var10 = 48;
                var2.size = var10;
                var2 = var8.bind(var9)(var2);
                var0 = var7[var0];
                var6 = var1.bind(var6)(var0);
                var1 = var6.getEmojiURL;
                var0 = {
                    'id': null,
                    'animated': false,
                    'size': 48
                };
                var0.id = var5;
                var1 = var1.bind(var6)(var0);
                var0 = {};
                var0.id = var5;
                var0.alt = var4;
                if (!var3) {
                    _fun44115_ip = 247;
                    continue _fun44115
                }
            case 244:
                var2 = var1;
            case 247:
                var0.src = var2;
                var0.frozenSrc = var1;
                return var0;
        }
    };
    var3.parse = var9;
    var1.customEmoji = var3;
    var3 = {};
    var9 = function arg0, arg1, arg2() {
        var1 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 6;
        var0 = var3[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var6 = var0.channelMention;
        var5 = var6.parse;
        var4 = arg0;
        var1 = arg1;
        var0 = arg2;
        var1 = var5.bind(var6)(var4, var1, var0);
        var0 = {};
        var9 = var0;
        var8 = var1;
        var4 = copyDataProperties(var9, var8);
        var2 = _closure1_slot5;
        var4 = var1.content;
        var5 = var2.bind(var3)(var4);
        var4 = 'content';
        var0[var4] = var5;
        var1 = var1.inContent;
        var2 = var2.bind(var3)(var1);
        var1 = 'inContent';
        var0[var1] = var2;
        return var0;
    };
    var3.parse = var9;
    var1.channelMention = var3;
    var3 = {};
    var9 = function arg0, arg1, arg2() {
        var1 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 6;
        var0 = var3[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var6 = var0.channelOrMessageUrl;
        var5 = var6.parse;
        var4 = arg0;
        var1 = arg1;
        var0 = arg2;
        var1 = var5.bind(var6)(var4, var1, var0);
        var0 = {};
        var9 = var0;
        var8 = var1;
        var4 = copyDataProperties(var9, var8);
        var2 = _closure1_slot5;
        var4 = var1.content;
        var5 = var2.bind(var3)(var4);
        var4 = 'content';
        var0[var4] = var5;
        var1 = var1.inContent;
        var2 = var2.bind(var3)(var1);
        var1 = 'inContent';
        var0[var1] = var2;
        return var0;
    };
    var3.parse = var9;
    var1.channelOrMessageUrl = var3;
    var3 = {};
    var9 = function arg0, arg1, arg2() {
        var1 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 6;
        var0 = var3[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var6 = var0.mediaPostLink;
        var5 = var6.parse;
        var4 = arg0;
        var1 = arg1;
        var0 = arg2;
        var1 = var5.bind(var6)(var4, var1, var0);
        var0 = {};
        var9 = var0;
        var8 = var1;
        var4 = copyDataProperties(var9, var8);
        var2 = _closure1_slot5;
        var4 = var1.content;
        var5 = var2.bind(var3)(var4);
        var4 = 'content';
        var0[var4] = var5;
        var1 = var1.inContent;
        var2 = var2.bind(var3)(var1);
        var1 = 'inContent';
        var0[var1] = var2;
        return var0;
    };
    var3.parse = var9;
    var1.mediaPostLink = var3;
    var3 = {};
    var9 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var4 = var0.attachmentLink;
        var3 = var4.parse;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var3.parse = var9;
    var1.attachmentLink = var3;
    var3 = {};
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.order;
    var3.order = var7;
    var7 = ['@'];
    var3.requiredFirstCharacters = var7;
    var7 = function arg0() {
        var2 = /^(@silent(?![^\s]))/;
        var1 = var2.exec;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.match = var7;
    var6 = function arg0() {
        var0 = {};
        var1 = 'text';
        var0.type = var1;
        var2 = arg0;
        var1 = 0;
        var1 = var2[var1];
        var0.content = var1;
        return var0;
    };
    var3.parse = var6;
    var1.silentPrefix = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/PlatformMarkupRules.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 4770, 3063, 3105, 4751, 1417, 4753, 4757, 2]);