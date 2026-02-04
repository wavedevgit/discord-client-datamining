// modules/launchpad/native/shared/renderChannelWrapper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun110092: for (var _fun110092_ip = 0;;) switch (_fun110092_ip) {
            case 0:
                var5 = arg1;
                var1 = new Array(3);
                var0 = {
                    'flex': 1,
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'position': 'relative'
                };
                var1[0] = var0;
                var3 = {};
                var0 = _closure1_slot4;
                var4 = var0.layout;
                var0 = arg0;
                if (var0) {
                    _fun110092_ip = 101;
                    continue _fun110092
                }
            case 46:
                var0 = var4.margin;
                var6 = var0.marginVertical;
                var0 = 2;
                var0 = var0 * var6;
                var0 = var5 - var0;
                var3.minHeight = var0;
                var1[1] = var3;
                var0 = _closure1_slot4;
                var0 = var0.container;
                var0 = var0.padding;
                var1[2] = var0;
                var0 = var1;
                _fun110092_ip = 155;
                continue _fun110092;
            case 101:
                var4 = var4.marginThread;
                var6 = var4.marginVertical;
                var4 = 2;
                var4 = var4 * var6;
                var4 = var5 - var4;
                var3.minHeight = var4;
                var1[1] = var3;
                var2 = _closure1_slot4;
                var2 = var2.container;
                var2 = var2.paddingThread;
                var1[2] = var2;
                var0 = var1;
            case 155:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.bind(var0)();
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/shared/renderChannelWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun110093: for (var _fun110093_ip = 0;;) switch (_fun110093_ip) {
            case 0:
                var0 = arg1;
                var9 = var0.channel;
                var1 = var0.fontScale;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 4;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var6 = var0.bind(var3)(var1);
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = _closure1_slot5;
                var4 = null;
                var8 = var4 == var9;
                var7 = undefined;
                if (var8) {
                    _fun110093_ip = 79;
                    continue _fun110093
                }
            case 69:
                var8 = var9.isThread;
                var7 = var8.bind(var9)();
            case 79:
                var4 = var4 != var7;
                if (!var4) {
                    _fun110093_ip = 89;
                    continue _fun110093
                }
            case 86:
                var4 = var7;
            case 89:
                var4 = var5.bind(var3)(var4, var6);
                var0.style = var4;
                var4 = arg0;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 14166, 14169, 2]);