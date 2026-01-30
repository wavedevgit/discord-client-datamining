package io.sentry;

import java.io.File;
import java.io.FilenameFilter;
import java.util.Queue;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f30704a;

    /* renamed from: b  reason: collision with root package name */
    private final ILogger f30705b;

    /* renamed from: c  reason: collision with root package name */
    private final long f30706c;

    /* renamed from: d  reason: collision with root package name */
    private final Queue f30707d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a implements io.sentry.hints.e, io.sentry.hints.k, io.sentry.hints.p, io.sentry.hints.i, io.sentry.hints.g {

        /* renamed from: a  reason: collision with root package name */
        boolean f30708a = false;

        /* renamed from: b  reason: collision with root package name */
        boolean f30709b = false;

        /* renamed from: c  reason: collision with root package name */
        private final CountDownLatch f30710c = new CountDownLatch(1);

        /* renamed from: d  reason: collision with root package name */
        private final long f30711d;

        /* renamed from: e  reason: collision with root package name */
        private final ILogger f30712e;

        /* renamed from: f  reason: collision with root package name */
        private final String f30713f;

        /* renamed from: g  reason: collision with root package name */
        private final Queue f30714g;

        public a(long j10, ILogger iLogger, String str, Queue queue) {
            this.f30711d = j10;
            this.f30713f = str;
            this.f30714g = queue;
            this.f30712e = iLogger;
        }

        @Override // io.sentry.hints.k
        public boolean a() {
            return this.f30708a;
        }

        @Override // io.sentry.hints.g
        public void b() {
            this.f30714g.add(this.f30713f);
        }

        @Override // io.sentry.hints.p
        public void c(boolean z10) {
            this.f30709b = z10;
            this.f30710c.countDown();
        }

        @Override // io.sentry.hints.k
        public void d(boolean z10) {
            this.f30708a = z10;
        }

        @Override // io.sentry.hints.p
        public boolean e() {
            return this.f30709b;
        }

        @Override // io.sentry.hints.i
        public boolean g() {
            try {
                return this.f30710c.await(this.f30711d, TimeUnit.MILLISECONDS);
            } catch (InterruptedException e10) {
                Thread.currentThread().interrupt();
                this.f30712e.b(SentryLevel.ERROR, "Exception while awaiting on lock.", e10);
                return false;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(w0 w0Var, ILogger iLogger, long j10, int i10) {
        this.f30704a = w0Var;
        this.f30705b = iLogger;
        this.f30706c = j10;
        this.f30707d = o8.d(new e(i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract boolean c(String str);

    public void d(File file) {
        try {
            ILogger iLogger = this.f30705b;
            SentryLevel sentryLevel = SentryLevel.DEBUG;
            iLogger.c(sentryLevel, "Processing dir. %s", file.getAbsolutePath());
            File[] listFiles = file.listFiles(new FilenameFilter() { // from class: io.sentry.r
                @Override // java.io.FilenameFilter
                public final boolean accept(File file2, String str) {
                    boolean c10;
                    c10 = s.this.c(str);
                    return c10;
                }
            });
            if (listFiles == null) {
                this.f30705b.c(SentryLevel.ERROR, "Cache dir %s is null or is not a directory.", file.getAbsolutePath());
                return;
            }
            this.f30705b.c(sentryLevel, "Processing %d items from cache dir %s", Integer.valueOf(listFiles.length), file.getAbsolutePath());
            for (File file2 : listFiles) {
                if (!file2.isFile()) {
                    this.f30705b.c(SentryLevel.DEBUG, "File %s is not a File.", file2.getAbsolutePath());
                } else {
                    String absolutePath = file2.getAbsolutePath();
                    if (this.f30707d.contains(absolutePath)) {
                        this.f30705b.c(SentryLevel.DEBUG, "File '%s' has already been processed so it will not be processed again.", absolutePath);
                    } else {
                        io.sentry.transport.a0 j10 = this.f30704a.j();
                        if (j10 != null && j10.L(j.All)) {
                            this.f30705b.c(SentryLevel.INFO, "DirectoryProcessor, rate limiting active.", new Object[0]);
                            return;
                        }
                        this.f30705b.c(SentryLevel.DEBUG, "Processing file: %s", absolutePath);
                        e(file2, io.sentry.util.n.e(new a(this.f30706c, this.f30705b, absolutePath, this.f30707d)));
                        Thread.sleep(100L);
                    }
                }
            }
        } catch (Throwable th2) {
            this.f30705b.a(SentryLevel.ERROR, th2, "Failed processing '%s'", file.getAbsolutePath());
        }
    }

    protected abstract void e(File file, Hint hint);
}
