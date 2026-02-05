package og;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 implements xi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42675a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42676b = false;

    /* renamed from: c  reason: collision with root package name */
    private xi.c f42677c;

    /* renamed from: d  reason: collision with root package name */
    private final y1 f42678d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d2(y1 y1Var) {
        this.f42678d = y1Var;
    }

    private final void c() {
        if (!this.f42675a) {
            this.f42675a = true;
            return;
        }
        throw new xi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // xi.g
    public final xi.g a(String str) {
        c();
        this.f42678d.f(this.f42677c, str, this.f42676b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(xi.c cVar, boolean z10) {
        this.f42675a = false;
        this.f42677c = cVar;
        this.f42676b = z10;
    }

    @Override // xi.g
    public final xi.g e(boolean z10) {
        c();
        this.f42678d.g(this.f42677c, z10 ? 1 : 0, this.f42676b);
        return this;
    }
}
