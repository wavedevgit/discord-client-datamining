// modules/user_settings/UserSettingsProtoActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun15499: for (var _fun15499_ip = 0;;) switch (_fun15499_ip) {
        case 0:
            var11 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var12 = dependencyMap;
            var _closure1_slot0 = var11;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var12;
            var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
                _fun15500: for (var _fun15500_ip = 0;;) switch (_fun15500_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun15500_ip = 45;
                            continue _fun15500
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 45:
                        if (var1) {
                            _fun15500_ip = 54;
                            continue _fun15500
                        }
                    case 48:
                        var1 = var2["@@iterator"];
                    case 54:
                        if (var1) {
                            _fun15500_ip = 342;
                            continue _fun15500
                        }
                    case 60:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun15500_ip = 322;
                            continue _fun15500
                        }
                    case 85:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun15500_ip = 282;
                            continue _fun15500
                        }
                    case 95:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun15500_ip = 269;
                            continue _fun15500
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
                            _fun15500_ip = 162;
                            continue _fun15500
                        }
                    case 157:
                        var6 = var2.constructor;
                    case 162:
                        var9 = var8;
                        if (!var6) {
                            _fun15500_ip = 178;
                            continue _fun15500
                        }
                    case 168:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 178:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun15500_ip = 248;
                            continue _fun15500
                        }
                    case 186:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun15500_ip = 248;
                            continue _fun15500
                        }
                    case 194:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun15500_ip = 233;
                            continue _fun15500
                        }
                    case 204:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun15500_ip = 246;
                            continue _fun15500
                        }
                    case 233:
                        var8 = _closure1_slot14;
                        var6 = var8.bind(var7)(var2, var7);
                    case 246:
                        _fun15500_ip = 264;
                        continue _fun15500;
                    case 248:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 264:
                        var5 = var6;
                        _fun15500_ip = 282;
                        continue _fun15500;
                    case 269:
                        var6 = _closure1_slot14;
                        var5 = var6.bind(var7)(var2, var7);
                    case 282:
                        var3 = var5;
                        if (var3) {
                            _fun15500_ip = 322;
                            continue _fun15500
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
                            _fun15500_ip = 329;
                            continue _fun15500
                        }
                    case 325:
                        _closure2_slot0 = var3;
                    case 329:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun15501: for (var _fun15501_ip = 0;;) switch (_fun15501_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun15501_ip = 56;
                                        continue _fun15501
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
                                    _fun15501_ip = 67;
                                    continue _fun15501;
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
            var _closure1_slot13 = var0;
            var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
                _fun15502: for (var _fun15502_ip = 0;;) switch (_fun15502_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun15502_ip = 23;
                            continue _fun15502
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun15502_ip = 33;
                            continue _fun15502
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
                            _fun15502_ip = 70;
                            continue _fun15502
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun15502_ip = 55;
                            continue _fun15502
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var4 = function(arg0, arg1, arg2) { // Original name: updateUserGuildSettings, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var4 = _closure1_slot12;
                var3 = var4.updateAsync;
                var2 = 'guilds';
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.mutateUserGuildSettingsInternal;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0, var2, var1);
                    return var0;
                };
                var0 = arg2;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
            var _closure1_slot15 = var4;
            var3 = function() { // Original name: updateRecurringDismissibleContentState, environment: var1
                var0 = undefined;
                var3 = _closure1_slot17;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot16 = var3;
            var0 = function() { // Original name: _updateRecurringDismissibleContentState, environment: var1
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0, arg1) { // Environment: var2
                    var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                        _fun15508: for (var _fun15508_ip = 0;;) switch (_fun15508_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun15508_ip = 78;
                                    continue _fun15508
                                }
                            case 9:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var2 = arg1;
                                var _closure4_slot1 = var2;
                                var5 = _closure1_slot12;
                                var4 = var5.updateAsync;
                                var2 = _closure1_slot8;
                                var3 = var2.INFREQUENT_USER_ACTION;
                                var2 = 'userContent';
                                var1 = function(arg0) { // Environment: var1
                                    var4 = arg0;
                                    var2 = var4.recurringDismissibleContentStates;
                                    var1 = _closure4_slot0;
                                    var0 = {};
                                    var4 = var4.recurringDismissibleContentStates;
                                    var5 = var4[var1];
                                    var6 = var0;
                                    var4 = copyDataProperties(var6, var5);
                                    var5 = _closure4_slot1;
                                    var6 = var0;
                                    var3 = copyDataProperties(var6, var5);
                                    var2[var1] = var0;
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var4.bind(var5)(var2, var1, var3);
                                SaveGenerator(address = 66);
                            case 64:
                                return var1;
                            case 66:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun15508_ip = 75;
                                    continue _fun15508
                                }
                            case 72:
                                return var1;
                            case 75:
                                return var1;
                            case 78:
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
            var0 = function() { // Original name: _updateGuildDismissedContent, environment: var1
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0, arg1, arg2) { // Environment: var2
                    var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                        _fun15512: for (var _fun15512_ip = 0;;) switch (_fun15512_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun15512_ip = 73;
                                    continue _fun15512
                                }
                            case 9:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var2 = arg2;
                                var _closure4_slot1 = var2;
                                var5 = _closure1_slot15;
                                var2 = _closure1_slot8;
                                var4 = var2.INFREQUENT_USER_ACTION;
                                var3 = undefined;
                                var2 = arg1;
                                var1 = function(arg0) { // Environment: var1
                                    var4 = arg0;
                                    var2 = var4.guildDismissibleContentStates;
                                    var1 = _closure4_slot0;
                                    var0 = {};
                                    var4 = var4.guildDismissibleContentStates;
                                    var5 = var4[var1];
                                    var6 = var0;
                                    var4 = copyDataProperties(var6, var5);
                                    var5 = _closure4_slot1;
                                    var6 = var0;
                                    var3 = copyDataProperties(var6, var5);
                                    var2[var1] = var0;
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var5.bind(var3)(var2, var1, var4);
                                SaveGenerator(address = 61);
                            case 59:
                                return var1;
                            case 61:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun15512_ip = 70;
                                    continue _fun15512
                                }
                            case 67:
                                return var1;
                            case 70:
                                return var1;
                            case 73:
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
            var5 = global;
            var9 = var5.Object;
            var8 = var9.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var6);
            var0 = 0;
            var6 = var12[var0];
            var0 = undefined;
            var6 = var7.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var6 = 1;
            var6 = var12[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot4 = var6;
            var6 = 2;
            var6 = var12[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot5 = var6;
            var6 = 3;
            var6 = var12[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot6 = var6;
            var6 = 4;
            var8 = var12[var6];
            var8 = var11.bind(var0)(var8);
            var10 = var8.UserSettingsTypes;
            var _closure1_slot7 = var10;
            var8 = var8.UserSettingsDelay;
            var _closure1_slot8 = var8;
            var8 = 5;
            var8 = var12[var8];
            var8 = var11.bind(var0)(var8);
            var9 = var8.AbortCodes;
            var _closure1_slot9 = var9;
            var9 = var8.Endpoints;
            var _closure1_slot10 = var9;
            var8 = var8.AnalyticEvents;
            var _closure1_slot11 = var8;
            var6 = var12[var6];
            var6 = var11.bind(var0)(var6);
            var9 = var6.UserSettingsDelay;
            var8 = var5.Date;
            var6 = var8.now;
            var6 = var6.bind(var8)();
            var6 = 6;
            var8 = var12[var6];
            var15 = var7.bind(var0)(var8);
            var14 = var15.subscribe;
            var13 = 'CONNECTION_OPEN';
            var8 = function() { // Environment: var1
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var8 = var14.bind(var15)(var13, var8);
            var6 = var12[var6];
            var13 = var7.bind(var0)(var6);
            var8 = var13.subscribe;
            var7 = 'CONNECTION_CLOSED';
            var6 = function() { // Environment: var1
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var6 = var8.bind(var13)(var7, var6);
            var6 = var5.document;
            var7 = 'undefined';
            var6 = typeof var6;
            if (!(var7 !== var6)) {
                _fun15499_ip = 414;
                continue _fun15499
            }
        case 360:
            var13 = var5.document;
            var8 = var13.addEventListener;
            var7 = 'mousedown';
            var6 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var6 = var8.bind(var13)(var7, var6);
            var8 = var5.document;
            var7 = var8.addEventListener;
            var6 = 'keydown';
            var5 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var5 = var7.bind(var8)(var6, var5);
        case 414:
            var5 = function() { // Environment: var1
                var3 = _closure1_slot5;
                var2 = function(arg0, arg1) { // Original name: UserSettingsProtoActionCreators, environment: var5
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot4;
                    var4 = _closure2_slot2;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = arg0;
                    var2.ProtoClass = var4;
                    var4 = arg1;
                    var2.type = var4;
                    var4 = new Array(0);
                    var2.beforeSendCallbacks = var4;
                    var4 = 0;
                    var2.lastSendTime = var4;
                    var4 = _closure1_slot3;
                    var3 = function*() { // Environment: var3
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun15521: for (var _fun15521_ip = 0;;) switch (_fun15521_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun15521_ip = 969;
                                        continue _fun15521
                                    }
                                case 12:
                                    var4 = undefined;
                                    var17 = undefined;
                                    var _closure5_slot0 = var4;
                                    var18 = undefined;
                                    var9 = undefined;
                                    var13 = undefined;
                                    var6 = undefined;
                                    var15 = undefined;
                                    var5 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var3 = 7;
                                    var3 = var7[var3];
                                    var7 = var5.bind(var4)(var3);
                                    var5 = true;
                                    var3 = 'this cannot run in the overlay';
                                    var3 = var7.bind(var4)(var5, var3);
                                    var8 = _closure3_slot0;
                                    var12 = var8.logger;
                                    var10 = var12.log;
                                    var7 = 'Persisting proto';
                                    var7 = var10.bind(var12)(var7);
                                    var7 = var8.getEditInfo;
                                    var7 = var7.bind(var8)();
                                    var7 = var7.editInfo;
                                    var17 = var7;
                                    _closure5_slot0 = var7;
                                    var7 = var7.protoToSave;
                                    var8 = null;
                                    if (!(var8 == var7)) {
                                        _fun15521_ip = 162;
                                        continue _fun15521
                                    }
                                case 131:
                                    var7 = _closure3_slot0;
                                    var12 = var7.logger;
                                    var10 = var12.log;
                                    var7 = 'Not persisting proto because the proto was null';
                                    var7 = var10.bind(var12)(var7);
                                    _fun15521_ip = 836;
                                    continue _fun15521;
                                case 162:
                                    var7 = _closure3_slot0;
                                    var14 = var7.beforeSendCallbacks;
                                    var12 = var14.forEach;
                                    var10 = function(arg0) { // Environment: var11
                                        var0 = arg0;
                                        var2 = var0.processProto;
                                        var0 = _closure5_slot0;
                                        var1 = var0.protoToSave;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var10 = var12.bind(var14)(var10);
                                    var12 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var14 = 8;
                                    var10 = var10[var14];
                                    var16 = var12.bind(var4)(var10);
                                    var12 = var16.protoToB64;
                                    var10 = var7.ProtoClass;
                                    var7 = var17;
                                    var7 = var7.protoToSave;
                                    var7 = var12.bind(var16)(var10, var7);
                                    var18 = var7;
                                    if (!(var8 != var7)) {
                                        _fun15521_ip = 252;
                                        continue _fun15521
                                    }
                                case 241:
                                    var10 = var18;
                                    var7 = '';
                                    if (!(var7 === var10)) {
                                        _fun15521_ip = 283;
                                        continue _fun15521
                                    }
                                case 252:
                                    var7 = _closure3_slot0;
                                    var12 = var7.logger;
                                    var10 = var12.log;
                                    var7 = 'Not persisting proto because there is nothing to change';
                                    var7 = var10.bind(var12)(var7);
                                    _fun15521_ip = 836;
                                    continue _fun15521;
                                case 283: // try_start_0
                                    var16 = _closure3_slot0;
                                    var7 = var16.saveLastSendTime;
                                    var7 = var7.bind(var16)();
                                    var10 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var7 = 9;
                                    var7 = var12[var7];
                                    var7 = var10.bind(var4)(var7);
                                    var12 = var7.HTTP;
                                    var10 = var12.patch;
                                    var7 = {};
                                    var20 = _closure1_slot10;
                                    var19 = var20.USER_SETTINGS_PROTO;
                                    var16 = var16.type;
                                    var16 = var19.bind(var20)(var16);
                                    var7.url = var16;
                                    var16 = {};
                                    var16.settings = var18;
                                    var17 = var17.offlineEditDataVersion;
                                    var16.required_data_version = var17;
                                    var7.body = var16;
                                    var16 = false;
                                    var7.rejectWithError = var16;
                                    var7 = var10.bind(var12)(var7);
                                    SaveGenerator(address = 391);
                                case 389:
                                    return var7;
                                case 391:
                                    ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 10);
                                    if (var10) {
                                        _fun15521_ip = 610;
                                        continue _fun15521
                                    }
                                case 400:
                                    var10 = var7.body;
                                    var9 = var10;
                                    var10 = var10.out_of_date;
                                    if (!var10) {
                                        _fun15521_ip = 443;
                                        continue _fun15521
                                    }
                                case 417:
                                    var10 = _closure3_slot0;
                                    var16 = var10.logger;
                                    var12 = var16.log;
                                    var10 = 'Proto was out of date, discarding changes';
                                    var10 = var12.bind(var16)(var10);
                                case 443:
                                    var10 = _closure3_slot0;
                                    var12 = var10.getEditInfo;
                                    var12 = var12.bind(var10)();
                                    var12 = var12.editInfo;
                                    var16 = var12.cleanupFuncs;
                                    var12 = var16.forEach;
                                    var11 = function(arg0) { // Environment: var11
                                        var1 = arg0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var11 = var12.bind(var16)(var11);
                                    var12 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var11 = var11[var14];
                                    var12 = var12.bind(var4)(var11);
                                    var11 = var12.b64ToProto;
                                    var10 = var10.ProtoClass;
                                    var9 = var9.settings;
                                    var9 = var11.bind(var12)(var10, var9);
                                    var13 = var9;
                                    if (!(var8 != var9)) {
                                        _fun15521_ip = 607;
                                        continue _fun15521
                                    }
                                case 532:
                                    var10 = _closure1_slot1;
                                    var11 = _closure1_slot2;
                                    var9 = 6;
                                    var9 = var11[var9];
                                    var11 = var10.bind(var4)(var9);
                                    var10 = var11.dispatch;
                                    var9 = {
                                        'type': 'USER_SETTINGS_PROTO_UPDATE',
                                        'settings': null,
                                        'resetEditInfo': true,
                                        'wasSaved': true,
                                        'local': false
                                    };
                                    var12 = {};
                                    var12.proto = var13;
                                    var13 = _closure3_slot0;
                                    var13 = var13.type;
                                    var12.type = var13;
                                    var9.settings = var12;
                                    var9 = var10.bind(var11)(var9);
                                case 602: // try_end0
                                    _fun15521_ip = 836;
                                    continue _fun15521;
                                case 607:
                                    return var4;
                                case 610:
                                    return var7;
                                case 613: // catch_target0
                                    CatchBlockStart(arg_register = 7);
                                    var2 = var7;
                                    var9 = var7.status;
                                    var7 = 429;
                                    if (!(var7 === var9)) {
                                        _fun15521_ip = 839;
                                        continue _fun15521
                                    }
                                case 636:
                                    var7 = _closure3_slot0;
                                    var10 = var7.logger;
                                    var9 = var10.log;
                                    var7 = 'Rate limited, scheduling retry';
                                    var7 = var9.bind(var10)(var7);
                                    var7 = global;
                                    var10 = var7.parseInt;
                                    var9 = var2;
                                    var9 = var9.headers;
                                    var9 = var9["retry-after"];
                                    var10 = var10.bind(var4)(var9);
                                    var15 = var10;
                                    var9 = var7.isNaN;
                                    var9 = var9.bind(var4)(var10);
                                    if (!var9) {
                                        _fun15521_ip = 710;
                                        continue _fun15521
                                    }
                                case 707:
                                    var15 = 60;
                                case 710:
                                    var11 = var7.setTimeout;
                                    var10 = _closure3_slot0;
                                    var9 = var10.persistChanges;
                                    var14 = var7.Math;
                                    var13 = var14.min;
                                    var16 = _closure1_slot1;
                                    var17 = _closure1_slot2;
                                    var7 = 10;
                                    var12 = var17[var7];
                                    var12 = var16.bind(var4)(var12);
                                    var12 = var12.Millis;
                                    var18 = var12.SECOND;
                                    var12 = 30;
                                    var12 = var12 * var18;
                                    var7 = var17[var7];
                                    var7 = var16.bind(var4)(var7);
                                    var7 = var7.Millis;
                                    var7 = var7.SECOND;
                                    var7 = var15 * var7;
                                    var7 = var13.bind(var14)(var12, var7);
                                    var11 = var11.bind(var4)(var9, var7);
                                    var9 = var10.dispatchChanges;
                                    var7 = {};
                                    var7.rateLimited = var5;
                                    var7.timeout = var11;
                                    var7 = var9.bind(var10)(var7);
                                case 836:
                                    return var4;
                                case 839:
                                    var7 = var2;
                                    var9 = var7.status;
                                    var7 = 400;
                                    if (!(var7 === var9)) {
                                        _fun15521_ip = 896;
                                        continue _fun15521
                                    }
                                case 857:
                                    var7 = var2;
                                    var7 = var7.body;
                                    var6 = var7;
                                    var7 = var8 == var7;
                                    var4 = undefined;
                                    if (var7) {
                                        _fun15521_ip = 882;
                                        continue _fun15521
                                    }
                                case 877:
                                    var4 = var6.code;
                                case 882:
                                    var1 = _closure1_slot9;
                                    var1 = var1.INVALID_USER_SETTINGS_DATA;
                                    if (!(var4 !== var1)) {
                                        _fun15521_ip = 927;
                                        continue _fun15521
                                    }
                                case 896:
                                    var1 = _closure3_slot0;
                                    var6 = var1.logger;
                                    var4 = var6.log;
                                    var1 = 'Unknown user settings error';
                                    var1 = var4.bind(var6)(var1);
                                    var1 = var2;
                                    _fun15521_ip = 967;
                                    continue _fun15521;
                                case 927:
                                    var4 = _closure3_slot0;
                                    var7 = var4.logger;
                                    var6 = var7.log;
                                    var3 = 'Reloading do to invalid data';
                                    var3 = var6.bind(var7)(var3);
                                    var3 = var4.loadIfNecessary;
                                    var3 = var3.bind(var4)(var5);
                                    var1 = var2;
                                case 967:
                                    throw var1;
                                case 969:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var4.bind(var0)(var3);
                    var2.persistChanges = var3;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 11;
                    var1 = var4[var1];
                    var4 = var3.bind(var0)(var1);
                    var1 = var2.ProtoClass;
                    var7 = var1.typeName;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var3;
                    var1 = new var8[var4](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.logger = var1;
                    return var0;
                };
                var _closure2_slot2 = var2;
                var0 = {};
                var1 = 'getEditInfo';
                var0.key = var1;
                var1 = function() { // Original name: value, environment: var5
                    var1 = _closure1_slot6;
                    var0 = var1.getFullState;
                    var1 = var0.bind(var1)();
                    var0 = this;
                    var0 = var0.type;
                    var0 = var1[var0];
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(11);
                var1[0] = var0;
                var0 = {};
                var4 = 'getCurrentValue';
                var0.key = var4;
                var4 = function() { // Original name: value, environment: var5
                    var1 = this;
                    var0 = var1.getEditInfo;
                    var0 = var0.bind(var1)();
                    var0 = var0.proto;
                    return var0;
                };
                var0.value = var4;
                var1[1] = var0;
                var4 = {};
                var0 = 'updateAsync';
                var4.key = var0;
                var8 = _closure1_slot3;
                var0 = undefined;
                var7 = function*(arg0, arg1, arg2) { // Environment: var5
                    var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                        _fun15527: for (var _fun15527_ip = 0;;) switch (_fun15527_ip) {
                            case 0:
                                StartGenerator();
                                var11 = arg0;
                                var9 = arg2;
                                var6 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun15527_ip = 262;
                                    continue _fun15527
                                }
                            case 19:
                                var1 = var6.loadIfNecessary;
                                var1 = var1.bind(var6)();
                                SaveGenerator(address = 33);
                            case 31:
                                return var1;
                            case 33:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun15527_ip = 259;
                                    continue _fun15527
                                }
                            case 42:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 12;
                                var7 = var5[var3];
                                var2 = undefined;
                                var12 = var4.bind(var2)(var7);
                                var10 = var12.getProtoFieldClass;
                                var7 = var6.ProtoClass;
                                var15 = var10.bind(var12)(var7, var11);
                                var7 = var6.getCurrentValue;
                                var7 = var7.bind(var6)();
                                var10 = var7[var11];
                                var3 = var5[var3];
                                var7 = var4.bind(var2)(var3);
                                var5 = var7.createModifiedProto;
                                var14 = var6.ProtoClass;
                                var16 = arg1;
                                var18 = var7;
                                var17 = var10;
                                var13 = var11;
                                var5 = var18[var5](var17, var16, var15, var14, var13, var12);
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun15527_ip = 256;
                                    continue _fun15527
                                }
                            case 142:
                                var7 = var6.logger;
                                var4 = var7.log;
                                var3 = global;
                                var10 = var3.String;
                                var12 = var10.bind(var2)(var11);
                                var3 = var3.HermesInternal;
                                var11 = var3.concat;
                                var10 = 'Updating ';
                                var3 = ' with delay ';
                                var3 = var11.bind(var10)(var12, var3, var9);
                                var3 = var4.bind(var7)(var3);
                                var4 = var6.markDirty;
                                var3 = {};
                                var3.delaySeconds = var9;
                                var7 = _closure1_slot8;
                                var7 = var7.AUTOMATED;
                                var7 = var9 === var7;
                                if (var7) {
                                    _fun15527_ip = 245;
                                    continue _fun15527
                                }
                            case 231:
                                var8 = _closure1_slot8;
                                var8 = var8.DAILY;
                                var7 = var9 === var8;
                            case 245:
                                var3.jitter = var7;
                                var3 = var4.bind(var6)(var5, var3);
                            case 256:
                                return var2;
                            case 259:
                                return var1;
                            case 262:
                                return var0;
                        }
                    };
                    return var0;
                };
                var7 = var8.bind(var0)(var7);
                var _closure2_slot1 = var7;
                var7 = function() { // Original name: updateAsync, environment: var5
                    var0 = undefined;
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4.value = var7;
                var1[2] = var4;
                var4 = {};
                var7 = 'markDirty';
                var4.key = var7;
                var7 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun15529: for (var _fun15529_ip = 0;;) switch (_fun15529_ip) {
                        case 0:
                            var1 = arg0;
                            var8 = arg1;
                            var3 = this;
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var2);
                            var4 = true;
                            var2 = 'this cannot run in the overlay';
                            var2 = var6.bind(var0)(var4, var2);
                            var2 = var3.getEditInfo;
                            var2 = var2.bind(var3)();
                            var4 = var2.editInfo;
                            var2 = {};
                            var6 = var4.timeout;
                            var2.timeout = var6;
                            var6 = var4.loaded;
                            if (var6) {
                                _fun15529_ip = 107;
                                continue _fun15529
                            }
                        case 86:
                            var6 = global;
                            var7 = var6.Error;
                            var6 = 'Cannot edit user settings proto because we have not yet loaded the stored version from the DB';
                            var6 = var7.bind(var0)(var6);
                            throw var6;
                        case 107:
                            var7 = var8.dispatch;
                            var6 = false;
                            if (!(var6 !== var7)) {
                                _fun15529_ip = 184;
                                continue _fun15529
                            }
                        case 118:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var6 = 6;
                            var6 = var9[var6];
                            var9 = var7.bind(var0)(var6);
                            var7 = var9.dispatch;
                            var6 = {
                                'type': 'USER_SETTINGS_PROTO_UPDATE',
                                'settings': null,
                                'partial': true,
                                'local': true
                            };
                            var10 = {};
                            var11 = var3.type;
                            var10.type = var11;
                            var10.proto = var1;
                            var6.settings = var10;
                            var6 = var7.bind(var9)(var6);
                        case 184:
                            var9 = var8.delaySeconds;
                            var7 = null;
                            var11 = var7 != var9;
                            var6 = 0;
                            if (!var11) {
                                _fun15529_ip = 204;
                                continue _fun15529
                            }
                        case 201:
                            var6 = var9;
                        case 204:
                            var9 = var2.timeout;
                            var9 = var7 != var9;
                            if (!var9) {
                                _fun15529_ip = 227;
                                continue _fun15529
                            }
                        case 217:
                            var11 = var4.timeoutDelay;
                            var9 = var6 < var11;
                        case 227:
                            if (!var9) {
                                _fun15529_ip = 239;
                                continue _fun15529
                            }
                        case 230:
                            var11 = var4.rateLimited;
                            var9 = !var11;
                        case 239:
                            if (!var9) {
                                _fun15529_ip = 267;
                                continue _fun15529
                            }
                        case 242:
                            var9 = global;
                            var11 = var9.clearTimeout;
                            var9 = var2.timeout;
                            var9 = var11.bind(var0)(var9);
                            var2.timeout = var0;
                        case 267:
                            var9 = var2.timeout;
                            if (!(var7 == var9)) {
                                _fun15529_ip = 478;
                                continue _fun15529
                            }
                        case 280:
                            var11 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var19 = 10;
                            var9 = var9[var19];
                            var9 = var11.bind(var0)(var9);
                            var9 = var9.Millis;
                            var9 = var9.SECOND;
                            var11 = var6 * var9;
                            var9 = var8.jitter;
                            var12 = var11;
                            if (!var9) {
                                _fun15529_ip = 424;
                                continue _fun15529
                            }
                        case 328:
                            var9 = global;
                            var14 = var9.Math;
                            var13 = var14.floor;
                            var16 = var9.Math;
                            var15 = var16.random;
                            var15 = var15.bind(var16)();
                            var17 = var9.Math;
                            var16 = var17.min;
                            var18 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var19];
                            var9 = var18.bind(var0)(var9);
                            var9 = var9.Millis;
                            var18 = var9.SECOND;
                            var9 = 30;
                            var9 = var9 * var18;
                            var9 = var16.bind(var17)(var11, var9);
                            var9 = var15 * var9;
                            var9 = var13.bind(var14)(var9);
                            var12 = var11 + var9;
                        case 424:
                            var13 = var3.logger;
                            var11 = var13.log;
                            var9 = 'Scheduling save from markDirty';
                            var9 = var11.bind(var13)(var9);
                            var9 = global;
                            var11 = var9.setTimeout;
                            var9 = var3.persistChanges;
                            var9 = var11.bind(var0)(var9, var12);
                            var2.timeout = var9;
                            var2.timeoutDelay = var6;
                        case 478:
                            var6 = var8.cleanup;
                            if (!(var7 != var6)) {
                                _fun15529_ip = 526;
                                continue _fun15529
                            }
                        case 488:
                            var21 = var4.cleanupFuncs;
                            var6 = new Array(0);
                            var22 = var6;
                            var20 = 0;
                            var20 = arraySpread(var22, var21, var20);
                            var21 = var8.cleanup;
                            var22 = var6;
                            var8 = arraySpread(var22, var21, var20);
                            var2.cleanupFuncs = var6;
                        case 526:
                            var6 = var4.protoToSave;
                            if (!(var7 != var6)) {
                                _fun15529_ip = 589;
                                continue _fun15529
                            }
                        case 536:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 8;
                            var5 = var7[var5];
                            var7 = var6.bind(var0)(var5);
                            var6 = var7.mergeTopLevelFields;
                            var5 = var3.ProtoClass;
                            var4 = var4.protoToSave;
                            var4 = var6.bind(var7)(var5, var4, var1);
                            var2.protoToSave = var4;
                            _fun15529_ip = 595;
                            continue _fun15529;
                        case 589:
                            var2.protoToSave = var1;
                        case 595:
                            var1 = var3.dispatchChanges;
                            var1 = var1.bind(var3)(var2);
                            return var0;
                    }
                };
                var4.value = var7;
                var1[3] = var4;
                var4 = {};
                var7 = 'dispatchChanges';
                var4.key = var7;
                var7 = function(arg0) { // Original name: value, environment: var5
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO';
                    var1.type = var4;
                    var4 = {};
                    var5 = arg0;
                    var4.changes = var5;
                    var5 = this;
                    var5 = var5.type;
                    var4.type = var5;
                    var1.settings = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var7;
                var1[4] = var4;
                var4 = {};
                var7 = 'saveLastSendTime';
                var4.key = var7;
                var7 = function() { // Original name: value, environment: var5
                    _fun15531: for (var _fun15531_ip = 0;;) switch (_fun15531_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 13;
                            var2 = var0[var5];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = var2.Storage;
                            var2 = var3.get;
                            var4 = 'UserSettingsProtoLastWriteTimes';
                            var3 = var2.bind(var3)(var4);
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun15531_ip = 55;
                                continue _fun15531
                            }
                        case 53:
                            var3 = {};
                        case 55:
                            var2 = this;
                            var6 = var2.type;
                            var2 = global;
                            var7 = var2.Date;
                            var2 = var7.now;
                            var2 = var2.bind(var7)();
                            var3[var6] = var2;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.Storage;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var4, var3);
                            return var0;
                    }
                };
                var4.value = var7;
                var1[5] = var4;
                var4 = {};
                var7 = 'loadIfUncached';
                var4.key = var7;
                var7 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun15532: for (var _fun15532_ip = 0;;) switch (_fun15532_ip) {
                        case 0:
                            var2 = arg1;
                            var1 = this;
                            var4 = _closure1_slot6;
                            var3 = var4.hasLoaded;
                            var0 = arg0;
                            var0 = var3.bind(var4)(var0);
                            if (!var0) {
                                _fun15532_ip = 36;
                                continue _fun15532
                            }
                        case 30:
                            var3 = true;
                            var0 = var3 !== var2;
                        case 36:
                            if (var0) {
                                _fun15532_ip = 50;
                                continue _fun15532
                            }
                        case 39:
                            var0 = var1.loadIfNecessary;
                            var0 = var0.bind(var1)(var2);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var7;
                var1[6] = var4;
                var4 = {};
                var7 = 'loadIfNecessary';
                var4.key = var7;
                var7 = _closure1_slot3;
                var6 = function*(arg0) { // Environment: var5
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun15534: for (var _fun15534_ip = 0;;) switch (_fun15534_ip) {
                            case 0:
                                StartGenerator();
                                var2 = arg0;
                                var4 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun15534_ip = 489;
                                    continue _fun15534
                                }
                            case 16:
                                var12 = var2;
                                var9 = undefined;
                                var3 = undefined;
                                var6 = undefined;
                                var7 = undefined;
                                var5 = undefined;
                                var1 = var4.getEditInfo;
                                var1 = var1.bind(var4)();
                                var1 = var1.editInfo;
                                if (var2) {
                                    _fun15534_ip = 69;
                                    continue _fun15534
                                }
                            case 48:
                                var2 = var1.loaded;
                                if (var2) {
                                    _fun15534_ip = 66;
                                    continue _fun15534
                                }
                            case 57:
                                var1 = var1.loading;
                                if (!var1) {
                                    _fun15534_ip = 69;
                                    continue _fun15534
                                }
                            case 66:
                                return var9;
                            case 69:
                                var8 = var4.logger;
                                var2 = var8.log;
                                var1 = 'Loading proto';
                                var1 = var2.bind(var8)(var1);
                                var2 = var4.dispatchChanges;
                                var1 = {};
                                var8 = true;
                                var1.loading = var8;
                                var1 = var2.bind(var4)(var1);
                            case 111: // try_start_0
                                var2 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 9;
                                var1 = var8[var1];
                                var1 = var2.bind(var9)(var1);
                                var8 = var1.HTTP;
                                var2 = var8.get;
                                var1 = {};
                                var14 = _closure1_slot10;
                                var11 = var14.USER_SETTINGS_PROTO;
                                var10 = var4.type;
                                var10 = var11.bind(var14)(var10);
                                var1.url = var10;
                                var10 = false;
                                var1.rejectWithError = var10;
                                var1 = var2.bind(var8)(var1);
                                SaveGenerator(address = 185);
                            case 183:
                                return var1;
                            case 185:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun15534_ip = 462;
                                    continue _fun15534
                                }
                            case 194:
                                var2 = var1.body;
                                var15 = var2.settings;
                                var11 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 8;
                                var8 = var8[var2];
                                var14 = var11.bind(var9)(var8);
                                var11 = var14.b64ToProto;
                                var8 = var4.ProtoClass;
                                var11 = var11.bind(var14)(var8, var15);
                                var3 = var11;
                                var8 = null;
                                if (!(var8 != var11)) {
                                    _fun15534_ip = 436;
                                    continue _fun15534
                                }
                            case 255:
                                var8 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var14 = 14;
                                var14 = var11[var14];
                                var15 = var8.bind(var9)(var14);
                                var14 = var4.type;
                                var15 = var15[var14];
                                var13 = _closure1_slot0;
                                var2 = var11[var2];
                                var13 = var13.bind(var9)(var2);
                                var2 = var13.runMigrations;
                                var14 = var3;
                                var2 = var2.bind(var13)(var14, var15);
                                var6 = var2.proto;
                                var13 = var2.isDirty;
                                var7 = var13;
                                var5 = var2.cleanupFuncs;
                                var2 = 6;
                                var2 = var11[var2];
                                var9 = var8.bind(var9)(var2);
                                var8 = var9.dispatch;
                                var2 = {};
                                var11 = 'USER_SETTINGS_PROTO_UPDATE';
                                var2.type = var11;
                                var11 = {};
                                var15 = var4.type;
                                var11.type = var15;
                                var11.proto = var14;
                                var2.settings = var11;
                                var11 = var13;
                                if (var13) {
                                    _fun15534_ip = 390;
                                    continue _fun15534
                                }
                            case 387:
                                var11 = var12;
                            case 390:
                                var2.resetEditInfo = var11;
                                var2.local = var10;
                                var2 = var8.bind(var9)(var2);
                                SaveGenerator(address = 409);
                            case 407:
                                return var2;
                            case 409:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                                if (var8) {
                                    _fun15534_ip = 433;
                                    continue _fun15534
                                }
                            case 415:
                                if (!var7) {
                                    _fun15534_ip = 430;
                                    continue _fun15534
                                }
                            case 418:
                                var7 = var4.markDirtyFromMigration;
                                var5 = var7.bind(var4)(var6, var5);
                            case 430: // try_end0
                                return var3;
                            case 433:
                                return var2;
                            case 436: // try_start_1
                                var3 = var4.dispatchChanges;
                                var2 = {
                                    'loading': false,
                                    'loaded': true
                                };
                                var2 = var3.bind(var4)(var2);
                            case 457: // try_end1
                                var2 = undefined;
                                return var2;
                            case 462:
                                return var1;
                            case 465: // catch_target0 // catch_target1
                                CatchBlockStart(arg_register = 1);
                                var3 = var4.dispatchChanges;
                                var2 = {};
                                var5 = false;
                                var2.loading = var5;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 489:
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var7.bind(var0)(var6);
                var _closure2_slot0 = var6;
                var6 = function() { // Original name: loadIfNecessary, environment: var5
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4.value = var6;
                var1[7] = var4;
                var4 = {};
                var6 = 'markDirtyFromMigration';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    var4 = this;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var1 = var6[var2];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var1);
                    var1 = true;
                    var7 = 'this cannot run in the overlay';
                    var7 = var8.bind(var0)(var1, var7);
                    var9 = var4.logger;
                    var8 = var9.log;
                    var7 = 'Marking dirty due to migrates';
                    var7 = var8.bind(var9)(var7);
                    var2 = var6[var2];
                    var6 = var3.bind(var0)(var2);
                    var2 = var4.getEditInfo;
                    var2 = var2.bind(var4)();
                    var2 = var2.editInfo;
                    var3 = var2.offlineEditDataVersion;
                    var2 = null;
                    var3 = var2 == var3;
                    var2 = 'offline changes are not supported with migrations';
                    var2 = var6.bind(var0)(var3, var2);
                    var3 = var4.markDirty;
                    var2 = {};
                    var6 = arg1;
                    var2.cleanup = var6;
                    var6 = false;
                    var2.dispatch = var6;
                    var5 = _closure1_slot8;
                    var5 = var5.AUTOMATED;
                    var2.delaySeconds = var5;
                    var2.jitter = var1;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var4.value = var6;
                var1[8] = var4;
                var4 = {};
                var6 = 'markDirtyIfHasPendingChange';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun15537: for (var _fun15537_ip = 0;;) switch (_fun15537_ip) {
                        case 0:
                            var3 = this;
                            var2 = var3.beforeSendCallbacks;
                            var1 = var2.some;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.hasChanges;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            if (!var0) {
                                _fun15537_ip = 75;
                                continue _fun15537
                            }
                        case 30:
                            var2 = var3.markDirty;
                            var1 = var3.ProtoClass;
                            var0 = var1.create;
                            var1 = var0.bind(var1)();
                            var0 = {
                                'dispatch': false,
                                'delaySeconds': 0
                            };
                            var4 = arg0;
                            var0.cleanup = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var1[9] = var4;
                var4 = {};
                var6 = 'scheduleSaveFromOfflineEdit';
                var4.key = var6;
                var5 = function() { // Original name: value, environment: var5
                    var3 = this;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var1 = var6[var4];
                    var0 = undefined;
                    var7 = var5.bind(var0)(var1);
                    var2 = true;
                    var1 = 'this cannot run in the overlay';
                    var1 = var7.bind(var0)(var2, var1);
                    var7 = var3.logger;
                    var2 = var7.log;
                    var1 = 'Scheduling save from offline edit';
                    var1 = var2.bind(var7)(var1);
                    var1 = var3.getEditInfo;
                    var1 = var1.bind(var3)();
                    var1 = var1.editInfo;
                    var2 = var6[var4];
                    var9 = var5.bind(var0)(var2);
                    var7 = var1.protoToSave;
                    var2 = null;
                    var8 = var2 != var7;
                    var7 = 'protoToSave cannot be null';
                    var7 = var9.bind(var0)(var8, var7);
                    var7 = var6[var4];
                    var9 = var5.bind(var0)(var7);
                    var7 = var1.offlineEditDataVersion;
                    var8 = var2 != var7;
                    var7 = 'offlineEditDataVersion cannot be null';
                    var7 = var9.bind(var0)(var8, var7);
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var1 = var1.timeout;
                    var2 = var2 == var1;
                    var1 = 'timeout must not be set already';
                    var1 = var4.bind(var0)(var2, var1);
                    var1 = global;
                    var6 = var1.Math;
                    var5 = var6.floor;
                    var4 = var1.Math;
                    var2 = var4.random;
                    var2 = var2.bind(var4)();
                    var4 = 5000;
                    var2 = var4 * var2;
                    var2 = var5.bind(var6)(var2);
                    var4 = var4 + var2;
                    var2 = var1.setTimeout;
                    var1 = var3.persistChanges;
                    var5 = var2.bind(var0)(var1, var4);
                    var2 = var3.dispatchChanges;
                    var1 = {};
                    var1.timeout = var5;
                    var1.timeoutDelay = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var5;
                var1[10] = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var8 = var5.bind(var0)();
            var5 = 15;
            var5 = var12[var5];
            var5 = var11.bind(var0)(var5);
            var18 = var5.PreloadedUserSettings;
            var17 = var10.PRELOADED_USER_SETTINGS;
            var6 = var8.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var8
                }
            });
            var19 = var6;
            var5 = new var19[var8](var18, var17, var16);
            var7 = var5 instanceof Object ? var5 : var6;
            var _closure1_slot12 = var7;
            var5 = 16;
            var5 = var12[var5];
            var5 = var11.bind(var0)(var5);
            var18 = var5.FrecencyUserSettings;
            var17 = var10.FRECENCY_AND_FAVORITES_SETTINGS;
            var6 = var8.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var8
                }
            });
            var19 = var6;
            var5 = new var19[var8](var18, var17, var16);
            var6 = var5 instanceof Object ? var5 : var6;
            var5 = {};
            var13 = var10.PRELOADED_USER_SETTINGS;
            var5[var13] = var7;
            var10 = var10.FRECENCY_AND_FAVORITES_SETTINGS;
            var5[var10] = var6;
            var10 = 22;
            var10 = var12[var10];
            var12 = var11.bind(var0)(var10);
            var11 = var12.fileFinishedImporting;
            var10 = 'modules/user_settings/UserSettingsProtoActionCreators.tsx';
            var10 = var11.bind(var12)(var10);
            var2.UserSettingsDelay = var9;
            var9 = function() { // Original name: markUserSettingsLoadOkayForDevelopment, environment: var1
                var0 = undefined;
                return var0;
            };
            var2.markUserSettingsLoadOkayForDevelopment = var9;
            var2.UserSettingsProtoActionCreators = var8;
            var2.PreloadedUserSettingsActionCreators = var7;
            var2.FrecencyUserSettingsActionCreators = var6;
            var2.UserSettingsActionCreatorsByType = var5;
            var5 = function(arg0, arg1) { // Original name: updateUserAllGuildSettings, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot12;
                var3 = var4.updateAsync;
                var2 = 'guilds';
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = arg1;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
            var2.updateUserAllGuildSettings = var5;
            var2.updateUserGuildSettings = var4;
            var4 = function(arg0, arg1, arg2, arg3) { // Original name: updateUserChannelSettings, environment: var1
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var4 = _closure1_slot15;
                var3 = undefined;
                var2 = arg0;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.mutateUserChannelSettingsInternal;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var3.bind(var4)(var0, var2, var1);
                    return var0;
                };
                var0 = arg3;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var2.updateUserChannelSettings = var4;
            var4 = function(arg0) { // Original name: addDismissedContent, environment: var1
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = function(arg0) { // Original name: trackDismissibleContentDismissedBeforeConnectionOpen, environment: var0
                    _fun15546: for (var _fun15546_ip = 0;;) switch (_fun15546_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = _closure1_slot6;
                            var1 = var2.hasLoaded;
                            var0 = _closure1_slot7;
                            var0 = var0.PRELOADED_USER_SETTINGS;
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun15546_ip = 192;
                                continue _fun15546
                            }
                        case 37:
                            var0 = _closure1_slot6;
                            var0 = var0.settings;
                            var2 = var0.userContent;
                            var1 = null;
                            var3 = var1 == var2;
                            var0 = undefined;
                            var4 = undefined;
                            if (var3) {
                                _fun15546_ip = 72;
                                continue _fun15546
                            }
                        case 66:
                            var4 = var2.dismissedContents;
                        case 72:
                            var1 = var1 != var4;
                            if (!var1) {
                                _fun15546_ip = 111;
                                continue _fun15546
                            }
                        case 79:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 17;
                            var2 = var7[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hasBit;
                            var1 = var2.bind(var3)(var4, var6);
                        case 111:
                            if (var1) {
                                _fun15546_ip = 190;
                                continue _fun15546
                            }
                        case 114:
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 18;
                            var1 = var8[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot11;
                            var2 = var1.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var5 = 19;
                            var5 = var8[var5];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.DismissibleContent;
                            var5 = var5[var6];
                            var1.content_type = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        case 190:
                            return var0;
                        case 192:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                var4 = _closure1_slot12;
                var3 = var4.updateAsync;
                var1 = _closure1_slot8;
                var2 = var1.INFREQUENT_USER_ACTION;
                var1 = 'userContent';
                var0 = function(arg0) { // Environment: var0
                    _fun15547: for (var _fun15547_ip = 0;;) switch (_fun15547_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 17;
                            var1 = var0[var5];
                            var0 = undefined;
                            var8 = var4.bind(var0)(var1);
                            var7 = var8.hasBit;
                            var6 = var2.dismissedContents;
                            var4 = _closure2_slot0;
                            var4 = var7.bind(var8)(var6, var4);
                            if (var4) {
                                _fun15547_ip = 103;
                                continue _fun15547
                            }
                        case 56:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.addBit;
                            var3 = var2.dismissedContents;
                            var1 = _closure2_slot0;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.dismissedContents = var1;
                            return var0;
                        case 103:
                            var0 = false;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var1, var0, var2);
                return var0;
            };
            var2.addDismissedContent = var4;
            var2.updateRecurringDismissibleContentState = var3;
            var3 = function() { // Original name: updateGuildDismissedContent, environment: var1
                var0 = undefined;
                var3 = _closure1_slot18;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.updateGuildDismissedContent = var3;
            var3 = function(arg0) { // Original name: removeDismissedContent, environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot12;
                var3 = var4.updateAsync;
                var1 = _closure1_slot8;
                var2 = var1.INFREQUENT_USER_ACTION;
                var1 = 'userContent';
                var0 = function(arg0) { // Environment: var0
                    _fun15550: for (var _fun15550_ip = 0;;) switch (_fun15550_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 17;
                            var1 = var0[var5];
                            var0 = undefined;
                            var8 = var4.bind(var0)(var1);
                            var7 = var8.hasBit;
                            var6 = var2.dismissedContents;
                            var4 = _closure2_slot0;
                            var4 = var7.bind(var8)(var6, var4);
                            if (var4) {
                                _fun15550_ip = 60;
                                continue _fun15550
                            }
                        case 56:
                            var4 = false;
                            return var4;
                        case 60:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.removeBit;
                            var3 = var2.dismissedContents;
                            var1 = _closure2_slot0;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.dismissedContents = var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var1, var0, var2);
                return var0;
            };
            var2.removeDismissedContent = var3;
            var3 = function(arg0) { // Original name: removeDismissedRecurringContent, environment: var1
                var3 = _closure1_slot16;
                var2 = undefined;
                var1 = arg0;
                var0 = {
                    'lastDismissedVersion': 0,
                    'lastDismissedAtMs': '0',
                    'lastDismissedObjectId': '0',
                    'numTimesDismissed': 0
                };
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var2.removeDismissedRecurringContent = var3;
            var3 = function() { // Original name: clearDismissedContents, environment: var1
                var4 = _closure1_slot12;
                var3 = var4.updateAsync;
                var0 = _closure1_slot8;
                var2 = var0.INFREQUENT_USER_ACTION;
                var1 = 'userContent';
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = global;
                    var0 = var0.Uint8Array;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var3 = var2;
                    var0 = new var3[var0](var2);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1.dismissedContents = var0;
                    var0 = {};
                    var1.recurringDismissibleContentStates = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = var3.bind(var4)(var1, var0, var2);
                return var0;
            };
            var2.clearDismissedContents = var3;
            var1 = function() { // Original name: checkAllDismissedContents, environment: var1
                var4 = _closure1_slot12;
                var3 = var4.updateAsync;
                var0 = _closure1_slot8;
                var2 = var0.INFREQUENT_USER_ACTION;
                var1 = 'userContent';
                var0 = function(arg0) { // Environment: var0
                    _fun15555: for (var _fun15555_ip = 0;;) switch (_fun15555_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = global;
                            var0 = var0.Uint8Array;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var16 = var1;
                            var0 = new var16[var0](var15);
                            var1 = var0 instanceof Object ? var0 : var1;
                            var4 = _closure1_slot13;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var9 = 20;
                            var3 = var0[var9];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.ALL_DISMISSIBLE_CONTENT;
                            var8 = var4.bind(var0)(var3);
                            var4 = var8.bind(var0)();
                            var3 = var4.done;
                            var7 = 17;
                            var6 = 21;
                            var5 = var4;
                            var4 = var1;
                            var1 = var4;
                            if (var3) {
                                _fun15555_ip = 230;
                                continue _fun15555
                            }
                        case 101:
                            var13 = var5.value;
                            var11 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var9];
                            var11 = var11.bind(var0)(var3);
                            var3 = var11.isSingleUseDismissibleContent;
                            var3 = var3.bind(var11)(var13);
                            if (var3) {
                                _fun15555_ip = 180;
                                continue _fun15555
                            }
                        case 137:
                            var11 = var2.recurringDismissibleContentStates;
                            var12 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var12 = var12.bind(var0)(var3);
                            var3 = var12.getDismissedRecurringDismissibleContentState;
                            var3 = var3.bind(var12)(var13);
                            var11[var13] = var3;
                            var11 = var4;
                            _fun15555_ip = 209;
                            continue _fun15555;
                        case 180:
                            var12 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var12 = var12.bind(var0)(var3);
                            var3 = var12.addBit;
                            var11 = var3.bind(var12)(var4, var13);
                        case 209:
                            var12 = var8.bind(var0)();
                            var3 = var12.done;
                            var4 = var11;
                            var5 = var12;
                            var1 = var4;
                            if (!var3) {
                                _fun15555_ip = 101;
                                continue _fun15555
                            }
                        case 230:
                            var2.dismissedContents = var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var1, var0, var2);
                return var0;
            };
            var2.checkAllDismissedContents = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1310, 665, 660, 806, 44, 1344, 507, 667, 3, 1356, 587, 1345, 1311, 1343, 1357, 795, 1358, 1359, 1360, 2]);