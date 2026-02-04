// modules/messages/isSpam.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun40885: for (var _fun40885_ip = 0;;) switch (_fun40885_ip) {
            case 0:
                var3 = _closure1_slot2;
                var1 = var3.getUser;
                var0 = arg0;
                var4 = var1.bind(var3)(var0);
                var0 = null;
                var3 = var0 == var4;
                var1 = undefined;
                if (var3) {
                    _fun40885_ip = 53;
                    continue _fun40885
                }
            case 32:
                var3 = var4.hasFlag;
                var2 = _closure1_slot3;
                var2 = var2.SPAMMER;
                var1 = var3.bind(var4)(var2);
            case 53:
                var0 = var0 != var1;
                if (!var0) {
                    _fun40885_ip = 63;
                    continue _fun40885
                }
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.UserFlags;
    var _closure1_slot3 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/isSpam.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun40886: for (var _fun40886_ip = 0;;) switch (_fun40886_ip) {
            case 0:
                var1 = arg0;
                var0 = undefined;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun40886_ip = 34;
                    continue _fun40886
                }
            case 12:
                var2 = var1.type;
                var1 = _closure1_slot4;
                var1 = var1.DM;
                var0 = var2 !== var1;
            case 34:
                return var0;
        }
    };
    var2.isSpamSupported = var4;
    var2.isSpammer = var3;
    var1 = function arg0() {
        _fun40887: for (var _fun40887_ip = 0;;) switch (_fun40887_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot5;
                var0 = var3.author;
                var0 = var0.id;
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                if (!var0) {
                    _fun40887_ip = 65;
                    continue _fun40887
                }
            case 31:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.isAutomodMessageRecord;
                var1 = var1.bind(var2)(var3);
                var0 = !var1;
            case 65:
                return var0;
        }
    };
    var2.isSpam = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 660, 4530, 2]);