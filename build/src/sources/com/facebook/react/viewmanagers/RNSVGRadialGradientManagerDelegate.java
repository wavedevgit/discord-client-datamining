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
import com.facebook.react.viewmanagers.RNSVGRadialGradientManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGRadialGradientManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGRadialGradientManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGRadialGradientManagerDelegate(BaseViewManager baseViewManager) {
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
            case 3189:
                if (str.equals("cx")) {
                    c10 = 6;
                    break;
                }
                break;
            case 3190:
                if (str.equals("cy")) {
                    c10 = 7;
                    break;
                }
                break;
            case 3282:
                if (str.equals("fx")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 3283:
                if (str.equals("fy")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 3654:
                if (str.equals("rx")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 3655:
                if (str.equals("ry")) {
                    c10 = 11;
                    break;
                }
                break;
            case 3344108:
                if (str.equals("mask")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
                    c10 = '\r';
                    break;
                }
                break;
            case 89650992:
                if (str.equals("gradient")) {
                    c10 = 14;
                    break;
                }
                break;
            case 217109576:
                if (str.equals("markerStart")) {
                    c10 = 15;
                    break;
                }
                break;
            case 917656469:
                if (str.equals("clipPath")) {
                    c10 = 16;
                    break;
                }
                break;
            case 917735020:
                if (str.equals("clipRule")) {
                    c10 = 17;
                    break;
                }
                break;
            case 1671764162:
                if (str.equals(ViewProps.DISPLAY)) {
                    c10 = 18;
                    break;
                }
                break;
            case 1822665244:
                if (str.equals("gradientTransform")) {
                    c10 = 19;
                    break;
                }
                break;
            case 1847674614:
                if (str.equals("responsible")) {
                    c10 = 20;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGRadialGradientManagerInterface.setGradientUnits(t10, i10);
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
                ((RNSVGRadialGradientManagerInterface) this.mViewManager).setMatrix(t10, (ReadableArray) obj);
                return;
            case 3:
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface2 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGRadialGradientManagerInterface2.setMarkerEnd(t10, str2);
                return;
            case 4:
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface3 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGRadialGradientManagerInterface3.setMarkerMid(t10, str2);
                return;
            case 5:
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface4 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGRadialGradientManagerInterface4.setPointerEvents(t10, str2);
                return;
            case 6:
                ((RNSVGRadialGradientManagerInterface) this.mViewManager).setCx(t10, new DynamicFromObject(obj));
                return;
            case 7:
                ((RNSVGRadialGradientManagerInterface) this.mViewManager).setCy(t10, new DynamicFromObject(obj));
                return;
            case '\b':
                ((RNSVGRadialGradientManagerInterface) this.mViewManager).setFx(t10, new DynamicFromObject(obj));
                return;
            case '\t':
                ((RNSVGRadialGradientManagerInterface) this.mViewManager).setFy(t10, new DynamicFromObject(obj));
                return;
            case '\n':
                ((RNSVGRadialGradientManagerInterface) this.mViewManager).setRx(t10, new DynamicFromObject(obj));
                return;
            case 11:
                ((RNSVGRadialGradientManagerInterface) this.mViewManager).setRy(t10, new DynamicFromObject(obj));
                return;
            case '\f':
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface5 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGRadialGradientManagerInterface5.setMask(t10, str2);
                return;
            case '\r':
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface6 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGRadialGradientManagerInterface6.setName(t10, str2);
                return;
            case 14:
                ((RNSVGRadialGradientManagerInterface) this.mViewManager).setGradient(t10, (ReadableArray) obj);
                return;
            case 15:
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface7 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGRadialGradientManagerInterface7.setMarkerStart(t10, str2);
                return;
            case 16:
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface8 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGRadialGradientManagerInterface8.setClipPath(t10, str2);
                return;
            case 17:
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface9 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                rNSVGRadialGradientManagerInterface9.setClipRule(t10, i11);
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface10 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGRadialGradientManagerInterface10.setDisplay(t10, str2);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                ((RNSVGRadialGradientManagerInterface) this.mViewManager).setGradientTransform(t10, (ReadableArray) obj);
                return;
            case 20:
                RNSVGRadialGradientManagerInterface rNSVGRadialGradientManagerInterface11 = (RNSVGRadialGradientManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGRadialGradientManagerInterface11.setResponsible(t10, z10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
