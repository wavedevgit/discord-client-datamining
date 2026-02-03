package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g2 implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f45290a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f45291b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f45292c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f45293d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g2(b2 b2Var) {
        this.f45293d = b2Var;
    }

    private final void d() {
        if (!this.f45290a) {
            this.f45290a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public final ui.g a(String str) {
        d();
        this.f45293d.f(this.f45292c, str, this.f45291b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(ui.c cVar, boolean z10) {
        this.f45290a = false;
        this.f45292c = cVar;
        this.f45291b = z10;
    }

    @Override // ui.g
    public final ui.g c(boolean z10) {
        d();
        this.f45293d.g(this.f45292c, z10 ? 1 : 0, this.f45291b);
        return this;
    }
}
