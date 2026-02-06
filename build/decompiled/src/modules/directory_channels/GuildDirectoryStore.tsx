// modules/directory_channels/GuildDirectoryStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun71577: for (var _fun71577_ip = 0;;) switch (_fun71577_ip) {
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
                _fun71577_ip = 76;
                continue _fun71577;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.DirectoryEntryCategories;
    var _closure1_slot7 = var7;
    var8 = var1.Object;
    var7 = var8.freeze;
    var1 = {};
    var1 = var7.bind(var8)(var1);
    var _closure1_slot8 = var1;
    var1 = false;
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = {};
    var _closure1_slot13 = var1;
    var1 = {};
    var _closure1_slot14 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun71581: for (var _fun71581_ip = 0;;) switch (_fun71581_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun71581_ip = 69;
                        continue _fun71581
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun71581_ip = 105;
                    continue _fun71581;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'isFetching';
        var4.key = var0;
        var0 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCurrentCategoryId';
        var4.key = var6;
        var6 = function arg0() {
            _fun71583: for (var _fun71583_ip = 0;;) switch (_fun71583_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun71583_ip = 30;
                        continue _fun71583
                    }
                case 20:
                    var1 = _closure1_slot7;
                    var0 = var1.ALL;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getDirectoryEntries';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun71584: for (var _fun71584_ip = 0;;) switch (_fun71584_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun71584_ip = 25;
                        continue _fun71584
                    }
                case 12:
                    var0 = _closure1_slot10;
                    var0 = var0[var4];
                    _fun71584_ip = 52;
                    continue _fun71584;
                case 25:
                    var2 = _closure1_slot12;
                    var2 = var2[var4];
                    var4 = var1 == var2;
                    var1 = undefined;
                    if (var4) {
                        _fun71584_ip = 49;
                        continue _fun71584
                    }
                case 45:
                    var1 = var2[var3];
                case 49:
                    var0 = var1;
                case 52:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getDirectoryEntry';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun71585: for (var _fun71585_ip = 0;;) switch (_fun71585_ip) {
                case 0:
                    var1 = _closure1_slot10;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun71585_ip = 32;
                        continue _fun71585
                    }
                case 25:
                    var1 = arg1;
                    var0 = var2[var1];
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getDirectoryAllEntriesCount';
        var4.key = var6;
        var6 = function arg0() {
            _fun71586: for (var _fun71586_ip = 0;;) switch (_fun71586_ip) {
                case 0:
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var3 = _closure1_slot10;
                    var0 = arg0;
                    var0 = var3[var0];
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun71586_ip = 35;
                        continue _fun71586
                    }
                case 33:
                    var0 = {};
                case 35:
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getDirectoryCategoryCounts';
        var4.key = var6;
        var6 = function arg0() {
            _fun71587: for (var _fun71587_ip = 0;;) switch (_fun71587_ip) {
                case 0:
                    var2 = _closure1_slot13;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun71587_ip = 24;
                        continue _fun71587
                    }
                case 20:
                    var0 = _closure1_slot8;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getAdminGuildEntryIds';
        var4.key = var6;
        var5 = function arg0() {
            var1 = _closure1_slot14;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildDirectoryStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = true;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_FETCH_START = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var6 = var0.entries;
        var1 = false;
        _closure1_slot9 = var1;
        var4 = {};
        var _closure2_slot0 = var4;
        var1 = {};
        var _closure2_slot1 = var1;
        var5 = var6.forEach;
        var3 = function(arg0) { // Environment: var3
            _fun71591: for (var _fun71591_ip = 0;;) switch (_fun71591_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.guildDirectoryEntryFromServer;
                    var1 = arg0;
                    var3 = var2.bind(var3)(var1);
                    var4 = _closure2_slot0;
                    var2 = var3.guildId;
                    var4[var2] = var3;
                    var4 = _closure2_slot1;
                    var2 = var3.primaryCategoryId;
                    var4 = var4[var2];
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun71591_ip = 103;
                        continue _fun71591
                    }
                case 75:
                    var5 = _closure2_slot1;
                    var4 = var3.primaryCategoryId;
                    var2 = {};
                    var6 = var3.guildId;
                    var2[var6] = var3;
                    var5[var4] = var2;
                    _fun71591_ip = 126;
                    continue _fun71591;
                case 103:
                    var2 = _closure2_slot1;
                    var1 = var3.primaryCategoryId;
                    var2 = var2[var1];
                    var1 = var3.guildId;
                    var2[var1] = var3;
                case 126:
                    return var0;
            }
        };
        var3 = var5.bind(var6)(var3);
        var3 = _closure1_slot10;
        var3[var2] = var4;
        var0 = _closure1_slot12;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_FETCH_SUCCESS = var8;
    var8 = function() {
        var0 = false;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_FETCH_FAILURE = var8;
    var8 = function arg0() {
        _fun71593: for (var _fun71593_ip = 0;;) switch (_fun71593_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var5 = var0.entry;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.guildDirectoryEntryFromServer;
                var9 = var2.bind(var4)(var5);
                var4 = null;
                if (!(var4 != var9)) {
                    _fun71593_ip = 286;
                    continue _fun71593
                }
            case 59:
                var2 = _closure1_slot10;
                var6 = var2[var3];
                var5 = var4 == var6;
                var2 = undefined;
                if (var5) {
                    _fun71593_ip = 85;
                    continue _fun71593
                }
            case 76:
                var5 = var9.guildId;
                var2 = var6[var5];
            case 85:
                if (!(var4 == var2)) {
                    _fun71593_ip = 286;
                    continue _fun71593
                }
            case 92:
                var5 = _closure1_slot10;
                var2 = {};
                var12 = var5[var3];
                var13 = var2;
                var6 = copyDataProperties(var13, var12);
                var6 = var9.guildId;
                var2[var6] = var9;
                var5[var3] = var2;
                var5 = var9.primaryCategoryId;
                if (!(var4 == var5)) {
                    _fun71593_ip = 143;
                    continue _fun71593
                }
            case 133:
                var2 = _closure1_slot7;
                var5 = var2.UNCATEGORIZED;
            case 143:
                var6 = _closure1_slot12;
                var2 = {};
                var12 = var6[var3];
                var13 = var2;
                var7 = copyDataProperties(var13, var12);
                var7 = {};
                var10 = var6[var3];
                var11 = var4 == var10;
                var8 = undefined;
                if (var11) {
                    _fun71593_ip = 179;
                    continue _fun71593
                }
            case 175:
                var8 = var10[var5];
            case 179:
                var13 = var7;
                var12 = var8;
                var8 = copyDataProperties(var13, var12);
                var8 = var9.guildId;
                var7[var8] = var9;
                var2[var5] = var7;
                var6[var3] = var2;
                var2 = _closure1_slot13;
                var2 = var2[var3];
                if (!(var4 != var2)) {
                    _fun71593_ip = 286;
                    continue _fun71593
                }
            case 220:
                var2 = _closure1_slot13;
                var6 = var2[var3];
                var7 = var4 == var6;
                var2 = undefined;
                if (var7) {
                    _fun71593_ip = 241;
                    continue _fun71593
                }
            case 237:
                var2 = var6[var5];
            case 241:
                var4 = var4 != var2;
                var6 = 0;
                if (!var4) {
                    _fun71593_ip = 253;
                    continue _fun71593
                }
            case 250:
                var6 = var2;
            case 253:
                var2 = _closure1_slot13;
                var1 = {};
                var12 = var2[var3];
                var13 = var1;
                var4 = copyDataProperties(var13, var12);
                var4 = 1;
                var4 = var6 + var4;
                var1[var5] = var4;
                var2[var3] = var1;
            case 286:
                return var0;
        }
    };
    var1.GUILD_DIRECTORY_ENTRY_CREATE = var8;
    var8 = function arg0() {
        _fun71594: for (var _fun71594_ip = 0;;) switch (_fun71594_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = var0.guildId;
                var0 = _closure1_slot10;
                var6 = var0[var3];
                var4 = null;
                var7 = var4 == var6;
                var0 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun71594_ip = 41;
                    continue _fun71594
                }
            case 37:
                var5 = var6[var2];
            case 41:
                if (!(var4 != var5)) {
                    _fun71594_ip = 274;
                    continue _fun71594
                }
            case 48:
                var5 = var5.primaryCategoryId;
                var6 = global;
                var10 = var6.Object;
                var9 = var10.assign;
                var7 = _closure1_slot10;
                var8 = var7[var3];
                var7 = {};
                var8 = var9.bind(var10)(var7, var8);
                var7 = delete var8[var2];
                var7 = _closure1_slot14;
                var9 = var7[var3];
                if (!(var4 != var9)) {
                    _fun71594_ip = 109;
                    continue _fun71594
                }
            case 99:
                var7 = var9.delete;
                var7 = var7.bind(var9)(var2);
            case 109:
                var9 = _closure1_slot14;
                var11 = var6.Set;
                var13 = var9[var3];
                var10 = var11.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var11
                    }
                });
                var14 = var10;
                var7 = new var14[var11](var13, var12);
                var7 = var7 instanceof Object ? var7 : var10;
                var9[var3] = var7;
                var7 = _closure1_slot10;
                var7[var3] = var8;
                var10 = var6.Object;
                var9 = var10.assign;
                var6 = _closure1_slot12;
                var7 = var6[var3];
                var8 = var7[var5];
                var7 = {};
                var7 = var9.bind(var10)(var7, var8);
                var2 = delete var7[var2];
                var2 = {};
                var12 = var6[var3];
                var13 = var2;
                var8 = copyDataProperties(var13, var12);
                var2[var5] = var7;
                var6[var3] = var2;
                var2 = _closure1_slot13;
                var2 = var2[var3];
                if (!(var4 != var2)) {
                    _fun71594_ip = 274;
                    continue _fun71594
                }
            case 224:
                var2 = _closure1_slot13;
                var1 = var2[var3];
                var4 = var1[var5];
                var1 = 1;
                var6 = var4 - var1;
                var1 = {};
                var12 = var2[var3];
                var13 = var1;
                var4 = copyDataProperties(var13, var12);
                var4 = 0;
                if (!(var6 >= var4)) {
                    _fun71594_ip = 265;
                    continue _fun71594
                }
            case 262:
                var4 = var6;
            case 265:
                var1[var5] = var4;
                var2[var3] = var1;
            case 274:
                return var0;
        }
    };
    var1.GUILD_DIRECTORY_ENTRY_DELETE = var8;
    var8 = function arg0() {
        _fun71595: for (var _fun71595_ip = 0;;) switch (_fun71595_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var5 = var0.entry;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.guildDirectoryEntryFromServer;
                var11 = var1.bind(var2)(var5);
                var1 = _closure1_slot10;
                var5 = var1[var3];
                var7 = null;
                var1 = var7 == var5;
                var2 = undefined;
                if (var1) {
                    _fun71595_ip = 78;
                    continue _fun71595
                }
            case 69:
                var1 = var11.guildId;
                var2 = var5[var1];
            case 78:
                var5 = _closure1_slot10;
                var1 = {};
                var14 = var5[var3];
                var15 = var1;
                var6 = copyDataProperties(var15, var14);
                var8 = var11.guildId;
                var6 = {};
                var15 = var6;
                var14 = var2;
                var9 = copyDataProperties(var15, var14);
                var15 = var6;
                var14 = var11;
                var9 = copyDataProperties(var15, var14);
                var1[var8] = var6;
                var5[var3] = var1;
                var1 = var7 == var2;
                var12 = var2;
                var9 = undefined;
                if (var1) {
                    _fun71595_ip = 149;
                    continue _fun71595
                }
            case 143:
                var9 = var12.primaryCategoryId;
            case 149:
                if (!(var7 == var9)) {
                    _fun71595_ip = 163;
                    continue _fun71595
                }
            case 153:
                var1 = _closure1_slot7;
                var9 = var1.UNCATEGORIZED;
            case 163:
                var5 = var11.primaryCategoryId;
                if (!(var7 == var5)) {
                    _fun71595_ip = 183;
                    continue _fun71595
                }
            case 173:
                var1 = _closure1_slot7;
                var5 = var1.UNCATEGORIZED;
            case 183:
                var1 = global;
                var8 = var1.Object;
                var6 = var8.assign;
                var1 = _closure1_slot12;
                var1 = var1[var3];
                var10 = var7 == var1;
                var2 = undefined;
                if (var10) {
                    _fun71595_ip = 217;
                    continue _fun71595
                }
            case 213:
                var2 = var1[var9];
            case 217:
                var1 = {};
                var6 = var6.bind(var8)(var1, var2);
                var1 = var7 != var12;
                if (!var1) {
                    _fun71595_ip = 236;
                    continue _fun71595
                }
            case 232:
                var1 = var9 !== var5;
            case 236:
                if (!var1) {
                    _fun71595_ip = 248;
                    continue _fun71595
                }
            case 239:
                var1 = var11.guildId;
                var1 = delete var6[var1];
            case 248:
                var2 = _closure1_slot12;
                var1 = {};
                var14 = var2[var3];
                var15 = var1;
                var8 = copyDataProperties(var15, var14);
                var1[var9] = var6;
                var6 = {};
                var10 = var2[var3];
                var13 = var7 == var10;
                var8 = undefined;
                if (var13) {
                    _fun71595_ip = 289;
                    continue _fun71595
                }
            case 285:
                var8 = var10[var5];
            case 289:
                var15 = var6;
                var14 = var8;
                var8 = copyDataProperties(var15, var14);
                var10 = var11.guildId;
                var8 = {};
                var15 = var8;
                var14 = var12;
                var12 = copyDataProperties(var15, var14);
                var15 = var8;
                var14 = var11;
                var11 = copyDataProperties(var15, var14);
                var6[var10] = var8;
                var1[var5] = var6;
                var2[var3] = var1;
                var1 = var5 !== var9;
                if (!var1) {
                    _fun71595_ip = 359;
                    continue _fun71595
                }
            case 347:
                var2 = _closure1_slot13;
                var2 = var2[var3];
                var1 = var7 != var2;
            case 359:
                if (!var1) {
                    _fun71595_ip = 492;
                    continue _fun71595
                }
            case 365:
                var2 = _closure1_slot13;
                var1 = {};
                var14 = var2[var3];
                var15 = var1;
                var6 = copyDataProperties(var15, var14);
                var6 = var2[var3];
                var10 = var7 == var6;
                var8 = undefined;
                if (var10) {
                    _fun71595_ip = 399;
                    continue _fun71595
                }
            case 395:
                var8 = var6[var9];
            case 399:
                var6 = 0;
                var10 = var8 > var6;
                var8 = 0;
                if (!var10) {
                    _fun71595_ip = 438;
                    continue _fun71595
                }
            case 410:
                var10 = _closure1_slot13;
                var10 = var10[var3];
                var12 = var7 == var10;
                var11 = undefined;
                if (var12) {
                    _fun71595_ip = 431;
                    continue _fun71595
                }
            case 427:
                var11 = var10[var9];
            case 431:
                var10 = 1;
                var8 = var11 - var10;
            case 438:
                var1[var9] = var8;
                var4 = _closure1_slot13;
                var8 = var4[var3];
                var9 = var7 == var8;
                var4 = undefined;
                if (var9) {
                    _fun71595_ip = 464;
                    continue _fun71595
                }
            case 460:
                var4 = var8[var5];
            case 464:
                var7 = var7 != var4;
                var6 = 0;
                if (!var7) {
                    _fun71595_ip = 476;
                    continue _fun71595
                }
            case 473:
                var6 = var4;
            case 476:
                var4 = 1;
                var4 = var6 + var4;
                var1[var5] = var4;
                var2[var3] = var1;
            case 492:
                return var0;
        }
    };
    var1.GUILD_DIRECTORY_ENTRY_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = var0.categoryId;
        var0 = _closure1_slot11;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_CATEGORY_SELECT = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = var0.counts;
        var0 = _closure1_slot13;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS = var8;
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.channelId;
        var4 = var1.entries;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var1
            }
        });
        var6 = var3;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot0 = var1;
        var3 = var4.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.guildDirectoryEntryFromServer;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            var3 = _closure2_slot0;
            var2 = var3.add;
            var1 = var1.guildId;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var0 = _closure1_slot14;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/GuildDirectoryStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 8957, 8956, 566, 806, 2]);