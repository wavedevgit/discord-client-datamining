package com.facebook.react.viewmanagers;

import android.view.View;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.RNSVGLinearGradientManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGLinearGradientManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGLinearGradientManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGLinearGradientManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        float floatValue;
        str.getClass();
        int i10 = 0;
        boolean z10 = false;
        int i11 = 0;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1932235233:
                if (str.equals("gradientUnits")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1267206133:
                if (str.equals(ViewProps.OPACITY)) {
                    c10 = 1;
                    break;
                }
                break;
            case -1081239615:
                if (str.equals("matrix")) {
                    c10 = 2;
                    break;
                }
                break;
            case -933864895:
                if (str.equals("markerEnd")) {
                    c10 = 3;
                    break;
                }
                break;
            case -933857362:
                if (str.equals("markerMid")) {
                    c10 = 4;
                    break;
                }
                break;
            case -293492298:
                if (str.equals(ViewProps.POINTER_EVENTS)) {
                    c10 = 5;
                    break;
                }
                break;
            case 3769:
                if (str.equals("x1")) {
                    c10 = 6;
                    break;
                }
                break;
            case 3770:
                if (str.equals("x2")) {
                    c10 = 7;
                    break;
                }
                break;
            case 3800:
                if (str.equals("y1")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 3801:
                if (str.equals("y2")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 3344108:
                if (str.equals("mask")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
                    c10 = 11;
                    break;
                }
                break;
            case 89650992:
                if (str.equals("gradient")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 217109576:
                if (str.equals("markerStart")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 917656469:
                if (str.equals("clipPath")) {
                    c10 = 14;
                    break;
                }
                break;
            case 917735020:
                if (str.equals("clipRule")) {
                    c10 = 15;
                    break;
                }
                break;
            case 1671764162:
                if (str.equals(ViewProps.DISPLAY)) {
                    c10 = 16;
                    break;
                }
                break;
            case 1822665244:
                if (str.equals("gradientTransform")) {
                    c10 = 17;
                    break;
                }
                break;
            case 1847674614:
                if (str.equals("responsible")) {
                    c10 = 18;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGLinearGradientManagerInterface.setGradientUnits(t10, i10);
                return;
            case 1:
                U u10 = this.mViewManager;
                if (obj == null) {
                    floatValue = 1.0f;
                } else {
                    floatValue = ((Double) obj).floatValue();
                }
                u10.setOpacity(t10, floatValue);
                return;
            case 2:
                ((RNSVGLinearGradientManagerInterface) this.mViewManager).setMatrix(t10, (ReadableArray) obj);
                return;
            case 3:
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface2 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGLinearGradientManagerInterface2.setMarkerEnd(t10, str2);
                return;
            case 4:
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface3 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGLinearGradientManagerInterface3.setMarkerMid(t10, str2);
                return;
            case 5:
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface4 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGLinearGradientManagerInterface4.setPointerEvents(t10, str2);
                return;
            case 6:
                ((RNSVGLinearGradientManagerInterface) this.mViewManager).setX1(t10, new DynamicFromObject(obj));
                return;
            case 7:
                ((RNSVGLinearGradientManagerInterface) this.mViewManager).setX2(t10, new DynamicFromObject(obj));
                return;
            case '\b':
                ((RNSVGLinearGradientManagerInterface) this.mViewManager).setY1(t10, new DynamicFromObject(obj));
                return;
            case '\t':
                ((RNSVGLinearGradientManagerInterface) this.mViewManager).setY2(t10, new DynamicFromObject(obj));
                return;
            case '\n':
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface5 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGLinearGradientManagerInterface5.setMask(t10, str2);
                return;
            case 11:
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface6 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGLinearGradientManagerInterface6.setName(t10, str2);
                return;
            case '\f':
                ((RNSVGLinearGradientManagerInterface) this.mViewManager).setGradient(t10, (ReadableArray) obj);
                return;
            case '\r':
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface7 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGLinearGradientManagerInterface7.setMarkerStart(t10, str2);
                return;
            case 14:
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface8 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGLinearGradientManagerInterface8.setClipPath(t10, str2);
                return;
            case 15:
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface9 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSVGLinearGradientManagerInterface9.setClipRule(t10, i11);
                return;
            case 16:
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface10 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGLinearGradientManagerInterface10.setDisplay(t10, str2);
                return;
            case 17:
                ((RNSVGLinearGradientManagerInterface) this.mViewManager).setGradientTransform(t10, (ReadableArray) obj);
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSVGLinearGradientManagerInterface rNSVGLinearGradientManagerInterface11 = (RNSVGLinearGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGLinearGradientManagerInterface11.setResponsible(t10, z10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
