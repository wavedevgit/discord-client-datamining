package pg;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g2 implements xi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f45220a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f45221b = false;

    /* renamed from: c  reason: collision with root package name */
    private xi.c f45222c;

    /* renamed from: d  reason: collision with root package name */
    private final b2 f45223d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g2(b2 b2Var) {
        this.f45223d = b2Var;
    }

    private final void c() {
        if (!this.f45220a) {
            this.f45220a = true;
            return;
        }
        throw new xi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // xi.g
    public final xi.g a(String str) {
        c();
        this.f45223d.f(this.f45222c, str, this.f45221b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(xi.c cVar, boolean z10) {
        this.f45220a = false;
        this.f45222c = cVar;
        this.f45221b = z10;
    }

    @Override // xi.g
    public final xi.g e(boolean z10) {
        c();
        this.f45223d.g(this.f45222c, z10 ? 1 : 0, this.f45221b);
        return this;
    }
}
