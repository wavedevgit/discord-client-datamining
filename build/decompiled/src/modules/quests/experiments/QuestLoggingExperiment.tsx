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
        _fun46723: for (var _fun46723_ip = 0;;) switch (_fun46723_ip) {
            case 0:
                var0 = arguments[0];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun46723_ip = 11;
                    continue _fun46723
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
                    _fun46723_ip = 95;
                    continue _fun46723
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
                    _fun46723_ip = 131;
                    continue _fun46723
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
                    _fun46723_ip = 165;
                    continue _fun46723
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
                    _fun46723_ip = 241;
                    continue _fun46723
                }
            case 235:
                var4 = _closure1_slot2;
                _fun46723_ip = 246;
                continue _fun46723;
            case 241:
                var4 = var2.log;
            case 246:
                var0.log = var4;
                if (var3) {
                    _fun46723_ip = 259;
                    continue _fun46723
                }
            case 253:
                var4 = _closure1_slot2;
                _fun46723_ip = 264;
                continue _fun46723;
            case 259:
                var4 = var2.warn;
            case 264:
                var0.warn = var4;
                if (var3) {
                    _fun46723_ip = 277;
                    continue _fun46723
                }
            case 271:
                var4 = _closure1_slot2;
                _fun46723_ip = 282;
                continue _fun46723;
            case 277:
                var4 = var2.error;
            case 282:
                var0.error = var4;
                if (var3) {
                    _fun46723_ip = 295;
                    continue _fun46723
                }
            case 289:
                var4 = _closure1_slot2;
                _fun46723_ip = 301;
                continue _fun46723;
            case 295:
                var4 = var2.info;
            case 301:
                var0.info = var4;
                if (var3) {
                    _fun46723_ip = 315;
                    continue _fun46723
                }
            case 309:
                var4 = _closure1_slot2;
                _fun46723_ip = 321;
                continue _fun46723;
            case 315:
                var4 = var2.verbose;
            case 321:
                var0.verbose = var4;
                if (var3) {
                    _fun46723_ip = 335;
                    continue _fun46723
                }
            case 329:
                var1 = _closure1_slot2;
                _fun46723_ip = 341;
                continue _fun46723;
            case 335:
                var1 = var2.trace;
            case 341:
                var0.trace = var1;
                return var0;
        }
    };
    var2.getQuestLogger = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [483, 3106, 3, 2]);