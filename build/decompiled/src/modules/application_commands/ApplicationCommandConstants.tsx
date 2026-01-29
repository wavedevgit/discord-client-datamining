// modules/application_commands/ApplicationCommandConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var8 = 'True';
    var6 = new Array(2);
    var3 = {
        'name': 'True',
        'displayName': 'True',
        'value': 'true'
    };
    var6[0] = var3;
    var7 = 'False';
    var3 = {
        'name': 'False',
        'displayName': 'False',
        'value': 'false'
    };
    var6[1] = var3;
    var5 = {};
    var3 = '-1';
    var5.BUILT_IN = var3;
    var3 = '-2';
    var5.FRECENCY = var3;
    var11 = var0.Object;
    var4 = var11.freeze;
    var3 = new Array(0);
    var4 = var4.bind(var11)(var3);
    var11 = var0.Object;
    var3 = var11.freeze;
    var0 = new Array(0);
    var3 = var3.bind(var11)(var0);
    var0 = 2;
    var9 = var9[var0];
    var0 = undefined;
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/application_commands/ApplicationCommandConstants.tsx';
    var9 = var10.bind(var11)(var9);
    var2.TRUE_OPTION_NAME = var8;
    var2.FALSE_OPTION_NAME = var7;
    var2.BOOLEAN_CHOICES = var6;
    var2.BuiltInSectionId = var5;
    var5 = 10;
    var2.DISCOVERY_COMMANDS_QUERY_LIMIT_WEB = var5;
    var6 = 5;
    var2.DISCOVERY_COMMANDS_QUERY_LIMIT_MOBILE = var6;
    var2.DISCOVERY_COMMANDS_QUERY_LIMIT = var6;
    var2.DISCOVERY_COMMANDS_FRECENCY_LIMIT = var6;
    var6 = 25;
    var2.DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT = var6;
    var6 = '\x00';
    var2.SUB_COMMAND_KEY_SEPARATOR = var6;
    var6 = 100;
    var2.APPLICATION_COMMAND_PERMISSIONS_LIMIT = var6;
    var6 = 3;
    var2.MAX_SUBCOMMAND_LEVEL = var6;
    var2.CONTEXT_MENU_COMMANDS_QUERY_LIMIT = var5;
    var5 = 500;
    var2.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME = var5;
    var2.EMPTY_COMMANDS = var4;
    var2.EMPTY_COMMANDS_SECTION = var3;
    var3 = 200;
    var2.APPLICATION_USER_INSTALL_BETA_USER_LIMIT = var3;
    var1 = function(arg0) { // Original name: getValidationErrorText, environment: var1
        _fun40770: for (var _fun40770_ip = 0;;) switch (_fun40770_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.choices;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun40770_ip = 744;
                    continue _fun40770
                }
            case 18:
                var2 = var0.type;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 1;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.BOOLEAN;
                if (!(var1 !== var2)) {
                    _fun40770_ip = 686;
                    continue _fun40770
                }
            case 67:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.CHANNEL;
                if (!(var1 !== var2)) {
                    _fun40770_ip = 628;
                    continue _fun40770
                }
            case 103:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.INTEGER;
                if (!(var1 !== var2)) {
                    _fun40770_ip = 570;
                    continue _fun40770
                }
            case 139:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.NUMBER;
                if (!(var1 !== var2)) {
                    _fun40770_ip = 512;
                    continue _fun40770
                }
            case 175:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.ROLE;
                if (!(var1 !== var2)) {
                    _fun40770_ip = 454;
                    continue _fun40770
                }
            case 211:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.USER;
                if (!(var1 !== var2)) {
                    _fun40770_ip = 396;
                    continue _fun40770
                }
            case 247:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ApplicationCommandOptionType;
                var1 = var1.MENTIONABLE;
                if (!(var1 !== var2)) {
                    _fun40770_ip = 338;
                    continue _fun40770
                }
            case 280:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.EkDo1i;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 338:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.I7imec;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 396:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.i2r7j5;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 454:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.vrRQn0;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 512:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["FDyk/V"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 570:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["d/9Rk4"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 628:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Q0z2Gx;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 686:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.ATIx6O;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 744:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.xi5aah;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getValidationErrorText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 1636, 2]);