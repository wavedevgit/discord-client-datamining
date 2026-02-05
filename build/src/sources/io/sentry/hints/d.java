package io.sentry.hints;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d implements f, i {

    /* renamed from: a  reason: collision with root package name */
    private final CountDownLatch f29026a = new CountDownLatch(1);

    /* renamed from: b  reason: collision with root package name */
    private final long f29027b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f29028c;

    public d(long j10, ILogger iLogger) {
        this.f29027b = j10;
        this.f29028c = iLogger;
    }

    @Override // io.sentry.hints.f
    public void d() {
        this.f29026a.countDown();
    }

    @Override // io.sentry.hints.i
    public boolean g() {
        try {
            return this.f29026a.await(this.f29027b, TimeUnit.MILLISECONDS);
        } catch (InterruptedException e10) {
            Thread.currentThread().interrupt();
            this.f29028c.b(SentryLevel.ERROR, "Exception while awaiting for flush in BlockingFlushHint", e10);
            return false;
        }
    }
}
