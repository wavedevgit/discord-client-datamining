package bv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q extends gv.a {

    /* renamed from: a  reason: collision with root package name */
    private final ev.q f7874a = new ev.q();

    /* renamed from: b  reason: collision with root package name */
    private int f7875b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f7876c;

    public q(int i10) {
        this.f7875b = i10;
    }

    @Override // gv.a, gv.d
    public boolean a() {
        return true;
    }

    @Override // gv.d
    public gv.c b(gv.h hVar) {
        boolean z10;
        if (hVar.b()) {
            if (this.f7874a.c() == null) {
                return gv.c.d();
            }
            ev.a d10 = hVar.d().d();
            if (!(d10 instanceof ev.t) && !(d10 instanceof ev.q)) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f7876c = z10;
            return gv.c.b(hVar.c());
        } else if (hVar.a() >= this.f7875b) {
            return gv.c.a(hVar.getColumn() + this.f7875b);
        } else {
            return gv.c.d();
        }
    }

    @Override // gv.d
    public ev.a d() {
        return this.f7874a;
    }

    @Override // gv.a, gv.d
    public boolean h(ev.a aVar) {
        if (this.f7876c) {
            ev.a f10 = this.f7874a.f();
            if (f10 instanceof ev.p) {
                ((ev.p) f10).o(false);
                return true;
            }
            return true;
        }
        return true;
    }
}
