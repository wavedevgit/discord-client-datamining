package xi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f53312a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53313b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f53314c;

    /* renamed from: d  reason: collision with root package name */
    private final f f53315d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(f fVar) {
        this.f53315d = fVar;
    }

    private void b() {
        if (!this.f53312a) {
            this.f53312a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public ui.g a(String str) {
        b();
        this.f53315d.g(this.f53314c, str, this.f53313b);
        return this;
    }

    @Override // ui.g
    public ui.g c(boolean z10) {
        b();
        this.f53315d.l(this.f53314c, z10, this.f53313b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ui.c cVar, boolean z10) {
        this.f53312a = false;
        this.f53314c = cVar;
        this.f53313b = z10;
    }
}
