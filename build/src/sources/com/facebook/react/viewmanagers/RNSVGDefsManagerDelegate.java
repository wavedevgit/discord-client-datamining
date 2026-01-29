package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.RNSVGDefsManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGDefsManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGDefsManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGDefsManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        float floatValue;
        str.getClass();
        int i10 = 0;
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1267206133:
                if (str.equals(ViewProps.OPACITY)) {
                    c10 = 0;
                    break;
                }
                break;
            case -1081239615:
                if (str.equals("matrix")) {
                    c10 = 1;
                    break;
                }
                break;
            case -933864895:
                if (str.equals("markerEnd")) {
                    c10 = 2;
                    break;
                }
                break;
            case -933857362:
                if (str.equals("markerMid")) {
                    c10 = 3;
                    break;
                }
                break;
            case -293492298:
                if (str.equals(ViewProps.POINTER_EVENTS)) {
                    c10 = 4;
                    break;
                }
                break;
            case 3344108:
                if (str.equals("mask")) {
                    c10 = 5;
                    break;
                }
                break;
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
                    c10 = 6;
                    break;
                }
                break;
            case 217109576:
                if (str.equals("markerStart")) {
                    c10 = 7;
                    break;
                }
                break;
            case 917656469:
                if (str.equals("clipPath")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 917735020:
                if (str.equals("clipRule")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 1671764162:
                if (str.equals(ViewProps.DISPLAY)) {
                    c10 = '\n';
                    break;
                }
                break;
            case 1847674614:
                if (str.equals("responsible")) {
                    c10 = 11;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                U u10 = this.mViewManager;
                if (obj == null) {
                    floatValue = 1.0f;
                } else {
                    floatValue = ((Double) obj).floatValue();
                }
                u10.setOpacity(t10, floatValue);
                return;
            case 1:
                ((RNSVGDefsManagerInterface) this.mViewManager).setMatrix(t10, (ReadableArray) obj);
                return;
            case 2:
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGDefsManagerInterface.setMarkerEnd(t10, str2);
                return;
            case 3:
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface2 = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGDefsManagerInterface2.setMarkerMid(t10, str2);
                return;
            case 4:
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface3 = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGDefsManagerInterface3.setPointerEvents(t10, str2);
                return;
            case 5:
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface4 = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGDefsManagerInterface4.setMask(t10, str2);
                return;
            case 6:
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface5 = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGDefsManagerInterface5.setName(t10, str2);
                return;
            case 7:
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface6 = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGDefsManagerInterface6.setMarkerStart(t10, str2);
                return;
            case '\b':
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface7 = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGDefsManagerInterface7.setClipPath(t10, str2);
                return;
            case '\t':
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface8 = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNSVGDefsManagerInterface8.setClipRule(t10, i10);
                return;
            case '\n':
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface9 = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGDefsManagerInterface9.setDisplay(t10, str2);
                return;
            case 11:
                RNSVGDefsManagerInterface rNSVGDefsManagerInterface10 = (RNSVGDefsManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSVGDefsManagerInterface10.setResponsible(t10, z10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
