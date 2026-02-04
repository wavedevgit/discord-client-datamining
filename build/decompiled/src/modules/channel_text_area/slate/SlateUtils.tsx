// modules/channel_text_area/slate/SlateUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function arg0() {
        _fun54346: for (var _fun54346_ip = 0;;) switch (_fun54346_ip) {
            case 0:
                var3 = arg0;
                var0 = '';
                if (!(var0 === var3)) {
                    _fun54346_ip = 20;
                    continue _fun54346
                }
            case 11:
                var0 = _closure1_slot0;
                _fun54346_ip = 51;
                continue _fun54346;
            case 20:
                var2 = var3.split;
                var1 = '\n';
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = {};
                    var1 = 'line';
                    var0.type = var1;
                    var2 = {};
                    var1 = arg0;
                    var2.text = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.children = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 51:
                return var0;
        }
    };
    var _closure1_slot1 = var3;
    var8 = global;
    var6 = var8.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var5 = var8.Object;
    var4 = var5.freeze;
    var7 = var8.Object;
    var6 = var7.freeze;
    var0 = {};
    var9 = 'line';
    var0.type = var9;
    var10 = var8.Object;
    var9 = var10.freeze;
    var12 = var8.Object;
    var11 = var12.freeze;
    var8 = {};
    var13 = '';
    var8.text = var13;
    var11 = var11.bind(var12)(var8);
    var8 = new Array(1);
    var8[0] = var11;
    var8 = var9.bind(var10)(var8);
    var0.children = var8;
    var6 = var6.bind(var7)(var0);
    var0 = new Array(1);
    var0[0] = var6;
    var0 = var4.bind(var5)(var0);
    var _closure1_slot0 = var0;
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_text_area/slate/SlateUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var0 = {};
        var1 = '';
        var0.textValue = var1;
        var2 = {};
        var3 = 'line';
        var2.type = var3;
        var3 = {};
        var3.text = var1;
        var1 = new Array(1);
        var1[0] = var3;
        var2.children = var1;
        var1 = new Array(1);
        var1[0] = var2;
        var0.richValue = var1;
        return var0;
    };
    var2.createEmptyState = var4;
    var4 = function arg0() {
        var3 = arg0;
        var0 = {};
        var0.textValue = var3;
        var2 = _closure1_slot1;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        var0.richValue = var1;
        return var0;
    };
    var2.createState = var4;
    var2.toRichValue = var3;
    var1 = function arg0() {
        _fun54350: for (var _fun54350_ip = 0;;) switch (_fun54350_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.type;
                var2 = 'userMention';
                if (!(var2 !== var9)) {
                    _fun54350_ip = 311;
                    continue _fun54350
                }
            case 21:
                var3 = 'channelMention';
                if (!(var3 !== var9)) {
                    _fun54350_ip = 294;
                    continue _fun54350
                }
            case 32:
                var4 = 'soundboard';
                if (!(var4 !== var9)) {
                    _fun54350_ip = 266;
                    continue _fun54350
                }
            case 43:
                var5 = 'roleMention';
                if (!(var5 !== var9)) {
                    _fun54350_ip = 247;
                    continue _fun54350
                }
            case 54:
                var6 = 'textMention';
                if (!(var6 !== var9)) {
                    _fun54350_ip = 230;
                    continue _fun54350
                }
            case 67:
                var7 = 'emoji';
                if (!(var7 !== var9)) {
                    _fun54350_ip = 190;
                    continue _fun54350
                }
            case 75:
                var8 = 'customEmoji';
                if (!(var8 !== var9)) {
                    _fun54350_ip = 133;
                    continue _fun54350
                }
            case 83:
                var0 = 'testInlineVoid';
                if (!(var0 !== var9)) {
                    _fun54350_ip = 97;
                    continue _fun54350
                }
            case 93:
                var0 = null;
                return var0;
            case 97:
                var0 = global;
                var10 = var0.Error;
                var0 = var10.prototype;
                var9 = Object.create(var0, {
                    constructor: {
                        value: var10
                    }
                });
                var11 = 'Unable to convert test types';
                var12 = var9;
                var0 = new var12[var10](var11, var10);
                var0 = var0 instanceof Object ? var0 : var9;
                throw var0;
            case 133:
                var0 = {};
                var0.type = var8;
                var8 = var1.emoji;
                var8 = var8.emojiId;
                var0.emojiId = var8;
                var8 = var1.emoji;
                var8 = var8.name;
                var0.name = var8;
                var8 = var1.emoji;
                var8 = var8.animated;
                var0.animated = var8;
                return var0;
            case 190:
                var0 = {};
                var0.type = var7;
                var7 = var1.emoji;
                var7 = var7.name;
                var0.name = var7;
                var7 = var1.emoji;
                var7 = var7.surrogate;
                var0.surrogate = var7;
                return var0;
            case 230:
                var0 = {};
                var0.type = var6;
                var6 = var1.name;
                var0.text = var6;
                return var0;
            case 247:
                var0 = {};
                var0.type = var5;
                var5 = var1.roleId;
                var0.roleId = var5;
                return var0;
            case 266:
                var0 = {};
                var0.type = var4;
                var4 = var1.guildId;
                var0.guildId = var4;
                var4 = var1.soundId;
                var0.soundId = var4;
                return var0;
            case 294:
                var0 = {};
                var0.type = var3;
                var3 = var1.channelId;
                var0.channelId = var3;
                return var0;
            case 311:
                var0 = {};
                var0.type = var2;
                var1 = var1.userId;
                var0.userId = var1;
                return var0;
        }
    };
    var2.voidToOptionValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);