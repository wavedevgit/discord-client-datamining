// modules/applications/utils/ApplicationInstallUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun62074: for (var _fun62074_ip = 0;;) switch (_fun62074_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.customInstallUrl;
                var2 = var1.installParams;
                var4 = var1.integrationTypesConfig;
                var1 = null;
                var0 = var1 != var0;
                if (var0) {
                    _fun62074_ip = 34;
                    continue _fun62074
                }
            case 30:
                var0 = var1 != var2;
            case 34:
                if (var0) {
                    _fun62074_ip = 83;
                    continue _fun62074
                }
            case 37:
                var1 = var1 != var4;
                if (!var1) {
                    _fun62074_ip = 80;
                    continue _fun62074
                }
            case 44:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.values;
                var4 = var2.bind(var3)(var4);
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    _fun62075: for (var _fun62075_ip = 0;;) switch (_fun62075_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = null;
                            var4 = var2 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun62075_ip = 20;
                                continue _fun62075
                            }
                        case 14:
                            var0 = var3.oauth2_install_params;
                        case 20:
                            var0 = var2 != var0;
                            if (var0) {
                                _fun62075_ip = 46;
                                continue _fun62075
                            }
                        case 27:
                            var4 = var2 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun62075_ip = 42;
                                continue _fun62075
                            }
                        case 36:
                            var1 = var3.oauth2InstallParams;
                        case 42:
                            var0 = var2 != var1;
                        case 46:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2);
            case 80:
                var0 = var1;
            case 83:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.BuiltInSectionId;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/utils/ApplicationInstallUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.canInstallApplication = var3;
    var3 = function arg0() {
        _fun62076: for (var _fun62076_ip = 0;;) switch (_fun62076_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.customInstallUrl;
                var4 = var0.installParams;
                var2 = var0.integrationTypesConfig;
                var3 = _closure1_slot4;
                var0 = {};
                var0.customInstallUrl = var5;
                var0.installParams = var4;
                var0.integrationTypesConfig = var2;
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun62076_ip = 61;
                    continue _fun62076
                }
            case 55:
                var3 = null;
                var0 = var3 != var2;
            case 61:
                if (!var0) {
                    _fun62076_ip = 100;
                    continue _fun62076
                }
            case 64:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationIntegrationType;
                var1 = var1.USER_INSTALL;
                var0 = var1 in var2;
            case 100:
                return var0;
        }
    };
    var2.isAppUserInstallable = var3;
    var1 = function arg0() {
        _fun62077: for (var _fun62077_ip = 0;;) switch (_fun62077_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.applicationId;
                var7 = var0.channel;
                var4 = var0.commandIntegrationTypes;
                var3 = null;
                var1 = var3 != var4;
                if (!var1) {
                    _fun62077_ip = 78;
                    continue _fun62077
                }
            case 28:
                var2 = var4.includes;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var5 = var5[var0];
                var0 = undefined;
                var0 = var6.bind(var0)(var5);
                var0 = var0.ApplicationIntegrationType;
                var0 = var0.USER_INSTALL;
                var0 = var2.bind(var4)(var0);
                var1 = !var0;
            case 78:
                var0 = !var1;
                if (var1) {
                    _fun62077_ip = 186;
                    continue _fun62077
                }
            case 84:
                var1 = _closure1_slot3;
                var1 = var1.BUILT_IN;
                var2 = var8 === var1;
                var1 = !var2;
                if (var2) {
                    _fun62077_ip = 183;
                    continue _fun62077
                }
            case 107:
                var5 = _closure1_slot2;
                var2 = var5.hasUserStateApplication;
                var2 = var2.bind(var5)(var8);
                var2 = !var2;
                if (!var2) {
                    _fun62077_ip = 180;
                    continue _fun62077
                }
            case 128:
                var3 = var3 == var7;
                if (var3) {
                    _fun62077_ip = 177;
                    continue _fun62077
                }
            case 135:
                var6 = _closure1_slot2;
                var5 = var6.hasContextStateApplication;
                var4 = {};
                var4.applicationId = var8;
                var8 = var7.id;
                var4.channelId = var8;
                var7 = var7.guild_id;
                var4.guildId = var7;
                var4 = var5.bind(var6)(var4);
                var3 = !var4;
            case 177:
                var2 = var3;
            case 180:
                var1 = var2;
            case 183:
                var0 = var1;
            case 186:
                return var0;
        }
    };
    var2.shouldInstallApplicationOnDemand = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4637, 4509, 5312, 2]);