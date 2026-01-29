package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface DCDSegmentedControlManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void setAccessibilityRoleDescriptions(T t10, ReadableArray readableArray);

    void setBackgroundColor(T t10, String str);

    void setCornerRadius(T t10, int i10);

    void setCustomSelectedTintColor(T t10, String str);

    void setSelectedSegmentIndex(T t10, int i10);

    void setSelectedTitleAttributes(T t10, ReadableMap readableMap);

    void setTitleAttributes(T t10, ReadableMap readableMap);

    void setValues(T t10, ReadableArray readableArray);
}
