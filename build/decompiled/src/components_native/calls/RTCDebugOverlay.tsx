// components_native/calls/RTCDebugOverlay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var3 = _closure1_slot14;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 12;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.LegacyText;
        var0 = {};
        var6 = arg0;
        var7 = var0;
        var5 = copyDataProperties(var7, var6);
        var4 = _closure1_slot18;
        var5 = var4.text;
        var4 = 'style';
        var0[var4] = var5;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var6 = var0.title;
        var8 = var0.children;
        var3 = _closure1_slot15;
        var2 = _closure1_slot16;
        var1 = {};
        var5 = _closure1_slot22;
        var4 = {};
        var0 = new Array(2);
        var0[0] = var6;
        var6 = ':';
        var0[1] = var6;
        var4.children = var0;
        var0 = undefined;
        var5 = var3.bind(var0)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot14;
        var6 = _closure1_slot5;
        var5 = {};
        var9 = _closure1_slot18;
        var9 = var9.indent;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[1] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.entries;
        var0 = arg0;
        var2 = var1.bind(var2)(var0);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun69317: for (var _fun69317_ip = 0;;) switch (_fun69317_ip) {
                case 0:
                    var3 = arg0;
                    var0 = var3[Symbol.iterator];
                    var3 = var0().next;
                    var2 = var3().value;
                    var1 = var0;
                    var5 = undefined;
                    var1 = var1 === var5;
                    var4 = undefined;
                    if (var1) {
                        _fun69317_ip = 27;
                        continue _fun69317
                    }
                case 24:
                    var4 = var2;
                case 27:
                    var2 = undefined;
                    if (var1) {
                        _fun69317_ip = 57;
                        continue _fun69317
                    }
                case 32:
                    var6 = var3().value;
                    var3 = var0;
                    var3 = var3 === var5;
                    var2 = undefined;
                    var1 = var3;
                    if (var3) {
                        _fun69317_ip = 57;
                        continue _fun69317
                    }
                case 51:
                    var2 = var6;
                    var1 = var3;
                case 57:
                    if (var1) {
                        _fun69317_ip = 63;
                        continue _fun69317
                    }
                case 60:
                    var0.return();
                case 63:
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.isArray;
                    var0 = var0.bind(var1)(var2);
                    var7 = var2;
                    if (!var0) {
                        _fun69317_ip = 150;
                        continue _fun69317
                    }
                case 87:
                    var0 = var2.at;
                    var1 = -1;
                    var3 = var0.bind(var2)(var1);
                    var0 = null;
                    var6 = var0 == var3;
                    var0 = undefined;
                    if (var6) {
                        _fun69317_ip = 120;
                        continue _fun69317
                    }
                case 115:
                    var0 = var3.value;
                case 120:
                    var3 = 'number';
                    var0 = typeof var0;
                    var7 = var2;
                    if (!(var3 === var0)) {
                        _fun69317_ip = 150;
                        continue _fun69317
                    }
                case 134:
                    var0 = var2.at;
                    var0 = var0.bind(var2)(var1);
                    var7 = var0.value;
                case 150:
                    var0 = null;
                    if (!(var0 != var7)) {
                        _fun69317_ip = 167;
                        continue _fun69317
                    }
                case 156:
                    var1 = 'object';
                    var0 = typeof var7;
                    if (!(var1 !== var0)) {
                        _fun69317_ip = 258;
                        continue _fun69317
                    }
                case 167:
                    var2 = _closure1_slot14;
                    var1 = _closure1_slot5;
                    var0 = {};
                    var3 = _closure1_slot18;
                    var3 = var3.row;
                    var0.style = var3;
                    var8 = _closure1_slot15;
                    var6 = _closure1_slot22;
                    var3 = {};
                    var9 = new Array(3);
                    var9[0] = var4;
                    var11 = ': ';
                    var9[1] = var11;
                    var10 = _closure1_slot17;
                    var10 = var10.bind(var5)(var7);
                    var9[2] = var10;
                    var3.children = var9;
                    var3 = var8.bind(var5)(var6, var3);
                    var0.children = var3;
                    var0 = var2.bind(var5)(var1, var0, var4);
                    _fun69317_ip = 295;
                    continue _fun69317;
                case 258:
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot23;
                    var1 = {};
                    var1.title = var4;
                    var6 = _closure1_slot24;
                    var6 = var6.bind(var5)(var7);
                    var1.children = var6;
                    var0 = var3.bind(var5)(var2, var1, var4);
                case 295:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        _fun69318: for (var _fun69318_ip = 0;;) switch (_fun69318_ip) {
            case 0:
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 13;
                var6 = var5[var1];
                var3 = undefined;
                var10 = var2.bind(var3)(var6);
                var9 = var10.useStateFromStoresObject;
                var6 = _closure1_slot9;
                var8 = new Array(1);
                var8[0] = var6;
                var7 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot9;
                    var2 = var3.getGuildId;
                    var2 = var2.bind(var3)();
                    var0.guildId = var2;
                    var2 = _closure1_slot9;
                    var1 = var2.getChannelId;
                    var1 = var1.bind(var2)();
                    var0.channelId = var1;
                    return var0;
                };
                var6 = new Array(0);
                var6 = var9.bind(var10)(var8, var7, var6);
                var9 = var6.guildId;
                var _closure2_slot0 = var9;
                var8 = var6.channelId;
                var _closure2_slot1 = var8;
                var6 = var5[var1];
                var12 = var2.bind(var3)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var6;
                var7 = new Array(1);
                var7[0] = var9;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var11.bind(var12)(var10, var6, var7);
                var1 = var5[var1];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var7)(var2, var0, var1);
                var2 = _closure1_slot1;
                var0 = 14;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var7 = var0.bind(var3)(var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot23;
                var0 = {};
                var5 = 'general';
                var0.title = var5;
                var5 = _closure1_slot24;
                var4 = {};
                var6 = {};
                var6.id = var9;
                var9 = null;
                var11 = var9 != var10;
                if (!var11) {
                    _fun69318_ip = 244;
                    continue _fun69318
                }
            case 239:
                var9 = var10.name;
            case 244:
                var6.name = var9;
                var4.guild = var6;
                var6 = {};
                var6.id = var8;
                var6.name = var7;
                var4.channel = var6;
                var4 = var5.bind(var3)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun69322: for (var _fun69322_ip = 0;;) switch (_fun69322_ip) {
            case 0:
                var2 = _closure1_slot21;
                var0 = arg0;
                var4 = var2[var0];
                var0 = null;
                var2 = var0 != var4;
                if (!var2) {
                    _fun69322_ip = 37;
                    continue _fun69322
                }
            case 23:
                var3 = _closure1_slot14;
                var2 = undefined;
                var1 = {};
                var0 = var3.bind(var2)(var4, var1);
            case 37:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun69323: for (var _fun69323_ip = 0;;) switch (_fun69323_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.context;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var3 = 13;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot10;
                    var1 = var2.getAllStats;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var4.bind(var5)(var3, var0, var2);
                var5 = null;
                var2 = var5 == var3;
                var0 = null;
                if (var2) {
                    _fun69323_ip = 119;
                    continue _fun69323
                }
            case 89:
                var4 = var3.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var4)) {
                    _fun69323_ip = 119;
                    continue _fun69323
                }
            case 102:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun69325: for (var _fun69325_ip = 0;;) switch (_fun69325_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = _closure1_slot15;
                            var3 = _closure1_slot23;
                            var2 = {};
                            var8 = _closure2_slot0;
                            var11 = var0.mediaEngineConnectionId;
                            var6 = global;
                            var1 = var6.HermesInternal;
                            var9 = var1.concat;
                            var5 = '';
                            var1 = ' - ';
                            var1 = var9.bind(var5)(var8, var1, var11);
                            var2.title = var1;
                            var5 = _closure1_slot26;
                            var1 = undefined;
                            var8 = var5.bind(var1)(var8);
                            var5 = new Array(4);
                            var5[0] = var8;
                            var12 = var0.transport;
                            var9 = _closure1_slot14;
                            var8 = {};
                            var11 = 'transport';
                            var8.title = var11;
                            var11 = _closure1_slot24;
                            var11 = var11.bind(var1)(var12);
                            var8.children = var11;
                            var8 = var9.bind(var1)(var3, var8);
                            var5[1] = var8;
                            var8 = var0.rtp;
                            var13 = var8.outbound;
                            var9 = _closure1_slot14;
                            var8 = {};
                            var11 = 'outbound';
                            var8.title = var11;
                            var12 = var13.map;
                            var11 = function(arg0, arg1) { // Environment: var10
                                var4 = _closure1_slot14;
                                var3 = _closure1_slot19;
                                var2 = {};
                                var0 = arg0;
                                var2.data = var0;
                                var1 = undefined;
                                var0 = arg1;
                                var0 = var4.bind(var1)(var3, var2, var0);
                                return var0;
                            };
                            var11 = var12.bind(var13)(var11);
                            var8.children = var11;
                            var8 = var9.bind(var1)(var3, var8);
                            var5[2] = var8;
                            var8 = var0.rtp;
                            var9 = var8.inbound;
                            var _closure3_slot0 = var9;
                            var8 = var6.Object;
                            var6 = var8.keys;
                            var12 = var6.bind(var8)(var9);
                            var9 = var12.length;
                            var8 = 0;
                            var6 = null;
                            if (!(var8 !== var9)) {
                                _fun69325_ip = 274;
                                continue _fun69325
                            }
                        case 229:
                            var9 = _closure1_slot14;
                            var8 = _closure1_slot23;
                            var7 = {};
                            var11 = 'inbound';
                            var7.title = var11;
                            var11 = var12.map;
                            var10 = function(arg0) { // Environment: var10
                                var4 = arg0;
                                var3 = _closure1_slot14;
                                var2 = _closure1_slot20;
                                var1 = {};
                                var1.userId = var4;
                                var0 = _closure3_slot0;
                                var0 = var0[var4];
                                var1.data = var0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1, var4);
                                return var0;
                            };
                            var10 = var11.bind(var12)(var10);
                            var7.children = var10;
                            var6 = var9.bind(var1)(var8, var7);
                        case 274:
                            var5[3] = var6;
                            var2.children = var5;
                            var0 = var0.mediaEngineConnectionId;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 119:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
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
    var8 = var6.bind(var0)(var3);
    var _closure1_slot4 = var8;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.StyleSheet;
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MediaEngineContextTypes;
    var _closure1_slot13 = var6;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var7 = var3.jsxs;
    var _closure1_slot15 = var7;
    var3 = var3.Fragment;
    var _closure1_slot16 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = '' + var0;
        return var0;
    };
    var _closure1_slot17 = var3;
    var7 = var9.create;
    var3 = {};
    var10 = {};
    var18 = var9.absoluteFillObject;
    var19 = var10;
    var11 = copyDataProperties(var19, var18);
    var11 = 10;
    var11 = var5[var11];
    var16 = var4.bind(var0)(var11);
    var15 = var16.hexWithOpacity;
    var11 = 11;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.BLACK;
    var13 = 0.7;
    var14 = var15.bind(var16)(var14, var13);
    var13 = 'backgroundColor';
    var10[var13] = var14;
    var3.container = var10;
    var10 = {
        'flex': 1,
        'margin': 8
    };
    var3.scroller = var10;
    var10 = {};
    var13 = 16;
    var10.marginLeft = var13;
    var3.indent = var10;
    var10 = {};
    var13 = 'row';
    var10.flexDirection = var13;
    var3.row = var10;
    var10 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.WHITE;
    var10.color = var11;
    var11 = 14;
    var10.fontSize = var11;
    var3.text = var10;
    var10 = {
        'flexGrow': 0,
        'margin': 8
    };
    var3.buttonClose = var10;
    var3 = var7.bind(var9)(var3);
    var _closure1_slot18 = var3;
    var7 = var8.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var2 = var0.data;
        var4 = var2.type;
        var0 = null;
        var1 = Object.create(var0);
        var0 = 0;
        var1.type = var0;
        var8 = {};
        var7 = var2;
        var6 = var1;
        var5 = copyDataProperties(var8, var7, var6);
        var3 = _closure1_slot14;
        var2 = _closure1_slot23;
        var1 = {};
        var1.title = var4;
        var4 = _closure1_slot24;
        var0 = undefined;
        var4 = var4.bind(var0)(var5);
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot19 = var3;
    var7 = var8.memo;
    var3 = function(arg0) { // Environment: var1
        _fun69330: for (var _fun69330_ip = 0;;) switch (_fun69330_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.userId;
                var _closure2_slot0 = var7;
                var6 = var0.data;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var9 = var2.bind(var3)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot12;
                var5 = new Array(1);
                var5[0] = var1;
                var2 = new Array(1);
                var2[0] = var7;
                var1 = function() { // Environment: var4
                    var2 = _closure1_slot12;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var9)(var5, var1, var2);
                var1 = global;
                var2 = var1.HermesInternal;
                var5 = var2.concat;
                var2 = '';
                var2 = var5.bind(var2)(var7);
                var7 = null;
                var5 = var2;
                if (!(var7 != var8)) {
                    _fun69330_ip = 154;
                    continue _fun69330
                }
            case 114:
                var7 = var8.toString;
                var9 = var7.bind(var8)();
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var7 = ' (';
                var1 = ')';
                var1 = var8.bind(var7)(var9, var1);
                var5 = var2 + var1;
            case 154:
                var2 = _closure1_slot14;
                var1 = _closure1_slot23;
                var0 = {};
                var0.title = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var4 = _closure1_slot14;
                    var3 = _closure1_slot19;
                    var2 = {};
                    var0 = arg0;
                    var2.data = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot20 = var3;
    var3 = {};
    var8 = var6.DEFAULT;
    var7 = function() {
        var2 = _closure1_slot24;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var1 = 13;
        var3 = var3[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var3);
        var5 = var6.useStateFromStoresObject;
        var0 = _closure1_slot9;
        var4 = new Array(1);
        var4[0] = var0;
        var3 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot9;
            var2 = var3.getMediaSessionId;
            var2 = var2.bind(var3)();
            var0.mediaSessionId = var2;
            var3 = _closure1_slot9;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var0.state = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getShortHostname;
            var5 = _closure1_slot9;
            var2 = var5.getHostname;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            var0.hostname = var2;
            var3 = _closure1_slot9;
            var2 = var3.getQuality;
            var2 = var2.bind(var3)();
            var0.quality = var2;
            var3 = _closure1_slot9;
            var2 = var3.getAveragePing;
            var2 = var2.bind(var3)();
            var0.averagePing = var2;
            var3 = _closure1_slot9;
            var2 = var3.getLastPing;
            var2 = var2.bind(var3)();
            var0.lastPing = var2;
            var3 = _closure1_slot9;
            var2 = var3.getOutboundLossRate;
            var2 = var2.bind(var3)();
            var0.outboundLossRate = var2;
            var2 = _closure1_slot9;
            var1 = var2.getDuration;
            var1 = var1.bind(var2)();
            var0.duration = var1;
            return var0;
        };
        var0 = new Array(0);
        var0 = var5.bind(var6)(var4, var3, var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3[var8] = var7;
    var7 = var6.STREAM;
    var6 = function() {
        var3 = _closure1_slot11;
        var2 = var3.getAllActiveStreamKeys;
        var4 = var2.bind(var3)();
        var2 = 0;
        var7 = var4[var2];
        var _closure2_slot0 = var7;
        var2 = _closure1_slot24;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 13;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.useStateFromStoresObject;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(1);
        var3[0] = var7;
        var0 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot11;
            var4 = var3.getMediaSessionId;
            var2 = _closure2_slot0;
            var4 = var4.bind(var3)(var2);
            var0.mediaSessionId = var4;
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 15;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.getShortHostname;
            var1 = var3.getHostname;
            var1 = var1.bind(var3)(var2);
            var1 = var4.bind(var5)(var1);
            var0.hostname = var1;
            var1 = var3.getQuality;
            var1 = var1.bind(var3)(var2);
            var0.quality = var1;
            return var0;
        };
        var0 = var5.bind(var6)(var4, var0, var3);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var3[var7] = var6;
    var _closure1_slot21 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/calls/RTCDebugOverlay.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.onClose;
        var5 = var0.style;
        var3 = _closure1_slot4;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var10
            var2 = _closure1_slot2;
            var1 = _closure1_slot3;
            var0 = 16;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.open;
            var0 = var0.bind(var1)();
            var0 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 17;
                var1 = var5[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.wait;
                var3 = _closure1_slot2;
                var0 = 16;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.close;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var3 = _closure1_slot15;
        var13 = _closure1_slot0;
        var14 = _closure1_slot3;
        var0 = 18;
        var0 = var14[var0];
        var2 = undefined;
        var0 = var13.bind(var2)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {
            'top': true,
            'left': true,
            'right': true,
            'bottom': true
        };
        var4 = _closure1_slot18;
        var6 = var4.container;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.style = var4;
        var6 = _closure1_slot15;
        var5 = _closure1_slot6;
        var4 = {};
        var7 = _closure1_slot18;
        var7 = var7.scroller;
        var4.style = var7;
        var7 = 'white';
        var4.indicatorStyle = var7;
        var12 = _closure1_slot14;
        var11 = _closure1_slot25;
        var7 = {};
        var11 = var12.bind(var2)(var11, var7);
        var7 = new Array(2);
        var7[0] = var11;
        var11 = global;
        var15 = var11.Object;
        var12 = var15.values;
        var11 = _closure1_slot13;
        var12 = var12.bind(var15)(var11);
        var11 = var12.map;
        var10 = function(arg0) { // Environment: var10
            var4 = arg0;
            var3 = _closure1_slot14;
            var2 = _closure1_slot27;
            var1 = {};
            var1.context = var4;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var10 = var11.bind(var12)(var10);
        var7[1] = var10;
        var4.children = var7;
        var5 = var6.bind(var2)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot14;
        var6 = _closure1_slot1;
        var5 = 19;
        var5 = var14[var5];
        var6 = var6.bind(var2)(var5);
        var5 = {};
        var10 = 20;
        var11 = var14[var10];
        var11 = var13.bind(var2)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var2)(var10);
        var10 = var10.t;
        var10 = var10.cpT0Cq;
        var10 = var11.bind(var12)(var10);
        var5.text = var10;
        var9 = _closure1_slot18;
        var9 = var9.buttonClose;
        var5.style = var9;
        var5.onPress = var8;
        var5 = var7.bind(var2)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 3518, 8662, 3609, 1621, 3510, 33, 3240, 671, 4876, 566, 4792, 8664, 8663, 806, 4734, 4873, 1234, 2]);