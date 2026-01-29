package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.SelectActionComponentViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class SelectActionComponentViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & SelectActionComponentViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public SelectActionComponentViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        if (!str.equals("model")) {
            super.kotlinCompat$setProperty(t10, str, obj);
        } else {
            ((SelectActionComponentViewManagerInterface) this.mViewManager).setModel(t10, (ReadableMap) obj);
        }
    }
}
