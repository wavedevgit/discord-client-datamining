// modules/channel_text_area/compareChannelsByScoreAndPosition.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function(arg0) { // Original name: getGuildChannelPosition, environment: var1
        _fun49513: for (var _fun49513_ip = 0;;) switch (_fun49513_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.parent_id;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun49513_ip = 120;
                    continue _fun49513
                }
            case 15:
                var4 = _closure1_slot0;
                var3 = var4.getChannel;
                var0 = var1.parent_id;
                var3 = var3.bind(var4)(var0);
                var4 = var2 == var3;
                var0 = undefined;
                if (var4) {
                    _fun49513_ip = 52;
                    continue _fun49513
                }
            case 47:
                var0 = var3.position;
            case 52:
                var3 = var2 != var0;
                var2 = 0;
                if (!var3) {
                    _fun49513_ip = 64;
                    continue _fun49513
                }
            case 61:
                var2 = var0;
            case 64:
                var0 = 1;
                var4 = var2 + var0;
                var0 = var1.isGuildVocal;
                var0 = var0.bind(var1)();
                var3 = var1.position;
                var2 = 1000;
                var2 = var2 * var4;
                var3 = var2 + var3;
                if (var0) {
                    _fun49513_ip = 108;
                    continue _fun49513
                }
            case 103:
                var0 = var3;
                _fun49513_ip = 118;
                continue _fun49513;
            case 108:
                var2 = 500;
                var0 = var3 + var2;
            case 118:
                return var0;
            case 120:
                var2 = var1.type;
                var0 = _closure1_slot1;
                var0 = var0.GUILD_CATEGORY;
                if (!(var2 !== var0)) {
                    _fun49513_ip = 149;
                    continue _fun49513
                }
            case 142:
                var0 = var1.position;
                _fun49513_ip = 171;
                continue _fun49513;
            case 149:
                var2 = var1.position;
                var1 = 1;
                var2 = var2 + var1;
                var1 = 1000;
                var0 = var1 * var2;
            case 171:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
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
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_text_area/compareChannelsByScoreAndPosition.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: compareChannelsByScoreAndPosition, environment: var1
        _fun49514: for (var _fun49514_ip = 0;;) switch (_fun49514_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var3 = var0.score;
                var2 = var1.score;
                if (!(var3 === var2)) {
                    _fun49514_ip = 204;
                    continue _fun49514
                }
            case 25:
                var4 = _closure1_slot2;
                var2 = var0.record;
                var8 = undefined;
                var3 = var4.bind(var8)(var2);
                var2 = var1.record;
                var2 = var4.bind(var8)(var2);
                if (!(var3 === var2)) {
                    _fun49514_ip = 198;
                    continue _fun49514
                }
            case 63:
                var4 = var0.sortable;
                var7 = null;
                if (!(var7 == var4)) {
                    _fun49514_ip = 103;
                    continue _fun49514
                }
            case 75:
                var9 = var0.comparator;
                var6 = var7 == var9;
                var5 = undefined;
                if (var6) {
                    _fun49514_ip = 100;
                    continue _fun49514
                }
            case 90:
                var6 = var9.toLocaleLowerCase;
                var5 = var6.bind(var9)();
            case 100:
                var4 = var5;
            case 103:
                var9 = var7 != var4;
                var6 = '';
                var5 = var6;
                if (!var9) {
                    _fun49514_ip = 120;
                    continue _fun49514
                }
            case 117:
                var5 = var4;
            case 120:
                var4 = var0.sortable;
                if (!(var7 == var4)) {
                    _fun49514_ip = 158;
                    continue _fun49514
                }
            case 130:
                var10 = var1.comparator;
                var9 = var7 == var10;
                var8 = undefined;
                if (var9) {
                    _fun49514_ip = 155;
                    continue _fun49514
                }
            case 145:
                var9 = var10.toLocaleLowerCase;
                var8 = var9.bind(var10)();
            case 155:
                var4 = var8;
            case 158:
                var7 = var7 != var4;
                if (!var7) {
                    _fun49514_ip = 168;
                    continue _fun49514
                }
            case 165:
                var6 = var4;
            case 168:
                var7 = var5 < var6;
                var4 = -1;
                if (var7) {
                    _fun49514_ip = 196;
                    continue _fun49514
                }
            case 181:
                var6 = var5 > var6;
                var5 = 0;
                if (!var6) {
                    _fun49514_ip = 193;
                    continue _fun49514
                }
            case 190:
                var5 = 1;
            case 193:
                var4 = var5;
            case 196:
                return var4;
            case 198:
                var2 = var3 - var2;
                return var2;
            case 204:
                var1 = var1.score;
                var0 = var0.score;
                var0 = var1 - var0;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 660, 2]);