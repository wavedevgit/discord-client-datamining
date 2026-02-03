package mg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v2 implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f38704a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f38705b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f38706c;

    /* renamed from: d  reason: collision with root package name */
    private final r2 f38707d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v2(r2 r2Var) {
        this.f38707d = r2Var;
    }

    private final void d() {
        if (!this.f38704a) {
            this.f38704a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public final ui.g a(String str) {
        d();
        this.f38707d.f(this.f38706c, str, this.f38705b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(ui.c cVar, boolean z10) {
        this.f38704a = false;
        this.f38706c = cVar;
        this.f38705b = z10;
    }

    @Override // ui.g
    public final ui.g c(boolean z10) {
        d();
        this.f38707d.g(this.f38706c, z10 ? 1 : 0, this.f38705b);
        return this;
    }
}
