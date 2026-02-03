// modules/messages/ApplicationCommands.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = /<\\/([ ^ \s] + ): (\d + ) > ( ? : \s ? (.*)) ? /;
    var _closure1_slot1 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/ApplicationCommands.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55874: for (var _fun55874_ip = 0;;) switch (_fun55874_ip) {
            case 0:
                var3 = _closure1_slot1;
                var2 = var3.exec;
                var0 = arg0;
                var4 = var2.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var4)) {
                    _fun55874_ip = 188;
                    continue _fun55874
                }
            case 30:
                var3 = _closure1_slot0;
                var2 = undefined;
                var1 = 4;
                var2 = var3.bind(var2)(var4, var1);
                var1 = 0;
                var1 = var2[var1];
                var1 = 1;
                var6 = var2[var1];
                var1 = 2;
                var3 = var2[var1];
                var1 = 3;
                var5 = var2[var1];
                var2 = var0 == var6;
                var1 = null;
                if (var2) {
                    _fun55874_ip = 186;
                    continue _fun55874
                }
            case 81:
                var2 = var0 == var3;
                var1 = null;
                if (var2) {
                    _fun55874_ip = 186;
                    continue _fun55874
                }
            case 90:
                var2 = {};
                var7 = var0 != var5;
                var4 = '';
                var9 = var4;
                if (!var7) {
                    _fun55874_ip = 130;
                    continue _fun55874
                }
            case 106:
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = ' ';
                var9 = var8.bind(var7)(var5);
            case 130:
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = '/';
                var7 = var8.bind(var7)(var6, var9);
                var2.content = var7;
                var2.name = var6;
                var2.id = var3;
                var3 = var0 != var5;
                if (!var3) {
                    _fun55874_ip = 176;
                    continue _fun55874
                }
            case 172:
                var3 = var4 !== var5;
            case 176:
                var2.hasOptions = var3;
                var1 = var2;
            case 186:
                return var1;
            case 188:
                return var0;
        }
    };
    var2.getApplicationCommand = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 2]);