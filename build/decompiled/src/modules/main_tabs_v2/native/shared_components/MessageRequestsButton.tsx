// modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 6;
        var7 = var6[var3];
        var4 = undefined;
        var10 = var5.bind(var4)(var7);
        var9 = var10.useStateFromStores;
        var7 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var7;
        var7 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getMessageRequestsCount;
            var0 = var0.bind(var1)();
            return var0;
        };
        var7 = var9.bind(var10)(var8, var7);
        var0.requestCount = var7;
        var3 = var6[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var1 = _closure1_slot6;
            var0 = var1.getSpamChannelsCount;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        var0.spamCount = var1;
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.color;
        var5 = _closure1_slot3;
        var3 = var5.useRef;
        var2 = null;
        var5 = var3.bind(var5)(var2);
        var _closure2_slot0 = var5;
        var2 = _closure1_slot10;
        var3 = undefined;
        var2 = var2.bind(var3)();
        var8 = var2.requestCount;
        var _closure2_slot1 = var8;
        var7 = _closure1_slot3;
        var6 = var7.useEffect;
        var2 = new Array(1);
        var2[0] = var8;
        var1 = function() { // Environment: var1
            _fun101880: for (var _fun101880_ip = 0;;) switch (_fun101880_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = 0;
                    if (!(var1 > var0)) {
                        _fun101880_ip = 57;
                        continue _fun101880
                    }
                case 13:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var0 = var3 == var0;
                    var1 = undefined;
                    if (var0) {
                        _fun101880_ip = 44;
                        continue _fun101880
                    }
                case 28:
                    var2 = _closure2_slot0;
                    var2 = var2.current;
                    var0 = var3 == var2;
                    var1 = var2;
                case 44:
                    if (var0) {
                        _fun101880_ip = 57;
                        continue _fun101880
                    }
                case 47:
                    var0 = var1.play;
                    var0 = var0.bind(var1)();
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var6.bind(var7)(var1, var2);
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 7;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.MessageRequestLottie;
        var0 = {};
        var0.ref = var5;
        var0.color = var4;
        var4 = 'sm';
        var0.size = var4;
        var4 = true;
        var0.autoPlay = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'relative';
    var8.position = var9;
    var3.buttonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101881: for (var _fun101881_ip = 0;;) switch (_fun101881_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.alternateVariant;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun101881_ip = 17;
                    continue _fun101881
                }
            case 15:
                var1 = false;
            case 17:
                var0 = null;
                var3 = Object.create(var0);
                var8 = 0;
                var3.alternateVariant = var8;
                var21 = {};
                var20 = var5;
                var19 = var3;
                var12 = copyDataProperties(var21, var20, var19);
                var2 = _closure1_slot9;
                var5 = var2.bind(var4)();
                var2 = _closure1_slot10;
                var2 = var2.bind(var4)();
                var6 = var2.requestCount;
                var2 = var2.spamCount;
                if (!(var8 === var6)) {
                    _fun101881_ip = 83;
                    continue _fun101881
                }
            case 76:
                if (!(var8 !== var2)) {
                    _fun101881_ip = 658;
                    continue _fun101881
                }
            case 83:
                if (var1) {
                    _fun101881_ip = 253;
                    continue _fun101881
                }
            case 89:
                var3 = _closure1_slot7;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 11;
                var1 = var14[var1];
                var2 = var10.bind(var4)(var1);
                var1 = {};
                var9 = 12;
                var9 = var14[var9];
                var9 = var10.bind(var4)(var9);
                var1.source = var9;
                var9 = _closure1_slot11;
                var1.IconComponent = var9;
                var13 = _closure1_slot0;
                var9 = 9;
                var10 = var14[var9];
                var10 = var13.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var14[var9];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.e7GWjQ;
                var9 = var10.bind(var11)(var9);
                var1.accessibilityLabel = var9;
                var10 = var6 > var8;
                var9 = undefined;
                if (!var10) {
                    _fun101881_ip = 212;
                    continue _fun101881
                }
            case 203:
                var10 = var6.toString;
                var9 = var10.bind(var6)();
            case 212:
                var1.buttonText = var9;
                var9 = var6 > var8;
                var1.badge = var9;
                var9 = 'right';
                var1.badgePosition = var9;
                var21 = var1;
                var20 = var12;
                var9 = copyDataProperties(var21, var20);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 253:
                var1 = var6 > var8;
                var13 = undefined;
                if (!var1) {
                    _fun101881_ip = 271;
                    continue _fun101881
                }
            case 262:
                var1 = var6.toString;
                var13 = var1.bind(var6)();
            case 271:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var5.buttonContainer;
                var1.style = var5;
                var5 = false;
                var1.collapsable = var5;
                if (!(var0 == var13)) {
                    _fun101881_ip = 441;
                    continue _fun101881
                }
            case 305:
                var10 = _closure1_slot7;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 10;
                var5 = var17[var5];
                var5 = var16.bind(var4)(var5);
                var9 = var5.IconButton;
                var5 = {
                    'variant': 'secondary',
                    'size': 'sm'
                };
                var15 = _closure1_slot7;
                var14 = _closure1_slot11;
                var11 = {};
                var11 = var15.bind(var4)(var14, var11);
                var5.icon = var11;
                var11 = 9;
                var14 = var17[var11];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var11 = var17[var11];
                var11 = var16.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.e7GWjQ;
                var11 = var14.bind(var15)(var11);
                var5.accessibilityLabel = var11;
                var21 = var5;
                var20 = var12;
                var11 = copyDataProperties(var21, var20);
                var9 = var10.bind(var4)(var9, var5);
                _fun101881_ip = 580;
                continue _fun101881;
            case 441:
                var11 = _closure1_slot7;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 8;
                var5 = var17[var5];
                var5 = var16.bind(var4)(var5);
                var10 = var5.Button;
                var5 = {};
                var18 = _closure1_slot7;
                var15 = _closure1_slot11;
                var14 = {};
                var14 = var18.bind(var4)(var15, var14);
                var5.icon = var14;
                var14 = 'secondary';
                var5.variant = var14;
                var5.text = var13;
                var13 = 'sm';
                var5.size = var13;
                var13 = 9;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.e7GWjQ;
                var13 = var14.bind(var15)(var13);
                var5.accessibilityLabel = var13;
                var21 = var5;
                var20 = var12;
                var12 = copyDataProperties(var21, var20);
                var9 = var11.bind(var4)(var10, var5);
            case 580:
                var5 = new Array(2);
                var5[0] = var9;
                var6 = var6 > var8;
                if (!var6) {
                    _fun101881_ip = 642;
                    continue _fun101881
                }
            case 595:
                var9 = _closure1_slot7;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 11;
                var7 = var10[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.ButtonBadge;
                var7 = {};
                var10 = 'right';
                var7.badgePosition = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 642:
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 658:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3959, 3964, 33, 1297, 566, 13252, 4090, 1235, 7570, 9064, 7646, 2]);