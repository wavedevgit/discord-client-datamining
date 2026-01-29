// modules/guild_member_verification/native/MemberVerificationModalHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function() { // Original name: useUserVerificationState, environment: var4
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresObject;
        var0 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            _fun60237: for (var _fun60237_ip = 0;;) switch (_fun60237_ip) {
                case 0:
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var5 = var0.bind(var1)();
                    var0 = {};
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = 4;
                    var1 = var1[var6];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.UserVerificationFieldPlatforms;
                    var7 = var1.EMAIL;
                    var1 = null;
                    var4 = var1 == var5;
                    var8 = undefined;
                    if (var4) {
                        _fun60237_ip = 69;
                        continue _fun60237
                    }
                case 63:
                    var8 = var5.verified;
                case 69:
                    var4 = var1 != var8;
                    if (!var4) {
                        _fun60237_ip = 79;
                        continue _fun60237
                    }
                case 76:
                    var4 = var8;
                case 79:
                    var0[var7] = var4;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.UserVerificationFieldPlatforms;
                    var2 = var2.PHONE;
                    var4 = var1 == var5;
                    var3 = undefined;
                    if (var4) {
                        _fun60237_ip = 132;
                        continue _fun60237
                    }
                case 122:
                    var4 = var5.isPhoneVerified;
                    var3 = var4.bind(var5)();
                case 132:
                    var1 = var1 != var3;
                    if (!var1) {
                        _fun60237_ip = 142;
                        continue _fun60237
                    }
                case 139:
                    var1 = var3;
                case 142:
                    var0[var2] = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot6 = var3;
    var1 = function(arg0) { // Original name: useInitialVerification, environment: var4
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getInitialVerificationState;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot7 = var1;
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var5);
    var0 = 0;
    var8 = var7[var0];
    var5 = arg3;
    var0 = undefined;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var8 = var7[var5];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.setInitialVerification;
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_member_verification/native/MemberVerificationModalHooks.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0) { // Original name: useSetInitialVerificationEffect, environment: var4
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = {};
        var3 = _closure1_slot7;
        var4 = undefined;
        var3 = var3.bind(var4)(var5);
        var0.initial = var3;
        var3 = _closure1_slot6;
        var3 = var3.bind(var4)();
        var0.current = var3;
        var _closure2_slot1 = var0;
        var4 = _closure1_slot2;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var0);
        var _closure2_slot2 = var2;
        var3 = var4.useEffect;
        var2 = function() { // Environment: var1
            var1 = _closure2_slot2;
            var0 = _closure2_slot1;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var3.bind(var4)(var2);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun60242: for (var _fun60242_ip = 0;;) switch (_fun60242_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var1 = var1.current;
                    var3 = var1.current;
                    var2 = var1.initial;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun60242_ip = 48;
                        continue _fun60242
                    }
                case 29:
                    var2 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1, var3);
                case 48:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0 = var0.initial;
        return var0;
    };
    var2.useSetInitialVerificationEffect = var4;
    var2.useUserVerificationState = var3;
    var2.useInitialVerification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1613, 7408, 566, 3175, 2]);