package zg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56462a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f56463b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f56464c;

    /* renamed from: d  reason: collision with root package name */
    private int f56465d;

    /* renamed from: e  reason: collision with root package name */
    private int f56466e;

    /* renamed from: f  reason: collision with root package name */
    private int f56467f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f56468g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f56469h;

    public r(int i10, m0 m0Var) {
        this.f56463b = i10;
        this.f56464c = m0Var;
    }

    private final void b() {
        if (this.f56465d + this.f56466e + this.f56467f == this.f56463b) {
            if (this.f56468g != null) {
                m0 m0Var = this.f56464c;
                int i10 = this.f56466e;
                int i11 = this.f56463b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f56468g));
            } else if (this.f56469h) {
                this.f56464c.u();
            } else {
                this.f56464c.t(null);
            }
        }
    }

    @Override // zg.e
    public final void a() {
        synchronized (this.f56462a) {
            this.f56467f++;
            this.f56469h = true;
            b();
        }
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f56462a) {
            this.f56466e++;
            this.f56468g = exc;
            b();
        }
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f56462a) {
            this.f56465d++;
            b();
        }
    }
}
