package yg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f55397a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f55398b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f55399c;

    /* renamed from: d  reason: collision with root package name */
    private int f55400d;

    /* renamed from: e  reason: collision with root package name */
    private int f55401e;

    /* renamed from: f  reason: collision with root package name */
    private int f55402f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f55403g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f55404h;

    public r(int i10, m0 m0Var) {
        this.f55398b = i10;
        this.f55399c = m0Var;
    }

    private final void b() {
        if (this.f55400d + this.f55401e + this.f55402f == this.f55398b) {
            if (this.f55403g != null) {
                m0 m0Var = this.f55399c;
                int i10 = this.f55401e;
                int i11 = this.f55398b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f55403g));
            } else if (this.f55404h) {
                this.f55399c.u();
            } else {
                this.f55399c.t(null);
            }
        }
    }

    @Override // yg.e
    public final void a() {
        synchronized (this.f55397a) {
            this.f55402f++;
            this.f55404h = true;
            b();
        }
    }

    @Override // yg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f55397a) {
            this.f55401e++;
            this.f55403g = exc;
            b();
        }
    }

    @Override // yg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f55397a) {
            this.f55400d++;
            b();
        }
    }
}
