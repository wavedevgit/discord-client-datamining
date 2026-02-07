package qg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g2 implements yi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f47098a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f47099b = false;

    /* renamed from: c  reason: collision with root package name */
    private yi.c f47100c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f47101d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g2(b2 b2Var) {
        this.f47101d = b2Var;
    }

    private final void b() {
        if (!this.f47098a) {
            this.f47098a = true;
            return;
        }
        throw new yi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(yi.c cVar, boolean z10) {
        this.f47098a = false;
        this.f47100c = cVar;
        this.f47099b = z10;
    }

    @Override // yi.g
    public final yi.g d(String str) {
        b();
        this.f47101d.f(this.f47100c, str, this.f47099b);
        return this;
    }

    @Override // yi.g
    public final yi.g e(boolean z10) {
        b();
        this.f47101d.g(this.f47100c, z10 ? 1 : 0, this.f47099b);
        return this;
    }
}
