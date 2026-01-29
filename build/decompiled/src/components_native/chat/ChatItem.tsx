// components_native/chat/ChatItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun69976: for (var _fun69976_ip = 0;;) switch (_fun69976_ip) {
        case 0:
            var7 = require;
            var4 = metroImportDefault;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var4;
            var _closure1_slot2 = var8;
            var0 = function(arg0) { // Original name: DCDChatItem, environment: var5
                _fun69977: for (var _fun69977_ip = 0;;) switch (_fun69977_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = var2.message;
                        var0 = null;
                        var1 = Object.create(var0);
                        var0 = 0;
                        var1.message = var0;
                        var10 = {};
                        var9 = var2;
                        var8 = var1;
                        var1 = copyDataProperties(var10, var9, var8);
                        var4 = var3.type;
                        var0 = _closure1_slot9;
                        var0 = var0.AUTO_MODERATION_ACTION;
                        if (!(var4 !== var0)) {
                            _fun69977_ip = 216;
                            continue _fun69977
                        }
                    case 56:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 14;
                        var0 = var5[var0];
                        var6 = undefined;
                        var0 = var4.bind(var6)(var0);
                        var0 = var0.MessageTypesSets;
                        var5 = var0.AUTOMOD_INCIDENT_ACTIONS;
                        var4 = var5.has;
                        var0 = var3.type;
                        var0 = var4.bind(var5)(var0);
                        if (var0) {
                            _fun69977_ip = 188;
                            continue _fun69977
                        }
                    case 108:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 15;
                        var0 = var5[var0];
                        var0 = var4.bind(var6)(var0);
                        var0 = var0.bind(var6)(var3);
                        var5 = _closure1_slot12;
                        if (var0) {
                            _fun69977_ip = 164;
                            continue _fun69977
                        }
                    case 140:
                        var3 = _closure1_slot15;
                        var0 = {};
                        var10 = var0;
                        var9 = var1;
                        var4 = copyDataProperties(var10, var9);
                        var0 = var5.bind(var6)(var3, var0);
                        _fun69977_ip = 186;
                        continue _fun69977;
                    case 164:
                        var4 = _closure1_slot16;
                        var3 = {};
                        var10 = var3;
                        var9 = var1;
                        var7 = copyDataProperties(var10, var9);
                        var0 = var5.bind(var6)(var4, var3);
                    case 186:
                        _fun69977_ip = 214;
                        continue _fun69977;
                    case 188:
                        var5 = _closure1_slot12;
                        var4 = _closure1_slot15;
                        var3 = {};
                        var10 = var3;
                        var9 = var1;
                        var7 = copyDataProperties(var10, var9);
                        var0 = var5.bind(var6)(var4, var3);
                    case 214:
                        _fun69977_ip = 244;
                        continue _fun69977;
                    case 216:
                        var4 = _closure1_slot12;
                        var3 = _closure1_slot17;
                        var2 = {};
                        var10 = var2;
                        var9 = var1;
                        var1 = copyDataProperties(var10, var9);
                        var1 = undefined;
                        var0 = var4.bind(var1)(var3, var2);
                    case 244:
                        return var0;
                }
            };
            var _closure1_slot20 = var0;
            var0 = global;
            var6 = var0.Object;
            var3 = var6.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var6)(var2, var0, var1);
            var3 = 0;
            var1 = var8[var3];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var6 = var8[var1];
            var1 = arg3;
            var1 = var1.bind(var0)(var6);
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var11 = var1.requireNativeComponent;
            var9 = var1.View;
            var _closure1_slot5 = var9;
            var1 = var1.Image;
            var _closure1_slot6 = var1;
            var1 = 3;
            var1 = var8[var1];
            var1 = var4.bind(var0)(var1);
            var _closure1_slot7 = var1;
            var1 = 4;
            var1 = var8[var1];
            var1 = var4.bind(var0)(var1);
            var _closure1_slot8 = var1;
            var1 = 5;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var1 = var1.MessageTypes;
            var _closure1_slot9 = var1;
            var1 = 6;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var4 = var1.RowType;
            var _closure1_slot10 = var4;
            var1 = var1.Changeset;
            var _closure1_slot11 = var1;
            var1 = 7;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var4 = var1.jsx;
            var _closure1_slot12 = var4;
            var1 = var1.jsxs;
            var _closure1_slot13 = var1;
            var10 = 8;
            var1 = var8[var10];
            var4 = var7.bind(var0)(var1);
            var1 = var4.isAndroid;
            var4 = var1.bind(var4)();
            var6 = 16;
            var1 = var6;
            if (!var4) {
                _fun69976_ip = 291;
                continue _fun69976
            }
        case 289:
            var1 = 0;
        case 291:
            var _closure1_slot14 = var1;
            var1 = 9;
            var1 = var8[var1];
            var3 = var7.bind(var0)(var1);
            var1 = var3.isFabric;
            var1 = var1.bind(var3)();
            if (var1) {
                _fun69976_ip = 333;
                continue _fun69976
            }
        case 320:
            var1 = 'DCDMessageView';
            var4 = var11.bind(var0)(var1);
            _fun69976_ip = 350;
            continue _fun69976;
        case 333:
            var1 = 10;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var4 = var1.default;
        case 350:
            var _closure1_slot15 = var4;
            var1 = var8[var10];
            var3 = var7.bind(var0)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if (var1) {
                _fun69976_ip = 389;
                continue _fun69976
            }
        case 376:
            var1 = 'DCDSystemMessageView';
            var3 = var11.bind(var0)(var1);
            _fun69976_ip = 406;
            continue _fun69976;
        case 389:
            var1 = 11;
            var1 = var8[var1];
            var1 = var7.bind(var0)(var1);
            var3 = var1.default;
        case 406:
            var _closure1_slot16 = var3;
            var1 = var8[var10];
            var12 = var7.bind(var0)(var1);
            var1 = var12.isAndroid;
            var1 = var1.bind(var12)();
            if (var1) {
                _fun69976_ip = 445;
                continue _fun69976
            }
        case 432:
            var1 = 'DCDAutoModerationSystemMessageView';
            var1 = var11.bind(var0)(var1);
            _fun69976_ip = 462;
            continue _fun69976;
        case 445:
            var11 = 12;
            var11 = var8[var11];
            var11 = var7.bind(var0)(var11);
            var1 = var11.default;
        case 462:
            var _closure1_slot17 = var1;
            var10 = var8[var10];
            var11 = var7.bind(var0)(var10);
            var10 = var11.isAndroid;
            var10 = var10.bind(var11)();
            if (!var10) {
                _fun69976_ip = 505;
                continue _fun69976
            }
        case 488:
            var10 = 13;
            var10 = var8[var10];
            var10 = var7.bind(var0)(var10);
            var9 = var10.default;
        case 505:
            var _closure1_slot18 = var9;
            var6 = var8[var6];
            var10 = var7.bind(var0)(var6);
            var9 = var10.createStyles;
            var6 = function(arg0) { // Environment: var5
                var0 = {};
                var1 = {
                    'position': 'relative',
                    'overflow': 'hidden'
                };
                var0.container = var1;
                var1 = {};
                var2 = _closure1_slot14;
                var2 = -var2;
                var1.marginTop = var2;
                var2 = arg0;
                var2 = -var2;
                var1.marginLeft = var2;
                var0.offset = var1;
                var1 = {
                    'position': 'absolute',
                    'bottom': 0,
                    'height': 24,
                    'width': '100%'
                };
                var0.gradient = var1;
                var1 = {};
                var2 = 'transparent';
                var1.backgroundColor = var2;
                var0.itemRow = var1;
                return var0;
            };
            var6 = var9.bind(var10)(var6);
            var _closure1_slot19 = var6;
            var6 = 22;
            var6 = var8[var6];
            var8 = var7.bind(var0)(var6);
            var7 = var8.fileFinishedImporting;
            var6 = 'components_native/chat/ChatItem.tsx';
            var6 = var7.bind(var8)(var6);
            var5 = function(arg0) { // Original name: _default, environment: var5
                _fun69979: for (var _fun69979_ip = 0;;) switch (_fun69979_ip) {
                    case 0:
                        var2 = arg0;
                        var10 = var2.rowGenerator;
                        var _closure2_slot0 = var10;
                        var18 = var2.message;
                        var _closure2_slot1 = var18;
                        var14 = var2.style;
                        var7 = var2.horizontalOffset;
                        var3 = undefined;
                        if (!(var7 === var3)) {
                            _fun69979_ip = 44;
                            continue _fun69979
                        }
                    case 41:
                        var7 = 8;
                    case 44:
                        var1 = var2.maxHeight;
                        var15 = var2.useDarkGradient;
                        var _closure2_slot2 = var15;
                        var17 = var2.modifyRow;
                        var _closure2_slot3 = var17;
                        var11 = var2.pointerEvents;
                        var4 = var2.onLayout;
                        var _closure2_slot4 = var4;
                        var2 = var2.messageSizeCacheRef;
                        var _closure2_slot5 = var2;
                        var _closure2_slot6 = var3;
                        var _closure2_slot7 = var3;
                        var _closure2_slot8 = var3;
                        var _closure2_slot9 = var3;
                        var _closure2_slot10 = var3;
                        var5 = _closure1_slot19;
                        var9 = var5.bind(var3)(var7);
                        var13 = _closure1_slot4;
                        var5 = var13.useState;
                        var8 = 0;
                        var5 = var5.bind(var13)(var8);
                        var19 = _closure1_slot3;
                        var16 = 2;
                        var7 = var19.bind(var3)(var5, var16);
                        var5 = var7[var8];
                        var12 = 1;
                        var7 = var7[var12];
                        _closure2_slot6 = var7;
                        var7 = var13.useState;
                        var7 = var7.bind(var13)(var3);
                        var7 = var19.bind(var3)(var7, var16);
                        var8 = var7[var8];
                        _closure2_slot7 = var8;
                        var7 = var7[var12];
                        _closure2_slot8 = var7;
                        var12 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var7 = 17;
                        var7 = var16[var7];
                        var19 = var12.bind(var3)(var7);
                        var16 = var19.useStateFromStores;
                        var7 = _closure1_slot8;
                        var12 = new Array(1);
                        var12[0] = var7;
                        var7 = function() { // Environment: var0
                            var0 = _closure1_slot8;
                            var0 = var0.theme;
                            return var0;
                        };
                        var7 = var16.bind(var19)(var12, var7);
                        _closure2_slot9 = var7;
                        var12 = _closure1_slot7;
                        var19 = var12.roleStyle;
                        _closure2_slot10 = var19;
                        var16 = var13.useMemo;
                        var12 = new Array(5);
                        var12[0] = var8;
                        var12[1] = var19;
                        var12[2] = var18;
                        var12[3] = var17;
                        var12[4] = var10;
                        var10 = function() { // Environment: var0
                            _fun69981: for (var _fun69981_ip = 0;;) switch (_fun69981_ip) {
                                case 0:
                                    var4 = _closure2_slot0;
                                    var2 = var4.setOptions;
                                    var0 = {};
                                    var3 = _closure2_slot7;
                                    var0.constrainedWidth = var3;
                                    var0 = var2.bind(var4)(var0);
                                    var3 = var4.generate;
                                    var2 = {};
                                    var0 = _closure2_slot10;
                                    var2.roleStyle = var0;
                                    var5 = _closure1_slot10;
                                    var5 = var5.MESSAGE;
                                    var2.rowType = var5;
                                    var5 = _closure1_slot11;
                                    var5 = var5.NOOP;
                                    var2.changeType = var5;
                                    var5 = _closure2_slot1;
                                    var2.message = var5;
                                    var5 = true;
                                    var2.isFirst = var5;
                                    var2.canShowImages = var5;
                                    var5 = false;
                                    var2.canAddNewReactions = var5;
                                    var4 = var3.bind(var4)(var2);
                                    var3 = _closure2_slot3;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun69981_ip = 132;
                                        continue _fun69981
                                    }
                                case 121:
                                    var2 = _closure2_slot3;
                                    var1 = undefined;
                                    var1 = var2.bind(var1)(var4);
                                case 132:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 9;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var0 = var1.isFabric;
                                    var1 = var0.bind(var1)();
                                    var0 = var4;
                                    if (!var1) {
                                        _fun69981_ip = 207;
                                        continue _fun69981
                                    }
                                case 170:
                                    var1 = global;
                                    var3 = var1.JSON;
                                    var2 = var3.stringify;
                                    var1 = {};
                                    var5 = 0;
                                    var1.index = var5;
                                    var8 = var1;
                                    var7 = var4;
                                    var4 = copyDataProperties(var8, var7);
                                    var0 = var2.bind(var3)(var1);
                                case 207:
                                    return var0;
                            }
                        };
                        var17 = var16.bind(var13)(var10, var12);
                        var12 = var13.useMemo;
                        var10 = new Array(2);
                        var10[0] = var15;
                        var10[1] = var7;
                        var7 = function() { // Environment: var0
                            _fun69982: for (var _fun69982_ip = 0;;) switch (_fun69982_ip) {
                                case 0:
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 18;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var5 = var1.bind(var2)(var0);
                                    var1 = var5.isThemeDark;
                                    var0 = _closure2_slot9;
                                    var0 = var1.bind(var5)(var0);
                                    var1 = _closure1_slot1;
                                    if (var0) {
                                        _fun69982_ip = 63;
                                        continue _fun69982
                                    }
                                case 50:
                                    var5 = _closure1_slot2;
                                    var0 = 21;
                                    var0 = var5[var0];
                                    _fun69982_ip = 93;
                                    continue _fun69982;
                                case 63:
                                    var3 = _closure2_slot2;
                                    var5 = _closure1_slot2;
                                    if (var3) {
                                        _fun69982_ip = 83;
                                        continue _fun69982
                                    }
                                case 74:
                                    var3 = 20;
                                    var3 = var5[var3];
                                    _fun69982_ip = 90;
                                    continue _fun69982;
                                case 83:
                                    var4 = 19;
                                    var3 = var5[var4];
                                case 90:
                                    var0 = var3;
                                case 93:
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var10 = var12.bind(var13)(var7, var10);
                        var12 = var13.useCallback;
                        var7 = new Array(1);
                        var7[0] = var4;
                        var4 = function(arg0) { // Environment: var0
                            _fun69983: for (var _fun69983_ip = 0;;) switch (_fun69983_ip) {
                                case 0:
                                    var2 = arg0;
                                    var4 = _closure2_slot8;
                                    var0 = var2.nativeEvent;
                                    var0 = var0.layout;
                                    var3 = var0.width;
                                    var0 = undefined;
                                    var3 = var4.bind(var0)(var3);
                                    var4 = _closure2_slot4;
                                    var3 = null;
                                    if (!(var3 != var4)) {
                                        _fun69983_ip = 53;
                                        continue _fun69983
                                    }
                                case 44:
                                    var1 = _closure2_slot4;
                                    var1 = var1.bind(var0)(var2);
                                case 53:
                                    return var0;
                            }
                        };
                        var12 = var12.bind(var13)(var4, var7);
                        var7 = var13.useCallback;
                        var4 = new Array(2);
                        var4[0] = var2;
                        var15 = var18.id;
                        var4[1] = var15;
                        var0 = function(arg0) { // Environment: var0
                            _fun69984: for (var _fun69984_ip = 0;;) switch (_fun69984_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.nativeEvent;
                                    var0 = var0.layout;
                                    var2 = var0.height;
                                    var0 = 0;
                                    if (!(var2 > var0)) {
                                        _fun69984_ip = 98;
                                        continue _fun69984
                                    }
                                case 26:
                                    var3 = _closure2_slot5;
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun69984_ip = 87;
                                        continue _fun69984
                                    }
                                case 39:
                                    var1 = _closure2_slot5;
                                    var3 = var1.current;
                                    var1 = _closure2_slot1;
                                    var1 = var1.id;
                                    var1 = var3[var1];
                                    if (!(var1 !== var2)) {
                                        _fun69984_ip = 87;
                                        continue _fun69984
                                    }
                                case 65:
                                    var1 = _closure2_slot5;
                                    var3 = var1.current;
                                    var1 = _closure2_slot1;
                                    var1 = var1.id;
                                    var3[var1] = var2;
                                case 87:
                                    var1 = _closure2_slot6;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2);
                                case 98:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var7.bind(var13)(var0, var4);
                        var0 = _closure1_slot14;
                        var0 = var5 - var0;
                        var7 = null;
                        var5 = var7 != var1;
                        if (!var5) {
                            _fun69979_ip = 426;
                            continue _fun69979
                        }
                    case 422:
                        var5 = var0 >= var1;
                    case 426:
                        var13 = var7 == var2;
                        var15 = undefined;
                        if (var13) {
                            _fun69979_ip = 458;
                            continue _fun69979
                        }
                    case 435:
                        var13 = var2.current;
                        var2 = var7 == var13;
                        var15 = undefined;
                        if (var2) {
                            _fun69979_ip = 458;
                            continue _fun69979
                        }
                    case 449:
                        var2 = var18.id;
                        var15 = var13[var2];
                    case 458:
                        if (!(var7 == var15)) {
                            _fun69979_ip = 471;
                            continue _fun69979
                        }
                    case 462:
                        if (!var5) {
                            _fun69979_ip = 468;
                            continue _fun69979
                        }
                    case 465:
                        var0 = var1;
                    case 468:
                        var15 = var0;
                    case 471:
                        var2 = _closure1_slot12;
                        var1 = _closure1_slot18;
                        var0 = {};
                        var13 = var9.offset;
                        var0.style = var13;
                        var0.onLayout = var4;
                        var16 = _closure1_slot12;
                        var13 = _closure1_slot20;
                        var4 = {};
                        var4.message = var18;
                        var4.row = var17;
                        var17 = var9.itemRow;
                        var4.style = var17;
                        var4 = var16.bind(var3)(var13, var4);
                        var0.children = var4;
                        var4 = var2.bind(var3)(var1, var0);
                        var2 = _closure1_slot13;
                        var1 = _closure1_slot5;
                        var0 = {};
                        var16 = var9.container;
                        var13 = new Array(3);
                        var13[0] = var16;
                        var13[1] = var14;
                        var14 = {};
                        var14.height = var15;
                        var13[2] = var14;
                        var0.style = var13;
                        var0.onLayout = var12;
                        var0.pointerEvents = var11;
                        var7 = var7 != var8;
                        if (!var7) {
                            _fun69979_ip = 602;
                            continue _fun69979
                        }
                    case 599:
                        var7 = var4;
                    case 602:
                        var4 = new Array(2);
                        var4[0] = var7;
                        if (!var5) {
                            _fun69979_ip = 643;
                            continue _fun69979
                        }
                    case 613:
                        var8 = _closure1_slot12;
                        var7 = _closure1_slot6;
                        var6 = {};
                        var6.source = var10;
                        var9 = var9.gradient;
                        var6.style = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 643:
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var5;
            var2.DCDMessageView = var4;
            var2.DCDSystemMessageView = var3;
            var2.DCDAutoModerationSystemMessageView = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 3155, 660, 6475, 33, 478, 3864, 8757, 8758, 8759, 8760, 666, 6631, 1297, 566, 3165, 8761, 8762, 8763, 2]);