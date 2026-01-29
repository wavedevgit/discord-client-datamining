package wg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52618a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f52619b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52620c;

    /* renamed from: d  reason: collision with root package name */
    private int f52621d;

    /* renamed from: e  reason: collision with root package name */
    private int f52622e;

    /* renamed from: f  reason: collision with root package name */
    private int f52623f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f52624g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f52625h;

    public r(int i10, m0 m0Var) {
        this.f52619b = i10;
        this.f52620c = m0Var;
    }

    private final void b() {
        if (this.f52621d + this.f52622e + this.f52623f == this.f52619b) {
            if (this.f52624g != null) {
                m0 m0Var = this.f52620c;
                int i10 = this.f52622e;
                int i11 = this.f52619b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f52624g));
            } else if (this.f52625h) {
                this.f52620c.u();
            } else {
                this.f52620c.t(null);
            }
        }
    }

    @Override // wg.e
    public final void a() {
        synchronized (this.f52618a) {
            this.f52623f++;
            this.f52625h = true;
            b();
        }
    }

    @Override // wg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f52618a) {
            this.f52622e++;
            this.f52624g = exc;
            b();
        }
    }

    @Override // wg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f52618a) {
            this.f52621d++;
            b();
        }
    }
}
