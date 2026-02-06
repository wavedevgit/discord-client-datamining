// modules/user_settings/native/defs/AccountAgeGroupNonAdultSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var8 = true;
    var1.value = var8;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 8;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var10 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["/52UYy"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var9 = var9.ACCOUNT;
    var1.parent = var9;
    var9 = function() {
        _fun81565: for (var _fun81565_ip = 0;;) switch (_fun81565_ip) {
            case 0:
                var10 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 3;
                var2 = var0[var2];
                var5 = undefined;
                var3 = var10.bind(var5)(var2);
                var2 = var3.useIsAgeVerified;
                var2 = var2.bind(var3)();
                var3 = 4;
                var3 = var0[var3];
                var7 = var10.bind(var5)(var3);
                var4 = var7.useUpdatedAgeVerificationString;
                var6 = 5;
                var3 = var0[var6];
                var3 = var10.bind(var5)(var3);
                var9 = var3.intl;
                var8 = var9.string;
                var3 = var0[var6];
                var3 = var10.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.UX0Ode;
                var3 = var8.bind(var9)(var3);
                var8 = var0[var6];
                var8 = var10.bind(var5)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var0 = var0[var6];
                var0 = var10.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.lKDPGA;
                var0 = var8.bind(var9)(var0);
                var0 = var4.bind(var7)(var3, var0);
                if (!var2) {
                    _fun81565_ip = 211;
                    continue _fun81565
                }
            case 157:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var6];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.sK0dmH;
                var0 = var2.bind(var3)(var1);
            case 211:
                return var0;
        }
    };
    var1.useTrailing = var9;
    var9 = function() {
        var2 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 1;
        var1 = var6[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.showAgeVerificationGetStartedModal;
        var1 = {};
        var5 = _closure1_slot0;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var0)(var4);
        var4 = var4.AgeVerificationModalEntryPoint;
        var4 = var4.ACCOUNT_AGE_GROUP;
        var1.entryPoint = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.onPress = var9;
    var1.withArrow = var8;
    var7 = function() {
        _fun81567: for (var _fun81567_ip = 0;;) switch (_fun81567_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 3;
                var1 = var6[var0];
                var4 = undefined;
                var2 = var5.bind(var4)(var1);
                var1 = var2.useIsAgeVerified;
                var1 = var1.bind(var2)();
                var0 = var6[var0];
                var2 = var5.bind(var4)(var0);
                var0 = var2.useIsVerifiedTeen;
                var2 = var0.bind(var2)();
                var0 = 6;
                var0 = var6[var0];
                var3 = var5.bind(var4)(var0);
                var0 = var3.useHasTeenDefaults;
                var0 = var0.bind(var3)();
                var3 = 7;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var4 = var5.useIsGidgetPawtectEnabled;
                var3 = 'explicit_media_redaction_utils';
                var3 = var4.bind(var5)(var3);
                if (var0) {
                    _fun81567_ip = 111;
                    continue _fun81567
                }
            case 108:
                var0 = var3;
            case 111:
                if (!var0) {
                    _fun81567_ip = 126;
                    continue _fun81567
                }
            case 114:
                var1 = !var1;
                if (var1) {
                    _fun81567_ip = 123;
                    continue _fun81567
                }
            case 120:
                var1 = var2;
            case 123:
                var0 = var1;
            case 126:
                return var0;
        }
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/AccountAgeGroupNonAdultSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7033, 5940, 4556, 4249, 4554, 1234, 4279, 4278, 9023, 2]);