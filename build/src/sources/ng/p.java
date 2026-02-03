package ng;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f41397a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f41398b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f41399c;

    /* renamed from: d  reason: collision with root package name */
    private final l f41400d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(l lVar) {
        this.f41400d = lVar;
    }

    private final void d() {
        if (!this.f41397a) {
            this.f41397a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public final ui.g a(String str) {
        d();
        this.f41400d.f(this.f41399c, str, this.f41398b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(ui.c cVar, boolean z10) {
        this.f41397a = false;
        this.f41399c = cVar;
        this.f41398b = z10;
    }

    @Override // ui.g
    public final ui.g c(boolean z10) {
        d();
        this.f41400d.g(this.f41399c, z10 ? 1 : 0, this.f41398b);
        return this;
    }
}
