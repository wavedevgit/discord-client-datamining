package og;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v2 implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f40294a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40295b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f40296c;

    /* renamed from: d  reason: collision with root package name */
    private final r2 f40297d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v2(r2 r2Var) {
        this.f40297d = r2Var;
    }

    private final void c() {
        if (!this.f40294a) {
            this.f40294a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f40297d.f(this.f40296c, str, this.f40295b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f40294a = false;
        this.f40296c = cVar;
        this.f40295b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f40297d.g(this.f40296c, z10 ? 1 : 0, this.f40295b);
        return this;
    }
}
