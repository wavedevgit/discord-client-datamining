package io.sentry.android.core.performance;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j extends io.sentry.android.core.internal.gestures.j {

    /* renamed from: e  reason: collision with root package name */
    private final Runnable f29158e;

    public j(Window.Callback callback, Runnable runnable) {
        super(callback);
        this.f29158e = runnable;
    }

    @Override // io.sentry.android.core.internal.gestures.j, android.view.Window.Callback
    public void onContentChanged() {
        super.onContentChanged();
        this.f29158e.run();
    }
}
