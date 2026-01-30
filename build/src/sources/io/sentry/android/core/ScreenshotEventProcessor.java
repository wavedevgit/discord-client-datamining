package io.sentry.android.core;

import android.app.Activity;
import android.graphics.Bitmap;
import com.reactnativecommunity.clipboard.ClipboardModule;
import io.sentry.Hint;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ScreenshotEventProcessor implements io.sentry.b0 {

    /* renamed from: d  reason: collision with root package name */
    private final SentryAndroidOptions f28825d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f28826e;

    /* renamed from: i  reason: collision with root package name */
    private final io.sentry.android.core.internal.util.n f28827i = new io.sentry.android.core.internal.util.n(io.sentry.android.core.internal.util.f.b(), 2000, 3);

    public ScreenshotEventProcessor(SentryAndroidOptions sentryAndroidOptions, x0 x0Var) {
        this.f28825d = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f28826e = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
        if (sentryAndroidOptions.isAttachScreenshot()) {
            io.sentry.util.p.a("Screenshot");
        }
    }

    @Override // io.sentry.b0
    public SentryEvent h(SentryEvent sentryEvent, Hint hint) {
        final Bitmap c10;
        if (sentryEvent.B0()) {
            if (!this.f28825d.isAttachScreenshot()) {
                this.f28825d.getLogger().c(SentryLevel.DEBUG, "attachScreenshot is disabled.", new Object[0]);
                return sentryEvent;
            }
            Activity b10 = f1.c().b();
            if (b10 != null && !io.sentry.util.n.i(hint)) {
                boolean a10 = this.f28827i.a();
                this.f28825d.getBeforeScreenshotCaptureCallback();
                if (!a10 && (c10 = io.sentry.android.core.internal.util.w.c(b10, this.f28825d.getThreadChecker(), this.f28825d.getLogger(), this.f28826e)) != null) {
                    hint.m(io.sentry.b.a(new Callable() { // from class: io.sentry.android.core.f2
                        @Override // java.util.concurrent.Callable
                        public final Object call() {
                            byte[] d10;
                            d10 = io.sentry.android.core.internal.util.w.d(c10, ScreenshotEventProcessor.this.f28825d.getLogger());
                            return d10;
                        }
                    }, "screenshot.png", ClipboardModule.MIMETYPE_PNG, false));
                    hint.k("android:activity", b10);
                }
            }
        }
        return sentryEvent;
    }

    @Override // io.sentry.b0
    public io.sentry.protocol.d0 l(io.sentry.protocol.d0 d0Var, Hint hint) {
        return d0Var;
    }
}
