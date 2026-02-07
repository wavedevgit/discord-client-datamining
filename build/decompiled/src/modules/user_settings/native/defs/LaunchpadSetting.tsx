// modules/user_settings/native/defs/LaunchpadSetting.tsx
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
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.LaunchPadTypes;
    var _closure1_slot2 = var1;
    var1 = 5;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createRadio;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 4;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.JqV7IC;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.ADVANCED;
    var1.parent = var8;
    var8 = 6;
    var9 = var5[var8];
    var8 = arg2;
    var8 = var8.bind(var0)(var9);
    var1.useValue = var8;
    var8 = function arg0() {
        _fun86364: for (var _fun86364_ip = 0;;) switch (_fun86364_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot2;
                var1 = var1.GESTURE_FULL;
                if (!(var1 !== var2)) {
                    _fun86364_ip = 272;
                    continue _fun86364
                }
            case 23:
                var1 = _closure1_slot2;
                var1 = var1.GESTURE_EDGE;
                if (!(var1 !== var2)) {
                    _fun86364_ip = 207;
                    continue _fun86364
                }
            case 40:
                var1 = _closure1_slot2;
                var1 = var1.PULL_TAB;
                if (!(var1 !== var2)) {
                    _fun86364_ip = 139;
                    continue _fun86364
                }
            case 54:
                var1 = _closure1_slot2;
                var1 = var1.DISABLED;
                if (!(var1 === var2)) {
                    _fun86364_ip = 335;
                    continue _fun86364
                }
            case 71:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var3 = var1.LaunchPadModeSetting;
                var2 = var3.updateSetting;
                var1 = 3;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.LaunchPadMode;
                var1 = var1.LAUNCH_PAD_DISABLED;
                var1 = var2.bind(var3)(var1);
                _fun86364_ip = 335;
                continue _fun86364;
            case 139:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var3 = var1.LaunchPadModeSetting;
                var2 = var3.updateSetting;
                var1 = 3;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.LaunchPadMode;
                var1 = var1.LAUNCH_PAD_PULL_TAB;
                var1 = var2.bind(var3)(var1);
                _fun86364_ip = 335;
                continue _fun86364;
            case 207:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var3 = var1.LaunchPadModeSetting;
                var2 = var3.updateSetting;
                var1 = 3;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.LaunchPadMode;
                var1 = var1.LAUNCH_PAD_GESTURE_RIGHT_EDGE;
                var1 = var2.bind(var3)(var1);
                _fun86364_ip = 335;
                continue _fun86364;
            case 272:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var2 = var0.LaunchPadModeSetting;
                var1 = var2.updateSetting;
                var0 = 3;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.LaunchPadMode;
                var0 = var0.LAUNCH_PAD_GESTURE_FULL_SCREEN;
                var0 = var1.bind(var2)(var0);
            case 335:
                var0 = undefined;
                return var0;
        }
    };
    var1.onValueChange = var8;
    var7 = function() {
        var1 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 4;
        var2 = var8[var3];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var5 = var2.intl;
        var4 = var5.string;
        var2 = var8[var3];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2.Q3abNB;
        var2 = var4.bind(var5)(var2);
        var1.label = var2;
        var2 = var8[var3];
        var2 = var7.bind(var6)(var2);
        var5 = var2.intl;
        var4 = var5.string;
        var2 = var8[var3];
        var2 = var7.bind(var6)(var2);
        var2 = var2.t;
        var2 = var2["/gdTGA"];
        var2 = var4.bind(var5)(var2);
        var1.subLabel = var2;
        var2 = _closure1_slot2;
        var0 = var2.GESTURE_FULL;
        var1.value = var0;
        var0 = new Array(4);
        var0[0] = var1;
        var1 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.dQN6qS;
        var4 = var5.bind(var9)(var4);
        var1.label = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4["W+cPjG"];
        var4 = var5.bind(var9)(var4);
        var1.subLabel = var4;
        var4 = var2.GESTURE_EDGE;
        var1.value = var4;
        var0[1] = var1;
        var1 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4["PgDGl+"];
        var4 = var5.bind(var9)(var4);
        var1.label = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.uVc5MG;
        var4 = var5.bind(var9)(var4);
        var1.subLabel = var4;
        var4 = var2.PULL_TAB;
        var1.value = var4;
        var0[2] = var1;
        var1 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.HnzBCZ;
        var4 = var5.bind(var9)(var4);
        var1.label = var4;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.It18o2;
        var3 = var4.bind(var5)(var3);
        var1.subLabel = var3;
        var2 = var2.DISABLED;
        var1.value = var2;
        var0[3] = var1;
        return var0;
    };
    var1.useOptions = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/LaunchpadSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7077, 9917, 1348, 1311, 1234, 9067, 9919, 2]);