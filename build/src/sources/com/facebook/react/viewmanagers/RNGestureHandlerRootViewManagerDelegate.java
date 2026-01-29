package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNGestureHandlerRootViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNGestureHandlerRootViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNGestureHandlerRootViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNGestureHandlerRootViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        boolean booleanValue;
        str.getClass();
        if (!str.equals("unstable_forceActive")) {
            super.kotlinCompat$setProperty(t10, str, obj);
            return;
        }
        RNGestureHandlerRootViewManagerInterface rNGestureHandlerRootViewManagerInterface = (RNGestureHandlerRootViewManagerInterface) this.mViewManager;
        if (obj == null) {
            booleanValue = false;
        } else {
            booleanValue = ((Boolean) obj).booleanValue();
        }
        rNGestureHandlerRootViewManagerInterface.setUnstable_forceActive(t10, booleanValue);
    }
}
