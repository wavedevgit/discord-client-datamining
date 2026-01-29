package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.DCDPortalViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DCDPortalViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & DCDPortalViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public DCDPortalViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        double doubleValue;
        str.getClass();
        if (!str.equals("portal")) {
            super.kotlinCompat$setProperty(t10, str, obj);
            return;
        }
        DCDPortalViewManagerInterface dCDPortalViewManagerInterface = (DCDPortalViewManagerInterface) this.mViewManager;
        if (obj == null) {
            doubleValue = Double.NaN;
        } else {
            doubleValue = ((Double) obj).doubleValue();
        }
        dCDPortalViewManagerInterface.setPortal(t10, doubleValue);
    }
}
