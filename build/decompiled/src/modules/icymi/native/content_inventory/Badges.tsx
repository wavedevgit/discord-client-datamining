// modules/icymi/native/content_inventory/Badges.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun63097: for (var _fun63097_ip = 0;;) switch (_fun63097_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.entry;
                var0 = _closure1_slot9;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = 8;
                var0 = var6[var9];
                var2 = var3.bind(var4)(var0);
                var0 = var2.isEntryActive;
                var0 = var0.bind(var2)(var5);
                var2 = 10;
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var2
                    var0 = _closure1_slot5;
                    var0 = var0.locale;
                    return var0;
                };
                var8 = var6.bind(var7)(var3, var2);
                var3 = _closure1_slot6;
                if (var0) {
                    _fun63097_ip = 179;
                    continue _fun63097
                }
            case 102:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var0 = var6[var0];
                var0 = var7.bind(var4)(var0);
                var2 = var0.Text;
                var0 = {};
                var11 = 'text-sm/medium';
                var0.variant = var11;
                var10 = var10.text;
                var0.style = var10;
                var6 = var6[var9];
                var7 = var7.bind(var4)(var6);
                var6 = var7.formatEndedTimestamp;
                var6 = var6.bind(var7)(var5, var8);
                var0.children = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun63097_ip = 196;
                continue _fun63097;
            case 179:
                var2 = _closure1_slot10;
                var1 = {};
                var1.entry = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 196:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.Icon;
        var10 = var0.iconColor;
        var8 = var0.text;
        var0 = _closure1_slot9;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var9.badgeContainer;
        var0.style = var4;
        var6 = _closure1_slot6;
        var4 = {};
        var11 = var9.icon;
        var4.style = var11;
        var4.color = var10;
        var6 = var6.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 9;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {};
        var10 = 'text-sm/medium';
        var5.variant = var10;
        var9 = var9.text;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot6 = var4;
    var4 = var3.jsxs;
    var _closure1_slot7 = var4;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 16,
        'height': 16
    };
    var3.icon = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4,
        'backgroundColor': 'rgba(255, 255, 255, 0.08)',
        'paddingVertical': null,
        'paddingLeft': null,
        'paddingRight': 10
    };
    var9 = 5;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.paddingVertical = var11;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.paddingLeft = var11;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.badgeContainer = var8;
    var8 = {};
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    var8.color = var9;
    var3.text = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        _fun63100: for (var _fun63100_ip = 0;;) switch (_fun63100_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.entry;
                var _closure2_slot0 = var11;
                var5 = var0.style;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 6;
                var4 = var7[var3];
                var3 = undefined;
                var4 = var1.bind(var3)(var4);
                var8 = var4.ActiveTimestampStylingExperiment;
                var6 = var8.useConfig;
                var4 = {};
                var9 = 'active_timestamp';
                var4.location = var9;
                var4 = var6.bind(var8)(var4);
                var6 = var4.enabled;
                var4 = 7;
                var4 = var7[var4];
                var8 = var1.bind(var3)(var4);
                var4 = var8.useTimestampTickedNow;
                var4 = var4.bind(var8)();
                var10 = var4.now;
                var _closure2_slot1 = var10;
                var9 = _closure1_slot3;
                var8 = var9.useMemo;
                var4 = new Array(2);
                var4[0] = var11;
                var4[1] = var10;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.formatActiveTimestamp;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var8.bind(var9)(var2, var4);
                var2 = _closure1_slot6;
                var0 = 9;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var0.style = var5;
                var5 = 'text-sm/medium';
                if (!var6) {
                    _fun63100_ip = 182;
                    continue _fun63100
                }
            case 176:
                var5 = 'text-sm/normal';
            case 182:
                var0.variant = var5;
                var5 = true;
                var0.tabularNumbers = var5;
                var5 = 'text-feedback-positive';
                var0.color = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/content_inventory/Badges.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ActiveTimestamp = var3;
    var3 = function arg0() {
        _fun63102: for (var _fun63102_ip = 0;;) switch (_fun63102_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.entry;
                var0 = _closure1_slot9;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isEntryActive;
                var1 = var0.bind(var1)(var8);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 5;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.colors;
                if (var1) {
                    _fun63102_ip = 89;
                    continue _fun63102
                }
            case 81:
                var9 = var0.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
                _fun63102_ip = 95;
                continue _fun63102;
            case 89:
                var9 = var0.STATUS_POSITIVE;
            case 95:
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var10.badgeContainer;
                var0.style = var4;
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 11;
                var4 = var11[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.GameControllerIcon;
                var4 = {};
                var10 = var10.icon;
                var4.style = var10;
                var4.color = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot11;
                var5 = {};
                var5.entry = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GameTimestampBadge = var3;
    var3 = function arg0() {
        _fun63103: for (var _fun63103_ip = 0;;) switch (_fun63103_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entry;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 8;
                var0 = var0[var3];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.isEntryMarathon;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun63103_ip = 52;
                    continue _fun63103
                }
            case 48:
                var0 = null;
                return var0;
            case 52:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var1 = var1.bind(var4)(var0);
                var0 = var1.isEntryActive;
                var1 = var0.bind(var1)(var2);
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 5;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.colors;
                if (var1) {
                    _fun63103_ip = 116;
                    continue _fun63103
                }
            case 108:
                var6 = var0.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
                _fun63103_ip = 122;
                continue _fun63103;
            case 116:
                var6 = var0.STATUS_POSITIVE;
            case 122:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var3];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getMarathonDescription;
                var0 = var0.bind(var1)(var2);
                var5 = var0.text;
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun63103_ip = 220;
                    continue _fun63103
                }
            case 164:
                var3 = _closure1_slot6;
                var2 = _closure1_slot12;
                var1 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 12;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.TimerIcon;
                var1.Icon = var7;
                var1.iconColor = var6;
                var1.text = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 220:
                return var0;
        }
    };
    var2.MarathonBadge = var3;
    var3 = function arg0() {
        _fun63104: for (var _fun63104_ip = 0;;) switch (_fun63104_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entry;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.isEntryNew;
                var1 = var0.bind(var1)(var2);
                var0 = null;
                if (!var1) {
                    _fun63104_ip = 185;
                    continue _fun63104
                }
            case 53:
                var3 = _closure1_slot6;
                var2 = _closure1_slot12;
                var1 = {};
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 13;
                var6 = var7[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.NewUserIcon;
                var1.Icon = var6;
                var6 = 14;
                var8 = var7[var6];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var7[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.keY6mW;
                var6 = var8.bind(var9)(var6);
                var1.text = var6;
                var6 = _closure1_slot1;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.colors;
                var5 = var5.STATUS_POSITIVE;
                var1.iconColor = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 185:
                return var0;
        }
    };
    var2.NewGameBadge = var3;
    var3 = function arg0() {
        _fun63105: for (var _fun63105_ip = 0;;) switch (_fun63105_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entry;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.getStreakCount;
                var11 = var0.bind(var1)(var2);
                var2 = null;
                var1 = var2 == var11;
                var0 = null;
                if (var1) {
                    _fun63105_ip = 214;
                    continue _fun63105
                }
            case 59:
                var1 = 2;
                var1 = var11 < var1;
                var0 = null;
                if (var1) {
                    _fun63105_ip = 214;
                    continue _fun63105
                }
            case 74:
                var3 = _closure1_slot6;
                var2 = _closure1_slot12;
                var1 = {};
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 15;
                var6 = var7[var6];
                var6 = var8.bind(var4)(var6);
                var6 = var6.FlashIcon;
                var1.Icon = var6;
                var6 = 14;
                var9 = var7[var6];
                var9 = var8.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.formatToPlainString;
                var6 = var7[var6];
                var6 = var8.bind(var4)(var6);
                var6 = var6.t;
                var8 = var6["Klie/P"];
                var6 = {};
                var6.days = var11;
                var6 = var9.bind(var10)(var8, var6);
                var1.text = var6;
                var6 = _closure1_slot1;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.colors;
                var5 = var5.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
                var1.iconColor = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 214:
                return var0;
        }
    };
    var2.StreakBadge = var3;
    var3 = function arg0() {
        _fun63106: for (var _fun63106_ip = 0;;) switch (_fun63106_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entry;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.getTrendingType;
                var2 = var0.bind(var1)(var2);
                var3 = null;
                var1 = var3 == var2;
                var0 = null;
                if (var1) {
                    _fun63106_ip = 230;
                    continue _fun63106
                }
            case 59:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.TrendingType;
                var1 = var1.TRENDING_TYPE_UNSPECIFIED;
                var0 = null;
                if (!(var2 !== var1)) {
                    _fun63106_ip = 230;
                    continue _fun63106
                }
            case 100:
                var3 = _closure1_slot6;
                var2 = _closure1_slot12;
                var1 = {};
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 17;
                var6 = var7[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.FireIcon;
                var1.Icon = var6;
                var6 = 14;
                var8 = var7[var6];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var7[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.TsWCdW;
                var6 = var8.bind(var9)(var6);
                var1.text = var6;
                var6 = _closure1_slot1;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.colors;
                var5 = var5.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
                var1.iconColor = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 230:
                return var0;
        }
    };
    var2.TrendingBadge = var3;
    var3 = function arg0() {
        _fun63107: for (var _fun63107_ip = 0;;) switch (_fun63107_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entry;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.getResurrectedEntryLastPlayTime;
                var1 = var0.bind(var1)(var2);
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun63107_ip = 189;
                    continue _fun63107
                }
            case 57:
                var3 = _closure1_slot6;
                var2 = _closure1_slot12;
                var1 = {};
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 18;
                var6 = var7[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.RetryIcon;
                var1.Icon = var6;
                var6 = 14;
                var8 = var7[var6];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var7[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.adnLsB;
                var6 = var8.bind(var9)(var6);
                var1.text = var6;
                var6 = _closure1_slot1;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.colors;
                var5 = var5.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
                var1.iconColor = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 189:
                return var0;
        }
    };
    var2.ResurrectedBadge = var3;
    var3 = function arg0() {
        _fun63108: for (var _fun63108_ip = 0;;) switch (_fun63108_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entry;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var1.getEntryDuration;
                var18 = var0.bind(var1)(var2);
                var0 = null;
                if (!(var0 != var18)) {
                    _fun63108_ip = 328;
                    continue _fun63108
                }
            case 54:
                var12 = _closure1_slot0;
                var7 = _closure1_slot2;
                var11 = 14;
                var1 = var7[var11];
                var1 = var12.bind(var4)(var1);
                var1 = var1.t;
                var14 = var1.SDRHgr;
                var3 = _closure1_slot6;
                var2 = _closure1_slot12;
                var1 = {};
                var5 = 19;
                var5 = var7[var5];
                var5 = var12.bind(var4)(var5);
                var5 = var5.TrophyIcon;
                var1.Icon = var5;
                var9 = _closure1_slot7;
                var8 = _closure1_slot8;
                var5 = {};
                var10 = var7[var11];
                var10 = var12.bind(var4)(var10);
                var15 = var10.intl;
                var13 = var15.string;
                var10 = var7[var11];
                var10 = var12.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["/50eHi"];
                var13 = var13.bind(var15)(var10);
                var10 = new Array(3);
                var10[0] = var13;
                var13 = ': ';
                var10[1] = var13;
                var11 = var7[var11];
                var11 = var12.bind(var4)(var11);
                var13 = var11.intl;
                var12 = var13.format;
                var11 = {};
                var15 = global;
                var17 = var15.Math;
                var16 = var17.round;
                var6 = _closure1_slot1;
                var15 = 20;
                var15 = var7[var15];
                var15 = var6.bind(var4)(var15);
                var15 = var15.Seconds;
                var15 = var15.HOUR;
                var15 = var18 / var15;
                var15 = var16.bind(var17)(var15);
                var11.hours = var15;
                var11 = var12.bind(var13)(var14, var11);
                var10[2] = var11;
                var5.children = var10;
                var5 = var9.bind(var4)(var8, var5);
                var1.text = var5;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.colors;
                var5 = var5.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
                var1.iconColor = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 328:
                return var0;
        }
    };
    var2.TopGameBadge = var3;
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.entry;
        var0 = _closure1_slot9;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var9.badgeContainer;
        var0.style = var4;
        var7 = _closure1_slot6;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var4 = 12;
        var4 = var11[var4];
        var4 = var6.bind(var3)(var4);
        var6 = var4.TimerIcon;
        var4 = {};
        var9 = var9.icon;
        var4.style = var9;
        var10 = _closure1_slot1;
        var9 = 5;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.colors;
        var9 = var9.INTERACTIVE_TEXT_DEFAULT;
        var4.color = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot11;
        var5 = {};
        var5.entry = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.CustomStatusTimestampBadge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1687, 33, 1297, 671, 7919, 7920, 6914, 4878, 566, 5379, 7923, 7925, 1234, 7927, 7929, 7479, 7930, 7932, 667, 2]);