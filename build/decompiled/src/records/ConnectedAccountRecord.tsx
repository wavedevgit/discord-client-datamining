// records/ConnectedAccountRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun40797: for (var _fun40797_ip = 0;;) switch (_fun40797_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun40797_ip = 74;
                continue _fun40797;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
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
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun40801: for (var _fun40801_ip = 0;;) switch (_fun40801_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun40801_ip = 65;
                        continue _fun40801
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun40801_ip = 103;
                    continue _fun40801;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.type;
                    var0.type = var2;
                    var2 = var1.name;
                    var0.name = var2;
                    var2 = var1.revoked;
                    if (var2) {
                        _fun40801_ip = 153;
                        continue _fun40801
                    }
                case 151:
                    var2 = false;
                case 153:
                    var0.revoked = var2;
                    var2 = var1.integrations;
                    if (var2) {
                        _fun40801_ip = 172;
                        continue _fun40801
                    }
                case 168:
                    var2 = new Array(0);
                case 172:
                    var0.integrations = var2;
                    var2 = var1.visibility;
                    if (var2) {
                        _fun40801_ip = 189;
                        continue _fun40801
                    }
                case 187:
                    var2 = 0;
                case 189:
                    var0.visibility = var2;
                    var2 = var1.friend_sync;
                    if (var2) {
                        _fun40801_ip = 206;
                        continue _fun40801
                    }
                case 204:
                    var2 = false;
                case 206:
                    var0.friendSync = var2;
                    var2 = var1.show_activity;
                    if (var2) {
                        _fun40801_ip = 223;
                        continue _fun40801
                    }
                case 221:
                    var2 = false;
                case 223:
                    var0.showActivity = var2;
                    var2 = var1.verified;
                    if (var2) {
                        _fun40801_ip = 240;
                        continue _fun40801
                    }
                case 238:
                    var2 = false;
                case 240:
                    var0.verified = var2;
                    var2 = var1.access_token;
                    if (var2) {
                        _fun40801_ip = 257;
                        continue _fun40801
                    }
                case 255:
                    var2 = null;
                case 257:
                    var0.accessToken = var2;
                    var2 = var1.two_way_link;
                    if (var2) {
                        _fun40801_ip = 276;
                        continue _fun40801
                    }
                case 274:
                    var2 = false;
                case 276:
                    var0.twoWayLink = var2;
                    var2 = var1.metadata;
                    if (var2) {
                        _fun40801_ip = 293;
                        continue _fun40801
                    }
                case 291:
                    var2 = null;
                case 293:
                    var0.metadata = var2;
                    var1 = var1.metadata_visibility;
                    if (var1) {
                        _fun40801_ip = 310;
                        continue _fun40801
                    }
                case 308:
                    var1 = 0;
                case 310:
                    var0.metadataVisibility = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'toString';
        var4.key = var5;
        var0 = function() {
            var0 = this;
            var0 = var0.name;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 6;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/ConnectedAccountRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 2]);