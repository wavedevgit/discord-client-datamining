// modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = function arg0() {
        _fun92582: for (var _fun92582_ip = 0;;) switch (_fun92582_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.messageId;
                var6 = var0.presenceActivity;
                var5 = var0.application;
                var2 = _closure1_slot5;
                var1 = var2.getCoverImageURL;
                var0 = {};
                var0.messageId = var3;
                var2 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 !== var2)) {
                    _fun92582_ip = 226;
                    continue _fun92582
                }
            case 52:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var0 = 2;
                var0 = var4[var0];
                var9 = undefined;
                var0 = var3.bind(var9)(var0);
                var3 = var0.bind(var9)();
                var0 = 600;
                var4 = var0 * var3;
                var0 = {};
                var0.cachedImageURL = var2;
                var8 = var1 == var6;
                var3 = undefined;
                if (var8) {
                    _fun92582_ip = 125;
                    continue _fun92582
                }
            case 104:
                var8 = var6.assets;
                var10 = var1 == var8;
                var3 = undefined;
                if (var10) {
                    _fun92582_ip = 125;
                    continue _fun92582
                }
            case 119:
                var3 = var8.invite_cover_image;
            case 125:
                var8 = var1 != var3;
                var3 = null;
                if (!var8) {
                    _fun92582_ip = 185;
                    continue _fun92582
                }
            case 134:
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var7 = 3;
                var7 = var10[var7];
                var9 = var8.bind(var9)(var7);
                var8 = var9.getAssetImage;
                var7 = var6.application_id;
                var6 = var6.assets;
                var6 = var6.invite_cover_image;
                var3 = var8.bind(var9)(var7, var6, var4);
            case 185:
                if (!(var1 != var3)) {
                    _fun92582_ip = 192;
                    continue _fun92582
                }
            case 189:
                var2 = var3;
            case 192:
                if (!(var1 == var2)) {
                    _fun92582_ip = 207;
                    continue _fun92582
                }
            case 196:
                var3 = var5.getCoverImageURL;
                var2 = var3.bind(var5)(var4);
            case 207:
                var3 = var1 != var2;
                var1 = null;
                if (!var3) {
                    _fun92582_ip = 219;
                    continue _fun92582
                }
            case 216:
                var1 = var2;
            case 219:
                var0.imageURL = var1;
                return var0;
            case 226:
                var0 = {
                    'cachedImageURL': null,
                    'imageURL': null
                };
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/usePresenceActivityInviteCoverImageURL.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var5 = var0.messageId;
        var _closure2_slot0 = var5;
        var8 = var0.presenceActivity;
        var _closure2_slot1 = var8;
        var0 = var0.application;
        var _closure2_slot2 = var0;
        var6 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var6.bind(var3)(var4);
        var6 = var7.useStateFromStoresObject;
        var3 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(3);
        var3[0] = var5;
        var3[1] = var8;
        var3[2] = var0;
        var0 = function() { // Environment: var1
            var2 = _closure1_slot6;
            var1 = {};
            var3 = _closure2_slot0;
            var1.messageId = var3;
            var3 = _closure2_slot1;
            var1.presenceActivity = var3;
            var0 = _closure2_slot2;
            var1.application = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var6.bind(var7)(var4, var0, var3);
        var6 = var0.cachedImageURL;
        var _closure2_slot3 = var6;
        var0 = var0.imageURL;
        var _closure2_slot4 = var0;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(3);
        var2[0] = var6;
        var2[1] = var0;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun92585: for (var _fun92585_ip = 0;;) switch (_fun92585_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot4;
                    if (!(var1 !== var0)) {
                        _fun92585_ip = 70;
                        continue _fun92585
                    }
                case 15:
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.setCoverImageURL;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.messageId = var4;
                    var3 = _closure2_slot4;
                    var0.coverImageURL = var3;
                    var0 = var1.bind(var2)(var0);
                case 70:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.usePresenceActivityInviteCoverImageURL = var3;
    var1 = function(arg0) { // Environment: var1
        _fun92586: for (var _fun92586_ip = 0;;) switch (_fun92586_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.messageId;
                var5 = var0.presenceActivity;
                var3 = var0.application;
                var2 = _closure1_slot6;
                var0 = {};
                var0.messageId = var4;
                var0.presenceActivity = var5;
                var0.application = var3;
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var2 = var0.cachedImageURL;
                var0 = var0.imageURL;
                if (!(var2 !== var0)) {
                    _fun92586_ip = 106;
                    continue _fun92586
                }
            case 64:
                var2 = _closure1_slot2;
                var5 = _closure1_slot3;
                var1 = 5;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.setCoverImageURL;
                var1 = {};
                var1.messageId = var4;
                var1.coverImageURL = var0;
                var1 = var2.bind(var3)(var1);
            case 106:
                return var0;
        }
    };
    var2.getPresenceActivityInviteCoverImageURL = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 12103, 1586, 5658, 566, 12104, 2]);