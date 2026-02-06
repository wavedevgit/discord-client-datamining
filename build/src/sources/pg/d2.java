package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d2 implements yi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f44017a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f44018b = false;

    /* renamed from: c  reason: collision with root package name */
    private yi.c f44019c;

    /* renamed from: d  reason: collision with root package name */
    private final y1 f44020d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d2(y1 y1Var) {
        this.f44020d = y1Var;
    }

    private final void b() {
        if (!this.f44017a) {
            this.f44017a = true;
            return;
        }
        throw new yi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(yi.c cVar, boolean z10) {
        this.f44017a = false;
        this.f44019c = cVar;
        this.f44018b = z10;
    }

    @Override // yi.g
    public final yi.g d(String str) {
        b();
        this.f44020d.f(this.f44019c, str, this.f44018b);
        return this;
    }

    @Override // yi.g
    public final yi.g e(boolean z10) {
        b();
        this.f44020d.g(this.f44019c, z10 ? 1 : 0, this.f44018b);
        return this;
    }
}
