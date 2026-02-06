package yg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f55349a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f55350b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f55351c;

    /* renamed from: d  reason: collision with root package name */
    private int f55352d;

    /* renamed from: e  reason: collision with root package name */
    private int f55353e;

    /* renamed from: f  reason: collision with root package name */
    private int f55354f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f55355g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f55356h;

    public r(int i10, m0 m0Var) {
        this.f55350b = i10;
        this.f55351c = m0Var;
    }

    private final void b() {
        if (this.f55352d + this.f55353e + this.f55354f == this.f55350b) {
            if (this.f55355g != null) {
                m0 m0Var = this.f55351c;
                int i10 = this.f55353e;
                int i11 = this.f55350b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f55355g));
            } else if (this.f55356h) {
                this.f55351c.u();
            } else {
                this.f55351c.t(null);
            }
        }
    }

    @Override // yg.e
    public final void a() {
        synchronized (this.f55349a) {
            this.f55354f++;
            this.f55356h = true;
            b();
        }
    }

    @Override // yg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f55349a) {
            this.f55353e++;
            this.f55355g = exc;
            b();
        }
    }

    @Override // yg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f55349a) {
            this.f55352d++;
            b();
        }
    }
}
