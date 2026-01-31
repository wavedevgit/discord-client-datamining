// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var3 = function(arg0) { // Original name: filenameIsInApp, environment: var0
        _fun10146: for (var _fun10146_ip = 0;;) switch (_fun10146_ip) {
            case 0:
                var3 = arg0;
                var1 = undefined;
                var4 = undefined;
                var0 = arguments.length;
                var2 = 1;
                var0 = var0 > var2;
                if (!var0) {
                    _fun10146_ip = 28;
                    continue _fun10146
                }
            case 20:
                var5 = arguments[var2];
                var0 = var1 !== var5;
            case 28:
                if (!var0) {
                    _fun10146_ip = 35;
                    continue _fun10146
                }
            case 31:
                var0 = arguments[var2];
            case 35:
                if (var0) {
                    _fun10146_ip = 148;
                    continue _fun10146
                }
            case 38:
                var2 = var3;
                if (!var2) {
                    _fun10146_ip = 62;
                    continue _fun10146
                }
            case 44:
                var5 = var3.startsWith;
                var4 = '/';
                var4 = var5.bind(var3)(var4);
                var2 = !var4;
            case 62:
                if (!var2) {
                    _fun10146_ip = 93;
                    continue _fun10146
                }
            case 65:
                var5 = var3.match;
                var4 = /^[A-Z]:/;
                var4 = var5.bind(var3)(var4);
                var2 = !var4;
            case 93:
                if (!var2) {
                    _fun10146_ip = 114;
                    continue _fun10146
                }
            case 96:
                var5 = var3.startsWith;
                var4 = '.';
                var4 = var5.bind(var3)(var4);
                var2 = !var4;
            case 114:
                if (!var2) {
                    _fun10146_ip = 145;
                    continue _fun10146
                }
            case 117:
                var5 = var3.match;
                var4 = /^[a-zA-Z]([a-zA-Z0-9.\-+])*:\\/\\ //;
                var4 = var5.bind(var3)(var4);
                var2 = !var4;
            case 145:
                var0 = var2;
            case 148:
                var0 = !var0;
                if (!var0) {
                    _fun10146_ip = 158;
                    continue _fun10146
                }
            case 154:
                var0 = var1 !== var3;
            case 158:
                if (!var0) {
                    _fun10146_ip = 180;
                    continue _fun10146
                }
            case 161:
                var2 = var3.includes;
                var1 = 'node_modules/';
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 180:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var2 = function(arg0) { // Original name: node, environment: var0
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = /^\s*[-]{4,}$/;
        var _closure2_slot1 = var1;
        var1 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
        var _closure2_slot2 = var1;
        var1 = /at (?:async )?(.+?) \(data:(.*?),/;
        var _closure2_slot3 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun10148: for (var _fun10148_ip = 0;;) switch (_fun10148_ip) {
                case 0:
                    var3 = arg0;
                    var1 = var3.match;
                    var0 = _closure2_slot3;
                    var2 = var1.bind(var3)(var0);
                    if (var2) {
                        _fun10148_ip = 605;
                        continue _fun10148
                    }
                case 27:
                    var1 = var3.match;
                    var0 = _closure2_slot2;
                    var8 = var1.bind(var3)(var0);
                    if (var8) {
                        _fun10148_ip = 77;
                        continue _fun10148
                    }
                case 45:
                    var1 = var3.match;
                    var0 = _closure2_slot1;
                    var1 = var1.bind(var3)(var0);
                    var0 = undefined;
                    if (!var1) {
                        _fun10148_ip = 75;
                        continue _fun10148
                    }
                case 65:
                    var1 = {};
                    var1.filename = var3;
                    var0 = var1;
                case 75:
                    return var0;
                case 77:
                    var10 = 1;
                    var4 = var8[var10];
                    var5 = undefined;
                    var0 = undefined;
                    var1 = undefined;
                    var3 = undefined;
                    if (!var4) {
                        _fun10148_ip = 243;
                        continue _fun10148
                    }
                case 98:
                    var17 = var8[var10];
                    var4 = var17.lastIndexOf;
                    var9 = '.';
                    var4 = var4.bind(var17)(var9);
                    var6 = var4 - var10;
                    var6 = var17[var6];
                    var11 = var4;
                    if (!(var9 === var6)) {
                        _fun10148_ip = 135;
                        continue _fun10148
                    }
                case 132:
                    var11 = var4 - 1;
                case 135:
                    var16 = 0;
                    var12 = var11 > var16;
                    var9 = undefined;
                    var6 = undefined;
                    var4 = var17;
                    if (!var12) {
                        _fun10148_ip = 234;
                        continue _fun10148
                    }
                case 151:
                    var12 = var17.slice;
                    var15 = var12.bind(var17)(var16, var11);
                    var12 = var17.slice;
                    var11 = var11 + var10;
                    var12 = var12.bind(var17)(var11);
                    var13 = var15.indexOf;
                    var11 = '.Module';
                    var14 = var13.bind(var15)(var11);
                    var9 = var15;
                    var6 = var12;
                    var4 = var17;
                    if (!(var14 > var16)) {
                        _fun10148_ip = 234;
                        continue _fun10148
                    }
                case 206:
                    var13 = var17.slice;
                    var11 = var14 + var10;
                    var4 = var13.bind(var17)(var11);
                    var13 = var15.slice;
                    var9 = var13.bind(var15)(var16, var14);
                    var6 = var12;
                case 234:
                    var0 = var9;
                    var1 = var6;
                    var3 = var4;
                case 243:
                    var11 = undefined;
                    var9 = undefined;
                    if (!var1) {
                        _fun10148_ip = 256;
                        continue _fun10148
                    }
                case 250:
                    var11 = var0;
                    var9 = var1;
                case 256:
                    var0 = '<anonymous>';
                    if (!(var0 === var1)) {
                        _fun10148_ip = 270;
                        continue _fun10148
                    }
                case 266:
                    var3 = undefined;
                    var9 = undefined;
                case 270:
                    if (!(var5 === var3)) {
                        _fun10148_ip = 342;
                        continue _fun10148
                    }
                case 274:
                    if (var9) {
                        _fun10148_ip = 305;
                        continue _fun10148
                    }
                case 277:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 0;
                    var0 = var4[var0];
                    var0 = var1.bind(var5)(var0);
                    var9 = var0.UNKNOWN_FUNCTION;
                case 305:
                    var0 = var9;
                    if (!var11) {
                        _fun10148_ip = 339;
                        continue _fun10148
                    }
                case 311:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var4 = '';
                    var1 = '.';
                    var0 = var6.bind(var4)(var11, var1, var9);
                case 339:
                    var3 = var0;
                case 342:
                    var0 = 2;
                    var9 = var8[var0];
                    var1 = null;
                    if (!(var1 != var9)) {
                        _fun10148_ip = 375;
                        continue _fun10148
                    }
                case 355:
                    var6 = var9.startsWith;
                    var4 = 'file://';
                    var4 = var6.bind(var9)(var4);
                    if (var4) {
                        _fun10148_ip = 381;
                        continue _fun10148
                    }
                case 375:
                    var9 = var8[var0];
                    _fun10148_ip = 398;
                    continue _fun10148;
                case 381:
                    var6 = var8[var0];
                    var4 = var6.slice;
                    var0 = 7;
                    var9 = var4.bind(var6)(var0);
                case 398:
                    var0 = 5;
                    var6 = var8[var0];
                    var4 = 'native';
                    var4 = var4 === var6;
                    var6 = var1 != var9;
                    if (!var6) {
                        _fun10148_ip = 445;
                        continue _fun10148
                    }
                case 420:
                    var11 = var9.match;
                    var1 = /\\/ [A - Z]: /;
                    var6 = var11.bind(var9)(var1);
                case 445:
                    var1 = var9;
                    if (!var6) {
                        _fun10148_ip = 461;
                        continue _fun10148
                    }
                case 451:
                    var6 = var9.slice;
                    var1 = var6.bind(var9)(var10);
                case 461:
                    var6 = var1;
                    if (var1) {
                        _fun10148_ip = 474;
                        continue _fun10148
                    }
                case 467:
                    var9 = var8[var0];
                    var6 = !var9;
                case 474:
                    if (var6) {
                        _fun10148_ip = 480;
                        continue _fun10148
                    }
                case 477:
                    var6 = var4;
                case 480:
                    if (var6) {
                        _fun10148_ip = 487;
                        continue _fun10148
                    }
                case 483:
                    var1 = var8[var0];
                case 487:
                    var0 = {};
                    var6 = undefined;
                    if (!var1) {
                        _fun10148_ip = 507;
                        continue _fun10148
                    }
                case 494:
                    var9 = global;
                    var9 = var9.decodeURI;
                    var6 = var9.bind(var5)(var1);
                case 507:
                    var0.filename = var6;
                    var9 = _closure2_slot0;
                    var6 = undefined;
                    if (!var9) {
                        _fun10148_ip = 530;
                        continue _fun10148
                    }
                case 521:
                    var7 = _closure2_slot0;
                    var6 = var7.bind(var5)(var1);
                case 530:
                    var0.module = var6;
                    var0.function = var3;
                    var7 = _closure1_slot4;
                    var6 = 3;
                    var6 = var8[var6];
                    var6 = var7.bind(var5)(var6);
                    var0.lineno = var6;
                    var6 = 4;
                    var6 = var8[var6];
                    var6 = var7.bind(var5)(var6);
                    var0.colno = var6;
                    var3 = _closure1_slot2;
                    if (var1) {
                        _fun10148_ip = 592;
                        continue _fun10148
                    }
                case 588:
                    var1 = '';
                case 592:
                    var1 = var3.bind(var5)(var1, var4);
                    var0.in_app = var1;
                    return var0;
                case 605:
                    var0 = {};
                    var1 = 2;
                    var5 = var2[var1];
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '<data:';
                    var1 = '>';
                    var1 = var4.bind(var3)(var5, var1);
                    var0.filename = var1;
                    var1 = 1;
                    var1 = var2[var1];
                    var0.function = var1;
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot3 = var2;
    var4 = function(arg0) { // Original name: _parseIntOrUndefined, environment: var0
        _fun10149: for (var _fun10149_ip = 0;;) switch (_fun10149_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.parseInt;
                if (var3) {
                    _fun10149_ip = 18;
                    continue _fun10149
                }
            case 14:
                var3 = '';
            case 18:
                var1 = undefined;
                var0 = 10;
                var0 = var2.bind(var1)(var3, var0);
                if (var0) {
                    _fun10149_ip = 34;
                    continue _fun10149
                }
            case 32:
                var0 = undefined;
            case 34:
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var1, var5, var4);
    var1.filenameIsInApp = var3;
    var1.node = var2;
    var0 = function(arg0) { // Original name: nodeStackLineParser, environment: var0
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var1 = var2.bind(var1)(var0);
        var0 = [90];
        var0[1] = var1;
        return var0;
    };
    var1.nodeStackLineParser = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [832]);