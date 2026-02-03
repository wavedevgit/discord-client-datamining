// modules/guild_instant_invites/native/InstantInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var10 = 1;
    var3 = var6[var10];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot6 = var4;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginLeft': 4294967280,
        'marginBottom': 4294967280,
        'marginTop': 8,
        'flex': 1
    };
    var3.creatorWrapper = var9;
    var9 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.gameWrapper = var9;
    var9 = {};
    var9.flex = var10;
    var3.gameText = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun72882: for (var _fun72882_ip = 0;;) switch (_fun72882_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.invite;
                var _closure2_slot0 = var20;
                var6 = var0.onInviteRevoked;
                var0 = _closure1_slot8;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var13 = var20.uses;
                var12 = var20.maxUses;
                var1 = var20.guild;
                var19 = null;
                var2 = var19 == var1;
                var0 = undefined;
                if (var2) {
                    _fun72882_ip = 67;
                    continue _fun72882
                }
            case 62:
                var0 = var1.id;
            case 67:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 21;
                var1 = var4[var1];
                var7 = var2.bind(var3)(var1);
                var5 = var7.useInviteRoleAssignment;
                var1 = 'InstantInvite';
                var1 = var5.bind(var7)(var0, var1);
                var5 = var1.enabled;
                var1 = 22;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useInviteActions;
                var1 = {};
                var1.invite = var20;
                var1.onInviteRevoked = var6;
                var23 = var2.bind(var4)(var1);
                var6 = _closure1_slot3;
                var4 = var6.useMemo;
                var1 = var20.roles;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var22
                    var0 = _closure2_slot0;
                    var2 = var0.roles;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var4.bind(var6)(var1, var2);
                var18 = var0;
                if (!var5) {
                    _fun72882_ip = 198;
                    continue _fun72882
                }
            case 187:
                var1 = var11.length;
                var0 = 0;
                var5 = var1 > var0;
            case 198:
                if (!var5) {
                    _fun72882_ip = 205;
                    continue _fun72882
                }
            case 201:
                var5 = var19 != var18;
            case 205:
                var2 = _closure1_slot7;
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 13;
                var0 = var15[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var8 = 14;
                var4 = var15[var8];
                var4 = var7.bind(var3)(var4);
                var6 = var4.Stack;
                var4 = {
                    'direction': 'horizontal',
                    'justify': 'space-between'
                };
                var10 = _closure1_slot6;
                var16 = 16;
                var16 = var15[var16];
                var16 = var7.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-lg/bold',
                    'tabularNumbers': true
                };
                var21 = var20.code;
                var16.children = var21;
                var17 = var10.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = 17;
                var17 = var15[var17];
                var17 = var7.bind(var3)(var17);
                var21 = var17.ContextMenu;
                var17 = {};
                var17.items = var23;
                var22 = function arg0() {
                    var2 = arg0;
                    var5 = var2.ref;
                    var0 = null;
                    var1 = Object.create(var0);
                    var0 = 0;
                    var1.ref = var0;
                    var13 = {};
                    var12 = var2;
                    var11 = var1;
                    var12 = copyDataProperties(var13, var12, var11);
                    var3 = _closure1_slot6;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 18;
                    var0 = var10[var0];
                    var2 = undefined;
                    var0 = var9.bind(var2)(var0);
                    var1 = var0.IconButton;
                    var0 = {
                        'size': 'sm',
                        'variant': 'secondary'
                    };
                    var7 = _closure1_slot1;
                    var6 = 12;
                    var6 = var10[var6];
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.more;
                    var0.icon = var6;
                    var6 = 9;
                    var7 = var10[var6];
                    var7 = var9.bind(var2)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.DEoVWZ;
                    var6 = var7.bind(var8)(var6);
                    var0.accessibilityLabel = var6;
                    var0.ref = var5;
                    var13 = var0;
                    var4 = copyDataProperties(var13, var12);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var17.children = var22;
                var17 = var10.bind(var3)(var21, var17);
                var16[1] = var17;
                var4.children = var16;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var6 = 19;
                var6 = var15[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.InstantInviteDetails;
                var6 = {};
                var15 = var20.channel;
                var6.channel = var15;
                var15 = var20.getExpiresAt;
                var15 = var15.bind(var20)();
                var6.expiresAt = var15;
                var6 = var10.bind(var3)(var7, var6);
                var4[1] = var6;
                if (!var5) {
                    _fun72882_ip = 488;
                    continue _fun72882
                }
            case 447:
                var10 = _closure1_slot6;
                var7 = _closure1_slot1;
                var15 = _closure1_slot2;
                var6 = 23;
                var6 = var15[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.roleIds = var11;
                var6.guildId = var18;
                var5 = var10.bind(var3)(var7, var6);
            case 488:
                var4[2] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Stack;
                var5 = {
                    'direction': 'horizontal',
                    'align': 'flex-end'
                };
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                var8 = {};
                var14 = var14.creatorWrapper;
                var8.style = var14;
                var15 = var20.inviter;
                var16 = var19 == var15;
                var14 = undefined;
                if (var16) {
                    _fun72882_ip = 573;
                    continue _fun72882
                }
            case 568:
                var14 = var15.id;
            case 573:
                var15 = var19 != var14;
                var14 = null;
                if (!var15) {
                    _fun72882_ip = 650;
                    continue _fun72882
                }
            case 582:
                var17 = _closure1_slot6;
                var16 = _closure1_slot1;
                var21 = _closure1_slot2;
                var15 = 20;
                var15 = var21[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {
                    'start': true,
                    'end': true
                };
                var20 = var20.inviter;
                var21 = var19 == var20;
                var19 = undefined;
                if (var21) {
                    _fun72882_ip = 636;
                    continue _fun72882
                }
            case 631:
                var19 = var20.id;
            case 636:
                var15.userId = var19;
                var15.guildId = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 650:
                var8.children = var14;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot6;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 24;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.uses = var13;
                var9.maxUses = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_instant_invites/native/InstantInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        _fun72886: for (var _fun72886_ip = 0;;) switch (_fun72886_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.channel;
                var _closure2_slot0 = var14;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var0 = _closure1_slot8;
                var12 = var0.bind(var3)();
                var0 = var14.linkedLobby;
                var10 = null;
                var1 = var10 == var0;
                var15 = undefined;
                if (var1) {
                    _fun72886_ip = 62;
                    continue _fun72886
                }
            case 56:
                var15 = var0.linked_by;
            case 62:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useGetOrFetchApplication;
                var4 = var14.linkedLobby;
                var5 = var10 == var4;
                var0 = undefined;
                if (var5) {
                    _fun72886_ip = 109;
                    continue _fun72886
                }
            case 103:
                var0 = var4.application_id;
            case 109:
                var21 = var1.bind(var2)(var0);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useCanUnlinkLobbyChannel;
                var5 = var0.bind(var1)(var14);
                _closure2_slot1 = var5;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var14.id;
                var0 = var10 == var21;
                var4 = undefined;
                if (var0) {
                    _fun72886_ip = 184;
                    continue _fun72886
                }
            case 179:
                var4 = var21.name;
            case 184:
                var6 = var10 != var4;
                var0 = '';
                if (!var6) {
                    _fun72886_ip = 198;
                    continue _fun72886
                }
            case 195:
                var0 = var4;
            case 198:
                var0 = var2.bind(var3)(var1, var0);
                _closure2_slot2 = var0;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var0;
                var0 = function() { // Environment: var18
                    _fun72887: for (var _fun72887_ip = 0;;) switch (_fun72887_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun72887_ip = 158;
                                continue _fun72887
                            }
                        case 13:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 8;
                            var1 = var9[var1];
                            var8 = undefined;
                            var3 = var2.bind(var8)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var4 = 9;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.JmUENg;
                            var5 = var6.bind(var10)(var5);
                            var1.title = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4.SrvsML;
                            var4 = var5.bind(var6)(var4);
                            var1.body = var4;
                            var1 = var2.bind(var3)(var1);
                            _fun72887_ip = 168;
                            continue _fun72887;
                        case 158:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 168:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                _closure2_slot3 = var0;
                var2 = var4.useMemo;
                var5 = var14.guild_id;
                var1 = new Array(3);
                var1[0] = var5;
                var5 = var14.id;
                var1[1] = var5;
                var1[2] = var0;
                var0 = function() { // Environment: var18
                    var1 = {};
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var0 = var5[var3];
                    var4 = undefined;
                    var0 = var8.bind(var4)(var0);
                    var7 = var0.intl;
                    var6 = var7.string;
                    var0 = var5[var3];
                    var0 = var8.bind(var4)(var0);
                    var0 = var0.t;
                    var0 = var0.aW2YlJ;
                    var0 = var6.bind(var7)(var0);
                    var1.label = var0;
                    var0 = 10;
                    var0 = var5[var0];
                    var0 = var8.bind(var4)(var0);
                    var0 = var0.ArrowSmallRightIcon;
                    var1.IconComponent = var0;
                    var0 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 11;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.transitionTo;
                        var6 = _closure1_slot5;
                        var5 = var6.CHANNEL;
                        var1 = _closure2_slot0;
                        var4 = var1.guild_id;
                        var1 = var1.id;
                        var1 = var5.bind(var6)(var4, var1);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1.action = var0;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var6 = var5[var3];
                    var6 = var8.bind(var4)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var3 = var5[var3];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.t;
                    var3 = var3.JmUENg;
                    var3 = var6.bind(var7)(var3);
                    var1.label = var3;
                    var3 = _closure1_slot1;
                    var2 = 12;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.revoke;
                    var1.iconSource = var2;
                    var2 = 'destructive';
                    var1.variant = var2;
                    var2 = _closure2_slot3;
                    var1.action = var2;
                    var0[1] = var1;
                    return var0;
                };
                var19 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot7;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 13;
                var0 = var20[var0];
                var0 = var16.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var8 = 14;
                var4 = var20[var8];
                var4 = var16.bind(var3)(var4);
                var9 = var4.Stack;
                var4 = {
                    'direction': 'horizontal',
                    'justify': 'space-between'
                };
                var6 = _closure1_slot4;
                var5 = {};
                var7 = var12.gameWrapper;
                var5.style = var7;
                var17 = _closure1_slot6;
                var13 = _closure1_slot1;
                var22 = 15;
                var7 = var20[var22];
                var13 = var13.bind(var3)(var7);
                var7 = {};
                var7.game = var21;
                var22 = var20[var22];
                var22 = var16.bind(var3)(var22);
                var22 = var22.GameIconSizes;
                var22 = var22.SIZE_24;
                var7.size = var22;
                var13 = var17.bind(var3)(var13, var7);
                var7 = new Array(2);
                var7[0] = var13;
                var13 = 16;
                var13 = var20[var13];
                var13 = var16.bind(var3)(var13);
                var16 = var13.Text;
                var13 = {
                    'ellipsizeMode': 'tail',
                    'lineClamp': 1,
                    'variant': 'text-lg/bold'
                };
                var20 = var12.gameText;
                var13.style = var20;
                var22 = var10 == var21;
                var20 = undefined;
                if (var22) {
                    _fun72886_ip = 491;
                    continue _fun72886
                }
            case 486:
                var20 = var21.name;
            case 491:
                var13.children = var20;
                var13 = var17.bind(var3)(var16, var13);
                var7[1] = var13;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var13 = new Array(2);
                var13[0] = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var16 = 17;
                var16 = var5[var16];
                var16 = var6.bind(var3)(var16);
                var17 = var16.ContextMenu;
                var16 = {};
                var16.items = var19;
                var18 = function arg0() {
                    var2 = arg0;
                    var5 = var2.ref;
                    var0 = null;
                    var1 = Object.create(var0);
                    var0 = 0;
                    var1.ref = var0;
                    var13 = {};
                    var12 = var2;
                    var11 = var1;
                    var12 = copyDataProperties(var13, var12, var11);
                    var3 = _closure1_slot6;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 18;
                    var0 = var10[var0];
                    var2 = undefined;
                    var0 = var9.bind(var2)(var0);
                    var1 = var0.IconButton;
                    var0 = {
                        'size': 'sm',
                        'variant': 'secondary'
                    };
                    var7 = _closure1_slot1;
                    var6 = 12;
                    var6 = var10[var6];
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.more;
                    var0.icon = var6;
                    var6 = 9;
                    var7 = var10[var6];
                    var7 = var9.bind(var2)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var2)(var6);
                    var6 = var6.t;
                    var6 = var6.DEoVWZ;
                    var6 = var7.bind(var8)(var6);
                    var0.accessibilityLabel = var6;
                    var0.ref = var5;
                    var13 = var0;
                    var4 = copyDataProperties(var13, var12);
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var16.children = var18;
                var16 = var7.bind(var3)(var17, var16);
                var13[1] = var16;
                var4.children = var13;
                var9 = var2.bind(var3)(var9, var4);
                var4 = new Array(3);
                var4[0] = var9;
                var9 = 19;
                var9 = var5[var9];
                var9 = var6.bind(var3)(var9);
                var13 = var9.InstantInviteDetails;
                var9 = {};
                var9.channel = var14;
                var9 = var7.bind(var3)(var13, var9);
                var4[1] = var9;
                var5 = var5[var8];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Stack;
                var5 = {
                    'direction': 'horizontal',
                    'align': 'flex-end'
                };
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var12.creatorWrapper;
                var8.style = var12;
                var12 = var10 != var15;
                var10 = null;
                if (!var12) {
                    _fun72886_ip = 739;
                    continue _fun72886
                }
            case 686:
                var13 = _closure1_slot6;
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 20;
                var11 = var16[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {
                    'start': true,
                    'end': true
                };
                var11.userId = var15;
                var14 = var14.guild_id;
                var11.guildId = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 739:
                var8.children = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.LinkedChannelInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 6874, 9117, 9118, 3927, 1234, 9119, 1220, 9121, 4895, 4071, 6887, 3932, 8926, 7503, 9125, 9126, 9127, 9128, 9131, 9135, 2]);