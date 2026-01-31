// modules/user_settings/native/connections/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlayStationLinkModalScenes;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PLAYSTATION_CLIENT_SCOPES;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun51431: for (var _fun51431_ip = 0;;) switch (_fun51431_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.callbackCode;
                var9 = var1.callbackState;
                var11 = var1.platformType;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigation;
                var5 = var1.bind(var2)();
                var _closure2_slot0 = var5;
                var4 = _closure1_slot2;
                var6 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = _closure1_slot3;
                    var0 = var0.SUCCESS;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var6 = var6.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function(arg0) { // Environment: var0
                    var3 = _closure2_slot0;
                    var2 = var3.push;
                    var0 = _closure1_slot3;
                    var1 = var0.ERROR;
                    var0 = {};
                    var4 = arg0;
                    var0.errorCode = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var5 = var2.bind(var4)(var0, var1);
                var0 = _closure1_slot4;
                var0 = var0.PLAYSTATION_STAGING;
                if (!(var11 !== var0)) {
                    _fun51431_ip = 162;
                    continue _fun51431
                }
            case 128:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ConsoleOAuthApplications;
                var8 = var0.PLAYSTATION_APPLICATION_ID;
                _fun51431_ip = 194;
                continue _fun51431;
            case 162:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ConsoleOAuthApplications;
                var8 = var0.PLAYSTATION_STAGING_APPLICATION_ID;
            case 194:
                var0 = _closure1_slot4;
                var0 = var0.PLAYSTATION_STAGING;
                if (!(var11 !== var0)) {
                    _fun51431_ip = 242;
                    continue _fun51431
                }
            case 208:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ConsoleAuthorizationRedirectURIs;
                var4 = var0.PLAYSTATION;
                _fun51431_ip = 274;
                continue _fun51431;
            case 242:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ConsoleAuthorizationRedirectURIs;
                var4 = var0.PLAYSTATION_STAGING;
            case 274:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var12 = _closure1_slot1;
                var0 = 8;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TwoWayLinkDiscordConsent;
                var0 = {};
                var0.platformType = var11;
                var0.callbackCode = var10;
                var0.callbackState = var9;
                var0.clientId = var8;
                var7 = _closure1_slot5;
                var0.scopes = var7;
                var0.onNext = var6;
                var0.onError = var5;
                var0.redirectUri = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PlayStationLinkDiscordConsent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5820, 660, 5301, 33, 1469, 5735, 5826, 5302, 2]);