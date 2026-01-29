package og;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42825a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42826b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f42827c;

    /* renamed from: d  reason: collision with root package name */
    private final y1 f42828d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d2(y1 y1Var) {
        this.f42828d = y1Var;
    }

    private final void d() {
        if (!this.f42825a) {
            this.f42825a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public final ui.g a(String str) {
        d();
        this.f42828d.f(this.f42827c, str, this.f42826b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(ui.c cVar, boolean z10) {
        this.f42825a = false;
        this.f42827c = cVar;
        this.f42826b = z10;
    }

    @Override // ui.g
    public final ui.g c(boolean z10) {
        d();
        this.f42828d.g(this.f42827c, z10 ? 1 : 0, this.f42826b);
        return this;
    }
}
