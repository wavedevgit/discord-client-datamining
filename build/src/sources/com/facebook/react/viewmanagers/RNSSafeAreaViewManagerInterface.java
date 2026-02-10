package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface RNSSafeAreaViewManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setEdges(T t10, ReadableMap readableMap);

    void setInsetType(T t10, String str);
}
