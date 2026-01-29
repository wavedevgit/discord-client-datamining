package io.sentry;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d8 implements ISpan {

    /* renamed from: a  reason: collision with root package name */
    private j5 f29917a;

    /* renamed from: b  reason: collision with root package name */
    private j5 f29918b;

    /* renamed from: c  reason: collision with root package name */
    private final e8 f29919c;

    /* renamed from: d  reason: collision with root package name */
    private final w7 f29920d;

    /* renamed from: e  reason: collision with root package name */
    private Throwable f29921e;

    /* renamed from: f  reason: collision with root package name */
    private final w0 f29922f;

    /* renamed from: i  reason: collision with root package name */
    private final k8 f29925i;

    /* renamed from: j  reason: collision with root package name */
    private g8 f29926j;

    /* renamed from: g  reason: collision with root package name */
    private boolean f29923g = false;

    /* renamed from: h  reason: collision with root package name */
    private final AtomicBoolean f29924h = new AtomicBoolean(false);

    /* renamed from: k  reason: collision with root package name */
    private final Map f29927k = new ConcurrentHashMap();

    /* renamed from: l  reason: collision with root package name */
    private final Map f29928l = new ConcurrentHashMap();

    /* renamed from: m  reason: collision with root package name */
    private final io.sentry.protocol.c f29929m = new io.sentry.protocol.c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public d8(w7 w7Var, w0 w0Var, e8 e8Var, k8 k8Var, g8 g8Var) {
        this.f29919c = e8Var;
        e8Var.t(k8Var.a());
        this.f29920d = (w7) io.sentry.util.y.c(w7Var, "transaction is required");
        this.f29922f = (w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        this.f29925i = k8Var;
        this.f29926j = g8Var;
        j5 c10 = k8Var.c();
        if (c10 != null) {
            this.f29917a = c10;
        } else {
            this.f29917a = w0Var.b().getDateProvider().now();
        }
    }

    private void J(j5 j5Var) {
        this.f29917a = j5Var;
    }

    private List v() {
        ArrayList arrayList = new ArrayList();
        for (d8 d8Var : this.f29920d.O()) {
            if (d8Var.z() != null && d8Var.z().equals(C())) {
                arrayList.add(d8Var);
            }
        }
        return arrayList;
    }

    public s8 A() {
        return this.f29919c.l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g8 B() {
        return this.f29926j;
    }

    public j8 C() {
        return this.f29919c.m();
    }

    public Map D() {
        return this.f29919c.o();
    }

    public io.sentry.protocol.x E() {
        return this.f29919c.p();
    }

    public Boolean F() {
        return this.f29919c.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(g8 g8Var) {
        this.f29926j = g8Var;
    }

    public ISpan H(String str, String str2) {
        if (this.f29923g) {
            return y2.u();
        }
        return this.f29920d.Y(this.f29919c.m(), str, str2);
    }

    public boolean I(j5 j5Var) {
        if (this.f29918b != null) {
            this.f29918b = j5Var;
            return true;
        }
        return false;
    }

    @Override // io.sentry.ISpan
    public l8 a() {
        return this.f29919c.n();
    }

    @Override // io.sentry.ISpan
    public Boolean c() {
        return this.f29919c.k();
    }

    @Override // io.sentry.ISpan
    public void d() {
        k(this.f29919c.n());
    }

    @Override // io.sentry.ISpan
    public void e(String str) {
        this.f29919c.r(str);
    }

    @Override // io.sentry.ISpan
    public ISpan g(String str) {
        return H(str, null);
    }

    @Override // io.sentry.ISpan
    public String getDescription() {
        return this.f29919c.c();
    }

    @Override // io.sentry.ISpan
    public void h(String str, Number number) {
        if (isFinished()) {
            this.f29922f.b().getLogger().c(SentryLevel.DEBUG, "The span is already finished. Measurement %s cannot be set", str);
            return;
        }
        this.f29928l.put(str, new io.sentry.protocol.k(number, null));
        if (this.f29920d.M() != this) {
            this.f29920d.W(str, number);
        }
    }

    @Override // io.sentry.ISpan
    public boolean isFinished() {
        return this.f29923g;
    }

    @Override // io.sentry.ISpan
    public void j(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f29927k.remove(str);
        } else {
            this.f29927k.put(str, obj);
        }
    }

    @Override // io.sentry.ISpan
    public void k(l8 l8Var) {
        s(l8Var, this.f29922f.b().getDateProvider().now());
    }

    @Override // io.sentry.ISpan
    public ISpan l(String str, String str2, j5 j5Var, j1 j1Var) {
        return o(str, str2, j5Var, j1Var, new k8());
    }

    @Override // io.sentry.ISpan
    public void m(String str, Number number, a2 a2Var) {
        if (isFinished()) {
            this.f29922f.b().getLogger().c(SentryLevel.DEBUG, "The span is already finished. Measurement %s cannot be set", str);
            return;
        }
        this.f29928l.put(str, new io.sentry.protocol.k(number, a2Var.apiName()));
        if (this.f29920d.M() != this) {
            this.f29920d.X(str, number, a2Var);
        }
    }

    @Override // io.sentry.ISpan
    public ISpan o(String str, String str2, j5 j5Var, j1 j1Var, k8 k8Var) {
        if (this.f29923g) {
            return y2.u();
        }
        return this.f29920d.Z(this.f29919c.m(), str, str2, j5Var, j1Var, k8Var);
    }

    @Override // io.sentry.ISpan
    public e8 q() {
        return this.f29919c;
    }

    @Override // io.sentry.ISpan
    public j5 r() {
        return this.f29918b;
    }

    @Override // io.sentry.ISpan
    public void s(l8 l8Var, j5 j5Var) {
        List<d8> v10;
        j5 j5Var2;
        if (!this.f29923g && this.f29924h.compareAndSet(false, true)) {
            this.f29919c.v(l8Var);
            if (j5Var == null) {
                j5Var = this.f29922f.b().getDateProvider().now();
            }
            this.f29918b = j5Var;
            if (this.f29925i.f() || this.f29925i.e()) {
                if (this.f29920d.M().C().equals(C())) {
                    v10 = this.f29920d.I();
                } else {
                    v10 = v();
                }
                j5 j5Var3 = null;
                j5 j5Var4 = null;
                for (d8 d8Var : v10) {
                    if (j5Var3 == null || d8Var.t().f(j5Var3)) {
                        j5Var3 = d8Var.t();
                    }
                    if (j5Var4 == null || (d8Var.r() != null && d8Var.r().e(j5Var4))) {
                        j5Var4 = d8Var.r();
                    }
                }
                if (this.f29925i.f() && j5Var3 != null && this.f29917a.f(j5Var3)) {
                    J(j5Var3);
                }
                if (this.f29925i.e() && j5Var4 != null && ((j5Var2 = this.f29918b) == null || j5Var2.e(j5Var4))) {
                    I(j5Var4);
                }
            }
            Throwable th2 = this.f29921e;
            if (th2 != null) {
                this.f29922f.i(th2, this, this.f29920d.getName());
            }
            g8 g8Var = this.f29926j;
            if (g8Var != null) {
                g8Var.a(this);
            }
            this.f29923g = true;
        }
    }

    @Override // io.sentry.ISpan
    public j5 t() {
        return this.f29917a;
    }

    public Map u() {
        return this.f29927k;
    }

    public Map w() {
        return this.f29928l;
    }

    public String x() {
        return this.f29919c.f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k8 y() {
        return this.f29925i;
    }

    public j8 z() {
        return this.f29919c.h();
    }

    public d8(t8 t8Var, w7 w7Var, w0 w0Var, k8 k8Var) {
        e8 e8Var = (e8) io.sentry.util.y.c(t8Var, "context is required");
        this.f29919c = e8Var;
        e8Var.t(k8Var.a());
        this.f29920d = (w7) io.sentry.util.y.c(w7Var, "sentryTracer is required");
        this.f29922f = (w0) io.sentry.util.y.c(w0Var, "scopes are required");
        this.f29926j = null;
        j5 c10 = k8Var.c();
        if (c10 != null) {
            this.f29917a = c10;
        } else {
            this.f29917a = w0Var.b().getDateProvider().now();
        }
        this.f29925i = k8Var;
    }
}
