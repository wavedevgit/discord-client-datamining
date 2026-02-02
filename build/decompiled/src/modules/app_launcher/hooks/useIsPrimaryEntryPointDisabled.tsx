// modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107957: for (var _fun107957_ip = 0;;) switch (_fun107957_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.context;
                var9 = var2.application;
                var10 = var2.activityAction;
                var6 = undefined;
                var _closure2_slot0 = var6;
                var3 = var0.type;
                var2 = 'channel';
                var8 = undefined;
                if (!(var2 === var3)) {
                    _fun107957_ip = 47;
                    continue _fun107957
                }
            case 42:
                var8 = var0.channel;
            case 47:
                _closure2_slot0 = var8;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 3;
                var4 = var2[var4];
                var7 = var3.bind(var6)(var4);
                var5 = var7.useStateFromStores;
                var11 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var11;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot4;
                    var2 = var3.can;
                    var0 = _closure1_slot5;
                    var1 = var0.USE_EMBEDDED_ACTIVITIES;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var5.bind(var7)(var4, var1);
                var12 = 4;
                var2 = var2[var12];
                var5 = var3.bind(var6)(var2);
                var3 = var5.useEmbeddedActivityLaunchability;
                var4 = null;
                var7 = var4 == var8;
                var2 = undefined;
                if (var7) {
                    _fun107957_ip = 138;
                    continue _fun107957
                }
            case 133:
                var2 = var8.id;
            case 138:
                var2 = var3.bind(var5)(var2);
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = 5;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.ActivityAction;
                var11 = var3.LEAVE;
                var5 = false;
                if (!(var11 !== var10)) {
                    _fun107957_ip = 420;
                    continue _fun107957
                }
            case 184:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var13.bind(var6)(var11);
                var11 = var11.ActivityAction;
                var11 = var11.START;
                if (!(var11 !== var10)) {
                    _fun107957_ip = 317;
                    continue _fun107957
                }
            case 217:
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var7];
                var11 = var13.bind(var6)(var11);
                var11 = var11.ActivityAction;
                var11 = var11.JOIN;
                var5 = false;
                if (!(var11 === var10)) {
                    _fun107957_ip = 420;
                    continue _fun107957
                }
            case 255:
                if (!(var4 != var8)) {
                    _fun107957_ip = 272;
                    continue _fun107957
                }
            case 259:
                var11 = var8.isGuildVoice;
                var11 = var11.bind(var8)();
                if (var11) {
                    _fun107957_ip = 312;
                    continue _fun107957
                }
            case 272:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 6;
                var11 = var14[var11];
                var13 = var13.bind(var6)(var11);
                var11 = var13.isActivitiesInTextEnabled;
                var11 = var11.bind(var13)(var8);
                var5 = false;
                if (var11) {
                    _fun107957_ip = 420;
                    continue _fun107957
                }
            case 308:
                var5 = true;
                _fun107957_ip = 420;
                continue _fun107957;
            case 312:
                var5 = !var1;
                _fun107957_ip = 420;
                continue _fun107957;
            case 317:
                var1 = var4 == var8;
                var5 = false;
                if (var1) {
                    _fun107957_ip = 420;
                    continue _fun107957
                }
            case 326:
                if (!(var4 != var8)) {
                    _fun107957_ip = 343;
                    continue _fun107957
                }
            case 330:
                var1 = var8.isGuildVoice;
                var1 = var1.bind(var8)();
                if (var1) {
                    _fun107957_ip = 383;
                    continue _fun107957
                }
            case 343:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 6;
                var1 = var13[var1];
                var11 = var11.bind(var6)(var1);
                var1 = var11.isActivitiesInTextEnabled;
                var1 = var1.bind(var11)(var8);
                var5 = false;
                if (var1) {
                    _fun107957_ip = 420;
                    continue _fun107957
                }
            case 379:
                var5 = true;
                _fun107957_ip = 420;
                continue _fun107957;
            case 383:
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var11.bind(var6)(var1);
                var1 = var1.EmbeddedActivityLaunchability;
                var1 = var1.CAN_LAUNCH;
                var5 = false;
                if (!(var2 !== var1)) {
                    _fun107957_ip = 420;
                    continue _fun107957
                }
            case 418:
                var5 = true;
            case 420:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var2.bind(var6)(var1);
                var1 = var1.ActivityAction;
                var7 = var1.LEAVE;
                var1 = undefined;
                var2 = var5;
                if (!(var10 !== var7)) {
                    _fun107957_ip = 705;
                    continue _fun107957
                }
            case 461:
                var7 = _closure1_slot3;
                var7 = var9 instanceof var7;
                if (var7) {
                    _fun107957_ip = 480;
                    continue _fun107957
                }
            case 472:
                var7 = var9.embedded_activity_config;
                _fun107957_ip = 486;
                continue _fun107957;
            case 480:
                var7 = var9.embeddedActivityConfig;
            case 486:
                var10 = _closure1_slot1;
                var12 = _closure1_slot2;
                var9 = 7;
                var9 = var12[var9];
                var10 = var10.bind(var6)(var9);
                var11 = _closure1_slot0;
                var9 = 8;
                var9 = var12[var9];
                var11 = var11.bind(var6)(var9);
                var9 = var11.getOS;
                var9 = var9.bind(var11)();
                var10 = var10.bind(var6)(var9);
                if (!(var4 != var7)) {
                    _fun107957_ip = 621;
                    continue _fun107957
                }
            case 541:
                var9 = var7.supported_platforms;
                var7 = var9.includes;
                var7 = var7.bind(var9)(var10);
                if (var7) {
                    _fun107957_ip = 621;
                    continue _fun107957
                }
            case 560:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 9;
                var9 = var12[var7];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var7 = var12[var7];
                var7 = var11.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7.z2YTgJ;
                var1 = var9.bind(var10)(var7);
                var2 = false;
                _fun107957_ip = 705;
                continue _fun107957;
            case 621:
                var3 = var4 != var8;
                if (!var3) {
                    _fun107957_ip = 638;
                    continue _fun107957
                }
            case 628:
                var7 = var8.isThread;
                var3 = var7.bind(var8)();
            case 638:
                var1 = undefined;
                var2 = var5;
                if (!var3) {
                    _fun107957_ip = 705;
                    continue _fun107957
                }
            case 646:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var5 = var9[var3];
                var5 = var8.bind(var6)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var3 = var9[var3];
                var3 = var8.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.ddSR3v;
                var1 = var5.bind(var7)(var3);
                var2 = true;
            case 705:
                var3 = var2;
                if (!var3) {
                    _fun107957_ip = 715;
                    continue _fun107957
                }
            case 711:
                var3 = var4 == var1;
            case 715:
                if (!var3) {
                    _fun107957_ip = 773;
                    continue _fun107957
                }
            case 718:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 9;
                var3 = var7[var0];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var0 = var7[var0];
                var0 = var5.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.f41E1g;
                var1 = var3.bind(var4)(var0);
            case 773:
                var0 = {};
                var0.disabled = var2;
                var0.reason = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3416, 3052, 483, 566, 7953, 13823, 6783, 7914, 478, 1234, 2]);