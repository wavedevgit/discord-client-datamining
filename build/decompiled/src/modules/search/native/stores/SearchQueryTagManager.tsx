// modules/search/native/stores/SearchQueryTagManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.type;
        var0 = _closure1_slot5;
        var0 = var0.PREFIX;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.type;
        var0 = _closure1_slot5;
        var0 = var0.COMPLETE;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchQueryTagTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchFilterAddLocations;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SearchTokenTypes;
    var _closure1_slot7 = var6;
    var3 = var3.SearchTypes;
    var _closure1_slot8 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            _fun71801: for (var _fun71801_ip = 0;;) switch (_fun71801_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var4 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var2, var1);
                    var6 = global;
                    var1 = var6.Set;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var16 = var4;
                    var1 = new var16[var1](var15);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2.ids = var1;
                    var1 = var6.Set;
                    var4 = var1.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var1
                        }
                    });
                    var16 = var4;
                    var1 = new var16[var1](var15);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var2.channelIds = var1;
                    var1 = 0;
                    var2.version = var1;
                    var4 = var5.type;
                    var1 = _closure1_slot8;
                    var1 = var1.THREAD;
                    if (!(var1 !== var4)) {
                        _fun71801_ip = 144;
                        continue _fun71801
                    }
                case 121:
                    var1 = _closure1_slot8;
                    var1 = var1.GUILD_CHANNEL;
                    if (!(var1 !== var4)) {
                        _fun71801_ip = 144;
                        continue _fun71801
                    }
                case 135:
                    var1 = new Array(0);
                    _fun71801_ip = 367;
                    continue _fun71801;
                case 144:
                    var8 = _closure1_slot4;
                    var7 = var8.getChannel;
                    var4 = var5.channelId;
                    var7 = var7.bind(var8)(var4);
                    var4 = null;
                    var8 = var4 == var7;
                    var9 = undefined;
                    if (var8) {
                        _fun71801_ip = 179;
                        continue _fun71801
                    }
                case 174:
                    var9 = var7.name;
                case 179:
                    if (!(var4 != var9)) {
                        _fun71801_ip = 360;
                        continue _fun71801
                    }
                case 186:
                    var4 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.COMPLETE;
                    var4.type = var7;
                    var7 = _closure1_slot7;
                    var7 = var7.FILTER_IN;
                    var4.searchTokenType = var7;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var7 = 6;
                    var10 = var11[var7];
                    var10 = var8.bind(var0)(var10);
                    var12 = var10.intl;
                    var10 = var12.string;
                    var7 = var11[var7];
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.WNpFHa;
                    var10 = var10.bind(var12)(var7);
                    var7 = 7;
                    var7 = var11[var7];
                    var8 = var8.bind(var0)(var7);
                    var7 = var8.quoteChannelName;
                    var9 = var7.bind(var8)(var9);
                    var6 = var6.HermesInternal;
                    var8 = var6.concat;
                    var7 = '';
                    var6 = ': ';
                    var6 = var8.bind(var7)(var10, var6, var9);
                    var4.text = var6;
                    var5 = var5.channelId;
                    var4.channelId = var5;
                    var3 = _closure1_slot6;
                    var3 = var3.CLIENT_AUTO_ADD;
                    var4.location = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    _fun71801_ip = 364;
                    continue _fun71801;
                case 360:
                    var3 = new Array(0);
                case 364:
                    var1 = var3;
                case 367:
                    var2.defaultTags = var1;
                    var1 = var2.defaultTags;
                    var2.tags = var1;
                    var1 = var2.markChanged;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'markChanged';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = global;
            var2 = var0.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var2
                }
            });
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var _closure3_slot0 = var2;
            var0 = var0.Set;
            var4 = var0.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var0
                }
            });
            var7 = var4;
            var0 = new var7[var0](var6);
            var0 = var0 instanceof Object ? var0 : var4;
            var _closure3_slot1 = var0;
            var5 = var1.tags;
            var4 = var5.forEach;
            var3 = function(arg0) { // Environment: var3
                _fun71803: for (var _fun71803_ip = 0;;) switch (_fun71803_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = _closure3_slot0;
                        var3 = var4.add;
                        var0 = var1.text;
                        var0 = var3.bind(var4)(var0);
                        var3 = _closure1_slot10;
                        var0 = undefined;
                        var3 = var3.bind(var0)(var1);
                        if (!var3) {
                            _fun71803_ip = 53;
                            continue _fun71803
                        }
                    case 42:
                        var5 = var1.channelId;
                        var4 = null;
                        var3 = var4 != var5;
                    case 53:
                        if (!var3) {
                            _fun71803_ip = 75;
                            continue _fun71803
                        }
                    case 56:
                        var3 = _closure3_slot1;
                        var2 = var3.add;
                        var1 = var1.channelId;
                        var1 = var2.bind(var3)(var1);
                    case 75:
                        return var0;
                }
            };
            var3 = var4.bind(var5)(var3);
            var1.ids = var2;
            var1.channelIds = var0;
            var0 = var1.version;
            var0 = var0 + 1;
            var1.version = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(17);
        var1[0] = var0;
        var0 = {};
        var5 = 'mergeTag';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var4 = arg0;
            var3 = arg1;
            var1 = this;
            var _closure3_slot0 = var4;
            var _closure3_slot1 = var3;
            var2 = {};
            var5 = _closure1_slot5;
            var5 = var5.COMPLETE;
            var2.type = var5;
            var9 = var4.text;
            var8 = var3.text;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = '';
            var5 = ' ';
            var5 = var7.bind(var6)(var9, var5, var8);
            var2.text = var5;
            var5 = var4.location;
            var2.location = var5;
            var4 = var4.searchTokenType;
            var2.searchTokenType = var4;
            var4 = var3.channelId;
            var2.channelId = var4;
            var3 = var3.userId;
            var2.userId = var3;
            var4 = var1.tags;
            var3 = var4.filter;
            var0 = function(arg0) { // Environment: var0
                _fun71805: for (var _fun71805_ip = 0;;) switch (_fun71805_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure3_slot0;
                        var0 = var2 !== var0;
                        if (!var0) {
                            _fun71805_ip = 25;
                            continue _fun71805
                        }
                    case 17:
                        var1 = _closure3_slot1;
                        var0 = var2 !== var1;
                    case 25:
                        return var0;
                }
            };
            var11 = var3.bind(var4)(var0);
            var0 = new Array(1);
            var10 = 0;
            var12 = var0;
            var3 = arraySpread(var12, var11, var10);
            var0[var3] = var2;
            var2 = 1;
            var2 = var3 + var2;
            var1.tags = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'replaceTag';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var1 = this;
            var2 = arg0;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var3 = var1.tags;
            var2 = var3.map;
            var0 = function(arg0) { // Environment: var0
                _fun71807: for (var _fun71807_ip = 0;;) switch (_fun71807_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = _closure3_slot0;
                        if (!(var0 === var2)) {
                            _fun71807_ip = 18;
                            continue _fun71807
                        }
                    case 14:
                        var0 = _closure3_slot1;
                    case 18:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0);
            var1.tags = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'exists';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.ids;
            var1 = var2.has;
            var0 = arg0;
            var0 = var0.text;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getChannelIds';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.channelIds;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getUserIds';
        var0.key = var5;
        var5 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = global;
            var0 = var0.Set;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var5 = var2;
            var0 = new var5[var0](var4);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot1 = var0;
            var2 = this;
            var3 = var2.tags;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun71811: for (var _fun71811_ip = 0;;) switch (_fun71811_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure1_slot10;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        if (!var2) {
                            _fun71811_ip = 68;
                            continue _fun71811
                        }
                    case 20:
                        var3 = var1.userId;
                        var4 = var1.searchTokenType;
                        var2 = _closure3_slot0;
                        var2 = var4 === var2;
                        if (!var2) {
                            _fun71811_ip = 51;
                            continue _fun71811
                        }
                    case 45:
                        var4 = null;
                        var2 = var4 != var3;
                    case 51:
                        if (!var2) {
                            _fun71811_ip = 68;
                            continue _fun71811
                        }
                    case 54:
                        var2 = _closure3_slot1;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                    case 68:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'isChannelTagsOnly';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.tags;
            var1 = var2.filter;
            var0 = _closure1_slot10;
            var2 = var1.bind(var2)(var0);
            var1 = var2.every;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.channelId;
                var0 = null;
                var0 = var0 != var1;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'hasUserAddedTags';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var2 = var0.tags;
            var1 = var2.filter;
            var0 = _closure1_slot10;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.location;
                var0 = _closure1_slot6;
                var0 = var0.CLIENT_AUTO_ADD;
                var0 = var1 !== var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'isEmpty';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.tags;
            var1 = var0.length;
            var0 = 0;
            var0 = var0 === var1;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getPrefixTag';
        var0.key = var5;
        var5 = function() {
            _fun71817: for (var _fun71817_ip = 0;;) switch (_fun71817_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.tags;
                    var0 = var0.tags;
                    var2 = var0.length;
                    var0 = 1;
                    var0 = var2 - var0;
                    var1 = var1[var0];
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun71817_ip = 41;
                        continue _fun71817
                    }
                case 37:
                    var0 = undefined;
                    return var0;
                case 41:
                    var2 = _closure1_slot9;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    if (!var2) {
                        _fun71817_ip = 61;
                        continue _fun71817
                    }
                case 58:
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.tags;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var0 = arg0;
            var1.tags = var0;
            var0 = var1.markChanged;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'getQueryString';
        var0.key = var5;
        var5 = function() {
            _fun71820: for (var _fun71820_ip = 0;;) switch (_fun71820_ip) {
                case 0:
                    var0 = arguments[0];
                    var2 = undefined;
                    if (!(var0 === var2)) {
                        _fun71820_ip = 13;
                        continue _fun71820
                    }
                case 11:
                    var0 = false;
                case 13:
                    var _closure3_slot0 = var0;
                    var0 = this;
                    var3 = var0.tags;
                    var2 = var3.filter;
                    var0 = function(arg0) { // Environment: var1
                        _fun71821: for (var _fun71821_ip = 0;;) switch (_fun71821_ip) {
                            case 0:
                                var2 = _closure1_slot9;
                                var1 = undefined;
                                var0 = arg0;
                                var1 = var2.bind(var1)(var0);
                                var0 = !var1;
                                if (!var1) {
                                    _fun71821_ip = 30;
                                    continue _fun71821
                                }
                            case 23:
                                var0 = _closure3_slot0;
                            case 30:
                                return var0;
                        }
                    };
                    var4 = var2.bind(var3)(var0);
                    var5 = var4.length;
                    var3 = '';
                    var2 = 0;
                    var0 = var3;
                    if (!(var2 !== var5)) {
                        _fun71820_ip = 112;
                        continue _fun71820
                    }
                case 61:
                    var2 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.text;
                        return var0;
                    };
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.join;
                    var1 = ' ';
                    var2 = var2.bind(var4)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var1 = var1.concat;
                    var0 = var1.bind(var3)(var2);
                case 112:
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'add';
        var0.key = var5;
        var5 = function arg0() {
            _fun71823: for (var _fun71823_ip = 0;;) switch (_fun71823_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var0 = var1.exists;
                    var0 = var0.bind(var1)(var3);
                    if (var0) {
                        _fun71823_ip = 223;
                        continue _fun71823
                    }
                case 23:
                    var2 = var1.tags;
                    var0 = var1.tags;
                    var0 = var0.length;
                    var5 = 1;
                    var0 = var0 - var5;
                    var2 = var2[var0];
                    var0 = _closure1_slot9;
                    var6 = undefined;
                    var0 = var0.bind(var6)(var3);
                    if (!var0) {
                        _fun71823_ip = 86;
                        continue _fun71823
                    }
                case 68:
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun71823_ip = 86;
                        continue _fun71823
                    }
                case 74:
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var6)(var2);
                    if (var0) {
                        _fun71823_ip = 199;
                        continue _fun71823
                    }
                case 86:
                    var7 = var3.type;
                    var0 = _closure1_slot5;
                    var0 = var0.ANSWER;
                    if (!(var7 === var0)) {
                        _fun71823_ip = 123;
                        continue _fun71823
                    }
                case 105:
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun71823_ip = 123;
                        continue _fun71823
                    }
                case 111:
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var6)(var2);
                    if (var0) {
                        _fun71823_ip = 183;
                        continue _fun71823
                    }
                case 123:
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var6)(var3);
                    if (var0) {
                        _fun71823_ip = 144;
                        continue _fun71823
                    }
                case 135:
                    var4 = _closure1_slot10;
                    var0 = var4.bind(var6)(var3);
                case 144:
                    if (!var0) {
                        _fun71823_ip = 213;
                        continue _fun71823
                    }
                case 147:
                    var9 = var1.tags;
                    var0 = new Array(1);
                    var8 = 0;
                    var10 = var0;
                    var4 = arraySpread(var10, var9, var8);
                    var0[var4] = var3;
                    var4 = var4 + var5;
                    var1.tags = var0;
                    _fun71823_ip = 213;
                    continue _fun71823;
                case 183:
                    var0 = var1.mergeTag;
                    var0 = var0.bind(var1)(var2, var3);
                    _fun71823_ip = 213;
                    continue _fun71823;
                case 199:
                    var0 = var1.replaceTag;
                    var0 = var0.bind(var1)(var2, var3);
                case 213:
                    var0 = var1.markChanged;
                    var0 = var0.bind(var1)();
                case 223:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'removeAnyPrefixTags';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var3 = var1.tags;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot9;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                var0 = !var0;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1.tags = var0;
            var0 = var1.markChanged;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'removeAtIndex';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var3 = var1.tags;
            var2 = arg0;
            var2 = var3[var2];
            var _closure3_slot0 = var2;
            var3 = var1.tags;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var0 !== var1;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1.tags = var0;
            var0 = var1.markChanged;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var4 = function() {
            var1 = this;
            var0 = var1.defaultTags;
            var1.tags = var0;
            var0 = var1.markChanged;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[16] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/stores/SearchQueryTagManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1372, 8914, 8913, 660, 1234, 8980, 2]);