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
    private final String f28735a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.o0 f28736b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f28737c;

    /* renamed from: d  reason: collision with root package name */
    private final long f28738d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements io.sentry.hints.e, io.sentry.hints.k, io.sentry.hints.p, io.sentry.hints.i, io.sentry.hints.b, io.sentry.hints.j {

        /* renamed from: a  reason: collision with root package name */
        boolean f28739a;

        /* renamed from: b  reason: collision with root package name */
        boolean f28740b;

        /* renamed from: c  reason: collision with root package name */
        private CountDownLatch f28741c;

        /* renamed from: d  reason: collision with root package name */
        private final long f28742d;

        /* renamed from: e  reason: collision with root package name */
        private final ILogger f28743e;

        public a(long j10, ILogger iLogger) {
            reset();
            this.f28742d = j10;
            this.f28743e = (ILogger) io.sentry.util.y.c(iLogger, "ILogger is required.");
        }

        @Override // io.sentry.hints.k
        public boolean a() {
            return this.f28739a;
        }

        @Override // io.sentry.hints.p
        public void c(boolean z10) {
            this.f28740b = z10;
            this.f28741c.countDown();
        }

        @Override // io.sentry.hints.k
        public void d(boolean z10) {
            this.f28739a = z10;
        }

        @Override // io.sentry.hints.p
        public boolean e() {
            return this.f28740b;
        }

        @Override // io.sentry.hints.i
        public boolean g() {
            try {
                return this.f28741c.await(this.f28742d, TimeUnit.MILLISECONDS);
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                this.f28743e.b(SentryLevel.ERROR, "Exception while awaiting on lock.", e10);
                return false;
            }
        }

        @Override // io.sentry.hints.j
        public void reset() {
            this.f28741c = new CountDownLatch(1);
            this.f28739a = false;
            this.f28740b = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public o1(String str, io.sentry.o0 o0Var, ILogger iLogger, long j10) {
        super(str);
        this.f28735a = str;
        this.f28736b = (io.sentry.o0) io.sentry.util.y.c(o0Var, "Envelope sender is required.");
        this.f28737c = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required.");
        this.f28738d = j10;
    }

    @Override // android.os.FileObserver
    public void onEvent(int i10, String str) {
        if (str != null && i10 == 8) {
            this.f28737c.c(SentryLevel.DEBUG, "onEvent fired for EnvelopeFileObserver with event type %d on path: %s for file %s.", Integer.valueOf(i10), this.f28735a, str);
            Hint e10 = io.sentry.util.n.e(new a(this.f28738d, this.f28737c));
            io.sentry.o0 o0Var = this.f28736b;
            o0Var.a(this.f28735a + File.separator + str, e10);
        }
    }
}
