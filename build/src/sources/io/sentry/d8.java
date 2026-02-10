package io.sentry;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d8 implements ISpan {

    /* renamed from: a  reason: collision with root package name */
    private j5 f28310a;

    /* renamed from: b  reason: collision with root package name */
    private j5 f28311b;

    /* renamed from: c  reason: collision with root package name */
    private final e8 f28312c;

    /* renamed from: d  reason: collision with root package name */
    private final w7 f28313d;

    /* renamed from: e  reason: collision with root package name */
    private Throwable f28314e;

    /* renamed from: f  reason: collision with root package name */
    private final w0 f28315f;

    /* renamed from: i  reason: collision with root package name */
    private final k8 f28318i;

    /* renamed from: j  reason: collision with root package name */
    private g8 f28319j;

    /* renamed from: g  reason: collision with root package name */
    private boolean f28316g = false;

    /* renamed from: h  reason: collision with root package name */
    private final AtomicBoolean f28317h = new AtomicBoolean(false);

    /* renamed from: k  reason: collision with root package name */
    private final Map f28320k = new ConcurrentHashMap();

    /* renamed from: l  reason: collision with root package name */
    private final Map f28321l = new ConcurrentHashMap();

    /* renamed from: m  reason: collision with root package name */
    private final io.sentry.protocol.c f28322m = new io.sentry.protocol.c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public d8(w7 w7Var, w0 w0Var, e8 e8Var, k8 k8Var, g8 g8Var) {
        this.f28312c = e8Var;
        e8Var.t(k8Var.a());
        this.f28313d = (w7) io.sentry.util.y.c(w7Var, "transaction is required");
        this.f28315f = (w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        this.f28318i = k8Var;
        this.f28319j = g8Var;
        j5 c10 = k8Var.c();
        if (c10 != null) {
            this.f28310a = c10;
        } else {
            this.f28310a = w0Var.b().getDateProvider().now();
        }
    }

    private void J(j5 j5Var) {
        this.f28310a = j5Var;
    }

    private List v() {
        ArrayList arrayList = new ArrayList();
        for (d8 d8Var : this.f28313d.O()) {
            if (d8Var.z() != null && d8Var.z().equals(C())) {
                arrayList.add(d8Var);
            }
        }
        return arrayList;
    }

    public s8 A() {
        return this.f28312c.l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g8 B() {
        return this.f28319j;
    }

    public j8 C() {
        return this.f28312c.m();
    }

    public Map D() {
        return this.f28312c.o();
    }

    public io.sentry.protocol.x E() {
        return this.f28312c.p();
    }

    public Boolean F() {
        return this.f28312c.i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void G(g8 g8Var) {
        this.f28319j = g8Var;
    }

    public ISpan H(String str, String str2) {
        if (this.f28316g) {
            return y2.u();
        }
        return this.f28313d.Y(this.f28312c.m(), str, str2);
    }

    public boolean I(j5 j5Var) {
        if (this.f28311b != null) {
            this.f28311b = j5Var;
            return true;
        }
        return false;
    }

    @Override // io.sentry.ISpan
    public l8 a() {
        return this.f28312c.n();
    }

    @Override // io.sentry.ISpan
    public Boolean c() {
        return this.f28312c.k();
    }

    @Override // io.sentry.ISpan
    public void d() {
        k(this.f28312c.n());
    }

    @Override // io.sentry.ISpan
    public void e(String str) {
        this.f28312c.r(str);
    }

    @Override // io.sentry.ISpan
    public ISpan g(String str) {
        return H(str, null);
    }

    @Override // io.sentry.ISpan
    public String getDescription() {
        return this.f28312c.c();
    }

    @Override // io.sentry.ISpan
    public void h(String str, Number number) {
        if (isFinished()) {
            this.f28315f.b().getLogger().c(SentryLevel.DEBUG, "The span is already finished. Measurement %s cannot be set", str);
            return;
        }
        this.f28321l.put(str, new io.sentry.protocol.k(number, null));
        if (this.f28313d.M() != this) {
            this.f28313d.W(str, number);
        }
    }

    @Override // io.sentry.ISpan
    public boolean isFinished() {
        return this.f28316g;
    }

    @Override // io.sentry.ISpan
    public void j(String str, Object obj) {
        if (str == null) {
            return;
        }
        if (obj == null) {
            this.f28320k.remove(str);
        } else {
            this.f28320k.put(str, obj);
        }
    }

    @Override // io.sentry.ISpan
    public void k(l8 l8Var) {
        s(l8Var, this.f28315f.b().getDateProvider().now());
    }

    @Override // io.sentry.ISpan
    public ISpan l(String str, String str2, j5 j5Var, j1 j1Var) {
        return o(str, str2, j5Var, j1Var, new k8());
    }

    @Override // io.sentry.ISpan
    public void m(String str, Number number, a2 a2Var) {
        if (isFinished()) {
            this.f28315f.b().getLogger().c(SentryLevel.DEBUG, "The span is already finished. Measurement %s cannot be set", str);
            return;
        }
        this.f28321l.put(str, new io.sentry.protocol.k(number, a2Var.apiName()));
        if (this.f28313d.M() != this) {
            this.f28313d.X(str, number, a2Var);
        }
    }

    @Override // io.sentry.ISpan
    public ISpan o(String str, String str2, j5 j5Var, j1 j1Var, k8 k8Var) {
        if (this.f28316g) {
            return y2.u();
        }
        return this.f28313d.Z(this.f28312c.m(), str, str2, j5Var, j1Var, k8Var);
    }

    @Override // io.sentry.ISpan
    public e8 q() {
        return this.f28312c;
    }

    @Override // io.sentry.ISpan
    public j5 r() {
        return this.f28311b;
    }

    @Override // io.sentry.ISpan
    public void s(l8 l8Var, j5 j5Var) {
        List<d8> v10;
        j5 j5Var2;
        if (!this.f28316g && this.f28317h.compareAndSet(false, true)) {
            this.f28312c.v(l8Var);
            if (j5Var == null) {
                j5Var = this.f28315f.b().getDateProvider().now();
            }
            this.f28311b = j5Var;
            if (this.f28318i.f() || this.f28318i.e()) {
                if (this.f28313d.M().C().equals(C())) {
                    v10 = this.f28313d.I();
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
                if (this.f28318i.f() && j5Var3 != null && this.f28310a.f(j5Var3)) {
                    J(j5Var3);
                }
                if (this.f28318i.e() && j5Var4 != null && ((j5Var2 = this.f28311b) == null || j5Var2.e(j5Var4))) {
                    I(j5Var4);
                }
            }
            Throwable th2 = this.f28314e;
            if (th2 != null) {
                this.f28315f.i(th2, this, this.f28313d.getName());
            }
            g8 g8Var = this.f28319j;
            if (g8Var != null) {
                g8Var.a(this);
            }
            this.f28316g = true;
        }
    }

    @Override // io.sentry.ISpan
    public j5 t() {
        return this.f28310a;
    }

    public Map u() {
        return this.f28320k;
    }

    public Map w() {
        return this.f28321l;
    }

    public String x() {
        return this.f28312c.f();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k8 y() {
        return this.f28318i;
    }

    public j8 z() {
        return this.f28312c.h();
    }

    public d8(t8 t8Var, w7 w7Var, w0 w0Var, k8 k8Var) {
        e8 e8Var = (e8) io.sentry.util.y.c(t8Var, "context is required");
        this.f28312c = e8Var;
        e8Var.t(k8Var.a());
        this.f28313d = (w7) io.sentry.util.y.c(w7Var, "sentryTracer is required");
        this.f28315f = (w0) io.sentry.util.y.c(w0Var, "scopes are required");
        this.f28319j = null;
        j5 c10 = k8Var.c();
        if (c10 != null) {
            this.f28310a = c10;
        } else {
            this.f28310a = w0Var.b().getDateProvider().now();
        }
        this.f28318i = k8Var;
    }
}
