// modules/user_settings/native/content_and_social/UserSettingsFriendRequests.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AllFriendSourceFlags;
    var _closure1_slot5 = var6;
    var3 = var3.FriendSourceFlags;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/content_and_social/UserSettingsFriendRequests.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var0 = 4;
        var0 = var16[var0];
        var3 = undefined;
        var0 = var15.bind(var3)(var0);
        var1 = var0.FriendSourceFlagsSetting;
        var0 = var1.useSetting;
        var0 = var0.bind(var1)();
        var _closure2_slot0 = var0;
        var5 = _closure1_slot3;
        var2 = var5.useMemo;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var10
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.computeFlags;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var11 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = _closure1_slot8;
        var4 = 6;
        var4 = var16[var4];
        var4 = var15.bind(var3)(var4);
        var5 = var4.TableRowGroup;
        var4 = {};
        var12 = 7;
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var9 = var7.intl;
        var8 = var9.string;
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7.vyodkM;
        var7 = var8.bind(var9)(var7);
        var4.title = var7;
        var8 = 8;
        var7 = var16[var8];
        var7 = var15.bind(var3)(var7);
        var9 = var7.TableSwitchRow;
        var7 = {};
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var17 = var13.intl;
        var14 = var17.string;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.mGr3CX;
        var13 = var14.bind(var17)(var13);
        var7.label = var13;
        var13 = var11.all;
        var7.value = var13;
        var13 = function arg0() {
            _fun108731: for (var _fun108731_ip = 0;;) switch (_fun108731_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var2 = var1.FriendSourceFlagsSetting;
                    var1 = var2.updateSetting;
                    var3 = _closure1_slot5;
                    var4 = arg0;
                    if (var4) {
                        _fun108731_ip = 66;
                        continue _fun108731
                    }
                case 47:
                    var0 = _closure1_slot6;
                    var0 = var0.NO_RELATION;
                    var0 = ~var0;
                    var0 = var3 & var0;
                    _fun108731_ip = 69;
                    continue _fun108731;
                case 66:
                    var0 = var3;
                case 69:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var7.onValueChange = var13;
        var9 = var2.bind(var3)(var9, var7);
        var7 = new Array(3);
        var7[0] = var9;
        var9 = var16[var8];
        var9 = var15.bind(var3)(var9);
        var13 = var9.TableSwitchRow;
        var9 = {};
        var14 = var16[var12];
        var14 = var15.bind(var3)(var14);
        var18 = var14.intl;
        var17 = var18.string;
        var14 = var16[var12];
        var14 = var15.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.IqlCSq;
        var14 = var17.bind(var18)(var14);
        var9.label = var14;
        var14 = var11.mutualFriends;
        var9.value = var14;
        var14 = function arg0() {
            _fun108732: for (var _fun108732_ip = 0;;) switch (_fun108732_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var0 = var2[var0];
                    var5 = undefined;
                    var0 = var1.bind(var5)(var0);
                    var2 = var0.FriendSourceFlagsSetting;
                    var1 = var2.updateSetting;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 9;
                    var0 = var6[var0];
                    var6 = var4.bind(var5)(var0);
                    var0 = arg0;
                    if (var0) {
                        _fun108732_ip = 101;
                        continue _fun108732
                    }
                case 63:
                    var7 = var6.removeFlags;
                    var5 = _closure2_slot0;
                    var0 = _closure1_slot6;
                    var4 = var0.MUTUAL_FRIENDS;
                    var0 = var0.NO_RELATION;
                    var0 = var7.bind(var6)(var5, var4, var0);
                    _fun108732_ip = 130;
                    continue _fun108732;
                case 101:
                    var5 = var6.addFlag;
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot6;
                    var3 = var3.MUTUAL_FRIENDS;
                    var0 = var5.bind(var6)(var4, var3);
                case 130:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var9.onValueChange = var14;
        var9 = var2.bind(var3)(var13, var9);
        var7[1] = var9;
        var8 = var16[var8];
        var8 = var15.bind(var3)(var8);
        var9 = var8.TableSwitchRow;
        var8 = {};
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.mozb8f;
        var12 = var13.bind(var14)(var12);
        var8.label = var12;
        var11 = var11.mutualGuilds;
        var8.value = var11;
        var10 = function arg0() {
            _fun108733: for (var _fun108733_ip = 0;;) switch (_fun108733_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var0 = var2[var0];
                    var5 = undefined;
                    var0 = var1.bind(var5)(var0);
                    var2 = var0.FriendSourceFlagsSetting;
                    var1 = var2.updateSetting;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 9;
                    var0 = var6[var0];
                    var6 = var4.bind(var5)(var0);
                    var0 = arg0;
                    if (var0) {
                        _fun108733_ip = 101;
                        continue _fun108733
                    }
                case 63:
                    var7 = var6.removeFlags;
                    var5 = _closure2_slot0;
                    var0 = _closure1_slot6;
                    var4 = var0.MUTUAL_GUILDS;
                    var0 = var0.NO_RELATION;
                    var0 = var7.bind(var6)(var5, var4, var0);
                    _fun108733_ip = 130;
                    continue _fun108733;
                case 101:
                    var5 = var6.addFlag;
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot6;
                    var3 = var3.MUTUAL_GUILDS;
                    var0 = var5.bind(var6)(var4, var3);
                case 130:
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var8.onValueChange = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1348, 7247, 5367, 1234, 5420, 1384, 2]);