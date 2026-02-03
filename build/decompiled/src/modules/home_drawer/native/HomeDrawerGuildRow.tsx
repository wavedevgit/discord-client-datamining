// modules/home_drawer/native/HomeDrawerGuildRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun101064: for (var _fun101064_ip = 0;;) switch (_fun101064_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun101064_ip = 46;
                    continue _fun101064
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun101064_ip = 55;
                    continue _fun101064
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun101064_ip = 345;
                    continue _fun101064
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun101064_ip = 323;
                    continue _fun101064
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun101064_ip = 283;
                    continue _fun101064
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun101064_ip = 270;
                    continue _fun101064
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
                    _fun101064_ip = 163;
                    continue _fun101064
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun101064_ip = 179;
                    continue _fun101064
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun101064_ip = 249;
                    continue _fun101064
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun101064_ip = 249;
                    continue _fun101064
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun101064_ip = 234;
                    continue _fun101064
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun101064_ip = 247;
                    continue _fun101064
                }
            case 234:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun101064_ip = 265;
                continue _fun101064;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun101064_ip = 283;
                continue _fun101064;
            case 270:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun101064_ip = 323;
                    continue _fun101064
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
                    _fun101064_ip = 330;
                    continue _fun101064
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun101065: for (var _fun101065_ip = 0;;) switch (_fun101065_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun101065_ip = 56;
                                continue _fun101065
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
                            _fun101065_ip = 67;
                            continue _fun101065;
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
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun101066: for (var _fun101066_ip = 0;;) switch (_fun101066_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun101066_ip = 23;
                    continue _fun101066
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun101066_ip = 33;
                    continue _fun101066
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
                    _fun101066_ip = 70;
                    continue _fun101066
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun101066_ip = 55;
                    continue _fun101066
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun101067: for (var _fun101067_ip = 0;;) switch (_fun101067_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.voiceUsers;
                var1 = var1.guildId;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot20;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var1 = var0.slice;
                var7 = 0;
                var5 = 6;
                var12 = var1.bind(var0)(var7, var5);
                var1 = global;
                var3 = var1.Math;
                var2 = var3.max;
                var1 = var0.length;
                var1 = var1 - var5;
                var14 = var2.bind(var3)(var7, var1);
                var1 = var0.length;
                var0 = null;
                if (!(var7 !== var1)) {
                    _fun101067_ip = 314;
                    continue _fun101067
                }
            case 91:
                var3 = _closure1_slot17;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 4
                };
                var1.style = var5;
                var13 = _closure1_slot16;
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 18;
                var5 = var15[var5];
                var5 = var9.bind(var4)(var5);
                var9 = var5.VoiceNormalIcon;
                var5 = {};
                var15 = 'xs';
                var5.size = var15;
                var9 = var13.bind(var4)(var9, var5);
                var5 = new Array(3);
                var5[0] = var9;
                var9 = var12.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 19;
                    var1 = var7[var5];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.AvatarSizes;
                    var5 = var5.XXSMALL;
                    var1.size = var5;
                    var1.user = var0;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = false;
                    var1.animate = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var8 = var9.bind(var12)(var8);
                var5[1] = var8;
                var7 = var14 > var7;
                var6 = null;
                if (!var7) {
                    _fun101067_ip = 300;
                    continue _fun101067
                }
            case 203:
                var9 = _closure1_slot16;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = var11.overflowCircle;
                var7.style = var11;
                var12 = _closure1_slot17;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 20;
                var10 = var13[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-strong'
                };
                var13 = ['+'];
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 300:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 314:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun101069: for (var _fun101069_ip = 0;;) switch (_fun101069_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.voiceUsers;
                var1 = var1.guildId;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot20;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var1 = var0.slice;
                var7 = 0;
                var5 = 6;
                var12 = var1.bind(var0)(var7, var5);
                var1 = global;
                var3 = var1.Math;
                var2 = var3.max;
                var1 = var0.length;
                var1 = var1 - var5;
                var14 = var2.bind(var3)(var7, var1);
                var1 = var0.length;
                var0 = null;
                if (!(var7 !== var1)) {
                    _fun101069_ip = 300;
                    continue _fun101069
                }
            case 91:
                var3 = _closure1_slot17;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 4
                };
                var1.style = var5;
                var13 = _closure1_slot16;
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 21;
                var5 = var15[var5];
                var9 = var9.bind(var4)(var5);
                var5 = {};
                var9 = var13.bind(var4)(var9, var5);
                var5 = new Array(3);
                var5[0] = var9;
                var9 = var12.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 19;
                    var1 = var7[var5];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.AvatarSizes;
                    var5 = var5.XXSMALL;
                    var1.size = var5;
                    var1.user = var0;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var8 = var9.bind(var12)(var8);
                var5[1] = var8;
                var7 = var14 > var7;
                var6 = null;
                if (!var7) {
                    _fun101069_ip = 286;
                    continue _fun101069
                }
            case 189:
                var9 = _closure1_slot16;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = var11.overflowCircle;
                var7.style = var11;
                var12 = _closure1_slot17;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 20;
                var10 = var13[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-strong'
                };
                var13 = ['+'];
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 286:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 300:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun101071: for (var _fun101071_ip = 0;;) switch (_fun101071_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.activityId;
                var0 = var1.voiceUsers;
                var1 = var1.guildId;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot20;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var1 = var0.slice;
                var7 = 0;
                var6 = 6;
                var12 = var1.bind(var0)(var7, var6);
                var1 = global;
                var5 = var1.Math;
                var2 = var5.max;
                var1 = var0.length;
                var1 = var1 - var6;
                var14 = var2.bind(var5)(var7, var1);
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 22;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useGetOrFetchApplication;
                var3 = var1.bind(var2)(var3);
                var6 = null;
                var1 = var6 == var3;
                var17 = undefined;
                if (var1) {
                    _fun101071_ip = 139;
                    continue _fun101071
                }
            case 125:
                var2 = var3.getIconSource;
                var1 = 16;
                var17 = var2.bind(var3)(var1);
            case 139:
                var1 = var0.length;
                var0 = null;
                if (!(var7 !== var1)) {
                    _fun101071_ip = 443;
                    continue _fun101071
                }
            case 153:
                var3 = _closure1_slot17;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'gap': 4
                };
                var1.style = var5;
                var13 = _closure1_slot16;
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 23;
                var5 = var15[var5];
                var5 = var9.bind(var4)(var5);
                var9 = var5.GameControllerIcon;
                var5 = {};
                var15 = 'xs';
                var5.size = var15;
                var9 = var13.bind(var4)(var9, var5);
                var5 = new Array(4);
                var5[0] = var9;
                var13 = var6 != var17;
                var9 = null;
                if (!var13) {
                    _fun101071_ip = 298;
                    continue _fun101071
                }
            case 244:
                var16 = _closure1_slot16;
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                var13 = 24;
                var13 = var18[var13];
                var15 = var15.bind(var4)(var13);
                var13 = {};
                var13.source = var17;
                var17 = {
                    'width': 20,
                    'height': 20,
                    'borderRadius': 4
                };
                var13.style = var17;
                var9 = var16.bind(var4)(var15, var13);
            case 298:
                var5[1] = var9;
                var9 = var12.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 19;
                    var1 = var7[var5];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.AvatarSizes;
                    var5 = var5.XXSMALL;
                    var1.size = var5;
                    var1.user = var0;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var8 = var9.bind(var12)(var8);
                var5[2] = var8;
                var7 = var14 > var7;
                var6 = null;
                if (!var7) {
                    _fun101071_ip = 429;
                    continue _fun101071
                }
            case 332:
                var9 = _closure1_slot16;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = var11.overflowCircle;
                var7.style = var11;
                var12 = _closure1_slot17;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 20;
                var10 = var13[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-strong'
                };
                var13 = ['+'];
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 429:
                var5[3] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 443:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        _fun101073: for (var _fun101073_ip = 0;;) switch (_fun101073_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.data;
                var11 = var0.transitionState;
                var _closure2_slot0 = var11;
                var2 = var0.onCleanup;
                var _closure2_slot1 = var2;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var10 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 25;
                var4 = var0[var6];
                var7 = var10.bind(var3)(var4);
                var4 = var7.useSharedValue;
                var9 = 26;
                var0 = var0[var9];
                var0 = var10.bind(var3)(var0);
                var0 = var0.TransitionStates;
                var10 = var0.ENTERED;
                var0 = 0;
                if (!(var11 === var10)) {
                    _fun101073_ip = 105;
                    continue _fun101073
                }
            case 99:
                var0 = -30;
            case 105:
                var13 = var4.bind(var7)(var0);
                _closure2_slot2 = var13;
                var10 = _closure1_slot0;
                var0 = _closure1_slot2;
                var4 = var0[var6];
                var12 = var10.bind(var3)(var4);
                var7 = var12.useSharedValue;
                var4 = 1;
                var12 = var7.bind(var12)(var4);
                _closure2_slot3 = var12;
                var14 = _closure1_slot3;
                var7 = var14.useEffect;
                var4 = new Array(4);
                var4[0] = var11;
                var4[1] = var13;
                var4[2] = var12;
                var4[3] = var2;
                var2 = function() { // Environment: var1
                    _fun101074: for (var _fun101074_ip = 0;;) switch (_fun101074_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 26;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.TransitionStates;
                            var3 = var3.YEETED;
                            if (!(var4 !== var3)) {
                                _fun101074_ip = 145;
                                continue _fun101074
                            }
                        case 48:
                            var8 = _closure2_slot2;
                            var5 = var8.set;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 27;
                            var4 = var7[var3];
                            var11 = var6.bind(var0)(var4);
                            var10 = var11.withSpring;
                            var9 = _closure1_slot19;
                            var4 = 0;
                            var4 = var10.bind(var11)(var4, var9);
                            var4 = var5.bind(var8)(var4);
                            var5 = _closure2_slot3;
                            var4 = var5.set;
                            var3 = var7[var3];
                            var8 = var6.bind(var0)(var3);
                            var7 = var8.withSpring;
                            var6 = _closure1_slot19;
                            var3 = 1;
                            var3 = var7.bind(var8)(var3, var6);
                            var3 = var4.bind(var5)(var3);
                            _fun101074_ip = 320;
                            continue _fun101074;
                        case 145:
                            var8 = _closure2_slot2;
                            var7 = var8.set;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 27;
                            var3 = var6[var4];
                            var13 = var5.bind(var0)(var3);
                            var12 = var13.withSpring;
                            var16 = _closure1_slot18;
                            var10 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 25;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure2_slot1;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var3 = {};
                            var9 = 25;
                            var9 = var6[var9];
                            var9 = var5.bind(var0)(var9);
                            var9 = var9.runOnJS;
                            var3.runOnJS = var9;
                            var9 = _closure2_slot1;
                            var3.onCleanup = var9;
                            var10.__closure = var3;
                            var3 = 3794826797478.0;
                            var10.__workletHash = var3;
                            var3 = _closure1_slot21;
                            var10.__initData = var3;
                            var17 = 30;
                            var15 = 'respect-motion-settings';
                            var18 = var13;
                            var14 = var10;
                            var3 = var18[var12](var17, var16, var15, var14, var13);
                            var3 = var7.bind(var8)(var3);
                            var3 = _closure2_slot3;
                            var2 = var3.set;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.withSpring;
                            var4 = _closure1_slot18;
                            var1 = 0;
                            var1 = var5.bind(var6)(var1, var4);
                            var1 = var2.bind(var3)(var1);
                        case 320:
                            return var0;
                    }
                };
                var2 = var7.bind(var14)(var2, var4);
                var2 = var0[var6];
                var4 = var10.bind(var3)(var2);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun101076: for (var _fun101076_ip = 0;;) switch (_fun101076_ip) {
                        case 0:
                            var0 = {};
                            var3 = {};
                            var4 = _closure2_slot2;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var3.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var0.transform = var2;
                            var3 = _closure2_slot3;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var0.opacity = var2;
                            var3 = _closure2_slot0;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 26;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var4.bind(var1)(var2);
                            var1 = var1.TransitionStates;
                            var2 = var1.YEETED;
                            var1 = 'relative';
                            if (!(var3 === var2)) {
                                _fun101076_ip = 107;
                                continue _fun101076
                            }
                        case 103:
                            var1 = 'absolute';
                        case 107:
                            var0.position = var1;
                            return var0;
                    }
                };
                var7 = {};
                var7.translateY = var13;
                var7.opacity = var12;
                var7.transitionState = var11;
                var9 = var0[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.TransitionStates;
                var7.TransitionStates = var9;
                var1.__closure = var7;
                var7 = 3615235715331.0;
                var1.__workletHash = var7;
                var7 = _closure1_slot22;
                var1.__initData = var7;
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot16;
                var1 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var0.style = var4;
                var6 = var8.type;
                var4 = 'voice';
                if (!(var4 !== var6)) {
                    _fun101073_ip = 442;
                    continue _fun101073
                }
            case 327:
                var6 = var8.type;
                var4 = 'streaming';
                if (!(var4 !== var6)) {
                    _fun101073_ip = 404;
                    continue _fun101073
                }
            case 340:
                var7 = var8.type;
                var6 = 'activity';
                var4 = null;
                if (!(var6 === var7)) {
                    _fun101073_ip = 402;
                    continue _fun101073
                }
            case 355:
                var9 = _closure1_slot16;
                var7 = _closure1_slot27;
                var6 = {};
                var10 = var8.activityId;
                var6.activityId = var10;
                var10 = var8.users;
                var6.voiceUsers = var10;
                var10 = var8.guildId;
                var6.guildId = var10;
                var4 = var9.bind(var3)(var7, var6);
            case 402:
                _fun101073_ip = 440;
                continue _fun101073;
            case 404:
                var9 = _closure1_slot16;
                var7 = _closure1_slot26;
                var6 = {};
                var10 = var8.users;
                var6.voiceUsers = var10;
                var10 = var8.guildId;
                var6.guildId = var10;
                var4 = var9.bind(var3)(var7, var6);
            case 440:
                _fun101073_ip = 478;
                continue _fun101073;
            case 442:
                var7 = _closure1_slot16;
                var6 = _closure1_slot25;
                var5 = {};
                var9 = var8.users;
                var5.voiceUsers = var9;
                var8 = var8.guildId;
                var5.guildId = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 478:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun101077: for (var _fun101077_ip = 0;;) switch (_fun101077_ip) {
            case 0:
                var2 = arg0;
                var11 = var2.voiceUsers;
                var _closure2_slot0 = var11;
                var10 = var2.streamingUsers;
                var _closure2_slot1 = var10;
                var8 = var2.activityUsers;
                var _closure2_slot2 = var8;
                var1 = var2.activityId;
                var _closure2_slot3 = var1;
                var9 = var2.guildId;
                var _closure2_slot4 = var9;
                var2 = _closure1_slot20;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var2 = _closure1_slot13;
                var2 = var2.bind(var4)();
                var12 = var2.currentType;
                var _closure2_slot5 = var12;
                var7 = _closure1_slot3;
                var3 = var7.useMemo;
                var2 = new Array(6);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var10;
                var2[3] = var9;
                var2[4] = var8;
                var2[5] = var1;
                var1 = function() { // Environment: var0
                    _fun101078: for (var _fun101078_ip = 0;;) switch (_fun101078_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            var3 = 0;
                            var1 = var0 > var3;
                            var0 = _closure2_slot1;
                            var0 = var0.length;
                            var2 = var0 > var3;
                            var0 = _closure2_slot2;
                            var0 = var0.length;
                            var3 = var0 > var3;
                            var0 = null;
                            if (!var1) {
                                _fun101078_ip = 221;
                                continue _fun101078
                            }
                        case 52:
                            if (!var1) {
                                _fun101078_ip = 93;
                                continue _fun101078
                            }
                        case 55:
                            if (var2) {
                                _fun101078_ip = 93;
                                continue _fun101078
                            }
                        case 58:
                            if (var3) {
                                _fun101078_ip = 93;
                                continue _fun101078
                            }
                        case 61:
                            var1 = {};
                            var5 = 'voice';
                            var1.type = var5;
                            var5 = _closure2_slot0;
                            var1.users = var5;
                            var5 = _closure2_slot4;
                            var1.guildId = var5;
                            _fun101078_ip = 218;
                            continue _fun101078;
                        case 93:
                            var6 = _closure2_slot5;
                            var5 = 'activity';
                            if (!(var5 === var6)) {
                                _fun101078_ip = 108;
                                continue _fun101078
                            }
                        case 105:
                            if (var3) {
                                _fun101078_ip = 180;
                                continue _fun101078
                            }
                        case 108:
                            var3 = _closure2_slot5;
                            if (!(var5 === var3)) {
                                _fun101078_ip = 119;
                                continue _fun101078
                            }
                        case 116:
                            if (var2) {
                                _fun101078_ip = 148;
                                continue _fun101078
                            }
                        case 119:
                            var2 = {};
                            var3 = 'voice';
                            var2.type = var3;
                            var3 = _closure2_slot0;
                            var2.users = var3;
                            var3 = _closure2_slot4;
                            var2.guildId = var3;
                            _fun101078_ip = 178;
                            continue _fun101078;
                        case 148:
                            var3 = {};
                            var6 = 'streaming';
                            var3.type = var6;
                            var6 = _closure2_slot1;
                            var3.users = var6;
                            var6 = _closure2_slot4;
                            var3.guildId = var6;
                            var2 = var3;
                        case 178:
                            _fun101078_ip = 215;
                            continue _fun101078;
                        case 180:
                            var3 = {};
                            var3.type = var5;
                            var5 = _closure2_slot2;
                            var3.users = var5;
                            var5 = _closure2_slot3;
                            var3.activityId = var5;
                            var4 = _closure2_slot4;
                            var3.guildId = var4;
                            var2 = var3;
                        case 215:
                            var1 = var2;
                        case 218:
                            var0 = var1;
                        case 221:
                            return var0;
                    }
                };
                var1 = var3.bind(var7)(var1, var2);
                var _closure2_slot6 = var1;
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var3 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                    var4 = _closure1_slot16;
                    var3 = _closure1_slot28;
                    var2 = {};
                    var0 = arg1;
                    var2.data = var0;
                    var0 = arg2;
                    var2.transitionState = var0;
                    var0 = arg3;
                    var2.onCleanup = var0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var2 = new Array(0);
                var8 = var7.bind(var8)(var3, var2);
                var10 = _closure1_slot3;
                var7 = var10.useMemo;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = function() { // Environment: var0
                    _fun101080: for (var _fun101080_ip = 0;;) switch (_fun101080_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun101080_ip = 19;
                                continue _fun101080
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun101080_ip = 34;
                            continue _fun101080;
                        case 19:
                            var2 = _closure2_slot6;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 34:
                            return var0;
                    }
                };
                var10 = var7.bind(var10)(var2, var3);
                var7 = _closure1_slot3;
                var3 = var7.useCallback;
                var2 = new Array(1);
                var2[0] = var9;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var4 = var0.type;
                    var3 = _closure2_slot4;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '';
                    var0 = '-';
                    var0 = var2.bind(var1)(var4, var0, var3);
                    return var0;
                };
                var9 = var3.bind(var7)(var0, var2);
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun101077_ip = 316;
                    continue _fun101077
                }
            case 234:
                var3 = _closure1_slot16;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var6.subtitleContainer;
                var1.style = var6;
                var7 = _closure1_slot16;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 26;
                var5 = var11[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.TransitionGroup;
                var5 = {};
                var5.items = var10;
                var5.getItemKey = var9;
                var5.renderItem = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 316:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var12 = var0.guild;
        var _closure2_slot0 = var12;
        var4 = var12.id;
        var _closure2_slot1 = var4;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 15;
        var5 = var7[var2];
        var3 = undefined;
        var11 = var6.bind(var3)(var5);
        var10 = var11.useStateFromStoresArray;
        var5 = _closure1_slot6;
        var9 = new Array(1);
        var9[0] = var5;
        var8 = new Array(1);
        var8[0] = var4;
        var5 = function() { // Environment: var1
            var4 = _closure1_slot6;
            var3 = var4.getChannels;
            var2 = _closure2_slot1;
            var2 = var3.bind(var4)(var2);
            var1 = _closure1_slot7;
            var3 = var2[var1];
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.channel;
                var1 = var0.type;
                var0 = _closure1_slot14;
                var0 = var0.GUILD_VOICE;
                var0 = var1 === var0;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.channel;
                var0 = var0.id;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var10 = var10.bind(var11)(var9, var5, var8);
        var _closure2_slot2 = var10;
        var5 = var7[var2];
        var13 = var6.bind(var3)(var5);
        var11 = var13.useStateFromStores;
        var5 = _closure1_slot12;
        var9 = new Array(1);
        var9[0] = var5;
        var8 = new Array(1);
        var8[0] = var4;
        var5 = function() { // Environment: var1
            var2 = _closure1_slot12;
            var1 = var2.getVoiceStates;
            var0 = _closure2_slot1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var11 = var11.bind(var13)(var9, var5, var8);
        var _closure2_slot3 = var11;
        var5 = var7[var2];
        var14 = var6.bind(var3)(var5);
        var13 = var14.useStateFromStores;
        var5 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var5;
        var8 = new Array(1);
        var8[0] = var4;
        var5 = function() { // Environment: var1
            var2 = _closure1_slot5;
            var1 = var2.getEmbeddedActivitiesForGuild;
            var0 = _closure2_slot1;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var13.bind(var14)(var9, var5, var8);
        var _closure2_slot4 = var5;
        var13 = _closure1_slot3;
        var9 = var13.useMemo;
        var8 = new Array(1);
        var8[0] = var5;
        var5 = function() { // Environment: var1
            _fun101088: for (var _fun101088_ip = 0;;) switch (_fun101088_ip) {
                case 0:
                    var0 = global;
                    var1 = var0.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var24 = var2;
                    var1 = new var24[var1](var23);
                    var6 = var1 instanceof Object ? var1 : var2;
                    var2 = _closure1_slot23;
                    var1 = _closure2_slot4;
                    var10 = undefined;
                    var9 = var2.bind(var10)(var1);
                    var5 = var9.bind(var10)();
                    var2 = var5.done;
                    var4 = 0;
                    var3 = 1;
                    var1 = null;
                    var8 = var5;
                    var7 = undefined;
                    var5 = undefined;
                    if (var2) {
                        _fun101088_ip = 221;
                        continue _fun101088
                    }
                case 78:
                    var14 = var8.value;
                    var12 = _closure1_slot23;
                    var2 = var14.userIds;
                    var13 = var12.bind(var10)(var2);
                    var12 = var13.bind(var10)();
                    var2 = var12.done;
                    if (var2) {
                        _fun101088_ip = 203;
                        continue _fun101088
                    }
                case 110:
                    var15 = var12.value;
                    var18 = var6.set;
                    var17 = var14.applicationId;
                    var16 = var6.get;
                    var2 = var14.applicationId;
                    var16 = var16.bind(var6)(var2);
                    var19 = var16;
                    if (!(var1 == var16)) {
                        _fun101088_ip = 151;
                        continue _fun101088
                    }
                case 147:
                    var19 = new Array(0);
                case 151:
                    var2 = new Array(1);
                    var23 = var2;
                    var22 = var19;
                    var21 = 0;
                    var19 = arraySpread(var23, var22, var21);
                    var2[var19] = var15;
                    var19 = var19 + var3;
                    var2 = var18.bind(var6)(var17, var2);
                    var17 = var13.bind(var10)();
                    var2 = var17.done;
                    var12 = var17;
                    var7 = var16;
                    var5 = var15;
                    if (!var2) {
                        _fun101088_ip = 110;
                        continue _fun101088
                    }
                case 203:
                    var12 = var9.bind(var10)();
                    var2 = var12.done;
                    var8 = var12;
                    if (!var2) {
                        _fun101088_ip = 78;
                        continue _fun101088
                    }
                case 221:
                    var2 = var6.size;
                    if (!(var4 !== var2)) {
                        _fun101088_ip = 302;
                        continue _fun101088
                    }
                case 230:
                    var5 = var0.Array;
                    var2 = var5.from;
                    var0 = var6.entries;
                    var0 = var0.bind(var6)();
                    var5 = var2.bind(var5)(var0);
                    var2 = var5.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var0 = arg1;
                        var2 = 1;
                        var0 = var0[var2];
                        var1 = var0.length;
                        var0 = arg0;
                        var0 = var0[var2];
                        var0 = var0.length;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var0 = var2.bind(var5)(var0);
                    var2 = var0[var4];
                    var0 = {};
                    var4 = var2[var4];
                    var0.activityId = var4;
                    var2 = var2[var3];
                    var0.activityUsers = var2;
                    return var0;
                case 302:
                    var0 = {};
                    var0.activityId = var1;
                    var1 = new Array(0);
                    var0.activityUsers = var1;
                    return var0;
            }
        };
        var8 = var9.bind(var13)(var5, var8);
        var5 = var8.activityId;
        var13 = var8.activityUsers;
        var _closure2_slot5 = var13;
        var2 = var7[var2];
        var8 = var6.bind(var3)(var2);
        var7 = var8.useStateFromStoresArray;
        var2 = _closure1_slot10;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() { // Environment: var1
            var1 = _closure1_slot10;
            var0 = var1.getBlockedOrIgnoredIDs;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = var7.bind(var8)(var6, var2);
        var _closure2_slot6 = var2;
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var6 = new Array(4);
        var6[0] = var10;
        var6[1] = var11;
        var9 = var12.afkChannelId;
        var6[2] = var9;
        var6[3] = var2;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 28;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.flatMap;
            var1 = _closure2_slot2;
            var0 = function(arg0) { // Environment: var0
                _fun101092: for (var _fun101092_ip = 0;;) switch (_fun101092_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure2_slot0;
                        var1 = var1.afkChannelId;
                        if (!(var2 !== var1)) {
                            _fun101092_ip = 100;
                            continue _fun101092
                        }
                    case 20:
                        var1 = _closure2_slot3;
                        var3 = var1[var2];
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun101092_ip = 38;
                            continue _fun101092
                        }
                    case 34:
                        var3 = new Array(0);
                    case 38:
                        var2 = var3.map;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.user;
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var1 = var2.filterOutBlockedOrIgnoredUsers;
                        var0 = _closure2_slot6;
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 100:
                        var0 = new Array(0);
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var8 = var7.bind(var8)(var2, var6);
        var9 = _closure1_slot3;
        var7 = var9.useMemo;
        var6 = new Array(3);
        var6[0] = var10;
        var6[1] = var11;
        var2 = var12.afkChannelId;
        var6[2] = var2;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 28;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.flatMap;
            var1 = _closure2_slot2;
            var0 = function(arg0) { // Environment: var0
                _fun101095: for (var _fun101095_ip = 0;;) switch (_fun101095_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure2_slot0;
                        var3 = var3.afkChannelId;
                        if (!(var2 !== var3)) {
                            _fun101095_ip = 76;
                            continue _fun101095
                        }
                    case 22:
                        var1 = _closure2_slot3;
                        var3 = var1[var2];
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun101095_ip = 40;
                            continue _fun101095
                        }
                    case 36:
                        var3 = new Array(0);
                    case 40:
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.voiceState;
                            var0 = var0.selfStream;
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.user;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        _fun101095_ip = 80;
                        continue _fun101095;
                    case 76:
                        var0 = new Array(0);
                    case 80:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var7 = var7.bind(var9)(var2, var6);
        var9 = _closure1_slot3;
        var6 = var9.useMemo;
        var2 = new Array(4);
        var2[0] = var13;
        var12 = var12.afkChannelId;
        var2[1] = var12;
        var2[2] = var11;
        var2[3] = var10;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 28;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.flatMap;
            var1 = _closure2_slot2;
            var0 = function(arg0) { // Environment: var0
                _fun101099: for (var _fun101099_ip = 0;;) switch (_fun101099_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure2_slot0;
                        var3 = var3.afkChannelId;
                        if (!(var2 !== var3)) {
                            _fun101099_ip = 76;
                            continue _fun101099
                        }
                    case 22:
                        var1 = _closure2_slot3;
                        var3 = var1[var2];
                        var1 = null;
                        if (!(var1 == var3)) {
                            _fun101099_ip = 40;
                            continue _fun101099
                        }
                    case 36:
                        var3 = new Array(0);
                    case 40:
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.user;
                            var2 = _closure2_slot5;
                            var1 = var2.includes;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.user;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        _fun101099_ip = 80;
                        continue _fun101099;
                    case 76:
                        var0 = new Array(0);
                    case 80:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var6 = var6.bind(var9)(var1, var2);
        var2 = _closure1_slot16;
        var1 = _closure1_slot29;
        var0 = {};
        var0.voiceUsers = var8;
        var0.streamingUsers = var7;
        var0.activityUsers = var6;
        var0.activityId = var5;
        var0.guildId = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun101102: for (var _fun101102_ip = 0;;) switch (_fun101102_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.guild;
                var _closure2_slot0 = var8;
                var6 = var1.disableSubtitle;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 15;
                var4 = var9[var2];
                var3 = undefined;
                var11 = var1.bind(var3)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.hasUnread;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var10.bind(var11)(var7, var4);
                var _closure2_slot1 = var11;
                var2 = var9[var2];
                var10 = var1.bind(var3)(var2);
                var7 = var10.useStateFromStores;
                var2 = _closure1_slot11;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getMuteConfig;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var7.bind(var10)(var4, var2);
                var _closure2_slot2 = var2;
                var10 = _closure1_slot3;
                var7 = var10.useMemo;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun101105: for (var _fun101105_ip = 0;;) switch (_fun101105_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun101105_ip = 126;
                                continue _fun101105
                            }
                        case 13:
                            var0 = {};
                            var3 = _closure2_slot2;
                            var3 = var3.end_time;
                            var3 = var2 == var3;
                            if (var3) {
                                _fun101105_ip = 100;
                                continue _fun101105
                            }
                        case 32:
                            var4 = global;
                            var7 = var4.Date;
                            var5 = _closure2_slot2;
                            var8 = var5.end_time;
                            var6 = var7.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var9 = var6;
                            var5 = new var9[var7](var8, var7);
                            var5 = var5 instanceof Object ? var5 : var6;
                            var4 = var4.Date;
                            var6 = var4.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var9 = var6;
                            var4 = new var9[var4](var8);
                            var4 = var4 instanceof Object ? var4 : var6;
                            var3 = var5 > var4;
                        case 100:
                            var0.isMuted = var3;
                            var1 = _closure2_slot2;
                            var1 = var1.end_time;
                            var1 = var2 != var1;
                            var0.isTemporary = var1;
                            _fun101105_ip = 140;
                            continue _fun101105;
                        case 126:
                            var0 = {
                                'isMuted': false,
                                'isTemporary': false
                            };
                        case 140:
                            return var0;
                    }
                };
                var4 = var7.bind(var10)(var2, var4);
                var _closure2_slot3 = var4;
                var10 = _closure1_slot3;
                var7 = var10.useMemo;
                var12 = var8.name;
                var2 = new Array(3);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var4;
                var0 = function() { // Environment: var0
                    _fun101106: for (var _fun101106_ip = 0;;) switch (_fun101106_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var0 = var0.isMuted;
                            if (var0) {
                                _fun101106_ip = 25;
                                continue _fun101106
                            }
                        case 19:
                            var7 = _closure1_slot15;
                            _fun101106_ip = 91;
                            continue _fun101106;
                        case 25:
                            var0 = _closure2_slot3;
                            var0 = var0.isTemporary;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            if (var0) {
                                _fun101106_ip = 68;
                                continue _fun101106
                            }
                        case 46:
                            var0 = 31;
                            var1 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var1);
                            var0 = var0.BellSlashIcon;
                            _fun101106_ip = 88;
                            continue _fun101106;
                        case 68:
                            var1 = 30;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var0 = var1.BellZIcon;
                        case 88:
                            var7 = var0;
                        case 91:
                            var3 = _closure1_slot17;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var0 = {
                                'flexDirection': 'row',
                                'alignItems': 'center',
                                'gap': 4
                            };
                            var1.style = var0;
                            var8 = _closure1_slot16;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 20;
                            var4 = var4[var0];
                            var0 = undefined;
                            var4 = var6.bind(var0)(var4);
                            var6 = var4.Text;
                            var4 = {
                                'variant': 'text-md/semibold',
                                'style': null,
                                'lineClamp': 1
                            };
                            var10 = {};
                            var11 = 1;
                            var10.flexShrink = var11;
                            var4.style = var10;
                            var11 = _closure2_slot1;
                            var10 = 'text-muted';
                            if (!var11) {
                                _fun101106_ip = 199;
                                continue _fun101106
                            }
                        case 193:
                            var10 = 'mobile-text-heading-primary';
                        case 199:
                            var4.color = var10;
                            var9 = _closure2_slot0;
                            var9 = var9.name;
                            var4.children = var9;
                            var6 = var8.bind(var0)(var6, var4);
                            var4 = new Array(2);
                            var4[0] = var6;
                            var6 = _closure1_slot16;
                            var5 = {};
                            var8 = 'xs';
                            var5.size = var8;
                            var5 = var6.bind(var0)(var7, var5);
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var7 = var7.bind(var10)(var0, var2);
                var2 = _closure1_slot16;
                var0 = 32;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.HomeDrawerSharedItem;
                var0 = {};
                var0.title = var7;
                var9 = var4.isMuted;
                var4 = null;
                if (var9) {
                    _fun101102_ip = 263;
                    continue _fun101102
                }
            case 238:
                var4 = null;
                if (var6) {
                    _fun101102_ip = 263;
                    continue _fun101102
                }
            case 243:
                var7 = _closure1_slot16;
                var6 = _closure1_slot30;
                var5 = {};
                var5.guild = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 263:
                var0.subtitle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var6 = var5[var3];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot14 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot15 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = {
        'damping': 25,
        'stiffness': 200,
        'mass': 1,
        'overshootClamping': true,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot18 = var3;
    var3 = {
        'damping': 18,
        'stiffness': 120,
        'mass': 1,
        'overshootClamping': true,
        'restSpeedThreshold': 0.001,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot19 = var3;
    var3 = 13;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingVertical': 2,
        'paddingHorizontal': 4,
        'minWidth': 20,
        'backgroundColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 14;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGHEST;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.overflowCircle = var8;
    var8 = {
        'overflow': 'hidden',
        'height': 20
    };
    var3.subtitleContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = 'function HomeDrawerGuildRowTsx1(){const{runOnJS,onCleanup}=this.__closure;runOnJS(onCleanup)();}';
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = {};
    var6 = "function HomeDrawerGuildRowTsx2(){const{translateY,opacity,transitionState,TransitionStates}=this.__closure;return{transform:[{translateY:translateY.get()}],opacity:opacity.get(),position:transitionState===TransitionStates.YEETED?'absolute':'relative'};}";
    var3.code = var6;
    var _closure1_slot22 = var3;
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/home_drawer/native/HomeDrawerGuildRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101107: for (var _fun101107_ip = 0;;) switch (_fun101107_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var5 = var1.disableSubtitle;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 15;
                var6 = var3[var4];
                var4 = undefined;
                var8 = var2.bind(var4)(var6);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var7.bind(var8)(var6, var0);
                var0 = 16;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var7 = var0.MobileHomeDrawerExperiment;
                var2 = var7.useConfig;
                var0 = {};
                var8 = 'guild-row';
                var0.location = var8;
                var0 = var2.bind(var7)(var0);
                var7 = var0.enableHome;
                var2 = _closure1_slot1;
                var0 = 17;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var2 = var0.isChatBesideChannelList;
                var3 = null;
                var8 = var3 == var6;
                var0 = null;
                if (var8) {
                    _fun101107_ip = 194;
                    continue _fun101107
                }
            case 159:
                var0 = null;
                if (!var7) {
                    _fun101107_ip = 194;
                    continue _fun101107
                }
            case 164:
                var0 = null;
                if (var2) {
                    _fun101107_ip = 194;
                    continue _fun101107
                }
            case 169:
                var3 = _closure1_slot16;
                var2 = _closure1_slot31;
                var1 = {};
                var1.guild = var6;
                var1.disableSubtitle = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 194:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1371, 1671, 8638, 1410, 3100, 4303, 3526, 13123, 660, 483, 33, 1297, 671, 566, 3925, 3922, 4863, 5452, 3941, 8000, 6879, 5327, 4704, 3720, 4028, 4081, 22, 13166, 13173, 8768, 13154, 2]);