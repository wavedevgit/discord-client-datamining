// modules/guilds_bar/native/GuildsBarGuildFolder.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun100944: for (var _fun100944_ip = 0;;) switch (_fun100944_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun100944_ip = 46;
                    continue _fun100944
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun100944_ip = 55;
                    continue _fun100944
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun100944_ip = 345;
                    continue _fun100944
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun100944_ip = 323;
                    continue _fun100944
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun100944_ip = 283;
                    continue _fun100944
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun100944_ip = 270;
                    continue _fun100944
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
                    _fun100944_ip = 163;
                    continue _fun100944
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun100944_ip = 179;
                    continue _fun100944
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun100944_ip = 249;
                    continue _fun100944
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun100944_ip = 249;
                    continue _fun100944
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun100944_ip = 234;
                    continue _fun100944
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun100944_ip = 247;
                    continue _fun100944
                }
            case 234:
                var8 = _closure1_slot25;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun100944_ip = 265;
                continue _fun100944;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun100944_ip = 283;
                continue _fun100944;
            case 270:
                var6 = _closure1_slot25;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun100944_ip = 323;
                    continue _fun100944
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
                    _fun100944_ip = 330;
                    continue _fun100944
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun100945: for (var _fun100945_ip = 0;;) switch (_fun100945_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun100945_ip = 56;
                                continue _fun100945
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
                            _fun100945_ip = 67;
                            continue _fun100945;
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
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        _fun100946: for (var _fun100946_ip = 0;;) switch (_fun100946_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun100946_ip = 23;
                    continue _fun100946
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun100946_ip = 33;
                    continue _fun100946
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
                    _fun100946_ip = 70;
                    continue _fun100946
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun100946_ip = 55;
                    continue _fun100946
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun100947: for (var _fun100947_ip = 0;;) switch (_fun100947_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var3 = var0.position;
                var6 = var0.selected;
                var1 = _closure1_slot18;
                var4 = undefined;
                var11 = var1.bind(var4)();
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 11;
                var5 = var1[var5];
                var8 = var7.bind(var4)(var5);
                var7 = var8.useStateFromStores;
                var9 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var9;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var7.bind(var8)(var5, var2);
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun100947_ip = 141;
                    continue _fun100947
                }
            case 94:
                var2 = 1;
                if (!(var2 !== var3)) {
                    _fun100947_ip = 133;
                    continue _fun100947
                }
            case 101:
                var2 = 2;
                if (!(var2 !== var3)) {
                    _fun100947_ip = 125;
                    continue _fun100947
                }
            case 108:
                var2 = 3;
                var9 = undefined;
                if (!(var2 === var3)) {
                    _fun100947_ip = 147;
                    continue _fun100947
                }
            case 117:
                var9 = var11.guildPreview3;
                _fun100947_ip = 147;
                continue _fun100947;
            case 125:
                var9 = var11.guildPreview2;
                _fun100947_ip = 147;
                continue _fun100947;
            case 133:
                var9 = var11.guildPreview1;
                _fun100947_ip = 147;
                continue _fun100947;
            case 141:
                var9 = var11.guildPreview0;
            case 147:
                var3 = _closure1_slot16;
                var2 = _closure1_slot1;
                var7 = 12;
                var1 = var1[var7];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var10 = var11.guildPreviewIcon;
                var8 = new Array(3);
                var8[0] = var10;
                var10 = undefined;
                if (var6) {
                    _fun100947_ip = 194;
                    continue _fun100947
                }
            case 188:
                var10 = var11.guildPreviewIconUnselected;
            case 194:
                var8[1] = var10;
                var8[2] = var9;
                var1.style = var8;
                var1.guild = var5;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var5.bind(var4)(var0);
                var0 = var0.GuildIconSizes;
                var0 = var0.XXSMALL;
                var1.size = var0;
                var1.selected = var6;
                var0 = global;
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var0 = '';
                var0 = var5.bind(var0)(var6);
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0() {
        _fun100949: for (var _fun100949_ip = 0;;) switch (_fun100949_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var12 = var0.fromTop;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun100949_ip = 24;
                    continue _fun100949
                }
            case 22:
                var12 = false;
            case 24:
                var _closure2_slot0 = var12;
                var13 = var0.cleanUp;
                var _closure2_slot1 = var13;
                var11 = var0.state;
                var _closure2_slot2 = var11;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot18;
                var6 = var2.bind(var3)();
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var14 = 17;
                var5 = var2[var14];
                var7 = var8.bind(var3)(var5);
                var5 = var7.useSharedValue;
                var16 = 18;
                var2 = var2[var16];
                var2 = var8.bind(var3)(var2);
                var2 = var2.TransitionStates;
                var8 = var2.MOUNTED;
                var2 = 0;
                if (!(var11 === var8)) {
                    _fun100949_ip = 121;
                    continue _fun100949
                }
            case 118:
                var2 = 1;
            case 121:
                var10 = var5.bind(var7)(var2);
                _closure2_slot3 = var10;
                var15 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = var5[var14];
                var8 = var15.bind(var3)(var2);
                var7 = var8.useAnimatedStyle;
                var2 = function() {
                    _fun100950: for (var _fun100950_ip = 0;;) switch (_fun100950_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var9 = 15;
                            var2 = var1[var9];
                            var8 = undefined;
                            var11 = var4.bind(var8)(var2);
                            var10 = var11.withSpring;
                            var5 = _closure2_slot3;
                            var2 = var5.get;
                            var6 = var2.bind(var5)();
                            var16 = _closure1_slot15;
                            var2 = function arg0() {
                                _fun100951: for (var _fun100951_ip = 0;;) switch (_fun100951_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun100951_ip = 54;
                                            continue _fun100951
                                        }
                                    case 6:
                                        var2 = _closure2_slot2;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 18;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.TransitionStates;
                                        var1 = var1.YEETED;
                                        var0 = var2 === var1;
                                    case 54:
                                        if (!var0) {
                                            _fun100951_ip = 103;
                                            continue _fun100951
                                        }
                                    case 57:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 17;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot1;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 103:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var12 = {};
                            var13 = _closure2_slot2;
                            var12.state = var13;
                            var13 = 18;
                            var13 = var1[var13];
                            var13 = var4.bind(var8)(var13);
                            var13 = var13.TransitionStates;
                            var12.TransitionStates = var13;
                            var13 = 17;
                            var13 = var1[var13];
                            var13 = var4.bind(var8)(var13);
                            var13 = var13.runOnJS;
                            var12.runOnJS = var13;
                            var13 = _closure2_slot1;
                            var12.cleanUp = var13;
                            var2.__closure = var12;
                            var12 = 47605595424.0;
                            var2.__workletHash = var12;
                            var12 = _closure1_slot22;
                            var2.__initData = var12;
                            var18 = var11;
                            var17 = var6;
                            var15 = undefined;
                            var14 = var2;
                            var2 = var18[var10](var17, var16, var15, var14, var13);
                            var0.opacity = var2;
                            var2 = {};
                            var1 = var1[var9];
                            var10 = var4.bind(var8)(var1);
                            var5 = var10.withSpring;
                            var4 = _closure2_slot3;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var6 = 1;
                            var4 = 0;
                            if (!(var6 !== var1)) {
                                _fun100950_ip = 235;
                                continue _fun100950
                            }
                        case 213:
                            var1 = _closure2_slot0;
                            var11 = _closure1_slot12;
                            if (var1) {
                                _fun100950_ip = 229;
                                continue _fun100950
                            }
                        case 224:
                            var1 = var11;
                            _fun100950_ip = 232;
                            continue _fun100950;
                        case 229:
                            var1 = -var11;
                        case 232:
                            var4 = var1;
                        case 235:
                            var1 = _closure1_slot15;
                            var1 = var5.bind(var10)(var4, var1);
                            var2.translateY = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var9];
                            var5 = var5.bind(var8)(var4);
                            var4 = var5.withSpring;
                            var9 = _closure2_slot3;
                            var8 = var9.get;
                            var8 = var8.bind(var9)();
                            if (!(var6 !== var8)) {
                                _fun100950_ip = 329;
                                continue _fun100950
                            }
                        case 299:
                            var8 = _closure2_slot0;
                            var7 = 1.3;
                            if (!var8) {
                                _fun100950_ip = 326;
                                continue _fun100950
                            }
                        case 316:
                            var7 = 0.3;
                        case 326:
                            var6 = var7;
                        case 329:
                            var3 = _closure1_slot15;
                            var3 = var4.bind(var5)(var6, var3);
                            var2.scale = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var9 = {};
                var17 = 15;
                var17 = var5[var17];
                var17 = var15.bind(var3)(var17);
                var17 = var17.withSpring;
                var9.withSpring = var17;
                var9.visible = var10;
                var17 = _closure1_slot15;
                var9.FOLDER_SPRING_PHYSICS = var17;
                var9.state = var11;
                var16 = var5[var16];
                var16 = var15.bind(var3)(var16);
                var16 = var16.TransitionStates;
                var9.TransitionStates = var16;
                var14 = var5[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.runOnJS;
                var9.runOnJS = var14;
                var9.cleanUp = var13;
                var9.fromTop = var12;
                var12 = _closure1_slot12;
                var9.GUILD_ITEM_SIZE = var12;
                var2.__closure = var9;
                var9 = 15243307009078.0;
                var2.__workletHash = var9;
                var9 = _closure1_slot21;
                var2.__initData = var9;
                var7 = var7.bind(var8)(var2);
                var9 = _closure1_slot3;
                var8 = var9.useEffect;
                var2 = new Array(2);
                var2[0] = var11;
                var2[1] = var10;
                var1 = function() { // Environment: var1
                    _fun100952: for (var _fun100952_ip = 0;;) switch (_fun100952_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var2 = var3.set;
                            var5 = _closure2_slot2;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.TransitionStates;
                            var4 = var1.YEETED;
                            var1 = 1;
                            if (!(var5 === var4)) {
                                _fun100952_ip = 62;
                                continue _fun100952
                            }
                        case 60:
                            var1 = 0;
                        case 62:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var1, var2);
                var2 = _closure1_slot16;
                var1 = _closure1_slot1;
                var0 = 16;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = new Array(2);
                var5[0] = var7;
                var6 = var6.folderScaleContainer;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.type;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun100954: for (var _fun100954_ip = 0;;) switch (_fun100954_ip) {
            case 0:
                var4 = arg0;
                var8 = arg1;
                var5 = arg2;
                var6 = arg3;
                var _closure2_slot0 = var8;
                var2 = var8.type;
                var1 = 'icon';
                if (!(var1 !== var2)) {
                    _fun100954_ip = 103;
                    continue _fun100954
                }
            case 31:
                var1 = 'preview';
                if (!(var1 !== var2)) {
                    _fun100954_ip = 43;
                    continue _fun100954
                }
            case 39:
                var1 = undefined;
                return var1;
            case 43:
                var3 = _closure1_slot16;
                var2 = _closure1_slot27;
                var1 = {};
                var1.cleanUp = var6;
                var1.state = var5;
                var9 = var8.guilds;
                var7 = var9.map;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun100955: for (var _fun100955_ip = 0;;) switch (_fun100955_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = arg1;
                            var0 = 0;
                            var1 = var2;
                            if (!(var0 !== var1)) {
                                _fun100955_ip = 47;
                                continue _fun100955
                            }
                        case 15:
                            var0 = 1;
                            var1 = var2;
                            if (!(var0 !== var2)) {
                                _fun100955_ip = 47;
                                continue _fun100955
                            }
                        case 25:
                            var0 = 2;
                            var1 = var2;
                            if (!(var0 !== var2)) {
                                _fun100955_ip = 47;
                                continue _fun100955
                            }
                        case 35:
                            var0 = 3;
                            var1 = var2;
                            if (!(var0 !== var2)) {
                                _fun100955_ip = 47;
                                continue _fun100955
                            }
                        case 45:
                            var1 = undefined;
                        case 47:
                            var3 = null;
                            var2 = var3 != var5;
                            var0 = null;
                            if (!var2) {
                                _fun100955_ip = 119;
                                continue _fun100955
                            }
                        case 58:
                            var2 = var3 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun100955_ip = 119;
                                continue _fun100955
                            }
                        case 67:
                            var4 = _closure1_slot16;
                            var3 = _closure1_slot26;
                            var2 = {};
                            var2.guildId = var5;
                            var6 = _closure2_slot0;
                            var6 = var6.selectedGuildId;
                            var6 = var5 === var6;
                            var2.selected = var6;
                            var2.position = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2, var5);
                        case 119:
                            return var0;
                    }
                };
                var0 = var7.bind(var9)(var0);
                var1.children = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1, var4);
                return var0;
            case 103:
                var3 = _closure1_slot16;
                var2 = _closure1_slot27;
                var1 = {};
                var7 = true;
                var1.fromTop = var7;
                var1.cleanUp = var6;
                var1.state = var5;
                var7 = _closure1_slot16;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 19;
                var5 = var11[var0];
                var0 = undefined;
                var6 = var10.bind(var0)(var5);
                var5 = {};
                var9 = 20;
                var9 = var11[var9];
                var9 = var10.bind(var0)(var9);
                var5.source = var9;
                var8 = var8.tintStyle;
                var5.style = var8;
                var5 = var7.bind(var0)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var0)(var2, var1, var4);
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = arg3;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var1 = 1;
    var1 = var6[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var14 = 2;
    var1 = var6[var14];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var4 = var6[var1];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.GuildsNodeType;
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.useItemDragState;
    var _closure1_slot9 = var4;
    var1 = var1.useFolderBGHeightOffset;
    var _closure1_slot10 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.DEFAULT_FOLDER_COLOR;
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var10 = var1.GUILD_ITEM_SIZE;
    var _closure1_slot12 = var10;
    var12 = var1.GUILD_ITEM_MARGIN;
    var4 = var1.GUILD_ITEM_PADDING;
    var _closure1_slot13 = var4;
    var4 = var1.TRANSITION_PHYSICS;
    var _closure1_slot14 = var4;
    var1 = var1.FOLDER_SPRING_PHYSICS;
    var _closure1_slot15 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot16 = var4;
    var1 = var1.jsxs;
    var _closure1_slot17 = var1;
    var1 = 9;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {
        'position': 'absolute',
        'top': null,
        'left': 12
    };
    var11 = 'absolute';
    var9.top = var12;
    var12 = 10;
    var15 = var6[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var15;
    var15 = var6[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var9.borderTopLeftRadius = var15;
    var15 = var6[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var9.borderTopRightRadius = var15;
    var15 = var10 / var14;
    var9.borderBottomLeftRadius = var15;
    var14 = var10 / var14;
    var9.borderBottomRightRadius = var14;
    var9.width = var10;
    var1.folderBackground = var9;
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': null,
        'height': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9.width = var10;
    var9.height = var10;
    var1.folderScaleContainer = var9;
    var9 = {
        'position': 'absolute',
        'margin': 6
    };
    var1.guildPreviewIcon = var9;
    var9 = {};
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var1.guildPreviewIconUnselected = var9;
    var9 = {
        'top': 0,
        'left': 0
    };
    var1.guildPreview0 = var9;
    var9 = {
        'top': 0,
        'right': 0
    };
    var1.guildPreview1 = var9;
    var9 = {
        'bottom': 0,
        'left': 0
    };
    var1.guildPreview2 = var9;
    var9 = {
        'bottom': 0,
        'right': 0
    };
    var1.guildPreview3 = var9;
    var9 = {};
    var9.position = var11;
    var9.width = var10;
    var9.height = var10;
    var10 = 0.4;
    var9.opacity = var10;
    var1.guildPreviewWrapper = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot18 = var1;
    var1 = {};
    var4 = "function GuildsBarGuildFolderTsx1(values){const{withSpring,TRANSITION_PHYSICS}=this.__closure;return{animations:{height:withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always')},initialValues:{height:values.currentHeight}};}";
    var1.code = var4;
    var _closure1_slot19 = var1;
    var4 = var7.memo;
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.folderId;
        var10 = var0.totalItems;
        var0 = _closure1_slot18;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var12 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 13;
        var0 = var9[var0];
        var5 = var12.bind(var3)(var0);
        var2 = var5.useGuildsBarAnimatedWrapperStyles;
        var0 = true;
        var0 = var2.bind(var5)(var0);
        var2 = 14;
        var2 = var9[var2];
        var5 = var12.bind(var3)(var2);
        var2 = var5.useClientThemesOverride;
        var0 = var0.itemShapeThemed;
        var5 = var2.bind(var5)(var0);
        var0 = _closure1_slot10;
        var8 = var0.bind(var3)(var1);
        var6 = _closure1_slot3;
        var2 = var6.useCallback;
        var1 = function arg0() {
            var2 = arg0;
            var0 = {};
            var1 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 15;
            var5 = var5[var4];
            var4 = undefined;
            var7 = var6.bind(var4)(var5);
            var6 = var7.withSpring;
            var5 = var2.targetHeight;
            var4 = _closure1_slot14;
            var3 = 'animate-always';
            var3 = var6.bind(var7)(var5, var4, var3);
            var1.height = var3;
            var0.animations = var1;
            var1 = {};
            var2 = var2.currentHeight;
            var1.height = var2;
            var0.initialValues = var1;
            return var0;
        };
        var0 = {};
        var11 = 15;
        var11 = var9[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.withSpring;
        var0.withSpring = var11;
        var11 = _closure1_slot14;
        var0.TRANSITION_PHYSICS = var11;
        var1.__closure = var0;
        var0 = 2519256682742.0;
        var1.__workletHash = var0;
        var0 = _closure1_slot19;
        var1.__initData = var0;
        var0 = new Array(0);
        var6 = var2.bind(var6)(var1, var0);
        var2 = _closure1_slot16;
        var1 = _closure1_slot1;
        var0 = 16;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {
            'pointerEvents': 'none',
            'collapsable': false
        };
        var0.layout = var6;
        var6 = var4.folderBackground;
        var4 = new Array(3);
        var4[0] = var6;
        var6 = {};
        var9 = _closure1_slot12;
        var7 = _closure1_slot13;
        var7 = var9 + var7;
        var7 = var7 * var10;
        var7 = var9 + var7;
        var7 = var7 + var8;
        var6.height = var7;
        var4[1] = var6;
        var4[2] = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var4.bind(var7)(var1);
    var _closure1_slot20 = var1;
    var4 = {};
    var8 = 'function GuildsBarGuildFolderTsx2(){const{withSpring,visible,FOLDER_SPRING_PHYSICS,state,TransitionStates,runOnJS,cleanUp,fromTop,GUILD_ITEM_SIZE}=this.__closure;return{opacity:withSpring(visible.get(),FOLDER_SPRING_PHYSICS,undefined,function(finished){if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}),transform:[{translateY:withSpring(visible.get()===1?0:fromTop?-GUILD_ITEM_SIZE:GUILD_ITEM_SIZE,FOLDER_SPRING_PHYSICS)},{scale:withSpring(visible.get()===1?1:fromTop?0.3:1.3,FOLDER_SPRING_PHYSICS)}]};}';
    var4.code = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function GuildsBarGuildFolderTsx3(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED)runOnJS(cleanUp)();}';
    var4.code = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function GuildsBarGuildFolderTsx4(values){const{dragDropInProgress,sharedId,id,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _id;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===""+id&&!isDragTarget;sharedId.set(""+((_id=id)!==null&&_id!==void 0?_id:null));return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,\'animate-always\'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,\'animate-always\'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}';
    var4.code = var8;
    var _closure1_slot23 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun100958: for (var _fun100958_ip = 0;;) switch (_fun100958_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.id;
                var _closure2_slot0 = var12;
                var10 = var0.expanded;
                var _closure2_slot1 = var10;
                var15 = var0.name;
                var _closure2_slot2 = var15;
                var4 = var0.color;
                var _closure2_slot3 = var4;
                var13 = var0.childNodes;
                var _closure2_slot4 = var13;
                var5 = var0.isDragPreview;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun100958_ip = 66;
                    continue _fun100958
                }
            case 64:
                var5 = false;
            case 66:
                var8 = var0.foldersChanged;
                var _closure2_slot5 = var8;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var0 = _closure1_slot18;
                var19 = var0.bind(var3)();
                _closure2_slot6 = var19;
                var35 = _closure1_slot0;
                var30 = _closure1_slot2;
                var0 = 13;
                var1 = var30[var0];
                var6 = var35.bind(var3)(var1);
                var1 = var6.useGuildsBarAnimatedWrapperStyles;
                var14 = true;
                var23 = false;
                var22 = var1.bind(var6)(var14, var23);
                var16 = 11;
                var1 = var30[var16];
                var11 = var35.bind(var3)(var1);
                var7 = var11.useStateFromStoresObject;
                var1 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var2
                    _fun100959: for (var _fun100959_ip = 0;;) switch (_fun100959_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun100959_ip = 74;
                                continue _fun100959
                            }
                        case 12:
                            var3 = _closure1_slot4;
                            var2 = var3.getMutableGuildStates;
                            var2 = var2.bind(var3)();
                            var _closure3_slot0 = var2;
                            var3 = _closure2_slot4;
                            var2 = var3.reduce;
                            var1 = function(arg0, arg1) { // Environment: var0
                                _fun100960: for (var _fun100960_ip = 0;;) switch (_fun100960_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var6 = arg1;
                                        var2 = var6.id;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun100960_ip = 200;
                                            continue _fun100960
                                        }
                                    case 20:
                                        var3 = _closure3_slot0;
                                        var2 = var6.id;
                                        var2 = var3[var2];
                                        var3 = var1 == var2;
                                        var4 = undefined;
                                        if (var3) {
                                            _fun100960_ip = 51;
                                            continue _fun100960
                                        }
                                    case 45:
                                        var4 = var2.highImportanceMentionCount;
                                    case 51:
                                        var8 = var1 != var4;
                                        var3 = 0;
                                        var2 = 0;
                                        if (!var8) {
                                            _fun100960_ip = 65;
                                            continue _fun100960
                                        }
                                    case 62:
                                        var2 = var4;
                                    case 65:
                                        var8 = _closure3_slot0;
                                        var4 = var6.id;
                                        var8 = var8[var4];
                                        var9 = var1 == var8;
                                        var4 = undefined;
                                        if (var9) {
                                            _fun100960_ip = 93;
                                            continue _fun100960
                                        }
                                    case 87:
                                        var4 = var8.lowImportanceMentionCount;
                                    case 93:
                                        var9 = var1 != var4;
                                        var8 = 0;
                                        if (!var9) {
                                            _fun100960_ip = 105;
                                            continue _fun100960
                                        }
                                    case 102:
                                        var8 = var4;
                                    case 105:
                                        var4 = var0.mentionCount;
                                        var4 = var4 + var2;
                                        var4 = var4 + var8;
                                        var0.mentionCount = var4;
                                        var4 = var0.unread;
                                        if (var4) {
                                            _fun100960_ip = 165;
                                            continue _fun100960
                                        }
                                    case 134:
                                        var7 = _closure3_slot0;
                                        var6 = var6.id;
                                        var6 = var7[var6];
                                        var7 = var1 == var6;
                                        var5 = undefined;
                                        if (var7) {
                                            _fun100960_ip = 162;
                                            continue _fun100960
                                        }
                                    case 156:
                                        var5 = var6.unread;
                                    case 162:
                                        var4 = var5;
                                    case 165:
                                        var1 = var1 != var4;
                                        if (!var1) {
                                            _fun100960_ip = 175;
                                            continue _fun100960
                                        }
                                    case 172:
                                        var1 = var4;
                                    case 175:
                                        var0.unread = var1;
                                        var1 = var0.isMentionLowImportance;
                                        if (!var1) {
                                            _fun100960_ip = 194;
                                            continue _fun100960
                                        }
                                    case 190:
                                        var1 = var3 === var2;
                                    case 194:
                                        var0.isMentionLowImportance = var1;
                                    case 200:
                                        return var0;
                                }
                            };
                            var0 = {
                                'unread': false,
                                'mentionCount': 0,
                                'isMentionLowImportance': true
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 74:
                            var0 = {
                                'unread': false,
                                'mentionCount': 0,
                                'isMentionLowImportance': false
                            };
                            return var0;
                    }
                };
                var1 = var7.bind(var11)(var6, var1);
                var11 = var1.unread;
                var20 = var1.mentionCount;
                var18 = var1.isMentionLowImportance;
                var1 = var30[var16];
                var21 = var35.bind(var3)(var1);
                var17 = var21.useStateFromStoresObject;
                var1 = _closure1_slot6;
                var7 = new Array(2);
                var7[0] = var1;
                var1 = _closure1_slot7;
                var7[1] = var1;
                var6 = new Array(3);
                var6[0] = var10;
                var6[1] = var12;
                var6[2] = var13;
                var1 = function() { // Environment: var2
                    _fun100961: for (var _fun100961_ip = 0;;) switch (_fun100961_ip) {
                        case 0:
                            var1 = _closure1_slot6;
                            var0 = var1.getGuildId;
                            var7 = var0.bind(var1)();
                            var2 = _closure1_slot24;
                            var1 = _closure2_slot4;
                            var3 = undefined;
                            var9 = var2.bind(var3)(var1);
                            var2 = var9.bind(var3)();
                            var1 = var2.done;
                            var6 = 4;
                            var5 = var2;
                            var8 = 0;
                            var2 = undefined;
                            if (var1) {
                                _fun100961_ip = 100;
                                continue _fun100961
                            }
                        case 57:
                            var1 = var5.value;
                            var1 = var1.id;
                            var2 = var7;
                            if (!(var1 !== var2)) {
                                _fun100961_ip = 100;
                                continue _fun100961
                            }
                        case 74:
                            var8 = var8 + 1;
                            var2 = undefined;
                            if (!(!(var8 >= var6))) {
                                _fun100961_ip = 100;
                                continue _fun100961
                            }
                        case 83:
                            var10 = var9.bind(var3)();
                            var1 = var10.done;
                            var5 = var10;
                            var2 = undefined;
                            if (!var1) {
                                _fun100961_ip = 57;
                                continue _fun100961
                            }
                        case 100:
                            var5 = _closure2_slot1;
                            var1 = false;
                            if (var5) {
                                _fun100961_ip = 168;
                                continue _fun100961
                            }
                        case 109:
                            var5 = null;
                            var6 = var5 != var7;
                            var1 = false;
                            if (!var6) {
                                _fun100961_ip = 168;
                                continue _fun100961
                            }
                        case 120:
                            var6 = _closure1_slot7;
                            var4 = var6.getGuildsTree;
                            var6 = var4.bind(var6)();
                            var4 = var6.getNode;
                            var4 = var4.bind(var6)(var7);
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun100961_ip = 160;
                                continue _fun100961
                            }
                        case 154:
                            var3 = var4.parentId;
                        case 160:
                            var0 = _closure2_slot0;
                            var1 = var3 === var0;
                        case 168:
                            var0 = {};
                            var0.selectedPreviewId = var2;
                            var0.hasGuildSelected = var1;
                            return var0;
                    }
                };
                var1 = var17.bind(var21)(var7, var1, var6);
                var7 = var1.selectedPreviewId;
                _closure2_slot7 = var7;
                var24 = var1.hasGuildSelected;
                var1 = _closure1_slot1;
                var6 = 21;
                var6 = var30[var6];
                var17 = var1.bind(var3)(var6);
                var6 = {};
                var6.mentionCount = var20;
                var6.isMentionLowImportance = var18;
                var17 = var17.bind(var3)(var6);
                var6 = var17.badge;
                var17 = var17.cutouts;
                var16 = var30[var16];
                var25 = var35.bind(var3)(var16);
                var21 = var25.useStateFromStores;
                var16 = _closure1_slot5;
                var20 = new Array(1);
                var20[0] = var16;
                var18 = new Array(2);
                var18[0] = var15;
                var18[1] = var13;
                var15 = 23;
                var15 = var30[var15];
                var36 = var1.bind(var3)(var15);
                var38 = function() { // Environment: var2
                    _fun100962: for (var _fun100962_ip = 0;;) switch (_fun100962_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var9 = null;
                            if (!(var9 == var0)) {
                                _fun100962_ip = 183;
                                continue _fun100962
                            }
                        case 16:
                            var5 = new Array(0);
                            var2 = _closure1_slot24;
                            var0 = _closure2_slot4;
                            var6 = undefined;
                            var8 = var2.bind(var6)(var0);
                            var2 = var8.bind(var6)();
                            var0 = var2.done;
                            var4 = 3;
                            var7 = 0;
                            if (var0) {
                                _fun100962_ip = 120;
                                continue _fun100962
                            }
                        case 55:
                            var0 = var2.value;
                            var11 = _closure1_slot5;
                            var10 = var11.getGuild;
                            var0 = var0.id;
                            var0 = var10.bind(var11)(var0);
                            if (!(var9 != var0)) {
                                _fun100962_ip = 98;
                                continue _fun100962
                            }
                        case 83:
                            var10 = var5.push;
                            var0 = var0.name;
                            var0 = var10.bind(var5)(var0);
                        case 98:
                            var7 = var7 + 1;
                            if (!(!(var7 >= var4))) {
                                _fun100962_ip = 120;
                                continue _fun100962
                            }
                        case 105:
                            var10 = var8.bind(var6)();
                            var0 = var10.done;
                            var2 = var10;
                            if (!var0) {
                                _fun100962_ip = 55;
                                continue _fun100962
                            }
                        case 120:
                            var0 = {};
                            var0.names = var5;
                            var2 = _closure2_slot4;
                            var4 = var2.length;
                            var0.count = var4;
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 22;
                            var3 = var7[var3];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.getListSummaryLabel;
                            var2 = var2.length;
                            var2 = var3.bind(var4)(var5, var2);
                            var0.label = var2;
                            return var0;
                        case 183:
                            var0 = {};
                            var2 = 1;
                            var0.count = var2;
                            var1 = _closure2_slot2;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var0.names = var2;
                            var0.label = var1;
                            return var0;
                    }
                };
                var40 = var25;
                var39 = var20;
                var37 = var18;
                var15 = var40[var21](var39, var38, var37, var36, var35);
                var21 = var15.label;
                var18 = _closure1_slot3;
                var16 = var18.useMemo;
                var15 = new Array(1);
                var15[0] = var4;
                var4 = function() { // Environment: var2
                    _fun100963: for (var _fun100963_ip = 0;;) switch (_fun100963_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 24;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.int2hex;
                            var5 = _closure2_slot3;
                            var4 = null;
                            if (!(var4 == var5)) {
                                _fun100963_ip = 50;
                                continue _fun100963
                            }
                        case 44:
                            var0 = _closure1_slot11;
                            _fun100963_ip = 54;
                            continue _fun100963;
                        case 50:
                            var0 = _closure2_slot3;
                        case 54:
                            var2 = var1.bind(var2)(var0);
                            var0 = {};
                            var1 = {};
                            var1.tintColor = var2;
                            var0.tintStyle = var1;
                            var1 = {};
                            var1.backgroundColor = var2;
                            var0.folderPreviewStyle = var1;
                            return var0;
                    }
                };
                var4 = var16.bind(var18)(var4, var15);
                var20 = var4.tintStyle;
                _closure2_slot8 = var20;
                var4 = var4.folderPreviewStyle;
                _closure2_slot9 = var4;
                var18 = _closure1_slot3;
                var16 = var18.useMemo;
                var15 = new Array(2);
                var15[0] = var12;
                var15[1] = var8;
                var8 = function() { // Environment: var2
                    var0 = {};
                    var1 = function() {
                        _fun100965: for (var _fun100965_ip = 0;;) switch (_fun100965_ip) {
                            case 0:
                                var2 = _closure2_slot5;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun100965_ip = 147;
                                    continue _fun100965
                                }
                            case 16:
                                var2 = _closure2_slot5;
                                var0 = var2.get;
                                var4 = var0.bind(var2)();
                                var3 = var4.has;
                                var5 = _closure2_slot0;
                                var0 = global;
                                var2 = var0.HermesInternal;
                                var2 = var2.concat;
                                var6 = '';
                                var2 = var2.bind(var6)(var5);
                                var2 = var3.bind(var4)(var2);
                                if (!var2) {
                                    _fun100965_ip = 147;
                                    continue _fun100965
                                }
                            case 68:
                                var5 = var0.Set;
                                var3 = _closure2_slot5;
                                var2 = var3.get;
                                var8 = var2.bind(var3)();
                                var4 = var5.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var9 = var4;
                                var2 = new var9[var5](var8, var7);
                                var2 = var2 instanceof Object ? var2 : var4;
                                var4 = var2.add;
                                var5 = _closure2_slot0;
                                var0 = var0.HermesInternal;
                                var0 = var0.concat;
                                var0 = var0.bind(var6)(var5);
                                var0 = var4.bind(var2)(var0);
                                var0 = var3.set;
                                var0 = var0.bind(var3)(var2);
                            case 147:
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 25;
                                var5 = var4[var3];
                                var0 = undefined;
                                var6 = var7.bind(var0)(var5);
                                var5 = var6.triggerHapticFeedback;
                                var3 = var4[var3];
                                var3 = var7.bind(var0)(var3);
                                var3 = var3.HapticFeedbackTypes;
                                var3 = var3.IMPACT_LIGHT;
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure1_slot1;
                                var2 = 26;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.toggleGuildFolderExpand;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.onPress = var1;
                    return var0;
                };
                var16 = var16.bind(var18)(var8, var15);
                var18 = _closure1_slot3;
                var15 = var18.useMemo;
                var8 = new Array(4);
                var8[0] = var10;
                var8[1] = var13;
                var8[2] = var20;
                var8[3] = var7;
                var7 = function() { // Environment: var2
                    _fun100966: for (var _fun100966_ip = 0;;) switch (_fun100966_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun100966_ip = 147;
                                continue _fun100966
                            }
                        case 13:
                            var1 = new Array(0);
                            var3 = _closure1_slot24;
                            var2 = _closure2_slot4;
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var3 = var5.bind(var6)();
                            var2 = var3.done;
                            var4 = 4;
                            if (var2) {
                                _fun100966_ip = 113;
                                continue _fun100966
                            }
                        case 50:
                            var2 = var3.value;
                            var9 = var2.type;
                            var8 = _closure1_slot8;
                            var8 = var8.GUILD;
                            if (!(var9 === var8)) {
                                _fun100966_ip = 98;
                                continue _fun100966
                            }
                        case 74:
                            var8 = var1.push;
                            var2 = var2.id;
                            var2 = var8.bind(var1)(var2);
                            var2 = var1.length;
                            if (!(!(var2 >= var4))) {
                                _fun100966_ip = 113;
                                continue _fun100966
                            }
                        case 98:
                            var8 = var5.bind(var6)();
                            var2 = var8.done;
                            var3 = var8;
                            if (!var2) {
                                _fun100966_ip = 50;
                                continue _fun100966
                            }
                        case 113:
                            var2 = {};
                            var3 = 'preview';
                            var2.type = var3;
                            var2.guilds = var1;
                            var1 = _closure2_slot7;
                            var2.selectedGuildId = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            return var1;
                        case 147:
                            var1 = {};
                            var2 = 'icon';
                            var1.type = var2;
                            var0 = _closure2_slot8;
                            var1.tintStyle = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                    }
                };
                var8 = var15.bind(var18)(var7, var8);
                var18 = _closure1_slot3;
                var15 = var18.useCallback;
                var7 = new Array(3);
                var7[0] = var10;
                var19 = var19.guildPreviewWrapper;
                var7[1] = var19;
                var7[2] = var4;
                var4 = function(arg0) { // Environment: var2
                    _fun100967: for (var _fun100967_ip = 0;;) switch (_fun100967_ip) {
                        case 0:
                            var4 = _closure1_slot17;
                            var1 = _closure1_slot3;
                            var3 = var1.Fragment;
                            var2 = {};
                            var6 = _closure1_slot16;
                            var5 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 27;
                            var0 = var1[var0];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var0);
                            var0 = {};
                            var7 = _closure2_slot6;
                            var8 = var7.guildPreviewWrapper;
                            var7 = new Array(2);
                            var7[0] = var8;
                            var10 = _closure2_slot1;
                            var8 = undefined;
                            if (var10) {
                                _fun100967_ip = 81;
                                continue _fun100967
                            }
                        case 77:
                            var8 = _closure2_slot9;
                        case 81:
                            var7[1] = var8;
                            var0.style = var7;
                            var5 = var6.bind(var1)(var5, var0);
                            var0 = new Array(2);
                            var0[0] = var5;
                            var5 = arg0;
                            var0[1] = var5;
                            var2.children = var0;
                            var0 = 'wrapper';
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var7 = var15.bind(var18)(var4, var7);
                var4 = _closure1_slot9;
                var4 = var4.bind(var3)(var12, var5);
                var20 = var4.isDragTarget;
                _closure2_slot10 = var20;
                var19 = var4.dragState;
                var15 = var4.overState;
                var27 = var4.itemSize;
                var33 = var4.dragDropInProgress;
                _closure2_slot11 = var33;
                var26 = _closure1_slot3;
                var25 = var26.useMemo;
                var18 = new Array(1);
                var18[0] = var12;
                var4 = function() { // Environment: var2
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 28;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getGuildFolderMenuItems;
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var3)(var0);
                    var _closure3_slot0 = var4;
                    var0 = {};
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.label;
                        var0.name = var2;
                        var1 = var1.label;
                        var0.label = var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.accessibilityActions = var2;
                    var1 = function arg0() {
                        _fun100970: for (var _fun100970_ip = 0;;) switch (_fun100970_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var2 = _closure3_slot0;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.label;
                                    var0 = _closure4_slot0;
                                    var0 = var0.nativeEvent;
                                    var0 = var0.actionName;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1 = var1.bind(var2)(var0);
                                var3 = null;
                                var0 = var3 == var1;
                                if (var0) {
                                    _fun100970_ip = 51;
                                    continue _fun100970
                                }
                            case 42:
                                var2 = var1.action;
                                var0 = var3 == var2;
                            case 51:
                                if (var0) {
                                    _fun100970_ip = 63;
                                    continue _fun100970
                                }
                            case 54:
                                var0 = var1.action;
                                var0 = var0.bind(var1)();
                            case 63:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onAccessibilityAction = var1;
                    return var0;
                };
                var4 = var25.bind(var26)(var4, var18);
                var26 = var4.accessibilityActions;
                var25 = var4.onAccessibilityAction;
                var4 = 17;
                var4 = var30[var4];
                var31 = var35.bind(var3)(var4);
                var18 = var31.useSharedValue;
                var28 = global;
                var4 = var28.HermesInternal;
                var4 = var4.concat;
                var29 = '';
                var4 = var4.bind(var29)(var12);
                var18 = var18.bind(var31)(var4);
                _closure2_slot12 = var18;
                var32 = _closure1_slot3;
                var31 = var32.useCallback;
                var4 = function arg0() {
                    _fun100972: for (var _fun100972_ip = 0;;) switch (_fun100972_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot11;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            if (!var3) {
                                _fun100972_ip = 65;
                                continue _fun100972
                            }
                        case 22:
                            var4 = _closure2_slot12;
                            var1 = var4.get;
                            var4 = var1.bind(var4)();
                            var6 = _closure2_slot0;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = '';
                            var1 = var5.bind(var1)(var6);
                            var3 = var4 === var1;
                        case 65:
                            if (!var3) {
                                _fun100972_ip = 75;
                                continue _fun100972
                            }
                        case 68:
                            var1 = _closure2_slot10;
                            var3 = !var1;
                        case 75:
                            var4 = _closure2_slot12;
                            var1 = var4.set;
                            var5 = _closure2_slot0;
                            var6 = null;
                            var5 = var6 != var5;
                            if (!var5) {
                                _fun100972_ip = 101;
                                continue _fun100972
                            }
                        case 97:
                            var6 = _closure2_slot0;
                        case 101:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = '';
                            var0 = var5.bind(var0)(var6);
                            var0 = var1.bind(var4)(var0);
                            var0 = {};
                            var1 = {};
                            if (var3) {
                                _fun100972_ip = 143;
                                continue _fun100972
                            }
                        case 135:
                            var4 = var2.targetOriginY;
                            _fun100972_ip = 196;
                            continue _fun100972;
                        case 143:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var6 = 15;
                            var7 = var7[var6];
                            var6 = undefined;
                            var9 = var8.bind(var6)(var7);
                            var8 = var9.withSpring;
                            var7 = var2.targetOriginY;
                            var6 = _closure1_slot14;
                            var5 = 'animate-always';
                            var4 = var8.bind(var9)(var7, var6, var5);
                        case 196:
                            var1.originY = var4;
                            if (var3) {
                                _fun100972_ip = 212;
                                continue _fun100972
                            }
                        case 204:
                            var3 = var2.targetHeight;
                            _fun100972_ip = 265;
                            continue _fun100972;
                        case 212:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 15;
                            var6 = var6[var5];
                            var5 = undefined;
                            var8 = var7.bind(var5)(var6);
                            var7 = var8.withSpring;
                            var6 = var2.targetHeight;
                            var5 = _closure1_slot14;
                            var4 = 'animate-always';
                            var3 = var7.bind(var8)(var6, var5, var4);
                        case 265:
                            var1.height = var3;
                            var0.animations = var1;
                            var1 = {};
                            var3 = var2.currentOriginY;
                            var1.originY = var3;
                            var2 = var2.currentHeight;
                            var1.height = var2;
                            var0.initialValues = var1;
                            return var0;
                    }
                };
                var2 = {};
                var2.dragDropInProgress = var33;
                var2.sharedId = var18;
                var2.id = var12;
                var2.isDragTarget = var20;
                var34 = 15;
                var34 = var30[var34];
                var34 = var35.bind(var3)(var34);
                var34 = var34.withSpring;
                var2.withSpring = var34;
                var34 = _closure1_slot14;
                var2.TRANSITION_PHYSICS = var34;
                var4.__closure = var2;
                var2 = 11967845900199.0;
                var4.__workletHash = var2;
                var2 = _closure1_slot23;
                var4.__initData = var2;
                var2 = new Array(4);
                var2[0] = var12;
                var2[1] = var18;
                var2[2] = var20;
                var2[3] = var33;
                var4 = var31.bind(var32)(var4, var2);
                var2 = _closure1_slot16;
                var0 = var30[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var28 = var28.HermesInternal;
                var28 = var28.concat;
                var28 = var28.bind(var29)(var12);
                var0.id = var28;
                var0.draggedItemSize = var27;
                var0.accessibilityActions = var26;
                var0.onAccessibilityAction = var25;
                var0.selected = var24;
                var24 = !var10;
                if (!var24) {
                    _fun100958_ip = 917;
                    continue _fun100958
                }
            case 914:
                var24 = var11;
            case 917:
                var0.unread = var24;
                var0.circle = var23;
                var0.styles = var22;
                var0.label = var21;
                var0.isDragTarget = var20;
                var0.dragState = var19;
                var0.sharedId = var18;
                var0.cutouts = var17;
                var0.config = var16;
                var0.isDragPreview = var5;
                var0.overState = var15;
                var0.preventClipping = var14;
                var0.expanded = var10;
                var0.layout = var4;
                var4 = var6;
                if (!var10) {
                    _fun100958_ip = 1028;
                    continue _fun100958
                }
            case 991:
                var4 = var6;
                if (var5) {
                    _fun100958_ip = 1028;
                    continue _fun100958
                }
            case 997:
                var10 = _closure1_slot16;
                var6 = _closure1_slot20;
                var5 = {};
                var5.folderId = var12;
                var13 = var13.length;
                var5.totalItems = var13;
                var4 = var10.bind(var3)(var6, var5);
            case 1028:
                var0.externalChildren = var4;
                var6 = _closure1_slot16;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 29;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.folderId = var12;
                var4.unread = var11;
                var4 = var6.bind(var3)(var5, var4);
                var0.expandedChildren = var4;
                var6 = _closure1_slot16;
                var5 = _closure1_slot0;
                var4 = 18;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TransitionGroup;
                var4 = {};
                var10 = _closure1_slot29;
                var4.renderItem = var10;
                var9 = _closure1_slot28;
                var4.getItemKey = var9;
                var4.items = var8;
                var4.wrapChildren = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarGuildFolder.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.GuildsBarGuildFolderBG = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8659, 1410, 3213, 4376, 13149, 13156, 13150, 33, 1297, 671, 566, 7415, 13161, 8931, 4081, 6478, 3720, 4027, 4704, 6857, 13163, 7830, 13170, 668, 3279, 4679, 6477, 13153, 13171, 2]);