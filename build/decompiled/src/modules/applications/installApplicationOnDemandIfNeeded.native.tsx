// modules/applications/installApplicationOnDemandIfNeeded.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64281: for (var _fun64281_ip = 0;;) switch (_fun64281_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64281_ip = 454;
                            continue _fun64281
                        }
                    case 15:
                        var9 = var1.applicationId;
                        var _closure4_slot0 = var9;
                        var11 = var1.channel;
                        var10 = var1.commandIntegrationTypes;
                        var8 = var1.appLauncherContext;
                        var _closure4_slot1 = var8;
                        var7 = undefined;
                        var _closure4_slot2 = var7;
                        var _closure4_slot3 = var7;
                        SaveGenerator(address = 59);
                    case 57:
                        return var7;
                    case 59:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64281_ip = 451;
                            continue _fun64281
                        }
                    case 68:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var6 = var5.bind(var7)(var2);
                        var5 = var6.shouldInstallApplicationOnDemand;
                        var2 = {};
                        var2.applicationId = var9;
                        var2.channel = var11;
                        var2.commandIntegrationTypes = var10;
                        var2 = var5.bind(var6)(var2);
                        if (var2) {
                            _fun64281_ip = 151;
                            continue _fun64281
                        }
                    case 120:
                        var2 = global;
                        var6 = var2.Promise;
                        var5 = var6.resolve;
                        var2 = {};
                        var10 = true;
                        var2.isAuthorized = var10;
                        var2 = var5.bind(var6)(var2);
                        return var2;
                    case 151:
                        var5 = _closure1_slot4;
                        var2 = var5.getApplication;
                        var10 = var2.bind(var5)(var9);
                        var5 = null;
                        if (!(var5 == var10)) {
                            _fun64281_ip = 231;
                            continue _fun64281
                        }
                    case 172:
                        var6 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var2 = 5;
                        var2 = var11[var2];
                        var6 = var6.bind(var7)(var2);
                        var2 = var6.fetchApplication;
                        var2 = var2.bind(var6)(var9);
                        SaveGenerator(address = 207);
                    case 205:
                        return var2;
                    case 207:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun64281_ip = 448;
                            continue _fun64281
                        }
                    case 216:
                        var11 = _closure1_slot3;
                        var6 = var11.createFromServer;
                        var10 = var6.bind(var11)(var2);
                    case 231:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var6 = 6;
                        var6 = var12[var6];
                        var6 = var11.bind(var7)(var6);
                        var6 = var6.ApplicationIntegrationType;
                        var11 = var6.USER_INSTALL;
                        _closure4_slot2 = var11;
                        var12 = var5 == var10;
                        var6 = undefined;
                        if (var12) {
                            _fun64281_ip = 325;
                            continue _fun64281
                        }
                    case 276:
                        var10 = var10.integrationTypesConfig;
                        var12 = var5 == var10;
                        var6 = undefined;
                        if (var12) {
                            _fun64281_ip = 325;
                            continue _fun64281
                        }
                    case 291:
                        var10 = var10[var11];
                        var11 = var5 == var10;
                        var6 = undefined;
                        if (var11) {
                            _fun64281_ip = 325;
                            continue _fun64281
                        }
                    case 304:
                        var10 = var10.oauth2InstallParams;
                        var11 = var5 == var10;
                        var6 = undefined;
                        if (var11) {
                            _fun64281_ip = 325;
                            continue _fun64281
                        }
                    case 319:
                        var6 = var10.scopes;
                    case 325:
                        _closure4_slot3 = var6;
                        if (!(var5 != var8)) {
                            _fun64281_ip = 412;
                            continue _fun64281
                        }
                    case 333:
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var5 = 7;
                        var5 = var10[var5];
                        var7 = var6.bind(var7)(var5);
                        var6 = var7.trackWithMetadata;
                        var4 = _closure1_slot5;
                        var5 = var4.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED;
                        var4 = {};
                        var4.application_id = var9;
                        var9 = var8.location;
                        var4.location = var9;
                        var9 = var8.sectionName;
                        var4.section_name = var9;
                        var8 = var8.entrypoint;
                        var4.source = var8;
                        var4 = var6.bind(var7)(var5, var4);
                    case 412:
                        var4 = global;
                        var5 = var4.Promise;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var14 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 8;
                            var1 = var3[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var1 = var5.dismissKeyboard;
                            var1 = var1.bind(var5)();
                            var1 = 9;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openOAuth2Modal;
                            var1 = {};
                            var6 = _closure4_slot0;
                            var1.clientId = var6;
                            var6 = _closure4_slot2;
                            var1.integrationType = var6;
                            var5 = _closure4_slot3;
                            var1.scopes = var5;
                            var4 = function arg0() {
                                _fun64283: for (var _fun64283_ip = 0;;) switch (_fun64283_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.location;
                                        var1 = null;
                                        if (!(var1 == var0)) {
                                            _fun64283_ip = 42;
                                            continue _fun64283
                                        }
                                    case 14:
                                        var3 = _closure5_slot0;
                                        var2 = {};
                                        var0 = false;
                                        var2.isAuthorized = var0;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2);
                                        _fun64283_ip = 168;
                                        continue _fun64283;
                                    case 42:
                                        var0 = _closure4_slot1;
                                        if (!(var1 != var0)) {
                                            _fun64283_ip = 145;
                                            continue _fun64283
                                        }
                                    case 53:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var1 = 7;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.trackWithMetadata;
                                        var0 = _closure1_slot5;
                                        var1 = var0.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED;
                                        var0 = {};
                                        var5 = _closure4_slot0;
                                        var0.application_id = var5;
                                        var4 = _closure4_slot1;
                                        var5 = var4.location;
                                        var0.location = var5;
                                        var5 = var4.sectionName;
                                        var0.section_name = var5;
                                        var4 = var4.entrypoint;
                                        var0.source = var4;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 145:
                                        var2 = _closure5_slot0;
                                        var1 = {};
                                        var0 = true;
                                        var1.isAuthorized = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 168:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.callback = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var15 = var4;
                        var3 = new var15[var5](var14, var13);
                        var3 = var3 instanceof Object ? var3 : var4;
                        return var3;
                    case 448:
                        return var2;
                    case 451:
                        return var1;
                    case 454:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/installApplicationOnDemandIfNeeded.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.installApplicationOnDemandIfNeeded = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3455, 3454, 660, 7813, 5344, 5350, 4302, 3718, 7816, 2]);