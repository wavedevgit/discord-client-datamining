package io.sentry.hints;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d implements f, i {

    /* renamed from: a  reason: collision with root package name */
    private final CountDownLatch f28218a = new CountDownLatch(1);

    /* renamed from: b  reason: collision with root package name */
    private final long f28219b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f28220c;

    public d(long j10, ILogger iLogger) {
        this.f28219b = j10;
        this.f28220c = iLogger;
    }

    @Override // io.sentry.hints.f
    public void d() {
        this.f28218a.countDown();
    }

    @Override // io.sentry.hints.i
    public boolean g() {
        try {
            return this.f28218a.await(this.f28219b, TimeUnit.MILLISECONDS);
        } catch (InterruptedException e10) {
            Thread.currentThread().interrupt();
            this.f28220c.b(SentryLevel.ERROR, "Exception while awaiting for flush in BlockingFlushHint", e10);
            return false;
        }
    }
}
