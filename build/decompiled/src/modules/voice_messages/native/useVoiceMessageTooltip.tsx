// modules/voice_messages/native/useVoiceMessageTooltip.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.hideVoiceMessagesTooltip;
    var _closure1_slot4 = var6;
    var6 = var3.showVoiceMessagesTooltip;
    var _closure1_slot5 = var6;
    var3 = var3.useVoiceMessagesUIStore;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_messages/native/useVoiceMessageTooltip.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var7 = _closure1_slot2;
        var3 = var7.useRef;
        var2 = null;
        var2 = var3.bind(var7)(var2);
        var4 = _closure1_slot6;
        var5 = undefined;
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.showVoiceMessagesTooltip;
            return var0;
        };
        var8 = var4.bind(var5)(var3);
        var _closure2_slot0 = var8;
        var6 = var7.useMemo;
        var4 = new Array(1);
        var4[0] = var8;
        var3 = function() { // Environment: var0
            var0 = {};
            var1 = 'top';
            var0.position = var1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["hP6+07"];
            var1 = var2.bind(var3)(var1);
            var0.label = var1;
            var1 = _closure2_slot0;
            var0.visible = var1;
            return var0;
        };
        var4 = var6.bind(var7)(var3, var4);
        var6 = var7.useEffect;
        var3 = new Array(1);
        var3[0] = var8;
        var0 = function() { // Environment: var0
            _fun90460: for (var _fun90460_ip = 0;;) switch (_fun90460_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (var1) {
                        _fun90460_ip = 16;
                        continue _fun90460
                    }
                case 12:
                    var1 = undefined;
                    return var1;
                case 16:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
                    var2 = var4[var2];
                    var4 = undefined;
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.getKeyboardIsOpen;
                    var2 = {};
                    var6 = true;
                    var2.includeCustomKeyboard = var6;
                    var2 = var3.bind(var5)(var2);
                    var _closure3_slot0 = var2;
                    var2 = _closure1_slot3;
                    var1 = function() { // Environment: var0
                        _fun90461: for (var _fun90461_ip = 0;;) switch (_fun90461_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 4;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.getKeyboardIsOpen;
                                var2 = {};
                                var6 = true;
                                var2.includeCustomKeyboard = var6;
                                var2 = var4.bind(var5)(var2);
                                if (!(var3 !== var2)) {
                                    _fun90461_ip = 64;
                                    continue _fun90461
                                }
                            case 56:
                                var1 = _closure1_slot4;
                                var1 = var1.bind(var0)();
                            case 64:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var4)(var1);
                    var _closure3_slot1 = var1;
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = function() { // Environment: var0
                        var1 = _closure1_slot4;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = 2000;
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot2 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var3 = var0.clearTimeout;
                        var2 = _closure3_slot2;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var1 = _closure3_slot1;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
            }
        };
        var0 = var6.bind(var7)(var0, var3);
        var3 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 5;
        var0 = var6[var0];
        var3 = var3.bind(var5)(var0);
        var0 = var3.useTooltip;
        var0 = var0.bind(var3)(var2, var4);
        var0 = {};
        var0.tooltipTargetRef = var2;
        var1 = _closure1_slot5;
        var0.showVoiceMessagesTooltip = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1466, 11589, 1234, 5394, 7012, 2]);