package qg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f44816a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f44817b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f44818c;

    /* renamed from: d  reason: collision with root package name */
    private final y1 f44819d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d2(y1 y1Var) {
        this.f44819d = y1Var;
    }

    private final void c() {
        if (!this.f44816a) {
            this.f44816a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f44819d.f(this.f44818c, str, this.f44817b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f44816a = false;
        this.f44818c = cVar;
        this.f44817b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f44819d.g(this.f44818c, z10 ? 1 : 0, this.f44817b);
        return this;
    }
}
