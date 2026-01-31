// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = undefined;
    var2.reflectionMergePartial = var0;
    var1 = function arg0, arg1, arg2() {
        _fun14981: for (var _fun14981_ip = 0;;) switch (_fun14981_ip) {
            case 0:
                var10 = arg1;
                var0 = undefined;
                var11 = undefined;
                var12 = undefined;
                var14 = undefined;
                var15 = undefined;
                var16 = undefined;
                var17 = undefined;
                var18 = undefined;
                var19 = undefined;
                var20 = undefined;
                var13 = arg2;
                var1 = arg0;
                var1 = var1.fields;
                var9 = var1;
                var2 = var9[Symbol.iterator];
                var9 = var2().next;
                var8 = 0;
                var7 = global;
                var6 = 'message';
                var5 = 'enum';
                var4 = 'scalar';
                var3 = 'map';
                var1 = null;
            case 63:
                var21 = var9().value;
                var22 = var2;
                if (!(var22 !== var0)) {
                    _fun14981_ip = 730;
                    continue _fun14981
                }
            case 77: // try_start_1
                var14 = var21;
                var15 = var21.localName;
                var21 = var21.oneof;
                if (var21) {
                    _fun14981_ip = 117;
                    continue _fun14981
                }
            case 95:
                var12 = var10;
                var22 = var13;
                var21 = var15;
                var21 = var22[var21];
                var11 = var21;
                if (!(var1 == var21)) {
                    _fun14981_ip = 212;
                    continue _fun14981
                }
            case 115: // try_end1
                _fun14981_ip = 63;
                continue _fun14981;
            case 117: // try_start_2
                var22 = var13;
                var21 = var14;
                var21 = var21.oneof;
                var21 = var22[var21];
                var16 = var21;
                var22 = var1 == var21;
                var21 = undefined;
                if (var22) {
                    _fun14981_ip = 154;
                    continue _fun14981
                }
            case 145:
                var22 = var16;
                var21 = var22.oneofKind;
            case 154:
                if (!(var1 != var21)) {
                    _fun14981_ip = 718;
                    continue _fun14981
                }
            case 161:
                var22 = var16;
                var21 = var15;
                var21 = var22[var21];
                var11 = var21;
                var24 = var10;
                var23 = var14;
                var23 = var23.oneof;
                var23 = var24[var23];
                var12 = var23;
                var22 = var22.oneofKind;
                var23.oneofKind = var22;
                if (!(var1 != var21)) {
                    _fun14981_ip = 703;
                    continue _fun14981
                }
            case 212:
                var21 = var14;
                var21 = var21.repeat;
                if (!var21) {
                    _fun14981_ip = 248;
                    continue _fun14981
                }
            case 224:
                var22 = var12;
                var21 = var15;
                var22 = var22[var21];
                var21 = var11;
                var21 = var21.length;
                var22.length = var21;
            case 248:
                var21 = var14;
                var21 = var21.kind;
                if (!(var4 !== var21)) {
                    _fun14981_ip = 618;
                    continue _fun14981
                }
            case 263:
                if (!(var5 !== var21)) {
                    _fun14981_ip = 618;
                    continue _fun14981
                }
            case 270:
                if (!(var6 !== var21)) {
                    _fun14981_ip = 448;
                    continue _fun14981
                }
            case 277:
                if (!(var3 === var21)) {
                    _fun14981_ip = 698;
                    continue _fun14981
                }
            case 284:
                var21 = var14;
                var21 = var21.V;
                var21 = var21.kind;
                if (!(var4 !== var21)) {
                    _fun14981_ip = 413;
                    continue _fun14981
                }
            case 302:
                if (!(var5 !== var21)) {
                    _fun14981_ip = 413;
                    continue _fun14981
                }
            case 306:
                if (!(var6 === var21)) {
                    _fun14981_ip = 698;
                    continue _fun14981
                }
            case 313:
                var21 = var14;
                var22 = var21.V;
                var21 = var22.T;
                var20 = var21.bind(var22)();
                var23 = var7.Object;
                var22 = var23.keys;
                var21 = var11;
                var23 = var22.bind(var23)(var21);
                var21 = var23;
                var22 = var21[Symbol.iterator];
                var21 = var22().next;
            case 356:
                var25 = var21().value;
                var23 = var22;
                if (!(var23 !== var0)) {
                    _fun14981_ip = 698;
                    continue _fun14981
                }
            case 370: // try_start_0
                var24 = var12;
                var23 = var15;
                var24 = var24[var23];
                var27 = var20;
                var26 = var27.create;
                var23 = var11;
                var23 = var23[var25];
                var23 = var26.bind(var27)(var23);
                var24[var25] = var23;
            case 404: // try_end0
                _fun14981_ip = 356;
                continue _fun14981;
            case 406: // catch_target0
                CatchBlockStart(arg_register = 21);
                var22.return();
                throw var21;
            case 413:
                var24 = var7.Object;
                var23 = var24.assign;
                var22 = var12;
                var21 = var15;
                var22 = var22[var21];
                var21 = var11;
                var21 = var23.bind(var24)(var22, var21);
                _fun14981_ip = 698;
                continue _fun14981;
            case 448:
                var21 = var14;
                var22 = var21.T;
                var18 = var22.bind(var21)();
                var21 = var21.repeat;
                if (var21) {
                    _fun14981_ip = 547;
                    continue _fun14981
                }
            case 469:
                var22 = var12;
                var21 = var15;
                var21 = var22[var21];
                if (!(var0 !== var21)) {
                    _fun14981_ip = 516;
                    continue _fun14981
                }
            case 483:
                var24 = var18;
                var23 = var24.mergePartial;
                var22 = var12;
                var21 = var15;
                var22 = var22[var21];
                var21 = var11;
                var21 = var23.bind(var24)(var22, var21);
                _fun14981_ip = 698;
                continue _fun14981;
            case 516:
                var23 = var12;
                var22 = var15;
                var25 = var18;
                var24 = var25.create;
                var21 = var11;
                var21 = var24.bind(var25)(var21);
                var23[var22] = var21;
                _fun14981_ip = 698;
                continue _fun14981;
            case 547:
                var19 = 0;
                var21 = var11;
                var21 = var21.length;
                if (!(var8 < var21)) {
                    _fun14981_ip = 698;
                    continue _fun14981
                }
            case 564:
                var22 = var12;
                var21 = var15;
                var24 = var22[var21];
                var22 = var19;
                var26 = var18;
                var25 = var26.create;
                var21 = var11;
                var23 = var21[var22];
                var23 = var25.bind(var26)(var23);
                var24[var22] = var23;
                var22 = var22 + 1;
                var19 = var22;
                var21 = var21.length;
                if (var22 < var21) {
                    _fun14981_ip = 564;
                    continue _fun14981
                }
            case 616:
                _fun14981_ip = 698;
                continue _fun14981;
            case 618:
                var21 = var14;
                var21 = var21.repeat;
                if (var21) {
                    _fun14981_ip = 645;
                    continue _fun14981
                }
            case 630:
                var23 = var12;
                var22 = var15;
                var21 = var11;
                var23[var22] = var21;
                _fun14981_ip = 698;
                continue _fun14981;
            case 645:
                var17 = 0;
                var21 = var11;
                var21 = var21.length;
                if (!(var8 < var21)) {
                    _fun14981_ip = 698;
                    continue _fun14981
                }
            case 659:
                var22 = var12;
                var21 = var15;
                var24 = var22[var21];
                var22 = var17;
                var21 = var11;
                var23 = var21[var22];
                var24[var22] = var23;
                var22 = var22 + 1;
                var17 = var22;
                var21 = var21.length;
                if (var22 < var21) {
                    _fun14981_ip = 659;
                    continue _fun14981
                }
            case 698: // try_end2
                _fun14981_ip = 63;
                continue _fun14981;
            case 703: // try_start_3
                var22 = var12;
                var21 = var15;
                var21 = delete var22[var21];
            case 713: // try_end3
                _fun14981_ip = 63;
                continue _fun14981;
            case 718:
                _fun14981_ip = 63;
                continue _fun14981;
            case 723: // catch_target1 // catch_target2 // catch_target3
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 730:
                return var0;
        }
    };
    var2.reflectionMergePartial = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);