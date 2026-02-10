package zg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f56461a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f56462b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f56463c;

    /* renamed from: d  reason: collision with root package name */
    private int f56464d;

    /* renamed from: e  reason: collision with root package name */
    private int f56465e;

    /* renamed from: f  reason: collision with root package name */
    private int f56466f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f56467g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f56468h;

    public r(int i10, m0 m0Var) {
        this.f56462b = i10;
        this.f56463c = m0Var;
    }

    private final void b() {
        if (this.f56464d + this.f56465e + this.f56466f == this.f56462b) {
            if (this.f56467g != null) {
                m0 m0Var = this.f56463c;
                int i10 = this.f56465e;
                int i11 = this.f56462b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f56467g));
            } else if (this.f56468h) {
                this.f56463c.u();
            } else {
                this.f56463c.t(null);
            }
        }
    }

    @Override // zg.e
    public final void a() {
        synchronized (this.f56461a) {
            this.f56466f++;
            this.f56468h = true;
            b();
        }
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f56461a) {
            this.f56465e++;
            this.f56467g = exc;
            b();
        }
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f56461a) {
            this.f56464d++;
            b();
        }
    }
}
