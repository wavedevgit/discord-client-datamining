package mg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v2 implements xi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f38163a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f38164b = false;

    /* renamed from: c  reason: collision with root package name */
    private xi.c f38165c;

    /* renamed from: d  reason: collision with root package name */
    private final r2 f38166d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v2(r2 r2Var) {
        this.f38166d = r2Var;
    }

    private final void c() {
        if (!this.f38163a) {
            this.f38163a = true;
            return;
        }
        throw new xi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // xi.g
    public final xi.g a(String str) {
        c();
        this.f38166d.f(this.f38165c, str, this.f38164b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(xi.c cVar, boolean z10) {
        this.f38163a = false;
        this.f38165c = cVar;
        this.f38164b = z10;
    }

    @Override // xi.g
    public final xi.g e(boolean z10) {
        c();
        this.f38166d.g(this.f38165c, z10 ? 1 : 0, this.f38164b);
        return this;
    }
}
