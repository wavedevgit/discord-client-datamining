package rg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g2 implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f46671a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f46672b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f46673c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f46674d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g2(b2 b2Var) {
        this.f46674d = b2Var;
    }

    private final void c() {
        if (!this.f46671a) {
            this.f46671a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f46674d.f(this.f46673c, str, this.f46672b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f46671a = false;
        this.f46673c = cVar;
        this.f46672b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f46674d.g(this.f46673c, z10 ? 1 : 0, this.f46672b);
        return this;
    }
}
