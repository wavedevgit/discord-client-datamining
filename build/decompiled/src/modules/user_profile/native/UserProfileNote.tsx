// modules/user_profile/native/UserProfileNote.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'space-between';
    var8.justifyContent = var9;
    var3.title = var8;
    var8 = {};
    var9 = 4;
    var8.marginBottom = var9;
    var3.heading = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileNote.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserProfileNote, environment: var1
        _fun91781: for (var _fun91781_ip = 0;;) switch (_fun91781_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.userId;
                var _closure2_slot0 = var1;
                var13 = var0.style;
                var0 = var0.onBack;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot4;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var0 = var5[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useUserProfileAnalyticsContext;
                var0 = var0.bind(var2)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot2 = var0;
                var2 = _closure1_slot1;
                var0 = 4;
                var0 = var5[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                var11 = var0.note;
                var5 = null;
                var7 = var5 != var11;
                if (!var7) {
                    _fun91781_ip = 126;
                    continue _fun91781
                }
            case 118:
                var0 = '';
                var7 = var0 !== var11;
            case 126:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                if (var7) {
                    _fun91781_ip = 157;
                    continue _fun91781
                }
            case 137:
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var12 = var0.PaperPlusIcon;
                _fun91781_ip = 175;
                continue _fun91781;
            case 157:
                var0 = 5;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var12 = var0.PaperIcon;
            case 175:
                var2 = _closure1_slot3;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 7;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var6 = 'button';
                var0.accessibilityRole = var6;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var16 = 8;
                var14 = var6[var16];
                var14 = var10.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var6 = var6[var16];
                var6 = var10.bind(var3)(var6);
                var10 = var6.t;
                if (var7) {
                    _fun91781_ip = 277;
                    continue _fun91781
                }
            case 262:
                var6 = var10["1ZZtts"];
                var6 = var14.bind(var15)(var6);
                _fun91781_ip = 290;
                continue _fun91781;
            case 277:
                var10 = var10["gs+qcM"];
                var6 = var14.bind(var15)(var10);
            case 290:
                var0.accessibilityHint = var6;
                var6 = var5 != var11;
                var5 = undefined;
                if (!var6) {
                    _fun91781_ip = 307;
                    continue _fun91781
                }
            case 304:
                var5 = var11;
            case 307:
                var0.accessibilityLabel = var5;
                var4 = function() { // Original name: onPress, environment: var4
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var1 = 10;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.userId = var4;
                    var3 = _closure2_slot1;
                    var1.onBack = var3;
                    var3 = function() { // Original name: onSave, environment: var3
                        var2 = _closure2_slot2;
                        var1 = {};
                        var0 = 'SET_NOTE';
                        var1.action = var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onSave = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var6 = _closure1_slot3;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 11;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.style = var13;
                var15 = _closure1_slot0;
                var13 = var10[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var10 = var10[var16];
                var10 = var15.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["mQKv+v"];
                var10 = var13.bind(var14)(var10);
                var4.title = var10;
                var10 = var9.title;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = !var7;
                if (var7) {
                    _fun91781_ip = 434;
                    continue _fun91781
                }
            case 423:
                var13 = {};
                var14 = 0;
                var13.marginBottom = var14;
                var10 = var13;
            case 434:
                var9[1] = var10;
                var4.titleStyle = var9;
                var10 = _closure1_slot3;
                var9 = {
                    'size': 'xs',
                    'color': 'interactive-text-default'
                };
                var9 = var10.bind(var3)(var12, var9);
                var4.titleIcon = var9;
                if (!var7) {
                    _fun91781_ip = 528;
                    continue _fun91781
                }
            case 475:
                var10 = _closure1_slot3;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 12;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-md/normal',
                    'color': 'text-default'
                };
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 528:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 6933, 11901, 11027, 11903, 4865, 1234, 3237, 11905, 7701, 3900, 2]);