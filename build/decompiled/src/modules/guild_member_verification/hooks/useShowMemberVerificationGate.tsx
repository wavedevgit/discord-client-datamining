// modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun44307: for (var _fun44307_ip = 0;;) switch (_fun44307_ip) {
            case 0:
                var7 = arg0;
                var1 = arguments[1];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun44307_ip = 46;
                    continue _fun44307
                }
            case 12:
                var3 = _closure1_slot3;
                var0 = new Array(3);
                var0[0] = var3;
                var3 = _closure1_slot4;
                var0[1] = var3;
                var2 = _closure1_slot2;
                var0[2] = var2;
                var1 = var0;
            case 46:
                var5 = var1;
                var0 = var5[Symbol.iterator];
                var5 = var0().next;
                var2 = var5().value;
                var1 = var0;
                var1 = var1 === var4;
                var3 = undefined;
                if (var1) {
                    _fun44307_ip = 71;
                    continue _fun44307
                }
            case 68:
                var3 = var2;
            case 71:
                var2 = undefined;
                if (var1) {
                    _fun44307_ip = 101;
                    continue _fun44307
                }
            case 76:
                var8 = var5().value;
                var6 = var0;
                var6 = var6 === var4;
                var2 = undefined;
                var1 = var6;
                if (var6) {
                    _fun44307_ip = 101;
                    continue _fun44307
                }
            case 95:
                var2 = var8;
                var1 = var6;
            case 101:
                var6 = undefined;
                if (var1) {
                    _fun44307_ip = 131;
                    continue _fun44307
                }
            case 106:
                var8 = var5().value;
                var5 = var0;
                var5 = var5 === var4;
                var6 = undefined;
                var1 = var5;
                if (var5) {
                    _fun44307_ip = 131;
                    continue _fun44307
                }
            case 125:
                var6 = var8;
                var1 = var5;
            case 131:
                if (var1) {
                    _fun44307_ip = 137;
                    continue _fun44307
                }
            case 134:
                var0.return();
            case 137:
                var1 = null;
                if (!(var1 != var7)) {
                    _fun44307_ip = 261;
                    continue _fun44307
                }
            case 143:
                var0 = var3.getGuild;
                var3 = var0.bind(var3)(var7);
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var5 = var1 != var2;
                var0 = false;
                if (!var5) {
                    _fun44307_ip = 216;
                    continue _fun44307
                }
            case 171:
                var5 = var6.getMember;
                var2 = var2.id;
                var5 = var5.bind(var6)(var7, var2);
                var6 = var1 == var5;
                var2 = undefined;
                if (var6) {
                    _fun44307_ip = 203;
                    continue _fun44307
                }
            case 197:
                var2 = var5.isPending;
            case 203:
                var1 = var1 != var2;
                if (!var1) {
                    _fun44307_ip = 213;
                    continue _fun44307
                }
            case 210:
                var1 = var2;
            case 213:
                var0 = var1;
            case 216:
                if (!var0) {
                    _fun44307_ip = 259;
                    continue _fun44307
                }
            case 219:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.guildHasVerificationGate;
                var1 = var1.bind(var2)(var3);
                var1 = !var1;
                var0 = !var1;
            case 259:
                return var0;
            case 261:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx';
    var4 = var5.bind(var6)(var4);
    var2.shouldShowMembershipVerificationGate = var3;
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot4;
        var2[1] = var6;
        var1 = _closure1_slot2;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun44309: for (var _fun44309_ip = 0;;) switch (_fun44309_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun44309_ip = 63;
                        continue _fun44309
                    }
                case 16:
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var5 = _closure1_slot3;
                    var2 = new Array(3);
                    var2[0] = var5;
                    var5 = _closure1_slot4;
                    var2[1] = var5;
                    var1 = _closure1_slot2;
                    var2[2] = var1;
                    var1 = undefined;
                    var0 = var4.bind(var1)(var3, var2);
                case 63:
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useShowMemberVerificationGate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1681, 1410, 1621, 4828, 566, 2]);