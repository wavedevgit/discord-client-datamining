package qg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f44247a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f44248b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f44249c;

    /* renamed from: d  reason: collision with root package name */
    private final y1 f44250d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d2(y1 y1Var) {
        this.f44250d = y1Var;
    }

    private final void c() {
        if (!this.f44247a) {
            this.f44247a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f44250d.f(this.f44249c, str, this.f44248b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f44247a = false;
        this.f44249c = cVar;
        this.f44248b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f44250d.g(this.f44249c, z10 ? 1 : 0, this.f44248b);
        return this;
    }
}
