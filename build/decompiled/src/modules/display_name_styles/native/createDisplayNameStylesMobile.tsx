// modules/display_name_styles/native/createDisplayNameStylesMobile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/native/createDisplayNameStylesMobile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun92525: for (var _fun92525_ip = 0;;) switch (_fun92525_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var3 = var5.isDisplayNameStylesMobileChatEnabled;
                var2 = {};
                var6 = 'createDisplayNameStylesMobile';
                var2.location = var6;
                var2 = var3.bind(var5)(var2);
                if (!var2) {
                    _fun92525_ip = 65;
                    continue _fun92525
                }
            case 55:
                var3 = _closure1_slot2;
                var2 = var3.displayNameStylesEnabled;
            case 65:
                var3 = _closure1_slot3;
                var1 = var3.getCurrentUser;
                var1 = var1.bind(var3)();
                var5 = var7.displayNameStyles;
                var3 = null;
                var6 = var3 != var1;
                if (!var6) {
                    _fun92525_ip = 107;
                    continue _fun92525
                }
            case 93:
                var8 = var1.id;
                var7 = var7.id;
                var6 = var8 === var7;
            case 107:
                if (!var6) {
                    _fun92525_ip = 116;
                    continue _fun92525
                }
            case 110:
                var5 = var1.displayNameStyles;
            case 116:
                var6 = var3 == var4;
                var1 = undefined;
                if (var6) {
                    _fun92525_ip = 146;
                    continue _fun92525
                }
            case 125:
                var4 = var4.displayNameStyles;
                var6 = var3 == var4;
                var1 = undefined;
                if (var6) {
                    _fun92525_ip = 146;
                    continue _fun92525
                }
            case 140:
                var1 = var4.fontId;
            case 146:
                if (!(var3 == var1)) {
                    _fun92525_ip = 168;
                    continue _fun92525
                }
            case 150:
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun92525_ip = 165;
                    continue _fun92525
                }
            case 159:
                var4 = var5.fontId;
            case 165:
                var1 = var4;
            case 168:
                if (!(var3 != var1)) {
                    _fun92525_ip = 175;
                    continue _fun92525
                }
            case 172:
                if (var2) {
                    _fun92525_ip = 177;
                    continue _fun92525
                }
            case 175:
                return var0;
            case 177:
                var0 = {};
                var0.fontId = var1;
                return var0;
        }
    };
    var2.createDisplayNameStylesMobile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 1613, 3948, 2]);