// modules/media_viewer/native/portraitThumbnailHelpers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var3 = 'function lerpVarWidthThumbnailScrollBounds_portraitThumbnailHelpersTsx1(positions,position){if(positions.length===0)return 0;if(position<0){return 0;}if(position>=positions.length){position=positions.length;}const index=Math.floor(position);const fraction=position-index;if(index>=positions.length){return positions[positions.length-1].scrollStart;}const startPos=positions[index].scrollStart;const endPos=index<positions.length-1?positions[index+1].scrollStart:startPos;return startPos+fraction*(endPos-startPos);}';
    var1.code = var3;
    var _closure1_slot0 = var1;
    var1 = function() { // Environment: var0
        var0 = function arg0, arg1() {
            _fun71168: for (var _fun71168_ip = 0;;) switch (_fun71168_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var3 = var2.length;
                    var0 = 0;
                    if (!(var0 !== var3)) {
                        _fun71168_ip = 156;
                        continue _fun71168
                    }
                case 20:
                    if (!(!(var1 < var0))) {
                        _fun71168_ip = 154;
                        continue _fun71168
                    }
                case 27:
                    var3 = var2.length;
                    if (!(var1 >= var3)) {
                        _fun71168_ip = 41;
                        continue _fun71168
                    }
                case 36:
                    var1 = var2.length;
                case 41:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.floor;
                    var6 = var3.bind(var4)(var1);
                    var4 = var1 - var6;
                    var1 = var2.length;
                    if (!(!(var6 >= var1))) {
                        _fun71168_ip = 130;
                        continue _fun71168
                    }
                case 73:
                    var1 = var2[var6];
                    var3 = var1.scrollStart;
                    var1 = var2.length;
                    var5 = 1;
                    var7 = var1 - var5;
                    var1 = var3;
                    if (!(var6 < var7)) {
                        _fun71168_ip = 116;
                        continue _fun71168
                    }
                case 102:
                    var5 = var6 + var5;
                    var5 = var2[var5];
                    var1 = var5.scrollStart;
                case 116:
                    var1 = var1 - var3;
                    var1 = var4 * var1;
                    var1 = var3 + var1;
                    return var1;
                case 130:
                    var3 = var2.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var1 = var2[var1];
                    var1 = var1.scrollStart;
                    return var1;
                case 154:
                    return var0;
                case 156:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 5256874583737.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot0;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var4 = arg6;
    var3 = 0;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/portraitThumbnailHelpers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.lerpVarWidthThumbnailScrollBounds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);