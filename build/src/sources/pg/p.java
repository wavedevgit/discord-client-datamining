package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42314a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42315b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f42316c;

    /* renamed from: d  reason: collision with root package name */
    private final l f42317d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(l lVar) {
        this.f42317d = lVar;
    }

    private final void c() {
        if (!this.f42314a) {
            this.f42314a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f42317d.f(this.f42316c, str, this.f42315b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f42314a = false;
        this.f42316c = cVar;
        this.f42315b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f42317d.g(this.f42316c, z10 ? 1 : 0, this.f42315b);
        return this;
    }
}
