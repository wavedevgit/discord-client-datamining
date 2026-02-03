// modules/guild_verification/GuildVerificationManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113227: for (var _fun113227_ip = 0;;) switch (_fun113227_ip) {
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
            case 72: // try_end0
                _fun113227_ip = 76;
                continue _fun113227;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun113230: for (var _fun113230_ip = 0;;) switch (_fun113230_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.invite;
                var2 = var1.guild;
                var1 = var0.invite;
                var1 = var1.flags;
                var4 = null;
                var3 = var4 != var1;
                var9 = 0;
                if (!var3) {
                    _fun113230_ip = 39;
                    continue _fun113230
                }
            case 36:
                var9 = var1;
            case 39:
                if (!(var4 != var2)) {
                    _fun113230_ip = 86;
                    continue _fun113230
                }
            case 43:
                if (!(var4 != var2)) {
                    _fun113230_ip = 86;
                    continue _fun113230
                }
            case 47:
                var6 = var2.features;
                if (!(var4 != var6)) {
                    _fun113230_ip = 86;
                    continue _fun113230
                }
            case 57:
                var5 = var6.includes;
                var3 = _closure1_slot8;
                var3 = var3.HUB;
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun113230_ip = 310;
                    continue _fun113230
                }
            case 86:
                var3 = var0.invite;
                var3 = var3.new_member;
                if (!var3) {
                    _fun113230_ip = 218;
                    continue _fun113230
                }
            case 101:
                var13 = _closure1_slot0;
                var5 = _closure1_slot2;
                var7 = 7;
                var8 = var5[var7];
                var11 = undefined;
                var10 = var13.bind(var11)(var8);
                var8 = var10.hasFlag;
                var12 = 8;
                var5 = var5[var12];
                var5 = var13.bind(var11)(var5);
                var5 = var5.GuildInviteFlags;
                var5 = var5.IS_GUEST_INVITE;
                var5 = var8.bind(var10)(var9, var5);
                if (var5) {
                    _fun113230_ip = 215;
                    continue _fun113230
                }
            case 165:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var7];
                var8 = var10.bind(var11)(var7);
                var7 = var8.hasFlag;
                var6 = var6[var12];
                var6 = var10.bind(var11)(var6);
                var6 = var6.GuildInviteFlags;
                var6 = var6.IS_APPLICATION_BYPASS;
                var5 = var7.bind(var8)(var9, var6);
            case 215:
                var3 = !var5;
            case 218:
                if (!var3) {
                    _fun113230_ip = 225;
                    continue _fun113230
                }
            case 221:
                var3 = var4 != var2;
            case 225:
                if (!var3) {
                    _fun113230_ip = 264;
                    continue _fun113230
                }
            case 228:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.inviteGuildHasPendingMemberDisabledVerification;
                var3 = var4.bind(var5)(var2);
            case 264:
                if (!var3) {
                    _fun113230_ip = 349;
                    continue _fun113230
                }
            case 267:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.openVerificationModalOrTransitionToApplication;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                _fun113230_ip = 349;
                continue _fun113230;
            case 310:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.onOpenHubInvite;
                var0 = var0.invite;
                var0 = var1.bind(var2)(var0);
            case 349:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun113232: for (var _fun113232_ip = 0;;) switch (_fun113232_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113232_ip = 84;
                        continue _fun113232
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113232_ip = 118;
                    continue _fun113232;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var2 = _closure1_slot10;
                    var1.INVITE_ACCEPT_SUCCESS = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_verification/GuildVerificationManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 660, 12112, 1384, 5905, 12113, 4295, 2]);