package ng;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v2 implements yi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f40374a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40375b = false;

    /* renamed from: c  reason: collision with root package name */
    private yi.c f40376c;

    /* renamed from: d  reason: collision with root package name */
    private final r2 f40377d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v2(r2 r2Var) {
        this.f40377d = r2Var;
    }

    private final void b() {
        if (!this.f40374a) {
            this.f40374a = true;
            return;
        }
        throw new yi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(yi.c cVar, boolean z10) {
        this.f40374a = false;
        this.f40376c = cVar;
        this.f40375b = z10;
    }

    @Override // yi.g
    public final yi.g d(String str) {
        b();
        this.f40377d.f(this.f40376c, str, this.f40375b);
        return this;
    }

    @Override // yi.g
    public final yi.g e(boolean z10) {
        b();
        this.f40377d.g(this.f40376c, z10 ? 1 : 0, this.f40375b);
        return this;
    }
}
