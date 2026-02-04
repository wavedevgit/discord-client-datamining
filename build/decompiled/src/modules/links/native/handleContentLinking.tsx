// modules/links/native/handleContentLinking.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.addPostConnectionCallback;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/links/native/handleContentLinking.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var _closure2_slot0 = var2;
        var2 = var0.channelId;
        var _closure2_slot1 = var2;
        var2 = var0.navigationSettings;
        var _closure2_slot2 = var2;
        var2 = var0.messageId;
        var _closure2_slot3 = var2;
        var0 = var0.summaryId;
        var _closure2_slot4 = var0;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var2);
        var2 = var4.popAll;
        var2 = var2.bind(var4)();
        var2 = _closure1_slot4;
        var3 = _closure1_slot3;
        var1 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun73709: for (var _fun73709_ip = 0;;) switch (_fun73709_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun73709_ip = 273;
                            continue _fun73709
                        }
                    case 10:
                        var2 = _closure2_slot2;
                        var1 = var2.safe;
                        var4 = var2.navigationReplace;
                        var2 = undefined;
                        var7 = var2 === var4;
                        if (var7) {
                            _fun73709_ip = 41;
                            continue _fun73709
                        }
                    case 38:
                        var7 = var4;
                    case 41:
                        if (var1) {
                            _fun73709_ip = 124;
                            continue _fun73709
                        }
                    case 47:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 5;
                        var1 = var6[var1];
                        var8 = var5.bind(var2)(var1);
                        var6 = var8.transitionTo;
                        var11 = _closure1_slot5;
                        var10 = var11.CHANNEL;
                        var9 = _closure2_slot0;
                        var5 = _closure2_slot1;
                        var1 = _closure2_slot3;
                        var5 = var10.bind(var11)(var9, var5, var1);
                        var1 = {};
                        var1.navigationReplace = var7;
                        var9 = true;
                        var1.openChannel = var9;
                        var1 = var6.bind(var8)(var5, var1);
                        _fun73709_ip = 203;
                        continue _fun73709;
                    case 124:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 4;
                        var1 = var6[var1];
                        var6 = var5.bind(var2)(var1);
                        var10 = _closure1_slot5;
                        var9 = var10.CHANNEL;
                        var8 = _closure2_slot0;
                        var5 = _closure2_slot1;
                        var1 = _closure2_slot3;
                        var5 = var9.bind(var10)(var8, var5, var1);
                        var1 = {};
                        var1.navigationReplace = var7;
                        var7 = true;
                        var1.openChannel = var7;
                        var1 = var6.bind(var2)(var5, var1);
                        SaveGenerator(address = 197);
                    case 195:
                        return var1;
                    case 197:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun73709_ip = 270;
                            continue _fun73709
                        }
                    case 203:
                        var5 = _closure2_slot1;
                        var7 = null;
                        var5 = var7 != var5;
                        if (!var5) {
                            _fun73709_ip = 224;
                            continue _fun73709
                        }
                    case 216:
                        var6 = _closure2_slot4;
                        var5 = var7 != var6;
                    case 224:
                        if (!var5) {
                            _fun73709_ip = 267;
                            continue _fun73709
                        }
                    case 227:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 6;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.setSelectedSummary;
                        var4 = _closure2_slot1;
                        var3 = _closure2_slot4;
                        var3 = var5.bind(var6)(var4, var3);
                    case 267:
                        return var2;
                    case 270:
                        return var1;
                    case 273:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var0)(var1);
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3472, 660, 4561, 5617, 1220, 9259, 2]);