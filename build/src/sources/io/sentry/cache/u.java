package io.sentry.cache;

import io.sentry.Breadcrumb;
import io.sentry.IScope;
import io.sentry.SentryLevel;
import io.sentry.c4;
import io.sentry.cache.tape.c;
import io.sentry.cache.tape.d;
import io.sentry.e8;
import io.sentry.k7;
import io.sentry.protocol.h0;
import io.sentry.protocol.x;
import io.sentry.util.r;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u extends c4 {

    /* renamed from: c  reason: collision with root package name */
    private static final Charset f29868c = Charset.forName("UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private k7 f29869a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.util.r f29870b = new io.sentry.util.r(new r.a() { // from class: io.sentry.cache.l
        @Override // io.sentry.util.r.a
        public final Object a() {
            return u.w(u.this);
        }
    });

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c.a {
        a() {
        }

        @Override // io.sentry.cache.tape.c.a
        /* renamed from: c */
        public Breadcrumb b(byte[] bArr) {
            try {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(bArr), u.f29868c));
                Breadcrumb breadcrumb = (Breadcrumb) u.this.f29869a.getSerializer().c(bufferedReader, Breadcrumb.class);
                bufferedReader.close();
                return breadcrumb;
            } catch (Throwable th2) {
                u.this.f29869a.getLogger().a(SentryLevel.ERROR, th2, "Error reading entity from scope cache", new Object[0]);
                return null;
            }
        }

        @Override // io.sentry.cache.tape.c.a
        /* renamed from: d */
        public void a(Breadcrumb breadcrumb, OutputStream outputStream) {
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream, u.f29868c));
            try {
                u.this.f29869a.getSerializer().a(breadcrumb, bufferedWriter);
                bufferedWriter.close();
            } catch (Throwable th2) {
                try {
                    bufferedWriter.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }
    }

    public u(k7 k7Var) {
        this.f29869a = k7Var;
    }

    private void C(String str) {
        d.a(this.f29869a, ".scope-cache", str);
    }

    private void F(final Runnable runnable) {
        if (!this.f29869a.isEnableScopePersistence()) {
            return;
        }
        if (Thread.currentThread().getName().contains("SentryExecutor")) {
            try {
                runnable.run();
                return;
            } catch (Throwable th2) {
                this.f29869a.getLogger().b(SentryLevel.ERROR, "Serialization task failed", th2);
                return;
            }
        }
        try {
            this.f29869a.getExecutorService().submit(new Runnable() { // from class: io.sentry.cache.s
                @Override // java.lang.Runnable
                public final void run() {
                    u.x(u.this, runnable);
                }
            });
        } catch (Throwable th3) {
            this.f29869a.getLogger().b(SentryLevel.ERROR, "Serialization task could not be scheduled", th3);
        }
    }

    public static void G(k7 k7Var, Object obj, String str) {
        d.d(k7Var, obj, ".scope-cache", str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void H(Object obj, String str) {
        G(this.f29869a, obj, str);
    }

    public static /* synthetic */ void p(u uVar, e8 e8Var, IScope iScope) {
        if (e8Var == null) {
            uVar.getClass();
            uVar.H(iScope.K().g(), "trace.json");
            return;
        }
        uVar.H(e8Var, "trace.json");
    }

    public static /* synthetic */ void q(u uVar, h0 h0Var) {
        if (h0Var == null) {
            uVar.C("user.json");
        } else {
            uVar.H(h0Var, "user.json");
        }
    }

    public static /* synthetic */ void u(u uVar) {
        uVar.getClass();
        try {
            ((io.sentry.cache.tape.c) uVar.f29870b.a()).clear();
        } catch (IOException e10) {
            uVar.f29869a.getLogger().b(SentryLevel.ERROR, "Failed to clear breadcrumbs from file queue", e10);
        }
    }

    public static /* synthetic */ void v(u uVar, String str) {
        if (str == null) {
            uVar.C("transaction.json");
        } else {
            uVar.H(str, "transaction.json");
        }
    }

    public static /* synthetic */ io.sentry.cache.tape.c w(u uVar) {
        io.sentry.cache.tape.d a10;
        File b10 = d.b(uVar.f29869a, ".scope-cache");
        if (b10 == null) {
            uVar.f29869a.getLogger().c(SentryLevel.INFO, "Cache dir is not set, cannot store in scope cache", new Object[0]);
            return io.sentry.cache.tape.c.L();
        }
        File file = new File(b10, "breadcrumbs.json");
        try {
            try {
                a10 = new d.a(file).b(uVar.f29869a.getMaxBreadcrumbs()).a();
            } catch (IOException e10) {
                uVar.f29869a.getLogger().b(SentryLevel.ERROR, "Failed to create breadcrumbs queue", e10);
                return io.sentry.cache.tape.c.L();
            }
        } catch (IOException unused) {
            file.delete();
            a10 = new d.a(file).b(uVar.f29869a.getMaxBreadcrumbs()).a();
        }
        return io.sentry.cache.tape.c.x(a10, new a());
    }

    public static /* synthetic */ void x(u uVar, Runnable runnable) {
        uVar.getClass();
        try {
            runnable.run();
        } catch (Throwable th2) {
            uVar.f29869a.getLogger().b(SentryLevel.ERROR, "Serialization task failed", th2);
        }
    }

    public static /* synthetic */ void z(u uVar, Breadcrumb breadcrumb) {
        uVar.getClass();
        try {
            ((io.sentry.cache.tape.c) uVar.f29870b.a()).h(breadcrumb);
        } catch (IOException e10) {
            uVar.f29869a.getLogger().b(SentryLevel.ERROR, "Failed to add breadcrumb to file queue", e10);
        }
    }

    public Object D(k7 k7Var, String str, Class cls) {
        if (str.equals("breadcrumbs.json")) {
            try {
                return cls.cast(((io.sentry.cache.tape.c) this.f29870b.a()).n());
            } catch (IOException unused) {
                k7Var.getLogger().c(SentryLevel.ERROR, "Unable to read serialized breadcrumbs from QueueFile", new Object[0]);
                return null;
            }
        }
        return d.c(k7Var, ".scope-cache", str, cls, null);
    }

    public void E() {
        try {
            ((io.sentry.cache.tape.c) this.f29870b.a()).clear();
        } catch (IOException e10) {
            this.f29869a.getLogger().b(SentryLevel.ERROR, "Failed to clear breadcrumbs from file queue", e10);
        }
        C("user.json");
        C("level.json");
        C("request.json");
        C("fingerprint.json");
        C("contexts.json");
        C("extras.json");
        C("tags.json");
        C("trace.json");
        C("transaction.json");
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void c(final Map map) {
        F(new Runnable() { // from class: io.sentry.cache.m
            @Override // java.lang.Runnable
            public final void run() {
                u.this.H(map, "tags.json");
            }
        });
    }

    @Override // io.sentry.v0
    public void e(final Breadcrumb breadcrumb) {
        F(new Runnable() { // from class: io.sentry.cache.o
            @Override // java.lang.Runnable
            public final void run() {
                u.z(u.this, breadcrumb);
            }
        });
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void g(Collection collection) {
        if (collection.isEmpty()) {
            F(new Runnable() { // from class: io.sentry.cache.r
                @Override // java.lang.Runnable
                public final void run() {
                    u.u(u.this);
                }
            });
        }
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void h(final Collection collection) {
        F(new Runnable() { // from class: io.sentry.cache.n
            @Override // java.lang.Runnable
            public final void run() {
                u.this.H(collection, "fingerprint.json");
            }
        });
    }

    @Override // io.sentry.v0
    public void i(final e8 e8Var, final IScope iScope) {
        F(new Runnable() { // from class: io.sentry.cache.k
            @Override // java.lang.Runnable
            public final void run() {
                u.p(u.this, e8Var, iScope);
            }
        });
    }

    @Override // io.sentry.v0
    public void j(final h0 h0Var) {
        F(new Runnable() { // from class: io.sentry.cache.i
            @Override // java.lang.Runnable
            public final void run() {
                u.q(u.this, h0Var);
            }
        });
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void k(final io.sentry.protocol.c cVar) {
        F(new Runnable() { // from class: io.sentry.cache.p
            @Override // java.lang.Runnable
            public final void run() {
                u.this.H(cVar, "contexts.json");
            }
        });
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void l(final Map map) {
        F(new Runnable() { // from class: io.sentry.cache.q
            @Override // java.lang.Runnable
            public final void run() {
                u.this.H(map, "extras.json");
            }
        });
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void m(final String str) {
        F(new Runnable() { // from class: io.sentry.cache.j
            @Override // java.lang.Runnable
            public final void run() {
                u.v(u.this, str);
            }
        });
    }

    @Override // io.sentry.c4, io.sentry.v0
    public void o(final x xVar) {
        F(new Runnable() { // from class: io.sentry.cache.t
            @Override // java.lang.Runnable
            public final void run() {
                u.this.H(xVar, "replay.json");
            }
        });
    }
}
