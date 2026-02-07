package og;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements yi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42396a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42397b = false;

    /* renamed from: c  reason: collision with root package name */
    private yi.c f42398c;

    /* renamed from: d  reason: collision with root package name */
    private final l f42399d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(l lVar) {
        this.f42399d = lVar;
    }

    private final void b() {
        if (!this.f42396a) {
            this.f42396a = true;
            return;
        }
        throw new yi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(yi.c cVar, boolean z10) {
        this.f42396a = false;
        this.f42398c = cVar;
        this.f42397b = z10;
    }

    @Override // yi.g
    public final yi.g d(String str) {
        b();
        this.f42399d.f(this.f42398c, str, this.f42397b);
        return this;
    }

    @Override // yi.g
    public final yi.g e(boolean z10) {
        b();
        this.f42399d.g(this.f42398c, z10 ? 1 : 0, this.f42397b);
        return this;
    }
}
