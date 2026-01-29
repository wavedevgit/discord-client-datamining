package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface RNLinearGradientManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setAngle(T t10, float f10);

    void setAngleCenter(T t10, ReadableMap readableMap);

    void setBorderRadii(T t10, ReadableArray readableArray);

    void setColors(T t10, ReadableArray readableArray);

    void setEndPoint(T t10, ReadableMap readableMap);

    void setLocations(T t10, ReadableArray readableArray);

    void setStartPoint(T t10, ReadableMap readableMap);

    void setUseAngle(T t10, boolean z10);
}
