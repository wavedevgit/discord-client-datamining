// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function(arg0) { // Original name: getStatics, environment: var1
        _fun12388: for (var _fun12388_ip = 0;;) switch (_fun12388_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isMemo;
                var2 = var2.bind(var3)(var0);
                if (var2) {
                    _fun12388_ip = 64;
                    continue _fun12388
                }
            case 41:
                var2 = _closure1_slot5;
                var0 = var0.$$typeof;
                var0 = var2[var0];
                if (var0) {
                    _fun12388_ip = 62;
                    continue _fun12388
                }
            case 58:
                var0 = _closure1_slot2;
            case 62:
                _fun12388_ip = 68;
                continue _fun12388;
            case 64:
                var0 = _closure1_slot4;
            case 68:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = {
        'childContextTypes': true,
        'contextType': true,
        'contextTypes': true,
        'defaultProps': true,
        'displayName': true,
        'getDefaultProps': true,
        'getDerivedStateFromError': true,
        'getDerivedStateFromProps': true,
        'mixins': true,
        'propTypes': true,
        'type': true
    };
    var _closure1_slot2 = var0;
    var0 = {
        'name': true,
        'length': true,
        'prototype': true,
        'caller': true,
        'callee': true,
        'arguments': true,
        'arity': true
    };
    var _closure1_slot3 = var0;
    var4 = {
        '$$typeof': true,
        'compare': true,
        'defaultProps': true,
        'displayName': true,
        'propTypes': true,
        'type': true
    };
    var _closure1_slot4 = var4;
    var3 = {};
    var _closure1_slot5 = var3;
    var2 = 0;
    var7 = var6[var2];
    var0 = undefined;
    var7 = var5.bind(var0)(var7);
    var8 = var7.ForwardRef;
    var7 = {
        '$$typeof': true,
        'render': true,
        'defaultProps': true,
        'displayName': true,
        'propTypes': true
    };
    var3[var8] = var7;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var2.Memo;
    var3[var2] = var4;
    var2 = global;
    var3 = var2.Object;
    var3 = var3.defineProperty;
    var _closure1_slot6 = var3;
    var3 = var2.Object;
    var3 = var3.getOwnPropertyNames;
    var _closure1_slot7 = var3;
    var3 = var2.Object;
    var3 = var3.getOwnPropertySymbols;
    var _closure1_slot8 = var3;
    var3 = var2.Object;
    var3 = var3.getOwnPropertyDescriptor;
    var _closure1_slot9 = var3;
    var3 = var2.Object;
    var3 = var3.getPrototypeOf;
    var _closure1_slot10 = var3;
    var2 = var2.Object;
    var2 = var2.prototype;
    var _closure1_slot11 = var2;
    var2 = function(arg0, arg1, arg2) { // Original name: hoistNonReactStatics, environment: var1
        _fun12389: for (var _fun12389_ip = 0;;) switch (_fun12389_ip) {
            case 0:
                var1 = arg1;
                var11 = arg2;
                var0 = arg0;
                var8 = var1;
                var7 = undefined;
                var9 = undefined;
                var10 = undefined;
                var2 = 'string';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun12389_ip = 272;
                    continue _fun12389
                }
            case 32:
                var1 = _closure1_slot11;
                if (!var1) {
                    _fun12389_ip = 85;
                    continue _fun12389
                }
            case 42:
                var2 = _closure1_slot10;
                var1 = var8;
                var3 = var2.bind(var7)(var1);
                var1 = var3;
                if (!var1) {
                    _fun12389_ip = 68;
                    continue _fun12389
                }
            case 60:
                var2 = _closure1_slot11;
                var1 = var3 !== var2;
            case 68:
                if (!var1) {
                    _fun12389_ip = 85;
                    continue _fun12389
                }
            case 71:
                var2 = _closure1_slot13;
                var1 = var0;
                var1 = var2.bind(var7)(var1, var3, var11);
            case 85:
                var2 = _closure1_slot7;
                var1 = var8;
                var3 = var2.bind(var7)(var1);
                var1 = _closure1_slot8;
                var5 = var3;
                if (!var1) {
                    _fun12389_ip = 129;
                    continue _fun12389
                }
            case 107:
                var2 = var3.concat;
                var4 = _closure1_slot8;
                var1 = var8;
                var1 = var4.bind(var7)(var1);
                var5 = var2.bind(var3)(var1);
            case 129:
                var2 = _closure1_slot12;
                var1 = var0;
                var4 = var2.bind(var7)(var1);
                var1 = var8;
                var3 = var2.bind(var7)(var1);
                var1 = var5.length;
                var2 = 0;
                var1 = var2 < var1;
                if (!var1) {
                    _fun12389_ip = 272;
                    continue _fun12389
                }
            case 163:
                var12 = var5[var2];
                var9 = var12;
                var1 = _closure1_slot3;
                var1 = var1[var12];
                if (var1) {
                    _fun12389_ip = 260;
                    continue _fun12389
                }
            case 181:
                if (!var11) {
                    _fun12389_ip = 194;
                    continue _fun12389
                }
            case 184:
                var1 = var9;
                var1 = var11[var1];
                if (var1) {
                    _fun12389_ip = 260;
                    continue _fun12389
                }
            case 194:
                if (!var3) {
                    _fun12389_ip = 207;
                    continue _fun12389
                }
            case 197:
                var1 = var9;
                var1 = var3[var1];
                if (var1) {
                    _fun12389_ip = 260;
                    continue _fun12389
                }
            case 207:
                if (!var4) {
                    _fun12389_ip = 220;
                    continue _fun12389
                }
            case 210:
                var1 = var9;
                var1 = var4[var1];
                if (var1) {
                    _fun12389_ip = 260;
                    continue _fun12389
                }
            case 220:
                var13 = _closure1_slot9;
                var12 = var8;
                var1 = var9;
                var10 = var13.bind(var7)(var12, var1);
            case 236: // try_start_0
                var14 = _closure1_slot6;
                var13 = var0;
                var12 = var9;
                var1 = var10;
                var1 = var14.bind(var7)(var13, var12, var1);
            case 256: // try_end0
                _fun12389_ip = 260;
                continue _fun12389;
            case 258: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 260:
                var2 = var2 + 1;
                var1 = var5.length;
                if (var2 < var1) {
                    _fun12389_ip = 163;
                    continue _fun12389
                }
            case 272:
                return var0;
        }
    };
    var _closure1_slot13 = var2;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1138]);