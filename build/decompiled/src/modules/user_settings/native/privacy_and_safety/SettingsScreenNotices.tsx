// modules/user_settings/native/privacy_and_safety/SettingsScreenNotices.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {};
    var10 = 5;
    var11 = var6[var10];
    var11 = var9.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginHorizontal = var11;
    var10 = var6[var10];
    var10 = var9.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.marginTop = var10;
    var1.noticeContainer = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var4 = 'SENSITIVE_CONTENT_FILTERS';
    var1.SENSITIVE_CONTENT_FILTERS = var4;
    var4 = 'CONTENT_AND_SOCIAL';
    var1.CONTENT_AND_SOCIAL = var4;
    var4 = 'DATA_AND_PRIVACY';
    var1.DATA_AND_PRIVACY = var4;
    var4 = {};
    var12 = {};
    var11 = 100;
    var12.order = var11;
    var10 = 6;
    var7 = var6[var10];
    var7 = var5.bind(var0)(var7);
    var7 = var7.isParentallyControlled;
    var12.predicate = var7;
    var7 = 7;
    var8 = var6[var7];
    var8 = var9.bind(var0)(var8);
    var12.Component = var8;
    var8 = new Array(3);
    var8[0] = var12;
    var12 = {};
    var13 = 200;
    var12.order = var13;
    var13 = function() { // Original name: predicate, environment: var3
        _fun81194: for (var _fun81194_ip = 0;;) switch (_fun81194_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                var1 = null;
                var2 = var1 == var0;
                var1 = undefined;
                if (var2) {
                    _fun81194_ip = 33;
                    continue _fun81194
                }
            case 27:
                var1 = var0.nsfwAllowed;
            case 33:
                var0 = false;
                var0 = var0 === var1;
                return var0;
        }
    };
    var12.predicate = var13;
    var13 = 8;
    var14 = var6[var13];
    var14 = var5.bind(var0)(var14);
    var14 = var14.SensitiveContentFiltersTeenNotice;
    var12.Component = var14;
    var8[1] = var12;
    var12 = {};
    var14 = 300;
    var12.order = var14;
    var14 = function() { // Original name: predicate, environment: var3
        _fun81195: for (var _fun81195_ip = 0;;) switch (_fun81195_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 9;
                var0 = var5[var0];
                var3 = undefined;
                var6 = var4.bind(var3)(var0);
                var2 = var6.getIsGidgetPawtectEnabled;
                var0 = 'SensitiveContentFiltersNotice';
                var2 = var2.bind(var6)(var0);
                var0 = 10;
                var0 = var5[var0];
                var4 = var4.bind(var3)(var0);
                var0 = var4.hasTeenDefaults;
                var0 = var0.bind(var4)();
                if (var0) {
                    _fun81195_ip = 70;
                    continue _fun81195
                }
            case 67:
                var0 = var2;
            case 70:
                if (!var0) {
                    _fun81195_ip = 106;
                    continue _fun81195
                }
            case 73:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 11;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isAgeVerified;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 106:
                return var0;
        }
    };
    var12.predicate = var14;
    var13 = var6[var13];
    var13 = var5.bind(var0)(var13);
    var13 = var13.SensitiveContentFiltersAgeVerificationNotice;
    var12.Component = var13;
    var8[2] = var12;
    var4.SENSITIVE_CONTENT_FILTERS = var8;
    var12 = {};
    var12.order = var11;
    var8 = var6[var10];
    var8 = var5.bind(var0)(var8);
    var8 = var8.isParentallyControlled;
    var12.predicate = var8;
    var8 = var6[var7];
    var8 = var9.bind(var0)(var8);
    var12.Component = var8;
    var8 = new Array(1);
    var8[0] = var12;
    var4.CONTENT_AND_SOCIAL = var8;
    var8 = {};
    var8.order = var11;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.isParentallyControlled;
    var8.predicate = var10;
    var7 = var6[var7];
    var7 = var9.bind(var0)(var7);
    var8.Component = var7;
    var7 = new Array(1);
    var7[0] = var8;
    var4.DATA_AND_PRIVACY = var7;
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/privacy_and_safety/SettingsScreenNotices.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: SettingsScreenNotices, environment: var3
        _fun81196: for (var _fun81196_ip = 0;;) switch (_fun81196_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.screen;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot6;
                var4 = undefined;
                var5 = var2.bind(var4)();
                var6 = _closure1_slot2;
                var3 = var6.useMemo;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    _fun81197: for (var _fun81197_ip = 0;;) switch (_fun81197_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = _closure2_slot0;
                            var3 = var2[var1];
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = var1.predicate;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.sort;
                            var1 = function(arg0, arg1) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.order;
                                var0 = arg1;
                                var0 = var0.order;
                                var0 = var1 - var0;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.Component;
                                return var0;
                            };
                            var2 = var1.bind(var2)(var0);
                            var3 = var2.length;
                            var1 = 0;
                            var0 = null;
                            if (!(var1 !== var3)) {
                                _fun81197_ip = 89;
                                continue _fun81197
                            }
                        case 85:
                            var0 = var2[var1];
                        case 89:
                            return var0;
                    }
                };
                var6 = var3.bind(var6)(var0, var2);
                var0 = null;
                var2 = var0 == var6;
                if (var2) {
                    _fun81196_ip = 106;
                    continue _fun81196
                }
            case 67:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var5.noticeContainer;
                var1.style = var5;
                var5 = {};
                var5 = var3.bind(var4)(var6, var5, var7);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 106:
                return var0;
        }
    };
    var2.default = var3;
    var2.SettingsScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 33, 1297, 671, 4621, 10324, 10325, 4238, 4239, 4212, 2]);