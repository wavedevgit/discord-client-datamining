package xv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q extends cw.a {

    /* renamed from: a  reason: collision with root package name */
    private final aw.q f55272a = new aw.q();

    /* renamed from: b  reason: collision with root package name */
    private int f55273b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f55274c;

    public q(int i10) {
        this.f55273b = i10;
    }

    @Override // cw.a, cw.d
    public boolean a(aw.a aVar) {
        if (this.f55274c) {
            aw.a f10 = this.f55272a.f();
            if (f10 instanceof aw.p) {
                ((aw.p) f10).o(false);
                return true;
            }
            return true;
        }
        return true;
    }

    @Override // cw.a, cw.d
    public boolean b() {
        return true;
    }

    @Override // cw.d
    public aw.a d() {
        return this.f55272a;
    }

    @Override // cw.d
    public cw.c g(cw.h hVar) {
        boolean z10;
        if (hVar.b()) {
            if (this.f55272a.c() == null) {
                return cw.c.d();
            }
            aw.a d10 = hVar.d().d();
            if (!(d10 instanceof aw.t) && !(d10 instanceof aw.q)) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f55274c = z10;
            return cw.c.b(hVar.c());
        } else if (hVar.a() >= this.f55273b) {
            return cw.c.a(hVar.getColumn() + this.f55273b);
        } else {
            return cw.c.d();
        }
    }
}
