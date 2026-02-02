// modules/user_profile/WidgetActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var6 = var1.ComponentActions;
    var _closure1_slot5 = var6;
    var1 = var1.Endpoints;
    var _closure1_slot6 = var1;
    var1 = {};
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'WIDGET_PENDING_SET';
        var1.type = var4;
        var4 = arg0;
        var1.widgets = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setPendingWidgets = var6;
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun42796: for (var _fun42796_ip = 0;;) switch (_fun42796_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun42796_ip = 319;
                            continue _fun42796
                        }
                    case 10:
                        var4 = undefined;
                        var8 = undefined;
                        var9 = undefined;
                        var3 = _closure1_slot4;
                        var1 = var3.getCurrentUser;
                        var5 = var1.bind(var3)();
                        var3 = null;
                        var6 = var3 == var5;
                        var1 = undefined;
                        if (var6) {
                            _fun42796_ip = 48;
                            continue _fun42796
                        }
                    case 43:
                        var1 = var5.id;
                    case 48:
                        var8 = var1;
                        if (!(var3 == var1)) {
                            _fun42796_ip = 58;
                            continue _fun42796
                        }
                    case 55:
                        return var4;
                    case 58:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var5 = 3;
                        var1 = var1[var5];
                        var6 = var3.bind(var4)(var1);
                        var3 = var6.dispatch;
                        var1 = {};
                        var7 = 'WIDGET_PENDING_SAVE_START';
                        var1.type = var7;
                        var1 = var3.bind(var6)(var1);
                        var6 = _closure2_slot0;
                        var3 = var6.map;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = var1.toSubmission;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var9 = var3.bind(var6)(var1);
                    case 124: // try_start_0
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 4;
                        var1 = var6[var1];
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.put;
                        var1 = {};
                        var7 = _closure1_slot6;
                        var7 = var7.USER_PROFILE_WIDGETS;
                        var1.url = var7;
                        var7 = {};
                        var7.widgets = var9;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 202);
                    case 200:
                        return var1;
                    case 202:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun42796_ip = 273;
                            continue _fun42796
                        }
                    case 208:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var7 = var6.bind(var4)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var9 = 'WIDGET_PENDING_SAVE_SUCCESS';
                        var3.type = var9;
                        var3.userId = var8;
                        var8 = var1.body;
                        var8 = var8.widgets;
                        var3.widgets = var8;
                        var3 = var6.bind(var7)(var3);
                        var3 = var1.body;
                    case 270: // try_end0
                        return var3;
                    case 273:
                        return var1;
                    case 276: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'WIDGET_PENDING_SAVE_FAILURE';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 319:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.savePendingWidgets = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'WIDGET_PENDING_CLEAR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearPendingWidgets = var6;
    var6 = function() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun42801: for (var _fun42801_ip = 0;;) switch (_fun42801_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun42801_ip = 451;
                            continue _fun42801
                        }
                    case 10:
                        var4 = undefined;
                        var12 = undefined;
                        var7 = undefined;
                        var13 = undefined;
                        var14 = undefined;
                        var9 = undefined;
                        var11 = undefined;
                        var8 = undefined;
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var2 = 3;
                        var1 = var1[var2];
                        var6 = var3.bind(var4)(var1);
                        var3 = var6.dispatch;
                        var1 = {};
                        var10 = 'WIDGET_SUGGESTED_FETCH_START';
                        var1.type = var10;
                        var1 = var3.bind(var6)(var1);
                    case 71: // try_start_0
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 4;
                        var1 = var6[var1];
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.get;
                        var1 = {};
                        var10 = _closure1_slot6;
                        var10 = var10.USER_PROFILE_SUGGESTED_GAMES;
                        var1.url = var10;
                        var10 = true;
                        var1.rejectWithError = var10;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 132);
                    case 130:
                        return var1;
                    case 132:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun42801_ip = 382;
                            continue _fun42801
                        }
                    case 141:
                        var8 = var1;
                        var6 = var1.body;
                        var12 = var6;
                        var10 = null;
                        var15 = var10 == var6;
                        var6 = undefined;
                        if (var15) {
                            _fun42801_ip = 169;
                            continue _fun42801
                        }
                    case 163:
                        var6 = var12.suggested_games;
                    case 169:
                        var6 = var10 != var6;
                        var3 = var6;
                        if (!var6) {
                            _fun42801_ip = 209;
                            continue _fun42801
                        }
                    case 179:
                        var6 = var8;
                        var6 = var6.body;
                        var7 = var6;
                        var12 = var10 == var6;
                        var6 = undefined;
                        if (var12) {
                            _fun42801_ip = 205;
                            continue _fun42801
                        }
                    case 199:
                        var6 = var7.suggested_wishlist_games;
                    case 205:
                        var3 = var10 != var6;
                    case 209:
                        if (var3) {
                            _fun42801_ip = 249;
                            continue _fun42801
                        }
                    case 212:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 5;
                        var3 = var7[var3];
                        var7 = var6.bind(var4)(var3);
                        var6 = var7.captureMessage;
                        var3 = 'Suggested games or wishlist games not found';
                        var3 = var6.bind(var7)(var3);
                    case 249:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var2];
                        var7 = var6.bind(var4)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var12 = 'WIDGET_SUGGESTED_FETCH_SUCCESS';
                        var3.type = var12;
                        var12 = var8;
                        var12 = var12.body;
                        var14 = var12;
                        var15 = var10 == var12;
                        var12 = undefined;
                        if (var15) {
                            _fun42801_ip = 309;
                            continue _fun42801
                        }
                    case 303:
                        var12 = var14.suggested_games;
                    case 309:
                        var13 = var12;
                        if (!(var10 == var12)) {
                            _fun42801_ip = 322;
                            continue _fun42801
                        }
                    case 316:
                        var12 = new Array(0);
                        _fun42801_ip = 325;
                        continue _fun42801;
                    case 322:
                        var12 = var13;
                    case 325:
                        var3.suggestedGamesIds = var12;
                        var8 = var8.body;
                        var11 = var8;
                        var12 = var10 == var8;
                        var8 = undefined;
                        if (var12) {
                            _fun42801_ip = 353;
                            continue _fun42801
                        }
                    case 347:
                        var8 = var11.suggested_wishlist_games;
                    case 353:
                        var9 = var8;
                        if (!(var10 == var8)) {
                            _fun42801_ip = 366;
                            continue _fun42801
                        }
                    case 360:
                        var8 = new Array(0);
                        _fun42801_ip = 369;
                        continue _fun42801;
                    case 366:
                        var8 = var9;
                    case 369:
                        var3.suggestedWishlistGamesIds = var8;
                        var3 = var6.bind(var7)(var3);
                    case 379: // try_end0
                        return var4;
                    case 382:
                        return var1;
                    case 385: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = var5[var2];
                        var7 = var3.bind(var4)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var8 = 'WIDGET_SUGGESTED_FETCH_FAILURE';
                        var2.type = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = 5;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var1);
                        throw var1;
                    case 451:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchSuggestedGames = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'WIDGET_SUGGESTED_REMOVE_GAME';
        var1.type = var4;
        var4 = arg0;
        var1.applicationId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.removeGameFromSuggestedGames = var6;
    var3 = function() {
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 6;
        var3 = var8[var2];
        var0 = undefined;
        var3 = var6.bind(var0)(var3);
        var5 = var3.ComponentDispatch;
        var4 = var5.dispatch;
        var1 = _closure1_slot5;
        var3 = var1.SHAKE_PROFILE_MODAL;
        var3 = var4.bind(var5)(var3);
        var2 = var8[var2];
        var2 = var6.bind(var0)(var2);
        var3 = var2.ComponentDispatch;
        var2 = var3.dispatch;
        var1 = var1.EMPHASIZE_NOTICE;
        var1 = var2.bind(var3)(var1);
        var1 = 7;
        var1 = var8[var1];
        var1 = var6.bind(var0)(var1);
        var3 = var1.AccessibilityAnnouncer;
        var2 = var3.announce;
        var1 = 8;
        var4 = var8[var1];
        var4 = var6.bind(var0)(var4);
        var7 = var4.intl;
        var5 = var7.string;
        var4 = var8[var1];
        var4 = var6.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4.GP7JLE;
        var7 = var5.bind(var7)(var4);
        var4 = var8[var1];
        var4 = var6.bind(var0)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var1 = var8[var1];
        var1 = var6.bind(var0)(var1);
        var1 = var1.t;
        var1 = var1.gKoO1D;
        var6 = var4.bind(var5)(var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var1 = ' ';
        var1 = var5.bind(var4)(var7, var1, var6);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.notifyUnsavedWidgets = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/WidgetActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1613, 660, 806, 507, 1207, 1229, 3167, 1234, 2]);