// modules/main_tabs_v2/useMessagePreviews.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun85155: for (var _fun85155_ip = 0;;) switch (_fun85155_ip) {
                case 0:
                    var1 = _closure1_slot3;
                    var1 = var1.settings;
                    var4 = var1.guilds;
                    var5 = _closure2_slot0;
                    var2 = null;
                    var3 = var2 != var5;
                    var1 = null;
                    if (!var3) {
                        _fun85155_ip = 89;
                        continue _fun85155
                    }
                case 37:
                    var7 = var2 == var4;
                    var3 = undefined;
                    if (var7) {
                        _fun85155_ip = 86;
                        continue _fun85155
                    }
                case 46:
                    var4 = var4.guilds;
                    var4 = var4[var5];
                    var5 = var2 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun85155_ip = 86;
                        continue _fun85155
                    }
                case 65:
                    var4 = var4.mobileRedesignChannelListSettings;
                    var5 = var2 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun85155_ip = 86;
                        continue _fun85155
                    }
                case 80:
                    var3 = var4.messagePreviews;
                case 86:
                    var1 = var3;
                case 89:
                    if (!(var2 != var1)) {
                        _fun85155_ip = 139;
                        continue _fun85155
                    }
                case 93:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.ValidMessagePreviewTypes;
                    var3 = var4.has;
                    var2 = var1.value;
                    var2 = var3.bind(var4)(var2);
                    if (var2) {
                        _fun85155_ip = 179;
                        continue _fun85155
                    }
                case 139:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var2 = var0.MessagePreviewSetting;
                    var0 = var2.getSetting;
                    var0 = var0.bind(var2)();
                    _fun85155_ip = 184;
                    continue _fun85155;
                case 179:
                    var0 = var1.value;
                case 184:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/useMessagePreviews.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1() {
        _fun85156: for (var _fun85156_ip = 0;;) switch (_fun85156_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var3;
                var6 = var0.unread;
                var2 = var0.disabled;
                var7 = _closure1_slot5;
                var5 = var3.guild_id;
                var1 = undefined;
                var7 = var7.bind(var1)(var5);
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 3;
                var5 = var9[var5];
                var10 = var8.bind(var1)(var5);
                var8 = var10.useStateFromStores;
                var11 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var11;
                var4 = function() { // Environment: var4
                    _fun85157: for (var _fun85157_ip = 0;;) switch (_fun85157_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun85157_ip = 43;
                                continue _fun85157
                            }
                        case 16:
                            var3 = _closure1_slot4;
                            var2 = var3.hasUnread;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var5 = var8.bind(var10)(var5, var4);
                var8 = _closure1_slot1;
                var4 = 4;
                var4 = var9[var4];
                var4 = var8.bind(var1)(var4);
                var4 = var4.bind(var1)(var3);
                if (var2) {
                    _fun85156_ip = 119;
                    continue _fun85156
                }
            case 116:
                var2 = var4;
            case 119:
                if (var2) {
                    _fun85156_ip = 158;
                    continue _fun85156
                }
            case 122:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 5;
                var4 = var9[var4];
                var4 = var8.bind(var1)(var4);
                var4 = var4.MessagePreviewTypes;
                var4 = var4.NONE;
                var2 = var7 === var4;
            case 158:
                if (var2) {
                    _fun85156_ip = 215;
                    continue _fun85156
                }
            case 161:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 5;
                var4 = var9[var4];
                var4 = var8.bind(var1)(var4);
                var4 = var4.MessagePreviewTypes;
                var4 = var4.UNREADS;
                var4 = var7 === var4;
                if (!var4) {
                    _fun85156_ip = 212;
                    continue _fun85156
                }
            case 200:
                var7 = null;
                if (!(var7 != var6)) {
                    _fun85156_ip = 209;
                    continue _fun85156
                }
            case 206:
                var5 = var6;
            case 209:
                var4 = !var5;
            case 212:
                var2 = var4;
            case 215:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var2.default = var3;
    var2.useMessagePreviewSetting = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 3947, 1348, 566, 8936, 8823, 10937, 2]);