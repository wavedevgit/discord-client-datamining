// modules/forwarding/isStaffToNonStaffForward.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function(arg0) { // Original name: isStaffChannel, environment: var1
        _fun70834: for (var _fun70834_ip = 0;;) switch (_fun70834_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.isPrivate;
                var1 = var1.bind(var0)();
                if (var1) {
                    _fun70834_ip = 75;
                    continue _fun70834
                }
            case 16:
                var4 = _closure1_slot1;
                var3 = var4.getGuild;
                var1 = var0.guild_id;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun70834_ip = 73;
                    continue _fun70834
                }
            case 47:
                var4 = var3.features;
                var3 = var4.has;
                var2 = _closure1_slot3;
                var2 = var2.INTERNAL_EMPLOYEE_ONLY;
                var1 = var3.bind(var4)(var2);
            case 73:
                return var1;
            case 75:
                var2 = var0.recipients;
                var1 = var2.every;
                var0 = function(arg0) { // Environment: var0
                    _fun70835: for (var _fun70835_ip = 0;;) switch (_fun70835_ip) {
                        case 0:
                            var2 = _closure1_slot2;
                            var1 = var2.getUser;
                            var0 = arg0;
                            var2 = var1.bind(var2)(var0);
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun70835_ip = 40;
                                continue _fun70835
                            }
                        case 30:
                            var1 = var2.isStaff;
                            var0 = var1.bind(var2)();
                        case 40:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/isStaffToNonStaffForward.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: isStaffToNonStaffForward, environment: var1
        _fun70836: for (var _fun70836_ip = 0;;) switch (_fun70836_ip) {
            case 0:
                var4 = arg1;
                var2 = _closure1_slot2;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var3)) {
                    _fun70836_ip = 112;
                    continue _fun70836
                }
            case 25:
                var2 = var3.isStaff;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun70836_ip = 112;
                    continue _fun70836
                }
            case 38:
                var5 = _closure1_slot0;
                var3 = var5.getChannel;
                var2 = arg0;
                var2 = var2.channel_id;
                var3 = var3.bind(var5)(var2);
                var0 = var0 != var3;
                if (!var0) {
                    _fun70836_ip = 110;
                    continue _fun70836
                }
            case 67:
                var2 = _closure1_slot4;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                var2 = !var1;
                var1 = !var2;
                if (var2) {
                    _fun70836_ip = 107;
                    continue _fun70836
                }
            case 87:
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    _fun70837: for (var _fun70837_ip = 0;;) switch (_fun70837_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = var3.getChannel;
                            var0 = arg0;
                            var4 = var1.bind(var3)(var0);
                            var0 = null;
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun70837_ip = 62;
                                continue _fun70837
                            }
                        case 29:
                            var1 = var4.isPrivate;
                            var1 = var1.bind(var4)();
                            var1 = !var1;
                            if (!var1) {
                                _fun70837_ip = 59;
                                continue _fun70837
                            }
                        case 45:
                            var3 = _closure1_slot4;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var4);
                            var1 = !var2;
                        case 59:
                            var0 = var1;
                        case 62:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2);
            case 107:
                var0 = var1;
            case 110:
                return var0;
            case 112:
                var0 = false;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 1613, 660, 2]);