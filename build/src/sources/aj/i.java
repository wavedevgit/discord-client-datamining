package aj;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements xi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f676a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f677b = false;

    /* renamed from: c  reason: collision with root package name */
    private xi.c f678c;

    /* renamed from: d  reason: collision with root package name */
    private final f f679d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(f fVar) {
        this.f679d = fVar;
    }

    private void b() {
        if (!this.f676a) {
            this.f676a = true;
            return;
        }
        throw new xi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // xi.g
    public xi.g a(String str) {
        b();
        this.f679d.l(this.f678c, str, this.f677b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(xi.c cVar, boolean z10) {
        this.f676a = false;
        this.f678c = cVar;
        this.f677b = z10;
    }

    @Override // xi.g
    public xi.g e(boolean z10) {
        b();
        this.f679d.i(this.f678c, z10, this.f677b);
        return this;
    }
}
