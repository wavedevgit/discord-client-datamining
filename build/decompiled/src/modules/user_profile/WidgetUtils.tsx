// modules/user_profile/WidgetUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var12;
    var9 = function arg0() {
        var2 = _closure1_slot8;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot10 = var9;
    var8 = function arg0() {
        var2 = _closure1_slot9;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot11 = var8;
    var7 = function arg0() {
        _fun42857: for (var _fun42857_ip = 0;;) switch (_fun42857_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 5;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.GAME_WIDGET_LIMITS_BY_TYPE;
                var3 = var2 in var0;
                var0 = 0;
                if (!var3) {
                    _fun42857_ip = 70;
                    continue _fun42857
                }
            case 43:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.GAME_WIDGET_LIMITS_BY_TYPE;
                var0 = var1[var2];
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var7;
    var6 = function() {
        _fun42858: for (var _fun42858_ip = 0;;) switch (_fun42858_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                var1 = null;
                var4 = var1 != var0;
                var2 = null;
                if (!var4) {
                    _fun42858_ip = 47;
                    continue _fun42858
                }
            case 27:
                var4 = _closure1_slot5;
                var3 = var4.getUserProfile;
                var0 = var0.id;
                var2 = var3.bind(var4)(var0);
            case 47:
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun42858_ip = 62;
                    continue _fun42858
                }
            case 56:
                var0 = var2.widgets;
            case 62:
                if (!(var1 == var0)) {
                    _fun42858_ip = 70;
                    continue _fun42858
                }
            case 66:
                var0 = new Array(0);
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var6;
    var0 = function() {
        _fun42859: for (var _fun42859_ip = 0;;) switch (_fun42859_ip) {
            case 0:
                var2 = _closure1_slot6;
                var0 = var2.hasPendingChanges;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun42859_ip = 34;
                    continue _fun42859
                }
            case 22:
                var2 = _closure1_slot13;
                var0 = undefined;
                var0 = var2.bind(var0)();
                _fun42859_ip = 63;
                continue _fun42859;
            case 34:
                var2 = _closure1_slot6;
                var1 = var2.getPendingWidgets;
                var1 = var1.bind(var2)();
                var2 = null;
                if (!(var2 == var1)) {
                    _fun42859_ip = 60;
                    continue _fun42859
                }
            case 56:
                var1 = new Array(0);
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun42860: for (var _fun42860_ip = 0;;) switch (_fun42860_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot14;
                var5 = undefined;
                var3 = var2.bind(var5)();
                var2 = var3.filter;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.isGameWidget;
                var2 = var2.bind(var3)(var1);
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var1.bind(var2)(var0);
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun42860_ip = 85;
                    continue _fun42860
                }
            case 82:
                var0 = var1;
            case 85:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var5 = function arg0() {
        _fun42862: for (var _fun42862_ip = 0;;) switch (_fun42862_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot14;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var3 = var2.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.getUniqueKey;
                    var1 = var0.bind(var1)();
                    var2 = _closure2_slot0;
                    var0 = var2.getUniqueKey;
                    var0 = var0.bind(var2)();
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var3.bind(var2)(var0);
                var0 = -1;
                if (!(var0 !== var3)) {
                    _fun42862_ip = 70;
                    continue _fun42862
                }
            case 48:
                var0 = new Array(0);
                var5 = 0;
                var7 = var0;
                var6 = var2;
                var4 = arraySpread(var7, var6, var5);
                var0[var3] = var1;
                return var0;
            case 70:
                var0 = new Array(1);
                var0[0] = var1;
                var5 = 1;
                var7 = var0;
                var6 = var2;
                var1 = arraySpread(var7, var6, var5);
                return var0;
        }
    };
    var _closure1_slot16 = var5;
    var4 = function arg0, arg1, arg2() {
        _fun42864: for (var _fun42864_ip = 0;;) switch (_fun42864_ip) {
            case 0:
                var6 = arg2;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = global;
                var5 = var0.Object;
                var4 = var5.values;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 9;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var7.bind(var0)(var3);
                var3 = var3.WidgetGameTag;
                var3 = var4.bind(var5)(var3);
                var4 = var3.length;
                var3 = var6.length;
                if (!(!(var3 > var4))) {
                    _fun42864_ip = 279;
                    continue _fun42864
                }
            case 78:
                var4 = _closure1_slot15;
                var3 = arg0;
                var5 = var4.bind(var0)(var3);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun42864_ip = 279;
                    continue _fun42864
                }
            case 99:
                var8 = var5.games;
                var7 = var8.find;
                var4 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var7.bind(var8)(var4);
                if (!(var3 != var4)) {
                    _fun42864_ip = 279;
                    continue _fun42864
                }
            case 127:
                var3 = {};
                var10 = var3;
                var9 = var4;
                var4 = copyDataProperties(var10, var9);
                var4 = 'tags';
                var3[var4] = var6;
                var _closure2_slot1 = var3;
                var4 = var5.games;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    _fun42866: for (var _fun42866_ip = 0;;) switch (_fun42866_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.applicationId;
                            var2 = _closure2_slot0;
                            if (!(var3 === var2)) {
                                _fun42866_ip = 23;
                                continue _fun42866
                            }
                        case 19:
                            var0 = _closure2_slot1;
                        case 23:
                            return var0;
                    }
                };
                var7 = var3.bind(var4)(var2);
                var3 = _closure1_slot16;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var2 = var6.bind(var0)(var2);
                var6 = var2.BaseGameWidget;
                var2 = {};
                var10 = var2;
                var9 = var5;
                var5 = copyDataProperties(var10, var9);
                var5 = 'games';
                var2[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var5;
                var10 = var2;
                var2 = new var11[var6](var10, var9);
                var2 = var2 instanceof Object ? var2 : var5;
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setPendingWidgets;
                var1 = var1.bind(var2)(var3);
            case 279:
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var0 = function arg0() {
        _fun42867: for (var _fun42867_ip = 0;;) switch (_fun42867_ip) {
            case 0:
                var1 = arg0;
                var4 = null;
                var2 = var4 == var1;
                var0 = null;
                if (var2) {
                    _fun42867_ip = 61;
                    continue _fun42867
                }
            case 14:
                var2 = '';
                var0 = null;
                if (!(var2 !== var1)) {
                    _fun42867_ip = 61;
                    continue _fun42867
                }
            case 24:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var1);
                if (!var2) {
                    _fun42867_ip = 58;
                    continue _fun42867
                }
            case 45:
                var3 = var1.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun42867_ip = 61;
                    continue _fun42867
                }
            case 58:
                var0 = var1;
            case 61:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var3 = function arg0() {
        _fun42868: for (var _fun42868_ip = 0;;) switch (_fun42868_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var3 = var2 == var1;
                var5 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun42868_ip = 22;
                    continue _fun42868
                }
            case 16:
                var0 = var1.themes;
            case 22:
                var0 = var2 != var0;
                if (!var0) {
                    _fun42868_ip = 80;
                    continue _fun42868
                }
            case 29:
                var3 = var1.themes;
                var2 = var3.includes;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.GameTheme;
                var1 = var1.EROTIC;
                var0 = var2.bind(var3)(var1);
            case 80:
                return var0;
        }
    };
    var _closure1_slot19 = var3;
    var0 = global;
    var15 = var0.Object;
    var14 = var15.defineProperty;
    var10 = {};
    var0 = true;
    var10.value = var0;
    var0 = '__esModule';
    var0 = var14.bind(var15)(var2, var0, var10);
    var0 = 0;
    var10 = var12[var0];
    var0 = undefined;
    var10 = var13.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var12[var10];
    var10 = var13.bind(var0)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var12[var10];
    var10 = var11.bind(var0)(var10);
    var13 = var10.WIDGET_TITLES_BY_TYPE;
    var _closure1_slot7 = var13;
    var13 = var10.WIDGETS_SUPPORTING_COMMENT;
    var _closure1_slot8 = var13;
    var10 = var10.WIDGETS_SUPPORTING_TAGS;
    var _closure1_slot9 = var10;
    var10 = 12;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/user_profile/WidgetUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = function(arg0) { // Environment: var1
        var2 = arg0;
        var1 = _closure1_slot7;
        var0 = var2.type;
        var0 = var1[var0];
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var2.getWidgetTitle = var10;
    var10 = function arg0, arg1() {
        _fun42870: for (var _fun42870_ip = 0;;) switch (_fun42870_ip) {
            case 0:
                var6 = arg0;
                var0 = arg1;
                var1 = var0.isCurrentUser;
                var0 = var6.games;
                var2 = var0.length;
                var0 = 0;
                var0 = var2 > var0;
                if (!var1) {
                    _fun42870_ip = 37;
                    continue _fun42870
                }
            case 34:
                if (var0) {
                    _fun42870_ip = 41;
                    continue _fun42870
                }
            case 37:
                var0 = undefined;
                return var0;
            case 41:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var9 = 5;
                var0 = var0[var9];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var2 = var0.GAME_WIDGET_LIMITS_BY_TYPE;
                var0 = var6.type;
                var2 = var2[var0];
                var0 = 1;
                if (!(var0 !== var2)) {
                    _fun42870_ip = 181;
                    continue _fun42870
                }
            case 88:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 6;
                var2 = var7[var0];
                var2 = var8.bind(var5)(var2);
                var4 = var2.intl;
                var3 = var4.format;
                var0 = var7[var0];
                var0 = var8.bind(var5)(var0);
                var0 = var0.t;
                var2 = var0["zR1+0/"];
                var0 = {};
                var7 = var7[var9];
                var7 = var8.bind(var5)(var7);
                var7 = var7.GAME_WIDGET_LIMITS_BY_TYPE;
                var6 = var6.type;
                var6 = var7[var6];
                var0.numGames = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun42870_ip = 238;
                continue _fun42870;
            case 181:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.wiXdEa;
                var0 = var2.bind(var3)(var1);
            case 238:
                return var0;
        }
    };
    var2.getGameWidgetSubtitle = var10;
    var10 = function arg0() {
        _fun42871: for (var _fun42871_ip = 0;;) switch (_fun42871_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var3 = var0 == var2;
                var5 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun42871_ip = 71;
                    continue _fun42871
                }
            case 16:
                var3 = var2.widgets;
                var0 = var0 == var3;
                var1 = undefined;
                if (var0) {
                    _fun42871_ip = 71;
                    continue _fun42871
                }
            case 31:
                var2 = var3.some;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 7;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.isGameWidget;
                var1 = var2.bind(var3)(var0);
            case 71:
                var0 = true;
                var0 = var0 === var1;
                return var0;
        }
    };
    var2.hasGameWidgetsOnProfile = var10;
    var2.widgetSupportsComment = var9;
    var2.widgetSupportsTags = var8;
    var2.widgetMaxGames = var7;
    var7 = function arg0() {
        var1 = arg0;
        var0 = global;
        var3 = var0.Math;
        var2 = var3.floor;
        var4 = var0.Math;
        var0 = var4.random;
        var4 = var0.bind(var4)();
        var0 = var1.length;
        var0 = var4 * var0;
        var0 = var2.bind(var3)(var0);
        var0 = var1[var0];
        return var0;
    };
    var2.getRandomElement = var7;
    var7 = function arg0, arg1() {
        var2 = new Array(0);
        var5 = arg0;
        var3 = 0;
        var6 = var2;
        var4 = 0;
        var0 = arraySpread(var6, var5, var4);
        var1 = var2.sort;
        var0 = function() { // Environment: var0
            var0 = global;
            var1 = var0.Math;
            var0 = var1.random;
            var1 = var0.bind(var1)();
            var0 = 0.5;
            var0 = var0 - var1;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.slice;
        var0 = arg1;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var2.getRandomElements = var7;
    var2.getSavedWidgets = var6;
    var2.replaceWidgetInList = var5;
    var5 = function arg0() {
        _fun42875: for (var _fun42875_ip = 0;;) switch (_fun42875_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot14;
                var0 = undefined;
                var5 = var3.bind(var0)();
                var3 = var5.find;
                var2 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = var1.getUniqueKey;
                    var1 = var0.bind(var1)();
                    var2 = _closure2_slot0;
                    var0 = var2.getUniqueKey;
                    var0 = var0.bind(var2)();
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var3.bind(var5)(var2);
                var2 = null;
                if (!(var2 == var3)) {
                    _fun42875_ip = 95;
                    continue _fun42875
                }
            case 43:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.setPendingWidgets;
                var1 = new Array(1);
                var1[0] = var4;
                var6 = 1;
                var8 = var1;
                var7 = var5;
                var4 = arraySpread(var8, var7, var6);
                var1 = var2.bind(var3)(var1);
            case 95:
                return var0;
        }
    };
    var2.addWidgetToPending = var5;
    var5 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot14;
        var0 = undefined;
        var4 = var3.bind(var0)();
        var3 = var4.filter;
        var2 = function(arg0) { // Environment: var2
            var1 = arg0;
            var0 = var1.getUniqueKey;
            var1 = var0.bind(var1)();
            var2 = _closure2_slot0;
            var0 = var2.getUniqueKey;
            var0 = var0.bind(var2)();
            var0 = var1 !== var0;
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 8;
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.setPendingWidgets;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var2.removeWidgetFromPending = var5;
    var2.updatePendingGameTags = var4;
    var4 = function arg0, arg1, arg2() {
        _fun42879: for (var _fun42879_ip = 0;;) switch (_fun42879_ip) {
            case 0:
                var4 = arg1;
                var _closure2_slot0 = var4;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var5 = _closure1_slot15;
                var0 = undefined;
                var2 = arg0;
                var2 = var5.bind(var0)(var2);
                var7 = null;
                if (!(var7 != var2)) {
                    _fun42879_ip = 141;
                    continue _fun42879
                }
            case 39:
                var8 = var2.games;
                var6 = var8.find;
                var5 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var6.bind(var8)(var5);
                if (!(var7 != var5)) {
                    _fun42879_ip = 141;
                    continue _fun42879
                }
            case 64:
                var6 = var5.tags;
                if (!(var7 != var6)) {
                    _fun42879_ip = 141;
                    continue _fun42879
                }
            case 74:
                var6 = var5.tags;
                var7 = var6.length;
                var6 = 0;
                if (!(var6 !== var7)) {
                    _fun42879_ip = 141;
                    continue _fun42879
                }
            case 91:
                var7 = var5.tags;
                var5 = var7.filter;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var1 = var5.bind(var7)(var1);
                var3 = _closure1_slot17;
                var2 = var2.type;
                var5 = var1.length;
                if (!(!(var5 > var6))) {
                    _fun42879_ip = 134;
                    continue _fun42879
                }
            case 130:
                var1 = new Array(0);
            case 134:
                var1 = var3.bind(var0)(var2, var4, var1);
            case 141:
                return var0;
        }
    };
    var2.removeTagFromGame = var4;
    var4 = function arg0, arg1, arg2() {
        _fun42882: for (var _fun42882_ip = 0;;) switch (_fun42882_ip) {
            case 0:
                var6 = arg2;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot15;
                var0 = undefined;
                var3 = arg0;
                var5 = var4.bind(var0)(var3);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun42882_ip = 231;
                    continue _fun42882
                }
            case 38:
                var8 = var5.games;
                var7 = var8.find;
                var4 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var7.bind(var8)(var4);
                if (!(var3 != var4)) {
                    _fun42882_ip = 231;
                    continue _fun42882
                }
            case 66:
                var3 = var4.comment;
                if (!(var6 !== var3)) {
                    _fun42882_ip = 231;
                    continue _fun42882
                }
            case 79:
                var3 = {};
                var10 = var3;
                var9 = var4;
                var4 = copyDataProperties(var10, var9);
                var4 = 'comment';
                var3[var4] = var6;
                var _closure2_slot1 = var3;
                var4 = var5.games;
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    _fun42884: for (var _fun42884_ip = 0;;) switch (_fun42884_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.applicationId;
                            var2 = _closure2_slot0;
                            if (!(var3 === var2)) {
                                _fun42884_ip = 23;
                                continue _fun42884
                            }
                        case 19:
                            var0 = _closure2_slot1;
                        case 23:
                            return var0;
                    }
                };
                var7 = var3.bind(var4)(var2);
                var3 = _closure1_slot16;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var2 = var6.bind(var0)(var2);
                var6 = var2.BaseGameWidget;
                var2 = {};
                var10 = var2;
                var9 = var5;
                var5 = copyDataProperties(var10, var9);
                var5 = 'games';
                var2[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var5;
                var10 = var2;
                var2 = new var11[var6](var10, var9);
                var2 = var2 instanceof Object ? var2 : var5;
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setPendingWidgets;
                var1 = var1.bind(var2)(var3);
            case 231:
                return var0;
        }
    };
    var2.updatePendingGameComment = var4;
    var4 = function arg0() {
        _fun42885: for (var _fun42885_ip = 0;;) switch (_fun42885_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.widgetType;
                var1 = var0.game;
                var _closure2_slot0 = var1;
                var7 = var0.ignoreMaxGames;
                var0 = undefined;
                if (!(var7 === var0)) {
                    _fun42885_ip = 37;
                    continue _fun42885
                }
            case 35:
                var7 = false;
            case 37:
                var4 = _closure1_slot15;
                var5 = var4.bind(var0)(var9);
                var4 = _closure1_slot12;
                var6 = var4.bind(var0)(var9);
                var8 = null;
                if (!(var8 != var5)) {
                    _fun42885_ip = 141;
                    continue _fun42885
                }
            case 64:
                var4 = var5.games;
                var11 = var8 == var4;
                var10 = undefined;
                if (var11) {
                    _fun42885_ip = 84;
                    continue _fun42885
                }
            case 79:
                var10 = var4.length;
            case 84:
                var11 = var8 != var10;
                var4 = 0;
                if (!var11) {
                    _fun42885_ip = 96;
                    continue _fun42885
                }
            case 93:
                var4 = var10;
            case 96:
                if (var7) {
                    _fun42885_ip = 105;
                    continue _fun42885
                }
            case 99:
                if (!(var4 >= var6)) {
                    _fun42885_ip = 105;
                    continue _fun42885
                }
            case 103:
                return var0;
            case 105:
                var6 = var5.games;
                if (!(var8 == var6)) {
                    _fun42885_ip = 119;
                    continue _fun42885
                }
            case 115:
                var6 = new Array(0);
            case 119:
                var4 = var6.some;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot0;
                    var0 = var0.applicationId;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var4.bind(var6)(var3);
                if (var3) {
                    _fun42885_ip = 387;
                    continue _fun42885
                }
            case 141:
                var4 = {};
                var3 = var1.applicationId;
                var4.applicationId = var3;
                var3 = var1.comment;
                var4.comment = var3;
                var3 = var1.tags;
                var4.tags = var3;
                if (!(var8 == var5)) {
                    _fun42885_ip = 188;
                    continue _fun42885
                }
            case 178:
                var7 = new Array(1);
                var7[0] = var4;
                _fun42885_ip = 226;
                continue _fun42885;
            case 188:
                var3 = new Array(1);
                var3[0] = var4;
                var6 = var5.games;
                if (!(var8 == var6)) {
                    _fun42885_ip = 210;
                    continue _fun42885
                }
            case 206:
                var6 = new Array(0);
            case 210:
                var12 = 1;
                var14 = var3;
                var13 = var6;
                var4 = arraySpread(var14, var13, var12);
                var7 = var3;
            case 226:
                var4 = _closure1_slot16;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 7;
                var3 = var10[var3];
                var3 = var6.bind(var0)(var3);
                var6 = var3.BaseGameWidget;
                var3 = {};
                if (!(var8 == var5)) {
                    _fun42885_ip = 271;
                    continue _fun42885
                }
            case 262:
                var8 = {};
                var8.type = var9;
                var5 = var8;
            case 271:
                var14 = var3;
                var13 = var5;
                var5 = copyDataProperties(var14, var13);
                var5 = 'games';
                var3[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var15 = var5;
                var14 = var3;
                var3 = new var15[var6](var14, var13);
                var3 = var3 instanceof Object ? var3 : var5;
                var6 = var4.bind(var0)(var3);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var2 = var5.setPendingWidgets;
                var2 = var2.bind(var5)(var6);
                var2 = 10;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getDetectableGamesSupplemental;
                var4 = var1.applicationId;
                var1 = new Array(1);
                var1[0] = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            case 387:
                return var0;
        }
    };
    var2.addPendingGameToWidget = var4;
    var4 = function arg0, arg1() {
        _fun42887: for (var _fun42887_ip = 0;;) switch (_fun42887_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                if (!(var4 !== var6)) {
                    _fun42887_ip = 143;
                    continue _fun42887
                }
            case 13:
                var1 = _closure1_slot14;
                var3 = undefined;
                var1 = var1.bind(var3)();
                var5 = 0;
                if (!(!(var4 < var5))) {
                    _fun42887_ip = 143;
                    continue _fun42887
                }
            case 32:
                var2 = var1.length;
                if (!(!(var4 >= var2))) {
                    _fun42887_ip = 143;
                    continue _fun42887
                }
            case 41:
                if (!(!(var6 < var5))) {
                    _fun42887_ip = 143;
                    continue _fun42887
                }
            case 45:
                var2 = var1.length;
                if (!(!(var6 >= var2))) {
                    _fun42887_ip = 143;
                    continue _fun42887
                }
            case 54:
                var2 = new Array(0);
                var10 = var2;
                var9 = var1;
                var8 = 0;
                var1 = arraySpread(var10, var9, var8);
                var1 = var2.splice;
                var7 = 1;
                var4 = var1.bind(var2)(var4, var7);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var4, var7);
                var4 = var1[var5];
                var1 = var2.splice;
                var1 = var1.bind(var2)(var6, var5, var4);
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.setPendingWidgets;
                var0 = var0.bind(var1)(var2);
            case 143:
                var0 = undefined;
                return var0;
        }
    };
    var2.reorderWidgets = var4;
    var4 = function arg0, arg1, arg2() {
        _fun42888: for (var _fun42888_ip = 0;;) switch (_fun42888_ip) {
            case 0:
                var3 = arg1;
                var6 = arg2;
                var4 = _closure1_slot15;
                var0 = undefined;
                var2 = arg0;
                var5 = var4.bind(var0)(var2);
                var4 = null;
                if (!(var4 != var5)) {
                    _fun42888_ip = 259;
                    continue _fun42888
                }
            case 32:
                var2 = var5.games;
                if (!(var4 != var2)) {
                    _fun42888_ip = 259;
                    continue _fun42888
                }
            case 45:
                if (!(var3 !== var6)) {
                    _fun42888_ip = 259;
                    continue _fun42888
                }
            case 52:
                var10 = var5.games;
                var7 = new Array(0);
                var4 = 0;
                var11 = var7;
                var9 = 0;
                var2 = arraySpread(var11, var10, var9);
                if (!(!(var3 < var4))) {
                    _fun42888_ip = 259;
                    continue _fun42888
                }
            case 80:
                var2 = var7.length;
                if (!(!(var3 >= var2))) {
                    _fun42888_ip = 259;
                    continue _fun42888
                }
            case 92:
                if (!(!(var6 < var4))) {
                    _fun42888_ip = 259;
                    continue _fun42888
                }
            case 99:
                var2 = var7.length;
                if (!(!(var6 >= var2))) {
                    _fun42888_ip = 259;
                    continue _fun42888
                }
            case 111:
                var2 = var7.splice;
                var8 = 1;
                var3 = var2.bind(var7)(var3, var8);
                var2 = _closure1_slot3;
                var2 = var2.bind(var0)(var3, var8);
                var3 = var2[var4];
                var2 = var7.splice;
                var2 = var2.bind(var7)(var6, var4, var3);
                var3 = _closure1_slot16;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var2 = var6.bind(var0)(var2);
                var6 = var2.BaseGameWidget;
                var2 = {};
                var11 = var2;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'games';
                var2[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = var5;
                var11 = var2;
                var2 = new var12[var6](var11, var10);
                var2 = var2 instanceof Object ? var2 : var5;
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setPendingWidgets;
                var1 = var1.bind(var2)(var3);
            case 259:
                return var0;
        }
    };
    var2.reorderGamesInWidget = var4;
    var4 = function arg0, arg1() {
        _fun42889: for (var _fun42889_ip = 0;;) switch (_fun42889_ip) {
            case 0:
                var0 = arg1;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot15;
                var0 = undefined;
                var3 = arg0;
                var5 = var4.bind(var0)(var3);
                var4 = null;
                if (!(var4 != var5)) {
                    _fun42889_ip = 178;
                    continue _fun42889
                }
            case 35:
                var3 = var5.games;
                if (!(var4 == var3)) {
                    _fun42889_ip = 51;
                    continue _fun42889
                }
            case 45:
                var4 = new Array(0);
                _fun42889_ip = 57;
                continue _fun42889;
            case 51:
                var4 = var5.games;
            case 57:
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var7 = var3.bind(var4)(var2);
                var3 = _closure1_slot16;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var2 = var6.bind(var0)(var2);
                var6 = var2.BaseGameWidget;
                var2 = {};
                var9 = var2;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var5 = 'games';
                var2[var5] = var7;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var5;
                var9 = var2;
                var2 = new var10[var6](var9, var8);
                var2 = var2 instanceof Object ? var2 : var5;
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setPendingWidgets;
                var1 = var1.bind(var2)(var3);
            case 178:
                return var0;
        }
    };
    var2.removePendingGameFromWidget = var4;
    var4 = function arg0() {
        var0 = arg0;
        var3 = _closure1_slot12;
        var2 = var0.type;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var0 = var0.games;
        var0 = var0.length;
        var0 = var0 >= var1;
        return var0;
    };
    var2.isGameLimitReached = var4;
    var4 = function arg0, arg1, arg2() {
        _fun42892: for (var _fun42892_ip = 0;;) switch (_fun42892_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var2 = arg2;
                var _closure2_slot1 = var2;
                var2 = var3.length;
                var0 = var0.length;
                var0 = var2 === var0;
                if (!var0) {
                    _fun42892_ip = 52;
                    continue _fun42892
                }
            case 36:
                var2 = var3.every;
                var1 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var4 = var2[var1];
                    var3 = _closure2_slot1;
                    var2 = function arg0, arg1, arg2() {
                        _fun42894: for (var _fun42894_ip = 0;;) switch (_fun42894_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var6 = arg2;
                                var4 = var2.applicationId;
                                var3 = var1.applicationId;
                                if (!(var4 === var3)) {
                                    _fun42894_ip = 192;
                                    continue _fun42894
                                }
                            case 28:
                                var5 = _closure1_slot10;
                                var4 = undefined;
                                var5 = var5.bind(var4)(var6);
                                if (!var5) {
                                    _fun42894_ip = 75;
                                    continue _fun42894
                                }
                            case 45:
                                var8 = _closure1_slot18;
                                var5 = var2.comment;
                                var7 = var8.bind(var4)(var5);
                                var5 = var1.comment;
                                var5 = var8.bind(var4)(var5);
                                if (!(var7 === var5)) {
                                    _fun42894_ip = 188;
                                    continue _fun42894
                                }
                            case 75:
                                var5 = _closure1_slot11;
                                var5 = var5.bind(var4)(var6);
                                if (!var5) {
                                    _fun42894_ip = 176;
                                    continue _fun42894
                                }
                            case 87:
                                var3 = _closure1_slot18;
                                var2 = var2.tags;
                                var2 = var3.bind(var4)(var2);
                                var1 = var1.tags;
                                var1 = var3.bind(var4)(var1);
                                var _closure4_slot0 = var1;
                                var3 = null;
                                var5 = var3 === var2;
                                var4 = var3 === var1;
                                if (!(var5 === var4)) {
                                    _fun42894_ip = 184;
                                    continue _fun42894
                                }
                            case 131:
                                if (!(var3 !== var2)) {
                                    _fun42894_ip = 176;
                                    continue _fun42894
                                }
                            case 135:
                                if (!(var3 !== var1)) {
                                    _fun42894_ip = 176;
                                    continue _fun42894
                                }
                            case 139:
                                var3 = var2.length;
                                var1 = var1.length;
                                if (!(var3 === var1)) {
                                    _fun42894_ip = 180;
                                    continue _fun42894
                                }
                            case 153:
                                var1 = var2.every;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var1 = _closure4_slot0;
                                    var0 = arg1;
                                    var1 = var1[var0];
                                    var0 = arg0;
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                if (var0) {
                                    _fun42894_ip = 176;
                                    continue _fun42894
                                }
                            case 172:
                                var0 = false;
                                return var0;
                            case 176:
                                var0 = true;
                                return var0;
                            case 180:
                                var0 = false;
                                return var0;
                            case 184:
                                var0 = false;
                                return var0;
                            case 188:
                                var0 = false;
                                return var0;
                            case 192:
                                var0 = false;
                                return var0;
                        }
                    };
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0, var4, var3);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 52:
                return var0;
        }
    };
    var2.areWidgetGamesEqual = var4;
    var2.isNSFWGame = var3;
    var1 = function arg0() {
        _fun42896: for (var _fun42896_ip = 0;;) switch (_fun42896_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot19;
                var4 = undefined;
                var0 = var0.bind(var4)(var1);
                var0 = !var0;
                if (!var0) {
                    _fun42896_ip = 67;
                    continue _fun42896
                }
            case 23:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.GAME_WIDGET_BANNED_APPLICATION_IDS;
                var2 = var3.has;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 67:
                return var0;
        }
    };
    var2.isGameAllowedInGameWidgets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1621, 4660, 4665, 4666, 4663, 1234, 4662, 4667, 4668, 4669, 3487, 2]);