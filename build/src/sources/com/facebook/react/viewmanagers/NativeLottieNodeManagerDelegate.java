package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.NativeLottieNodeManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class NativeLottieNodeManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & NativeLottieNodeManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public NativeLottieNodeManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        if (!str.equals("setup")) {
            return;
        }
        ((NativeLottieNodeManagerInterface) this.mViewManager).setup(t10, readableArray.getString(0), readableArray.getString(1), readableArray.getInt(2), readableArray.getInt(3), readableArray.getInt(4), readableArray.getBoolean(5), readableArray.getString(6));
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        super.kotlinCompat$setProperty(t10, str, obj);
    }
}
