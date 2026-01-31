// modules/user_settings/native/defs/AccountUsernameSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.MobileSetting;
    var11 = 4;
    var1 = var5[var11];
    var1 = var4.bind(var0)(var1);
    var9 = var1.UserSettingsSections;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.PomeloEntrypoints;
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot7 = var3;
    var1 = var1.jsxs;
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createStyles;
    var1 = {};
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var1.usernameTrailing = var10;
    var10 = {};
    var10.marginLeft = var11;
    var1.usernameIcon = var10;
    var1 = var3.bind(var6)(var1);
    var _closure1_slot9 = var1;
    var1 = 23;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createRoute;
    var1 = {};
    var10 = function() { // Original name: title, environment: var8
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 21;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.IEpCBQ;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var10;
    var7 = var7.ACCOUNT;
    var1.parent = var7;
    var7 = function() { // Original name: useGetAccountUsernameSettingCanNavigate, environment: var8
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            _fun80749: for (var _fun80749_ip = 0;;) switch (_fun80749_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var3 = var0.bind(var1)();
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 8;
                    var0 = var5[var0];
                    var8 = undefined;
                    var1 = var2.bind(var8)(var0);
                    var0 = var1.isEligibleForPomelo;
                    var0 = var0.bind(var1)();
                    var1 = 18;
                    var1 = var5[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.getPomeloEligibility;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun80749_ip = 295;
                        continue _fun80749
                    }
                case 79:
                    var1 = var3.isClaimed;
                    var1 = var1.bind(var3)();
                    var1 = !var1;
                    if (!var2) {
                        _fun80749_ip = 121;
                        continue _fun80749
                    }
                case 95:
                    var2 = var3.hasUniqueUsername;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun80749_ip = 121;
                        continue _fun80749
                    }
                case 108:
                    var2 = var3.hasVerifiedEmailOrPhone;
                    var2 = var2.bind(var3)();
                    if (!var2) {
                        _fun80749_ip = 175;
                        continue _fun80749
                    }
                case 121:
                    if (var1) {
                        _fun80749_ip = 175;
                        continue _fun80749
                    }
                case 124:
                    var0 = !var0;
                    if (var0) {
                        _fun80749_ip = 173;
                        continue _fun80749
                    }
                case 130:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var1 = var3[var1];
                    var3 = var2.bind(var8)(var1);
                    var2 = var3.openPomeloModal;
                    var1 = _closure1_slot6;
                    var1 = var1.USER_SETTINGS_EDIT;
                    var1 = var2.bind(var3)(var1);
                    var0 = false;
                case 173:
                    _fun80749_ip = 293;
                    continue _fun80749;
                case 175:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 19;
                    var1 = var9[var1];
                    var3 = var6.bind(var8)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = 'POMELO_UPDATE_DISABLED_MESSAGE';
                    var1.key = var5;
                    var5 = 20;
                    var5 = var9[var5];
                    var5 = var6.bind(var8)(var5);
                    var1.icon = var5;
                    var7 = _closure1_slot0;
                    var4 = 21;
                    var5 = var9[var4];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var9[var4];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4["7Ngnyr"];
                    var4 = var5.bind(var6)(var4);
                    var1.content = var4;
                    var1 = var2.bind(var3)(var1);
                    var0 = false;
                case 293:
                    return var0;
                case 295:
                    var0 = false;
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.usePreNavigationAction = var7;
    var7 = function() { // Original name: useAccountUsernameSettingTrailing, environment: var8
        _fun80750: for (var _fun80750_ip = 0;;) switch (_fun80750_ip) {
            case 0:
                var0 = _closure1_slot9;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var1 = var2.bind(var4)(var0);
                var0 = var1.useIsEligibleForPomelo;
                var1 = var0.bind(var1)();
                var0 = 9;
                var0 = var3[var0];
                var5 = var2.bind(var4)(var0);
                var3 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getUserTag;
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var1 = var0.bind(var1)();
                    var0 = {};
                    var4 = 'never';
                    var0.decoration = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var10 = var3.bind(var5)(var2, var0);
                var0 = var10;
                if (!var1) {
                    _fun80750_ip = 292;
                    continue _fun80750
                }
            case 96:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var9.usernameTrailing;
                var1.style = var5;
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 11;
                var5 = var11[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.TableRow;
                var7 = var5.TrailingText;
                var5 = {};
                var5.text = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var10 = _closure1_slot1;
                var6 = 12;
                var6 = var11[var6];
                var7 = var10.bind(var4)(var6);
                var6 = {};
                var9 = var9.usernameIcon;
                var6.style = var9;
                var9 = 13;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.colors;
                var9 = var9.STATUS_WARNING;
                var6.themedColor = var9;
                var9 = 14;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.Sizes;
                var9 = var9.SMALL_20;
                var6.size = var9;
                var9 = 15;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var6.source = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 292:
                return var0;
        }
    };
    var1.useTrailing = var7;
    var7 = function() { // Original name: useAccountUsernameSettingDescription, environment: var8
        _fun80752: for (var _fun80752_ip = 0;;) switch (_fun80752_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 16;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useGuildAutomodProfileQuarantineErrors;
                var2 = var0.bind(var2)();
                var0 = null;
                var3 = var0 == var2;
                var5 = undefined;
                if (var3) {
                    _fun80752_ip = 67;
                    continue _fun80752
                }
            case 46:
                var3 = var2.nick;
                var2 = var0 == var3;
                var5 = undefined;
                if (var2) {
                    _fun80752_ip = 67;
                    continue _fun80752
                }
            case 61:
                var2 = 0;
                var5 = var3[var2];
            case 67:
                var2 = var0 == var5;
                var0 = null;
                if (var2) {
                    _fun80752_ip = 129;
                    continue _fun80752
                }
            case 76:
                var3 = _closure1_slot7;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 17;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-feedback-warning'
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 129:
                return var0;
        }
    };
    var1.useDescription = var7;
    var7 = {};
    var9 = var9.ACCOUNT_CHANGE_USERNAME;
    var7.route = var9;
    var8 = function() { // Original name: getComponent, environment: var8
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 24;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.default;
        return var0;
    };
    var7.getComponent = var8;
    var1.screen = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/AccountUsernameSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 6967, 660, 10244, 33, 1297, 10241, 566, 3195, 4861, 4888, 671, 4045, 7474, 10041, 3900, 10242, 3107, 7419, 1234, 10245, 8943, 10276, 2]);