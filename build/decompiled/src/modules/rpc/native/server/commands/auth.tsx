// modules/rpc/native/server/commands/auth.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ComponentActions;
    var _closure1_slot4 = var7;
    var7 = var3.ApplicationFlags;
    var _closure1_slot5 = var7;
    var3 = var3.RPCErrors;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var2 = var1.clientId;
        var _closure2_slot0 = var2;
        var2 = var1.authorizations;
        var _closure2_slot1 = var2;
        var2 = var1.scopes;
        var _closure2_slot2 = var2;
        var2 = var1.parsedPermissions;
        var _closure2_slot3 = var2;
        var2 = var1.responseType;
        var _closure2_slot4 = var2;
        var2 = var1.redirectUri;
        var _closure2_slot5 = var2;
        var2 = var1.codeChallenge;
        var _closure2_slot6 = var2;
        var2 = var1.codeChallengeMethod;
        var _closure2_slot7 = var2;
        var2 = var1.state;
        var _closure2_slot8 = var2;
        var2 = var1.guildId;
        var _closure2_slot9 = var2;
        var2 = var1.channelId;
        var _closure2_slot10 = var2;
        var2 = var1.prompt;
        var _closure2_slot11 = var2;
        var2 = var1.disableGuildSelect;
        var _closure2_slot12 = var2;
        var2 = var1.disclosures;
        var _closure2_slot13 = var2;
        var1 = var1.integrationType;
        var _closure2_slot14 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            _fun98359: for (var _fun98359_ip = 0;;) switch (_fun98359_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = _closure2_slot14;
                    var6 = null;
                    var4 = var6 != var0;
                    var0 = undefined;
                    var3 = undefined;
                    if (!var4) {
                        _fun98359_ip = 70;
                        continue _fun98359
                    }
                case 36:
                    var4 = _closure2_slot1;
                    var5 = var6 == var4;
                    var4 = undefined;
                    if (var5) {
                        _fun98359_ip = 67;
                        continue _fun98359
                    }
                case 49:
                    var8 = _closure2_slot1;
                    var7 = var8.get;
                    var5 = _closure2_slot14;
                    var4 = var7.bind(var8)(var5);
                case 67:
                    var3 = var4;
                case 70:
                    var4 = var6 == var3;
                    var5 = undefined;
                    if (var4) {
                        _fun98359_ip = 84;
                        continue _fun98359
                    }
                case 79:
                    var5 = var3.application;
                case 84:
                    if (!(var6 == var5)) {
                        _fun98359_ip = 110;
                        continue _fun98359
                    }
                case 88:
                    var7 = _closure1_slot3;
                    var4 = var7.getApplication;
                    var3 = _closure2_slot0;
                    var5 = var4.bind(var7)(var3);
                case 110:
                    var4 = {};
                    var3 = _closure2_slot0;
                    var4.clientId = var3;
                    var3 = _closure2_slot2;
                    if (!(var6 == var3)) {
                        _fun98359_ip = 135;
                        continue _fun98359
                    }
                case 129:
                    var3 = new Array(0);
                    _fun98359_ip = 139;
                    continue _fun98359;
                case 135:
                    var3 = _closure2_slot2;
                case 139:
                    var4.scopes = var3;
                    var3 = _closure2_slot4;
                    var4.responseType = var3;
                    var3 = _closure2_slot5;
                    var4.redirectUri = var3;
                    var3 = _closure2_slot6;
                    var4.codeChallenge = var3;
                    var3 = _closure2_slot7;
                    var4.codeChallengeMethod = var3;
                    var3 = _closure2_slot8;
                    var4.state = var3;
                    var3 = _closure2_slot9;
                    var4.guildId = var3;
                    var3 = _closure2_slot10;
                    var4.channelId = var3;
                    var3 = _closure2_slot3;
                    var4.permissions = var3;
                    var3 = _closure2_slot11;
                    var4.prompt = var3;
                    var3 = _closure2_slot12;
                    var7 = 'boolean';
                    var3 = typeof var3;
                    if (!(var7 !== var3)) {
                        _fun98359_ip = 251;
                        continue _fun98359
                    }
                case 237:
                    var7 = _closure2_slot12;
                    var3 = 'true';
                    var3 = var3 === var7;
                    _fun98359_ip = 255;
                    continue _fun98359;
                case 251:
                    var3 = _closure2_slot12;
                case 255:
                    var4.disableGuildSelect = var3;
                    var3 = false;
                    var4.showLogout = var3;
                    var2 = function arg0() {
                        _fun98360: for (var _fun98360_ip = 0;;) switch (_fun98360_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.location;
                                var1 = null;
                                if (!(var1 == var2)) {
                                    _fun98360_ip = 99;
                                    continue _fun98360
                                }
                            case 14:
                                var3 = _closure3_slot1;
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 2;
                                var4 = var4[var2];
                                var2 = undefined;
                                var6 = var5.bind(var2)(var4);
                                var5 = {};
                                var1 = _closure1_slot6;
                                var1 = var1.OAUTH2_ERROR;
                                var5.errorCode = var1;
                                var1 = var6.prototype;
                                var4 = Object.create(var1, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var7 = 'User cancelled authorization';
                                var9 = var4;
                                var8 = var5;
                                var1 = new var9[var6](var8, var7, var6);
                                var1 = var1 instanceof Object ? var1 : var4;
                                var1 = var3.bind(var2)(var1);
                                _fun98360_ip = 118;
                                continue _fun98360;
                            case 99:
                                var2 = _closure3_slot0;
                                var1 = var0.location;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 118:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4.callback = var2;
                    var2 = var6 != var5;
                    if (!var2) {
                        _fun98359_ip = 297;
                        continue _fun98359
                    }
                case 288:
                    var3 = var5.flags;
                    var2 = var6 != var3;
                case 297:
                    if (!var2) {
                        _fun98359_ip = 350;
                        continue _fun98359
                    }
                case 300:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 3;
                    var6 = var8[var6];
                    var7 = var7.bind(var0)(var6);
                    var6 = var7.hasFlag;
                    var5 = var5.flags;
                    var3 = _closure1_slot5;
                    var3 = var3.EMBEDDED;
                    var2 = var6.bind(var7)(var5, var3);
                case 350:
                    var4.isEmbeddedFlow = var2;
                    var2 = _closure2_slot13;
                    var4.disclosures = var2;
                    var1 = _closure2_slot14;
                    var4.integrationType = var1;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 4;
                    var2 = var5[var2];
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.ComponentDispatch;
                    var2 = var3.dispatch;
                    var1 = _closure1_slot4;
                    var1 = var1.SHOW_OAUTH2_MODAL;
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var1 = function() {
        var0 = undefined;
        return var0;
    };
    var1 = var6.bind(var0)(var3, var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/native/server/commands/auth.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3456, 660, 7954, 1384, 1229, 12849, 2]);