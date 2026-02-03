package xi;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements ui.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f53591a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f53592b = false;

    /* renamed from: c  reason: collision with root package name */
    private ui.c f53593c;

    /* renamed from: d  reason: collision with root package name */
    private final f f53594d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(f fVar) {
        this.f53594d = fVar;
    }

    private void b() {
        if (!this.f53591a) {
            this.f53591a = true;
            return;
        }
        throw new ui.b("Cannot encode a second value in the ValueEncoderContext");
    }

    @Override // ui.g
    public ui.g a(String str) {
        b();
        this.f53594d.g(this.f53593c, str, this.f53592b);
        return this;
    }

    @Override // ui.g
    public ui.g c(boolean z10) {
        b();
        this.f53594d.l(this.f53593c, z10, this.f53592b);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(ui.c cVar, boolean z10) {
        this.f53591a = false;
        this.f53593c = cVar;
        this.f53592b = z10;
    }
}
