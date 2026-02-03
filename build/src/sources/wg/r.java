package wg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52201a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f52202b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52203c;

    /* renamed from: d  reason: collision with root package name */
    private int f52204d;

    /* renamed from: e  reason: collision with root package name */
    private int f52205e;

    /* renamed from: f  reason: collision with root package name */
    private int f52206f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f52207g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f52208h;

    public r(int i10, m0 m0Var) {
        this.f52202b = i10;
        this.f52203c = m0Var;
    }

    private final void b() {
        if (this.f52204d + this.f52205e + this.f52206f == this.f52202b) {
            if (this.f52207g != null) {
                m0 m0Var = this.f52203c;
                int i10 = this.f52205e;
                int i11 = this.f52202b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f52207g));
            } else if (this.f52208h) {
                this.f52203c.u();
            } else {
                this.f52203c.t(null);
            }
        }
    }

    @Override // wg.e
    public final void a() {
        synchronized (this.f52201a) {
            this.f52206f++;
            this.f52208h = true;
            b();
        }
    }

    @Override // wg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f52201a) {
            this.f52205e++;
            this.f52207g = exc;
            b();
        }
    }

    @Override // wg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f52201a) {
            this.f52204d++;
            b();
        }
    }
}
