package rg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g2 implements zi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f48216a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f48217b = false;

    /* renamed from: c  reason: collision with root package name */
    private zi.c f48218c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f48219d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g2(b2 b2Var) {
        this.f48219d = b2Var;
    }

    private final void b() {
        if (!this.f48216a) {
            this.f48216a = true;
            return;
        }
        throw new zi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(zi.c cVar, boolean z10) {
        this.f48216a = false;
        this.f48218c = cVar;
        this.f48217b = z10;
    }

    @Override // zi.g
    public final zi.g c(String str) {
        b();
        this.f48219d.f(this.f48218c, str, this.f48217b);
        return this;
    }

    @Override // zi.g
    public final zi.g e(boolean z10) {
        b();
        this.f48219d.g(this.f48218c, z10 ? 1 : 0, this.f48217b);
        return this;
    }
}
