package zg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56422a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f56423b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f56424c;

    /* renamed from: d  reason: collision with root package name */
    private int f56425d;

    /* renamed from: e  reason: collision with root package name */
    private int f56426e;

    /* renamed from: f  reason: collision with root package name */
    private int f56427f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f56428g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f56429h;

    public r(int i10, m0 m0Var) {
        this.f56423b = i10;
        this.f56424c = m0Var;
    }

    private final void b() {
        if (this.f56425d + this.f56426e + this.f56427f == this.f56423b) {
            if (this.f56428g != null) {
                m0 m0Var = this.f56424c;
                int i10 = this.f56426e;
                int i11 = this.f56423b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f56428g));
            } else if (this.f56429h) {
                this.f56424c.u();
            } else {
                this.f56424c.t(null);
            }
        }
    }

    @Override // zg.e
    public final void a() {
        synchronized (this.f56422a) {
            this.f56427f++;
            this.f56429h = true;
            b();
        }
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f56422a) {
            this.f56426e++;
            this.f56428g = exc;
            b();
        }
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f56422a) {
            this.f56425d++;
            b();
        }
    }
}
