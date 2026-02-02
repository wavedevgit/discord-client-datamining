// modules/directory_channels/GuildDirectoryUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.orderBy;
        var2 = new Array(1);
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.approximateMemberCount;
            return var0;
        };
        var2[0] = var0;
        var1 = arg0;
        var0 = ['desc'];
        var0 = var3.bind(var4)(var1, var2, var0);
        return var0;
    };
    var _closure1_slot3 = var4;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.orderBy;
        var2 = new Array(1);
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.createdAt;
            return var0;
        };
        var2[0] = var0;
        var1 = arg0;
        var0 = ['desc'];
        var0 = var3.bind(var4)(var1, var2, var0);
        return var0;
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.DirectoryEntryTypes;
    var _closure1_slot2 = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/directory_channels/GuildDirectoryUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0() {
        _fun71245: for (var _fun71245_ip = 0;;) switch (_fun71245_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var2.type;
                var0 = _closure1_slot2;
                var0 = var0.GUILD;
                var3 = var3 === var0;
                var0 = 'Directory entries must be connected to a guild!';
                var0 = var4.bind(var1)(var3, var0);
                var0 = {};
                var3 = var2.directory_channel_id;
                var0.channelId = var3;
                var3 = var2.entity_id;
                var0.guildId = var3;
                var3 = var2.type;
                var0.type = var3;
                var3 = var2.author_id;
                var0.authorId = var3;
                var3 = var2.created_at;
                var0.createdAt = var3;
                var3 = var2.description;
                var0.description = var3;
                var3 = var2.primary_category_id;
                var0.primaryCategoryId = var3;
                var5 = var2.guild;
                var3 = null;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun71245_ip = 153;
                    continue _fun71245
                }
            case 148:
                var4 = var5.name;
            case 153:
                var0.name = var4;
                var5 = var2.guild;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun71245_ip = 176;
                    continue _fun71245
                }
            case 171:
                var4 = var5.icon;
            case 176:
                var0.icon = var4;
                var5 = var2.guild;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun71245_ip = 200;
                    continue _fun71245
                }
            case 194:
                var4 = var5.splash;
            case 200:
                var0.splash = var4;
                var4 = global;
                var6 = var4.Set;
                var5 = var2.guild;
                var7 = var3 == var5;
                var4 = undefined;
                if (var7) {
                    _fun71245_ip = 233;
                    continue _fun71245
                }
            case 227:
                var4 = var5.features;
            case 233:
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var5;
                var9 = var4;
                var4 = new var10[var6](var9, var8);
                var4 = var4 instanceof Object ? var4 : var5;
                var0.features = var4;
                var5 = var2.guild;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun71245_ip = 281;
                    continue _fun71245
                }
            case 275:
                var4 = var5.approximate_member_count;
            case 281:
                var0.approximateMemberCount = var4;
                var5 = var2.guild;
                var6 = var3 == var5;
                var4 = undefined;
                if (var6) {
                    _fun71245_ip = 306;
                    continue _fun71245
                }
            case 300:
                var4 = var5.approximate_presence_count;
            case 306:
                var0.approximatePresenceCount = var4;
                var2 = var2.guild;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun71245_ip = 333;
                    continue _fun71245
                }
            case 325:
                var1 = var2.featurable_in_directory;
            case 333:
                var0.featurableInDirectory = var1;
                return var0;
        }
    };
    var2.guildDirectoryEntryFromServer = var5;
    var5 = 5;
    var2.MAX_CATEGORY_SERVERS = var5;
    var2.orderByTotalMemberCount = var4;
    var2.orderByDateAdded = var3;
    var3 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot4;
        var1 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.featurableInDirectory;
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.slice;
        var1 = 0;
        var0 = 5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.rankByDateAdded = var3;
    var1 = function arg0() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.rankGuildEntries = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8879, 44, 22, 2]);