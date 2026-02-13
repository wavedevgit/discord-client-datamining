package rg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g2 implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f47239a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f47240b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f47241c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f47242d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g2(b2 b2Var) {
        this.f47242d = b2Var;
    }

    private final void c() {
        if (!this.f47239a) {
            this.f47239a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f47242d.f(this.f47241c, str, this.f47240b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f47239a = false;
        this.f47241c = cVar;
        this.f47240b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f47242d.g(this.f47241c, z10 ? 1 : 0, this.f47240b);
        return this;
    }
}
