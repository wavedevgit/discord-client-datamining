package xg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f53845a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f53846b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f53847c;

    /* renamed from: d  reason: collision with root package name */
    private int f53848d;

    /* renamed from: e  reason: collision with root package name */
    private int f53849e;

    /* renamed from: f  reason: collision with root package name */
    private int f53850f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f53851g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f53852h;

    public r(int i10, m0 m0Var) {
        this.f53846b = i10;
        this.f53847c = m0Var;
    }

    private final void b() {
        if (this.f53848d + this.f53849e + this.f53850f == this.f53846b) {
            if (this.f53851g != null) {
                m0 m0Var = this.f53847c;
                int i10 = this.f53849e;
                int i11 = this.f53846b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f53851g));
            } else if (this.f53852h) {
                this.f53847c.u();
            } else {
                this.f53847c.t(null);
            }
        }
    }

    @Override // xg.e
    public final void a() {
        synchronized (this.f53845a) {
            this.f53850f++;
            this.f53852h = true;
            b();
        }
    }

    @Override // xg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f53845a) {
            this.f53849e++;
            this.f53851g = exc;
            b();
        }
    }

    @Override // xg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f53845a) {
            this.f53848d++;
            b();
        }
    }
}
