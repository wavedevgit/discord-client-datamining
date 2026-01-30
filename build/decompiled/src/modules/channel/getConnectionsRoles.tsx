// modules/channel/getConnectionsRoles.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.ChannelTypes;
    var3 = var3.Permissions;
    var9 = var8.GUILD_TEXT;
    var6 = new Array(6);
    var6[0] = var9;
    var9 = var8.GUILD_VOICE;
    var6[1] = var9;
    var9 = var8.GUILD_ANNOUNCEMENT;
    var6[2] = var9;
    var9 = var8.GUILD_FORUM;
    var6[3] = var9;
    var9 = var8.PUBLIC_THREAD;
    var6[4] = var9;
    var8 = var8.PRIVATE_THREAD;
    var6[5] = var8;
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var5[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.combine;
    var6 = var3.VIEW_CHANNEL;
    var3 = var3.SEND_MESSAGES;
    var3 = var7.bind(var8)(var6, var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/getConnectionsRoles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getConnectionsRoles, environment: var1
        _fun40702: for (var _fun40702_ip = 0;;) switch (_fun40702_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                if (!(var3 != var1)) {
                    _fun40702_ip = 143;
                    continue _fun40702
                }
            case 14:
                var6 = _closure1_slot4;
                var5 = var6.includes;
                var4 = var1.type;
                var4 = var5.bind(var6)(var4);
                if (!var4) {
                    _fun40702_ip = 143;
                    continue _fun40702
                }
            case 39:
                var5 = _closure1_slot3;
                var4 = var5.getGuild;
                var2 = var1.guild_id;
                var2 = var4.bind(var5)(var2);
                var _closure2_slot0 = var2;
                if (!(var3 != var2)) {
                    _fun40702_ip = 137;
                    continue _fun40702
                }
            case 66:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.values;
                var1 = var1.permissionOverwrites;
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    _fun40703: for (var _fun40703_ip = 0;;) switch (_fun40703_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.type;
                            var0 = 0;
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun40703_ip = 89;
                                continue _fun40703
                            }
                        case 17:
                            var5 = _closure1_slot2;
                            var4 = var5.getRole;
                            var1 = _closure2_slot0;
                            var3 = var1.id;
                            var1 = var2.id;
                            var4 = var4.bind(var5)(var3, var1);
                            var3 = null;
                            var5 = var3 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun40703_ip = 85;
                                continue _fun40703
                            }
                        case 64:
                            var4 = var4.tags;
                            var5 = var3 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun40703_ip = 85;
                                continue _fun40703
                            }
                        case 79:
                            var1 = var4.guild_connections;
                        case 85:
                            var0 = var3 === var1;
                        case 89:
                            if (!var0) {
                                _fun40703_ip = 142;
                                continue _fun40703
                            }
                        case 92:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 3;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.hasAny;
                            var2 = var2.deny;
                            var1 = _closure1_slot5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0 = !var1;
                        case 142:
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot2;
                    var2 = var3.getRole;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun40702_ip = 141;
                continue _fun40702;
            case 137:
                var0 = new Array(0);
            case 141:
                return var0;
            case 143:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1665, 1410, 660, 484, 2]);