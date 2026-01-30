// modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var13 = require;
    var2 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var14;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun35152: for (var _fun35152_ip = 0;;) switch (_fun35152_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun35152_ip = 45;
                    continue _fun35152
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun35152_ip = 54;
                    continue _fun35152
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun35152_ip = 342;
                    continue _fun35152
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun35152_ip = 322;
                    continue _fun35152
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun35152_ip = 282;
                    continue _fun35152
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun35152_ip = 269;
                    continue _fun35152
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
                    _fun35152_ip = 162;
                    continue _fun35152
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun35152_ip = 178;
                    continue _fun35152
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun35152_ip = 248;
                    continue _fun35152
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun35152_ip = 248;
                    continue _fun35152
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun35152_ip = 233;
                    continue _fun35152
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun35152_ip = 246;
                    continue _fun35152
                }
            case 233:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun35152_ip = 264;
                continue _fun35152;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun35152_ip = 282;
                continue _fun35152;
            case 269:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun35152_ip = 322;
                    continue _fun35152
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
                    _fun35152_ip = 329;
                    continue _fun35152
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun35153: for (var _fun35153_ip = 0;;) switch (_fun35153_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun35153_ip = 56;
                                continue _fun35153
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
                            _fun35153_ip = 67;
                            continue _fun35153;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun35154: for (var _fun35154_ip = 0;;) switch (_fun35154_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun35154_ip = 23;
                    continue _fun35154
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun35154_ip = 33;
                    continue _fun35154
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
                    _fun35154_ip = 70;
                    continue _fun35154
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun35154_ip = 55;
                    continue _fun35154
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: navigationToRootTabHelper, environment: var1
        _fun35155: for (var _fun35155_ip = 0;;) switch (_fun35155_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getRootNavigationRef;
                var3 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var3)) {
                    _fun35155_ip = 333;
                    continue _fun35155
                }
            case 47:
                var2 = var3.isReady;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun35155_ip = 333;
                    continue _fun35155
                }
            case 63:
                var2 = arg1;
                if (var2) {
                    _fun35155_ip = 90;
                    continue _fun35155
                }
            case 69:
                var4 = var3.navigate;
                var2 = 'tabs';
                var2 = var4.bind(var3)(var2, var1);
                _fun35155_ip = 331;
                continue _fun35155;
            case 90:
                var2 = var3.getRootState;
                var7 = var2.bind(var3)();
                var6 = var7.routes;
                var4 = var6.filter;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = 'modal';
                    var0 = var0 === var1;
                    return var0;
                };
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var6 = 6;
                var6 = var5[var6];
                var8 = var4.bind(var0)(var6);
                var6 = var8.wrapRouteForRootNavigator;
                var9 = {};
                var10 = 'tabs';
                var9.name = var10;
                var10 = 4;
                var10 = var5[var10];
                var11 = var4.bind(var0)(var10);
                var10 = var11.v4;
                var12 = var10.bind(var11)();
                var10 = global;
                var10 = var10.HermesInternal;
                var11 = var10.concat;
                var10 = 'tabs-';
                var10 = var11.bind(var10)(var12);
                var9.key = var10;
                var9.params = var1;
                var1 = new Array(1);
                var1[0] = var9;
                var14 = var6.bind(var8)(var1);
                var6 = new Array(0);
                var13 = 0;
                var15 = var6;
                var13 = arraySpread(var15, var14, var13);
                var15 = var6;
                var14 = var2;
                var1 = arraySpread(var15, var14, var13);
                var2 = var3.dispatch;
                var1 = 5;
                var1 = var5[var1];
                var1 = var4.bind(var0)(var1);
                var5 = var1.CommonActions;
                var4 = var5.reset;
                var1 = {};
                var15 = var1;
                var14 = var7;
                var7 = copyDataProperties(var15, var14);
                var7 = 'routes';
                var1[var7] = var6;
                var7 = var6.length;
                var6 = 1;
                var7 = var7 - var6;
                var6 = 'index';
                var1[var6] = var7;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
            case 331:
                return var0;
            case 333:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var11 = function(arg0) { // Original name: coerceMainRoute, environment: var1
        _fun35157: for (var _fun35157_ip = 0;;) switch (_fun35157_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun35157_ip = 22;
                    continue _fun35157
                }
            case 9:
                var2 = var0.name;
                var1 = 'main';
                if (!(var1 !== var2)) {
                    _fun35157_ip = 26;
                    continue _fun35157
                }
            case 22:
                var1 = undefined;
                return var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot10 = var11;
    var10 = function(arg0) { // Original name: coerceChannelRoute, environment: var1
        _fun35158: for (var _fun35158_ip = 0;;) switch (_fun35158_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun35158_ip = 22;
                    continue _fun35158
                }
            case 9:
                var2 = var0.name;
                var1 = 'channel';
                if (!(var1 !== var2)) {
                    _fun35158_ip = 26;
                    continue _fun35158
                }
            case 22:
                var1 = undefined;
                return var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot11 = var10;
    var9 = function(arg0) { // Original name: coerceTabsRoute, environment: var1
        _fun35159: for (var _fun35159_ip = 0;;) switch (_fun35159_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun35159_ip = 22;
                    continue _fun35159
                }
            case 9:
                var2 = var0.name;
                var1 = 'tabs';
                if (!(var1 !== var2)) {
                    _fun35159_ip = 26;
                    continue _fun35159
                }
            case 22:
                var1 = undefined;
                return var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot12 = var9;
    var8 = function(arg0) { // Original name: coerceGuildsRoute, environment: var1
        _fun35160: for (var _fun35160_ip = 0;;) switch (_fun35160_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun35160_ip = 37;
                    continue _fun35160
                }
            case 9:
                var2 = var0.name;
                var1 = 'guilds';
                if (!(var1 !== var2)) {
                    _fun35160_ip = 41;
                    continue _fun35160
                }
            case 22:
                var2 = var0.name;
                var1 = 'guilds-root';
                if (!(var1 !== var2)) {
                    _fun35160_ip = 41;
                    continue _fun35160
                }
            case 37:
                var1 = undefined;
                return var1;
            case 41:
                return var0;
        }
    };
    var _closure1_slot13 = var8;
    var7 = function(arg0) { // Original name: coerceICYMIRoute, environment: var1
        _fun35161: for (var _fun35161_ip = 0;;) switch (_fun35161_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun35161_ip = 22;
                    continue _fun35161
                }
            case 9:
                var2 = var0.name;
                var1 = 'icymi';
                if (!(var1 !== var2)) {
                    _fun35161_ip = 26;
                    continue _fun35161
                }
            case 22:
                var1 = undefined;
                return var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot14 = var7;
    var6 = function(arg0) { // Original name: coerceModalRoute, environment: var1
        _fun35162: for (var _fun35162_ip = 0;;) switch (_fun35162_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun35162_ip = 22;
                    continue _fun35162
                }
            case 9:
                var2 = var0.name;
                var1 = 'modal';
                if (!(var1 !== var2)) {
                    _fun35162_ip = 26;
                    continue _fun35162
                }
            case 22:
                var1 = undefined;
                return var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot15 = var6;
    var5 = function(arg0) { // Original name: isModalOpen, environment: var1
        _fun35163: for (var _fun35163_ip = 0;;) switch (_fun35163_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.getRootNavigationRef;
                var5 = var0.bind(var2)();
                var2 = null;
                if (!(var2 != var5)) {
                    _fun35163_ip = 197;
                    continue _fun35163
                }
            case 47:
                var0 = var5.isReady;
                var0 = var0.bind(var5)();
                if (!var0) {
                    _fun35163_ip = 197;
                    continue _fun35163
                }
            case 63:
                var0 = var5.getRootState;
                var0 = var0.bind(var5)();
                if (!(var2 != var0)) {
                    _fun35163_ip = 193;
                    continue _fun35163
                }
            case 77:
                var1 = _closure1_slot15;
                var5 = var0.routes;
                var0 = var0.index;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                if (!(var2 != var4)) {
                    _fun35163_ip = 187;
                    continue _fun35163
                }
            case 105:
                var5 = 'string';
                var0 = typeof var4;
                if (!(var5 !== var0)) {
                    _fun35163_ip = 167;
                    continue _fun35163
                }
            case 116:
                var5 = var2 == var1;
                var0 = undefined;
                if (var5) {
                    _fun35163_ip = 161;
                    continue _fun35163
                }
            case 125:
                var5 = var1.params;
                var6 = var2 == var5;
                var0 = undefined;
                if (var6) {
                    _fun35163_ip = 161;
                    continue _fun35163
                }
            case 140:
                var5 = var5.modal;
                var6 = var2 == var5;
                var0 = undefined;
                if (var6) {
                    _fun35163_ip = 161;
                    continue _fun35163
                }
            case 155:
                var0 = var5.modal;
            case 161:
                var0 = var0 === var4;
                _fun35163_ip = 185;
                continue _fun35163;
            case 167:
                var5 = var2 == var1;
                var3 = undefined;
                if (var5) {
                    _fun35163_ip = 181;
                    continue _fun35163
                }
            case 176:
                var3 = var1.key;
            case 181:
                var0 = var3 === var4;
            case 185:
                _fun35163_ip = 191;
                continue _fun35163;
            case 187:
                var0 = var2 != var1;
            case 191:
                return var0;
            case 193:
                var0 = false;
                return var0;
            case 197:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot16 = var5;
    var4 = function() { // Original name: getOpenModalKey, environment: var1
        _fun35164: for (var _fun35164_ip = 0;;) switch (_fun35164_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getRootNavigationRef;
                var4 = var1.bind(var2)();
                var2 = null;
                if (!(var2 != var4)) {
                    _fun35164_ip = 68;
                    continue _fun35164
                }
            case 41:
                var1 = var4.isReady;
                var1 = var1.bind(var4)();
                if (!var1) {
                    _fun35164_ip = 68;
                    continue _fun35164
                }
            case 54:
                var1 = var4.getRootState;
                var1 = var1.bind(var4)();
                if (!(var2 == var1)) {
                    _fun35164_ip = 70;
                    continue _fun35164
                }
            case 68:
                return var0;
            case 70:
                var3 = _closure1_slot15;
                var4 = var1.routes;
                var1 = var1.index;
                var1 = var4[var1];
                var1 = var3.bind(var0)(var1);
                var2 = var2 == var1;
                var0 = undefined;
                if (var2) {
                    _fun35164_ip = 108;
                    continue _fun35164
                }
            case 103:
                var0 = var1.key;
            case 108:
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var3 = function() { // Original name: getCurrentNavigationRouteName, environment: var1
        _fun35165: for (var _fun35165_ip = 0;;) switch (_fun35165_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getRootNavigationRef;
                var3 = var1.bind(var2)();
                var2 = null;
                if (!(var2 != var3)) {
                    _fun35165_ip = 54;
                    continue _fun35165
                }
            case 41:
                var1 = var3.isReady;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun35165_ip = 56;
                    continue _fun35165
                }
            case 54:
                return var0;
            case 56:
                var1 = var3.getCurrentRoute;
                var3 = var1.bind(var3)();
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun35165_ip = 80;
                    continue _fun35165
                }
            case 75:
                var1 = var3.name;
            case 80:
                var2 = var2 != var1;
                var0 = undefined;
                if (!var2) {
                    _fun35165_ip = 92;
                    continue _fun35165
                }
            case 89:
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var12 = global;
    var17 = var12.Object;
    var16 = var17.defineProperty;
    var15 = {};
    var0 = true;
    var15.value = var0;
    var0 = '__esModule';
    var0 = var16.bind(var17)(var2, var0, var15);
    var0 = 0;
    var16 = var14[var0];
    var15 = arg2;
    var0 = undefined;
    var15 = var15.bind(var0)(var16);
    var _closure1_slot2 = var15;
    var15 = 1;
    var15 = var14[var15];
    var15 = var13.bind(var0)(var15);
    var16 = var15.useLayoutEffect;
    var _closure1_slot3 = var16;
    var15 = var15.useState;
    var _closure1_slot4 = var15;
    var15 = 2;
    var15 = var14[var15];
    var15 = var13.bind(var0)(var15);
    var15 = var15.ME;
    var _closure1_slot5 = var15;
    var16 = var12.Set;
    var12 = var16.prototype;
    var15 = Object.create(var12, {
        constructor: {
            value: var16
        }
    });
    var20 = ['friends', 'sidebar', 'message-requests', 'modal'];
    var21 = var15;
    var12 = new var21[var16](var20, var19);
    var12 = var12 instanceof Object ? var12 : var15;
    var _closure1_slot6 = var12;
    var12 = 9;
    var12 = var14[var12];
    var14 = var13.bind(var0)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx';
    var12 = var13.bind(var14)(var12);
    var12 = function(arg0) { // Original name: navigateToChannel, environment: var1
        _fun35166: for (var _fun35166_ip = 0;;) switch (_fun35166_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.channelId;
                var14 = var0.guildId;
                var4 = var0.messageId;
                var2 = var0.replaceChannelAndFixRoot;
                var5 = undefined;
                if (!(var2 === var5)) {
                    _fun35166_ip = 32;
                    continue _fun35166
                }
            case 30:
                var2 = false;
            case 32:
                var6 = var0.openChannel;
                if (!(var6 === var5)) {
                    _fun35166_ip = 44;
                    continue _fun35166
                }
            case 42:
                var6 = false;
            case 44:
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 3;
                var0 = var7[var0];
                var3 = var3.bind(var5)(var0);
                var0 = var3.getRootNavigationRef;
                var3 = var0.bind(var3)();
                var16 = null;
                if (!(var16 != var3)) {
                    _fun35166_ip = 969;
                    continue _fun35166
                }
            case 86:
                var0 = var3.isReady;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun35166_ip = 969;
                    continue _fun35166
                }
            case 102:
                var0 = false;
                if (!(var0 !== var2)) {
                    _fun35166_ip = 115;
                    continue _fun35166
                }
            case 108:
                if (var6) {
                    _fun35166_ip = 115;
                    continue _fun35166
                }
            case 111:
                var6 = true;
                return var6;
            case 115:
                var6 = var3.getRootState;
                var8 = var6.bind(var3)();
                if (var2) {
                    _fun35166_ip = 314;
                    continue _fun35166
                }
            case 131:
                var6 = _closure1_slot11;
                var2 = var3.getCurrentRoute;
                var2 = var2.bind(var3)();
                var2 = var6.bind(var5)(var2);
                if (!(var16 != var2)) {
                    _fun35166_ip = 169;
                    continue _fun35166
                }
            case 154:
                var6 = var2.params;
                var6 = var6.channelId;
                if (!(var6 !== var12)) {
                    _fun35166_ip = 225;
                    continue _fun35166
                }
            case 169:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 4;
                var6 = var9[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.v4;
                var9 = var6.bind(var7)();
                var6 = global;
                var6 = var6.HermesInternal;
                var7 = var6.concat;
                var6 = 'channel-';
                var10 = var7.bind(var6)(var9);
                _fun35166_ip = 230;
                continue _fun35166;
            case 225:
                var10 = var2.key;
            case 230:
                var6 = var3.dispatch;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 5;
                var2 = var9[var2];
                var2 = var7.bind(var5)(var2);
                var9 = var2.CommonActions;
                var7 = var9.navigate;
                var2 = {};
                var11 = 'channel';
                var2.name = var11;
                var2.key = var10;
                var10 = {};
                var10.channelId = var12;
                var10.guildId = var14;
                var10.messageId = var4;
                var2.params = var10;
                var2 = var7.bind(var9)(var2);
                var2 = var6.bind(var3)(var2);
                var2 = true;
                return var2;
            case 314:
                var6 = _closure1_slot10;
                var2 = var8.routes;
                var7 = 0;
                var2 = var2[var7];
                var10 = var6.bind(var5)(var2);
                if (!(var16 != var10)) {
                    _fun35166_ip = 967;
                    continue _fun35166
                }
            case 342:
                var2 = var10.state;
                if (!(var16 != var2)) {
                    _fun35166_ip = 967;
                    continue _fun35166
                }
            case 354:
                var6 = _closure1_slot11;
                var2 = var10.state;
                var9 = var2.routes;
                var2 = var10.state;
                var2 = var2.index;
                var2 = var9[var2];
                var9 = var6.bind(var5)(var2);
                if (!(var16 == var9)) {
                    _fun35166_ip = 488;
                    continue _fun35166
                }
            case 392:
                var6 = {};
                var2 = 'channel';
                var6.name = var2;
                var2 = var12;
                if (!(var16 == var2)) {
                    _fun35166_ip = 463;
                    continue _fun35166
                }
            case 409:
                var13 = _closure1_slot0;
                var15 = _closure1_slot1;
                var11 = 4;
                var11 = var15[var11];
                var13 = var13.bind(var5)(var11);
                var11 = var13.v4;
                var15 = var11.bind(var13)();
                var11 = global;
                var11 = var11.HermesInternal;
                var13 = var11.concat;
                var11 = 'channel-';
                var2 = var13.bind(var11)(var15);
            case 463:
                var6.key = var2;
                var2 = {};
                var2.channelId = var12;
                var2.guildId = var14;
                var2.messageId = var4;
                var6.params = var2;
                _fun35166_ip = 526;
                continue _fun35166;
            case 488:
                var2 = {};
                var21 = var2;
                var20 = var9;
                var9 = copyDataProperties(var21, var20);
                var9 = {};
                var9.channelId = var12;
                var9.guildId = var14;
                var9.messageId = var4;
                var4 = 'params';
                var2[var4] = var9;
                var6 = var2;
            case 526:
                var4 = _closure1_slot7;
                var2 = var10.state;
                var2 = var2.routes;
                var11 = var4.bind(var5)(var2);
                var4 = var11.bind(var5)();
                var2 = var4.done;
                var9 = var4;
                var4 = null;
                if (var2) {
                    _fun35166_ip = 602;
                    continue _fun35166
                }
            case 563:
                var13 = _closure1_slot12;
                var2 = var9.value;
                var13 = var13.bind(var5)(var2);
                var4 = var13;
                if (!(var16 == var4)) {
                    _fun35166_ip = 602;
                    continue _fun35166
                }
            case 584:
                var15 = var11.bind(var5)();
                var2 = var15.done;
                var9 = var15;
                var4 = var13;
                if (!var2) {
                    _fun35166_ip = 563;
                    continue _fun35166
                }
            case 602:
                var2 = var16 == var4;
                var9 = undefined;
                if (var2) {
                    _fun35166_ip = 616;
                    continue _fun35166
                }
            case 611:
                var9 = var4.state;
            case 616:
                if (!(var16 != var4)) {
                    _fun35166_ip = 965;
                    continue _fun35166
                }
            case 623:
                if (!(var16 != var9)) {
                    _fun35166_ip = 965;
                    continue _fun35166
                }
            case 630:
                var2 = {};
                var21 = var2;
                var20 = var9;
                var11 = copyDataProperties(var21, var20);
                var20 = var9.routes;
                var11 = new Array(0);
                var21 = var11;
                var19 = 0;
                var9 = arraySpread(var21, var20, var19);
                var9 = 'routes';
                var2[var9] = var11;
                var11 = {};
                var21 = var11;
                var20 = var4;
                var4 = copyDataProperties(var21, var20);
                var4 = 'state';
                var11[var4] = var2;
                var4 = var2.index;
                if (!(var7 !== var4)) {
                    _fun35166_ip = 706;
                    continue _fun35166
                }
            case 700:
                var2.index = var7;
            case 706:
                var13 = _closure1_slot13;
                var4 = var2.routes;
                var4 = var4[var7];
                var13 = var13.bind(var5)(var4);
                var4 = var16 == var13;
                if (var4) {
                    _fun35166_ip = 786;
                    continue _fun35166
                }
            case 732:
                var17 = var13.params;
                var18 = var16 == var17;
                var15 = undefined;
                if (var18) {
                    _fun35166_ip = 752;
                    continue _fun35166
                }
            case 747:
                var15 = var17.guildId;
            case 752:
                var15 = var15 === var14;
                if (!var15) {
                    _fun35166_ip = 783;
                    continue _fun35166
                }
            case 759:
                var17 = var13.params;
                var18 = var16 == var17;
                var16 = undefined;
                if (var18) {
                    _fun35166_ip = 779;
                    continue _fun35166
                }
            case 774:
                var16 = var17.channelId;
            case 779:
                var15 = var16 === var12;
            case 783:
                var4 = var15;
            case 786:
                if (var4) {
                    _fun35166_ip = 835;
                    continue _fun35166
                }
            case 789:
                var4 = var2.routes;
                var2 = {};
                var21 = var2;
                var20 = var13;
                var13 = copyDataProperties(var21, var20);
                var13 = {};
                var13.guildId = var14;
                var13.channelId = var12;
                var13.drawerOpen = var0;
                var12 = 'params';
                var2[var12] = var13;
                var4[var7] = var2;
            case 835:
                var2 = {};
                var20 = var10.state;
                var21 = var2;
                var4 = copyDataProperties(var21, var20);
                var4 = new Array(2);
                var4[0] = var11;
                var4[1] = var6;
                var2[var9] = var4;
                var4 = 1;
                var6 = 'index';
                var2[var6] = var4;
                var10.state = var2;
                var2 = var3.dispatch;
                var4 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 5;
                var1 = var11[var1];
                var1 = var4.bind(var5)(var1);
                var5 = var1.CommonActions;
                var4 = var5.reset;
                var1 = {};
                var21 = var1;
                var20 = var8;
                var8 = copyDataProperties(var21, var20);
                var8 = new Array(1);
                var8[0] = var10;
                var1[var9] = var8;
                var1[var6] = var7;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var1 = true;
                return var1;
            case 965:
                return var0;
            case 967:
                return var0;
            case 969:
                var0 = false;
                return var0;
        }
    };
    var2.navigateToChannel = var12;
    var12 = function(arg0, arg1) { // Original name: navigateToMemberVerification, environment: var1
        _fun35167: for (var _fun35167_ip = 0;;) switch (_fun35167_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var2[var0];
                var6 = undefined;
                var1 = var1.bind(var6)(var0);
                var0 = var1.getRootNavigationRef;
                var3 = var0.bind(var1)();
                var0 = null;
                var1 = var0 == var3;
                if (var1) {
                    _fun35167_ip = 57;
                    continue _fun35167
                }
            case 44:
                var0 = var3.isReady;
                var0 = var0.bind(var3)();
                var1 = !var0;
            case 57:
                var0 = !var1;
                if (var1) {
                    _fun35167_ip = 168;
                    continue _fun35167
                }
            case 63:
                var2 = var3.navigate;
                var1 = {};
                var5 = 'member-verification';
                var1.name = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 4;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.v4;
                var6 = var4.bind(var5)();
                var4 = global;
                var4 = var4.HermesInternal;
                var5 = var4.concat;
                var4 = 'member-verification-';
                var4 = var5.bind(var4)(var6);
                var1.key = var4;
                var4 = {};
                var5 = arg0;
                var4.guildId = var5;
                var5 = arg1;
                var4.inviteCode = var5;
                var1.params = var4;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 168:
                return var0;
        }
    };
    var2.navigateToMemberVerification = var12;
    var12 = function(arg0) { // Original name: navigateToRootTab, environment: var1
        _fun35168: for (var _fun35168_ip = 0;;) switch (_fun35168_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.getRootNavigationRef;
                var9 = var1.bind(var2)();
                var4 = var5.screen;
                var2 = var5.resetRoot;
                var1 = var5.forceNavigate;
                var10 = null;
                if (!(var10 != var9)) {
                    _fun35168_ip = 416;
                    continue _fun35168
                }
            case 69:
                var6 = var9.isReady;
                var6 = var6.bind(var9)();
                if (!var6) {
                    _fun35168_ip = 416;
                    continue _fun35168
                }
            case 85:
                if (!(var10 != var4)) {
                    _fun35168_ip = 416;
                    continue _fun35168
                }
            case 92:
                if (var1) {
                    _fun35168_ip = 123;
                    continue _fun35168
                }
            case 95:
                var6 = var9.getCurrentRoute;
                var8 = var6.bind(var9)();
                var11 = var10 == var8;
                var6 = undefined;
                if (var11) {
                    _fun35168_ip = 119;
                    continue _fun35168
                }
            case 114:
                var6 = var8.name;
            case 119:
                var1 = var6 !== var4;
            case 123:
                var8 = 'guilds';
                if (!(var8 !== var4)) {
                    _fun35168_ip = 322;
                    continue _fun35168
                }
            case 134:
                var6 = 'messages';
                if (!(var6 !== var4)) {
                    _fun35168_ip = 282;
                    continue _fun35168
                }
            case 145:
                var6 = 'notifications';
                if (!(var6 !== var4)) {
                    _fun35168_ip = 248;
                    continue _fun35168
                }
            case 153:
                var11 = 'icymi';
                if (!(var11 === var4)) {
                    _fun35168_ip = 412;
                    continue _fun35168
                }
            case 164:
                if (!var1) {
                    _fun35168_ip = 412;
                    continue _fun35168
                }
            case 170:
                var13 = var9.navigate;
                var12 = {};
                var12.screen = var11;
                var11 = 'tabs';
                var11 = var13.bind(var9)(var11, var12);
                var12 = var5.icymiScreen;
                var _closure2_slot0 = var12;
                var10 = var10 != var12;
                if (!var10) {
                    _fun35168_ip = 222;
                    continue _fun35168
                }
            case 212:
                var11 = 'icymi-screen';
                var10 = var11 !== var12;
            case 222:
                if (!var10) {
                    _fun35168_ip = 412;
                    continue _fun35168
                }
            case 228:
                var10 = var9.dispatch;
                var7 = function() { // Environment: var7
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var3 = var0.CommonActions;
                    var2 = var3.navigate;
                    var1 = {};
                    var0 = 'icymi';
                    var1.screen = var0;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.screen = var4;
                    var1.params = var0;
                    var0 = 'tabs';
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var7 = var10.bind(var9)(var7);
                _fun35168_ip = 412;
                continue _fun35168;
            case 248:
                if (!var1) {
                    _fun35168_ip = 412;
                    continue _fun35168
                }
            case 254:
                var10 = var9.navigate;
                var7 = {};
                var7.screen = var6;
                var6 = 'tabs';
                var6 = var10.bind(var9)(var6, var7);
                _fun35168_ip = 412;
                continue _fun35168;
            case 282:
                if (!var1) {
                    _fun35168_ip = 412;
                    continue _fun35168
                }
            case 288:
                var7 = _closure1_slot9;
                var6 = {};
                var6.screen = var8;
                var8 = {};
                var10 = _closure1_slot5;
                var8.guildId = var10;
                var6.params = var8;
                var6 = var7.bind(var3)(var6, var2);
                _fun35168_ip = 412;
                continue _fun35168;
            case 322:
                var7 = var5.guildId;
                var6 = var5.channelId;
                if (var1) {
                    _fun35168_ip = 369;
                    continue _fun35168
                }
            case 335:
                var8 = var9.setParams;
                var1 = {};
                var1.guildId = var7;
                var1.channelId = var6;
                var10 = var5.drawerOpen;
                var1.drawerOpen = var10;
                var1 = var8.bind(var9)(var1);
                _fun35168_ip = 412;
                continue _fun35168;
            case 369:
                var1 = _closure1_slot9;
                var0 = {};
                var0.screen = var4;
                var4 = {};
                var4.guildId = var7;
                var4.channelId = var6;
                var5 = var5.drawerOpen;
                var4.drawerOpen = var5;
                var0.params = var4;
                var0 = var1.bind(var3)(var0, var2);
            case 412:
                var0 = true;
                return var0;
            case 416:
                var0 = false;
                return var0;
        }
    };
    var2.navigateToRootTab = var12;
    var12 = function() { // Original name: resetToAuthRoute, environment: var1
        _fun35170: for (var _fun35170_ip = 0;;) switch (_fun35170_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.getRootNavigationRef;
                var3 = var0.bind(var1)();
                var0 = null;
                var1 = var0 == var3;
                if (var1) {
                    _fun35170_ip = 57;
                    continue _fun35170
                }
            case 44:
                var0 = var3.isReady;
                var0 = var0.bind(var3)();
                var1 = !var0;
            case 57:
                var0 = !var1;
                if (var1) {
                    _fun35170_ip = 82;
                    continue _fun35170
                }
            case 63:
                var2 = var3.dispatch;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 5;
                    var0 = var5[var0];
                    var3 = undefined;
                    var0 = var4.bind(var3)(var0);
                    var2 = var0.CommonActions;
                    var1 = var2.reset;
                    var0 = 6;
                    var0 = var5[var0];
                    var3 = var4.bind(var3)(var0);
                    var0 = var3.getInitialAuthState;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 82:
                return var0;
        }
    };
    var2.resetToAuthRoute = var12;
    var12 = function() { // Original name: resetToPanelsUI, environment: var1
        _fun35172: for (var _fun35172_ip = 0;;) switch (_fun35172_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.getRootNavigationRef;
                var2 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var2)) {
                    _fun35172_ip = 294;
                    continue _fun35172
                }
            case 44:
                var1 = var2.isReady;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun35172_ip = 294;
                    continue _fun35172
                }
            case 60:
                var1 = var2.getRootState;
                var7 = var1.bind(var2)();
                var14 = var7.routes;
                var8 = new Array(0);
                var13 = 0;
                var15 = var8;
                var1 = arraySpread(var15, var14, var13);
                var1 = var8.shift;
                var1 = var1.bind(var8)();
                var9 = var8.unshift;
                var4 = {};
                var1 = 'panels';
                var4.name = var1;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var0 = var6[var1];
                var10 = var3.bind(var5)(var0);
                var0 = var10.v4;
                var12 = var0.bind(var10)();
                var0 = global;
                var10 = var0.HermesInternal;
                var11 = var10.concat;
                var10 = 'panels-';
                var10 = var11.bind(var10)(var12);
                var4.key = var10;
                var4 = var9.bind(var8)(var4);
                var4 = {};
                var15 = var4;
                var14 = var7;
                var7 = copyDataProperties(var15, var14);
                var7 = 'routes';
                var4[var7] = var8;
                var1 = var6[var1];
                var7 = var3.bind(var5)(var1);
                var1 = var7.v4;
                var7 = var1.bind(var7)();
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'stack-';
                var1 = var1.bind(var0)(var7);
                var0 = 'key';
                var4[var0] = var1;
                var1 = var2.dispatch;
                var0 = 5;
                var0 = var6[var0];
                var0 = var3.bind(var5)(var0);
                var3 = var0.CommonActions;
                var0 = var3.reset;
                var0 = var0.bind(var3)(var4);
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
            case 294:
                var0 = false;
                return var0;
        }
    };
    var2.resetToPanelsUI = var12;
    var12 = function(arg0) { // Original name: pushModal, environment: var1
        _fun35173: for (var _fun35173_ip = 0;;) switch (_fun35173_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.key;
                var7 = null;
                var1 = Object.create(var7);
                var0 = 0;
                var1.key = var0;
                var12 = {};
                var11 = var2;
                var10 = var1;
                var4 = copyDataProperties(var12, var11, var10);
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var2[var0];
                var8 = undefined;
                var1 = var1.bind(var8)(var0);
                var0 = var1.getRootNavigationRef;
                var3 = var0.bind(var1)();
                var0 = var7 == var3;
                if (var0) {
                    _fun35173_ip = 86;
                    continue _fun35173
                }
            case 73:
                var1 = var3.isReady;
                var1 = var1.bind(var3)();
                var0 = !var1;
            case 86:
                if (var0) {
                    _fun35173_ip = 119;
                    continue _fun35173
                }
            case 89:
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 7;
                var1 = var9[var1];
                var2 = var2.bind(var8)(var1);
                var1 = var2.isTTIAutomationEnabled;
                var0 = var1.bind(var2)();
            case 119:
                var0 = !var0;
                if (!var0) {
                    _fun35173_ip = 241;
                    continue _fun35173
                }
            case 125:
                var2 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 8;
                var1 = var9[var1];
                var2 = var2.bind(var8)(var1);
                var1 = var2.dismissKeyboard;
                var1 = var1.bind(var2)();
                var2 = var3.navigate;
                var1 = {};
                var9 = 'modal';
                var1.name = var9;
                if (!(var7 == var5)) {
                    _fun35173_ip = 225;
                    continue _fun35173
                }
            case 175:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 4;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var8 = var6.v4;
                var6 = global;
                var6 = var6.HermesInternal;
                var7 = var6.concat;
                var6 = 'modal-';
                var5 = var7.bind(var6)(var8);
            case 225:
                var1.key = var5;
                var1.params = var4;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 241:
                return var0;
        }
    };
    var2.pushModal = var12;
    var12 = function(arg0, arg1) { // Original name: popModal, environment: var1
        _fun35174: for (var _fun35174_ip = 0;;) switch (_fun35174_ip) {
            case 0:
                var14 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var14;
                var _closure2_slot1 = var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var8 = undefined;
                var3 = var3.bind(var8)(var1);
                var1 = var3.getRootNavigationRef;
                var6 = var1.bind(var3)();
                var1 = null;
                if (!(var1 != var6)) {
                    _fun35174_ip = 659;
                    continue _fun35174
                }
            case 60:
                var3 = var6.isReady;
                var3 = var3.bind(var6)();
                if (!var3) {
                    _fun35174_ip = 659;
                    continue _fun35174
                }
            case 76:
                var3 = var6.getRootState;
                var9 = var3.bind(var6)();
                var13 = var9.routes;
                var7 = var9.index;
                var5 = -1;
                var10 = var7 > var5;
                var3 = undefined;
                var11 = var13;
                if (!var10) {
                    _fun35174_ip = 442;
                    continue _fun35174
                }
            case 118:
                var12 = _closure1_slot15;
                var10 = var13[var7];
                var12 = var12.bind(var8)(var10);
                var10 = var7;
                if (!(var1 != var14)) {
                    _fun35174_ip = 159;
                    continue _fun35174
                }
            case 138:
                var16 = var1 == var12;
                var15 = undefined;
                if (var16) {
                    _fun35174_ip = 152;
                    continue _fun35174
                }
            case 147:
                var15 = var12.key;
            case 152:
                var3 = var12;
                if (!(var15 !== var14)) {
                    _fun35174_ip = 182;
                    continue _fun35174
                }
            case 159:
                if (!(var1 == var14)) {
                    _fun35174_ip = 167;
                    continue _fun35174
                }
            case 163:
                if (!(var1 == var12)) {
                    _fun35174_ip = 182;
                    continue _fun35174
                }
            case 167:
                var7 = var10 - 1;
                var11 = var13;
                if (var7 > var5) {
                    _fun35174_ip = 118;
                    continue _fun35174
                }
            case 177:
                _fun35174_ip = 442;
                continue _fun35174;
            case 182:
                var7 = var13;
                if (!(var1 != var2)) {
                    _fun35174_ip = 408;
                    continue _fun35174
                }
            case 192:
                var3 = new Array(0);
                var17 = 0;
                var19 = var3;
                var18 = var13;
                var5 = arraySpread(var19, var18, var17);
                var5 = {};
                var19 = var5;
                var18 = var12;
                var13 = copyDataProperties(var19, var18);
                var13 = {};
                var18 = var12.params;
                var19 = var13;
                var14 = copyDataProperties(var19, var18);
                var14 = {};
                var15 = var12.params;
                var18 = var15.modal;
                var19 = var14;
                var15 = copyDataProperties(var19, var18);
                var15 = {};
                var12 = var12.params;
                var12 = var12.modal;
                var18 = var12.callbacks;
                var19 = var15;
                var12 = copyDataProperties(var19, var18);
                var12 = 'onExited';
                var15[var12] = var2;
                var12 = 'callbacks';
                var14[var12] = var15;
                var12 = 'modal';
                var13[var12] = var14;
                var12 = 'params';
                var5[var12] = var13;
                var3[var10] = var5;
                var12 = var6.dispatch;
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var5 = 5;
                var5 = var14[var5];
                var5 = var13.bind(var8)(var5);
                var14 = var5.CommonActions;
                var13 = var14.reset;
                var5 = {};
                var19 = var5;
                var18 = var9;
                var15 = copyDataProperties(var19, var18);
                var15 = 'routes';
                var5[var15] = var3;
                var16 = var9.index;
                var15 = 'index';
                var5[var15] = var16;
                var5 = var13.bind(var14)(var5);
                var5 = var12.bind(var6)(var5);
                var7 = var3;
            case 408:
                var3 = new Array(0);
                var17 = 0;
                var19 = var3;
                var18 = var7;
                var5 = arraySpread(var19, var18, var17);
                var7 = var3.splice;
                var5 = 1;
                var5 = var7.bind(var3)(var10, var5);
                var11 = var3;
            case 442:
                var3 = var9.routes;
                if (!(var11 !== var3)) {
                    _fun35174_ip = 613;
                    continue _fun35174
                }
            case 455:
                if (!(var1 != var2)) {
                    _fun35174_ip = 499;
                    continue _fun35174
                }
            case 459:
                var3 = global;
                var5 = var3.Promise;
                var3 = var5.resolve;
                var7 = var3.bind(var5)();
                var5 = var7.then;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot19;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = var5.bind(var7)(var3);
                var3 = true;
                _fun35174_ip = 657;
                continue _fun35174;
            case 499:
                var5 = var6.dispatch;
                var7 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 5;
                var4 = var10[var4];
                var4 = var7.bind(var8)(var4);
                var8 = var4.CommonActions;
                var7 = var8.reset;
                var4 = {};
                var19 = var4;
                var18 = var9;
                var10 = copyDataProperties(var19, var18);
                var10 = 'routes';
                var4[var10] = var11;
                var10 = global;
                var12 = var10.Math;
                var11 = var12.max;
                var10 = var9.index;
                var9 = 1;
                var10 = var10 - var9;
                var9 = 0;
                var10 = var11.bind(var12)(var10, var9);
                var9 = 'index';
                var4[var9] = var10;
                var4 = var7.bind(var8)(var4);
                var4 = var5.bind(var6)(var4);
                var3 = true;
                _fun35174_ip = 657;
                continue _fun35174;
            case 613:
                var5 = var1 != var2;
                var3 = false;
                if (!var5) {
                    _fun35174_ip = 657;
                    continue _fun35174
                }
            case 622:
                var5 = global;
                var6 = var5.Promise;
                var5 = var6.resolve;
                var7 = var5.bind(var6)();
                var6 = var7.then;
                var5 = function() { // Environment: var0
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var3 = false;
            case 657:
                return var3;
            case 659:
                if (!(var1 != var2)) {
                    _fun35174_ip = 696;
                    continue _fun35174
                }
            case 663:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var2 = var1.bind(var2)();
                var1 = var2.then;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 696:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot19 = var12;
    var2.popModal = var12;
    var12 = function(arg0) { // Original name: popModalsAboveKey, environment: var1
        _fun35178: for (var _fun35178_ip = 0;;) switch (_fun35178_ip) {
            case 0:
                var11 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.getRootNavigationRef;
                var2 = var1.bind(var2)();
                var10 = null;
                if (!(var10 != var2)) {
                    _fun35178_ip = 295;
                    continue _fun35178
                }
            case 47:
                var1 = var2.isReady;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun35178_ip = 295;
                    continue _fun35178
                }
            case 63:
                var1 = _closure1_slot17;
                var1 = var1.bind(var4)();
                if (!(var1 !== var11)) {
                    _fun35178_ip = 291;
                    continue _fun35178
                }
            case 78:
                var1 = var2.getRootState;
                var5 = var1.bind(var2)();
                var8 = var5.routes;
                var1 = var8.length;
                var7 = 0;
                var3 = var7 < var1;
                var1 = -1;
                var9 = 0;
                var6 = var1;
                if (!var3) {
                    _fun35178_ip = 171;
                    continue _fun35178
                }
            case 119:
                var12 = _closure1_slot15;
                var3 = var8[var9];
                var12 = var12.bind(var4)(var3);
                var13 = var10 == var12;
                var3 = undefined;
                if (var13) {
                    _fun35178_ip = 146;
                    continue _fun35178
                }
            case 141:
                var3 = var12.key;
            case 146:
                var6 = var9;
                if (!(var3 !== var11)) {
                    _fun35178_ip = 171;
                    continue _fun35178
                }
            case 153:
                var9 = var9 + 1;
                var3 = var8.length;
                var3 = var9 < var3;
                var6 = var1;
                if (var3) {
                    _fun35178_ip = 119;
                    continue _fun35178
                }
            case 171:
                if (!(var1 !== var6)) {
                    _fun35178_ip = 287;
                    continue _fun35178
                }
            case 175:
                var3 = var8.length;
                var1 = 1;
                var3 = var3 - var1;
                if (!(var6 !== var3)) {
                    _fun35178_ip = 287;
                    continue _fun35178
                }
            case 191:
                var3 = var8.slice;
                var1 = var6 + var1;
                var7 = var3.bind(var8)(var7, var1);
                var1 = var2.dispatch;
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 5;
                var0 = var8[var0];
                var0 = var3.bind(var4)(var0);
                var4 = var0.CommonActions;
                var3 = var4.reset;
                var0 = {};
                var15 = var0;
                var14 = var5;
                var5 = copyDataProperties(var15, var14);
                var5 = 'routes';
                var0[var5] = var7;
                var5 = 'index';
                var0[var5] = var6;
                var0 = var3.bind(var4)(var0);
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
            case 287:
                var0 = false;
                return var0;
            case 291:
                var0 = false;
                return var0;
            case 295:
                var0 = false;
                return var0;
        }
    };
    var2.popModalsAboveKey = var12;
    var12 = function() { // Original name: popAllModals, environment: var1
        _fun35179: for (var _fun35179_ip = 0;;) switch (_fun35179_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.getRootNavigationRef;
                var3 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var3)) {
                    _fun35179_ip = 263;
                    continue _fun35179
                }
            case 44:
                var0 = var3.isReady;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun35179_ip = 263;
                    continue _fun35179
                }
            case 60:
                var0 = var3.getRootState;
                var7 = var0.bind(var3)();
                var0 = var7.routes;
                var6 = new Array(0);
                var2 = _closure1_slot7;
                var8 = var2.bind(var5)(var0);
                var4 = var8.bind(var5)();
                var2 = var4.done;
                if (var2) {
                    _fun35179_ip = 153;
                    continue _fun35179
                }
            case 101:
                var9 = var4.value;
                var11 = _closure1_slot6;
                var10 = var11.has;
                var2 = var9.name;
                var2 = var10.bind(var11)(var2);
                if (var2) {
                    _fun35179_ip = 138;
                    continue _fun35179
                }
            case 128:
                var2 = var6.push;
                var2 = var2.bind(var6)(var9);
            case 138:
                var9 = var8.bind(var5)();
                var2 = var9.done;
                var4 = var9;
                if (!var2) {
                    _fun35179_ip = 101;
                    continue _fun35179
                }
            case 153:
                var2 = var0.length;
                var0 = var6.length;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun35179_ip = 261;
                    continue _fun35179
                }
            case 170:
                var2 = var3.dispatch;
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 5;
                var1 = var8[var1];
                var1 = var4.bind(var5)(var1);
                var5 = var1.CommonActions;
                var4 = var5.reset;
                var1 = {};
                var13 = var1;
                var12 = var7;
                var7 = copyDataProperties(var13, var12);
                var7 = 'routes';
                var1[var7] = var6;
                var7 = var6.length;
                var6 = 1;
                var7 = var7 - var6;
                var6 = 'index';
                var1[var6] = var7;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 261:
                return var0;
            case 263:
                var0 = false;
                return var0;
        }
    };
    var2.popAllModals = var12;
    var12 = function() { // Original name: getSelectedGuildFromRoute, environment: var1
        _fun35180: for (var _fun35180_ip = 0;;) switch (_fun35180_ip) {
            case 0:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.getRootNavigationRef;
                var5 = var0.bind(var1)();
                var3 = null;
                var1 = var3 == var5;
                var0 = undefined;
                if (var1) {
                    _fun35180_ip = 56;
                    continue _fun35180
                }
            case 46:
                var1 = var5.getRootState;
                var0 = var1.bind(var5)();
            case 56:
                if (!(var3 != var0)) {
                    _fun35180_ip = 162;
                    continue _fun35180
                }
            case 60:
                var1 = _closure1_slot10;
                var5 = var0.routes;
                var0 = var0.index;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                if (!(var3 != var0)) {
                    _fun35180_ip = 162;
                    continue _fun35180
                }
            case 88:
                var1 = var0.state;
                if (!(var3 != var1)) {
                    _fun35180_ip = 162;
                    continue _fun35180
                }
            case 97:
                var5 = _closure1_slot11;
                var6 = var1.routes;
                var0 = var1.index;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                if (!(var3 == var0)) {
                    _fun35180_ip = 235;
                    continue _fun35180
                }
            case 125:
                var5 = _closure1_slot12;
                var6 = var1.routes;
                var1 = var1.index;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                if (!(var3 != var1)) {
                    _fun35180_ip = 162;
                    continue _fun35180
                }
            case 153:
                var1 = var1.state;
                if (!(var3 == var1)) {
                    _fun35180_ip = 164;
                    continue _fun35180
                }
            case 162:
                return var4;
            case 164:
                var2 = _closure1_slot13;
                var5 = var1.routes;
                var6 = var1.index;
                var7 = var3 != var6;
                var1 = -1;
                if (!var7) {
                    _fun35180_ip = 195;
                    continue _fun35180
                }
            case 192:
                var1 = var6;
            case 195:
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var5 = var3 == var2;
                var1 = undefined;
                if (var5) {
                    _fun35180_ip = 233;
                    continue _fun35180
                }
            case 213:
                var2 = var2.params;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun35180_ip = 233;
                    continue _fun35180
                }
            case 228:
                var1 = var2.guildId;
            case 233:
                return var1;
            case 235:
                var0 = var0.params;
                var0 = var0.guildId;
                return var0;
        }
    };
    var2.getSelectedGuildFromRoute = var12;
    var12 = function() { // Original name: getSelectedChannelFromRoute, environment: var1
        _fun35181: for (var _fun35181_ip = 0;;) switch (_fun35181_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var0 = var1[var0];
                var1 = undefined;
                var3 = var3.bind(var1)(var0);
                var0 = var3.getRootNavigationRef;
                var5 = var0.bind(var3)();
                var3 = null;
                if (!(var3 != var5)) {
                    _fun35181_ip = 86;
                    continue _fun35181
                }
            case 41:
                var0 = var3 == var5;
                var4 = undefined;
                if (var0) {
                    _fun35181_ip = 60;
                    continue _fun35181
                }
            case 50:
                var0 = var5.getCurrentRoute;
                var4 = var0.bind(var5)();
            case 60:
                var0 = _closure1_slot11;
                var0 = var0.bind(var1)(var4);
                if (!(var3 == var0)) {
                    _fun35181_ip = 110;
                    continue _fun35181
                }
            case 73:
                var2 = _closure1_slot13;
                var2 = var2.bind(var1)(var4);
                if (!(var3 == var2)) {
                    _fun35181_ip = 88;
                    continue _fun35181
                }
            case 86:
                return var1;
            case 88:
                var2 = var2.params;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun35181_ip = 108;
                    continue _fun35181
                }
            case 103:
                var1 = var2.channelId;
            case 108:
                return var1;
            case 110:
                var0 = var0.params;
                var0 = var0.channelId;
                return var0;
        }
    };
    var2.getSelectedChannelFromRoute = var12;
    var12 = function(arg0, arg1) { // Original name: navigateToNewGroupDM, environment: var1
        _fun35182: for (var _fun35182_ip = 0;;) switch (_fun35182_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.getRootNavigationRef;
                var4 = var0.bind(var1)();
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun35182_ip = 97;
                    continue _fun35182
                }
            case 44:
                var3 = var4.navigate;
                var2 = {};
                var1 = 'gdm';
                var2.screen = var1;
                var1 = {};
                var5 = arg0;
                var1.channelId = var5;
                var5 = arg1;
                var1.locationPage = var5;
                var2.params = var1;
                var1 = 'friends';
                var1 = var3.bind(var4)(var1, var2);
                var0 = true;
            case 97:
                return var0;
        }
    };
    var2.navigateToNewGroupDM = var12;
    var12 = function(arg0, arg1) { // Original name: navigateToCreateThread, environment: var1
        _fun35183: for (var _fun35183_ip = 0;;) switch (_fun35183_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.getRootNavigationRef;
                var4 = var0.bind(var1)();
                var1 = null;
                var0 = var1 != var4;
                if (!var0) {
                    _fun35183_ip = 108;
                    continue _fun35183
                }
            case 44:
                var2 = var1 == var4;
                var1 = true;
                var0 = true;
                if (var2) {
                    _fun35183_ip = 108;
                    continue _fun35183
                }
            case 55:
                var3 = var4.navigate;
                var2 = {
                    'name': 'channel',
                    'key': 'new-thread'
                };
                var5 = {};
                var6 = arg0;
                var5.guildId = var6;
                var6 = arg1;
                var5.channelId = var6;
                var5.showCreateThread = var1;
                var2.params = var5;
                var2 = var3.bind(var4)(var2);
                var0 = true;
            case 108:
                return var0;
        }
    };
    var2.navigateToCreateThread = var12;
    var12 = function(arg0) { // Original name: navigateToContextMenuCommands, environment: var1
        _fun35184: for (var _fun35184_ip = 0;;) switch (_fun35184_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.getRootNavigationRef;
                var4 = var0.bind(var1)();
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun35184_ip = 83;
                    continue _fun35184
                }
            case 44:
                var3 = var4.navigate;
                var2 = {};
                var1 = 'root';
                var2.screen = var1;
                var1 = arg0;
                var2.params = var1;
                var1 = 'context-menu-commands';
                var1 = var3.bind(var4)(var1, var2);
                var0 = true;
            case 83:
                return var0;
        }
    };
    var2.navigateToContextMenuCommands = var12;
    var12 = function(arg0) { // Original name: popScreens, environment: var1
        _fun35185: for (var _fun35185_ip = 0;;) switch (_fun35185_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.getRootNavigationRef;
                var3 = var0.bind(var2)();
                var _closure2_slot1 = var3;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun35185_ip = 74;
                    continue _fun35185
                }
            case 57:
                var2 = var3.dispatch;
                var1 = function() { // Environment: var1
                    _fun35186: for (var _fun35186_ip = 0;;) switch (_fun35186_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = var1.getRootState;
                            var3 = var0.bind(var1)();
                            var7 = var3.routes;
                            var4 = new Array(0);
                            var1 = 0;
                            var8 = var4;
                            var6 = 0;
                            var0 = arraySpread(var8, var7, var6);
                            var0 = _closure2_slot0;
                            if (!(var0 > var1)) {
                                _fun35186_ip = 71;
                                continue _fun35186
                            }
                        case 46:
                            var0 = var4.pop;
                            var0 = var0.bind(var4)();
                            var0 = _closure2_slot0;
                            var0 = var0 - 1;
                            _closure2_slot0 = var0;
                            if (var0 > var1) {
                                _fun35186_ip = 46;
                                continue _fun35186
                            }
                        case 71:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.CommonActions;
                            var1 = var2.reset;
                            var0 = {};
                            var8 = var0;
                            var7 = var3;
                            var3 = copyDataProperties(var8, var7);
                            var3 = 'routes';
                            var0[var3] = var4;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 74:
                return var0;
        }
    };
    var2.popScreens = var12;
    var2.coerceMainRoute = var11;
    var2.coerceChannelRoute = var10;
    var10 = function(arg0) { // Original name: coerceSidebarRoute, environment: var1
        _fun35187: for (var _fun35187_ip = 0;;) switch (_fun35187_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun35187_ip = 24;
                    continue _fun35187
                }
            case 9:
                var2 = var0.name;
                var1 = 'sidebar';
                if (!(var1 !== var2)) {
                    _fun35187_ip = 28;
                    continue _fun35187
                }
            case 24:
                var1 = undefined;
                return var1;
            case 28:
                return var0;
        }
    };
    var2.coerceSidebarRoute = var10;
    var2.coerceTabsRoute = var9;
    var2.coerceGuildsRoute = var8;
    var8 = function(arg0) { // Original name: coerceMessagesRoute, environment: var1
        _fun35188: for (var _fun35188_ip = 0;;) switch (_fun35188_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun35188_ip = 22;
                    continue _fun35188
                }
            case 9:
                var2 = var0.name;
                var1 = 'messages';
                if (!(var1 !== var2)) {
                    _fun35188_ip = 26;
                    continue _fun35188
                }
            case 22:
                var1 = undefined;
                return var1;
            case 26:
                return var0;
        }
    };
    var2.coerceMessagesRoute = var8;
    var2.coerceICYMIRoute = var7;
    var2.coerceModalRoute = var6;
    var2.isModalOpen = var5;
    var5 = function(arg0) { // Original name: useIsModalOpen, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = function() { // Environment: var1
            var2 = _closure1_slot16;
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var6 = var3.bind(var4)(var0);
        var3 = _closure1_slot2;
        var0 = 2;
        var6 = var3.bind(var4)(var6, var0);
        var0 = 0;
        var0 = var6[var0];
        var3 = 1;
        var3 = var6[var3];
        var _closure2_slot1 = var3;
        var3 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun35191: for (var _fun35191_ip = 0;;) switch (_fun35191_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun35191_ip = 43;
                        continue _fun35191
                    }
                case 41:
                    return var0;
                case 43:
                    var2 = var3.addListener;
                    var1 = 'state';
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot1;
                        var3 = _closure1_slot16;
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useIsModalOpen = var5;
    var2.getOpenModalKey = var4;
    var4 = function() { // Original name: useOpenModalKey, environment: var1
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = function() { // Environment: var1
            var1 = _closure1_slot17;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot2;
        var0 = 2;
        var5 = var3.bind(var4)(var5, var0);
        var0 = 0;
        var0 = var5[var0];
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot0 = var3;
        var3 = _closure1_slot3;
        var2 = function() { // Environment: var1
            _fun35195: for (var _fun35195_ip = 0;;) switch (_fun35195_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun35195_ip = 43;
                        continue _fun35195
                    }
                case 41:
                    return var0;
                case 43:
                    var2 = var3.addListener;
                    var1 = 'state';
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot0;
                        var1 = _closure1_slot17;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useOpenModalKey = var4;
    var2.getCurrentNavigationRouteName = var3;
    var3 = function() { // Original name: useCurrentNavigationRouteName, environment: var1
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = function() { // Environment: var1
            var1 = _closure1_slot18;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot2;
        var0 = 2;
        var5 = var3.bind(var4)(var5, var0);
        var0 = 0;
        var0 = var5[var0];
        var3 = 1;
        var3 = var5[var3];
        var _closure2_slot0 = var3;
        var3 = _closure1_slot3;
        var2 = function() { // Environment: var1
            _fun35199: for (var _fun35199_ip = 0;;) switch (_fun35199_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun35199_ip = 43;
                        continue _fun35199
                    }
                case 41:
                    return var0;
                case 43:
                    var2 = var3.addListener;
                    var1 = 'state';
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot0;
                        var1 = _closure1_slot18;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useCurrentNavigationRouteName = var3;
    var3 = function() { // Original name: getCurrentRouteParents, environment: var1
        _fun35201: for (var _fun35201_ip = 0;;) switch (_fun35201_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var0 = var2[var0];
                var7 = undefined;
                var1 = var1.bind(var7)(var0);
                var0 = var1.getRootNavigationRef;
                var3 = var0.bind(var1)();
                var1 = null;
                if (!(var1 != var3)) {
                    _fun35201_ip = 242;
                    continue _fun35201
                }
            case 44:
                var0 = var3.isReady;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun35201_ip = 242;
                    continue _fun35201
                }
            case 60:
                var0 = new Array(0);
                var2 = var3.getRootState;
                var2 = var2.bind(var3)();
                var4 = var1 == var2;
                var6 = undefined;
                var3 = undefined;
                if (var4) {
                    _fun35201_ip = 120;
                    continue _fun35201
                }
            case 85:
                var8 = var2.routes;
                var5 = var2.index;
                var9 = var1 != var5;
                var4 = 0;
                if (!var9) {
                    _fun35201_ip = 108;
                    continue _fun35201
                }
            case 105:
                var4 = var5;
            case 108:
                var4 = var8[var4];
                var3 = var4.state;
                var6 = var5;
            case 120:
                var4 = var2;
                var2 = var4;
                if (!(var1 != var3)) {
                    _fun35201_ip = 226;
                    continue _fun35201
                }
            case 130:
                var3 = var0.push;
                var3 = var3.bind(var0)(var4);
                var8 = var4.routes;
                var9 = var4.index;
                var10 = var1 != var9;
                var3 = 0;
                if (!var10) {
                    _fun35201_ip = 163;
                    continue _fun35201
                }
            case 160:
                var3 = var9;
            case 163:
                var3 = var8[var3];
                var8 = var3.state;
                var9 = var1 == var8;
                var3 = undefined;
                if (var9) {
                    _fun35201_ip = 216;
                    continue _fun35201
                }
            case 181:
                var11 = var8.routes;
                var10 = var8.index;
                var12 = var1 != var10;
                var9 = 0;
                if (!var12) {
                    _fun35201_ip = 204;
                    continue _fun35201
                }
            case 201:
                var9 = var10;
            case 204:
                var9 = var11[var9];
                var3 = var9.state;
                var6 = var10;
            case 216:
                var4 = var8;
                var2 = var4;
                if (var1 != var3) {
                    _fun35201_ip = 130;
                    continue _fun35201
                }
            case 226:
                if (!(var1 != var2)) {
                    _fun35201_ip = 240;
                    continue _fun35201
                }
            case 230:
                var1 = var0.push;
                var1 = var1.bind(var0)(var2);
            case 240:
                return var0;
            case 242:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.getCurrentRouteParents = var3;
    var3 = function(arg0) { // Original name: getTabsRouteIfActive, environment: var1
        _fun35202: for (var _fun35202_ip = 0;;) switch (_fun35202_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot10;
                var2 = var0.routes;
                var0 = var0.index;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var3.bind(var2)(var0);
                var0 = null;
                var5 = var0 == var4;
                var3 = undefined;
                if (var5) {
                    _fun35202_ip = 48;
                    continue _fun35202
                }
            case 43:
                var3 = var4.state;
            case 48:
                if (!(var0 == var3)) {
                    _fun35202_ip = 54;
                    continue _fun35202
                }
            case 52:
                return var2;
            case 54:
                var1 = _closure1_slot12;
                var3 = var4.state;
                var3 = var3.routes;
                var4 = var4.state;
                var4 = var4.index;
                var5 = var0 != var4;
                var0 = 0;
                if (!var5) {
                    _fun35202_ip = 91;
                    continue _fun35202
                }
            case 88:
                var0 = var4;
            case 91:
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getTabsRouteIfActive = var3;
    var3 = function(arg0) { // Original name: getICYMIRouteIfActive, environment: var1
        _fun35203: for (var _fun35203_ip = 0;;) switch (_fun35203_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot10;
                var4 = null;
                var5 = var4 == var7;
                var2 = undefined;
                var0 = undefined;
                if (var5) {
                    _fun35203_ip = 47;
                    continue _fun35203
                }
            case 23:
                var6 = var7.routes;
                var8 = var4 == var7;
                var5 = undefined;
                if (var8) {
                    _fun35203_ip = 43;
                    continue _fun35203
                }
            case 38:
                var5 = var7.index;
            case 43:
                var0 = var6[var5];
            case 47:
                var0 = var3.bind(var2)(var0);
                var5 = var4 == var0;
                var3 = undefined;
                if (var5) {
                    _fun35203_ip = 66;
                    continue _fun35203
                }
            case 61:
                var3 = var0.state;
            case 66:
                if (!(var4 != var3)) {
                    _fun35203_ip = 114;
                    continue _fun35203
                }
            case 70:
                var3 = _closure1_slot12;
                var0 = var0.state;
                var5 = var0.routes;
                var0 = 0;
                var0 = var5[var0];
                var0 = var3.bind(var2)(var0);
                var5 = var4 == var0;
                var3 = undefined;
                if (var5) {
                    _fun35203_ip = 110;
                    continue _fun35203
                }
            case 105:
                var3 = var0.state;
            case 110:
                if (!(var4 == var3)) {
                    _fun35203_ip = 116;
                    continue _fun35203
                }
            case 114:
                return var2;
            case 116:
                var1 = _closure1_slot14;
                var3 = var0.state;
                var3 = var3.routes;
                var0 = var0.state;
                var0 = var0.index;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getICYMIRouteIfActive = var3;
    var1 = function(arg0) { // Original name: setHomeDrawerState, environment: var1
        _fun35204: for (var _fun35204_ip = 0;;) switch (_fun35204_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getRootNavigationRef;
                var3 = var1.bind(var3)();
                var4 = null;
                if (!(var4 != var3)) {
                    _fun35204_ip = 104;
                    continue _fun35204
                }
            case 41:
                var1 = var4 == var3;
                var5 = undefined;
                if (var1) {
                    _fun35204_ip = 60;
                    continue _fun35204
                }
            case 50:
                var1 = var3.getCurrentRoute;
                var5 = var1.bind(var3)();
            case 60:
                var1 = var4 != var5;
                if (!var1) {
                    _fun35204_ip = 80;
                    continue _fun35204
                }
            case 67:
                var2 = _closure1_slot13;
                var2 = var2.bind(var0)(var5);
                var1 = var4 != var2;
            case 80:
                if (!var1) {
                    _fun35204_ip = 104;
                    continue _fun35204
                }
            case 83:
                var2 = var3.setParams;
                var1 = {};
                var4 = arg0;
                var1.drawerOpen = var4;
                var1 = var2.bind(var3)(var1);
            case 104:
                return var0;
        }
    };
    var2.setHomeDrawerState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 3879, 491, 1470, 3880, 3885, 3677, 2]);