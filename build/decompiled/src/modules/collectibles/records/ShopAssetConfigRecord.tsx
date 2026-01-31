// modules/collectibles/records/ShopAssetConfigRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var4 = function arg0() {
            var1 = arg0;
            var2 = this;
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = var1.desktop_max_height;
            var2.desktopMaxHeight = var3;
            var3 = var1.mobile_max_height;
            var2.mobileMaxHeight = var3;
            var3 = var1.responsive;
            var2.responsive = var3;
            var1 = var1.background_style;
            var2.backgroundStyle = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var0 = {};
        var2 = 'toDesktopStyles';
        var0.key = var2;
        var2 = function() {
            _fun42072: for (var _fun42072_ip = 0;;) switch (_fun42072_ip) {
                case 0:
                    var0 = this;
                    var1 = {};
                    var2 = var0.desktopMaxHeight;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun42072_ip = 29;
                        continue _fun42072
                    }
                case 17:
                    var2 = var0.desktopMaxHeight;
                    var1.maxHeight = var2;
                case 29:
                    var2 = var0.backgroundStyle;
                    if (!(var3 != var2)) {
                        _fun42072_ip = 51;
                        continue _fun42072
                    }
                case 39:
                    var0 = var0.backgroundStyle;
                    var1.background = var0;
                case 51:
                    var0 = global;
                    var2 = var0.Object;
                    var0 = var2.keys;
                    var0 = var0.bind(var2)(var1);
                    var2 = var0.length;
                    var0 = 0;
                    var2 = var2 > var0;
                    var0 = undefined;
                    if (!var2) {
                        _fun42072_ip = 88;
                        continue _fun42072
                    }
                case 85:
                    var0 = var1;
                case 88:
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(2);
        var2[0] = var0;
        var0 = {};
        var5 = 'toMobileStyles';
        var0.key = var5;
        var5 = function() {
            _fun42073: for (var _fun42073_ip = 0;;) switch (_fun42073_ip) {
                case 0:
                    var0 = this;
                    var1 = {};
                    var2 = var0.mobileMaxHeight;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun42073_ip = 29;
                        continue _fun42073
                    }
                case 17:
                    var2 = var0.mobileMaxHeight;
                    var1.maxHeight = var2;
                case 29:
                    var2 = var0.backgroundStyle;
                    if (!(var3 != var2)) {
                        _fun42073_ip = 51;
                        continue _fun42073
                    }
                case 39:
                    var0 = var0.backgroundStyle;
                    var1.background = var0;
                case 51:
                    var0 = global;
                    var2 = var0.Object;
                    var0 = var2.keys;
                    var0 = var0.bind(var2)(var1);
                    var2 = var0.length;
                    var0 = 0;
                    var2 = var2 > var0;
                    var0 = undefined;
                    if (!var2) {
                        _fun42073_ip = 88;
                        continue _fun42073
                    }
                case 85:
                    var0 = var1;
                case 88:
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'fromServer';
        var0.key = var5;
        var1 = function arg0() {
            var2 = _closure2_slot0;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = arg0;
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/ShopAssetConfigRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AssetDisplayConfigRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);