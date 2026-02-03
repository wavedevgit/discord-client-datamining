package io.sentry;

import io.sentry.util.n;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j3 extends s implements o0 {

    /* renamed from: i  reason: collision with root package name */
    private static final Charset f29658i = Charset.forName("UTF-8");

    /* renamed from: e  reason: collision with root package name */
    private final w0 f29659e;

    /* renamed from: f  reason: collision with root package name */
    private final n0 f29660f;

    /* renamed from: g  reason: collision with root package name */
    private final b1 f29661g;

    /* renamed from: h  reason: collision with root package name */
    private final ILogger f29662h;

    public j3(w0 w0Var, n0 n0Var, b1 b1Var, ILogger iLogger, long j10, int i10) {
        super(w0Var, iLogger, j10, i10);
        this.f29659e = (w0) io.sentry.util.y.c(w0Var, "Scopes are required.");
        this.f29660f = (n0) io.sentry.util.y.c(n0Var, "Envelope reader is required.");
        this.f29661g = (b1) io.sentry.util.y.c(b1Var, "Serializer is required.");
        this.f29662h = (ILogger) io.sentry.util.y.c(iLogger, "Logger is required.");
    }

    public static /* synthetic */ void f(j3 j3Var, File file, io.sentry.hints.k kVar) {
        j3Var.getClass();
        if (!kVar.a()) {
            try {
                if (!file.delete()) {
                    j3Var.f29662h.c(SentryLevel.ERROR, "Failed to delete: %s", file.getAbsolutePath());
                }
            } catch (RuntimeException e10) {
                j3Var.f29662h.a(SentryLevel.ERROR, e10, "Failed to delete: %s", file.getAbsolutePath());
            }
        }
    }

    private s8 h(q8 q8Var) {
        String b10;
        if (q8Var != null && (b10 = q8Var.b()) != null) {
            try {
                Double valueOf = Double.valueOf(Double.parseDouble(b10));
                if (!io.sentry.util.c0.h(valueOf, false)) {
                    this.f29662h.c(SentryLevel.ERROR, "Invalid sample rate parsed from TraceContext: %s", b10);
                } else {
                    String a10 = q8Var.a();
                    if (a10 != null) {
                        Double valueOf2 = Double.valueOf(Double.parseDouble(a10));
                        if (io.sentry.util.c0.h(valueOf2, false)) {
                            return new s8(Boolean.TRUE, valueOf, valueOf2);
                        }
                    }
                    return io.sentry.util.c0.a(new s8(Boolean.TRUE, valueOf));
                }
            } catch (Exception unused) {
                this.f29662h.c(SentryLevel.ERROR, "Unable to parse sample rate from TraceContext: %s", b10);
            }
        }
        return new s8(Boolean.TRUE);
    }

    private void i(l6 l6Var, int i10) {
        this.f29662h.c(SentryLevel.ERROR, "Item %d of type %s returned null by the parser.", Integer.valueOf(i10), l6Var.K().b());
    }

    private void j(int i10) {
        this.f29662h.c(SentryLevel.DEBUG, "Item %d is being captured.", Integer.valueOf(i10));
    }

    private void k(io.sentry.protocol.x xVar) {
        this.f29662h.c(SentryLevel.WARNING, "Timed out waiting for event id submission: %s", xVar);
    }

    private void l(l5 l5Var, io.sentry.protocol.x xVar, int i10) {
        this.f29662h.c(SentryLevel.ERROR, "Item %d of has a different event id (%s) to the envelope header (%s)", Integer.valueOf(i10), l5Var.b().a(), xVar);
    }

    private void m(l5 l5Var, Hint hint) {
        Object g10;
        this.f29662h.c(SentryLevel.DEBUG, "Processing Envelope with %d item(s)", Integer.valueOf(io.sentry.util.c.e(l5Var.c())));
        int i10 = 0;
        for (l6 l6Var : l5Var.c()) {
            i10++;
            if (l6Var.K() == null) {
                this.f29662h.c(SentryLevel.ERROR, "Item %d has no header", Integer.valueOf(i10));
            } else if (v6.Event.equals(l6Var.K().b())) {
                try {
                    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(l6Var.I()), f29658i));
                    SentryEvent sentryEvent = (SentryEvent) this.f29661g.c(bufferedReader, SentryEvent.class);
                    if (sentryEvent == null) {
                        i(l6Var, i10);
                    } else {
                        if (sentryEvent.L() != null) {
                            io.sentry.util.n.o(hint, sentryEvent.L().f());
                        }
                        if (l5Var.b().a() != null && !l5Var.b().a().equals(sentryEvent.G())) {
                            l(l5Var, sentryEvent.G(), i10);
                            bufferedReader.close();
                        } else {
                            this.f29659e.x(sentryEvent, hint);
                            j(i10);
                            if (!n(hint)) {
                                k(sentryEvent.G());
                                bufferedReader.close();
                                return;
                            }
                        }
                    }
                    bufferedReader.close();
                } catch (Throwable th2) {
                    this.f29662h.b(SentryLevel.ERROR, "Item failed to process.", th2);
                }
                g10 = io.sentry.util.n.g(hint);
                if (!(g10 instanceof io.sentry.hints.p) && !((io.sentry.hints.p) g10).e()) {
                    this.f29662h.c(SentryLevel.WARNING, "Envelope had a failed capture at item %d. No more items will be sent.", Integer.valueOf(i10));
                    return;
                }
                io.sentry.util.n.k(hint, io.sentry.hints.j.class, new n.a() { // from class: io.sentry.i3
                    @Override // io.sentry.util.n.a
                    public final void accept(Object obj) {
                        ((io.sentry.hints.j) obj).reset();
                    }
                });
            } else {
                if (v6.Transaction.equals(l6Var.K().b())) {
                    try {
                        BufferedReader bufferedReader2 = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(l6Var.I()), f29658i));
                        io.sentry.protocol.d0 d0Var = (io.sentry.protocol.d0) this.f29661g.c(bufferedReader2, io.sentry.protocol.d0.class);
                        if (d0Var == null) {
                            i(l6Var, i10);
                        } else if (l5Var.b().a() != null && !l5Var.b().a().equals(d0Var.G())) {
                            l(l5Var, d0Var.G(), i10);
                            bufferedReader2.close();
                        } else {
                            q8 c10 = l5Var.b().c();
                            if (d0Var.C().j() != null) {
                                d0Var.C().j().u(h(c10));
                            }
                            this.f29659e.n(d0Var, c10, hint);
                            j(i10);
                            if (!n(hint)) {
                                k(d0Var.G());
                                bufferedReader2.close();
                                return;
                            }
                        }
                        bufferedReader2.close();
                    } catch (Throwable th3) {
                        this.f29662h.b(SentryLevel.ERROR, "Item failed to process.", th3);
                    }
                } else {
                    this.f29659e.m(new l5(l5Var.b().a(), l5Var.b().b(), l6Var), hint);
                    this.f29662h.c(SentryLevel.DEBUG, "%s item %d is being captured.", l6Var.K().b().getItemType(), Integer.valueOf(i10));
                    if (!n(hint)) {
                        this.f29662h.c(SentryLevel.WARNING, "Timed out waiting for item type submission: %s", l6Var.K().b().getItemType());
                        return;
                    }
                }
                g10 = io.sentry.util.n.g(hint);
                if (!(g10 instanceof io.sentry.hints.p)) {
                }
                io.sentry.util.n.k(hint, io.sentry.hints.j.class, new n.a() { // from class: io.sentry.i3
                    @Override // io.sentry.util.n.a
                    public final void accept(Object obj) {
                        ((io.sentry.hints.j) obj).reset();
                    }
                });
            }
        }
    }

    private boolean n(Hint hint) {
        Object g10 = io.sentry.util.n.g(hint);
        if (g10 instanceof io.sentry.hints.i) {
            return ((io.sentry.hints.i) g10).g();
        }
        io.sentry.util.v.a(io.sentry.hints.i.class, g10, this.f29662h);
        return true;
    }

    @Override // io.sentry.o0
    public void a(String str, Hint hint) {
        io.sentry.util.y.c(str, "Path is required.");
        e(new File(str), hint);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // io.sentry.s
    public boolean c(String str) {
        if (str != null && !str.startsWith("session") && !str.startsWith("previous_session") && !str.startsWith("startup_crash")) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.s
    public /* bridge */ /* synthetic */ void d(File file) {
        super.d(file);
    }

    @Override // io.sentry.s
    protected void e(final File file, Hint hint) {
        io.sentry.util.y.c(file, "File is required.");
        try {
            if (!c(file.getName())) {
                this.f29662h.c(SentryLevel.DEBUG, "File '%s' should be ignored.", file.getAbsolutePath());
                return;
            }
            BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file));
            try {
                l5 a10 = this.f29660f.a(bufferedInputStream);
                if (a10 == null) {
                    this.f29662h.c(SentryLevel.ERROR, "Stream from path %s resulted in a null envelope.", file.getAbsolutePath());
                } else {
                    m(a10, hint);
                    this.f29662h.c(SentryLevel.DEBUG, "File '%s' is done.", file.getAbsolutePath());
                }
                bufferedInputStream.close();
            } catch (Throwable th2) {
                try {
                    bufferedInputStream.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        } catch (IOException e10) {
            this.f29662h.b(SentryLevel.ERROR, "Error processing envelope.", e10);
        } finally {
            io.sentry.util.n.m(hint, io.sentry.hints.k.class, this.f29662h, new n.a() { // from class: io.sentry.h3
                @Override // io.sentry.util.n.a
                public final void accept(Object obj) {
                    j3.f(j3.this, file, (io.sentry.hints.k) obj);
                }
            });
        }
    }
}
