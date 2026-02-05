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
    private final String f28154a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.o0 f28155b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f28156c;

    /* renamed from: d  reason: collision with root package name */
    private final long f28157d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements io.sentry.hints.e, io.sentry.hints.k, io.sentry.hints.p, io.sentry.hints.i, io.sentry.hints.b, io.sentry.hints.j {

        /* renamed from: a  reason: collision with root package name */
        boolean f28158a;

        /* renamed from: b  reason: collision with root package name */
        boolean f28159b;

        /* renamed from: c  reason: collision with root package name */
        private CountDownLatch f28160c;

        /* renamed from: d  reason: collision with root package name */
        private final long f28161d;

        /* renamed from: e  reason: collision with root package name */
        private final ILogger f28162e;

        public a(long j10, ILogger iLogger) {
            reset();
            this.f28161d = j10;
            this.f28162e = (ILogger) io.sentry.util.y.c(iLogger, "ILogger is required.");
        }

        @Override // io.sentry.hints.k
        public boolean a() {
            return this.f28158a;
        }

        @Override // io.sentry.hints.p
        public void c(boolean z10) {
            this.f28159b = z10;
            this.f28160c.countDown();
        }

        @Override // io.sentry.hints.k
        public void d(boolean z10) {
            this.f28158a = z10;
        }

        @Override // io.sentry.hints.p
        public boolean e() {
            return this.f28159b;
        }

        @Override // io.sentry.hints.i
        public boolean g() {
            try {
                return this.f28160c.await(this.f28161d, TimeUnit.MILLISECONDS);
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                this.f28162e.b(SentryLevel.ERROR, "Exception while awaiting on lock.", e10);
                return false;
            }
        }

        @Override // io.sentry.hints.j
        public void reset() {
            this.f28160c = new CountDownLatch(1);
            this.f28158a = false;
            this.f28159b = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o1(String str, io.sentry.o0 o0Var, ILogger iLogger, long j10) {
        super(str);
        this.f28154a = str;
        this.f28155b = (io.sentry.o0) io.sentry.util.y.c(o0Var, "Envelope sender is required.");
        this.f28156c = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required.");
        this.f28157d = j10;
    }

    @Override // android.os.FileObserver
    public void onEvent(int i10, String str) {
        if (str != null && i10 == 8) {
            this.f28156c.c(SentryLevel.DEBUG, "onEvent fired for EnvelopeFileObserver with event type %d on path: %s for file %s.", Integer.valueOf(i10), this.f28154a, str);
            Hint e10 = io.sentry.util.n.e(new a(this.f28157d, this.f28156c));
            io.sentry.o0 o0Var = this.f28155b;
            o0Var.a(this.f28154a + File.separator + str, e10);
        }
    }
}
