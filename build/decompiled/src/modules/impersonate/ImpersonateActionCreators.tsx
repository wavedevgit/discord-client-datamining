// modules/impersonate/ImpersonateActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun43213: for (var _fun43213_ip = 0;;) switch (_fun43213_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun43213_ip = 45;
                    continue _fun43213
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun43213_ip = 54;
                    continue _fun43213
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun43213_ip = 342;
                    continue _fun43213
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun43213_ip = 322;
                    continue _fun43213
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun43213_ip = 282;
                    continue _fun43213
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun43213_ip = 269;
                    continue _fun43213
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
                    _fun43213_ip = 162;
                    continue _fun43213
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun43213_ip = 178;
                    continue _fun43213
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun43213_ip = 248;
                    continue _fun43213
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun43213_ip = 248;
                    continue _fun43213
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun43213_ip = 233;
                    continue _fun43213
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun43213_ip = 246;
                    continue _fun43213
                }
            case 233:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun43213_ip = 264;
                continue _fun43213;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun43213_ip = 282;
                continue _fun43213;
            case 269:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun43213_ip = 322;
                    continue _fun43213
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
                    _fun43213_ip = 329;
                    continue _fun43213
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun43214: for (var _fun43214_ip = 0;;) switch (_fun43214_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun43214_ip = 56;
                                continue _fun43214
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
                            _fun43214_ip = 67;
                            continue _fun43214;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun43215: for (var _fun43215_ip = 0;;) switch (_fun43215_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun43215_ip = 23;
                    continue _fun43215
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun43215_ip = 33;
                    continue _fun43215
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
                    _fun43215_ip = 70;
                    continue _fun43215
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun43215_ip = 55;
                    continue _fun43215
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var4 = function(arg0, arg1) { // Original name: updateImpersonating, environment: var1
        _fun43216: for (var _fun43216_ip = 0;;) switch (_fun43216_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var3 = _closure1_slot10;
                var1 = var3.getData;
                var8 = var1.bind(var3)(var2);
                var1 = null;
                var1 = var1 != var8;
                if (!var1) {
                    _fun43216_ip = 47;
                    continue _fun43216
                }
            case 33:
                var4 = var8.type;
                var3 = var7.type;
                var1 = var4 === var3;
            case 47:
                if (!var1) {
                    _fun43216_ip = 281;
                    continue _fun43216
                }
            case 53:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 10;
                var3 = var5[var1];
                var1 = undefined;
                var10 = var4.bind(var1)(var3);
                var9 = var10.track;
                var3 = _closure1_slot13;
                var6 = var3.VIEW_AS_ROLES_SELECTED;
                var3 = {};
                var11 = global;
                var13 = var11.Object;
                var12 = var13.keys;
                var11 = var8.roles;
                var11 = var12.bind(var13)(var11);
                var11 = var11.length;
                var3.num_roles = var11;
                var13 = _closure1_slot0;
                var11 = 11;
                var11 = var5[var11];
                var12 = var13.bind(var1)(var11);
                var11 = var12.collectGuildAnalyticsMetadata;
                var14 = var11.bind(var12)(var2);
                var15 = var3;
                var11 = copyDataProperties(var15, var14);
                var12 = var8.type;
                var11 = 12;
                var11 = var5[var11];
                var11 = var13.bind(var1)(var11);
                var11 = var11.ImpersonateType;
                var11 = var11.NEW_MEMBER;
                var12 = var12 === var11;
                var11 = 'is_viewing_as_member';
                var3[var11] = var12;
                var3 = var9.bind(var10)(var6, var3);
                var3 = 13;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'IMPERSONATE_UPDATE';
                var3.type = var6;
                var3.guildId = var2;
                var6 = {};
                var15 = var6;
                var14 = var8;
                var8 = copyDataProperties(var15, var14);
                var15 = var6;
                var14 = var7;
                var7 = copyDataProperties(var15, var14);
                var3.data = var6;
                var3 = var4.bind(var5)(var3);
                var0 = _closure1_slot18;
                var0 = var0.bind(var1)(var2);
            case 281:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var0 = function(arg0) { // Original name: puntFromSelectedChannelIfInaccessible, environment: var1
        _fun43217: for (var _fun43217_ip = 0;;) switch (_fun43217_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot8;
                var0 = var1.getChannelId;
                var4 = var0.bind(var1)(var5);
                var1 = _closure1_slot3;
                var0 = var1.getChannel;
                var6 = var0.bind(var1)(var4);
                var1 = null;
                if (!(var1 != var4)) {
                    _fun43217_ip = 55;
                    continue _fun43217
                }
            case 41:
                var2 = _closure1_slot14;
                var0 = undefined;
                var0 = var2.bind(var0)(var4);
                if (var0) {
                    _fun43217_ip = 157;
                    continue _fun43217
                }
            case 55:
                var4 = _closure1_slot7;
                var2 = var4.can;
                var0 = _closure1_slot11;
                var0 = var0.VIEW_CHANNEL;
                var0 = var2.bind(var4)(var0, var6);
                if (var0) {
                    _fun43217_ip = 157;
                    continue _fun43217
                }
            case 84:
                var2 = _closure1_slot4;
                var0 = var2.getDefaultChannel;
                var0 = var0.bind(var2)(var5);
                if (!(var1 != var0)) {
                    _fun43217_ip = 157;
                    continue _fun43217
                }
            case 103:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.transitionTo;
                var4 = _closure1_slot12;
                var3 = var4.CHANNEL;
                var0 = var0.id;
                var0 = var3.bind(var4)(var5, var0);
                var0 = var1.bind(var2)(var0);
            case 157:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var3 = function(arg0, arg1, arg2) { // Original name: updateImpersonatedChannels, environment: var1
        var3 = arg0;
        var7 = arg1;
        var5 = arg2;
        var0 = global;
        var6 = var0.Set;
        var4 = _closure1_slot9;
        var2 = var4.getOptedInChannels;
        var9 = var2.bind(var4)(var3);
        var4 = var6.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var6
            }
        });
        var10 = var4;
        var2 = new var10[var6](var9, var8);
        var4 = var2 instanceof Object ? var2 : var4;
        var _closure2_slot0 = var4;
        var6 = var7.forEach;
        var2 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var1 = var2.add;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var6.bind(var7)(var2);
        var2 = var5.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var5)(var1);
        var2 = _closure1_slot17;
        var1 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 12;
        var5 = var5[var0];
        var0 = undefined;
        var5 = var6.bind(var0)(var5);
        var5 = var5.ImpersonateType;
        var5 = var5.NEW_MEMBER;
        var1.type = var5;
        var1.optInChannels = var4;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot19 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.Permissions;
    var _closure1_slot11 = var8;
    var8 = var5.Routes;
    var _closure1_slot12 = var8;
    var5 = var5.AnalyticEvents;
    var _closure1_slot13 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.isStaticChannelRoute;
    var _closure1_slot14 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/impersonate/ImpersonateActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0, arg1) { // Original name: startImpersonating, environment: var1
        var2 = arg0;
        var6 = arg1;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 10;
        var3 = var5[var0];
        var0 = undefined;
        var9 = var4.bind(var0)(var3);
        var8 = var9.track;
        var3 = _closure1_slot13;
        var7 = var3.VIEW_AS_ROLES_SELECTED;
        var3 = {};
        var10 = global;
        var12 = var10.Object;
        var11 = var12.keys;
        var10 = var6.roles;
        var10 = var11.bind(var12)(var10);
        var10 = var10.length;
        var3.num_roles = var10;
        var12 = _closure1_slot0;
        var10 = 11;
        var10 = var5[var10];
        var11 = var12.bind(var0)(var10);
        var10 = var11.collectGuildAnalyticsMetadata;
        var13 = var10.bind(var11)(var2);
        var14 = var3;
        var10 = copyDataProperties(var14, var13);
        var11 = var6.type;
        var10 = 12;
        var10 = var5[var10];
        var10 = var12.bind(var0)(var10);
        var10 = var10.ImpersonateType;
        var10 = var10.NEW_MEMBER;
        var11 = var11 === var10;
        var10 = 'is_viewing_as_member';
        var3[var10] = var11;
        var3 = var8.bind(var9)(var7, var3);
        var3 = 13;
        var3 = var5[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.dispatch;
        var3 = {};
        var7 = 'IMPERSONATE_UPDATE';
        var3.type = var7;
        var3.guildId = var2;
        var3.data = var6;
        var3 = var4.bind(var5)(var3);
        var1 = _closure1_slot18;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var2.startImpersonating = var5;
    var2.updateImpersonating = var4;
    var4 = function(arg0) { // Original name: stopImpersonating, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'IMPERSONATE_STOP';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.stopImpersonating = var4;
    var2.updateImpersonatedChannels = var3;
    var3 = function(arg0, arg1) { // Original name: updateImpersonatedRoles, environment: var1
        _fun43223: for (var _fun43223_ip = 0;;) switch (_fun43223_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var1 = function(arg0, arg1) { // Original name: optIntoPrivateChannelsForGrantedRolesForPreview, environment: var0
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var3 = _closure1_slot4;
                    var2 = var3.getSelectableChannelIds;
                    var8 = var2.bind(var3)(var6);
                    var2 = new Array(0);
                    var7 = 0;
                    var9 = var2;
                    var7 = arraySpread(var9, var8, var7);
                    var5 = _closure1_slot4;
                    var3 = var5.getVocalChannelIds;
                    var8 = var3.bind(var5)(var6);
                    var9 = var2;
                    var3 = arraySpread(var9, var8, var7);
                    var _closure3_slot1 = var2;
                    var2 = global;
                    var4 = var2.Array;
                    var3 = var4.from;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var _closure3_slot2 = var2;
                    var2 = _closure1_slot4;
                    var1 = var2.addConditionalChangeListener;
                    var0 = function() { // Environment: var0
                        _fun43225: for (var _fun43225_ip = 0;;) switch (_fun43225_ip) {
                            case 0:
                                var5 = _closure1_slot5;
                                var4 = var5.getSelfMember;
                                var3 = _closure3_slot0;
                                var4 = var4.bind(var5)(var3);
                                var _closure4_slot0 = var4;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun43225_ip = 172;
                                    continue _fun43225
                                }
                            case 40:
                                var5 = _closure3_slot2;
                                var4 = var5.some;
                                var3 = function(arg0) { // Environment: var2
                                    var0 = _closure4_slot0;
                                    var2 = var0.roles;
                                    var1 = var2.includes;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = !var0;
                                    return var0;
                                };
                                var3 = var4.bind(var5)(var3);
                                if (var3) {
                                    _fun43225_ip = 168;
                                    continue _fun43225
                                }
                            case 63:
                                var4 = _closure1_slot4;
                                var3 = var4.getSelectableChannelIds;
                                var8 = _closure3_slot0;
                                var10 = var3.bind(var4)(var8);
                                var5 = new Array(0);
                                var3 = 0;
                                var11 = var5;
                                var9 = 0;
                                var9 = arraySpread(var11, var10, var9);
                                var7 = _closure1_slot4;
                                var4 = var7.getVocalChannelIds;
                                var10 = var4.bind(var7)(var8);
                                var11 = var5;
                                var4 = arraySpread(var11, var10, var9);
                                var4 = var5.filter;
                                var2 = function(arg0) { // Environment: var2
                                    var2 = _closure3_slot1;
                                    var1 = var2.includes;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = !var0;
                                    return var0;
                                };
                                var4 = var4.bind(var5)(var2);
                                var2 = var4.length;
                                if (!(var2 > var3)) {
                                    _fun43225_ip = 164;
                                    continue _fun43225
                                }
                            case 143:
                                var3 = _closure1_slot19;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = new Array(0);
                                var0 = var3.bind(var1)(var2, var4, var0);
                            case 164:
                                var0 = false;
                                return var0;
                            case 168:
                                var0 = true;
                                return var0;
                            case 172:
                                var0 = false;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = undefined;
                var1 = var1.bind(var0)(var3, var7);
                var4 = {};
                var2 = _closure1_slot15;
                var6 = _closure1_slot6;
                var1 = var6.getManyRoles;
                var1 = var1.bind(var6)(var3, var7);
                var6 = var2.bind(var0)(var1);
                var2 = var6.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun43223_ip = 92;
                    continue _fun43223
                }
            case 63:
                var7 = var2.value;
                var1 = var7.id;
                var4[var1] = var7;
                var7 = var6.bind(var0)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun43223_ip = 63;
                    continue _fun43223
                }
            case 92:
                var2 = _closure1_slot17;
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 12;
                var5 = var7[var5];
                var5 = var6.bind(var0)(var5);
                var5 = var5.ImpersonateType;
                var5 = var5.NEW_MEMBER;
                var1.type = var5;
                var1.roles = var4;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var2.updateImpersonatedRoles = var3;
    var1 = function(arg0, arg1) { // Original name: updateImpersonatedData, environment: var1
        var3 = _closure1_slot17;
        var2 = {};
        var4 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var4.bind(var0)(var1);
        var1 = var1.ImpersonateType;
        var1 = var1.NEW_MEMBER;
        var2.type = var1;
        var5 = arg1;
        var6 = var2;
        var1 = copyDataProperties(var6, var5);
        var1 = arg0;
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.updateImpersonatedData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1662, 1672, 1665, 3050, 1661, 4260, 1664, 660, 1379, 795, 4259, 1670, 806, 1220, 2]);