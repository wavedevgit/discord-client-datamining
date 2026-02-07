// modules/opt_in_channels/isOptInEnabled.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot6 = var6;
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/opt_in_channels/isOptInEnabled.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot4;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = _closure1_slot2;
        var1[1] = var5;
        var4 = _closure1_slot5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun41669: for (var _fun41669_ip = 0;;) switch (_fun41669_ip) {
                case 0:
                    var1 = _closure1_slot4;
                    var0 = var1.isOptInEnabled;
                    var3 = _closure2_slot0;
                    var0 = var0.bind(var1)(var3);
                    var2 = _closure1_slot2;
                    var1 = var2.getGuild;
                    var1 = var1.bind(var2)(var3);
                    var2 = null;
                    var6 = var2 == var1;
                    var5 = undefined;
                    if (var6) {
                        _fun41669_ip = 76;
                        continue _fun41669
                    }
                case 50:
                    var7 = var1.features;
                    var6 = var7.has;
                    var1 = _closure1_slot6;
                    var1 = var1.COMMUNITY;
                    var5 = var6.bind(var7)(var1);
                case 76:
                    var1 = var2 != var5;
                    if (!var1) {
                        _fun41669_ip = 86;
                        continue _fun41669
                    }
                case 83:
                    var1 = var5;
                case 86:
                    var5 = _closure1_slot5;
                    var4 = var5.getCurrentUser;
                    var5 = var4.bind(var5)();
                    var4 = var2 == var5;
                    var3 = undefined;
                    if (var4) {
                        _fun41669_ip = 118;
                        continue _fun41669
                    }
                case 108:
                    var4 = var5.isStaff;
                    var3 = var4.bind(var5)();
                case 118:
                    var2 = var2 != var3;
                    if (!var2) {
                        _fun41669_ip = 128;
                        continue _fun41669
                    }
                case 125:
                    var2 = var3;
                case 128:
                    if (!var0) {
                        _fun41669_ip = 140;
                        continue _fun41669
                    }
                case 131:
                    if (var1) {
                        _fun41669_ip = 137;
                        continue _fun41669
                    }
                case 134:
                    var1 = var2;
                case 137:
                    var0 = var1;
                case 140:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useOptInEnabledForGuild = var3;
    var3 = function arg0() {
        _fun41670: for (var _fun41670_ip = 0;;) switch (_fun41670_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot2;
                var0 = var1.getGuild;
                var1 = var0.bind(var1)(var4);
                var3 = _closure1_slot5;
                var0 = var3.getCurrentUser;
                var5 = var0.bind(var3)();
                var3 = null;
                var0 = var3 != var4;
                if (!var0) {
                    _fun41670_ip = 46;
                    continue _fun41670
                }
            case 42:
                var0 = var3 != var1;
            case 46:
                if (!var0) {
                    _fun41670_ip = 53;
                    continue _fun41670
                }
            case 49:
                var0 = var3 != var5;
            case 53:
                if (!var0) {
                    _fun41670_ip = 116;
                    continue _fun41670
                }
            case 56:
                var6 = var1.features;
                var3 = var6.has;
                var1 = _closure1_slot6;
                var1 = var1.COMMUNITY;
                var1 = var3.bind(var6)(var1);
                if (var1) {
                    _fun41670_ip = 95;
                    continue _fun41670
                }
            case 85:
                var3 = var5.isStaff;
                var1 = var3.bind(var5)();
            case 95:
                if (!var1) {
                    _fun41670_ip = 113;
                    continue _fun41670
                }
            case 98:
                var3 = _closure1_slot4;
                var2 = var3.isOptInEnabled;
                var1 = var2.bind(var3)(var4);
            case 113:
                var0 = var1;
            case 116:
                return var0;
        }
    };
    var2.isOptInEnabledForGuild = var3;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot2;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot3;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun41672: for (var _fun41672_ip = 0;;) switch (_fun41672_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var3)(var0);
                    var5 = _closure1_slot3;
                    var3 = var5.can;
                    var0 = _closure1_slot7;
                    var2 = var0.MANAGE_GUILD;
                    var3 = var3.bind(var5)(var2, var4);
                    var2 = var5.can;
                    var0 = var0.MANAGE_ROLES;
                    var2 = var2.bind(var5)(var0, var4);
                    var0 = null;
                    var6 = var0 == var4;
                    var5 = undefined;
                    if (var6) {
                        _fun41672_ip = 105;
                        continue _fun41672
                    }
                case 79:
                    var7 = var4.features;
                    var6 = var7.has;
                    var1 = _closure1_slot6;
                    var1 = var1.GUILD_ONBOARDING_EVER_ENABLED;
                    var5 = var6.bind(var7)(var1);
                case 105:
                    var1 = var0 != var5;
                    if (!var1) {
                        _fun41672_ip = 115;
                        continue _fun41672
                    }
                case 112:
                    var1 = var5;
                case 115:
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun41672_ip = 125;
                        continue _fun41672
                    }
                case 122:
                    var0 = var3;
                case 125:
                    if (!var0) {
                        _fun41672_ip = 131;
                        continue _fun41672
                    }
                case 128:
                    var0 = var2;
                case 131:
                    if (!var0) {
                        _fun41672_ip = 137;
                        continue _fun41672
                    }
                case 134:
                    var0 = !var1;
                case 137:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useShouldShowOnboardingAdminUpsellForGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3093, 4303, 1621, 660, 566, 2]);