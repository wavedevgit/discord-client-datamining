package dv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q extends iv.a {

    /* renamed from: a  reason: collision with root package name */
    private final gv.q f21190a = new gv.q();

    /* renamed from: b  reason: collision with root package name */
    private int f21191b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f21192c;

    public q(int i10) {
        this.f21191b = i10;
    }

    @Override // iv.a, iv.d
    public boolean b() {
        return true;
    }

    @Override // iv.d
    public gv.a d() {
        return this.f21190a;
    }

    @Override // iv.d
    public iv.c g(iv.h hVar) {
        boolean z10;
        if (hVar.b()) {
            if (this.f21190a.c() == null) {
                return iv.c.d();
            }
            gv.a d10 = hVar.d().d();
            if (!(d10 instanceof gv.t) && !(d10 instanceof gv.q)) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f21192c = z10;
            return iv.c.b(hVar.c());
        } else if (hVar.a() >= this.f21191b) {
            return iv.c.a(hVar.getColumn() + this.f21191b);
        } else {
            return iv.c.d();
        }
    }

    @Override // iv.a, iv.d
    public boolean h(gv.a aVar) {
        if (this.f21192c) {
            gv.a f10 = this.f21190a.f();
            if (f10 instanceof gv.p) {
                ((gv.p) f10).o(false);
                return true;
            }
            return true;
        }
        return true;
    }
}
