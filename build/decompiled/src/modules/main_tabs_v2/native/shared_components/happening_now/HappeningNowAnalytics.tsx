// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun101848: for (var _fun101848_ip = 0;;) switch (_fun101848_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun101848_ip = 45;
                    continue _fun101848
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun101848_ip = 54;
                    continue _fun101848
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun101848_ip = 344;
                    continue _fun101848
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun101848_ip = 322;
                    continue _fun101848
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun101848_ip = 282;
                    continue _fun101848
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun101848_ip = 269;
                    continue _fun101848
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
                    _fun101848_ip = 162;
                    continue _fun101848
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun101848_ip = 178;
                    continue _fun101848
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun101848_ip = 248;
                    continue _fun101848
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun101848_ip = 248;
                    continue _fun101848
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun101848_ip = 233;
                    continue _fun101848
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun101848_ip = 246;
                    continue _fun101848
                }
            case 233:
                var8 = _closure1_slot5;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun101848_ip = 264;
                continue _fun101848;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun101848_ip = 282;
                continue _fun101848;
            case 269:
                var6 = _closure1_slot5;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun101848_ip = 322;
                    continue _fun101848
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
                    _fun101848_ip = 329;
                    continue _fun101848
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun101849: for (var _fun101849_ip = 0;;) switch (_fun101849_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun101849_ip = 56;
                                continue _fun101849
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
                            _fun101849_ip = 67;
                            continue _fun101849;
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
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun101850: for (var _fun101850_ip = 0;;) switch (_fun101850_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun101850_ip = 23;
                    continue _fun101850
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun101850_ip = 33;
                    continue _fun101850
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
                    _fun101850_ip = 70;
                    continue _fun101850
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun101850_ip = 55;
                    continue _fun101850
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function(arg0) { // Original name: convertNullableArrayToItemAndItemIndex, environment: var1
        _fun101851: for (var _fun101851_ip = 0;;) switch (_fun101851_ip) {
            case 0:
                var2 = new Array(0);
                var1 = new Array(0);
                var3 = _closure1_slot4;
                var8 = undefined;
                var0 = arg0;
                var7 = var3.bind(var8)(var0);
                var3 = var7.bind(var8)();
                var0 = var3.done;
                var6 = -1;
                var5 = 1;
                var4 = null;
                if (var0) {
                    _fun101851_ip = 113;
                    continue _fun101851
                }
            case 48:
                var9 = var3.value;
                if (!(var4 !== var9)) {
                    _fun101851_ip = 88;
                    continue _fun101851
                }
            case 57:
                var0 = var2.push;
                var0 = var0.bind(var2)(var9);
                var9 = var1.push;
                var0 = var2.length;
                var0 = var0 - var5;
                var0 = var9.bind(var1)(var0);
                _fun101851_ip = 98;
                continue _fun101851;
            case 88:
                var0 = var1.push;
                var0 = var0.bind(var1)(var6);
            case 98:
                var9 = var7.bind(var8)();
                var0 = var9.done;
                var3 = var9;
                if (!var0) {
                    _fun101851_ip = 48;
                    continue _fun101851
                }
            case 113:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: getItemUserId, environment: var1
        _fun101852: for (var _fun101852_ip = 0;;) switch (_fun101852_ip) {
            case 0:
                var1 = arg0;
                var0 = 'userId';
                var2 = var0 in var1;
                var0 = null;
                if (!var2) {
                    _fun101852_ip = 21;
                    continue _fun101852
                }
            case 16:
                var0 = var1.userId;
            case 21:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: getItemChannelId, environment: var1
        _fun101853: for (var _fun101853_ip = 0;;) switch (_fun101853_ip) {
            case 0:
                var1 = arg0;
                var0 = 'channelId';
                var0 = var0 in var1;
                if (var0) {
                    _fun101853_ip = 166;
                    continue _fun101853
                }
            case 17:
                var0 = 'voiceState';
                var0 = var0 in var1;
                if (var0) {
                    _fun101853_ip = 127;
                    continue _fun101853
                }
            case 28:
                var0 = 'stream';
                var0 = var0 in var1;
                if (var0) {
                    _fun101853_ip = 88;
                    continue _fun101853
                }
            case 39:
                var0 = 'stage';
                var2 = var0 in var1;
                var4 = null;
                var0 = null;
                if (!var2) {
                    _fun101853_ip = 86;
                    continue _fun101853
                }
            case 54:
                var3 = var1.stage;
                var5 = var4 == var3;
                var2 = undefined;
                if (var5) {
                    _fun101853_ip = 74;
                    continue _fun101853
                }
            case 69:
                var2 = var3.channel_id;
            case 74:
                var3 = var4 != var2;
                var0 = null;
                if (!var3) {
                    _fun101853_ip = 86;
                    continue _fun101853
                }
            case 83:
                var0 = var2;
            case 86:
                _fun101853_ip = 125;
                continue _fun101853;
            case 88:
                var4 = var1.stream;
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun101853_ip = 110;
                    continue _fun101853
                }
            case 105:
                var3 = var4.channelId;
            case 110:
                var4 = var2 != var3;
                var2 = null;
                if (!var4) {
                    _fun101853_ip = 122;
                    continue _fun101853
                }
            case 119:
                var2 = var3;
            case 122:
                var0 = var2;
            case 125:
                _fun101853_ip = 164;
                continue _fun101853;
            case 127:
                var4 = var1.voiceState;
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun101853_ip = 149;
                    continue _fun101853
                }
            case 144:
                var3 = var4.channelId;
            case 149:
                var4 = var2 != var3;
                var2 = null;
                if (!var4) {
                    _fun101853_ip = 161;
                    continue _fun101853
                }
            case 158:
                var2 = var3;
            case 161:
                var0 = var2;
            case 164:
                _fun101853_ip = 171;
                continue _fun101853;
            case 166:
                var0 = var1.channelId;
            case 171:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0) { // Original name: getUserIdProperties, environment: var1
        var4 = arg0;
        var2 = _closure1_slot6;
        var3 = var4.map;
        var1 = _closure1_slot7;
        var1 = var3.bind(var4)(var1);
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot2;
        var0 = 2;
        var2 = var1.bind(var3)(var2, var0);
        var0 = {};
        var1 = 0;
        var1 = var2[var1];
        var0.highlighted_user_ids = var1;
        var1 = 1;
        var1 = var2[var1];
        var0.highlighted_user_ids_index = var1;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: getChannelIdProperties, environment: var1
        var4 = arg0;
        var2 = _closure1_slot6;
        var3 = var4.map;
        var1 = _closure1_slot8;
        var1 = var3.bind(var4)(var1);
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = _closure1_slot2;
        var0 = 2;
        var2 = var1.bind(var3)(var2, var0);
        var0 = {};
        var1 = 0;
        var1 = var2[var1];
        var0.destination_channel_ids = var1;
        var1 = 1;
        var1 = var2[var1];
        var0.destination_channel_ids_index = var1;
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getAffinityProperties, environment: var1
        _fun101856: for (var _fun101856_ip = 0;;) switch (_fun101856_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot3;
                var0 = var1.getId;
                var5 = var0.bind(var1)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.extractTimestamp;
                var1 = var0.bind(var1)(var5);
                var0 = 25;
                var1 = var1 % var0;
                var0 = 0;
                if (!(var1 !== var0)) {
                    _fun101856_ip = 70;
                    continue _fun101856
                }
            case 66:
                var0 = {};
                _fun101856_ip = 107;
                continue _fun101856;
            case 70:
                var1 = {};
                var5 = _closure1_slot10;
                var6 = var5.bind(var3)(var4);
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var2 = _closure1_slot9;
                var6 = var2.bind(var3)(var4);
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                var0 = var1;
            case 107:
                return var0;
        }
    };
    var2.getAffinityProperties = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1216, 21, 2]);