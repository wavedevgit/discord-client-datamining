// modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
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
    var9 = var3.OrientationLockState;
    var _closure1_slot2 = var9;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    var _closure1_slot3 = var7;
    var3 = {};
    var6 = 'function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){const{OrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel}=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:OrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===OrientationLockState.PORTRAIT||nonNullPipOrientationLockState===OrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};}';
    var3.code = var6;
    var1 = function arg0() {
        _fun110310: for (var _fun110310_ip = 0;;) switch (_fun110310_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.pipWidth;
                var5 = var0.pipHeight;
                var3 = var0.pipOrientationLockState;
                var1 = var0.isLandscape;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun110310_ip = 46;
                    continue _fun110310
                }
            case 33:
                var0 = _closure1_slot2;
                var3 = var0.UNLOCKED;
            case 46:
                var2 = _closure1_slot2;
                var2 = var2.PORTRAIT;
                if (!(var3 !== var2)) {
                    _fun110310_ip = 137;
                    continue _fun110310
                }
            case 63:
                var2 = _closure1_slot2;
                var2 = var2.UNLOCKED;
                if (!(var3 === var2)) {
                    _fun110310_ip = 80;
                    continue _fun110310
                }
            case 77:
                if (!var1) {
                    _fun110310_ip = 137;
                    continue _fun110310
                }
            case 80:
                var1 = _closure1_slot3;
                var6 = var5 * var1;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var1 = var6 / var1;
                var2 = var2.bind(var3)(var1);
                var1 = -1;
                var2 = var1 * var2;
                var4 = true;
                var3 = false;
                var1 = 0;
                _fun110310_ip = 198;
                continue _fun110310;
            case 137:
                var7 = _closure1_slot3;
                var10 = var11 * var7;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 2;
                var7 = var7[var0];
                var8 = undefined;
                var7 = var9.bind(var8)(var7);
                var0 = var10 / var0;
                var7 = var7.bind(var8)(var0);
                var0 = -1;
                var1 = var0 * var7;
                var4 = false;
                var3 = true;
                var2 = 0;
                var6 = var11;
                var5 = var10;
            case 198:
                var0 = {};
                var0.width = var6;
                var0.height = var5;
                var0.shouldHorizontallyCenter = var4;
                var0.shouldVerticallyCenter = var3;
                var0.marginLeft = var2;
                var0.marginTop = var1;
                return var0;
        }
    };
    var6 = {};
    var6.OrientationLockState = var9;
    var6.LANDSCAPE_ACTIVITY_ASPECT_RATIO = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var6.roundToNearestPixel = var7;
    var1.__closure = var6;
    var6 = 7141745103186.0;
    var1.__workletHash = var6;
    var1.__initData = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3448, 7909, 13122, 2]);