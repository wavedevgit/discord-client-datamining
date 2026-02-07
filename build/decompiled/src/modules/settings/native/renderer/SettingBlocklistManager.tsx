// modules/settings/native/renderer/SettingBlocklistManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun105034: for (var _fun105034_ip = 0;;) switch (_fun105034_ip) {
            case 0:
                var4 = _closure1_slot4;
                var3 = var4.getField;
                var0 = 'blocklist';
                var13 = var3.bind(var4)(var0);
                var12 = new Array(0);
                var _closure2_slot0 = var12;
                var11 = new Array(0);
                var _closure2_slot1 = var11;
                var0 = global;
                var4 = var0.Object;
                var3 = var4.entries;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var0 = var6[var0];
                var10 = undefined;
                var0 = var5.bind(var10)(var0);
                var0 = var0.SETTING_RENDERER_CONFIG;
                var9 = var3.bind(var4)(var0);
                var0 = var9.length;
                var8 = 0;
                var3 = var8 < var0;
                var7 = false;
                var6 = 2;
                var5 = 1;
                var0 = null;
                var4 = 0;
                if (!var3) {
                    _fun105034_ip = 227;
                    continue _fun105034
                }
            case 113:
                var14 = var9[var4];
                var3 = _closure1_slot2;
                var3 = var3.bind(var10)(var14, var6);
                var14 = var3[var8];
                var3 = var3[var5];
                var15 = var3.usePredicate;
                var16 = var0 == var15;
                var3 = undefined;
                if (var16) {
                    _fun105034_ip = 154;
                    continue _fun105034
                }
            case 150:
                var3 = var15.bind(var10)();
            case 154:
                var15 = var7 === var3;
                if (!var15) {
                    _fun105034_ip = 186;
                    continue _fun105034
                }
            case 161:
                var3 = var13.has;
                var3 = var3.bind(var13)(var14);
                if (var3) {
                    _fun105034_ip = 186;
                    continue _fun105034
                }
            case 174:
                var3 = var12.push;
                var3 = var3.bind(var12)(var14);
                _fun105034_ip = 215;
                continue _fun105034;
            case 186:
                var3 = !var15;
                if (var15) {
                    _fun105034_ip = 202;
                    continue _fun105034
                }
            case 192:
                var15 = var13.has;
                var3 = var15.bind(var13)(var14);
            case 202:
                if (!var3) {
                    _fun105034_ip = 215;
                    continue _fun105034
                }
            case 205:
                var3 = var11.push;
                var3 = var3.bind(var11)(var14);
            case 215:
                var4 = var4 + 1;
                var3 = var9.length;
                if (var4 < var3) {
                    _fun105034_ip = 113;
                    continue _fun105034
                }
            case 227:
                var3 = _closure1_slot3;
                var2 = var3.useEffect;
                var1 = function() { // Environment: var1
                    _fun105035: for (var _fun105035_ip = 0;;) switch (_fun105035_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var2 = var2.length;
                            var3 = 0;
                            if (!(!(var2 > var3))) {
                                _fun105035_ip = 33;
                                continue _fun105035
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var2 = var2.length;
                            if (!(var2 > var3)) {
                                _fun105035_ip = 147;
                                continue _fun105035
                            }
                        case 33:
                            var2 = _closure1_slot4;
                            var4 = var2.getField;
                            var3 = 'blocklist';
                            var7 = var4.bind(var2)(var3);
                            var3 = global;
                            var3 = var3.Set;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var8 = var4;
                            var3 = new var8[var3](var7, var6);
                            var3 = var3 instanceof Object ? var3 : var4;
                            var _closure3_slot0 = var3;
                            var6 = _closure2_slot0;
                            var5 = var6.forEach;
                            var4 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.add;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var4 = var5.bind(var6)(var4);
                            var4 = _closure2_slot1;
                            var1 = var4.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.delete;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var4)(var0);
                            var1 = var2.setState;
                            var0 = {};
                            var0.blocklist = var3;
                            var0 = var1.bind(var2)(var0);
                        case 147:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/settings/native/renderer/SettingBlocklistManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 10263, 10266, 2]);