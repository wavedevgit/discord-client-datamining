package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface DCDChatManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void scrollIntoView(T t10, int i10, boolean z10, boolean z11);

    void scrollTo(T t10, int i10, boolean z10, boolean z11, int i11);

    void scrollToBottom(T t10, boolean z10);

    void setAdjustContentOffsetWithBounds(T t10, Boolean bool);

    void setAlwaysRespectKeyboard(T t10, Boolean bool);

    void setAnimateEmoji(T t10, Boolean bool);

    void setHACK_fixModalInteraction(T t10, Boolean bool);

    void setInverted(T t10, boolean z10);

    void setKeyboardBackgroundRgba(T t10, String str);

    void setRoleStyle(T t10, String str);
}
