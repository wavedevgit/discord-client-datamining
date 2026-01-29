package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface RNCSliderManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setAccessibilityIncrements(T t10, ReadableArray readableArray);

    void setAccessibilityUnits(T t10, String str);

    void setDisabled(T t10, boolean z10);

    void setInverted(T t10, boolean z10);

    void setLowerLimit(T t10, float f10);

    void setMaximumTrackImage(T t10, ReadableMap readableMap);

    void setMaximumTrackTintColor(T t10, Integer num);

    void setMaximumValue(T t10, double d10);

    void setMinimumTrackImage(T t10, ReadableMap readableMap);

    void setMinimumTrackTintColor(T t10, Integer num);

    void setMinimumValue(T t10, double d10);

    void setStep(T t10, double d10);

    void setTapToSeek(T t10, boolean z10);

    void setTestID(T t10, String str);

    void setThumbImage(T t10, ReadableMap readableMap);

    void setThumbTintColor(T t10, Integer num);

    void setTrackImage(T t10, ReadableMap readableMap);

    void setUpperLimit(T t10, float f10);

    void setValue(T t10, float f10);

    void setVertical(T t10, boolean z10);
}
