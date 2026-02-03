// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33182: for (var _fun33182_ip = 0;;) switch (_fun33182_ip) {
        case 0:
            var5 = global;
            var2 = exports;
            var4 = global;
            var6 = var4.Object;
            var3 = var6.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var6)(var2, var0, var1);
            var3 = null;
            var6 = var3 == var5;
            var0 = undefined;
            var1 = undefined;
            if (var6) {
                _fun33182_ip = 57;
                continue _fun33182
            }
        case 51:
            var1 = var5.nativeFabricUIManager;
        case 57:
            var3 = var3 != var1;
            var7 = {
                'color': true,
                'tintColor': true,
                'shadowColor': true,
                'placeholderTextColor': true
            };
            var6 = {
                'borderBottomEndRadius': true,
                'borderBottomLeftRadius': true,
                'borderBottomRightRadius': true,
                'borderBottomStartRadius': true,
                'borderRadius': true,
                'borderTopEndRadius': true,
                'borderTopLeftRadius': true,
                'borderTopRightRadius': true,
                'borderTopStartRadius': true
            };
            var1 = {};
            var12 = var4.Object;
            var11 = var12.assign;
            var10 = var6;
            if (var3) {
                _fun33182_ip = 110;
                continue _fun33182
            }
        case 108:
            var10 = {};
        case 110:
            var9 = var7;
            if (var3) {
                _fun33182_ip = 118;
                continue _fun33182
            }
        case 116:
            var9 = {};
        case 118:
            var16 = {
                'opacity': true,
                'transform': true,
                'backgroundColor': true,
                'borderRightColor': true,
                'borderBottomColor': true,
                'borderColor': true,
                'borderEndColor': true,
                'borderLeftColor': true,
                'borderStartColor': true,
                'borderTopColor': true,
                'shadowOpacity': true,
                'shadowRadius': true
            };
            var14 = {
                'scaleX': true,
                'scaleY': true,
                'translateX': true,
                'translateY': true
            };
            var17 = var12;
            var15 = var10;
            var13 = var9;
            var5 = var17[var11](var16, var15, var14, var13, var12);
            var1.UI_THREAD_PROPS_WHITELIST = var5;
            var5 = var4.Object;
            var4 = var5.assign;
            if (!var3) {
                _fun33182_ip = 176;
                continue _fun33182
            }
        case 174:
            var7 = {};
        case 176:
            if (!var3) {
                _fun33182_ip = 181;
                continue _fun33182
            }
        case 179:
            var6 = {};
        case 181:
            var3 = {
                'borderBottomWidth': true,
                'borderEndWidth': true,
                'borderLeftWidth': true,
                'borderRightWidth': true,
                'borderStartWidth': true,
                'borderTopWidth': true,
                'borderWidth': true,
                'bottom': true,
                'boxShadow': true,
                'flex': true,
                'flexGrow': true,
                'flexShrink': true,
                'height': true,
                'left': true,
                'margin': true,
                'marginBottom': true,
                'marginEnd': true,
                'marginHorizontal': true,
                'marginLeft': true,
                'marginRight': true,
                'marginStart': true,
                'marginTop': true,
                'marginVertical': true,
                'maxHeight': true,
                'maxWidth': true,
                'minHeight': true,
                'minWidth': true,
                'padding': true,
                'paddingBottom': true,
                'paddingEnd': true,
                'paddingHorizontal': true,
                'paddingLeft': true,
                'paddingRight': true,
                'paddingStart': true,
                'paddingTop': true,
                'paddingVertical': true,
                'right': true,
                'start': true,
                'top': true,
                'width': true,
                'zIndex': true,
                'elevation': true,
                'fontSize': true,
                'lineHeight': true,
                'textShadowRadius': true,
                'textShadowOffset': true,
                'letterSpacing': true,
                'aspectRatio': true,
                'columnGap': true,
                'end': true,
                'flexBasis': true,
                'gap': true,
                'rowGap': true,
                'display': true,
                'backfaceVisibility': true,
                'overflow': true,
                'resizeMode': true,
                'fontStyle': true,
                'fontWeight': true,
                'textAlign': true,
                'textDecorationLine': true,
                'fontFamily': true,
                'textAlignVertical': true,
                'fontVariant': true,
                'textDecorationStyle': true,
                'textTransform': true,
                'writingDirection': true,
                'alignContent': true,
                'alignItems': true,
                'alignSelf': true,
                'direction': true,
                'flexDirection': true,
                'flexWrap': true,
                'justifyContent': true,
                'position': true
            };
            var3 = var4.bind(var5)(var3, var7, var6);
            var1.NATIVE_THREAD_PROPS_WHITELIST = var3;
            var2.PropsAllowlists = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);