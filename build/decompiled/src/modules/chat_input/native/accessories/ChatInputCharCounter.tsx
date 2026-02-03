// modules/chat_input/native/accessories/ChatInputCharCounter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UpsellTypes;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var11 = 'center';
    var10 = 'alignItems';
    var9[var10] = var11;
    var10 = 'top';
    var9[var10] = var0;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun90382: for (var _fun90382_ip = 0;;) switch (_fun90382_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.analyticsLocations;
                var _closure2_slot0 = var10;
                var0 = _closure1_slot10;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var7 = var2.bind(var4)(var0);
                var3 = var7.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.canUseIncreasedMessageLength;
                    var3 = _closure1_slot5;
                    var0 = var3.getCurrentUser;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var3.bind(var7)(var2, var0);
                var _closure2_slot1 = var9;
                var7 = _closure1_slot4;
                var2 = var7.useState;
                var0 = 0;
                var11 = var2.bind(var7)(var0);
                var3 = _closure1_slot3;
                var2 = 2;
                var3 = var3.bind(var4)(var11, var2);
                var12 = var3[var0];
                var2 = 1;
                var2 = var3[var2];
                var _closure2_slot2 = var2;
                var3 = _closure1_slot1;
                var2 = 10;
                var2 = var8[var2];
                var2 = var3.bind(var4)(var2);
                var8 = var2.bind(var4)();
                var _closure2_slot3 = var8;
                var11 = var7.useImperativeHandle;
                var3 = arg1;
                var2 = function() { // Environment: var1
                    var0 = {};
                    var1 = function arg0() {
                        var0 = global;
                        var4 = var0.Math;
                        var3 = var4.max;
                        var2 = _closure2_slot3;
                        var1 = arg0;
                        var2 = var1 - var2;
                        var1 = 0;
                        var2 = var3.bind(var4)(var1, var2);
                        var1 = _closure2_slot2;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0.onMessageLengthChanged = var1;
                    return var0;
                };
                var2 = var11.bind(var7)(var3, var2);
                var3 = var7.useCallback;
                var2 = new Array(3);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var1 = function() { // Environment: var1
                    _fun90386: for (var _fun90386_ip = 0;;) switch (_fun90386_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            if (var0) {
                                _fun90386_ip = 95;
                                continue _fun90386
                            }
                        case 21:
                            var0 = 11;
                            var2 = var9[var0];
                            var0 = undefined;
                            var4 = var1.bind(var0)(var2);
                            var2 = var4.handleShowUpsellAlert;
                            var0 = {};
                            var5 = _closure1_slot6;
                            var5 = var5.LONGER_MESSAGE;
                            var0.initialUpsellKey = var5;
                            var5 = _closure2_slot0;
                            var0.analyticsLocations = var5;
                            var5 = {};
                            var6 = _closure1_slot7;
                            var6 = var6.MESSAGE_LENGTH_UPSELL;
                            var5.type = var6;
                            var0.analyticsProperties = var5;
                            var0 = var2.bind(var4)(var0);
                            _fun90386_ip = 201;
                            continue _fun90386;
                        case 95:
                            var0 = 12;
                            var0 = var9[var0];
                            var8 = undefined;
                            var2 = var1.bind(var8)(var0);
                            var1 = var2.open;
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = 13;
                            var5 = var9[var3];
                            var5 = var4.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.formatToPlainString;
                            var3 = var9[var3];
                            var3 = var4.bind(var8)(var3);
                            var3 = var3.t;
                            var4 = var3.vcvHa0;
                            var3 = {};
                            var7 = _closure2_slot3;
                            var3.maxLength = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var0.content = var3;
                            var3 = 'premium-message-length-info-toast';
                            var0.key = var3;
                            var0 = var1.bind(var2)(var0);
                        case 201:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var3.bind(var7)(var1, var2);
                var1 = var12 > var0;
                var0 = null;
                if (!var1) {
                    _fun90382_ip = 386;
                    continue _fun90382
                }
            case 218:
                var3 = _closure1_slot9;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 14;
                var1 = var9[var1];
                var1 = var7.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var1.onPress = var8;
                var6 = var6.container;
                var1.style = var6;
                var8 = _closure1_slot8;
                var5 = 15;
                var5 = var9[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'color': 'icon-feedback-critical',
                    'lineClamp': 1,
                    'variant': 'text-xs/medium'
                };
                var10 = global;
                var10 = var10.HermesInternal;
                var11 = var10.concat;
                var10 = '-';
                var10 = var11.bind(var10)(var12);
                var5.children = var10;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 16;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.NitroWheelIcon;
                var6 = {};
                var9 = 'sm';
                var6.size = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 386:
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = 'ChatInputCharCounter';
    var3.displayName = var1;
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/accessories/ChatInputCharCounter.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 660, 1615, 33, 1297, 566, 3100, 7659, 7605, 3139, 1234, 4897, 3932, 5744, 2]);