// modules/saved_messages/native/ForLaterScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun76108: for (var _fun76108_ip = 0;;) switch (_fun76108_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.handleScroll;
                var2 = _closure1_slot9;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 9;
                var2 = var11[var2];
                var2 = var7.bind(var4)(var2);
                var8 = var2.bind(var4)();
                var10 = _closure1_slot0;
                var2 = 10;
                var2 = var11[var2];
                var12 = var10.bind(var4)(var2);
                var9 = var12.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getOverdueMessageReminderCount;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var9.bind(var12)(var3, var2);
                var3 = 11;
                var3 = var11[var3];
                var9 = var7.bind(var4)(var3);
                var7 = {};
                var3 = 12;
                var12 = var11[var3];
                var12 = var10.bind(var4)(var12);
                var12 = var12.ImpressionTypes;
                var12 = var12.MODAL;
                var7.type = var12;
                var3 = var11[var3];
                var3 = var10.bind(var4)(var3);
                var3 = var3.ImpressionNames;
                var3 = var3.FOR_LATER_LIST_VIEWED;
                var7.name = var3;
                var3 = {};
                var10 = var8.length;
                var3.total_count = var10;
                var3.overdue_count = var2;
                var7.properties = var3;
                var10 = var8.length;
                var3 = new Array(2);
                var3[0] = var10;
                var3[1] = var2;
                var2 = {};
                var2 = var9.bind(var4)(var7, var2, var3);
                var7 = _closure1_slot4;
                var3 = var7.useState;
                var2 = global;
                var2 = var2.Date;
                var9 = var2.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var2
                    }
                });
                var16 = var9;
                var2 = new var16[var2](var15);
                var2 = var2 instanceof Object ? var2 : var9;
                var7 = var3.bind(var7)(var2);
                var3 = _closure1_slot3;
                var2 = 2;
                var7 = var3.bind(var4)(var7, var2);
                var2 = 0;
                var10 = var7[var2];
                var _closure2_slot0 = var10;
                var3 = 1;
                var3 = var7[var3];
                var _closure2_slot1 = var3;
                var11 = _closure1_slot4;
                var9 = var11.useEffect;
                var7 = function() { // Environment: var0
                    var1 = global;
                    var4 = var1.setInterval;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.Millis;
                    var2 = var1.MINUTE;
                    var1 = function() { // Environment: var0
                        var2 = _closure2_slot1;
                        var0 = global;
                        var0 = var0.Date;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var4 = var1;
                        var0 = new var4[var0](var3);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var4.bind(var3)(var1, var2);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearInterval;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = new Array(0);
                var3 = var9.bind(var11)(var7, var3);
                var9 = _closure1_slot4;
                var7 = var9.useCallback;
                var3 = new Array(1);
                var3[0] = var10;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var4 = var0.item;
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.savedMessageKey = var4;
                    var4 = _closure2_slot0;
                    var0.throttledNow = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var7 = var7.bind(var9)(var0, var3);
                var0 = var8.length;
                if (!(var2 !== var0)) {
                    _fun76108_ip = 436;
                    continue _fun76108
                }
            case 354:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 16;
                var0 = var9[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.FlashList;
                var0 = {};
                var0.data = var8;
                var0.renderItem = var7;
                var6 = var6.cardContainer;
                var0.contentContainerStyle = var6;
                var6 = _closure1_slot11;
                var0.keyExtractor = var6;
                var0.onScroll = var5;
                var5 = 130;
                var0.estimatedItemSize = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun76108_ip = 474;
                continue _fun76108;
            case 436:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 15;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ForLaterEmptyState;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 474:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var11.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var12 = 1;
    var3 = var5[var12];
    var1 = arg3;
    var7 = var1.bind(var0)(var3);
    var _closure1_slot4 = var7;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot7 = var3;
    var1 = var1.jsxs;
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var5[var1];
    var8 = var4.bind(var0)(var1);
    var3 = var8.createStyles;
    var1 = {};
    var9 = {};
    var10 = 6;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var13;
    var9.flexGrow = var12;
    var1.container = var9;
    var9 = {
        'height': 1,
        'width': '100%'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.backgroundColor = var10;
    var1.headerBorder = var9;
    var9 = {
        'paddingHorizontal': 16,
        'paddingVertical': 8
    };
    var1.cardContainer = var9;
    var1 = var3.bind(var8)(var1);
    var _closure1_slot9 = var1;
    var1 = {};
    var3 = 'function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}';
    var1.code = var3;
    var _closure1_slot10 = var1;
    var3 = var7.memo;
    var1 = function(arg0) { // Environment: var6
        _fun76114: for (var _fun76114_ip = 0;;) switch (_fun76114_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                if (!(var1 != var2)) {
                    _fun76114_ip = 280;
                    continue _fun76114
                }
            case 14:
                var4 = undefined;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot9;
                var10 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 7;
                var2 = var12[var5];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useSharedValue;
                var2 = 0;
                var8 = var7.bind(var8)(var2);
                _closure2_slot0 = var8;
                var11 = _closure1_slot4;
                var9 = var11.useCallback;
                var7 = new Array(1);
                var7[0] = var8;
                var2 = function(arg0) { // Environment: var0
                    _fun76115: for (var _fun76115_ip = 0;;) switch (_fun76115_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = var3.set;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 8;
                            var1 = var0[var6];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var1);
                            var4 = var5.withSpring;
                            var1 = arg0;
                            var1 = var1.nativeEvent;
                            var1 = var1.contentOffset;
                            var1 = var1.y;
                            var6 = var1 > var6;
                            var1 = 0;
                            if (!var6) {
                                _fun76115_ip = 74;
                                continue _fun76115
                            }
                        case 71:
                            var1 = 1;
                        case 74:
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var9 = var9.bind(var11)(var2, var7);
                var2 = var12[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var7 = {};
                var7.borderOpacity = var8;
                var0.__closure = var7;
                var7 = 16693192032676.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot10;
                var0.__initData = var7;
                var11 = var2.bind(var3)(var0);
                var3 = _closure1_slot8;
                var2 = _closure1_slot5;
                var0 = {};
                var7 = var10.container;
                var0.style = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var5 = var12[var5];
                var5 = var7.bind(var4)(var5);
                var7 = var5.View;
                var5 = {};
                var12 = var10.headerBorder;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var5.style = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot12;
                var6 = {};
                var6.handleScroll = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 280:
                var13 = "Cannot destructure 'undefined' or 'null'.";
                var14 = var1;
                var0 = throwTypeError(var14, var13);
                var0 = undefined;
                throw var0;
        }
    };
    var1 = var3.bind(var7)(var1);
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.messageId;
        return var0;
    };
    var _closure1_slot11 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/native/ForLaterScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9642, 33, 1297, 671, 3720, 4081, 9649, 566, 5214, 481, 667, 9651, 9663, 5753, 2]);