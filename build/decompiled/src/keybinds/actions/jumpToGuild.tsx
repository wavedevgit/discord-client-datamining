// keybinds/actions/jumpToGuild.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun95021: for (var _fun95021_ip = 0;;) switch (_fun95021_ip) {
        case 0:
            var5 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var11 = global;
            var9 = var11.Object;
            var8 = var9.defineProperty;
            var1 = {};
            var4 = true;
            var1.value = var4;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var1);
            var0 = 0;
            var1 = var6[var0];
            var0 = undefined;
            var1 = var7.bind(var0)(var1);
            var _closure1_slot2 = var1;
            var10 = 1;
            var1 = var6[var10];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 3;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 4;
            var1 = var6[var1];
            var1 = var7.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var7 = var1.ME;
            var _closure1_slot7 = var7;
            var7 = var1.FAVORITES;
            var _closure1_slot8 = var7;
            var1 = var1.Routes;
            var _closure1_slot9 = var1;
            var1 = {};
            var7 = new Array(0);
            var9 = 'mod+';
            var8 = 10;
        case 192:
            var13 = var7.push;
            var12 = var11.HermesInternal;
            var12 = var12.concat;
            var12 = var12.bind(var9)(var10);
            var12 = var13.bind(var7)(var12);
            var10 = var10 + 1;
            if (var10 < var8) {
                _fun95021_ip = 192;
                continue _fun95021
            }
        case 225:
            var1.binds = var7;
            var1.comboKeysBindGlobal = var4;
            var3 = function(arg0, arg1) { // Original name: action, environment: var3
                _fun95022: for (var _fun95022_ip = 0;;) switch (_fun95022_ip) {
                    case 0:
                        var2 = arg1;
                        var3 = global;
                        var4 = var3.parseInt;
                        var1 = var2.split;
                        var0 = '+';
                        var0 = var1.bind(var2)(var0);
                        var1 = 1;
                        var2 = var0[var1];
                        var0 = undefined;
                        var5 = 10;
                        var4 = var4.bind(var0)(var2, var5);
                        var2 = 0;
                        if (!(var2 === var4)) {
                            _fun95022_ip = 52;
                            continue _fun95022
                        }
                    case 49:
                        var4 = var5;
                    case 52:
                        var3 = var3.isNaN;
                        var3 = var3.bind(var0)(var4);
                        if (var3) {
                            _fun95022_ip = 323;
                            continue _fun95022
                        }
                    case 69:
                        if (!(var2 !== var4)) {
                            _fun95022_ip = 323;
                            continue _fun95022
                        }
                    case 76:
                        if (!(var1 !== var4)) {
                            _fun95022_ip = 198;
                            continue _fun95022
                        }
                    case 80:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 6;
                        var1 = var5[var1];
                        var7 = var3.bind(var0)(var1);
                        var6 = var7.isFavoritesGuildVisible;
                        var5 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var1 = _closure1_slot4;
                        var3 = var6.bind(var7)(var5, var3, var1);
                        var1 = 2;
                        if (var3) {
                            _fun95022_ip = 158;
                            continue _fun95022
                        }
                    case 134:
                        var5 = _closure1_slot6;
                        var3 = var5.getFlattenedGuildIds;
                        var5 = var3.bind(var5)();
                        var3 = var4 - var1;
                        var5 = var5[var3];
                        _fun95022_ip = 196;
                        continue _fun95022;
                    case 158:
                        if (!(var1 !== var4)) {
                            _fun95022_ip = 189;
                            continue _fun95022
                        }
                    case 162:
                        var3 = _closure1_slot6;
                        var1 = var3.getFlattenedGuildIds;
                        var3 = var1.bind(var3)();
                        var1 = 3;
                        var1 = var4 - var1;
                        var1 = var3[var1];
                        _fun95022_ip = 193;
                        continue _fun95022;
                    case 189:
                        var1 = _closure1_slot8;
                    case 193:
                        var5 = var1;
                    case 196:
                        _fun95022_ip = 205;
                        continue _fun95022;
                    case 198:
                        var5 = _closure1_slot7;
                    case 205:
                        var3 = null;
                        if (!(var3 != var5)) {
                            _fun95022_ip = 323;
                            continue _fun95022
                        }
                    case 211:
                        var2 = _closure1_slot7;
                        if (!(var5 === var2)) {
                            _fun95022_ip = 240;
                            continue _fun95022
                        }
                    case 222:
                        var4 = _closure1_slot5;
                        var2 = var4.getGuildId;
                        var2 = var2.bind(var4)();
                        if (!(var3 != var2)) {
                            _fun95022_ip = 273;
                            continue _fun95022
                        }
                    case 240:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 8;
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.transitionToGuild;
                        var2 = var2.bind(var3)(var5);
                        _fun95022_ip = 319;
                        continue _fun95022;
                    case 273:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 7;
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.transitionTo;
                        var4 = _closure1_slot9;
                        var1 = var4.CHANNEL;
                        var1 = var1.bind(var4)(var5);
                        var1 = var2.bind(var3)(var1);
                    case 319:
                        var1 = false;
                        return var1;
                    case 323:
                        return var0;
                }
            };
            var1.action = var3;
            var3 = {};
            var3.JUMP_TO_GUILD = var1;
            var4 = 9;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'keybinds/actions/jumpToGuild.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var2.JUMP_TO_GUILD = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1375, 1372, 3050, 3172, 4339, 660, 12402, 1220, 5576, 2]);