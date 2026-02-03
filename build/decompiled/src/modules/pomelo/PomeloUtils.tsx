// modules/pomelo/PomeloUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun81240: for (var _fun81240_ip = 0;;) switch (_fun81240_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun81240_ip = 46;
                    continue _fun81240
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun81240_ip = 55;
                    continue _fun81240
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun81240_ip = 345;
                    continue _fun81240
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun81240_ip = 323;
                    continue _fun81240
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun81240_ip = 283;
                    continue _fun81240
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun81240_ip = 270;
                    continue _fun81240
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
                    _fun81240_ip = 163;
                    continue _fun81240
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun81240_ip = 179;
                    continue _fun81240
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun81240_ip = 249;
                    continue _fun81240
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun81240_ip = 249;
                    continue _fun81240
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun81240_ip = 234;
                    continue _fun81240
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun81240_ip = 247;
                    continue _fun81240
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun81240_ip = 265;
                continue _fun81240;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun81240_ip = 283;
                continue _fun81240;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun81240_ip = 323;
                    continue _fun81240
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
                    _fun81240_ip = 330;
                    continue _fun81240
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun81241: for (var _fun81241_ip = 0;;) switch (_fun81241_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun81241_ip = 56;
                                continue _fun81241
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
                            _fun81241_ip = 67;
                            continue _fun81241;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun81242: for (var _fun81242_ip = 0;;) switch (_fun81242_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun81242_ip = 23;
                    continue _fun81242
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun81242_ip = 33;
                    continue _fun81242
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
                    _fun81242_ip = 70;
                    continue _fun81242
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun81242_ip = 55;
                    continue _fun81242
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var3 = function arg0, arg1() {
        var3 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var3.split;
        var2 = '';
        var3 = var1.bind(var3)(var2);
        var1 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            var4 = arg0;
            var2 = _closure2_slot0;
            var1 = var2.includes;
            var3 = var4.charCodeAt;
            var0 = 0;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var1 = var1.bind(var3)(var0);
        var0 = var1.join;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var _closure1_slot11 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var7 = var4.dirtyChars;
    var _closure1_slot3 = var7;
    var7 = var4.coalescePeriods;
    var _closure1_slot4 = var7;
    var4 = var4.CONTROL_CHARACTERS_CODE;
    var _closure1_slot5 = var4;
    var4 = ['@', '#', ':'];
    var _closure1_slot6 = var4;
    var4 = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'];
    var _closure1_slot7 = var4;
    var4 = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/PomeloUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun81245: for (var _fun81245_ip = 0;;) switch (_fun81245_ip) {
            case 0:
                var0 = arg0;
                var4 = arguments[1];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun81245_ip = 14;
                    continue _fun81245
                }
            case 12:
                var4 = true;
            case 14:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 1;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.getUserAvatarURL;
                var1 = {};
                var5 = var0.id;
                var1.id = var5;
                var5 = var0.avatar;
                var1.avatar = var5;
                var0 = var0.bot;
                var1.bot = var0;
                var0 = '0000';
                var1.discriminator = var0;
                var0 = 80;
                var0 = var2.bind(var3)(var1, var4, var0);
                return var0;
        }
    };
    var2.getUserAvatarURLForPomelo = var4;
    var4 = function arg0() {
        var0 = arg0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.stripDiacritics;
        var2 = var0.username;
        var5 = var3.bind(var4)(var2);
        var4 = var5.replace;
        var2 = _closure1_slot3;
        var3 = '';
        var5 = var4.bind(var5)(var2, var3);
        var4 = var5.replace;
        var2 = _closure1_slot4;
        var1 = '.';
        var2 = var4.bind(var5)(var2, var1);
        var1 = var2.toLowerCase;
        var2 = var1.bind(var2)();
        var1 = var0.discriminator;
        var0 = global;
        var0 = var0.HermesInternal;
        var0 = var0.concat;
        var3 = var0.bind(var3)(var2, var1);
        var2 = var3.substring;
        var1 = 0;
        var0 = 32;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getDefaultPomelo = var4;
    var2.withoutCharacters = var3;
    var3 = function arg0() {
        _fun81247: for (var _fun81247_ip = 0;;) switch (_fun81247_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.username;
                var0 = var1.toLowerCase;
                var4 = var0.bind(var1)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var3 = undefined;
                var1 = var2.bind(var3)(var4, var1);
                var2 = var1.length;
                var1 = 2;
                if (!(!(var2 < var1))) {
                    _fun81247_ip = 259;
                    continue _fun81247
                }
            case 52:
                var2 = _closure1_slot9;
                var1 = _closure1_slot6;
                var5 = var2.bind(var3)(var1);
                var2 = var5.bind(var3)();
                var1 = var2.done;
                if (var1) {
                    _fun81247_ip = 116;
                    continue _fun81247
                }
            case 77:
                var6 = var2.value;
                var1 = var4.includes;
                var1 = var1.bind(var4)(var6);
                if (var1) {
                    _fun81247_ip = 112;
                    continue _fun81247
                }
            case 95:
                var6 = var5.bind(var3)();
                var1 = var6.done;
                var2 = var6;
                if (var1) {
                    _fun81247_ip = 116;
                    continue _fun81247
                }
            case 110:
                _fun81247_ip = 77;
                continue _fun81247;
            case 112:
                var1 = true;
                return var1;
            case 116:
                var2 = _closure1_slot9;
                var1 = _closure1_slot8;
                var5 = var2.bind(var3)(var1);
                var2 = var5.bind(var3)();
                var1 = var2.done;
                if (var1) {
                    _fun81247_ip = 181;
                    continue _fun81247
                }
            case 141:
                var6 = var2.value;
                var1 = var6.toLowerCase;
                var1 = var1.bind(var6)();
                if (!(var4 !== var1)) {
                    _fun81247_ip = 177;
                    continue _fun81247
                }
            case 160:
                var6 = var5.bind(var3)();
                var1 = var6.done;
                var2 = var6;
                if (var1) {
                    _fun81247_ip = 181;
                    continue _fun81247
                }
            case 175:
                _fun81247_ip = 141;
                continue _fun81247;
            case 177:
                var1 = true;
                return var1;
            case 181:
                var1 = _closure1_slot9;
                var0 = _closure1_slot7;
                var2 = var1.bind(var3)(var0);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun81247_ip = 255;
                    continue _fun81247
                }
            case 206:
                var6 = var1.value;
                var5 = var4.includes;
                var0 = var6.toLowerCase;
                var0 = var0.bind(var6)();
                var0 = var5.bind(var4)(var0);
                if (var0) {
                    _fun81247_ip = 251;
                    continue _fun81247
                }
            case 234:
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (var0) {
                    _fun81247_ip = 255;
                    continue _fun81247
                }
            case 249:
                _fun81247_ip = 206;
                continue _fun81247;
            case 251:
                var0 = true;
                return var0;
            case 255:
                var0 = false;
                return var0;
            case 259:
                var0 = true;
                return var0;
        }
    };
    var2.shouldSkipToEditUsername = var3;
    var3 = function arg0() {
        var1 = arg0;
        var0 = var1.toLowerCase;
        var2 = var0.bind(var1)();
        var1 = var2.replace;
        var0 = /\s/g;
        var3 = '';
        var2 = var1.bind(var2)(var0, var3);
        var1 = var2.replace;
        var0 = '@';
        var0 = var1.bind(var2)(var0, var3);
        return var0;
    };
    var2.formatPomeloForEditing = var3;
    var3 = function arg0() {
        _fun81249: for (var _fun81249_ip = 0;;) switch (_fun81249_ip) {
            case 0:
                var2 = undefined;
                var0 = undefined;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 3;
                var3 = var5[var3];
                var5 = var4.bind(var2)(var3);
                var4 = var5.extractTimestamp;
                var3 = arg0;
                var0 = var4.bind(var5)(var3);
            case 41: // try_start_0
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var3 = global;
                var4 = var3.Date;
                var6 = var0;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var3;
                var0 = new var7[var4](var6, var5);
                var0 = var0 instanceof Object ? var0 : var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.format;
                var0 = 'MMM DD, YYYY';
                var0 = var1.bind(var2)(var0);
            case 113: // try_end0
                return var0;
            case 115: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var2.getMemberSince = var3;
    var3 = function arg0() {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 5;
        var2 = var7[var1];
        var5 = undefined;
        var4 = var6.bind(var5)(var2);
        var3 = var4.match;
        var2 = arg0;
        var9 = var3.bind(var4)(var2);
        var8 = var9.with;
        var4 = {};
        var2 = true;
        var4.rateLimited = var2;
        var3 = function() { // Environment: var0
            var0 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var1.NameValidationState;
            var1 = var1.RATE_LIMIT;
            var0.type = var1;
            var1 = 7;
            var2 = var6[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.T15lqn;
            var1 = var2.bind(var3)(var1);
            var0.message = var1;
            return var0;
        };
        var9 = var8.bind(var9)(var4, var3);
        var8 = var9.with;
        var4 = {};
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var11 = var3.P;
        var10 = var11.not;
        var3 = var7[var1];
        var3 = var6.bind(var5)(var3);
        var3 = var3.P;
        var3 = var3.nullish;
        var3 = var10.bind(var11)(var3);
        var4.error = var3;
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.error;
            var0 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.NameValidationState;
            var2 = var2.ERROR;
            var0.type = var2;
            var0.message = var1;
            return var0;
        };
        var9 = var8.bind(var9)(var4, var3);
        var8 = var9.with;
        var4 = {};
        var3 = false;
        var4.taken = var3;
        var3 = function() { // Environment: var0
            var0 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var1.NameValidationState;
            var1 = var1.AVAILABLE;
            var0.type = var1;
            var1 = 7;
            var2 = var6[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.PgfBSx;
            var1 = var2.bind(var3)(var1);
            var0.message = var1;
            return var0;
        };
        var8 = var8.bind(var9)(var4, var3);
        var4 = var8.with;
        var3 = {};
        var3.taken = var2;
        var2 = function() { // Environment: var0
            var0 = {};
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var1.NameValidationState;
            var1 = var1.ERROR;
            var0.type = var1;
            var1 = 7;
            var2 = var6[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.mCrAUb;
            var1 = var2.bind(var3)(var1);
            var0.message = var1;
            return var0;
        };
        var4 = var4.bind(var8)(var3, var2);
        var3 = var4.with;
        var2 = {};
        var1 = var7[var1];
        var1 = var6.bind(var5)(var1);
        var1 = var1.P;
        var1 = var1.nullish;
        var2.error = var1;
        var1 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.NameValidationState;
            var1 = var1.INTERNAL_ERROR;
            var0.type = var1;
            var1 = '';
            var0.message = var1;
            return var0;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.otherwise;
        var0 = function() { // Environment: var0
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.formatUsernameLiveCheckValidation = var3;
    var1 = function arg0() {
        var0 = global;
        var4 = var0.Date;
        var0 = var4.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var7 = 2024;
        var6 = 2;
        var5 = 4;
        var8 = var1;
        var0 = new var8[var4](var7, var6, var5, var4);
        var3 = var0 instanceof Object ? var0 : var1;
        var2 = var3.toLocaleDateString;
        var1 = arg0;
        var0 = {
            'month': 'long',
            'day': 'numeric',
            'year': 'numeric'
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getLocalizedForcedUUDate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10324, 1417, 1607, 21, 3036, 3450, 10338, 1234, 2]);