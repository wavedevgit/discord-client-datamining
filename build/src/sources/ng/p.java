package ng;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements xi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f40896a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40897b = false;

    /* renamed from: c  reason: collision with root package name */
    private xi.c f40898c;

    /* renamed from: d  reason: collision with root package name */
    private final l f40899d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(l lVar) {
        this.f40899d = lVar;
    }

    private final void c() {
        if (!this.f40896a) {
            this.f40896a = true;
            return;
        }
        throw new xi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // xi.g
    public final xi.g a(String str) {
        c();
        this.f40899d.f(this.f40898c, str, this.f40897b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(xi.c cVar, boolean z10) {
        this.f40896a = false;
        this.f40898c = cVar;
        this.f40897b = z10;
    }

    @Override // xi.g
    public final xi.g e(boolean z10) {
        c();
        this.f40899d.g(this.f40898c, z10 ? 1 : 0, this.f40897b);
        return this;
    }
}
