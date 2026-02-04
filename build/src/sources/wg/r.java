package wg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52420a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f52421b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52422c;

    /* renamed from: d  reason: collision with root package name */
    private int f52423d;

    /* renamed from: e  reason: collision with root package name */
    private int f52424e;

    /* renamed from: f  reason: collision with root package name */
    private int f52425f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f52426g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f52427h;

    public r(int i10, m0 m0Var) {
        this.f52421b = i10;
        this.f52422c = m0Var;
    }

    private final void b() {
        if (this.f52423d + this.f52424e + this.f52425f == this.f52421b) {
            if (this.f52426g != null) {
                m0 m0Var = this.f52422c;
                int i10 = this.f52424e;
                int i11 = this.f52421b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f52426g));
            } else if (this.f52427h) {
                this.f52422c.u();
            } else {
                this.f52422c.t(null);
            }
        }
    }

    @Override // wg.e
    public final void a() {
        synchronized (this.f52420a) {
            this.f52425f++;
            this.f52427h = true;
            b();
        }
    }

    @Override // wg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f52420a) {
            this.f52424e++;
            this.f52426g = exc;
            b();
        }
    }

    @Override // wg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f52420a) {
            this.f52423d++;
            b();
        }
    }
}
