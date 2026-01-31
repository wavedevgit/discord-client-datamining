// modules/activities/native/openActivityDMLauncher.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _openActivityDMLauncher, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun96621: for (var _fun96621_ip = 0;;) switch (_fun96621_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        var10 = arg1;
                        var7 = arguments[4];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun96621_ip = 501;
                            continue _fun96621
                        }
                    case 19:
                        var5 = undefined;
                        if (!(var7 === var5)) {
                            _fun96621_ip = 27;
                            continue _fun96621
                        }
                    case 25:
                        var7 = false;
                    case 27:
                        SaveGenerator(address = 31);
                    case 29:
                        return var5;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun96621_ip = 498;
                            continue _fun96621
                        }
                    case 40:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 2;
                        var2 = var4[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.fetchApplication;
                        var2 = var2.bind(var3)(var9);
                        SaveGenerator(address = 78);
                    case 76:
                        return var2;
                    case 78:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun96621_ip = 495;
                            continue _fun96621
                        }
                    case 87:
                        var3 = var2.bot;
                        var6 = null;
                        var4 = var6 == var3;
                        var11 = undefined;
                        if (var4) {
                            _fun96621_ip = 109;
                            continue _fun96621
                        }
                    case 104:
                        var11 = var3.id;
                    case 109:
                        if (!(var6 != var2)) {
                            _fun96621_ip = 486;
                            continue _fun96621
                        }
                    case 116:
                        if (!(var6 != var11)) {
                            _fun96621_ip = 486;
                            continue _fun96621
                        }
                    case 123:
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 3;
                        var3 = var8[var3];
                        var8 = var4.bind(var5)(var3);
                        var4 = var8.openPrivateChannel;
                        var3 = {};
                        var3.recipientIds = var11;
                        var3 = var4.bind(var8)(var3);
                        SaveGenerator(address = 165);
                    case 163:
                        return var3;
                    case 165:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun96621_ip = 492;
                            continue _fun96621
                        }
                    case 174:
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var4 = 4;
                        var4 = var11[var4];
                        var13 = var8.bind(var5)(var4);
                        var11 = var13.getCustomActivityLinkParams;
                        var8 = arg3;
                        var4 = arg2;
                        var4 = var11.bind(var13)(var9, var8, var4);
                        SaveGenerator(address = 217);
                    case 215:
                        return var4;
                    case 217:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun96621_ip = 489;
                            continue _fun96621
                        }
                    case 226:
                        var11 = var4.customId;
                        if (var7) {
                            _fun96621_ip = 368;
                            continue _fun96621
                        }
                    case 238:
                        var13 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var7 = 5;
                        var7 = var14[var7];
                        var8 = var13.bind(var5)(var7);
                        var7 = {};
                        var7.targetApplicationId = var9;
                        var9 = {};
                        var7.locationObject = var9;
                        var7.channelId = var3;
                        var9 = 6;
                        var9 = var14[var9];
                        var9 = var13.bind(var5)(var9);
                        var13 = var9.ACTIVITY_BOOKMARK;
                        var9 = new Array(1);
                        var9[0] = var13;
                        var7.analyticsLocations = var9;
                        var13 = _closure1_slot0;
                        var9 = 7;
                        var9 = var14[var9];
                        var9 = var13.bind(var5)(var9);
                        var9 = var9.CommandOrigin;
                        var9 = var9.ACTIVITY_BOOKMARK_EMBED;
                        var7.commandOrigin = var9;
                        var7.referrerId = var10;
                        var7.customId = var11;
                        var7 = var8.bind(var5)(var7);
                        SaveGenerator(address = 359);
                    case 357:
                        return var7;
                    case 359:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (!var8) {
                            _fun96621_ip = 486;
                            continue _fun96621
                        }
                    case 365:
                        return var7;
                    case 368:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var7 = 8;
                        var7 = var9[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.getBestActiveInput;
                        var8 = var7.bind(var8)();
                        if (!(var6 != var8)) {
                            _fun96621_ip = 486;
                            continue _fun96621
                        }
                    case 402:
                        var7 = var8.openCustomKeyboard;
                        var6 = {};
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var9 = 9;
                        var9 = var14[var9];
                        var9 = var13.bind(var5)(var9);
                        var9 = var9.KeyboardTypes;
                        var9 = var9.APP_LAUNCHER;
                        var6.type = var9;
                        var9 = {};
                        var9.application = var2;
                        var12 = _closure1_slot4;
                        var12 = var12.APPLICATION_VIEW;
                        var9.initialRouteName = var12;
                        var9.customId = var11;
                        var9.referrerId = var10;
                        var6.context = var9;
                        var6 = var7.bind(var8)(var6);
                    case 486:
                        return var5;
                    case 489:
                        return var4;
                    case 492:
                        return var3;
                    case 495:
                        return var2;
                    case 498:
                        return var1;
                    case 501:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot4 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/openActivityDMLauncher.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: openActivityDMLauncher, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1468, 5306, 3904, 12011, 7940, 5541, 4511, 3677, 1567, 2]);