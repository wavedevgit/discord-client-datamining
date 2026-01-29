package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface FastestListManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void scrollToLocation(T t10, int i10, int i11, boolean z10, int i12);

    void scrollToTop(T t10, boolean z10);

    void setHorizontal(T t10, boolean z10);

    void setInsetEnd(T t10, float f10);

    void setInsetStart(T t10, float f10);

    void setKeyboardDismissOnDrag(T t10, boolean z10);

    void setPlaceholderConfig(T t10, ReadableMap readableMap);

    void setRenderAhead(T t10, String str);

    void setScrollEventThrottle(T t10, int i10);

    void setSectionsVersioned(T t10, ReadableMap readableMap);

    void setShowsHorizontalScrollIndicator(T t10, boolean z10);

    void setShowsVerticalScrollIndicator(T t10, boolean z10);
}
