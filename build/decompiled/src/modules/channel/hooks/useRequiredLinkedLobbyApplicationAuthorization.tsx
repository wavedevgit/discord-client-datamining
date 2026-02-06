// modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/hooks/useRequiredLinkedLobbyApplicationAuthorization.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90625: for (var _fun90625_ip = 0;;) switch (_fun90625_ip) {
            case 0:
                var1 = arg0;
                var4 = null;
                var2 = var4 != var1;
                var6 = null;
                if (!var2) {
                    _fun90625_ip = 35;
                    continue _fun90625
                }
            case 16:
                var2 = var1.require_application_authorization;
                var6 = null;
                if (!var2) {
                    _fun90625_ip = 35;
                    continue _fun90625
                }
            case 29:
                var6 = var1.application_id;
            case 35:
                var _closure2_slot0 = var6;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 3;
                var1 = var11[var5];
                var10 = undefined;
                var8 = var9.bind(var10)(var1);
                var3 = var8.useStateFromStoresObject;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot5;
                    var1 = var3.getFetchState;
                    var1 = var1.bind(var3)();
                    var0.authorizationsFetchState = var1;
                    var2 = var3.getNewestTokenForApplication;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var0.applicationOAuth2Token = var1;
                    return var0;
                };
                var1 = var3.bind(var8)(var2, var1);
                var8 = var1.authorizationsFetchState;
                var _closure2_slot1 = var8;
                var1 = var1.applicationOAuth2Token;
                var2 = var11[var5];
                var14 = var9.bind(var10)(var2);
                var13 = var14.useStateFromStores;
                var3 = _closure1_slot4;
                var12 = new Array(1);
                var12[0] = var3;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getApplication;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var13.bind(var14)(var12, var2);
                var _closure2_slot2 = var2;
                var5 = var11[var5];
                var11 = var9.bind(var10)(var5);
                var9 = var11.useStateFromStores;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    _fun90628: for (var _fun90628_ip = 0;;) switch (_fun90628_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var1 = var2.getApplication;
                            var4 = _closure2_slot2;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun90628_ip = 41;
                                continue _fun90628
                            }
                        case 31:
                            var3 = _closure2_slot2;
                            var0 = var3.parentId;
                        case 41:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var3 = var9.bind(var11)(var5, var3);
                var _closure2_slot3 = var3;
                var9 = _closure1_slot3;
                var11 = new Array(2);
                var11[0] = var8;
                var11[1] = var6;
                var5 = function() { // Environment: var0
                    _fun90629: for (var _fun90629_ip = 0;;) switch (_fun90629_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun90629_ip = 37;
                                continue _fun90629
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = _closure1_slot6;
                            var1 = var1.NOT_FETCHED;
                            var0 = var2 === var1;
                        case 37:
                            if (!var0) {
                                _fun90629_ip = 75;
                                continue _fun90629
                            }
                        case 40:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetch;
                            var0 = var0.bind(var1)();
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var9.bind(var10)(var5, var11);
                var11 = new Array(4);
                var11[0] = var6;
                var11[1] = var1;
                var11[2] = var8;
                var11[3] = var2;
                var5 = function() { // Environment: var0
                    _fun90630: for (var _fun90630_ip = 0;;) switch (_fun90630_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun90630_ip = 24;
                                continue _fun90630
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = var3 == var2;
                        case 24:
                            if (!var1) {
                                _fun90630_ip = 48;
                                continue _fun90630
                            }
                        case 27:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot6;
                            var2 = var2.FETCHED;
                            var1 = var3 === var2;
                        case 48:
                            if (!var1) {
                                _fun90630_ip = 102;
                                continue _fun90630
                            }
                        case 51:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchApplications;
                            var0 = _closure2_slot0;
                            var1 = new Array(1);
                            var1[0] = var0;
                            var0 = false;
                            var0 = var2.bind(var3)(var1, var0);
                        case 102:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var9.bind(var10)(var5, var11);
                var5 = new Array(3);
                var5[0] = var2;
                var5[1] = var8;
                var5[2] = var3;
                var0 = function() { // Environment: var0
                    _fun90631: for (var _fun90631_ip = 0;;) switch (_fun90631_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun90631_ip = 30;
                                continue _fun90631
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var2 = var2.parentId;
                            var1 = var3 != var2;
                        case 30:
                            if (!var1) {
                                _fun90631_ip = 41;
                                continue _fun90631
                            }
                        case 33:
                            var2 = _closure2_slot3;
                            var1 = var3 == var2;
                        case 41:
                            if (!var1) {
                                _fun90631_ip = 65;
                                continue _fun90631
                            }
                        case 44:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot6;
                            var2 = var2.FETCHED;
                            var1 = var3 === var2;
                        case 65:
                            if (!var1) {
                                _fun90631_ip = 125;
                                continue _fun90631
                            }
                        case 68:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.fetchApplications;
                            var0 = _closure2_slot2;
                            var0 = var0.parentId;
                            var1 = new Array(1);
                            var1[0] = var0;
                            var0 = false;
                            var0 = var2.bind(var3)(var1, var0);
                        case 125:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var9.bind(var10)(var0, var5);
                var5 = var4 != var2;
                if (!var5) {
                    _fun90625_ip = 311;
                    continue _fun90625
                }
            case 291:
                var0 = var2.parentId;
                var0 = var4 == var0;
                if (var0) {
                    _fun90625_ip = 308;
                    continue _fun90625
                }
            case 304:
                var0 = var4 != var3;
            case 308:
                var5 = var0;
            case 311:
                var0 = {};
                var6 = var4 != var6;
                if (!var6) {
                    _fun90625_ip = 350;
                    continue _fun90625
                }
            case 320:
                var7 = _closure1_slot6;
                var7 = var7.FETCHED;
                var7 = var8 !== var7;
                if (var7) {
                    _fun90625_ip = 341;
                    continue _fun90625
                }
            case 337:
                var7 = var4 == var2;
            case 341:
                if (var7) {
                    _fun90625_ip = 347;
                    continue _fun90625
                }
            case 344:
                var7 = !var5;
            case 347:
                var6 = var7;
            case 350:
                var0.showLinkedLobbyApplicationLoadingIndicator = var6;
                var6 = var4 == var1;
                var1 = null;
                if (!var6) {
                    _fun90625_ip = 388;
                    continue _fun90625
                }
            case 364:
                var6 = var4 != var2;
                var1 = null;
                if (!var6) {
                    _fun90625_ip = 388;
                    continue _fun90625
                }
            case 373:
                var1 = null;
                if (!var5) {
                    _fun90625_ip = 388;
                    continue _fun90625
                }
            case 378:
                if (!(var4 != var3)) {
                    _fun90625_ip = 385;
                    continue _fun90625
                }
            case 382:
                var2 = var3;
            case 385:
                var1 = var2;
            case 388:
                var0.requiredLinkedLobbyApplication = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3456, 4587, 566, 5356, 5349, 2]);