// modules/user_profile/hooks/useDisplayProfile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot4;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun57147: for (var _fun57147_ip = 0;;) switch (_fun57147_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    var1 = var0 == var1;
                    if (var1) {
                        _fun57147_ip = 60;
                        continue _fun57147
                    }
                case 16:
                    var5 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var6 = _closure1_slot4;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var1 = _closure1_slot5;
                    var2[1] = var1;
                    var1 = undefined;
                    var0 = var5.bind(var1)(var4, var3, var2);
                case 60:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var4;
    var1 = function arg0, arg1() {
        _fun57148: for (var _fun57148_ip = 0;;) switch (_fun57148_ip) {
            case 0:
                var7 = arg0;
                var1 = arguments[2];
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun57148_ip = 38;
                    continue _fun57148
                }
            case 12:
                var3 = _closure1_slot4;
                var0 = new Array(2);
                var0[0] = var3;
                var2 = _closure1_slot5;
                var0[1] = var2;
                var1 = var0;
            case 38:
                var3 = var1;
                var0 = var3[Symbol.iterator];
                var3 = var0().next;
                var4 = var3().value;
                var1 = var0;
                var1 = var1 === var5;
                var2 = undefined;
                if (var1) {
                    _fun57148_ip = 63;
                    continue _fun57148
                }
            case 60:
                var2 = var4;
            case 63:
                var6 = undefined;
                if (var1) {
                    _fun57148_ip = 93;
                    continue _fun57148
                }
            case 68:
                var4 = var3().value;
                var3 = var0;
                var3 = var3 === var5;
                var6 = undefined;
                var1 = var3;
                if (var3) {
                    _fun57148_ip = 93;
                    continue _fun57148
                }
            case 87:
                var6 = var4;
                var1 = var3;
            case 93:
                if (var1) {
                    _fun57148_ip = 99;
                    continue _fun57148
                }
            case 96:
                var0.return();
            case 99:
                var0 = null;
                if (!(var0 !== var7)) {
                    _fun57148_ip = 175;
                    continue _fun57148
                }
            case 105:
                var1 = var2.getUser;
                var1 = var1.bind(var2)(var7);
                var2 = var6.getUserProfile;
                var4 = var2.bind(var6)(var7);
                var3 = var6.getGuildMemberProfile;
                var2 = arg1;
                var3 = var3.bind(var6)(var7, var2);
                var2 = var0 == var1;
                var1 = null;
                if (var2) {
                    _fun57148_ip = 173;
                    continue _fun57148
                }
            case 151:
                var2 = var0 == var4;
                var1 = null;
                if (var2) {
                    _fun57148_ip = 173;
                    continue _fun57148
                }
            case 160:
                var2 = _closure1_slot6;
                var1 = var2.bind(var5)(var4, var3);
            case 173:
                return var1;
            case 175:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var9 = var7[var0];
    var5 = arg3;
    var0 = undefined;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.cachedFunction;
    var5 = function(arg0, arg1) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var0 = var3.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var3
            }
        });
        var5 = arg0;
        var4 = arg1;
        var6 = var1;
        var0 = new var6[var3](var5, var4, var3);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/hooks/useDisplayProfile.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var3 = function arg0, arg1() {
        var3 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = new Array(2);
        var4[0] = var2;
        var4[1] = var3;
        var1 = function() { // Environment: var1
            _fun57151: for (var _fun57151_ip = 0;;) switch (_fun57151_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = _closure2_slot0;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var4 = null;
                    var6 = var4 != var6;
                    var4 = undefined;
                    if (!var6) {
                        _fun57151_ip = 53;
                        continue _fun57151
                    }
                case 49:
                    var4 = _closure2_slot1;
                case 53:
                    var1.guildId = var4;
                    var1 = var3.bind(var0)(var2, var0, var1);
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var1, var4);
        var1 = _closure1_slot7;
        var0 = undefined;
        var0 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var2.useDisplayProfileWithFetchEffect = var3;
    var2.getDisplayProfile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 4661, 566, 6982, 1680, 6985, 2]);