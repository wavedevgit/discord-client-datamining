package wg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f52634a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f52635b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f52636c;

    /* renamed from: d  reason: collision with root package name */
    private int f52637d;

    /* renamed from: e  reason: collision with root package name */
    private int f52638e;

    /* renamed from: f  reason: collision with root package name */
    private int f52639f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f52640g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f52641h;

    public r(int i10, m0 m0Var) {
        this.f52635b = i10;
        this.f52636c = m0Var;
    }

    private final void b() {
        if (this.f52637d + this.f52638e + this.f52639f == this.f52635b) {
            if (this.f52640g != null) {
                m0 m0Var = this.f52636c;
                int i10 = this.f52638e;
                int i11 = this.f52635b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f52640g));
            } else if (this.f52641h) {
                this.f52636c.u();
            } else {
                this.f52636c.t(null);
            }
        }
    }

    @Override // wg.e
    public final void a() {
        synchronized (this.f52634a) {
            this.f52639f++;
            this.f52641h = true;
            b();
        }
    }

    @Override // wg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f52634a) {
            this.f52638e++;
            this.f52640g = exc;
            b();
        }
    }

    @Override // wg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f52634a) {
            this.f52637d++;
            b();
        }
    }
}
