package xi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f53309a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53310b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f53311c;

    /* renamed from: d  reason: collision with root package name */
    private final f f53312d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(f fVar) {
        this.f53312d = fVar;
    }

    private void b() {
        if (!this.f53309a) {
            this.f53309a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public ui.g a(String str) {
        b();
        this.f53312d.g(this.f53311c, str, this.f53310b);
        return this;
    }

    @Override // ui.g
    public ui.g c(boolean z10) {
        b();
        this.f53312d.l(this.f53311c, z10, this.f53310b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ui.c cVar, boolean z10) {
        this.f53309a = false;
        this.f53311c = cVar;
        this.f53310b = z10;
    }
}
