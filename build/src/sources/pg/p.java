package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements zi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f43856a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f43857b = false;

    /* renamed from: c  reason: collision with root package name */
    private zi.c f43858c;

    /* renamed from: d  reason: collision with root package name */
    private final l f43859d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(l lVar) {
        this.f43859d = lVar;
    }

    private final void b() {
        if (!this.f43856a) {
            this.f43856a = true;
            return;
        }
        throw new zi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(zi.c cVar, boolean z10) {
        this.f43856a = false;
        this.f43858c = cVar;
        this.f43857b = z10;
    }

    @Override // zi.g
    public final zi.g c(String str) {
        b();
        this.f43859d.f(this.f43858c, str, this.f43857b);
        return this;
    }

    @Override // zi.g
    public final zi.g e(boolean z10) {
        b();
        this.f43859d.g(this.f43858c, z10 ? 1 : 0, this.f43857b);
        return this;
    }
}
