// modules/user_settings/native/defs/ParentalControlsMessageRequests.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var9 = function() { // Original name: useIsDisabled, environment: var8
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.useDefaultGuildsRestricted;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot4 = var9;
    var0 = global;
    var10 = var0.Object;
    var6 = var10.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var6.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var10 = var1.MobileSetting;
    var1 = 8;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var11 = function() { // Original name: title, environment: var8
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 9;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["3o2ojh"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var11;
    var11 = function() { // Original name: useDescription, environment: var8
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 9;
        var1 = var5[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var3 = _closure1_slot1;
        var0 = 10;
        var0 = var5[var0];
        var0 = var3.bind(var4)(var0);
        var0 = var0["7aYkh1"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.useDescription = var11;
    var10 = var10.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var1.parent = var10;
    var10 = function() { // Original name: useValue, environment: var8
        _fun88459: for (var _fun88459_ip = 0;;) switch (_fun88459_ip) {
            case 0:
                var0 = _closure1_slot4;
                var1 = undefined;
                var0 = var0.bind(var1)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var4 = var3.bind(var1)(var2);
                var2 = var4.useSelectedTeenId;
                var4 = var2.bind(var4)();
                var2 = 3;
                var2 = var5[var2];
                var2 = var3.bind(var1)(var2);
                var3 = var2.ParentalControlledDefaultMessageRequestRestricted;
                var2 = var3.useControlledSetting;
                var5 = null;
                var5 = var5 != var4;
                if (!var5) {
                    _fun88459_ip = 79;
                    continue _fun88459
                }
            case 76:
                var1 = var4;
            case 79:
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var0 = !var0;
                if (!var0) {
                    _fun88459_ip = 96;
                    continue _fun88459
                }
            case 93:
                var0 = var1;
            case 96:
                return var0;
        }
    };
    var1.useValue = var10;
    var1.useIsDisabled = var9;
    var8 = function(arg0) { // Original name: onAllowMessageRequestsFromServerMembersValueChange, environment: var8
        _fun88460: for (var _fun88460_ip = 0;;) switch (_fun88460_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot3;
                var2 = var3.getSelectedTeenId;
                var3 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var3)) {
                    _fun88460_ip = 178;
                    continue _fun88460
                }
            case 29:
                if (var0) {
                    _fun88460_ip = 135;
                    continue _fun88460
                }
            case 32:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var8 = undefined;
                var4 = var4.bind(var8)(var2);
                var2 = var4.shouldAgeVerifyForDMDefaultOff;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun88460_ip = 135;
                    continue _fun88460
                }
            case 67:
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 5;
                var2 = var9[var2];
                var5 = var4.bind(var8)(var2);
                var4 = var5.showAgeVerificationGetStartedModal;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = 6;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.AgeVerificationModalEntryPoint;
                var6 = var6.MESSAGE_REQUESTS_SETTINGS;
                var2.entryPoint = var6;
                var2 = var4.bind(var5)(var2);
                _fun88460_ip = 178;
                continue _fun88460;
            case 135:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var2 = var1.ParentalControlledDefaultMessageRequestRestricted;
                var1 = var2.updateControlledSetting;
                var0 = !var0;
                var0 = var1.bind(var2)(var3, var0);
            case 178:
                var0 = undefined;
                return var0;
        }
    };
    var1.onValueChange = var8;
    var1.unsearchable = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ParentalControlsMessageRequests.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4557, 6967, 6473, 10334, 11436, 5894, 4519, 10333, 8943, 1234, 1849, 2]);