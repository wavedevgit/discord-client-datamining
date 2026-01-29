package av;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q extends fv.a {

    /* renamed from: a  reason: collision with root package name */
    private final dv.q f7060a = new dv.q();

    /* renamed from: b  reason: collision with root package name */
    private int f7061b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f7062c;

    public q(int i10) {
        this.f7061b = i10;
    }

    @Override // fv.d
    public fv.c a(fv.h hVar) {
        boolean z10;
        if (hVar.b()) {
            if (this.f7060a.c() == null) {
                return fv.c.d();
            }
            dv.a d10 = hVar.d().d();
            if (!(d10 instanceof dv.t) && !(d10 instanceof dv.q)) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f7062c = z10;
            return fv.c.b(hVar.c());
        } else if (hVar.a() >= this.f7061b) {
            return fv.c.a(hVar.getColumn() + this.f7061b);
        } else {
            return fv.c.d();
        }
    }

    @Override // fv.a, fv.d
    public boolean b() {
        return true;
    }

    @Override // fv.d
    public dv.a d() {
        return this.f7060a;
    }

    @Override // fv.a, fv.d
    public boolean f(dv.a aVar) {
        if (this.f7062c) {
            dv.a f10 = this.f7060a.f();
            if (f10 instanceof dv.p) {
                ((dv.p) f10).o(false);
                return true;
            }
            return true;
        }
        return true;
    }
}
