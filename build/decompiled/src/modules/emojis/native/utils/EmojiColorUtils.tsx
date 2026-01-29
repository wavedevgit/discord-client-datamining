// modules/emojis/native/utils/EmojiColorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _getFromCacheOrFallback2, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot0;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun102028: for (var _fun102028_ip = 0;;) switch (_fun102028_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun102028_ip = 129;
                            continue _fun102028
                        }
                    case 10:
                        var7 = var1.cache;
                        var6 = var1.cacheKey;
                        var4 = var1.fallbackParam;
                        var8 = var1.fallbackFunc;
                        var9 = undefined;
                        var5 = undefined;
                        SaveGenerator(address = 42);
                    case 40:
                        return var9;
                    case 42:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun102028_ip = 126;
                            continue _fun102028
                        }
                    case 48:
                        var10 = var7;
                        var3 = var10.get;
                        var2 = var6;
                        var2 = var3.bind(var10)(var2);
                        var3 = null;
                        if (!(var3 == var2)) {
                            _fun102028_ip = 123;
                            continue _fun102028
                        }
                    case 70: // try_start_0
                        var4 = var8.bind(var9)(var4);
                        SaveGenerator(address = 79);
                    case 77:
                        return var4;
                    case 79:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun102028_ip = 115;
                            continue _fun102028
                        }
                    case 85:
                        var5 = var4;
                        if (!(var3 != var4)) {
                            _fun102028_ip = 112;
                            continue _fun102028
                        }
                    case 92:
                        var9 = var7;
                        var8 = var9.set;
                        var7 = var6;
                        var6 = var5;
                        var6 = var8.bind(var9)(var7, var6);
                    case 112: // try_end0
                        return var5;
                    case 115:
                        return var4;
                    case 118: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        return var3;
                    case 123:
                        return var2;
                    case 126:
                        return var1;
                    case 129:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 100;
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot2 = var3;
    var3 = function(arg0) { // Original name: _getEmojiCacheKey, environment: var1
        var0 = arg0;
        var4 = var0.name;
        var3 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '-';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun102032: for (var _fun102032_ip = 0;;) switch (_fun102032_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun102032_ip = 137;
                            continue _fun102032
                        }
                    case 13:
                        var7 = var1.emoji;
                        var5 = var1.emojiSource;
                        var4 = undefined;
                        SaveGenerator(address = 31);
                    case 29:
                        return var4;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun102032_ip = 134;
                            continue _fun102032
                        }
                    case 37:
                        var3 = {};
                        var6 = _closure1_slot2;
                        var3.cache = var6;
                        var6 = _closure1_slot3;
                        var6 = var6.bind(var4)(var7);
                        var3.cacheKey = var6;
                        var3.fallbackParam = var5;
                        var2 = _closure1_slot1;
                        var2 = var2.ImageManager;
                        var2 = var2.getDominantColors;
                        var3.fallbackFunc = var2;
                        var2 = function() { // Original name: _getFromCacheOrFallback, environment: var2
                            var0 = undefined;
                            var3 = _closure1_slot4;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var4)(var3);
                        SaveGenerator(address = 109);
                    case 107:
                        return var2;
                    case 109:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun102032_ip = 131;
                            continue _fun102032
                        }
                    case 115:
                        var4 = null;
                        var3 = var2;
                        if (!(var4 == var3)) {
                            _fun102032_ip = 128;
                            continue _fun102032
                        }
                    case 124:
                        var3 = new Array(0);
                    case 128:
                        return var3;
                    case 131:
                        return var2;
                    case 134:
                        return var1;
                    case 137:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emojis/native/utils/EmojiColorUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.getEmojiDominantColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 1386, 2]);