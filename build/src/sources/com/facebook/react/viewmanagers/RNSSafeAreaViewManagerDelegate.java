package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSSafeAreaViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSSafeAreaViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSSafeAreaViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSSafeAreaViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        if (!str.equals("insetType")) {
            if (!str.equals("edges")) {
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
            } else {
                ((RNSSafeAreaViewManagerInterface) this.mViewManager).setEdges(t10, (ReadableMap) obj);
                return;
            }
        }
        ((RNSSafeAreaViewManagerInterface) this.mViewManager).setInsetType(t10, (String) obj);
    }
}
