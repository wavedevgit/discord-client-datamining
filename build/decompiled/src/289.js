// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: useTextPressability, environment: var4
        var1 = arg0;
        var16 = var1.onLongPress;
        var _closure2_slot0 = var16;
        var15 = var1.onPress;
        var _closure2_slot1 = var15;
        var14 = var1.onPressIn;
        var _closure2_slot2 = var14;
        var13 = var1.onPressOut;
        var _closure2_slot3 = var13;
        var11 = var1.onResponderGrant;
        var _closure2_slot4 = var11;
        var10 = var1.onResponderMove;
        var _closure2_slot5 = var10;
        var9 = var1.onResponderRelease;
        var _closure2_slot6 = var9;
        var8 = var1.onResponderTerminate;
        var _closure2_slot7 = var8;
        var7 = var1.onResponderTerminationRequest;
        var _closure2_slot8 = var7;
        var2 = var1.onStartShouldSetResponder;
        var _closure2_slot9 = var2;
        var17 = var1.pressRetentionOffset;
        var _closure2_slot10 = var17;
        var4 = var1.suppressHighlighting;
        var6 = _closure1_slot8;
        var3 = undefined;
        var5 = false;
        var12 = var6.bind(var3)(var5);
        var6 = _closure1_slot4;
        var5 = 2;
        var12 = var6.bind(var3)(var12, var5);
        var5 = 0;
        var5 = var12[var5];
        var _closure2_slot11 = var5;
        var6 = 1;
        var6 = var12[var6];
        var12 = _closure1_slot7;
        var6 = new Array(6);
        var6[0] = var17;
        var6[1] = var16;
        var6[2] = var15;
        var6[3] = var14;
        var6[4] = var13;
        var6[5] = var4;
        var4 = function() { // Environment: var0
            var0 = {};
            var1 = false;
            var0.disabled = var1;
            var2 = _closure2_slot10;
            var0.pressRectOffset = var2;
            var2 = _closure2_slot0;
            var0.onLongPress = var2;
            var2 = _closure2_slot1;
            var0.onPress = var2;
            var2 = _closure2_slot2;
            var0.onPressIn = var2;
            var1 = _closure2_slot3;
            var0.onPressOut = var1;
            return var0;
        };
        var6 = var12.bind(var3)(var4, var6);
        var12 = _closure1_slot1;
        var13 = _closure1_slot2;
        var4 = 8;
        var4 = var13[var4];
        var4 = var12.bind(var3)(var4);
        var12 = var4.bind(var3)(var6);
        var _closure2_slot12 = var12;
        var6 = _closure1_slot7;
        var4 = new Array(7);
        var4[0] = var12;
        var4[1] = var11;
        var4[2] = var10;
        var4[3] = var9;
        var4[4] = var8;
        var4[5] = var7;
        var4[6] = var2;
        var2 = function() { // Environment: var0
            _fun4466: for (var _fun4466_ip = 0;;) switch (_fun4466_ip) {
                case 0:
                    var0 = _closure2_slot12;
                    var4 = null;
                    var1 = var4 == var0;
                    var0 = null;
                    if (var1) {
                        _fun4466_ip = 138;
                        continue _fun4466
                    }
                case 20:
                    var1 = {};
                    var5 = function(arg0) { // Original name: onResponderGrant, environment: var2
                        _fun4467: for (var _fun4467_ip = 0;;) switch (_fun4467_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure2_slot12;
                                var1 = var3.onResponderGrant;
                                var1 = var1.bind(var3)(var2);
                                var3 = _closure2_slot4;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun4467_ip = 42;
                                    continue _fun4467
                                }
                            case 31:
                                var1 = _closure2_slot4;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 42:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onResponderGrant = var5;
                    var5 = function(arg0) { // Original name: onResponderMove, environment: var2
                        _fun4468: for (var _fun4468_ip = 0;;) switch (_fun4468_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure2_slot12;
                                var1 = var3.onResponderMove;
                                var1 = var1.bind(var3)(var2);
                                var3 = _closure2_slot5;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun4468_ip = 42;
                                    continue _fun4468
                                }
                            case 31:
                                var1 = _closure2_slot5;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 42:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onResponderMove = var5;
                    var5 = function(arg0) { // Original name: onResponderRelease, environment: var2
                        _fun4469: for (var _fun4469_ip = 0;;) switch (_fun4469_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure2_slot12;
                                var1 = var3.onResponderRelease;
                                var1 = var1.bind(var3)(var2);
                                var3 = _closure2_slot6;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun4469_ip = 42;
                                    continue _fun4469
                                }
                            case 31:
                                var1 = _closure2_slot6;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 42:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onResponderRelease = var5;
                    var2 = function(arg0) { // Original name: onResponderTerminate, environment: var2
                        _fun4470: for (var _fun4470_ip = 0;;) switch (_fun4470_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = _closure2_slot12;
                                var1 = var3.onResponderTerminate;
                                var1 = var1.bind(var3)(var2);
                                var3 = _closure2_slot7;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun4470_ip = 42;
                                    continue _fun4470
                                }
                            case 31:
                                var1 = _closure2_slot7;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 42:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onResponderTerminate = var2;
                    var2 = _closure2_slot12;
                    var2 = var2.onClick;
                    var1.onClick = var2;
                    var2 = _closure2_slot8;
                    if (!(var4 == var2)) {
                        _fun4466_ip = 97;
                        continue _fun4466
                    }
                case 85:
                    var2 = _closure2_slot12;
                    var2 = var2.onResponderTerminationRequest;
                    _fun4466_ip = 101;
                    continue _fun4466;
                case 97:
                    var2 = _closure2_slot8;
                case 101:
                    var1.onResponderTerminationRequest = var2;
                    var2 = _closure2_slot9;
                    if (!(var4 == var2)) {
                        _fun4466_ip = 126;
                        continue _fun4466
                    }
                case 114:
                    var2 = _closure2_slot12;
                    var2 = var2.onStartShouldSetResponder;
                    _fun4466_ip = 130;
                    continue _fun4466;
                case 126:
                    var2 = _closure2_slot9;
                case 130:
                    var1.onStartShouldSetResponder = var2;
                    var0 = var1;
                case 138:
                    return var0;
            }
        };
        var4 = var6.bind(var3)(var2, var4);
        var _closure2_slot13 = var4;
        var2 = _closure1_slot7;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot11;
            var0 = new Array(2);
            var0[0] = var2;
            var1 = _closure2_slot13;
            var0[1] = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = ['ref', 'accessible', 'accessibilityLabel', 'accessibilityState', 'allowFontScaling', 'aria-busy', 'aria-checked', 'aria-disabled', 'aria-expanded', 'aria-label', 'aria-selected', 'children', 'ellipsizeMode', 'disabled', 'id', 'nativeID', 'numberOfLines', 'onLongPress', 'onPress', 'onPressIn', 'onPressOut', 'onResponderGrant', 'onResponderMove', 'onResponderRelease', 'onResponderTerminate', 'onResponderTerminationRequest', 'onStartShouldSetResponder', 'pressRetentionOffset', 'selectable', 'selectionColor', 'suppressHighlighting', 'style'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var7 = var5[var1];
    var6 = arg3;
    var6 = var6.bind(var0)(var7);
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var6 = var1.useContext;
    var _closure1_slot6 = var6;
    var6 = var1.useMemo;
    var _closure1_slot7 = var6;
    var1 = var1.useState;
    var _closure1_slot8 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot9 = var1;
    var1 = function(arg0) { // Original name: TextImpl, environment: var4
        _fun4472: for (var _fun4472_ip = 0;;) switch (_fun4472_ip) {
            case 0:
                var28 = arg0;
                var4 = undefined;
                var3 = undefined;
                var33 = undefined;
                var18 = var28.ref;
                var39 = var28.accessible;
                var29 = var28.accessibilityLabel;
                var25 = var28.accessibilityState;
                var40 = var28.allowFontScaling;
                var36 = var28["aria-busy"];
                var35 = var28["aria-checked"];
                var34 = var28["aria-disabled"];
                var30 = var28["aria-expanded"];
                var0 = var28["aria-label"];
                var24 = var28["aria-selected"];
                var5 = var28.children;
                var38 = var28.ellipsizeMode;
                var22 = var28.disabled;
                var2 = var28.id;
                var27 = var28.nativeID;
                var26 = var28.numberOfLines;
                var17 = var28.onLongPress;
                var16 = var28.onPress;
                var15 = var28.onPressIn;
                var14 = var28.onPressOut;
                var13 = var28.onResponderGrant;
                var12 = var28.onResponderMove;
                var11 = var28.onResponderRelease;
                var10 = var28.onResponderTerminate;
                var9 = var28.onResponderTerminationRequest;
                var8 = var28.onStartShouldSetResponder;
                var7 = var28.pressRetentionOffset;
                var19 = var28.selectable;
                var23 = var28.selectionColor;
                var6 = var28.suppressHighlighting;
                var31 = var28.style;
                var21 = _closure1_slot5;
                var20 = _closure1_slot3;
                var21 = var21.bind(var4)(var28, var20);
                var32 = null;
                if (!(var32 != var0)) {
                    _fun4472_ip = 219;
                    continue _fun4472
                }
            case 216:
                var29 = var0;
            case 219:
                var0 = var32 == var36;
                if (!var0) {
                    _fun4472_ip = 230;
                    continue _fun4472
                }
            case 226:
                var0 = var32 == var35;
            case 230:
                if (!var0) {
                    _fun4472_ip = 237;
                    continue _fun4472
                }
            case 233:
                var0 = var32 == var34;
            case 237:
                if (!var0) {
                    _fun4472_ip = 244;
                    continue _fun4472
                }
            case 240:
                var0 = var32 == var30;
            case 244:
                if (!var0) {
                    _fun4472_ip = 251;
                    continue _fun4472
                }
            case 247:
                var0 = var32 == var24;
            case 251:
                var28 = var25;
                if (var0) {
                    _fun4472_ip = 370;
                    continue _fun4472
                }
            case 257:
                if (!(var32 == var25)) {
                    _fun4472_ip = 289;
                    continue _fun4472
                }
            case 261:
                var0 = {};
                var0.busy = var36;
                var0.checked = var35;
                var0.disabled = var34;
                var0.expanded = var30;
                var0.selected = var24;
                _fun4472_ip = 367;
                continue _fun4472;
            case 289:
                var20 = {};
                if (!(var32 == var36)) {
                    _fun4472_ip = 301;
                    continue _fun4472
                }
            case 295:
                var36 = var25.busy;
            case 301:
                var20.busy = var36;
                if (!(var32 == var35)) {
                    _fun4472_ip = 316;
                    continue _fun4472
                }
            case 310:
                var35 = var25.checked;
            case 316:
                var20.checked = var35;
                if (!(var32 == var34)) {
                    _fun4472_ip = 330;
                    continue _fun4472
                }
            case 325:
                var34 = var25.disabled;
            case 330:
                var20.disabled = var34;
                if (!(var32 == var30)) {
                    _fun4472_ip = 344;
                    continue _fun4472
                }
            case 338:
                var30 = var25.expanded;
            case 344:
                var20.expanded = var30;
                if (!(var32 == var24)) {
                    _fun4472_ip = 359;
                    continue _fun4472
                }
            case 353:
                var24 = var25.selected;
            case 359:
                var20.selected = var24;
                var0 = var20;
            case 367:
                var28 = var0;
            case 370:
                var0 = var32 == var28;
                var35 = undefined;
                if (var0) {
                    _fun4472_ip = 384;
                    continue _fun4472
                }
            case 379:
                var35 = var28.disabled;
            case 384:
                var34 = var35;
                if (!(var32 != var22)) {
                    _fun4472_ip = 394;
                    continue _fun4472
                }
            case 391:
                var34 = var22;
            case 394:
                var0 = var32 != var16;
                if (var0) {
                    _fun4472_ip = 405;
                    continue _fun4472
                }
            case 401:
                var0 = var32 != var17;
            case 405:
                if (var0) {
                    _fun4472_ip = 412;
                    continue _fun4472
                }
            case 408:
                var0 = var32 != var8;
            case 412:
                if (!var0) {
                    _fun4472_ip = 421;
                    continue _fun4472
                }
            case 415:
                var20 = true;
                var0 = var20 !== var34;
            case 421:
                var20 = var32 != var23;
                var24 = undefined;
                if (!var20) {
                    _fun4472_ip = 455;
                    continue _fun4472
                }
            case 430:
                var25 = _closure1_slot1;
                var30 = _closure1_slot2;
                var20 = 4;
                var20 = var30[var20];
                var20 = var25.bind(var4)(var20);
                var24 = var20.bind(var4)(var23);
            case 455:
                var20 = var32 == var26;
                if (var20) {
                    _fun4472_ip = 468;
                    continue _fun4472
                }
            case 462:
                var23 = 0;
                var20 = var26 >= var23;
            case 468:
                if (var20) {
                    _fun4472_ip = 473;
                    continue _fun4472
                }
            case 471:
                var26 = 0;
            case 473:
                var23 = _closure1_slot1;
                var25 = _closure1_slot2;
                var20 = 5;
                var20 = var25[var20];
                var20 = var23.bind(var4)(var20);
                var36 = var20.bind(var4)(var31);
                var23 = var31;
                var25 = var19;
                if (!(var32 != var36)) {
                    _fun4472_ip = 681;
                    continue _fun4472
                }
            case 511:
                var20 = var36.fontWeight;
                var30 = 'number';
                var20 = typeof var20;
                var41 = null;
                if (!(var30 === var20)) {
                    _fun4472_ip = 556;
                    continue _fun4472
                }
            case 530:
                var20 = {};
                var37 = var36.fontWeight;
                var30 = var37.toString;
                var30 = var30.bind(var37)();
                var20.fontWeight = var30;
                var41 = var20;
            case 556:
                var20 = var36.userSelect;
                var37 = var41;
                if (!(var32 != var20)) {
                    _fun4472_ip = 603;
                    continue _fun4472
                }
            case 569:
                var30 = _closure1_slot12;
                var20 = var36.userSelect;
                var30 = var30[var20];
                var20 = var41;
                if (var41) {
                    _fun4472_ip = 591;
                    continue _fun4472
                }
            case 589:
                var20 = {};
            case 591:
                var20.userSelect = var4;
                var37 = var20;
                var19 = var30;
            case 603:
                var20 = var36.verticalAlign;
                var30 = var37;
                if (!(var32 != var20)) {
                    _fun4472_ip = 653;
                    continue _fun4472
                }
            case 616:
                var20 = var37;
                if (var37) {
                    _fun4472_ip = 624;
                    continue _fun4472
                }
            case 622:
                var20 = {};
            case 624:
                var37 = _closure1_slot13;
                var36 = var36.verticalAlign;
                var36 = var37[var36];
                var20.textAlignVertical = var36;
                var20.verticalAlign = var4;
                var30 = var20;
            case 653:
                var23 = var31;
                var25 = var19;
                if (!(var32 != var30)) {
                    _fun4472_ip = 681;
                    continue _fun4472
                }
            case 663:
                var20 = new Array(2);
                var20[0] = var31;
                var20[1] = var30;
                var23 = var20;
                var25 = var19;
            case 681:
                if (!(var32 != var2)) {
                    _fun4472_ip = 688;
                    continue _fun4472
                }
            case 685:
                var27 = var2;
            case 688:
                var19 = _closure1_slot6;
                var20 = _closure1_slot1;
                var2 = _closure1_slot2;
                var30 = 6;
                var2 = var2[var30];
                var2 = var20.bind(var4)(var2);
                var2 = var19.bind(var4)(var2);
                if (var2) {
                    _fun4472_ip = 1310;
                    continue _fun4472
                }
            case 723:
                var2 = var34 !== var35;
                if (!var2) {
                    _fun4472_ip = 765;
                    continue _fun4472
                }
            case 730:
                var19 = var32 != var34;
                if (!var19) {
                    _fun4472_ip = 743;
                    continue _fun4472
                }
            case 737:
                var20 = false;
                var19 = var20 !== var34;
            case 743:
                if (var19) {
                    _fun4472_ip = 762;
                    continue _fun4472
                }
            case 746:
                var20 = var32 != var35;
                if (!var20) {
                    _fun4472_ip = 759;
                    continue _fun4472
                }
            case 753:
                var31 = false;
                var20 = var31 !== var35;
            case 759:
                var19 = var20;
            case 762:
                var2 = var19;
            case 765:
                var41 = var28;
                if (!var2) {
                    _fun4472_ip = 799;
                    continue _fun4472
                }
            case 771:
                var2 = global;
                var31 = var2.Object;
                var20 = var31.assign;
                var19 = {};
                var19.disabled = var34;
                var2 = {};
                var41 = var20.bind(var31)(var2, var28, var19);
            case 799:
                if (!(var32 == var39)) {
                    _fun4472_ip = 817;
                    continue _fun4472
                }
            case 803:
                var2 = var32 != var16;
                if (var2) {
                    _fun4472_ip = 814;
                    continue _fun4472
                }
            case 810:
                var2 = var32 != var17;
            case 814:
                var39 = var2;
            case 817:
                var31 = _closure1_slot9;
                if (var0) {
                    _fun4472_ip = 967;
                    continue _fun4472
                }
            case 827:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 7;
                var2 = var20[var2];
                var2 = var19.bind(var4)(var2);
                var19 = var2.NativeText;
                var2 = global;
                var36 = var2.Object;
                var35 = var36.assign;
                var20 = {};
                var20.accessibilityLabel = var29;
                var20.accessibilityState = var41;
                var20.accessible = var39;
                var2 = false;
                var2 = var2 !== var40;
                var20.allowFontScaling = var2;
                var20.disabled = var34;
                var37 = var32 != var38;
                var2 = 'tail';
                if (!var37) {
                    _fun4472_ip = 910;
                    continue _fun4472
                }
            case 907:
                var2 = var38;
            case 910:
                var20.ellipsizeMode = var2;
                var20.nativeID = var27;
                var20.numberOfLines = var26;
                var20.ref = var18;
                var20.selectable = var25;
                var20.selectionColor = var24;
                var20.style = var23;
                var20.children = var5;
                var2 = {};
                var2 = var35.bind(var36)(var2, var21, var20);
                var2 = var31.bind(var4)(var19, var2);
                _fun4472_ip = 1153;
                continue _fun4472;
            case 967:
                var20 = _closure1_slot11;
                var19 = {};
                var19.ref = var18;
                var35 = global;
                var37 = var35.Object;
                var36 = var37.assign;
                var35 = {};
                var35.accessibilityLabel = var29;
                var35.accessibilityState = var41;
                var35.accessible = var39;
                var39 = false;
                var39 = var39 !== var40;
                var35.allowFontScaling = var39;
                var35.disabled = var34;
                var39 = var32 != var38;
                var34 = 'tail';
                if (!var39) {
                    _fun4472_ip = 1034;
                    continue _fun4472
                }
            case 1031:
                var34 = var38;
            case 1034:
                var35.ellipsizeMode = var34;
                var35.nativeID = var27;
                var35.numberOfLines = var26;
                var35.selectable = var25;
                var35.selectionColor = var24;
                var35.style = var23;
                var35.children = var5;
                var34 = {};
                var34 = var36.bind(var37)(var34, var21, var35);
                var19.textProps = var34;
                var34 = {};
                var34.onLongPress = var17;
                var34.onPress = var16;
                var34.onPressIn = var15;
                var34.onPressOut = var14;
                var34.onResponderGrant = var13;
                var34.onResponderMove = var12;
                var34.onResponderRelease = var11;
                var34.onResponderTerminate = var10;
                var34.onResponderTerminationRequest = var9;
                var34.onStartShouldSetResponder = var8;
                var34.pressRetentionOffset = var7;
                var34.suppressHighlighting = var6;
                var19.textPressabilityProps = var34;
                var2 = var31.bind(var4)(var20, var19);
            case 1153:
                if (!(var32 != var5)) {
                    _fun4472_ip = 1308;
                    continue _fun4472
                }
            case 1160:
                var19 = global;
                var20 = var19.Array;
                var19 = var20.isArray;
                var19 = var19.bind(var20)(var5);
                if (!var19) {
                    _fun4472_ip = 1193;
                    continue _fun4472
                }
            case 1181:
                var20 = var5.length;
                var19 = 3;
                if (!(!(var20 <= var19))) {
                    _fun4472_ip = 1206;
                    continue _fun4472
                }
            case 1193:
                var20 = 'object';
                var19 = typeof var5;
                if (!(var20 !== var19)) {
                    _fun4472_ip = 1267;
                    continue _fun4472
                }
            case 1204:
                return var2;
            case 1206:
                var3 = false;
                var31 = var5;
                var20 = var31[Symbol.iterator];
                var31 = var20().next;
                var19 = 'object';
            case 1218:
                var34 = var31().value;
                var35 = var20;
                if (!(var35 !== var4)) {
                    _fun4472_ip = 1262;
                    continue _fun4472
                }
            case 1229: // try_start_0
                var33 = var34;
                if (!(var32 != var34)) {
                    _fun4472_ip = 1246;
                    continue _fun4472
                }
            case 1236:
                var34 = var33;
                var34 = typeof var34;
                if (!(var19 !== var34)) {
                    _fun4472_ip = 1248;
                    continue _fun4472
                }
            case 1246: // try_end0
                _fun4472_ip = 1218;
                continue _fun4472;
            case 1248: // try_start_1
                var3 = true;
            case 1250: // try_end1
                var20.return();
                _fun4472_ip = 1262;
                continue _fun4472;
            case 1255: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 19);
                var20.return();
                throw var19;
            case 1262:
                if (var3) {
                    _fun4472_ip = 1267;
                    continue _fun4472
                }
            case 1265:
                return var2;
            case 1267:
                var20 = _closure1_slot9;
                var19 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var30];
                var19 = var19.bind(var4)(var3);
                var3 = {};
                var30 = true;
                var3.value = var30;
                var3.children = var2;
                var3 = var20.bind(var4)(var19, var3);
                return var3;
            case 1308:
                return var2;
            case 1310:
                var3 = _closure1_slot9;
                if (var0) {
                    _fun4472_ip = 1423;
                    continue _fun4472
                }
            case 1317:
                var2 = _closure1_slot0;
                var19 = _closure1_slot2;
                var0 = 7;
                var0 = var19[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.NativeVirtualText;
                var0 = global;
                var30 = var0.Object;
                var20 = var30.assign;
                var19 = {};
                var19.accessibilityLabel = var29;
                var19.accessibilityState = var28;
                var19.nativeID = var27;
                var19.numberOfLines = var26;
                var19.ref = var18;
                var19.selectable = var25;
                var19.selectionColor = var24;
                var19.style = var23;
                var19.disabled = var22;
                var19.children = var5;
                var0 = {};
                var0 = var20.bind(var30)(var0, var21, var19);
                var0 = var3.bind(var4)(var2, var0);
                _fun4472_ip = 1575;
                continue _fun4472;
            case 1423:
                var2 = _closure1_slot10;
                var1 = {};
                var1.ref = var18;
                var18 = global;
                var20 = var18.Object;
                var19 = var20.assign;
                var18 = {};
                var18.accessibilityLabel = var29;
                var18.accessibilityState = var28;
                var18.nativeID = var27;
                var18.numberOfLines = var26;
                var18.selectable = var25;
                var18.selectionColor = var24;
                var18.style = var23;
                var18.disabled = var22;
                var18.children = var5;
                var5 = {};
                var5 = var19.bind(var20)(var5, var21, var18);
                var1.textProps = var5;
                var5 = {};
                var5.onLongPress = var17;
                var5.onPress = var16;
                var5.onPressIn = var15;
                var5.onPressOut = var14;
                var5.onResponderGrant = var13;
                var5.onResponderMove = var12;
                var5.onResponderRelease = var11;
                var5.onResponderTerminate = var10;
                var5.onResponderTerminationRequest = var9;
                var5.onStartShouldSetResponder = var8;
                var5.pressRetentionOffset = var7;
                var5.suppressHighlighting = var6;
                var1.textPressabilityProps = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1575:
                return var0;
        }
    };
    var3 = 'Text';
    var1.displayName = var3;
    var3 = function(arg0) { // Original name: NativePressableVirtualText, environment: var4
        var2 = arg0;
        var0 = var2.ref;
        var8 = var2.textProps;
        var4 = _closure1_slot14;
        var2 = var2.textPressabilityProps;
        var3 = undefined;
        var5 = var4.bind(var3)(var2);
        var4 = _closure1_slot4;
        var2 = 2;
        var4 = var4.bind(var3)(var5, var2);
        var2 = 0;
        var9 = var4[var2];
        var2 = 1;
        var11 = var4[var2];
        var2 = _closure1_slot9;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 7;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.NativeVirtualText;
        var4 = global;
        var6 = var4.Object;
        var5 = var6.assign;
        var4 = {};
        var4.isHighlighted = var9;
        var9 = true;
        var4.isPressable = var9;
        var4.ref = var0;
        var13 = {};
        var14 = var6;
        var12 = var8;
        var10 = var4;
        var0 = var14[var5](var13, var12, var11, var10, var9);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var3;
    var3 = function(arg0) { // Original name: NativePressableText, environment: var4
        var2 = arg0;
        var0 = var2.ref;
        var8 = var2.textProps;
        var4 = _closure1_slot14;
        var2 = var2.textPressabilityProps;
        var3 = undefined;
        var5 = var4.bind(var3)(var2);
        var4 = _closure1_slot4;
        var2 = 2;
        var4 = var4.bind(var3)(var5, var2);
        var2 = 0;
        var9 = var4[var2];
        var2 = 1;
        var11 = var4[var2];
        var2 = _closure1_slot9;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 7;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var1 = var1.NativeText;
        var4 = global;
        var6 = var4.Object;
        var5 = var6.assign;
        var4 = {};
        var4.isHighlighted = var9;
        var9 = true;
        var4.isPressable = var9;
        var4.ref = var0;
        var13 = {};
        var14 = var6;
        var12 = var8;
        var10 = var4;
        var0 = var14[var5](var13, var12, var11, var10, var9);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var3;
    var3 = {
        'auto': true,
        'text': true,
        'none': false,
        'contain': true,
        'all': true
    };
    var _closure1_slot12 = var3;
    var3 = {
        'auto': 'auto',
        'top': 'top',
        'bottom': 'bottom',
        'middle': 'center'
    };
    var _closure1_slot13 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 33, 38, 147, 114, 290, 292]);