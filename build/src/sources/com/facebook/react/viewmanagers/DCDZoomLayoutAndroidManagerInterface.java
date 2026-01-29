package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface DCDZoomLayoutAndroidManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setGestureEnabled(T t10, boolean z10);

    void setMaximumZoomScale(T t10, float f10);

    void setMinimumZoomScale(T t10, float f10);

    void unzoom(T t10, boolean z10);

    void zoomTo(T t10, float f10, float f11, float f12, boolean z10);
}
