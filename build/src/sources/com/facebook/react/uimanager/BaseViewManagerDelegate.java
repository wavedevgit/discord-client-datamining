package com.facebook.react.uimanager;

import android.content.Context;
import android.view.View;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\b&\u0018\u0000*\b\b\u0000\u0010\u0001*\u00020\u0002*\u0016\b\u0001\u0010\u0003*\u0010\u0012\u0004\u0012\u0002H\u0001\u0012\u0006\b\u0001\u0012\u00020\u00050\u00042\b\u0012\u0004\u0012\u0002H\u00010\u0006B\u000f\u0012\u0006\u0010\u0007\u001a\u00028\u0001¢\u0006\u0004\b\b\u0010\tJ'\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00028\u00002\u0006\u0010\u000e\u001a\u00020\u000f2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011H\u0016¢\u0006\u0002\u0010\u0012J%\u0010\u0013\u001a\u00020\f2\u0006\u0010\r\u001a\u00028\u00002\u0006\u0010\u0014\u001a\u00020\u000f2\u0006\u0010\u0015\u001a\u00020\u0016H\u0016¢\u0006\u0002\u0010\u0017R\u0012\u0010\u0007\u001a\u00028\u00018\u0004X\u0085\u0004¢\u0006\u0004\n\u0002\u0010\n¨\u0006\u0018"}, d2 = {"Lcom/facebook/react/uimanager/BaseViewManagerDelegate;", "T", "Landroid/view/View;", "U", "Lcom/facebook/react/uimanager/BaseViewManager;", "Lcom/facebook/react/uimanager/LayoutShadowNode;", "Lcom/facebook/react/uimanager/ViewManagerDelegate;", "mViewManager", "<init>", "(Lcom/facebook/react/uimanager/BaseViewManager;)V", "Lcom/facebook/react/uimanager/BaseViewManager;", "setProperty", "", "view", "propName", "", "value", "", "(Landroid/view/View;Ljava/lang/String;Ljava/lang/Object;)V", "receiveCommand", "commandName", "args", "Lcom/facebook/react/bridge/ReadableArray;", "(Landroid/view/View;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableArray;)V", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class BaseViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode>> implements ViewManagerDelegate<T> {
    @NotNull
    protected final U mViewManager;

    public BaseViewManagerDelegate(@NotNull U mViewManager) {
        Intrinsics.checkNotNullParameter(mViewManager, "mViewManager");
        this.mViewManager = mViewManager;
    }

    @Override // com.facebook.react.uimanager.ViewManagerDelegate
    /* renamed from: receiveCommand */
    public void kotlinCompat$receiveCommand(@NotNull T view, @NotNull String commandName, @NotNull ReadableArray args) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(commandName, "commandName");
        Intrinsics.checkNotNullParameter(args, "args");
    }

    @Override // com.facebook.react.uimanager.ViewManagerDelegate
    /* renamed from: setProperty */
    public void kotlinCompat$setProperty(@NotNull T view, @NotNull String propName, Object obj) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(propName, "propName");
        float f10 = 1.0f;
        float f11 = 0.0f;
        float f12 = Float.NaN;
        boolean z10 = false;
        switch (propName.hashCode()) {
            case -2018402664:
                if (!propName.equals(ViewProps.MIX_BLEND_MODE)) {
                    return;
                }
                this.mViewManager.setMixBlendMode(view, (String) obj);
                return;
            case -1898517556:
                if (propName.equals(ViewProps.ON_POINTER_ENTER_CAPTURE)) {
                    U u10 = this.mViewManager;
                    Boolean bool = (Boolean) obj;
                    if (bool != null) {
                        z10 = bool.booleanValue();
                    }
                    u10.setPointerEnterCapture(view, z10);
                    return;
                }
                return;
            case -1721943862:
                if (propName.equals(ViewProps.TRANSLATE_X)) {
                    U u11 = this.mViewManager;
                    Double d10 = (Double) obj;
                    if (d10 != null) {
                        f11 = (float) d10.doubleValue();
                    }
                    u11.setTranslateX(view, f11);
                    return;
                }
                return;
            case -1721943861:
                if (propName.equals(ViewProps.TRANSLATE_Y)) {
                    U u12 = this.mViewManager;
                    Double d11 = (Double) obj;
                    if (d11 != null) {
                        f11 = (float) d11.doubleValue();
                    }
                    u12.setTranslateY(view, f11);
                    return;
                }
                return;
            case -1589741021:
                if (propName.equals(ViewProps.SHADOW_COLOR)) {
                    U u13 = this.mViewManager;
                    Context context = view.getContext();
                    Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                    u13.setShadowColor(view, ColorPropConverter.getColor(obj, context, 0));
                    return;
                }
                return;
            case -1489432511:
                if (propName.equals(ViewProps.OUTLINE_COLOR)) {
                    this.mViewManager.setOutlineColor(view, (Integer) obj);
                    return;
                }
                return;
            case -1474494833:
                if (propName.equals(ViewProps.OUTLINE_STYLE)) {
                    this.mViewManager.setOutlineStyle(view, (String) obj);
                    return;
                }
                return;
            case -1471148380:
                if (propName.equals(ViewProps.OUTLINE_WIDTH)) {
                    U u14 = this.mViewManager;
                    Double d12 = (Double) obj;
                    if (d12 != null) {
                        f12 = (float) d12.doubleValue();
                    }
                    u14.setOutlineWidth(view, f12);
                    return;
                }
                return;
            case -1351902487:
                if (propName.equals(ViewProps.ON_CLICK)) {
                    U u15 = this.mViewManager;
                    Boolean bool2 = (Boolean) obj;
                    if (bool2 != null) {
                        z10 = bool2.booleanValue();
                    }
                    u15.setClick(view, z10);
                    return;
                }
                return;
            case -1274492040:
                if (propName.equals(ViewProps.FILTER)) {
                    this.mViewManager.setFilter(view, (ReadableArray) obj);
                    return;
                }
                return;
            case -1267206133:
                if (propName.equals(ViewProps.OPACITY)) {
                    U u16 = this.mViewManager;
                    Double d13 = (Double) obj;
                    if (d13 != null) {
                        f10 = (float) d13.doubleValue();
                    }
                    u16.setOpacity(view, f10);
                    return;
                }
                return;
            case -1247970794:
                if (propName.equals(ViewProps.ON_POINTER_OUT_CAPTURE)) {
                    U u17 = this.mViewManager;
                    Boolean bool3 = (Boolean) obj;
                    if (bool3 != null) {
                        z10 = bool3.booleanValue();
                    }
                    u17.setPointerOutCapture(view, z10);
                    return;
                }
                return;
            case -1228066334:
                if (propName.equals("borderTopLeftRadius")) {
                    U u18 = this.mViewManager;
                    Double d14 = (Double) obj;
                    if (d14 != null) {
                        f12 = (float) d14.doubleValue();
                    }
                    u18.setBorderTopLeftRadius(view, f12);
                    return;
                }
                return;
            case -1219666915:
                if (propName.equals(ViewProps.ON_CLICK_CAPTURE)) {
                    U u19 = this.mViewManager;
                    Boolean bool4 = (Boolean) obj;
                    if (bool4 != null) {
                        z10 = bool4.booleanValue();
                    }
                    u19.setClickCapture(view, z10);
                    return;
                }
                return;
            case -1036769289:
                if (propName.equals(ViewProps.ON_POINTER_MOVE_CAPTURE)) {
                    U u20 = this.mViewManager;
                    Boolean bool5 = (Boolean) obj;
                    if (bool5 != null) {
                        z10 = bool5.booleanValue();
                    }
                    u20.setPointerMoveCapture(view, z10);
                    return;
                }
                return;
            case -994557277:
                if (propName.equals(ViewProps.SCREEN_READER_FOCUSABLE)) {
                    U u21 = this.mViewManager;
                    Boolean bool6 = (Boolean) obj;
                    if (bool6 != null) {
                        z10 = bool6.booleanValue();
                    }
                    u21.setScreenReaderFocusable(view, z10);
                    return;
                }
                return;
            case -908189618:
                if (propName.equals(ViewProps.SCALE_X)) {
                    U u22 = this.mViewManager;
                    Double d15 = (Double) obj;
                    if (d15 != null) {
                        f10 = (float) d15.doubleValue();
                    }
                    u22.setScaleX(view, f10);
                    return;
                }
                return;
            case -908189617:
                if (propName.equals(ViewProps.SCALE_Y)) {
                    U u23 = this.mViewManager;
                    Double d16 = (Double) obj;
                    if (d16 != null) {
                        f10 = (float) d16.doubleValue();
                    }
                    u23.setScaleY(view, f10);
                    return;
                }
                return;
            case -877170387:
                if (propName.equals(ViewProps.TEST_ID)) {
                    this.mViewManager.setTestId(view, (String) obj);
                    return;
                }
                return;
            case -781597262:
                if (propName.equals(ViewProps.TRANSFORM_ORIGIN)) {
                    this.mViewManager.setTransformOrigin(view, (ReadableArray) obj);
                    return;
                }
                return;
            case -731417480:
                if (propName.equals(ViewProps.Z_INDEX)) {
                    U u24 = this.mViewManager;
                    Double d17 = (Double) obj;
                    if (d17 != null) {
                        f11 = (float) d17.doubleValue();
                    }
                    u24.setZIndex(view, f11);
                    return;
                }
                return;
            case -112141555:
                if (propName.equals(ViewProps.ON_POINTER_LEAVE_CAPTURE)) {
                    U u25 = this.mViewManager;
                    Boolean bool7 = (Boolean) obj;
                    if (bool7 != null) {
                        z10 = bool7.booleanValue();
                    }
                    u25.setPointerLeaveCapture(view, z10);
                    return;
                }
                return;
            case -101663499:
                if (propName.equals(ViewProps.ACCESSIBILITY_HINT)) {
                    this.mViewManager.setAccessibilityHint(view, (String) obj);
                    return;
                }
                return;
            case -101359900:
                if (propName.equals(ViewProps.ACCESSIBILITY_ROLE)) {
                    this.mViewManager.setAccessibilityRole(view, (String) obj);
                    return;
                }
                return;
            case -80891667:
                if (propName.equals(ViewProps.RENDER_TO_HARDWARE_TEXTURE)) {
                    U u26 = this.mViewManager;
                    Boolean bool8 = (Boolean) obj;
                    if (bool8 != null) {
                        z10 = bool8.booleanValue();
                    }
                    u26.setRenderToHardwareTexture(view, z10);
                    return;
                }
                return;
            case -40300674:
                if (propName.equals(ViewProps.ROTATION)) {
                    U u27 = this.mViewManager;
                    Double d18 = (Double) obj;
                    if (d18 != null) {
                        f11 = (float) d18.doubleValue();
                    }
                    u27.setRotation(view, f11);
                    return;
                }
                return;
            case -4379043:
                if (propName.equals(ViewProps.ELEVATION)) {
                    U u28 = this.mViewManager;
                    Double d19 = (Double) obj;
                    if (d19 != null) {
                        f11 = (float) d19.doubleValue();
                    }
                    u28.setElevation(view, f11);
                    return;
                }
                return;
            case 3506294:
                if (propName.equals(ViewProps.ROLE)) {
                    this.mViewManager.setRole(view, (String) obj);
                    return;
                }
                return;
            case 17941018:
                if (propName.equals(ViewProps.ON_POINTER_ENTER)) {
                    U u29 = this.mViewManager;
                    Boolean bool9 = (Boolean) obj;
                    if (bool9 != null) {
                        z10 = bool9.booleanValue();
                    }
                    u29.setPointerEnter(view, z10);
                    return;
                }
                return;
            case 24119801:
                if (propName.equals(ViewProps.ON_POINTER_LEAVE)) {
                    U u30 = this.mViewManager;
                    Boolean bool10 = (Boolean) obj;
                    if (bool10 != null) {
                        z10 = bool10.booleanValue();
                    }
                    u30.setPointerLeave(view, z10);
                    return;
                }
                return;
            case 36255470:
                if (propName.equals(ViewProps.ACCESSIBILITY_LIVE_REGION)) {
                    this.mViewManager.setAccessibilityLiveRegion(view, (String) obj);
                    return;
                }
                return;
            case 132353428:
                if (propName.equals(ViewProps.ON_POINTER_OVER_CAPTURE)) {
                    U u31 = this.mViewManager;
                    Boolean bool11 = (Boolean) obj;
                    if (bool11 != null) {
                        z10 = bool11.booleanValue();
                    }
                    u31.setPointerOverCapture(view, z10);
                    return;
                }
                return;
            case 317346576:
                if (propName.equals(ViewProps.ON_POINTER_OUT)) {
                    U u32 = this.mViewManager;
                    Boolean bool12 = (Boolean) obj;
                    if (bool12 != null) {
                        z10 = bool12.booleanValue();
                    }
                    u32.setPointerOut(view, z10);
                    return;
                }
                return;
            case 333432965:
                if (propName.equals("borderTopRightRadius")) {
                    U u33 = this.mViewManager;
                    Double d20 = (Double) obj;
                    if (d20 != null) {
                        f12 = (float) d20.doubleValue();
                    }
                    u33.setBorderTopRightRadius(view, f12);
                    return;
                }
                return;
            case 581268560:
                if (propName.equals("borderBottomLeftRadius")) {
                    U u34 = this.mViewManager;
                    Double d21 = (Double) obj;
                    if (d21 != null) {
                        f12 = (float) d21.doubleValue();
                    }
                    u34.setBorderBottomLeftRadius(view, f12);
                    return;
                }
                return;
            case 588239831:
                if (propName.equals("borderBottomRightRadius")) {
                    U u35 = this.mViewManager;
                    Double d22 = (Double) obj;
                    if (d22 != null) {
                        f12 = (float) d22.doubleValue();
                    }
                    u35.setBorderBottomRightRadius(view, f12);
                    return;
                }
                return;
            case 743055051:
                if (propName.equals(ViewProps.BOX_SHADOW)) {
                    this.mViewManager.setBoxShadow(view, (ReadableArray) obj);
                    return;
                }
                return;
            case 746986311:
                if (propName.equals(ViewProps.IMPORTANT_FOR_ACCESSIBILITY)) {
                    this.mViewManager.setImportantForAccessibility(view, (String) obj);
                    return;
                }
                return;
            case 1052666732:
                if (propName.equals(ViewProps.TRANSFORM)) {
                    this.mViewManager.setTransform(view, (ReadableArray) obj);
                    return;
                }
                return;
            case 1146842694:
                if (propName.equals(ViewProps.ACCESSIBILITY_LABEL)) {
                    this.mViewManager.setAccessibilityLabel(view, (String) obj);
                    return;
                }
                return;
            case 1153872867:
                if (propName.equals(ViewProps.ACCESSIBILITY_STATE)) {
                    this.mViewManager.setViewState(view, (ReadableMap) obj);
                    return;
                }
                return;
            case 1156088003:
                if (propName.equals(ViewProps.ACCESSIBILITY_VALUE)) {
                    this.mViewManager.setAccessibilityValue(view, (ReadableMap) obj);
                    return;
                }
                return;
            case 1247744079:
                if (propName.equals(ViewProps.ON_POINTER_MOVE)) {
                    U u36 = this.mViewManager;
                    Boolean bool13 = (Boolean) obj;
                    if (bool13 != null) {
                        z10 = bool13.booleanValue();
                    }
                    u36.setPointerMove(view, z10);
                    return;
                }
                return;
            case 1247809874:
                if (propName.equals(ViewProps.ON_POINTER_OVER)) {
                    U u37 = this.mViewManager;
                    Boolean bool14 = (Boolean) obj;
                    if (bool14 != null) {
                        z10 = bool14.booleanValue();
                    }
                    u37.setPointerOver(view, z10);
                    return;
                }
                return;
            case 1287124693:
                if (propName.equals(ViewProps.BACKGROUND_COLOR)) {
                    U u38 = this.mViewManager;
                    Context context2 = view.getContext();
                    Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                    u38.setBackgroundColor(view, ColorPropConverter.getColor(obj, context2, 0));
                    return;
                }
                return;
            case 1349188574:
                if (propName.equals("borderRadius")) {
                    U u39 = this.mViewManager;
                    Double d23 = (Double) obj;
                    if (d23 != null) {
                        f12 = (float) d23.doubleValue();
                    }
                    u39.setBorderRadius(view, f12);
                    return;
                }
                return;
            case 1407295349:
                if (propName.equals(ViewProps.OUTLINE_OFFSET)) {
                    U u40 = this.mViewManager;
                    Double d24 = (Double) obj;
                    if (d24 != null) {
                        f12 = (float) d24.doubleValue();
                    }
                    u40.setOutlineOffset(view, f12);
                    return;
                }
                return;
            case 1505602511:
                if (propName.equals(ViewProps.ACCESSIBILITY_ACTIONS)) {
                    this.mViewManager.setAccessibilityActions(view, (ReadableArray) obj);
                    return;
                }
                return;
            case 1761903244:
                if (propName.equals(ViewProps.ACCESSIBILITY_COLLECTION)) {
                    this.mViewManager.setAccessibilityCollection(view, (ReadableMap) obj);
                    return;
                }
                return;
            case 1865277756:
                if (propName.equals(ViewProps.ACCESSIBILITY_LABELLED_BY)) {
                    this.mViewManager.setAccessibilityLabelledBy(view, new DynamicFromObject(obj));
                    return;
                }
                return;
            case 1993034687:
                if (propName.equals(ViewProps.ACCESSIBILITY_COLLECTION_ITEM)) {
                    this.mViewManager.setAccessibilityCollectionItem(view, (ReadableMap) obj);
                    return;
                }
                return;
            case 2045685618:
                if (propName.equals(ViewProps.NATIVE_ID)) {
                    this.mViewManager.setNativeId(view, (String) obj);
                    return;
                }
                return;
            default:
                return;
        }
    }
}
