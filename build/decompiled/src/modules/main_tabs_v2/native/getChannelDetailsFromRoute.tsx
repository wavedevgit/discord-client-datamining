// modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun98737: for (var _fun98737_ip = 0;;) switch (_fun98737_ip) {
            case 0:
                var4 = arg0;
                var2 = arguments[1];
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun98737_ip = 14;
                    continue _fun98737
                }
            case 12:
                var2 = false;
            case 14:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 0;
                var1 = var1[var6];
                var5 = var5.bind(var3)(var1);
                var1 = var5.coerceChannelRoute;
                var1 = var1.bind(var5)(var4);
                var5 = null;
                if (!(var5 == var1)) {
                    _fun98737_ip = 173;
                    continue _fun98737
                }
            case 53:
                if (var2) {
                    _fun98737_ip = 70;
                    continue _fun98737
                }
            case 56:
                var2 = new Array(2);
                var2[0] = var3;
                var2[1] = var3;
                return var2;
            case 70:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var2 = var2.bind(var3)(var0);
                var0 = var2.coerceGuildsRoute;
                var4 = var0.bind(var2)(var4);
                if (!(var5 == var4)) {
                    _fun98737_ip = 116;
                    continue _fun98737
                }
            case 102:
                var0 = new Array(2);
                var0[0] = var3;
                var0[1] = var3;
                _fun98737_ip = 171;
                continue _fun98737;
            case 116:
                var2 = var4.params;
                var7 = var5 == var2;
                var6 = undefined;
                if (var7) {
                    _fun98737_ip = 136;
                    continue _fun98737
                }
            case 131:
                var6 = var2.guildId;
            case 136:
                var2 = new Array(2);
                var2[0] = var6;
                var4 = var4.params;
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun98737_ip = 164;
                    continue _fun98737
                }
            case 159:
                var3 = var4.channelId;
            case 164:
                var2[1] = var3;
                var0 = var2;
            case 171:
                return var0;
            case 173:
                var0 = var1.params;
                var2 = var0.guildId;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = var1.params;
                var1 = var1.channelId;
                var0[1] = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3921, 2]);