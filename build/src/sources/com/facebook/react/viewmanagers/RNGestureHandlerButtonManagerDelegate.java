package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.RNGestureHandlerButtonManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNGestureHandlerButtonManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNGestureHandlerButtonManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNGestureHandlerButtonManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        String str2;
        float floatValue;
        str.getClass();
        boolean z10 = true;
        int i10 = 0;
        boolean z11 = false;
        boolean z12 = false;
        boolean z13 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -2143114526:
                if (str.equals("rippleRadius")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1609594047:
                if (str.equals(ViewProps.ENABLED)) {
                    c10 = 1;
                    break;
                }
                break;
            case -775297261:
                if (str.equals("rippleColor")) {
                    c10 = 2;
                    break;
                }
                break;
            case 722830999:
                if (str.equals(ViewProps.BORDER_COLOR)) {
                    c10 = 3;
                    break;
                }
                break;
            case 737768677:
                if (str.equals("borderStyle")) {
                    c10 = 4;
                    break;
                }
                break;
            case 741115130:
                if (str.equals(ViewProps.BORDER_WIDTH)) {
                    c10 = 5;
                    break;
                }
                break;
            case 1387411372:
                if (str.equals("touchSoundDisabled")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1686617758:
                if (str.equals("exclusive")) {
                    c10 = 7;
                    break;
                }
                break;
            case 1825644485:
                if (str.equals("borderless")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 1984457027:
                if (str.equals("foreground")) {
                    c10 = '\t';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                RNGestureHandlerButtonManagerInterface rNGestureHandlerButtonManagerInterface = (RNGestureHandlerButtonManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                rNGestureHandlerButtonManagerInterface.setRippleRadius(t10, i10);
                return;
            case 1:
                RNGestureHandlerButtonManagerInterface rNGestureHandlerButtonManagerInterface2 = (RNGestureHandlerButtonManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNGestureHandlerButtonManagerInterface2.setEnabled(t10, z10);
                return;
            case 2:
                ((RNGestureHandlerButtonManagerInterface) this.mViewManager).setRippleColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 3:
                ((RNGestureHandlerButtonManagerInterface) this.mViewManager).setBorderColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 4:
                RNGestureHandlerButtonManagerInterface rNGestureHandlerButtonManagerInterface3 = (RNGestureHandlerButtonManagerInterface) this.mViewManager;
                if (obj == null) {
                    str2 = "solid";
                } else {
                    str2 = (String) obj;
                }
                rNGestureHandlerButtonManagerInterface3.setBorderStyle(t10, str2);
                return;
            case 5:
                RNGestureHandlerButtonManagerInterface rNGestureHandlerButtonManagerInterface4 = (RNGestureHandlerButtonManagerInterface) this.mViewManager;
                if (obj == null) {
                    floatValue = 0.0f;
                } else {
                    floatValue = ((Double) obj).floatValue();
                }
                rNGestureHandlerButtonManagerInterface4.setBorderWidth(t10, floatValue);
                return;
            case 6:
                RNGestureHandlerButtonManagerInterface rNGestureHandlerButtonManagerInterface5 = (RNGestureHandlerButtonManagerInterface) this.mViewManager;
                if (obj != null) {
                    z13 = ((Boolean) obj).booleanValue();
                }
                rNGestureHandlerButtonManagerInterface5.setTouchSoundDisabled(t10, z13);
                return;
            case 7:
                RNGestureHandlerButtonManagerInterface rNGestureHandlerButtonManagerInterface6 = (RNGestureHandlerButtonManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNGestureHandlerButtonManagerInterface6.setExclusive(t10, z10);
                return;
            case '\b':
                RNGestureHandlerButtonManagerInterface rNGestureHandlerButtonManagerInterface7 = (RNGestureHandlerButtonManagerInterface) this.mViewManager;
                if (obj != null) {
                    z12 = ((Boolean) obj).booleanValue();
                }
                rNGestureHandlerButtonManagerInterface7.setBorderless(t10, z12);
                return;
            case '\t':
                RNGestureHandlerButtonManagerInterface rNGestureHandlerButtonManagerInterface8 = (RNGestureHandlerButtonManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNGestureHandlerButtonManagerInterface8.setForeground(t10, z11);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
