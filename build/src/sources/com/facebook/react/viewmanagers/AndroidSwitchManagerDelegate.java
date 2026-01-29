package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.AndroidSwitchManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AndroidSwitchManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & AndroidSwitchManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public AndroidSwitchManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        if (!str.equals("setNativeValue")) {
            return;
        }
        ((AndroidSwitchManagerInterface) this.mViewManager).setNativeValue(t10, readableArray.getBoolean(0));
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = true;
        boolean z11 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1742453971:
                if (str.equals("thumbColor")) {
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
            case -287374307:
                if (str.equals("trackTintColor")) {
                    c10 = 2;
                    break;
                }
                break;
            case 3551:
                if (str.equals(ViewProps.ON)) {
                    c10 = 3;
                    break;
                }
                break;
            case 111972721:
                if (str.equals("value")) {
                    c10 = 4;
                    break;
                }
                break;
            case 270940796:
                if (str.equals("disabled")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1084662482:
                if (str.equals("trackColorForFalse")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1912319986:
                if (str.equals("thumbTintColor")) {
                    c10 = 7;
                    break;
                }
                break;
            case 2113632767:
                if (str.equals("trackColorForTrue")) {
                    c10 = '\b';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((AndroidSwitchManagerInterface) this.mViewManager).setThumbColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 1:
                AndroidSwitchManagerInterface androidSwitchManagerInterface = (AndroidSwitchManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                androidSwitchManagerInterface.setEnabled(t10, z10);
                return;
            case 2:
                ((AndroidSwitchManagerInterface) this.mViewManager).setTrackTintColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 3:
                AndroidSwitchManagerInterface androidSwitchManagerInterface2 = (AndroidSwitchManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                androidSwitchManagerInterface2.setOn(t10, z11);
                return;
            case 4:
                AndroidSwitchManagerInterface androidSwitchManagerInterface3 = (AndroidSwitchManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                androidSwitchManagerInterface3.setValue(t10, z11);
                return;
            case 5:
                AndroidSwitchManagerInterface androidSwitchManagerInterface4 = (AndroidSwitchManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                androidSwitchManagerInterface4.setDisabled(t10, z11);
                return;
            case 6:
                ((AndroidSwitchManagerInterface) this.mViewManager).setTrackColorForFalse(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 7:
                ((AndroidSwitchManagerInterface) this.mViewManager).setThumbTintColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case '\b':
                ((AndroidSwitchManagerInterface) this.mViewManager).setTrackColorForTrue(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
