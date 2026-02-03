// modules/guild_sidebar/native/ConnectedUserLimit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/ConnectedUserLimit.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun101991: for (var _fun101991_ip = 0;;) switch (_fun101991_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var1 = var0.video;
                var6 = var0.userCount;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)(var2);
                var10 = var4.limit;
                var4 = var2.userLimit;
                var7 = 0;
                var4 = var4 > var7;
                var9 = -1;
                if (!var4) {
                    _fun101991_ip = 82;
                    continue _fun101991
                }
            case 76:
                var9 = var2.userLimit;
            case 82:
                if (!var1) {
                    _fun101991_ip = 89;
                    continue _fun101991
                }
            case 85:
                var1 = var10 > var7;
            case 89:
                var5 = var9;
                var4 = false;
                if (!var1) {
                    _fun101991_ip = 140;
                    continue _fun101991
                }
            case 97:
                var1 = var9 < var7;
                if (var1) {
                    _fun101991_ip = 108;
                    continue _fun101991
                }
            case 104:
                var1 = var10 < var9;
            case 108:
                var2 = var10;
                if (!(var9 > var7)) {
                    _fun101991_ip = 134;
                    continue _fun101991
                }
            case 115:
                var7 = global;
                var8 = var7.Math;
                var7 = var8.min;
                var2 = var7.bind(var8)(var9, var10);
            case 134:
                var5 = var2;
                var4 = var1;
            case 140:
                var2 = _closure1_slot2;
                var1 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 3;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.users = var6;
                var0.total = var5;
                var0.videoLimit = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ConnectedUserLimit = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 8202, 13288, 2]);