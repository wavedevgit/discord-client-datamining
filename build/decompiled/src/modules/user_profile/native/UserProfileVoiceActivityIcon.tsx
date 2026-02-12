// modules/user_profile/native/UserProfileVoiceActivityIcon.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileVoiceActivityIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68700: for (var _fun68700_ip = 0;;) switch (_fun68700_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.channel;
                var _closure2_slot0 = var5;
                var0 = null;
                var2 = Object.create(var0);
                var0 = 0;
                var2.channel = var0;
                var11 = {};
                var10 = var3;
                var9 = var2;
                var4 = copyDataProperties(var11, var10, var9);
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var2 = var3[var2];
                var3 = undefined;
                var7 = var6.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var8 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var1
                    _fun68701: for (var _fun68701_ip = 0;;) switch (_fun68701_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.isPrivate;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun68701_ip = 53;
                                continue _fun68701
                            }
                        case 20:
                            var4 = _closure1_slot3;
                            var3 = var4.can;
                            var2 = _closure1_slot4;
                            var2 = var2.CONNECT;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 53:
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var2, var1);
                var2 = var5.isDM;
                var2 = var2.bind(var5)();
                if (var2) {
                    _fun68700_ip = 404;
                    continue _fun68700
                }
            case 108:
                var2 = var5.isGroupDM;
                var2 = var2.bind(var5)();
                if (var2) {
                    _fun68700_ip = 404;
                    continue _fun68700
                }
            case 124:
                var2 = var5.isGuildStageVoice;
                var2 = var2.bind(var5)();
                var1 = !var1;
                if (var1) {
                    _fun68700_ip = 165;
                    continue _fun68700
                }
            case 140:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 6;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var1 = var6.bind(var3)(var5);
            case 165:
                if (!var2) {
                    _fun68700_ip = 174;
                    continue _fun68700
                }
            case 168:
                if (var1) {
                    _fun68700_ip = 354;
                    continue _fun68700
                }
            case 174:
                if (var2) {
                    _fun68700_ip = 304;
                    continue _fun68700
                }
            case 180:
                var2 = var5.isNSFW;
                var2 = var2.bind(var5)();
                var6 = _closure1_slot5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                if (var2) {
                    _fun68700_ip = 266;
                    continue _fun68700
                }
            case 205:
                if (var1) {
                    _fun68700_ip = 228;
                    continue _fun68700
                }
            case 208:
                var1 = 11;
                var1 = var7[var1];
                var1 = var5.bind(var3)(var1);
                var2 = var1.VoiceNormalIcon;
                _fun68700_ip = 246;
                continue _fun68700;
            case 228:
                var1 = 10;
                var1 = var7[var1];
                var1 = var5.bind(var3)(var1);
                var2 = var1.VoiceLockIcon;
            case 246:
                var1 = {};
                var11 = var1;
                var10 = var4;
                var8 = copyDataProperties(var11, var10);
                var1 = var6.bind(var3)(var2, var1);
                _fun68700_ip = 302;
                continue _fun68700;
            case 266:
                var2 = 9;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var5 = var2.VoiceWarningIcon;
                var2 = {};
                var11 = var2;
                var10 = var4;
                var7 = copyDataProperties(var11, var10);
                var1 = var6.bind(var3)(var5, var2);
            case 302:
                _fun68700_ip = 352;
                continue _fun68700;
            case 304:
                var6 = _closure1_slot5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var5 = var2.StageIcon;
                var2 = {};
                var11 = var2;
                var10 = var4;
                var7 = copyDataProperties(var11, var10);
                var1 = var6.bind(var3)(var5, var2);
            case 352:
                _fun68700_ip = 402;
                continue _fun68700;
            case 354:
                var6 = _closure1_slot5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var2 = var5.bind(var3)(var2);
                var5 = var2.StageLockIcon;
                var2 = {};
                var11 = var2;
                var10 = var4;
                var7 = copyDataProperties(var11, var10);
                var1 = var6.bind(var3)(var5, var2);
            case 402:
                return var1;
            case 404:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PhoneCallIcon;
                var0 = {};
                var11 = var0;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3093, 483, 33, 566, 7724, 4590, 4835, 4836, 4838, 4837, 4839, 2]);