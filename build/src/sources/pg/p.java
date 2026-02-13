package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42883a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42884b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f42885c;

    /* renamed from: d  reason: collision with root package name */
    private final l f42886d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(l lVar) {
        this.f42886d = lVar;
    }

    private final void c() {
        if (!this.f42883a) {
            this.f42883a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public final bj.g a(String str) {
        c();
        this.f42886d.f(this.f42885c, str, this.f42884b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(bj.c cVar, boolean z10) {
        this.f42883a = false;
        this.f42885c = cVar;
        this.f42884b = z10;
    }

    @Override // bj.g
    public final bj.g d(boolean z10) {
        c();
        this.f42886d.g(this.f42885c, z10 ? 1 : 0, this.f42884b);
        return this;
    }
}
