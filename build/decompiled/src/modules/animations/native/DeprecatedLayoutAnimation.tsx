// modules/animations/native/DeprecatedLayoutAnimation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var3 = function arg0() {
        _fun44552: for (var _fun44552_ip = 0;;) switch (_fun44552_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                if (var1) {
                    _fun44552_ip = 51;
                    continue _fun44552
                }
            case 19:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.isAndroid;
                var1 = var3.bind(var4)();
            case 51:
                if (var1) {
                    _fun44552_ip = 91;
                    continue _fun44552
                }
            case 54:
                var1 = null;
                if (!(var1 == var2)) {
                    _fun44552_ip = 76;
                    continue _fun44552
                }
            case 60:
                var3 = _closure1_slot3;
                var1 = var3.easeInEaseOut;
                var1 = var1.bind(var3)();
                _fun44552_ip = 91;
                continue _fun44552;
            case 76:
                var1 = _closure1_slot3;
                var0 = var1.configureNext;
                var0 = var0.bind(var1)(var2);
            case 91:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var8[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var5 = var4.Keyboard;
    var _closure1_slot2 = var5;
    var11 = var4.LayoutAnimation;
    var _closure1_slot3 = var11;
    var4 = 1;
    var5 = var8[var4];
    var4 = arg2;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot4 = var4;
    var5 = var11.create;
    var10 = 150;
    var9 = 'easeInEaseOut';
    var4 = 'opacity';
    var5 = var5.bind(var11)(var10, var9, var4);
    var6 = var11.create;
    var4 = 'scaleXY';
    var4 = var6.bind(var11)(var10, var9, var4);
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/animations/native/DeprecatedLayoutAnimation.tsx';
    var6 = var7.bind(var8)(var6);
    var2.CONFIG_GUILD_FOLDER_OPACITY = var5;
    var2.CONFIG_GUILD_FOLDER_SCALEXY = var4;
    var2.DeprecatedLayoutAnimation = var3;
    var1 = function arg0() {
        _fun44553: for (var _fun44553_ip = 0;;) switch (_fun44553_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun44553_ip = 14;
                    continue _fun44553
                }
            case 12:
                var1 = false;
            case 14:
                if (!var1) {
                    _fun44553_ip = 76;
                    continue _fun44553
                }
            case 17:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun44553_ip = 76;
                    continue _fun44553
                }
            case 53:
                var3 = _closure1_slot2;
                var2 = var3.scheduleLayoutAnimation;
                var1 = {};
                var1.duration = var5;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 76:
                var2 = _closure1_slot5;
                var1 = {};
                var1.duration = var5;
                var3 = {};
                var3.duration = var5;
                var4 = _closure1_slot3;
                var4 = var4.Types;
                var4 = var4.keyboard;
                var3.type = var4;
                var1.update = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.DeprecatedLayoutAnimationKeyboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1298, 478, 2]);