package nv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q extends sv.a {

    /* renamed from: a  reason: collision with root package name */
    private final qv.q f41273a = new qv.q();

    /* renamed from: b  reason: collision with root package name */
    private int f41274b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f41275c;

    public q(int i10) {
        this.f41274b = i10;
    }

    @Override // sv.a, sv.d
    public boolean a() {
        return true;
    }

    @Override // sv.d
    public sv.c c(sv.h hVar) {
        boolean z10;
        if (hVar.b()) {
            if (this.f41273a.c() == null) {
                return sv.c.d();
            }
            qv.a e10 = hVar.d().e();
            if (!(e10 instanceof qv.t) && !(e10 instanceof qv.q)) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f41275c = z10;
            return sv.c.b(hVar.c());
        } else if (hVar.a() >= this.f41274b) {
            return sv.c.a(hVar.getColumn() + this.f41274b);
        } else {
            return sv.c.d();
        }
    }

    @Override // sv.d
    public qv.a e() {
        return this.f41273a;
    }

    @Override // sv.a, sv.d
    public boolean h(qv.a aVar) {
        if (this.f41275c) {
            qv.a f10 = this.f41273a.f();
            if (f10 instanceof qv.p) {
                ((qv.p) f10).o(false);
                return true;
            }
            return true;
        }
        return true;
    }
}
