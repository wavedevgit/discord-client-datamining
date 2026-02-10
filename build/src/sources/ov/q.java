package ov;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q extends tv.a {

    /* renamed from: a  reason: collision with root package name */
    private final rv.q f42849a = new rv.q();

    /* renamed from: b  reason: collision with root package name */
    private int f42850b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f42851c;

    public q(int i10) {
        this.f42850b = i10;
    }

    @Override // tv.a, tv.d
    public boolean a() {
        return true;
    }

    @Override // tv.d
    public tv.c b(tv.h hVar) {
        boolean z10;
        if (hVar.b()) {
            if (this.f42849a.c() == null) {
                return tv.c.d();
            }
            rv.a f10 = hVar.d().f();
            if (!(f10 instanceof rv.t) && !(f10 instanceof rv.q)) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f42851c = z10;
            return tv.c.b(hVar.c());
        } else if (hVar.a() >= this.f42850b) {
            return tv.c.a(hVar.getColumn() + this.f42850b);
        } else {
            return tv.c.d();
        }
    }

    @Override // tv.a, tv.d
    public boolean c(rv.a aVar) {
        if (this.f42851c) {
            rv.a f10 = this.f42849a.f();
            if (f10 instanceof rv.p) {
                ((rv.p) f10).o(false);
                return true;
            }
            return true;
        }
        return true;
    }

    @Override // tv.d
    public rv.a f() {
        return this.f42849a;
    }
}
