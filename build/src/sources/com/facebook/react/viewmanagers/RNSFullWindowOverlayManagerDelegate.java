package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSFullWindowOverlayManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSFullWindowOverlayManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSFullWindowOverlayManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSFullWindowOverlayManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        boolean booleanValue;
        str.getClass();
        if (!str.equals("accessibilityContainerViewIsModal")) {
            super.kotlinCompat$setProperty(t10, str, obj);
            return;
        }
        RNSFullWindowOverlayManagerInterface rNSFullWindowOverlayManagerInterface = (RNSFullWindowOverlayManagerInterface) this.mViewManager;
        if (obj == null) {
            booleanValue = true;
        } else {
            booleanValue = ((Boolean) obj).booleanValue();
        }
        rNSFullWindowOverlayManagerInterface.setAccessibilityContainerViewIsModal(t10, booleanValue);
    }
}
