// modules/emojis/records/ExpressionSourceRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1, arg2() {
        _fun59879: for (var _fun59879_ip = 0;;) switch (_fun59879_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot6;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot5;
                var0 = _closure1_slot16;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun59879_ip = 48;
                    continue _fun59879
                }
            case 35:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var2);
                _fun59879_ip = 86;
                continue _fun59879;
            case 48:
                var5 = global;
                var7 = var5.Reflect;
                var6 = var7.construct;
                var5 = new Array(0);
                var4 = _closure1_slot6;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 86:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        _fun59880: for (var _fun59880_ip = 0;;) switch (_fun59880_ip) {
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
                _fun59880_ip = 74;
                continue _fun59880;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var8[var1];
    var9 = var3.bind(var0)(var1);
    var1 = 7;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var3 = var1.Endpoints;
    var _closure1_slot9 = var3;
    var1 = var1.GuildFeatures;
    var _closure1_slot10 = var1;
    var5 = {};
    var1 = 'GUILD';
    var5.GUILD = var1;
    var1 = 'APPLICATION';
    var5.APPLICATION = var1;
    var _closure1_slot11 = var5;
    var1 = function() { // Environment: var6
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59885: for (var _fun59885_ip = 0;;) switch (_fun59885_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59885_ip = 271;
                            continue _fun59885
                        }
                    case 10:
                        var9 = arg0;
                        var6 = undefined;
                        var4 = undefined;
                        var7 = null;
                        var1 = null;
                    case 21: // try_start_0
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 8;
                        var2 = var8[var2];
                        var2 = var3.bind(var6)(var2);
                        var8 = var2.HTTP;
                        var3 = var8.get;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'timeout': 5000,
                            'rejectWithError': true
                        };
                        var11 = _closure1_slot9;
                        var10 = var11.EMOJI_SOURCE_DATA;
                        var9 = var10.bind(var11)(var9);
                        var2.url = var9;
                        var2 = var3.bind(var8)(var2);
                        SaveGenerator(address = 98);
                    case 96:
                        return var2;
                    case 98:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59885_ip = 263;
                            continue _fun59885
                        }
                    case 107:
                        var3 = var2.body;
                        var4 = var3;
                        var3 = var7 == var3;
                        var8 = undefined;
                        if (var3) {
                            _fun59885_ip = 132;
                            continue _fun59885
                        }
                    case 124:
                        var3 = var4;
                        var8 = var3.type;
                    case 132:
                        var3 = _closure1_slot11;
                        var3 = var3.GUILD;
                        if (!(var8 !== var3)) {
                            _fun59885_ip = 223;
                            continue _fun59885
                        }
                    case 146:
                        var3 = var4;
                        var3 = var7 == var3;
                        var6 = undefined;
                        if (var3) {
                            _fun59885_ip = 166;
                            continue _fun59885
                        }
                    case 158:
                        var3 = var4;
                        var6 = var3.type;
                    case 166:
                        var3 = _closure1_slot11;
                        var3 = var3.APPLICATION;
                        if (!(var6 === var3)) {
                            _fun59885_ip = 261;
                            continue _fun59885
                        }
                    case 180:
                        var3 = {};
                        var9 = _closure1_slot14;
                        var8 = var9.createFromServer;
                        var6 = var4;
                        var7 = var6.application;
                        var7 = var8.bind(var9)(var7);
                        var3.application = var7;
                        var6 = var6.type;
                        var3.type = var6;
                        var1 = var3;
                        _fun59885_ip = 261;
                        continue _fun59885;
                    case 223:
                        var3 = {};
                        var7 = _closure1_slot13;
                        var6 = var7.createFromServer;
                        var5 = var4.guild;
                        var5 = var6.bind(var7)(var5);
                        var3.guild = var5;
                        var4 = var4.type;
                        var3.type = var4;
                        var1 = var3;
                    case 261: // try_end0
                        _fun59885_ip = 268;
                        continue _fun59885;
                    case 263:
                        return var2;
                    case 266: // catch_target0
                        CatchBlockStart(arg_register = 2);
                    case 268:
                        return var1;
                    case 271:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var1.bind(var0)();
    var _closure1_slot12 = var4;
    var1 = function(arg0) { // Environment: var6
        var4 = function arg0() {
            var1 = arg0;
            var4 = this;
            var5 = _closure1_slot3;
            var3 = _closure2_slot1;
            var2 = undefined;
            var5 = var5.bind(var2)(var4, var3);
            var0 = _closure1_slot15;
            var0 = var0.bind(var2)(var4, var3);
            var2 = var1.id;
            var0.id = var2;
            var2 = var1.name;
            var0.name = var2;
            var2 = var1.icon;
            var0.icon = var2;
            var2 = var1.description;
            var0.description = var2;
            var2 = var1.features;
            var0.features = var2;
            var2 = var1.premiumTier;
            var0.premiumTier = var2;
            var2 = var1.premiumSubscriberCount;
            var0.premiumSubscriberCount = var2;
            var2 = var1.presenceCount;
            var0.presenceCount = var2;
            var2 = var1.memberCount;
            var0.memberCount = var2;
            var1 = var1.emojis;
            var0.emojis = var1;
            return var0;
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot7;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getIconURL';
        var5.key = var1;
        var1 = function arg0() {
            _fun59889: for (var _fun59889_ip = 0;;) switch (_fun59889_ip) {
                case 0:
                    var3 = arguments[1];
                    var4 = this;
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun59889_ip = 14;
                        continue _fun59889
                    }
                case 12:
                    var3 = false;
                case 14:
                    var1 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 9;
                    var0 = var5[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.getGuildIconURL;
                    var0 = {};
                    var5 = var4.id;
                    var0.id = var5;
                    var5 = arg0;
                    var0.size = var5;
                    var4 = var4.icon;
                    var0.icon = var4;
                    var0.canAnimate = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getIconSource';
        var5.key = var7;
        var7 = function arg0() {
            _fun59890: for (var _fun59890_ip = 0;;) switch (_fun59890_ip) {
                case 0:
                    var3 = arguments[1];
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var1 = arg0;
                    var _closure3_slot1 = var1;
                    var4 = undefined;
                    if (!(var3 === var4)) {
                        _fun59890_ip = 27;
                        continue _fun59890
                    }
                case 25:
                    var3 = false;
                case 27:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.getAnimatableSourceWithFallback;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.getGuildIconSource;
                        var0 = {};
                        var3 = _closure3_slot0;
                        var5 = var3.id;
                        var0.id = var5;
                        var4 = _closure3_slot1;
                        var0.size = var4;
                        var3 = var3.icon;
                        var0.icon = var3;
                        var3 = arg0;
                        var0.canAnimate = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var5.value = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasFeature';
        var5.key = var7;
        var7 = function arg0() {
            var0 = this;
            var2 = var0.features;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isDiscoverable';
        var5.key = var7;
        var7 = function() {
            var2 = this;
            var1 = var2.hasFeature;
            var0 = _closure1_slot10;
            var0 = var0.DISCOVERABLE;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.value = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getGuildFromEmojiId';
        var5.key = var7;
        var7 = _closure1_slot8;
        var0 = function*(arg0) { // Environment: var6
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59895: for (var _fun59895_ip = 0;;) switch (_fun59895_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59895_ip = 86;
                            continue _fun59895
                        }
                    case 7:
                        var2 = _closure1_slot12;
                        var4 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 28);
                    case 26:
                        return var1;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59895_ip = 83;
                            continue _fun59895
                        }
                    case 34:
                        var5 = null;
                        var6 = var5 != var1;
                        var2 = null;
                        if (!var6) {
                            _fun59895_ip = 80;
                            continue _fun59895
                        }
                    case 45:
                        var6 = var5 == var1;
                        var4 = undefined;
                        if (var6) {
                            _fun59895_ip = 59;
                            continue _fun59895
                        }
                    case 54:
                        var4 = var1.type;
                    case 59:
                        var3 = _closure1_slot11;
                        var3 = var3.GUILD;
                        var2 = null;
                        if (!(var4 === var3)) {
                            _fun59895_ip = 80;
                            continue _fun59895
                        }
                    case 75:
                        var2 = var1.guild;
                    case 80:
                        return var2;
                    case 83:
                        return var1;
                    case 86:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var7.bind(var3)(var0);
        var _closure2_slot0 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var5.value = var0;
        var0 = new Array(6);
        var0[0] = var5;
        var5 = {};
        var7 = '_mapCommon';
        var5.key = var7;
        var7 = function arg0() {
            var1 = arg0;
            var0 = {};
            var2 = var1.id;
            var0.id = var2;
            var2 = var1.name;
            var0.name = var2;
            var2 = var1.icon;
            var0.icon = var2;
            var2 = var1.description;
            var0.description = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.toSetInplace;
            var1 = var1.features;
            var1 = var2.bind(var3)(var1);
            var0.features = var1;
            return var0;
        };
        var5.value = var7;
        var0[1] = var5;
        var5 = {};
        var7 = 'createFromGuildRecord';
        var5.key = var7;
        var7 = function arg0() {
            var1 = arg0;
            var2 = _closure2_slot1;
            var0 = {};
            var3 = var2._mapCommon;
            var5 = var3.bind(var2)(var1);
            var6 = var0;
            var3 = copyDataProperties(var6, var5);
            var4 = var1.premiumTier;
            var3 = 'premiumTier';
            var0[var3] = var4;
            var3 = var1.premiumSubscriberCount;
            var1 = 'premiumSubscriberCount';
            var0[var1] = var3;
            var3 = null;
            var1 = 'presenceCount';
            var0[var1] = var3;
            var1 = 'memberCount';
            var0[var1] = var3;
            var1 = 'emojis';
            var0[var1] = var3;
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
        var5.value = var7;
        var0[2] = var5;
        var5 = {};
        var7 = 'createFromDiscoverableGuild';
        var5.key = var7;
        var7 = function arg0() {
            var1 = arg0;
            var2 = _closure2_slot1;
            var0 = {};
            var3 = var2._mapCommon;
            var5 = var3.bind(var2)(var1);
            var6 = var0;
            var3 = copyDataProperties(var6, var5);
            var4 = null;
            var3 = 'premiumTier';
            var0[var3] = var4;
            var4 = var1.premiumSubscriptionCount;
            var3 = 'premiumSubscriberCount';
            var0[var3] = var4;
            var4 = var1.presenceCount;
            var3 = 'presenceCount';
            var0[var3] = var4;
            var4 = var1.memberCount;
            var3 = 'memberCount';
            var0[var3] = var4;
            var3 = var1.emojis;
            var1 = 'emojis';
            var0[var1] = var3;
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
        var5.value = var7;
        var0[3] = var5;
        var5 = {};
        var7 = 'createFromServer';
        var5.key = var7;
        var7 = function arg0() {
            var1 = arg0;
            var2 = _closure2_slot1;
            var0 = {};
            var3 = var2._mapCommon;
            var5 = var3.bind(var2)(var1);
            var6 = var0;
            var3 = copyDataProperties(var6, var5);
            var4 = var1.premium_tier;
            var3 = 'premiumTier';
            var0[var3] = var4;
            var4 = var1.premium_subscription_count;
            var3 = 'premiumSubscriberCount';
            var0[var3] = var4;
            var4 = var1.approximate_presence_count;
            var3 = 'presenceCount';
            var0[var3] = var4;
            var4 = var1.approximate_member_count;
            var3 = 'memberCount';
            var0[var3] = var4;
            var3 = var1.emojis;
            var1 = 'emojis';
            var0[var1] = var3;
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
        var5.value = var7;
        var0[4] = var5;
        var5 = {};
        var7 = 'createFromGuildType';
        var5.key = var7;
        var6 = function arg0() {
            _fun59901: for (var _fun59901_ip = 0;;) switch (_fun59901_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure2_slot1;
                    var1 = var4 instanceof var0;
                    var0 = var4;
                    if (var1) {
                        _fun59901_ip = 92;
                        continue _fun59901
                    }
                case 20:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var1 = var3.isGuildRecord;
                    var1 = var1.bind(var3)(var4);
                    var3 = _closure2_slot1;
                    if (var1) {
                        _fun59901_ip = 78;
                        continue _fun59901
                    }
                case 63:
                    var1 = var3.createFromDiscoverableGuild;
                    var1 = var1.bind(var3)(var4);
                    _fun59901_ip = 89;
                    continue _fun59901;
                case 78:
                    var2 = var3.createFromGuildRecord;
                    var1 = var2.bind(var3)(var4);
                case 89:
                    var0 = var1;
                case 92:
                    return var0;
            }
        };
        var5.value = var6;
        var0[5] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var3 = var1.bind(var0)(var9);
    var _closure1_slot13 = var3;
    var1 = function(arg0) { // Environment: var6
        var4 = function arg0() {
            var1 = arg0;
            var4 = this;
            var5 = _closure1_slot3;
            var3 = _closure2_slot0;
            var2 = undefined;
            var5 = var5.bind(var2)(var4, var3);
            var0 = _closure1_slot15;
            var0 = var0.bind(var2)(var4, var3);
            var2 = var1.id;
            var0.id = var2;
            var1 = var1.name;
            var0.name = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var0 = {};
        var5 = 'createFromServer';
        var0.key = var5;
        var1 = function arg0() {
            var1 = arg0;
            var2 = _closure2_slot0;
            var0 = {};
            var3 = var1.id;
            var0.id = var3;
            var1 = var1.name;
            var0.name = var1;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var5 = var1;
            var4 = var0;
            var0 = new var5[var2](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var1 = var1.bind(var0)(var9);
    var _closure1_slot14 = var1;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/emojis/records/ExpressionSourceRecord.tsx';
    var6 = var7.bind(var8)(var6);
    var2.EmojiSourceDataTypes = var5;
    var2.getEmojiSourceData = var4;
    var2.ExpressionSourceGuildRecord = var3;
    var2.ExpressionSourceApplicationRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 1629, 660, 507, 1417, 1413, 1598, 2]);