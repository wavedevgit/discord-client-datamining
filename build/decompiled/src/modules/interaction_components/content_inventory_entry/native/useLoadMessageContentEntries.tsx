// modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun77108: for (var _fun77108_ip = 0;;) switch (_fun77108_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun77108_ip = 45;
                    continue _fun77108
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun77108_ip = 54;
                    continue _fun77108
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun77108_ip = 344;
                    continue _fun77108
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun77108_ip = 322;
                    continue _fun77108
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun77108_ip = 282;
                    continue _fun77108
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun77108_ip = 269;
                    continue _fun77108
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
                    _fun77108_ip = 162;
                    continue _fun77108
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun77108_ip = 178;
                    continue _fun77108
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun77108_ip = 248;
                    continue _fun77108
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun77108_ip = 248;
                    continue _fun77108
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun77108_ip = 233;
                    continue _fun77108
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun77108_ip = 246;
                    continue _fun77108
                }
            case 233:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun77108_ip = 264;
                continue _fun77108;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun77108_ip = 282;
                continue _fun77108;
            case 269:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun77108_ip = 322;
                    continue _fun77108
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
                    _fun77108_ip = 329;
                    continue _fun77108
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun77109: for (var _fun77109_ip = 0;;) switch (_fun77109_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun77109_ip = 56;
                                continue _fun77109
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
                            _fun77109_ip = 67;
                            continue _fun77109;
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
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun77110: for (var _fun77110_ip = 0;;) switch (_fun77110_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun77110_ip = 23;
                    continue _fun77110
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun77110_ip = 33;
                    continue _fun77110
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
                    _fun77110_ip = 70;
                    continue _fun77110
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun77110_ip = 55;
                    continue _fun77110
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: fetchOrGetExistingFetch, environment: var1
        _fun77111: for (var _fun77111_ip = 0;;) switch (_fun77111_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot8;
                var3 = var4.has;
                var3 = var3.bind(var4)(var2);
                if (var3) {
                    _fun77111_ip = 71;
                    continue _fun77111
                }
            case 29:
                var4 = arg1;
                var3 = undefined;
                var4 = var4.bind(var3)();
                var3 = var4.finally;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot8;
                    var1 = var2.delete;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var3.bind(var4)(var1);
                var3 = _closure1_slot8;
                var1 = var3.set;
                var1 = var1.bind(var3)(var2, var4);
            case 71:
                var1 = _closure1_slot8;
                var0 = var1.get;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: fetchColors, environment: var1
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot11;
        var1 = undefined;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.maybeFetchColors;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() { // Original name: _fetchApplicationParts, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77117: for (var _fun77117_ip = 0;;) switch (_fun77117_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77117_ip = 182;
                            continue _fun77117
                        }
                    case 13:
                        var3 = var1.extra;
                        var2 = 'application_id';
                        var2 = var2 in var3;
                        if (!var2) {
                            _fun77117_ip = 171;
                            continue _fun77117
                        }
                    case 33:
                        var1 = var1.extra;
                        var6 = var1.application_id;
                        var1 = function(arg0) { // Original name: fetchApplication, environment: var1
                            var3 = arg0;
                            var _closure5_slot0 = var3;
                            var2 = _closure1_slot11;
                            var1 = undefined;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 6;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.fetchApplications;
                                var3 = _closure5_slot0;
                                var0 = new Array(1);
                                var0[0] = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var2.bind(var1)(var3, var0);
                            return var0;
                        };
                        var4 = undefined;
                        var1 = var1.bind(var4)(var6);
                        SaveGenerator(address = 65);
                    case 63:
                        return var1;
                    case 65:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77117_ip = 179;
                            continue _fun77117
                        }
                    case 71:
                        var5 = _closure1_slot6;
                        var3 = var5.getApplication;
                        var7 = var3.bind(var5)(var6);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 8;
                        var3 = var6[var3];
                        var8 = var5.bind(var4)(var3);
                        var5 = null;
                        var6 = var5 != var7;
                        var3 = 'failed to fetch application';
                        var3 = var8.bind(var4)(var6, var3);
                        var6 = var7.getIconURL;
                        var3 = _closure1_slot7;
                        var3 = var3.LARGE;
                        var3 = var6.bind(var7)(var3);
                        if (!(var5 != var3)) {
                            _fun77117_ip = 171;
                            continue _fun77117
                        }
                    case 152:
                        var2 = _closure1_slot12;
                        var2 = var2.bind(var4)(var3);
                        SaveGenerator(address = 165);
                    case 163:
                        return var2;
                    case 165:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun77117_ip = 176;
                            continue _fun77117
                        }
                    case 171:
                        var3 = undefined;
                        return var3;
                    case 176:
                        return var2;
                    case 179:
                        return var1;
                    case 182:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: _fetchUserParts, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77122: for (var _fun77122_ip = 0;;) switch (_fun77122_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77122_ip = 48;
                            continue _fun77122
                        }
                    case 7:
                        var1 = arg0;
                        var3 = var1.author_id;
                        var1 = function(arg0) { // Original name: fetchUser, environment: var1
                            var3 = arg0;
                            var _closure5_slot0 = var3;
                            var2 = _closure1_slot11;
                            var1 = undefined;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getUser;
                                var0 = _closure5_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var2.bind(var1)(var3, var0);
                            return var0;
                        };
                        var2 = undefined;
                        var1 = var1.bind(var2)(var3);
                        SaveGenerator(address = 36);
                    case 34:
                        return var1;
                    case 36:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun77122_ip = 45;
                            continue _fun77122
                        }
                    case 42:
                        return var2;
                    case 45:
                        return var1;
                    case 48:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: _fetchWatchedContentParts, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77127: for (var _fun77127_ip = 0;;) switch (_fun77127_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77127_ip = 177;
                            continue _fun77127
                        }
                    case 13:
                        var3 = var2.extra;
                        var1 = 'application_id';
                        var1 = var1 in var3;
                        if (!var1) {
                            _fun77127_ip = 169;
                            continue _fun77127
                        }
                    case 33:
                        var3 = var2.extra;
                        var1 = 'media_assets_large_image';
                        var1 = var1 in var3;
                        if (!var1) {
                            _fun77127_ip = 169;
                            continue _fun77127
                        }
                    case 50:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 9;
                        var4 = var4[var3];
                        var3 = undefined;
                        var7 = var5.bind(var3)(var4);
                        var6 = var7.getAssetImage;
                        var4 = var2.extra;
                        var5 = var4.application_id;
                        var2 = var2.extra;
                        var4 = var2.media_assets_large_image;
                        var2 = _closure1_slot7;
                        var8 = var2.LARGE;
                        var2 = new Array(2);
                        var2[0] = var8;
                        var8 = _closure1_slot7;
                        var8 = var8.LARGE;
                        var2[1] = var8;
                        var2 = var6.bind(var7)(var5, var4, var2);
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun77127_ip = 169;
                            continue _fun77127
                        }
                    case 150:
                        var1 = _closure1_slot12;
                        var1 = var1.bind(var3)(var2);
                        SaveGenerator(address = 163);
                    case 161:
                        return var1;
                    case 163:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77127_ip = 174;
                            continue _fun77127
                        }
                    case 169:
                        var2 = undefined;
                        return var2;
                    case 174:
                        return var1;
                    case 177:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: _fetchListenedContentParts, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77130: for (var _fun77130_ip = 0;;) switch (_fun77130_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77130_ip = 95;
                            continue _fun77130
                        }
                    case 10:
                        var3 = var1.extra;
                        var2 = 'entries';
                        var2 = var2 in var3;
                        if (!var2) {
                            _fun77130_ip = 87;
                            continue _fun77130
                        }
                    case 27:
                        var1 = var1.extra;
                        var2 = var1.entries;
                        var1 = 0;
                        var1 = var2[var1];
                        var1 = var1.media;
                        var3 = var1.image_url;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun77130_ip = 87;
                            continue _fun77130
                        }
                    case 63:
                        var2 = _closure1_slot12;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        SaveGenerator(address = 81);
                    case 79:
                        return var1;
                    case 81:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77130_ip = 92;
                            continue _fun77130
                        }
                    case 87:
                        var2 = undefined;
                        return var2;
                    case 92:
                        return var1;
                    case 95:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: _fetchTopArtistContentParts, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77133: for (var _fun77133_ip = 0;;) switch (_fun77133_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77133_ip = 136;
                            continue _fun77133
                        }
                    case 13:
                        var3 = var1.extra;
                        var2 = 'media';
                        var2 = var2 in var3;
                        if (!var2) {
                            _fun77133_ip = 128;
                            continue _fun77133
                        }
                    case 30:
                        var1 = var1.extra;
                        var1 = var1.media;
                        var3 = var1.image_url;
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var2 = var5[var2];
                        var4 = undefined;
                        var7 = var6.bind(var4)(var2);
                        var2 = null;
                        var6 = var2 != var3;
                        var2 = 'missing image url for top artist';
                        var2 = var7.bind(var4)(var6, var2);
                        var2 = _closure1_slot0;
                        var1 = 7;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.maybeFetchColors;
                        var1 = var1.bind(var2)(var3);
                        SaveGenerator(address = 122);
                    case 120:
                        return var1;
                    case 122:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77133_ip = 133;
                            continue _fun77133
                        }
                    case 128:
                        var2 = undefined;
                        return var2;
                    case 133:
                        return var1;
                    case 136:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: _loadContentEntryParts, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun77136: for (var _fun77136_ip = 0;;) switch (_fun77136_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77136_ip = 409;
                            continue _fun77136
                        }
                    case 12:
                        var2 = undefined;
                        var _closure4_slot1 = var2;
                        var4 = new Array(0);
                        var _closure4_slot0 = var4;
                        var11 = function*() { // Original name: _loop, environment: var12
                            var0 = function*() { // Original name: ?anon_0__loop, environment: var0
                                _fun77138: for (var _fun77138_ip = 0;;) switch (_fun77138_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun77138_ip = 239;
                                            continue _fun77138
                                        }
                                    case 12:
                                        var1 = undefined;
                                        var _closure6_slot0 = var1;
                                        var3 = function() { // Original name: _fetchEntryParts, environment: var2
                                            var3 = undefined;
                                            var0 = undefined;
                                            var2 = _closure1_slot4;
                                            var1 = function*() { // Environment: var1
                                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                                    _fun77142: for (var _fun77142_ip = 0;;) switch (_fun77142_ip) {
                                                        case 0:
                                                            StartGenerator();
                                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                            if (var1) {
                                                                _fun77142_ip = 51;
                                                                continue _fun77142
                                                            }
                                                        case 7:
                                                            var1 = global;
                                                            var3 = var1.Promise;
                                                            var2 = var3.all;
                                                            var1 = _closure6_slot0;
                                                            var1 = var2.bind(var3)(var1);
                                                            SaveGenerator(address = 37);
                                                        case 35:
                                                            return var1;
                                                        case 37:
                                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                            if (var2) {
                                                                _fun77142_ip = 48;
                                                                continue _fun77142
                                                            }
                                                        case 43:
                                                            var2 = undefined;
                                                            return var2;
                                                        case 48:
                                                            return var1;
                                                        case 51:
                                                            return var0;
                                                    }
                                                };
                                                return var0;
                                            };
                                            var3 = var2.bind(var3)(var1);
                                            _closure6_slot1 = var3;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        var _closure6_slot1 = var3;
                                        var4 = _closure4_slot1;
                                        var5 = var4.type;
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var4 = 10;
                                        var4 = var7[var4];
                                        var4 = var6.bind(var1)(var4);
                                        var4 = var4.ComponentType;
                                        var4 = var4.CONTENT_INVENTORY_ENTRY;
                                        if (!(var5 === var4)) {
                                            _fun77138_ip = 236;
                                            continue _fun77138
                                        }
                                    case 83:
                                        var4 = _closure4_slot1;
                                        var7 = var4.contentInventoryEntry;
                                        var6 = new Array(0);
                                        _closure6_slot0 = var6;
                                        var5 = var6.push;
                                        var4 = function() { // Original name: fetchApplicationParts, environment: var2
                                            var0 = undefined;
                                            var3 = _closure1_slot13;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        var4 = var4.bind(var1)(var7);
                                        var4 = var5.bind(var6)(var4);
                                        var5 = var6.push;
                                        var4 = function() { // Original name: fetchUserParts, environment: var2
                                            var0 = undefined;
                                            var3 = _closure1_slot14;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        var4 = var4.bind(var1)(var7);
                                        var4 = var5.bind(var6)(var4);
                                        var5 = var6.push;
                                        var4 = function() { // Original name: fetchWatchedContentParts, environment: var2
                                            var0 = undefined;
                                            var3 = _closure1_slot15;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        var4 = var4.bind(var1)(var7);
                                        var4 = var5.bind(var6)(var4);
                                        var5 = var6.push;
                                        var4 = function() { // Original name: fetchListenedContentParts, environment: var2
                                            var0 = undefined;
                                            var3 = _closure1_slot16;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        var4 = var4.bind(var1)(var7);
                                        var4 = var5.bind(var6)(var4);
                                        var5 = var6.push;
                                        var4 = function() { // Original name: fetchTopArtistContentParts, environment: var2
                                            var0 = undefined;
                                            var3 = _closure1_slot17;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        var4 = var4.bind(var1)(var7);
                                        var4 = var5.bind(var6)(var4);
                                        var4 = _closure4_slot0;
                                        var3 = var4.push;
                                        var2 = function() { // Original name: fetchEntryParts, environment: var2
                                            var0 = undefined;
                                            var3 = _closure6_slot1;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        var2 = var2.bind(var1)();
                                        var2 = var3.bind(var4)(var2);
                                    case 236:
                                        return var1;
                                    case 239:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = _closure1_slot9;
                        var1 = arg0;
                        var1 = var1.components;
                        var10 = var3.bind(var2)(var1);
                        var5 = var10.bind(var2)();
                        var3 = var5.done;
                        var1 = global;
                        var9 = 'iterator is not an object';
                        var8 = 'iterator.throw() did not return an object';
                        var7 = 'throw';
                        var6 = 'iterator.next() did not return an object';
                        if (var3) {
                            _fun77136_ip = 376;
                            continue _fun77136
                        }
                    case 93:
                        var3 = var5.value;
                        _closure4_slot1 = var3;
                        var13 = var11.bind(var2)();
                        var3 = var1.Symbol;
                        var3 = var3.iterator;
                        var3 = var13[var3];
                        var14 = var3.bind(var13)();
                        var22 = var14;
                        var21 = var9;
                        var3 = ensureObject(var22, var21);
                        var19 = var14.next;
                        var18 = undefined;
                    case 142:
                        var13 = var18;
                        var13 = var19.bind(var14)(var13);
                        var22 = var13;
                        var21 = var6;
                        var15 = ensureObject(var22, var21);
                        var3 = var13;
                        var15 = var13.done;
                        if (var15) {
                            _fun77136_ip = 353;
                            continue _fun77136
                        }
                    case 174: // try_start_0
                        var15 = generatorSetDelegated();
                        SaveGenerator(address = 229);
                    case 180:
                        return var13;
                    case 182: // try_end0 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 15);
                        var22 = var14;
                        var21 = var7;
                        var13 = getMethod(var22, var21);
                        if (!(var13 !== var2)) {
                            _fun77136_ip = 312;
                            continue _fun77136
                        }
                    case 198:
                        var13 = var13.bind(var14)(var15);
                        var22 = var13;
                        var21 = var8;
                        var15 = ensureObject(var22, var21);
                        var15 = var13.done;
                        if (var15) {
                            _fun77136_ip = 307;
                            continue _fun77136
                        }
                    case 221:
                        var15 = generatorSetDelegated();
                        SaveGenerator(address = 229);
                    case 227:
                        return var13;
                    case 229: // try_start_1
                        ResumeGenerator(result_out_reg = 15, return_bool_out_reg = 17);
                        var18 = var15;
                        var16 = var17;
                        if (!var16) {
                            _fun77136_ip = 142;
                            continue _fun77136
                        }
                    case 241:
                        var18 = var15;
                    case 244: // try_end1
                        var21 = 'return';
                        var22 = var14;
                        var20 = getMethod(var22, var21);
                        if (!(var20 !== var2)) {
                            _fun77136_ip = 304;
                            continue _fun77136
                        }
                    case 259:
                        var16 = var18;
                        var16 = var20.bind(var14)(var16);
                        var21 = 'iterator.return() did not return an object';
                        var22 = var16;
                        var20 = ensureObject(var22, var21);
                        var20 = var16.done;
                        if (var20) {
                            _fun77136_ip = 296;
                            continue _fun77136
                        }
                    case 288:
                        var20 = generatorSetDelegated();
                        SaveGenerator(address = 229);
                    case 294:
                        return var16;
                    case 296:
                        var16 = var16.value;
                        return var16;
                    case 304:
                        return var15;
                    case 307:
                        var3 = var13;
                        _fun77136_ip = 353;
                        continue _fun77136;
                    case 312:
                        var21 = 'return';
                        var22 = var14;
                        var13 = getMethod(var22, var21);
                        if (!(var13 !== var2)) {
                            _fun77136_ip = 341;
                            continue _fun77136
                        }
                    case 327:
                        var22 = var13.bind(var14)();
                        var21 = 'iterator.return() did not return an object';
                        var13 = ensureObject(var22, var21);
                    case 341:
                        var22 = 'yield* delegate must have a .throw() method';
                        var13 = throwTypeError(var22);
                        throw var2;
                    case 353:
                        var3 = var3.value;
                        var13 = var10.bind(var2)();
                        var3 = var13.done;
                        var5 = var13;
                        if (!var3) {
                            _fun77136_ip = 93;
                            continue _fun77136
                        }
                    case 376:
                        var3 = var1.Promise;
                        var1 = var3.all;
                        var1 = var1.bind(var3)(var4);
                        SaveGenerator(address = 397);
                    case 395:
                        return var1;
                    case 397:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun77136_ip = 406;
                            continue _fun77136
                        }
                    case 403:
                        return var2;
                    case 406:
                        return var1;
                    case 409:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: isMessageRenderable, environment: var1
        _fun77148: for (var _fun77148_ip = 0;;) switch (_fun77148_ip) {
            case 0:
                var8 = arg0;
                var1 = _closure1_slot9;
                var0 = var8.components;
                var6 = undefined;
                var5 = var1.bind(var6)(var0);
                var1 = var5.bind(var6)();
                var0 = var1.done;
                var4 = 11;
                var3 = null;
                var2 = 10;
                if (var0) {
                    _fun77148_ip = 163;
                    continue _fun77148
                }
            case 43:
                var12 = var1.value;
                var9 = var12.type;
                var10 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var2];
                var0 = var10.bind(var6)(var0);
                var0 = var0.ComponentType;
                var0 = var0.CONTENT_INVENTORY_ENTRY;
                if (!(var9 === var0)) {
                    _fun77148_ip = 142;
                    continue _fun77148
                }
            case 86:
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var4];
                var10 = var9.bind(var6)(var0);
                var9 = var10.transformToRowGeneratedContentInventoryEntryComponent;
                var0 = {};
                var11 = {};
                var12 = var12.contentInventoryEntry;
                var11.contentInventoryEntry = var12;
                var0.component = var11;
                var0.message = var8;
                var0 = var9.bind(var10)(var0);
                if (!(var3 != var0)) {
                    _fun77148_ip = 159;
                    continue _fun77148
                }
            case 142:
                var9 = var5.bind(var6)();
                var0 = var9.done;
                var1 = var9;
                if (var0) {
                    _fun77148_ip = 163;
                    continue _fun77148
                }
            case 157:
                _fun77148_ip = 43;
                continue _fun77148;
            case 159:
                var0 = false;
                return var0;
            case 163:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var8 = var5[var6];
    var6 = arg3;
    var6 = var6.bind(var0)(var8);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ImageSizes;
    var _closure1_slot7 = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/content_inventory_entry/native/useLoadMessageContentEntries.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useLoadMessageContentEntries, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot5;
        var6 = var4.useRef;
        var3 = global;
        var2 = var3.Map;
        var7 = var2.prototype;
        var7 = Object.create(var7, {
            constructor: {
                value: var2
            }
        });
        var17 = var7;
        var2 = new var17[var2](var16);
        var2 = var2 instanceof Object ? var2 : var7;
        var2 = var6.bind(var4)(var2);
        var _closure2_slot1 = var2;
        var6 = var4.useRef;
        var2 = var3.Map;
        var7 = var2.prototype;
        var7 = Object.create(var7, {
            constructor: {
                value: var2
            }
        });
        var17 = var7;
        var2 = new var17[var2](var16);
        var2 = var2 instanceof Object ? var2 : var7;
        var2 = var6.bind(var4)(var2);
        var _closure2_slot2 = var2;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 12;
        var2 = var9[var2];
        var7 = undefined;
        var10 = var6.bind(var7)(var2);
        var8 = var10.useIsContentInventoryEmbedEnabled;
        var2 = 'useLoadMessageContentEntries';
        var8 = var8.bind(var10)(var2);
        var _closure2_slot3 = var8;
        var10 = var4.useState;
        var2 = var3.Set;
        var11 = var2.prototype;
        var11 = Object.create(var11, {
            constructor: {
                value: var2
            }
        });
        var17 = var11;
        var2 = new var17[var2](var16);
        var2 = var2 instanceof Object ? var2 : var11;
        var2 = var10.bind(var4)(var2);
        var12 = _closure1_slot3;
        var11 = 2;
        var13 = var12.bind(var7)(var2, var11);
        var5 = 0;
        var2 = var13[var5];
        var _closure2_slot4 = var2;
        var10 = 1;
        var13 = var13[var10];
        var _closure2_slot5 = var13;
        var13 = var4.useState;
        var3 = var3.Set;
        var14 = var3.prototype;
        var14 = Object.create(var14, {
            constructor: {
                value: var3
            }
        });
        var17 = var14;
        var3 = new var17[var3](var16);
        var3 = var3 instanceof Object ? var3 : var14;
        var3 = var13.bind(var4)(var3);
        var3 = var12.bind(var7)(var3, var11);
        var5 = var3[var5];
        var _closure2_slot6 = var5;
        var3 = var3[var10];
        var _closure2_slot7 = var3;
        var3 = 7;
        var3 = var9[var3];
        var9 = var6.bind(var7)(var3);
        var6 = var9.useColorStore;
        var3 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.palette;
            return var0;
        };
        var3 = var6.bind(var9)(var3);
        var9 = var4.useCallback;
        var6 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun77153: for (var _fun77153_ip = 0;;) switch (_fun77153_ip) {
                        case 0:
                            StartGenerator();
                            var3 = arg0;
                            var2 = arg1;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                            if (var5) {
                                _fun77153_ip = 339;
                                continue _fun77153
                            }
                        case 18:
                            var4 = var3;
                            var _closure5_slot0 = var3;
                            var6 = var2;
                            var2 = var2.components;
                            var3 = var2.length;
                            var2 = 0;
                            if (!(var2 !== var3)) {
                                _fun77153_ip = 334;
                                continue _fun77153
                            }
                        case 48:
                            var3 = _closure2_slot1;
                            var7 = var3.current;
                            var5 = var7.has;
                            var3 = var4;
                            var3 = var5.bind(var7)(var3);
                            if (var3) {
                                _fun77153_ip = 334;
                                continue _fun77153
                            }
                        case 79:
                            var3 = _closure2_slot1;
                            var7 = var3.current;
                            var5 = var7.set;
                            var9 = var4;
                            var3 = 'loading';
                            var3 = var5.bind(var7)(var9, var3);
                            var7 = _closure2_slot5;
                            var3 = undefined;
                            var5 = function(arg0) { // Environment: var1
                                var0 = global;
                                var2 = var0.Set;
                                var0 = new Array(1);
                                var5 = arg0;
                                var4 = 0;
                                var6 = var0;
                                var3 = arraySpread(var6, var5, var4);
                                var1 = _closure5_slot0;
                                var0[var3] = var1;
                                var1 = 1;
                                var1 = var3 + var1;
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var7 = var1;
                                var6 = var0;
                                var0 = new var7[var2](var6, var5);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var5 = var7.bind(var3)(var5);
                            var5 = _closure2_slot2;
                            var8 = var5.current;
                            var7 = var8.set;
                            var5 = var6;
                            var5 = var7.bind(var8)(var9, var5);
                        case 147: // try_start_0
                            var7 = var6;
                            var5 = function() { // Original name: loadContentEntryParts, environment: var1
                                var0 = undefined;
                                var3 = _closure1_slot18;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var5 = var5.bind(var3)(var7);
                            SaveGenerator(address = 166);
                        case 164:
                            return var5;
                        case 166:
                            ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                            if (var7) {
                                _fun77153_ip = 251;
                                continue _fun77153
                            }
                        case 172:
                            var7 = _closure1_slot19;
                            var6 = var7.bind(var3)(var6);
                            if (!var6) {
                                _fun77153_ip = 249;
                                continue _fun77153
                            }
                        case 187:
                            var6 = _closure2_slot1;
                            var9 = var6.current;
                            var7 = var9.set;
                            var8 = var4;
                            var6 = 'loaded';
                            var6 = var7.bind(var9)(var8, var6);
                            var6 = _closure2_slot2;
                            var7 = var6.current;
                            var6 = var7.delete;
                            var6 = var6.bind(var7)(var8);
                            var7 = _closure2_slot5;
                            var6 = function(arg0) { // Environment: var1
                                var0 = global;
                                var2 = var0.Set;
                                var3 = new Array(0);
                                var5 = arg0;
                                var4 = 0;
                                var6 = var3;
                                var0 = arraySpread(var6, var5, var4);
                                var1 = var3.filter;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = _closure5_slot0;
                                    var0 = arg0;
                                    var0 = var0 !== var1;
                                    return var0;
                                };
                                var6 = var1.bind(var3)(var0);
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var7 = var1;
                                var0 = new var7[var2](var6, var5);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var6 = var7.bind(var3)(var6);
                        case 249: // try_end0
                            _fun77153_ip = 334;
                            continue _fun77153;
                        case 251:
                            return var5;
                        case 254: // catch_target0
                            CatchBlockStart(arg_register = 5);
                            var5 = _closure2_slot1;
                            var7 = var5.current;
                            var5 = var7.set;
                            var6 = var4;
                            var4 = 'error';
                            var4 = var5.bind(var7)(var6, var4);
                            var4 = _closure2_slot2;
                            var5 = var4.current;
                            var4 = var5.delete;
                            var4 = var4.bind(var5)(var6);
                            var5 = _closure2_slot5;
                            var4 = function(arg0) { // Environment: var1
                                var0 = global;
                                var2 = var0.Set;
                                var3 = new Array(0);
                                var5 = arg0;
                                var4 = 0;
                                var6 = var3;
                                var0 = arraySpread(var6, var5, var4);
                                var1 = var3.filter;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = _closure5_slot0;
                                    var0 = arg0;
                                    var0 = var0 !== var1;
                                    return var0;
                                };
                                var6 = var1.bind(var3)(var0);
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var7 = var1;
                                var0 = new var7[var2](var6, var5);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var4 = var5.bind(var3)(var4);
                            var2 = _closure2_slot7;
                            var1 = function(arg0) { // Environment: var1
                                var0 = global;
                                var2 = var0.Set;
                                var0 = new Array(1);
                                var5 = arg0;
                                var4 = 0;
                                var6 = var0;
                                var3 = arraySpread(var6, var5, var4);
                                var1 = _closure5_slot0;
                                var0[var3] = var1;
                                var1 = 1;
                                var1 = var3 + var1;
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var7 = var1;
                                var6 = var0;
                                var0 = new var7[var2](var6, var5);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 334:
                            var1 = undefined;
                            return var1;
                        case 339:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function(arg0, arg1) { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var7 = var6.bind(var7)();
        var6 = new Array(0);
        var7 = var9.bind(var4)(var7, var6);
        var _closure2_slot8 = var7;
        var9 = var4.useEffect;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() { // Environment: var0
            _fun77162: for (var _fun77162_ip = 0;;) switch (_fun77162_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    var2 = var2.size;
                    var3 = 0;
                    if (!(var3 !== var2)) {
                        _fun77162_ip = 103;
                        continue _fun77162
                    }
                case 25:
                    var4 = new Array(0);
                    var _closure3_slot0 = var4;
                    var2 = _closure2_slot2;
                    var6 = var2.current;
                    var5 = var6.forEach;
                    var2 = function(arg0, arg1) { // Environment: var0
                        _fun77163: for (var _fun77163_ip = 0;;) switch (_fun77163_ip) {
                            case 0:
                                var2 = _closure1_slot19;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                if (!var1) {
                                    _fun77163_ip = 40;
                                    continue _fun77163
                                }
                            case 20:
                                var3 = _closure3_slot0;
                                var2 = var3.push;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                            case 40:
                                return var0;
                        }
                    };
                    var2 = var5.bind(var6)(var2);
                    var2 = var4.length;
                    if (!(var2 > var3)) {
                        _fun77162_ip = 103;
                        continue _fun77162
                    }
                case 68:
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = _closure2_slot1;
                        var4 = var1.current;
                        var3 = var4.set;
                        var1 = 'loaded';
                        var1 = var3.bind(var4)(var2, var1);
                        var0 = _closure2_slot2;
                        var1 = var0.current;
                        var0 = var1.delete;
                        var0 = var0.bind(var1)(var2);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        var0 = global;
                        var3 = var0.Set;
                        var0 = var3.prototype;
                        var2 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = arg0;
                        var5 = var2;
                        var0 = new var5[var3](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var _closure4_slot0 = var0;
                        var3 = _closure3_slot0;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure4_slot0;
                            var1 = var2.delete;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                case 103:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var9.bind(var4)(var3, var6);
        var6 = var4.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var1;
        var1 = function() { // Environment: var0
            _fun77167: for (var _fun77167_ip = 0;;) switch (_fun77167_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    if (!var1) {
                        _fun77167_ip = 33;
                        continue _fun77167
                    }
                case 10:
                    var2 = _closure2_slot0;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun77168: for (var _fun77168_ip = 0;;) switch (_fun77168_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 13;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.bind(var0)(var1);
                                if (!var2) {
                                    _fun77168_ip = 54;
                                    continue _fun77168
                                }
                            case 36:
                                var2 = var1.messageSnapshots;
                                var3 = 0;
                                var4 = var2[var3];
                                var2 = null;
                                if (!(var2 == var4)) {
                                    _fun77168_ip = 74;
                                    continue _fun77168
                                }
                            case 54:
                                var4 = _closure2_slot8;
                                var2 = var1.id;
                                var2 = var4.bind(var0)(var2, var1);
                                _fun77168_ip = 107;
                                continue _fun77168;
                            case 74:
                                var2 = var1.messageSnapshots;
                                var2 = var2[var3];
                                var3 = var2.message;
                                var2 = _closure2_slot8;
                                var1 = var1.id;
                                var1 = var2.bind(var0)(var1, var3);
                            case 107:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var6.bind(var4)(var1, var3);
        var3 = var4.useMemo;
        var1 = new Array(2);
        var1[0] = var2;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var0 = global;
            var0 = var0.Set;
            var2 = var0.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var0
                }
            });
            var7 = var2;
            var0 = new var7[var0](var6);
            var0 = var0 instanceof Object ? var0 : var2;
            var _closure3_slot0 = var0;
            var5 = _closure2_slot4;
            var4 = var5.forEach;
            var3 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.add;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3 = var4.bind(var5)(var3);
            var3 = _closure2_slot6;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure3_slot0;
                var1 = var2.add;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var3.bind(var4)(var0, var1);
        var0 = {};
        var0.unloadedContentEntryMessageIds = var2;
        var0.unloadableContentEntryMessageIds = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 3413, 3416, 6916, 5305, 6798, 44, 5615, 1636, 6795, 3936, 4245, 2]);