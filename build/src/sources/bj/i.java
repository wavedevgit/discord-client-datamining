package bj;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements yi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f6805a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f6806b = false;

    /* renamed from: c  reason: collision with root package name */
    private yi.c f6807c;

    /* renamed from: d  reason: collision with root package name */
    private final f f6808d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(f fVar) {
        this.f6808d = fVar;
    }

    private void a() {
        if (!this.f6805a) {
            this.f6805a = true;
            return;
        }
        throw new yi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(yi.c cVar, boolean z10) {
        this.f6805a = false;
        this.f6807c = cVar;
        this.f6806b = z10;
    }

    @Override // yi.g
    public yi.g d(String str) {
        a();
        this.f6808d.l(this.f6807c, str, this.f6806b);
        return this;
    }

    @Override // yi.g
    public yi.g e(boolean z10) {
        a();
        this.f6808d.i(this.f6807c, z10, this.f6806b);
        return this;
    }
}
