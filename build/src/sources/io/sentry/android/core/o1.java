package io.sentry.android.core;

import android.os.FileObserver;
import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import java.io.File;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o1 extends FileObserver {

    /* renamed from: a  reason: collision with root package name */
    private final String f29169a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.o0 f29170b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f29171c;

    /* renamed from: d  reason: collision with root package name */
    private final long f29172d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements io.sentry.hints.e, io.sentry.hints.k, io.sentry.hints.p, io.sentry.hints.i, io.sentry.hints.b, io.sentry.hints.j {

        /* renamed from: a  reason: collision with root package name */
        boolean f29173a;

        /* renamed from: b  reason: collision with root package name */
        boolean f29174b;

        /* renamed from: c  reason: collision with root package name */
        private CountDownLatch f29175c;

        /* renamed from: d  reason: collision with root package name */
        private final long f29176d;

        /* renamed from: e  reason: collision with root package name */
        private final ILogger f29177e;

        public a(long j10, ILogger iLogger) {
            reset();
            this.f29176d = j10;
            this.f29177e = (ILogger) io.sentry.util.y.c(iLogger, "ILogger is required.");
        }

        @Override // io.sentry.hints.k
        public boolean a() {
            return this.f29173a;
        }

        @Override // io.sentry.hints.p
        public void c(boolean z10) {
            this.f29174b = z10;
            this.f29175c.countDown();
        }

        @Override // io.sentry.hints.k
        public void d(boolean z10) {
            this.f29173a = z10;
        }

        @Override // io.sentry.hints.p
        public boolean e() {
            return this.f29174b;
        }

        @Override // io.sentry.hints.i
        public boolean g() {
            try {
                return this.f29175c.await(this.f29176d, TimeUnit.MILLISECONDS);
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                this.f29177e.b(SentryLevel.ERROR, "Exception while awaiting on lock.", e10);
                return false;
            }
        }

        @Override // io.sentry.hints.j
        public void reset() {
            this.f29175c = new CountDownLatch(1);
            this.f29173a = false;
            this.f29174b = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o1(String str, io.sentry.o0 o0Var, ILogger iLogger, long j10) {
        super(str);
        this.f29169a = str;
        this.f29170b = (io.sentry.o0) io.sentry.util.y.c(o0Var, "Envelope sender is required.");
        this.f29171c = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required.");
        this.f29172d = j10;
    }

    @Override // android.os.FileObserver
    public void onEvent(int i10, String str) {
        if (str != null && i10 == 8) {
            this.f29171c.c(SentryLevel.DEBUG, "onEvent fired for EnvelopeFileObserver with event type %d on path: %s for file %s.", Integer.valueOf(i10), this.f29169a, str);
            Hint e10 = io.sentry.util.n.e(new a(this.f29172d, this.f29171c));
            io.sentry.o0 o0Var = this.f29170b;
            o0Var.a(this.f29169a + File.separator + str, e10);
        }
    }
}
