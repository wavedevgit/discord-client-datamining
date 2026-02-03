package wg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52423a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f52424b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52425c;

    /* renamed from: d  reason: collision with root package name */
    private int f52426d;

    /* renamed from: e  reason: collision with root package name */
    private int f52427e;

    /* renamed from: f  reason: collision with root package name */
    private int f52428f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f52429g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f52430h;

    public r(int i10, m0 m0Var) {
        this.f52424b = i10;
        this.f52425c = m0Var;
    }

    private final void b() {
        if (this.f52426d + this.f52427e + this.f52428f == this.f52424b) {
            if (this.f52429g != null) {
                m0 m0Var = this.f52425c;
                int i10 = this.f52427e;
                int i11 = this.f52424b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f52429g));
            } else if (this.f52430h) {
                this.f52425c.u();
            } else {
                this.f52425c.t(null);
            }
        }
    }

    @Override // wg.e
    public final void a() {
        synchronized (this.f52423a) {
            this.f52428f++;
            this.f52430h = true;
            b();
        }
    }

    @Override // wg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f52423a) {
            this.f52427e++;
            this.f52429g = exc;
            b();
        }
    }

    @Override // wg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f52423a) {
            this.f52426d++;
            b();
        }
    }
}
