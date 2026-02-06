package ng;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v2 implements yi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f40326a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40327b = false;

    /* renamed from: c  reason: collision with root package name */
    private yi.c f40328c;

    /* renamed from: d  reason: collision with root package name */
    private final r2 f40329d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v2(r2 r2Var) {
        this.f40329d = r2Var;
    }

    private final void b() {
        if (!this.f40326a) {
            this.f40326a = true;
            return;
        }
        throw new yi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(yi.c cVar, boolean z10) {
        this.f40326a = false;
        this.f40328c = cVar;
        this.f40327b = z10;
    }

    @Override // yi.g
    public final yi.g d(String str) {
        b();
        this.f40329d.f(this.f40328c, str, this.f40327b);
        return this;
    }

    @Override // yi.g
    public final yi.g e(boolean z10) {
        b();
        this.f40329d.g(this.f40328c, z10 ? 1 : 0, this.f40327b);
        return this;
    }
}
