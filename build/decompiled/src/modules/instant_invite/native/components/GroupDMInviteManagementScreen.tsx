// modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun72749: for (var _fun72749_ip = 0;;) switch (_fun72749_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channelId;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot5;
                var2 = var3.useState;
                var0 = new Array(0);
                var2 = var2.bind(var3)(var0);
                var0 = _closure1_slot4;
                var4 = undefined;
                var9 = 2;
                var3 = var0.bind(var4)(var2, var9);
                var2 = 0;
                var0 = var3[var2];
                var _closure2_slot1 = var0;
                var8 = 1;
                var3 = var3[var8];
                var _closure2_slot2 = var3;
                var7 = _closure1_slot5;
                var5 = var7.useState;
                var3 = true;
                var5 = var5.bind(var7)(var3);
                var3 = _closure1_slot4;
                var5 = var3.bind(var4)(var5, var9);
                var3 = var5[var2];
                var5 = var5[var8];
                var _closure2_slot3 = var5;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 8;
                var5 = var10[var5];
                var7 = var7.bind(var4)(var5);
                var5 = function() { // Environment: var6
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*() { // Environment: var0
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun72753: for (var _fun72753_ip = 0;;) switch (_fun72753_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun72753_ip = 152;
                                            continue _fun72753
                                        }
                                    case 10:
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 9;
                                        var1 = var2[var1];
                                        var2 = undefined;
                                        var1 = var4.bind(var2)(var1);
                                        var5 = var1.HTTP;
                                        var4 = var5.get;
                                        var1 = {
                                            'url': null,
                                            'retries': 3,
                                            'oldFormErrors': true,
                                            'rejectWithError': true
                                        };
                                        var8 = _closure1_slot10;
                                        var7 = var8.INSTANT_INVITES;
                                        var6 = _closure2_slot0;
                                        var6 = var7.bind(var8)(var6);
                                        var1.url = var6;
                                        var1 = var4.bind(var5)(var1);
                                        SaveGenerator(address = 96);
                                    case 94:
                                        return var1;
                                    case 96:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun72753_ip = 149;
                                            continue _fun72753
                                        }
                                    case 102:
                                        var6 = var1.body;
                                        var5 = var6.map;
                                        var4 = function(arg0) { // Environment: var4
                                            var1 = arg0;
                                            var2 = _closure1_slot8;
                                            var0 = {};
                                            var6 = var0;
                                            var5 = var1;
                                            var3 = copyDataProperties(var6, var5);
                                            var4 = var1.max_uses;
                                            var3 = 'maxUses';
                                            var0[var3] = var4;
                                            var4 = var1.max_age;
                                            var3 = 'maxAge';
                                            var0[var3] = var4;
                                            var3 = var1.created_at;
                                            var1 = 'createdAt';
                                            var0[var1] = var3;
                                            var1 = var2.prototype;
                                            var1 = Object.create(var1, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var7 = var1;
                                            var6 = var0;
                                            var0 = new var7[var2](var6, var5);
                                            var0 = var0 instanceof Object ? var0 : var1;
                                            return var0;
                                        };
                                        var5 = var5.bind(var6)(var4);
                                        var4 = _closure2_slot2;
                                        var4 = var4.bind(var2)(var5);
                                        var4 = _closure2_slot3;
                                        var3 = false;
                                        var3 = var4.bind(var2)(var3);
                                        return var2;
                                    case 149:
                                        return var1;
                                    case 152:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = var2.bind(var0)();
                    var2 = var3.catch;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot3;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var7.bind(var4)(var5);
                var10 = _closure1_slot5;
                var7 = var10.useState;
                var5 = 21;
                var7 = var7.bind(var10)(var5);
                var5 = _closure1_slot4;
                var7 = var5.bind(var4)(var7, var9);
                var5 = var7[var2];
                var7 = var7[var8];
                var _closure2_slot4 = var7;
                var10 = _closure1_slot5;
                var9 = var10.useMemo;
                var8 = new Array(1);
                var8[0] = var0;
                var7 = function() { // Environment: var6
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.sortBy;
                    var1 = _closure2_slot1;
                    var0 = function(arg0) { // Environment: var0
                        _fun72758: for (var _fun72758_ip = 0;;) switch (_fun72758_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.inviter;
                                var0 = null;
                                var3 = var0 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun72758_ip = 44;
                                    continue _fun72758
                                }
                            case 20:
                                var3 = var2.username;
                                var2 = var0 == var3;
                                var1 = undefined;
                                if (var2) {
                                    _fun72758_ip = 44;
                                    continue _fun72758
                                }
                            case 34:
                                var2 = var3.toLowerCase;
                                var1 = var2.bind(var3)();
                            case 44:
                                var2 = var0 != var1;
                                var0 = '';
                                if (!var2) {
                                    _fun72758_ip = 58;
                                    continue _fun72758
                                }
                            case 55:
                                var0 = var1;
                            case 58:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var9.bind(var10)(var7, var8);
                var11 = _closure1_slot5;
                var10 = var11.useEffect;
                var9 = function() { // Environment: var6
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = 21;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = new Array(0);
                var7 = var10.bind(var11)(var9, var7);
                var11 = _closure1_slot5;
                var10 = var11.useCallback;
                var9 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var0 = var0.code;
                    return var0;
                };
                var7 = new Array(0);
                var7 = var10.bind(var11)(var9, var7);
                var11 = _closure1_slot5;
                var10 = var11.useCallback;
                var9 = new Array(1);
                var9[0] = var0;
                var6 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var7 = var0.item;
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot6;
                    var1 = {};
                    var6 = {};
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 11;
                    var9 = var8[var0];
                    var0 = undefined;
                    var9 = var5.bind(var0)(var9);
                    var9 = var9.spacing;
                    var9 = var9.PX_12;
                    var6.marginHorizontal = var9;
                    var1.style = var6;
                    var6 = _closure1_slot11;
                    var4 = 12;
                    var4 = var8[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = {};
                    var4.invite = var7;
                    var7 = function arg0() {
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure2_slot2;
                        var3 = _closure2_slot1;
                        var1 = var3.filter;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.code;
                            var0 = _closure4_slot0;
                            var0 = var0.code;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var1 = var1.bind(var3)(var0);
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4.onInviteRevoked = var7;
                    var4 = var6.bind(var0)(var5, var4);
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var6 = var10.bind(var11)(var6, var9);
                if (var3) {
                    _fun72749_ip = 540;
                    continue _fun72749
                }
            case 298:
                var0 = var0.length;
                if (!(var2 !== var0)) {
                    _fun72749_ip = 369;
                    continue _fun72749
                }
            case 307:
                var3 = _closure1_slot11;
                var2 = _closure1_slot7;
                var0 = {};
                var9 = _closure1_slot12;
                var9 = var9.list;
                var0.style = var9;
                var0.data = var8;
                var0.keyExtractor = var7;
                var0.renderItem = var6;
                var6 = 10;
                var0.initialNumToRender = var6;
                var0.windowSize = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun72749_ip = 538;
                continue _fun72749;
            case 369:
                var5 = _closure1_slot11;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 14;
                var2 = var10[var2];
                var3 = var7.bind(var4)(var2);
                var2 = {};
                var6 = 15;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var2.lightSource = var6;
                var6 = 16;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var2.darkSource = var6;
                var9 = _closure1_slot0;
                var6 = 17;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["+nLJkZ"];
                var7 = var8.bind(var11)(var7);
                var2.title = var7;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.F53CAc;
                var6 = var7.bind(var8)(var6);
                var2.body = var6;
                var0 = var5.bind(var4)(var3, var2);
            case 538:
                _fun72749_ip = 578;
                continue _fun72749;
            case 540:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.SceneLoadingIndicator;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 578:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Platform;
    var8 = var3.StyleSheet;
    var9 = var3.View;
    var _closure1_slot6 = var9;
    var3 = var3.FlatList;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelSettingsSections;
    var _closure1_slot9 = var7;
    var3 = var3.Endpoints;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {};
    var10 = 8;
    var9.paddingTop = var10;
    var3.list = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var6 = var1.channelId;
        var _closure2_slot0 = var6;
        var5 = var1.onClose;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot5;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = function arg0, arg1() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = {};
                var1 = _closure1_slot9;
                var2 = var1.INSTANT_INVITES_MANAGEMENT;
                var1 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 17;
                var8 = var6[var7];
                var4 = undefined;
                var8 = var5.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var6[var7];
                var7 = var5.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.OQ9MKu;
                var7 = var8.bind(var9)(var7);
                var1.title = var7;
                var7 = 18;
                var7 = var6[var7];
                var9 = var5.bind(var4)(var7);
                var8 = var9.getHeaderCloseButton;
                var7 = arg1;
                var7 = var8.bind(var9)(var7);
                var1.headerLeft = var7;
                var3 = function() {
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var0 = _closure4_slot0;
                    var1.channelId = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1.render = var3;
                var3 = 19;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.ImpressionNames;
                var3 = var3.GDM_SETTINGS_INVITES;
                var1.impressionName = var3;
                var0[var2] = var1;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var5 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot11;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 20;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var5;
        var4 = _closure1_slot9;
        var4 = var4.INSTANT_INVITES_MANAGEMENT;
        var0.initialRouteName = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 5862, 6428, 660, 33, 4062, 507, 22, 671, 9082, 5814, 7320, 9102, 9103, 1234, 4668, 481, 5748, 2]);