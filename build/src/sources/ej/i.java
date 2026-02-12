package ej;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements bj.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f22889a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f22890b = false;

    /* renamed from: c  reason: collision with root package name */
    private bj.c f22891c;

    /* renamed from: d  reason: collision with root package name */
    private final f f22892d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(f fVar) {
        this.f22892d = fVar;
    }

    private void b() {
        if (!this.f22889a) {
            this.f22889a = true;
            return;
        }
        throw new bj.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // bj.g
    public bj.g a(String str) {
        b();
        this.f22892d.g(this.f22891c, str, this.f22890b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(bj.c cVar, boolean z10) {
        this.f22889a = false;
        this.f22891c = cVar;
        this.f22890b = z10;
    }

    @Override // bj.g
    public bj.g d(boolean z10) {
        b();
        this.f22892d.l(this.f22891c, z10, this.f22890b);
        return this;
    }
}
