package qg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g2 implements yi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f47050a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f47051b = false;

    /* renamed from: c  reason: collision with root package name */
    private yi.c f47052c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f47053d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g2(b2 b2Var) {
        this.f47053d = b2Var;
    }

    private final void b() {
        if (!this.f47050a) {
            this.f47050a = true;
            return;
        }
        throw new yi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(yi.c cVar, boolean z10) {
        this.f47050a = false;
        this.f47052c = cVar;
        this.f47051b = z10;
    }

    @Override // yi.g
    public final yi.g d(String str) {
        b();
        this.f47053d.f(this.f47052c, str, this.f47051b);
        return this;
    }

    @Override // yi.g
    public final yi.g e(boolean z10) {
        b();
        this.f47053d.g(this.f47052c, z10 ? 1 : 0, this.f47051b);
        return this;
    }
}
