// modules/safe_area/useSafeAreaAvoidingInputs.native.tsx
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
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun75750: for (var _fun75750_ip = 0;;) switch (_fun75750_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        var2 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75750_ip = 277;
                            continue _fun75750
                        }
                    case 16:
                        var5 = null;
                        if (!(var5 != var4)) {
                            _fun75750_ip = 239;
                            continue _fun75750
                        }
                    case 25:
                        var3 = var4.type;
                        var1 = 'toRef';
                        if (!(var1 !== var3)) {
                            _fun75750_ip = 88;
                            continue _fun75750
                        }
                    case 40:
                        var1 = 'toValue';
                        if (!(var1 !== var3)) {
                            _fun75750_ip = 80;
                            continue _fun75750
                        }
                    case 48:
                        var1 = 'toBottom';
                        if (!(var1 !== var3)) {
                            _fun75750_ip = 63;
                            continue _fun75750
                        }
                    case 58:
                        var1 = undefined;
                        return var1;
                    case 63:
                        var1 = global;
                        var1 = var1.Number;
                        var1 = var1.MAX_SAFE_INTEGER;
                        return var1;
                    case 80:
                        var1 = var4.value;
                        return var1;
                    case 88:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 4;
                        var1 = var6[var1];
                        var6 = undefined;
                        var8 = var7.bind(var6)(var1);
                        var7 = var8.measureViewRefInWindow;
                        var1 = var4.ref;
                        var1 = var7.bind(var8)(var1);
                        SaveGenerator(address = 133);
                    case 131:
                        return var1;
                    case 133:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun75750_ip = 236;
                            continue _fun75750
                        }
                    case 139:
                        var7 = var4.extraOffset;
                        var8 = var5 != var7;
                        var4 = 0;
                        if (!var8) {
                            _fun75750_ip = 157;
                            continue _fun75750
                        }
                    case 154:
                        var4 = var7;
                    case 157:
                        if (!(var5 != var1)) {
                            _fun75750_ip = 199;
                            continue _fun75750
                        }
                    case 161:
                        var5 = var1.y;
                        var7 = var2.y;
                        var2 = var2.height;
                        var2 = var7 + var2;
                        var5 = var5 - var2;
                        var2 = var1.height;
                        var2 = var5 + var2;
                        var2 = var2 + var4;
                        _fun75750_ip = 233;
                        continue _fun75750;
                    case 199:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 3;
                        var3 = var7[var3];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.spacing;
                        var3 = var3.PX_16;
                        var2 = var3 + var4;
                    case 233:
                        return var2;
                    case 236:
                        return var1;
                    case 239:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var1 = var1.spacing;
                        var1 = var1.PX_16;
                        return var1;
                    case 277:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safe_area/useSafeAreaAvoidingInputs.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var6 = var1.insets;
        var _closure2_slot0 = var6;
        var2 = var1.inputs;
        var _closure2_slot1 = var2;
        var5 = var1.scrollViewRef;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var2);
        var _closure2_slot3 = var3;
        var7 = var4.useEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure2_slot3;
            var0 = _closure2_slot1;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var7.bind(var4)(var2, var3);
        var3 = var4.useCallback;
        var7 = _closure1_slot3;
        var2 = undefined;
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun75754: for (var _fun75754_ip = 0;;) switch (_fun75754_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75754_ip = 697;
                            continue _fun75754
                        }
                    case 12:
                        var1 = _closure2_slot2;
                        var11 = var1.current;
                        var1 = _closure2_slot3;
                        var3 = var1.current;
                        var2 = var3.find;
                        var1 = function(arg0) { // Environment: var4
                            _fun75755: for (var _fun75755_ip = 0;;) switch (_fun75755_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.ref;
                                    var2 = var0.current;
                                    var0 = null;
                                    var1 = var0 == var2;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun75755_ip = 34;
                                        continue _fun75755
                                    }
                                case 24:
                                    var1 = var2.isFocused;
                                    var0 = var1.bind(var2)();
                                case 34:
                                    return var0;
                            }
                        };
                        var6 = var2.bind(var3)(var1);
                        var10 = null;
                        if (!(var10 != var6)) {
                            _fun75754_ip = 680;
                            continue _fun75754
                        }
                    case 59:
                        if (!(var10 != var11)) {
                            _fun75754_ip = 680;
                            continue _fun75754
                        }
                    case 66:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var12 = 4;
                        var1 = var1[var12];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.measureViewRefInWindow;
                        var1 = var6.ref;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 111);
                    case 109:
                        return var1;
                    case 111:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun75754_ip = 694;
                            continue _fun75754
                        }
                    case 120:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var12];
                        var9 = var3.bind(var7)(var2);
                        var3 = var9.measureViewRefInView;
                        var2 = var6.ref;
                        var2 = var3.bind(var9)(var2, var11);
                        SaveGenerator(address = 158);
                    case 156:
                        return var2;
                    case 158:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun75754_ip = 691;
                            continue _fun75754
                        }
                    case 167:
                        if (!(var10 != var1)) {
                            _fun75754_ip = 680;
                            continue _fun75754
                        }
                    case 174:
                        if (!(var10 != var2)) {
                            _fun75754_ip = 680;
                            continue _fun75754
                        }
                    case 181:
                        var9 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var12];
                        var9 = var9.bind(var7)(var3);
                        var3 = var9.measureViewInWindow;
                        var3 = var3.bind(var9)(var11);
                        SaveGenerator(address = 213);
                    case 211:
                        return var3;
                    case 213:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 9);
                        if (var9) {
                            _fun75754_ip = 688;
                            continue _fun75754
                        }
                    case 222:
                        var6 = var6.offset;
                        var4 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot5;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var4 = var4.bind(var7)(var6, var1);
                        SaveGenerator(address = 245);
                    case 243:
                        return var4;
                    case 245:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun75754_ip = 685;
                            continue _fun75754
                        }
                    case 254:
                        var13 = global;
                        var6 = var13.Number;
                        var6 = var6.MAX_SAFE_INTEGER;
                        if (!(var4 === var6)) {
                            _fun75754_ip = 313;
                            continue _fun75754
                        }
                    case 272:
                        var6 = _closure2_slot2;
                        var11 = var6.current;
                        if (!(var10 != var11)) {
                            _fun75754_ip = 680;
                            continue _fun75754
                        }
                    case 288:
                        var9 = var11.scrollToEnd;
                        var6 = {};
                        var12 = true;
                        var6.animated = var12;
                        var6 = var9.bind(var11)(var6);
                        _fun75754_ip = 680;
                        continue _fun75754;
                    case 313:
                        var6 = {};
                        var9 = _closure2_slot0;
                        var6.insets = var9;
                        var6.inputInScrollView = var2;
                        var6.inputInWindow = var1;
                        var6.scrollOffset = var4;
                        var6.scrollView = var3;
                        var9 = var6.scrollView;
                        var11 = var9.y;
                        var9 = var6.scrollView;
                        var9 = var9.height;
                        var12 = var11 + var9;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 2;
                        var8 = var11[var8];
                        var14 = var9.bind(var7)(var8);
                        var11 = var14.getWindowDimensions;
                        var9 = {};
                        var8 = true;
                        var9.ignoreKeyboard = var8;
                        var9 = var11.bind(var14)(var9);
                        var11 = var9.height;
                        var9 = var6.insets;
                        var9 = var9.bottom;
                        var11 = var11 - var9;
                        var9 = var6.inputInWindow;
                        var14 = var9.y;
                        var9 = var6.inputInWindow;
                        var9 = var9.height;
                        var14 = var14 + var9;
                        var9 = var6.scrollOffset;
                        var14 = var14 + var9;
                        var9 = undefined;
                        if (!(!(var14 <= var11))) {
                            _fun75754_ip = 556;
                            continue _fun75754
                        }
                    case 472:
                        var14 = var13.Math;
                        var13 = var14.max;
                        var12 = var12 - var11;
                        var11 = 0;
                        var12 = var13.bind(var14)(var11, var12);
                        var11 = var6.scrollView;
                        var11 = var11.height;
                        var11 = var11 - var12;
                        var12 = var6.inputInScrollView;
                        var13 = var12.y;
                        var12 = var6.inputInScrollView;
                        var12 = var12.height;
                        var12 = var13 + var12;
                        var6 = var6.scrollOffset;
                        var6 = var12 + var6;
                        var9 = undefined;
                        if (!(!(var6 <= var11))) {
                            _fun75754_ip = 556;
                            continue _fun75754
                        }
                    case 552:
                        var9 = var6 - var11;
                    case 556:
                        if (!(var10 != var9)) {
                            _fun75754_ip = 680;
                            continue _fun75754
                        }
                    case 560:
                        var6 = _closure2_slot2;
                        var13 = var6.current;
                        var11 = var10 == var13;
                        var5 = undefined;
                        if (var11) {
                            _fun75754_ip = 620;
                            continue _fun75754
                        }
                    case 578:
                        var11 = var13.scrollTo;
                        var11 = var10 == var11;
                        var5 = undefined;
                        if (var11) {
                            _fun75754_ip = 620;
                            continue _fun75754
                        }
                    case 593:
                        var12 = var13.scrollTo;
                        var11 = {
                            'x': 0,
                            'y': null,
                            'animated': true
                        };
                        var11.y = var9;
                        var5 = var12.bind(var13)(var11);
                    case 620:
                        var5 = var10 != var5;
                        var7 = undefined;
                        if (var5) {
                            _fun75754_ip = 641;
                            continue _fun75754
                        }
                    case 629:
                        var6 = var6.current;
                        var5 = var10 == var6;
                        var7 = var6;
                    case 641:
                        if (var5) {
                            _fun75754_ip = 654;
                            continue _fun75754
                        }
                    case 644:
                        var6 = var7.scrollToOffset;
                        var5 = var10 == var6;
                    case 654:
                        if (var5) {
                            _fun75754_ip = 680;
                            continue _fun75754
                        }
                    case 657:
                        var6 = var7.scrollToOffset;
                        var5 = {};
                        var5.offset = var9;
                        var5.animated = var8;
                        var5 = var6.bind(var7)(var5);
                    case 680:
                        var5 = undefined;
                        return var5;
                    case 685:
                        return var4;
                    case 688:
                        return var3;
                    case 691:
                        return var2;
                    case 694:
                        return var1;
                    case 697:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var7.bind(var2)(var1);
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var _closure2_slot4 = var1;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var1;
        var0 = function() { // Environment: var0
            var1 = global;
            var4 = var1.setTimeout;
            var3 = _closure2_slot4;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var1 = var2[var1];
            var2 = undefined;
            var5 = var5.bind(var2)(var1);
            var1 = var5.getKeyboardDuration;
            var1 = var1.bind(var5)();
            var1 = var4.bind(var2)(var3, var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = global;
                var2 = var0.clearTimeout;
                var1 = _closure3_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var0 = var3.bind(var4)(var0, var2);
        var0 = {};
        var0.onFocus = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1464, 671, 9594, 4889, 2]);