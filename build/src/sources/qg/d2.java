package qg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f44248a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f44249b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f44250c;

    /* renamed from: d  reason: collision with root package name */
    private final y1 f44251d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d2(y1 y1Var) {
        this.f44251d = y1Var;
    }

    private final void c() {
        if (!this.f44248a) {
            this.f44248a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f44251d.f(this.f44250c, str, this.f44249b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f44248a = false;
        this.f44250c = cVar;
        this.f44249b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f44251d.g(this.f44250c, z10 ? 1 : 0, this.f44249b);
        return this;
    }
}
