package xi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f53367a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53368b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f53369c;

    /* renamed from: d  reason: collision with root package name */
    private final f f53370d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(f fVar) {
        this.f53370d = fVar;
    }

    private void b() {
        if (!this.f53367a) {
            this.f53367a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public ui.g a(String str) {
        b();
        this.f53370d.g(this.f53369c, str, this.f53368b);
        return this;
    }

    @Override // ui.g
    public ui.g c(boolean z10) {
        b();
        this.f53370d.l(this.f53369c, z10, this.f53368b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ui.c cVar, boolean z10) {
        this.f53367a = false;
        this.f53369c = cVar;
        this.f53368b = z10;
    }
}
