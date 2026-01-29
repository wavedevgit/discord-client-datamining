package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.CellContainerManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class CellContainerManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & CellContainerManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public CellContainerManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        int intValue;
        str.getClass();
        if (!str.equals("index")) {
            super.kotlinCompat$setProperty(t10, str, obj);
            return;
        }
        CellContainerManagerInterface cellContainerManagerInterface = (CellContainerManagerInterface) this.mViewManager;
        if (obj == null) {
            intValue = 0;
        } else {
            intValue = ((Double) obj).intValue();
        }
        cellContainerManagerInterface.setIndex(t10, intValue);
    }
}
