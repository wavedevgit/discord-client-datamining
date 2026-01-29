// modules/frames/FramesActionCreators.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var4;
    var0 = function() { // Original name: _launchFrameOnNative, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun63721: for (var _fun63721_ip = 0;;) switch (_fun63721_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun63721_ip = 103;
                            continue _fun63721
                        }
                    case 7:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.launchFrame;
                        var1 = arg0;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 50);
                    case 48:
                        return var1;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun63721_ip = 100;
                            continue _fun63721
                        }
                    case 56:
                        var5 = _closure1_slot4;
                        var4 = var5.isCurrentClientInVoiceChannel;
                        var4 = var4.bind(var5)();
                        if (!var4) {
                            _fun63721_ip = 97;
                            continue _fun63721
                        }
                    case 73:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 2;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var3 = var3.bind(var2)();
                    case 97:
                        return var2;
                    case 100:
                        return var1;
                    case 103:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var5 = 3;
    var5 = var4[var5];
    var10 = var6.bind(var0)(var5);
    var11 = var1;
    var5 = copyDataProperties(var11, var10);
    var5 = function() { // Original name: launchFrameOnNative, environment: var3
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var3 = 'launchFrame';
    var1[var3] = var5;
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/FramesActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3480, 7899, 7900, 2]);