// modules/applications/ApplicationActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var8;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun47609: for (var _fun47609_ip = 0;;) switch (_fun47609_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47609_ip = 297;
                            continue _fun47609
                        }
                    case 13:
                        var6 = arg0;
                        var5 = undefined;
                        if (!(var1 === var5)) {
                            _fun47609_ip = 24;
                            continue _fun47609
                        }
                    case 22:
                        var1 = false;
                    case 24:
                        var11 = var1;
                        var9 = arguments[2];
                        SaveGenerator(address = 34);
                    case 32:
                        return var5;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47609_ip = 294;
                            continue _fun47609
                        }
                    case 43:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var7 = 5;
                        var2 = var2[var7];
                        var8 = var4.bind(var5)(var2);
                        var4 = var8.dispatch;
                        var2 = {};
                        var10 = 'APPLICATION_FETCH';
                        var2.type = var10;
                        var10 = var6;
                        var2.applicationId = var10;
                        var2 = var4.bind(var8)(var2);
                    case 93: // try_start_0
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 6;
                        var2 = var8[var2];
                        var2 = var4.bind(var5)(var2);
                        var8 = var2.HTTP;
                        var4 = var8.get;
                        var2 = {};
                        var13 = _closure1_slot8;
                        var12 = var13.APPLICATION_PUBLIC;
                        var10 = var6;
                        var10 = var12.bind(var13)(var10);
                        var2.url = var10;
                        var10 = {};
                        var10.with_guild = var11;
                        var2.query = var10;
                        var10 = true;
                        var2.oldFormErrors = var10;
                        var2.signal = var9;
                        var9 = false;
                        var2.rejectWithError = var9;
                        var2 = var4.bind(var8)(var2);
                        SaveGenerator(address = 186);
                    case 184:
                        return var2;
                    case 186:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun47609_ip = 246;
                            continue _fun47609
                        }
                    case 192:
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var9 = var8.bind(var5)(var4);
                        var8 = var9.dispatch;
                        var4 = {};
                        var10 = 'APPLICATION_FETCH_SUCCESS';
                        var4.type = var10;
                        var10 = var2.body;
                        var4.application = var10;
                        var4 = var8.bind(var9)(var4);
                        var4 = var2.body;
                    case 243: // try_end0
                        return var4;
                    case 246:
                        return var2;
                    case 249: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'APPLICATION_FETCH_FAIL';
                        var3.type = var7;
                        var3.applicationId = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 294:
                        return var1;
                    case 297:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var8[var3];
    var10 = var5.bind(var0)(var3);
    var _closure1_slot6 = var10;
    var3 = 4;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var5 = var3.ApplicationFlags;
    var _closure1_slot7 = var5;
    var5 = var3.Endpoints;
    var _closure1_slot8 = var5;
    var5 = var3.NOOP;
    var _closure1_slot9 = var5;
    var11 = var3.QueryIds;
    var5 = {};
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.name;
        var _closure2_slot0 = var2;
        var2 = var1.guildId;
        var _closure2_slot1 = var2;
        var2 = var1.type;
        var _closure2_slot2 = var2;
        var1 = var1.teamId;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun47612: for (var _fun47612_ip = 0;;) switch (_fun47612_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47612_ip = 204;
                            continue _fun47612
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.post;
                        var1 = {};
                        var6 = _closure1_slot8;
                        var6 = var6.APPLICATIONS;
                        var1.url = var6;
                        var7 = {};
                        var8 = _closure2_slot0;
                        var7.name = var8;
                        var8 = _closure2_slot2;
                        var7.type = var8;
                        var8 = _closure2_slot1;
                        var7.guild_id = var8;
                        var8 = _closure2_slot3;
                        var7.team_id = var8;
                        var1.body = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 119);
                    case 117:
                        return var1;
                    case 119:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47612_ip = 201;
                            continue _fun47612
                        }
                    case 125:
                        var2 = var1.body;
                        var4 = _closure2_slot1;
                        var7 = null;
                        var4 = var7 != var4;
                        if (!var4) {
                            _fun47612_ip = 151;
                            continue _fun47612
                        }
                    case 143:
                        var6 = _closure2_slot2;
                        var4 = var7 != var6;
                    case 151:
                        if (!var4) {
                            _fun47612_ip = 198;
                            continue _fun47612
                        }
                    case 154:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'APPLICATION_FETCH_SUCCESS';
                        var3.type = var6;
                        var3.application = var2;
                        var3 = var4.bind(var5)(var3);
                    case 198:
                        return var2;
                    case 201:
                        return var1;
                    case 204:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.createApplication = var3;
    var3 = function arg0() {
        _fun47613: for (var _fun47613_ip = 0;;) switch (_fun47613_ip) {
            case 0:
                var4 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun47613_ip = 20;
                    continue _fun47613
                }
            case 18:
                var4 = {};
            case 20:
                var2 = var4.includeTeam;
                var _closure2_slot1 = var2;
                var2 = null;
                var3 = Object.create(var2);
                var2 = 0;
                var3.includeTeam = var2;
                var7 = {};
                var6 = var4;
                var5 = var3;
                var2 = copyDataProperties(var7, var6, var5);
                var _closure2_slot2 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun47615: for (var _fun47615_ip = 0;;) switch (_fun47615_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun47615_ip = 183;
                                    continue _fun47615
                                }
                            case 10:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 6;
                                var1 = var4[var1];
                                var5 = undefined;
                                var1 = var2.bind(var5)(var1);
                                var4 = var1.HTTP;
                                var2 = var4.get;
                                var1 = {};
                                var9 = _closure1_slot8;
                                var8 = var9.GUILD_APPLICATIONS;
                                var6 = _closure2_slot0;
                                var6 = var8.bind(var9)(var6);
                                var1.url = var6;
                                var6 = {};
                                var10 = _closure2_slot2;
                                var11 = var6;
                                var8 = copyDataProperties(var11, var10);
                                var8 = _closure2_slot1;
                                var7 = 'include_team';
                                var6[var7] = var8;
                                var1.query = var6;
                                var6 = false;
                                var1.rejectWithError = var6;
                                var1 = var2.bind(var4)(var1);
                                SaveGenerator(address = 121);
                            case 119:
                                return var1;
                            case 121:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun47615_ip = 180;
                                    continue _fun47615
                                }
                            case 127:
                                var2 = var1.body;
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 5;
                                var3 = var6[var3];
                                var5 = var4.bind(var5)(var3);
                                var4 = var5.dispatch;
                                var3 = {};
                                var6 = 'APPLICATIONS_FETCH_SUCCESS';
                                var3.type = var6;
                                var3.applications = var2;
                                var3 = var4.bind(var5)(var3);
                                return var2;
                            case 180:
                                return var1;
                            case 183:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var5.getApplicationsForGuild = var3;
    var3 = function arg0() {
        var1 = arg0;
        var2 = var1.applicationId;
        var _closure2_slot0 = var2;
        var1 = var1.teamId;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun47618: for (var _fun47618_ip = 0;;) switch (_fun47618_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47618_ip = 165;
                            continue _fun47618
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.post;
                        var1 = {};
                        var9 = _closure1_slot8;
                        var8 = var9.APPLICATION_OWNER_TRANSFER;
                        var6 = _closure2_slot0;
                        var6 = var8.bind(var9)(var6);
                        var1.url = var6;
                        var6 = {};
                        var7 = _closure2_slot1;
                        var6.team_id = var7;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 104);
                    case 102:
                        return var1;
                    case 104:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47618_ip = 162;
                            continue _fun47618
                        }
                    case 110:
                        var2 = var1.body;
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'APPLICATION_FETCH_SUCCESS';
                        var3.type = var6;
                        var3.application = var2;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 162:
                        return var1;
                    case 165:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.transferApplication = var3;
    var3 = function arg0() {
        _fun47619: for (var _fun47619_ip = 0;;) switch (_fun47619_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun47619_ip = 20;
                    continue _fun47619
                }
            case 18:
                var2 = true;
            case 20:
                var _closure2_slot1 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun47621: for (var _fun47621_ip = 0;;) switch (_fun47621_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun47621_ip = 454;
                                    continue _fun47621
                                }
                            case 12:
                                var4 = undefined;
                                var9 = undefined;
                                var _closure4_slot0 = var4;
                                var5 = _closure2_slot0;
                                var3 = _closure2_slot1;
                                if (var3) {
                                    _fun47621_ip = 53;
                                    continue _fun47621
                                }
                            case 34:
                                var6 = _closure2_slot0;
                                var3 = var6.filter;
                                var2 = function(arg0) { // Environment: var7
                                    _fun47622: for (var _fun47622_ip = 0;;) switch (_fun47622_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var2 = _closure1_slot6;
                                            var0 = var2.getApplication;
                                            var5 = var0.bind(var2)(var1);
                                            var2 = _closure1_slot0;
                                            var4 = _closure1_slot2;
                                            var0 = 7;
                                            var0 = var4[var0];
                                            var7 = undefined;
                                            var9 = var2.bind(var7)(var0);
                                            var8 = var9.hasFlag;
                                            var4 = null;
                                            var2 = var4 == var5;
                                            var0 = undefined;
                                            if (var2) {
                                                _fun47622_ip = 65;
                                                continue _fun47622
                                            }
                                        case 60:
                                            var0 = var5.flags;
                                        case 65:
                                            var10 = var4 != var0;
                                            var2 = 0;
                                            var6 = 0;
                                            if (!var10) {
                                                _fun47622_ip = 79;
                                                continue _fun47622
                                            }
                                        case 76:
                                            var6 = var0;
                                        case 79:
                                            var0 = _closure1_slot7;
                                            var0 = var0.EMBEDDED;
                                            var0 = var8.bind(var9)(var6, var0);
                                            if (!var0) {
                                                _fun47622_ip = 157;
                                                continue _fun47622
                                            }
                                        case 98:
                                            var8 = var4 == var5;
                                            var6 = undefined;
                                            if (var8) {
                                                _fun47622_ip = 128;
                                                continue _fun47622
                                            }
                                        case 107:
                                            var8 = var5.embeddedActivityConfig;
                                            var9 = var4 == var8;
                                            var6 = undefined;
                                            if (var9) {
                                                _fun47622_ip = 128;
                                                continue _fun47622
                                            }
                                        case 122:
                                            var6 = var8.supported_platforms;
                                        case 128:
                                            var6 = var4 == var6;
                                            if (var6) {
                                                _fun47622_ip = 154;
                                                continue _fun47622
                                            }
                                        case 135:
                                            var8 = var4 == var5;
                                            var7 = undefined;
                                            if (var8) {
                                                _fun47622_ip = 150;
                                                continue _fun47622
                                            }
                                        case 144:
                                            var7 = var5.bot;
                                        case 150:
                                            var6 = var4 == var7;
                                        case 154:
                                            var0 = var6;
                                        case 157:
                                            var4 = var4 != var5;
                                            if (!var4) {
                                                _fun47622_ip = 167;
                                                continue _fun47622
                                            }
                                        case 164:
                                            var4 = !var0;
                                        case 167:
                                            var0 = !var4;
                                            if (var4) {
                                                _fun47622_ip = 191;
                                                continue _fun47622
                                            }
                                        case 173:
                                            var5 = _closure1_slot6;
                                            var4 = var5.isFetchingApplication;
                                            var4 = var4.bind(var5)(var1);
                                            var0 = !var4;
                                        case 191:
                                            if (!var0) {
                                                _fun47622_ip = 212;
                                                continue _fun47622
                                            }
                                        case 194:
                                            var4 = _closure1_slot6;
                                            var3 = var4.didFetchingApplicationFail;
                                            var3 = var3.bind(var4)(var1);
                                            var0 = !var3;
                                        case 212:
                                            if (!var0) {
                                                _fun47622_ip = 224;
                                                continue _fun47622
                                            }
                                        case 215:
                                            var1 = var1.length;
                                            var0 = var1 > var2;
                                        case 224:
                                            return var0;
                                    }
                                };
                                var5 = var3.bind(var6)(var2);
                            case 53:
                                var2 = var5;
                                var3 = var2.length;
                                var2 = 0;
                                if (!(var3 > var2)) {
                                    _fun47621_ip = 384;
                                    continue _fun47621
                                }
                            case 70:
                                var8 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var6 = 5;
                                var3 = var3[var6];
                                var10 = var8.bind(var4)(var3);
                                var8 = var10.dispatch;
                                var3 = {};
                                var11 = 'APPLICATIONS_FETCH';
                                var3.type = var11;
                                var11 = var5;
                                var3.applicationIds = var11;
                                var3 = var8.bind(var10)(var3);
                            case 121: // try_start_0
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var3 = 6;
                                var3 = var10[var3];
                                var3 = var8.bind(var4)(var3);
                                var11 = var3.HTTP;
                                var10 = var11.get;
                                var3 = {};
                                var8 = _closure1_slot8;
                                var8 = var8.APPLICATIONS_PUBLIC;
                                var3.url = var8;
                                var8 = global;
                                var14 = var8.URLSearchParams;
                                var15 = var5;
                                var13 = var15.map;
                                var12 = function(arg0) { // Environment: var7
                                    var0 = ['application_ids'];
                                    var1 = arg0;
                                    var0[1] = var1;
                                    return var0;
                                };
                                var16 = var13.bind(var15)(var12);
                                var13 = var14.prototype;
                                var13 = Object.create(var13, {
                                    constructor: {
                                        value: var14
                                    }
                                });
                                var17 = var13;
                                var12 = new var17[var14](var16, var15);
                                var13 = var12 instanceof Object ? var12 : var13;
                                var12 = var13.toString;
                                var12 = var12.bind(var13)();
                                var3.query = var12;
                                var12 = true;
                                var3.oldFormErrors = var12;
                                var12 = false;
                                var3.rejectWithError = var12;
                                var3 = var10.bind(var11)(var3);
                                SaveGenerator(address = 249);
                            case 247:
                                return var3;
                            case 249:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 10);
                                if (var10) {
                                    _fun47621_ip = 387;
                                    continue _fun47621
                                }
                            case 258:
                                var9 = var3;
                            case 261: // try_end0
                                var11 = var9;
                                var12 = var11.body;
                                var10 = var8.Set;
                                var9 = var12.map;
                                var8 = function(arg0) { // Environment: var7
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var16 = var9.bind(var12)(var8);
                                var9 = var10.prototype;
                                var9 = Object.create(var9, {
                                    constructor: {
                                        value: var10
                                    }
                                });
                                var17 = var9;
                                var8 = new var17[var10](var16, var15);
                                var8 = var8 instanceof Object ? var8 : var9;
                                _closure4_slot0 = var8;
                                var9 = var5;
                                var8 = var9.filter;
                                var7 = function(arg0) { // Environment: var7
                                    var2 = _closure4_slot0;
                                    var1 = var2.has;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = !var0;
                                    return var0;
                                };
                                var10 = var8.bind(var9)(var7);
                                var8 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var7 = var7[var6];
                                var9 = var8.bind(var4)(var7);
                                var8 = var9.dispatch;
                                var7 = {};
                                var12 = 'APPLICATIONS_FETCH_SUCCESS';
                                var7.type = var12;
                                var11 = var11.body;
                                var7.applications = var11;
                                var7.unknownApplicationIds = var10;
                                var7 = var8.bind(var9)(var7);
                            case 384:
                                return var4;
                            case 387:
                                return var3;
                            case 390: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var1 = var3;
                                var7 = var3.status;
                                var3 = 429;
                                if (!(var3 !== var7)) {
                                    _fun47621_ip = 452;
                                    continue _fun47621
                                }
                            case 410:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var2 = var2[var6];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var6 = 'APPLICATIONS_FETCH_FAIL';
                                var2.type = var6;
                                var2.applicationIds = var5;
                                var2 = var3.bind(var4)(var2);
                            case 452:
                                throw var1;
                            case 454:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var5.fetchApplications = var3;
    var5.fetchApplication = var4;
    var3 = 8;
    var3 = var8[var3];
    var9 = var7.bind(var0)(var3);
    var6 = var9.createFetchStore;
    var3 = {};
    var11 = var11.APPLICATIONS;
    var3.getQueryId = var11;
    var11 = function arg0() {
        _fun47626: for (var _fun47626_ip = 0;;) switch (_fun47626_ip) {
            case 0:
                var4 = arg0;
                var3 = null;
                var1 = var3 != var4;
                var0 = null;
                if (!var1) {
                    _fun47626_ip = 44;
                    continue _fun47626
                }
            case 14:
                var2 = _closure1_slot6;
                var1 = var2.getApplication;
                var1 = var1.bind(var2)(var4);
                var2 = var3 != var1;
                var0 = null;
                if (!var2) {
                    _fun47626_ip = 44;
                    continue _fun47626
                }
            case 41:
                var0 = var1;
            case 44:
                return var0;
        }
    };
    var3.get = var11;
    var11 = function arg0() {
        _fun47627: for (var _fun47627_ip = 0;;) switch (_fun47627_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun47627_ip = 29;
                    continue _fun47627
                }
            case 9:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                _fun47627_ip = 60;
                continue _fun47627;
            case 29:
                var4 = _closure1_slot11;
                var3 = undefined;
                var2 = false;
                var3 = var4.bind(var3)(var5, var2);
                var2 = var3.then;
                var1 = _closure1_slot9;
                var0 = var2.bind(var3)(var1);
            case 60:
                return var0;
        }
    };
    var3.load = var11;
    var11 = function arg0() {
        _fun47628: for (var _fun47628_ip = 0;;) switch (_fun47628_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun47628_ip = 30;
                    continue _fun47628
                }
            case 12:
                var2 = _closure1_slot6;
                var1 = var2.isFetchingApplication;
                var0 = var1.bind(var2)(var3);
            case 30:
                return var0;
        }
    };
    var3.getIsLoading = var11;
    var3 = var6.bind(var9)(var10, var3);
    var _closure1_slot10 = var3;
    var6 = 9;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/applications/ApplicationActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.fetchApplication = var4;
    var2.useApplication = var3;
    var1 = function arg0() {
        _fun47629: for (var _fun47629_ip = 0;;) switch (_fun47629_ip) {
            case 0:
                var10 = arg0;
                var _closure2_slot0 = var10;
                var0 = _closure1_slot10;
                var1 = undefined;
                var0 = var0.bind(var1)(var10);
                var9 = var0.data;
                var _closure2_slot1 = var9;
                var3 = var0.isLoading;
                var2 = var0.error;
                var0 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 8;
                var6 = var8[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.useStateFromStores;
                var5 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var9;
                var4 = function() { // Environment: var4
                    _fun47630: for (var _fun47630_ip = 0;;) switch (_fun47630_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun47630_ip = 39;
                                continue _fun47630
                            }
                        case 13:
                            var5 = _closure1_slot4;
                            var4 = var5.getApplication;
                            var2 = _closure2_slot0;
                            var2 = var4.bind(var5)(var2);
                            if (!(var3 == var2)) {
                                _fun47630_ip = 45;
                                continue _fun47630
                            }
                        case 39:
                            var1 = _closure2_slot1;
                            return var1;
                        case 45:
                            var1 = _closure1_slot5;
                            var0 = var1.createFromServer;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var4 = var7.bind(var8)(var6, var4, var5);
                var0.app = var4;
                var0.isLoading = var3;
                var3 = null;
                var3 = var3 != var2;
                if (!var3) {
                    _fun47629_ip = 128;
                    continue _fun47629
                }
            case 125:
                var1 = var2;
            case 128:
                var0.error = var1;
                return var0;
        }
    };
    var2.useApplicationWithLoggedOutContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 5309, 3416, 3415, 660, 806, 507, 1384, 566, 2]);