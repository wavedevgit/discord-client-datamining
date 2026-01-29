// modules/directory_channels/GuildDirectoryActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var10;
    var0 = function() { // Original name: _addDirectoryGuildEntry, environment: var3
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun71268: for (var _fun71268_ip = 0;;) switch (_fun71268_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var11 = arg1;
                        var10 = arguments[3];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71268_ip = 267;
                            continue _fun71268
                        }
                    case 19:
                        var3 = undefined;
                        if (!(var10 === var3)) {
                            _fun71268_ip = 38;
                            continue _fun71268
                        }
                    case 25:
                        var1 = _closure1_slot5;
                        var10 = var1.UNCATEGORIZED;
                    case 38:
                        SaveGenerator(address = 42);
                    case 40:
                        return var3;
                    case 42:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun71268_ip = 264;
                            continue _fun71268
                        }
                    case 51:
                        var5 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var2 = 7;
                        var2 = var13[var2];
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.post;
                        var2 = {};
                        var9 = _closure1_slot6;
                        var8 = var9.DIRECTORY_CHANNEL_ENTRY;
                        var8 = var8.bind(var9)(var7, var11);
                        var2.url = var8;
                        var8 = {};
                        var9 = arg2;
                        var8.description = var9;
                        var8.primary_category_id = var10;
                        var2.body = var8;
                        var8 = {};
                        var12 = _closure1_slot0;
                        var9 = 8;
                        var9 = var13[var9];
                        var9 = var12.bind(var3)(var9);
                        var9 = var9.NetworkActionNames;
                        var9 = var9.DIRECTORY_GUILD_ENTRY_CREATE;
                        var8.event = var9;
                        var9 = {};
                        var9.directory_channel_id = var7;
                        var9.guild_id = var11;
                        var9.primary_category_id = var10;
                        var8.properties = var9;
                        var2.trackedActionData = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 196);
                    case 194:
                        return var2;
                    case 196:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun71268_ip = 261;
                            continue _fun71268
                        }
                    case 202:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 5;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'GUILD_DIRECTORY_ENTRY_CREATE';
                        var4.type = var8;
                        var4.channelId = var7;
                        var7 = var2.body;
                        var4.entry = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 261:
                        return var2;
                    case 264:
                        return var1;
                    case 267:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var10[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var10[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var10[var1];
    var1 = var9.bind(var0)(var1);
    var1 = var1.DirectoryEntryCategories;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var10[var1];
    var1 = var9.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot6 = var1;
    var1 = 4;
    var5 = var10[var1];
    var7 = var4.bind(var0)(var5);
    var5 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun71271: for (var _fun71271_ip = 0;;) switch (_fun71271_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71271_ip = 258;
                            continue _fun71271
                        }
                    case 10:
                        var5 = arg0;
                        var9 = arg1;
                    case 16: // try_start_0
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var6 = 5;
                        var1 = var7[var6];
                        var4 = undefined;
                        var8 = var3.bind(var4)(var1);
                        var3 = var8.dispatch;
                        var1 = {};
                        var10 = 'GUILD_DIRECTORY_FETCH_START';
                        var1.type = var10;
                        var1 = var3.bind(var8)(var1);
                        var3 = _closure1_slot0;
                        var1 = 6;
                        var1 = var7[var1];
                        var1 = var3.bind(var4)(var1);
                        var7 = var1.HTTP;
                        var3 = var7.get;
                        var1 = {};
                        var11 = _closure1_slot6;
                        var10 = var11.DIRECTORY_CHANNEL_ENTRIES;
                        var8 = var5;
                        var8 = var10.bind(var11)(var8);
                        var1.url = var8;
                        var8 = {};
                        var8.category_id = var9;
                        var1.query = var8;
                        var8 = true;
                        var1.rejectWithError = var8;
                        var1 = var3.bind(var7)(var1);
                        SaveGenerator(address = 140);
                    case 138:
                        return var1;
                    case 140:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun71271_ip = 201;
                            continue _fun71271
                        }
                    case 146:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_DIRECTORY_FETCH_SUCCESS';
                        var2.type = var6;
                        var2.channelId = var5;
                        var5 = var1.body;
                        var2.entries = var5;
                        var2 = var3.bind(var4)(var2);
                    case 199: // try_end0
                        _fun71271_ip = 253;
                        continue _fun71271;
                    case 201:
                        return var1;
                    case 204: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'GUILD_DIRECTORY_FETCH_FAILURE';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                    case 253:
                        var1 = undefined;
                        return var1;
                    case 258:
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
    var6 = var5.bind(var0)();
    var5 = 200;
    var7 = var7.bind(var0)(var6, var5);
    var6 = var10[var1];
    var8 = var4.bind(var0)(var6);
    var6 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun71275: for (var _fun71275_ip = 0;;) switch (_fun71275_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71275_ip = 161;
                            continue _fun71275
                        }
                    case 10:
                        var5 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.get;
                        var1 = {};
                        var9 = _closure1_slot6;
                        var8 = var9.DIRECTORY_CHANNEL_CATEGORY_COUNTS;
                        var7 = var5;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = true;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 87);
                    case 85:
                        return var1;
                    case 87:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun71275_ip = 151;
                            continue _fun71275
                        }
                    case 93:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 5;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS';
                        var2.type = var6;
                        var2.channelId = var5;
                        var5 = var1.body;
                        var2.counts = var5;
                        var2 = var3.bind(var4)(var2);
                    case 149: // try_end0
                        _fun71275_ip = 156;
                        continue _fun71275;
                    case 151:
                        return var1;
                    case 154: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 156:
                        var1 = undefined;
                        return var1;
                    case 161:
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
    var6 = var6.bind(var0)();
    var6 = var8.bind(var0)(var6, var5);
    var1 = var10[var1];
    var4 = var4.bind(var0)(var1);
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun71279: for (var _fun71279_ip = 0;;) switch (_fun71279_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71279_ip = 361;
                            continue _fun71279
                        }
                    case 16:
                        var7 = var5;
                        var6 = var4;
                        var3 = _closure1_slot4;
                        var2 = var3.shouldFetch;
                        var2 = var2.bind(var3)(var5, var4);
                        if (var2) {
                            _fun71279_ip = 108;
                            continue _fun71279
                        }
                    case 44:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 5;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'GUILD_DIRECTORY_CACHED_SEARCH';
                        var2.type = var5;
                        var5 = var7;
                        var2.channelId = var5;
                        var5 = var6;
                        var2.query = var5;
                        var2 = var3.bind(var4)(var2);
                        _fun71279_ip = 356;
                        continue _fun71279;
                    case 108: // try_start_0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var8 = 5;
                        var2 = var4[var8];
                        var5 = undefined;
                        var9 = var3.bind(var5)(var2);
                        var3 = var9.dispatch;
                        var2 = {};
                        var10 = 'GUILD_DIRECTORY_SEARCH_START';
                        var2.type = var10;
                        var12 = var7;
                        var2.channelId = var12;
                        var10 = var6;
                        var2.query = var10;
                        var2 = var3.bind(var9)(var2);
                        var3 = _closure1_slot0;
                        var2 = 6;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {};
                        var11 = _closure1_slot6;
                        var9 = var11.DIRECTORY_ENTRIES_SEARCH;
                        var9 = var9.bind(var11)(var12);
                        var2.url = var9;
                        var9 = {};
                        var9.query = var10;
                        var2.query = var9;
                        var9 = true;
                        var2.rejectWithError = var9;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 241);
                    case 239:
                        return var2;
                    case 241:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun71279_ip = 307;
                            continue _fun71279
                        }
                    case 247:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var8];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'GUILD_DIRECTORY_SEARCH_SUCCESS';
                        var3.type = var8;
                        var3.channelId = var7;
                        var3.query = var6;
                        var6 = var2.body;
                        var3.results = var6;
                        var3 = var4.bind(var5)(var3);
                    case 305: // try_end0
                        _fun71279_ip = 356;
                        continue _fun71279;
                    case 307:
                        return var2;
                    case 310: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'GUILD_DIRECTORY_FETCH_FAILURE';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                    case 356:
                        var1 = undefined;
                        return var1;
                    case 361:
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
    var1 = var1.bind(var0)();
    var5 = var4.bind(var0)(var1, var5);
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun71283: for (var _fun71283_ip = 0;;) switch (_fun71283_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        var9 = arguments[3];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71283_ip = 211;
                            continue _fun71283
                        }
                    case 16:
                        var3 = undefined;
                        if (!(var9 === var3)) {
                            _fun71283_ip = 35;
                            continue _fun71283
                        }
                    case 22:
                        var1 = _closure1_slot5;
                        var9 = var1.UNCATEGORIZED;
                    case 35:
                        SaveGenerator(address = 39);
                    case 37:
                        return var3;
                    case 39:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun71283_ip = 208;
                            continue _fun71283
                        }
                    case 48:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 6;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var6 = var2.HTTP;
                        var5 = var6.patch;
                        var2 = {};
                        var11 = _closure1_slot6;
                        var10 = var11.DIRECTORY_CHANNEL_ENTRY;
                        var8 = arg1;
                        var8 = var10.bind(var11)(var7, var8);
                        var2.url = var8;
                        var8 = {};
                        var10 = arg2;
                        var8.description = var10;
                        var8.primary_category_id = var9;
                        var2.body = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 140);
                    case 138:
                        return var2;
                    case 140:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun71283_ip = 205;
                            continue _fun71283
                        }
                    case 146:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 5;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'GUILD_DIRECTORY_ENTRY_UPDATE';
                        var4.type = var8;
                        var4.channelId = var7;
                        var7 = var2.body;
                        var4.entry = var7;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 205:
                        return var2;
                    case 208:
                        return var1;
                    case 211:
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
    var4 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun71287: for (var _fun71287_ip = 0;;) switch (_fun71287_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71287_ip = 178;
                            continue _fun71287
                        }
                    case 10:
                        var5 = arg0;
                        var8 = arg1;
                    case 16: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.get;
                        var1 = {};
                        var10 = _closure1_slot6;
                        var9 = var10.DIRECTORY_CHANNEL_LIST_BY_ID;
                        var7 = var5;
                        var7 = var9.bind(var10)(var7);
                        var1.url = var7;
                        var7 = {};
                        var7.entity_ids = var8;
                        var1.query = var7;
                        var7 = true;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 104);
                    case 102:
                        return var1;
                    case 104:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun71287_ip = 168;
                            continue _fun71287
                        }
                    case 110:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 5;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS';
                        var2.type = var6;
                        var2.channelId = var5;
                        var5 = var1.body;
                        var2.entries = var5;
                        var2 = var3.bind(var4)(var2);
                    case 166: // try_end0
                        _fun71287_ip = 173;
                        continue _fun71287;
                    case 168:
                        return var1;
                    case 171: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 173:
                        var1 = undefined;
                        return var1;
                    case 178:
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
    var1 = var1.bind(var0)();
    var8 = 9;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/directory_channels/GuildDirectoryActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var2.fetchDirectoryEntries = var7;
    var2.fetchDirectoryCounts = var6;
    var6 = function() { // Original name: addDirectoryGuildEntry, environment: var3
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.addDirectoryGuildEntry = var6;
    var6 = function(arg0, arg1) { // Original name: removeDirectoryGuildEntry, environment: var3
        var5 = arg0;
        var4 = arg1;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 7;
        var1 = var3[var0];
        var0 = undefined;
        var7 = var2.bind(var0)(var1);
        var6 = var7.delete;
        var1 = {};
        var10 = _closure1_slot6;
        var8 = var10.DIRECTORY_CHANNEL_ENTRY;
        var8 = var8.bind(var10)(var5, var4);
        var1.url = var8;
        var8 = {};
        var10 = _closure1_slot0;
        var9 = 8;
        var9 = var3[var9];
        var9 = var10.bind(var0)(var9);
        var9 = var9.NetworkActionNames;
        var9 = var9.DIRECTORY_GUILD_ENTRY_DELETE;
        var8.event = var9;
        var9 = {};
        var9.directory_channel_id = var5;
        var9.guild_id = var4;
        var8.properties = var9;
        var1.trackedActionData = var8;
        var8 = true;
        var1.rejectWithError = var8;
        var1 = var6.bind(var7)(var1);
        var1 = 5;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var6 = 'GUILD_DIRECTORY_ENTRY_DELETE';
        var1.type = var6;
        var1.channelId = var5;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.removeDirectoryGuildEntry = var6;
    var2.searchDirectoryEntries = var5;
    var5 = function(arg0) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_DIRECTORY_SEARCH_CLEAR';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearDirectorySearch = var5;
    var2.updateDirectoryEntry = var4;
    var3 = function(arg0, arg1) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_DIRECTORY_CATEGORY_SELECT';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.categoryId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.selectDirectoryCategory = var3;
    var2.fetchGuildEntriesForIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 8871, 8873, 660, 5645, 806, 507, 4482, 481, 2]);