// modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'opacity': 0
    };
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: InstantInviteSelfMeasurer, environment: var1
        _fun108944: for (var _fun108944_ip = 0;;) switch (_fun108944_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.containerStyle;
                var8 = var1.item;
                var9 = var1.onMeasured;
                var _closure2_slot0 = var9;
                var6 = var1.type;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun108944_ip = 41;
                    continue _fun108944
                }
            case 37:
                var6 = 'height';
            case 41:
                var _closure2_slot1 = var6;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var9;
                var1[1] = var6;
                var0 = function(arg0) { // Environment: var0
                    _fun108945: for (var _fun108945_ip = 0;;) switch (_fun108945_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var1 = 'height';
                            if (!(var1 !== var3)) {
                                _fun108945_ip = 41;
                                continue _fun108945
                            }
                        case 34:
                            var1 = var0.width;
                            _fun108945_ip = 46;
                            continue _fun108945;
                        case 41:
                            var1 = var0.height;
                        case 46:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {
                    'style': null,
                    'onLayout': null,
                    'pointerEvents': 'none',
                    'importantForAccessibility': 'no-hide-descendants',
                    'accessibilityElementsHidden': true,
                    'accessible': false
                };
                var6 = new Array(2);
                var6[0] = var7;
                var7 = _closure1_slot6;
                var7 = var7.container;
                var6[1] = var7;
                var0.style = var6;
                var0.onLayout = var4;
                var6 = var8.type;
                var4 = 'invite';
                if (!(var4 !== var6)) {
                    _fun108944_ip = 199;
                    continue _fun108944
                }
            case 150:
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 3;
                var4 = var9[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.LinkedChannelInvite;
                var4 = {};
                var9 = var8.data;
                var4.channel = var9;
                var4 = var7.bind(var3)(var6, var4);
                _fun108944_ip = 241;
                continue _fun108944;
            case 199:
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 3;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var8 = var8.data;
                var5.invite = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 241:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 9082, 2]);