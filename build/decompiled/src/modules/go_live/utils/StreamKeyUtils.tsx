// modules/go_live/utils/StreamKeyUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StreamTypes;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/go_live/utils/StreamKeyUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun30997: for (var _fun30997_ip = 0;;) switch (_fun30997_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun30997_ip = 63;
                    continue _fun30997
                }
            case 12:
                var3 = var4.startsWith;
                var1 = _closure1_slot1;
                var1 = var1.GUILD;
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun30997_ip = 60;
                    continue _fun30997
                }
            case 39:
                var3 = var4.startsWith;
                var2 = _closure1_slot1;
                var2 = var2.CALL;
                var1 = var3.bind(var4)(var2);
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var2.isStreamKey = var3;
    var3 = function arg0() {
        _fun30998: for (var _fun30998_ip = 0;;) switch (_fun30998_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = ':';
                var4 = var1.bind(var2)(var0);
                var1 = 0;
                var6 = var4[var1];
                var2 = _closure1_slot1;
                var2 = var2.GUILD;
                if (!(var2 !== var6)) {
                    _fun30998_ip = 157;
                    continue _fun30998
                }
            case 40:
                var2 = _closure1_slot1;
                var2 = var2.CALL;
                if (!(var2 !== var6)) {
                    _fun30998_ip = 106;
                    continue _fun30998
                }
            case 54:
                var2 = global;
                var5 = var2.Error;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Unknown stream type ';
                var8 = var3.bind(var2)(var6);
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = var3;
                var2 = new var9[var5](var8, var7);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 106:
                var5 = _closure1_slot0;
                var3 = undefined;
                var2 = 3;
                var5 = var5.bind(var3)(var4, var2);
                var2 = {};
                var3 = var5[var1];
                var2.streamType = var3;
                var3 = 1;
                var3 = var5[var3];
                var2.channelId = var3;
                var3 = 2;
                var3 = var5[var3];
                var2.ownerId = var3;
                return var2;
            case 157:
                var3 = _closure1_slot0;
                var2 = undefined;
                var0 = 4;
                var2 = var3.bind(var2)(var4, var0);
                var0 = {};
                var1 = var2[var1];
                var0.streamType = var1;
                var1 = 1;
                var1 = var2[var1];
                var0.guildId = var1;
                var1 = 2;
                var1 = var2[var1];
                var0.channelId = var1;
                var1 = 3;
                var1 = var2[var1];
                var0.ownerId = var1;
                return var0;
        }
    };
    var2.decodeStreamKey = var3;
    var1 = function arg0() {
        _fun30999: for (var _fun30999_ip = 0;;) switch (_fun30999_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.streamType;
                var3 = var0.guildId;
                var1 = var0.channelId;
                var0 = var0.ownerId;
                var5 = _closure1_slot1;
                var5 = var5.GUILD;
                if (!(var5 !== var4)) {
                    _fun30999_ip = 140;
                    continue _fun30999
                }
            case 42:
                var2 = _closure1_slot1;
                var2 = var2.CALL;
                if (!(var2 !== var4)) {
                    _fun30999_ip = 108;
                    continue _fun30999
                }
            case 56:
                var2 = global;
                var6 = var2.Error;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = 'Unknown stream type ';
                var7 = var5.bind(var2)(var4);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = var5;
                var2 = new var8[var6](var7, var6);
                var2 = var2 instanceof Object ? var2 : var5;
                throw var2;
            case 108:
                var6 = new Array(3);
                var6[0] = var4;
                var6[1] = var1;
                var6[2] = var0;
                var5 = var6.join;
                var2 = ':';
                var2 = var5.bind(var6)(var2);
                return var2;
            case 140:
                var2 = new Array(4);
                var2[0] = var4;
                var2[1] = var3;
                var2[2] = var1;
                var2[3] = var0;
                var1 = var2.join;
                var0 = ':';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.encodeStreamKey = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3506, 2]);