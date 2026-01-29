package io.sentry.android.ndk;

import io.sentry.android.core.SentryAndroidOptions;
import io.sentry.android.core.q1;
import io.sentry.k7;
import io.sentry.ndk.NativeModuleListLoader;
import io.sentry.util.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements q1 {

    /* renamed from: c  reason: collision with root package name */
    protected static final io.sentry.util.a f29315c = new io.sentry.util.a();

    /* renamed from: a  reason: collision with root package name */
    private final k7 f29316a;

    /* renamed from: b  reason: collision with root package name */
    private final NativeModuleListLoader f29317b;

    public a(SentryAndroidOptions sentryAndroidOptions, NativeModuleListLoader nativeModuleListLoader) {
        this.f29316a = (k7) y.c(sentryAndroidOptions, "The SentryAndroidOptions is required.");
        this.f29317b = (NativeModuleListLoader) y.c(nativeModuleListLoader, "The NativeModuleListLoader is required.");
    }
}
