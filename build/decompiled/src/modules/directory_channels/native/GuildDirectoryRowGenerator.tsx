// modules/directory_channels/native/GuildDirectoryRowGenerator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = global;
    var8 = var4.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var8 = 0;
    var3 = var6[var8];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.DirectoryEntryCategories;
    var _closure1_slot2 = var3;
    var3 = {};
    var3.ENTRY = var8;
    var7 = 'ENTRY';
    var3[var8] = var7;
    var8 = 1;
    var3.HEADER = var8;
    var7 = 'HEADER';
    var3[var8] = var7;
    var8 = 2;
    var3.PLACEHOLDER = var8;
    var7 = 'PLACEHOLDER';
    var3[var8] = var7;
    var _closure1_slot3 = var3;
    var7 = var4.Array;
    var4 = 20;
    var8 = var7.bind(var0)(var4);
    var7 = var8.fill;
    var4 = {};
    var9 = var3.PLACEHOLDER;
    var4.type = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/native/GuildDirectoryRowGenerator.tsx';
    var4 = var5.bind(var6)(var4);
    var2.RowType = var3;
    var1 = function arg0, arg1, arg2() {
        _fun91333: for (var _fun91333_ip = 0;;) switch (_fun91333_ip) {
            case 0:
                var3 = arg1;
                var1 = arg0;
                if (!var1) {
                    _fun91333_ip = 25;
                    continue _fun91333
                }
            case 11:
                var2 = var3.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun91333_ip = 505;
                    continue _fun91333
                }
            case 25:
                var1 = var3.length;
                var5 = 0;
                if (!(var5 !== var1)) {
                    _fun91333_ip = 499;
                    continue _fun91333
                }
            case 39:
                var2 = _closure1_slot2;
                var4 = var2.ALL;
                var2 = arg2;
                if (!(var2 === var4)) {
                    _fun91333_ip = 447;
                    continue _fun91333
                }
            case 62:
                var7 = new Array(0);
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 1;
                var2 = var2[var8];
                var12 = undefined;
                var4 = var4.bind(var12)(var2);
                var2 = var4.rankByDateAdded;
                var10 = var2.bind(var4)(var3);
                var2 = global;
                var6 = var2.Set;
                var4 = var10.map;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.guildId;
                    return var0;
                };
                var16 = var4.bind(var10)(var2);
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var17 = var4;
                var2 = new var17[var6](var16, var15);
                var2 = var2 instanceof Object ? var2 : var4;
                var _closure2_slot0 = var2;
                var2 = var10.length;
                var6 = var7;
                if (!(var2 > var5)) {
                    _fun91333_ip = 274;
                    continue _fun91333
                }
            case 160:
                var4 = var7.push;
                var2 = {};
                var9 = _closure1_slot3;
                var9 = var9.HEADER;
                var2.type = var9;
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var9 = 2;
                var11 = var15[var9];
                var11 = var14.bind(var12)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var9 = var15[var9];
                var9 = var14.bind(var12)(var9);
                var9 = var9.t;
                var9 = var9.CbaapP;
                var9 = var11.bind(var13)(var9);
                var2.header = var9;
                var2 = var4.bind(var7)(var2);
                var4 = var7.concat;
                var9 = var10.map;
                var2 = function(arg0) { // Environment: var0
                    var0 = {};
                    var1 = _closure1_slot3;
                    var1 = var1.ENTRY;
                    var0.type = var1;
                    var1 = arg0;
                    var0.entry = var1;
                    return var0;
                };
                var2 = var9.bind(var10)(var2);
                var6 = var4.bind(var7)(var2);
            case 274:
                var4 = var3.filter;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.guildId;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var7 = var4.bind(var3)(var2);
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var8];
                var4 = var4.bind(var12)(var2);
                var2 = var4.orderByTotalMemberCount;
                var8 = var2.bind(var4)(var7);
                var4 = var8.length;
                var2 = var6;
                if (!(var4 > var5)) {
                    _fun91333_ip = 445;
                    continue _fun91333
                }
            case 331:
                var5 = var6.push;
                var4 = {};
                var7 = _closure1_slot3;
                var7 = var7.HEADER;
                var4.type = var7;
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var7 = 2;
                var9 = var13[var7];
                var9 = var11.bind(var12)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var7 = var13[var7];
                var7 = var11.bind(var12)(var7);
                var7 = var7.t;
                var7 = var7.wxbhEe;
                var7 = var9.bind(var10)(var7);
                var4.header = var7;
                var4 = var5.bind(var6)(var4);
                var5 = var6.concat;
                var7 = var8.map;
                var4 = function(arg0) { // Environment: var0
                    var0 = {};
                    var1 = _closure1_slot3;
                    var1 = var1.ENTRY;
                    var0.type = var1;
                    var1 = arg0;
                    var0.entry = var1;
                    return var0;
                };
                var4 = var7.bind(var8)(var4);
                var2 = var5.bind(var6)(var4);
            case 445:
                return var2;
            case 447:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.rankGuildEntries;
                var2 = var1.bind(var2)(var3);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = {};
                    var1 = _closure1_slot3;
                    var1 = var1.ENTRY;
                    var0.type = var1;
                    var1 = arg0;
                    var0.entry = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 499:
                var0 = new Array(0);
                return var0;
            case 505:
                var0 = _closure1_slot4;
                return var0;
        }
    };
    var2.generateDirectoryRows = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8951, 8950, 1234, 2]);