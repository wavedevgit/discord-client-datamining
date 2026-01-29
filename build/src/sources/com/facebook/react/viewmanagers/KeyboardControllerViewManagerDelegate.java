package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.KeyboardControllerViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class KeyboardControllerViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & KeyboardControllerViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public KeyboardControllerViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1609594047:
                if (str.equals(ViewProps.ENABLED)) {
                    c10 = 0;
                    break;
                }
                break;
            case -1156137512:
                if (str.equals("statusBarTranslucent")) {
                    c10 = 1;
                    break;
                }
                break;
            case -418075039:
                if (str.equals("preserveEdgeToEdge")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1116050554:
                if (str.equals("navigationBarTranslucent")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                KeyboardControllerViewManagerInterface keyboardControllerViewManagerInterface = (KeyboardControllerViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                keyboardControllerViewManagerInterface.setEnabled(t10, z10);
                return;
            case 1:
                KeyboardControllerViewManagerInterface keyboardControllerViewManagerInterface2 = (KeyboardControllerViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                keyboardControllerViewManagerInterface2.setStatusBarTranslucent(t10, z10);
                return;
            case 2:
                KeyboardControllerViewManagerInterface keyboardControllerViewManagerInterface3 = (KeyboardControllerViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                keyboardControllerViewManagerInterface3.setPreserveEdgeToEdge(t10, z10);
                return;
            case 3:
                KeyboardControllerViewManagerInterface keyboardControllerViewManagerInterface4 = (KeyboardControllerViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                keyboardControllerViewManagerInterface4.setNavigationBarTranslucent(t10, z10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
