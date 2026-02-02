// stores/ChannelSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun53149: for (var _fun53149_ip = 0;;) switch (_fun53149_ip) {
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
                _fun53149_ip = 74;
                continue _fun53149;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot30 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0, arg1() {
        _fun53152: for (var _fun53152_ip = 0;;) switch (_fun53152_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun53152_ip = 46;
                    continue _fun53152
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun53152_ip = 55;
                    continue _fun53152
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun53152_ip = 343;
                    continue _fun53152
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun53152_ip = 323;
                    continue _fun53152
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun53152_ip = 283;
                    continue _fun53152
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun53152_ip = 270;
                    continue _fun53152
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
                    _fun53152_ip = 163;
                    continue _fun53152
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun53152_ip = 179;
                    continue _fun53152
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun53152_ip = 249;
                    continue _fun53152
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun53152_ip = 249;
                    continue _fun53152
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun53152_ip = 234;
                    continue _fun53152
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun53152_ip = 247;
                    continue _fun53152
                }
            case 234:
                var8 = _closure1_slot32;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun53152_ip = 265;
                continue _fun53152;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun53152_ip = 283;
                continue _fun53152;
            case 270:
                var6 = _closure1_slot32;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun53152_ip = 323;
                    continue _fun53152
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
                    _fun53152_ip = 330;
                    continue _fun53152
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun53153: for (var _fun53153_ip = 0;;) switch (_fun53153_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun53153_ip = 56;
                                continue _fun53153
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
                            _fun53153_ip = 67;
                            continue _fun53153;
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
    var _closure1_slot31 = var0;
    var0 = function arg0, arg1() {
        _fun53154: for (var _fun53154_ip = 0;;) switch (_fun53154_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun53154_ip = 23;
                    continue _fun53154
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun53154_ip = 33;
                    continue _fun53154
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
                    _fun53154_ip = 70;
                    continue _fun53154
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun53154_ip = 55;
                    continue _fun53154
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var6 = function arg0() {
        _fun53155: for (var _fun53155_ip = 0;;) switch (_fun53155_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.section;
                var _closure1_slot15 = var2;
                var1 = var1.subsection;
                var _closure1_slot16 = var1;
                var2 = _closure1_slot18;
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun53155_ip = 58;
                    continue _fun53155
                }
            case 40:
                var3 = _closure1_slot15;
                var2 = _closure1_slot12;
                var2 = var2.INSTANT_INVITES;
                var1 = var3 === var2;
            case 58:
                if (!var1) {
                    _fun53155_ip = 165;
                    continue _fun53155
                }
            case 61:
                var1 = true;
                _closure1_slot24 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {
                    'url': null,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var6 = _closure1_slot13;
                var5 = var6.INSTANT_INVITES;
                var4 = _closure1_slot18;
                var4 = var4.id;
                var4 = var5.bind(var6)(var4);
                var1.url = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var1 = false;
                    _closure1_slot24 = var1;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'CHANNEL_SETTINGS_LOADED_INVITES';
                    var1.type = var4;
                    var4 = arg0;
                    var4 = var4.body;
                    var1.invites = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = function() { // Environment: var0
                    var0 = false;
                    _closure1_slot24 = var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
            case 165:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot33 = var6;
    var10 = function() {
        var0 = false;
        _closure1_slot25 = var0;
        var0 = _closure1_slot14;
        var0 = var0.CLOSED;
        _closure1_slot21 = var0;
        var0 = null;
        _closure1_slot15 = var0;
        var _closure1_slot17 = var0;
        var _closure1_slot18 = var0;
        var _closure1_slot19 = var0;
        var0 = {};
        _closure1_slot23 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot34 = var10;
    var0 = function arg0() {
        _fun53159: for (var _fun53159_ip = 0;;) switch (_fun53159_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot9;
                var0 = {};
                var4 = var1.code;
                var0.code = var4;
                var4 = var1.temporary;
                var0.temporary = var4;
                var4 = var1.revoked;
                var0.revoked = var4;
                var5 = var1.inviter;
                var4 = null;
                var6 = var4 != var5;
                var5 = null;
                if (!var6) {
                    _fun53159_ip = 90;
                    continue _fun53159
                }
            case 60:
                var8 = _closure1_slot10;
                var9 = var1.inviter;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var10 = var7;
                var6 = new var10[var8](var9, var8);
                var5 = var6 instanceof Object ? var6 : var7;
            case 90:
                var0.inviter = var5;
                var7 = _closure1_slot8;
                var6 = var1.channel;
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var0.channel = var6;
                var6 = var1.guild;
                var6 = var4 != var6;
                var4 = null;
                if (!var6) {
                    _fun53159_ip = 165;
                    continue _fun53159
                }
            case 129:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 13;
                var6 = var8[var6];
                var8 = var7.bind(var5)(var6);
                var7 = var8.fromInviteGuild;
                var6 = var1.guild;
                var4 = var7.bind(var8)(var6);
            case 165:
                var0.guild = var4;
                var4 = var1.uses;
                var0.uses = var4;
                var4 = var1.max_uses;
                var0.maxUses = var4;
                var4 = var1.max_age;
                var0.maxAge = var4;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 14;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var1.created_at;
                var3 = var4.bind(var5)(var3);
                var0.createdAt = var3;
                var1 = var1.type;
                var0.type = var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var1;
                var9 = var0;
                var0 = new var10[var2](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        _fun53160: for (var _fun53160_ip = 0;;) switch (_fun53160_ip) {
            case 0:
                var6 = arg0;
                var0 = _closure1_slot17;
                var4 = null;
                var1 = var4 == var0;
                var0 = false;
                if (var1) {
                    _fun53160_ip = 226;
                    continue _fun53160
                }
            case 24:
                var1 = _closure1_slot17;
                var1 = var1.id;
                var0 = false;
                if (!(var1 === var6)) {
                    _fun53160_ip = 226;
                    continue _fun53160
                }
            case 42:
                var2 = _closure1_slot17;
                var1 = _closure1_slot18;
                if (!(var2 !== var1)) {
                    _fun53160_ip = 165;
                    continue _fun53160
                }
            case 54:
                var2 = _closure1_slot11;
                var1 = var2.getChannel;
                var1 = var1.bind(var2)(var6);
                var2 = var4 == var1;
                var0 = false;
                if (var2) {
                    _fun53160_ip = 226;
                    continue _fun53160
                }
            case 80:
                _closure1_slot17 = var1;
                var1 = _closure1_slot18;
                var2 = var4 != var1;
                var0 = true;
                if (!var2) {
                    _fun53160_ip = 226;
                    continue _fun53160
                }
            case 100:
                var9 = _closure1_slot18;
                var8 = var9.set;
                var2 = _closure1_slot17;
                var7 = var2.permissionOverwrites;
                var2 = 'permissionOverwrites';
                var2 = var8.bind(var9)(var2, var7);
                _closure1_slot18 = var2;
                var8 = _closure1_slot11;
                var7 = var8.getChannel;
                var2 = _closure1_slot18;
                var2 = var2.parent_id;
                var2 = var7.bind(var8)(var2);
                _closure1_slot19 = var2;
                var0 = true;
                _fun53160_ip = 226;
                continue _fun53160;
            case 165:
                var2 = _closure1_slot11;
                var1 = var2.getChannel;
                var1 = var1.bind(var2)(var6);
                var2 = var4 == var1;
                var0 = false;
                if (var2) {
                    _fun53160_ip = 226;
                    continue _fun53160
                }
            case 188:
                _closure1_slot17 = var1;
                _closure1_slot18 = var1;
                var5 = _closure1_slot11;
                var2 = var5.getChannel;
                var1 = _closure1_slot18;
                var1 = var1.parent_id;
                var1 = var2.bind(var5)(var1);
                _closure1_slot19 = var1;
                var0 = true;
            case 226:
                var1 = !var0;
                if (!var0) {
                    _fun53160_ip = 240;
                    continue _fun53160
                }
            case 232:
                var0 = _closure1_slot18;
                var1 = var4 == var0;
            case 240:
                var0 = !var1;
                if (var1) {
                    _fun53160_ip = 304;
                    continue _fun53160
                }
            case 246:
                var1 = _closure1_slot20;
                var2 = var4 != var1;
                if (!var2) {
                    _fun53160_ip = 279;
                    continue _fun53160
                }
            case 257:
                var1 = _closure1_slot18;
                var5 = var1.permissionOverwrites;
                var1 = _closure1_slot20;
                var1 = var5[var1];
                var2 = var4 == var1;
            case 279:
                var0 = true;
                if (!var2) {
                    _fun53160_ip = 304;
                    continue _fun53160
                }
            case 284:
                var4 = _closure1_slot18;
                var2 = var4.getGuildId;
                var2 = var2.bind(var4)();
                var _closure1_slot20 = var2;
                var0 = true;
            case 304:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot36;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var0 = global;
    var11 = var0.Object;
    var8 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.createChannelRecordFromInvite;
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.ChannelSettingsSections;
    var _closure1_slot12 = var8;
    var8 = var1.Endpoints;
    var _closure1_slot13 = var8;
    var1 = var1.FormStates;
    var _closure1_slot14 = var1;
    var1 = var1.CLOSED;
    var _closure1_slot21 = var1;
    var1 = {};
    var _closure1_slot22 = var1;
    var1 = {};
    var _closure1_slot23 = var1;
    var1 = false;
    var _closure1_slot24 = var1;
    var _closure1_slot25 = var1;
    var1 = null;
    var _closure1_slot26 = var1;
    var1 = ['name', 'type', 'topic_', 'bitrate_', 'userLimit_', 'nsfw_', 'flags_', 'rateLimitPerUser_', 'defaultThreadRateLimitPerUser', 'defaultAutoArchiveDuration', 'template', 'defaultReactionEmoji', 'rtcRegion', 'videoQualityMode', 'threadMetadata', 'banner', 'availableTags', 'defaultSortOrder', 'defaultForumLayout', 'defaultTagSetting', 'iconEmoji', 'themeColor'];
    var _closure1_slot27 = var1;
    var1 = 12;
    var1 = var5[var1];
    var12 = var7.bind(var0)(var1);
    var11 = var12.debounce;
    var8 = function() { // Environment: var3
        _fun53162: for (var _fun53162_ip = 0;;) switch (_fun53162_ip) {
            case 0:
                var2 = _closure1_slot18;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun53162_ip = 123;
                    continue _fun53162
                }
            case 15:
                var2 = _closure1_slot17;
                if (!(var3 != var2)) {
                    _fun53162_ip = 123;
                    continue _fun53162
                }
            case 23:
                var3 = _closure1_slot18;
                var2 = var3.toJS;
                var2 = var2.bind(var3)();
                var _closure2_slot0 = var2;
                var3 = _closure1_slot17;
                var2 = var3.toJS;
                var2 = var2.bind(var3)();
                var _closure2_slot1 = var2;
                var3 = _closure1_slot27;
                var2 = var3.every;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = _closure2_slot0;
                    var1 = var1[var2];
                    var0 = _closure2_slot1;
                    var0 = var0[var2];
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun53162_ip = 94;
                    continue _fun53162
                }
            case 82:
                var3 = _closure1_slot18;
                var2 = _closure1_slot17;
                var1 = var3 !== var2;
            case 94:
                if (!var1) {
                    _fun53162_ip = 119;
                    continue _fun53162
                }
            case 97:
                var1 = _closure1_slot17;
                _closure1_slot18 = var1;
                var1 = _closure1_slot29;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
            case 119:
                var0 = undefined;
                return var0;
            case 123:
                var0 = false;
                return var0;
        }
    };
    var1 = 500;
    var1 = var11.bind(var12)(var8, var1);
    var _closure1_slot28 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var8 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun53165: for (var _fun53165_ip = 0;;) switch (_fun53165_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot30;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun53165_ip = 69;
                        continue _fun53165
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun53165_ip = 105;
                    continue _fun53165;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot11;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasChanges';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot18;
            var0 = _closure1_slot17;
            var0 = var1 !== var0;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isOpen';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSection';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getInvites';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = _closure1_slot23;
            var0.invites = var2;
            var1 = _closure1_slot24;
            var0.loading = var1;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
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
        var0[5] = var4;
        var4 = {};
        var6 = 'getChannel';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getFormState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getCategory';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getProps';
        var4.key = var6;
        var5 = function() {
            var3 = this;
            var0 = {};
            var4 = _closure1_slot21;
            var2 = _closure1_slot14;
            var2 = var2.SUBMITTING;
            var2 = var4 === var2;
            var0.submitting = var2;
            var2 = _closure1_slot22;
            var0.errors = var2;
            var2 = _closure1_slot18;
            var0.channel = var2;
            var2 = _closure1_slot15;
            var0.section = var2;
            var2 = _closure1_slot16;
            var0.subsection = var2;
            var2 = _closure1_slot23;
            var0.invites = var2;
            var2 = _closure1_slot20;
            var0.selectedOverwriteId = var2;
            var2 = var3.hasChanges;
            var2 = var2.bind(var3)();
            var0.hasChanges = var2;
            var1 = _closure1_slot26;
            var0.analyticsLocation = var1;
            return var0;
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var8);
    var1 = 'ChannelSettingsStore';
    var8.displayName = var1;
    var1 = 11;
    var1 = var5[var1];
    var15 = var7.bind(var0)(var1);
    var1 = {};
    var11 = function arg0() {
        _fun53176: for (var _fun53176_ip = 0;;) switch (_fun53176_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot11;
                var3 = var4.getChannel;
                var1 = var2.channelId;
                var1 = var3.bind(var4)(var1);
                var5 = null;
                if (!(var5 != var1)) {
                    _fun53176_ip = 297;
                    continue _fun53176
                }
            case 34:
                var3 = _closure1_slot14;
                var3 = var3.OPEN;
                _closure1_slot21 = var3;
                _closure1_slot17 = var1;
                _closure1_slot18 = var1;
                var1 = 'location';
                var3 = var1 in var2;
                var1 = null;
                if (!var3) {
                    _fun53176_ip = 88;
                    continue _fun53176
                }
            case 69:
                var3 = var2.location;
                var3 = var5 != var3;
                var1 = null;
                if (!var3) {
                    _fun53176_ip = 88;
                    continue _fun53176
                }
            case 83:
                var1 = var2.location;
            case 88:
                _closure1_slot26 = var1;
                var1 = 'subsection';
                var3 = var1 in var2;
                var1 = null;
                if (!var3) {
                    _fun53176_ip = 111;
                    continue _fun53176
                }
            case 105:
                var1 = var2.subsection;
            case 111:
                _closure1_slot16 = var1;
                var1 = _closure1_slot18;
                if (!(var5 != var1)) {
                    _fun53176_ip = 160;
                    continue _fun53176
                }
            case 123:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var2 = _closure1_slot18;
                var1 = var2.isNSFW;
                var2 = var1.bind(var2)();
                var1 = 'nsfw';
                var1 = var3.bind(var4)(var1, var2);
                _closure1_slot18 = var1;
            case 160:
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure1_slot18;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                _closure1_slot19 = var1;
                var2 = _closure1_slot18;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                _closure1_slot20 = var1;
                var2 = _closure1_slot18;
                var1 = var2.isModeratorReportChannel;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot12;
                if (var1) {
                    _fun53176_ip = 235;
                    continue _fun53176
                }
            case 227:
                var1 = var2.OVERVIEW;
                _fun53176_ip = 241;
                continue _fun53176;
            case 235:
                var1 = var2.PERMISSIONS;
            case 241:
                var2 = {};
                _closure1_slot22 = var2;
                var3 = _closure1_slot33;
                var2 = {};
                var4 = 'CHANNEL_SETTINGS_SET_SECTION';
                var2.type = var4;
                var4 = _closure1_slot15;
                if (!(var5 != var4)) {
                    _fun53176_ip = 273;
                    continue _fun53176
                }
            case 269:
                var1 = _closure1_slot15;
            case 273:
                var2.section = var1;
                var1 = _closure1_slot16;
                var2.subsection = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = true;
                return var1;
            case 297:
                var1 = _closure1_slot34;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.CHANNEL_SETTINGS_INIT = var11;
    var11 = function() {
        var0 = _closure1_slot14;
        var0 = var0.SUBMITTING;
        _closure1_slot21 = var0;
        var0 = {};
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CHANNEL_SETTINGS_SUBMIT = var11;
    var11 = function() {
        var0 = _closure1_slot18;
        _closure1_slot17 = var0;
        var0 = _closure1_slot14;
        var0 = var0.OPEN;
        _closure1_slot21 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CHANNEL_SETTINGS_SUBMIT_SUCCESS = var11;
    var11 = function arg0() {
        _fun53179: for (var _fun53179_ip = 0;;) switch (_fun53179_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var3 = _closure1_slot14;
                var3 = var3.OPEN;
                _closure1_slot21 = var3;
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var2 = var2.errors;
                var5 = null;
                if (!(var5 == var2)) {
                    _fun53179_ip = 53;
                    continue _fun53179
                }
            case 51:
                var2 = {};
            case 53:
                var4 = var3.bind(var4)(var2);
                var3 = var4.reduce;
                var2 = function(arg0, arg1) { // Environment: var0
                    _fun53180: for (var _fun53180_ip = 0;;) switch (_fun53180_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var1 = _closure2_slot0;
                            var1 = var1.errors;
                            var4 = var1[var2];
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var1 = var3.isArray;
                            var1 = var1.bind(var3)(var4);
                            if (var1) {
                                _fun53180_ip = 67;
                                continue _fun53180
                            }
                        case 61:
                            var0[var2] = var4;
                            _fun53180_ip = 85;
                            continue _fun53180;
                        case 67:
                            var3 = var4.join;
                            var1 = '\n';
                            var1 = var3.bind(var4)(var1);
                            var0[var2] = var1;
                        case 85:
                            return var0;
                    }
                };
                var0 = {};
                var0 = var3.bind(var4)(var2, var0);
                _closure1_slot22 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.CHANNEL_SETTINGS_SUBMIT_FAILURE = var11;
    var1.CHANNEL_SETTINGS_CLOSE = var10;
    var1.CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS = var9;
    var1.CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.overwriteId;
        _closure1_slot20 = var1;
        var0 = undefined;
        return var0;
    };
    var1.CHANNEL_SETTINGS_OVERWRITE_SELECT = var9;
    var9 = function arg0() {
        _fun53182: for (var _fun53182_ip = 0;;) switch (_fun53182_ip) {
            case 0:
                var0 = arg0;
                var27 = var0.name;
                var6 = var0.channelType;
                var26 = var0.topic;
                var25 = var0.bitrate;
                var24 = var0.userLimit;
                var23 = var0.nsfw;
                var22 = var0.flags;
                var21 = var0.rateLimitPerUser;
                var17 = var0.defaultThreadRateLimitPerUser;
                var20 = var0.autoArchiveDuration;
                var19 = var0.locked;
                var18 = var0.invitable;
                var16 = var0.defaultAutoArchiveDuration;
                var15 = var0.template;
                var12 = var0.defaultReactionEmoji;
                var14 = var0.rtcRegion;
                var13 = var0.videoQualityMode;
                var11 = var0.availableTags;
                var10 = var0.defaultSortOrder;
                var8 = var0.defaultForumLayout;
                var9 = var0.defaultTagSetting;
                var7 = var0.iconEmoji;
                var5 = var0.themeColor;
                var0 = _closure1_slot18;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun53182_ip = 872;
                    continue _fun53182
                }
            case 155:
                if (!(var2 != var27)) {
                    _fun53182_ip = 182;
                    continue _fun53182
                }
            case 159:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'name';
                var0 = var3.bind(var4)(var0, var27);
                _closure1_slot18 = var0;
            case 182:
                if (!(var2 != var26)) {
                    _fun53182_ip = 209;
                    continue _fun53182
                }
            case 186:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'topic';
                var0 = var3.bind(var4)(var0, var26);
                _closure1_slot18 = var0;
            case 209:
                if (!(var2 != var25)) {
                    _fun53182_ip = 236;
                    continue _fun53182
                }
            case 213:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'bitrate';
                var0 = var3.bind(var4)(var0, var25);
                _closure1_slot18 = var0;
            case 236:
                if (!(var2 != var24)) {
                    _fun53182_ip = 263;
                    continue _fun53182
                }
            case 240:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'userLimit';
                var0 = var3.bind(var4)(var0, var24);
                _closure1_slot18 = var0;
            case 263:
                if (!(var2 != var23)) {
                    _fun53182_ip = 290;
                    continue _fun53182
                }
            case 267:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'nsfw';
                var0 = var3.bind(var4)(var0, var23);
                _closure1_slot18 = var0;
            case 290:
                if (!(var2 != var22)) {
                    _fun53182_ip = 317;
                    continue _fun53182
                }
            case 294:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'flags';
                var0 = var3.bind(var4)(var0, var22);
                _closure1_slot18 = var0;
            case 317:
                if (!(var2 != var21)) {
                    _fun53182_ip = 344;
                    continue _fun53182
                }
            case 321:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'rateLimitPerUser';
                var0 = var3.bind(var4)(var0, var21);
                _closure1_slot18 = var0;
            case 344:
                if (!(var2 != var17)) {
                    _fun53182_ip = 371;
                    continue _fun53182
                }
            case 348:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'defaultThreadRateLimitPerUser';
                var0 = var3.bind(var4)(var0, var17);
                _closure1_slot18 = var0;
            case 371:
                if (!(var2 != var20)) {
                    _fun53182_ip = 426;
                    continue _fun53182
                }
            case 375:
                var17 = _closure1_slot18;
                var4 = var17.set;
                var3 = {};
                var0 = _closure1_slot18;
                var28 = var0.threadMetadata;
                var29 = var3;
                var0 = copyDataProperties(var29, var28);
                var0 = 'autoArchiveDuration';
                var3[var0] = var20;
                var0 = 'threadMetadata';
                var0 = var4.bind(var17)(var0, var3);
                _closure1_slot18 = var0;
            case 426:
                if (!(var2 != var19)) {
                    _fun53182_ip = 481;
                    continue _fun53182
                }
            case 430:
                var17 = _closure1_slot18;
                var4 = var17.set;
                var3 = {};
                var0 = _closure1_slot18;
                var28 = var0.threadMetadata;
                var29 = var3;
                var0 = copyDataProperties(var29, var28);
                var0 = 'locked';
                var3[var0] = var19;
                var0 = 'threadMetadata';
                var0 = var4.bind(var17)(var0, var3);
                _closure1_slot18 = var0;
            case 481:
                if (!(var2 != var18)) {
                    _fun53182_ip = 536;
                    continue _fun53182
                }
            case 485:
                var17 = _closure1_slot18;
                var4 = var17.set;
                var3 = {};
                var0 = _closure1_slot18;
                var28 = var0.threadMetadata;
                var29 = var3;
                var0 = copyDataProperties(var29, var28);
                var0 = 'invitable';
                var3[var0] = var18;
                var0 = 'threadMetadata';
                var0 = var4.bind(var17)(var0, var3);
                _closure1_slot18 = var0;
            case 536:
                if (!(var2 != var16)) {
                    _fun53182_ip = 563;
                    continue _fun53182
                }
            case 540:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'defaultAutoArchiveDuration';
                var0 = var3.bind(var4)(var0, var16);
                _closure1_slot18 = var0;
            case 563:
                if (!(var2 != var15)) {
                    _fun53182_ip = 590;
                    continue _fun53182
                }
            case 567:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'template';
                var0 = var3.bind(var4)(var0, var15);
                _closure1_slot18 = var0;
            case 590:
                if (!(var2 != var6)) {
                    _fun53182_ip = 617;
                    continue _fun53182
                }
            case 594:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var0 = 'type';
                var0 = var3.bind(var4)(var0, var6);
                _closure1_slot18 = var0;
            case 617:
                var0 = undefined;
                if (!(var0 !== var14)) {
                    _fun53182_ip = 646;
                    continue _fun53182
                }
            case 623:
                var6 = _closure1_slot18;
                var4 = var6.set;
                var3 = 'rtcRegion';
                var3 = var4.bind(var6)(var3, var14);
                _closure1_slot18 = var3;
            case 646:
                if (!(var2 != var13)) {
                    _fun53182_ip = 673;
                    continue _fun53182
                }
            case 650:
                var6 = _closure1_slot18;
                var4 = var6.set;
                var3 = 'videoQualityMode';
                var3 = var4.bind(var6)(var3, var13);
                _closure1_slot18 = var3;
            case 673:
                if (!(var0 !== var12)) {
                    _fun53182_ip = 700;
                    continue _fun53182
                }
            case 677:
                var6 = _closure1_slot18;
                var4 = var6.set;
                var3 = 'defaultReactionEmoji';
                var3 = var4.bind(var6)(var3, var12);
                _closure1_slot18 = var3;
            case 700:
                if (!(var2 != var11)) {
                    _fun53182_ip = 727;
                    continue _fun53182
                }
            case 704:
                var6 = _closure1_slot18;
                var4 = var6.set;
                var3 = 'availableTags';
                var3 = var4.bind(var6)(var3, var11);
                _closure1_slot18 = var3;
            case 727:
                if (!(var2 != var10)) {
                    _fun53182_ip = 754;
                    continue _fun53182
                }
            case 731:
                var6 = _closure1_slot18;
                var4 = var6.set;
                var3 = 'defaultSortOrder';
                var3 = var4.bind(var6)(var3, var10);
                _closure1_slot18 = var3;
            case 754:
                if (!(var2 != var9)) {
                    _fun53182_ip = 781;
                    continue _fun53182
                }
            case 758:
                var6 = _closure1_slot18;
                var4 = var6.set;
                var3 = 'defaultTagSetting';
                var3 = var4.bind(var6)(var3, var9);
                _closure1_slot18 = var3;
            case 781:
                if (!(var2 != var8)) {
                    _fun53182_ip = 808;
                    continue _fun53182
                }
            case 785:
                var6 = _closure1_slot18;
                var4 = var6.set;
                var3 = 'defaultForumLayout';
                var3 = var4.bind(var6)(var3, var8);
                _closure1_slot18 = var3;
            case 808:
                if (!(var0 !== var7)) {
                    _fun53182_ip = 835;
                    continue _fun53182
                }
            case 812:
                var6 = _closure1_slot18;
                var4 = var6.set;
                var3 = 'iconEmoji';
                var3 = var4.bind(var6)(var3, var7);
                _closure1_slot18 = var3;
            case 835:
                if (!(var2 != var5)) {
                    _fun53182_ip = 862;
                    continue _fun53182
                }
            case 839:
                var4 = _closure1_slot18;
                var3 = var4.set;
                var2 = 'themeColor';
                var2 = var3.bind(var4)(var2, var5);
                _closure1_slot18 = var2;
            case 862:
                var1 = _closure1_slot28;
                var1 = var1.bind(var0)();
                return var0;
            case 872:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_SETTINGS_UPDATE = var9;
    var1.CHANNEL_SETTINGS_SET_SECTION = var6;
    var6 = function arg0() {
        var0 = {};
        _closure1_slot23 = var0;
        var0 = arg0;
        var2 = var0.invites;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var4 = arg0;
            var3 = _closure1_slot23;
            var2 = var4.code;
            var1 = _closure1_slot35;
            var0 = undefined;
            var1 = var1.bind(var0)(var4);
            var3[var2] = var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.CHANNEL_SETTINGS_LOADED_INVITES = var6;
    var6 = function arg0() {
        _fun53185: for (var _fun53185_ip = 0;;) switch (_fun53185_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channels;
                var2 = _closure1_slot18;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun53185_ip = 100;
                    continue _fun53185
                }
            case 22:
                var0 = _closure1_slot31;
                var5 = undefined;
                var4 = var0.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun53185_ip = 98;
                    continue _fun53185
                }
            case 52:
                var7 = _closure1_slot36;
                var1 = var3.value;
                var1 = var1.id;
                var7 = var7.bind(var5)(var1);
                if (var7) {
                    _fun53185_ip = 77;
                    continue _fun53185
                }
            case 74:
                var7 = var2;
            case 77:
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var2 = var7;
                var3 = var8;
                var0 = var2;
                if (!var1) {
                    _fun53185_ip = 52;
                    continue _fun53185
                }
            case 98:
                return var0;
            case 100:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_UPDATES = var6;
    var6 = function arg0() {
        _fun53186: for (var _fun53186_ip = 0;;) switch (_fun53186_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = var0.id;
                var1 = _closure1_slot18;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun53186_ip = 64;
                    continue _fun53186
                }
            case 29:
                var1 = _closure1_slot18;
                var1 = var1.id;
                var1 = var1 === var2;
                if (!var1) {
                    _fun53186_ip = 61;
                    continue _fun53186
                }
            case 45:
                var2 = _closure1_slot14;
                var2 = var2.CLOSED;
                _closure1_slot21 = var2;
                var1 = undefined;
            case 61:
                var0 = var1;
            case 64:
                return var0;
        }
    };
    var1.CHANNEL_DELETE = var6;
    var6 = function arg0() {
        var1 = {};
        var3 = _closure1_slot23;
        var4 = var1;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot23 = var1;
        var0 = arg0;
        var0 = var0.code;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.INSTANT_INVITE_REVOKE_SUCCESS = var6;
    var6 = function arg0() {
        var0 = arg0;
        var2 = {};
        var6 = _closure1_slot23;
        var7 = var2;
        var3 = copyDataProperties(var7, var6);
        var3 = var0.invite;
        var4 = var3.code;
        var5 = _closure1_slot35;
        var3 = var0.invite;
        var0 = undefined;
        var3 = var5.bind(var0)(var3);
        var2[var4] = var3;
        _closure1_slot23 = var2;
        return var0;
    };
    var1.INSTANT_INVITE_CREATE_SUCCESS = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var16 = var6;
    var14 = var1;
    var1 = new var16[var8](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot29 = var1;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/ChannelSettingsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1376, 5864, 1620, 1372, 660, 507, 806, 22, 1598, 3006, 566, 2]);