// actions/ChangeLogActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = global;
        var1 = var0.Date;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var6 = var2;
        var1 = new var6[var1](var5);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.getMinutes;
        var4 = var1.bind(var2)();
        var3 = var0.Math;
        var2 = var3.floor;
        var1 = 5;
        var1 = var4 / var1;
        var2 = var2.bind(var3)(var1);
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'x=';
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ChangelogPlatforms;
    var _closure1_slot6 = var1;
    var1 = {};
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANGE_LOG_LOCK';
        var1.type = var4;
        var4 = arg0;
        var1.key = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.lockChangeLog = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANGE_LOG_UNLOCK';
        var1.type = var4;
        var4 = arg0;
        var1.key = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.unlockChangeLog = var6;
    var6 = function arg0, arg1() {
        var3 = arg0;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 4;
        var2 = var4[var0];
        var0 = undefined;
        var6 = var5.bind(var0)(var2);
        var5 = var6.dispatch;
        var2 = {};
        var7 = 'CHANGE_LOG_MARK_SEEN';
        var2.type = var7;
        var2.changelogId = var3;
        var7 = arg1;
        var2.changelogDate = var7;
        var2 = var5.bind(var6)(var2);
        var2 = _closure1_slot0;
        var1 = 5;
        var1 = var4[var1];
        var1 = var2.bind(var0)(var1);
        var2 = var1.LastReceivedChangelogId;
        var1 = var2.updateSetting;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.markChangelogAsSeen = var6;
    var6 = function arg0() {
        _fun56107: for (var _fun56107_ip = 0;;) switch (_fun56107_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var1);
                var4 = var5.dispatch;
                var1 = {};
                var6 = 'CHANGE_LOG_SET_OVERRIDE';
                var1.type = var6;
                var1.id = var3;
                var1 = var4.bind(var5)(var1);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun56107_ip = 74;
                    continue _fun56107
                }
            case 63:
                var1 = var2.sendChangelogMessage;
                var1 = var1.bind(var2)(var3);
            case 74:
                return var0;
        }
    };
    var1.setChangelogOverride = var6;
    var6 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot5;
        var4 = var4.CHANGELOG_MESSAGES;
        var1.url = var4;
        var4 = {};
        var5 = arg0;
        var4.changelog_id = var5;
        var1.body = var4;
        var4 = true;
        var1.rejectWithError = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.sendChangelogMessage = var6;
    var6 = function() {
        var0 = _closure1_slot6;
        var7 = var0.MOBILE;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 6;
        var0 = var2[var0];
        var4 = undefined;
        var0 = var1.bind(var4)(var0);
        var2 = var0.HTTP;
        var1 = var2.get;
        var0 = {};
        var3 = _closure1_slot7;
        var6 = var3.bind(var4)();
        var3 = global;
        var3 = var3.HermesInternal;
        var5 = var3.concat;
        var4 = 'https://cdn.discordapp.com/changelogs/config_';
        var3 = '.json?';
        var3 = var5.bind(var4)(var7, var3, var6);
        var0.url = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.fetchChangelogConfig = var6;
    var3 = function arg0, arg1() {
        _fun56110: for (var _fun56110_ip = 0;;) switch (_fun56110_ip) {
            case 0:
                var3 = arguments[2];
                var2 = arguments[3];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun56110_ip = 30;
                    continue _fun56110
                }
            case 28:
                var3 = false;
            case 30:
                var _closure2_slot2 = var3;
                if (!(var2 === var1)) {
                    _fun56110_ip = 40;
                    continue _fun56110
                }
            case 38:
                var2 = false;
            case 40:
                var _closure2_slot3 = var2;
                var2 = this;
                var _closure2_slot4 = var2;
                var2 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun56112: for (var _fun56112_ip = 0;;) switch (_fun56112_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun56112_ip = 421;
                                    continue _fun56112
                                }
                            case 10:
                                var5 = undefined;
                                var9 = undefined;
                                var8 = undefined;
                                var7 = _closure1_slot4;
                                var6 = var7.getChangelog;
                                var4 = _closure2_slot0;
                                var1 = _closure2_slot1;
                                var4 = var6.bind(var7)(var4, var1);
                                var1 = null;
                                if (!(var1 == var4)) {
                                    _fun56112_ip = 418;
                                    continue _fun56112
                                }
                            case 55:
                                var4 = _closure2_slot2;
                                var6 = _closure1_slot6;
                                if (var4) {
                                    _fun56112_ip = 74;
                                    continue _fun56112
                                }
                            case 66:
                                var4 = var6.MOBILE;
                                _fun56112_ip = 80;
                                continue _fun56112;
                            case 74:
                                var4 = var6.DESKTOP;
                            case 80:
                                var9 = var4;
                                var6 = _closure2_slot3;
                                var4 = '';
                                if (var6) {
                                    _fun56112_ip = 124;
                                    continue _fun56112
                                }
                            case 94:
                                var6 = _closure1_slot7;
                                var10 = var6.bind(var5)();
                                var6 = global;
                                var6 = var6.HermesInternal;
                                var7 = var6.concat;
                                var6 = '?';
                                var4 = var7.bind(var6)(var10);
                            case 124:
                                var8 = var4;
                            case 127: // try_start_0
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 6;
                                var4 = var7[var4];
                                var4 = var6.bind(var5)(var4);
                                var7 = var4.HTTP;
                                var6 = var7.get;
                                var4 = {};
                                var22 = var9;
                                var20 = _closure2_slot0;
                                var18 = _closure2_slot1;
                                var16 = var8;
                                var8 = global;
                                var8 = var8.HermesInternal;
                                var11 = var8.concat;
                                var23 = 'https://cdn.discordapp.com/changelogs/';
                                var9 = '/';
                                var17 = '.json';
                                var21 = var9;
                                var19 = var9;
                                var8 = var23[var11](var22, var21, var20, var19, var18, var17, var16, var15);
                                var4.url = var8;
                                var8 = true;
                                var4.rejectWithError = var8;
                                var4 = var6.bind(var7)(var4);
                                SaveGenerator(address = 231);
                            case 229:
                                return var4;
                            case 231:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun56112_ip = 305;
                                    continue _fun56112
                                }
                            case 237:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var6 = 4;
                                var6 = var8[var6];
                                var8 = var7.bind(var5)(var6);
                                var7 = var8.dispatch;
                                var6 = {};
                                var9 = 'CHANGE_LOG_FETCH_SUCCESS';
                                var6.type = var9;
                                var9 = _closure2_slot0;
                                var6.id = var9;
                                var9 = var4.body;
                                var6.changelog = var9;
                                var6 = var7.bind(var8)(var6);
                                var6 = var4.body;
                            case 302: // try_end0
                                return var6;
                            case 305:
                                return var4;
                            case 308: // catch_target0
                                CatchBlockStart(arg_register = 4);
                                var4 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 4;
                                var3 = var6[var3];
                                var6 = var4.bind(var5)(var3);
                                var5 = var6.dispatch;
                                var3 = {};
                                var4 = 'CHANGE_LOG_FETCH_FAILED';
                                var3.type = var4;
                                var4 = _closure2_slot0;
                                var3.id = var4;
                                var4 = _closure2_slot1;
                                var3.locale = var4;
                                var3 = var5.bind(var6)(var3);
                                var6 = 'en-US';
                                var3 = null;
                                if (!(var6 !== var4)) {
                                    _fun56112_ip = 412;
                                    continue _fun56112
                                }
                            case 379:
                                var5 = _closure2_slot4;
                                var4 = var5.fetchChangelog;
                                var2 = _closure2_slot0;
                                var2 = var4.bind(var5)(var2, var6);
                                SaveGenerator(address = 403);
                            case 401:
                                return var2;
                            case 403:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                var3 = var2;
                                if (var4) {
                                    _fun56112_ip = 415;
                                    continue _fun56112
                                }
                            case 412:
                                return var3;
                            case 415:
                                return var2;
                            case 418:
                                return var1;
                            case 421:
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
    var1.fetchChangelog = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ChangeLogActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3946, 660, 1669, 806, 1348, 507, 2]);