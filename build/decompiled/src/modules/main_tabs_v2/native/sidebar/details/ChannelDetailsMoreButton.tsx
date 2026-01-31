// modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107008: for (var _fun107008_ip = 0;;) switch (_fun107008_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.channel;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var3;
                var0 = function() { // Environment: var0
                    _fun107009: for (var _fun107009_ip = 0;;) switch (_fun107009_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun107009_ip = 50;
                                continue _fun107009
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var2 = var3.isDM;
                            var2 = var2.bind(var3)();
                            if (var2) {
                                _fun107009_ip = 47;
                                continue _fun107009
                            }
                        case 33:
                            var4 = _closure2_slot0;
                            var3 = var4.isMultiUserDM;
                            var2 = var3.bind(var4)();
                        case 47:
                            var1 = var2;
                        case 50:
                            if (!var1) {
                                _fun107009_ip = 98;
                                continue _fun107009
                            }
                        case 53:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 2;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.openChannelLongPressActionSheet;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 98:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var2.bind(var4)(var0, var1);
                var2 = null;
                var1 = var2 == var3;
                var0 = null;
                if (var1) {
                    _fun107008_ip = 231;
                    continue _fun107008
                }
            case 61:
                var1 = var3.isDM;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun107008_ip = 92;
                    continue _fun107008
                }
            case 74:
                var1 = var3.isGroupDM;
                var1 = var1.bind(var3)();
                var0 = null;
                if (!var1) {
                    _fun107008_ip = 231;
                    continue _fun107008
                }
            case 92:
                var4 = _closure1_slot4;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 3;
                var1 = var10[var1];
                var3 = undefined;
                var2 = var9.bind(var3)(var1);
                var1 = {};
                var13 = _closure1_slot0;
                var5 = 4;
                var5 = var10[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.HeaderIconButton;
                var5 = {};
                var8 = 5;
                var11 = var10[var8];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var8 = var10[var8];
                var8 = var13.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["UKOtz+"];
                var8 = var11.bind(var12)(var8);
                var5.accessibilityLabel = var8;
                var8 = 6;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var5.source = var8;
                var5.onPress = var7;
                var5 = var4.bind(var3)(var6, var5);
                var1.children = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 231:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 9057, 8851, 8848, 1234, 8157, 2]);