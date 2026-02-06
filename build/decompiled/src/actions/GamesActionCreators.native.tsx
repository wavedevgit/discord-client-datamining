// actions/GamesActionCreators.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun42954: for (var _fun42954_ip = 0;;) switch (_fun42954_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var9 = var3.userId;
                var8 = var3.sessionId;
                var1 = var3.application;
                var5 = var3.channelId;
                var2 = var3.messageId;
                var11 = var3.remotePartyId;
                var7 = var1.id;
                var _closure2_slot1 = var7;
                var3 = null;
                var1 = var3 != var5;
                if (!var1) {
                    _fun42954_ip = 66;
                    continue _fun42954
                }
            case 62:
                var1 = var3 != var2;
            case 66:
                var3 = undefined;
                var4 = undefined;
                if (!var1) {
                    _fun42954_ip = 94;
                    continue _fun42954
                }
            case 73:
                var1 = {};
                var1.channel_id = var5;
                var1.message_id = var2;
                var2 = true;
                var1.headless = var2;
                var4 = var1;
            case 94:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 3;
                var1 = var6[var1];
                var10 = var2.bind(var3)(var1);
                var2 = var10.dispatch;
                var1 = {};
                var12 = 'ACTIVITY_JOIN_LOADING';
                var1.type = var12;
                var1.applicationId = var7;
                var1.remotePartyId = var11;
                var1 = var2.bind(var10)(var1);
                var2 = _closure1_slot0;
                var1 = 4;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {
                    'url': null,
                    'retries': 3,
                    'query': null,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var6 = _closure1_slot4;
                var5 = var6.USER_ACTIVITY_JOIN;
                var5 = var5.bind(var6)(var9, var8, var7);
                var1.url = var5;
                var1.query = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'ACTIVITY_JOIN_FAILED';
                    var0.type = var3;
                    var3 = _closure2_slot1;
                    var0.applicationId = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = false;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = function arg0, arg1() {
        var0 = _closure1_slot5;
        var5 = var0.GAME_INVITE_FRAGMENT;
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var0 = arg1;
        var4 = var4.bind(var3)(var2, var5, var0);
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.openURL;
        var1 = _closure1_slot6;
        var1 = var1.SAFARI;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var _closure1_slot8 = var3;
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
    var1 = var4.bind(var0)(var1);
    var7 = var1.Endpoints;
    var _closure1_slot4 = var7;
    var7 = var1.DiscordConnectDeeplinks;
    var _closure1_slot5 = var7;
    var1 = var1.WebBrowserType;
    var _closure1_slot6 = var1;
    var1 = {};
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var1.addGame = var7;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var1.toggleOverlay = var7;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var1.editName = var7;
    var7 = function() {
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.reject;
        var4 = var0.Error;
        var0 = var4.prototype;
        var3 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var5 = 'not supported';
        var6 = var3;
        var0 = new var6[var4](var5, var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.identifyGame = var7;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var1.getDetectableGames = var7;
    var7 = function arg0() {
        _fun42963: for (var _fun42963_ip = 0;;) switch (_fun42963_ip) {
            case 0:
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun42963_ip = 21;
                    continue _fun42963
                }
            case 9:
                var2 = {};
                var3 = false;
                var2.forceFetch = var3;
                var1 = var2;
            case 21:
                var1 = var1.forceFetch;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.fetchDetectableGamesSupplemental;
                var2 = {};
                var2.forceFetch = var1;
                var1 = arg0;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var1.getDetectableGamesSupplemental = var7;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var1.reportUnverifiedGame = var7;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var1.uploadIcon = var7;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var1.deleteEntry = var7;
    var7 = function() {
        var0 = global;
        var1 = var0.Promise;
        var0 = var1.resolve;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.launch = var7;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun42970: for (var _fun42970_ip = 0;;) switch (_fun42970_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun42970_ip = 316;
                            continue _fun42970
                        }
                    case 12:
                        var3 = _closure2_slot0;
                        var4 = var3.application;
                        var12 = var3.channelId;
                        var1 = var3.embedded;
                        var10 = var3.source;
                        var9 = var3.locationObject;
                        var3 = undefined;
                        if (!(var3 === var9)) {
                            _fun42970_ip = 54;
                            continue _fun42970
                        }
                    case 52:
                        var9 = {};
                    case 54:
                        var6 = _closure2_slot0;
                        var8 = var6.analyticsLocations;
                        if (!(var3 === var8)) {
                            _fun42970_ip = 72;
                            continue _fun42970
                        }
                    case 68:
                        var8 = new Array(0);
                    case 72:
                        var6 = _closure2_slot0;
                        var6 = var6.remotePartyId;
                        if (var1) {
                            _fun42970_ip = 132;
                            continue _fun42970
                        }
                    case 85:
                        var1 = null;
                        if (!(var1 == var6)) {
                            _fun42970_ip = 107;
                            continue _fun42970
                        }
                    case 91:
                        var6 = _closure2_slot0;
                        var1 = function arg0() {
                            _fun42972: for (var _fun42972_ip = 0;;) switch (_fun42972_ip) {
                                case 0:
                                    var3 = arg0;
                                    var4 = var3.application;
                                    var6 = var4.id;
                                    var8 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var7 = 2;
                                    var5 = var2[var7];
                                    var2 = undefined;
                                    var5 = var8.bind(var2)(var5);
                                    var5 = var5.DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID;
                                    if (!(var6 !== var5)) {
                                        _fun42972_ip = 58;
                                        continue _fun42972
                                    }
                                case 50:
                                    var5 = var4.deeplink_uri;
                                    _fun42972_ip = 81;
                                    continue _fun42972;
                                case 58:
                                    var6 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var4 = var4[var7];
                                    var4 = var6.bind(var2)(var4);
                                    var5 = var4.DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
                                case 81:
                                    var _closure5_slot0 = var5;
                                    var4 = null;
                                    if (!(var4 != var5)) {
                                        _fun42972_ip = 108;
                                        continue _fun42972
                                    }
                                case 91:
                                    var1 = _closure1_slot7;
                                    var0 = function(arg0) { // Environment: var0
                                        var3 = _closure1_slot8;
                                        var2 = _closure5_slot0;
                                        var0 = arg0;
                                        var0 = var0.body;
                                        var1 = var0.secret;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2, var1);
                                        var0 = true;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var3, var0);
                                    _fun42972_ip = 129;
                                    continue _fun42972;
                                case 108:
                                    var1 = global;
                                    var3 = var1.Promise;
                                    var2 = var3.resolve;
                                    var1 = false;
                                    var0 = var2.bind(var3)(var1);
                                case 129:
                                    return var0;
                            }
                        };
                        var1 = var1.bind(var3)(var6);
                        _fun42970_ip = 129;
                        continue _fun42970;
                    case 107:
                        var6 = _closure1_slot7;
                        var5 = _closure2_slot0;
                        var2 = function() { // Environment: var2
                            var0 = true;
                            return var0;
                        };
                        var1 = var6.bind(var3)(var5, var2);
                    case 129:
                        return var1;
                    case 132:
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 7;
                        var1 = var6[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.canLaunchFrame;
                        var1 = var1.bind(var2)(var4);
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        if (var1) {
                            _fun42970_ip = 264;
                            continue _fun42970
                        }
                    case 177:
                        var1 = 9;
                        var1 = var5[var1];
                        var7 = var2.bind(var3)(var1);
                        var1 = {};
                        var6 = var4.id;
                        var1.applicationId = var6;
                        var6 = null;
                        var13 = var6 != var12;
                        var11 = undefined;
                        if (!var13) {
                            _fun42970_ip = 214;
                            continue _fun42970
                        }
                    case 211:
                        var11 = var12;
                    case 214:
                        var1.activityChannelId = var11;
                        var1.source = var10;
                        var1.locationObject = var9;
                        var1.analyticsLocations = var8;
                        var1 = var7.bind(var3)(var1);
                        SaveGenerator(address = 242);
                    case 240:
                        return var1;
                    case 242:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun42970_ip = 261;
                            continue _fun42970
                        }
                    case 248:
                        var6 = var6 != var1;
                        if (!var6) {
                            _fun42970_ip = 258;
                            continue _fun42970
                        }
                    case 255:
                        var6 = var1;
                    case 258:
                        return var6;
                    case 261:
                        return var1;
                    case 264:
                        var1 = 8;
                        var1 = var5[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.launchFrame;
                        var1 = {};
                        var4 = var4.id;
                        var1.applicationId = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 302);
                    case 300:
                        return var1;
                    case 302:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun42970_ip = 313;
                            continue _fun42970
                        }
                    case 308:
                        var2 = true;
                        return var2;
                    case 313:
                        return var1;
                    case 316:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.join = var6;
    var1.joinWithSecret = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/GamesActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 670, 806, 507, 3146, 4671, 4673, 7965, 7990, 2]);