// utils/native/WelcomeScreenUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NO_WELCOME_SCREEN;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.JoinGuildSources;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = false;
    var3.welcomeScreenModalVisible = var6;
    var3.shouldFetchGuildId = var0;
    var _closure1_slot10 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/WelcomeScreenUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: useShowWelcomeModal, environment: var1
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var0 = var5[var0];
        var3 = undefined;
        var8 = var4.bind(var3)(var0);
        var0 = var8.useLocation;
        var0 = var0.bind(var8)();
        var0 = var0.welcomeModalChannelId;
        var _closure2_slot2 = var0;
        var8 = _closure1_slot1;
        var0 = 7;
        var0 = var5[var0];
        var0 = var8.bind(var3)(var0);
        var0 = var0.bind(var3)(var6, var7);
        var _closure2_slot3 = var0;
        var0 = 8;
        var0 = var5[var0];
        var5 = var4.bind(var3)(var0);
        var4 = var5.useStateFromStoresObject;
        var0 = _closure1_slot8;
        var3 = new Array(3);
        var3[0] = var0;
        var0 = _closure1_slot5;
        var3[1] = var0;
        var0 = _closure1_slot7;
        var3[2] = var0;
        var0 = function() { // Environment: var1
            _fun91508: for (var _fun91508_ip = 0;;) switch (_fun91508_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    if (var1) {
                        _fun91508_ip = 19;
                        continue _fun91508
                    }
                case 13:
                    var1 = _closure1_slot10;
                    return var1;
                case 19:
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var3 = _closure2_slot0;
                    var2 = var1.bind(var2)(var3);
                    var4 = _closure1_slot7;
                    var1 = var4.getSelectableChannelIds;
                    var4 = var1.bind(var4)(var3);
                    var7 = _closure1_slot5;
                    var1 = var7.get;
                    var5 = var1.bind(var7)(var3);
                    var1 = var7.hasSeen;
                    var1 = var1.bind(var7)(var3);
                    var3 = var7.hasError;
                    var6 = var3.bind(var7)();
                    var3 = var7.isFetching;
                    var7 = var3.bind(var7)();
                    var3 = !var1;
                    if (!var3) {
                        _fun91508_ip = 107;
                        continue _fun91508
                    }
                case 103:
                    var3 = _closure2_slot3;
                case 107:
                    if (!var3) {
                        _fun91508_ip = 122;
                        continue _fun91508
                    }
                case 110:
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot1;
                    var3 = var1 === var0;
                case 122:
                    var0 = {};
                    var1 = var3;
                    if (!var1) {
                        _fun91508_ip = 136;
                        continue _fun91508
                    }
                case 130:
                    var9 = null;
                    var1 = var9 != var5;
                case 136:
                    if (!var1) {
                        _fun91508_ip = 147;
                        continue _fun91508
                    }
                case 139:
                    var8 = _closure1_slot6;
                    var1 = var5 !== var8;
                case 147:
                    if (!var1) {
                        _fun91508_ip = 153;
                        continue _fun91508
                    }
                case 150:
                    var1 = !var7;
                case 153:
                    if (!var1) {
                        _fun91508_ip = 159;
                        continue _fun91508
                    }
                case 156:
                    var1 = !var6;
                case 159:
                    if (!var1) {
                        _fun91508_ip = 173;
                        continue _fun91508
                    }
                case 162:
                    var6 = var4.length;
                    var4 = 0;
                    var1 = var6 > var4;
                case 173:
                    var0.welcomeScreenModalVisible = var1;
                    var1 = undefined;
                    if (!var3) {
                        _fun91508_ip = 208;
                        continue _fun91508
                    }
                case 183:
                    var3 = null;
                    var5 = var3 == var5;
                    var1 = undefined;
                    if (!var5) {
                        _fun91508_ip = 208;
                        continue _fun91508
                    }
                case 194:
                    var3 = var3 != var2;
                    var1 = undefined;
                    if (!var3) {
                        _fun91508_ip = 208;
                        continue _fun91508
                    }
                case 203:
                    var1 = var2.id;
                case 208:
                    var0.shouldFetchGuildId = var1;
                    return var0;
            }
        };
        var3 = var4.bind(var5)(var3, var0);
        var0 = var3.welcomeScreenModalVisible;
        var5 = var3.shouldFetchGuildId;
        var _closure2_slot4 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun91509: for (var _fun91509_ip = 0;;) switch (_fun91509_ip) {
                case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun91509_ip = 53;
                        continue _fun91509
                    }
                case 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.fetchWelcomeScreen;
                    var0 = _closure2_slot4;
                    var0 = var1.bind(var2)(var0);
                case 53:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useShowWelcomeModal = var3;
    var1 = function(arg0) { // Original name: openWelcomeActionSheet, environment: var1
        _fun91510: for (var _fun91510_ip = 0;;) switch (_fun91510_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var1 = var1.onHide;
                var _closure2_slot1 = var1;
                var3 = function() { // Original name: openWelcomeActionSheet, environment: var0
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 12;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 11;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var7 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'GuildWelcomeActionSheet';
                    var2 = var2.bind(var1)(var7);
                    var1 = {};
                    var1.guildId = var7;
                    var6 = _closure2_slot1;
                    var1.onHide = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var2 = _closure1_slot4;
                var0 = var2.getLurkingSource;
                var4 = var0.bind(var2)();
                var0 = null;
                var5 = var0 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun91510_ip = 66;
                    continue _fun91510
                }
            case 61:
                var2 = var4.type;
            case 66:
                var1 = _closure1_slot9;
                var1 = var1.MOBILE_GUILD_DISCOVERY;
                if (!(var2 !== var1)) {
                    _fun91510_ip = 86;
                    continue _fun91510
                }
            case 80:
                var1 = var3.bind(var0)();
                _fun91510_ip = 106;
                continue _fun91510;
            case 86:
                var1 = global;
                var2 = var1.setTimeout;
                var1 = 600;
                var1 = var2.bind(var0)(var3, var1);
            case 106:
                return var0;
        }
    };
    var2.openWelcomeActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3051, 11840, 1662, 1410, 660, 3177, 11841, 566, 11842, 3237, 11843, 1307, 2]);