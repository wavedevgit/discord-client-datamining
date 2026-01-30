// modules/activities/utils/useRefocusOrLaunchActivity.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FrameLayoutModes;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/useRefocusOrLaunchActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useRefocusOrLaunchActivity, environment: var1
        var1 = arg0;
        var9 = var1.applicationId;
        var _closure2_slot0 = var9;
        var11 = var1.analyticsLocations;
        var _closure2_slot1 = var11;
        var4 = var1.runBeforeLaunchAttempt;
        var _closure2_slot2 = var4;
        var5 = var1.runAfterLaunchAttempt;
        var _closure2_slot3 = var5;
        var3 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 5;
        var2 = var8[var2];
        var12 = undefined;
        var6 = var3.bind(var12)(var2);
        var2 = var6.useApplication;
        var2 = var2.bind(var6)(var9);
        var10 = var2.data;
        var _closure2_slot4 = var10;
        var2 = 6;
        var6 = var8[var2];
        var14 = var3.bind(var12)(var6);
        var13 = var14.useStateFromStores;
        var6 = _closure1_slot6;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.getCurrentEmbeddedActivity;
            var0 = var0.bind(var1)();
            return var0;
        };
        var7 = var13.bind(var14)(var7, var6);
        var _closure2_slot5 = var7;
        var2 = var8[var2];
        var14 = var3.bind(var12)(var2);
        var13 = var14.useStateFromStores;
        var2 = _closure1_slot5;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot5;
            var0 = var1.getConnectedFrame;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var13.bind(var14)(var6, var2);
        var _closure2_slot6 = var6;
        var2 = 7;
        var2 = var8[var2];
        var3 = var3.bind(var12)(var2);
        var2 = var3.useCanLaunchFrame;
        var8 = var2.bind(var3)(var10);
        var _closure2_slot7 = var8;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = _closure1_slot3;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun93430: for (var _fun93430_ip = 0;;) switch (_fun93430_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93430_ip = 511;
                            continue _fun93430
                        }
                    case 10:
                        var1 = undefined;
                        var3 = undefined;
                        var8 = undefined;
                        var2 = _closure2_slot0;
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun93430_ip = 508;
                            continue _fun93430
                        }
                    case 32:
                        var2 = _closure2_slot4;
                        if (!(var4 != var2)) {
                            _fun93430_ip = 508;
                            continue _fun93430
                        }
                    case 43:
                        var2 = _closure2_slot5;
                        var2 = var4 != var2;
                        if (!var2) {
                            _fun93430_ip = 71;
                            continue _fun93430
                        }
                    case 54:
                        var5 = _closure2_slot5;
                        var7 = var5.applicationId;
                        var5 = _closure2_slot0;
                        var2 = var7 === var5;
                    case 71:
                        var5 = _closure2_slot6;
                        if (!(var4 != var5)) {
                            _fun93430_ip = 99;
                            continue _fun93430
                        }
                    case 79:
                        var5 = _closure2_slot6;
                        var7 = var5.applicationId;
                        var5 = _closure2_slot0;
                        if (!(var7 !== var5)) {
                            _fun93430_ip = 444;
                            continue _fun93430
                        }
                    case 99:
                        if (var2) {
                            _fun93430_ip = 386;
                            continue _fun93430
                        }
                    case 105:
                        var2 = _closure2_slot2;
                        if (!(var4 != var2)) {
                            _fun93430_ip = 121;
                            continue _fun93430
                        }
                    case 113:
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var1)();
                    case 121: // try_start_0
                        var2 = _closure2_slot7;
                        if (var2) {
                            _fun93430_ip = 304;
                            continue _fun93430
                        }
                    case 131:
                        var2 = _closure2_slot4;
                        var5 = var4 == var2;
                        var2 = undefined;
                        if (var5) {
                            _fun93430_ip = 171;
                            continue _fun93430
                        }
                    case 144:
                        var5 = _closure2_slot4;
                        var5 = var5.bot;
                        var3 = var5;
                        var5 = var4 == var5;
                        var2 = undefined;
                        if (var5) {
                            _fun93430_ip = 171;
                            continue _fun93430
                        }
                    case 166:
                        var2 = var3.id;
                    case 171:
                        if (!(var4 != var2)) {
                            _fun93430_ip = 358;
                            continue _fun93430
                        }
                    case 178:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 10;
                        var2 = var5[var2];
                        var5 = var3.bind(var1)(var2);
                        var3 = var5.launchActivityInBotDM;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var2.appId = var7;
                        var7 = _closure2_slot4;
                        var9 = var4 == var7;
                        var7 = undefined;
                        if (var9) {
                            _fun93430_ip = 258;
                            continue _fun93430
                        }
                    case 231:
                        var9 = _closure2_slot4;
                        var9 = var9.bot;
                        var8 = var9;
                        var9 = var4 == var9;
                        var7 = undefined;
                        if (var9) {
                            _fun93430_ip = 258;
                            continue _fun93430
                        }
                    case 253:
                        var7 = var8.id;
                    case 258:
                        var2.botId = var7;
                        var7 = _closure2_slot1;
                        if (!(var4 == var7)) {
                            _fun93430_ip = 277;
                            continue _fun93430
                        }
                    case 271:
                        var7 = new Array(0);
                        _fun93430_ip = 281;
                        continue _fun93430;
                    case 277:
                        var7 = _closure2_slot1;
                    case 281:
                        var2.analyticsLocations = var7;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 295);
                    case 293:
                        return var2;
                    case 295:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (!var3) {
                            _fun93430_ip = 358;
                            continue _fun93430
                        }
                    case 301: // try_end0
                        return var2;
                    case 304: // try_start_1
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 8;
                        var2 = var5[var2];
                        var5 = var3.bind(var1)(var2);
                        var3 = var5.launchFrame;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var2.applicationId = var7;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 352);
                    case 350:
                        return var2;
                    case 352:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun93430_ip = 360;
                            continue _fun93430
                        }
                    case 358: // try_end1
                        _fun93430_ip = 365;
                        continue _fun93430;
                    case 360:
                        return var2;
                    case 363: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                    case 365:
                        var2 = _closure2_slot3;
                        if (!(var4 != var2)) {
                            _fun93430_ip = 508;
                            continue _fun93430
                        }
                    case 376:
                        var2 = _closure2_slot3;
                        var2 = var2.bind(var1)();
                        _fun93430_ip = 508;
                        continue _fun93430;
                    case 386:
                        var2 = _closure2_slot5;
                        var3 = var2.location;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 9;
                        var2 = var7[var2];
                        var2 = var5.bind(var1)(var2);
                        var5 = 'guild_id';
                        var5 = var5 in var3;
                        var4 = null;
                        if (!var5) {
                            _fun93430_ip = 436;
                            continue _fun93430
                        }
                    case 431:
                        var4 = var3.guild_id;
                    case 436:
                        var2 = var2.bind(var1)(var4, var3);
                        _fun93430_ip = 508;
                        continue _fun93430;
                    case 444:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 8;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.updateFrameLayoutMode;
                        var2 = {};
                        var6 = _closure2_slot6;
                        var6 = var6.applicationId;
                        var2.applicationId = var6;
                        var5 = _closure1_slot7;
                        var5 = var5.FOCUSED;
                        var2.layoutMode = var5;
                        var2 = var3.bind(var4)(var2);
                    case 508:
                        return var1;
                    case 511:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var1.bind(var12)(var0);
        var0 = new Array(8);
        var0[0] = var11;
        var0[1] = var10;
        var0[2] = var9;
        var0[3] = var8;
        var0[4] = var7;
        var0[5] = var6;
        var0[6] = var5;
        var0[7] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 7879, 1371, 7880, 5305, 566, 4634, 7901, 7928, 10672, 2]);