package io.sentry.hints;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d implements f, i {

    /* renamed from: a  reason: collision with root package name */
    private final CountDownLatch f29607a = new CountDownLatch(1);

    /* renamed from: b  reason: collision with root package name */
    private final long f29608b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f29609c;

    public d(long j10, ILogger iLogger) {
        this.f29608b = j10;
        this.f29609c = iLogger;
    }

    @Override // io.sentry.hints.f
    public void d() {
        this.f29607a.countDown();
    }

    @Override // io.sentry.hints.i
    public boolean g() {
        try {
            return this.f29607a.await(this.f29608b, TimeUnit.MILLISECONDS);
        } catch (InterruptedException e10) {
            Thread.currentThread().interrupt();
            this.f29609c.b(SentryLevel.ERROR, "Exception while awaiting for flush in BlockingFlushHint", e10);
            return false;
        }
    }
}
