package zg;

import java.util.concurrent.ExecutionException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r implements q {

    /* renamed from: a  reason: collision with root package name */
    private final Object f57030a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private final int f57031b;

    /* renamed from: c  reason: collision with root package name */
    private final m0 f57032c;

    /* renamed from: d  reason: collision with root package name */
    private int f57033d;

    /* renamed from: e  reason: collision with root package name */
    private int f57034e;

    /* renamed from: f  reason: collision with root package name */
    private int f57035f;

    /* renamed from: g  reason: collision with root package name */
    private Exception f57036g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f57037h;

    public r(int i10, m0 m0Var) {
        this.f57031b = i10;
        this.f57032c = m0Var;
    }

    private final void b() {
        if (this.f57033d + this.f57034e + this.f57035f == this.f57031b) {
            if (this.f57036g != null) {
                m0 m0Var = this.f57032c;
                int i10 = this.f57034e;
                int i11 = this.f57031b;
                m0Var.s(new ExecutionException(i10 + " out of " + i11 + " underlying tasks failed", this.f57036g));
            } else if (this.f57037h) {
                this.f57032c.u();
            } else {
                this.f57032c.t(null);
            }
        }
    }

    @Override // zg.e
    public final void a() {
        synchronized (this.f57030a) {
            this.f57035f++;
            this.f57037h = true;
            b();
        }
    }

    @Override // zg.f
    public final void onFailure(Exception exc) {
        synchronized (this.f57030a) {
            this.f57034e++;
            this.f57036g = exc;
            b();
        }
    }

    @Override // zg.g
    public final void onSuccess(Object obj) {
        synchronized (this.f57030a) {
            this.f57033d++;
            b();
        }
    }
}
