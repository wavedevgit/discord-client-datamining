// modules/user_profile/notes/NoteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun91868: for (var _fun91868_ip = 0;;) switch (_fun91868_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun91868_ip = 76;
                continue _fun91868;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TypeTag;
    var3 = var3.constructInPlace;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.LibdiscoreStore;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun91872: for (var _fun91872_ip = 0;;) switch (_fun91872_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot3;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun91872_ip = 84;
                        continue _fun91872
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun91872_ip = 118;
                    continue _fun91872;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var2 = var0.addKVDatabase;
                    var1 = 'notes';
                    var1 = var2.bind(var0)(var1);
                    var0.database = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getNote';
        var4.key = var0;
        var0 = function arg0() {
            var0 = this;
            var2 = var0.database;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'stateWrapper';
        var4.key = var6;
        var5 = function() {
            var0 = this;
            var0 = var0.database;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var6);
    var3 = 'NoteStore';
    var7.displayName = var3;
    var6 = {};
    var3 = function arg0, arg1() {
        var1 = arg1;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        return var0;
    };
    var6.CONNECTION_OPEN = var3;
    var3 = function arg0, arg1() {
        var1 = arg1;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        return var0;
    };
    var6.OVERLAY_INITIALIZE = var3;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var4 = arg1;
        var3 = var4.set;
        var2 = var0.id;
        var6 = _closure1_slot5;
        var5 = {};
        var1 = false;
        var5.loading = var1;
        var0 = var0.note;
        var5.note = var0;
        var0 = undefined;
        var1 = 'Note';
        var1 = var6.bind(var0)(var1, var5);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var6.USER_NOTE_UPDATE = var3;
    var1 = function arg0, arg1() {
        var4 = arg1;
        var3 = var4.set;
        var0 = arg0;
        var2 = var0.userId;
        var6 = _closure1_slot5;
        var0 = undefined;
        var5 = 'Note';
        var1 = {
            'loading': true,
            'note': null
        };
        var1 = var6.bind(var0)(var5, var1);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var6.USER_NOTE_LOAD_START = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.LibdiscoreBatchStoreRefactorExperiment;
    var1 = var3.getCachedBridgedStoreMode;
    var10 = var1.bind(var3)();
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var11 = var6;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/notes/NoteStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = 'Note';
    var2.NoteRecordTypeTag = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1411, 1414, 1613, 2]);