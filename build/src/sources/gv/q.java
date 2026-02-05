package gv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q extends lv.a {

    /* renamed from: a  reason: collision with root package name */
    private final jv.q f25514a = new jv.q();

    /* renamed from: b  reason: collision with root package name */
    private int f25515b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f25516c;

    public q(int i10) {
        this.f25515b = i10;
    }

    @Override // lv.a, lv.d
    public boolean a() {
        return true;
    }

    @Override // lv.d
    public jv.a c() {
        return this.f25514a;
    }

    @Override // lv.d
    public lv.c g(lv.h hVar) {
        boolean z10;
        if (hVar.b()) {
            if (this.f25514a.c() == null) {
                return lv.c.d();
            }
            jv.a c10 = hVar.d().c();
            if (!(c10 instanceof jv.t) && !(c10 instanceof jv.q)) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f25516c = z10;
            return lv.c.b(hVar.c());
        } else if (hVar.a() >= this.f25515b) {
            return lv.c.a(hVar.getColumn() + this.f25515b);
        } else {
            return lv.c.d();
        }
    }

    @Override // lv.a, lv.d
    public boolean h(jv.a aVar) {
        if (this.f25516c) {
            jv.a f10 = this.f25514a.f();
            if (f10 instanceof jv.p) {
                ((jv.p) f10).o(false);
                return true;
            }
            return true;
        }
        return true;
    }
}
