// modules/emojis/native/utils/EmojiSourceUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun101692: for (var _fun101692_ip = 0;;) switch (_fun101692_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var8 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun101692_ip = 271;
                            continue _fun101692
                        }
                    case 16:
                        var5 = undefined;
                        if (!(var8 === var5)) {
                            _fun101692_ip = 25;
                            continue _fun101692
                        }
                    case 22:
                        var8 = 32;
                    case 25:
                        SaveGenerator(address = 29);
                    case 27:
                        return var5;
                    case 29:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun101692_ip = 268;
                            continue _fun101692
                        }
                    case 38:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var4 = 2;
                        var4 = var7[var4];
                        var10 = var6.bind(var5)(var4);
                        var9 = var10.getEmojiUrl;
                        var7 = {};
                        var12 = var3.name;
                        var4 = null;
                        var13 = var4 != var12;
                        var6 = '';
                        var11 = var6;
                        if (!var13) {
                            _fun101692_ip = 93;
                            continue _fun101692
                        }
                    case 90:
                        var11 = var12;
                    case 93:
                        var7.name = var11;
                        var11 = var3.id;
                        var7.id = var11;
                        var11 = false;
                        var7.animated = var11;
                        var7 = var9.bind(var10)(var7, var8);
                        var9 = var4 != var7;
                        var4 = var6;
                        if (!var9) {
                            _fun101692_ip = 132;
                            continue _fun101692
                        }
                    case 129:
                        var4 = var7;
                    case 132:
                        if (!(var6 === var4)) {
                            _fun101692_ip = 234;
                            continue _fun101692
                        }
                    case 136:
                        var6 = _closure1_slot3;
                        var7 = var6.ImageManager;
                        var6 = var7.getEmojiBase64;
                        var3 = var3.name;
                        var3 = var6.bind(var7)(var3, var8);
                        SaveGenerator(address = 167);
                    case 165:
                        return var3;
                    case 167:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun101692_ip = 231;
                            continue _fun101692
                        }
                    case 173:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var6 = 3;
                        var6 = var8[var6];
                        var8 = var7.bind(var5)(var6);
                        var7 = var8.makeSource;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var9 = var6.concat;
                        var6 = 'data:image/png;base64,';
                        var6 = var9.bind(var6)(var3);
                        var6 = var7.bind(var8)(var6);
                        return var6;
                    case 231:
                        return var3;
                    case 234:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 3;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.makeSource;
                        var2 = var2.bind(var3)(var4);
                        return var2;
                    case 268:
                        return var1;
                    case 271:
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emojis/native/utils/EmojiSourceUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.getEmojiSource = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 3110, 1417, 2]);