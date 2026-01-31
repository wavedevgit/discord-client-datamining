// modules/guild_settings/roles/GuildSettingsRolesStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() {
        _fun115743: for (var _fun115743_ip = 0;;) switch (_fun115743_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun115743_ip = 76;
                continue _fun115743;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot36 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function() {
        _fun115746: for (var _fun115746_ip = 0;;) switch (_fun115746_ip) {
            case 0:
                var0 = _closure1_slot19;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun115746_ip = 129;
                    continue _fun115746
                }
            case 15:
                var0 = _closure1_slot27;
                if (!(var1 != var0)) {
                    _fun115746_ip = 129;
                    continue _fun115746
                }
            case 23:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 11;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.calculatePositionDeltas;
                var0 = {};
                var7 = _closure1_slot11;
                var6 = var7.getSortedRoles;
                var5 = _closure1_slot19;
                var5 = var5.id;
                var5 = var6.bind(var7)(var5);
                var0.oldOrdering = var5;
                var4 = _closure1_slot27;
                var0.newOrdering = var4;
                var4 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var0.idGetter = var4;
                var3 = function arg0() {
                    var0 = arg0;
                    var0 = var0.position;
                    return var0;
                };
                var0.existingPositionGetter = var3;
                var3 = false;
                var0.ascending = var3;
                var0 = var1.bind(var2)(var0);
                _fun115746_ip = 133;
                continue _fun115746;
            case 129:
                var0 = new Array(0);
            case 133:
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var10 = function arg0() {
        _fun115749: for (var _fun115749_ip = 0;;) switch (_fun115749_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.section;
                var3 = _closure1_slot19;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun115749_ip = 47;
                    continue _fun115749
                }
            case 21:
                var1 = _closure1_slot13;
                var1 = var1.ROLES;
                if (!(var2 === var1)) {
                    _fun115749_ip = 47;
                    continue _fun115749
                }
            case 35:
                var1 = _closure1_slot38;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 47:
                var0 = false;
                return var0;
        }
    };
    var0 = function() {
        _fun115750: for (var _fun115750_ip = 0;;) switch (_fun115750_ip) {
            case 0:
                var2 = arguments[0];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun115750_ip = 11;
                    continue _fun115750
                }
            case 9:
                var2 = true;
            case 11:
                var4 = _closure1_slot12;
                var3 = var4.getProps;
                var3 = var3.bind(var4)();
                var3 = var3.guild;
                var _closure1_slot19 = var3;
                var3 = false;
                _closure1_slot25 = var3;
                _closure1_slot26 = var3;
                var _closure1_slot21 = var0;
                var5 = _closure1_slot23;
                var4 = var5.clear;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot33;
                var4 = var5.clear;
                var4 = var4.bind(var5)();
                var4 = _closure1_slot14;
                var4 = var4.OPEN;
                _closure1_slot24 = var4;
                var4 = _closure1_slot19;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun115750_ip = 109;
                    continue _fun115750
                }
            case 103:
                var7 = new Array(0);
                _fun115750_ip = 149;
                continue _fun115750;
            case 109:
                var8 = _closure1_slot11;
                var6 = var8.getSortedRoles;
                var4 = _closure1_slot19;
                var4 = var4.id;
                var10 = var6.bind(var8)(var4);
                var4 = new Array(0);
                var9 = 0;
                var11 = var4;
                var6 = arraySpread(var11, var10, var9);
                var7 = var4;
            case 149:
                _closure1_slot27 = var7;
                var4 = new Array(0);
                var9 = 0;
                var11 = var4;
                var10 = var7;
                var6 = arraySpread(var11, var10, var9);
                _closure1_slot28 = var4;
                var6 = _closure1_slot39;
                var4 = _closure1_slot19;
                var7 = var5 == var4;
                var5 = undefined;
                if (var7) {
                    _fun115750_ip = 195;
                    continue _fun115750
                }
            case 190:
                var5 = var4.id;
            case 195:
                var4 = _closure1_slot28;
                var4 = var6.bind(var0)(var5, var4);
                _closure1_slot29 = var3;
                if (!var2) {
                    _fun115750_ip = 249;
                    continue _fun115750
                }
            case 212:
                var3 = _closure1_slot32;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot31;
                var2 = var3.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    var3 = _closure1_slot32;
                    var2 = var3.set;
                    var1 = new Array(0);
                    var6 = arg0;
                    var5 = 0;
                    var7 = var1;
                    var0 = arraySpread(var7, var6, var5);
                    var0 = arg1;
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 249:
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0, arg1() {
        var2 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun115753: for (var _fun115753_ip = 0;;) switch (_fun115753_ip) {
                case 0:
                    var1 = arg0;
                    var0 = _closure1_slot22;
                    var3 = var0.SOLID;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 12;
                    var4 = var4[var0];
                    var0 = undefined;
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.getHasEnhancedRoleColorsForRole;
                    var4 = _closure2_slot0;
                    var6 = var5.bind(var6)(var4, var1);
                    var5 = var1.colors;
                    var4 = null;
                    var5 = var4 != var5;
                    if (!var5) {
                        _fun115753_ip = 74;
                        continue _fun115753
                    }
                case 71:
                    var5 = var6;
                case 74:
                    var6 = var3;
                    if (!var5) {
                        _fun115753_ip = 135;
                        continue _fun115753
                    }
                case 80:
                    var5 = var1.colors;
                    var5 = var5.tertiary_color;
                    if (!(var4 == var5)) {
                        _fun115753_ip = 122;
                        continue _fun115753
                    }
                case 95:
                    var5 = var1.colors;
                    var5 = var5.secondary_color;
                    if (!(var4 != var5)) {
                        _fun115753_ip = 120;
                        continue _fun115753
                    }
                case 110:
                    var5 = _closure1_slot22;
                    var3 = var5.GRADIENT;
                case 120:
                    _fun115753_ip = 132;
                    continue _fun115753;
                case 122:
                    var5 = _closure1_slot22;
                    var3 = var5.HOLOGRAPHIC;
                case 132:
                    var6 = var3;
                case 135:
                    var5 = {};
                    var3 = _closure1_slot22;
                    var7 = var3.SOLID;
                    var3 = {
                        'primary_color': null,
                        'secondary_color': null,
                        'tertiary_color': null
                    };
                    var8 = _closure1_slot15;
                    var3.primary_color = var8;
                    var5[var7] = var3;
                    var3 = _closure1_slot22;
                    var7 = var3.GRADIENT;
                    var3 = {};
                    var8 = _closure1_slot17;
                    var8 = var8.primary_color;
                    var3.primary_color = var8;
                    var8 = _closure1_slot17;
                    var8 = var8.secondary_color;
                    var3.secondary_color = var8;
                    var3.tertiary_color = var4;
                    var5[var7] = var3;
                    var3 = _closure1_slot22;
                    var7 = var3.HOLOGRAPHIC;
                    var3 = {};
                    var8 = _closure1_slot18;
                    var8 = var8.primary_color;
                    var3.primary_color = var8;
                    var8 = _closure1_slot18;
                    var8 = var8.secondary_color;
                    var3.secondary_color = var8;
                    var8 = _closure1_slot18;
                    var8 = var8.tertiary_color;
                    var3.tertiary_color = var8;
                    var5[var7] = var3;
                    var3 = var1.colors;
                    if (!(var4 != var3)) {
                        _fun115753_ip = 385;
                        continue _fun115753
                    }
                case 299:
                    var3 = {};
                    var7 = var1.colors;
                    var7 = var7.primary_color;
                    if (!(var4 == var7)) {
                        _fun115753_ip = 320;
                        continue _fun115753
                    }
                case 316:
                    var7 = _closure1_slot15;
                case 320:
                    var3.primary_color = var7;
                    var7 = var1.colors;
                    var8 = var7.secondary_color;
                    var9 = var4 != var8;
                    var7 = null;
                    if (!var9) {
                        _fun115753_ip = 348;
                        continue _fun115753
                    }
                case 345:
                    var7 = var8;
                case 348:
                    var3.secondary_color = var7;
                    var7 = var1.colors;
                    var7 = var7.tertiary_color;
                    var8 = var4 != var7;
                    var4 = null;
                    if (!var8) {
                        _fun115753_ip = 376;
                        continue _fun115753
                    }
                case 373:
                    var4 = var7;
                case 376:
                    var3.tertiary_color = var4;
                    var5[var6] = var3;
                case 385:
                    var4 = _closure1_slot33;
                    var3 = var4.set;
                    var2 = var1.id;
                    var1 = {};
                    var1.currentStyle = var6;
                    var1.styleColors = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function arg0, arg1() {
        _fun115754: for (var _fun115754_ip = 0;;) switch (_fun115754_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot27;
                var1 = var3.indexOf;
                var3 = var1.bind(var3)(var2);
                var5 = 0;
                if (!(!(var3 < var5))) {
                    _fun115754_ip = 111;
                    continue _fun115754
                }
            case 27:
                var1 = {};
                var8 = var1;
                var7 = var2;
                var2 = copyDataProperties(var8, var7);
                var7 = arg1;
                var8 = var1;
                var2 = copyDataProperties(var8, var7);
                var7 = _closure1_slot27;
                var2 = new Array(0);
                var8 = var2;
                var6 = 0;
                var4 = arraySpread(var8, var7, var6);
                var2[var3] = var1;
                _closure1_slot27 = var2;
                var2 = true;
                _closure1_slot25 = var2;
                var3 = _closure1_slot23;
                var2 = var3.add;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var1 = _closure1_slot34;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 111:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot27;
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.id;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot41 = var0;
    var7 = function arg0() {
        _fun115757: for (var _fun115757_ip = 0;;) switch (_fun115757_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guildId;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var4 = _closure1_slot12;
                var3 = var4.getProps;
                var3 = var3.bind(var4)();
                var4 = var3.guild;
                _closure1_slot19 = var4;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun115757_ip = 297;
                    continue _fun115757
                }
            case 55:
                var3 = _closure1_slot19;
                var3 = var3.id;
                if (!(var7 === var3)) {
                    _fun115757_ip = 297;
                    continue _fun115757
                }
            case 71:
                var4 = _closure1_slot24;
                var3 = _closure1_slot14;
                var3 = var3.SUBMITTING;
                if (!(var4 !== var3)) {
                    _fun115757_ip = 297;
                    continue _fun115757
                }
            case 92:
                var5 = _closure1_slot11;
                var4 = var5.getSortedRoles;
                var3 = _closure1_slot19;
                var3 = var3.id;
                var11 = var4.bind(var5)(var3);
                var4 = new Array(0);
                var3 = 0;
                var12 = var4;
                var10 = 0;
                var5 = arraySpread(var12, var11, var10);
                _closure2_slot0 = var4;
                var8 = _closure1_slot23;
                var6 = var8.forEach;
                var5 = function(arg0) { // Environment: var1
                    _fun115758: for (var _fun115758_ip = 0;;) switch (_fun115758_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var4 = _closure1_slot41;
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = -1;
                            var _closure3_slot1 = var4;
                            var8 = _closure2_slot0;
                            var7 = var8.find;
                            var6 = function(arg0, arg1) { // Environment: var2
                                _fun115759: for (var _fun115759_ip = 0;;) switch (_fun115759_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.id;
                                        var0 = _closure3_slot0;
                                        if (!(var2 !== var0)) {
                                            _fun115759_ip = 23;
                                            continue _fun115759
                                        }
                                    case 19:
                                        var0 = undefined;
                                        return var0;
                                    case 23:
                                        var0 = arg1;
                                        _closure3_slot1 = var0;
                                        var0 = true;
                                        return var0;
                                }
                            };
                            var7 = var7.bind(var8)(var6);
                            var6 = null;
                            if (!(var6 != var7)) {
                                _fun115758_ip = 81;
                                continue _fun115758
                            }
                        case 63:
                            if (!(var6 != var5)) {
                                _fun115758_ip = 81;
                                continue _fun115758
                            }
                        case 67:
                            var4 = _closure2_slot0;
                            var2 = _closure3_slot1;
                            var4[var2] = var5;
                            _fun115758_ip = 95;
                            continue _fun115758;
                        case 81:
                            var2 = _closure1_slot23;
                            var1 = var2.delete;
                            var1 = var1.bind(var2)(var3);
                        case 95:
                            return var0;
                    }
                };
                var5 = var6.bind(var8)(var5);
                var5 = _closure1_slot23;
                var5 = var5.size;
                if (!(var3 === var5)) {
                    _fun115757_ip = 175;
                    continue _fun115757
                }
            case 169:
                var5 = false;
                _closure1_slot25 = var5;
            case 175:
                var5 = global;
                var5 = var5.Map;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var13 = var6;
                var5 = new var13[var5](var12);
                var6 = var5 instanceof Object ? var5 : var6;
                _closure2_slot1 = var6;
                var9 = _closure1_slot23;
                var8 = var9.forEach;
                var5 = function(arg0) { // Environment: var1
                    _fun115760: for (var _fun115760_ip = 0;;) switch (_fun115760_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure1_slot33;
                            var0 = var1.get;
                            var2 = var0.bind(var1)(var3);
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun115760_ip = 44;
                                continue _fun115760
                            }
                        case 26:
                            var1 = _closure2_slot1;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var3, var2);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var5);
                var8 = _closure1_slot33;
                var5 = var8.clear;
                var5 = var5.bind(var8)();
                var5 = _closure1_slot39;
                var5 = var5.bind(var0)(var7, var4);
                var5 = var6.forEach;
                var1 = function(arg0, arg1) { // Environment: var1
                    var3 = _closure1_slot33;
                    var2 = var3.set;
                    var1 = arg1;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var5.bind(var6)(var1);
                var1 = false;
                _closure1_slot26 = var1;
                var1 = new Array(0);
                var12 = var1;
                var11 = var4;
                var10 = 0;
                var3 = arraySpread(var12, var11, var10);
                _closure1_slot27 = var1;
                return var0;
            case 297:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot42 = var7;
    var3 = global;
    var11 = var3.Object;
    var9 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.set;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var9 = var1.GuildSettingsSections;
    var _closure1_slot13 = var9;
    var9 = var1.FormStates;
    var _closure1_slot14 = var9;
    var11 = var1.DEFAULT_ROLE_COLOR;
    var _closure1_slot15 = var11;
    var1 = var1.GuildFeatures;
    var _closure1_slot16 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var11 = var1.DEFAULT_GRADIENT_ROLE_COLORS;
    var _closure1_slot17 = var11;
    var1 = var1.HOLOGRAPHIC_ROLE_COLORS;
    var _closure1_slot18 = var1;
    var1 = {};
    var11 = 'solid';
    var1.SOLID = var11;
    var11 = 'gradient';
    var1.GRADIENT = var11;
    var11 = 'holographic';
    var1.HOLOGRAPHIC = var11;
    var _closure1_slot22 = var1;
    var11 = var3.Set;
    var12 = var11.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var11
        }
    });
    var16 = var12;
    var11 = new var16[var11](var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot23 = var11;
    var9 = var9.CLOSED;
    var _closure1_slot24 = var9;
    var9 = false;
    var _closure1_slot25 = var9;
    var _closure1_slot26 = var9;
    var11 = new Array(0);
    var _closure1_slot27 = var11;
    var11 = new Array(0);
    var _closure1_slot28 = var11;
    var _closure1_slot29 = var9;
    var9 = var3.Set;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var16 = var11;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot30 = var9;
    var9 = var3.Map;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var16 = var11;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot31 = var9;
    var9 = var3.Map;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var16 = var11;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot32 = var9;
    var3 = var3.Map;
    var9 = var3.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var3
        }
    });
    var16 = var9;
    var3 = new var16[var3](var15);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot33 = var3;
    var3 = 18;
    var3 = var6[var3];
    var12 = var8.bind(var0)(var3);
    var11 = var12.debounce;
    var9 = function() { // Environment: var4
        _fun115762: for (var _fun115762_ip = 0;;) switch (_fun115762_ip) {
            case 0:
                var2 = false;
                var _closure2_slot0 = var2;
                var3 = _closure1_slot26;
                if (!var3) {
                    _fun115762_ip = 52;
                    continue _fun115762
                }
            case 18:
                var4 = _closure1_slot37;
                var3 = undefined;
                var3 = var4.bind(var3)();
                var4 = var3.length;
                var3 = 0;
                var3 = var4 > var3;
                _closure1_slot26 = var3;
                if (var3) {
                    _fun115762_ip = 52;
                    continue _fun115762
                }
            case 46:
                var3 = true;
                _closure2_slot0 = var3;
            case 52:
                var9 = _closure1_slot23;
                var6 = new Array(0);
                var4 = 0;
                var10 = var6;
                var8 = 0;
                var3 = arraySpread(var10, var9, var8);
                var5 = var6.forEach;
                var3 = function(arg0) { // Environment: var1
                    _fun115763: for (var _fun115763_ip = 0;;) switch (_fun115763_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 18;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var2);
                            var5 = var6.isEqual;
                            var2 = _closure1_slot41;
                            var4 = var2.bind(var0)(var3);
                            var2 = function arg0() {
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var2 = _closure1_slot28;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.id;
                                    var0 = _closure4_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var2.bind(var0)(var3);
                            var2 = var5.bind(var6)(var4, var2);
                            if (!var2) {
                                _fun115763_ip = 89;
                                continue _fun115763
                            }
                        case 66:
                            var2 = _closure1_slot23;
                            var1 = var2.delete;
                            var1 = var1.bind(var2)(var3);
                            var1 = true;
                            _closure2_slot0 = var1;
                        case 89:
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot23;
                var3 = var3.size;
                if (!(var4 === var3)) {
                    _fun115762_ip = 105;
                    continue _fun115762
                }
            case 101:
                _closure1_slot25 = var2;
            case 105:
                var3 = _closure1_slot29;
                if (!var3) {
                    _fun115762_ip = 154;
                    continue _fun115762
                }
            case 112:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var4 = 18;
                var5 = var5[var4];
                var4 = undefined;
                var7 = var6.bind(var4)(var5);
                var6 = var7.isEqual;
                var5 = _closure1_slot31;
                var4 = _closure1_slot32;
                var3 = var6.bind(var7)(var5, var4);
            case 154:
                if (!var3) {
                    _fun115762_ip = 167;
                    continue _fun115762
                }
            case 157:
                var3 = true;
                _closure2_slot0 = var3;
                _closure1_slot29 = var2;
            case 167:
                var1 = _closure2_slot0;
                if (!var1) {
                    _fun115762_ip = 188;
                    continue _fun115762
                }
            case 174:
                var1 = _closure1_slot35;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
            case 188:
                var0 = undefined;
                return var0;
        }
    };
    var3 = 500;
    var3 = var11.bind(var12)(var9, var3);
    var _closure1_slot34 = var3;
    var3 = 19;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var9 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun115767: for (var _fun115767_ip = 0;;) switch (_fun115767_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot36;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun115767_ip = 69;
                        continue _fun115767
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun115767_ip = 105;
                    continue _fun115767;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot12;
            var1 = _closure1_slot10;
            var0 = _closure1_slot11;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasChanges';
        var4.key = var6;
        var6 = function() {
            _fun115769: for (var _fun115769_ip = 0;;) switch (_fun115769_ip) {
                case 0:
                    var0 = _closure1_slot25;
                    if (var0) {
                        _fun115769_ip = 14;
                        continue _fun115769
                    }
                case 10:
                    var0 = _closure1_slot26;
                case 14:
                    if (var0) {
                        _fun115769_ip = 21;
                        continue _fun115769
                    }
                case 17:
                    var0 = _closure1_slot29;
                case 21:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getRoleStyleData';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot33;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'errorMessage';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasSortChanges';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot26;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasRoleConfigurationChanges';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot29;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'guild';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'editedRoleIds';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var0 = _closure1_slot23;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'editedRoleIdsForConfigurations';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot30;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'roles';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'formState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot24;
            return var0;
        };
        var4.get = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getSortDeltas';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot37;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'showNotice';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.hasChanges;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getRole';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot41;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getPermissionSearchQuery';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getEditedRoleConnectionConfigurationsMap';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot32;
            return var0;
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var3.bind(var0)(var9);
    var3 = 'GuildSettingsRolesStore';
    var9.displayName = var3;
    var3 = 20;
    var3 = var6[var3];
    var15 = var8.bind(var0)(var3);
    var3 = {};
    var11 = function() {
        var1 = _closure1_slot38;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var3.GUILD_SETTINGS_ROLES_INIT = var11;
    var3.GUILD_SETTINGS_INIT = var10;
    var3.GUILD_SETTINGS_SET_SECTION = var10;
    var10 = function arg0() {
        _fun115785: for (var _fun115785_ip = 0;;) switch (_fun115785_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.roles;
                var2 = _closure1_slot27;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun115785_ip = 40;
                    continue _fun115785
                }
            case 22:
                var2 = var3.length;
                var0 = _closure1_slot27;
                var0 = var0.length;
                if (!(var2 === var0)) {
                    _fun115785_ip = 117;
                    continue _fun115785
                }
            case 40:
                var2 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot41;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4 = var2.bind(var3)(var0);
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 13;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var5.bind(var0)(var2);
                var2 = var2.isNotNullish;
                var2 = var3.bind(var4)(var2);
                _closure1_slot27 = var2;
                var2 = true;
                _closure1_slot26 = var2;
                var1 = _closure1_slot34;
                var1 = var1.bind(var0)();
                return var0;
            case 117:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_SORT_UPDATE = var10;
    var10 = function arg0() {
        _fun115787: for (var _fun115787_ip = 0;;) switch (_fun115787_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.id;
                var8 = var0.flag;
                var4 = var0.allow;
                var0 = _closure1_slot41;
                var3 = undefined;
                var2 = var0.bind(var3)(var1);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun115787_ip = 113;
                    continue _fun115787
                }
            case 40:
                var7 = var2.permissions;
                var1 = _closure1_slot40;
                var0 = {};
                var6 = _closure1_slot2;
                var9 = _closure1_slot3;
                var5 = 14;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                if (var4) {
                    _fun115787_ip = 89;
                    continue _fun115787
                }
            case 75:
                var4 = var6.remove;
                var4 = var4.bind(var6)(var7, var8);
                _fun115787_ip = 100;
                continue _fun115787;
            case 89:
                var5 = var6.add;
                var4 = var5.bind(var6)(var7, var8);
            case 100:
                var0.permissions = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
            case 113:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS = var10;
    var10 = function arg0() {
        _fun115788: for (var _fun115788_ip = 0;;) switch (_fun115788_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var5 = var0.permissions;
                var0 = _closure1_slot41;
                var4 = undefined;
                var3 = var0.bind(var4)(var2);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun115788_ip = 54;
                    continue _fun115788
                }
            case 37:
                var2 = _closure1_slot40;
                var1 = {};
                var1.permissions = var5;
                var0 = var2.bind(var4)(var3, var1);
            case 54:
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET = var10;
    var10 = function arg0() {
        _fun115789: for (var _fun115789_ip = 0;;) switch (_fun115789_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.id;
                var0 = _closure1_slot41;
                var4 = undefined;
                var3 = var0.bind(var4)(var1);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun115789_ip = 74;
                    continue _fun115789
                }
            case 31:
                var2 = _closure1_slot40;
                var1 = {};
                var6 = _closure1_slot2;
                var7 = _closure1_slot3;
                var5 = 15;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.NONE;
                var1.permissions = var5;
                var0 = var2.bind(var4)(var3, var1);
            case 74:
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS = var10;
    var10 = function arg0() {
        _fun115790: for (var _fun115790_ip = 0;;) switch (_fun115790_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var5 = var0.name;
                var0 = _closure1_slot41;
                var4 = undefined;
                var3 = var0.bind(var4)(var2);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun115790_ip = 52;
                    continue _fun115790
                }
            case 36:
                var2 = _closure1_slot40;
                var1 = {};
                var1.name = var5;
                var0 = var2.bind(var4)(var3, var1);
            case 52:
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_UPDATE_NAME = var10;
    var10 = function arg0() {
        _fun115791: for (var _fun115791_ip = 0;;) switch (_fun115791_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var5 = var0.description;
                var0 = _closure1_slot41;
                var4 = undefined;
                var3 = var0.bind(var4)(var2);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun115791_ip = 52;
                    continue _fun115791
                }
            case 36:
                var2 = _closure1_slot40;
                var1 = {};
                var1.description = var5;
                var0 = var2.bind(var4)(var3, var1);
            case 52:
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION = var10;
    var10 = function arg0() {
        _fun115792: for (var _fun115792_ip = 0;;) switch (_fun115792_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.id;
                var8 = var0.color;
                var5 = null;
                var0 = 0;
                var7 = null;
                if (!(var0 !== var8)) {
                    _fun115792_ip = 59;
                    continue _fun115792
                }
            case 23:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.int2hex;
                var7 = var0.bind(var1)(var8);
            case 59:
                var0 = _closure1_slot41;
                var4 = undefined;
                var3 = var0.bind(var4)(var10);
                if (!(var5 != var3)) {
                    _fun115792_ip = 271;
                    continue _fun115792
                }
            case 80:
                var2 = _closure1_slot33;
                var0 = var2.get;
                var11 = var0.bind(var2)(var10);
                var0 = var5 != var11;
                if (!var0) {
                    _fun115792_ip = 269;
                    continue _fun115792
                }
            case 104:
                var2 = _closure1_slot22;
                var2 = var2.SOLID;
                var11.currentStyle = var2;
                var9 = var11.styleColors;
                var2 = _closure1_slot22;
                var6 = var2.SOLID;
                var2 = {
                    'primary_color': null,
                    'secondary_color': null,
                    'tertiary_color': null
                };
                var2.primary_color = var8;
                var9[var6] = var2;
                var9 = _closure1_slot33;
                var6 = var9.set;
                var2 = {};
                var14 = var2;
                var13 = var11;
                var11 = copyDataProperties(var14, var13);
                var2 = var6.bind(var9)(var10, var2);
                var2 = _closure1_slot40;
                var1 = {};
                var1.color = var8;
                var1.colorString = var7;
                var6 = {
                    'primary_color': null,
                    'secondary_color': null,
                    'tertiary_color': null
                };
                var6.primary_color = var8;
                var1.colors = var6;
                var6 = var5 != var7;
                var5 = null;
                if (!var6) {
                    _fun115792_ip = 258;
                    continue _fun115792
                }
            case 235:
                var6 = {
                    'primaryColor': null,
                    'secondaryColor': null,
                    'tertiaryColor': null
                };
                var6.primaryColor = var7;
                var5 = var6;
            case 258:
                var1.colorStrings = var5;
                var0 = var2.bind(var4)(var3, var1);
            case 269:
                return var0;
            case 271:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_UPDATE_COLOR = var10;
    var10 = function arg0() {
        _fun115793: for (var _fun115793_ip = 0;;) switch (_fun115793_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.id;
                var6 = var0.colors;
                var2 = var0.currentStyle;
                var0 = _closure1_slot41;
                var4 = undefined;
                var3 = var0.bind(var4)(var9);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun115793_ip = 181;
                    continue _fun115793
                }
            case 42:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 17;
                var5 = var8[var5];
                var7 = var7.bind(var4)(var5);
                var5 = var7.extractColorStringsFromServerColors;
                var5 = var5.bind(var7)(var6);
                var8 = _closure1_slot33;
                var7 = var8.get;
                var10 = var7.bind(var8)(var9);
                var0 = var0 != var10;
                if (!var0) {
                    _fun115793_ip = 179;
                    continue _fun115793
                }
            case 94:
                var7 = var10.styleColors;
                var7[var2] = var6;
                var10.currentStyle = var2;
                var8 = _closure1_slot33;
                var7 = var8.set;
                var2 = {};
                var12 = var2;
                var11 = var10;
                var10 = copyDataProperties(var12, var11);
                var2 = var7.bind(var8)(var9, var2);
                var2 = _closure1_slot40;
                var1 = {};
                var7 = var6.primary_color;
                var1.color = var7;
                var1.colors = var6;
                var6 = var5.primaryColor;
                var1.colorString = var6;
                var1.colorStrings = var5;
                var0 = var2.bind(var4)(var3, var1);
            case 179:
                return var0;
            case 181:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_UPDATE_COLORS = var10;
    var10 = function arg0() {
        _fun115794: for (var _fun115794_ip = 0;;) switch (_fun115794_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var6 = var0.hoist;
                var5 = var0.mentionable;
                var0 = _closure1_slot41;
                var4 = undefined;
                var3 = var0.bind(var4)(var2);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun115794_ip = 65;
                    continue _fun115794
                }
            case 43:
                var2 = _closure1_slot40;
                var1 = {};
                var1.hoist = var6;
                var1.mentionable = var5;
                var0 = var2.bind(var4)(var3, var1);
            case 65:
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_UPDATE_SETTINGS = var10;
    var10 = function arg0() {
        _fun115795: for (var _fun115795_ip = 0;;) switch (_fun115795_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var6 = var0.icon;
                var5 = var0.unicodeEmoji;
                var0 = _closure1_slot41;
                var4 = undefined;
                var3 = var0.bind(var4)(var2);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun115795_ip = 63;
                    continue _fun115795
                }
            case 42:
                var2 = _closure1_slot40;
                var1 = {};
                var1.icon = var6;
                var1.unicodeEmoji = var5;
                var0 = var2.bind(var4)(var3, var1);
            case 63:
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON = var10;
    var10 = function arg0() {
        _fun115796: for (var _fun115796_ip = 0;;) switch (_fun115796_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.role;
                var1 = var0.searchQuery;
                var _closure1_slot20 = var1;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun115796_ip = 101;
                    continue _fun115796
                }
            case 28:
                var5 = _closure1_slot41;
                var2 = var3.id;
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                if (!(var4 != var2)) {
                    _fun115796_ip = 60;
                    continue _fun115796
                }
            case 48:
                var2 = _closure1_slot40;
                var2 = var2.bind(var1)(var3, var3);
                _fun115796_ip = 101;
                continue _fun115796;
            case 60:
                var7 = _closure1_slot27;
                var2 = new Array(1);
                var6 = 0;
                var8 = var2;
                var4 = arraySpread(var8, var7, var6);
                var2[var4] = var3;
                var3 = 1;
                var3 = var4 + var3;
                _closure1_slot27 = var2;
                var0 = _closure1_slot34;
                var0 = var0.bind(var1)();
            case 101:
                var0 = undefined;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLE_SELECT = var10;
    var10 = function arg0() {
        _fun115797: for (var _fun115797_ip = 0;;) switch (_fun115797_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.id;
                var4 = var0.currentStyle;
                var1 = _closure1_slot41;
                var3 = undefined;
                var2 = var1.bind(var3)(var9);
                var6 = null;
                if (!(var6 != var2)) {
                    _fun115797_ip = 192;
                    continue _fun115797
                }
            case 37:
                var5 = _closure1_slot33;
                var1 = var5.get;
                var1 = var1.bind(var5)(var9);
                if (!(var6 != var1)) {
                    _fun115797_ip = 188;
                    continue _fun115797
                }
            case 58:
                var8 = _closure1_slot33;
                var7 = var8.set;
                var5 = {};
                var5.currentStyle = var4;
                var10 = var1.styleColors;
                var5.styleColors = var10;
                var5 = var7.bind(var8)(var9, var5);
                var1 = var1.styleColors;
                var5 = var1[var4];
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 17;
                var1 = var7[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.extractColorStringsFromServerColors;
                var4 = var1.bind(var4)(var5);
                var1 = _closure1_slot40;
                var0 = {};
                var7 = var5.primary_color;
                var8 = var6 != var7;
                var6 = undefined;
                if (!var8) {
                    _fun115797_ip = 156;
                    continue _fun115797
                }
            case 153:
                var6 = var7;
            case 156:
                var0.color = var6;
                var0.colors = var5;
                var5 = var4.primaryColor;
                var0.colorString = var5;
                var0.colorStrings = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
            case 188:
                var0 = false;
                return var0;
            case 192:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE = var10;
    var10 = function arg0() {
        _fun115798: for (var _fun115798_ip = 0;;) switch (_fun115798_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.roleId;
                var5 = var0.roleConnectionConfigurations;
                var2 = _closure1_slot41;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun115798_ip = 143;
                    continue _fun115798
                }
            case 35:
                var6 = _closure1_slot31;
                var4 = var6.get;
                var3 = var2.id;
                var6 = var4.bind(var6)(var3);
                var4 = _closure1_slot1;
                var7 = _closure1_slot3;
                var3 = 18;
                var3 = var7[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isEqual;
                var3 = var3.bind(var4)(var6, var5);
                if (var3) {
                    _fun115798_ip = 139;
                    continue _fun115798
                }
            case 89:
                var6 = _closure1_slot32;
                var4 = var6.set;
                var3 = var2.id;
                var3 = var4.bind(var6)(var3, var5);
                var4 = _closure1_slot31;
                var3 = var4.set;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2, var5);
                var1 = _closure1_slot34;
                var1 = var1.bind(var0)();
                return var0;
            case 139:
                var0 = false;
                return var0;
            case 143:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS = var10;
    var10 = function arg0() {
        _fun115799: for (var _fun115799_ip = 0;;) switch (_fun115799_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.roleId;
                var5 = var0.roleConnectionConfigurations;
                var2 = _closure1_slot41;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun115799_ip = 90;
                    continue _fun115799
                }
            case 35:
                var3 = true;
                _closure1_slot29 = var3;
                var6 = _closure1_slot30;
                var4 = var6.add;
                var3 = var2.id;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot32;
                var3 = var4.set;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2, var5);
                var1 = _closure1_slot34;
                var1 = var1.bind(var0)();
                return var0;
            case 90:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS = var10;
    var10 = function() {
        var0 = null;
        _closure1_slot19 = var0;
        var0 = new Array(0);
        _closure1_slot27 = var0;
        _closure1_slot28 = var0;
        var2 = _closure1_slot31;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot23;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot33;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var2 = _closure1_slot32;
        var0 = var2.clear;
        var0 = var0.bind(var2)();
        var0 = global;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var3 = var2;
        var0 = new var3[var0](var2);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot30 = var0;
        var0 = false;
        _closure1_slot25 = var0;
        _closure1_slot26 = var0;
        _closure1_slot29 = var0;
        var0 = _closure1_slot14;
        var0 = var0.CLOSED;
        _closure1_slot24 = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_CLOSE = var10;
    var3.GUILD_ROLE_CREATE = var7;
    var3.GUILD_ROLE_UPDATE = var7;
    var7 = function arg0() {
        _fun115801: for (var _fun115801_ip = 0;;) switch (_fun115801_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot30;
                var3 = var4.has;
                var1 = var2.roleId;
                var1 = var3.bind(var4)(var1);
                if (!var1) {
                    _fun115801_ip = 95;
                    continue _fun115801
                }
            case 29:
                var4 = _closure1_slot30;
                var3 = var4.delete;
                var1 = var2.roleId;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot31;
                var3 = var4.delete;
                var1 = var2.roleId;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot32;
                var3 = var4.delete;
                var1 = var2.roleId;
                var1 = var3.bind(var4)(var1);
                var1 = false;
                _closure1_slot29 = var1;
            case 95:
                var1 = _closure1_slot42;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var3.GUILD_ROLE_DELETE = var7;
    var7 = function() {
        var0 = _closure1_slot14;
        var0 = var0.SUBMITTING;
        _closure1_slot24 = var0;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_ROLES_SUBMITTING = var7;
    var7 = function arg0() {
        var0 = arg0;
        var1 = var0.message;
        var2 = _closure1_slot14;
        var2 = var2.OPEN;
        _closure1_slot24 = var2;
        _closure1_slot21 = var1;
        var0 = undefined;
        return var0;
    };
    var3.GUILD_SETTINGS_ROLES_SAVE_FAIL = var7;
    var7 = function() {
        var2 = _closure1_slot38;
        var0 = undefined;
        var1 = false;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.GUILD_SETTINGS_ROLES_SAVE_SUCCESS = var7;
    var7 = function arg0() {
        _fun115805: for (var _fun115805_ip = 0;;) switch (_fun115805_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var3 = _closure1_slot19;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun115805_ip = 137;
                    continue _fun115805
                }
            case 21:
                var0 = _closure1_slot19;
                var0 = var0.id;
                if (!(var1 === var0)) {
                    _fun115805_ip = 137;
                    continue _fun115805
                }
            case 34:
                var5 = _closure1_slot9;
                var4 = _closure1_slot19;
                var0 = global;
                var3 = var0.Set;
                var0 = _closure1_slot19;
                var8 = var0.features;
                var0 = new Array(1);
                var7 = 0;
                var9 = var0;
                var6 = arraySpread(var9, var8, var7);
                var1 = _closure1_slot16;
                var1 = var1.PIN_PERMISSION_MIGRATION_COMPLETE;
                var0[var6] = var1;
                var1 = 1;
                var1 = var6 + var1;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var1;
                var9 = var0;
                var0 = new var10[var3](var9, var8);
                var3 = var0 instanceof Object ? var0 : var1;
                var0 = undefined;
                var1 = 'features';
                var1 = var5.bind(var0)(var4, var1, var3);
                _closure1_slot19 = var1;
                return var0;
            case 137:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_PIN_PERMISSION_MIGRATED = var7;
    var7 = function arg0() {
        _fun115806: for (var _fun115806_ip = 0;;) switch (_fun115806_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var3 = _closure1_slot19;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun115806_ip = 137;
                    continue _fun115806
                }
            case 21:
                var0 = _closure1_slot19;
                var0 = var0.id;
                if (!(var1 === var0)) {
                    _fun115806_ip = 137;
                    continue _fun115806
                }
            case 34:
                var5 = _closure1_slot9;
                var4 = _closure1_slot19;
                var0 = global;
                var3 = var0.Set;
                var0 = _closure1_slot19;
                var8 = var0.features;
                var0 = new Array(1);
                var7 = 0;
                var9 = var0;
                var6 = arraySpread(var9, var8, var7);
                var1 = _closure1_slot16;
                var1 = var1.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE;
                var0[var6] = var1;
                var1 = 1;
                var1 = var6 + var1;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var1;
                var9 = var0;
                var0 = new var10[var3](var9, var8);
                var3 = var0 instanceof Object ? var0 : var1;
                var0 = undefined;
                var1 = 'features';
                var1 = var5.bind(var0)(var4, var1, var3);
                _closure1_slot19 = var1;
                return var0;
            case 137:
                var0 = false;
                return var0;
        }
    };
    var3.GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var16 = var7;
    var14 = var3;
    var3 = new var16[var9](var15, var14, var13);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot35 = var3;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/GuildSettingsRolesStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.RoleColorsStyle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1411, 14715, 1665, 8115, 660, 14716, 10181, 4752, 1304, 484, 3055, 668, 1668, 22, 566, 806, 2]);