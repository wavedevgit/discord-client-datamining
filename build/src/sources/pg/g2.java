package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g2 implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f45332a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f45333b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f45334c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f45335d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g2(b2 b2Var) {
        this.f45335d = b2Var;
    }

    private final void d() {
        if (!this.f45332a) {
            this.f45332a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public final ui.g a(String str) {
        d();
        this.f45335d.f(this.f45334c, str, this.f45333b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(ui.c cVar, boolean z10) {
        this.f45332a = false;
        this.f45334c = cVar;
        this.f45333b = z10;
    }

    @Override // ui.g
    public final ui.g c(boolean z10) {
        d();
        this.f45335d.g(this.f45334c, z10 ? 1 : 0, this.f45333b);
        return this;
    }
}
