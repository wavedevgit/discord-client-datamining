// utils/native/ApplicationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var3 = function arg0() {
        var7 = arg0;
        var _closure2_slot0 = var7;
        var4 = _closure1_slot1;
        var2 = _closure1_slot3;
        var3 = 7;
        var5 = var2[var3];
        var0 = undefined;
        var9 = var4.bind(var0)(var5);
        var8 = var9.popWithKey;
        var5 = _closure1_slot5;
        var5 = var8.bind(var9)(var5);
        var3 = var2[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var8 = _closure1_slot0;
        var3 = 9;
        var3 = var2[var3];
        var8 = var8.bind(var0)(var3);
        var3 = 8;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var8.bind(var0)(var3, var2);
        var2 = {};
        var12 = var2;
        var11 = var7;
        var7 = copyDataProperties(var12, var11);
        var7 = function() {
            _fun62202: for (var _fun62202_ip = 0;;) switch (_fun62202_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.dismissOAuthModal;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun62202_ip = 33;
                        continue _fun62202
                    }
                case 19:
                    var1 = _closure2_slot0;
                    var0 = var1.dismissOAuthModal;
                    var0 = var0.bind(var1)();
                case 33:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.popWithKey;
                    var1 = _closure1_slot5;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var6 = 'dismissOAuthModal';
        var2[var6] = var7;
        var1 = _closure1_slot5;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.OAUTH2_AUTHORIZE_MODAL_KEY;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/ApplicationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun62203: for (var _fun62203_ip = 0;;) switch (_fun62203_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.applicationId;
                var4 = var0.customInstallUrl;
                var _closure2_slot0 = var4;
                var14 = var0.installParams;
                var2 = var0.integrationTypesConfig;
                var7 = var0.guildId;
                var6 = var0.channelId;
                var5 = var0.disableGuildSelect;
                var9 = var0.source;
                var0 = var0.oauth2Callback;
                var _closure2_slot1 = var0;
                var11 = null;
                if (!(var11 == var4)) {
                    _fun62203_ip = 458;
                    continue _fun62203
                }
            case 74:
                if (!(var11 != var2)) {
                    _fun62203_ip = 118;
                    continue _fun62203
                }
            case 78:
                var0 = global;
                var1 = var0.Object;
                var0 = var1.values;
                var2 = var0.bind(var1)(var2);
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var3
                    _fun62205: for (var _fun62205_ip = 0;;) switch (_fun62205_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = null;
                            var4 = var2 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun62205_ip = 20;
                                continue _fun62205
                            }
                        case 14:
                            var0 = var3.oauth2_install_params;
                        case 20:
                            var0 = var2 != var0;
                            if (var0) {
                                _fun62205_ip = 46;
                                continue _fun62205
                            }
                        case 27:
                            var4 = var2 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun62205_ip = 42;
                                continue _fun62205
                            }
                        case 36:
                            var1 = var3.oauth2InstallParams;
                        case 42:
                            var0 = var2 != var1;
                        case 46:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun62203_ip = 340;
                    continue _fun62203
                }
            case 118:
                if (!(var11 != var14)) {
                    _fun62203_ip = 336;
                    continue _fun62203
                }
            case 125:
                var1 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var13 = var1.bind(var2)(var0);
                var8 = var13.track;
                var0 = _closure1_slot4;
                var1 = var0.APPLICATION_ADD_TO_SERVER_CLICKED;
                var0 = {};
                var0.application_id = var10;
                var15 = 'in_app';
                var0.auth_type = var15;
                var0.source = var9;
                var15 = 'mobile_native';
                var0.device_platform = var15;
                var0 = var8.bind(var13)(var1, var0);
                var1 = _closure1_slot6;
                var0 = {};
                var0.clientId = var10;
                var0.guildId = var7;
                var0.channelId = var6;
                var0.disableGuildSelect = var5;
                var13 = var11 == var14;
                var8 = undefined;
                if (var13) {
                    _fun62203_ip = 241;
                    continue _fun62203
                }
            case 235:
                var8 = var14.scopes;
            case 241:
                var0.scopes = var8;
                var13 = var11 == var14;
                var8 = undefined;
                if (var13) {
                    _fun62203_ip = 261;
                    continue _fun62203
                }
            case 255:
                var8 = var14.permissions;
            case 261:
                var13 = var11 != var8;
                var8 = undefined;
                if (!var13) {
                    _fun62203_ip = 316;
                    continue _fun62203
                }
            case 270:
                var13 = _closure1_slot2;
                var15 = _closure1_slot3;
                var12 = 6;
                var12 = var15[var12];
                var13 = var13.bind(var2)(var12);
                var12 = var13.deserialize;
                var15 = var11 == var14;
                var11 = undefined;
                if (var15) {
                    _fun62203_ip = 311;
                    continue _fun62203
                }
            case 305:
                var11 = var14.permissions;
            case 311:
                var8 = var12.bind(var13)(var11);
            case 316:
                var0.permissions = var8;
                var8 = function arg0() {
                    _fun62207: for (var _fun62207_ip = 0;;) switch (_fun62207_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.bind(var0)(var2);
                            var4 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun62207_ip = 55;
                                continue _fun62207
                            }
                        case 46:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                        case 55:
                            return var0;
                    }
                };
                var0.callback = var8;
                var0 = var1.bind(var2)(var0);
            case 336:
                var0 = undefined;
                return var0;
            case 340:
                var8 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var12 = var8.bind(var0)(var2);
                var11 = var12.track;
                var2 = _closure1_slot4;
                var8 = var2.APPLICATION_ADD_TO_SERVER_CLICKED;
                var2 = {};
                var2.application_id = var10;
                var13 = 'in_app';
                var2.auth_type = var13;
                var2.source = var9;
                var13 = 'mobile_native';
                var2.device_platform = var13;
                var2 = var11.bind(var12)(var8, var2);
                var2 = _closure1_slot6;
                var1 = {};
                var1.clientId = var10;
                var1.guildId = var7;
                var1.channelId = var6;
                var1.disableGuildSelect = var5;
                var5 = function arg0() {
                    _fun62206: for (var _fun62206_ip = 0;;) switch (_fun62206_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.bind(var0)(var2);
                            var4 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun62206_ip = 55;
                                continue _fun62206
                            }
                        case 46:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                        case 55:
                            return var0;
                    }
                };
                var1.callback = var5;
                var1 = var2.bind(var0)(var1);
                return var0;
            case 458:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 2;
                var1 = var5[var1];
                var2 = undefined;
                var8 = var6.bind(var2)(var1);
                var7 = var8.track;
                var1 = _closure1_slot4;
                var6 = var1.APPLICATION_ADD_TO_SERVER_CLICKED;
                var1 = {};
                var1.application_id = var10;
                var10 = 'custom_url';
                var1.auth_type = var10;
                var1.source = var9;
                var9 = 'mobile_native';
                var1.device_platform = var9;
                var1 = var7.bind(var8)(var6, var1);
                var1 = _closure1_slot0;
                var0 = 3;
                var0 = var5[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.handleClick;
                var0 = {};
                var0.href = var4;
                var3 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openURL;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onConfirm = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.installApplication = var4;
    var2.openOAuth2Modal = var3;
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.applicationId;
        var7 = var0.channelId;
        var6 = var0.callback;
        var3 = _closure1_slot1;
        var10 = _closure1_slot3;
        var0 = 7;
        var2 = var10[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var4 = var5.pushLazy;
        var9 = _closure1_slot0;
        var2 = 9;
        var2 = var10[var2];
        var11 = var9.bind(var0)(var2);
        var2 = 8;
        var3 = var10[var2];
        var2 = var10.paths;
        var3 = var11.bind(var0)(var3, var2);
        var2 = {};
        var2.clientId = var8;
        var8 = 10;
        var8 = var10[var8];
        var8 = var9.bind(var0)(var8);
        var8 = var8.OAuth2Scopes;
        var9 = var8.APPLICATIONS_COMMANDS;
        var8 = new Array(1);
        var8[0] = var9;
        var2.scopes = var8;
        var2.channelId = var7;
        var7 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.popWithKey;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2.dismissOAuthModal = var7;
        var7 = true;
        var2.disableGuildSelect = var7;
        var2.callback = var6;
        var1 = _closure1_slot5;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.installPrivateChannelIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 7809, 795, 5885, 3135, 7810, 484, 4557, 7815, 1307, 3330, 2]);