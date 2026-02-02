// modules/applications/message_embed/utils/getPlayInContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/message_embed/utils/getPlayInContext.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun88754: for (var _fun88754_ip = 0;;) switch (_fun88754_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 2;
                var5 = var1[var6];
                var4 = undefined;
                var9 = var3.bind(var4)(var5);
                var8 = var9.useStateFromStores;
                var5 = _closure1_slot3;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var8.bind(var9)(var7, var5);
                var _closure2_slot1 = var8;
                var1 = var1[var6];
                var7 = var3.bind(var4)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot2;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    _fun88756: for (var _fun88756_ip = 0;;) switch (_fun88756_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun88756_ip = 76;
                                continue _fun88756
                            }
                        case 13:
                            var3 = _closure1_slot2;
                            var2 = var3.getEmbeddedActivitiesForChannel;
                            var1 = _closure2_slot1;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.applicationId;
                                var0 = _closure2_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var1);
                            var1 = var3.length;
                            var2 = 0;
                            var4 = var1 > var2;
                            var1 = undefined;
                            if (!var4) {
                                _fun88756_ip = 74;
                                continue _fun88756
                            }
                        case 70:
                            var1 = var3[var2];
                        case 74:
                            return var1;
                        case 76:
                            return var0;
                    }
                };
                var1 = var5.bind(var7)(var3, var1);
                var7 = null;
                var3 = var7 == var1;
                var5 = undefined;
                if (var3) {
                    _fun88754_ip = 124;
                    continue _fun88754
                }
            case 118:
                var5 = var1.compositeInstanceId;
            case 124:
                var9 = var7 == var1;
                var3 = undefined;
                if (var9) {
                    _fun88754_ip = 138;
                    continue _fun88754
                }
            case 133:
                var3 = var1.location;
            case 138:
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = var9[var6];
                var10 = var1.bind(var4)(var6);
                var6 = var10.useStateFromStores;
                var11 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var11;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot2;
                    var0 = var1.getCurrentEmbeddedActivity;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var6.bind(var10)(var2, var0);
                var0 = 3;
                var2 = var9[var0];
                var10 = var1.bind(var4)(var2);
                var2 = var10.useEmbeddedActivityLaunchability;
                var2 = var2.bind(var10)(var8);
                var0 = var9[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.EmbeddedActivityLaunchability;
                var1 = var0.CAN_LAUNCH;
                var0 = {};
                var0.currentChannelId = var8;
                var0.instanceId = var5;
                var0.instanceLocation = var3;
                var3 = var7 != var5;
                if (!var3) {
                    _fun88754_ip = 272;
                    continue _fun88754
                }
            case 253:
                var7 = var7 == var6;
                var4 = undefined;
                if (var7) {
                    _fun88754_ip = 268;
                    continue _fun88754
                }
            case 262:
                var4 = var6.compositeInstanceId;
            case 268:
                var3 = var4 === var5;
            case 272:
                var0.isCurrentlyInInstance = var3;
                var1 = var2 === var1;
                var0.canLaunchInChannel = var1;
                return var0;
        }
    };
    var2.usePlayInContext = var3;
    var1 = function arg0, arg1() {
        _fun88759: for (var _fun88759_ip = 0;;) switch (_fun88759_ip) {
            case 0:
                var8 = arg1;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var7 = null;
                if (!(var7 == var8)) {
                    _fun88759_ip = 35;
                    continue _fun88759
                }
            case 18:
                var1 = _closure1_slot3;
                var0 = var1.getChannelId;
                var8 = var0.bind(var1)();
            case 35:
                if (!(var7 != var8)) {
                    _fun88759_ip = 312;
                    continue _fun88759
                }
            case 42:
                if (!(var7 == var8)) {
                    _fun88759_ip = 85;
                    continue _fun88759
                }
            case 46:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.EmbeddedActivityLaunchability;
                var2 = var0.NO_CHANNEL;
                _fun88759_ip = 121;
                continue _fun88759;
            case 85:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.getEmbeddedActivityLaunchabilityForChannel;
                var2 = var0.bind(var1)(var8);
            case 121:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var1 = var1.EmbeddedActivityLaunchability;
                var1 = var1.CAN_LAUNCH;
                var6 = _closure1_slot2;
                var5 = var6.getEmbeddedActivitiesForChannel;
                var6 = var5.bind(var6)(var8);
                var5 = var6.filter;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var5.bind(var6)(var3);
                var6 = var5.length;
                var3 = 0;
                var9 = var6 > var3;
                var6 = undefined;
                if (!var9) {
                    _fun88759_ip = 210;
                    continue _fun88759
                }
            case 206:
                var6 = var5[var3];
            case 210:
                var3 = var7 == var6;
                var5 = undefined;
                if (var3) {
                    _fun88759_ip = 225;
                    continue _fun88759
                }
            case 219:
                var5 = var6.compositeInstanceId;
            case 225:
                var9 = var7 == var6;
                var3 = undefined;
                if (var9) {
                    _fun88759_ip = 239;
                    continue _fun88759
                }
            case 234:
                var3 = var6.location;
            case 239:
                var6 = _closure1_slot2;
                var0 = var6.getCurrentEmbeddedActivity;
                var6 = var0.bind(var6)();
                var0 = {};
                var0.currentChannelId = var8;
                var0.instanceId = var5;
                var0.instanceLocation = var3;
                var3 = var7 != var5;
                if (!var3) {
                    _fun88759_ip = 296;
                    continue _fun88759
                }
            case 277:
                var7 = var7 == var6;
                var4 = undefined;
                if (var7) {
                    _fun88759_ip = 292;
                    continue _fun88759
                }
            case 286:
                var4 = var6.compositeInstanceId;
            case 292:
                var3 = var4 === var5;
            case 296:
                var0.isCurrentlyInInstance = var3;
                var1 = var2 === var1;
                var0.canLaunchInChannel = var1;
                return var0;
            case 312:
                var0 = {
                    'currentChannelId': null,
                    'instanceId': null,
                    'instanceLocation': null,
                    'isCurrentlyInInstance': false,
                    'canLaunchInChannel': false
                };
                return var0;
        }
    };
    var2.getPlayInContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 1661, 566, 7953, 2]);