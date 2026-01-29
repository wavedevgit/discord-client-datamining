package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.ViewManagerWithGeneratedInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface APNGDecorationViewManagerInterface<T extends View> extends ViewManagerWithGeneratedInterface {
    void pause(T t10);

    void play(T t10);

    void seek(T t10, int i10);

    void setAutoplay(T t10, boolean z10);

    void setUrl(T t10, String str);
}
