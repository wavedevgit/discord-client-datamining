package io.sentry;

import io.sentry.util.n;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 extends s implements o0 {

    /* renamed from: e  reason: collision with root package name */
    private final w0 f28307e;

    /* renamed from: f  reason: collision with root package name */
    private final b1 f28308f;

    /* renamed from: g  reason: collision with root package name */
    private final ILogger f28309g;

    public a0(w0 w0Var, b1 b1Var, ILogger iLogger, long j10, int i10) {
        super(w0Var, iLogger, j10, i10);
        this.f28307e = (w0) io.sentry.util.y.c(w0Var, "Scopes are required.");
        this.f28308f = (b1) io.sentry.util.y.c(b1Var, "Serializer is required.");
        this.f28309g = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required.");
    }

    public static /* synthetic */ void f(a0 a0Var, io.sentry.hints.i iVar) {
        a0Var.getClass();
        if (!iVar.g()) {
            a0Var.f28309g.c(SentryLevel.WARNING, "Timed out waiting for envelope submission.", new Object[0]);
        }
    }

    public static /* synthetic */ void g(a0 a0Var, File file, io.sentry.hints.k kVar) {
        a0Var.getClass();
        if (!kVar.a()) {
            a0Var.i(file, "after trying to capture it");
            a0Var.f28309g.c(SentryLevel.DEBUG, "Deleted file %s.", file.getAbsolutePath());
            return;
        }
        a0Var.f28309g.c(SentryLevel.INFO, "File not deleted since retry was marked. %s.", file.getAbsolutePath());
    }

    public static /* synthetic */ void h(a0 a0Var, Throwable th2, File file, io.sentry.hints.k kVar) {
        a0Var.getClass();
        kVar.d(false);
        a0Var.f28309g.a(SentryLevel.INFO, th2, "File '%s' won't retry.", file.getAbsolutePath());
    }

    private void i(File file, String str) {
        try {
            if (!file.delete()) {
                this.f28309g.c(SentryLevel.ERROR, "Failed to delete '%s' %s", file.getAbsolutePath(), str);
            }
        } catch (Throwable th2) {
            this.f28309g.a(SentryLevel.ERROR, th2, "Failed to delete '%s' %s", file.getAbsolutePath(), str);
        }
    }

    @Override // io.sentry.o0
    public void a(String str, Hint hint) {
        io.sentry.util.y.c(str, "Path is required.");
        e(new File(str), hint);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // io.sentry.s
    public boolean c(String str) {
        return str.endsWith(".envelope");
    }

    @Override // io.sentry.s
    public /* bridge */ /* synthetic */ void d(File file) {
        super.d(file);
    }

    @Override // io.sentry.s
    protected void e(final File file, Hint hint) {
        ILogger iLogger;
        n.a aVar;
        if (!file.isFile()) {
            this.f28309g.c(SentryLevel.DEBUG, "'%s' is not a file.", file.getAbsolutePath());
        } else if (!c(file.getName())) {
            this.f28309g.c(SentryLevel.DEBUG, "File '%s' doesn't match extension expected.", file.getAbsolutePath());
        } else {
            try {
                if (!file.getParentFile().canWrite()) {
                    this.f28309g.c(SentryLevel.WARNING, "File '%s' cannot be deleted so it will not be processed.", file.getAbsolutePath());
                    return;
                }
                try {
                    try {
                        BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));
                        try {
                            l5 d10 = this.f28308f.d(bufferedInputStream);
                            if (d10 == null) {
                                this.f28309g.c(SentryLevel.ERROR, "Failed to deserialize cached envelope %s", file.getAbsolutePath());
                            } else {
                                this.f28307e.m(d10, hint);
                            }
                            io.sentry.util.n.m(hint, io.sentry.hints.i.class, this.f28309g, new n.a() { // from class: io.sentry.x
                                @Override // io.sentry.util.n.a
                                public final void accept(Object obj) {
                                    a0.f(a0.this, (io.sentry.hints.i) obj);
                                }
                            });
                            bufferedInputStream.close();
                            io.sentry.util.n.m(hint, io.sentry.hints.k.class, this.f28309g, new n.a() { // from class: io.sentry.y
                                @Override // io.sentry.util.n.a
                                public final void accept(Object obj) {
                                    a0.g(a0.this, file, (io.sentry.hints.k) obj);
                                }
                            });
                        } catch (Throwable th2) {
                            try {
                                bufferedInputStream.close();
                            } catch (Throwable th3) {
                                th2.addSuppressed(th3);
                            }
                            throw th2;
                        }
                    } catch (FileNotFoundException e10) {
                        this.f28309g.a(SentryLevel.ERROR, e10, "File '%s' cannot be found.", file.getAbsolutePath());
                        iLogger = this.f28309g;
                        aVar = new n.a() { // from class: io.sentry.y
                            @Override // io.sentry.util.n.a
                            public final void accept(Object obj) {
                                a0.g(a0.this, file, (io.sentry.hints.k) obj);
                            }
                        };
                        io.sentry.util.n.m(hint, io.sentry.hints.k.class, iLogger, aVar);
                    }
                } catch (IOException e11) {
                    this.f28309g.a(SentryLevel.ERROR, e11, "I/O on file '%s' failed.", file.getAbsolutePath());
                    iLogger = this.f28309g;
                    aVar = new n.a() { // from class: io.sentry.y
                        @Override // io.sentry.util.n.a
                        public final void accept(Object obj) {
                            a0.g(a0.this, file, (io.sentry.hints.k) obj);
                        }
                    };
                    io.sentry.util.n.m(hint, io.sentry.hints.k.class, iLogger, aVar);
                } catch (Throwable th4) {
                    this.f28309g.a(SentryLevel.ERROR, th4, "Failed to capture cached envelope %s", file.getAbsolutePath());
                    io.sentry.util.n.m(hint, io.sentry.hints.k.class, this.f28309g, new n.a() { // from class: io.sentry.z
                        @Override // io.sentry.util.n.a
                        public final void accept(Object obj) {
                            a0.h(a0.this, th4, file, (io.sentry.hints.k) obj);
                        }
                    });
                    iLogger = this.f28309g;
                    aVar = new n.a() { // from class: io.sentry.y
                        @Override // io.sentry.util.n.a
                        public final void accept(Object obj) {
                            a0.g(a0.this, file, (io.sentry.hints.k) obj);
                        }
                    };
                    io.sentry.util.n.m(hint, io.sentry.hints.k.class, iLogger, aVar);
                }
            } catch (Throwable th5) {
                io.sentry.util.n.m(hint, io.sentry.hints.k.class, this.f28309g, new n.a() { // from class: io.sentry.y
                    @Override // io.sentry.util.n.a
                    public final void accept(Object obj) {
                        a0.g(a0.this, file, (io.sentry.hints.k) obj);
                    }
                });
                throw th5;
            }
        }
    }
}
