// modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useGuildInviteSendStates;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteSendStates;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun92184: for (var _fun92184_ip = 0;;) switch (_fun92184_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.row;
                var2 = var0.recipientId;
                var _closure2_slot0 = var2;
                var2 = var0.source;
                var _closure2_slot1 = var2;
                var5 = var0.start;
                var4 = var0.end;
                var10 = var16.guild;
                var _closure2_slot2 = var10;
                var6 = _closure1_slot4;
                var3 = undefined;
                var2 = function(arg0) { // Environment: var1
                    _fun92185: for (var _fun92185_ip = 0;;) switch (_fun92185_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = arg0;
                            var2 = var0[var2];
                            var0 = null;
                            var3 = var0 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun92185_ip = 38;
                                continue _fun92185
                            }
                        case 25:
                            var1 = _closure2_slot2;
                            var1 = var1.id;
                            var0 = var2[var1];
                        case 38:
                            return var0;
                    }
                };
                var2 = var6.bind(var3)(var2);
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.sendGuildInvite;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var1 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var8 = _closure1_slot6;
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 6;
                var1 = var17[var1];
                var7 = var12.bind(var3)(var1);
                var1 = {};
                var1.sendState = var2;
                var1.onPressSend = var6;
                var9 = var8.bind(var3)(var7, var1);
                var7 = _closure1_slot3;
                var1 = {
                    'importantForAccessibility': 'no-hide-descendants',
                    'accessibilityElementsHidden': true
                };
                var14 = 7;
                var11 = var17[var14];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.guild = var10;
                var13 = _closure1_slot0;
                var14 = var17[var14];
                var14 = var13.bind(var3)(var14);
                var14 = var14.GuildIconSizes;
                var14 = var14.SMALL;
                var11.size = var14;
                var11 = var8.bind(var3)(var12, var11);
                var1.children = var11;
                var11 = var8.bind(var3)(var7, var1);
                var1 = 8;
                var1 = var17[var1];
                var1 = var13.bind(var3)(var1);
                var7 = var1.Text;
                var1 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var12 = 9;
                var14 = var17[var12];
                var14 = var13.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.format;
                var12 = var17[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.zRl6XR;
                var12 = {};
                var16 = var16.memberCount;
                var12.count = var16;
                var12 = var14.bind(var15)(var13, var12);
                var1.children = var12;
                var8 = var8.bind(var3)(var7, var1);
                var1 = _closure1_slot5;
                var1 = var1.SENDING;
                var7 = var2 === var1;
                if (var7) {
                    _fun92184_ip = 333;
                    continue _fun92184
                }
            case 319:
                var1 = _closure1_slot5;
                var1 = var1.SENT;
                var7 = var2 === var1;
            case 333:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 10;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.icon = var11;
                var10 = var10.name;
                var0.label = var10;
                var0.trailing = var9;
                var0.subLabel = var8;
                var0.onPress = var6;
                var0.disabled = var7;
                var6 = {};
                var6.disabled = var7;
                var0.accessibilityState = var6;
                var0.start = var5;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 12006, 3337, 33, 12005, 8426, 7420, 3943, 1234, 4901, 2]);