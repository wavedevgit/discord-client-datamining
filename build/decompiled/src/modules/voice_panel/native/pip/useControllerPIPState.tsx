// modules/voice_panel/native/pip/useControllerPIPState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun110743: for (var _fun110743_ip = 0;;) switch (_fun110743_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun110743_ip = 46;
                    continue _fun110743
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun110743_ip = 55;
                    continue _fun110743
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun110743_ip = 345;
                    continue _fun110743
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun110743_ip = 323;
                    continue _fun110743
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun110743_ip = 283;
                    continue _fun110743
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun110743_ip = 270;
                    continue _fun110743
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun110743_ip = 163;
                    continue _fun110743
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun110743_ip = 179;
                    continue _fun110743
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun110743_ip = 249;
                    continue _fun110743
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun110743_ip = 249;
                    continue _fun110743
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun110743_ip = 234;
                    continue _fun110743
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun110743_ip = 247;
                    continue _fun110743
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun110743_ip = 265;
                continue _fun110743;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun110743_ip = 283;
                continue _fun110743;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun110743_ip = 323;
                    continue _fun110743
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun110743_ip = 330;
                    continue _fun110743
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun110744: for (var _fun110744_ip = 0;;) switch (_fun110744_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun110744_ip = 56;
                                continue _fun110744
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun110744_ip = 67;
                            continue _fun110744;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun110745: for (var _fun110745_ip = 0;;) switch (_fun110745_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun110745_ip = 23;
                    continue _fun110745
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun110745_ip = 33;
                    continue _fun110745
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun110745_ip = 70;
                    continue _fun110745
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun110745_ip = 55;
                    continue _fun110745
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelModes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/pip/useControllerPIPState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun110746: for (var _fun110746_ip = 0;;) switch (_fun110746_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var _closure2_slot0 = var5;
                var16 = var0.connected;
                var4 = var0.focusedId;
                var _closure2_slot1 = var4;
                var3 = var0.layoutManager;
                var _closure2_slot2 = var3;
                var15 = var0.mode;
                var21 = _closure1_slot4;
                var7 = var21.useRef;
                var0 = {
                    'id': null,
                    'mode': null,
                    'width': 0,
                    'height': 0,
                    'containerHeight': 0,
                    'showSecondaryPIP': false
                };
                var2 = undefined;
                var0.id = var2;
                var0.mode = var2;
                var11 = 0;
                var10 = var7.bind(var21)(var0);
                var0 = var21.useState;
                var0 = var0.bind(var21)(var2);
                var19 = _closure1_slot3;
                var18 = 2;
                var0 = var19.bind(var2)(var0, var18);
                var12 = var0[var11];
                var _closure2_slot3 = var12;
                var17 = 1;
                var0 = var0[var17];
                var _closure2_slot4 = var0;
                var0 = var21.useRef;
                var0 = var0.bind(var21)(var12);
                var _closure2_slot5 = var0;
                var7 = var21.useInsertionEffect;
                var0 = function() { // Environment: var6
                    var1 = _closure2_slot5;
                    var0 = _closure2_slot3;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = var7.bind(var21)(var0);
                var7 = {};
                var7.channelId = var5;
                var7.mode = var15;
                var0 = function arg0() {
                    var1 = arg0;
                    var7 = var1.channelId;
                    var _closure3_slot0 = var7;
                    var5 = var1.mode;
                    var _closure3_slot1 = var5;
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var6 = var2.bind(var4)(var7);
                    var _closure3_slot2 = var6;
                    var3 = _closure1_slot0;
                    var2 = 10;
                    var2 = var8[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.useStateFromStores;
                    var8 = _closure1_slot5;
                    var2 = new Array(3);
                    var2[0] = var8;
                    var8 = _closure1_slot7;
                    var2[1] = var8;
                    var1 = _closure1_slot8;
                    var2[2] = var1;
                    var1 = new Array(3);
                    var1[0] = var7;
                    var1[1] = var6;
                    var1[2] = var5;
                    var0 = function() { // Environment: var0
                        _fun110749: for (var _fun110749_ip = 0;;) switch (_fun110749_ip) {
                            case 0:
                                var4 = _closure1_slot8;
                                var1 = var4.getChannel;
                                var0 = _closure3_slot0;
                                var4 = var1.bind(var4)(var0);
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun110749_ip = 54;
                                    continue _fun110749
                                }
                            case 30:
                                var1 = var4.isVocal;
                                var1 = var1.bind(var4)();
                                if (!var1) {
                                    _fun110749_ip = 54;
                                    continue _fun110749
                                }
                            case 43:
                                var1 = _closure3_slot2;
                                if (var1) {
                                    _fun110749_ip = 54;
                                    continue _fun110749
                                }
                            case 50:
                                var1 = false;
                                return var1;
                            case 54:
                                var5 = _closure1_slot7;
                                var1 = var5.getConnectedFrame;
                                var1 = var1.bind(var5)();
                                var4 = var5.getActivityPanelMode;
                                var4 = var4.bind(var5)();
                                if (!(var0 != var1)) {
                                    _fun110749_ip = 138;
                                    continue _fun110749
                                }
                            case 82:
                                var1 = _closure1_slot11;
                                var1 = var1.PIP;
                                if (!(var4 === var1)) {
                                    _fun110749_ip = 138;
                                    continue _fun110749
                                }
                            case 96:
                                var4 = _closure3_slot1;
                                var1 = _closure1_slot10;
                                var1 = var1.PIP;
                                if (!(var4 !== var1)) {
                                    _fun110749_ip = 330;
                                    continue _fun110749
                                }
                            case 117:
                                var4 = _closure3_slot1;
                                var1 = _closure1_slot10;
                                var1 = var1.PANEL;
                                if (!(var4 !== var1)) {
                                    _fun110749_ip = 330;
                                    continue _fun110749
                                }
                            case 138:
                                var4 = _closure1_slot5;
                                var1 = var4.getConnectedActivityLocation;
                                var5 = var1.bind(var4)();
                                if (!(var0 != var5)) {
                                    _fun110749_ip = 326;
                                    continue _fun110749
                                }
                            case 159:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 11;
                                var1 = var6[var1];
                                var8 = undefined;
                                var4 = var4.bind(var8)(var1);
                                var1 = var4.getEmbeddedActivityLocationChannelId;
                                var4 = var1.bind(var4)(var5);
                                var5 = _closure1_slot8;
                                var1 = var5.getChannel;
                                var7 = var1.bind(var5)(var4);
                                var5 = _closure1_slot5;
                                var1 = var5.getActivityPanelMode;
                                var5 = var1.bind(var5)();
                                var0 = var0 != var7;
                                if (!var0) {
                                    _fun110749_ip = 258;
                                    continue _fun110749
                                }
                            case 227:
                                var6 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var1 = 12;
                                var1 = var9[var1];
                                var6 = var6.bind(var8)(var1);
                                var1 = var6.isActivityInTextSupportedForChannel;
                                var0 = var1.bind(var6)(var7);
                            case 258:
                                if (!var0) {
                                    _fun110749_ip = 269;
                                    continue _fun110749
                                }
                            case 261:
                                var1 = _closure3_slot0;
                                var0 = var4 !== var1;
                            case 269:
                                var1 = _closure1_slot11;
                                var1 = var1.PIP;
                                var1 = var5 === var1;
                                if (!var1) {
                                    _fun110749_ip = 318;
                                    continue _fun110749
                                }
                            case 286:
                                var5 = _closure3_slot1;
                                var2 = _closure1_slot10;
                                var2 = var2.PIP;
                                var2 = var5 === var2;
                                if (var2) {
                                    _fun110749_ip = 315;
                                    continue _fun110749
                                }
                            case 307:
                                var3 = _closure3_slot0;
                                var2 = var4 !== var3;
                            case 315:
                                var1 = var2;
                            case 318:
                                if (!var0) {
                                    _fun110749_ip = 324;
                                    continue _fun110749
                                }
                            case 321:
                                var0 = var1;
                            case 324:
                                return var0;
                            case 326:
                                var0 = false;
                                return var0;
                            case 330:
                                var0 = true;
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var7 = var0.bind(var2)(var7);
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 14;
                var0 = var13[var0];
                var0 = var9.bind(var2)(var0);
                var14 = var0.bind(var2)(var5);
                var8 = var21.useState;
                var0 = function() { // Environment: var6
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var0 = var2[var0];
                    var4 = undefined;
                    var3 = var1.bind(var4)(var0);
                    var2 = {};
                    var0 = true;
                    var2.leading = var0;
                    var1 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    var0 = 1000;
                    var0 = var3.bind(var4)(var1, var0, var2);
                    return var0;
                };
                var0 = var8.bind(var21)(var0);
                var0 = var19.bind(var2)(var0, var17);
                var8 = var0[var11];
                var _closure2_slot6 = var8;
                var22 = var21.useLayoutEffect;
                var20 = new Array(1);
                var20[0] = var8;
                var0 = function() { // Environment: var6
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot6;
                        var0 = var1.cancel;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var0 = var22.bind(var21)(var0, var20);
                var20 = var21.useState;
                var0 = function() { // Environment: var6
                    var2 = _closure2_slot2;
                    var1 = var2.getTargetDimensions;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var20.bind(var21)(var0);
                var0 = var19.bind(var2)(var0, var18);
                var11 = var0[var11];
                var0 = var0[var17];
                var _closure2_slot7 = var0;
                var0 = 16;
                var0 = var13[var0];
                var9 = var9.bind(var2)(var0);
                var0 = {};
                var0.connected = var16;
                var0.mode = var15;
                var0.focusedId = var4;
                var0.participantTargetDimensions = var11;
                var0.selfHasVideo = var14;
                var0.showSecondaryPIP = var7;
                var28 = undefined;
                var27 = var5;
                var26 = var3;
                var25 = var4;
                var24 = var12;
                var23 = var0;
                var9 = var28[var9](var27, var26, var25, var24, var23, var22);
                var0 = var9.participant;
                var12 = var9.dimensions;
                var9 = {};
                var26 = var10.current;
                var27 = var9;
                var13 = copyDataProperties(var27, var26);
                var27 = var9;
                var26 = var12;
                var12 = copyDataProperties(var27, var26);
                var12 = null;
                var13 = var12 == var0;
                var12 = undefined;
                if (var13) {
                    _fun110746_ip = 424;
                    continue _fun110746
                }
            case 419:
                var12 = var0.id;
            case 424:
                var0 = 'id';
                var9[var0] = var12;
                var0 = 'showSecondaryPIP';
                var9[var0] = var7;
                var12 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 17;
                var0 = var7[var0];
                var13 = var12.bind(var2)(var0);
                var12 = var13.getPIPMode;
                var0 = {};
                var0.channelId = var5;
                var0.connected = var16;
                var0.manuallyFocusedId = var4;
                var0.mode = var15;
                var0.selfHasVideo = var14;
                var12 = var12.bind(var13)(var0);
                var0 = 'mode';
                var9[var0] = var12;
                var0 = function arg0, arg1() {
                    _fun110755: for (var _fun110755_ip = 0;;) switch (_fun110755_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var _closure3_slot0 = var0;
                            var _closure3_slot1 = var1;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 13;
                            var5 = var5[var2];
                            var2 = undefined;
                            var6 = var6.bind(var2)(var5);
                            var5 = var6.cheapWorkletShallowEqual;
                            var2 = var1.current;
                            var2 = var5.bind(var6)(var0, var2);
                            var2 = !var2;
                            var _closure3_slot2 = var2;
                            var5 = _closure1_slot4;
                            var4 = var5.useEffect;
                            var3 = function() { // Environment: var3
                                _fun110756: for (var _fun110756_ip = 0;;) switch (_fun110756_ip) {
                                    case 0:
                                        var1 = _closure3_slot2;
                                        if (!var1) {
                                            _fun110756_ip = 24;
                                            continue _fun110756
                                        }
                                    case 10:
                                        var1 = _closure3_slot1;
                                        var0 = _closure3_slot0;
                                        var1.current = var0;
                                    case 24:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var5)(var3);
                            if (var2) {
                                _fun110755_ip = 94;
                                continue _fun110755
                            }
                        case 89:
                            var0 = var1.current;
                        case 94:
                            return var0;
                    }
                };
                var0 = var0.bind(var2)(var9, var10);
                var10 = _closure1_slot4;
                var12 = var10.useEffect;
                var9 = new Array(2);
                var9[0] = var5;
                var9[1] = var8;
                var8 = function() { // Environment: var6
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.BatchedStoreListener;
                    var2 = _closure1_slot9;
                    var3 = new Array(2);
                    var3[0] = var2;
                    var1 = _closure1_slot6;
                    var3[1] = var1;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var6 = function() { // Environment: var0
                        _fun110758: for (var _fun110758_ip = 0;;) switch (_fun110758_ip) {
                            case 0:
                                var2 = _closure1_slot12;
                                var1 = _closure1_slot9;
                                var0 = var1.getSpeakers;
                                var1 = var0.bind(var1)();
                                var0 = undefined;
                                var7 = var2.bind(var0)(var1);
                                var2 = var7.bind(var0)();
                                var4 = var2.done;
                                var5 = null;
                                var6 = var2;
                                var2 = undefined;
                                if (var4) {
                                    _fun110758_ip = 101;
                                    continue _fun110758
                                }
                            case 52:
                                var9 = var6.value;
                                var11 = _closure1_slot6;
                                var10 = var11.getParticipant;
                                var4 = _closure2_slot0;
                                var4 = var10.bind(var11)(var4, var9);
                                var2 = var9;
                                if (!(var5 == var4)) {
                                    _fun110758_ip = 101;
                                    continue _fun110758
                                }
                            case 84:
                                var9 = var7.bind(var0)();
                                var4 = var9.done;
                                var6 = var9;
                                var2 = undefined;
                                if (!var4) {
                                    _fun110758_ip = 52;
                                    continue _fun110758
                                }
                            case 101:
                                var _closure4_slot0 = var2;
                                var4 = _closure2_slot5;
                                var4 = var4.current;
                                var4 = var2 !== var4;
                                if (!var4) {
                                    _fun110758_ip = 125;
                                    continue _fun110758
                                }
                            case 121:
                                var4 = var5 != var2;
                            case 125:
                                if (!var4) {
                                    _fun110758_ip = 168;
                                    continue _fun110758
                                }
                            case 128:
                                var4 = _closure2_slot5;
                                var4 = var4.current;
                                if (!(var5 != var4)) {
                                    _fun110758_ip = 159;
                                    continue _fun110758
                                }
                            case 141:
                                var4 = _closure2_slot6;
                                var3 = function() { // Environment: var3
                                    var2 = _closure2_slot4;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var3 = var4.bind(var0)(var3);
                                _fun110758_ip = 168;
                                continue _fun110758;
                            case 159:
                                var1 = _closure2_slot4;
                                var1 = var1.bind(var0)(var2);
                            case 168:
                                return var0;
                        }
                    };
                    var8 = var2;
                    var7 = var3;
                    var1 = new var8[var4](var7, var6, var5);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var3;
                    var2 = var3.attach;
                    var5 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'pipstate-change-listeners-';
                    var1 = var4.bind(var1)(var5);
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.detach;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var8 = var12.bind(var10)(var8, var9);
                var9 = var10.useEffect;
                var8 = new Array(3);
                var8[0] = var4;
                var8[1] = var3;
                var8[2] = var11;
                var6 = function() { // Environment: var6
                    var2 = function() {
                        var2 = _closure2_slot7;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            _fun110763: for (var _fun110763_ip = 0;;) switch (_fun110763_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = _closure2_slot2;
                                    var2 = var3.getTargetDimensions;
                                    var0 = _closure2_slot1;
                                    var0 = var2.bind(var3)(var0);
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 13;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var3 = var4.bind(var2)(var3);
                                    var2 = var3.cheapWorkletShallowEqual;
                                    var2 = var2.bind(var3)(var1, var0);
                                    if (!var2) {
                                        _fun110763_ip = 68;
                                        continue _fun110763
                                    }
                                case 65:
                                    var0 = var1;
                                case 68:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                    var1 = _closure2_slot2;
                    var0 = var1.subscribeFromItem;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var6 = var9.bind(var10)(var6, var8);
                var6 = _closure1_slot1;
                var1 = 18;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.bind(var2)(var5, var3, var4);
                return var0;
        }
    };
    var2.useControllerPIPState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1371, 3948, 7916, 1372, 3949, 11816, 7914, 14221, 566, 3081, 6819, 5302, 14252, 13782, 14253, 14254, 14256, 2]);