package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface DCDChatInputManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void backspace(T t10);

    void blur(T t10);

    void flushText(T t10, String str);

    void focus(T t10);

    void openCustomKeyboard(T t10);

    void openSystemKeyboard(T t10);

    void replaceRange(T t10, int i10, int i11, String str, String str2, boolean z10, String str3);

    void setEditable(T t10, boolean z10);

    void setKeyboardAppearance(T t10, int i10);

    void setKeyboardType(T t10, String str);

    void setMarkAsSpoilerTitle(T t10, String str);

    void setMaxHeight(T t10, float f10);

    void setPlaceholder(T t10, String str);

    void setPlaceholderColor(T t10, String str);

    void setSelectedRange(T t10, int i10, int i11);

    void setSelectionColor(T t10, String str);

    void setSetNoExtractUI(T t10, boolean z10);

    void setShouldShowCursor(T t10, boolean z10);

    void setText(T t10, String str);

    void setTextColor(T t10, String str);

    void updateTextBlocks(T t10, String str, String str2);
}
