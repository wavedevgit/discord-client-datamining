// modules/permissions/PermissionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: filterExperimental, environment: var1
        _fun109778: for (var _fun109778_ip = 0;;) switch (_fun109778_ip) {
            case 0:
                var0 = arg0;
                var1 = arguments[1];
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun109778_ip = 14;
                    continue _fun109778
                }
            case 12:
                var1 = false;
            case 14:
                if (var1) {
                    _fun109778_ip = 48;
                    continue _fun109778
                }
            case 17:
                var3 = var0.permissions;
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.isExperimental;
                    var0 = !var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.permissions = var1;
            case 48:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0, arg1) { // Original name: getPermissionsSpecList, environment: var1
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = _closure2_slot0;
            var0 = var2.toString;
            var0 = var0.bind(var2)();
            var0 = var1[var0];
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var0;
    var3 = function(arg0) { // Original name: getGuildPermissionSpec, environment: var1
        _fun109782: for (var _fun109782_ip = 0;;) switch (_fun109782_ip) {
            case 0:
                var8 = arg0;
                var0 = {};
                var1 = _closure1_slot3;
                var2 = var1.VIEW_CHANNEL;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 1;
                var9 = var4[var7];
                var6 = undefined;
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.uV83yi;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.ybTHLk;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.VIEW_CHANNEL;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MANAGE_CHANNELS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["9qLtWs"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.qfJnug;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.MANAGE_CHANNELS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MANAGE_ROLES;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["C8d+oG"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.buo9uw;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.MANAGE_ROLES;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MANAGE_GUILD_EXPRESSIONS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.bbuXIn;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["4vb3/6"];
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.MANAGE_GUILD_EXPRESSIONS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.CREATE_GUILD_EXPRESSIONS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.HarVuP;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.gkdHvH;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.CREATE_GUILD_EXPRESSIONS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.VIEW_AUDIT_LOG;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.fZgLpA;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["0hx75i"];
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.VIEW_AUDIT_LOG;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.VIEW_GUILD_ANALYTICS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["rQJBE/"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.whVKhX;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.VIEW_GUILD_ANALYTICS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.VIEW_CREATOR_MONETIZATION_ANALYTICS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["0lTLTv"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.mut6NV;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.VIEW_CREATOR_MONETIZATION_ANALYTICS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MANAGE_WEBHOOKS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["/ADKmM"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.LczYqC;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.MANAGE_WEBHOOKS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MANAGE_GUILD;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.QZRcfO;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["KoQe/G"];
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.MANAGE_GUILD;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.CREATE_INSTANT_INVITE;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.zJrgTG;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.PCFOZa;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.CREATE_INSTANT_INVITE;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.CHANGE_NICKNAME;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.dilOF6;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["b8B++j"];
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.CHANGE_NICKNAME;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MANAGE_NICKNAMES;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["t+Ct5x"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.hTnlMb;
                var1.description = var4;
                var4 = _closure1_slot3;
                var4 = var4.MANAGE_NICKNAMES;
                var1.flag = var4;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.KICK_MEMBERS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var4 = var8.showMembershipManualApprovalPermissions;
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var9 = var5[var7];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var5[var7];
                var5 = var11.bind(var6)(var5);
                var5 = var5.t;
                if (var4) {
                    _fun109782_ip = 1600;
                    continue _fun109782
                }
            case 1587:
                var4 = var5.pBNv6i;
                var4 = var9.bind(var10)(var4);
                _fun109782_ip = 1613;
                continue _fun109782;
            case 1600:
                var5 = var5["9TxXwb"];
                var4 = var9.bind(var10)(var5);
            case 1613:
                var1.title = var4;
                var4 = var8.showMembershipManualApprovalPermissions;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var9.bind(var6)(var5);
                var5 = var5.t;
                if (var4) {
                    _fun109782_ip = 1658;
                    continue _fun109782
                }
            case 1648:
                var4 = var5.rwdPaE;
                _fun109782_ip = 1666;
                continue _fun109782;
            case 1658:
                var4 = var5.hGBAnw;
            case 1666:
                var1.description = var4;
                var4 = _closure1_slot3;
                var4 = var4.KICK_MEMBERS;
                var1.flag = var4;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.BAN_MEMBERS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.oTBA7N;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["OqNY0/"];
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.BAN_MEMBERS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MODERATE_MEMBERS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["+RL6pz"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.T6bZsX;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.MODERATE_MEMBERS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.SEND_MESSAGES;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.S1VOwd;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.prvWKm;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.SEND_MESSAGES;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.EMBED_LINKS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["969dEL"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.ChoIiy;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.EMBED_LINKS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.ATTACH_FILES;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["3AS4UM"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["/87mYH"];
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.ATTACH_FILES;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.ADD_REACTIONS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.yEoJAr;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.FEYwX7;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.ADD_REACTIONS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.USE_EXTERNAL_EMOJIS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["+bxf3H"];
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.POeVIu;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.USE_EXTERNAL_EMOJIS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.USE_EXTERNAL_STICKERS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var4[var7];
                var9 = var5.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.ERNhYf;
                var9 = var10.bind(var11)(var9);
                var1.title = var9;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.AdXVhI;
                var1.description = var4;
                var4 = _closure1_slot3;
                var4 = var4.USE_EXTERNAL_STICKERS;
                var1.flag = var4;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MENTION_EVERYONE;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var4 = var8.inGameMentionsExperiment;
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var9 = var5[var7];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var5[var7];
                var5 = var11.bind(var6)(var5);
                var5 = var5.t;
                if (var4) {
                    _fun109782_ip = 2702;
                    continue _fun109782
                }
            case 2689:
                var4 = var5.Y78KGC;
                var4 = var9.bind(var10)(var4);
                _fun109782_ip = 2713;
                continue _fun109782;
            case 2702:
                var5 = var5.lEO7Wr;
                var4 = var9.bind(var10)(var5);
            case 2713:
                var1.title = var4;
                var4 = var8.inGameMentionsExperiment;
                var11 = _closure1_slot0;
                var5 = _closure1_slot2;
                var9 = var5[var7];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var5[var7];
                var5 = var11.bind(var6)(var5);
                var5 = var5.t;
                if (var4) {
                    _fun109782_ip = 2782;
                    continue _fun109782
                }
            case 2767:
                var4 = var5.ryj6N5;
                var4 = var9.bind(var10)(var4);
                _fun109782_ip = 2793;
                continue _fun109782;
            case 2782:
                var5 = var5.wdHpIC;
                var4 = var9.bind(var10)(var5);
            case 2793:
                var1.description = var4;
                var4 = _closure1_slot3;
                var4 = var4.MENTION_EVERYONE;
                var1.flag = var4;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MANAGE_MESSAGES;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var10 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5["6lU9xM"];
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5["RXMG/+"];
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.MANAGE_MESSAGES;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.PIN_MESSAGES;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.Y5BI39;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5["LN/K3x"];
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.PIN_MESSAGES;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.BYPASS_SLOWMODE;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.kqcjeV;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.S2ZE5c;
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.BYPASS_SLOWMODE;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.READ_MESSAGE_HISTORY;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.l9ufaR;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.rmHPFR;
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.READ_MESSAGE_HISTORY;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.SEND_TTS_MESSAGES;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.mMbwh7;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.D6x8Nr;
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.SEND_TTS_MESSAGES;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.USE_APPLICATION_COMMANDS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.nkoPOt;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.pJrJ35;
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.USE_APPLICATION_COMMANDS;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.USE_EXTERNAL_APPS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.TtA5rK;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.mzLoDY;
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.USE_EXTERNAL_APPS;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.SEND_VOICE_MESSAGES;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.WlWSBT;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.pDuyi0;
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.SEND_VOICE_MESSAGES;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.SEND_POLLS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.UMQ7Ww;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5["Xl6W+F"];
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.SEND_POLLS;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.CONNECT;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.S0W8Z5;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5["3GCm/f"];
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.CONNECT;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.SPEAK;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5["8w1tIR"];
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.y4MncF;
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.SPEAK;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.STREAM;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.FlNoSV;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5["6Z0j9v"];
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.STREAM;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.USE_EMBEDDED_ACTIVITIES;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var11 = var5.intl;
                var9 = var11.string;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.rLSGeh;
                var5 = var9.bind(var11)(var5);
                var1.title = var5;
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.BEqU5H;
                var1.description = var5;
                var5 = _closure1_slot3;
                var5 = var5.USE_EMBEDDED_ACTIVITIES;
                var1.flag = var5;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.USE_SOUNDBOARD;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = var4[var7];
                var5 = var10.bind(var6)(var5);
                var9 = var5.intl;
                var5 = var9.string;
                var4 = var4[var7];
                var4 = var10.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.Bco7NG;
                var4 = var5.bind(var9)(var4);
                var1.title = var4;
                var5 = null;
                var9 = var5 == var8;
                var4 = undefined;
                if (var9) {
                    _fun109782_ip = 4406;
                    continue _fun109782
                }
            case 4400:
                var4 = var8.SOUNDBOARD_DESCRIPTION;
            case 4406:
                if (!(var5 == var4)) {
                    _fun109782_ip = 4440;
                    continue _fun109782
                }
            case 4410:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var7];
                var9 = var10.bind(var6)(var9);
                var9 = var9.t;
                var4 = var9["+8p+fc"];
            case 4440:
                var1.description = var4;
                var4 = _closure1_slot3;
                var4 = var4.USE_SOUNDBOARD;
                var1.flag = var4;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.USE_EXTERNAL_SOUNDS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var11 = _closure1_slot0;
                var4 = _closure1_slot2;
                var9 = var4[var7];
                var9 = var11.bind(var6)(var9);
                var12 = var9.intl;
                var10 = var12.string;
                var9 = var4[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.pwaVJ6;
                var9 = var10.bind(var12)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.qDpPtX;
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.USE_EXTERNAL_SOUNDS;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.USE_VAD;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var11.bind(var6)(var9);
                var12 = var9.intl;
                var10 = var12.string;
                var9 = var4[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["08zAV7"];
                var9 = var10.bind(var12)(var9);
                var1.title = var9;
                var9 = var4[var7];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9["7CHjmc"];
                var1.description = var9;
                var9 = _closure1_slot3;
                var9 = var9.USE_VAD;
                var1.flag = var9;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.PRIORITY_SPEAKER;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var9 = var4[var7];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var4 = var4[var7];
                var4 = var11.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.BVK71i;
                var4 = var9.bind(var10)(var4);
                var1.title = var4;
                var9 = var5 == var8;
                var4 = undefined;
                if (var9) {
                    _fun109782_ip = 4784;
                    continue _fun109782
                }
            case 4778:
                var4 = var8.PRIORITY_SPEAKER_DESCRIPTION;
            case 4784:
                if (!(var5 == var4)) {
                    _fun109782_ip = 4818;
                    continue _fun109782
                }
            case 4788:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.t;
                var4 = var5.OJkrro;
            case 4818:
                var1.description = var4;
                var4 = _closure1_slot3;
                var4 = var4.PRIORITY_SPEAKER;
                var1.flag = var4;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MUTE_MEMBERS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["8EI30/"];
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.PIhGA1;
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.MUTE_MEMBERS;
                var1.flag = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.DEAFEN_MEMBERS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["9L47Fr"];
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["FQr3+t"];
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.DEAFEN_MEMBERS;
                var1.flag = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MOVE_MEMBERS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.YtjJPQ;
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.SEe0Gp;
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.MOVE_MEMBERS;
                var1.flag = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.REQUEST_TO_SPEAK;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["5kicT2"];
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["yNE+Q5"];
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.REQUEST_TO_SPEAK;
                var1.flag = var8;
                var8 = true;
                var1.isExperimental = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.ADMINISTRATOR;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.PGvZqX;
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.UJxMrK;
                var5 = 'string';
                var4 = typeof var4;
                if (!(var5 !== var4)) {
                    _fun109782_ip = 5474;
                    continue _fun109782
                }
            case 5417:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.t;
                var5 = var4.UJxMrK;
                var4 = {};
                var4 = var8.bind(var9)(var5, var4);
                _fun109782_ip = 5502;
                continue _fun109782;
            case 5474:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.t;
                var4 = var5.UJxMrK;
            case 5502:
                var1.description = var4;
                var4 = _closure1_slot3;
                var4 = var4.ADMINISTRATOR;
                var1.flag = var4;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MANAGE_EVENTS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.HIgA5a;
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["SL+qgG"];
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.MANAGE_EVENTS;
                var1.flag = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.CREATE_EVENTS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.qyjZua;
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.bQEFJZ;
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.CREATE_EVENTS;
                var1.flag = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.MANAGE_THREADS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.QKe7Q3;
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.QAxIIt;
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.MANAGE_THREADS;
                var1.flag = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.CREATE_PUBLIC_THREADS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["25rKnX"];
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.ODCYj8;
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.CREATE_PUBLIC_THREADS;
                var1.flag = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.CREATE_PRIVATE_THREADS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.QwbTSa;
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["G/cc3l"];
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.CREATE_PRIVATE_THREADS;
                var1.flag = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.SEND_MESSAGES_IN_THREADS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["5QlVGy"];
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.C2ZPE3;
                var1.description = var8;
                var8 = _closure1_slot3;
                var8 = var8.SEND_MESSAGES_IN_THREADS;
                var1.flag = var8;
                var0[var2] = var1;
                var1 = _closure1_slot3;
                var2 = var1.SET_VOICE_CHANNEL_STATUS;
                var1 = var2.toString;
                var2 = var1.bind(var2)();
                var1 = {};
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.string;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.VBwkUf;
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.t;
                var4 = var4.C6BzXx;
                var1.description = var4;
                var3 = _closure1_slot3;
                var3 = var3.SET_VOICE_CHANNEL_STATUS;
                var1.flag = var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = function(arg0, arg1) { // Original name: generateGuildGeneralSection, environment: var1
        _fun109783: for (var _fun109783_ip = 0;;) switch (_fun109783_ip) {
            case 0:
                var0 = _closure1_slot3;
                var0 = var0.VIEW_CHANNEL;
                var5 = new Array(7);
                var5[0] = var0;
                var0 = _closure1_slot3;
                var0 = var0.MANAGE_CHANNELS;
                var5[1] = var0;
                var0 = _closure1_slot3;
                var0 = var0.MANAGE_ROLES;
                var5[2] = var0;
                var0 = _closure1_slot3;
                var0 = var0.CREATE_GUILD_EXPRESSIONS;
                var5[3] = var0;
                var0 = _closure1_slot3;
                var0 = var0.MANAGE_GUILD_EXPRESSIONS;
                var5[4] = var0;
                var0 = _closure1_slot3;
                var0 = var0.VIEW_AUDIT_LOG;
                var5[5] = var0;
                var0 = _closure1_slot3;
                var0 = var0.VIEW_GUILD_ANALYTICS;
                var5[6] = var0;
                var0 = arg1;
                var0 = var0.showCreatorMonetizationAnalyticsPermission;
                if (!var0) {
                    _fun109783_ip = 137;
                    continue _fun109783
                }
            case 117:
                var1 = var5.push;
                var0 = _closure1_slot3;
                var0 = var0.VIEW_CREATOR_MONETIZATION_ANALYTICS;
                var0 = var1.bind(var5)(var0);
            case 137:
                var1 = var5.push;
                var0 = _closure1_slot3;
                var0 = var0.MANAGE_WEBHOOKS;
                var0 = var1.bind(var5)(var0);
                var1 = var5.push;
                var0 = _closure1_slot3;
                var0 = var0.MANAGE_GUILD;
                var0 = var1.bind(var5)(var0);
                var2 = _closure1_slot4;
                var0 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 1;
                var6 = var9[var4];
                var1 = undefined;
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var1)(var4);
                var4 = var4.t;
                var4 = var4["mYck+B"];
                var4 = var6.bind(var7)(var4);
                var0.title = var4;
                var4 = _closure1_slot5;
                var3 = arg0;
                var3 = var4.bind(var1)(var5, var3);
                var0.permissions = var3;
                var1 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: generateGuildMembershipSection, environment: var1
        var0 = _closure1_slot3;
        var0 = var0.CREATE_INSTANT_INVITE;
        var5 = new Array(6);
        var5[0] = var0;
        var0 = _closure1_slot3;
        var0 = var0.CHANGE_NICKNAME;
        var5[1] = var0;
        var0 = _closure1_slot3;
        var0 = var0.MANAGE_NICKNAMES;
        var5[2] = var0;
        var0 = _closure1_slot3;
        var0 = var0.KICK_MEMBERS;
        var5[3] = var0;
        var0 = _closure1_slot3;
        var0 = var0.BAN_MEMBERS;
        var5[4] = var0;
        var0 = _closure1_slot3;
        var0 = var0.MODERATE_MEMBERS;
        var5[5] = var0;
        var2 = _closure1_slot4;
        var0 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 1;
        var6 = var9[var4];
        var1 = undefined;
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var4 = var4.t;
        var4 = var4.Ny49TN;
        var4 = var6.bind(var7)(var4);
        var0.title = var4;
        var4 = _closure1_slot5;
        var3 = arg0;
        var3 = var4.bind(var1)(var5, var3);
        var0.permissions = var3;
        var1 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: generateGuildTextSection, environment: var1
        _fun109785: for (var _fun109785_ip = 0;;) switch (_fun109785_ip) {
            case 0:
                var1 = arg1;
                var2 = _closure1_slot3;
                var2 = var2.SEND_MESSAGES;
                var6 = new Array(19);
                var6[0] = var2;
                var2 = _closure1_slot3;
                var2 = var2.SEND_MESSAGES_IN_THREADS;
                var6[1] = var2;
                var2 = _closure1_slot3;
                var2 = var2.CREATE_PUBLIC_THREADS;
                var6[2] = var2;
                var2 = _closure1_slot3;
                var2 = var2.CREATE_PRIVATE_THREADS;
                var6[3] = var2;
                var2 = _closure1_slot3;
                var2 = var2.EMBED_LINKS;
                var6[4] = var2;
                var2 = _closure1_slot3;
                var2 = var2.ATTACH_FILES;
                var6[5] = var2;
                var2 = _closure1_slot3;
                var2 = var2.ADD_REACTIONS;
                var6[6] = var2;
                var2 = _closure1_slot3;
                var2 = var2.USE_EXTERNAL_EMOJIS;
                var6[7] = var2;
                var2 = _closure1_slot3;
                var2 = var2.USE_EXTERNAL_STICKERS;
                var6[8] = var2;
                var2 = _closure1_slot3;
                var2 = var2.USE_EXTERNAL_SOUNDS;
                var6[9] = var2;
                var2 = _closure1_slot3;
                var2 = var2.MENTION_EVERYONE;
                var6[10] = var2;
                var2 = _closure1_slot3;
                var2 = var2.MANAGE_MESSAGES;
                var6[11] = var2;
                var2 = _closure1_slot3;
                var2 = var2.PIN_MESSAGES;
                var6[12] = var2;
                var2 = _closure1_slot3;
                var2 = var2.BYPASS_SLOWMODE;
                var6[13] = var2;
                var2 = _closure1_slot3;
                var2 = var2.MANAGE_THREADS;
                var6[14] = var2;
                var2 = _closure1_slot3;
                var2 = var2.READ_MESSAGE_HISTORY;
                var6[15] = var2;
                var2 = _closure1_slot3;
                var2 = var2.SEND_TTS_MESSAGES;
                var6[16] = var2;
                var2 = _closure1_slot3;
                var2 = var2.SEND_VOICE_MESSAGES;
                var6[17] = var2;
                var2 = _closure1_slot3;
                var2 = var2.SEND_POLLS;
                var6[18] = var2;
                var4 = var1.inSoundmojiExperiment;
                var2 = var6;
                if (var4) {
                    _fun109785_ip = 307;
                    continue _fun109785
                }
            case 290:
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot3;
                    var1 = var0.USE_EXTERNAL_SOUNDS;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var2 = var5.bind(var6)(var4);
            case 307:
                var1 = var1.inBypassSlowmodePermissionExperiment;
                var5 = var2;
                if (var1) {
                    _fun109785_ip = 336;
                    continue _fun109785
                }
            case 319:
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot3;
                    var1 = var0.BYPASS_SLOWMODE;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var5 = var1.bind(var2)(var0);
            case 336:
                var2 = _closure1_slot4;
                var0 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 1;
                var6 = var9[var4];
                var1 = undefined;
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var9[var4];
                var4 = var8.bind(var1)(var4);
                var4 = var4.t;
                var4 = var4.cKobO5;
                var4 = var6.bind(var7)(var4);
                var0.title = var4;
                var4 = _closure1_slot5;
                var3 = arg0;
                var3 = var4.bind(var1)(var5, var3);
                var0.permissions = var3;
                var1 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: generateGuildVoiceSection, environment: var1
        var0 = _closure1_slot3;
        var0 = var0.CONNECT;
        var5 = new Array(11);
        var5[0] = var0;
        var0 = _closure1_slot3;
        var0 = var0.SPEAK;
        var5[1] = var0;
        var0 = _closure1_slot3;
        var0 = var0.STREAM;
        var5[2] = var0;
        var0 = _closure1_slot3;
        var0 = var0.USE_SOUNDBOARD;
        var5[3] = var0;
        var0 = _closure1_slot3;
        var0 = var0.USE_EXTERNAL_SOUNDS;
        var5[4] = var0;
        var0 = _closure1_slot3;
        var0 = var0.USE_VAD;
        var5[5] = var0;
        var0 = _closure1_slot3;
        var0 = var0.PRIORITY_SPEAKER;
        var5[6] = var0;
        var0 = _closure1_slot3;
        var0 = var0.MUTE_MEMBERS;
        var5[7] = var0;
        var0 = _closure1_slot3;
        var0 = var0.DEAFEN_MEMBERS;
        var5[8] = var0;
        var0 = _closure1_slot3;
        var0 = var0.MOVE_MEMBERS;
        var5[9] = var0;
        var0 = _closure1_slot3;
        var0 = var0.SET_VOICE_CHANNEL_STATUS;
        var5[10] = var0;
        var2 = _closure1_slot4;
        var0 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 1;
        var6 = var9[var4];
        var1 = undefined;
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var4 = var4.t;
        var4 = var4["46Ra1b"];
        var4 = var6.bind(var7)(var4);
        var0.title = var4;
        var4 = _closure1_slot5;
        var3 = arg0;
        var3 = var4.bind(var1)(var5, var3);
        var0.permissions = var3;
        var1 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: generateGuildAppsSection, environment: var1
        var0 = _closure1_slot3;
        var0 = var0.USE_APPLICATION_COMMANDS;
        var5 = new Array(3);
        var5[0] = var0;
        var0 = _closure1_slot3;
        var0 = var0.USE_EMBEDDED_ACTIVITIES;
        var5[1] = var0;
        var0 = _closure1_slot3;
        var0 = var0.USE_EXTERNAL_APPS;
        var5[2] = var0;
        var2 = _closure1_slot4;
        var0 = {};
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 1;
        var6 = var9[var4];
        var1 = undefined;
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var4 = var4.t;
        var4 = var4["rrh/W6"];
        var4 = var6.bind(var7)(var4);
        var0.title = var4;
        var4 = _closure1_slot5;
        var3 = arg0;
        var3 = var4.bind(var1)(var5, var3);
        var0.permissions = var3;
        var1 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/permissions/PermissionUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getGuildPermissionSpec = var3;
    var3 = function(arg0) { // Original name: generateGuildPermissionSpec, environment: var1
        _fun109790: for (var _fun109790_ip = 0;;) switch (_fun109790_ip) {
            case 0:
                var9 = arg0;
                var0 = _closure1_slot6;
                var4 = undefined;
                var7 = var0.bind(var4)(var9);
                var0 = _closure1_slot7;
                var1 = var0.bind(var4)(var7, var9);
                var0 = new Array(5);
                var0[0] = var1;
                var1 = _closure1_slot8;
                var1 = var1.bind(var4)(var7);
                var0[1] = var1;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)(var7, var9);
                var0[2] = var1;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)(var7);
                var0[3] = var1;
                var1 = _closure1_slot11;
                var1 = var1.bind(var4)(var7);
                var0[4] = var1;
                var1 = var9.showStageChannelPermissions;
                if (!var1) {
                    _fun109790_ip = 217;
                    continue _fun109790
                }
            case 97:
                var2 = var0.push;
                var6 = _closure1_slot4;
                var1 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 1;
                var8 = var12[var3];
                var8 = var11.bind(var4)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var3 = var12[var3];
                var3 = var11.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.yniauk;
                var3 = var8.bind(var10)(var3);
                var1.title = var3;
                var8 = _closure1_slot5;
                var3 = _closure1_slot3;
                var10 = var3.REQUEST_TO_SPEAK;
                var3 = new Array(1);
                var3[0] = var10;
                var3 = var8.bind(var4)(var3, var7);
                var1.permissions = var3;
                var3 = var9.showExperimental;
                var3 = var6.bind(var4)(var1, var3);
                var1 = var2.bind(var0)(var1);
            case 217:
                var2 = var0.push;
                var3 = _closure1_slot4;
                var1 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 1;
                var6 = var12[var8];
                var6 = var11.bind(var4)(var6);
                var13 = var6.intl;
                var10 = var13.string;
                var6 = var12[var8];
                var6 = var11.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.b8lplT;
                var6 = var10.bind(var13)(var6);
                var1.title = var6;
                var6 = _closure1_slot5;
                var10 = _closure1_slot3;
                var13 = var10.CREATE_EVENTS;
                var10 = new Array(2);
                var10[0] = var13;
                var13 = _closure1_slot3;
                var13 = var13.MANAGE_EVENTS;
                var10[1] = var13;
                var10 = var6.bind(var4)(var10, var7);
                var1.permissions = var10;
                var9 = var9.showExperimental;
                var9 = var3.bind(var4)(var1, var9);
                var1 = var2.bind(var0)(var1);
                var2 = var0.push;
                var1 = {};
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8["3uI5CX"];
                var8 = var9.bind(var10)(var8);
                var1.title = var8;
                var5 = _closure1_slot3;
                var8 = var5.ADMINISTRATOR;
                var5 = new Array(1);
                var5[0] = var8;
                var5 = var6.bind(var4)(var5, var7);
                var1.permissions = var5;
                var3 = var3.bind(var4)(var1);
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.generateGuildPermissionSpec = var3;
    var3 = function(arg0, arg1) { // Original name: generateChannelGeneralSection, environment: var1
        _fun109791: for (var _fun109791_ip = 0;;) switch (_fun109791_ip) {
            case 0:
                var1 = arguments[2];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun109791_ip = 21;
                    continue _fun109791
                }
            case 9:
                var0 = {};
                var2 = true;
                var0.showManageWebhooks = var2;
                var1 = var0;
            case 21:
                var0 = {};
                var2 = arg1;
                var0.title = var2;
                var3 = _closure1_slot5;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun109791_ip = 52;
                    continue _fun109791
                }
            case 43:
                var1 = var1.showManageWebhooks;
                if (var1) {
                    _fun109791_ip = 100;
                    continue _fun109791
                }
            case 52:
                var1 = _closure1_slot3;
                var1 = var1.VIEW_CHANNEL;
                var2 = new Array(3);
                var2[0] = var1;
                var1 = _closure1_slot3;
                var1 = var1.MANAGE_CHANNELS;
                var2[1] = var1;
                var1 = _closure1_slot3;
                var1 = var1.MANAGE_ROLES;
                var2[2] = var1;
                _fun109791_ip = 163;
                continue _fun109791;
            case 100:
                var1 = _closure1_slot3;
                var6 = var1.VIEW_CHANNEL;
                var1 = new Array(4);
                var1[0] = var6;
                var6 = _closure1_slot3;
                var6 = var6.MANAGE_CHANNELS;
                var1[1] = var6;
                var6 = _closure1_slot3;
                var6 = var6.MANAGE_ROLES;
                var1[2] = var6;
                var5 = _closure1_slot3;
                var5 = var5.MANAGE_WEBHOOKS;
                var1[3] = var5;
                var2 = var1;
            case 163:
                var1 = arg0;
                var1 = var3.bind(var4)(var2, var1);
                var0.permissions = var1;
                return var0;
        }
    };
    var2.generateChannelGeneralSection = var3;
    var3 = function(arg0, arg1) { // Original name: generateChannelMembershipSection, environment: var1
        var0 = {};
        var1 = arg1;
        var0.title = var1;
        var4 = _closure1_slot5;
        var1 = _closure1_slot3;
        var1 = var1.CREATE_INSTANT_INVITE;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var0.permissions = var1;
        return var0;
    };
    var2.generateChannelMembershipSection = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: generateChannelTextSection, environment: var1
        _fun109793: for (var _fun109793_ip = 0;;) switch (_fun109793_ip) {
            case 0:
                var2 = arg2;
                var3 = _closure1_slot3;
                var3 = var3.SEND_MESSAGES;
                var6 = new Array(19);
                var6[0] = var3;
                var3 = _closure1_slot3;
                var3 = var3.SEND_MESSAGES_IN_THREADS;
                var6[1] = var3;
                var3 = _closure1_slot3;
                var3 = var3.CREATE_PUBLIC_THREADS;
                var6[2] = var3;
                var3 = _closure1_slot3;
                var3 = var3.CREATE_PRIVATE_THREADS;
                var6[3] = var3;
                var3 = _closure1_slot3;
                var3 = var3.EMBED_LINKS;
                var6[4] = var3;
                var3 = _closure1_slot3;
                var3 = var3.ATTACH_FILES;
                var6[5] = var3;
                var3 = _closure1_slot3;
                var3 = var3.ADD_REACTIONS;
                var6[6] = var3;
                var3 = _closure1_slot3;
                var3 = var3.USE_EXTERNAL_EMOJIS;
                var6[7] = var3;
                var3 = _closure1_slot3;
                var3 = var3.USE_EXTERNAL_STICKERS;
                var6[8] = var3;
                var3 = _closure1_slot3;
                var3 = var3.USE_EXTERNAL_SOUNDS;
                var6[9] = var3;
                var3 = _closure1_slot3;
                var3 = var3.MENTION_EVERYONE;
                var6[10] = var3;
                var3 = _closure1_slot3;
                var3 = var3.MANAGE_MESSAGES;
                var6[11] = var3;
                var3 = _closure1_slot3;
                var3 = var3.PIN_MESSAGES;
                var6[12] = var3;
                var3 = _closure1_slot3;
                var3 = var3.BYPASS_SLOWMODE;
                var6[13] = var3;
                var3 = _closure1_slot3;
                var3 = var3.MANAGE_THREADS;
                var6[14] = var3;
                var3 = _closure1_slot3;
                var3 = var3.READ_MESSAGE_HISTORY;
                var6[15] = var3;
                var3 = _closure1_slot3;
                var3 = var3.SEND_TTS_MESSAGES;
                var6[16] = var3;
                var3 = _closure1_slot3;
                var3 = var3.SEND_VOICE_MESSAGES;
                var6[17] = var3;
                var3 = _closure1_slot3;
                var3 = var3.SEND_POLLS;
                var6[18] = var3;
                var3 = var2.inSoundmojiExperiment;
                var5 = var6;
                if (var3) {
                    _fun109793_ip = 307;
                    continue _fun109793
                }
            case 290:
                var4 = var6.filter;
                var3 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot3;
                    var1 = var0.USE_EXTERNAL_SOUNDS;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var5 = var4.bind(var6)(var3);
            case 307:
                var3 = var2.showPrivateThreads;
                if (!var3) {
                    _fun109793_ip = 322;
                    continue _fun109793
                }
            case 316:
                var3 = var2.showCreateThreads;
            case 322:
                var6 = var5;
                if (var3) {
                    _fun109793_ip = 345;
                    continue _fun109793
                }
            case 328:
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot3;
                    var1 = var0.CREATE_PRIVATE_THREADS;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var6 = var4.bind(var5)(var3);
            case 345:
                var3 = var2.showCreateThreads;
                var5 = var6;
                if (var3) {
                    _fun109793_ip = 374;
                    continue _fun109793
                }
            case 357:
                var4 = var6.filter;
                var3 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot3;
                    var1 = var0.CREATE_PUBLIC_THREADS;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var5 = var4.bind(var6)(var3);
            case 374:
                var3 = var2.inBypassSlowmodePermissionExperiment;
                var4 = var5;
                if (var3) {
                    _fun109793_ip = 403;
                    continue _fun109793
                }
            case 386:
                var3 = var5.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot3;
                    var1 = var0.BYPASS_SLOWMODE;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var4 = var3.bind(var5)(var0);
            case 403:
                var0 = {};
                var3 = arg1;
                var0.title = var3;
                var2 = var2.sectionDescription;
                var0.description = var2;
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg0;
                var1 = var3.bind(var2)(var4, var1);
                var0.permissions = var1;
                return var0;
        }
    };
    var2.generateChannelTextSection = var3;
    var3 = function(arg0, arg1) { // Original name: generateChannelVoiceSection, environment: var1
        var0 = {};
        var1 = arg1;
        var0.title = var1;
        var4 = _closure1_slot5;
        var2 = _closure1_slot3;
        var2 = var2.CONNECT;
        var3 = new Array(11);
        var3[0] = var2;
        var2 = _closure1_slot3;
        var2 = var2.SPEAK;
        var3[1] = var2;
        var2 = _closure1_slot3;
        var2 = var2.STREAM;
        var3[2] = var2;
        var2 = _closure1_slot3;
        var2 = var2.USE_SOUNDBOARD;
        var3[3] = var2;
        var2 = _closure1_slot3;
        var2 = var2.USE_EXTERNAL_SOUNDS;
        var3[4] = var2;
        var2 = _closure1_slot3;
        var2 = var2.USE_VAD;
        var3[5] = var2;
        var2 = _closure1_slot3;
        var2 = var2.PRIORITY_SPEAKER;
        var3[6] = var2;
        var2 = _closure1_slot3;
        var2 = var2.MUTE_MEMBERS;
        var3[7] = var2;
        var2 = _closure1_slot3;
        var2 = var2.DEAFEN_MEMBERS;
        var3[8] = var2;
        var2 = _closure1_slot3;
        var2 = var2.MOVE_MEMBERS;
        var3[9] = var2;
        var1 = _closure1_slot3;
        var1 = var1.SET_VOICE_CHANNEL_STATUS;
        var3[10] = var1;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var0.permissions = var1;
        return var0;
    };
    var2.generateChannelVoiceSection = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: generateChannelVoiceChatSection, environment: var1
        _fun109799: for (var _fun109799_ip = 0;;) switch (_fun109799_ip) {
            case 0:
                var2 = arg2;
                var3 = _closure1_slot3;
                var3 = var3.SEND_MESSAGES;
                var6 = new Array(14);
                var6[0] = var3;
                var3 = _closure1_slot3;
                var3 = var3.EMBED_LINKS;
                var6[1] = var3;
                var3 = _closure1_slot3;
                var3 = var3.ATTACH_FILES;
                var6[2] = var3;
                var3 = _closure1_slot3;
                var3 = var3.ADD_REACTIONS;
                var6[3] = var3;
                var3 = _closure1_slot3;
                var3 = var3.USE_EXTERNAL_EMOJIS;
                var6[4] = var3;
                var3 = _closure1_slot3;
                var3 = var3.USE_EXTERNAL_STICKERS;
                var6[5] = var3;
                var3 = _closure1_slot3;
                var3 = var3.USE_EXTERNAL_SOUNDS;
                var6[6] = var3;
                var3 = _closure1_slot3;
                var3 = var3.MENTION_EVERYONE;
                var6[7] = var3;
                var3 = _closure1_slot3;
                var3 = var3.MANAGE_MESSAGES;
                var6[8] = var3;
                var3 = _closure1_slot3;
                var3 = var3.BYPASS_SLOWMODE;
                var6[9] = var3;
                var3 = _closure1_slot3;
                var3 = var3.READ_MESSAGE_HISTORY;
                var6[10] = var3;
                var3 = _closure1_slot3;
                var3 = var3.SEND_TTS_MESSAGES;
                var6[11] = var3;
                var3 = _closure1_slot3;
                var3 = var3.SEND_VOICE_MESSAGES;
                var6[12] = var3;
                var3 = _closure1_slot3;
                var3 = var3.SEND_POLLS;
                var6[13] = var3;
                var3 = var2.inSoundmojiExperiment;
                var5 = var6;
                if (var3) {
                    _fun109799_ip = 237;
                    continue _fun109799
                }
            case 220:
                var4 = var6.filter;
                var3 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot3;
                    var1 = var0.USE_EXTERNAL_SOUNDS;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var5 = var4.bind(var6)(var3);
            case 237:
                var3 = var2.inBypassSlowmodePermissionExperiment;
                var4 = var5;
                if (var3) {
                    _fun109799_ip = 266;
                    continue _fun109799
                }
            case 249:
                var3 = var5.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot3;
                    var1 = var0.BYPASS_SLOWMODE;
                    var0 = arg0;
                    var0 = var0 !== var1;
                    return var0;
                };
                var4 = var3.bind(var5)(var0);
            case 266:
                var0 = {};
                var3 = arg1;
                var0.title = var3;
                var2 = var2.sectionDescription;
                var0.description = var2;
                var3 = _closure1_slot5;
                var2 = undefined;
                var1 = arg0;
                var1 = var3.bind(var2)(var4, var1);
                var0.permissions = var1;
                return var0;
        }
    };
    var2.generateChannelVoiceChatSection = var3;
    var3 = function(arg0, arg1) { // Original name: generateChannelAppsSection, environment: var1
        _fun109802: for (var _fun109802_ip = 0;;) switch (_fun109802_ip) {
            case 0:
                var2 = arguments[2];
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun109802_ip = 21;
                    continue _fun109802
                }
            case 9:
                var0 = {};
                var1 = true;
                var0.showActivities = var1;
                var2 = var0;
            case 21:
                var0 = {};
                var1 = arg1;
                var0.title = var1;
                var3 = _closure1_slot5;
                var5 = _closure1_slot3;
                var6 = var5.USE_APPLICATION_COMMANDS;
                var5 = new Array(3);
                var5[0] = var6;
                var6 = var2.showActivities;
                var2 = null;
                if (!var6) {
                    _fun109802_ip = 76;
                    continue _fun109802
                }
            case 66:
                var6 = _closure1_slot3;
                var2 = var6.USE_EMBEDDED_ACTIVITIES;
            case 76:
                var5[1] = var2;
                var2 = _closure1_slot3;
                var2 = var2.USE_EXTERNAL_APPS;
                var5[2] = var2;
                var2 = var5.filter;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var5)(var1);
                var1 = arg0;
                var1 = var3.bind(var4)(var2, var1);
                var0.permissions = var1;
                return var0;
        }
    };
    var2.generateChannelAppsSection = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: generateChannelStageVoiceSection, environment: var1
        _fun109803: for (var _fun109803_ip = 0;;) switch (_fun109803_ip) {
            case 0:
                var0 = {};
                var1 = arg1;
                var0.title = var1;
                var4 = _closure1_slot5;
                var1 = _closure1_slot3;
                var5 = var1.CONNECT;
                var1 = arg2;
                if (var1) {
                    _fun109803_ip = 70;
                    continue _fun109803
                }
            case 32:
                var3 = new Array(3);
                var3[0] = var5;
                var1 = _closure1_slot3;
                var1 = var1.MUTE_MEMBERS;
                var3[1] = var1;
                var1 = _closure1_slot3;
                var1 = var1.MOVE_MEMBERS;
                var3[2] = var1;
                _fun109803_ip = 123;
                continue _fun109803;
            case 70:
                var1 = new Array(4);
                var1[0] = var5;
                var5 = _closure1_slot3;
                var5 = var5.STREAM;
                var1[1] = var5;
                var5 = _closure1_slot3;
                var5 = var5.MUTE_MEMBERS;
                var1[2] = var5;
                var2 = _closure1_slot3;
                var2 = var2.MOVE_MEMBERS;
                var1[3] = var2;
                var3 = var1;
            case 123:
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var0.permissions = var1;
                return var0;
        }
    };
    var2.generateChannelStageVoiceSection = var3;
    var3 = function(arg0, arg1) { // Original name: generateChannelStageSection, environment: var1
        var0 = {};
        var1 = arg1;
        var0.title = var1;
        var4 = _closure1_slot5;
        var2 = _closure1_slot3;
        var2 = var2.REQUEST_TO_SPEAK;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot3;
        var1 = var1.MENTION_EVERYONE;
        var3[1] = var1;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var0.permissions = var1;
        return var0;
    };
    var2.generateChannelStageSection = var3;
    var3 = function(arg0, arg1) { // Original name: generateChannelEventsSection, environment: var1
        var0 = {};
        var1 = arg1;
        var0.title = var1;
        var4 = _closure1_slot5;
        var2 = _closure1_slot3;
        var2 = var2.CREATE_EVENTS;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot3;
        var1 = var1.MANAGE_EVENTS;
        var3[1] = var1;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var0.permissions = var1;
        return var0;
    };
    var2.generateChannelEventsSection = var3;
    var3 = function(arg0) { // Original name: renderDescription, environment: var1
        _fun109806: for (var _fun109806_ip = 0;;) switch (_fun109806_ip) {
            case 0:
                var3 = arg0;
                var1 = null;
                var0 = var3;
                if (!(var1 != var0)) {
                    _fun109806_ip = 92;
                    continue _fun109806
                }
            case 12:
                var4 = typeof var3;
                var1 = 'string';
                if (!(var1 !== var4)) {
                    _fun109806_ip = 79;
                    continue _fun109806
                }
            case 23:
                var2 = 'function';
                var1 = var3;
                if (!(var2 === var4)) {
                    _fun109806_ip = 77;
                    continue _fun109806
                }
            case 34:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var5 = var2.intl;
                var4 = var5.format;
                var2 = {};
                var1 = var4.bind(var5)(var3, var2);
            case 77:
                _fun109806_ip = 89;
                continue _fun109806;
            case 79:
                var2 = var3.trim;
                var1 = var2.bind(var3)();
            case 89:
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var2.renderDescription = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: getMigrationWarning, environment: var1
        _fun109807: for (var _fun109807_ip = 0;;) switch (_fun109807_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var7 = undefined;
                var4 = var2.bind(var7)(var0);
                var2 = var4.getCurrentConfig;
                var0 = {};
                var6 = arg2;
                var0.guildId = var6;
                var6 = 'getMigrationWarning';
                var0.location = var6;
                var0 = var2.bind(var4)(var0);
                var0 = var0.enabled;
                var2 = _closure1_slot3;
                if (var0) {
                    _fun109807_ip = 315;
                    continue _fun109807
                }
            case 74:
                if (var1) {
                    _fun109807_ip = 151;
                    continue _fun109807
                }
            case 77:
                var4 = var2.MANAGE_MESSAGES;
                var0 = null;
                if (!(var5 === var4)) {
                    _fun109807_ip = 146;
                    continue _fun109807
                }
            case 89:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 1;
                var6 = var10[var4];
                var6 = var9.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4["2XIdPp"];
                var0 = var6.bind(var8)(var4);
            case 146:
                _fun109807_ip = 310;
                continue _fun109807;
            case 151:
                var4 = var2.MANAGE_CHANNELS;
                if (!(var5 !== var4)) {
                    _fun109807_ip = 250;
                    continue _fun109807
                }
            case 161:
                var4 = _closure1_slot3;
                var4 = var4.MANAGE_THREADS;
                if (!(var5 !== var4)) {
                    _fun109807_ip = 250;
                    continue _fun109807
                }
            case 175:
                var4 = _closure1_slot3;
                var6 = var4.MANAGE_MESSAGES;
                var4 = null;
                if (!(var5 === var6)) {
                    _fun109807_ip = 248;
                    continue _fun109807
                }
            case 191:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 1;
                var8 = var11[var6];
                var8 = var10.bind(var7)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.zSc2tb;
                var4 = var8.bind(var9)(var6);
            case 248:
                _fun109807_ip = 307;
                continue _fun109807;
            case 250:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 1;
                var8 = var11[var6];
                var8 = var10.bind(var7)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6.Han3PH;
                var4 = var8.bind(var9)(var6);
            case 307:
                var0 = var4;
            case 310:
                _fun109807_ip = 554;
                continue _fun109807;
            case 315:
                if (var1) {
                    _fun109807_ip = 392;
                    continue _fun109807
                }
            case 318:
                var4 = var2.MANAGE_MESSAGES;
                var1 = null;
                if (!(var5 === var4)) {
                    _fun109807_ip = 387;
                    continue _fun109807
                }
            case 330:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 1;
                var6 = var10[var4];
                var6 = var9.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var4 = var10[var4];
                var4 = var9.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4.bU1J1V;
                var1 = var6.bind(var8)(var4);
            case 387:
                _fun109807_ip = 551;
                continue _fun109807;
            case 392:
                var2 = var2.MANAGE_CHANNELS;
                if (!(var5 !== var2)) {
                    _fun109807_ip = 491;
                    continue _fun109807
                }
            case 402:
                var2 = _closure1_slot3;
                var2 = var2.MANAGE_THREADS;
                if (!(var5 !== var2)) {
                    _fun109807_ip = 491;
                    continue _fun109807
                }
            case 416:
                var2 = _closure1_slot3;
                var4 = var2.MANAGE_MESSAGES;
                var2 = null;
                if (!(var5 === var4)) {
                    _fun109807_ip = 489;
                    continue _fun109807
                }
            case 432:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 1;
                var5 = var9[var4];
                var5 = var8.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4["62sGhW"];
                var2 = var5.bind(var6)(var4);
            case 489:
                _fun109807_ip = 548;
                continue _fun109807;
            case 491:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 1;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.JD3HnA;
                var2 = var4.bind(var5)(var3);
            case 548:
                var1 = var2;
            case 551:
                var0 = var1;
            case 554:
                return var0;
        }
    };
    var2.getMigrationWarning = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [483, 1234, 1304, 6498, 2]);