package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface EmojiPickerViewManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void refreshEmojis(T t10);

    void scrollToHeaderIndex(T t10, int i10, boolean z10);

    void scrollingEnabled(T t10, boolean z10);

    void setConfig(T t10, ReadableMap readableMap);

    void setEmojiData(T t10, ReadableMap readableMap);

    void setEmojiMargin(T t10, int i10);

    void setEmojiSize(T t10, int i10);

    void setPaddingBottom(T t10, float f10);

    void setPaddingTop(T t10, float f10);

    void setUseTier0UpsellContent(T t10, boolean z10);
}
