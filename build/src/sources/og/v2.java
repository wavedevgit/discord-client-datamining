package og;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v2 implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f39725a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f39726b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f39727c;

    /* renamed from: d  reason: collision with root package name */
    private final r2 f39728d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v2(r2 r2Var) {
        this.f39728d = r2Var;
    }

    private final void c() {
        if (!this.f39725a) {
            this.f39725a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f39728d.f(this.f39727c, str, this.f39726b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f39725a = false;
        this.f39727c = cVar;
        this.f39726b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f39728d.g(this.f39727c, z10 ? 1 : 0, this.f39726b);
        return this;
    }
}
