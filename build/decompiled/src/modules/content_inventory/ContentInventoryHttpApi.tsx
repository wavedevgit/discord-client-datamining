// modules/content_inventory/ContentInventoryHttpApi.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun118055: for (var _fun118055_ip = 0;;) switch (_fun118055_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118055_ip = 180;
                            continue _fun118055
                        }
                    case 10:
                        var7 = arg0;
                        var6 = arg1;
                    case 16: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var5 = _closure1_slot5;
                        var5 = var5.MY_SPOTIFY_CONTENT_INVENTORY;
                        var1.url = var5;
                        var5 = {};
                        var5.connection_id = var7;
                        var7 = var6;
                        var6 = new Array(1);
                        var6[0] = var7;
                        var5.tracks = var6;
                        var1.body = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 110);
                    case 108:
                        return var1;
                    case 110:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun118055_ip = 119;
                            continue _fun118055
                        }
                    case 116: // try_end0
                        return var2;
                    case 119:
                        return var1;
                    case 122: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var9 = var2;
                        var8 = var3;
                        var1 = new var9[var1](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 180:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.ContentInventoryFeedKey;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun118058: for (var _fun118058_ip = 0;;) switch (_fun118058_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun118058_ip = 314;
                            continue _fun118058
                        }
                    case 13:
                        var8 = var1.token;
                        var11 = var1.feedId;
                        var9 = var1.feature;
                        var5 = undefined;
                        var3 = undefined;
                        var4 = undefined;
                        SaveGenerator(address = 41);
                    case 39:
                        return var5;
                    case 41:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun118058_ip = 311;
                            continue _fun118058
                        }
                    case 50: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 3;
                        var2 = var7[var2];
                        var2 = var6.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var6 = var7.get;
                        var2 = {};
                        var13 = _closure1_slot5;
                        var12 = var13.MY_CONTENT_INVENTORY;
                        var8 = var12.bind(var13)(var8);
                        var2.url = var8;
                        var8 = {};
                        var10 = _closure1_slot4;
                        var10 = var10.GAME_PROFILE_FEED;
                        var10 = var11 === var10;
                        var8.for_game_profile = var10;
                        var8.feature = var9;
                        var2.query = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 152);
                    case 150:
                        return var2;
                    case 152:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun118058_ip = 252;
                            continue _fun118058
                        }
                    case 158:
                        var6 = var2.body;
                        var3 = var6;
                        var7 = var6.wait_ms_until_next_fetch;
                        var4 = var7;
                        var6 = null;
                        if (!(var6 != var7)) {
                            _fun118058_ip = 249;
                            continue _fun118058
                        }
                    case 183:
                        var6 = global;
                        var7 = var6.Date;
                        var8 = var6.Date;
                        var6 = var8.now;
                        var6 = var6.bind(var8)();
                        var14 = var6 + var4;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var15 = var6;
                        var4 = new var15[var7](var14, var13);
                        var7 = var4 instanceof Object ? var4 : var6;
                        var6 = var3;
                        var4 = var7.toISOString;
                        var4 = var4.bind(var7)();
                        var6.expired_at = var4;
                    case 249: // try_end0
                        return var3;
                    case 252:
                        return var2;
                    case 255: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.APIError;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var15 = var3;
                        var14 = var4;
                        var2 = new var15[var2](var14, var13);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 311:
                        return var1;
                    case 314:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var5 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun118062: for (var _fun118062_ip = 0;;) switch (_fun118062_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118062_ip = 305;
                            continue _fun118062
                        }
                    case 10:
                        var8 = arg0;
                        var7 = arg1;
                    case 16: // try_start_0
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 5;
                        var1 = var4[var6];
                        var5 = undefined;
                        var9 = var2.bind(var5)(var1);
                        var2 = var9.dispatch;
                        var1 = {};
                        var10 = 'CONTENT_INVENTORY_FETCH_OUTBOX_START';
                        var1.type = var10;
                        var11 = var8;
                        var1.userId = var11;
                        var1 = var2.bind(var9)(var1);
                        var2 = _closure1_slot0;
                        var1 = 3;
                        var1 = var4[var1];
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {};
                        var10 = _closure1_slot5;
                        var9 = var10.CONTENT_INVENTORY_OUTBOX;
                        var9 = var9.bind(var10)(var11);
                        var1.url = var9;
                        var1.signal = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 137);
                    case 135:
                        return var1;
                    case 137:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun118062_ip = 202;
                            continue _fun118062
                        }
                    case 143:
                        var2 = var1.body;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS';
                        var3.type = var6;
                        var3.outbox = var2;
                        var6 = var8;
                        var3.userId = var6;
                        var3 = var4.bind(var5)(var3);
                    case 199: // try_end0
                        return var2;
                    case 202:
                        return var1;
                    case 205: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var4 = undefined;
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var9 = 'CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE';
                        var2.type = var9;
                        var2.userId = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = _closure1_slot0;
                        var1 = 4;
                        var1 = var5[var1];
                        var1 = var2.bind(var4)(var1);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var13 = var2;
                        var12 = var3;
                        var1 = new var13[var1](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 305:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun118066: for (var _fun118066_ip = 0;;) switch (_fun118066_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118066_ip = 378;
                            continue _fun118066
                        }
                    case 10:
                        var10 = arg0;
                        var11 = arg1;
                        var4 = arg2;
                        var1 = undefined;
                        var2 = undefined;
                        var5 = undefined;
                    case 25: // try_start_0
                        var8 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var9 = 5;
                        var3 = var12[var9];
                        var13 = var8.bind(var1)(var3);
                        var8 = var13.dispatch;
                        var3 = {};
                        var14 = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START';
                        var3.type = var14;
                        var3 = var8.bind(var13)(var3);
                        var8 = _closure1_slot0;
                        var3 = 3;
                        var3 = var12[var3];
                        var3 = var8.bind(var1)(var3);
                        var12 = var3.HTTP;
                        var8 = var12.del;
                        var3 = {};
                        var15 = _closure1_slot5;
                        var14 = var15.DELETE_MY_CONTENT_INVENTORY_OUTBOX_ENTRY_HISTORY;
                        var13 = var10;
                        var13 = var13.id;
                        var13 = var14.bind(var15)(var13);
                        var3.url = var13;
                        var13 = false;
                        var3.rejectWithError = var13;
                        var3 = var8.bind(var12)(var3);
                        SaveGenerator(address = 141);
                    case 139:
                        return var3;
                    case 141:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                        if (var8) {
                            _fun118066_ip = 213;
                            continue _fun118066
                        }
                    case 147:
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var9 = var8.bind(var1)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var12 = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS';
                        var7.type = var12;
                        var7.userId = var11;
                        var7.entry = var10;
                        var7 = var8.bind(var9)(var7);
                        var8 = var4;
                        var7 = null;
                        if (!(var7 != var8)) {
                            _fun118066_ip = 208;
                            continue _fun118066
                        }
                    case 204:
                        var4 = var4.bind(var1)();
                    case 208: // try_end0
                        _fun118066_ip = 375;
                        continue _fun118066;
                    case 213:
                        return var3;
                    case 216: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var6 = var3;
                        var4 = null;
                        var7 = var4 == var3;
                        var3 = undefined;
                        if (var7) {
                            _fun118066_ip = 254;
                            continue _fun118066
                        }
                    case 232:
                        var6 = var6.body;
                        var5 = var6;
                        var6 = var4 == var6;
                        var3 = undefined;
                        if (var6) {
                            _fun118066_ip = 254;
                            continue _fun118066
                        }
                    case 249:
                        var3 = var5.message;
                    case 254:
                        var2 = var3;
                        if (!(var4 == var3)) {
                            _fun118066_ip = 323;
                            continue _fun118066
                        }
                    case 261:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 6;
                        var4 = var7[var3];
                        var4 = var6.bind(var1)(var4);
                        var5 = var4.intl;
                        var4 = var5.string;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var3 = var3.t;
                        var3 = var3.FMbL3s;
                        var5 = var4.bind(var5)(var3);
                        _fun118066_ip = 326;
                        continue _fun118066;
                    case 323:
                        var5 = var2;
                    case 326:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 5;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE';
                        var2.type = var6;
                        var2.error = var5;
                        var2 = var3.bind(var4)(var2);
                    case 375:
                        return var1;
                    case 378:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/content_inventory/ContentInventoryHttpApi.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getMyContentInventory = var5;
    var2.getContentInventoryOutbox = var4;
    var2.deleteContentInventoryEntryHistory = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.postTrackToContentInventory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 8959, 660, 507, 3351, 806, 1234, 2]);