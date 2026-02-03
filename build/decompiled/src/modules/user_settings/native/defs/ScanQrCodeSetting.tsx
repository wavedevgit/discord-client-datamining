// modules/user_settings/native/defs/ScanQrCodeSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var3 = var3.bind(var0)(var1);
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativePermissionTypes;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var10 = var4.bind(var0)(var1);
    var8 = var10.debounce;
    var1 = function*() { // Environment: var9
        var0 = function*() { // Original name: ?anon_0_, environment: var0
            _fun82819: for (var _fun82819_ip = 0;;) switch (_fun82819_ip) {
                case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun82819_ip = 146;
                        continue _fun82819
                    }
                case 10: // try_start_0
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var1 = var3[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.requestPermission;
                    var1 = _closure1_slot3;
                    var1 = var1.CAMERA;
                    var1 = var2.bind(var3)(var1);
                    SaveGenerator(address = 60);
                case 58:
                    return var1;
                case 60:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                    if (var2) {
                        _fun82819_ip = 136;
                        continue _fun82819
                    }
                case 66:
                    if (!var1) {
                        _fun82819_ip = 134;
                        continue _fun82819
                    }
                case 69:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 4;
                    var3 = var2[var3];
                    var4 = var4.bind(var7)(var3);
                    var3 = var4.pushLazy;
                    var6 = _closure1_slot0;
                    var5 = 6;
                    var5 = var2[var5];
                    var6 = var6.bind(var7)(var5);
                    var5 = 5;
                    var5 = var2[var5];
                    var2 = var2.paths;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                case 134: // try_end0
                    _fun82819_ip = 141;
                    continue _fun82819;
                case 136:
                    return var1;
                case 139: // catch_target0
                    CatchBlockStart(arg_register = 1);
                case 141:
                    var1 = undefined;
                    return var1;
                case 146:
                    return var0;
            }
        };
        return var0;
    };
    var6 = var3.bind(var0)(var1);
    var3 = 1000;
    var1 = {
        'leading': true,
        'trailing': false
    };
    var8 = var8.bind(var10)(var6, var3, var1);
    var1 = 7;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.RC0kJz;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var9 = null;
    var1.parent = var9;
    var9 = 9;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.QrCodeIcon;
    var1.IconComponent = var9;
    var1.onPress = var8;
    var1.withArrow = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ScanQrCodeSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4014, 22, 4015, 4561, 10503, 1307, 8996, 1234, 10513, 2]);