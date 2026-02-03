// utils/native/ClientInfoUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/ClientInfoUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun17732: for (var _fun17732_ip = 0;;) switch (_fun17732_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 1;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun17732_ip = 60;
                    continue _fun17732
                }
            case 38:
                var1 = _closure1_slot3;
                var3 = var1.InfoDictionaryManager;
                var1 = var3.getConstants;
                var1 = var1.bind(var3)();
                return var1;
            case 60:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 2;
                var1 = var1[var3];
                var4 = var4.bind(var2)(var1);
                var1 = null;
                if (!(var1 !== var4)) {
                    _fun17732_ip = 115;
                    continue _fun17732
                }
            case 86:
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var1 = var1.bind(var2)(var0);
                var0 = var1.getConstants;
                var0 = var0.bind(var1)();
                return var0;
            case 115:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'Turbo module RTNClientInfoManager is undefined for Android';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.getConstants = var3;
    var1 = function() {
        _fun17733: for (var _fun17733_ip = 0;;) switch (_fun17733_ip) {
            case 0:
                var1 = ['0', '123456', '1234567890'];
                var0 = var1.includes;
                var4 = '5112';
                var1 = var0.bind(var1)(var4);
                var0 = var4;
                if (!var1) {
                    _fun17733_ip = 61;
                    continue _fun17733
                }
            case 32:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'dev (';
                var1 = ')';
                var0 = var3.bind(var2)(var4, var1);
            case 61:
                return var0;
        }
    };
    var2.getBuildNumberLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 656, 2]);