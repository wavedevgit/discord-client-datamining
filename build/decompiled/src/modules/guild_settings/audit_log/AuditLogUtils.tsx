// modules/guild_settings/audit_log/AuditLogUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var9;
    var4 = function arg0, arg1() {
        _fun114793: for (var _fun114793_ip = 0;;) switch (_fun114793_ip) {
            case 0:
                var2 = arg1;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = var2.changes;
                var0 = null;
                var3 = var0 != var3;
                if (!var3) {
                    _fun114793_ip = 50;
                    continue _fun114793
                }
            case 27:
                var3 = var2.changes;
                var2 = var3.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 50:
                return var0;
        }
    };
    var _closure1_slot39 = var4;
    var0 = function arg0, arg1() {
        _fun114795: for (var _fun114795_ip = 0;;) switch (_fun114795_ip) {
            case 0:
                var2 = arg1;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = var2.changes;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun114795_ip = 30;
                    continue _fun114795
                }
            case 24:
                var0 = new Array(0);
                _fun114795_ip = 53;
                continue _fun114795;
            case 30:
                var3 = var2.changes;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 53:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0, arg1() {
        _fun114797: for (var _fun114797_ip = 0;;) switch (_fun114797_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = _closure1_slot2;
                var0 = _closure1_slot3;
                var10 = 21;
                var0 = var0[var10];
                var9 = undefined;
                var3 = var1.bind(var9)(var0);
                var1 = var3.deserialize;
                var6 = 'string';
                var7 = typeof var5;
                var0 = 0;
                if (!(var6 === var7)) {
                    _fun114797_ip = 53;
                    continue _fun114797
                }
            case 50:
                var0 = var5;
            case 53:
                var3 = var1.bind(var3)(var0);
                var1 = _closure1_slot2;
                var0 = _closure1_slot3;
                var0 = var0[var10];
                var1 = var1.bind(var9)(var0);
                var0 = var1.deserialize;
                var5 = typeof var4;
                var2 = 0;
                if (!(var6 === var5)) {
                    _fun114797_ip = 93;
                    continue _fun114797
                }
            case 90:
                var2 = var4;
            case 93:
                var2 = var0.bind(var1)(var2);
                var1 = _closure1_slot2;
                var0 = _closure1_slot3;
                var4 = var0[var10];
                var5 = var1.bind(var9)(var4);
                var4 = var5.remove;
                var8 = var4.bind(var5)(var2, var3);
                var0 = var0[var10];
                var1 = var1.bind(var9)(var0);
                var0 = var1.remove;
                var7 = var0.bind(var1)(var3, var2);
                var2 = new Array(0);
                var1 = new Array(0);
                var5 = _closure1_slot23;
                for (var0 in var5)
                    case 168: {
                        case 177: var13 = var0;
                        var12 = _closure1_slot23;
                        var13 = var12[var13];
                        var14 = _closure1_slot2;
                        var12 = _closure1_slot3;
                        var12 = var12[var10];
                        var14 = var14.bind(var9)(var12);
                        var12 = var14.has;
                        var12 = var12.bind(var14)(var8, var13);
                        if (!var12) {
                            _fun114797_ip = 229;
                            continue _fun114797
                        }
                        case 219: var12 = var2.push;
                        var12 = var12.bind(var2)(var13);
                        case 229: var14 = _closure1_slot2;
                        var12 = _closure1_slot3;
                        var12 = var12[var10];
                        var14 = var14.bind(var9)(var12);
                        var12 = var14.has;
                        var12 = var12.bind(var14)(var7, var13);
                        if (!var12) {
                            _fun114797_ip = 168;
                            continue _fun114797
                        }
                        case 260: var12 = var1.push;
                        var12 = var12.bind(var1)(var13);
                        _fun114797_ip = 168;
                        continue _fun114797;
                    }
            case 272:
                var0 = {};
                var0.added = var2;
                var0.removed = var1;
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function arg0() {
        _fun114798: for (var _fun114798_ip = 0;;) switch (_fun114798_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var1 = var0 == var2;
                if (var1) {
                    _fun114798_ip = 82;
                    continue _fun114798
                }
            case 12:
                var1 = {};
                var3 = var2.id;
                var1.id = var3;
                var3 = var2.name;
                var1.name = var3;
                var5 = var2.emoji_id;
                var4 = 0;
                var3 = undefined;
                if (!(var4 !== var5)) {
                    _fun114798_ip = 52;
                    continue _fun114798
                }
            case 46:
                var3 = var2.emoji_id;
            case 52:
                var1.emojiId = var3;
                var3 = var2.emoji_name;
                var1.emojiName = var3;
                var2 = var2.moderated;
                var1.moderated = var2;
                var0 = var1;
            case 82:
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var1 = function arg0() {
        _fun114799: for (var _fun114799_ip = 0;;) switch (_fun114799_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.oldValue;
                var1 = var0.newValue;
                var4 = global;
                var6 = var4.Array;
                var5 = var6.isArray;
                var5 = var5.bind(var6)(var2);
                if (var5) {
                    _fun114799_ip = 42;
                    continue _fun114799
                }
            case 38:
                var2 = new Array(0);
            case 42:
                var5 = var4.Array;
                var4 = var5.isArray;
                var4 = var4.bind(var5)(var1);
                if (var4) {
                    _fun114799_ip = 65;
                    continue _fun114799
                }
            case 61:
                var1 = new Array(0);
            case 65:
                var4 = var2.length;
                var5 = 0;
                if (!(var5 === var4)) {
                    _fun114799_ip = 88;
                    continue _fun114799
                }
            case 76:
                var4 = var1.length;
                if (!(var5 !== var4)) {
                    _fun114799_ip = 518;
                    continue _fun114799
                }
            case 88:
                var13 = {};
                var _closure2_slot0 = var13;
                var12 = {};
                var _closure2_slot1 = var12;
                var5 = var2.forEach;
                var4 = function(arg0) { // Environment: var3
                    var2 = arg0;
                    var1 = _closure2_slot0;
                    var0 = var2.id;
                    var1[var0] = var2;
                    var0 = undefined;
                    return var0;
                };
                var4 = var5.bind(var2)(var4);
                var4 = var1.forEach;
                var3 = function(arg0) { // Environment: var3
                    var2 = arg0;
                    var1 = _closure2_slot1;
                    var0 = var2.id;
                    var1[var0] = var2;
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var1)(var3);
                var4 = var2.length;
                var3 = var1.length;
                if (!(var4 < var3)) {
                    _fun114799_ip = 240;
                    continue _fun114799
                }
            case 148:
                var9 = var12;
                var7 = null;
                for (var5 in var9)
                    case 161: {
                        case 170: var3 = var5;
                        var4 = var13[var3];
                        if (var7 != var4) {
                            _fun114799_ip = 161;
                            continue _fun114799
                        }
                        case 181: var6 = _closure1_slot9;
                        var5 = _closure1_slot16;
                        var5 = var5.AVAILABLE_TAG_ADD;
                        var8 = _closure1_slot42;
                        var4 = var12[var3];
                        var3 = undefined;
                        var14 = var8.bind(var3)(var4);
                        var4 = var6.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var17 = var4;
                        var16 = var5;
                        var15 = null;
                        var3 = new var17[var6](var16, var15, var14, var13);
                        var3 = var3 instanceof Object ? var3 : var4;
                        return var3;
                    }
            case 240:
                var2 = var2.length;
                var1 = var1.length;
                if (!(var2 > var1)) {
                    _fun114799_ip = 346;
                    continue _fun114799
                }
            case 254:
                var7 = var13;
                var5 = null;
                for (var3 in var7)
                    case 267: {
                        case 276: var1 = var3;
                        var2 = var12[var1];
                        if (var5 != var2) {
                            _fun114799_ip = 267;
                            continue _fun114799
                        }
                        case 287: var4 = _closure1_slot9;
                        var3 = _closure1_slot16;
                        var3 = var3.AVAILABLE_TAG_DELETE;
                        var6 = _closure1_slot42;
                        var2 = var13[var1];
                        var1 = undefined;
                        var14 = var6.bind(var1)(var2);
                        var2 = var4.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var17 = var2;
                        var16 = var3;
                        var15 = null;
                        var1 = new var17[var4](var16, var15, var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    }
            case 346:
                var10 = var13;
                var5 = null;
                var6 = undefined;
                for (var7 in var10)
                    case 364: {
                        case 376: var1 = var7;
                        var3 = var13[var1];
                        var2 = var12[var1];
                        var1 = var5 == var2;
                        var4 = undefined;
                        if (var1) {
                            _fun114799_ip = 401;
                            continue _fun114799
                        }
                        case 396: var4 = var2.name;
                        case 401: var1 = var3.name;
                        if (!(var4 === var1)) {
                            _fun114799_ip = 460;
                            continue _fun114799
                        }
                        case 410: var1 = var5 == var2;
                        var4 = undefined;
                        if (var1) {
                            _fun114799_ip = 425;
                            continue _fun114799
                        }
                        case 419: var4 = var2.emoji_id;
                        case 425: var1 = var3.emoji_id;
                        if (!(var4 === var1)) {
                            _fun114799_ip = 460;
                            continue _fun114799
                        }
                        case 435: var1 = var5 == var2;
                        var4 = undefined;
                        if (var1) {
                            _fun114799_ip = 450;
                            continue _fun114799
                        }
                        case 444: var4 = var2.emoji_name;
                        case 450: var1 = var3.emoji_name;
                        if (var4 === var1) {
                            _fun114799_ip = 364;
                            continue _fun114799
                        }
                        case 460: var5 = _closure1_slot9;
                        var4 = _closure1_slot16;
                        var4 = var4.AVAILABLE_TAG_EDIT;
                        var1 = _closure1_slot42;
                        var15 = var1.bind(var6)(var3);
                        var14 = var1.bind(var6)(var2);
                        var2 = var5.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var17 = var2;
                        var16 = var4;
                        var1 = new var17[var5](var16, var15, var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    }
            case 516:
                return var0;
            case 518:
                return var0;
        }
    };
    var _closure1_slot43 = var1;
    var0 = function arg0, arg1, arg2() {
        _fun114802: for (var _fun114802_ip = 0;;) switch (_fun114802_ip) {
            case 0:
                var1 = arg0;
                var7 = arg1;
                var6 = arg2;
                var4 = var1.newValue;
                var3 = var1.oldValue;
                var2 = var1.newValue;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun114802_ip = 71;
                    continue _fun114802
                }
            case 33:
                var2 = var1.newValue;
                var8 = undefined;
                var5 = var7.bind(var8)(var2);
                var9 = var0 != var6;
                if (!var9) {
                    _fun114802_ip = 57;
                    continue _fun114802
                }
            case 53:
                var9 = var0 != var5;
            case 57:
                var2 = var5;
                if (!var9) {
                    _fun114802_ip = 68;
                    continue _fun114802
                }
            case 63:
                var2 = var6.bind(var8)(var5);
            case 68:
                var4 = var2;
            case 71:
                var2 = var1.oldValue;
                if (!(var0 != var2)) {
                    _fun114802_ip = 119;
                    continue _fun114802
                }
            case 81:
                var2 = var1.oldValue;
                var5 = undefined;
                var2 = var7.bind(var5)(var2);
                var7 = var0 != var6;
                if (!var7) {
                    _fun114802_ip = 105;
                    continue _fun114802
                }
            case 101:
                var7 = var0 != var2;
            case 105:
                var0 = var2;
                if (!var7) {
                    _fun114802_ip = 116;
                    continue _fun114802
                }
            case 111:
                var0 = var6.bind(var5)(var2);
            case 116:
                var3 = var0;
            case 119:
                var2 = _closure1_slot9;
                var0 = var1.key;
                if (var3) {
                    _fun114802_ip = 140;
                    continue _fun114802
                }
            case 134:
                var3 = var1.oldValue;
            case 140:
                if (var4) {
                    _fun114802_ip = 149;
                    continue _fun114802
                }
            case 143:
                var4 = var1.newValue;
            case 149:
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = var1;
                var12 = var0;
                var11 = var3;
                var10 = var4;
                var0 = new var13[var2](var12, var11, var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot44 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun114803: for (var _fun114803_ip = 0;;) switch (_fun114803_ip) {
            case 0:
                var5 = arg0;
                var6 = arg3;
                var0 = arg4;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun114803_ip = 30;
                    continue _fun114803
                }
            case 24:
                var0 = var5.targetId;
            case 30:
                var1 = arg2;
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var8 = var2 != var1;
                if (!var8) {
                    _fun114803_ip = 51;
                    continue _fun114803
                }
            case 47:
                var8 = var2 != var6;
            case 51:
                var7 = null;
                if (!var8) {
                    _fun114803_ip = 61;
                    continue _fun114803
                }
            case 56:
                var7 = var6.bind(var3)(var1);
            case 61:
                var3 = var7;
                if (!(var2 == var3)) {
                    _fun114803_ip = 118;
                    continue _fun114803
                }
            case 68:
                var1 = _closure1_slot14;
                var6 = var1.deletedTargets;
                var1 = var5.targetType;
                var1 = var6[var1];
                var6 = var2 != var1;
                if (!var6) {
                    _fun114803_ip = 108;
                    continue _fun114803
                }
            case 100:
                var8 = var1[var0];
                var6 = var2 != var8;
            case 108:
                var3 = var7;
                if (!var6) {
                    _fun114803_ip = 118;
                    continue _fun114803
                }
            case 114:
                var3 = var1[var0];
            case 118:
                var1 = var3;
                if (!(var2 == var1)) {
                    _fun114803_ip = 186;
                    continue _fun114803
                }
            case 125:
                var6 = var5.changes;
                var1 = var3;
                if (!(var2 != var6)) {
                    _fun114803_ip = 186;
                    continue _fun114803
                }
            case 138:
                var6 = var5.changes;
                var5 = var6.find;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var1 = var3;
                if (!(var2 != var4)) {
                    _fun114803_ip = 186;
                    continue _fun114803
                }
            case 168:
                var3 = var4.newValue;
                if (var3) {
                    _fun114803_ip = 183;
                    continue _fun114803
                }
            case 177:
                var3 = var4.oldValue;
            case 183:
                var1 = var3;
            case 186:
                if (!(var2 != var1)) {
                    _fun114803_ip = 193;
                    continue _fun114803
                }
            case 190:
                var0 = var1;
            case 193:
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun114805: for (var _fun114805_ip = 0;;) switch (_fun114805_ip) {
            case 0:
                var0 = arg0;
                var3 = arg2;
                var1 = arg1;
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var5 = null;
                var4 = var5 != var1;
                if (!var4) {
                    _fun114805_ip = 29;
                    continue _fun114805
                }
            case 25:
                var4 = var5 != var3;
            case 29:
                if (!var4) {
                    _fun114805_ip = 37;
                    continue _fun114805
                }
            case 32:
                var0 = var3.bind(var2)(var1);
            case 37:
                return var0;
        }
    };
    var _closure1_slot46 = var0;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun114807: for (var _fun114807_ip = 0;;) switch (_fun114807_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.oldValue;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun114807_ip = 24;
                        continue _fun114807
                    }
                case 15:
                    var0 = _closure2_slot1;
                    _fun114807_ip = 31;
                    continue _fun114807;
                case 24:
                    var0 = _closure2_slot0;
                case 31:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot47 = var0;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun114809: for (var _fun114809_ip = 0;;) switch (_fun114809_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.newValue;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun114809_ip = 24;
                        continue _fun114809
                    }
                case 15:
                    var0 = _closure2_slot1;
                    _fun114809_ip = 31;
                    continue _fun114809;
                case 24:
                    var0 = _closure2_slot0;
                case 31:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot48 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun114811: for (var _fun114811_ip = 0;;) switch (_fun114811_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.newValue;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun114811_ip = 25;
                        continue _fun114811
                    }
                case 15:
                    var2 = var0.oldValue;
                    if (!(var1 == var2)) {
                        _fun114811_ip = 72;
                        continue _fun114811
                    }
                case 25:
                    var2 = var0.newValue;
                    if (!(var1 == var2)) {
                        _fun114811_ip = 63;
                        continue _fun114811
                    }
                case 35:
                    var0 = var0.oldValue;
                    if (!(var1 == var0)) {
                        _fun114811_ip = 54;
                        continue _fun114811
                    }
                case 45:
                    var0 = _closure2_slot3;
                    _fun114811_ip = 61;
                    continue _fun114811;
                case 54:
                    var0 = _closure2_slot2;
                case 61:
                    _fun114811_ip = 70;
                    continue _fun114811;
                case 63:
                    var0 = _closure2_slot1;
                case 70:
                    _fun114811_ip = 79;
                    continue _fun114811;
                case 72:
                    var0 = _closure2_slot0;
                case 79:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot49 = var0;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun114813: for (var _fun114813_ip = 0;;) switch (_fun114813_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.newValue;
                    if (var0) {
                        _fun114813_ip = 21;
                        continue _fun114813
                    }
                case 15:
                    var0 = _closure2_slot1;
                    _fun114813_ip = 25;
                    continue _fun114813;
                case 21:
                    var0 = _closure2_slot0;
                case 25:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot50 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.newValue;
            var0 = _closure2_slot0;
            var0 = var0[var1];
            return var0;
        };
        return var0;
    };
    var _closure1_slot51 = var0;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun114817: for (var _fun114817_ip = 0;;) switch (_fun114817_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0.newValue;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun114817_ip = 30;
                        continue _fun114817
                    }
                case 26:
                    var0 = _closure2_slot1;
                case 30:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot52 = var0;
    var0 = global;
    var10 = var0.Object;
    var6 = var10.defineProperty;
    var5 = {};
    var12 = true;
    var5.value = var12;
    var0 = '__esModule';
    var0 = var6.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var9[var0];
    var0 = undefined;
    var5 = var7.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.AuditLogChange;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot12 = var5;
    var5 = 9;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot13 = var5;
    var5 = 10;
    var5 = var9[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot14 = var5;
    var5 = 11;
    var5 = var9[var5];
    var6 = var8.bind(var0)(var5);
    var5 = var6.AuditLogActions;
    var _closure1_slot15 = var5;
    var11 = var6.AuditLogChangeKeys;
    var _closure1_slot16 = var11;
    var5 = var6.AuditLogTargetTypes;
    var _closure1_slot17 = var5;
    var10 = var6.MFALevels;
    var _closure1_slot18 = var10;
    var10 = var6.VerificationLevels;
    var _closure1_slot19 = var10;
    var10 = var6.UserNotificationSettings;
    var _closure1_slot20 = var10;
    var10 = var6.GuildExplicitContentFilterTypes;
    var _closure1_slot21 = var10;
    var10 = var6.ChannelTypes;
    var _closure1_slot22 = var10;
    var10 = var6.Permissions;
    var _closure1_slot23 = var10;
    var10 = var6.NOOP_NULL;
    var _closure1_slot24 = var10;
    var10 = var6.VideoQualityMode;
    var _closure1_slot25 = var10;
    var10 = var6.ApplicationCommandPermissionTypes;
    var _closure1_slot26 = var10;
    var10 = var6.AuditLogSubtargetTypes;
    var _closure1_slot27 = var10;
    var6 = var6.SystemChannelFlags;
    var _closure1_slot28 = var6;
    var6 = 12;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.ChannelFlags;
    var _closure1_slot29 = var6;
    var6 = 13;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.AutomodTriggerType;
    var _closure1_slot30 = var6;
    var6 = 14;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var10 = var6.GuildScheduledEventEntityTypes;
    var _closure1_slot31 = var10;
    var10 = var6.GuildScheduledEventStatus;
    var _closure1_slot32 = var10;
    var6 = var6.GuildScheduledEventPrivacyLevel;
    var _closure1_slot33 = var6;
    var6 = 15;
    var6 = var9[var6];
    var10 = var7.bind(var0)(var6);
    var6 = var10.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var10
        }
    });
    var17 = 'AuditLogUtils';
    var18 = var7;
    var6 = new var18[var10](var17, var16);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot34 = var6;
    var10 = 16;
    var6 = var9[var10];
    var6 = var8.bind(var0)(var6);
    var6 = var6.TimeUnits;
    var7 = var6.DAYS;
    var6 = new Array(4);
    var6[0] = var7;
    var7 = var9[var10];
    var7 = var8.bind(var0)(var7);
    var7 = var7.TimeUnits;
    var7 = var7.HOURS;
    var6[1] = var7;
    var7 = var9[var10];
    var7 = var8.bind(var0)(var7);
    var7 = var7.TimeUnits;
    var7 = var7.MINUTES;
    var6[2] = var7;
    var7 = var9[var10];
    var7 = var8.bind(var0)(var7);
    var7 = var7.TimeUnits;
    var7 = var7.SECONDS;
    var6[3] = var7;
    var _closure1_slot35 = var6;
    var6 = function() {
        var0 = {};
        var1 = _closure1_slot16;
        var2 = var1.REASON;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["2IW3C5"];
            return var0;
        };
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot36 = var6;
    var6 = {};
    var13 = var5.CHANNEL;
    var7 = {};
    var14 = var11.ID;
    var7[var14] = var12;
    var14 = var11.PERMISSION_OVERWRITES;
    var7[var14] = var12;
    var6[var13] = var7;
    var13 = var5.CHANNEL_OVERWRITE;
    var7 = {};
    var14 = var11.TYPE;
    var7[var14] = var12;
    var14 = var11.ID;
    var7[var14] = var12;
    var14 = var11.PERMISSION_OVERWRITES;
    var7[var14] = var12;
    var6[var13] = var7;
    var13 = var5.INVITE;
    var7 = {};
    var14 = var11.INVITER_ID;
    var7[var14] = var12;
    var14 = var11.USES;
    var7[var14] = var12;
    var6[var13] = var7;
    var13 = var5.WEBHOOK;
    var7 = {};
    var14 = var11.TYPE;
    var7[var14] = var12;
    var14 = var11.APPLICATION_ID;
    var7[var14] = var12;
    var6[var13] = var7;
    var13 = var5.INTEGRATION;
    var7 = {};
    var14 = var11.TYPE;
    var7[var14] = var12;
    var6[var13] = var7;
    var13 = var5.THREAD;
    var7 = {};
    var14 = var11.ID;
    var7[var14] = var12;
    var14 = var11.TYPE;
    var7[var14] = var12;
    var6[var13] = var7;
    var13 = var5.STICKER;
    var7 = {};
    var14 = var11.ID;
    var7[var14] = var12;
    var14 = var11.TYPE;
    var7[var14] = var12;
    var14 = var11.ASSET;
    var7[var14] = var12;
    var14 = var11.FORMAT_TYPE;
    var7[var14] = var12;
    var14 = var11.AVAILABLE;
    var7[var14] = var12;
    var14 = var11.GUILD_ID;
    var7[var14] = var12;
    var6[var13] = var7;
    var13 = var5.GUILD_HOME;
    var7 = {};
    var14 = var11.ENTITY_TYPE;
    var7[var14] = var12;
    var6[var13] = var7;
    var13 = var5.GUILD_ONBOARDING;
    var7 = {};
    var14 = var11.PROMPTS;
    var7[var14] = var12;
    var6[var13] = var7;
    var7 = var5.GUILD_SOUNDBOARD;
    var5 = {};
    var13 = var11.ID;
    var5[var13] = var12;
    var11 = var11.SOUND_ID;
    var5[var11] = var12;
    var6[var7] = var5;
    var5 = function() {
        var1 = {};
        var3 = _closure1_slot15;
        var2 = var3.ALL;
        var1.value = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var2 = 17;
        var0 = var7[var2];
        var5 = undefined;
        var0 = var6.bind(var5)(var0);
        var8 = var0.intl;
        var4 = var8.string;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var0 = var0.t;
        var0 = var0.QxEVcv;
        var0 = var4.bind(var8)(var0);
        var1.label = var0;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var8 = var0.intl;
        var4 = var8.string;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var0 = var0.t;
        var0 = var0.an9Ry3;
        var0 = var4.bind(var8)(var0);
        var1.valueLabel = var0;
        var0 = new Array(67);
        var0[0] = var1;
        var1 = {};
        var4 = var3.GUILD_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["5INZa3"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[1] = var1;
        var1 = {};
        var4 = var3.CHANNEL_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["2uh4vJ"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[2] = var1;
        var1 = {};
        var4 = var3.CHANNEL_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.mGsBLV;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[3] = var1;
        var1 = {};
        var4 = var3.CHANNEL_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.hCHzAr;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[4] = var1;
        var1 = {};
        var4 = var3.CHANNEL_OVERWRITE_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["8TnAMP"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[5] = var1;
        var1 = {};
        var4 = var3.CHANNEL_OVERWRITE_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.Jqx0Bi;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[6] = var1;
        var1 = {};
        var4 = var3.CHANNEL_OVERWRITE_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.gBXOr4;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[7] = var1;
        var1 = {};
        var4 = var3.MEMBER_KICK;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["Q1/hN8"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[8] = var1;
        var1 = {};
        var4 = var3.MEMBER_PRUNE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.tOTTja;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[9] = var1;
        var1 = {};
        var4 = var3.MEMBER_BAN_ADD;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["NfPn+e"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[10] = var1;
        var1 = {};
        var4 = var3.MEMBER_BAN_REMOVE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.XCsGfI;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[11] = var1;
        var1 = {};
        var4 = var3.MEMBER_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["F/jmNJ"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[12] = var1;
        var1 = {};
        var4 = var3.MEMBER_ROLE_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.zAveSI;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[13] = var1;
        var1 = {};
        var4 = var3.MEMBER_MOVE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.QshteR;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[14] = var1;
        var1 = {};
        var4 = var3.MEMBER_DISCONNECT;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.Z45os7;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[15] = var1;
        var1 = {};
        var4 = var3.BOT_ADD;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.vuH24Z;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[16] = var1;
        var1 = {};
        var4 = var3.THREAD_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["+zl0DG"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[17] = var1;
        var1 = {};
        var4 = var3.THREAD_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.rbIry3;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[18] = var1;
        var1 = {};
        var4 = var3.THREAD_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.hFjNEA;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[19] = var1;
        var1 = {};
        var4 = var3.ROLE_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.AbxKtv;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[20] = var1;
        var1 = {};
        var4 = var3.ROLE_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.t3Z6sU;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[21] = var1;
        var1 = {};
        var4 = var3.ROLE_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.YsFpa4;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[22] = var1;
        var1 = {};
        var4 = var3.ONBOARDING_PROMPT_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.ZV9tqc;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[23] = var1;
        var1 = {};
        var4 = var3.ONBOARDING_PROMPT_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.PcOdvX;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[24] = var1;
        var1 = {};
        var4 = var3.ONBOARDING_PROMPT_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["+r33Na"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[25] = var1;
        var1 = {};
        var4 = var3.ONBOARDING_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.uDADde;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[26] = var1;
        var1 = {};
        var4 = var3.ONBOARDING_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.J1H1wg;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[27] = var1;
        var1 = {};
        var4 = var3.HOME_SETTINGS_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.Di4cvI;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[28] = var1;
        var1 = {};
        var4 = var3.HOME_SETTINGS_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.tzyrJH;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[29] = var1;
        var1 = {};
        var4 = var3.INVITE_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["0BNJdX"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[30] = var1;
        var1 = {};
        var4 = var3.INVITE_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["o++obV"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[31] = var1;
        var1 = {};
        var4 = var3.INVITE_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.iP40Az;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[32] = var1;
        var1 = {};
        var4 = var3.WEBHOOK_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["tBF4+S"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[33] = var1;
        var1 = {};
        var4 = var3.WEBHOOK_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.eV3McO;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[34] = var1;
        var1 = {};
        var4 = var3.WEBHOOK_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.AAL3K1;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[35] = var1;
        var1 = {};
        var4 = var3.EMOJI_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.RuWm0V;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[36] = var1;
        var1 = {};
        var4 = var3.EMOJI_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.WzdUY7;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[37] = var1;
        var1 = {};
        var4 = var3.EMOJI_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.c3dK2L;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[38] = var1;
        var1 = {};
        var4 = var3.MESSAGE_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.daTfXh;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[39] = var1;
        var1 = {};
        var4 = var3.MESSAGE_BULK_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.nrBxeh;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[40] = var1;
        var1 = {};
        var4 = var3.MESSAGE_PIN;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.MUldyN;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[41] = var1;
        var1 = {};
        var4 = var3.MESSAGE_UNPIN;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.n4zKhA;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[42] = var1;
        var1 = {};
        var4 = var3.INTEGRATION_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.deNm8x;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[43] = var1;
        var1 = {};
        var4 = var3.INTEGRATION_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.HT7Sfg;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[44] = var1;
        var1 = {};
        var4 = var3.INTEGRATION_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["+kJ09q"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[45] = var1;
        var1 = {};
        var4 = var3.STICKER_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["3DzNjU"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[46] = var1;
        var1 = {};
        var4 = var3.STICKER_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.tdhW5b;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[47] = var1;
        var1 = {};
        var4 = var3.STICKER_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["+ZhGOk"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[48] = var1;
        var1 = {};
        var4 = var3.STAGE_INSTANCE_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.sPbjA6;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[49] = var1;
        var1 = {};
        var4 = var3.STAGE_INSTANCE_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.cW9LfJ;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[50] = var1;
        var1 = {};
        var4 = var3.STAGE_INSTANCE_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["U1r+yD"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[51] = var1;
        var1 = {};
        var4 = var3.GUILD_SCHEDULED_EVENT_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.H81Zyy;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[52] = var1;
        var1 = {};
        var4 = var3.GUILD_SCHEDULED_EVENT_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["FM69l+"];
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[53] = var1;
        var1 = {};
        var4 = var3.GUILD_SCHEDULED_EVENT_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.Rq28Bh;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[54] = var1;
        var1 = {};
        var4 = var3.APPLICATION_COMMAND_PERMISSION_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.iPdFOt;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[55] = var1;
        var1 = {};
        var4 = var3.AUTO_MODERATION_BLOCK_MESSAGE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.gNq5z6;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[56] = var1;
        var1 = {};
        var4 = var3.AUTO_MODERATION_RULE_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.f72Zqb;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[57] = var1;
        var1 = {};
        var4 = var3.AUTO_MODERATION_RULE_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.XeqIiv;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[58] = var1;
        var1 = {};
        var4 = var3.AUTO_MODERATION_RULE_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.syAApU;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[59] = var1;
        var1 = {};
        var4 = var3.GUILD_HOME_FEATURE_ITEM;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.lhG5KN;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[60] = var1;
        var1 = {};
        var4 = var3.GUILD_HOME_REMOVE_ITEM;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.lRPRwS;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[61] = var1;
        var1 = {};
        var4 = var3.SOUNDBOARD_SOUND_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.yoRi5r;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[62] = var1;
        var1 = {};
        var4 = var3.SOUNDBOARD_SOUND_UPDATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.uKlG0Z;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[63] = var1;
        var1 = {};
        var4 = var3.SOUNDBOARD_SOUND_DELETE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.gq0iCT;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[64] = var1;
        var1 = {};
        var4 = var3.VOICE_CHANNEL_STATUS_CREATE;
        var1.value = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var9 = var4.intl;
        var8 = var9.string;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.rGr0YM;
        var4 = var8.bind(var9)(var4);
        var1.label = var4;
        var0[65] = var1;
        var1 = {};
        var3 = var3.VOICE_CHANNEL_STATUS_DELETE;
        var1.value = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.V9PEQ4;
        var2 = var3.bind(var4)(var2);
        var1.label = var2;
        var0[66] = var1;
        return var0;
    };
    var _closure1_slot37 = var5;
    var7 = {};
    var11 = var9[var10];
    var11 = var8.bind(var0)(var11);
    var11 = var11.TimeUnits;
    var12 = var11.SECONDS;
    var11 = function(arg0) { // Environment: var3
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var0 = 17;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.geSp4K;
        var0 = {};
        var4 = arg0;
        var0.seconds = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var7[var12] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var0)(var11);
    var11 = var11.TimeUnits;
    var12 = var11.MINUTES;
    var11 = function(arg0) { // Environment: var3
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var0 = 17;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.iXLF9W;
        var0 = {};
        var4 = arg0;
        var0.minutes = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var7[var12] = var11;
    var11 = var9[var10];
    var11 = var8.bind(var0)(var11);
    var11 = var11.TimeUnits;
    var12 = var11.HOURS;
    var11 = function(arg0) { // Environment: var3
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var0 = 17;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.xCjYxK;
        var0 = {};
        var4 = arg0;
        var0.hours = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var7[var12] = var11;
    var10 = var9[var10];
    var10 = var8.bind(var0)(var10);
    var10 = var10.TimeUnits;
    var11 = var10.DAYS;
    var10 = function(arg0) { // Environment: var3
        var4 = _closure1_slot0;
        var5 = _closure1_slot3;
        var0 = 17;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0["k2UNz+"];
        var0 = {};
        var4 = arg0;
        var0.days = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var7[var11] = var10;
    var _closure1_slot38 = var7;
    var7 = 31;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_settings/audit_log/AuditLogUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var4 = var2.NAME;
        var2 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.CkDiNH;
            return var0;
        };
        var0[var4] = var2;
        var2 = _closure1_slot16;
        var6 = var2.DESCRIPTION;
        var12 = _closure1_slot48;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 17;
        var5 = var9[var4];
        var2 = undefined;
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var7 = var5.RP3Ey3;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.QAVj1Y;
        var5 = var12.bind(var2)(var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.ICON_HASH;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.iLZ8Q9;
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.SPLASH_HASH;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["4VV6dn"];
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.DISCOVERY_SPLASH_HASH;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["2pds6p"];
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.BANNER_HASH;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var7 = var5.Cxq4zO;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["H7eE/9"];
        var5 = var12.bind(var2)(var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.OWNER_ID;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["8ltsLT"];
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.REGION;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.X9r5Kf;
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.PREFERRED_LOCALE;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.UnXuDS;
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.AFK_CHANNEL_ID;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var7 = var5.ClBuA4;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["ms+xtL"];
        var5 = var12.bind(var2)(var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.AFK_TIMEOUT;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.q21fHa;
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.SYSTEM_CHANNEL_ID;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var7 = var5.H1VXaa;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.XhtmxJ;
        var5 = var12.bind(var2)(var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.RULES_CHANNEL_ID;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var7 = var5.OI6MG2;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.lik3tI;
        var5 = var12.bind(var2)(var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.PUBLIC_UPDATES_CHANNEL_ID;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var7 = var5.YxBKrY;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.Ehsnij;
        var5 = var12.bind(var2)(var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.MFA_LEVEL;
        var10 = _closure1_slot51;
        var5 = {};
        var7 = _closure1_slot18;
        var13 = var7.NONE;
        var11 = var9[var4];
        var11 = var8.bind(var2)(var11);
        var11 = var11.t;
        var11 = var11.voaCCQ;
        var5[var13] = var11;
        var11 = var7.ELEVATED;
        var7 = var9[var4];
        var7 = var8.bind(var2)(var7);
        var7 = var7.t;
        var7 = var7.pRNVwz;
        var5[var11] = var7;
        var5 = var10.bind(var2)(var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.WIDGET_ENABLED;
        var7 = _closure1_slot50;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var11 = var5.ADIty8;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.nf58VY;
        var5 = var7.bind(var2)(var11, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.WIDGET_CHANNEL_ID;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var11 = var5["6SBsDc"];
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.deQ5wO;
        var5 = var12.bind(var2)(var11, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.VERIFICATION_LEVEL;
        var5 = {};
        var11 = _closure1_slot19;
        var14 = var11.NONE;
        var13 = var9[var4];
        var13 = var8.bind(var2)(var13);
        var13 = var13.t;
        var13 = var13.W27rsc;
        var5[var14] = var13;
        var14 = var11.LOW;
        var13 = var9[var4];
        var13 = var8.bind(var2)(var13);
        var13 = var13.t;
        var13 = var13["V8P+Pw"];
        var5[var14] = var13;
        var14 = var11.MEDIUM;
        var13 = var9[var4];
        var13 = var8.bind(var2)(var13);
        var13 = var13.t;
        var13 = var13.ERQFau;
        var5[var14] = var13;
        var14 = var11.HIGH;
        var13 = var9[var4];
        var13 = var8.bind(var2)(var13);
        var13 = var13.t;
        var13 = var13["83fN0j"];
        var5[var14] = var13;
        var13 = var11.VERY_HIGH;
        var11 = var9[var4];
        var11 = var8.bind(var2)(var11);
        var11 = var11.t;
        var11 = var11.PnkQJE;
        var5[var13] = var11;
        var5 = var10.bind(var2)(var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.DEFAULT_MESSAGE_NOTIFICATIONS;
        var5 = {};
        var11 = _closure1_slot20;
        var14 = var11.ALL_MESSAGES;
        var13 = var9[var4];
        var13 = var8.bind(var2)(var13);
        var13 = var13.t;
        var13 = var13.LDi76A;
        var5[var14] = var13;
        var13 = var11.ONLY_MENTIONS;
        var11 = var9[var4];
        var11 = var8.bind(var2)(var11);
        var11 = var11.t;
        var11 = var11["6K83ba"];
        var5[var13] = var11;
        var5 = var10.bind(var2)(var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.VANITY_URL_CODE;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var11 = var5.Zplsov;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.u6cArh;
        var5 = var12.bind(var2)(var11, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.EXPLICIT_CONTENT_FILTER;
        var5 = {};
        var11 = _closure1_slot21;
        var13 = var11.DISABLED;
        var12 = var9[var4];
        var12 = var8.bind(var2)(var12);
        var12 = var12.t;
        var12 = var12.fmOeL3;
        var5[var13] = var12;
        var13 = var11.MEMBERS_WITHOUT_ROLES;
        var12 = var9[var4];
        var12 = var8.bind(var2)(var12);
        var12 = var12.t;
        var12 = var12["4FghYw"];
        var5[var13] = var12;
        var12 = var11.ALL_MEMBERS;
        var11 = var9[var4];
        var11 = var8.bind(var2)(var11);
        var11 = var11.t;
        var11 = var11.olyrSm;
        var5[var12] = var11;
        var5 = var10.bind(var2)(var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var5 = var5.PREMIUM_PROGRESS_BAR_ENABLED;
        var6 = var9[var4];
        var6 = var8.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6.rBT0sn;
        var4 = var9[var4];
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["gc+te5"];
        var4 = var7.bind(var2)(var6, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.AUTO_MODERATION_TRIGGERED_RULE_NAME;
        var4 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.YbouFH;
            return var0;
        };
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS;
        var4 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.g3DMjB;
            return var0;
        };
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS;
        var4 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["+fQAel"];
            return var0;
        };
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS;
        var4 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.E1fc4v;
            return var0;
        };
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES;
        var3 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.XbwtSA;
            return var0;
        };
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var15 = var1.bind(var2)();
        var16 = var0;
        var1 = copyDataProperties(var16, var15);
        return var0;
    };
    var2.GuildChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var1 = _closure1_slot16;
        var8 = var1.NAME;
        var10 = _closure1_slot47;
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 17;
        var4 = var7[var1];
        var5 = undefined;
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4.f8Rh0U;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.ebD4Qp;
        var4 = var10.bind(var5)(var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.POSITION;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4.isS8te;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.t5uBis;
        var4 = var10.bind(var5)(var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.TOPIC;
        var12 = _closure1_slot49;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var11 = var4.esQcxn;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4["m+veAn"];
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["ws/1FA"];
        var4 = var12.bind(var5)(var11, var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.BITRATE;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4.fw81ak;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.MFNlgZ;
        var4 = var10.bind(var5)(var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.RTC_REGION_OVERRIDE;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var11 = var4["6kajxx"];
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4.eGOlmU;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4["0JMZdz"];
        var4 = var12.bind(var5)(var11, var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.USER_LIMIT;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4.wk5t7p;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.XgjCEh;
        var4 = var10.bind(var5)(var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.RATE_LIMIT_PER_USER;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4["7lirhF"];
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.j4CCJR;
        var4 = var10.bind(var5)(var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.PERMISSIONS_RESET;
        var4 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["+vSBFY"];
            return var0;
        };
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.PERMISSIONS_GRANTED;
        var4 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.EKLJv8;
            return var0;
        };
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.PERMISSIONS_DENIED;
        var4 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.U3rO5X;
            return var0;
        };
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.REASON;
        var4 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["2IW3C5"];
            return var0;
        };
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.NSFW;
        var11 = _closure1_slot50;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4.H8Ri2Y;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.WW6cJw;
        var4 = var11.bind(var5)(var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.TYPE;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4.Vn5zn2;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.aq4uWI;
        var4 = var10.bind(var5)(var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.VIDEO_QUALITY_MODE;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4.e68fAU;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.djbES0;
        var4 = var10.bind(var5)(var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.DEFAULT_AUTO_ARCHIVE_DURATION;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var9 = var4.nYz2mg;
        var4 = var7[var1];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var4 = var4.oczvRI;
        var4 = var10.bind(var5)(var9, var4);
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.FLAGS;
        var4 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.ImCQko;
            return var0;
        };
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.AVAILABLE_TAG_ADD;
        var4 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.H86QQU;
            return var0;
        };
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var8 = var4.AVAILABLE_TAG_EDIT;
        var4 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.YtUzls;
            return var0;
        };
        var0[var8] = var4;
        var4 = _closure1_slot16;
        var4 = var4.AVAILABLE_TAG_DELETE;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["8QOseg"];
            return var0;
        };
        var0[var4] = var2;
        var2 = _closure1_slot16;
        var2 = var2.LINKED_LOBBY;
        var4 = _closure1_slot48;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["+/3TkD"];
        var1 = var7[var1];
        var1 = var6.bind(var5)(var1);
        var1 = var1.t;
        var1 = var1["5kDYS3"];
        var1 = var4.bind(var5)(var3, var1);
        var0[var2] = var1;
        return var0;
    };
    var2.ChannelChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var6 = var2.NICK;
        var12 = _closure1_slot49;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 17;
        var5 = var9[var4];
        var2 = undefined;
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var10 = var5.qXDsHv;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var7 = var5["m+qury"];
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.DvLvjF;
        var5 = var12.bind(var2)(var10, var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.DEAF;
        var7 = _closure1_slot50;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var10 = var5.mArLlW;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.ddvVYG;
        var5 = var7.bind(var2)(var10, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.MUTE;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var10 = var5["bxs/lS"];
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.FjecQM;
        var5 = var7.bind(var2)(var10, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.ROLES_REMOVE;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["+2SDWV"];
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.ROLES_ADD;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["B3/3IJ"];
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.PRUNE_DELETE_DAYS;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["+Cvc+D"];
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.COMMUNICATION_DISABLED_UNTIL;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var11 = var5.LXTQr5;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var10 = var5.LXTQr5;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.ULSdnE;
        var5 = var12.bind(var2)(var11, var10, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var5 = var5.BYPASSES_VERIFICATION;
        var6 = var9[var4];
        var6 = var8.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6.NBPBui;
        var4 = var9[var4];
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.zATost;
        var4 = var7.bind(var2)(var6, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.AUTO_MODERATION_TRIGGERED_RULE_NAME;
        var3 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.YbouFH;
            return var0;
        };
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var14 = var1.bind(var2)();
        var15 = var0;
        var1 = copyDataProperties(var15, var14);
        return var0;
    };
    var2.UserChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var6 = var2.NAME;
        var10 = _closure1_slot47;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var4 = 17;
        var5 = var9[var4];
        var2 = undefined;
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var7 = var5.QBmlaD;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["Lfs4r+"];
        var5 = var10.bind(var2)(var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.DESCRIPTION;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var7 = var5.XeYKWJ;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.PSfeIj;
        var5 = var10.bind(var2)(var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.PERMISSIONS_GRANTED;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["9i/DvE"];
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.PERMISSIONS_DENIED;
        var5 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.pa1ZVh;
            return var0;
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.COLOR;
        var10 = _closure1_slot52;
        var7 = {};
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.TK6E1H;
        var7['#000000'] = var5;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["2FQFiw"];
        var5 = var10.bind(var2)(var7, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.COLORS;
        var5 = function(arg0) { // Environment: var3
            _fun114856: for (var _fun114856_ip = 0;;) switch (_fun114856_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.newValue;
                    var1 = var0.secondary_color;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun114856_ip = 61;
                        continue _fun114856
                    }
                case 21:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.t;
                    var0 = var0["WnSwL/"];
                    _fun114856_ip = 99;
                    continue _fun114856;
                case 61:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var0 = var1.U44ttm;
                case 99:
                    return var0;
            }
        };
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var6 = var5.HOIST;
        var7 = _closure1_slot50;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var10 = var5.gWfe24;
        var5 = var9[var4];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["+tb8kN"];
        var5 = var7.bind(var2)(var10, var5);
        var0[var6] = var5;
        var5 = _closure1_slot16;
        var5 = var5.MENTIONABLE;
        var6 = var9[var4];
        var6 = var8.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6.LL8VFF;
        var4 = var9[var4];
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.Z7xzmC;
        var4 = var7.bind(var2)(var6, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.ICON_HASH;
        var4 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["iEE79/"];
            return var0;
        };
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.UNICODE_EMOJI;
        var3 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.KiLMM0;
            return var0;
        };
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var11 = var1.bind(var2)();
        var12 = var0;
        var1 = copyDataProperties(var12, var11);
        return var0;
    };
    var2.RoleChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var1 = _closure1_slot36;
        var5 = undefined;
        var10 = var1.bind(var5)();
        var11 = var0;
        var1 = copyDataProperties(var11, var10);
        var1 = _closure1_slot16;
        var4 = var1.TITLE;
        var9 = _closure1_slot47;
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 17;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var8 = var3["sNpuy/"];
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["3Ukc/g"];
        var3 = var9.bind(var5)(var8, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.DESCRIPTION;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var8 = var3.PP1q0x;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.z7pYLg;
        var3 = var9.bind(var5)(var8, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.OPTIONS;
        var3 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["3G5C9+"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var8 = var3.SINGLE_SELECT;
        var4 = _closure1_slot50;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var9 = var3.v4WnR3;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["6Qg3uC"];
        var3 = var4.bind(var5)(var9, var3);
        var0[var8] = var3;
        var2 = _closure1_slot16;
        var2 = var2.REQUIRED;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["0MPAM6"];
        var1 = var7[var1];
        var1 = var6.bind(var5)(var1);
        var1 = var1.t;
        var1 = var1.pwsXir;
        var1 = var4.bind(var5)(var3, var1);
        var0[var2] = var1;
        return var0;
    };
    var2.OnboardingPromptChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var1 = _closure1_slot36;
        var5 = undefined;
        var10 = var1.bind(var5)();
        var11 = var0;
        var1 = copyDataProperties(var11, var10);
        var1 = _closure1_slot16;
        var3 = var1.DEFAULT_CHANNEL_IDS;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["8M+D2s"];
            return var0;
        };
        var0[var3] = var1;
        var1 = _closure1_slot16;
        var8 = var1.ENABLE_DEFAULT_CHANNELS;
        var4 = _closure1_slot50;
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 17;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var9 = var3["EYd/ls"];
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["36OZeQ"];
        var3 = var4.bind(var5)(var9, var3);
        var0[var8] = var3;
        var3 = _closure1_slot16;
        var8 = var3.ENABLE_ONBOARDING_PROMPTS;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var9 = var3.V3u8PV;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["r66lc/"];
        var3 = var4.bind(var5)(var9, var3);
        var0[var8] = var3;
        var2 = _closure1_slot16;
        var2 = var2.ENABLED;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.SODVIs;
        var1 = var7[var1];
        var1 = var6.bind(var5)(var1);
        var1 = var1.t;
        var1 = var1.u8HY5U;
        var1 = var4.bind(var5)(var3, var1);
        var0[var2] = var1;
        return var0;
    };
    var2.OnboardingChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var4 = _closure1_slot36;
        var3 = undefined;
        var5 = var4.bind(var3)();
        var6 = var0;
        var3 = copyDataProperties(var6, var5);
        var3 = _closure1_slot16;
        var4 = var3.WELCOME_MESSAGE;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.dKQ1xd;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.NEW_MEMBER_ACTIONS;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.jDUIno;
            return var0;
        };
        var0[var4] = var3;
        var2 = _closure1_slot16;
        var2 = var2.RESOURCE_CHANNELS;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.SIX0mr;
            return var0;
        };
        var0[var2] = var1;
        return var0;
    };
    var2.HomeSettingsChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var3 = _closure1_slot16;
        var4 = var3.CODE;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.rrRHgb;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var3 = var3.CHANNEL_ID;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.Q1vd5q;
            return var0;
        };
        var0[var3] = var2;
        var2 = _closure1_slot16;
        var4 = var2.MAX_USES;
        var7 = _closure1_slot52;
        var5 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var6 = 17;
        var3 = var9[var6];
        var2 = undefined;
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.Yx8LNm;
        var5[0] = var3;
        var3 = var9[var6];
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3["3ygnwU"];
        var3 = var7.bind(var2)(var5, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.MAX_AGE;
        var5 = {};
        var3 = var9[var6];
        var3 = var8.bind(var2)(var3);
        var11 = var3.intl;
        var10 = var11.string;
        var3 = var9[var6];
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.PqEzn8;
        var10 = var10.bind(var11)(var3);
        var3 = var9[var6];
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.uWrLvw;
        var5[var10] = var3;
        var3 = var9[var6];
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3["Q+5kcO"];
        var3 = var7.bind(var2)(var5, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.TEMPORARY;
        var7 = _closure1_slot50;
        var3 = var9[var6];
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var5 = var3.MWp6H7;
        var3 = var9[var6];
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.omiqTH;
        var3 = var7.bind(var2)(var5, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.FLAGS;
        var5 = _closure1_slot51;
        var3 = {};
        var7 = 18;
        var7 = var9[var7];
        var7 = var8.bind(var2)(var7);
        var7 = var7.GuildInviteFlags;
        var7 = var7.IS_GUEST_INVITE;
        var6 = var9[var6];
        var6 = var8.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6.XYZMbL;
        var3[var7] = var6;
        var3 = var5.bind(var2)(var3);
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var12 = var1.bind(var2)();
        var13 = var0;
        var1 = copyDataProperties(var13, var12);
        return var0;
    };
    var2.InviteChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var3 = _closure1_slot16;
        var5 = var3.CHANNEL_ID;
        var7 = _closure1_slot47;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var3 = 17;
        var4 = var9[var3];
        var6 = undefined;
        var4 = var8.bind(var6)(var4);
        var4 = var4.t;
        var10 = var4.jhPprR;
        var4 = var9[var3];
        var4 = var8.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.ar4qYO;
        var4 = var7.bind(var6)(var10, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.NAME;
        var5 = var9[var3];
        var5 = var8.bind(var6)(var5);
        var5 = var5.t;
        var5 = var5.ZVGrzU;
        var3 = var9[var3];
        var3 = var8.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.tywdZR;
        var3 = var7.bind(var6)(var5, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AVATAR_HASH;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.KB52Uj;
            return var0;
        };
        var0[var4] = var3;
        var2 = _closure1_slot16;
        var2 = var2.REASON;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["2IW3C5"];
            return var0;
        };
        var0[var2] = var1;
        return var0;
    };
    var2.WebhookChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var4 = var2.NAME;
        var6 = _closure1_slot47;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var3 = 17;
        var5 = var8[var3];
        var2 = undefined;
        var5 = var7.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.ahU1o5;
        var3 = var8[var3];
        var3 = var7.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3["wxs+vZ"];
        var3 = var6.bind(var2)(var5, var3);
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var9 = var1.bind(var2)();
        var10 = var0;
        var1 = copyDataProperties(var10, var9);
        return var0;
    };
    var2.EmojiChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var5 = var2.NAME;
        var6 = _closure1_slot47;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var3 = 17;
        var4 = var8[var3];
        var2 = undefined;
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4.cdl0Yo;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.o3W2ly;
        var4 = var6.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.TAGS;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4["zwL+S2"];
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["VYfKA+"];
        var4 = var6.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.DESCRIPTION;
        var5 = var8[var3];
        var5 = var7.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.XeYKWJ;
        var3 = var8[var3];
        var3 = var7.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.PSfeIj;
        var3 = var6.bind(var2)(var5, var3);
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var10 = var1.bind(var2)();
        var11 = var0;
        var1 = copyDataProperties(var11, var10);
        return var0;
    };
    var2.StickerChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var4 = var2.ENABLE_EMOTICONS;
        var9 = _closure1_slot50;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var6 = 17;
        var3 = var8[var6];
        var2 = undefined;
        var3 = var7.bind(var2)(var3);
        var3 = var3.t;
        var5 = var3.FI0m5x;
        var3 = var8[var6];
        var3 = var7.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.olpKC6;
        var3 = var9.bind(var2)(var5, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.EXPIRE_BEHAVIOR;
        var5 = _closure1_slot51;
        var3 = {};
        var9 = var8[var6];
        var9 = var7.bind(var2)(var9);
        var9 = var9.t;
        var9 = var9["1Bb1+u"];
        var3[0] = var9;
        var6 = var8[var6];
        var6 = var7.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6.vjlW6m;
        var3[1] = var6;
        var3 = var5.bind(var2)(var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.EXPIRE_GRACE_PERIOD;
        var3 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.iovXMa;
            return var0;
        };
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var10 = var1.bind(var2)();
        var11 = var0;
        var1 = copyDataProperties(var11, var10);
        return var0;
    };
    var2.IntegrationChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var4 = var2.TOPIC;
        var7 = _closure1_slot47;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var6 = 17;
        var3 = var9[var6];
        var2 = undefined;
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var5 = var3["m+veAn"];
        var3 = var9[var6];
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.esQcxn;
        var3 = var7.bind(var2)(var5, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.PRIVACY_LEVEL;
        var5 = _closure1_slot51;
        var3 = {};
        var7 = _closure1_slot33;
        var11 = var7.GUILD_ONLY;
        var10 = var9[var6];
        var10 = var8.bind(var2)(var10);
        var10 = var10.t;
        var10 = var10["EC+CDt"];
        var3[var11] = var10;
        var7 = var7.PUBLIC;
        var6 = var9[var6];
        var6 = var8.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6["pK/WG0"];
        var3[var7] = var6;
        var3 = var5.bind(var2)(var3);
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var12 = var1.bind(var2)();
        var13 = var0;
        var1 = copyDataProperties(var13, var12);
        return var0;
    };
    var2.StageInstanceChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var3 = _closure1_slot16;
        var4 = var3.NAME;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["21EXHW"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var3 = var3.DESCRIPTION;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.Vm1ofw;
            return var0;
        };
        var0[var3] = var2;
        var2 = _closure1_slot16;
        var5 = var2.PRIVACY_LEVEL;
        var6 = _closure1_slot51;
        var4 = {};
        var9 = _closure1_slot33;
        var11 = var9.GUILD_ONLY;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var3 = 17;
        var10 = var8[var3];
        var2 = undefined;
        var10 = var7.bind(var2)(var10);
        var10 = var10.t;
        var10 = var10["EC+CDt"];
        var4[var11] = var10;
        var10 = var9.PUBLIC;
        var9 = var8[var3];
        var9 = var7.bind(var2)(var9);
        var9 = var9.t;
        var9 = var9["pK/WG0"];
        var4[var10] = var9;
        var4 = var6.bind(var2)(var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.STATUS;
        var4 = {};
        var9 = _closure1_slot32;
        var11 = var9.SCHEDULED;
        var10 = var8[var3];
        var10 = var7.bind(var2)(var10);
        var10 = var10.t;
        var10 = var10.hXKDgq;
        var4[var11] = var10;
        var11 = var9.ACTIVE;
        var10 = var8[var3];
        var10 = var7.bind(var2)(var10);
        var10 = var10.t;
        var10 = var10.lRX1nz;
        var4[var11] = var10;
        var11 = var9.COMPLETED;
        var10 = var8[var3];
        var10 = var7.bind(var2)(var10);
        var10 = var10.t;
        var10 = var10["/eFIhq"];
        var4[var11] = var10;
        var10 = var9.CANCELED;
        var9 = var8[var3];
        var9 = var7.bind(var2)(var9);
        var9 = var9.t;
        var9 = var9.NWIYhj;
        var4[var10] = var9;
        var4 = var6.bind(var2)(var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.ENTITY_TYPE;
        var4 = {};
        var9 = _closure1_slot31;
        var11 = var9.NONE;
        var10 = var8[var3];
        var10 = var7.bind(var2)(var10);
        var10 = var10.t;
        var10 = var10["6sO3Ss"];
        var4[var11] = var10;
        var11 = var9.STAGE_INSTANCE;
        var10 = var8[var3];
        var10 = var7.bind(var2)(var10);
        var10 = var10.t;
        var10 = var10["Wo+s1y"];
        var4[var11] = var10;
        var11 = var9.VOICE;
        var10 = var8[var3];
        var10 = var7.bind(var2)(var10);
        var10 = var10.t;
        var10 = var10.XCVaIL;
        var4[var11] = var10;
        var10 = var9.EXTERNAL;
        var9 = var8[var3];
        var9 = var7.bind(var2)(var9);
        var9 = var9.t;
        var9 = var9.IvhAj2;
        var4[var10] = var9;
        var4 = var6.bind(var2)(var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.CHANNEL_ID;
        var6 = _closure1_slot48;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4.yJBIcX;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["+PqSsi"];
        var4 = var6.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.LOCATION;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4.GaMBHy;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.PsICk0;
        var4 = var6.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.IMAGE_HASH;
        var5 = var8[var3];
        var5 = var7.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.S3vcRK;
        var3 = var8[var3];
        var3 = var7.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.KQu47I;
        var3 = var6.bind(var2)(var5, var3);
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var12 = var1.bind(var2)();
        var13 = var0;
        var1 = copyDataProperties(var13, var12);
        return var0;
    };
    var2.GuildScheduledEventChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var5 = var2.SCHEDULED_START_TIME;
        var6 = _closure1_slot48;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var3 = 17;
        var4 = var8[var3];
        var2 = undefined;
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4.zMIYVg;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.fzF8Gd;
        var4 = var6.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.SCHEDULED_END_TIME;
        var5 = var8[var3];
        var5 = var7.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.vONSQA;
        var3 = var8[var3];
        var3 = var7.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.IlIti3;
        var3 = var6.bind(var2)(var5, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.IS_CANCELED;
        var3 = function(arg0) { // Environment: var3
            _fun114882: for (var _fun114882_ip = 0;;) switch (_fun114882_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.oldValue;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun114882_ip = 27;
                        continue _fun114882
                    }
                case 15:
                    var2 = var0.newValue;
                    var1 = true;
                    if (!(var1 === var2)) {
                        _fun114882_ip = 143;
                        continue _fun114882
                    }
                case 27:
                    var1 = var0.oldValue;
                    if (var1) {
                        _fun114882_ip = 85;
                        continue _fun114882
                    }
                case 36:
                    var1 = var0.newValue;
                    if (!var1) {
                        _fun114882_ip = 85;
                        continue _fun114882
                    }
                case 45:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var1 = var1["7RkicW"];
                    return var1;
                case 85:
                    var1 = var0.oldValue;
                    if (!var1) {
                        _fun114882_ip = 143;
                        continue _fun114882
                    }
                case 94:
                    var0 = var0.newValue;
                    if (var0) {
                        _fun114882_ip = 143;
                        continue _fun114882
                    }
                case 103:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.t;
                    var0 = var0.dRNTWW;
                    return var0;
                case 143:
                    var0 = undefined;
                    return var0;
            }
        };
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var10 = var1.bind(var2)();
        var11 = var0;
        var1 = copyDataProperties(var11, var10);
        return var0;
    };
    var2.GuildScheduledEventExceptionChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var5 = var2.NAME;
        var6 = _closure1_slot47;
        var7 = _closure1_slot0;
        var8 = _closure1_slot3;
        var3 = 17;
        var4 = var8[var3];
        var2 = undefined;
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4.tUKRzX;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.kPCHON;
        var4 = var6.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.ARCHIVED;
        var10 = _closure1_slot50;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4.jDi9FK;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.F6dvbT;
        var4 = var10.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.LOCKED;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4.JSy1QW;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.C7Jgo8;
        var4 = var10.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.INVITABLE;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4.dxNUs9;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.biJvYG;
        var4 = var10.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.AUTO_ARCHIVE_DURATION;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var9 = var4.LuaG3y;
        var4 = var8[var3];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["18d9qr"];
        var4 = var6.bind(var2)(var9, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.RATE_LIMIT_PER_USER;
        var5 = var8[var3];
        var5 = var7.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["7lirhF"];
        var3 = var8[var3];
        var3 = var7.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3.j4CCJR;
        var3 = var6.bind(var2)(var5, var3);
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.FLAGS;
        var3 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.sSAQtj;
            return var0;
        };
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var11 = var1.bind(var2)();
        var12 = var0;
        var1 = copyDataProperties(var12, var11);
        return var0;
    };
    var2.ThreadChangeStrings = var7;
    var7 = function(arg0) { // Environment: var3
        _fun114885: for (var _fun114885_ip = 0;;) switch (_fun114885_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var4 = _closure1_slot36;
                var2 = undefined;
                var5 = var4.bind(var2)();
                var6 = var0;
                var2 = copyDataProperties(var6, var5);
                var _closure2_slot0 = var0;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun114885_ip = 54;
                    continue _fun114885
                }
            case 37:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun114886: for (var _fun114886_ip = 0;;) switch (_fun114886_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.newValue;
                            if (var3) {
                                _fun114886_ip = 39;
                                continue _fun114886
                            }
                        case 17:
                            var5 = _closure2_slot0;
                            var4 = var1.key;
                            var3 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var0 = var0.t;
                                var0 = var0.vynxnV;
                                return var0;
                            };
                            var5[var4] = var3;
                            _fun114886_ip = 87;
                            continue _fun114886;
                        case 39:
                            var3 = var1.newValue;
                            var3 = var3.permission;
                            var2 = _closure2_slot0;
                            var1 = var1.key;
                            if (var3) {
                                _fun114886_ip = 76;
                                continue _fun114886
                            }
                        case 63:
                            var3 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var0 = var0.t;
                                var0 = var0.HUrFDu;
                                return var0;
                            };
                            var2[var1] = var3;
                            _fun114886_ip = 87;
                            continue _fun114886;
                        case 76:
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var0 = var0.t;
                                var0 = var0["JH+89C"];
                                return var0;
                            };
                            var2[var1] = var0;
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 54:
                return var0;
        }
    };
    var2.CommandPermissionChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var3 = _closure1_slot16;
        var4 = var3.NAME;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.XwxAJT;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_TRIGGER_TYPE;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.fx0pyl;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_EVENT_TYPE;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["46Y+L5"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_ACTIONS;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["8efxfv"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_ENABLED;
        var3 = function(arg0) { // Environment: var2
            _fun114895: for (var _fun114895_ip = 0;;) switch (_fun114895_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.newValue;
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun114895_ip = 21;
                        continue _fun114895
                    }
                case 15:
                    var1 = var0.oldValue;
                case 21:
                    var0 = true;
                    if (!(var0 !== var1)) {
                        _fun114895_ip = 67;
                        continue _fun114895
                    }
                case 27:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.t;
                    var0 = var0.Wrg9Jn;
                    _fun114895_ip = 105;
                    continue _fun114895;
                case 67:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var0 = var1.fCmxC2;
                case 105:
                    return var0;
            }
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_EXEMPT_ROLES;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.TRb7Nx;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_EXEMPT_CHANNELS;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.mzitLE;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_TRIGGER_METADATA;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["h/lM65"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_ADD_KEYWORDS;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["9V2yaC"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_REMOVE_KEYWORDS;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["4Qe9ny"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_ADD_REGEX_PATTERNS;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.GyZtxp;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_REMOVE_REGEX_PATTERNS;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.OQDadc;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.AUTO_MODERATION_ADD_ALLOW_LIST;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["FvvR+K"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var3 = var3.AUTO_MODERATION_REMOVE_ALLOW_LIST;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.p5nSvy;
            return var0;
        };
        var0[var3] = var2;
        var2 = _closure1_slot36;
        var1 = undefined;
        var5 = var2.bind(var1)();
        var6 = var0;
        var1 = copyDataProperties(var6, var5);
        return var0;
    };
    var2.AutoModerationRuleChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var5 = var2.NAME;
        var7 = _closure1_slot47;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var3 = 17;
        var4 = var9[var3];
        var2 = undefined;
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var6 = var4.VOtRSO;
        var4 = var9[var3];
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.OK7B8E;
        var4 = var7.bind(var2)(var6, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.VOLUME;
        var4 = var9[var3];
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var6 = var4.igrDB9;
        var4 = var9[var3];
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.L5lDFJ;
        var4 = var7.bind(var2)(var6, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var5 = var4.EMOJI_NAME;
        var7 = _closure1_slot49;
        var4 = var9[var3];
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var10 = var4.IIanaY;
        var4 = var9[var3];
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var6 = var4["z4w4U/"];
        var4 = var9[var3];
        var4 = var8.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.V8TfyU;
        var4 = var7.bind(var2)(var10, var6, var4);
        var0[var5] = var4;
        var4 = _closure1_slot16;
        var4 = var4.EMOJI_ID;
        var5 = var9[var3];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var6 = var5.ainxMB;
        var5 = var9[var3];
        var5 = var8.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["2NPsYu"];
        var3 = var9[var3];
        var3 = var8.bind(var2)(var3);
        var3 = var3.t;
        var3 = var3["8crtns"];
        var3 = var7.bind(var2)(var6, var5, var3);
        var0[var4] = var3;
        var1 = _closure1_slot36;
        var12 = var1.bind(var2)();
        var13 = var0;
        var1 = copyDataProperties(var13, var12);
        return var0;
    };
    var2.GuildSoundboardChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var3 = _closure1_slot16;
        var4 = var3.VERIFICATION_ENABLED;
        var3 = function(arg0) { // Environment: var2
            _fun114907: for (var _fun114907_ip = 0;;) switch (_fun114907_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.newValue;
                    var0 = true;
                    if (!(var0 !== var1)) {
                        _fun114907_ip = 55;
                        continue _fun114907
                    }
                case 15:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.t;
                    var0 = var0.WYT6ka;
                    _fun114907_ip = 93;
                    continue _fun114907;
                case 55:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var0 = var1.fnkzDY;
                case 93:
                    return var0;
            }
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var3 = var3.MANUAL_APPROVAL_ENABLED;
        var2 = function(arg0) { // Environment: var2
            _fun114908: for (var _fun114908_ip = 0;;) switch (_fun114908_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.newValue;
                    var0 = true;
                    if (!(var0 !== var1)) {
                        _fun114908_ip = 55;
                        continue _fun114908
                    }
                case 15:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.t;
                    var0 = var0.WxyOtj;
                    _fun114908_ip = 93;
                    continue _fun114908;
                case 55:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var1 = var1.t;
                    var0 = var1.jzSvVd;
                case 93:
                    return var0;
            }
        };
        var0[var3] = var2;
        var2 = _closure1_slot36;
        var1 = undefined;
        var5 = var2.bind(var1)();
        var6 = var0;
        var1 = copyDataProperties(var6, var5);
        return var0;
    };
    var2.MemberVerificationChangeStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var2 = _closure1_slot16;
        var3 = var2.STATUS;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.HyCSnI;
            return var0;
        };
        var0[var3] = var2;
        var2 = _closure1_slot36;
        var1 = undefined;
        var4 = var2.bind(var1)();
        var5 = var0;
        var1 = copyDataProperties(var5, var4);
        return var0;
    };
    var2.VoiceChannelStatusStrings = var7;
    var7 = function() { // Environment: var3
        var0 = {};
        var3 = _closure1_slot16;
        var4 = var3.DESCRIPTION;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.nsUZKY;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.BRAND_COLOR_PRIMARY;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.qe9mgN;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.CUSTOM_BANNER_HASH;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["04b5KC"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.TRAITS;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.dEy9WO;
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var4 = var3.GAME_APPLICATION_IDS;
        var3 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0["8BOT3x"];
            return var0;
        };
        var0[var4] = var3;
        var3 = _closure1_slot16;
        var3 = var3.VISIBILITY;
        var2 = function() { // Environment: var2
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 17;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.t;
            var0 = var0.bCl1Ep;
            return var0;
        };
        var0[var3] = var2;
        var2 = _closure1_slot16;
        var2 = var2.SERVER_TAG;
        var5 = _closure1_slot48;
        var6 = _closure1_slot0;
        var7 = _closure1_slot3;
        var1 = 17;
        var3 = var7[var1];
        var4 = undefined;
        var3 = var6.bind(var4)(var3);
        var3 = var3.t;
        var3 = var3.ix1dnX;
        var1 = var7[var1];
        var1 = var6.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1["4LKpKb"];
        var1 = var5.bind(var4)(var3, var1);
        var0[var2] = var1;
        return var0;
    };
    var2.GuildProfileChangeStrings = var7;
    var2.NotRenderedChanges = var6;
    var2.ACTION_FILTER_ITEMS = var5;
    var2.findChangeByKey = var4;
    var4 = function arg0() {
        _fun114918: for (var _fun114918_ip = 0;;) switch (_fun114918_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot37;
                var5 = undefined;
                var3 = var2.bind(var5)();
                var2 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot0;
                    var0 = var0.action;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var0);
                var2 = _closure1_slot39;
                var0 = _closure1_slot16;
                var0 = var0.COMMUNICATION_DISABLED_UNTIL;
                var2 = var2.bind(var5)(var0, var4);
                var0 = null;
                if (!(var0 == var2)) {
                    _fun114918_ip = 93;
                    continue _fun114918
                }
            case 65:
                var4 = var0 == var3;
                var2 = undefined;
                if (var4) {
                    _fun114918_ip = 79;
                    continue _fun114918
                }
            case 74:
                var2 = var3.label;
            case 79:
                var3 = var0 != var2;
                var0 = null;
                if (!var3) {
                    _fun114918_ip = 91;
                    continue _fun114918
                }
            case 88:
                var0 = var2;
            case 91:
                _fun114918_ip = 150;
                continue _fun114918;
            case 93:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.z3wbj8;
                var0 = var2.bind(var3)(var1);
            case 150:
                return var0;
        }
    };
    var2.getSimpleAuditLogTitleFromChange = var4;
    var4 = function arg0() {
        _fun114920: for (var _fun114920_ip = 0;;) switch (_fun114920_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot39;
                var0 = _closure1_slot16;
                var0 = var0.COMMUNICATION_DISABLED_UNTIL;
                var10 = undefined;
                var4 = var1.bind(var10)(var0, var3);
                var6 = _closure1_slot40;
                var0 = _closure1_slot16;
                var0 = var0.ROLES_ADD;
                var0 = var6.bind(var10)(var0, var3);
                var0 = var0.length;
                var5 = 0;
                var1 = var0 > var5;
                var0 = _closure1_slot16;
                var0 = var0.ROLES_REMOVE;
                var0 = var6.bind(var10)(var0, var3);
                var0 = var0.length;
                var5 = var0 > var5;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun114920_ip = 287;
                    continue _fun114920
                }
            case 93:
                if (!var1) {
                    _fun114920_ip = 102;
                    continue _fun114920
                }
            case 96:
                if (var5) {
                    _fun114920_ip = 228;
                    continue _fun114920
                }
            case 102:
                if (var1) {
                    _fun114920_ip = 169;
                    continue _fun114920
                }
            case 105:
                var1 = null;
                if (!var5) {
                    _fun114920_ip = 167;
                    continue _fun114920
                }
            case 110:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 17;
                var6 = var9[var5];
                var6 = var8.bind(var10)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var10)(var5);
                var5 = var5.t;
                var5 = var5["8mQ6x0"];
                var1 = var6.bind(var7)(var5);
            case 167:
                _fun114920_ip = 226;
                continue _fun114920;
            case 169:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 17;
                var6 = var9[var5];
                var6 = var8.bind(var10)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var10)(var5);
                var5 = var5.t;
                var5 = var5["4GQqs8"];
                var1 = var6.bind(var7)(var5);
            case 226:
                _fun114920_ip = 285;
                continue _fun114920;
            case 228:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 17;
                var6 = var9[var5];
                var6 = var8.bind(var10)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var10)(var5);
                var5 = var5.t;
                var5 = var5.RdMMew;
                var1 = var6.bind(var7)(var5);
            case 285:
                return var1;
            case 287:
                var5 = var0 == var4;
                var1 = undefined;
                if (var5) {
                    _fun114920_ip = 302;
                    continue _fun114920
                }
            case 296:
                var1 = var4.newValue;
            case 302:
                if (!(var0 == var1)) {
                    _fun114920_ip = 387;
                    continue _fun114920
                }
            case 306:
                var5 = var0 == var4;
                var1 = undefined;
                if (var5) {
                    _fun114920_ip = 321;
                    continue _fun114920
                }
            case 315:
                var1 = var4.oldValue;
            case 321:
                if (!(var0 != var1)) {
                    _fun114920_ip = 585;
                    continue _fun114920
                }
            case 328:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 17;
                var5 = var8[var1];
                var5 = var7.bind(var10)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var1 = var8[var1];
                var1 = var7.bind(var10)(var1);
                var1 = var1.t;
                var1 = var1.MA1ltr;
                var1 = var5.bind(var6)(var1);
                return var1;
            case 387:
                var5 = global;
                var6 = var5.Date;
                var7 = var0 == var4;
                var1 = undefined;
                if (var7) {
                    _fun114920_ip = 410;
                    continue _fun114920
                }
            case 404:
                var1 = var4.newValue;
            case 410:
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var14 = var4;
                var13 = var1;
                var1 = new var14[var6](var13, var12);
                var4 = var1 instanceof Object ? var1 : var4;
                var1 = var4.getTime;
                var4 = var1.bind(var4)();
                var7 = _closure1_slot1;
                var1 = _closure1_slot3;
                var6 = 19;
                var6 = var1[var6];
                var7 = var7.bind(var10)(var6);
                var6 = var7.extractTimestamp;
                var3 = var3.id;
                var3 = var6.bind(var7)(var3);
                var7 = var4 - var3;
                var8 = var5.Math;
                var6 = var8.round;
                var4 = 1000;
                var9 = var7 / var4;
                var3 = 60;
                var3 = var9 / var3;
                var8 = var6.bind(var8)(var3);
                var3 = _closure1_slot0;
                var11 = 16;
                var1 = var1[var11];
                var6 = var3.bind(var10)(var1);
                var3 = var6.getTimeAndUnit;
                var1 = _closure1_slot35;
                var3 = var3.bind(var6)(var8, var1);
                var1 = var3.unit;
                if (!(var0 != var1)) {
                    _fun114920_ip = 675;
                    continue _fun114920
                }
            case 558:
                var1 = var3.time;
                if (!(var0 != var1)) {
                    _fun114920_ip = 675;
                    continue _fun114920
                }
            case 568:
                var6 = var3.unit;
                var1 = _closure1_slot38;
                var1 = var6 in var1;
                if (var1) {
                    _fun114920_ip = 587;
                    continue _fun114920
                }
            case 585:
                return var0;
            case 587:
                var1 = var3.unit;
                var8 = var3.unit;
                var9 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var11];
                var6 = var9.bind(var10)(var6);
                var6 = var6.TimeUnits;
                var6 = var6.SECONDS;
                if (!(var8 !== var6)) {
                    _fun114920_ip = 640;
                    continue _fun114920
                }
            case 632:
                var3 = var3.time;
                _fun114920_ip = 660;
                continue _fun114920;
            case 640:
                var6 = var5.Math;
                var5 = var6.round;
                var4 = var7 / var4;
                var3 = var5.bind(var6)(var4);
            case 660:
                var2 = _closure1_slot38;
                var1 = var2[var1];
                var1 = var1.bind(var2)(var3);
                return var1;
            case 675:
                return var0;
        }
    };
    var2.getSimpleAuditLogTitleContextFromChange = var4;
    var4 = function arg0() {
        _fun114921: for (var _fun114921_ip = 0;;) switch (_fun114921_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot40;
                var0 = _closure1_slot16;
                var0 = var0.ROLES_ADD;
                var7 = undefined;
                var4 = var2.bind(var7)(var0, var5);
                var0 = _closure1_slot16;
                var0 = var0.ROLES_REMOVE;
                var2 = var2.bind(var7)(var0, var5);
                var0 = null;
                var5 = var0 == var4;
                var6 = undefined;
                if (var5) {
                    _fun114921_ip = 90;
                    continue _fun114921
                }
            case 57:
                var8 = var4.map;
                var5 = function(arg0) { // Environment: var3
                    _fun114922: for (var _fun114922_ip = 0;;) switch (_fun114922_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.newValue;
                            var0 = null;
                            var1 = var0 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun114922_ip = 55;
                                continue _fun114922
                            }
                        case 20:
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.name;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.join;
                            var1 = ', ';
                            var0 = var2.bind(var3)(var1);
                        case 55:
                            return var0;
                    }
                };
                var9 = var8.bind(var4)(var5);
                var8 = var9.join;
                var5 = ', ';
                var6 = var8.bind(var9)(var5);
            case 90:
                var8 = var0 == var2;
                var5 = undefined;
                if (var8) {
                    _fun114921_ip = 132;
                    continue _fun114921
                }
            case 99:
                var8 = var2.map;
                var3 = function(arg0) { // Environment: var3
                    _fun114924: for (var _fun114924_ip = 0;;) switch (_fun114924_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.newValue;
                            var0 = null;
                            var1 = var0 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun114924_ip = 55;
                                continue _fun114924
                            }
                        case 20:
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.name;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.join;
                            var1 = ', ';
                            var0 = var2.bind(var3)(var1);
                        case 55:
                            return var0;
                    }
                };
                var9 = var8.bind(var2)(var3);
                var8 = var9.join;
                var3 = ', ';
                var5 = var8.bind(var9)(var3);
            case 132:
                var8 = var4.length;
                var3 = 0;
                if (!(var8 > var3)) {
                    _fun114921_ip = 155;
                    continue _fun114921
                }
            case 143:
                var8 = var2.length;
                if (!(!(var8 > var3))) {
                    _fun114921_ip = 312;
                    continue _fun114921
                }
            case 155:
                var4 = var4.length;
                if (!(!(var4 > var3))) {
                    _fun114921_ip = 245;
                    continue _fun114921
                }
            case 164:
                var2 = var2.length;
                var2 = var2 > var3;
                var0 = null;
                if (!var2) {
                    _fun114921_ip = 243;
                    continue _fun114921
                }
            case 178:
                var3 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 17;
                var4 = var9[var2];
                var4 = var3.bind(var7)(var4);
                var8 = var4.intl;
                var4 = var8.formatToPlainString;
                var2 = var9[var2];
                var2 = var3.bind(var7)(var2);
                var2 = var2.t;
                var3 = var2.Wk4pAJ;
                var2 = {};
                var2.roleNames = var5;
                var0 = var4.bind(var8)(var3, var2);
            case 243:
                _fun114921_ip = 310;
                continue _fun114921;
            case 245:
                var3 = _closure1_slot0;
                var9 = _closure1_slot3;
                var2 = 17;
                var4 = var9[var2];
                var4 = var3.bind(var7)(var4);
                var8 = var4.intl;
                var4 = var8.formatToPlainString;
                var2 = var9[var2];
                var2 = var3.bind(var7)(var2);
                var2 = var2.t;
                var3 = var2["/mTqt5"];
                var2 = {};
                var2.roleNames = var6;
                var0 = var4.bind(var8)(var3, var2);
            case 310:
                _fun114921_ip = 386;
                continue _fun114921;
            case 312:
                var2 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 17;
                var3 = var8[var1];
                var3 = var2.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var8[var1];
                var1 = var2.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1.tZw1EW;
                var1 = {};
                var1.roleNamesAdded = var6;
                var1.roleNamesRemoved = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 386:
                return var0;
        }
    };
    var2.getSimpleAuditLogChangeDetails = var4;
    var4 = function arg0() {
        _fun114926: for (var _fun114926_ip = 0;;) switch (_fun114926_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.action;
                var1 = _closure1_slot15;
                var1 = var1.GUILD_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4937;
                    continue _fun114926
                }
            case 30:
                var1 = _closure1_slot15;
                var1 = var1.CHANNEL_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4655;
                    continue _fun114926
                }
            case 47:
                var1 = _closure1_slot15;
                var1 = var1.CHANNEL_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4618;
                    continue _fun114926
                }
            case 64:
                var1 = _closure1_slot15;
                var1 = var1.CHANNEL_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4581;
                    continue _fun114926
                }
            case 81:
                var1 = _closure1_slot15;
                var1 = var1.CHANNEL_OVERWRITE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4544;
                    continue _fun114926
                }
            case 98:
                var1 = _closure1_slot15;
                var1 = var1.CHANNEL_OVERWRITE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4507;
                    continue _fun114926
                }
            case 115:
                var1 = _closure1_slot15;
                var1 = var1.CHANNEL_OVERWRITE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4470;
                    continue _fun114926
                }
            case 132:
                var1 = _closure1_slot15;
                var1 = var1.MEMBER_KICK;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4433;
                    continue _fun114926
                }
            case 149:
                var1 = _closure1_slot15;
                var1 = var1.MEMBER_PRUNE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4396;
                    continue _fun114926
                }
            case 166:
                var1 = _closure1_slot15;
                var1 = var1.MEMBER_BAN_ADD;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4359;
                    continue _fun114926
                }
            case 183:
                var1 = _closure1_slot15;
                var1 = var1.MEMBER_BAN_REMOVE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4322;
                    continue _fun114926
                }
            case 200:
                var1 = _closure1_slot15;
                var1 = var1.MEMBER_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4285;
                    continue _fun114926
                }
            case 217:
                var1 = _closure1_slot15;
                var1 = var1.MEMBER_ROLE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4248;
                    continue _fun114926
                }
            case 234:
                var1 = _closure1_slot15;
                var1 = var1.MEMBER_MOVE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4211;
                    continue _fun114926
                }
            case 251:
                var1 = _closure1_slot15;
                var1 = var1.MEMBER_DISCONNECT;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4174;
                    continue _fun114926
                }
            case 268:
                var1 = _closure1_slot15;
                var1 = var1.BOT_ADD;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4137;
                    continue _fun114926
                }
            case 285:
                var1 = _closure1_slot15;
                var1 = var1.ROLE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4100;
                    continue _fun114926
                }
            case 302:
                var1 = _closure1_slot15;
                var1 = var1.ROLE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4063;
                    continue _fun114926
                }
            case 319:
                var1 = _closure1_slot15;
                var1 = var1.ROLE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4026;
                    continue _fun114926
                }
            case 336:
                var1 = _closure1_slot15;
                var1 = var1.INVITE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3989;
                    continue _fun114926
                }
            case 353:
                var1 = _closure1_slot15;
                var1 = var1.INVITE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3952;
                    continue _fun114926
                }
            case 370:
                var1 = _closure1_slot15;
                var1 = var1.INVITE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3915;
                    continue _fun114926
                }
            case 387:
                var1 = _closure1_slot15;
                var1 = var1.WEBHOOK_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3878;
                    continue _fun114926
                }
            case 404:
                var1 = _closure1_slot15;
                var1 = var1.WEBHOOK_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3841;
                    continue _fun114926
                }
            case 421:
                var1 = _closure1_slot15;
                var1 = var1.WEBHOOK_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3804;
                    continue _fun114926
                }
            case 438:
                var1 = _closure1_slot15;
                var1 = var1.EMOJI_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3767;
                    continue _fun114926
                }
            case 455:
                var1 = _closure1_slot15;
                var1 = var1.EMOJI_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3730;
                    continue _fun114926
                }
            case 472:
                var1 = _closure1_slot15;
                var1 = var1.EMOJI_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3693;
                    continue _fun114926
                }
            case 489:
                var1 = _closure1_slot15;
                var1 = var1.STICKER_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3656;
                    continue _fun114926
                }
            case 506:
                var1 = _closure1_slot15;
                var1 = var1.STICKER_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3619;
                    continue _fun114926
                }
            case 523:
                var1 = _closure1_slot15;
                var1 = var1.STICKER_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3582;
                    continue _fun114926
                }
            case 540:
                var1 = _closure1_slot15;
                var1 = var1.MESSAGE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3545;
                    continue _fun114926
                }
            case 557:
                var1 = _closure1_slot15;
                var1 = var1.MESSAGE_BULK_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3508;
                    continue _fun114926
                }
            case 574:
                var1 = _closure1_slot15;
                var1 = var1.MESSAGE_PIN;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3471;
                    continue _fun114926
                }
            case 591:
                var1 = _closure1_slot15;
                var1 = var1.MESSAGE_UNPIN;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3434;
                    continue _fun114926
                }
            case 608:
                var1 = _closure1_slot15;
                var1 = var1.INTEGRATION_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3397;
                    continue _fun114926
                }
            case 625:
                var1 = _closure1_slot15;
                var1 = var1.INTEGRATION_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3360;
                    continue _fun114926
                }
            case 642:
                var1 = _closure1_slot15;
                var1 = var1.INTEGRATION_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3323;
                    continue _fun114926
                }
            case 659:
                var1 = _closure1_slot15;
                var1 = var1.STAGE_INSTANCE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3286;
                    continue _fun114926
                }
            case 676:
                var1 = _closure1_slot15;
                var1 = var1.STAGE_INSTANCE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3249;
                    continue _fun114926
                }
            case 693:
                var1 = _closure1_slot15;
                var1 = var1.STAGE_INSTANCE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3164;
                    continue _fun114926
                }
            case 710:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_SCHEDULED_EVENT_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3127;
                    continue _fun114926
                }
            case 727:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_SCHEDULED_EVENT_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3090;
                    continue _fun114926
                }
            case 744:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_SCHEDULED_EVENT_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3053;
                    continue _fun114926
                }
            case 761:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3016;
                    continue _fun114926
                }
            case 778:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 3016;
                    continue _fun114926
                }
            case 795:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2979;
                    continue _fun114926
                }
            case 812:
                var1 = _closure1_slot15;
                var1 = var1.THREAD_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2751;
                    continue _fun114926
                }
            case 829:
                var1 = _closure1_slot15;
                var1 = var1.THREAD_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2714;
                    continue _fun114926
                }
            case 846:
                var1 = _closure1_slot15;
                var1 = var1.THREAD_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2677;
                    continue _fun114926
                }
            case 863:
                var1 = _closure1_slot15;
                var1 = var1.APPLICATION_COMMAND_PERMISSION_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2640;
                    continue _fun114926
                }
            case 880:
                var1 = _closure1_slot15;
                var1 = var1.AUTO_MODERATION_BLOCK_MESSAGE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2603;
                    continue _fun114926
                }
            case 897:
                var1 = _closure1_slot15;
                var1 = var1.AUTO_MODERATION_FLAG_TO_CHANNEL;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2484;
                    continue _fun114926
                }
            case 914:
                var1 = _closure1_slot15;
                var1 = var1.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2447;
                    continue _fun114926
                }
            case 931:
                var1 = _closure1_slot15;
                var1 = var1.AUTO_MODERATION_QUARANTINE_USER;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2410;
                    continue _fun114926
                }
            case 948:
                var1 = _closure1_slot15;
                var1 = var1.CREATOR_MONETIZATION_REQUEST_CREATED;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2373;
                    continue _fun114926
                }
            case 965:
                var1 = _closure1_slot15;
                var1 = var1.CREATOR_MONETIZATION_TERMS_ACCEPTED;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2336;
                    continue _fun114926
                }
            case 982:
                var1 = _closure1_slot15;
                var1 = var1.AUTO_MODERATION_RULE_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2299;
                    continue _fun114926
                }
            case 999:
                var1 = _closure1_slot15;
                var1 = var1.AUTO_MODERATION_RULE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2262;
                    continue _fun114926
                }
            case 1016:
                var1 = _closure1_slot15;
                var1 = var1.AUTO_MODERATION_RULE_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2225;
                    continue _fun114926
                }
            case 1033:
                var1 = _closure1_slot15;
                var1 = var1.ONBOARDING_PROMPT_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2188;
                    continue _fun114926
                }
            case 1050:
                var1 = _closure1_slot15;
                var1 = var1.ONBOARDING_PROMPT_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2151;
                    continue _fun114926
                }
            case 1067:
                var1 = _closure1_slot15;
                var1 = var1.ONBOARDING_PROMPT_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2114;
                    continue _fun114926
                }
            case 1084:
                var1 = _closure1_slot15;
                var1 = var1.ONBOARDING_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2077;
                    continue _fun114926
                }
            case 1101:
                var1 = _closure1_slot15;
                var1 = var1.ONBOARDING_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2040;
                    continue _fun114926
                }
            case 1118:
                var1 = _closure1_slot15;
                var1 = var1.HOME_SETTINGS_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2003;
                    continue _fun114926
                }
            case 1135:
                var1 = _closure1_slot15;
                var1 = var1.HOME_SETTINGS_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1966;
                    continue _fun114926
                }
            case 1152:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_HOME_FEATURE_ITEM;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1704;
                    continue _fun114926
                }
            case 1169:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_HOME_REMOVE_ITEM;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1667;
                    continue _fun114926
                }
            case 1186:
                var1 = _closure1_slot15;
                var1 = var1.SOUNDBOARD_SOUND_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1630;
                    continue _fun114926
                }
            case 1203:
                var1 = _closure1_slot15;
                var1 = var1.SOUNDBOARD_SOUND_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1593;
                    continue _fun114926
                }
            case 1220:
                var1 = _closure1_slot15;
                var1 = var1.SOUNDBOARD_SOUND_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1556;
                    continue _fun114926
                }
            case 1237:
                var1 = _closure1_slot15;
                var1 = var1.VOICE_CHANNEL_STATUS_CREATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1519;
                    continue _fun114926
                }
            case 1254:
                var1 = _closure1_slot15;
                var1 = var1.VOICE_CHANNEL_STATUS_DELETE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1482;
                    continue _fun114926
                }
            case 1271:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_MEMBER_VERIFICATION_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1445;
                    continue _fun114926
                }
            case 1288:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_PROFILE_UPDATE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1408;
                    continue _fun114926
                }
            case 1302:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_MIGRATE_PIN_PERMISSION;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1371;
                    continue _fun114926
                }
            case 1316:
                var1 = _closure1_slot15;
                var1 = var1.GUILD_MIGRATE_BYPASS_SLOWMODE_PERMISSION;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1334;
                    continue _fun114926
                }
            case 1330:
                var1 = null;
                return var1;
            case 1334:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["naflH+"];
                return var1;
            case 1371:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["3Ne7MA"];
                return var1;
            case 1408:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.Ed6hF1;
                return var1;
            case 1445:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["NUKUb+"];
                return var1;
            case 1482:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.aS8Krq;
                return var1;
            case 1519:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.MWjnU7;
                return var1;
            case 1556:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["kVz4/0"];
                return var1;
            case 1593:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.CM8n1w;
                return var1;
            case 1630:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["0PD83V"];
                return var1;
            case 1667:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.kPReun;
                return var1;
            case 1704:
                var1 = var4.changes;
                var2 = null;
                var5 = var2 != var1;
                var1 = null;
                if (!var5) {
                    _fun114926_ip = 1744;
                    continue _fun114926
                }
            case 1721:
                var7 = var4.changes;
                var6 = var7.find;
                var5 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure1_slot16;
                    var0 = var0.ENTITY_TYPE;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var6.bind(var7)(var5);
            case 1744:
                if (!(var2 != var1)) {
                    _fun114926_ip = 1931;
                    continue _fun114926
                }
            case 1751:
                var2 = var1.newValue;
                var6 = _closure1_slot0;
                var1 = _closure1_slot3;
                var7 = 20;
                var1 = var1[var7];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                var1 = var1.GuildFeedItemTypes;
                var1 = var1.MESSAGE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1896;
                    continue _fun114926
                }
            case 1795:
                var6 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var7];
                var1 = var6.bind(var5)(var1);
                var1 = var1.GuildFeedItemTypes;
                var1 = var1.FORUM_POST;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 1861;
                    continue _fun114926
                }
            case 1828:
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["UZ+U3A"];
                return var1;
            case 1861:
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.hCuAb1;
                return var1;
            case 1896:
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var1 = var6[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["PyEa+J"];
                return var1;
            case 1931:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["UZ+U3A"];
                return var1;
            case 1966:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.XHE8qv;
                return var1;
            case 2003:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.dSdCjG;
                return var1;
            case 2040:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["yONu/l"];
                return var1;
            case 2077:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["wDaq3/"];
                return var1;
            case 2114:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.IuBTao;
                return var1;
            case 2151:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.ArIrWI;
                return var1;
            case 2188:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["/8A1g2"];
                return var1;
            case 2225:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.umua3n;
                return var1;
            case 2262:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["3wEA9u"];
                return var1;
            case 2299:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["NKljj+"];
                return var1;
            case 2336:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["ryGLk+"];
                return var1;
            case 2373:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.ONvWyr;
                return var1;
            case 2410:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["/W5u5o"];
                return var1;
            case 2447:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.Vk4TwX;
                return var1;
            case 2484:
                var1 = var4.options;
                var2 = null;
                var5 = var2 == var1;
                var6 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun114926_ip = 2510;
                    continue _fun114926
                }
            case 2502:
                var2 = var1.auto_moderation_rule_trigger_type;
            case 2510:
                var1 = _closure1_slot30;
                var5 = var1.USER_PROFILE;
                var1 = var5.toString;
                var1 = var1.bind(var5)();
                if (!(var2 !== var1)) {
                    _fun114926_ip = 2568;
                    continue _fun114926
                }
            case 2533:
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 17;
                var1 = var5[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.SD0PwJ;
                _fun114926_ip = 2601;
                continue _fun114926;
            case 2568:
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var1 = var2.YQsjej;
            case 2601:
                return var1;
            case 2603:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.NqWv2K;
                return var1;
            case 2640:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.uzCqBm;
                return var1;
            case 2677:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.s3Khn8;
                return var1;
            case 2714:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.PSsy4t;
                return var1;
            case 2751:
                var1 = var4.changes;
                var2 = null;
                var5 = var2 != var1;
                var1 = null;
                if (!var5) {
                    _fun114926_ip = 2791;
                    continue _fun114926
                }
            case 2768:
                var7 = var4.changes;
                var6 = var7.find;
                var5 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure1_slot16;
                    var0 = var0.TYPE;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var6.bind(var7)(var5);
            case 2791:
                if (!(var2 != var1)) {
                    _fun114926_ip = 2943;
                    continue _fun114926
                }
            case 2798:
                var2 = var1.newValue;
                var1 = _closure1_slot22;
                var1 = var1.PRIVATE_THREAD;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2906;
                    continue _fun114926
                }
            case 2818:
                var1 = _closure1_slot22;
                var1 = var1.ANNOUNCEMENT_THREAD;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 2869;
                    continue _fun114926
                }
            case 2832:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["2cxQ7G"];
                return var1;
            case 2869:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["6uaMmO"];
                return var1;
            case 2906:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.Br0y5w;
                return var1;
            case 2943:
                var1 = global;
                var5 = var1.Error;
                var1 = var5.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = '[AuditLog] Could not find type change for thread create';
                var9 = var2;
                var1 = new var9[var5](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 2979:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.zYb2da;
                return var1;
            case 3016:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["8qCI36"];
                return var1;
            case 3053:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["/ARPKQ"];
                return var1;
            case 3090:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.ebTK11;
                return var1;
            case 3127:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.S7k52p;
                return var1;
            case 3164:
                var2 = var4.userId;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun114926_ip = 3212;
                    continue _fun114926
                }
            case 3175:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["7ZIFm9"];
                _fun114926_ip = 3247;
                continue _fun114926;
            case 3212:
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 17;
                var5 = var5[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var5);
                var2 = var2.t;
                var1 = var2["Oi/in9"];
            case 3247:
                return var1;
            case 3249:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["0hQYU4"];
                return var1;
            case 3286:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["n7x/DF"];
                return var1;
            case 3323:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["8zScWY"];
                return var1;
            case 3360:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.ibCCOS;
                return var1;
            case 3397:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.HYvCb3;
                return var1;
            case 3434:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.NCxXUW;
                return var1;
            case 3471:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.Yna7E7;
                return var1;
            case 3508:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["3RIvLE"];
                return var1;
            case 3545:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["HPkD+M"];
                return var1;
            case 3582:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.rGEP9U;
                return var1;
            case 3619:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.bhujGc;
                return var1;
            case 3656:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.DRZifq;
                return var1;
            case 3693:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.JnUaVG;
                return var1;
            case 3730:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.IsCKfh;
                return var1;
            case 3767:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["7vekRO"];
                return var1;
            case 3804:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.in0VjZ;
                return var1;
            case 3841:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["6GTlWB"];
                return var1;
            case 3878:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.MhYhil;
                return var1;
            case 3915:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["3n/iWk"];
                return var1;
            case 3952:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.ja3kGS;
                return var1;
            case 3989:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.YHOXWy;
                return var1;
            case 4026:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["4s63tb"];
                return var1;
            case 4063:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.NRbN18;
                return var1;
            case 4100:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.UTLTx6;
                return var1;
            case 4137:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.fWvX0G;
                return var1;
            case 4174:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.K4eCZw;
                return var1;
            case 4211:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.Yt6NkU;
                return var1;
            case 4248:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.Vngfia;
                return var1;
            case 4285:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.pznhLN;
                return var1;
            case 4322:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.o3Y6HD;
                return var1;
            case 4359:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["XklUm/"];
                return var1;
            case 4396:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.qKOZTP;
                return var1;
            case 4433:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.B5hDZX;
                return var1;
            case 4470:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["HASt/3"];
                return var1;
            case 4507:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.uhtbNU;
                return var1;
            case 4544:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.l5Cu1a;
                return var1;
            case 4581:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.ynfvkm;
                return var1;
            case 4618:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.nTYk6B;
                return var1;
            case 4655:
                var1 = var4.changes;
                var2 = null;
                var5 = var2 != var1;
                var1 = null;
                if (!var5) {
                    _fun114926_ip = 4695;
                    continue _fun114926
                }
            case 4672:
                var5 = var4.changes;
                var4 = var5.find;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.key;
                    var0 = _closure1_slot16;
                    var0 = var0.TYPE;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var4.bind(var5)(var3);
            case 4695:
                if (!(var2 != var1)) {
                    _fun114926_ip = 4901;
                    continue _fun114926
                }
            case 4702:
                var2 = var1.newValue;
                var1 = _closure1_slot22;
                var1 = var1.GUILD_STAGE_VOICE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4864;
                    continue _fun114926
                }
            case 4725:
                var1 = _closure1_slot22;
                var1 = var1.GUILD_VOICE;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4827;
                    continue _fun114926
                }
            case 4739:
                var1 = _closure1_slot22;
                var1 = var1.GUILD_CATEGORY;
                if (!(var1 !== var2)) {
                    _fun114926_ip = 4790;
                    continue _fun114926
                }
            case 4753:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.wrYNG2;
                return var1;
            case 4790:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.T3KIjz;
                return var1;
            case 4827:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1.NPOy4G;
                return var1;
            case 4864:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var1 = var1["OKp4+o"];
                return var1;
            case 4901:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = '[AuditLog] Could not find type change for channel create';
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 4937:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.t;
                var0 = var0.LjZO31;
                return var0;
        }
    };
    var2.getChangeTitle = var4;
    var4 = function arg0() {
        _fun114930: for (var _fun114930_ip = 0;;) switch (_fun114930_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot29;
                var1 = var1.GUILD_FEED_REMOVED;
                if (!(var1 !== var2)) {
                    _fun114930_ip = 177;
                    continue _fun114930
                }
            case 23:
                var1 = _closure1_slot29;
                var1 = var1.ACTIVE_CHANNELS_REMOVED;
                if (!(var1 !== var2)) {
                    _fun114930_ip = 116;
                    continue _fun114930
                }
            case 37:
                var1 = _closure1_slot29;
                var1 = var1.PINNED;
                if (!(var1 !== var2)) {
                    _fun114930_ip = 55;
                    continue _fun114930
                }
            case 51:
                var1 = null;
                return var1;
            case 55:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["1QLRYb"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 116:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["4YLtzC"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 177:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 17;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["5G8ZD4"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getStringForAddedChannelFlag = var4;
    var4 = function arg0() {
        _fun114931: for (var _fun114931_ip = 0;;) switch (_fun114931_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot29;
                var1 = var1.GUILD_FEED_REMOVED;
                if (!(var1 !== var2)) {
                    _fun114931_ip = 177;
                    continue _fun114931
                }
            case 23:
                var1 = _closure1_slot29;
                var1 = var1.ACTIVE_CHANNELS_REMOVED;
                if (!(var1 !== var2)) {
                    _fun114931_ip = 116;
                    continue _fun114931
                }
            case 37:
                var1 = _closure1_slot29;
                var1 = var1.PINNED;
                if (!(var1 !== var2)) {
                    _fun114931_ip = 55;
                    continue _fun114931
                }
            case 51:
                var1 = null;
                return var1;
            case 55:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.CMweGA;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 116:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["8qpgcz"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 177:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 17;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.S5kuWQ;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getStringForRemovedChannelFlag = var4;
    var4 = function arg0, arg1() {
        _fun114932: for (var _fun114932_ip = 0;;) switch (_fun114932_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var2 = _closure1_slot23;
                var2 = var2.CREATE_INSTANT_INVITE;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3870;
                    continue _fun114932
                }
            case 26:
                var2 = _closure1_slot23;
                var2 = var2.KICK_MEMBERS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3811;
                    continue _fun114932
                }
            case 43:
                var2 = _closure1_slot23;
                var2 = var2.BAN_MEMBERS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3752;
                    continue _fun114932
                }
            case 60:
                var2 = _closure1_slot23;
                var2 = var2.ADMINISTRATOR;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3693;
                    continue _fun114932
                }
            case 77:
                var2 = _closure1_slot23;
                var2 = var2.MANAGE_CHANNELS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3535;
                    continue _fun114932
                }
            case 94:
                var2 = _closure1_slot23;
                var2 = var2.MANAGE_GUILD;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3476;
                    continue _fun114932
                }
            case 111:
                var2 = _closure1_slot23;
                var2 = var2.VIEW_GUILD_ANALYTICS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3417;
                    continue _fun114932
                }
            case 128:
                var2 = _closure1_slot23;
                var2 = var2.VIEW_CREATOR_MONETIZATION_ANALYTICS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3358;
                    continue _fun114932
                }
            case 145:
                var2 = _closure1_slot23;
                var2 = var2.CHANGE_NICKNAME;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3299;
                    continue _fun114932
                }
            case 162:
                var2 = _closure1_slot23;
                var2 = var2.MANAGE_NICKNAMES;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3240;
                    continue _fun114932
                }
            case 179:
                var2 = _closure1_slot23;
                var2 = var2.MANAGE_ROLES;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3181;
                    continue _fun114932
                }
            case 196:
                var2 = _closure1_slot23;
                var2 = var2.MANAGE_WEBHOOKS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3122;
                    continue _fun114932
                }
            case 213:
                var2 = _closure1_slot23;
                var2 = var2.CREATE_GUILD_EXPRESSIONS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3063;
                    continue _fun114932
                }
            case 230:
                var2 = _closure1_slot23;
                var2 = var2.MANAGE_GUILD_EXPRESSIONS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 3004;
                    continue _fun114932
                }
            case 247:
                var2 = _closure1_slot23;
                var2 = var2.VIEW_AUDIT_LOG;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2945;
                    continue _fun114932
                }
            case 264:
                var2 = _closure1_slot23;
                var2 = var2.VIEW_CHANNEL;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2787;
                    continue _fun114932
                }
            case 281:
                var2 = _closure1_slot23;
                var2 = var2.SEND_MESSAGES;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2728;
                    continue _fun114932
                }
            case 298:
                var2 = _closure1_slot23;
                var2 = var2.SEND_TTS_MESSAGES;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2669;
                    continue _fun114932
                }
            case 315:
                var2 = _closure1_slot23;
                var2 = var2.USE_APPLICATION_COMMANDS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2610;
                    continue _fun114932
                }
            case 332:
                var2 = _closure1_slot23;
                var2 = var2.MANAGE_MESSAGES;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2551;
                    continue _fun114932
                }
            case 349:
                var2 = _closure1_slot23;
                var2 = var2.EMBED_LINKS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2492;
                    continue _fun114932
                }
            case 366:
                var2 = _closure1_slot23;
                var2 = var2.ATTACH_FILES;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2433;
                    continue _fun114932
                }
            case 383:
                var2 = _closure1_slot23;
                var2 = var2.READ_MESSAGE_HISTORY;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2374;
                    continue _fun114932
                }
            case 400:
                var2 = _closure1_slot23;
                var2 = var2.MENTION_EVERYONE;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2315;
                    continue _fun114932
                }
            case 417:
                var2 = _closure1_slot23;
                var2 = var2.USE_EXTERNAL_EMOJIS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2256;
                    continue _fun114932
                }
            case 434:
                var2 = _closure1_slot23;
                var2 = var2.USE_EXTERNAL_STICKERS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2197;
                    continue _fun114932
                }
            case 451:
                var2 = _closure1_slot23;
                var2 = var2.ADD_REACTIONS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2138;
                    continue _fun114932
                }
            case 468:
                var2 = _closure1_slot23;
                var2 = var2.CONNECT;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2079;
                    continue _fun114932
                }
            case 485:
                var2 = _closure1_slot23;
                var2 = var2.SPEAK;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 2020;
                    continue _fun114932
                }
            case 502:
                var2 = _closure1_slot23;
                var2 = var2.MUTE_MEMBERS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1961;
                    continue _fun114932
                }
            case 519:
                var2 = _closure1_slot23;
                var2 = var2.DEAFEN_MEMBERS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1902;
                    continue _fun114932
                }
            case 536:
                var2 = _closure1_slot23;
                var2 = var2.MOVE_MEMBERS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1843;
                    continue _fun114932
                }
            case 553:
                var2 = _closure1_slot23;
                var2 = var2.USE_VAD;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1784;
                    continue _fun114932
                }
            case 570:
                var2 = _closure1_slot23;
                var2 = var2.PRIORITY_SPEAKER;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1725;
                    continue _fun114932
                }
            case 587:
                var2 = _closure1_slot23;
                var2 = var2.STREAM;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1666;
                    continue _fun114932
                }
            case 604:
                var2 = _closure1_slot23;
                var2 = var2.REQUEST_TO_SPEAK;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1607;
                    continue _fun114932
                }
            case 621:
                var2 = _closure1_slot23;
                var2 = var2.USE_EMBEDDED_ACTIVITIES;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1548;
                    continue _fun114932
                }
            case 638:
                var2 = _closure1_slot23;
                var2 = var2.CREATE_EVENTS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1489;
                    continue _fun114932
                }
            case 655:
                var2 = _closure1_slot23;
                var2 = var2.MANAGE_EVENTS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1430;
                    continue _fun114932
                }
            case 672:
                var2 = _closure1_slot23;
                var2 = var2.CREATE_PUBLIC_THREADS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1371;
                    continue _fun114932
                }
            case 689:
                var2 = _closure1_slot23;
                var2 = var2.CREATE_PRIVATE_THREADS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1312;
                    continue _fun114932
                }
            case 706:
                var2 = _closure1_slot23;
                var2 = var2.SEND_MESSAGES_IN_THREADS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1253;
                    continue _fun114932
                }
            case 723:
                var2 = _closure1_slot23;
                var2 = var2.MANAGE_THREADS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1194;
                    continue _fun114932
                }
            case 740:
                var2 = _closure1_slot23;
                var2 = var2.MODERATE_MEMBERS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1135;
                    continue _fun114932
                }
            case 757:
                var2 = _closure1_slot23;
                var2 = var2.SET_VOICE_CHANNEL_STATUS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1076;
                    continue _fun114932
                }
            case 774:
                var2 = _closure1_slot23;
                var2 = var2.SEND_POLLS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 1017;
                    continue _fun114932
                }
            case 791:
                var2 = _closure1_slot23;
                var2 = var2.USE_EXTERNAL_APPS;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 958;
                    continue _fun114932
                }
            case 808:
                var2 = _closure1_slot23;
                var2 = var2.PIN_MESSAGES;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 899;
                    continue _fun114932
                }
            case 822:
                var2 = _closure1_slot23;
                var2 = var2.BYPASS_SLOWMODE;
                if (!(var2 !== var3)) {
                    _fun114932_ip = 840;
                    continue _fun114932
                }
            case 836:
                var2 = null;
                return var2;
            case 840:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.kqcjeV;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 899:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.Y5BI39;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 958:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.TtA5rK;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1017:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.UMQ7Ww;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1076:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.VBwkUf;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1135:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["+RL6pz"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1194:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.kEqgr7;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1253:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.fTE74g;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1312:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.QwbTSa;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1371:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["25rKnX"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1430:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.HIgA5a;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1489:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.qyjZua;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1548:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.rLSGeh;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1607:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["5kicT2"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1666:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.FlNoSV;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1725:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.BVK71i;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1784:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["08zAV7"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1843:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.YtjJPQ;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1902:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["9L47Fr"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 1961:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["8EI30/"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2020:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["8w1tIR"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2079:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.S0W8Z5;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2138:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.yEoJAr;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2197:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["UeRs+b"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2256:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.BpBGZU;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2315:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.Y78KGC;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2374:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.l9ufaR;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2433:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["3AS4UM"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2492:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["969dEL"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2551:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["6lU9xM"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2610:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.shbR1a;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2669:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.Mg7bku;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2728:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.T32rkC;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 2787:
                var3 = var1.targetType;
                var2 = _closure1_slot17;
                var2 = var2.CHANNEL;
                if (!(var3 !== var2)) {
                    _fun114932_ip = 2886;
                    continue _fun114932
                }
            case 2807:
                var3 = var1.targetType;
                var2 = _closure1_slot17;
                var2 = var2.CHANNEL_OVERWRITE;
                if (!(var3 !== var2)) {
                    _fun114932_ip = 2886;
                    continue _fun114932
                }
            case 2827:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.uV83yi;
                var2 = var3.bind(var4)(var2);
                _fun114932_ip = 2943;
                continue _fun114932;
            case 2886:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var3 = 17;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3["W/A4Qp"];
                var2 = var4.bind(var5)(var3);
            case 2943:
                return var2;
            case 2945:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.fZgLpA;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3004:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.bbuXIn;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3063:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.HarVuP;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3122:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["/ADKmM"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3181:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["C8d+oG"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3240:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["t+Ct5x"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3299:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.dilOF6;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3358:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["0lTLTv"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3417:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2["rQJBE/"];
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3476:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.QZRcfO;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 3535:
                var3 = var1.targetType;
                var2 = _closure1_slot17;
                var2 = var2.CHANNEL;
                if (!(var3 !== var2)) {
                    _fun114932_ip = 3634;
                    continue _fun114932
                }
            case 3555:
                var2 = var1.targetType;
                var1 = _closure1_slot17;
                var1 = var1.CHANNEL_OVERWRITE;
                if (!(var2 !== var1)) {
                    _fun114932_ip = 3634;
                    continue _fun114932
                }
            case 3575:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["9qLtWs"];
                var1 = var2.bind(var3)(var1);
                _fun114932_ip = 3691;
                continue _fun114932;
            case 3634:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 17;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.nAw15L;
                var1 = var3.bind(var4)(var2);
            case 3691:
                return var1;
            case 3693:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.PGvZqX;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 3752:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.oTBA7N;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 3811:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 17;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.pBNv6i;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 3870:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 17;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.zJrgTG;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getStringForPermission = var4;
    var3 = function arg0, arg1() {
        var3 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = new Array(0);
        var _closure2_slot1 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun114934: for (var _fun114934_ip = 0;;) switch (_fun114934_ip) {
                case 0:
                    var8 = arg0;
                    var _closure3_slot0 = var8;
                    var3 = _closure2_slot0;
                    var2 = function arg0, arg1() {
                        _fun114935: for (var _fun114935_ip = 0;;) switch (_fun114935_ip) {
                            case 0:
                                var6 = arg0;
                                var0 = arg1;
                                var _closure4_slot0 = var6;
                                var _closure4_slot1 = var0;
                                var4 = var6.targetType;
                                var3 = _closure1_slot17;
                                var3 = var3.GUILD;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1244;
                                    continue _fun114935
                                }
                            case 42:
                                var3 = _closure1_slot17;
                                var3 = var3.GUILD_HOME;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1244;
                                    continue _fun114935
                                }
                            case 59:
                                var3 = _closure1_slot17;
                                var3 = var3.GUILD_PROFILE;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1244;
                                    continue _fun114935
                                }
                            case 76:
                                var3 = _closure1_slot17;
                                var3 = var3.CHANNEL;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1205;
                                    continue _fun114935
                                }
                            case 93:
                                var3 = _closure1_slot17;
                                var3 = var3.CHANNEL_OVERWRITE;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1205;
                                    continue _fun114935
                                }
                            case 110:
                                var3 = _closure1_slot17;
                                var3 = var3.USER;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1166;
                                    continue _fun114935
                                }
                            case 127:
                                var3 = _closure1_slot17;
                                var3 = var3.ROLE;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1127;
                                    continue _fun114935
                                }
                            case 144:
                                var3 = _closure1_slot17;
                                var3 = var3.ONBOARDING_PROMPT;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1015;
                                    continue _fun114935
                                }
                            case 161:
                                var3 = _closure1_slot17;
                                var3 = var3.GUILD_ONBOARDING;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1013;
                                    continue _fun114935
                                }
                            case 178:
                                var3 = _closure1_slot17;
                                var3 = var3.GUILD_MEMBER_VERIFICATION;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 1013;
                                    continue _fun114935
                                }
                            case 195:
                                var3 = _closure1_slot17;
                                var3 = var3.INVITE;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 984;
                                    continue _fun114935
                                }
                            case 212:
                                var3 = _closure1_slot17;
                                var3 = var3.INTEGRATION;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 945;
                                    continue _fun114935
                                }
                            case 229:
                                var3 = _closure1_slot17;
                                var3 = var3.WEBHOOK;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 906;
                                    continue _fun114935
                                }
                            case 246:
                                var3 = _closure1_slot17;
                                var3 = var3.EMOJI;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 867;
                                    continue _fun114935
                                }
                            case 263:
                                var3 = _closure1_slot17;
                                var3 = var3.STICKER;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 828;
                                    continue _fun114935
                                }
                            case 280:
                                var3 = _closure1_slot17;
                                var3 = var3.STAGE_INSTANCE;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 789;
                                    continue _fun114935
                                }
                            case 297:
                                var3 = _closure1_slot17;
                                var3 = var3.GUILD_SCHEDULED_EVENT;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 750;
                                    continue _fun114935
                                }
                            case 314:
                                var3 = _closure1_slot17;
                                var3 = var3.GUILD_SCHEDULED_EVENT_EXCEPTION;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 750;
                                    continue _fun114935
                                }
                            case 331:
                                var3 = _closure1_slot17;
                                var3 = var3.THREAD;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 711;
                                    continue _fun114935
                                }
                            case 348:
                                var3 = _closure1_slot17;
                                var3 = var3.APPLICATION_COMMAND;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 603;
                                    continue _fun114935
                                }
                            case 365:
                                var3 = _closure1_slot17;
                                var3 = var3.AUTO_MODERATION_RULE;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 564;
                                    continue _fun114935
                                }
                            case 382:
                                var3 = _closure1_slot17;
                                var3 = var3.GUILD_SOUNDBOARD;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 535;
                                    continue _fun114935
                                }
                            case 399:
                                var3 = _closure1_slot17;
                                var3 = var3.HOME_SETTINGS;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 491;
                                    continue _fun114935
                                }
                            case 413:
                                var3 = _closure1_slot17;
                                var3 = var3.VOICE_CHANNEL_STATUS;
                                if (!(var3 !== var4)) {
                                    _fun114935_ip = 452;
                                    continue _fun114935
                                }
                            case 427:
                                var5 = _closure1_slot34;
                                var4 = var5.warn;
                                var3 = 'Unknown targetType for log';
                                var3 = var4.bind(var5)(var3, var6);
                                var3 = null;
                                return var3;
                            case 452:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.STATUS;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot10;
                                    var1 = var2.getChannel;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var1 = 23;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var5 = var3.bind(var1)(var2);
                                    var4 = var5.computeChannelName;
                                    var8 = _closure1_slot13;
                                    var7 = _closure1_slot12;
                                    var9 = arg0;
                                    var6 = true;
                                    var10 = var5;
                                    var0 = var10[var4](var9, var8, var7, var6, var5);
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 491:
                                var9 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.GUILD_ID;
                                var11 = var0.id;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot6;
                                    var1 = var2.getSettings;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function() { // Environment: var1
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot3;
                                    var0 = 17;
                                    var1 = var5[var0];
                                    var3 = undefined;
                                    var1 = var4.bind(var3)(var1);
                                    var2 = var1.intl;
                                    var1 = var2.string;
                                    var0 = var5[var0];
                                    var0 = var4.bind(var3)(var0);
                                    var0 = var0.t;
                                    var0 = var0.VbpLyU;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var9](var15, var14, var13, var12, var11, var10);
                                return var3;
                            case 535:
                                var7 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var5 = var3.NAME;
                                var4 = _closure1_slot24;
                                var3 = undefined;
                                var3 = var7.bind(var3)(var6, var5, var4);
                                return var3;
                            case 564:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.NAME;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = _closure1_slot14;
                                    var2 = var1.automodRules;
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.name;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 603:
                                var4 = var6.targetId;
                                var3 = var6.options;
                                var3 = var3.application_id;
                                if (!(var4 !== var3)) {
                                    _fun114935_ip = 663;
                                    continue _fun114935
                                }
                            case 624:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.NAME;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = _closure1_slot14;
                                    var2 = var1.applicationCommands;
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    _fun114967: for (var _fun114967_ip = 0;;) switch (_fun114967_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = var0.name_localized;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun114967_ip = 29;
                                                continue _fun114967
                                            }
                                        case 15:
                                            var2 = var0.name_localized;
                                            var1 = '';
                                            if (!(var1 === var2)) {
                                                _fun114967_ip = 36;
                                                continue _fun114967
                                            }
                                        case 29:
                                            var3 = var0.name;
                                            _fun114967_ip = 42;
                                            continue _fun114967;
                                        case 36:
                                            var3 = var0.name_localized;
                                        case 42:
                                            var2 = var0.type;
                                            var4 = _closure1_slot0;
                                            var1 = _closure1_slot3;
                                            var0 = 24;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var0 = var4.bind(var0)(var1);
                                            var0 = var0.ApplicationCommandType;
                                            var1 = var0.CHAT;
                                            var0 = var3;
                                            if (!(var2 === var1)) {
                                                _fun114967_ip = 115;
                                                continue _fun114967
                                            }
                                        case 91:
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var2 = var1.concat;
                                            var1 = '/\u2060';
                                            var0 = var2.bind(var1)(var3);
                                        case 115:
                                            return var0;
                                    }
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 663:
                                var3 = _closure1_slot14;
                                var5 = var3.integrations;
                                var4 = var5.find;
                                var3 = function(arg0) { // Environment: var1
                                    _fun114964: for (var _fun114964_ip = 0;;) switch (_fun114964_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var0 = var0.application;
                                            var1 = null;
                                            var2 = var1 == var0;
                                            var1 = undefined;
                                            if (var2) {
                                                _fun114964_ip = 24;
                                                continue _fun114964
                                            }
                                        case 19:
                                            var1 = var0.id;
                                        case 24:
                                            var0 = _closure4_slot0;
                                            var0 = var0.targetId;
                                            var0 = var1 === var0;
                                            return var0;
                                    }
                                };
                                var4 = var4.bind(var5)(var3);
                                var3 = null;
                                if (!(var3 == var4)) {
                                    _fun114935_ip = 704;
                                    continue _fun114935
                                }
                            case 696:
                                var3 = var6.targetId;
                                _fun114935_ip = 709;
                                continue _fun114935;
                            case 704:
                                var3 = var4.name;
                            case 709:
                                return var3;
                            case 711:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.NAME;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = _closure1_slot14;
                                    var2 = var1.threads;
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.name;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 750:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.NAME;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = _closure1_slot14;
                                    var2 = var1.guildScheduledEvents;
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.name;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 789:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.TOPIC;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    _fun114955: for (var _fun114955_ip = 0;;) switch (_fun114955_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var _closure5_slot0 = var0;
                                            var0 = global;
                                            var3 = var0.Object;
                                            var2 = var3.values;
                                            var5 = _closure1_slot7;
                                            var4 = var5.getStageInstancesByGuild;
                                            var0 = _closure4_slot1;
                                            var0 = var0.id;
                                            var0 = var4.bind(var5)(var0);
                                            var3 = var2.bind(var3)(var0);
                                            var0 = null;
                                            var2 = var0 == var3;
                                            var0 = undefined;
                                            if (var2) {
                                                _fun114955_ip = 85;
                                                continue _fun114955
                                            }
                                        case 68:
                                            var2 = var3.find;
                                            var1 = function(arg0) { // Environment: var1
                                                var0 = arg0;
                                                var1 = var0.id;
                                                var0 = _closure5_slot0;
                                                var0 = var1 === var0;
                                                return var0;
                                            };
                                            var0 = var2.bind(var3)(var1);
                                        case 85:
                                            return var0;
                                    }
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.topic;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 828:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.NAME;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot8;
                                    var1 = var2.getStickerById;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.name;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 867:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.NAME;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var3 = _closure1_slot4;
                                    var2 = var3.getGuildEmoji;
                                    var1 = _closure4_slot1;
                                    var1 = var1.id;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.name;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 906:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.NAME;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = _closure1_slot14;
                                    var2 = var1.webhooks;
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.name;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 945:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.TYPE;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var1 = _closure1_slot14;
                                    var2 = var1.integrations;
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.name;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 984:
                                var7 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var5 = var3.CODE;
                                var4 = _closure1_slot24;
                                var3 = undefined;
                                var3 = var7.bind(var3)(var6, var5, var4);
                                return var3;
                            case 1013:
                                return var0;
                            case 1015:
                                var7 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.ID;
                                var9 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot5;
                                    var1 = var2.getOnboardingPrompt;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.title;
                                    return var0;
                                };
                                var16 = undefined;
                                var15 = var6;
                                var3 = var16[var7](var15, var14, var13, var12, var11);
                                var4 = null;
                                if (!(var4 != var3)) {
                                    _fun114935_ip = 1068;
                                    continue _fun114935
                                }
                            case 1060:
                                var4 = '';
                                if (!(var4 === var3)) {
                                    _fun114935_ip = 1125;
                                    continue _fun114935
                                }
                            case 1068:
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot3;
                                var4 = 17;
                                var5 = var10[var4];
                                var5 = var8.bind(var9)(var5);
                                var7 = var5.intl;
                                var5 = var7.string;
                                var4 = var10[var4];
                                var4 = var8.bind(var9)(var4);
                                var4 = var4.t;
                                var4 = var4.ZNQyiR;
                                var3 = var5.bind(var7)(var4);
                            case 1125:
                                return var3;
                            case 1127:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.NAME;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var3 = _closure1_slot11;
                                    var2 = var3.getRole;
                                    var0 = _closure4_slot1;
                                    var1 = var0.id;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = var0.name;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 1166:
                                var8 = _closure1_slot45;
                                var3 = _closure1_slot16;
                                var14 = var3.NICK;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot13;
                                    var1 = var2.getUser;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    return var0;
                                };
                                var15 = var6;
                                var3 = var16[var8](var15, var14, var13, var12, var11);
                                return var3;
                            case 1205:
                                var5 = _closure1_slot45;
                                var2 = _closure1_slot16;
                                var14 = var2.NAME;
                                var16 = undefined;
                                var13 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot10;
                                    var1 = var2.getChannel;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var1
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var1 = 23;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var5 = var3.bind(var1)(var2);
                                    var4 = var5.computeChannelName;
                                    var8 = _closure1_slot13;
                                    var7 = _closure1_slot12;
                                    var9 = arg0;
                                    var6 = true;
                                    var10 = var5;
                                    var0 = var10[var4](var9, var8, var7, var6, var5);
                                    return var0;
                                };
                                var15 = var6;
                                var1 = var16[var5](var15, var14, var13, var12, var11);
                                return var1;
                            case 1244:
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var7 = var2.bind(var0)(var8, var3);
                    var6 = _closure1_slot13;
                    var5 = var6.getUser;
                    var3 = var8.userId;
                    var6 = var5.bind(var6)(var3);
                    var5 = null;
                    if (!(var5 == var7)) {
                        _fun114934_ip = 139;
                        continue _fun114934
                    }
                case 60:
                    var2 = _closure1_slot15;
                    var3 = var2.MEMBER_PRUNE;
                    var9 = new Array(5);
                    var9[0] = var3;
                    var3 = var2.MEMBER_DISCONNECT;
                    var9[1] = var3;
                    var3 = var2.MEMBER_MOVE;
                    var9[2] = var3;
                    var3 = var2.CREATOR_MONETIZATION_REQUEST_CREATED;
                    var9[3] = var3;
                    var2 = var2.CREATOR_MONETIZATION_TERMS_ACCEPTED;
                    var9[4] = var2;
                    var3 = var9.includes;
                    var2 = var8.action;
                    var2 = var3.bind(var9)(var2);
                    if (!var2) {
                        _fun114934_ip = 288;
                        continue _fun114934
                    }
                case 139:
                    var3 = var8.set;
                    var2 = 'user';
                    var6 = var3.bind(var8)(var2, var6);
                    _closure3_slot0 = var6;
                    var3 = var6.set;
                    var2 = 'target';
                    var7 = var3.bind(var6)(var2, var7);
                    _closure3_slot0 = var7;
                    var6 = var7.set;
                    var2 = function arg0() {
                        _fun114975: for (var _fun114975_ip = 0;;) switch (_fun114975_ip) {
                            case 0:
                                var4 = arg0;
                                var _closure4_slot0 = var4;
                                var0 = var4.options;
                                var1 = null;
                                if (!(var1 == var0)) {
                                    _fun114975_ip = 27;
                                    continue _fun114975
                                }
                            case 20:
                                var0 = var4.options;
                                return var0;
                            case 27:
                                var0 = {};
                                var14 = var4.options;
                                var15 = var0;
                                var2 = copyDataProperties(var15, var14);
                                var2 = var4.options;
                                var6 = var2.type;
                                var5 = _closure1_slot27;
                                var5 = var5.USER;
                                if (!(var5 !== var6)) {
                                    _fun114975_ip = 119;
                                    continue _fun114975
                                }
                            case 68:
                                var5 = _closure1_slot27;
                                var5 = var5.ROLE;
                                if (!(var5 === var6)) {
                                    _fun114975_ip = 162;
                                    continue _fun114975
                                }
                            case 82:
                                var8 = _closure1_slot46;
                                var5 = var4.options;
                                var7 = var5.role_name;
                                var6 = _closure1_slot24;
                                var5 = undefined;
                                var5 = var8.bind(var5)(var7, var6);
                                var0.subtarget = var5;
                                _fun114975_ip = 162;
                                continue _fun114975;
                            case 119:
                                var9 = _closure1_slot46;
                                var5 = var4.options;
                                var8 = var5.id;
                                var7 = undefined;
                                var6 = function(arg0) { // Environment: var3
                                    var2 = _closure1_slot13;
                                    var1 = var2.getUser;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var5 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var0 = var0.tag;
                                    return var0;
                                };
                                var5 = var9.bind(var7)(var8, var6, var5);
                                var0.subtarget = var5;
                            case 162:
                                var5 = var4.options;
                                var5 = var5.channel_id;
                                if (!(var1 != var5)) {
                                    _fun114975_ip = 223;
                                    continue _fun114975
                                }
                            case 176:
                                var10 = _closure1_slot45;
                                var5 = var4.options;
                                var11 = var5.channel_id;
                                var16 = undefined;
                                var14 = '';
                                var13 = function(arg0) { // Environment: var3
                                    var2 = _closure1_slot10;
                                    var1 = var2.getChannel;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var12 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    return var0;
                                };
                                var15 = var4;
                                var5 = var16[var10](var15, var14, var13, var12, var11, var10);
                                var0.channel = var5;
                            case 223:
                                var5 = var4.options;
                                var5 = var5.members_removed;
                                var5 = var1 != var5;
                                if (!var5) {
                                    _fun114975_ip = 258;
                                    continue _fun114975
                                }
                            case 241:
                                var6 = var4.options;
                                var7 = var6.members_removed;
                                var6 = 0;
                                var5 = var6 !== var7;
                            case 258:
                                if (!var5) {
                                    _fun114975_ip = 278;
                                    continue _fun114975
                                }
                            case 261:
                                var5 = var4.options;
                                var5 = var5.members_removed;
                                var0.count = var5;
                            case 278:
                                var4 = var4.options;
                                var4 = var4.event_exception_id;
                                if (!(var1 != var4)) {
                                    _fun114975_ip = 474;
                                    continue _fun114975
                                }
                            case 296:
                                var4 = _closure1_slot14;
                                var6 = var4.guildScheduledEvents;
                                var5 = var6.find;
                                var4 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var1 = var0.id;
                                    var0 = _closure4_slot0;
                                    var0 = var0.targetId;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var4 = var5.bind(var6)(var4);
                                var6 = var1 == var4;
                                var5 = undefined;
                                var9 = undefined;
                                if (var6) {
                                    _fun114975_ip = 357;
                                    continue _fun114975
                                }
                            case 334:
                                var6 = var4.guild_scheduled_event_exceptions;
                                var4 = var6.find;
                                var3 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var1 = var0.event_exception_id;
                                    var0 = _closure4_slot0;
                                    var0 = var0.options;
                                    var0 = var0.event_exception_id;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var9 = var4.bind(var6)(var3);
                            case 357:
                                var4 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var3 = 29;
                                var3 = var8[var3];
                                var4 = var4.bind(var5)(var3);
                                var3 = var4.dateFormat;
                                var7 = _closure1_slot1;
                                var2 = 30;
                                var2 = var8[var2];
                                var2 = var7.bind(var5)(var2);
                                var6 = 19;
                                var6 = var8[var6];
                                var7 = var7.bind(var5)(var6);
                                var6 = var7.extractTimestamp;
                                var10 = var1 == var9;
                                var8 = undefined;
                                if (var10) {
                                    _fun114975_ip = 432;
                                    continue _fun114975
                                }
                            case 426:
                                var8 = var9.event_exception_id;
                            case 432:
                                var9 = var1 != var8;
                                var1 = '0';
                                if (!var9) {
                                    _fun114975_ip = 448;
                                    continue _fun114975
                                }
                            case 445:
                                var1 = var8;
                            case 448:
                                var1 = var6.bind(var7)(var1);
                                var2 = var2.bind(var5)(var1);
                                var1 = 'LL';
                                var1 = var3.bind(var4)(var2, var1);
                                var0.subtarget = var1;
                            case 474:
                                return var0;
                        }
                    };
                    var3 = var2.bind(var0)(var7);
                    var2 = 'options';
                    var7 = var6.bind(var7)(var2, var3);
                    _closure3_slot0 = var7;
                    var2 = var7.changes;
                    var3 = var7;
                    if (!(var5 != var2)) {
                        _fun114934_ip = 274;
                        continue _fun114934
                    }
                case 221:
                    var6 = new Array(0);
                    var _closure3_slot1 = var6;
                    var8 = var7.changes;
                    var5 = var8.forEach;
                    var2 = function(arg0) { // Environment: var4
                        _fun114982: for (var _fun114982_ip = 0;;) switch (_fun114982_ip) {
                            case 0:
                                var6 = _closure3_slot0;
                                var5 = _closure2_slot0;
                                var4 = function arg0, arg1, arg2() {
                                    _fun114983: for (var _fun114983_ip = 0;;) switch (_fun114983_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = arg1;
                                            var4 = arg2;
                                            var _closure5_slot0 = var4;
                                            var6 = var2.action;
                                            var5 = _closure1_slot15;
                                            var5 = var5.APPLICATION_COMMAND_PERMISSION_UPDATE;
                                            if (!(var6 !== var5)) {
                                                _fun114983_ip = 1888;
                                                continue _fun114983
                                            }
                                        case 40:
                                            var6 = var0.key;
                                            var5 = _closure1_slot16;
                                            var5 = var5.OWNER_ID;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1867;
                                                continue _fun114983
                                            }
                                        case 62:
                                            var5 = _closure1_slot16;
                                            var5 = var5.CHANNEL_ID;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1838;
                                                continue _fun114983
                                            }
                                        case 79:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AFK_CHANNEL_ID;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1838;
                                                continue _fun114983
                                            }
                                        case 96:
                                            var5 = _closure1_slot16;
                                            var5 = var5.SYSTEM_CHANNEL_ID;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1838;
                                                continue _fun114983
                                            }
                                        case 113:
                                            var5 = _closure1_slot16;
                                            var5 = var5.RULES_CHANNEL_ID;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1838;
                                                continue _fun114983
                                            }
                                        case 130:
                                            var5 = _closure1_slot16;
                                            var5 = var5.PUBLIC_UPDATES_CHANNEL_ID;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1838;
                                                continue _fun114983
                                            }
                                        case 147:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AFK_TIMEOUT;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1817;
                                                continue _fun114983
                                            }
                                        case 164:
                                            var5 = _closure1_slot16;
                                            var5 = var5.BITRATE;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1796;
                                                continue _fun114983
                                            }
                                        case 181:
                                            var5 = _closure1_slot16;
                                            var5 = var5.COLOR;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1775;
                                                continue _fun114983
                                            }
                                        case 198:
                                            var5 = _closure1_slot16;
                                            var5 = var5.THEME_COLORS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1754;
                                                continue _fun114983
                                            }
                                        case 215:
                                            var5 = _closure1_slot16;
                                            var5 = var5.MAX_AGE;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1733;
                                                continue _fun114983
                                            }
                                        case 232:
                                            var5 = _closure1_slot16;
                                            var5 = var5.PERMISSIONS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1573;
                                                continue _fun114983
                                            }
                                        case 249:
                                            var5 = _closure1_slot16;
                                            var5 = var5.PERMISSIONS_GRANTED;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1417;
                                                continue _fun114983
                                            }
                                        case 266:
                                            var5 = _closure1_slot16;
                                            var5 = var5.PERMISSIONS_DENIED;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1417;
                                                continue _fun114983
                                            }
                                        case 283:
                                            var5 = _closure1_slot16;
                                            var5 = var5.FLAGS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1058;
                                                continue _fun114983
                                            }
                                        case 300:
                                            var5 = _closure1_slot16;
                                            var5 = var5.PREFERRED_LOCALE;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1037;
                                                continue _fun114983
                                            }
                                        case 317:
                                            var5 = _closure1_slot16;
                                            var5 = var5.VIDEO_QUALITY_MODE;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1016;
                                                continue _fun114983
                                            }
                                        case 334:
                                            var5 = _closure1_slot16;
                                            var5 = var5.SYSTEM_CHANNEL_FLAGS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 1000;
                                                continue _fun114983
                                            }
                                        case 351:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_ACTIONS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 948;
                                                continue _fun114983
                                            }
                                        case 368:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_EVENT_TYPE;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 885;
                                                continue _fun114983
                                            }
                                        case 385:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_TRIGGER_TYPE;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 822;
                                                continue _fun114983
                                            }
                                        case 402:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_TRIGGER_METADATA;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 778;
                                                continue _fun114983
                                            }
                                        case 419:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_ADD_KEYWORDS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 734;
                                                continue _fun114983
                                            }
                                        case 436:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_REMOVE_KEYWORDS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 734;
                                                continue _fun114983
                                            }
                                        case 453:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_ADD_REGEX_PATTERNS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 734;
                                                continue _fun114983
                                            }
                                        case 470:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_REMOVE_REGEX_PATTERNS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 734;
                                                continue _fun114983
                                            }
                                        case 487:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_ADD_ALLOW_LIST;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 734;
                                                continue _fun114983
                                            }
                                        case 504:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_REMOVE_ALLOW_LIST;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 734;
                                                continue _fun114983
                                            }
                                        case 521:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_EXEMPT_CHANNELS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 682;
                                                continue _fun114983
                                            }
                                        case 538:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AUTO_MODERATION_EXEMPT_ROLES;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 630;
                                                continue _fun114983
                                            }
                                        case 552:
                                            var5 = _closure1_slot16;
                                            var5 = var5.AVAILABLE_TAGS;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 617;
                                                continue _fun114983
                                            }
                                        case 566:
                                            var5 = _closure1_slot16;
                                            var5 = var5.SCHEDULED_START_TIME;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 596;
                                                continue _fun114983
                                            }
                                        case 580:
                                            var5 = _closure1_slot16;
                                            var5 = var5.SCHEDULED_END_TIME;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 596;
                                                continue _fun114983
                                            }
                                        case 594:
                                            return var0;
                                        case 596:
                                            var7 = _closure1_slot44;
                                            var6 = undefined;
                                            var5 = function(arg0) { // Environment: var1
                                                var2 = _closure1_slot0;
                                                var5 = _closure1_slot3;
                                                var1 = 29;
                                                var1 = var5[var1];
                                                var4 = undefined;
                                                var3 = var2.bind(var4)(var1);
                                                var2 = var3.dateFormat;
                                                var1 = _closure1_slot1;
                                                var0 = 30;
                                                var0 = var5[var0];
                                                var1 = var1.bind(var4)(var0);
                                                var0 = global;
                                                var6 = var0.Date;
                                                var0 = var6.prototype;
                                                var5 = Object.create(var0, {
                                                    constructor: {
                                                        value: var6
                                                    }
                                                });
                                                var8 = arg0;
                                                var9 = var5;
                                                var0 = new var9[var6](var8, var7);
                                                var0 = var0 instanceof Object ? var0 : var5;
                                                var1 = var1.bind(var4)(var0);
                                                var0 = 'LLLL';
                                                var0 = var2.bind(var3)(var1, var0);
                                                return var0;
                                            };
                                            var5 = var7.bind(var6)(var0, var5);
                                            return var5;
                                        case 617:
                                            var6 = _closure1_slot43;
                                            var5 = undefined;
                                            var5 = var6.bind(var5)(var0);
                                            return var5;
                                        case 630:
                                            var7 = var2.targetType;
                                            var5 = _closure1_slot17;
                                            var6 = var5.AUTO_MODERATION_RULE;
                                            var5 = var0;
                                            if (!(var7 === var6)) {
                                                _fun114983_ip = 680;
                                                continue _fun114983
                                            }
                                        case 653:
                                            var9 = _closure1_slot44;
                                            var8 = undefined;
                                            var7 = function(arg0) { // Environment: var1
                                                var3 = arg0;
                                                var2 = var3.map;
                                                var1 = function(arg0) { // Environment: var0
                                                    var3 = _closure1_slot11;
                                                    var2 = var3.getRole;
                                                    var0 = _closure5_slot0;
                                                    var1 = var0.id;
                                                    var0 = arg0;
                                                    var0 = var2.bind(var3)(var1, var0);
                                                    return var0;
                                                };
                                                var3 = var2.bind(var3)(var1);
                                                var2 = var3.filter;
                                                var1 = function(arg0) { // Environment: var0
                                                    var1 = null;
                                                    var0 = arg0;
                                                    var0 = var1 != var0;
                                                    return var0;
                                                };
                                                var2 = var2.bind(var3)(var1);
                                                var1 = var2.map;
                                                var0 = function(arg0) { // Environment: var0
                                                    var0 = arg0;
                                                    var0 = var0.name;
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var6 = function(arg0) { // Environment: var1
                                                _fun115018: for (var _fun115018_ip = 0;;) switch (_fun115018_ip) {
                                                    case 0:
                                                        var3 = arg0;
                                                        var0 = null;
                                                        if (!(var0 != var3)) {
                                                            _fun115018_ip = 20;
                                                            continue _fun115018
                                                        }
                                                    case 9:
                                                        var1 = var3.length;
                                                        var0 = 0;
                                                        if (!(!(var1 > var0))) {
                                                            _fun115018_ip = 82;
                                                            continue _fun115018
                                                        }
                                                    case 20:
                                                        var5 = _closure1_slot0;
                                                        var6 = _closure1_slot3;
                                                        var0 = 17;
                                                        var1 = var6[var0];
                                                        var4 = undefined;
                                                        var1 = var5.bind(var4)(var1);
                                                        var2 = var1.intl;
                                                        var1 = var2.string;
                                                        var0 = var6[var0];
                                                        var0 = var5.bind(var4)(var0);
                                                        var0 = var0.t;
                                                        var0 = var0["K/EdV8"];
                                                        var0 = var1.bind(var2)(var0);
                                                        _fun115018_ip = 98;
                                                        continue _fun115018;
                                                    case 82:
                                                        var2 = var3.join;
                                                        var1 = ', ';
                                                        var0 = var2.bind(var3)(var1);
                                                    case 98:
                                                        return var0;
                                                }
                                            };
                                            var5 = var9.bind(var8)(var0, var7, var6);
                                        case 680:
                                            return var5;
                                        case 682:
                                            var7 = var2.targetType;
                                            var5 = _closure1_slot17;
                                            var6 = var5.AUTO_MODERATION_RULE;
                                            var5 = var0;
                                            if (!(var7 === var6)) {
                                                _fun114983_ip = 732;
                                                continue _fun114983
                                            }
                                        case 705:
                                            var9 = _closure1_slot44;
                                            var8 = undefined;
                                            var7 = function(arg0) { // Environment: var1
                                                var3 = arg0;
                                                var2 = var3.map;
                                                var1 = _closure1_slot10;
                                                var1 = var1.getChannel;
                                                var3 = var2.bind(var3)(var1);
                                                var2 = var3.filter;
                                                var1 = function(arg0) { // Environment: var0
                                                    var1 = null;
                                                    var0 = arg0;
                                                    var0 = var1 != var0;
                                                    return var0;
                                                };
                                                var2 = var2.bind(var3)(var1);
                                                var1 = var2.map;
                                                var0 = function(arg0) { // Environment: var0
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot3;
                                                    var1 = 23;
                                                    var2 = var2[var1];
                                                    var1 = undefined;
                                                    var5 = var3.bind(var1)(var2);
                                                    var4 = var5.computeChannelName;
                                                    var8 = _closure1_slot13;
                                                    var7 = _closure1_slot12;
                                                    var9 = arg0;
                                                    var6 = true;
                                                    var10 = var5;
                                                    var0 = var10[var4](var9, var8, var7, var6, var5);
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var6 = function(arg0) { // Environment: var1
                                                _fun115013: for (var _fun115013_ip = 0;;) switch (_fun115013_ip) {
                                                    case 0:
                                                        var3 = arg0;
                                                        var0 = null;
                                                        if (!(var0 != var3)) {
                                                            _fun115013_ip = 20;
                                                            continue _fun115013
                                                        }
                                                    case 9:
                                                        var1 = var3.length;
                                                        var0 = 0;
                                                        if (!(!(var1 > var0))) {
                                                            _fun115013_ip = 82;
                                                            continue _fun115013
                                                        }
                                                    case 20:
                                                        var5 = _closure1_slot0;
                                                        var6 = _closure1_slot3;
                                                        var0 = 17;
                                                        var1 = var6[var0];
                                                        var4 = undefined;
                                                        var1 = var5.bind(var4)(var1);
                                                        var2 = var1.intl;
                                                        var1 = var2.string;
                                                        var0 = var6[var0];
                                                        var0 = var5.bind(var4)(var0);
                                                        var0 = var0.t;
                                                        var0 = var0["K/EdV8"];
                                                        var0 = var1.bind(var2)(var0);
                                                        _fun115013_ip = 98;
                                                        continue _fun115013;
                                                    case 82:
                                                        var2 = var3.join;
                                                        var1 = ', ';
                                                        var0 = var2.bind(var3)(var1);
                                                    case 98:
                                                        return var0;
                                                }
                                            };
                                            var5 = var9.bind(var8)(var0, var7, var6);
                                        case 732:
                                            return var5;
                                        case 734:
                                            var7 = var2.targetType;
                                            var5 = _closure1_slot17;
                                            var6 = var5.AUTO_MODERATION_RULE;
                                            var5 = var0;
                                            if (!(var7 === var6)) {
                                                _fun114983_ip = 776;
                                                continue _fun114983
                                            }
                                        case 757:
                                            var8 = _closure1_slot44;
                                            var7 = undefined;
                                            var6 = function(arg0) { // Environment: var1
                                                _fun115008: for (var _fun115008_ip = 0;;) switch (_fun115008_ip) {
                                                    case 0:
                                                        var3 = arg0;
                                                        var0 = null;
                                                        if (!(var0 != var3)) {
                                                            _fun115008_ip = 30;
                                                            continue _fun115008
                                                        }
                                                    case 9:
                                                        var0 = global;
                                                        var1 = var0.Array;
                                                        var0 = var1.isArray;
                                                        var0 = var0.bind(var1)(var3);
                                                        if (var0) {
                                                            _fun115008_ip = 51;
                                                            continue _fun115008
                                                        }
                                                    case 30:
                                                        var0 = global;
                                                        var1 = var0.JSON;
                                                        var0 = var1.stringify;
                                                        var0 = var0.bind(var1)(var3);
                                                        _fun115008_ip = 86;
                                                        continue _fun115008;
                                                    case 51:
                                                        var2 = var3.map;
                                                        var1 = function(arg0) { // Environment: var1
                                                            var0 = global;
                                                            var0 = var0.HermesInternal;
                                                            var2 = var0.concat;
                                                            var1 = "'";
                                                            var0 = arg0;
                                                            var0 = var2.bind(var1)(var0, var1);
                                                            return var0;
                                                        };
                                                        var3 = var2.bind(var3)(var1);
                                                        var2 = var3.join;
                                                        var1 = ', ';
                                                        var0 = var2.bind(var3)(var1);
                                                    case 86:
                                                        return var0;
                                                }
                                            };
                                            var5 = var8.bind(var7)(var0, var6);
                                        case 776:
                                            return var5;
                                        case 778:
                                            var7 = var2.targetType;
                                            var5 = _closure1_slot17;
                                            var6 = var5.AUTO_MODERATION_RULE;
                                            var5 = var0;
                                            if (!(var7 === var6)) {
                                                _fun114983_ip = 820;
                                                continue _fun114983
                                            }
                                        case 801:
                                            var8 = _closure1_slot44;
                                            var7 = undefined;
                                            var6 = function(arg0) { // Environment: var1
                                                _fun115006: for (var _fun115006_ip = 0;;) switch (_fun115006_ip) {
                                                    case 0:
                                                        var6 = arg0;
                                                        var2 = null;
                                                        var0 = var6;
                                                        if (!(var2 != var6)) {
                                                            _fun115006_ip = 205;
                                                            continue _fun115006
                                                        }
                                                    case 15:
                                                        var3 = 'object';
                                                        var1 = typeof var6;
                                                        var0 = var6;
                                                        if (!(var3 === var1)) {
                                                            _fun115006_ip = 205;
                                                            continue _fun115006
                                                        }
                                                    case 32:
                                                        var1 = var6.keyword_filter;
                                                        if (!(var2 != var1)) {
                                                            _fun115006_ip = 69;
                                                            continue _fun115006
                                                        }
                                                    case 42:
                                                        var1 = global;
                                                        var3 = var1.Array;
                                                        var2 = var3.isArray;
                                                        var1 = var6.keyword_filter;
                                                        var1 = var2.bind(var3)(var1);
                                                        if (var1) {
                                                            _fun115006_ip = 90;
                                                            continue _fun115006
                                                        }
                                                    case 69:
                                                        var1 = global;
                                                        var2 = var1.JSON;
                                                        var1 = var2.stringify;
                                                        var1 = var1.bind(var2)(var6);
                                                        _fun115006_ip = 202;
                                                        continue _fun115006;
                                                    case 90:
                                                        var7 = _closure1_slot0;
                                                        var8 = _closure1_slot3;
                                                        var2 = 17;
                                                        var4 = var8[var2];
                                                        var3 = undefined;
                                                        var4 = var7.bind(var3)(var4);
                                                        var5 = var4.intl;
                                                        var4 = var5.formatToMarkdownString;
                                                        var2 = var8[var2];
                                                        var2 = var7.bind(var3)(var2);
                                                        var2 = var2.t;
                                                        var3 = var2.y91UXV;
                                                        var2 = {};
                                                        var8 = var6.keyword_filter;
                                                        var7 = var8.map;
                                                        var6 = function(arg0) { // Environment: var6
                                                            var0 = global;
                                                            var0 = var0.HermesInternal;
                                                            var2 = var0.concat;
                                                            var1 = "'";
                                                            var0 = arg0;
                                                            var0 = var2.bind(var1)(var0, var1);
                                                            return var0;
                                                        };
                                                        var8 = var7.bind(var8)(var6);
                                                        var7 = var8.join;
                                                        var6 = ', ';
                                                        var6 = var7.bind(var8)(var6);
                                                        var2.newValue = var6;
                                                        var1 = var4.bind(var5)(var3, var2);
                                                    case 202:
                                                        var0 = var1;
                                                    case 205:
                                                        return var0;
                                                }
                                            };
                                            var5 = var8.bind(var7)(var0, var6);
                                        case 820:
                                            return var5;
                                        case 822:
                                            var7 = var2.targetType;
                                            var5 = _closure1_slot17;
                                            var6 = var5.AUTO_MODERATION_RULE;
                                            var5 = var0;
                                            if (!(var7 === var6)) {
                                                _fun114983_ip = 883;
                                                continue _fun114983
                                            }
                                        case 845:
                                            var8 = _closure1_slot44;
                                            var9 = _closure1_slot0;
                                            var7 = _closure1_slot3;
                                            var6 = 28;
                                            var6 = var7[var6];
                                            var7 = undefined;
                                            var6 = var9.bind(var7)(var6);
                                            var6 = var6.triggerTypeToName;
                                            var5 = var8.bind(var7)(var0, var6);
                                        case 883:
                                            return var5;
                                        case 885:
                                            var7 = var2.targetType;
                                            var5 = _closure1_slot17;
                                            var6 = var5.AUTO_MODERATION_RULE;
                                            var5 = var0;
                                            if (!(var7 === var6)) {
                                                _fun114983_ip = 946;
                                                continue _fun114983
                                            }
                                        case 908:
                                            var8 = _closure1_slot44;
                                            var9 = _closure1_slot0;
                                            var7 = _closure1_slot3;
                                            var6 = 28;
                                            var6 = var7[var6];
                                            var7 = undefined;
                                            var6 = var9.bind(var7)(var6);
                                            var6 = var6.eventTypeToName;
                                            var5 = var8.bind(var7)(var0, var6);
                                        case 946:
                                            return var5;
                                        case 948:
                                            var6 = var2.targetType;
                                            var2 = _closure1_slot17;
                                            var5 = var2.AUTO_MODERATION_RULE;
                                            var2 = var0;
                                            if (!(var6 === var5)) {
                                                _fun114983_ip = 998;
                                                continue _fun114983
                                            }
                                        case 971:
                                            var8 = _closure1_slot44;
                                            var7 = undefined;
                                            var6 = function(arg0) { // Environment: var1
                                                var2 = arg0;
                                                var1 = var2.map;
                                                var0 = function(arg0) { // Environment: var0
                                                    var0 = arg0;
                                                    var0 = var0.type;
                                                    return var0;
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var5 = function(arg0) { // Environment: var1
                                                var2 = arg0;
                                                var1 = var2.map;
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot3;
                                                var0 = 28;
                                                var3 = var3[var0];
                                                var0 = undefined;
                                                var0 = var4.bind(var0)(var3);
                                                var0 = var0.actionTypeToName;
                                                var2 = var1.bind(var2)(var0);
                                                var1 = var2.join;
                                                var0 = ', ';
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var2 = var8.bind(var7)(var0, var6, var5);
                                        case 998:
                                            return var2;
                                        case 1000:
                                            var5 = function arg0() {
                                                var0 = arg0;
                                                var _closure6_slot0 = var0;
                                                var0 = {};
                                                var4 = _closure1_slot28;
                                                var5 = var4.SUPPRESS_JOIN_NOTIFICATIONS;
                                                var3 = _closure1_slot16;
                                                var3 = var3.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS;
                                                var0[var5] = var3;
                                                var5 = var4.SUPPRESS_PREMIUM_SUBSCRIPTIONS;
                                                var3 = _closure1_slot16;
                                                var3 = var3.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS;
                                                var0[var5] = var3;
                                                var5 = var4.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS;
                                                var3 = _closure1_slot16;
                                                var3 = var3.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS;
                                                var0[var5] = var3;
                                                var3 = var4.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
                                                var2 = _closure1_slot16;
                                                var2 = var2.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES;
                                                var0[var3] = var2;
                                                var _closure6_slot1 = var0;
                                                var0 = new Array(0);
                                                var _closure6_slot2 = var0;
                                                var2 = global;
                                                var3 = var2.Object;
                                                var2 = var3.values;
                                                var3 = var2.bind(var3)(var4);
                                                var2 = var3.forEach;
                                                var1 = function(arg0) { // Environment: var1
                                                    _fun115002: for (var _fun115002_ip = 0;;) switch (_fun115002_ip) {
                                                        case 0:
                                                            var4 = arg0;
                                                            var1 = _closure6_slot0;
                                                            var2 = var1.oldValue;
                                                            var2 = var2 & var4;
                                                            var3 = var2 === var4;
                                                            var1 = var1.newValue;
                                                            var1 = var1 & var4;
                                                            var1 = var1 === var4;
                                                            if (!(var3 !== var1)) {
                                                                _fun115002_ip = 97;
                                                                continue _fun115002
                                                            }
                                                        case 42:
                                                            var5 = _closure1_slot9;
                                                            var2 = _closure6_slot1;
                                                            var8 = var2[var4];
                                                            var2 = var5.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var5
                                                                }
                                                            });
                                                            var7 = !var3;
                                                            var6 = !var1;
                                                            var9 = var2;
                                                            var1 = new var9[var5](var8, var7, var6, var5);
                                                            var2 = var1 instanceof Object ? var1 : var2;
                                                            var1 = _closure6_slot2;
                                                            var0 = var1.push;
                                                            var0 = var0.bind(var1)(var2);
                                                        case 97:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var1 = var2.bind(var3)(var1);
                                                return var0;
                                            };
                                            var2 = undefined;
                                            var2 = var5.bind(var2)(var0);
                                            return var2;
                                        case 1016:
                                            var6 = _closure1_slot44;
                                            var5 = undefined;
                                            var2 = function(arg0) { // Environment: var1
                                                _fun115000: for (var _fun115000_ip = 0;;) switch (_fun115000_ip) {
                                                    case 0:
                                                        var0 = _closure1_slot25;
                                                        var2 = var0.FULL;
                                                        var0 = arg0;
                                                        if (!(var0 !== var2)) {
                                                            _fun115000_ip = 79;
                                                            continue _fun115000
                                                        }
                                                    case 20:
                                                        var5 = _closure1_slot0;
                                                        var6 = _closure1_slot3;
                                                        var0 = 17;
                                                        var2 = var6[var0];
                                                        var4 = undefined;
                                                        var2 = var5.bind(var4)(var2);
                                                        var3 = var2.intl;
                                                        var2 = var3.string;
                                                        var0 = var6[var0];
                                                        var0 = var5.bind(var4)(var0);
                                                        var0 = var0.t;
                                                        var0 = var0.jjKYpu;
                                                        var0 = var2.bind(var3)(var0);
                                                        _fun115000_ip = 136;
                                                        continue _fun115000;
                                                    case 79:
                                                        var5 = _closure1_slot0;
                                                        var6 = _closure1_slot3;
                                                        var1 = 17;
                                                        var2 = var6[var1];
                                                        var4 = undefined;
                                                        var2 = var5.bind(var4)(var2);
                                                        var3 = var2.intl;
                                                        var2 = var3.string;
                                                        var1 = var6[var1];
                                                        var1 = var5.bind(var4)(var1);
                                                        var1 = var1.t;
                                                        var1 = var1["7jOoJE"];
                                                        var0 = var2.bind(var3)(var1);
                                                    case 136:
                                                        return var0;
                                                }
                                            };
                                            var2 = var6.bind(var5)(var0, var2);
                                            return var2;
                                        case 1037:
                                            var6 = _closure1_slot44;
                                            var5 = undefined;
                                            var2 = function(arg0) { // Environment: var1
                                                _fun114998: for (var _fun114998_ip = 0;;) switch (_fun114998_ip) {
                                                    case 0:
                                                        var1 = arg0;
                                                        var _closure6_slot0 = var1;
                                                        var3 = _closure1_slot0;
                                                        var2 = _closure1_slot3;
                                                        var1 = 17;
                                                        var2 = var2[var1];
                                                        var1 = undefined;
                                                        var2 = var3.bind(var1)(var2);
                                                        var1 = var2.getAvailableLocales;
                                                        var2 = var1.bind(var2)();
                                                        var1 = var2.find;
                                                        var0 = function(arg0) { // Environment: var0
                                                            var0 = arg0;
                                                            var1 = var0.value;
                                                            var0 = _closure6_slot0;
                                                            var0 = var1 === var0;
                                                            return var0;
                                                        };
                                                        var1 = var1.bind(var2)(var0);
                                                        var0 = null;
                                                        var2 = var0 != var1;
                                                        if (!var2) {
                                                            _fun114998_ip = 75;
                                                            continue _fun114998
                                                        }
                                                    case 70:
                                                        var0 = var1.name;
                                                    case 75:
                                                        return var0;
                                                }
                                            };
                                            var2 = var6.bind(var5)(var0, var2);
                                            return var2;
                                        case 1058:
                                            var2 = new Array(0);
                                            var7 = var0.oldValue;
                                            var5 = var0.newValue;
                                            var6 = 0;
                                            var10 = 'number';
                                            var8 = typeof var7;
                                            var9 = 0;
                                            if (!(var10 === var8)) {
                                                _fun114983_ip = 1092;
                                                continue _fun114983
                                            }
                                        case 1089:
                                            var9 = var7;
                                        case 1092:
                                            var7 = typeof var5;
                                            var8 = 0;
                                            if (!(var10 === var7)) {
                                                _fun114983_ip = 1104;
                                                continue _fun114983
                                            }
                                        case 1101:
                                            var8 = var5;
                                        case 1104:
                                            var7 = _closure1_slot2;
                                            var5 = _closure1_slot3;
                                            var16 = 22;
                                            var10 = var5[var16];
                                            var15 = undefined;
                                            var11 = var7.bind(var15)(var10);
                                            var10 = var11.removeFlag;
                                            var14 = var10.bind(var11)(var8, var9);
                                            var5 = var5[var16];
                                            var7 = var7.bind(var15)(var5);
                                            var5 = var7.removeFlag;
                                            var13 = var5.bind(var7)(var9, var8);
                                            var8 = new Array(0);
                                            var7 = new Array(0);
                                            var11 = _closure1_slot29;
                                            for (var5 in var11)
                                                case 1179: {
                                                    case 1188: var18 = var5;
                                                    var17 = _closure1_slot29;
                                                    var18 = var17[var18];
                                                    var19 = _closure1_slot2;
                                                    var17 = _closure1_slot3;
                                                    var17 = var17[var16];
                                                    var19 = var19.bind(var15)(var17);
                                                    var17 = var19.hasFlag;
                                                    var17 = var17.bind(var19)(var14, var18);
                                                    if (!var17) {
                                                        _fun114983_ip = 1241;
                                                        continue _fun114983
                                                    }
                                                    case 1231: var17 = var8.push;
                                                    var17 = var17.bind(var8)(var18);
                                                    case 1241: var19 = _closure1_slot2;
                                                    var17 = _closure1_slot3;
                                                    var17 = var17[var16];
                                                    var19 = var19.bind(var15)(var17);
                                                    var17 = var19.hasFlag;
                                                    var17 = var17.bind(var19)(var13, var18);
                                                    if (!var17) {
                                                        _fun114983_ip = 1179;
                                                        continue _fun114983
                                                    }
                                                    case 1273: var17 = var7.push;
                                                    var17 = var17.bind(var7)(var18);
                                                    _fun114983_ip = 1179;
                                                    continue _fun114983;
                                                }
                                        case 1285:
                                            var5 = {};
                                            var5.added = var8;
                                            var5.removed = var7;
                                            var11 = var5.added;
                                            var9 = var5.removed;
                                            var5 = var11.length;
                                            if (!(var5 > var6)) {
                                                _fun114983_ip = 1362;
                                                continue _fun114983
                                            }
                                        case 1318:
                                            var10 = _closure1_slot9;
                                            var22 = var0.key;
                                            var5 = var10.prototype;
                                            var7 = Object.create(var5, {
                                                constructor: {
                                                    value: var10
                                                }
                                            });
                                            var21 = null;
                                            var23 = var7;
                                            var20 = var11;
                                            var5 = new var23[var10](var22, var21, var20, var19);
                                            var7 = var5 instanceof Object ? var5 : var7;
                                            var5 = var2.push;
                                            var5 = var5.bind(var2)(var7);
                                        case 1362:
                                            var5 = var9.length;
                                            if (!(var5 > var6)) {
                                                _fun114983_ip = 1415;
                                                continue _fun114983
                                            }
                                        case 1371:
                                            var8 = _closure1_slot9;
                                            var22 = var0.key;
                                            var5 = var8.prototype;
                                            var6 = Object.create(var5, {
                                                constructor: {
                                                    value: var8
                                                }
                                            });
                                            var20 = null;
                                            var23 = var6;
                                            var21 = var9;
                                            var5 = new var23[var8](var22, var21, var20, var19);
                                            var6 = var5 instanceof Object ? var5 : var6;
                                            var5 = var2.push;
                                            var5 = var5.bind(var2)(var6);
                                        case 1415:
                                            return var2;
                                        case 1417:
                                            var2 = new Array(0);
                                            var8 = _closure1_slot41;
                                            var7 = var0.oldValue;
                                            var6 = var0.newValue;
                                            var5 = undefined;
                                            var5 = var8.bind(var5)(var7, var6);
                                            var11 = var5.added;
                                            var8 = var5.removed;
                                            var5 = var11.length;
                                            var6 = 0;
                                            if (!(var5 > var6)) {
                                                _fun114983_ip = 1512;
                                                continue _fun114983
                                            }
                                        case 1468:
                                            var10 = _closure1_slot9;
                                            var22 = var0.key;
                                            var5 = var10.prototype;
                                            var7 = Object.create(var5, {
                                                constructor: {
                                                    value: var10
                                                }
                                            });
                                            var21 = null;
                                            var23 = var7;
                                            var20 = var11;
                                            var5 = new var23[var10](var22, var21, var20, var19);
                                            var7 = var5 instanceof Object ? var5 : var7;
                                            var5 = var2.push;
                                            var5 = var5.bind(var2)(var7);
                                        case 1512:
                                            var5 = var8.length;
                                            if (!(var5 > var6)) {
                                                _fun114983_ip = 1571;
                                                continue _fun114983
                                            }
                                        case 1521:
                                            var7 = _closure1_slot9;
                                            var5 = _closure1_slot16;
                                            var22 = var5.PERMISSIONS_RESET;
                                            var6 = var7.prototype;
                                            var6 = Object.create(var6, {
                                                constructor: {
                                                    value: var7
                                                }
                                            });
                                            var23 = var6;
                                            var21 = var8;
                                            var20 = var8;
                                            var5 = new var23[var7](var22, var21, var20, var19);
                                            var6 = var5 instanceof Object ? var5 : var6;
                                            var5 = var2.push;
                                            var5 = var5.bind(var2)(var6);
                                        case 1571:
                                            return var2;
                                        case 1573:
                                            var2 = new Array(0);
                                            var8 = _closure1_slot41;
                                            var7 = var0.oldValue;
                                            var6 = var0.newValue;
                                            var5 = undefined;
                                            var5 = var8.bind(var5)(var7, var6);
                                            var11 = var5.added;
                                            var9 = var5.removed;
                                            var5 = var11.length;
                                            var6 = 0;
                                            if (!(var5 > var6)) {
                                                _fun114983_ip = 1673;
                                                continue _fun114983
                                            }
                                        case 1624:
                                            var10 = _closure1_slot9;
                                            var5 = _closure1_slot16;
                                            var22 = var5.PERMISSIONS_GRANTED;
                                            var5 = var10.prototype;
                                            var7 = Object.create(var5, {
                                                constructor: {
                                                    value: var10
                                                }
                                            });
                                            var21 = null;
                                            var23 = var7;
                                            var20 = var11;
                                            var5 = new var23[var10](var22, var21, var20, var19);
                                            var7 = var5 instanceof Object ? var5 : var7;
                                            var5 = var2.push;
                                            var5 = var5.bind(var2)(var7);
                                        case 1673:
                                            var5 = var9.length;
                                            if (!(var5 > var6)) {
                                                _fun114983_ip = 1731;
                                                continue _fun114983
                                            }
                                        case 1682:
                                            var8 = _closure1_slot9;
                                            var5 = _closure1_slot16;
                                            var22 = var5.PERMISSIONS_DENIED;
                                            var5 = var8.prototype;
                                            var6 = Object.create(var5, {
                                                constructor: {
                                                    value: var8
                                                }
                                            });
                                            var21 = null;
                                            var23 = var6;
                                            var20 = var9;
                                            var5 = new var23[var8](var22, var21, var20, var19);
                                            var6 = var5 instanceof Object ? var5 : var6;
                                            var5 = var2.push;
                                            var5 = var5.bind(var2)(var6);
                                        case 1731:
                                            return var2;
                                        case 1733:
                                            var6 = _closure1_slot44;
                                            var5 = undefined;
                                            var2 = function(arg0) { // Environment: var1
                                                _fun114997: for (var _fun114997_ip = 0;;) switch (_fun114997_ip) {
                                                    case 0:
                                                        var0 = arg0;
                                                        var3 = _closure1_slot1;
                                                        var2 = _closure1_slot3;
                                                        var1 = 27;
                                                        var2 = var2[var1];
                                                        var1 = undefined;
                                                        var2 = var3.bind(var1)(var2);
                                                        var1 = var2.getMaxAgeOptionByValue;
                                                        var1 = var1.bind(var2)(var0);
                                                        var2 = null;
                                                        if (!(var2 !== var1)) {
                                                            _fun114997_ip = 50;
                                                            continue _fun114997
                                                        }
                                                    case 45:
                                                        var0 = var1.label;
                                                    case 50:
                                                        return var0;
                                                }
                                            };
                                            var2 = var6.bind(var5)(var0, var2);
                                            return var2;
                                        case 1754:
                                            var6 = _closure1_slot44;
                                            var5 = undefined;
                                            var2 = function(arg0) { // Environment: var1
                                                var3 = arg0;
                                                var2 = _closure1_slot0;
                                                var5 = _closure1_slot3;
                                                var0 = 26;
                                                var4 = var5[var0];
                                                var1 = undefined;
                                                var7 = var2.bind(var1)(var4);
                                                var6 = var7.int2hex;
                                                var4 = 0;
                                                var4 = var3[var4];
                                                var6 = var6.bind(var7)(var4);
                                                var4 = var6.toUpperCase;
                                                var4 = var4.bind(var6)();
                                                var0 = var5[var0];
                                                var2 = var2.bind(var1)(var0);
                                                var1 = var2.int2hex;
                                                var0 = 1;
                                                var0 = var3[var0];
                                                var1 = var1.bind(var2)(var0);
                                                var0 = var1.toUpperCase;
                                                var3 = var0.bind(var1)();
                                                var0 = global;
                                                var0 = var0.HermesInternal;
                                                var2 = var0.concat;
                                                var1 = '';
                                                var0 = ', ';
                                                var0 = var2.bind(var1)(var4, var0, var3);
                                                return var0;
                                            };
                                            var2 = var6.bind(var5)(var0, var2);
                                            return var2;
                                        case 1775:
                                            var6 = _closure1_slot44;
                                            var5 = undefined;
                                            var2 = function(arg0) { // Environment: var1
                                                var2 = _closure1_slot0;
                                                var1 = _closure1_slot3;
                                                var0 = 26;
                                                var1 = var1[var0];
                                                var0 = undefined;
                                                var2 = var2.bind(var0)(var1);
                                                var1 = var2.int2hex;
                                                var0 = arg0;
                                                var1 = var1.bind(var2)(var0);
                                                var0 = var1.toUpperCase;
                                                var0 = var0.bind(var1)();
                                                return var0;
                                            };
                                            var2 = var6.bind(var5)(var0, var2);
                                            return var2;
                                        case 1796:
                                            var6 = _closure1_slot44;
                                            var5 = undefined;
                                            var2 = function(arg0) { // Environment: var1
                                                var1 = arg0;
                                                var0 = 1000;
                                                var0 = var1 / var0;
                                                return var0;
                                            };
                                            var2 = var6.bind(var5)(var0, var2);
                                            return var2;
                                        case 1817:
                                            var6 = _closure1_slot44;
                                            var5 = undefined;
                                            var2 = function(arg0) { // Environment: var1
                                                var1 = arg0;
                                                var0 = 60;
                                                var0 = var1 / var0;
                                                return var0;
                                            };
                                            var2 = var6.bind(var5)(var0, var2);
                                            return var2;
                                        case 1838:
                                            var7 = _closure1_slot44;
                                            var6 = undefined;
                                            var5 = function(arg0) { // Environment: var1
                                                var2 = _closure1_slot10;
                                                var1 = var2.getChannel;
                                                var0 = arg0;
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var2 = function(arg0) { // Environment: var1
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot3;
                                                var1 = 23;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var5 = var3.bind(var1)(var2);
                                                var4 = var5.computeChannelName;
                                                var8 = _closure1_slot13;
                                                var7 = _closure1_slot12;
                                                var9 = arg0;
                                                var6 = true;
                                                var10 = var5;
                                                var0 = var10[var4](var9, var8, var7, var6, var5);
                                                return var0;
                                            };
                                            var2 = var7.bind(var6)(var0, var5, var2);
                                            return var2;
                                        case 1867:
                                            var6 = _closure1_slot44;
                                            var5 = undefined;
                                            var2 = function(arg0) { // Environment: var1
                                                var2 = _closure1_slot13;
                                                var1 = var2.getUser;
                                                var0 = arg0;
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var2 = var6.bind(var5)(var0, var2);
                                            return var2;
                                        case 1888:
                                            var2 = var0.newValue;
                                            if (var2) {
                                                _fun114983_ip = 1903;
                                                continue _fun114983
                                            }
                                        case 1897:
                                            var2 = var0.oldValue;
                                        case 1903:
                                            var6 = var2.type;
                                            var5 = _closure1_slot26;
                                            var5 = var5.ROLE;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 2169;
                                                continue _fun114983
                                            }
                                        case 1925:
                                            var5 = _closure1_slot26;
                                            var5 = var5.USER;
                                            if (!(var5 !== var6)) {
                                                _fun114983_ip = 2129;
                                                continue _fun114983
                                            }
                                        case 1942:
                                            var5 = _closure1_slot26;
                                            var5 = var5.CHANNEL;
                                            if (!(var5 === var6)) {
                                                _fun114983_ip = 2207;
                                                continue _fun114983
                                            }
                                        case 1959:
                                            var5 = var2.id;
                                            var7 = _closure1_slot1;
                                            var8 = _closure1_slot3;
                                            var6 = 25;
                                            var6 = var8[var6];
                                            var8 = undefined;
                                            var6 = var7.bind(var8)(var6);
                                            var4 = var4.id;
                                            var7 = var6.bind(var8)(var4);
                                            var6 = var7.subtract;
                                            var4 = 1;
                                            var6 = var6.bind(var7)(var4);
                                            var4 = var6.toString;
                                            var4 = var4.bind(var6)();
                                            if (!(var5 !== var4)) {
                                                _fun114983_ip = 2064;
                                                continue _fun114983
                                            }
                                        case 2023:
                                            var7 = _closure1_slot46;
                                            var6 = var2.id;
                                            var5 = function(arg0) { // Environment: var1
                                                var2 = _closure1_slot10;
                                                var1 = var2.getChannel;
                                                var0 = arg0;
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var4 = function(arg0) { // Environment: var1
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot3;
                                                var1 = 23;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var5 = var3.bind(var1)(var2);
                                                var4 = var5.computeChannelName;
                                                var8 = _closure1_slot13;
                                                var7 = _closure1_slot12;
                                                var9 = arg0;
                                                var6 = true;
                                                var10 = var5;
                                                var0 = var10[var4](var9, var8, var7, var6, var5);
                                                return var0;
                                            };
                                            var4 = var7.bind(var8)(var6, var5, var4);
                                            var0.subtarget = var4;
                                            _fun114983_ip = 2207;
                                            continue _fun114983;
                                        case 2064:
                                            var7 = _closure1_slot0;
                                            var9 = _closure1_slot3;
                                            var4 = 17;
                                            var5 = var9[var4];
                                            var5 = var7.bind(var8)(var5);
                                            var6 = var5.intl;
                                            var5 = var6.string;
                                            var4 = var9[var4];
                                            var4 = var7.bind(var8)(var4);
                                            var4 = var4.t;
                                            var4 = var4.MSYhgh;
                                            var4 = var5.bind(var6)(var4);
                                            var0.subtarget = var4;
                                            _fun114983_ip = 2207;
                                            continue _fun114983;
                                        case 2129:
                                            var8 = _closure1_slot46;
                                            var7 = var2.id;
                                            var6 = undefined;
                                            var5 = function(arg0) { // Environment: var1
                                                var2 = _closure1_slot13;
                                                var1 = var2.getUser;
                                                var0 = arg0;
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var4 = function(arg0) { // Environment: var1
                                                var0 = arg0;
                                                var0 = var0.tag;
                                                return var0;
                                            };
                                            var4 = var8.bind(var6)(var7, var5, var4);
                                            var0.subtarget = var4;
                                            _fun114983_ip = 2207;
                                            continue _fun114983;
                                        case 2169:
                                            var5 = _closure1_slot46;
                                            var4 = var2.id;
                                            var3 = undefined;
                                            var2 = function(arg0) { // Environment: var1
                                                var3 = _closure1_slot11;
                                                var2 = var3.getRole;
                                                var0 = _closure5_slot0;
                                                var1 = var0.id;
                                                var0 = arg0;
                                                var0 = var2.bind(var3)(var1, var0);
                                                return var0;
                                            };
                                            var1 = function(arg0) { // Environment: var1
                                                var0 = arg0;
                                                var0 = var0.name;
                                                return var0;
                                            };
                                            var1 = var5.bind(var3)(var4, var2, var1);
                                            var0.subtarget = var1;
                                        case 2207:
                                            return var0;
                                    }
                                };
                                var0 = undefined;
                                var3 = arg0;
                                var3 = var4.bind(var0)(var3, var6, var5);
                                var4 = global;
                                var5 = var4.Array;
                                var4 = var5.isArray;
                                var4 = var4.bind(var5)(var3);
                                if (var4) {
                                    _fun114982_ip = 72;
                                    continue _fun114982
                                }
                            case 56:
                                var4 = _closure3_slot1;
                                var2 = var4.push;
                                var2 = var2.bind(var4)(var3);
                                _fun114982_ip = 89;
                                continue _fun114982;
                            case 72:
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure3_slot1;
                                    var1 = var2.push;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                            case 89:
                                return var0;
                        }
                    };
                    var2 = var5.bind(var8)(var2);
                    var5 = var7.set;
                    var2 = 'changes';
                    var2 = var5.bind(var7)(var2, var6);
                    _closure3_slot0 = var2;
                    var3 = var2;
                case 274:
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                case 288:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.transformLogs = var3;
    var2.transformAvailableForumTagChange = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4702, 4653, 4274, 1377, 5558, 14645, 1372, 1665, 3061, 1613, 14644, 660, 1379, 10036, 1378, 3, 3490, 1234, 5874, 21, 14647, 484, 1384, 4757, 1636, 24, 668, 8293, 14648, 3093, 3006, 2]);