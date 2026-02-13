package io.sentry;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d8 implements ISpan {

    /* renamed from: a  reason: collision with root package name */
    private j5 f29814a;

    /* renamed from: b  reason: collision with root package name */
    private j5 f29815b;

    /* renamed from: c  reason: collision with root package name */
    private final e8 f29816c;

    /* renamed from: d  reason: collision with root package name */
    private final w7 f29817d;

    /* renamed from: e  reason: collision with root package name */
    private Throwable f29818e;

    /* renamed from: f  reason: collision with root package name */
    private final w0 f29819f;

    /* renamed from: i  reason: collision with root package name */
    private final k8 f29822i;

    /* renamed from: j  reason: collision with root package name */
    private g8 f29823j;

    /* renamed from: g  reason: collision with root package name */
    private boolean f29820g = false;

    /* renamed from: h  reason: collision with root package name */
    private final AtomicBoolean f29821h = new AtomicBoolean(false);

    /* renamed from: k  reason: collision with root package name */
    private final Map f29824k = new ConcurrentHashMap();

    /* renamed from: l  reason: collision with root package name */
    private final Map f29825l = new ConcurrentHashMap();

    /* renamed from: m  reason: collision with root package name */
    private final io.sentry.protocol.c f29826m = new io.sentry.protocol.c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public d8(w7 w7Var, w0 w0Var, e8 e8Var, k8 k8Var, g8 g8Var) {
        this.f29816c = e8Var;
        e8Var.t(k8Var.a());
        this.f29817d = (w7) io.sentry.util.y.c(w7Var, "transaction is required");
        this.f29819f = (w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        this.f29822i = k8Var;
        this.f29823j = g8Var;
        j5 c10 = k8Var.c();
        if (c10 != null) {
            this.f29814a = c10;
        } else {
            this.f29814a = w0Var.b().getDateProvider().now();
        }
    }

    private void J(j5 j5Var) {
        this.f29814a = j5Var;
    }

    private List v() {
        ArrayList arrayList = new ArrayList();
        for (d8 d8Var : this.f29817d.O()) {
            if (d8Var.z() != null && d8Var.z().equals(C())) {
                arrayList.add(d8Var);
            }
        }
        return arrayList;
    }

    public s8 A() {
        return this.f29816c.l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g8 B() {
        return this.f29823j;
    }

    public j8 C() {
        return this.f29816c.m();
    }

    public Map D() {
        return this.f29816c.o();
    }

    public io.sentry.protocol.x E() {
        return this.f29816c.p();
    }

    public Boolean F() {
        return this.f29816c.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(g8 g8Var) {
        this.f29823j = g8Var;
    }

    public ISpan H(String str, String str2) {
        if (this.f29820g) {
            return y2.u();
        }
        return this.f29817d.Y(this.f29816c.m(), str, str2);
    }

    public boolean I(j5 j5Var) {
        if (this.f29815b != null) {
            this.f29815b = j5Var;
            return true;
        }
        return false;
    }

    @Override // io.sentry.ISpan
    public l8 a() {
        return this.f29816c.n();
    }

    @Override // io.sentry.ISpan
    public Boolean c() {
        return this.f29816c.k();
    }

    @Override // io.sentry.ISpan
    public void d() {
        k(this.f29816c.n());
    }

    @Override // io.sentry.ISpan
    public void e(String str) {
        this.f29816c.r(str);
    }

    @Override // io.sentry.ISpan
    public ISpan g(String str) {
        return H(str, null);
    }

    @Override // io.sentry.ISpan
    public String getDescription() {
        return this.f29816c.c();
    }

    @Override // io.sentry.ISpan
    public void h(String str, Number number) {
        if (isFinished()) {
            this.f29819f.b().getLogger().c(SentryLevel.DEBUG, "The span is already finished. Measurement %s cannot be set", str);
            return;
        }
        this.f29825l.put(str, new io.sentry.protocol.k(number, null));
        if (this.f29817d.M() != this) {
            this.f29817d.W(str, number);
        }
    }

    @Override // io.sentry.ISpan
    public boolean isFinished() {
        return this.f29820g;
    }

    @Override // io.sentry.ISpan
    public void j(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f29824k.remove(str);
        } else {
            this.f29824k.put(str, obj);
        }
    }

    @Override // io.sentry.ISpan
    public void k(l8 l8Var) {
        s(l8Var, this.f29819f.b().getDateProvider().now());
    }

    @Override // io.sentry.ISpan
    public ISpan l(String str, String str2, j5 j5Var, j1 j1Var) {
        return o(str, str2, j5Var, j1Var, new k8());
    }

    @Override // io.sentry.ISpan
    public void m(String str, Number number, a2 a2Var) {
        if (isFinished()) {
            this.f29819f.b().getLogger().c(SentryLevel.DEBUG, "The span is already finished. Measurement %s cannot be set", str);
            return;
        }
        this.f29825l.put(str, new io.sentry.protocol.k(number, a2Var.apiName()));
        if (this.f29817d.M() != this) {
            this.f29817d.X(str, number, a2Var);
        }
    }

    @Override // io.sentry.ISpan
    public ISpan o(String str, String str2, j5 j5Var, j1 j1Var, k8 k8Var) {
        if (this.f29820g) {
            return y2.u();
        }
        return this.f29817d.Z(this.f29816c.m(), str, str2, j5Var, j1Var, k8Var);
    }

    @Override // io.sentry.ISpan
    public e8 q() {
        return this.f29816c;
    }

    @Override // io.sentry.ISpan
    public j5 r() {
        return this.f29815b;
    }

    @Override // io.sentry.ISpan
    public void s(l8 l8Var, j5 j5Var) {
        List<d8> v10;
        j5 j5Var2;
        if (!this.f29820g && this.f29821h.compareAndSet(false, true)) {
            this.f29816c.v(l8Var);
            if (j5Var == null) {
                j5Var = this.f29819f.b().getDateProvider().now();
            }
            this.f29815b = j5Var;
            if (this.f29822i.f() || this.f29822i.e()) {
                if (this.f29817d.M().C().equals(C())) {
                    v10 = this.f29817d.I();
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
                if (this.f29822i.f() && j5Var3 != null && this.f29814a.f(j5Var3)) {
                    J(j5Var3);
                }
                if (this.f29822i.e() && j5Var4 != null && ((j5Var2 = this.f29815b) == null || j5Var2.e(j5Var4))) {
                    I(j5Var4);
                }
            }
            Throwable th2 = this.f29818e;
            if (th2 != null) {
                this.f29819f.j(th2, this, this.f29817d.getName());
            }
            g8 g8Var = this.f29823j;
            if (g8Var != null) {
                g8Var.a(this);
            }
            this.f29820g = true;
        }
    }

    @Override // io.sentry.ISpan
    public j5 t() {
        return this.f29814a;
    }

    public Map u() {
        return this.f29824k;
    }

    public Map w() {
        return this.f29825l;
    }

    public String x() {
        return this.f29816c.f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k8 y() {
        return this.f29822i;
    }

    public j8 z() {
        return this.f29816c.h();
    }

    public d8(t8 t8Var, w7 w7Var, w0 w0Var, k8 k8Var) {
        e8 e8Var = (e8) io.sentry.util.y.c(t8Var, "context is required");
        this.f29816c = e8Var;
        e8Var.t(k8Var.a());
        this.f29817d = (w7) io.sentry.util.y.c(w7Var, "sentryTracer is required");
        this.f29819f = (w0) io.sentry.util.y.c(w0Var, "scopes are required");
        this.f29823j = null;
        j5 c10 = k8Var.c();
        if (c10 != null) {
            this.f29814a = c10;
        } else {
            this.f29814a = w0Var.b().getDateProvider().now();
        }
        this.f29822i = k8Var;
    }
}
