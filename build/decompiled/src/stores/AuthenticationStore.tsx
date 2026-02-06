// stores/AuthenticationStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        _fun13305: for (var _fun13305_ip = 0;;) switch (_fun13305_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun13305_ip = 74;
                continue _fun13305;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot44 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function arg0() {
        var3 = _closure1_slot2;
        var6 = _closure1_slot3;
        var0 = 10;
        var1 = var6[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var1);
        var1 = var3.getToken;
        var1 = var1.bind(var3)();
        var3 = null;
        var5 = var3 != var1;
        var4 = _closure1_slot0;
        var1 = 11;
        var1 = var6[var1];
        var1 = var4.bind(var0)(var1);
        var6 = var1.Storage;
        var4 = var6.get;
        var1 = _closure1_slot16;
        var1 = var4.bind(var6)(var1);
        var1 = var3 != var1;
        var4 = _closure1_slot19;
        var3 = var4.verbose;
        var2 = {};
        var2.tokenManagerHasToken = var5;
        var2.storageHasToken = var1;
        var1 = arg0;
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot45 = var0;
    var0 = function() {
        _fun13309: for (var _fun13309_ip = 0;;) switch (_fun13309_ip) {
            case 0:
                var3 = arguments[0];
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun13309_ip = 11;
                    continue _fun13309
                }
            case 9:
                var3 = true;
            case 11:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 11;
                var6 = var5[var2];
                var6 = var4.bind(var1)(var6);
                var8 = var6.Storage;
                var7 = var8.get;
                var6 = _closure1_slot20;
                var6 = var7.bind(var8)(var6);
                _closure1_slot27 = var6;
                var2 = var5[var2];
                var2 = var4.bind(var1)(var2);
                var5 = var2.Storage;
                var4 = var5.get;
                var2 = _closure1_slot21;
                var4 = var4.bind(var5)(var2);
                var5 = null;
                var6 = var5 != var4;
                var2 = null;
                if (!var6) {
                    _fun13309_ip = 101;
                    continue _fun13309
                }
            case 98:
                var2 = var4;
            case 101:
                _closure1_slot29 = var2;
                var2 = _closure1_slot39;
                if (!(var5 == var2)) {
                    _fun13309_ip = 249;
                    continue _fun13309
                }
            case 116:
                var2 = _closure1_slot27;
                if (!(var5 == var2)) {
                    _fun13309_ip = 156;
                    continue _fun13309
                }
            case 124:
                var4 = _closure1_slot2;
                var6 = _closure1_slot3;
                var2 = 10;
                var2 = var6[var2];
                var4 = var4.bind(var1)(var2);
                var2 = var4.getToken;
                var4 = var2.bind(var4)();
                _fun13309_ip = 160;
                continue _fun13309;
            case 156:
                var4 = _closure1_slot27;
            case 160:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 12;
                var2 = var7[var2];
                var6 = var6.bind(var1)(var2);
                var2 = var6.isValidFingerprintRoute;
                var2 = var2.bind(var6)();
                var2 = !var2;
                if (var2) {
                    _fun13309_ip = 209;
                    continue _fun13309
                }
            case 196:
                var3 = !var3;
                if (!var3) {
                    _fun13309_ip = 206;
                    continue _fun13309
                }
            case 202:
                var3 = var5 != var4;
            case 206:
                var2 = var3;
            case 209:
                if (var2) {
                    _fun13309_ip = 226;
                    continue _fun13309
                }
            case 212:
                var4 = _closure1_slot9;
                var3 = var4.isHandoffAvailable;
                var2 = var3.bind(var4)();
            case 226:
                if (var2) {
                    _fun13309_ip = 247;
                    continue _fun13309
                }
            case 229:
                var3 = _closure1_slot47;
                var2 = {};
                var4 = true;
                var2.withGuildExperiments = var4;
                var2 = var3.bind(var1)(var2);
            case 247:
                return var1;
            case 249:
                var0 = _closure1_slot39;
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var10 = function arg0() {
        _fun13310: for (var _fun13310_ip = 0;;) switch (_fun13310_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.withGuildExperiments;
                var6 = {};
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 13;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.getSuperPropertiesBase64;
                var3 = var3.bind(var4)();
                var4 = null;
                if (!(var4 != var3)) {
                    _fun13310_ip = 60;
                    continue _fun13310
                }
            case 54:
                var6['X-Super-Properties'] = var3;
            case 60:
                var3 = _closure1_slot27;
                if (!(var4 != var3)) {
                    _fun13310_ip = 78;
                    continue _fun13310
                }
            case 68:
                var3 = _closure1_slot27;
                var6['X-Fingerprint'] = var3;
            case 78:
                var3 = _closure1_slot29;
                if (!(var4 != var3)) {
                    _fun13310_ip = 96;
                    continue _fun13310
                }
            case 86:
                var3 = _closure1_slot29;
                var6['X-Installation-ID'] = var3;
            case 96:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var3 = 14;
                var3 = var9[var3];
                var3 = var8.bind(var0)(var3);
                var5 = var3.HTTP;
                var4 = var5.get;
                var3 = {};
                var7 = _closure1_slot12;
                var7 = var7.EXPERIMENTS;
                var3.url = var7;
                var7 = {};
                var7.with_guild_experiments = var10;
                var3.query = var7;
                var3.headers = var6;
                var6 = {};
                var7 = 12;
                var7 = var9[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.getFingerprintLocation;
                var7 = var7.bind(var8)();
                var6.location = var7;
                var3.context = var6;
                var6 = 3;
                var3.retries = var6;
                var6 = true;
                var3.oldFormErrors = var6;
                var6 = false;
                var3.rejectWithError = var6;
                var5 = var4.bind(var5)(var3);
                var4 = var5.then;
                var3 = function(arg0) { // Environment: var1
                    _fun13311: for (var _fun13311_ip = 0;;) switch (_fun13311_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.body;
                            var8 = var0.fingerprint;
                            var7 = var0.assignments;
                            var6 = var0.guild_experiments;
                            if (!var8) {
                                _fun13311_ip = 79;
                                continue _fun13311
                            }
                        case 29:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'FINGERPRINT';
                            var0.type = var3;
                            var0.fingerprint = var8;
                            var0 = var1.bind(var2)(var0);
                        case 79:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 15;
                            var2 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var2);
                            var4 = var5.dispatch;
                            var2 = {};
                            var9 = 'EXPERIMENTS_FETCH_SUCCESS';
                            var2.type = var9;
                            var2.fingerprint = var8;
                            var2.experiments = var7;
                            var2.guildExperiments = var6;
                            var2 = var4.bind(var5)(var2);
                            var2 = null;
                            _closure1_slot39 = var2;
                            var2 = _closure1_slot0;
                            var1 = 16;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.onExperimentsLoaded;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var1 = function() { // Environment: var1
                    var1 = null;
                    _closure1_slot39 = var1;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'EXPERIMENTS_FETCH_FAILURE';
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var1);
                _closure1_slot39 = var1;
                return var0;
        }
    };
    var _closure1_slot47 = var10;
    var0 = function() {
        var0 = _closure1_slot27;
        _closure1_slot28 = var0;
        var0 = null;
        _closure1_slot27 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 11;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var3 = var2.Storage;
        var2 = var3.remove;
        var1 = _closure1_slot20;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot48 = var0;
    var0 = function arg0, arg1() {
        _fun13314: for (var _fun13314_ip = 0;;) switch (_fun13314_ip) {
            case 0:
                var4 = arg1;
                var3 = _closure1_slot45;
                var0 = undefined;
                var2 = 'setAuthToken called.';
                var2 = var3.bind(var0)(var2);
                var2 = null;
                var2 = var2 != var4;
                if (!var2) {
                    _fun13314_ip = 40;
                    continue _fun13314
                }
            case 32:
                var3 = _closure1_slot23;
                var2 = var4 === var3;
            case 40:
                if (var2) {
                    _fun13314_ip = 73;
                    continue _fun13314
                }
            case 43:
                var3 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 10;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.removeAnalyticsToken;
                var2 = var2.bind(var3)();
            case 73:
                var2 = _closure1_slot2;
                var3 = _closure1_slot3;
                var1 = 10;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.setToken;
                var1 = arg0;
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var _closure1_slot49 = var0;
    var0 = function arg0() {
        var3 = arg0;
        _closure1_slot30 = var3;
        var2 = _closure1_slot2;
        var1 = _closure1_slot3;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.setAnalyticsToken;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var _closure1_slot50 = var0;
    var0 = function() {
        var3 = _closure1_slot45;
        var2 = undefined;
        var1 = 'removeAuthToken called.';
        var1 = var3.bind(var2)(var1);
        var1 = _closure1_slot2;
        var3 = _closure1_slot3;
        var0 = 10;
        var4 = var3[var0];
        var5 = var1.bind(var2)(var4);
        var4 = var5.removeAnalyticsToken;
        var4 = var4.bind(var5)();
        var0 = var3[var0];
        var1 = var1.bind(var2)(var0);
        var0 = var1.removeToken;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot51 = var0;
    var0 = function() {
        _fun13317: for (var _fun13317_ip = 0;;) switch (_fun13317_ip) {
            case 0:
                var1 = new Array(0);
                var3 = _closure1_slot36;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun13317_ip = 46;
                    continue _fun13317
                }
            case 17:
                var3 = var1.push;
                var2 = {};
                var4 = 'webauthn';
                var2.type = var4;
                var4 = _closure1_slot36;
                var2.challenge = var4;
                var2 = var3.bind(var1)(var2);
            case 46:
                var2 = _closure1_slot37;
                if (!var2) {
                    _fun13317_ip = 73;
                    continue _fun13317
                }
            case 53:
                var3 = var1.push;
                var2 = {};
                var4 = 'totp';
                var2.type = var4;
                var2 = var3.bind(var1)(var2);
            case 73:
                var2 = _closure1_slot38;
                if (!var2) {
                    _fun13317_ip = 100;
                    continue _fun13317
                }
            case 80:
                var3 = var1.push;
                var2 = {};
                var4 = 'backup';
                var2.type = var4;
                var2 = var3.bind(var1)(var2);
            case 100:
                var2 = _closure1_slot35;
                if (!var2) {
                    _fun13317_ip = 127;
                    continue _fun13317
                }
            case 107:
                var3 = var1.push;
                var2 = {};
                var4 = 'sms';
                var2.type = var4;
                var2 = var3.bind(var1)(var2);
            case 127:
                _closure1_slot43 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot52 = var0;
    var11 = function arg0() {
        _fun13318: for (var _fun13318_ip = 0;;) switch (_fun13318_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.installation;
                var2 = _closure1_slot29;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun13318_ip = 37;
                    continue _fun13318
                }
            case 22:
                var0 = _closure1_slot29;
                var2 = var0.length;
                var0 = 0;
                if (!(!(var2 > var0))) {
                    _fun13318_ip = 119;
                    continue _fun13318
                }
            case 37:
                _closure1_slot29 = var4;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 19;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.canUseInstallationId;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun13318_ip = 117;
                    continue _fun13318
                }
            case 76:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 11;
                var2 = var5[var2];
                var2 = var3.bind(var0)(var2);
                var3 = var2.Storage;
                var2 = var3.set;
                var1 = _closure1_slot21;
                var1 = var2.bind(var3)(var1, var4);
            case 117:
                return var0;
            case 119:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot53 = var11;
    var9 = function() {
        var0 = true;
        _closure1_slot32 = var0;
        var2 = _closure1_slot55;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var2 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 15;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var0 = 12;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.transitionTo;
            var1 = _closure1_slot15;
            var1 = var1.REGISTER;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot54 = var9;
    var12 = function arg0() {
        _fun13321: for (var _fun13321_ip = 0;;) switch (_fun13321_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot45;
                var0 = undefined;
                var2 = 'handleLogout called.';
                var2 = var4.bind(var0)(var2);
                var2 = _closure1_slot51;
                var4 = var2.bind(var0)();
                var2 = null;
                var5 = var2 == var3;
                var6 = undefined;
                if (var5) {
                    _fun13321_ip = 48;
                    continue _fun13321
                }
            case 42:
                var6 = var3.isSwitchingAccount;
            case 48:
                var5 = var2 != var6;
                if (!var5) {
                    _fun13321_ip = 58;
                    continue _fun13321
                }
            case 55:
                var5 = var6;
            case 58:
                if (var5) {
                    _fun13321_ip = 80;
                    continue _fun13321
                }
            case 61:
                if (!var4) {
                    _fun13321_ip = 72;
                    continue _fun13321
                }
            case 64:
                var4 = _closure1_slot48;
                var4 = var4.bind(var0)();
            case 72:
                var4 = _closure1_slot46;
                var4 = var4.bind(var0)();
            case 80:
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var4 = 22;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var6 = var4.PersistedStore;
                var5 = var6.clearAll;
                var4 = {};
                var7 = ['InstallationManagerStore', 'AgeGateStore', 'NativePermissionsStore', 'MultiAccountStore', 'DraftStore', 'OverlayStoreV2', 'StreamerModeStore', 'LoginRequiredActionStore', 'LayoutStore', 'OverlaySettingsStore', 'ApexExperimentStore'];
                var4.omit = var7;
                var8 = var2 != var3;
                var9 = 'all';
                var7 = var9;
                if (!var8) {
                    _fun13321_ip = 161;
                    continue _fun13321
                }
            case 143:
                var8 = var3.isSwitchingAccount;
                var7 = var9;
                if (!var8) {
                    _fun13321_ip = 161;
                    continue _fun13321
                }
            case 155:
                var7 = 'user-data-only';
            case 161:
                var4.type = var7;
                var4 = var5.bind(var6)(var4);
                var5 = _closure1_slot10;
                var4 = var5.clearAll;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var4 = 20;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.clearUser;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot0;
                var4 = 11;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var6 = var4.Storage;
                var5 = var6.remove;
                var4 = _closure1_slot22;
                var4 = var5.bind(var6)(var4);
                _closure1_slot23 = var2;
                _closure1_slot24 = var2;
                if (!(var2 != var3)) {
                    _fun13321_ip = 272;
                    continue _fun13321
                }
            case 263:
                var3 = var3.isSwitchingAccount;
                if (var3) {
                    _fun13321_ip = 284;
                    continue _fun13321
                }
            case 272:
                var3 = _closure1_slot13;
                var3 = var3.NONE;
                _fun13321_ip = 294;
                continue _fun13321;
            case 284:
                var4 = _closure1_slot13;
                var3 = var4.LOGGING_IN;
            case 294:
                _closure1_slot31 = var3;
                var3 = '';
                _closure1_slot34 = var3;
                _closure1_slot36 = var2;
                var2 = false;
                _closure1_slot35 = var2;
                _closure1_slot41 = var2;
                _closure1_slot42 = var2;
                var1 = _closure1_slot52;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot55 = var12;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.AnalyticEvents;
    var _closure1_slot11 = var6;
    var6 = var1.Endpoints;
    var _closure1_slot12 = var6;
    var6 = var1.LoginStates;
    var _closure1_slot13 = var6;
    var8 = var1.Platforms;
    var _closure1_slot14 = var8;
    var8 = var1.Routes;
    var _closure1_slot15 = var8;
    var1 = var1.TOKEN_KEY;
    var _closure1_slot16 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.EXISTING_USER_AGE_GATE_MODAL_KEY;
    var1 = var1.NEW_USER_AGE_GATE_MODAL_KEY;
    var1 = 9;
    var1 = var5[var1];
    var8 = var7.bind(var0)(var1);
    var1 = var8.prototype;
    var13 = Object.create(var1, {
        constructor: {
            value: var8
        }
    });
    var1 = 'AuthenticationStore';
    var17 = var13;
    var16 = var1;
    var8 = new var17[var8](var16, var15);
    var8 = var8 instanceof Object ? var8 : var13;
    var _closure1_slot19 = var8;
    var8 = 'fingerprint';
    var _closure1_slot20 = var8;
    var8 = 'analytics_installation';
    var _closure1_slot21 = var8;
    var8 = 'user_id_cache';
    var _closure1_slot22 = var8;
    var8 = null;
    var _closure1_slot23 = var8;
    var _closure1_slot24 = var8;
    var _closure1_slot25 = var8;
    var _closure1_slot26 = var8;
    var _closure1_slot27 = var8;
    var _closure1_slot28 = var8;
    var _closure1_slot29 = var8;
    var _closure1_slot30 = var8;
    var6 = var6.NONE;
    var _closure1_slot31 = var6;
    var6 = false;
    var _closure1_slot32 = var6;
    var13 = new Array(0);
    var _closure1_slot33 = var13;
    var13 = '';
    var _closure1_slot34 = var13;
    var _closure1_slot35 = var6;
    var _closure1_slot36 = var8;
    var _closure1_slot37 = var6;
    var _closure1_slot38 = var6;
    var _closure1_slot39 = var8;
    var _closure1_slot40 = var8;
    var _closure1_slot41 = var6;
    var _closure1_slot42 = var6;
    var6 = new Array(0);
    var _closure1_slot43 = var6;
    var6 = 22;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var8 = var6.Store;
    var6 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun13323: for (var _fun13323_ip = 0;;) switch (_fun13323_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot44;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun13323_ip = 69;
                        continue _fun13323
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun13323_ip = 105;
                    continue _fun13323;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            _fun13324: for (var _fun13324_ip = 0;;) switch (_fun13324_ip) {
                case 0:
                    var3 = this;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 11;
                    var6 = var5[var2];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var6);
                    var8 = var6.Storage;
                    var7 = var8.get;
                    var6 = _closure1_slot22;
                    var6 = var7.bind(var8)(var6);
                    _closure1_slot23 = var6;
                    var2 = var5[var2];
                    var2 = var4.bind(var0)(var2);
                    var5 = var2.Storage;
                    var4 = var5.get;
                    var2 = _closure1_slot21;
                    var5 = var4.bind(var5)(var2);
                    var4 = null;
                    var6 = var4 != var5;
                    var2 = null;
                    if (!var6) {
                        _fun13324_ip = 95;
                        continue _fun13324
                    }
                case 92:
                    var2 = var5;
                case 95:
                    _closure1_slot29 = var2;
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var2 = 10;
                    var2 = var6[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.getToken;
                    var2 = var2.bind(var5)();
                    if (!(var4 == var2)) {
                        _fun13324_ip = 201;
                        continue _fun13324
                    }
                case 133:
                    var2 = _closure1_slot46;
                    var2 = var2.bind(var0)();
                    var2 = _closure1_slot29;
                    var2 = var4 != var2;
                    if (!var2) {
                        _fun13324_ip = 167;
                        continue _fun13324
                    }
                case 152:
                    var5 = _closure1_slot29;
                    var6 = var5.length;
                    var5 = 0;
                    var2 = var5 !== var6;
                case 167:
                    if (var2) {
                        _fun13324_ip = 201;
                        continue _fun13324
                    }
                case 170:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 23;
                    var1 = var5[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchInstallationExperiments;
                    var1 = var1.bind(var2)(var4);
                case 201:
                    var2 = var3.addChangeListener;
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.setClientState;
                        var0 = _closure1_slot23;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(20);
        var0[0] = var4;
        var4 = {};
        var6 = 'getLoginStatus';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot31;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSessionId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot24;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAuthSessionIdHash';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getStaticAuthSessionId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot26;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getToken';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 25;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.getToken;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isAuthenticated';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 25;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.isAuthenticated;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getFingerprint';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getInstallationForTracking';
        var4.key = var6;
        var6 = function() {
            _fun13334: for (var _fun13334_ip = 0;;) switch (_fun13334_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 19;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.canUseInstallationId;
                    var2 = var0.bind(var2)();
                    var0 = null;
                    if (!var2) {
                        _fun13334_ip = 44;
                        continue _fun13334
                    }
                case 40:
                    var0 = _closure1_slot29;
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getAnalyticsToken';
        var4.key = var6;
        var6 = function() {
            _fun13335: for (var _fun13335_ip = 0;;) switch (_fun13335_ip) {
                case 0:
                    var2 = _closure1_slot30;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun13335_ip = 47;
                        continue _fun13335
                    }
                case 13:
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var0 = 10;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.getAnalyticsToken;
                    var0 = var0.bind(var2)();
                    _fun13335_ip = 51;
                    continue _fun13335;
                case 47:
                    var0 = _closure1_slot30;
                case 51:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getMFATicket';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot34;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getMFAMethods';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot43;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getLoginInstanceId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'hasTOTPEnabled';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot33;
            var1 = var2.includes;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var0 = 26;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.AuthenticatorType;
            var0 = var0.TOTP;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getCredentials';
        var4.key = var6;
        var6 = function() {
            _fun13340: for (var _fun13340_ip = 0;;) switch (_fun13340_ip) {
                case 0:
                    var2 = _closure1_slot17;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun13340_ip = 19;
                        continue _fun13340
                    }
                case 13:
                    var0 = _closure1_slot17;
                    return var0;
                case 19:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'no credentials';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'allowLogoutRedirect';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot32;
            var0 = !var0;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getSuspendedUserToken';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot40;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getIsPasswordlessActive';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot41;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'attemptedPasswordLogin';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot42;
            return var0;
        };
        var4.value = var5;
        var0[19] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var6.bind(var0)(var8);
    var8.displayName = var1;
    var1 = 15;
    var6 = var5[var1];
    var7 = var7.bind(var0)(var6);
    var6 = {};
    var13 = function arg0() {
        _fun13345: for (var _fun13345_ip = 0;;) switch (_fun13345_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var9 = var0.sessionId;
                var8 = var0.authSessionIdHash;
                var7 = var0.analyticsToken;
                var4 = var0.auth;
                var6 = var0.staticAuthSessionId;
                var5 = var0.apexExperiments;
                var10 = _closure1_slot45;
                var0 = undefined;
                var2 = 'handleConnectionOpen called';
                var2 = var10.bind(var0)(var2);
                var10 = _closure1_slot1;
                var11 = _closure1_slot3;
                var2 = 20;
                var2 = var11[var2];
                var15 = var10.bind(var0)(var2);
                var14 = var15.setUser;
                var13 = var1.id;
                var12 = var1.username;
                var10 = var1.email;
                var2 = null;
                var16 = var2 != var10;
                var11 = undefined;
                if (!var16) {
                    _fun13345_ip = 120;
                    continue _fun13345
                }
            case 117:
                var11 = var10;
            case 120:
                var16 = _closure1_slot1;
                var17 = _closure1_slot3;
                var10 = 21;
                var10 = var17[var10];
                var10 = var16.bind(var0)(var10);
                var18 = var10.bind(var0)(var1);
                var22 = var15;
                var21 = var13;
                var20 = var12;
                var19 = var11;
                var10 = var22[var14](var21, var20, var19, var18, var17);
                _closure1_slot24 = var9;
                _closure1_slot25 = var8;
                _closure1_slot26 = var6;
                var6 = _closure1_slot50;
                var6 = var6.bind(var0)(var7);
                var6 = var1.id;
                _closure1_slot23 = var6;
                if (!(var0 !== var4)) {
                    _fun13345_ip = 205;
                    continue _fun13345
                }
            case 195:
                var4 = var4.authenticator_types;
                _closure1_slot33 = var4;
            case 205:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var4 = 11;
                var6 = var6[var4];
                var6 = var7.bind(var0)(var6);
                var8 = var6.Storage;
                var7 = var8.set;
                var6 = _closure1_slot22;
                var1 = var1.id;
                var1 = var7.bind(var8)(var6, var1);
                var6 = var2 == var5;
                var1 = undefined;
                if (var6) {
                    _fun13345_ip = 266;
                    continue _fun13345
                }
            case 260:
                var1 = var5.installation;
            case 266:
                if (!(var2 != var1)) {
                    _fun13345_ip = 300;
                    continue _fun13345
                }
            case 270:
                var2 = _closure1_slot53;
                var1 = {};
                var6 = 'INSTALLATION_ID';
                var1.type = var6;
                var5 = var5.installation;
                var1.installation = var5;
                var1 = var2.bind(var0)(var1);
            case 300:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var4];
                var1 = var2.bind(var0)(var1);
                var6 = var1.Storage;
                var5 = var6.get;
                var1 = _closure1_slot11;
                var2 = var1.APP_FIRST_LOGIN;
                var1 = true;
                var1 = var5.bind(var6)(var2, var1);
                if (!var1) {
                    _fun13345_ip = 445;
                    continue _fun13345
                }
            case 349:
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 13;
                var1 = var2[var1];
                var8 = var5.bind(var0)(var1);
                var7 = var8.track;
                var1 = _closure1_slot11;
                var6 = var1.APP_FIRST_LOGIN;
                var5 = {};
                var9 = _closure1_slot14;
                var9 = var9.IOS;
                var5.platform = var9;
                var5 = var7.bind(var8)(var6, var5);
                var3 = _closure1_slot0;
                var2 = var2[var4];
                var2 = var3.bind(var0)(var2);
                var4 = var2.Storage;
                var3 = var4.set;
                var2 = var1.APP_FIRST_LOGIN;
                var1 = false;
                var1 = var3.bind(var4)(var2, var1);
            case 445:
                return var0;
        }
    };
    var6.CONNECTION_OPEN = var13;
    var13 = function arg0() {
        _fun13346: for (var _fun13346_ip = 0;;) switch (_fun13346_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var5 = var0.sessionId;
                var4 = var0.analyticsToken;
                var7 = var0.token;
                var6 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 20;
                var3 = var3[var0];
                var0 = undefined;
                var12 = var6.bind(var0)(var3);
                var11 = var12.setUser;
                var10 = var1.id;
                var9 = var1.username;
                var6 = var1.email;
                var3 = null;
                var13 = var3 != var6;
                var8 = undefined;
                if (!var13) {
                    _fun13346_ip = 87;
                    continue _fun13346
                }
            case 84:
                var8 = var6;
            case 87:
                var13 = _closure1_slot1;
                var14 = _closure1_slot3;
                var6 = 21;
                var6 = var14[var6];
                var6 = var13.bind(var0)(var6);
                var15 = var6.bind(var0)(var1);
                var19 = var12;
                var18 = var10;
                var17 = var9;
                var16 = var8;
                var6 = var19[var11](var18, var17, var16, var15, var14);
                _closure1_slot24 = var5;
                _closure1_slot30 = var4;
                var6 = _closure1_slot49;
                var5 = var1.id;
                var5 = var6.bind(var0)(var7, var5);
                if (!(var3 != var4)) {
                    _fun13346_ip = 164;
                    continue _fun13346
                }
            case 155:
                var3 = _closure1_slot50;
                var3 = var3.bind(var0)(var4);
            case 164:
                var3 = _closure1_slot48;
                var3 = var3.bind(var0)();
                var3 = var1.id;
                _closure1_slot23 = var3;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 11;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var4 = var3.Storage;
                var3 = var4.set;
                var2 = _closure1_slot22;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var6.OVERLAY_INITIALIZE = var13;
    var13 = function arg0() {
        _fun13347: for (var _fun13347_ip = 0;;) switch (_fun13347_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.code;
                var5 = _closure1_slot45;
                var2 = global;
                var0 = var2.HermesInternal;
                var6 = var0.concat;
                var3 = 'handleConnectionClosed called with code ';
                var0 = '.';
                var3 = var6.bind(var3)(var4, var0);
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = 4004;
                if (!(var3 === var4)) {
                    _fun13347_ip = 178;
                    continue _fun13347
                }
            case 61:
                var3 = _closure1_slot32;
                if (var3) {
                    _fun13347_ip = 180;
                    continue _fun13347
                }
            case 68:
                var4 = _closure1_slot1;
                var9 = _closure1_slot3;
                var3 = 13;
                var3 = var9[var3];
                var6 = var4.bind(var0)(var3);
                var5 = var6.track;
                var3 = _closure1_slot11;
                var4 = var3.APP_USER_DEAUTHENTICATED;
                var3 = {};
                var8 = _closure1_slot0;
                var7 = 11;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var9 = var7.Storage;
                var8 = var9.get;
                var7 = _closure1_slot22;
                var7 = var8.bind(var9)(var7);
                var3.user_id = var7;
                var3 = var5.bind(var6)(var4, var3);
                var3 = _closure1_slot55;
                var3 = var3.bind(var0)();
                var3 = var2.setImmediate;
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.transitionTo;
                    var0 = _closure1_slot15;
                    var0 = var0.DEFAULT_LOGGED_OUT;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var0)(var2);
            case 178:
                return var0;
            case 180:
                var1 = _closure1_slot54;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var6.CONNECTION_CLOSED = var13;
    var13 = function arg0() {
        _fun13349: for (var _fun13349_ip = 0;;) switch (_fun13349_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.authSessionIdHash;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun13349_ip = 22;
                    continue _fun13349
                }
            case 15:
                _closure1_slot25 = var1;
            case 22:
                var0 = undefined;
                return var0;
        }
    };
    var6.AUTH_SESSION_CHANGE = var13;
    var13 = function arg0() {
        _fun13350: for (var _fun13350_ip = 0;;) switch (_fun13350_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.isPasswordAttempt;
                var0 = _closure1_slot13;
                var0 = var0.LOGGING_IN;
                _closure1_slot31 = var0;
                var0 = _closure1_slot42;
                if (var0) {
                    _fun13350_ip = 39;
                    continue _fun13350
                }
            case 33:
                var2 = true;
                var0 = var2 === var3;
            case 39:
                _closure1_slot42 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var6.LOGIN = var13;
    var13 = function arg0() {
        var0 = arg0;
        var3 = var0.token;
        var0 = _closure1_slot13;
        var0 = var0.NONE;
        _closure1_slot31 = var0;
        var1 = _closure1_slot49;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var1 = _closure1_slot48;
        var1 = var1.bind(var0)();
        var1 = '';
        _closure1_slot34 = var1;
        var1 = false;
        _closure1_slot35 = var1;
        var3 = null;
        _closure1_slot36 = var3;
        var _closure1_slot18 = var3;
        var3 = _closure1_slot52;
        var3 = var3.bind(var0)();
        _closure1_slot41 = var1;
        return var0;
    };
    var6.LOGIN_SUCCESS = var13;
    var13 = function arg0() {
        _fun13352: for (var _fun13352_ip = 0;;) switch (_fun13352_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.error;
                var0 = '';
                _closure1_slot34 = var0;
                var0 = false;
                _closure1_slot35 = var0;
                var3 = null;
                _closure1_slot36 = var3;
                _closure1_slot18 = var3;
                var1 = _closure1_slot52;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var1 = var6[var1];
                var4 = var4.bind(var0)(var1);
                var1 = var4.getAuthenticationErrorsFromV6OrEarlierAPIError;
                var1 = var1.bind(var4)(var5);
                var1 = var1.date_of_birth;
                if (!(var3 == var1)) {
                    _fun13352_ip = 98;
                    continue _fun13352
                }
            case 86:
                var1 = _closure1_slot13;
                var1 = var1.NONE;
                _fun13352_ip = 108;
                continue _fun13352;
            case 98:
                var3 = _closure1_slot13;
                var1 = var3.LOGIN_AGE_GATE;
            case 108:
                _closure1_slot31 = var1;
                return var0;
        }
    };
    var6.LOGIN_FAILURE = var13;
    var13 = function arg0() {
        _fun13353: for (var _fun13353_ip = 0;;) switch (_fun13353_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.ticket;
                var6 = var0.sms;
                var5 = var0.webauthn;
                var3 = var0.backup;
                var2 = var0.totp;
                var1 = var0.loginInstanceId;
                var4 = null;
                if (!(var4 != var7)) {
                    _fun13353_ip = 94;
                    continue _fun13353
                }
            case 45:
                _closure1_slot34 = var7;
                _closure1_slot35 = var6;
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun13353_ip = 68;
                    continue _fun13353
                }
            case 65:
                var4 = var5;
            case 68:
                _closure1_slot36 = var4;
                _closure1_slot38 = var3;
                _closure1_slot37 = var2;
                _closure1_slot18 = var1;
                var1 = _closure1_slot52;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 94:
                var0 = _closure1_slot13;
                var0 = var0.MFA_STEP;
                _closure1_slot31 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var6.LOGIN_MFA_STEP = var13;
    var13 = function() {
        var0 = _closure1_slot13;
        var0 = var0.LOGGING_IN_MFA;
        _closure1_slot31 = var0;
        var0 = undefined;
        return var0;
    };
    var6.LOGIN_MFA = var13;
    var13 = function arg0() {
        var0 = _closure1_slot13;
        var0 = var0.ACCOUNT_SCHEDULED_FOR_DELETION;
        _closure1_slot31 = var0;
        var0 = arg0;
        var0 = var0.credentials;
        var _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var6.LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION = var13;
    var13 = function arg0() {
        var0 = _closure1_slot13;
        var0 = var0.ACCOUNT_DISABLED;
        _closure1_slot31 = var0;
        var0 = arg0;
        var0 = var0.credentials;
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var6.LOGIN_ACCOUNT_DISABLED = var13;
    var13 = function arg0() {
        var0 = _closure1_slot13;
        var0 = var0.PASSWORD_RECOVERY_PHONE_VERIFICATION;
        _closure1_slot31 = var0;
        var0 = arg0;
        var0 = var0.credentials;
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var6.LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION = var13;
    var13 = function arg0() {
        var0 = _closure1_slot13;
        var0 = var0.PHONE_IP_AUTHORIZATION;
        _closure1_slot31 = var0;
        var0 = arg0;
        var0 = var0.credentials;
        _closure1_slot17 = var0;
        var0 = undefined;
        return var0;
    };
    var6.LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED = var13;
    var13 = function arg0() {
        _fun13359: for (var _fun13359_ip = 0;;) switch (_fun13359_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.isMultiAccount;
                var2 = _closure1_slot13;
                var2 = var2.NONE;
                _closure1_slot31 = var2;
                var2 = '';
                _closure1_slot34 = var2;
                var2 = false;
                _closure1_slot35 = var2;
                var3 = null;
                _closure1_slot36 = var3;
                _closure1_slot18 = var3;
                _closure1_slot17 = var3;
                if (var1) {
                    _fun13359_ip = 84;
                    continue _fun13359
                }
            case 57:
                var3 = _closure1_slot52;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure1_slot51;
                var3 = var3.bind(var1)();
                var0 = _closure1_slot46;
                var0 = var0.bind(var1)(var2);
            case 84:
                var0 = undefined;
                return var0;
        }
    };
    var6.LOGIN_RESET = var13;
    var13 = function() {
        var0 = _closure1_slot13;
        var0 = var0.NONE;
        _closure1_slot31 = var0;
        var0 = undefined;
        return var0;
    };
    var6.LOGIN_STATUS_RESET = var13;
    var13 = function arg0() {
        var0 = arg0;
        var1 = var0.suspendedUserToken;
        var2 = false;
        _closure1_slot41 = var2;
        _closure1_slot40 = var1;
        var0 = global;
        var2 = var0.setImmediate;
        var0 = undefined;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.transitionTo;
            var0 = _closure1_slot15;
            var0 = var0.ACCOUNT_STANDING;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var6.LOGIN_SUSPENDED_USER = var13;
    var6.LOGOUT = var12;
    var12 = function arg0() {
        _fun13363: for (var _fun13363_ip = 0;;) switch (_fun13363_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.fingerprint;
                var3 = _closure1_slot27;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun13363_ip = 157;
                    continue _fun13363
                }
            case 25:
                var3 = var2 != var1;
                if (!var3) {
                    _fun13363_ip = 40;
                    continue _fun13363
                }
            case 32:
                var4 = _closure1_slot27;
                var3 = var4 !== var1;
            case 40:
                if (!var3) {
                    _fun13363_ip = 355;
                    continue _fun13363
                }
            case 46:
                var4 = _closure1_slot1;
                var10 = _closure1_slot3;
                var3 = 13;
                var3 = var10[var3];
                var9 = undefined;
                var6 = var4.bind(var9)(var3);
                var5 = var6.track;
                var3 = _closure1_slot11;
                var4 = var3.EXTERNAL_FINGERPRINT_DROPPED;
                var3 = {};
                var8 = _closure1_slot0;
                var7 = 18;
                var11 = var10[var7];
                var13 = var8.bind(var9)(var11);
                var12 = var13.extractId;
                var11 = _closure1_slot27;
                var11 = var12.bind(var13)(var11);
                var3.fingerprint = var11;
                var7 = var10[var7];
                var8 = var8.bind(var9)(var7);
                var7 = var8.extractId;
                var7 = var7.bind(var8)(var1);
                var3.dropped_fingerprint = var7;
                var3 = var5.bind(var6)(var4, var3);
                _fun13363_ip = 355;
                continue _fun13363;
            case 157:
                if (!(var2 == var1)) {
                    _fun13363_ip = 176;
                    continue _fun13363
                }
            case 161:
                var4 = _closure1_slot46;
                var3 = undefined;
                var3 = var4.bind(var3)();
                _fun13363_ip = 355;
                continue _fun13363;
            case 176:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var8 = var5.bind(var3)(var4);
                var7 = var8.track;
                var4 = _closure1_slot11;
                var6 = var4.USER_FINGERPRINT_CHANGED;
                var5 = {};
                var4 = _closure1_slot28;
                var4 = var2 != var4;
                var2 = null;
                if (!var4) {
                    _fun13363_ip = 263;
                    continue _fun13363
                }
            case 228:
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var4 = 18;
                var4 = var10[var4];
                var10 = var9.bind(var3)(var4);
                var9 = var10.extractId;
                var4 = _closure1_slot28;
                var2 = var9.bind(var10)(var4);
            case 263:
                var5.old_fingerprint = var2;
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var9 = 18;
                var9 = var4[var9];
                var10 = var2.bind(var3)(var9);
                var9 = var10.extractId;
                var9 = var9.bind(var10)(var1);
                var5.new_fingerprint = var9;
                var5 = var7.bind(var8)(var6, var5);
                _closure1_slot27 = var1;
                _closure1_slot28 = var1;
                var1 = 11;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = _closure1_slot20;
                var0 = _closure1_slot27;
                var0 = var2.bind(var3)(var1, var0);
            case 355:
                var0 = undefined;
                return var0;
        }
    };
    var6.FINGERPRINT = var12;
    var6.INSTALLATION_ID = var11;
    var11 = function arg0() {
        var0 = arg0;
        var3 = var0.token;
        var2 = _closure1_slot49;
        var0 = undefined;
        var2 = var2.bind(var0)(var3);
        var1 = _closure1_slot48;
        var1 = var1.bind(var0)();
        return var0;
    };
    var6.REGISTER_SUCCESS = var11;
    var11 = function() {
        var0 = _closure1_slot13;
        var0 = var0.FORGOT_PASSWORD;
        _closure1_slot31 = var0;
        var0 = undefined;
        return var0;
    };
    var6.FORGOT_PASSWORD_REQUEST = var11;
    var11 = function() {
        var0 = _closure1_slot13;
        var0 = var0.NONE;
        _closure1_slot31 = var0;
        var0 = undefined;
        return var0;
    };
    var6.FORGOT_PASSWORD_SENT = var11;
    var11 = function arg0() {
        var0 = arg0;
        var4 = var0.token;
        var3 = var0.userId;
        var5 = _closure1_slot45;
        var0 = undefined;
        var2 = 'handleUpdateToken called';
        var2 = var5.bind(var0)(var2);
        var2 = _closure1_slot49;
        var2 = var2.bind(var0)(var4, var3);
        var1 = _closure1_slot48;
        var1 = var1.bind(var0)();
        return var0;
    };
    var6.UPDATE_TOKEN = var11;
    var6.EXPERIMENTS_FETCH = var10;
    var10 = function arg0() {
        _fun13368: for (var _fun13368_ip = 0;;) switch (_fun13368_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var0 = var1.id;
                _closure1_slot23 = var0;
                var3 = var1.authenticator_types;
                var0 = undefined;
                if (!(var0 !== var3)) {
                    _fun13368_ip = 42;
                    continue _fun13368
                }
            case 32:
                var3 = var1.authenticator_types;
                _closure1_slot33 = var3;
            case 42:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 11;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var4 = var3.Storage;
                var3 = var4.set;
                var2 = _closure1_slot22;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var6.CURRENT_USER_UPDATE = var10;
    var6.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER = var9;
    var9 = function() {
        var1 = null;
        _closure1_slot40 = var1;
        var1 = _closure1_slot13;
        var1 = var1.NONE;
        _closure1_slot31 = var1;
        var1 = _closure1_slot55;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var1 = global;
        var2 = var1.setImmediate;
        var1 = function() { // Environment: var1
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.transitionTo;
            var0 = _closure1_slot15;
            var0 = var0.DEFAULT_LOGGED_OUT;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var6.CLOSE_SUSPENDED_USER = var9;
    var9 = function arg0() {
        _fun13371: for (var _fun13371_ip = 0;;) switch (_fun13371_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.error;
                var0 = '';
                _closure1_slot34 = var0;
                var0 = false;
                _closure1_slot35 = var0;
                var3 = null;
                _closure1_slot36 = var3;
                _closure1_slot41 = var0;
                _closure1_slot18 = var3;
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var1);
                var1 = var4.getAuthenticationErrorsFromAPIError;
                var1 = var1.bind(var4)(var5);
                var1 = var1.date_of_birth;
                if (!(var3 == var1)) {
                    _fun13371_ip = 94;
                    continue _fun13371
                }
            case 82:
                var1 = _closure1_slot13;
                var1 = var1.NONE;
                _fun13371_ip = 104;
                continue _fun13371;
            case 94:
                var3 = _closure1_slot13;
                var1 = var3.LOGIN_AGE_GATE;
            case 104:
                _closure1_slot31 = var1;
                return var0;
        }
    };
    var6.PASSWORDLESS_FAILURE = var9;
    var3 = function() {
        var0 = true;
        _closure1_slot41 = var0;
        var0 = undefined;
        return var0;
    };
    var6.PASSWORDLESS_START = var3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.DispatchBand;
    var14 = var1.Early;
    var3 = var8.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var17 = var3;
    var16 = var7;
    var15 = var6;
    var1 = new var17[var8](var16, var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/AuthenticationStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1217, 1218, 660, 1219, 3, 804, 587, 1220, 795, 507, 806, 12638, 7513, 490, 12639, 1207, 10304, 566, 9891, 12640, 3205, 1645, 2]);