// modules/emoji_terms/EmojiTerms.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var1 = 2;
    var1 = var5[var1];
    var7 = var6.bind(var0)(var1);
    var1 = var7.prototype;
    var6 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var11 = function arg0() {
        _fun44005: for (var _fun44005_ip = 0;;) switch (_fun44005_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.emojiTermsImporter;
                var0 = arg0;
                var1 = var1[var0];
                if (!(var2 === var1)) {
                    _fun44005_ip = 65;
                    continue _fun44005
                }
            case 42:
                var0 = global;
                var4 = var0.Promise;
                var3 = var4.resolve;
                var0 = {};
                var0 = var3.bind(var4)(var0);
                _fun44005_ip = 86;
                continue _fun44005;
            case 65:
                var3 = var1.bind(var2)();
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.default;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 86:
                return var0;
        }
    };
    var12 = var6;
    var1 = new var12[var7](var11, var10);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot2 = var1;
    var1 = {};
    var6 = function arg0() {
        var2 = _closure1_slot2;
        var1 = var2.setParams;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.setEmojiLocale = var6;
    var3 = function arg0() {
        _fun44008: for (var _fun44008_ip = 0;;) switch (_fun44008_ip) {
            case 0:
                var1 = _closure1_slot2;
                var0 = var1.get;
                var2 = var0.bind(var1)();
                var0 = undefined;
                if (!(var0 === var2)) {
                    _fun44008_ip = 28;
                    continue _fun44008
                }
            case 22:
                var0 = new Array(0);
                _fun44008_ip = 35;
                continue _fun44008;
            case 28:
                var1 = arg0;
                var0 = var2[var1];
            case 35:
                return var0;
        }
    };
    var1.getTermsForEmoji = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emoji_terms/EmojiTerms.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 4748, 4749, 2]);