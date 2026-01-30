// modules/app_launcher/native/base_components/ExpandableList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot6 = var4;
    var4 = var1.jsxs;
    var _closure1_slot7 = var4;
    var1 = var1.Fragment;
    var _closure1_slot8 = var1;
    var1 = 4;
    var4 = var6[var1];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'hidden';
    var9.overflow = var10;
    var4.animatedListContainer = var9;
    var9 = {};
    var10 = 'center';
    var9.alignItems = var10;
    var4.expandCTALabelContainer = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function ExpandableListTsx1(){const{expanded,collapsedListHeight,remainingListHeight}=this.__closure;if(expanded&&collapsedListHeight.get()!==0&&remainingListHeight.get()!==0){return collapsedListHeight.get()+remainingListHeight.get();}return collapsedListHeight.get();}';
    var4.code = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function ExpandableListTsx2(){const{collapsedListHeight,withTiming,containerHeight,timingStandard}=this.__closure;if(collapsedListHeight.get()!==0){return{height:withTiming(containerHeight.get(),timingStandard)};}else{return{};}}';
    var4.code = var7;
    var _closure1_slot11 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/base_components/ExpandableList.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: ExpandableList, environment: var3
        _fun108402: for (var _fun108402_ip = 0;;) switch (_fun108402_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.items;
                var _closure2_slot0 = var17;
                var8 = var1.onExpand;
                var _closure2_slot1 = var8;
                var0 = var1.onExpandCTAPress;
                var _closure2_slot2 = var0;
                var0 = var1.expandedOverride;
                var _closure2_slot3 = var0;
                var5 = var1.showsExpandCTAOverride;
                var1 = var1.disableExpanding;
                var _closure2_slot4 = var1;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var1 = _closure1_slot9;
                var13 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var1 = null;
                var2 = var1 != var0;
                if (!var2) {
                    _fun108402_ip = 127;
                    continue _fun108402
                }
            case 124:
                var2 = var0;
            case 127:
                var6 = var4.bind(var6)(var2);
                var4 = _closure1_slot3;
                var2 = 2;
                var4 = var4.bind(var3)(var6, var2);
                var9 = 0;
                var15 = var4[var9];
                _closure2_slot5 = var15;
                var2 = 1;
                var2 = var4[var2];
                _closure2_slot6 = var2;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var4 = var2.bind(var3)(var15);
                var2 = var15;
                if (!(var1 != var4)) {
                    _fun108402_ip = 201;
                    continue _fun108402
                }
            case 198:
                var2 = var4;
            case 201:
                _closure2_slot7 = var2;
                var6 = _closure1_slot4;
                var7 = var6.useEffect;
                var4 = new Array(3);
                var4[0] = var15;
                var4[1] = var8;
                var4[2] = var2;
                var2 = function() { // Environment: var11
                    _fun108403: for (var _fun108403_ip = 0;;) switch (_fun108403_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot5;
                            var1 = var2 !== var1;
                            if (!var1) {
                                _fun108403_ip = 22;
                                continue _fun108403
                            }
                        case 18:
                            var1 = _closure2_slot5;
                        case 22:
                            if (!var1) {
                                _fun108403_ip = 45;
                                continue _fun108403
                            }
                        case 25:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun108403_ip = 45;
                                continue _fun108403
                            }
                        case 35:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var6)(var2, var4);
                var4 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var11
                    _fun108404: for (var _fun108404_ip = 0;;) switch (_fun108404_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun108404_ip = 26;
                                continue _fun108404
                            }
                        case 13:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot3;
                            var1 = var2.bind(var0)(var1);
                        case 26:
                            return var0;
                    }
                };
                var0 = var4.bind(var6)(var0, var2);
                var0 = global;
                var6 = var0.Math;
                var4 = var6.min;
                var2 = var17.length;
                var0 = 4;
                var0 = var4.bind(var6)(var0, var2);
                _closure2_slot8 = var0;
                if (!(var1 == var5)) {
                    _fun108402_ip = 313;
                    continue _fun108402
                }
            case 304:
                var1 = var17.length;
                var5 = var1 > var0;
            case 313:
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var1 = var7[var4];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useSharedValue;
                var12 = var1.bind(var2)(var9);
                _closure2_slot9 = var12;
                var1 = var7[var4];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useSharedValue;
                var14 = var1.bind(var2)(var9);
                _closure2_slot10 = var14;
                var1 = var7[var4];
                var6 = var10.bind(var3)(var1);
                var2 = var6.useDerivedValue;
                var1 = function() { // Original name: C, environment: var11
                    _fun108405: for (var _fun108405_ip = 0;;) switch (_fun108405_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            if (!var0) {
                                _fun108405_ip = 46;
                                continue _fun108405
                            }
                        case 10:
                            var2 = _closure2_slot9;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var2 = 0;
                            if (!(var2 !== var0)) {
                                _fun108405_ip = 46;
                                continue _fun108405
                            }
                        case 29:
                            var3 = _closure2_slot10;
                            var0 = var3.get;
                            var0 = var0.bind(var3)();
                            if (!(var2 === var0)) {
                                _fun108405_ip = 61;
                                continue _fun108405
                            }
                        case 46:
                            var2 = _closure2_slot9;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            _fun108405_ip = 91;
                            continue _fun108405;
                        case 61:
                            var3 = _closure2_slot9;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var3 = _closure2_slot10;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            var0 = var2 + var1;
                        case 91:
                            return var0;
                    }
                };
                var8 = {};
                var8.expanded = var15;
                var8.collapsedListHeight = var12;
                var8.remainingListHeight = var14;
                var1.__closure = var8;
                var8 = 17033418452229.0;
                var1.__workletHash = var8;
                var8 = _closure1_slot10;
                var1.__initData = var8;
                var8 = var2.bind(var6)(var1);
                _closure2_slot11 = var8;
                var6 = _closure1_slot4;
                var14 = var6.useMemo;
                var2 = new Array(2);
                var2[0] = var17;
                var2[1] = var0;
                var1 = function() { // Environment: var11
                    var3 = _closure2_slot0;
                    var2 = var3.slice;
                    var1 = _closure2_slot8;
                    var0 = 0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var14 = var14.bind(var6)(var1, var2);
                var2 = var6.useMemo;
                var1 = new Array(2);
                var1[0] = var17;
                var1[1] = var0;
                var0 = function() { // Environment: var11
                    var3 = _closure2_slot0;
                    var2 = var3.slice;
                    var1 = _closure2_slot8;
                    var0 = var3.length;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var18 = var2.bind(var6)(var0, var1);
                var0 = var7[var4];
                var2 = var10.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: A, environment: var11
                    _fun108408: for (var _fun108408_ip = 0;;) switch (_fun108408_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = 0;
                            if (!(var0 === var1)) {
                                _fun108408_ip = 26;
                                continue _fun108408
                            }
                        case 22:
                            var0 = {};
                            _fun108408_ip = 102;
                            continue _fun108408;
                        case 26:
                            var1 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 7;
                            var3 = var8[var3];
                            var6 = undefined;
                            var5 = var7.bind(var6)(var3);
                            var4 = var5.withTiming;
                            var3 = _closure2_slot11;
                            var2 = var3.get;
                            var3 = var2.bind(var3)();
                            var2 = 8;
                            var2 = var8[var2];
                            var2 = var7.bind(var6)(var2);
                            var2 = var2.timingStandard;
                            var2 = var4.bind(var5)(var3, var2);
                            var1.height = var2;
                            var0 = var1;
                        case 102:
                            return var0;
                    }
                };
                var6 = {};
                var6.collapsedListHeight = var12;
                var12 = 7;
                var12 = var7[var12];
                var12 = var10.bind(var3)(var12);
                var12 = var12.withTiming;
                var6.withTiming = var12;
                var6.containerHeight = var8;
                var8 = 8;
                var8 = var7[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.timingStandard;
                var6.timingStandard = var8;
                var0.__closure = var6;
                var6 = 2086836441465.0;
                var0.__workletHash = var6;
                var6 = _closure1_slot11;
                var0.__initData = var6;
                var8 = var1.bind(var2)(var0);
                var17 = function(arg0) { // Original name: renderItems, environment: var11
                    _fun108409: for (var _fun108409_ip = 0;;) switch (_fun108409_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.items;
                            var _closure3_slot0 = var2;
                            var1 = var1.hasListEnd;
                            var3 = undefined;
                            if (!(var1 === var3)) {
                                _fun108409_ip = 29;
                                continue _fun108409
                            }
                        case 27:
                            var1 = false;
                        case 29:
                            var _closure3_slot1 = var1;
                            var1 = var2.map;
                            var0 = function(arg0, arg1) { // Environment: var0
                                _fun108410: for (var _fun108410_ip = 0;;) switch (_fun108410_ip) {
                                    case 0:
                                        var2 = {};
                                        var0 = _closure3_slot1;
                                        var3 = !var0;
                                        var0 = !var3;
                                        if (var3) {
                                            _fun108410_ip = 41;
                                            continue _fun108410
                                        }
                                    case 18:
                                        var1 = _closure3_slot0;
                                        var3 = var1.length;
                                        var1 = 1;
                                        var3 = var3 - var1;
                                        var1 = arg1;
                                        var0 = var1 === var3;
                                    case 41:
                                        var2.isLastRow = var0;
                                        var1 = arg0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)(var2);
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = _closure1_slot7;
                var1 = _closure1_slot8;
                var0 = {};
                var6 = _closure1_slot1;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.View;
                var4 = {};
                var10 = var13.animatedListContainer;
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var8;
                var4.style = var7;
                var10 = _closure1_slot6;
                var8 = _closure1_slot5;
                var7 = {};
                var12 = function(arg0) { // Original name: onLayout, environment: var11
                    var2 = _closure2_slot9;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var7.onLayout = var12;
                var12 = {};
                var12.items = var14;
                var14 = !var5;
                if (!var14) {
                    _fun108402_ip = 730;
                    continue _fun108402
                }
            case 727:
                var14 = !var15;
            case 730:
                var12.hasListEnd = var14;
                var12 = var17.bind(var3)(var12);
                var7.children = var12;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = var18.length;
                var8 = var8 > var9;
                if (!var8) {
                    _fun108402_ip = 846;
                    continue _fun108402
                }
            case 770:
                var12 = _closure1_slot6;
                var10 = _closure1_slot5;
                var9 = {};
                var14 = function(arg0) { // Original name: onLayout, environment: var11
                    var2 = _closure2_slot10;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var9.onLayout = var14;
                var14 = !var15;
                var9.accessibilityElementsHidden = var14;
                var14 = 'no-hide-descendants';
                if (!var15) {
                    _fun108402_ip = 811;
                    continue _fun108402
                }
            case 809:
                var14 = undefined;
            case 811:
                var9.importantForAccessibility = var14;
                var14 = {};
                var14.items = var18;
                var18 = !var5;
                var14.hasListEnd = var18;
                var14 = var17.bind(var3)(var14);
                var9.children = var14;
                var8 = var12.bind(var3)(var10, var9);
            case 846:
                var7[1] = var8;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun108402_ip = 1105;
                    continue _fun108402
                }
            case 874:
                var8 = _closure1_slot6;
                var7 = _closure1_slot5;
                var6 = {};
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 9;
                var9 = var17[var9];
                var9 = var14.bind(var3)(var9);
                var10 = var9.TableRow;
                var9 = {};
                var12 = {};
                var13 = var13.expandCTALabelContainer;
                var12.style = var13;
                var13 = 10;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'color': 'text-brand',
                    'variant': 'text-md/semibold'
                };
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 11;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                if (var15) {
                    _fun108402_ip = 1018;
                    continue _fun108402
                }
            case 983:
                var21 = var18.format;
                var15 = var20[var16];
                var15 = var19.bind(var3)(var15);
                var15 = var15.t;
                var17 = var15.gVw57p;
                var15 = {};
                var15 = var21.bind(var18)(var17, var15);
                _fun108402_ip = 1048;
                continue _fun108402;
            case 1018:
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.nPGLFQ;
                var15 = var17.bind(var18)(var16);
            case 1048:
                var13.children = var15;
                var13 = var8.bind(var3)(var14, var13);
                var12.children = var13;
                var12 = var8.bind(var3)(var7, var12);
                var9.label = var12;
                var11 = function() { // Original name: onPress, environment: var11
                    _fun108413: for (var _fun108413_ip = 0;;) switch (_fun108413_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = true;
                            var3 = var0 !== var2;
                            if (!var3) {
                                _fun108413_ip = 23;
                                continue _fun108413
                            }
                        case 16:
                            var0 = _closure2_slot5;
                            var3 = !var0;
                        case 23:
                            var2 = _closure2_slot6;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var4 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun108413_ip = 60;
                                continue _fun108413
                            }
                        case 44:
                            var2 = _closure2_slot2;
                            var1 = {};
                            var1.expanded = var3;
                            var1 = var2.bind(var0)(var1);
                        case 60:
                            return var0;
                    }
                };
                var9.onPress = var11;
                var11 = true;
                var9.end = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1105:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.COLLAPSED_LIST_ITEM_MAX = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 5267, 3679, 4056, 4843, 4860, 3901, 1234, 2]);