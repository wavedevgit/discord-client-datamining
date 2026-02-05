// actions/ConnectedAccountsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var6 = function arg0, arg1() {
        _fun40801: for (var _fun40801_ip = 0;;) switch (_fun40801_ip) {
            case 0:
                var6 = arg0;
                var7 = arguments[2];
                var2 = undefined;
                if (!(var7 === var2)) {
                    _fun40801_ip = 14;
                    continue _fun40801
                }
            case 12:
                var7 = false;
            case 14:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var2 = var0.HTTP;
                var1 = var2.post;
                var0 = {};
                var5 = _closure1_slot6;
                var3 = var5.CONNECTIONS_CALLBACK;
                var3 = var3.bind(var5)(var6);
                var0.url = var3;
                var3 = {};
                var8 = arg1;
                var9 = var3;
                var5 = copyDataProperties(var9, var8);
                var5 = 'insecure';
                var3[var5] = var7;
                var5 = _closure1_slot7;
                var4 = var5.has;
                var5 = var4.bind(var5)(var6);
                var4 = 'friend_sync';
                var3[var4] = var5;
                var0.body = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot10 = var6;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
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
    var1 = var4.bind(var0)(var1);
    var8 = var1.AbortCodes;
    var _closure1_slot5 = var8;
    var8 = var1.Endpoints;
    var _closure1_slot6 = var8;
    var8 = var1.FRIEND_SYNC_PLATFORM_TYPES;
    var _closure1_slot7 = var8;
    var1 = var1.AnalyticEvents;
    var _closure1_slot8 = var1;
    var1 = 3;
    var1 = var5[var1];
    var8 = var7.bind(var0)(var1);
    var1 = var8.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var8
        }
    });
    var12 = 'ConnectedAccounts';
    var13 = var7;
    var1 = new var13[var8](var12, var11);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot9 = var1;
    var1 = {};
    var7 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
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
        var4 = _closure1_slot6;
        var4 = var4.CONNECTIONS;
        var1.url = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {
                'type': 'USER_CONNECTIONS_UPDATE',
                'local': true
            };
            var3 = arg0;
            var3 = var3.body;
            var0.accounts = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {
                'type': 'USER_CONNECTIONS_UPDATE',
                'local': true
            };
            var3 = new Array(0);
            var0.accounts = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.fetch = var7;
    var7 = function arg0() {
        _fun40805: for (var _fun40805_ip = 0;;) switch (_fun40805_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun40805_ip = 20;
                    continue _fun40805
                }
            case 18:
                var2 = {};
            case 20:
                var3 = var2.location;
                var _closure2_slot1 = var3;
                var3 = var2.twoWayLinkType;
                var _closure2_slot2 = var3;
                var3 = var2.userCode;
                var _closure2_slot3 = var3;
                var3 = var2.twoWayLink;
                var _closure2_slot4 = var3;
                var3 = var2.successRedirect;
                var _closure2_slot5 = var3;
                var2 = var2.handle;
                var _closure2_slot6 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun40807: for (var _fun40807_ip = 0;;) switch (_fun40807_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun40807_ip = 475;
                                    continue _fun40807
                                }
                            case 10:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 6;
                                var1 = var4[var1];
                                var6 = undefined;
                                var8 = var3.bind(var6)(var1);
                                var7 = var8.track;
                                var1 = _closure1_slot8;
                                var4 = var1.CONNECTED_ACCOUNT_INITIATED;
                                var3 = {};
                                var5 = _closure2_slot0;
                                var3.platform_type = var5;
                                var9 = _closure2_slot1;
                                var3.location = var9;
                                var3 = var7.bind(var8)(var4, var3);
                                var4 = _closure1_slot6;
                                var3 = var4.CONNECTIONS_AUTHORIZE;
                                var4 = var3.bind(var4)(var5);
                                var7 = global;
                                var3 = var7.URLSearchParams;
                                var5 = var3.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var13 = var5;
                                var3 = new var13[var3](var12);
                                var5 = var3 instanceof Object ? var3 : var5;
                                var8 = _closure2_slot3;
                                var3 = null;
                                if (!(var3 != var8)) {
                                    _fun40807_ip = 153;
                                    continue _fun40807
                                }
                            case 131:
                                var10 = var5.append;
                                var9 = _closure2_slot3;
                                var8 = 'two_way_user_code';
                                var8 = var10.bind(var5)(var8, var9);
                            case 153:
                                var8 = _closure2_slot5;
                                if (!(var3 != var8)) {
                                    _fun40807_ip = 183;
                                    continue _fun40807
                                }
                            case 161:
                                var10 = var5.append;
                                var9 = _closure2_slot5;
                                var8 = 'success_redirect';
                                var8 = var10.bind(var5)(var8, var9);
                            case 183:
                                var8 = _closure2_slot2;
                                if (!(var3 == var8)) {
                                    _fun40807_ip = 234;
                                    continue _fun40807
                                }
                            case 191:
                                var8 = _closure2_slot4;
                                if (!(var3 != var8)) {
                                    _fun40807_ip = 278;
                                    continue _fun40807
                                }
                            case 199:
                                var9 = var5.append;
                                var8 = var7.String;
                                var7 = _closure2_slot4;
                                var8 = var8.bind(var6)(var7);
                                var7 = 'two_way_link';
                                var7 = var9.bind(var5)(var7, var8);
                                _fun40807_ip = 278;
                                continue _fun40807;
                            case 234:
                                var9 = var5.append;
                                var8 = _closure2_slot2;
                                var7 = 'two_way_link_type';
                                var7 = var9.bind(var5)(var7, var8);
                                var9 = var5.append;
                                var8 = 'two_way_link';
                                var7 = 'true';
                                var7 = var9.bind(var5)(var8, var7);
                            case 278:
                                var7 = _closure2_slot6;
                                if (!(var3 != var7)) {
                                    _fun40807_ip = 306;
                                    continue _fun40807
                                }
                            case 286:
                                var8 = var5.append;
                                var7 = _closure2_slot6;
                                var1 = 'handle';
                                var1 = var8.bind(var5)(var1, var7);
                            case 306:
                                var1 = '?';
                                var4 = var4 + var1;
                                var1 = var5.toString;
                                var1 = var1.bind(var5)();
                                var7 = var4 + var1;
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var1 = 4;
                                var1 = var5[var1];
                                var1 = var4.bind(var6)(var1);
                                var5 = var1.HTTP;
                                var4 = var5.get;
                                var1 = {
                                    'url': null,
                                    'oldFormErrors': true,
                                    'rejectWithError': false
                                };
                                var1.url = var7;
                                var1 = var4.bind(var5)(var1);
                                SaveGenerator(address = 382);
                            case 380:
                                return var1;
                            case 382:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun40807_ip = 472;
                                    continue _fun40807
                                }
                            case 388:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 7;
                                var4 = var7[var4];
                                var6 = var5.bind(var6)(var4);
                                var5 = var6.getCallbackParamsFromURL;
                                var4 = var1.body;
                                var7 = var4.url;
                                var8 = var3 != var7;
                                var4 = '';
                                if (!var8) {
                                    _fun40807_ip = 438;
                                    continue _fun40807
                                }
                            case 435:
                                var4 = var7;
                            case 438:
                                var4 = var5.bind(var6)(var4);
                                var4 = var4.state;
                                if (!(var3 != var4)) {
                                    _fun40807_ip = 469;
                                    continue _fun40807
                                }
                            case 452:
                                var3 = _closure1_slot4;
                                var2 = var3.addPendingAuthorizedState;
                                var2 = var2.bind(var3)(var4);
                            case 469:
                                return var1;
                            case 472:
                                return var1;
                            case 475:
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
    var1.authorize = var7;
    var1.callback = var6;
    var6 = function arg0, arg1, arg2, arg3, arg4() {
        _fun40808: for (var _fun40808_ip = 0;;) switch (_fun40808_ip) {
            case 0:
                var7 = arg0;
                var6 = arg2;
                var10 = arg4;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var9 = undefined;
                var2 = var1.bind(var9)(var0);
                var1 = var2.put;
                var0 = {};
                var8 = _closure1_slot6;
                var4 = var8.CONNECTION;
                var3 = arg1;
                var3 = var4.bind(var8)(var7, var3);
                var0.url = var3;
                var3 = {};
                var3.name = var6;
                var8 = null;
                var11 = var8 == var10;
                var4 = undefined;
                if (var11) {
                    _fun40808_ip = 88;
                    continue _fun40808
                }
            case 82:
                var4 = var10.friend_sync;
            case 88:
                if (!(var8 == var4)) {
                    _fun40808_ip = 106;
                    continue _fun40808
                }
            case 92:
                var10 = _closure1_slot7;
                var8 = var10.has;
                var4 = var8.bind(var10)(var7);
            case 106:
                var3.friend_sync = var4;
                var0.body = var3;
                var3 = {};
                var4 = arg3;
                var3.location = var4;
                var0.context = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var3 = {};
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 9;
                var4 = var10[var4];
                var4 = var8.bind(var9)(var4);
                var4 = var4.NetworkActionNames;
                var4 = var4.USER_CONNECTIONS_UPDATE;
                var3.event = var4;
                var4 = {};
                var4.name = var6;
                var6 = _closure1_slot7;
                var5 = var6.has;
                var5 = var5.bind(var6)(var7);
                var4.friend_sync = var5;
                var3.properties = var4;
                var0.trackedActionData = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.connect = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot6;
        var5 = var6.CONNECTION;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.disconnect = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot6;
        var5 = var6.CONNECTION_REFRESH;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.refresh = var6;
    var6 = function arg0, arg1, arg2() {
        var4 = this;
        var3 = var4.update;
        var2 = {};
        var1 = 1;
        var0 = arg2;
        var0 = var1 === var0;
        var2.visibility = var0;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var1.setVisibility = var6;
    var6 = function arg0, arg1, arg2() {
        var4 = this;
        var3 = var4.update;
        var2 = {};
        var1 = 1;
        var0 = arg2;
        var0 = var1 === var0;
        var2.metadata_visibility = var0;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var1.setMetadataVisibility = var6;
    var6 = function arg0, arg1, arg2() {
        var4 = this;
        var3 = var4.update;
        var2 = {};
        var0 = arg2;
        var2.friend_sync = var0;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var1.setFriendSync = var6;
    var6 = function arg0, arg1, arg2() {
        var4 = this;
        var3 = var4.update;
        var2 = {};
        var0 = arg2;
        var2.show_activity = var0;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var4)(var1, var0, var2);
        return var0;
    };
    var1.setShowActivity = var6;
    var6 = function arg0, arg1, arg2() {
        var5 = arg2;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 8;
        var0 = var8[var0];
        var7 = undefined;
        var2 = var1.bind(var7)(var0);
        var1 = var2.patch;
        var0 = {};
        var10 = _closure1_slot6;
        var9 = var10.CONNECTION;
        var6 = arg0;
        var3 = arg1;
        var3 = var9.bind(var10)(var6, var3);
        var0.url = var3;
        var0.body = var5;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = {};
        var6 = _closure1_slot0;
        var4 = 9;
        var4 = var8[var4];
        var4 = var6.bind(var7)(var4);
        var4 = var4.NetworkActionNames;
        var4 = var4.USER_CONNECTIONS_UPDATE;
        var3.event = var4;
        var4 = {};
        var12 = var4;
        var11 = var5;
        var5 = copyDataProperties(var12, var11);
        var3.properties = var4;
        var0.trackedActionData = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.update = var6;
    var6 = function arg0, arg1() {
        var7 = arg0;
        var _closure2_slot0 = var7;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 5;
        var2 = var4[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var3 = var6.dispatch;
        var2 = {
            'type': 'USER_CONNECTIONS_INTEGRATION_JOINING',
            'integrationId': null,
            'joining': true
        };
        var2.integrationId = var7;
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot0;
        var2 = 4;
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.post;
        var2 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot6;
        var5 = var6.INTEGRATION_JOIN;
        var5 = var5.bind(var6)(var7);
        var2.url = var5;
        var1 = function(arg0) { // Environment: var1
            _fun40817: for (var _fun40817_ip = 0;;) switch (_fun40817_ip) {
                case 0:
                    var6 = arg0;
                    var3 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var4 = 5;
                    var1 = var0[var4];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var1);
                    var5 = var7.dispatch;
                    var3 = {
                        'type': 'USER_CONNECTIONS_INTEGRATION_JOINING',
                        'integrationId': null,
                        'joining': false
                    };
                    var8 = _closure2_slot0;
                    var3.integrationId = var8;
                    var3 = var5.bind(var7)(var3);
                    var3 = var6.ok;
                    if (var3) {
                        _fun40817_ip = 165;
                        continue _fun40817
                    }
                case 74:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'USER_CONNECTIONS_INTEGRATION_JOINING_ERROR';
                    var2.type = var5;
                    var5 = _closure2_slot0;
                    var2.integrationId = var5;
                    var7 = var6.hasErr;
                    var5 = undefined;
                    if (var7) {
                        _fun40817_ip = 138;
                        continue _fun40817
                    }
                case 128:
                    var6 = var6.body;
                    var5 = var6.message;
                case 138:
                    var2.error = var5;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun40817_ip = 165;
                        continue _fun40817
                    }
                case 157:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                case 165:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.joinServer = var6;
    var6 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun40820: for (var _fun40820_ip = 0;;) switch (_fun40820_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun40820_ip = 289;
                            continue _fun40820
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var6 = undefined;
                        var2 = var3.bind(var6)(var2);
                        var5 = var2.HTTP;
                        var3 = var5.get;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var11 = _closure1_slot6;
                        var10 = var11.CONNECTION_ACCESS_TOKEN;
                        var9 = _closure2_slot0;
                        var8 = _closure2_slot1;
                        var8 = var10.bind(var11)(var9, var8);
                        var2.url = var8;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 97);
                    case 95:
                        return var2;
                    case 97:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun40820_ip = 181;
                            continue _fun40820
                        }
                    case 103:
                        var3 = var2.body;
                        var3 = var3.access_token;
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 5;
                        var4 = var8[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'USER_CONNECTION_UPDATE';
                        var4.type = var8;
                        var8 = _closure2_slot0;
                        var4.platformType = var8;
                        var7 = _closure2_slot1;
                        var4.id = var7;
                        var4.accessToken = var3;
                        var4 = var5.bind(var6)(var4);
                    case 178: // try_end0
                        return var3;
                    case 181:
                        return var2;
                    case 184: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var1 = var2;
                        var2 = var2.body;
                        var4 = var2.code;
                        var3 = _closure1_slot5;
                        var3 = var3.CONNECTION_REVOKED;
                        if (!(var4 === var3)) {
                            _fun40820_ip = 287;
                            continue _fun40820
                        }
                    case 216:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 5;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'USER_CONNECTION_UPDATE';
                        var2.type = var5;
                        var6 = _closure2_slot0;
                        var2.platformType = var6;
                        var5 = _closure2_slot1;
                        var2.id = var5;
                        var5 = true;
                        var2.revoked = var5;
                        var2 = var3.bind(var4)(var2);
                    case 287:
                        throw var1;
                    case 289:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.refreshAccessToken = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot6;
        var4 = var5.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var6 = arg1;
        var7 = var3;
        var4 = copyDataProperties(var7, var6);
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.linkDispatchAuthCallback = var6;
    var6 = function arg0, arg1, arg2, arg3, arg4() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var1 = arg4;
        var _closure2_slot4 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun40824: for (var _fun40824_ip = 0;;) switch (_fun40824_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun40824_ip = 209;
                            continue _fun40824
                        }
                    case 10:
                        var1 = _closure2_slot1;
                        var3 = null;
                        if (!(var3 == var1)) {
                            _fun40824_ip = 48;
                            continue _fun40824
                        }
                    case 23:
                        var4 = _closure1_slot9;
                        var2 = var4.error;
                        var1 = 'Two-way link: missing authorize location';
                        var1 = var2.bind(var4)(var1);
                        _fun40824_ip = 140;
                        continue _fun40824;
                    case 48:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 7;
                        var2 = var4[var2];
                        var4 = undefined;
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.getCallbackParamsFromURL;
                        var2 = _closure2_slot1;
                        var2 = var6.bind(var7)(var2);
                        var6 = var2.code;
                        var9 = var2.error;
                        var2 = var2.errorDescription;
                        if (!(var3 != var9)) {
                            _fun40824_ip = 145;
                            continue _fun40824
                        }
                    case 108:
                        var8 = _closure1_slot9;
                        var7 = var8.error;
                        var3 = {};
                        var3.error = var9;
                        var3.errorDescription = var2;
                        var2 = 'Two-way link: missing authorize code';
                        var2 = var7.bind(var8)(var2, var3);
                    case 140:
                        var2 = undefined;
                        return var2;
                    case 145:
                        var3 = _closure1_slot10;
                        var2 = _closure2_slot0;
                        var1 = {};
                        var7 = _closure2_slot2;
                        var1.code = var7;
                        var7 = _closure2_slot3;
                        var1.state = var7;
                        var1.two_way_link_code = var6;
                        var5 = _closure2_slot4;
                        var1.token_redirect_uri = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        SaveGenerator(address = 197);
                    case 195:
                        return var1;
                    case 197:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun40824_ip = 206;
                            continue _fun40824
                        }
                    case 203:
                        return var1;
                    case 206:
                        return var1;
                    case 209:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.completeTwoWayLink = var6;
    var6 = function arg0, arg1, arg2, arg3, arg4() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot6;
        var4 = var5.CONNECTIONS_SESSION_HANDOFF;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg1;
        var3.state = var4;
        var4 = arg2;
        var3.code = var4;
        var4 = arg3;
        var3.openid_params = var4;
        var4 = arg4;
        var3.iss = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.sessionHandoff = var6;
    var3 = function arg0, arg1() {
        var4 = arg1;
        var1 = global;
        var0 = var1.URLSearchParams;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var10 = var2;
        var0 = new var10[var0](var9);
        var3 = var0 instanceof Object ? var0 : var2;
        var2 = var3.append;
        var0 = 'state';
        var0 = var2.bind(var3)(var0, var4);
        var6 = _closure1_slot6;
        var5 = var6.CONNECTIONS_SESSION_HANDOFF;
        var2 = arg0;
        var6 = var5.bind(var6)(var2);
        var2 = var3.toString;
        var5 = var2.bind(var3)();
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '?';
        var3 = var3.bind(var2)(var6, var1, var5);
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.get;
        var0 = {};
        var0.url = var3;
        var3 = {};
        var3.state = var4;
        var0.body = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getHandoffStatus = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ConnectedAccountsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4519, 660, 3, 507, 806, 795, 4522, 4525, 481, 2]);