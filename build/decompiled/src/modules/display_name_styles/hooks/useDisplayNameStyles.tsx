// modules/display_name_styles/hooks/useDisplayNameStyles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useContext;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/hooks/useDisplayNameStyles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun36699: for (var _fun36699_ip = 0;;) switch (_fun36699_ip) {
            case 0:
                var1 = arguments[0];
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun36699_ip = 13;
                    continue _fun36699
                }
            case 11:
                var1 = {};
            case 13:
                var2 = var1.userId;
                var _closure2_slot0 = var2;
                var6 = var1.guildId;
                var _closure2_slot1 = var6;
                var7 = var1.pendingDisplayNameStyles;
                var _closure2_slot2 = var3;
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 3;
                var1 = var11[var1];
                var8 = var5.bind(var3)(var1);
                var4 = var8.useDisplayNameStylesEnabled;
                var1 = {};
                var9 = 'useDisplayNameStyles';
                var1.location = var9;
                var1 = var4.bind(var8)(var1);
                var10 = 4;
                var4 = var11[var10];
                var9 = var5.bind(var3)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    _fun36700: for (var _fun36700_ip = 0;;) switch (_fun36700_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun36700_ip = 31;
                                continue _fun36700
                            }
                        case 13:
                            var2 = _closure1_slot5;
                            var0 = var2.getCurrentUser;
                            var0 = var0.bind(var2)();
                            _fun36700_ip = 53;
                            continue _fun36700;
                        case 31:
                            var3 = _closure1_slot5;
                            var2 = var3.getUser;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 53:
                            return var0;
                    }
                };
                var4 = var8.bind(var9)(var5, var4);
                _closure2_slot2 = var4;
                var8 = _closure1_slot3;
                var9 = _closure1_slot1;
                var5 = 5;
                var5 = var11[var5];
                var5 = var9.bind(var3)(var5);
                var8 = var8.bind(var3)(var5);
                var5 = null;
                if (!(var5 == var6)) {
                    _fun36699_ip = 169;
                    continue _fun36699
                }
            case 162:
                _closure2_slot1 = var8;
                var6 = var8;
            case 169:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var9 = var9.bind(var3)(var8);
                var8 = var9.useStateFromStores;
                var10 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var10;
                var0 = function() { // Environment: var0
                    _fun36701: for (var _fun36701_ip = 0;;) switch (_fun36701_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun36701_ip = 63;
                                continue _fun36701
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun36701_ip = 63;
                                continue _fun36701
                            }
                        case 31:
                            var4 = _closure1_slot4;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot2;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 63:
                            return var0;
                    }
                };
                var2 = var8.bind(var9)(var2, var0);
                var0 = null;
                if (!var1) {
                    _fun36699_ip = 300;
                    continue _fun36699
                }
            case 219:
                if (!(var3 === var7)) {
                    _fun36699_ip = 262;
                    continue _fun36699
                }
            case 223:
                var8 = var5 == var2;
                var1 = undefined;
                if (var8) {
                    _fun36699_ip = 238;
                    continue _fun36699
                }
            case 232:
                var1 = var2.displayNameStyles;
            case 238:
                if (!(var5 == var1)) {
                    _fun36699_ip = 260;
                    continue _fun36699
                }
            case 242:
                var8 = var5 == var4;
                var2 = undefined;
                if (var8) {
                    _fun36699_ip = 257;
                    continue _fun36699
                }
            case 251:
                var2 = var4.displayNameStyles;
            case 257:
                var1 = var2;
            case 260:
                _fun36699_ip = 297;
                continue _fun36699;
            case 262:
                var2 = var7;
                if (!(var5 === var7)) {
                    _fun36699_ip = 294;
                    continue _fun36699
                }
            case 269:
                var2 = var7;
                if (!(var5 != var6)) {
                    _fun36699_ip = 294;
                    continue _fun36699
                }
            case 276:
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun36699_ip = 291;
                    continue _fun36699
                }
            case 285:
                var3 = var4.displayNameStyles;
            case 291:
                var2 = var3;
            case 294:
                var1 = var2;
            case 297:
                var0 = var1;
            case 300:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1681, 1621, 3984, 566, 3988, 2]);