// modules/instant_invite/native/components/InstantInviteAgeText.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot4 = var6;
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexWrap': 'wrap'
    };
    var3.inviteAgeContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/components/InstantInviteAgeText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun67520: for (var _fun67520_ip = 0;;) switch (_fun67520_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.style;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var1 = var0.callbackActionSheet;
                var _closure2_slot1 = var1;
                var6 = var0.canEditInvite;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun67520_ip = 43;
                    continue _fun67520
                }
            case 41:
                var6 = true;
            case 43:
                var1 = var0.onEdit;
                var _closure2_slot2 = var1;
                var0 = var0.source;
                var _closure2_slot3 = var0;
                var0 = _closure1_slot6;
                var5 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var11
                    var1 = _closure1_slot3;
                    var0 = var1.getInviteSettings;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var2.bind(var3)(var1, var0);
                var0 = null;
                var1 = var0 == var9;
                if (var1) {
                    _fun67520_ip = 509;
                    continue _fun67520
                }
            case 135:
                var3 = _closure1_slot4;
                var2 = _closure1_slot2;
                var1 = {};
                var10 = var5.inviteAgeContainer;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var8;
                var1.style = var5;
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var10 = 6;
                var5 = var14[var10];
                var5 = var13.bind(var4)(var5);
                var8 = var5.Text;
                var5 = {};
                var12 = 'text-xs/normal';
                var5.variant = var12;
                var12 = 7;
                var12 = var14[var12];
                var14 = var13.bind(var4)(var12);
                var13 = var14.maxAgeString;
                var12 = var9.maxAge;
                var9 = var9.maxUses;
                var12 = var13.bind(var14)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var12 = ' ';
                var9[1] = var12;
                var5.children = var9;
                var8 = var3.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                if (!var6) {
                    _fun67520_ip = 495;
                    continue _fun67520
                }
            case 282:
                var9 = _closure1_slot5;
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var7 = 8;
                var7 = var16[var7];
                var7 = var15.bind(var4)(var7);
                var8 = var7.PressableOpacity;
                var7 = {};
                var11 = function() { // Original name: onPress, environment: var11
                    _fun67522: for (var _fun67522_ip = 0;;) switch (_fun67522_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.handlePressSettings;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot3;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun67522_ip = 71;
                                continue _fun67522
                            }
                        case 63:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                        case 71:
                            return var0;
                    }
                };
                var7.onPress = var11;
                var11 = 'link';
                var7.accessibilityRole = var11;
                var12 = 10;
                var11 = var16[var12];
                var11 = var15.bind(var4)(var11);
                var14 = var11.intl;
                var13 = var14.string;
                var11 = var16[var12];
                var11 = var15.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["VNe8P/"];
                var11 = var13.bind(var14)(var11);
                var7.accessibilityLabel = var11;
                var11 = {
                    'top': 8,
                    'left': 8,
                    'bottom': 8,
                    'right': 8
                };
                var7.hitSlop = var11;
                var10 = var16[var10];
                var10 = var15.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-link'
                };
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["VNe8P/"];
                var12 = var13.bind(var14)(var12);
                var10.children = var12;
                var10 = var9.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 495:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 509:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8290, 33, 1297, 566, 3900, 8291, 4865, 8289, 1234, 2]);