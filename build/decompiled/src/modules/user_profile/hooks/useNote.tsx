// modules/user_profile/hooks/useNote.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun91787: for (var _fun91787_ip = 0;;) switch (_fun91787_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun91787_ip = 317;
                            continue _fun91787
                        }
                    case 13:
                        var5 = var8;
                        var1 = undefined;
                        var9 = undefined;
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var4 = 5;
                        var3 = var3[var4];
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var10 = 'USER_NOTE_LOAD_START';
                        var3.type = var10;
                        var3.userId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 69: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 6;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.get;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var11 = _closure1_slot6;
                        var10 = var11.NOTE;
                        var8 = var5;
                        var8 = var10.bind(var11)(var8);
                        var3.url = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 142);
                    case 140:
                        return var3;
                    case 142:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun91787_ip = 266;
                            continue _fun91787
                        }
                    case 148:
                        var6 = var3.body;
                        var9 = var6;
                        var7 = var6.note_user_id;
                        var6 = var5;
                        if (!(var7 === var6)) {
                            _fun91787_ip = 230;
                            continue _fun91787
                        }
                    case 171:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'USER_NOTE_UPDATE';
                        var6.type = var10;
                        var10 = var5;
                        var6.id = var10;
                        var9 = var9.note;
                        var6.note = var9;
                        var6 = var7.bind(var8)(var6);
                    case 228: // try_end0
                        _fun91787_ip = 314;
                        continue _fun91787;
                    case 230: // try_start_1
                        var6 = global;
                        var8 = var6.Error;
                        var6 = var8.prototype;
                        var7 = Object.create(var6, {
                            constructor: {
                                value: var8
                            }
                        });
                        var12 = 'Invalid response from server';
                        var13 = var7;
                        var6 = new var13[var8](var12, var11);
                        var6 = var6 instanceof Object ? var6 : var7;
                        throw var6;
                    case 266: // try_end1
                        return var3;
                    case 269: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'USER_NOTE_UPDATE';
                        var2.type = var6;
                        var2.id = var5;
                        var2 = var3.bind(var4)(var2);
                    case 314:
                        return var1;
                    case 317:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useNote.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91788: for (var _fun91788_ip = 0;;) switch (_fun91788_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var3 = var3[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var4 = var6.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getNote;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var4.bind(var6)(var3, var0);
                var _closure2_slot1 = var0;
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var0;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun91790: for (var _fun91790_ip = 0;;) switch (_fun91790_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun91790_ip = 33;
                                continue _fun91790
                            }
                        case 13:
                            var2 = _closure2_slot0;
                            var1 = function() {
                                var0 = undefined;
                                var3 = _closure1_slot7;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 33:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun91788_ip = 122;
                    continue _fun91788
                }
            case 108:
                var0 = {
                    'loading': true,
                    'note': null
                };
            case 122:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 11902, 660, 566, 806, 507, 2]);