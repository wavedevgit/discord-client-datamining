package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42315a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42316b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f42317c;

    /* renamed from: d  reason: collision with root package name */
    private final l f42318d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(l lVar) {
        this.f42318d = lVar;
    }

    private final void c() {
        if (!this.f42315a) {
            this.f42315a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f42318d.f(this.f42317c, str, this.f42316b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f42315a = false;
        this.f42317c = cVar;
        this.f42316b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f42318d.g(this.f42317c, z10 ? 1 : 0, this.f42316b);
        return this;
    }
}
