// modules/activity_status/native/PresenceActivityStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var6 = var3.Fragment;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activity_status/native/PresenceActivityStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62099: for (var _fun62099_ip = 0;;) switch (_fun62099_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.activity;
                var13 = var1.iconStyle;
                var11 = var1.textStyle;
                var10 = var1.maxFontSizeMultiplier;
                var4 = var1.hideIcon;
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun62099_ip = 41;
                    continue _fun62099
                }
            case 39:
                var4 = false;
            case 41:
                var5 = var1.hideText;
                if (!(var5 === var3)) {
                    _fun62099_ip = 53;
                    continue _fun62099
                }
            case 51:
                var5 = false;
            case 53:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var7 = var2.bind(var3)(var1);
                var2 = var7.useActivityStatusDescriptiveTextExperiment;
                var1 = {};
                var8 = 'PresenceActivityStatus';
                var1.location = var8;
                var1 = var2.bind(var7)(var1);
                var8 = var1.descriptiveTextEnabled;
                if (!var4) {
                    _fun62099_ip = 114;
                    continue _fun62099
                }
            case 108:
                if (var5) {
                    _fun62099_ip = 549;
                    continue _fun62099
                }
            case 114:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var0, var8);
                var9 = var1.text;
                var1 = 3;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)(var0);
                if (var1) {
                    _fun62099_ip = 380;
                    continue _fun62099
                }
            case 168:
                var2 = var0.type;
                var1 = _closure1_slot3;
                var1 = var1.PLAYING;
                if (!(var2 !== var1)) {
                    _fun62099_ip = 352;
                    continue _fun62099
                }
            case 190:
                var2 = var0.type;
                var1 = _closure1_slot3;
                var1 = var1.LISTENING;
                if (!(var2 !== var1)) {
                    _fun62099_ip = 324;
                    continue _fun62099
                }
            case 209:
                var2 = var0.type;
                var1 = _closure1_slot3;
                var1 = var1.WATCHING;
                if (!(var2 !== var1)) {
                    _fun62099_ip = 296;
                    continue _fun62099
                }
            case 228:
                var2 = var0.type;
                var1 = _closure1_slot3;
                var1 = var1.STREAMING;
                if (!(var2 !== var1)) {
                    _fun62099_ip = 296;
                    continue _fun62099
                }
            case 247:
                var1 = var0.type;
                var0 = _closure1_slot3;
                var0 = var0.COMPETING;
                var14 = null;
                if (!(var1 === var0)) {
                    _fun62099_ip = 294;
                    continue _fun62099
                }
            case 268:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var14 = var0.GameControllerIcon;
            case 294:
                _fun62099_ip = 322;
                continue _fun62099;
            case 296:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var14 = var0.TvIcon;
            case 322:
                _fun62099_ip = 350;
                continue _fun62099;
            case 324:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var14 = var0.MusicIcon;
            case 350:
                _fun62099_ip = 378;
                continue _fun62099;
            case 352:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var14 = var0.GameControllerIcon;
            case 378:
                _fun62099_ip = 409;
                continue _fun62099;
            case 380:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.AppsIcon;
                var14 = var0;
            case 409:
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var0 = {};
                var7 = !var4;
                if (!var7) {
                    _fun62099_ip = 431;
                    continue _fun62099
                }
            case 425:
                var4 = null;
                var7 = var4 != var14;
            case 431:
                if (!var7) {
                    _fun62099_ip = 474;
                    continue _fun62099
                }
            case 434:
                var12 = _closure1_slot4;
                var8 = _closure1_slot1;
                var15 = _closure1_slot2;
                var4 = 10;
                var4 = var15[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var4.icon = var14;
                var4.style = var13;
                var7 = var12.bind(var3)(var8, var4);
            case 474:
                var4 = new Array(2);
                var4[0] = var7;
                var5 = !var5;
                if (!var5) {
                    _fun62099_ip = 533;
                    continue _fun62099
                }
            case 488:
                var8 = _closure1_slot4;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 11;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.style = var11;
                var6.maxFontSizeMultiplier = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 533:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 549:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 5670, 5327, 7773, 7774, 7768, 7776, 7777, 7767, 7770, 2]);