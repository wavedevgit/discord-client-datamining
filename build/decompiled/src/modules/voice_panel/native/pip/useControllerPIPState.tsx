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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun111124: for (var _fun111124_ip = 0;;) switch (_fun111124_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun111124_ip = 45;
                    continue _fun111124
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun111124_ip = 54;
                    continue _fun111124
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun111124_ip = 344;
                    continue _fun111124
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun111124_ip = 322;
                    continue _fun111124
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun111124_ip = 282;
                    continue _fun111124
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun111124_ip = 269;
                    continue _fun111124
                }
            case 109:
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
                    _fun111124_ip = 162;
                    continue _fun111124
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun111124_ip = 178;
                    continue _fun111124
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun111124_ip = 248;
                    continue _fun111124
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun111124_ip = 248;
                    continue _fun111124
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun111124_ip = 233;
                    continue _fun111124
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun111124_ip = 246;
                    continue _fun111124
                }
            case 233:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun111124_ip = 264;
                continue _fun111124;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun111124_ip = 282;
                continue _fun111124;
            case 269:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun111124_ip = 322;
                    continue _fun111124
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun111124_ip = 329;
                    continue _fun111124
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun111125: for (var _fun111125_ip = 0;;) switch (_fun111125_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun111125_ip = 56;
                                continue _fun111125
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
                            _fun111125_ip = 67;
                            continue _fun111125;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun111126: for (var _fun111126_ip = 0;;) switch (_fun111126_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun111126_ip = 23;
                    continue _fun111126
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun111126_ip = 33;
                    continue _fun111126
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
                    _fun111126_ip = 70;
                    continue _fun111126
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun111126_ip = 55;
                    continue _fun111126
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
    var1 = function(arg0) { // Original name: useControllerPIPState, environment: var1
        _fun111127: for (var _fun111127_ip = 0;;) switch (_fun111127_ip) {
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
                var0 = function(arg0) { // Original name: useShowSecondaryPIP, environment: var6
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
                        _fun111130: for (var _fun111130_ip = 0;;) switch (_fun111130_ip) {
                            case 0:
                                var4 = _closure1_slot8;
                                var1 = var4.getChannel;
                                var0 = _closure3_slot0;
                                var4 = var1.bind(var4)(var0);
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun111130_ip = 54;
                                    continue _fun111130
                                }
                            case 30:
                                var1 = var4.isVocal;
                                var1 = var1.bind(var4)();
                                if (!var1) {
                                    _fun111130_ip = 54;
                                    continue _fun111130
                                }
                            case 43:
                                var1 = _closure3_slot2;
                                if (var1) {
                                    _fun111130_ip = 54;
                                    continue _fun111130
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
                                    _fun111130_ip = 138;
                                    continue _fun111130
                                }
                            case 82:
                                var1 = _closure1_slot11;
                                var1 = var1.PIP;
                                if (!(var4 === var1)) {
                                    _fun111130_ip = 138;
                                    continue _fun111130
                                }
                            case 96:
                                var4 = _closure3_slot1;
                                var1 = _closure1_slot10;
                                var1 = var1.PIP;
                                if (!(var4 !== var1)) {
                                    _fun111130_ip = 330;
                                    continue _fun111130
                                }
                            case 117:
                                var4 = _closure3_slot1;
                                var1 = _closure1_slot10;
                                var1 = var1.PANEL;
                                if (!(var4 !== var1)) {
                                    _fun111130_ip = 330;
                                    continue _fun111130
                                }
                            case 138:
                                var4 = _closure1_slot5;
                                var1 = var4.getConnectedActivityLocation;
                                var5 = var1.bind(var4)();
                                if (!(var0 != var5)) {
                                    _fun111130_ip = 326;
                                    continue _fun111130
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
                                    _fun111130_ip = 258;
                                    continue _fun111130
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
                                    _fun111130_ip = 269;
                                    continue _fun111130
                                }
                            case 261:
                                var1 = _closure3_slot0;
                                var0 = var4 !== var1;
                            case 269:
                                var1 = _closure1_slot11;
                                var1 = var1.PIP;
                                var1 = var5 === var1;
                                if (!var1) {
                                    _fun111130_ip = 318;
                                    continue _fun111130
                                }
                            case 286:
                                var5 = _closure3_slot1;
                                var2 = _closure1_slot10;
                                var2 = var2.PIP;
                                var2 = var5 === var2;
                                if (var2) {
                                    _fun111130_ip = 315;
                                    continue _fun111130
                                }
                            case 307:
                                var3 = _closure3_slot0;
                                var2 = var4 !== var3;
                            case 315:
                                var1 = var2;
                            case 318:
                                if (!var0) {
                                    _fun111130_ip = 324;
                                    continue _fun111130
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
                    _fun111127_ip = 424;
                    continue _fun111127
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
                var0 = function(arg0, arg1) { // Original name: useCachedPipState, environment: var6
                    _fun111136: for (var _fun111136_ip = 0;;) switch (_fun111136_ip) {
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
                                _fun111137: for (var _fun111137_ip = 0;;) switch (_fun111137_ip) {
                                    case 0:
                                        var1 = _closure3_slot2;
                                        if (!var1) {
                                            _fun111137_ip = 24;
                                            continue _fun111137
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
                                _fun111136_ip = 94;
                                continue _fun111136
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
                        _fun111139: for (var _fun111139_ip = 0;;) switch (_fun111139_ip) {
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
                                    _fun111139_ip = 101;
                                    continue _fun111139
                                }
                            case 52:
                                var9 = var6.value;
                                var11 = _closure1_slot6;
                                var10 = var11.getParticipant;
                                var4 = _closure2_slot0;
                                var4 = var10.bind(var11)(var4, var9);
                                var2 = var9;
                                if (!(var5 == var4)) {
                                    _fun111139_ip = 101;
                                    continue _fun111139
                                }
                            case 84:
                                var9 = var7.bind(var0)();
                                var4 = var9.done;
                                var6 = var9;
                                var2 = undefined;
                                if (!var4) {
                                    _fun111139_ip = 52;
                                    continue _fun111139
                                }
                            case 101:
                                var _closure4_slot0 = var2;
                                var4 = _closure2_slot5;
                                var4 = var4.current;
                                var4 = var2 !== var4;
                                if (!var4) {
                                    _fun111139_ip = 125;
                                    continue _fun111139
                                }
                            case 121:
                                var4 = var5 != var2;
                            case 125:
                                if (!var4) {
                                    _fun111139_ip = 168;
                                    continue _fun111139
                                }
                            case 128:
                                var4 = _closure2_slot5;
                                var4 = var4.current;
                                if (!(var5 != var4)) {
                                    _fun111139_ip = 159;
                                    continue _fun111139
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
                                _fun111139_ip = 168;
                                continue _fun111139;
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
                    var2 = function() { // Original name: updateParticipantDimensions, environment: var0
                        var2 = _closure2_slot7;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            _fun111144: for (var _fun111144_ip = 0;;) switch (_fun111144_ip) {
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
                                        _fun111144_ip = 68;
                                        continue _fun111144
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1371, 3902, 7876, 1372, 3903, 11816, 7874, 14223, 566, 3040, 6777, 5257, 14254, 13784, 14255, 14256, 14258, 2]);