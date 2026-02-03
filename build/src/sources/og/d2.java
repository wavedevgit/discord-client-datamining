package og;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42969a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42970b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f42971c;

    /* renamed from: d  reason: collision with root package name */
    private final y1 f42972d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d2(y1 y1Var) {
        this.f42972d = y1Var;
    }

    private final void d() {
        if (!this.f42969a) {
            this.f42969a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public final ui.g a(String str) {
        d();
        this.f42972d.f(this.f42971c, str, this.f42970b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(ui.c cVar, boolean z10) {
        this.f42969a = false;
        this.f42971c = cVar;
        this.f42970b = z10;
    }

    @Override // ui.g
    public final ui.g c(boolean z10) {
        d();
        this.f42972d.g(this.f42971c, z10 ? 1 : 0, this.f42970b);
        return this;
    }
}
