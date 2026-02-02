// modules/a11y/native/AccessibilityManager.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.AccessibilityInfo;
    var _closure1_slot4 = var7;
    var1 = var1.Appearance;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.SystemTheme;
    var _closure1_slot8 = var1;
    var1 = {};
    var6 = function() {
        var2 = this;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 5;
        var3 = var5[var0];
        var0 = undefined;
        var7 = var4.bind(var0)(var3);
        var3 = var7.init;
        var3 = var3.bind(var7)();
        var3 = var2.updateNativeColors;
        var3 = var3.bind(var2)();
        var3 = var2.updateMotionSettings;
        var3 = var3.bind(var2)();
        var8 = _closure1_slot6;
        var7 = var8.addChangeListener;
        var3 = var2.updateNativeColors;
        var3 = var7.bind(var8)(var3);
        var7 = var8.addChangeListener;
        var3 = var2.updateMotionSettings;
        var3 = var7.bind(var8)(var3);
        var3 = 6;
        var7 = var5[var3];
        var10 = var4.bind(var0)(var7);
        var9 = var10.subscribe;
        var8 = var2.updateMotionSettings;
        var7 = 'CONNECTION_OPEN';
        var7 = var9.bind(var10)(var7, var8);
        var9 = _closure1_slot5;
        var8 = var9.addChangeListener;
        var7 = var2.updateSystemAppearance;
        var7 = var8.bind(var9)(var7);
        var9 = _closure1_slot4;
        var8 = var9.addEventListener;
        var7 = 'screenReaderChanged';
        var6 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var1 = var2.updateScreenReaderEnabled;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var6 = var8.bind(var9)(var7, var6);
        var3 = var5[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.subscribe;
        var3 = 'ACCESSIBILITY_COLORBLIND_TOGGLE';
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.track;
            var1 = _closure1_slot7;
            var2 = var1.LOCAL_SETTINGS_UPDATED;
            var1 = {};
            var5 = _closure1_slot6;
            var5 = var5.colorblindMode;
            var1.colorblind_enabled = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var1 = var4.bind(var5)(var3, var1);
        var1 = var2.startAnnouncementQueue;
        var1 = var1.bind(var2)();
        return var0;
    };
    var1.init = var6;
    var6 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.updateSaturation;
        var1 = _closure1_slot6;
        var1 = var1.saturation;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.updateNativeColors = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 9;
        var1 = var5[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = _closure1_slot0;
        var1 = 10;
        var1 = var5[var1];
        var1 = var2.bind(var0)(var1);
        var2 = var1.accessibilityPreferencesSharedValue;
        var1 = {};
        var4 = _closure1_slot6;
        var5 = var4.useReducedMotion;
        var1.reduceMotion = var5;
        var4 = var4.systemPrefersCrossfades;
        var1.prefersCrossfades = var4;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.updateMotionSettings = var6;
    var6 = function() {
        var1 = this;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun97715: for (var _fun97715_ip = 0;;) switch (_fun97715_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun97715_ip = 60;
                            continue _fun97715
                        }
                    case 7:
                        var2 = _closure1_slot4;
                        var1 = var2.isScreenReaderEnabled;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 28);
                    case 26:
                        return var1;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun97715_ip = 57;
                            continue _fun97715
                        }
                    case 34:
                        var3 = _closure2_slot0;
                        var2 = var3.updateScreenReaderEnabled;
                        var2 = var2.bind(var3)(var1);
                        var2 = undefined;
                        return var2;
                    case 57:
                        return var1;
                    case 60:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.checkScreenreaderEnabled = var6;
    var6 = function arg0() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 9;
        var2 = var4[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = _closure1_slot0;
        var1 = 10;
        var1 = var4[var1];
        var1 = var2.bind(var0)(var1);
        var2 = var1.accessibilityPreferencesSharedValue;
        var1 = {};
        var4 = arg0;
        var1.screenReaderEnabled = var4;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1.updateScreenReaderEnabled = var6;
    var6 = function arg0() {
        _fun97717: for (var _fun97717_ip = 0;;) switch (_fun97717_ip) {
            case 0:
                var1 = _closure1_slot8;
                var3 = var1.NO_PREFERENCE;
                var1 = arg0;
                var2 = var1.colorScheme;
                var1 = 'light';
                if (!(var1 !== var2)) {
                    _fun97717_ip = 50;
                    continue _fun97717
                }
            case 30:
                var1 = 'dark';
                if (!(var1 === var2)) {
                    _fun97717_ip = 60;
                    continue _fun97717
                }
            case 38:
                var1 = _closure1_slot8;
                var3 = var1.DARK;
                _fun97717_ip = 60;
                continue _fun97717;
            case 50:
                var1 = _closure1_slot8;
                var3 = var1.LIGHT;
            case 60:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.setSystemTheme;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var1.updateSystemAppearance = var6;
    var3 = function() {
        var1 = global;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var6 = var2;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot4;
        var2 = var3.addEventListener;
        var1 = 'announcementFinished';
        var0 = function(arg0) { // Environment: var0
            _fun97719: for (var _fun97719_ip = 0;;) switch (_fun97719_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = var0.success;
                    if (var2) {
                        _fun97719_ip = 92;
                        continue _fun97719
                    }
                case 18:
                    var5 = _closure2_slot0;
                    var4 = var5.has;
                    var3 = var0.announcement;
                    var3 = var4.bind(var5)(var3);
                    if (var3) {
                        _fun97719_ip = 92;
                        continue _fun97719
                    }
                case 44:
                    var4 = _closure2_slot0;
                    var3 = var4.add;
                    var2 = var0.announcement;
                    var2 = var3.bind(var4)(var2);
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var3 = var1.AccessibilityAnnouncer;
                        var2 = var3.announce;
                        var1 = _closure3_slot0;
                        var1 = var1.announcement;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = 150;
                    var1 = var4.bind(var3)(var2, var1);
                    _fun97719_ip = 115;
                    continue _fun97719;
                case 92:
                    var2 = _closure2_slot0;
                    var1 = var2.delete;
                    var0 = var0.announcement;
                    var0 = var1.bind(var2)(var0);
                case 115:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var1.startAnnouncementQueue = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/a11y/native/AccessibilityManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 1298, 660, 3159, 12726, 806, 795, 12728, 5265, 12727, 3199, 3167, 2]);