// modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun40715: for (var _fun40715_ip = 0;;) switch (_fun40715_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40715_ip = 45;
                    continue _fun40715
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun40715_ip = 54;
                    continue _fun40715
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun40715_ip = 342;
                    continue _fun40715
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40715_ip = 322;
                    continue _fun40715
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40715_ip = 282;
                    continue _fun40715
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40715_ip = 269;
                    continue _fun40715
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
                    _fun40715_ip = 162;
                    continue _fun40715
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun40715_ip = 178;
                    continue _fun40715
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40715_ip = 248;
                    continue _fun40715
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40715_ip = 248;
                    continue _fun40715
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40715_ip = 233;
                    continue _fun40715
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40715_ip = 246;
                    continue _fun40715
                }
            case 233:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun40715_ip = 264;
                continue _fun40715;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun40715_ip = 282;
                continue _fun40715;
            case 269:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun40715_ip = 322;
                    continue _fun40715
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
                    _fun40715_ip = 329;
                    continue _fun40715
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40716: for (var _fun40716_ip = 0;;) switch (_fun40716_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40716_ip = 56;
                                continue _fun40716
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
                            _fun40716_ip = 67;
                            continue _fun40716;
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
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun40717: for (var _fun40717_ip = 0;;) switch (_fun40717_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40717_ip = 23;
                    continue _fun40717
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40717_ip = 33;
                    continue _fun40717
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
                    _fun40717_ip = 70;
                    continue _fun40717
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40717_ip = 55;
                    continue _fun40717
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var3 = function() { // Original name: getDefaultSearchState, environment: var1
        var0 = {
            'query': '',
            'requireUnusualDmActivity': false,
            'requireCommunicationDisabled': false,
            'requireUnusualAccountActivity': false,
            'requireUsernameQuarantined': false
        };
        var1 = global;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        var0.selectedRoleIds = var1;
        var1 = {
            'optionId': 0,
            'afterDate': null,
            'beforeDate': null
        };
        var0.selectedJoinDateOption = var1;
        var1 = {
            'optionId': 0,
            'afterDate': null,
            'beforeDate': null
        };
        var0.selectedAccountAgeOption = var1;
        var1 = undefined;
        var0.selectedJoinSourceType = var1;
        var0.selectedSourceInviteCode = var1;
        var0.selectedSort = var1;
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = function(arg0, arg1) { // Original name: hasStringMatch, environment: var1
        _fun40719: for (var _fun40719_ip = 0;;) switch (_fun40719_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun40719_ip = 51;
                    continue _fun40719
                }
            case 15:
                var1 = var2.toLowerCase;
                var3 = var1.bind(var2)();
                var2 = var3.includes;
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var0 = !var1;
            case 51:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var7);
    var0 = 0;
    var7 = var6[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var8 = var4.Object;
    var7 = var8.freeze;
    var4 = var3.bind(var0)();
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0) { // Original name: GuildMemberSafetySearch, environment: var4
            var2 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = arg0;
            var2.guildId = var3;
            var1 = _closure1_slot9;
            var1 = var1.bind(var0)();
            var2._searchState = var1;
            var1 = true;
            var2.hasDefaultQuery = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'requiresUsernameMatch';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0._searchState;
            var1 = var0.query;
            var0 = var1.trim;
            var0 = var0.bind(var1)();
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var2 = this;
            var1 = _closure1_slot9;
            var0 = undefined;
            var1 = var1.bind(var0)();
            var2._searchState = var1;
            var1 = true;
            var2.hasDefaultQuery = var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'updateSearchState';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = this;
            var0 = {};
            var5 = var1._searchState;
            var6 = var0;
            var2 = copyDataProperties(var6, var5);
            var5 = arg0;
            var6 = var0;
            var2 = copyDataProperties(var6, var5);
            var1._searchState = var0;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var1._searchState;
            var0 = _closure1_slot6;
            var0 = var3.bind(var4)(var2, var0);
            var1.hasDefaultQuery = var0;
            var0 = true;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'resetSearchState';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun40725: for (var _fun40725_ip = 0;;) switch (_fun40725_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.hasDefaultQuery;
                    var0 = !var0;
                    if (!var0) {
                        _fun40725_ip = 44;
                        continue _fun40725
                    }
                case 15:
                    var3 = _closure1_slot9;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                    var2._searchState = var1;
                    var1 = true;
                    var2.hasDefaultQuery = var1;
                    var0 = true;
                case 44:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getSearchState';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0._searchState;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'isMemberIncludedInSearchResults';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            _fun40727: for (var _fun40727_ip = 0;;) switch (_fun40727_ip) {
                case 0:
                    var15 = arg0;
                    var0 = this;
                    var0 = var0._searchState;
                    var8 = var0.query;
                    var9 = var0.requireUnusualDmActivity;
                    var10 = var0.requireCommunicationDisabled;
                    var11 = var0.requireUnusualAccountActivity;
                    var12 = var0.requireUsernameQuarantined;
                    var6 = var0.selectedRoleIds;
                    var3 = var0.selectedJoinDateOption;
                    var5 = var0.selectedAccountAgeOption;
                    var14 = var0.selectedSourceInviteCode;
                    var13 = var0.selectedJoinSourceType;
                    var0 = var8.length;
                    var2 = 0;
                    var1 = var0 > var2;
                    if (!var1) {
                        _fun40727_ip = 446;
                        continue _fun40727
                    }
                case 89:
                    var0 = var8.trim;
                    var7 = var0.bind(var8)();
                    var4 = '';
                    var0 = false;
                    if (!(var4 !== var7)) {
                        _fun40727_ip = 443;
                        continue _fun40727
                    }
                case 112:
                    var7 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var4 = 3;
                    var4 = var16[var4];
                    var18 = undefined;
                    var7 = var7.bind(var18)(var4);
                    var4 = var7.splitQuery;
                    var8 = var4.bind(var7)(var8);
                    var7 = _closure1_slot5;
                    var4 = 2;
                    var16 = var7.bind(var18)(var8, var4);
                    var7 = var16[var2];
                    var8 = _closure1_slot7;
                    var4 = 1;
                    var4 = var16[var4];
                    var16 = var8.bind(var18)(var4);
                    var8 = var16.bind(var18)();
                    var4 = var8.done;
                    if (var4) {
                        _fun40727_ip = 227;
                        continue _fun40727
                    }
                case 193:
                    var21 = var8.value;
                    var4 = var15.userId;
                    var0 = true;
                    if (!(var4 !== var21)) {
                        _fun40727_ip = 443;
                        continue _fun40727
                    }
                case 212:
                    var21 = var16.bind(var18)();
                    var4 = var21.done;
                    var8 = var21;
                    if (!var4) {
                        _fun40727_ip = 193;
                        continue _fun40727
                    }
                case 227:
                    var4 = _closure1_slot7;
                    var16 = var4.bind(var18)(var7);
                    var8 = var16.bind(var18)();
                    var4 = var8.done;
                    if (var4) {
                        _fun40727_ip = 292;
                        continue _fun40727
                    }
                case 248:
                    var22 = var8.value;
                    var21 = _closure1_slot10;
                    var4 = var15.nick;
                    var4 = var21.bind(var18)(var4, var22);
                    var0 = true;
                    if (var4) {
                        _fun40727_ip = 443;
                        continue _fun40727
                    }
                case 277:
                    var21 = var16.bind(var18)();
                    var4 = var21.done;
                    var8 = var21;
                    if (!var4) {
                        _fun40727_ip = 248;
                        continue _fun40727
                    }
                case 292:
                    var8 = var15.user;
                    var4 = null;
                    var4 = var4 == var8;
                    var0 = false;
                    if (var4) {
                        _fun40727_ip = 443;
                        continue _fun40727
                    }
                case 311:
                    var4 = var15.user;
                    var16 = var4.globalName;
                    var22 = var4.username;
                    var4 = _closure1_slot7;
                    var21 = var4.bind(var18)(var7);
                    var8 = var21.bind(var18)();
                    var4 = var8.done;
                    if (var4) {
                        _fun40727_ip = 383;
                        continue _fun40727
                    }
                case 348:
                    var23 = _closure1_slot10;
                    var4 = var8.value;
                    var4 = var23.bind(var18)(var22, var4);
                    var0 = true;
                    if (var4) {
                        _fun40727_ip = 443;
                        continue _fun40727
                    }
                case 368:
                    var23 = var21.bind(var18)();
                    var4 = var23.done;
                    var8 = var23;
                    if (!var4) {
                        _fun40727_ip = 348;
                        continue _fun40727
                    }
                case 383:
                    var4 = _closure1_slot7;
                    var8 = var4.bind(var18)(var7);
                    var7 = var8.bind(var18)();
                    var4 = var7.done;
                    var0 = false;
                    if (var4) {
                        _fun40727_ip = 443;
                        continue _fun40727
                    }
                case 406:
                    var21 = _closure1_slot10;
                    var4 = var7.value;
                    var4 = var21.bind(var18)(var16, var4);
                    var0 = true;
                    if (var4) {
                        _fun40727_ip = 443;
                        continue _fun40727
                    }
                case 426:
                    var21 = var8.bind(var18)();
                    var4 = var21.done;
                    var7 = var21;
                    var0 = false;
                    if (!var4) {
                        _fun40727_ip = 406;
                        continue _fun40727
                    }
                case 443:
                    var1 = !var0;
                case 446:
                    var0 = !var1;
                    if (var1) {
                        _fun40727_ip = 971;
                        continue _fun40727
                    }
                case 455:
                    var1 = var6.size;
                    var2 = var1 > var2;
                    if (!var2) {
                        _fun40727_ip = 485;
                        continue _fun40727
                    }
                case 467:
                    var4 = function(arg0, arg1) { // Original name: hasSelectedRole, environment: var1
                        _fun40728: for (var _fun40728_ip = 0;;) switch (_fun40728_ip) {
                            case 0:
                                var4 = arg1;
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var2 = var4.size;
                                var0 = 0;
                                var0 = var0 !== var2;
                                if (!var0) {
                                    _fun40728_ip = 60;
                                    continue _fun40728
                                }
                            case 26:
                                var2 = global;
                                var3 = var2.Array;
                                var2 = var3.from;
                                var3 = var2.bind(var3)(var4);
                                var2 = var3.every;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = _closure4_slot0;
                                    var2 = var0.roles;
                                    var1 = var2.includes;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1);
                            case 60:
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var1 = var4.bind(var1)(var15, var6);
                    var2 = !var1;
                case 485:
                    var1 = !var2;
                    if (var2) {
                        _fun40727_ip = 968;
                        continue _fun40727
                    }
                case 494:
                    var2 = var3.afterDate;
                    var7 = null;
                    var4 = var7 != var2;
                    if (!var4) {
                        _fun40727_ip = 525;
                        continue _fun40727
                    }
                case 509:
                    var6 = var15.joinedAtTimestamp;
                    var2 = var3.afterDate;
                    var4 = var6 < var2;
                case 525:
                    var2 = !var4;
                    if (var4) {
                        _fun40727_ip = 965;
                        continue _fun40727
                    }
                case 534:
                    var4 = var3.beforeDate;
                    var4 = var7 != var4;
                    if (!var4) {
                        _fun40727_ip = 563;
                        continue _fun40727
                    }
                case 547:
                    var6 = var15.joinedAtTimestamp;
                    var3 = var3.beforeDate;
                    var4 = var6 > var3;
                case 563:
                    var3 = !var4;
                    if (var4) {
                        _fun40727_ip = 962;
                        continue _fun40727
                    }
                case 572:
                    var4 = var5.afterDate;
                    var6 = var7 != var4;
                    if (!var6) {
                        _fun40727_ip = 636;
                        continue _fun40727
                    }
                case 585:
                    var16 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var8 = var8[var4];
                    var4 = undefined;
                    var16 = var16.bind(var4)(var8);
                    var8 = var16.extractTimestamp;
                    var4 = var15.userId;
                    var8 = var8.bind(var16)(var4);
                    var4 = var5.afterDate;
                    var6 = var8 < var4;
                case 636:
                    var4 = !var6;
                    if (var6) {
                        _fun40727_ip = 959;
                        continue _fun40727
                    }
                case 645:
                    var6 = var5.beforeDate;
                    var6 = var7 != var6;
                    if (!var6) {
                        _fun40727_ip = 709;
                        continue _fun40727
                    }
                case 658:
                    var17 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var8 = 5;
                    var16 = var16[var8];
                    var8 = undefined;
                    var17 = var17.bind(var8)(var16);
                    var16 = var17.extractTimestamp;
                    var8 = var15.userId;
                    var8 = var16.bind(var17)(var8);
                    var5 = var5.beforeDate;
                    var6 = var8 > var5;
                case 709:
                    var5 = !var6;
                    if (var6) {
                        _fun40727_ip = 956;
                        continue _fun40727
                    }
                case 718:
                    var6 = var7 == var14;
                    if (var6) {
                        _fun40727_ip = 735;
                        continue _fun40727
                    }
                case 725:
                    var8 = var15.sourceInviteCode;
                    var6 = var8 === var14;
                case 735:
                    if (!var6) {
                        _fun40727_ip = 953;
                        continue _fun40727
                    }
                case 741:
                    var7 = var7 == var13;
                    if (var7) {
                        _fun40727_ip = 758;
                        continue _fun40727
                    }
                case 748:
                    var8 = var15.joinSourceType;
                    var7 = var8 === var13;
                case 758:
                    if (!var7) {
                        _fun40727_ip = 950;
                        continue _fun40727
                    }
                case 764:
                    var8 = var9;
                    if (var8) {
                        _fun40727_ip = 773;
                        continue _fun40727
                    }
                case 770:
                    var8 = var10;
                case 773:
                    if (var8) {
                        _fun40727_ip = 779;
                        continue _fun40727
                    }
                case 776:
                    var8 = var11;
                case 779:
                    if (var8) {
                        _fun40727_ip = 785;
                        continue _fun40727
                    }
                case 782:
                    var8 = var12;
                case 785:
                    var8 = !var8;
                    if (var8) {
                        _fun40727_ip = 947;
                        continue _fun40727
                    }
                case 794:
                    var13 = !var9;
                    if (var13) {
                        _fun40727_ip = 809;
                        continue _fun40727
                    }
                case 800:
                    var9 = var15.hasUnusualDmActivity;
                    var13 = !var9;
                case 809:
                    var9 = !var13;
                    if (!var13) {
                        _fun40727_ip = 944;
                        continue _fun40727
                    }
                case 818:
                    var13 = !var10;
                    if (var13) {
                        _fun40727_ip = 863;
                        continue _fun40727
                    }
                case 824:
                    var16 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 6;
                    var14 = var14[var10];
                    var10 = undefined;
                    var14 = var16.bind(var10)(var14);
                    var10 = var14.isMemberCommunicationDisabled;
                    var10 = var10.bind(var14)(var15);
                    var13 = !var10;
                case 863:
                    var10 = !var13;
                    if (!var13) {
                        _fun40727_ip = 941;
                        continue _fun40727
                    }
                case 869:
                    var13 = !var11;
                    if (var13) {
                        _fun40727_ip = 884;
                        continue _fun40727
                    }
                case 875:
                    var11 = var15.hasUnusualAccountActivity;
                    var13 = !var11;
                case 884:
                    var11 = !var13;
                    if (!var13) {
                        _fun40727_ip = 938;
                        continue _fun40727
                    }
                case 890:
                    var12 = !var12;
                    if (var12) {
                        _fun40727_ip = 935;
                        continue _fun40727
                    }
                case 896:
                    var16 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var13 = 7;
                    var14 = var14[var13];
                    var13 = undefined;
                    var14 = var16.bind(var13)(var14);
                    var13 = var14.hasAutomodQuarantinedProfile;
                    var13 = var13.bind(var14)(var15);
                    var12 = !var13;
                case 935:
                    var11 = !var12;
                case 938:
                    var10 = var11;
                case 941:
                    var9 = var10;
                case 944:
                    var8 = var9;
                case 947:
                    var7 = var8;
                case 950:
                    var6 = var7;
                case 953:
                    var5 = var6;
                case 956:
                    var4 = var5;
                case 959:
                    var3 = var4;
                case 962:
                    var2 = var3;
                case 965:
                    var1 = var2;
                case 968:
                    var0 = var1;
                case 971:
                    return var0;
            }
        };
        var0.value = var4;
        var1[5] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_mod_dash_member_safety/GuildMemberSafetySearch.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getDefaultSearchState = var3;
    var2.GuildMemberSafetySearch = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 57, 4500, 4498, 21, 3039, 3056, 2]);