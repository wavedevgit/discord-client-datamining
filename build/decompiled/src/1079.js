// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function() { // Original name: showReportDialog, environment: var0
        _fun11021: for (var _fun11021_ip = 0;;) switch (_fun11021_ip) {
            case 0:
                var0 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var5 = 0;
                if (!(var2 > var5)) {
                    _fun11021_ip = 23;
                    continue _fun11021
                }
            case 15:
                var2 = arguments[var5];
                if (!(var0 === var2)) {
                    _fun11021_ip = 27;
                    continue _fun11021
                }
            case 23:
                var11 = {};
                _fun11021_ip = 31;
                continue _fun11021;
            case 27:
                var11 = arguments[var5];
            case 31:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var3.bind(var0)(var2);
                var2 = var2.WINDOW;
                var7 = var2.document;
                var2 = null;
                var6 = var2 == var7;
                var3 = undefined;
                if (var6) {
                    _fun11021_ip = 80;
                    continue _fun11021
                }
            case 74:
                var3 = var7.head;
            case 80:
                if (var3) {
                    _fun11021_ip = 100;
                    continue _fun11021
                }
            case 83:
                var8 = var2 == var7;
                var6 = undefined;
                if (var8) {
                    _fun11021_ip = 97;
                    continue _fun11021
                }
            case 92:
                var6 = var7.body;
            case 97:
                var3 = var6;
            case 100:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                if (var3) {
                    _fun11021_ip = 182;
                    continue _fun11021
                }
            case 111:
                var8 = 1;
                var8 = var6[var8];
                var8 = var7.bind(var0)(var8);
                var8 = var8.DEBUG_BUILD;
                if (!var8) {
                    _fun11021_ip = 603;
                    continue _fun11021
                }
            case 135:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 2;
                var8 = var10[var8];
                var8 = var9.bind(var0)(var8);
                var10 = var8.debug;
                var9 = var10.error;
                var8 = '[showReportDialog] Global document not defined';
                var8 = var9.bind(var10)(var8);
                _fun11021_ip = 603;
                continue _fun11021;
            case 182:
                var10 = 2;
                var8 = var6[var10];
                var9 = var7.bind(var0)(var8);
                var8 = var9.getCurrentScope;
                var12 = var8.bind(var9)();
                var6 = var6[var10];
                var7 = var7.bind(var0)(var6);
                var6 = var7.getClient;
                var6 = var6.bind(var7)();
                var2 = var2 == var6;
                var9 = undefined;
                if (var2) {
                    _fun11021_ip = 242;
                    continue _fun11021
                }
            case 232:
                var2 = var6.getDsn;
                var9 = var2.bind(var6)();
            case 242:
                if (var9) {
                    _fun11021_ip = 321;
                    continue _fun11021
                }
            case 245:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 1;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun11021_ip = 603;
                    continue _fun11021
                }
            case 277:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var10];
                var2 = var6.bind(var0)(var2);
                var7 = var2.debug;
                var6 = var7.error;
                var2 = '[showReportDialog] DSN not configured';
                var2 = var6.bind(var7)(var2);
                _fun11021_ip = 603;
                continue _fun11021;
            case 321:
                var2 = global;
                var8 = var2.Object;
                var7 = var8.assign;
                var6 = {};
                var15 = var2.Object;
                var14 = var15.assign;
                var2 = var12.getUser;
                var13 = var2.bind(var12)();
                var12 = var11.user;
                var2 = {};
                var2 = var14.bind(var15)(var2, var13, var12);
                var6.user = var2;
                var2 = var11.eventId;
                if (var2) {
                    _fun11021_ip = 411;
                    continue _fun11021
                }
            case 384:
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var10];
                var13 = var13.bind(var0)(var12);
                var12 = var13.lastEventId;
                var2 = var12.bind(var13)();
            case 411:
                var6.eventId = var2;
                var2 = {};
                var6 = var7.bind(var8)(var2, var11, var6);
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = var7[var5];
                var2 = var8.bind(var0)(var2);
                var2 = var2.WINDOW;
                var12 = var2.document;
                var11 = var12.createElement;
                var2 = 'script';
                var2 = var11.bind(var12)(var2);
                var11 = true;
                var2.async = var11;
                var11 = 'anonymous';
                var2.crossOrigin = var11;
                var7 = var7[var10];
                var8 = var8.bind(var0)(var7);
                var7 = var8.getReportDialogEndpoint;
                var7 = var7.bind(var8)(var9, var6);
                var2.src = var7;
                var7 = var6.onLoad;
                var6 = var6.onClose;
                var _closure2_slot0 = var6;
                if (!var7) {
                    _fun11021_ip = 541;
                    continue _fun11021
                }
            case 535:
                var2.onload = var7;
            case 541:
                if (!var6) {
                    _fun11021_ip = 592;
                    continue _fun11021
                }
            case 544:
                var6 = function(arg0) { // Original name: reportDialogClosedMessageHandler, environment: var4
                    _fun11022: for (var _fun11022_ip = 0;;) switch (_fun11022_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.data;
                            var0 = '__sentry_reportdialog_closed__';
                            if (!(var0 === var1)) {
                                _fun11022_ip = 79;
                                continue _fun11022
                            }
                        case 18: // try_start_0
                            var1 = _closure2_slot0;
                            var3 = undefined;
                            var1 = var1.bind(var3)();
                        case 31: // try_end0
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 0;
                            var1 = var4[var1];
                            var1 = var2.bind(var3)(var1);
                            var3 = var1.WINDOW;
                            var2 = var3.removeEventListener;
                            var1 = _closure2_slot1;
                            var0 = 'message';
                            var0 = var2.bind(var3)(var0, var1);
                        case 79:
                            var0 = undefined;
                            return var0;
                        case 83: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 0;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var4 = var1.WINDOW;
                            var3 = var4.removeEventListener;
                            var2 = _closure2_slot1;
                            var1 = 'message';
                            var1 = var3.bind(var4)(var1, var2);
                            throw var0;
                    }
                };
                var _closure2_slot1 = var6;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var4.bind(var0)(var1);
                var5 = var1.WINDOW;
                var4 = var5.addEventListener;
                var1 = 'message';
                var1 = var4.bind(var5)(var1, var6);
            case 592:
                var1 = var3.appendChild;
                var1 = var1.bind(var3)(var2);
            case 603:
                return var0;
        }
    };
    var1.showReportDialog = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1025, 1073, 817]);