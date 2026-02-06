// modules/activities/panel/native/LeaveActivityButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        var0 = arg0;
        var5 = var0.onPress;
        var3 = _closure1_slot4;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 3;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.Button;
        var0 = {};
        var0.onPress = var5;
        var5 = _closure1_slot1;
        var4 = 4;
        var4 = var8[var4];
        var4 = var5.bind(var2)(var4);
        var0.icon = var4;
        var4 = 5;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["Hi1/aQ"];
        var5 = var6.bind(var9)(var5);
        var0.text = var5;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.k0Aph0;
        var4 = var5.bind(var6)(var4);
        var0.accessibilityLabel = var4;
        var4 = 'destructive';
        var0.variant = var4;
        var4 = 'sm';
        var0.size = var4;
        var4 = 2;
        var0.maxFontSizeMultiplier = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.selfEmbeddedActivity;
        var _closure2_slot0 = var2;
        var1 = var1.setMode;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot4;
        var2 = _closure1_slot5;
        var1 = {};
        var0 = function() {
            var2 = _closure2_slot1;
            var0 = _closure1_slot3;
            var1 = var0.DISCONNECTED;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = global;
            var3 = var1.setTimeout;
            var2 = function() { // Environment: var1
                _fun110550: for (var _fun110550_ip = 0;;) switch (_fun110550_ip) {
                    case 0:
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.leaveActivity;
                        var1 = {};
                        var4 = _closure2_slot0;
                        var6 = null;
                        var7 = var6 == var4;
                        var4 = undefined;
                        if (var7) {
                            _fun110550_ip = 60;
                            continue _fun110550
                        }
                    case 51:
                        var7 = _closure2_slot0;
                        var4 = var7.location;
                    case 60:
                        var1.location = var4;
                        var4 = _closure2_slot0;
                        var6 = var6 == var4;
                        var4 = undefined;
                        if (var6) {
                            _fun110550_ip = 86;
                            continue _fun110550
                        }
                    case 77:
                        var5 = _closure2_slot0;
                        var4 = var5.applicationId;
                    case 86:
                        var1.applicationId = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var1 = 400;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1.onPress = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/LeaveActivityButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.BaseLeaveActivityButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7941, 33, 4085, 8446, 1234, 7970, 2]);