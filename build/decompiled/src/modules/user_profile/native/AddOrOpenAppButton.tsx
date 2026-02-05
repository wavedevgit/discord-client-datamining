// modules/user_profile/native/AddOrOpenAppButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun62286: for (var _fun62286_ip = 0;;) switch (_fun62286_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.application;
                var _closure2_slot0 = var4;
                var1 = var1.guildId;
                var _closure2_slot1 = var1;
                var5 = _closure1_slot5;
                var3 = var5.useCallback;
                var6 = var4.customInstallUrl;
                var2 = new Array(5);
                var2[0] = var6;
                var6 = var4.id;
                var2[1] = var6;
                var6 = var4.installParams;
                var2[2] = var6;
                var6 = var4.integrationTypesConfig;
                var2[3] = var6;
                var2[4] = var1;
                var1 = function() { // Environment: var0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 8;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.installApplication;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var8 = var7.id;
                    var2.applicationId = var8;
                    var8 = var7.customInstallUrl;
                    var2.customInstallUrl = var8;
                    var8 = var7.installParams;
                    var2.installParams = var8;
                    var7 = var7.integrationTypesConfig;
                    var2.integrationTypesConfig = var7;
                    var6 = _closure2_slot1;
                    var2.guildId = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var10 = var3.bind(var5)(var1, var2);
                var5 = _closure1_slot5;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var4;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.copy;
                    var1 = 11;
                    var1 = var3[var1];
                    var7 = var2.bind(var0)(var1);
                    var6 = var7.getApplicationInstallURL;
                    var1 = _closure2_slot0;
                    var1 = var6.bind(var7)(var1);
                    var1 = var4.bind(var5)(var1);
                    var1 = 12;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentLinkCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var8 = var3.bind(var5)(var1, var2);
                var5 = var4.customInstallUrl;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun62286_ip = 197;
                    continue _fun62286
                }
            case 133:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.isDiscordUrl;
                var1 = var1.bind(var2)(var5);
                if (var1) {
                    _fun62286_ip = 197;
                    continue _fun62286
                }
            case 169:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var6 = var1.LinkExternalSmallIcon;
                _fun62286_ip = 225;
                continue _fun62286;
            case 197:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var6 = var1.PlusSmallIcon;
            case 225:
                var5 = _closure1_slot5;
                var3 = var5.useMemo;
                var2 = function() { // Environment: var0
                    var1 = {};
                    var0 = 'longpress';
                    var1.name = var0;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 16;
                    var2 = var6[var0];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var0 = var6[var0];
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.t;
                    var0 = var0.XWDihq;
                    var0 = var2.bind(var3)(var0);
                    var1.label = var0;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var1 = new Array(0);
                var5 = var3.bind(var5)(var2, var1);
                var3 = _closure1_slot5;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function(arg0) { // Environment: var0
                    _fun62290: for (var _fun62290_ip = 0;;) switch (_fun62290_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.actionName;
                            var0 = 'longPress';
                            if (!(var0 === var1)) {
                                _fun62290_ip = 113;
                                continue _fun62290
                            }
                        case 25:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 10;
                            var0 = var3[var0];
                            var1 = undefined;
                            var5 = var2.bind(var1)(var0);
                            var4 = var5.copy;
                            var0 = 11;
                            var0 = var3[var0];
                            var7 = var2.bind(var1)(var0);
                            var6 = var7.getApplicationInstallURL;
                            var0 = _closure2_slot0;
                            var0 = var6.bind(var7)(var0);
                            var0 = var4.bind(var5)(var0);
                            var0 = 12;
                            var0 = var3[var0];
                            var1 = var2.bind(var1)(var0);
                            var0 = var1.presentLinkCopied;
                            var0 = var0.bind(var1)();
                        case 113:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var2.bind(var3)(var0, var1);
                var3 = _closure1_slot9;
                var14 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 17;
                var0 = var9[var0];
                var2 = undefined;
                var0 = var14.bind(var2)(var0);
                var1 = var0.Button;
                var0 = {};
                var11 = 16;
                var12 = var9[var11];
                var12 = var14.bind(var2)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var9[var11];
                var11 = var14.bind(var2)(var11);
                var11 = var11.t;
                var11 = var11.NgXl3C;
                var11 = var12.bind(var13)(var11);
                var0.text = var11;
                var0.onPress = var10;
                var0.onLongPress = var8;
                var0.accessibilityActions = var5;
                var0.onAccessibilityAction = var4;
                var5 = _closure1_slot9;
                var4 = {};
                var8 = 'sm';
                var4.size = var8;
                var8 = _closure1_slot1;
                var7 = 18;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.colors;
                var7 = var7.WHITE;
                var4.color = var7;
                var4 = var5.bind(var2)(var6, var4);
                var0.icon = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.profileApplication;
        var _closure2_slot0 = var8;
        var9 = var0.channel;
        var _closure2_slot1 = var9;
        var7 = var0.onOpenApp;
        var _closure2_slot2 = var7;
        var4 = _closure1_slot5;
        var3 = var4.useState;
        var2 = false;
        var5 = var3.bind(var4)(var2);
        var4 = _closure1_slot4;
        var3 = undefined;
        var2 = 2;
        var4 = var4.bind(var3)(var5, var2);
        var2 = 0;
        var5 = var4[var2];
        var2 = 1;
        var2 = var4[var2];
        var _closure2_slot3 = var2;
        var6 = _closure1_slot5;
        var4 = var6.useCallback;
        var2 = _closure1_slot3;
        var1 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun62293: for (var _fun62293_ip = 0;;) switch (_fun62293_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun62293_ip = 403;
                            continue _fun62293
                        }
                    case 10:
                        var6 = _closure1_slot6;
                        var5 = {};
                        var1 = 'channel';
                        var5.type = var1;
                        var1 = _closure2_slot1;
                        var5.channel = var1;
                        var1 = _closure2_slot0;
                        var3 = var1.id;
                        var1 = undefined;
                        var9 = var6.bind(var1)(var5, var3);
                        var6 = var9.descriptor;
                        var3 = null;
                        var7 = var3 == var6;
                        var5 = undefined;
                        if (var7) {
                            _fun62293_ip = 77;
                            continue _fun62293
                        }
                    case 72:
                        var5 = var6.application;
                    case 77:
                        if (!(var3 == var5)) {
                            _fun62293_ip = 92;
                            continue _fun62293
                        }
                    case 81:
                        var6 = _closure2_slot3;
                        var5 = true;
                        var5 = var6.bind(var1)(var5);
                    case 92:
                        var5 = var9.descriptor;
                        var7 = var3 == var5;
                        var6 = undefined;
                        if (var7) {
                            _fun62293_ip = 112;
                            continue _fun62293
                        }
                    case 107:
                        var6 = var5.application;
                    case 112:
                        if (!(var3 == var6)) {
                            _fun62293_ip = 172;
                            continue _fun62293
                        }
                    case 116:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 19;
                        var5 = var8[var5];
                        var8 = var7.bind(var1)(var5);
                        var7 = var8.fetchApplication;
                        var5 = _closure2_slot0;
                        var5 = var5.id;
                        var5 = var7.bind(var8)(var5);
                        SaveGenerator(address = 160);
                    case 158:
                        return var5;
                    case 160:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        var6 = var5;
                        if (!var7) {
                            _fun62293_ip = 172;
                            continue _fun62293
                        }
                    case 169:
                        return var5;
                    case 172:
                        var7 = _closure2_slot3;
                        var5 = false;
                        var5 = var7.bind(var1)(var5);
                        if (!(var3 != var9)) {
                            _fun62293_ip = 400;
                            continue _fun62293
                        }
                    case 190:
                        var5 = _closure2_slot2;
                        if (!(var3 != var5)) {
                            _fun62293_ip = 206;
                            continue _fun62293
                        }
                    case 198:
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var1)();
                    case 206:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 20;
                        var4 = var7[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.getBestActiveInput;
                        var5 = var4.bind(var5)();
                        if (!(var3 != var5)) {
                            _fun62293_ip = 347;
                            continue _fun62293
                        }
                    case 240:
                        var4 = var5.openCustomKeyboard;
                        var3 = {};
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 21;
                        var7 = var10[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.KeyboardTypes;
                        var7 = var7.APP_LAUNCHER;
                        var3.type = var7;
                        var7 = {};
                        var8 = _closure1_slot8;
                        var8 = var8.APPLICATION_VIEW;
                        var7.initialRouteName = var8;
                        var8 = true;
                        var7.initiallyExpanded = var8;
                        var7.application = var6;
                        var8 = var9.isGuildInstalled;
                        var8 = !var8;
                        if (!var8) {
                            _fun62293_ip = 333;
                            continue _fun62293
                        }
                    case 324:
                        var9 = var9.isUserInstalled;
                        var8 = !var9;
                    case 333:
                        var7.installOnDemand = var8;
                        var3.context = var7;
                        var3 = var4.bind(var5)(var3);
                    case 347:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 22;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot7;
                        var3 = var2.APP_PROFILE_OPEN_APP_BUTTON_CLICKED;
                        var2 = {};
                        var6 = var6.id;
                        var2.application_id = var6;
                        var2 = var4.bind(var5)(var3, var2);
                    case 400:
                        return var1;
                    case 403:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = new Array(3);
        var1[0] = var9;
        var8 = var8.id;
        var1[1] = var8;
        var1[2] = var7;
        var4 = var4.bind(var6)(var2, var1);
        var2 = _closure1_slot9;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 17;
        var0 = var10[var0];
        var0 = var9.bind(var3)(var0);
        var1 = var0.Button;
        var0 = {};
        var6 = 16;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["Cia+A8"];
        var6 = var7.bind(var8)(var6);
        var0.text = var6;
        var0.loading = var5;
        var0.onPress = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getSection;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/AddOrOpenAppButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62294: for (var _fun62294_ip = 0;;) switch (_fun62294_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.application;
                var7 = var0.botUserId;
                var6 = var0.channel;
                var9 = var0.guildId;
                var5 = var0.onOpenApp;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)(var6);
                if (!var0) {
                    _fun62294_ip = 69;
                    continue _fun62294
                }
            case 63:
                var0 = null;
                if (!(var0 == var6)) {
                    _fun62294_ip = 95;
                    continue _fun62294
                }
            case 69:
                var3 = _closure1_slot9;
                var2 = _closure1_slot10;
                var0 = {};
                var0.application = var8;
                var0.guildId = var9;
                var0 = var3.bind(var4)(var2, var0);
                _fun62294_ip = 130;
                continue _fun62294;
            case 95:
                var3 = _closure1_slot9;
                var2 = _closure1_slot11;
                var1 = {};
                var1.profileApplication = var8;
                var1.botUserId = var7;
                var1.channel = var6;
                var1.onOpenApp = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 130:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 4674, 660, 1468, 33, 7834, 7835, 3278, 5295, 7846, 3147, 1457, 6452, 7847, 1234, 4084, 671, 5348, 3718, 1567, 795, 2]);