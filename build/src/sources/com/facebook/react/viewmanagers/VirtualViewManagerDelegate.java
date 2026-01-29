package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.VirtualViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class VirtualViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & VirtualViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public VirtualViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        int i10 = 0;
        boolean z10 = false;
        if (!str.equals("renderState")) {
            if (!str.equals("initialHidden")) {
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
            }
            VirtualViewManagerInterface virtualViewManagerInterface = (VirtualViewManagerInterface) this.mViewManager;
            if (obj != null) {
                z10 = ((Boolean) obj).booleanValue();
            }
            virtualViewManagerInterface.setInitialHidden(t10, z10);
            return;
        }
        VirtualViewManagerInterface virtualViewManagerInterface2 = (VirtualViewManagerInterface) this.mViewManager;
        if (obj != null) {
            i10 = ((Double) obj).intValue();
        }
        virtualViewManagerInterface2.setRenderState(t10, i10);
    }
}
