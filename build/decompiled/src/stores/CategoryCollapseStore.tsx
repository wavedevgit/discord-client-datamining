// stores/CategoryCollapseStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun41171: for (var _fun41171_ip = 0;;) switch (_fun41171_ip) {
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
            case 70: // try_end0
                _fun41171_ip = 74;
                continue _fun41171;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun41174: for (var _fun41174_ip = 0;;) switch (_fun41174_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun41174_ip = 46;
                    continue _fun41174
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun41174_ip = 55;
                    continue _fun41174
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun41174_ip = 343;
                    continue _fun41174
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun41174_ip = 323;
                    continue _fun41174
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun41174_ip = 283;
                    continue _fun41174
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun41174_ip = 270;
                    continue _fun41174
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
                    _fun41174_ip = 163;
                    continue _fun41174
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun41174_ip = 179;
                    continue _fun41174
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun41174_ip = 249;
                    continue _fun41174
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun41174_ip = 249;
                    continue _fun41174
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun41174_ip = 234;
                    continue _fun41174
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun41174_ip = 247;
                    continue _fun41174
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun41174_ip = 265;
                continue _fun41174;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun41174_ip = 283;
                continue _fun41174;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun41174_ip = 323;
                    continue _fun41174
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
                    _fun41174_ip = 330;
                    continue _fun41174
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun41175: for (var _fun41175_ip = 0;;) switch (_fun41175_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun41175_ip = 56;
                                continue _fun41175
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
                            _fun41175_ip = 67;
                            continue _fun41175;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun41176: for (var _fun41176_ip = 0;;) switch (_fun41176_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun41176_ip = 23;
                    continue _fun41176
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun41176_ip = 33;
                    continue _fun41176
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
                    _fun41176_ip = 70;
                    continue _fun41176
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun41176_ip = 55;
                    continue _fun41176
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: incrementVersion, environment: var3
        var2 = _closure1_slot12;
        var0 = 1;
        var0 = var2 + var0;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: deleteCategory, environment: var3
        _fun41178: for (var _fun41178_ip = 0;;) switch (_fun41178_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot11;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun41178_ip = 32;
                    continue _fun41178
                }
            case 20:
                var0 = _closure1_slot11;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
            case 32:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var1 = 0;
    var7 = var5[var1];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ChannelTypes;
    var _closure1_slot10 = var7;
    var7 = {};
    var _closure1_slot11 = var7;
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: CategoryCollapseStore, environment: var5
            _fun41180: for (var _fun41180_ip = 0;;) switch (_fun41180_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun41180_ip = 69;
                        continue _fun41180
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun41180_ip = 105;
                    continue _fun41180;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun41181: for (var _fun41181_ip = 0;;) switch (_fun41181_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var6 = var4.waitFor;
                    var5 = _closure1_slot7;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot9;
                    var2 = var6.bind(var4)(var5, var3, var2);
                    var2 = var4.removeChangeListener;
                    var3 = _closure1_slot16;
                    var2 = var2.bind(var4)(var3);
                    var2 = var4.addChangeListener;
                    var2 = var2.bind(var4)(var3);
                    var2 = null;
                    if (!(var2 == var1)) {
                        _fun41181_ip = 68;
                        continue _fun41181
                    }
                case 66:
                    var1 = {};
                case 68:
                    _closure1_slot11 = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isCollapsed';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun41183: for (var _fun41183_ip = 0;;) switch (_fun41183_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 == var2;
                    if (var1) {
                        _fun41183_ip = 20;
                        continue _fun41183
                    }
                case 12:
                    var0 = 'null';
                    var1 = var0 === var2;
                case 20:
                    if (var1) {
                        _fun41183_ip = 37;
                        continue _fun41183
                    }
                case 23:
                    var0 = _closure1_slot11;
                    var0 = var0[var2];
                    var1 = !var0;
                case 37:
                    var0 = !var1;
                    if (var1) {
                        _fun41183_ip = 54;
                        continue _fun41183
                    }
                case 43:
                    var1 = _closure1_slot11;
                    var0 = var1[var2];
                case 54:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getCollapsedCategories';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'version';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.get = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'CategoryCollapseStore';
    var7.displayName = var1;
    var1 = 'collapsedCategories';
    var7.persistKey = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleConnectionOpen, environment: var3
        _fun41186: for (var _fun41186_ip = 0;;) switch (_fun41186_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.userGuildSettings;
                var1 = var1.partial;
                if (var1) {
                    _fun41186_ip = 27;
                    continue _fun41186
                }
            case 18:
                var1 = {};
                _closure1_slot11 = var1;
            case 27:
                var2 = _closure1_slot14;
                var0 = var0.userGuildSettings;
                var1 = var0.entries;
                var0 = undefined;
                var8 = var2.bind(var0)(var1);
                var2 = var8.bind(var0)();
                var1 = var2.done;
                var7 = true;
                var6 = null;
                var5 = var2;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun41186_ip = 216;
                    continue _fun41186
                }
            case 81:
                var1 = var5.value;
                var11 = var1.channel_overrides;
                var10 = var2;
                if (!(var6 != var11)) {
                    _fun41186_ip = 195;
                    continue _fun41186
                }
            case 99:
                var11 = _closure1_slot14;
                var1 = var1.channel_overrides;
                var12 = var11.bind(var0)(var1);
                var13 = var12.bind(var0)();
                var1 = var13.done;
                var11 = var13;
                var4 = var11;
                var3 = var12;
                var10 = var2;
                if (var1) {
                    _fun41186_ip = 195;
                    continue _fun41186
                }
            case 138:
                var13 = var11.value;
                var15 = var13.collapsed;
                var14 = _closure1_slot11;
                var1 = var13.channel_id;
                if (var15) {
                    _fun41186_ip = 167;
                    continue _fun41186
                }
            case 161:
                var15 = delete var14[var1];
                _fun41186_ip = 171;
                continue _fun41186;
            case 167:
                var14[var1] = var7;
            case 171:
                var14 = var12.bind(var0)();
                var1 = var14.done;
                var11 = var14;
                var4 = var11;
                var3 = var12;
                var10 = var13;
                if (!var1) {
                    _fun41186_ip = 138;
                    continue _fun41186
                }
            case 195:
                var11 = var8.bind(var0)();
                var1 = var11.done;
                var2 = var10;
                var5 = var11;
                if (!var1) {
                    _fun41186_ip = 81;
                    continue _fun41186
                }
            case 216:
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleUserGuildSettingsFullUpdate, environment: var3
        _fun41187: for (var _fun41187_ip = 0;;) switch (_fun41187_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userGuildSettings;
                var0 = global;
                var4 = var0.Set;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.guild_id;
                    return var0;
                };
                var5 = var1.bind(var2)(var0);
                var3 = var5.filter;
                var7 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var7.bind(var0)(var1);
                var1 = var1.isNotNullish;
                var14 = var3.bind(var5)(var1);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var15 = var3;
                var1 = new var15[var4](var14, var13);
                var9 = var1 instanceof Object ? var1 : var3;
                var7 = _closure1_slot11;
                var1 = null;
                for (var3 in var7)
                    case 109: {
                        case 118: var12 = var3;
                        var11 = _closure1_slot7;
                        var10 = var11.getChannel;
                        var10 = var10.bind(var11)(var12);
                        var11 = var1 != var10;
                        if (!var11) {
                            _fun41187_ip = 151;
                            continue _fun41187
                        }
                        case 142: var12 = var10.guild_id;
                        var11 = var1 != var12;
                        case 151: if (!var11) {
                            _fun41187_ip = 169;
                            continue _fun41187
                        }
                        case 154: var13 = var9.has;
                        var12 = var10.guild_id;
                        var11 = var13.bind(var9)(var12);
                        case 169: if (!var11) {
                            _fun41187_ip = 109;
                            continue _fun41187
                        }
                        case 172: var11 = _closure1_slot11;
                        var10 = var10.id;
                        var10 = delete var11[var10];
                        _fun41187_ip = 109;
                        continue _fun41187;
                    }
            case 187:
                var1 = _closure1_slot14;
                var5 = var1.bind(var0)(var2);
                var2 = var5.bind(var0)();
                var1 = var2.done;
                var4 = true;
                var3 = var2;
                var2 = undefined;
                if (var1) {
                    _fun41187_ip = 307;
                    continue _fun41187
                }
            case 215:
                var7 = _closure1_slot14;
                var1 = var3.value;
                var1 = var1.channel_overrides;
                var8 = var7.bind(var0)(var1);
                var7 = var8.bind(var0)();
                var1 = var7.done;
                if (var1) {
                    _fun41187_ip = 292;
                    continue _fun41187
                }
            case 247:
                var9 = var7.value;
                var1 = var9.collapsed;
                if (!var1) {
                    _fun41187_ip = 274;
                    continue _fun41187
                }
            case 261:
                var10 = _closure1_slot11;
                var1 = var9.channel_id;
                var10[var1] = var4;
            case 274:
                var10 = var8.bind(var0)();
                var1 = var10.done;
                var7 = var10;
                var2 = var9;
                if (!var1) {
                    _fun41187_ip = 247;
                    continue _fun41187
                }
            case 292:
                var7 = var5.bind(var0)();
                var1 = var7.done;
                var3 = var7;
                if (!var1) {
                    _fun41187_ip = 215;
                    continue _fun41187
                }
            case 307:
                return var0;
        }
    };
    var1.USER_GUILD_SETTINGS_FULL_UPDATE = var8;
    var8 = function(arg0) { // Original name: handleCategoryCollapse, environment: var3
        _fun41189: for (var _fun41189_ip = 0;;) switch (_fun41189_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.id;
                var1 = _closure1_slot11;
                var1 = var1[var2];
                if (var1) {
                    _fun41189_ip = 36;
                    continue _fun41189
                }
            case 22:
                var1 = _closure1_slot11;
                var0 = true;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            case 36:
                var0 = false;
                return var0;
        }
    };
    var1.CATEGORY_COLLAPSE = var8;
    var8 = function(arg0) { // Original name: handleCategoryExpand, environment: var3
        var0 = arg0;
        var2 = var0.id;
        var1 = _closure1_slot17;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CATEGORY_EXPAND = var8;
    var8 = function(arg0) { // Original name: handleCategoryCollapseAll, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var2 = _closure1_slot9;
        var1 = var2.getChannels;
        var1 = var1.bind(var2)(var3);
        var0 = _closure1_slot10;
        var0 = var0.GUILD_CATEGORY;
        var2 = var1[var0];
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun41192: for (var _fun41192_ip = 0;;) switch (_fun41192_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.channel;
                    var2 = var0.id;
                    var1 = 'null';
                    if (!(var1 !== var2)) {
                        _fun41192_ip = 39;
                        continue _fun41192
                    }
                case 21:
                    var2 = _closure1_slot11;
                    var1 = var0.id;
                    var0 = true;
                    var2[var1] = var0;
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CATEGORY_COLLAPSE_ALL = var8;
    var8 = function(arg0) { // Original name: handleCategoryExpandAll, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var2 = _closure1_slot9;
        var1 = var2.getChannels;
        var1 = var1.bind(var2)(var3);
        var0 = _closure1_slot10;
        var0 = var0.GUILD_CATEGORY;
        var2 = var1[var0];
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.channel;
            var1 = _closure1_slot11;
            var0 = var0.id;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CATEGORY_EXPAND_ALL = var8;
    var3 = function(arg0) { // Original name: handleChannelDelete, environment: var3
        var0 = arg0;
        var0 = var0.channel;
        var2 = var0.id;
        var1 = _closure1_slot17;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var1.CHANNEL_DELETE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/CategoryCollapseStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 3961, 1662, 660, 1304, 566, 806, 2]);