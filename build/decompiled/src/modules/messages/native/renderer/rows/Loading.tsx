// modules/messages/native/renderer/rows/Loading.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
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
    var6 = var3.LoadingType;
    var _closure1_slot0 = var6;
    var6 = var3.RowType;
    var _closure1_slot1 = var6;
    var3 = var3.SeparatorAction;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createNativeStyleProperties;
    var3 = {};
    var8 = 2;
    var10 = var5[var8];
    var10 = var9.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_LEGACY_BUTTON_SECONDARY_BACKGROUND_DEFAULT;
    var3.loadButtonBackgroundColor = var10;
    var10 = var5[var8];
    var10 = var9.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_LEGACY_BUTTON_SECONDARY_TEXT_DEFAULT;
    var3.loadButtonColor = var10;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.colors;
    var8 = var8.MOBILE_LEGACY_BUTTON_SECONDARY_TEXT_DEFAULT;
    var3.loadingColor = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/rows/Loading.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun92525: for (var _fun92525_ip = 0;;) switch (_fun92525_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.rowType;
                var2 = var0.changeType;
                var5 = var0.text;
                var1 = var0.isLoading;
                var7 = _closure1_slot3;
                var4 = undefined;
                var0 = arg1;
                var4 = var7.bind(var4)(var0);
                var0 = _closure1_slot0;
                var0 = var0.LOAD_BEFORE;
                if (!(var3 !== var0)) {
                    _fun92525_ip = 69;
                    continue _fun92525
                }
            case 57:
                var0 = _closure1_slot2;
                var7 = var0.LOAD_MORE_AFTER;
                _fun92525_ip = 79;
                continue _fun92525;
            case 69:
                var0 = _closure1_slot2;
                var7 = var0.LOAD_MORE_BEFORE;
            case 79:
                var0 = {};
                var6 = _closure1_slot1;
                var6 = var6.LOADING;
                var0.type = var6;
                var0.id = var3;
                var3 = {};
                var6 = {};
                var6.type = var7;
                var3.action = var6;
                var6 = var4.loadButtonBackgroundColor;
                var3.backgroundColor = var6;
                var6 = 4;
                var3.cornerRadius = var6;
                var3.text = var5;
                var0.button = var3;
                if (var1) {
                    _fun92525_ip = 149;
                    continue _fun92525
                }
            case 141:
                var3 = var4.loadButtonColor;
                _fun92525_ip = 155;
                continue _fun92525;
            case 149:
                var3 = var4.loadingColor;
            case 155:
                var0.color = var3;
                var0.changeType = var2;
                var0.isLoading = var1;
                return var0;
        }
    };
    var2.generateLoadingRowData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6479, 1297, 671, 2]);