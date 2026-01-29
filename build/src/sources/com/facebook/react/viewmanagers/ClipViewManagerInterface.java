package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface ClipViewManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setBorderRadius(T t10, int i10);

    void setClipToCircle(T t10, boolean z10);

    void setCutouts(T t10, ReadableArray readableArray);
}
