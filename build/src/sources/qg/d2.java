package qg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 implements zi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f45579a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f45580b = false;

    /* renamed from: c  reason: collision with root package name */
    private zi.c f45581c;

    /* renamed from: d  reason: collision with root package name */
    private final y1 f45582d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d2(y1 y1Var) {
        this.f45582d = y1Var;
    }

    private final void b() {
        if (!this.f45579a) {
            this.f45579a = true;
            return;
        }
        throw new zi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(zi.c cVar, boolean z10) {
        this.f45579a = false;
        this.f45581c = cVar;
        this.f45580b = z10;
    }

    @Override // zi.g
    public final zi.g c(String str) {
        b();
        this.f45582d.f(this.f45581c, str, this.f45580b);
        return this;
    }

    @Override // zi.g
    public final zi.g e(boolean z10) {
        b();
        this.f45582d.g(this.f45581c, z10 ? 1 : 0, this.f45580b);
        return this;
    }
}
