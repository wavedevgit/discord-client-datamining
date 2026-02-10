package cj;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i implements zi.g {

    /* renamed from: a  reason: collision with root package name */
    private boolean f7646a = false;

    /* renamed from: b  reason: collision with root package name */
    private boolean f7647b = false;

    /* renamed from: c  reason: collision with root package name */
    private zi.c f7648c;

    /* renamed from: d  reason: collision with root package name */
    private final f f7649d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(f fVar) {
        this.f7649d = fVar;
    }

    private void a() {
        if (!this.f7646a) {
            this.f7646a = true;
            return;
        }
        throw new zi.b("Cannot encode a second value in the ValueEncoderContext");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(zi.c cVar, boolean z10) {
        this.f7646a = false;
        this.f7648c = cVar;
        this.f7647b = z10;
    }

    @Override // zi.g
    public zi.g c(String str) {
        a();
        this.f7649d.l(this.f7648c, str, this.f7647b);
        return this;
    }

    @Override // zi.g
    public zi.g e(boolean z10) {
        a();
        this.f7649d.i(this.f7648c, z10, this.f7647b);
        return this;
    }
}
