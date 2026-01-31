// modules/chat/native/useChatWidth.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/useChatWidth.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useChatWidth, environment: var1
        _fun77131: for (var _fun77131_ip = 0;;) switch (_fun77131_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 0;
                var2 = var7[var1];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var2 = var2.bind(var6)();
                var4 = var2.isChatLockedOpen;
                var2 = 1;
                var2 = var7[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.bind(var6)();
                var3 = var2.width;
                var2 = _closure1_slot0;
                var0 = 2;
                var0 = var7[var0];
                var2 = var2.bind(var6)(var0);
                var0 = var2.useDrawerWidth;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var5)) {
                    _fun77131_ip = 97;
                    continue _fun77131
                }
            case 90:
                var0 = var3;
                if (!(var1 === var5)) {
                    _fun77131_ip = 110;
                    continue _fun77131
                }
            case 97:
                var1 = var3;
                if (!var4) {
                    _fun77131_ip = 107;
                    continue _fun77131
                }
            case 103:
                var1 = var3 - var2;
            case 107:
                var0 = var1;
            case 110:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0) { // Original name: getChatWidth, environment: var1
        _fun77132: for (var _fun77132_ip = 0;;) switch (_fun77132_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 0;
                var0 = var7[var1];
                var5 = undefined;
                var4 = var3.bind(var5)(var0);
                var0 = var4.getChatLayout;
                var0 = var0.bind(var4)();
                var4 = var0.isChatLockedOpen;
                var0 = 1;
                var0 = var7[var0];
                var3 = var3.bind(var5)(var0);
                var0 = var3.getAppContainerDimensions;
                var0 = var0.bind(var3)();
                var3 = var0.width;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun77132_ip = 83;
                    continue _fun77132
                }
            case 76:
                var0 = var3;
                if (!(var1 === var6)) {
                    _fun77132_ip = 126;
                    continue _fun77132
                }
            case 83:
                var1 = var3;
                if (!var4) {
                    _fun77132_ip = 123;
                    continue _fun77132
                }
            case 89:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 2;
                var2 = var6[var2];
                var4 = var4.bind(var5)(var2);
                var2 = var4.getDrawerWidth;
                var2 = var2.bind(var4)();
                var1 = var3 - var2;
            case 123:
                var0 = var1;
            case 126:
                return var0;
        }
    };
    var2.getChatWidth = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3881, 3883, 9769, 2]);