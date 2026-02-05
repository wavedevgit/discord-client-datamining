// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = {};
    var3 = 'function pnpm_ViewDescriptorsSetTs1(descriptors){const{item}=this.__closure;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===item.tag;});if(index!==-1){descriptors[index]=item;}else{descriptors.push(item);}return descriptors;}';
    var2.code = var3;
    var _closure1_slot2 = var2;
    var2 = {};
    var3 = 'function pnpm_ViewDescriptorsSetTs2(descriptors){const{viewTag}=this.__closure;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===viewTag;});if(index!==-1){descriptors.splice(index,1);}return descriptors;}';
    var2.code = var3;
    var _closure1_slot3 = var2;
    var0 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.makeMutable;
        var0 = new Array(0);
        var2 = var2.bind(var3)(var0);
        var _closure2_slot0 = var2;
        var0 = global;
        var0 = var0.Set;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        var _closure2_slot1 = var0;
        var0 = {};
        var0.shareableViewDescriptors = var2;
        var2 = function arg0() {
            var4 = arg0;
            var _closure3_slot0 = var4;
            var5 = _closure2_slot1;
            var3 = var5.add;
            var2 = var4.tag;
            var2 = var3.bind(var5)(var2);
            var3 = _closure2_slot0;
            var2 = var3.modify;
            var1 = function arg0() {
                _fun34126: for (var _fun34126_ip = 0;;) switch (_fun34126_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.findIndex;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.tag;
                            var0 = _closure3_slot0;
                            var0 = var0.tag;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var2 = var2.bind(var0)(var1);
                        var1 = -1;
                        if (!(var1 === var2)) {
                            _fun34126_ip = 50;
                            continue _fun34126
                        }
                    case 31:
                        var3 = var0.push;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var0)(var1);
                        _fun34126_ip = 61;
                        continue _fun34126;
                    case 50:
                        var1 = _closure3_slot0;
                        var0[var2] = var1;
                    case 61:
                        return var0;
                }
            };
            var0 = {};
            var0.item = var4;
            var1.__closure = var0;
            var0 = 8747402369132.0;
            var1.__workletHash = var0;
            var0 = _closure1_slot2;
            var1.__initData = var0;
            var0 = false;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.add = var2;
        var2 = function arg0() {
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure2_slot1;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            var3 = _closure2_slot0;
            var2 = var3.modify;
            var1 = function arg0() {
                _fun34129: for (var _fun34129_ip = 0;;) switch (_fun34129_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.findIndex;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.tag;
                            var0 = _closure3_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var3 = var2.bind(var0)(var1);
                        var1 = -1;
                        if (!(var1 !== var3)) {
                            _fun34129_ip = 46;
                            continue _fun34129
                        }
                    case 31:
                        var2 = var0.splice;
                        var1 = 1;
                        var1 = var2.bind(var0)(var3, var1);
                    case 46:
                        return var0;
                }
            };
            var0 = {};
            var0.viewTag = var4;
            var1.__closure = var0;
            var0 = 5508648561577.0;
            var1.__workletHash = var0;
            var0 = _closure1_slot3;
            var1.__initData = var0;
            var0 = false;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.remove = var2;
        var1 = function arg0() {
            var2 = _closure2_slot1;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.has = var1;
        return var0;
    };
    var1.makeViewDescriptorsSet = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3765]);