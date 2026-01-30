// modules/activities/utils/ActivityFlagUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: _computeActivityPartyPrivacyFlags, environment: var1
        _fun50417: for (var _fun50417_ip = 0;;) switch (_fun50417_ip) {
            case 0:
                var4 = arg0;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 1;
                var2 = var6[var0];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var7 = var2.AllowActivityPartyPrivacyFriends;
                var2 = var7.getSetting;
                var2 = var2.bind(var7)();
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var3 = var0.AllowActivityPartyPrivacyVoiceChannel;
                var0 = var3.getSetting;
                var0 = var0.bind(var3)();
                var3 = _closure1_slot3;
                var3 = var3.PARTY_PRIVACY_FRIENDS;
                if (var2) {
                    _fun50417_ip = 91;
                    continue _fun50417
                }
            case 82:
                var2 = ~var3;
                var2 = var4 & var2;
                _fun50417_ip = 95;
                continue _fun50417;
            case 91:
                var2 = var4 | var3;
            case 95:
                var1 = _closure1_slot3;
                var1 = var1.PARTY_PRIVACY_VOICE_CHANNEL;
                if (var0) {
                    _fun50417_ip = 117;
                    continue _fun50417
                }
            case 108:
                var0 = ~var1;
                var0 = var2 & var0;
                _fun50417_ip = 121;
                continue _fun50417;
            case 117:
                var0 = var2 | var1;
            case 121:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityFlags;
    var _closure1_slot3 = var6;
    var3 = var3.ActivityPartyPrivacy;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/ActivityFlagUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: computeActivityFlags, environment: var1
        _fun50418: for (var _fun50418_ip = 0;;) switch (_fun50418_ip) {
            case 0:
                var4 = arguments[1];
                var0 = arguments[2];
                var1 = arguments[3];
                var2 = arguments[4];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun50418_ip = 20;
                    continue _fun50418
                }
            case 18:
                var4 = false;
            case 20:
                if (!(var0 === var3)) {
                    _fun50418_ip = 26;
                    continue _fun50418
                }
            case 24:
                var0 = false;
            case 26:
                if (!(var1 === var3)) {
                    _fun50418_ip = 32;
                    continue _fun50418
                }
            case 30:
                var1 = false;
            case 32:
                if (!(var2 === var3)) {
                    _fun50418_ip = 49;
                    continue _fun50418
                }
            case 36:
                var5 = _closure1_slot4;
                var2 = var5.PRIVATE;
            case 49:
                var5 = arg0;
                var5 = var5.secrets;
                var6 = 0;
                if (!var4) {
                    _fun50418_ip = 79;
                    continue _fun50418
                }
            case 63:
                var4 = _closure1_slot3;
                var4 = var4.INSTANCE;
                var6 = var4 | 0;
            case 79:
                var7 = null;
                var8 = var7 == var5;
                var4 = undefined;
                if (var8) {
                    _fun50418_ip = 95;
                    continue _fun50418
                }
            case 90:
                var4 = var5.join;
            case 95:
                var5 = var6;
                if (!(var7 != var4)) {
                    _fun50418_ip = 119;
                    continue _fun50418
                }
            case 102:
                var4 = _closure1_slot3;
                var4 = var4.JOIN;
                var5 = var6 | var4;
            case 119:
                var4 = var5;
                if (!var1) {
                    _fun50418_ip = 142;
                    continue _fun50418
                }
            case 125:
                var1 = _closure1_slot3;
                var1 = var1.CONTEXTLESS;
                var4 = var5 | var1;
            case 142:
                if (var0) {
                    _fun50418_ip = 228;
                    continue _fun50418
                }
            case 148:
                var0 = _closure1_slot4;
                var0 = var0.PUBLIC;
                var2 = var2 === var0;
                if (var2) {
                    _fun50418_ip = 207;
                    continue _fun50418
                }
            case 165:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 2;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var6 = var0.Storage;
                var5 = var6.get;
                var0 = 'ACTIVITIES_FORCE_PUBLIC';
                var2 = var5.bind(var6)(var0);
            case 207:
                var0 = var4;
                if (!var2) {
                    _fun50418_ip = 226;
                    continue _fun50418
                }
            case 213:
                var2 = _closure1_slot5;
                var2 = var2.bind(var3)(var4);
                var0 = var4 | var2;
            case 226:
                _fun50418_ip = 255;
                continue _fun50418;
            case 228:
                var2 = _closure1_slot3;
                var2 = var2.EMBEDDED;
                var2 = var4 | var2;
                var1 = _closure1_slot5;
                var1 = var1.bind(var3)(var2);
                var0 = var2 | var1;
            case 255:
                return var0;
        }
    };
    var2.computeActivityFlags = var3;
    var1 = function(arg0) { // Original name: isContextlessEmbeddedActivity, environment: var1
        _fun50419: for (var _fun50419_ip = 0;;) switch (_fun50419_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var6 = var4.bind(var2)(var0);
                var5 = var6.hasFlag;
                var4 = null;
                var7 = var4 == var3;
                var0 = undefined;
                if (var7) {
                    _fun50419_ip = 50;
                    continue _fun50419
                }
            case 45:
                var0 = var3.flags;
            case 50:
                var7 = var4 != var0;
                var4 = 0;
                if (!var7) {
                    _fun50419_ip = 62;
                    continue _fun50419
                }
            case 59:
                var4 = var0;
            case 62:
                var0 = _closure1_slot3;
                var0 = var0.CONTEXTLESS;
                var0 = var5.bind(var6)(var4, var0);
                if (!var0) {
                    _fun50419_ip = 106;
                    continue _fun50419
                }
            case 81:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var0 = var1.bind(var2)(var3);
            case 106:
                return var0;
        }
    };
    var2.isContextlessEmbeddedActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1348, 587, 1384, 5631, 2]);