// modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1) { // Original name: compareVersions, environment: var1
        _fun43841: for (var _fun43841_ip = 0;;) switch (_fun43841_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.split;
                var3 = '.';
                var4 = var0.bind(var1)(var3);
                var2 = var4.map;
                var0 = global;
                var1 = var0.Number;
                var5 = var2.bind(var4)(var1);
                var2 = '13.2';
                var1 = var2.split;
                var3 = var1.bind(var2)(var3);
                var2 = var3.map;
                var1 = var0.Number;
                var4 = var2.bind(var3)(var1);
                var3 = var0.Math;
                var2 = var3.max;
                var1 = var5.length;
                var0 = var4.length;
                var3 = var2.bind(var3)(var1, var0);
                var0 = 0;
                var6 = var0 < var3;
                var2 = null;
                var1 = 0;
                if (!var6) {
                    _fun43841_ip = 154;
                    continue _fun43841
                }
            case 107:
                var6 = var5[var1];
                var8 = var2 != var6;
                var7 = 0;
                if (!var8) {
                    _fun43841_ip = 123;
                    continue _fun43841
                }
            case 120:
                var7 = var6;
            case 123:
                var8 = var4[var1];
                var9 = var2 != var8;
                var6 = 0;
                if (!var9) {
                    _fun43841_ip = 139;
                    continue _fun43841
                }
            case 136:
                var6 = var8;
            case 139:
                if (!(!(var7 < var6))) {
                    _fun43841_ip = 161;
                    continue _fun43841
                }
            case 143:
                if (!(!(var7 > var6))) {
                    _fun43841_ip = 156;
                    continue _fun43841
                }
            case 147:
                var1 = var1 + 1;
                if (var1 < var3) {
                    _fun43841_ip = 107;
                    continue _fun43841
                }
            case 154:
                return var0;
            case 156:
                var0 = 1;
                return var0;
            case 161:
                var0 = -1;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg2;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var6 = var3.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
    var3 = new Array(1);
    var3[0] = var6;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: canUseRoleSubscriptionIAP, environment: var1
        _fun43842: for (var _fun43842_ip = 0;;) switch (_fun43842_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 3;
                var0 = var4[var0];
                var6 = undefined;
                var3 = var3.bind(var6)(var0);
                var0 = var3.isIOS;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun43842_ip = 44;
                    continue _fun43842
                }
            case 40:
                var0 = false;
                return var0;
            case 44:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 4;
                var0 = var4[var0];
                var3 = var3.bind(var6)(var0);
                var0 = var3.getSystemVersion;
                var5 = var0.bind(var3)();
                var3 = null;
                if (!(var3 != var5)) {
                    _fun43842_ip = 162;
                    continue _fun43842
                }
            case 80:
                var4 = _closure1_slot5;
                var0 = '13.2';
                var4 = var4.bind(var6)(var5, var0);
                var0 = -1;
                if (!(var0 !== var4)) {
                    _fun43842_ip = 162;
                    continue _fun43842
                }
            case 106:
                var5 = _closure1_slot3;
                var4 = var5.getGuild;
                var0 = arg0;
                var0 = var4.bind(var5)(var0);
                var _closure2_slot0 = var0;
                var0 = var3 != var0;
                if (!var0) {
                    _fun43842_ip = 160;
                    continue _fun43842
                }
            case 134:
                var3 = _closure1_slot4;
                var2 = var3.every;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var2 = var0.features;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var0 = !var1;
            case 160:
                return var0;
            case 162:
                var0 = false;
                return var0;
        }
    };
    var2.canUseRoleSubscriptionIAP = var3;
    var1 = function(arg0) { // Original name: useCanUseRoleSubscriptionIAP, environment: var1
        _fun43844: for (var _fun43844_ip = 0;;) switch (_fun43844_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var6 = _closure1_slot2;
                var4 = var6.useMemo;
                var1 = function() { // Environment: var2
                    _fun43845: for (var _fun43845_ip = 0;;) switch (_fun43845_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 4;
                            var0 = var3[var0];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.getSystemVersion;
                            var3 = var0.bind(var2)();
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun43845_ip = 66;
                                continue _fun43845
                            }
                        case 44:
                            var2 = _closure1_slot5;
                            var1 = '13.2';
                            var2 = var2.bind(var4)(var3, var1);
                            var1 = 0;
                            var0 = var2 >= var1;
                        case 66:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var1 = var4.bind(var6)(var1, var0);
                var5 = var6.useMemo;
                var4 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.isIOS;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var5.bind(var6)(var4, var0);
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 5;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() { // Environment: var2
                    _fun43847: for (var _fun43847_ip = 0;;) switch (_fun43847_ip) {
                        case 0:
                            var4 = _closure1_slot3;
                            var3 = var4.getGuild;
                            var0 = _closure2_slot0;
                            var3 = var3.bind(var4)(var0);
                            var _closure3_slot0 = var3;
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun43847_ip = 59;
                                continue _fun43847
                            }
                        case 39:
                            var3 = _closure1_slot4;
                            var2 = var3.every;
                            var1 = function(arg0) { // Environment: var1
                                var0 = _closure3_slot0;
                                var2 = var0.features;
                                var1 = var2.has;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 59:
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                if (!var0) {
                    _fun43844_ip = 112;
                    continue _fun43844
                }
            case 109:
                var0 = var2;
            case 112:
                if (!var0) {
                    _fun43844_ip = 118;
                    continue _fun43844
                }
            case 115:
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var2.useCanUseRoleSubscriptionIAP = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 660, 478, 4734, 632, 2]);