// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HappeningNowCardTrackingType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AvatarSizes;
    var3 = var3.LARGE;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'display': 'flex',
        'alignItems': 'center'
    };
    var3.content = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun101769: for (var _fun101769_ip = 0;;) switch (_fun101769_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.index;
                var _closure2_slot0 = var13;
                var12 = var1.userId;
                var _closure2_slot1 = var12;
                var18 = var1.guildId;
                var _closure2_slot2 = var18;
                var7 = var1.fullwidth;
                var5 = var1.panelVariant;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun101769_ip = 52;
                    continue _fun101769
                }
            case 50:
                var5 = false;
            case 52:
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var1 = _closure1_slot11;
                var8 = var1.bind(var4)();
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 9;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var6 = var1.analyticsLocations;
                _closure2_slot3 = var6;
                var2 = _closure1_slot0;
                var1 = 10;
                var3 = var9[var1];
                var15 = var2.bind(var4)(var3);
                var14 = var15.useStateFromStores;
                var3 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var3;
                var10 = new Array(1);
                var10[0] = var12;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getUser;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var14.bind(var15)(var11, var3, var10);
                _closure2_slot4 = var19;
                var3 = _closure1_slot3;
                var11 = var3.useCallback;
                var10 = new Array(5);
                var10[0] = var13;
                var10[1] = var18;
                var10[2] = var12;
                var10[3] = var19;
                var10[4] = var6;
                var6 = function() { // Environment: var0
                    _fun101771: for (var _fun101771_ip = 0;;) switch (_fun101771_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.track;
                            var2 = _closure1_slot8;
                            var4 = var2.ACTIVITY_CARD_CLICKED;
                            var3 = {};
                            var7 = _closure2_slot0;
                            var3.order = var7;
                            var7 = _closure2_slot2;
                            var3.guild_id = var7;
                            var7 = _closure1_slot7;
                            var7 = var7.INDIVIDUAL_USER_CARD;
                            var3.type = var7;
                            var8 = _closure2_slot1;
                            var7 = new Array(1);
                            var7[0] = var8;
                            var3.highlighted_user_ids = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var3 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun101771_ip = 166;
                                continue _fun101771
                            }
                        case 109:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 13;
                            var2 = var1[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = 12;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var0)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var2 = var0.default;
                                var1 = {};
                                var3 = _closure2_slot4;
                                var3 = var3.id;
                                var1.userId = var3;
                                var3 = _closure2_slot4;
                                var1.localUser = var3;
                                var0 = _closure2_slot3;
                                var1.sourceAnalyticsLocations = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 166:
                            return var0;
                    }
                };
                var6 = var11.bind(var3)(var6, var10);
                var1 = var9[var1];
                var11 = var2.bind(var4)(var1);
                var10 = var11.useStateFromStoresObject;
                var1 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var1;
                var2 = new Array(2);
                var2[0] = var18;
                var2[1] = var19;
                var1 = function() { // Environment: var0
                    _fun101773: for (var _fun101773_ip = 0;;) switch (_fun101773_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun101773_ip = 129;
                                continue _fun101773
                            }
                        case 13:
                            var0 = {};
                            var3 = _closure1_slot5;
                            var4 = var3.getStatus;
                            var2 = _closure2_slot4;
                            var2 = var2.id;
                            var5 = _closure2_slot2;
                            var2 = var4.bind(var3)(var2, var5);
                            var0.status = var2;
                            var4 = var3.getActivities;
                            var2 = _closure2_slot4;
                            var2 = var2.id;
                            var2 = var4.bind(var3)(var2, var5);
                            var0.activities = var2;
                            var4 = var3.isMobileOnline;
                            var2 = _closure2_slot4;
                            var2 = var2.id;
                            var2 = var4.bind(var3)(var2);
                            var0.isMobileOnline = var2;
                            var2 = var3.isVROnline;
                            var1 = _closure2_slot4;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var0.isVROnline = var1;
                            _fun101773_ip = 131;
                            continue _fun101773;
                        case 129:
                            var0 = {};
                        case 131:
                            return var0;
                    }
                };
                var1 = var10.bind(var11)(var9, var1, var2);
                var14 = var1.status;
                _closure2_slot5 = var14;
                var13 = var1.activities;
                var16 = var1.isMobileOnline;
                var12 = var1.isVROnline;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var14;
                var1[1] = var19;
                var0 = function() { // Environment: var0
                    _fun101774: for (var _fun101774_ip = 0;;) switch (_fun101774_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun101774_ip = 32;
                                continue _fun101774
                            }
                        case 13:
                            var3 = _closure2_slot4;
                            var2 = var3.isSystemUser;
                            var2 = var2.bind(var3)();
                            var0 = null;
                            if (var2) {
                                _fun101774_ip = 36;
                                continue _fun101774
                            }
                        case 32:
                            var0 = _closure2_slot5;
                        case 36:
                            return var0;
                    }
                };
                var11 = var2.bind(var3)(var0, var1);
                var0 = null;
                if (!(var0 != var19)) {
                    _fun101769_ip = 604;
                    continue _fun101769
                }
            case 333:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 14;
                var1 = var9[var1];
                var3 = var2.bind(var4)(var1);
                var1 = var3.getName;
                var1 = var1.bind(var3)(var19);
                var10 = new Array(2);
                var10[0] = var1;
                var3 = _closure1_slot0;
                var1 = 15;
                var1 = var9[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.getStatusLabel;
                var1 = var1.bind(var3)(var14);
                var10[1] = var1;
                var3 = var10.join;
                var1 = ', ';
                var10 = var3.bind(var10)(var1);
                var3 = _closure1_slot9;
                var1 = 16;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.onPress = var6;
                var6 = 'small';
                if (!var7) {
                    _fun101769_ip = 452;
                    continue _fun101769
                }
            case 448:
                var6 = 'full';
            case 452:
                var1.width = var6;
                var1.panelVariant = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.content;
                var5.style = var8;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 7;
                var8 = var15[var8];
                var9 = var14.bind(var4)(var8);
                var8 = {};
                var8.user = var19;
                var19 = var19.avatarDecoration;
                var8.avatarDecoration = var19;
                var8.guildId = var18;
                var17 = _closure1_slot10;
                var8.size = var17;
                var8.isMobileOnline = var16;
                var8.isVROnline = var12;
                var12 = 17;
                var12 = var15[var12];
                var12 = var14.bind(var4)(var12);
                var12 = var12.bind(var4)(var13);
                var8.streaming = var12;
                var8.status = var11;
                var8.accessibilityLabel = var10;
                var10 = true;
                var8.autoStatusCutout = var10;
                var8 = var7.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 604:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3612, 1621, 10922, 660, 33, 5457, 1297, 5734, 566, 795, 7377, 1307, 3238, 7902, 10923, 5744, 2]);