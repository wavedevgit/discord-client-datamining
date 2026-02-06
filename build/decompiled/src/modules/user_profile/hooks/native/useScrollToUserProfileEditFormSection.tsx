// modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.findNodeHandle;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserSettingsSections;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot3;
        var4 = var3.useRef;
        var0 = {};
        var0 = var4.bind(var3)(var0);
        var _closure2_slot2 = var0;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 4;
        var5 = var5[var4];
        var4 = undefined;
        var6 = var6.bind(var4)(var5);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var1
            var0 = _closure1_slot5;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var2 = var5.bind(var6)(var4, var2);
        var _closure2_slot3 = var2;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var1
            _fun80386: for (var _fun80386_ip = 0;;) switch (_fun80386_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun80386_ip = 46;
                        continue _fun80386
                    }
                case 16:
                    var1 = _closure2_slot2;
                    var4 = var1.current;
                    var5 = var2 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun80386_ip = 42;
                        continue _fun80386
                    }
                case 34:
                    var3 = _closure2_slot1;
                    var1 = var4[var3];
                case 42:
                    var0 = var2 != var1;
                case 46:
                    if (!var0) {
                        _fun80386_ip = 76;
                        continue _fun80386
                    }
                case 49:
                    var0 = global;
                    var3 = var0.setTimeout;
                    var2 = undefined;
                    var1 = function() { // Environment: var0
                        _fun80387: for (var _fun80387_ip = 0;;) switch (_fun80387_ip) {
                            case 0:
                                var1 = _closure2_slot2;
                                var2 = var1.current;
                                var1 = _closure2_slot1;
                                var5 = var2[var1];
                                var3 = _closure1_slot4;
                                var0 = _closure2_slot0;
                                var2 = var0.current;
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun80387_ip = 115;
                                    continue _fun80387
                                }
                            case 49:
                                if (!(var2 != var5)) {
                                    _fun80387_ip = 74;
                                    continue _fun80387
                                }
                            case 53:
                                var3 = var5.measureLayout;
                                var2 = function(arg0, arg1) { // Environment: var2
                                    _fun80388: for (var _fun80388_ip = 0;;) switch (_fun80388_ip) {
                                        case 0:
                                            var0 = _closure2_slot0;
                                            var2 = var0.current;
                                            var0 = null;
                                            if (!(var0 != var2)) {
                                                _fun80388_ip = 57;
                                                continue _fun80388
                                            }
                                        case 18:
                                            var1 = var2.scrollTo;
                                            var0 = {};
                                            var4 = arg0;
                                            var0.x = var4;
                                            var4 = arg1;
                                            var0.y = var4;
                                            var3 = _closure2_slot3;
                                            var3 = !var3;
                                            var0.animated = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 57:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var5)(var4, var2);
                            case 74:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 5;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.clearScrollPosition;
                                var1 = _closure1_slot6;
                                var1 = var1.PROFILE_CUSTOMIZATION;
                                var1 = var2.bind(var3)(var1);
                            case 115:
                                return var0;
                        }
                    };
                    var0 = 0;
                    var0 = var3.bind(var2)(var1, var0);
                case 76:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 660, 566, 7251, 2]);