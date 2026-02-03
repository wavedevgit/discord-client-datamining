// modules/custom_status/utils/userSettingToActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun50591: for (var _fun50591_ip = 0;;) switch (_fun50591_ip) {
            case 0:
                var7 = arg0;
                var3 = arg1;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun50591_ip = 159;
                    continue _fun50591
                }
            case 15:
                var0 = var7.emojiName;
                var0 = var2 != var0;
                var1 = null;
                if (!var0) {
                    _fun50591_ip = 193;
                    continue _fun50591
                }
            case 33:
                var4 = var7.emojiName;
                var0 = '';
                var1 = null;
                if (!(var0 !== var4)) {
                    _fun50591_ip = 193;
                    continue _fun50591
                }
            case 52:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 3;
                var4 = var9[var0];
                var6 = undefined;
                var5 = var8.bind(var6)(var4);
                var4 = var5.getByName;
                var0 = var9[var0];
                var9 = var8.bind(var6)(var0);
                var8 = var9.convertSurrogateToName;
                var6 = var7.emojiName;
                var0 = false;
                var0 = var8.bind(var9)(var6, var0);
                var5 = var4.bind(var5)(var0);
                var4 = var2 != var5;
                var0 = null;
                if (!var4) {
                    _fun50591_ip = 154;
                    continue _fun50591
                }
            case 126:
                var4 = {
                    'id': null,
                    'name': null,
                    'animated': false
                };
                var5 = var5.surrogates;
                var4.name = var5;
                var0 = var4;
            case 154:
                var1 = var0;
                _fun50591_ip = 193;
                continue _fun50591;
            case 159:
                var0 = {};
                var4 = var3.id;
                var0.id = var4;
                var4 = var3.name;
                var0.name = var4;
                var3 = var3.animated;
                var0.animated = var3;
                var1 = var0;
            case 193:
                var0 = global;
                var4 = var0.Number;
                var0 = var7.expiresAtMs;
                var3 = undefined;
                var5 = var4.bind(var3)(var0);
                var0 = var7.label;
                var4 = var2 == var0;
                var2 = undefined;
                if (var4) {
                    _fun50591_ip = 233;
                    continue _fun50591
                }
            case 228:
                var2 = var0.value;
            case 233:
                var0 = {};
                var4 = 'Custom Status';
                var0.name = var4;
                var4 = _closure1_slot5;
                var4 = var4.CUSTOM_STATUS;
                var0.type = var4;
                var4 = var7.text;
                var6 = var4.length;
                var4 = 0;
                var8 = var6 > var4;
                var6 = undefined;
                if (!var8) {
                    _fun50591_ip = 288;
                    continue _fun50591
                }
            case 283:
                var6 = var7.text;
            case 288:
                var0.state = var6;
                var4 = var5 > var4;
                var3 = undefined;
                if (!var4) {
                    _fun50591_ip = 310;
                    continue _fun50591
                }
            case 301:
                var4 = {};
                var4.end = var5;
                var3 = var4;
            case 310:
                var0.timestamps = var3;
                var0.emoji = var1;
                var0.details = var2;
                var1 = {};
                var1.label = var2;
                var0.metadata = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/utils/userSettingToActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun50592: for (var _fun50592_ip = 0;;) switch (_fun50592_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.emojiId;
                var2 = _closure1_slot6;
                var6 = null;
                var4 = var6 != var5;
                var1 = null;
                if (!var4) {
                    _fun50592_ip = 54;
                    continue _fun50592
                }
            case 27:
                var4 = '0';
                var1 = null;
                if (!(var4 !== var5)) {
                    _fun50592_ip = 54;
                    continue _fun50592
                }
            case 39:
                var4 = _closure1_slot4;
                var0 = var4.getUsableCustomEmojiById;
                var1 = var0.bind(var4)(var5);
            case 54:
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var2.getActivityFromCustomStatus = var3;
    var1 = function() {
        _fun50593: for (var _fun50593_ip = 0;;) switch (_fun50593_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var4 = var2.CustomStatusSetting;
                var2 = var4.useSetting;
                var5 = var2.bind(var4)();
                var _closure2_slot0 = var5;
                var2 = null;
                var4 = var2 == var5;
                var2 = undefined;
                if (var4) {
                    _fun50593_ip = 64;
                    continue _fun50593
                }
            case 58:
                var2 = var5.emojiId;
            case 64:
                var _closure2_slot1 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 5;
                var4 = var7[var4];
                var8 = var6.bind(var3)(var4);
                var7 = var8.useStateFromStores;
                var4 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun50594: for (var _fun50594_ip = 0;;) switch (_fun50594_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            var2 = var4 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun50594_ip = 56;
                                continue _fun50594
                            }
                        case 18:
                            var3 = _closure2_slot1;
                            var2 = '0';
                            var0 = null;
                            if (!(var2 !== var3)) {
                                _fun50594_ip = 56;
                                continue _fun50594
                            }
                        case 34:
                            var3 = _closure1_slot4;
                            var2 = var3.getUsableCustomEmojiById;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var4 = var7.bind(var8)(var6, var2, var4);
                var _closure2_slot2 = var4;
                var2 = _closure1_slot3;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    _fun50595: for (var _fun50595_ip = 0;;) switch (_fun50595_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun50595_ip = 39;
                                continue _fun50595
                            }
                        case 16:
                            var4 = _closure1_slot6;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 39:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useCustomStatusActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4737, 660, 3104, 1348, 566, 2]);