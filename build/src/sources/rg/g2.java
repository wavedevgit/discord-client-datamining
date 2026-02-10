package rg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g2 implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f46670a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f46671b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f46672c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f46673d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g2(b2 b2Var) {
        this.f46673d = b2Var;
    }

    private final void c() {
        if (!this.f46670a) {
            this.f46670a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f46673d.f(this.f46672c, str, this.f46671b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f46670a = false;
        this.f46672c = cVar;
        this.f46671b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f46673d.g(this.f46672c, z10 ? 1 : 0, this.f46671b);
        return this;
    }
}
