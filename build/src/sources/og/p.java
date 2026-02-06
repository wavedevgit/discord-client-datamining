package og;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements yi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42348a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42349b = false;

    /* renamed from: c  reason: collision with root package name */
    private yi.c f42350c;

    /* renamed from: d  reason: collision with root package name */
    private final l f42351d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(l lVar) {
        this.f42351d = lVar;
    }

    private final void b() {
        if (!this.f42348a) {
            this.f42348a = true;
            return;
        }
        throw new yi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(yi.c cVar, boolean z10) {
        this.f42348a = false;
        this.f42350c = cVar;
        this.f42349b = z10;
    }

    @Override // yi.g
    public final yi.g d(String str) {
        b();
        this.f42351d.f(this.f42350c, str, this.f42349b);
        return this;
    }

    @Override // yi.g
    public final yi.g e(boolean z10) {
        b();
        this.f42351d.g(this.f42350c, z10 ? 1 : 0, this.f42349b);
        return this;
    }
}
