// modules/app_launcher/native/base_components/AppLauncherBackButton.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/base_components/AppLauncherBackButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107855: for (var _fun107855_ip = 0;;) switch (_fun107855_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.onPress;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 2;
                var0 = var6[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = var2.useNavigation;
                var2 = var0.bind(var2)();
                var0 = var2.canGoBack;
                var4 = var0.bind(var2)();
                var2 = _closure1_slot3;
                var0 = 3;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.IconButton;
                var0 = {
                    'size': 'sm',
                    'variant': 'secondary-overlay'
                };
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                if (var4) {
                    _fun107855_ip = 109;
                    continue _fun107855
                }
            case 100:
                var6 = 5;
                var6 = var10[var6];
                _fun107855_ip = 116;
                continue _fun107855;
            case 109:
                var9 = 4;
                var6 = var10[var9];
            case 116:
                var6 = var8.bind(var3)(var6);
                var0.icon = var6;
                var0.onPress = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var9 = 6;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                if (var4) {
                    _fun107855_ip = 192;
                    continue _fun107855
                }
            case 184:
                var4 = var7.cpT0Cq;
                _fun107855_ip = 198;
                continue _fun107855;
            case 192:
                var4 = var7["13/7kX"];
            case 198:
                var4 = var5.bind(var6)(var4);
                var0.accessibilityLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    var1 = 32;
    var2.BACK_BUTTON_SIZE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1470, 7503, 4702, 4728, 1234, 2]);