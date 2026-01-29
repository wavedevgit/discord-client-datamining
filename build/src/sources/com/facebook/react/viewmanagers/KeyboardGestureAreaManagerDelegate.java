package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.KeyboardGestureAreaManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class KeyboardGestureAreaManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & KeyboardGestureAreaManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public KeyboardGestureAreaManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        double doubleValue;
        String str2;
        str.getClass();
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1109019111:
                if (str.equals("showOnSwipeUp")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1019779949:
                if (str.equals("offset")) {
                    c10 = 1;
                    break;
                }
                break;
            case -889553617:
                if (str.equals("textInputNativeID")) {
                    c10 = 2;
                    break;
                }
                break;
            case -98566696:
                if (str.equals("enableSwipeToDismiss")) {
                    c10 = 3;
                    break;
                }
                break;
            case 2096253127:
                if (str.equals("interpolator")) {
                    c10 = 4;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                KeyboardGestureAreaManagerInterface keyboardGestureAreaManagerInterface = (KeyboardGestureAreaManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                keyboardGestureAreaManagerInterface.setShowOnSwipeUp(t10, z10);
                return;
            case 1:
                KeyboardGestureAreaManagerInterface keyboardGestureAreaManagerInterface2 = (KeyboardGestureAreaManagerInterface) this.mViewManager;
                if (obj == null) {
                    doubleValue = 0.0d;
                } else {
                    doubleValue = ((Double) obj).doubleValue();
                }
                keyboardGestureAreaManagerInterface2.setOffset(t10, doubleValue);
                return;
            case 2:
                KeyboardGestureAreaManagerInterface keyboardGestureAreaManagerInterface3 = (KeyboardGestureAreaManagerInterface) this.mViewManager;
                if (obj == null) {
                    str2 = null;
                } else {
                    str2 = (String) obj;
                }
                keyboardGestureAreaManagerInterface3.setTextInputNativeID(t10, str2);
                return;
            case 3:
                KeyboardGestureAreaManagerInterface keyboardGestureAreaManagerInterface4 = (KeyboardGestureAreaManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                keyboardGestureAreaManagerInterface4.setEnableSwipeToDismiss(t10, z10);
                return;
            case 4:
                ((KeyboardGestureAreaManagerInterface) this.mViewManager).setInterpolator(t10, (String) obj);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
