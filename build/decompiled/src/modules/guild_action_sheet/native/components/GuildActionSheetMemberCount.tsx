// modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot3 = var7;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.wrapper = var9;
    var9 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'marginRight': 4
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_STATUS_ONLINE;
    var9.backgroundColor = var12;
    var3.online = var9;
    var9 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'marginRight': 4
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_STATUS_OFFLINE;
    var9.backgroundColor = var10;
    var3.total = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: MemberCount, environment: var1
        _fun72146: for (var _fun72146_ip = 0;;) switch (_fun72146_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.type;
                var4 = var0.count;
                var10 = var0.color;
                var9 = null;
                if (!(var9 != var4)) {
                    _fun72146_ip = 145;
                    continue _fun72146
                }
            case 25:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 5;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var3 = var1.intl;
                var2 = var3.format;
                var1 = 'online';
                if (!(var1 !== var11)) {
                    _fun72146_ip = 100;
                    continue _fun72146
                }
            case 68:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.t;
                var1 = var1.etqpUG;
                _fun72146_ip = 130;
                continue _fun72146;
            case 100:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var5.bind(var6)(var0);
                var0 = var0.t;
                var1 = var0.PIikks;
            case 130:
                var0 = {};
                var0.count = var4;
                var8 = var2.bind(var3)(var1, var0);
                _fun72146_ip = 255;
                continue _fun72146;
            case 145:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 5;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var2 = var0.intl;
                var1 = var2.string;
                var0 = 'online';
                if (!(var0 !== var11)) {
                    _fun72146_ip = 220;
                    continue _fun72146
                }
            case 188:
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0["5SWsJX"];
                _fun72146_ip = 250;
                continue _fun72146;
            case 220:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.t;
                var0 = var3["3DzP7x"];
            case 250:
                var8 = var1.bind(var2)(var0);
            case 255:
                var0 = _closure1_slot5;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var6.wrapper;
                var0.style = var4;
                var7 = _closure1_slot3;
                var4 = {};
                var6 = var6[var11];
                var4.style = var6;
                var6 = var7.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot0;
                var11 = _closure1_slot1;
                var5 = 6;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-xs/medium',
                    'color': null,
                    'lineClamp': 1
                };
                var11 = var9 != var10;
                var9 = 'text-default';
                if (!var11) {
                    _fun72146_ip = 371;
                    continue _fun72146
                }
            case 368:
                var9 = var10;
            case 371:
                var5.color = var9;
                var9 = {};
                var10 = 'center';
                var9.textAlignVertical = var10;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1234, 3901, 2]);