package io.sentry;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d8 implements ISpan {

    /* renamed from: a  reason: collision with root package name */
    private j5 f28062a;

    /* renamed from: b  reason: collision with root package name */
    private j5 f28063b;

    /* renamed from: c  reason: collision with root package name */
    private final e8 f28064c;

    /* renamed from: d  reason: collision with root package name */
    private final w7 f28065d;

    /* renamed from: e  reason: collision with root package name */
    private Throwable f28066e;

    /* renamed from: f  reason: collision with root package name */
    private final w0 f28067f;

    /* renamed from: i  reason: collision with root package name */
    private final k8 f28070i;

    /* renamed from: j  reason: collision with root package name */
    private g8 f28071j;

    /* renamed from: g  reason: collision with root package name */
    private boolean f28068g = false;

    /* renamed from: h  reason: collision with root package name */
    private final AtomicBoolean f28069h = new AtomicBoolean(false);

    /* renamed from: k  reason: collision with root package name */
    private final Map f28072k = new ConcurrentHashMap();

    /* renamed from: l  reason: collision with root package name */
    private final Map f28073l = new ConcurrentHashMap();

    /* renamed from: m  reason: collision with root package name */
    private final io.sentry.protocol.c f28074m = new io.sentry.protocol.c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public d8(w7 w7Var, w0 w0Var, e8 e8Var, k8 k8Var, g8 g8Var) {
        this.f28064c = e8Var;
        e8Var.t(k8Var.a());
        this.f28065d = (w7) io.sentry.util.y.c(w7Var, "transaction is required");
        this.f28067f = (w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        this.f28070i = k8Var;
        this.f28071j = g8Var;
        j5 c10 = k8Var.c();
        if (c10 != null) {
            this.f28062a = c10;
        } else {
            this.f28062a = w0Var.b().getDateProvider().now();
        }
    }

    private void J(j5 j5Var) {
        this.f28062a = j5Var;
    }

    private List v() {
        ArrayList arrayList = new ArrayList();
        for (d8 d8Var : this.f28065d.O()) {
            if (d8Var.z() != null && d8Var.z().equals(C())) {
                arrayList.add(d8Var);
            }
        }
        return arrayList;
    }

    public s8 A() {
        return this.f28064c.l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g8 B() {
        return this.f28071j;
    }

    public j8 C() {
        return this.f28064c.m();
    }

    public Map D() {
        return this.f28064c.o();
    }

    public io.sentry.protocol.x E() {
        return this.f28064c.p();
    }

    public Boolean F() {
        return this.f28064c.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(g8 g8Var) {
        this.f28071j = g8Var;
    }

    public ISpan H(String str, String str2) {
        if (this.f28068g) {
            return y2.u();
        }
        return this.f28065d.Y(this.f28064c.m(), str, str2);
    }

    public boolean I(j5 j5Var) {
        if (this.f28063b != null) {
            this.f28063b = j5Var;
            return true;
        }
        return false;
    }

    @Override // io.sentry.ISpan
    public l8 a() {
        return this.f28064c.n();
    }

    @Override // io.sentry.ISpan
    public Boolean c() {
        return this.f28064c.k();
    }

    @Override // io.sentry.ISpan
    public void d() {
        k(this.f28064c.n());
    }

    @Override // io.sentry.ISpan
    public void e(String str) {
        this.f28064c.r(str);
    }

    @Override // io.sentry.ISpan
    public ISpan g(String str) {
        return H(str, null);
    }

    @Override // io.sentry.ISpan
    public String getDescription() {
        return this.f28064c.c();
    }

    @Override // io.sentry.ISpan
    public void h(String str, Number number) {
        if (isFinished()) {
            this.f28067f.b().getLogger().c(SentryLevel.DEBUG, "The span is already finished. Measurement %s cannot be set", str);
            return;
        }
        this.f28073l.put(str, new io.sentry.protocol.k(number, null));
        if (this.f28065d.M() != this) {
            this.f28065d.W(str, number);
        }
    }

    @Override // io.sentry.ISpan
    public boolean isFinished() {
        return this.f28068g;
    }

    @Override // io.sentry.ISpan
    public void j(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f28072k.remove(str);
        } else {
            this.f28072k.put(str, obj);
        }
    }

    @Override // io.sentry.ISpan
    public void k(l8 l8Var) {
        s(l8Var, this.f28067f.b().getDateProvider().now());
    }

    @Override // io.sentry.ISpan
    public ISpan l(String str, String str2, j5 j5Var, j1 j1Var) {
        return o(str, str2, j5Var, j1Var, new k8());
    }

    @Override // io.sentry.ISpan
    public void m(String str, Number number, a2 a2Var) {
        if (isFinished()) {
            this.f28067f.b().getLogger().c(SentryLevel.DEBUG, "The span is already finished. Measurement %s cannot be set", str);
            return;
        }
        this.f28073l.put(str, new io.sentry.protocol.k(number, a2Var.apiName()));
        if (this.f28065d.M() != this) {
            this.f28065d.X(str, number, a2Var);
        }
    }

    @Override // io.sentry.ISpan
    public ISpan o(String str, String str2, j5 j5Var, j1 j1Var, k8 k8Var) {
        if (this.f28068g) {
            return y2.u();
        }
        return this.f28065d.Z(this.f28064c.m(), str, str2, j5Var, j1Var, k8Var);
    }

    @Override // io.sentry.ISpan
    public e8 q() {
        return this.f28064c;
    }

    @Override // io.sentry.ISpan
    public j5 r() {
        return this.f28063b;
    }

    @Override // io.sentry.ISpan
    public void s(l8 l8Var, j5 j5Var) {
        List<d8> v10;
        j5 j5Var2;
        if (!this.f28068g && this.f28069h.compareAndSet(false, true)) {
            this.f28064c.v(l8Var);
            if (j5Var == null) {
                j5Var = this.f28067f.b().getDateProvider().now();
            }
            this.f28063b = j5Var;
            if (this.f28070i.f() || this.f28070i.e()) {
                if (this.f28065d.M().C().equals(C())) {
                    v10 = this.f28065d.I();
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
                if (this.f28070i.f() && j5Var3 != null && this.f28062a.f(j5Var3)) {
                    J(j5Var3);
                }
                if (this.f28070i.e() && j5Var4 != null && ((j5Var2 = this.f28063b) == null || j5Var2.e(j5Var4))) {
                    I(j5Var4);
                }
            }
            Throwable th2 = this.f28066e;
            if (th2 != null) {
                this.f28067f.j(th2, this, this.f28065d.getName());
            }
            g8 g8Var = this.f28071j;
            if (g8Var != null) {
                g8Var.a(this);
            }
            this.f28068g = true;
        }
    }

    @Override // io.sentry.ISpan
    public j5 t() {
        return this.f28062a;
    }

    public Map u() {
        return this.f28072k;
    }

    public Map w() {
        return this.f28073l;
    }

    public String x() {
        return this.f28064c.f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k8 y() {
        return this.f28070i;
    }

    public j8 z() {
        return this.f28064c.h();
    }

    public d8(t8 t8Var, w7 w7Var, w0 w0Var, k8 k8Var) {
        e8 e8Var = (e8) io.sentry.util.y.c(t8Var, "context is required");
        this.f28064c = e8Var;
        e8Var.t(k8Var.a());
        this.f28065d = (w7) io.sentry.util.y.c(w7Var, "sentryTracer is required");
        this.f28067f = (w0) io.sentry.util.y.c(w0Var, "scopes are required");
        this.f28071j = null;
        j5 c10 = k8Var.c();
        if (c10 != null) {
            this.f28062a = c10;
        } else {
            this.f28062a = w0Var.b().getDateProvider().now();
        }
        this.f28070i = k8Var;
    }
}
