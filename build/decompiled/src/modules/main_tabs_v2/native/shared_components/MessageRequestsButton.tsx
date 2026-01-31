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
        var3 = 5;
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
            _fun101311: for (var _fun101311_ip = 0;;) switch (_fun101311_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = 0;
                    if (!(var1 > var0)) {
                        _fun101311_ip = 57;
                        continue _fun101311
                    }
                case 13:
                    var0 = _closure2_slot0;
                    var3 = null;
                    var0 = var3 == var0;
                    var1 = undefined;
                    if (var0) {
                        _fun101311_ip = 44;
                        continue _fun101311
                    }
                case 28:
                    var2 = _closure2_slot0;
                    var2 = var2.current;
                    var0 = var3 == var2;
                    var1 = var2;
                case 44:
                    if (var0) {
                        _fun101311_ip = 57;
                        continue _fun101311
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
        var0 = 6;
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
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var7 = var3.StyleSheet;
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
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var9 = 'relative';
    var8.position = var9;
    var3.buttonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101312: for (var _fun101312_ip = 0;;) switch (_fun101312_ip) {
            case 0:
                var5 = arg0;
                var1 = var5.alternateVariant;
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun101312_ip = 17;
                    continue _fun101312
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
                var2 = _closure1_slot10;
                var2 = var2.bind(var4)();
                var6 = var2.requestCount;
                var2 = var2.spamCount;
                if (!(var8 === var6)) {
                    _fun101312_ip = 75;
                    continue _fun101312
                }
            case 68:
                if (!(var8 !== var2)) {
                    _fun101312_ip = 654;
                    continue _fun101312
                }
            case 75:
                if (var1) {
                    _fun101312_ip = 245;
                    continue _fun101312
                }
            case 81:
                var3 = _closure1_slot7;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 10;
                var1 = var13[var1];
                var2 = var9.bind(var4)(var1);
                var1 = {};
                var5 = 11;
                var5 = var13[var5];
                var5 = var9.bind(var4)(var5);
                var1.source = var5;
                var5 = _closure1_slot11;
                var1.IconComponent = var5;
                var11 = _closure1_slot0;
                var5 = 8;
                var9 = var13[var5];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var13[var5];
                var5 = var11.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.e7GWjQ;
                var5 = var9.bind(var10)(var5);
                var1.accessibilityLabel = var5;
                var9 = var6 > var8;
                var5 = undefined;
                if (!var9) {
                    _fun101312_ip = 204;
                    continue _fun101312
                }
            case 195:
                var9 = var6.toString;
                var5 = var9.bind(var6)();
            case 204:
                var1.buttonText = var5;
                var5 = var6 > var8;
                var1.badge = var5;
                var5 = 'right';
                var1.badgePosition = var5;
                var21 = var1;
                var20 = var12;
                var5 = copyDataProperties(var21, var20);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 245:
                var1 = var6 > var8;
                var13 = undefined;
                if (!var1) {
                    _fun101312_ip = 263;
                    continue _fun101312
                }
            case 254:
                var1 = var6.toString;
                var13 = var1.bind(var6)();
            case 263:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = _closure1_slot9;
                var5 = var5.buttonContainer;
                var1.style = var5;
                var5 = false;
                var1.collapsable = var5;
                if (!(var0 == var13)) {
                    _fun101312_ip = 437;
                    continue _fun101312
                }
            case 301:
                var10 = _closure1_slot7;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 9;
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
                var11 = 8;
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
                _fun101312_ip = 576;
                continue _fun101312;
            case 437:
                var11 = _closure1_slot7;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = 7;
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
                var13 = 8;
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
            case 576:
                var5 = new Array(2);
                var5[0] = var9;
                var6 = var6 > var8;
                if (!var6) {
                    _fun101312_ip = 638;
                    continue _fun101312
                }
            case 591:
                var9 = _closure1_slot7;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 10;
                var7 = var10[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.ButtonBadge;
                var7 = {};
                var10 = 'right';
                var7.badgePosition = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 638:
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 654:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3923, 3928, 33, 566, 13164, 4043, 1234, 7470, 8948, 7546, 2]);