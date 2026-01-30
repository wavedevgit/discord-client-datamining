// modules/user_settings/native/defs/ParentalControlsDirectMessages.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MobileSetting;
    var1 = 4;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var10 = function() { // Original name: title, environment: var8
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.RAQUSN;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var10 = function() { // Original name: useDescription, environment: var8
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 5;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.wbYDfT;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.useDescription = var10;
    var9 = var9.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS;
    var1.parent = var9;
    var9 = function() { // Original name: useValue, environment: var8
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.useDefaultGuildsRestricted;
        var0 = var0.bind(var1)();
        var0 = !var0;
        return var0;
    };
    var1.useValue = var9;
    var8 = function(arg0) { // Original name: onAllowDirectMessagesFromServerMembersValueChange, environment: var8
        _fun89106: for (var _fun89106_ip = 0;;) switch (_fun89106_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = var2.getSelectedTeenId;
                var3 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var3)) {
                    _fun89106_ip = 69;
                    continue _fun89106
                }
            case 23:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.ParentalControlledDefaultGuildsRestrictedV2;
                var1 = var2.updateControlledSetting;
                var0 = arg0;
                var0 = !var0;
                var0 = var1.bind(var2)(var3, var0);
            case 69:
                var0 = undefined;
                return var0;
        }
    };
    var1.onValueChange = var8;
    var1.unsearchable = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ParentalControlsDirectMessages.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.ParentalControlsDirectMessages = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4556, 6968, 10331, 10332, 8943, 1234, 2]);