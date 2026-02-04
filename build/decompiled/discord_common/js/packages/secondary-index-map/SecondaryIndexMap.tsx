// ../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun24739: for (var _fun24739_ip = 0;;) switch (_fun24739_ip) {
            case 0:
                var4 = arg0;
                var8 = arg1;
                var3 = arg2;
                var5 = arg3;
                var0 = null;
                if (!(var0 != var8)) {
                    _fun24739_ip = 132;
                    continue _fun24739
                }
            case 18:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var6.bind(var2)(var1);
                var9 = var1.bind(var2)(var4, var8, var5);
                var1 = var4[var9];
                var6 = var9;
                if (!(var1 !== var8)) {
                    _fun24739_ip = 117;
                    continue _fun24739
                }
            case 61:
                var1 = var4.length;
                var7 = 1;
                var1 = var1 - var7;
                var2 = var9;
                var6 = var2;
                if (!(var6 < var1)) {
                    _fun24739_ip = 117;
                    continue _fun24739
                }
            case 83:
                var9 = var2 + var7;
                var1 = var4[var9];
                var6 = var9;
                if (!(var1 !== var8)) {
                    _fun24739_ip = 117;
                    continue _fun24739
                }
            case 98:
                var1 = var4.length;
                var1 = var1 - var7;
                var2 = var9;
                var6 = var2;
                if (var6 < var1) {
                    _fun24739_ip = 83;
                    continue _fun24739
                }
            case 117:
                var2 = var4.splice;
                var1 = 1;
                var1 = var2.bind(var4)(var6, var1);
            case 132:
                if (!(var0 != var3)) {
                    _fun24739_ip = 183;
                    continue _fun24739
                }
            case 136:
                var2 = var4.splice;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var6.bind(var1)(var0);
                var1 = var0.bind(var1)(var4, var3, var5);
                var0 = 0;
                var0 = var2.bind(var4)(var1, var0, var3);
            case 183:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = new Array(0);
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0, arg1() {
            _fun24741: for (var _fun24741_ip = 0;;) switch (_fun24741_ip) {
                case 0:
                    var2 = arguments[2];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun24741_ip = 19;
                        continue _fun24741
                    }
                case 12:
                    var2 = function arg0, arg1() {
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var1 === var0;
                        return var0;
                    };
                case 19:
                    var4 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var0)(var1, var3);
                    var3 = global;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var4;
                    var3 = new var7[var3](var6);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var1.valueMap = var3;
                    var3 = new Array(0);
                    var1.valueArray = var3;
                    var3 = {};
                    var1.valueIndexes = var3;
                    var3 = {};
                    var1.valueIndexesForGetter = var3;
                    var3 = false;
                    var1.dirty = var3;
                    var3 = 0;
                    var1._version = var3;
                    var3 = arg0;
                    var1.indexBy = var3;
                    var3 = arg1;
                    var1.sortBy = var3;
                    var1.isEqual = var2;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'version';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._version;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(11);
        var1[0] = var0;
        var0 = {};
        var5 = 'indexes';
        var0.key = var5;
        var5 = function() {
            _fun24744: for (var _fun24744_ip = 0;;) switch (_fun24744_ip) {
                case 0:
                    var1 = arguments[0];
                    var0 = this;
                    var9 = undefined;
                    if (!(var1 === var9)) {
                        _fun24744_ip = 14;
                        continue _fun24744
                    }
                case 12:
                    var1 = false;
                case 14:
                    if (var1) {
                        _fun24744_ip = 160;
                        continue _fun24744
                    }
                case 20:
                    if (var1) {
                        _fun24744_ip = 152;
                        continue _fun24744
                    }
                case 26:
                    var1 = var0.dirty;
                    if (!var1) {
                        _fun24744_ip = 152;
                        continue _fun24744
                    }
                case 35:
                    var1 = {};
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.entries;
                    var2 = var0.valueIndexes;
                    var8 = var3.bind(var4)(var2);
                    var2 = var8.length;
                    var7 = 0;
                    var2 = var7 < var2;
                    var5 = 2;
                    var4 = 1;
                    var3 = 0;
                    if (!var2) {
                        _fun24744_ip = 138;
                        continue _fun24744
                    }
                case 87:
                    var10 = var8[var3];
                    var2 = _closure1_slot2;
                    var2 = var2.bind(var9)(var10, var5);
                    var10 = var2[var7];
                    var13 = var2[var4];
                    var2 = new Array(0);
                    var14 = var2;
                    var12 = 0;
                    var11 = arraySpread(var14, var13, var12);
                    var1[var10] = var2;
                    var3 = var3 + 1;
                    var2 = var8.length;
                    if (var3 < var2) {
                        _fun24744_ip = 87;
                        continue _fun24744
                    }
                case 138:
                    var0.valueIndexesForGetter = var1;
                    var1 = false;
                    var0.dirty = var1;
                case 152:
                    var1 = var0.valueIndexesForGetter;
                    return var1;
                case 160:
                    var0 = var0.valueIndexes;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'keys';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.valueMap;
            var0 = var1.keys;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'values';
        var0.key = var5;
        var5 = function arg0() {
            _fun24746: for (var _fun24746_ip = 0;;) switch (_fun24746_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arguments[1];
                    var1 = this;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun24746_ip = 17;
                        continue _fun24746
                    }
                case 15:
                    var4 = false;
                case 17:
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun24746_ip = 51;
                        continue _fun24746
                    }
                case 23:
                    var0 = var1.indexes;
                    var0 = var0.bind(var1)(var4);
                    var0 = var0[var3];
                    if (!(var2 == var0)) {
                        _fun24746_ip = 49;
                        continue _fun24746
                    }
                case 42:
                    var0 = _closure1_slot5;
                case 49:
                    _fun24746_ip = 57;
                    continue _fun24746;
                case 51:
                    var0 = var1.valueArray;
                case 57:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'size';
        var0.key = var5;
        var5 = function arg0() {
            _fun24747: for (var _fun24747_ip = 0;;) switch (_fun24747_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun24747_ip = 50;
                        continue _fun24747
                    }
                case 12:
                    var2 = var1.valueIndexes;
                    var3 = var2[var3];
                    var4 = var0 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun24747_ip = 36;
                        continue _fun24747
                    }
                case 31:
                    var2 = var3.length;
                case 36:
                    var3 = var0 != var2;
                    var0 = 0;
                    if (!var3) {
                        _fun24747_ip = 48;
                        continue _fun24747
                    }
                case 45:
                    var0 = var2;
                case 48:
                    _fun24747_ip = 61;
                    continue _fun24747;
                case 50:
                    var1 = var1.valueArray;
                    var0 = var1.length;
                case 61:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'clear';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var2 = var1.valueMap;
            var0 = var2.clear;
            var0 = var0.bind(var2)();
            var0 = new Array(0);
            var1.valueArray = var0;
            var0 = {};
            var1.valueIndexes = var0;
            var0 = {};
            var1.valueIndexesForGetter = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'has';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.valueMap;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.valueMap;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun24751: for (var _fun24751_ip = 0;;) switch (_fun24751_ip) {
                case 0:
                    var9 = arg0;
                    var5 = arg1;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var5;
                    var0 = var4.get;
                    var7 = var0.bind(var4)(var9);
                    var _closure3_slot2 = var7;
                    var3 = null;
                    var0 = var3 != var7;
                    if (var0) {
                        _fun24751_ip = 46;
                        continue _fun24751
                    }
                case 42:
                    var0 = var3 != var5;
                case 46:
                    if (!var0) {
                        _fun24751_ip = 245;
                        continue _fun24751
                    }
                case 52:
                    var1 = var3 == var7;
                    if (var1) {
                        _fun24751_ip = 63;
                        continue _fun24751
                    }
                case 59:
                    var1 = var3 == var5;
                case 63:
                    if (var1) {
                        _fun24751_ip = 81;
                        continue _fun24751
                    }
                case 66:
                    var6 = var4.isEqual;
                    var6 = var6.bind(var4)(var7, var5);
                    var1 = !var6;
                case 81:
                    if (!var1) {
                        _fun24751_ip = 242;
                        continue _fun24751
                    }
                case 87:
                    if (!(var3 == var5)) {
                        _fun24751_ip = 109;
                        continue _fun24751
                    }
                case 91:
                    var8 = var4.valueMap;
                    var6 = var8.delete;
                    var6 = var6.bind(var8)(var9);
                    _fun24751_ip = 126;
                    continue _fun24751;
                case 109:
                    var8 = var4.valueMap;
                    var6 = var8.set;
                    var6 = var6.bind(var8)(var9, var5);
                case 126:
                    var10 = _closure1_slot6;
                    var14 = var4.valueArray;
                    var11 = var4.sortBy;
                    var15 = undefined;
                    var13 = var7;
                    var12 = var5;
                    var6 = var15[var10](var14, var13, var12, var11, var10);
                    if (!(var3 != var7)) {
                        _fun24751_ip = 187;
                        continue _fun24751
                    }
                case 161:
                    var6 = var4.indexBy;
                    var8 = var6.bind(var4)(var7);
                    var7 = var8.forEach;
                    var6 = function(arg0) { // Environment: var2
                        var5 = _closure1_slot6;
                        var0 = _closure3_slot0;
                        var3 = var0.getIndex;
                        var2 = arg0;
                        var9 = var3.bind(var0)(var2);
                        var8 = _closure3_slot2;
                        var6 = var0.sortBy;
                        var0 = undefined;
                        var7 = null;
                        var10 = undefined;
                        var1 = var10[var5](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var6 = var7.bind(var8)(var6);
                case 187:
                    if (!(var3 != var5)) {
                        _fun24751_ip = 217;
                        continue _fun24751
                    }
                case 191:
                    var3 = var4.indexBy;
                    var5 = var3.bind(var4)(var5);
                    var3 = var5.forEach;
                    var2 = function(arg0) { // Environment: var2
                        var5 = _closure1_slot6;
                        var0 = _closure3_slot0;
                        var3 = var0.getIndex;
                        var2 = arg0;
                        var9 = var3.bind(var0)(var2);
                        var7 = _closure3_slot1;
                        var6 = var0.sortBy;
                        var0 = undefined;
                        var8 = null;
                        var10 = undefined;
                        var1 = var10[var5](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var2 = var3.bind(var5)(var2);
                case 217:
                    var2 = true;
                    var4.dirty = var2;
                    var3 = var4._version;
                    var3 = var3 + 1;
                    var4._version = var3;
                    var1 = true;
                case 242:
                    var0 = var1;
                case 245:
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            var3 = this;
            var2 = var3.set;
            var1 = arg0;
            var0 = null;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getIndex';
        var0.key = var5;
        var4 = function arg0() {
            _fun24755: for (var _fun24755_ip = 0;;) switch (_fun24755_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var2.valueIndexes;
                    var0 = var0[var3];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun24755_ip = 39;
                        continue _fun24755
                    }
                case 22:
                    var1 = new Array(0);
                    var2 = var2.valueIndexes;
                    var2[var3] = var1;
                    var0 = var1;
                case 39:
                    return var0;
            }
        };
        var0.value = var4;
        var1[10] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx';
    var3 = var4.bind(var5)(var3);
    var2.SecondaryIndexMap = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 3088, 2]);