// modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        _fun110174: for (var _fun110174_ip = 0;;) switch (_fun110174_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 18;
                var0 = var0[var6];
                var5 = undefined;
                var1 = var1.bind(var5)(var0);
                var0 = var1.isSnowflakeBoundDismissibleContent;
                var1 = var0.bind(var1)(var4);
                var0 = 'snowflake_bound';
                if (var1) {
                    _fun110174_ip = 134;
                    continue _fun110174
                }
            case 48:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isVersionedDismissibleContent;
                var3 = var1.bind(var3)(var4);
                var1 = 'versioned';
                if (var3) {
                    _fun110174_ip = 131;
                    continue _fun110174
                }
            case 85:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isTimeRecurringDismissibleContent;
                var3 = var2.bind(var3)(var4);
                var2 = 'single_use';
                if (!var3) {
                    _fun110174_ip = 128;
                    continue _fun110174
                }
            case 122:
                var2 = 'time_recurring';
            case 128:
                var1 = var2;
            case 131:
                var0 = var1;
            case 134:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var1 = function arg0() {
        var6 = arg0;
        var1 = _closure1_slot8;
        var0 = var1.getContent;
        var1 = var0.bind(var1)();
        var0 = null;
        var5 = var0 != var1;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 19;
        var1 = var9[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot9;
        var2 = var1.MAIN_VIEW_ACTION_SHEET_SELECTED;
        var1 = {};
        var8 = _closure1_slot0;
        var10 = 17;
        var10 = var9[var10];
        var10 = var8.bind(var0)(var10);
        var11 = var10.DismissibleContent;
        var10 = var6.id;
        var10 = var11[var10];
        var1.dc_id = var10;
        var10 = _closure1_slot13;
        var7 = var6.id;
        var7 = var10.bind(var0)(var7);
        var1.dc_type = var7;
        var7 = 20;
        var7 = var9[var7];
        var7 = var8.bind(var0)(var7);
        var8 = var7.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
        var7 = var8.has;
        var6 = var6.id;
        var6 = var7.bind(var8)(var6);
        var1.bypass_fatigue = var6;
        var1.is_another_action_sheet_open = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var8 = 0;
    var3 = var7[var8];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var10 = var7[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var10);
    var _closure1_slot4 = var3;
    var3 = var7[var9];
    var3 = var6.bind(var0)(var3);
    var10 = var3.useEffect;
    var _closure1_slot5 = var10;
    var10 = var3.useMemo;
    var _closure1_slot6 = var10;
    var3 = var3.useRef;
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.DismissibleContentGroupName;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var11 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 8;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = {};
    var10 = 17;
    var5 = var7[var10];
    var5 = var6.bind(var0)(var5);
    var5 = var5.DismissibleContent;
    var5 = var5.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    var3.id = var5;
    var5 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 11;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.importer = var5;
    var5 = new Array(3);
    var5[0] = var3;
    var3 = {};
    var12 = var7[var10];
    var12 = var6.bind(var0)(var12);
    var12 = var12.DismissibleContent;
    var12 = var12.DISCOUNT_OFFER_ACTION_SHEET;
    var3.id = var12;
    var12 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 14;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.importer = var12;
    var5[1] = var3;
    var3 = {};
    var12 = var7[var10];
    var12 = var6.bind(var0)(var12);
    var12 = var12.DismissibleContent;
    var12 = var12.MOBILE_BOGO_PROMOTION_ACTION_SHEET;
    var3.id = var12;
    var12 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 10;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.importer = var12;
    var5[2] = var3;
    var3 = new Array(8);
    var15 = var3;
    var14 = var5;
    var13 = 0;
    var5 = arraySpread(var15, var14, var13);
    var8 = {};
    var12 = var7[var10];
    var12 = var6.bind(var0)(var12);
    var12 = var12.DismissibleContent;
    var12 = var12.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    var8.id = var12;
    var12 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 13;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var8.importer = var12;
    var3[var5] = var8;
    var5 = var5 + var9;
    var8 = {};
    var12 = var7[var10];
    var12 = var6.bind(var0)(var12);
    var12 = var12.DismissibleContent;
    var12 = var12.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    var8.id = var12;
    var8.importer = var11;
    var3[var5] = var8;
    var5 = var5 + var9;
    var8 = {};
    var12 = var7[var10];
    var12 = var6.bind(var0)(var12);
    var12 = var12.DismissibleContent;
    var12 = var12.GIFTING_PROMOTION_REMINDER;
    var8.id = var12;
    var8.importer = var11;
    var3[var5] = var8;
    var5 = var5 + var9;
    var8 = {};
    var11 = var7[var10];
    var11 = var6.bind(var0)(var11);
    var11 = var11.DismissibleContent;
    var11 = var11.NOTIFICATION_NUDGE_APP_START_BOTTOM_SHEET;
    var8.id = var11;
    var11 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 12;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var8.importer = var11;
    var3[var5] = var8;
    var5 = var5 + var9;
    var8 = {};
    var11 = var7[var10];
    var11 = var6.bind(var0)(var11);
    var11 = var11.DismissibleContent;
    var11 = var11.CUSTOM_APP_ICONS_COACHMARK;
    var8.id = var11;
    var11 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 6;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var8.importer = var11;
    var3[var5] = var8;
    var5 = var5 + var9;
    var8 = {};
    var11 = var7[var10];
    var11 = var6.bind(var0)(var11);
    var11 = var11.DismissibleContent;
    var11 = var11.ROBLOX_CONNECTION_COACHMARK;
    var8.id = var11;
    var11 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 9;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var8.importer = var11;
    var3[var5] = var8;
    var5 = var5 + var9;
    var8 = {};
    var11 = var7[var10];
    var11 = var6.bind(var0)(var11);
    var11 = var11.DismissibleContent;
    var11 = var11.DISPLAY_NAME_STYLES_MOBILE_ANNOUNCEMENT_MODAL;
    var8.id = var11;
    var11 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 15;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var8.importer = var11;
    var3[var5] = var8;
    var8 = {};
    var10 = var7[var10];
    var10 = var6.bind(var0)(var10);
    var10 = var10.DismissibleContent;
    var10 = var10.INSTALLED_GAME_COMMUNITY_UPSELL;
    var8.id = var10;
    var10 = function() {
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 7;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 16;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var8.importer = var10;
    var5 = var5 + var9;
    var3[var5] = var8;
    var _closure1_slot12 = var3;
    var5 = 27;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function() {
        _fun110186: for (var _fun110186_ip = 0;;) switch (_fun110186_ip) {
            case 0:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 23;
                var0 = var11[var0];
                var4 = undefined;
                var1 = var7.bind(var4)(var0);
                var0 = var1.useMainViewTooltipActionSheetMap;
                var2 = var0.bind(var1)();
                var _closure2_slot0 = var2;
                var3 = _closure1_slot4;
                var1 = var3.useState;
                var0 = null;
                var8 = var1.bind(var3)(var0);
                var3 = _closure1_slot3;
                var1 = 2;
                var3 = var3.bind(var4)(var8, var1);
                var9 = 0;
                var8 = var3[var9];
                var _closure2_slot1 = var8;
                var1 = 1;
                var1 = var3[var1];
                var _closure2_slot2 = var1;
                var3 = _closure1_slot7;
                var10 = false;
                var1 = var3.bind(var4)(var10);
                var _closure2_slot3 = var1;
                var1 = 24;
                var1 = var11[var1];
                var12 = var7.bind(var4)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var5
                    var1 = _closure1_slot8;
                    var0 = var1.getKey;
                    var1 = var0.bind(var1)();
                    var0 = 'MainViewTooltipActionSheets';
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var11.bind(var12)(var7, var1);
                var _closure2_slot4 = var1;
                var12 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var2;
                var7 = function() { // Environment: var5
                    _fun110188: for (var _fun110188_ip = 0;;) switch (_fun110188_ip) {
                        case 0:
                            var2 = _closure1_slot12;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                _fun110189: for (var _fun110189_ip = 0;;) switch (_fun110189_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = _closure2_slot0;
                                        var0 = var1.id;
                                        var4 = var2[var0];
                                        var6 = null;
                                        var2 = var6 == var4;
                                        var8 = undefined;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun110189_ip = 38;
                                            continue _fun110189
                                        }
                                    case 32:
                                        var0 = var4.isEligible;
                                    case 38:
                                        if (!var0) {
                                            _fun110189_ip = 360;
                                            continue _fun110189
                                        }
                                    case 44:
                                        var7 = var1.id;
                                        var1 = var6 == var4;
                                        if (var1) {
                                            _fun110189_ip = 357;
                                            continue _fun110189
                                        }
                                    case 59:
                                        var9 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 18;
                                        var3 = var3[var2];
                                        var9 = var9.bind(var8)(var3);
                                        var3 = var9.isSnowflakeBoundDismissibleContent;
                                        var3 = var3.bind(var9)(var7);
                                        if (var3) {
                                            _fun110189_ip = 294;
                                            continue _fun110189
                                        }
                                    case 99:
                                        var9 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var2];
                                        var9 = var9.bind(var8)(var3);
                                        var3 = var9.isVersionedDismissibleContent;
                                        var3 = var3.bind(var9)(var7);
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        if (var3) {
                                            _fun110189_ip = 256;
                                            continue _fun110189
                                        }
                                    case 138:
                                        var2 = var10[var2];
                                        var3 = var9.bind(var8)(var2);
                                        var2 = var3.isTimeRecurringDismissibleContent;
                                        var2 = var2.bind(var3)(var7);
                                        if (var2) {
                                            _fun110189_ip = 194;
                                            continue _fun110189
                                        }
                                    case 161:
                                        var3 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var2 = 21;
                                        var2 = var11[var2];
                                        var3 = var3.bind(var8)(var2);
                                        var2 = var3.UNSAFE_isDismissibleContentDismissed;
                                        var2 = var2.bind(var3)(var7);
                                        _fun110189_ip = 254;
                                        continue _fun110189;
                                    case 194:
                                        var3 = var4.cooldownConfig;
                                        var3 = var6 == var3;
                                        if (var3) {
                                            _fun110189_ip = 251;
                                            continue _fun110189
                                        }
                                    case 207:
                                        var12 = _closure1_slot0;
                                        var13 = _closure1_slot2;
                                        var11 = 22;
                                        var11 = var13[var11];
                                        var13 = var12.bind(var8)(var11);
                                        var12 = var13.isTimeRecurringDismissibleContentDismissed;
                                        var11 = var4.cooldownConfig;
                                        var11 = var12.bind(var13)(var7, var11);
                                        var3 = var11.isDismissed;
                                    case 251:
                                        var2 = var3;
                                    case 254:
                                        _fun110189_ip = 292;
                                        continue _fun110189;
                                    case 256:
                                        var3 = 22;
                                        var3 = var10[var3];
                                        var10 = var9.bind(var8)(var3);
                                        var9 = var10.isVersionedDismissibleContentDismissed;
                                        var3 = var4.latestVersion;
                                        var3 = var9.bind(var10)(var7, var3);
                                        var2 = var3.isDismissed;
                                    case 292:
                                        _fun110189_ip = 354;
                                        continue _fun110189;
                                    case 294:
                                        var3 = var4.newSnowflakeId;
                                        var3 = var6 == var3;
                                        if (var3) {
                                            _fun110189_ip = 351;
                                            continue _fun110189
                                        }
                                    case 307:
                                        var6 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var5 = 21;
                                        var5 = var9[var5];
                                        var6 = var6.bind(var8)(var5);
                                        var5 = var6.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
                                        var4 = var4.newSnowflakeId;
                                        var4 = var5.bind(var6)(var7, var4);
                                        var3 = var4.isDismissed;
                                    case 351:
                                        var2 = var3;
                                    case 354:
                                        var1 = var2;
                                    case 357:
                                        var0 = !var1;
                                    case 360:
                                        return var0;
                                }
                            };
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 != var1;
                            if (!var2) {
                                _fun110188_ip = 38;
                                continue _fun110188
                            }
                        case 35:
                            var0 = var1;
                        case 38:
                            return var0;
                    }
                };
                var11 = var12.bind(var4)(var7, var11);
                var _closure2_slot5 = var11;
                var3 = var3.bind(var4)(var0);
                var _closure2_slot6 = var3;
                var7 = _closure1_slot5;
                var3 = new Array(2);
                var3[0] = var11;
                var3[1] = var1;
                var1 = function() { // Environment: var5
                    _fun110190: for (var _fun110190_ip = 0;;) switch (_fun110190_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var2 = var2.current;
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun110190_ip = 50;
                                continue _fun110190
                            }
                        case 20:
                            var2 = global;
                            var6 = var2.clearTimeout;
                            var2 = _closure2_slot6;
                            var5 = var2.current;
                            var3 = undefined;
                            var3 = var6.bind(var3)(var5);
                            var2.current = var4;
                        case 50:
                            var3 = _closure2_slot4;
                            var2 = _closure2_slot3;
                            if (var3) {
                                _fun110190_ip = 132;
                                continue _fun110190
                            }
                        case 61:
                            var3 = var2.current;
                            var6 = 0;
                            if (!var3) {
                                _fun110190_ip = 77;
                                continue _fun110190
                            }
                        case 71:
                            var6 = 350;
                        case 77:
                            var3 = _closure2_slot5;
                            if (!(var4 == var3)) {
                                _fun110190_ip = 97;
                                continue _fun110190
                            }
                        case 85:
                            var4 = _closure2_slot3;
                            var3 = false;
                            var4.current = var3;
                        case 97:
                            var3 = _closure2_slot6;
                            var1 = global;
                            var5 = var1.setTimeout;
                            var4 = undefined;
                            var1 = function() { // Environment: var0
                                var3 = _closure2_slot2;
                                var2 = _closure2_slot5;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure2_slot6;
                                var1 = null;
                                var2.current = var1;
                                return var0;
                            };
                            var1 = var5.bind(var4)(var1, var6);
                            var3.current = var1;
                            _fun110190_ip = 140;
                            continue _fun110190;
                        case 132:
                            var1 = true;
                            var2.current = var1;
                        case 140:
                            var0 = function() { // Environment: var0
                                _fun110192: for (var _fun110192_ip = 0;;) switch (_fun110192_ip) {
                                    case 0:
                                        var1 = _closure2_slot6;
                                        var2 = var1.current;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun110192_ip = 48;
                                            continue _fun110192
                                        }
                                    case 18:
                                        var2 = global;
                                        var4 = var2.clearTimeout;
                                        var0 = _closure2_slot6;
                                        var3 = var0.current;
                                        var2 = undefined;
                                        var2 = var4.bind(var2)(var3);
                                        var0.current = var1;
                                    case 48:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var1 = var7.bind(var4)(var1, var3);
                var3 = new Array(1);
                var3[0] = var8;
                var1 = function() { // Environment: var5
                    _fun110193: for (var _fun110193_ip = 0;;) switch (_fun110193_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110193_ip = 31;
                                continue _fun110193
                            }
                        case 13:
                            var2 = _closure1_slot14;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var7.bind(var4)(var1, var3);
                if (!(var0 != var8)) {
                    _fun110186_ip = 698;
                    continue _fun110186
                }
            case 247:
                var1 = var8.id;
                var7 = var2[var1];
                if (!(var0 == var7)) {
                    _fun110186_ip = 262;
                    continue _fun110186
                }
            case 260:
                var7 = {};
            case 262:
                var _closure2_slot7 = var7;
                var2 = _closure1_slot13;
                var1 = var8.id;
                var2 = var2.bind(var4)(var1);
                var1 = 'snowflake_bound';
                if (!(var1 !== var2)) {
                    _fun110186_ip = 597;
                    continue _fun110186
                }
            case 293:
                var1 = 'versioned';
                if (!(var1 !== var2)) {
                    _fun110186_ip = 498;
                    continue _fun110186
                }
            case 306:
                var1 = 'time_recurring';
                if (!(var1 !== var2)) {
                    _fun110186_ip = 406;
                    continue _fun110186
                }
            case 316:
                var1 = 'single_use';
                if (!(var1 !== var2)) {
                    _fun110186_ip = 328;
                    continue _fun110186
                }
            case 326:
                return var0;
            case 328:
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 25;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var12 = var8.id;
                var11 = new Array(1);
                var11[0] = var12;
                var1.contentTypes = var11;
                var11 = _closure1_slot10;
                var11 = var11.MAIN_VIEW_TOOLTIPS;
                var1.groupName = var11;
                var11 = function arg0() {
                    _fun110197: for (var _fun110197_ip = 0;;) switch (_fun110197_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.visibleContent;
                            var6 = var0.markAsDismissed;
                            var0 = _closure2_slot1;
                            var1 = var0.id;
                            var0 = null;
                            if (!(var2 === var1)) {
                                _fun110197_ip = 124;
                                continue _fun110197
                            }
                        case 33:
                            var4 = _closure1_slot11;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.DismissibleActionSheet;
                            var1 = {};
                            var1.markAsDismissed = var6;
                            var6 = _closure2_slot1;
                            var6 = var6.importer;
                            var1.importer = var6;
                            var6 = 'MainViewTooltipActionSheets';
                            var1.actionSheetKey = var6;
                            var5 = _closure2_slot7;
                            var7 = var5.actionSheetProperties;
                            var8 = var1;
                            var5 = copyDataProperties(var8, var7);
                            var0 = var4.bind(var3)(var2, var1);
                        case 124:
                            return var0;
                    }
                };
                var1.children = var11;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 406:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 25;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.SelectedTimeRecurringDismissibleContent;
                var1 = {};
                var11 = var8.id;
                var1.contentType = var11;
                var11 = var7.cooldownConfig;
                var1.timeRecurringConfig = var11;
                var11 = _closure1_slot10;
                var11 = var11.MAIN_VIEW_TOOLTIPS;
                var1.groupName = var11;
                var1.bypassAutoDismiss = var10;
                var10 = function arg0() {
                    _fun110196: for (var _fun110196_ip = 0;;) switch (_fun110196_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.visibleContent;
                            var6 = var0.markAsDismissed;
                            var0 = _closure2_slot1;
                            var1 = var0.id;
                            var0 = null;
                            if (!(var2 === var1)) {
                                _fun110196_ip = 124;
                                continue _fun110196
                            }
                        case 33:
                            var4 = _closure1_slot11;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.DismissibleActionSheet;
                            var1 = {};
                            var7 = 'MainViewTooltipActionSheets';
                            var1.actionSheetKey = var7;
                            var7 = _closure2_slot1;
                            var7 = var7.importer;
                            var1.importer = var7;
                            var1.markAsDismissed = var6;
                            var5 = _closure2_slot7;
                            var8 = var5.actionSheetProperties;
                            var9 = var1;
                            var5 = copyDataProperties(var9, var8);
                            var0 = var4.bind(var3)(var2, var1);
                        case 124:
                            return var0;
                    }
                };
                var1.children = var10;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 498:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 25;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.SelectedVersionedDismissibleContent;
                var1 = {};
                var10 = var7.latestVersion;
                var11 = var0 != var10;
                var9 = 0;
                if (!var11) {
                    _fun110186_ip = 548;
                    continue _fun110186
                }
            case 545:
                var9 = var10;
            case 548:
                var1.latestVersion = var9;
                var9 = var8.id;
                var1.contentType = var9;
                var9 = _closure1_slot10;
                var9 = var9.MAIN_VIEW_TOOLTIPS;
                var1.groupName = var9;
                var9 = function arg0() {
                    _fun110195: for (var _fun110195_ip = 0;;) switch (_fun110195_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.visibleContent;
                            var7 = var0.markAsDismissed;
                            var0 = _closure2_slot1;
                            var1 = var0.id;
                            var0 = null;
                            if (!(var2 === var1)) {
                                _fun110195_ip = 136;
                                continue _fun110195
                            }
                        case 33:
                            var4 = _closure1_slot11;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.DismissibleActionSheet;
                            var1 = {};
                            var6 = 'MainViewTooltipActionSheets';
                            var1.actionSheetKey = var6;
                            var6 = _closure2_slot1;
                            var8 = var6.importer;
                            var1.importer = var8;
                            var1.markAsDismissed = var7;
                            var6 = var6.id;
                            var1.versionedDismissibleContentType = var6;
                            var5 = _closure2_slot7;
                            var9 = var5.actionSheetProperties;
                            var10 = var1;
                            var5 = copyDataProperties(var10, var9);
                            var0 = var4.bind(var3)(var2, var1);
                        case 136:
                            return var0;
                    }
                };
                var1.children = var9;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 597:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 25;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.SelectedSnowflakeBoundDismissibleContent;
                var1 = {};
                var8 = var8.id;
                var1.contentType = var8;
                var8 = var7.newSnowflakeId;
                var9 = var0 != var8;
                var7 = '';
                if (!var9) {
                    _fun110186_ip = 659;
                    continue _fun110186
                }
            case 656:
                var7 = var8;
            case 659:
                var1.newSnowflakeId = var7;
                var6 = _closure1_slot10;
                var6 = var6.MAIN_VIEW_TOOLTIPS;
                var1.groupName = var6;
                var5 = function arg0() {
                    _fun110194: for (var _fun110194_ip = 0;;) switch (_fun110194_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.visibleContent;
                            var6 = var0.markAsDismissed;
                            var0 = _closure2_slot1;
                            var1 = var0.id;
                            var0 = null;
                            if (!(var2 === var1)) {
                                _fun110194_ip = 124;
                                continue _fun110194
                            }
                        case 33:
                            var4 = _closure1_slot11;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.DismissibleActionSheet;
                            var1 = {};
                            var7 = 'MainViewTooltipActionSheets';
                            var1.actionSheetKey = var7;
                            var7 = _closure2_slot1;
                            var7 = var7.importer;
                            var1.importer = var7;
                            var1.markAsDismissed = var6;
                            var5 = _closure2_slot7;
                            var8 = var5.actionSheetProperties;
                            var9 = var1;
                            var5 = copyDataProperties(var9, var8);
                            var0 = var4.bind(var3)(var2, var1);
                        case 124:
                            return var0;
                    }
                };
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 698:
                return var0;
        }
    };
    var2.default = var4;
    var2.ACTION_SHEET_REGISTRY = var3;
    var2.trackActionSheetImpression = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3140, 660, 1369, 33, 14123, 1307, 14125, 14126, 14127, 14128, 14129, 14131, 14132, 14135, 14140, 1358, 1359, 795, 1363, 3212, 1360, 14189, 566, 5957, 9408, 2]);