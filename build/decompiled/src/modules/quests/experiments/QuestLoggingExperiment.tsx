// modules/quests/experiments/QuestLoggingExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createExperiment;
    var3 = {
        'id': '2024-04_quests_logging',
        'kind': 'user',
        'label': 'Quests Logging'
    };
    var8 = {};
    var10 = false;
    var8.enabled = var10;
    var3.defaultConfig = var8;
    var9 = {
        'id': 0,
        'label': 'Control'
    };
    var8 = {};
    var8.enabled = var10;
    var9.config = var8;
    var8 = new Array(2);
    var8[0] = var9;
    var9 = {
        'id': 1,
        'label': 'Quest logging enabled'
    };
    var10 = {};
    var10.enabled = var11;
    var9.config = var10;
    var8[1] = var9;
    var3.treatments = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/experiments/QuestLoggingExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun47348: for (var _fun47348_ip = 0;;) switch (_fun47348_ip) {
            case 0:
                var0 = arguments[0];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun47348_ip = 11;
                    continue _fun47348
                }
            case 9:
                var0 = {};
            case 11:
                var2 = var0.quest;
                var9 = var0.location;
                var6 = _closure1_slot3;
                var5 = var6.getCurrentConfig;
                var3 = {};
                var0 = 'quests_logging';
                var3.location = var0;
                var0 = {};
                var7 = false;
                var0.autoTrackExposure = var7;
                var0 = var5.bind(var6)(var3, var0);
                var3 = var0.enabled;
                var0 = null;
                var5 = var0 == var2;
                var8 = undefined;
                if (var5) {
                    _fun47348_ip = 95;
                    continue _fun47348
                }
            case 78:
                var2 = var2.config;
                var2 = var2.messages;
                var8 = var2.questName;
            case 95:
                var2 = var0 != var9;
                var6 = '';
                var5 = var6;
                if (!var2) {
                    _fun47348_ip = 131;
                    continue _fun47348
                }
            case 109:
                var2 = global;
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var2 = '-';
                var5 = var7.bind(var2)(var9);
            case 131:
                var0 = var0 != var8;
                if (!var0) {
                    _fun47348_ip = 165;
                    continue _fun47348
                }
            case 138:
                var0 = global;
                var0 = var0.HermesInternal;
                var7 = var0.concat;
                var2 = '-';
                var0 = ')';
                var6 = var7.bind(var2)(var8, var0);
            case 165:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 2;
                var0 = var7[var0];
                var4 = var2.bind(var4)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = 'QuestLogger';
                var11 = var2.bind(var0)(var5, var6);
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var2;
                var0 = new var12[var4](var11, var10);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = {};
                if (var3) {
                    _fun47348_ip = 241;
                    continue _fun47348
                }
            case 235:
                var4 = _closure1_slot2;
                _fun47348_ip = 247;
                continue _fun47348;
            case 241:
                var4 = var2.log;
            case 247:
                var0.log = var4;
                if (var3) {
                    _fun47348_ip = 261;
                    continue _fun47348
                }
            case 255:
                var4 = _closure1_slot2;
                _fun47348_ip = 266;
                continue _fun47348;
            case 261:
                var4 = var2.warn;
            case 266:
                var0.warn = var4;
                if (var3) {
                    _fun47348_ip = 279;
                    continue _fun47348
                }
            case 273:
                var4 = _closure1_slot2;
                _fun47348_ip = 284;
                continue _fun47348;
            case 279:
                var4 = var2.error;
            case 284:
                var0.error = var4;
                if (var3) {
                    _fun47348_ip = 297;
                    continue _fun47348
                }
            case 291:
                var4 = _closure1_slot2;
                _fun47348_ip = 303;
                continue _fun47348;
            case 297:
                var4 = var2.info;
            case 303:
                var0.info = var4;
                if (var3) {
                    _fun47348_ip = 317;
                    continue _fun47348
                }
            case 311:
                var4 = _closure1_slot2;
                _fun47348_ip = 323;
                continue _fun47348;
            case 317:
                var4 = var2.verbose;
            case 323:
                var0.verbose = var4;
                if (var3) {
                    _fun47348_ip = 337;
                    continue _fun47348
                }
            case 331:
                var1 = _closure1_slot2;
                _fun47348_ip = 343;
                continue _fun47348;
            case 337:
                var1 = var2.trace;
            case 343:
                var0.trace = var1;
                return var0;
        }
    };
    var2.getQuestLogger = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [483, 3117, 3, 2]);