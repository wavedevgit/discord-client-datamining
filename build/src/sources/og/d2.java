package og;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42769a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42770b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f42771c;

    /* renamed from: d  reason: collision with root package name */
    private final y1 f42772d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d2(y1 y1Var) {
        this.f42772d = y1Var;
    }

    private final void d() {
        if (!this.f42769a) {
            this.f42769a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public final ui.g a(String str) {
        d();
        this.f42772d.f(this.f42771c, str, this.f42770b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(ui.c cVar, boolean z10) {
        this.f42769a = false;
        this.f42771c = cVar;
        this.f42770b = z10;
    }

    @Override // ui.g
    public final ui.g c(boolean z10) {
        d();
        this.f42772d.g(this.f42771c, z10 ? 1 : 0, this.f42770b);
        return this;
    }
}
