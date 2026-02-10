package og;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v2 implements zi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f41399a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f41400b = false;

    /* renamed from: c  reason: collision with root package name */
    private zi.c f41401c;

    /* renamed from: d  reason: collision with root package name */
    private final r2 f41402d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v2(r2 r2Var) {
        this.f41402d = r2Var;
    }

    private final void b() {
        if (!this.f41399a) {
            this.f41399a = true;
            return;
        }
        throw new zi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(zi.c cVar, boolean z10) {
        this.f41399a = false;
        this.f41401c = cVar;
        this.f41400b = z10;
    }

    @Override // zi.g
    public final zi.g c(String str) {
        b();
        this.f41402d.f(this.f41401c, str, this.f41400b);
        return this;
    }

    @Override // zi.g
    public final zi.g e(boolean z10) {
        b();
        this.f41402d.g(this.f41401c, z10 ? 1 : 0, this.f41400b);
        return this;
    }
}
