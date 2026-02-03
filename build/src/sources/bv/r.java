package bv;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends gv.a {

    /* renamed from: a  reason: collision with root package name */
    private final ev.t f7877a = new ev.t();

    /* renamed from: b  reason: collision with root package name */
    private o f7878b = new o();

    @Override // gv.d
    public gv.c b(gv.h hVar) {
        if (!hVar.b()) {
            return gv.c.b(hVar.getIndex());
        }
        return gv.c.d();
    }

    @Override // gv.a, gv.d
    public boolean c() {
        return true;
    }

    @Override // gv.d
    public ev.a d() {
        return this.f7877a;
    }

    @Override // gv.a, gv.d
    public void e(CharSequence charSequence) {
        this.f7878b.f(charSequence);
    }

    @Override // gv.a, gv.d
    public void f(fv.a aVar) {
        CharSequence d10 = this.f7878b.d();
        if (d10.length() > 0) {
            aVar.a(d10.toString(), this.f7877a);
        }
    }

    @Override // gv.a, gv.d
    public void g() {
        if (this.f7878b.d().length() == 0) {
            this.f7877a.l();
        }
    }

    public CharSequence i() {
        return this.f7878b.d();
    }

    public List j() {
        return this.f7878b.c();
    }
}
