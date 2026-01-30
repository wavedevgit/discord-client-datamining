package xi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f53383a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53384b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f53385c;

    /* renamed from: d  reason: collision with root package name */
    private final f f53386d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(f fVar) {
        this.f53386d = fVar;
    }

    private void b() {
        if (!this.f53383a) {
            this.f53383a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public ui.g a(String str) {
        b();
        this.f53386d.g(this.f53385c, str, this.f53384b);
        return this;
    }

    @Override // ui.g
    public ui.g c(boolean z10) {
        b();
        this.f53386d.l(this.f53385c, z10, this.f53384b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ui.c cVar, boolean z10) {
        this.f53383a = false;
        this.f53385c = cVar;
        this.f53384b = z10;
    }
}
