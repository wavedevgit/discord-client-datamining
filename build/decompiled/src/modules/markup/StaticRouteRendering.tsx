// modules/markup/StaticRouteRendering.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/StaticRouteRendering.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun44095: for (var _fun44095_ip = 0;;) switch (_fun44095_ip) {
            case 0:
                var1 = arg0;
                var0 = 'home';
                if (!(var0 !== var1)) {
                    _fun44095_ip = 250;
                    continue _fun44095
                }
            case 14:
                var0 = 'guide';
                if (!(var0 !== var1)) {
                    _fun44095_ip = 250;
                    continue _fun44095
                }
            case 27:
                var0 = 'browse';
                if (!(var0 !== var1)) {
                    _fun44095_ip = 188;
                    continue _fun44095
                }
            case 40:
                var0 = 'customize';
                if (!(var0 !== var1)) {
                    _fun44095_ip = 126;
                    continue _fun44095
                }
            case 50:
                var0 = 'linked-roles';
                if (!(var0 !== var1)) {
                    _fun44095_ip = 64;
                    continue _fun44095
                }
            case 60:
                var0 = null;
                return var0;
            case 64:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.ghtnss;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 126:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.h9mGOP;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 188:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.et6wav;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 250:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.VbpLyU;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.staticRouteToTranslation = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        _fun44096: for (var _fun44096_ip = 0;;) switch (_fun44096_ip) {
            case 0:
                var4 = arg2;
                var1 = 'linked-roles';
                var0 = arg0;
                if (!(var1 !== var0)) {
                    _fun44096_ip = 20;
                    continue _fun44096
                }
            case 16:
                var0 = null;
                return var0;
            case 20:
                var0 = null;
                if (!(var0 != var4)) {
                    _fun44096_ip = 91;
                    continue _fun44096
                }
            case 26:
                var3 = _closure1_slot2;
                var2 = var3.getRole;
                var1 = arg1;
                var2 = var2.bind(var3)(var4, var1);
                var3 = var0 == var2;
                var1 = null;
                if (var3) {
                    _fun44096_ip = 89;
                    continue _fun44096
                }
            case 57:
                var4 = var2.tags;
                var5 = var0 == var4;
                var3 = undefined;
                if (var5) {
                    _fun44096_ip = 78;
                    continue _fun44096
                }
            case 72:
                var3 = var4.guild_connections;
            case 78:
                var1 = null;
                if (!(var1 === var3)) {
                    _fun44096_ip = 89;
                    continue _fun44096
                }
            case 84:
                var1 = var2.name;
            case 89:
                return var1;
            case 91:
                return var0;
        }
    };
    var2.staticRouteToItemString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1665, 1234, 2]);