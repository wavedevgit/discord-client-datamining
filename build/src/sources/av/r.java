package av;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends fv.a {

    /* renamed from: a  reason: collision with root package name */
    private final dv.t f7063a = new dv.t();

    /* renamed from: b  reason: collision with root package name */
    private o f7064b = new o();

    @Override // fv.d
    public fv.c a(fv.h hVar) {
        if (!hVar.b()) {
            return fv.c.b(hVar.getIndex());
        }
        return fv.c.d();
    }

    @Override // fv.a, fv.d
    public boolean c() {
        return true;
    }

    @Override // fv.d
    public dv.a d() {
        return this.f7063a;
    }

    @Override // fv.a, fv.d
    public void e(CharSequence charSequence) {
        this.f7064b.f(charSequence);
    }

    @Override // fv.a, fv.d
    public void g() {
        if (this.f7064b.d().length() == 0) {
            this.f7063a.l();
        }
    }

    @Override // fv.a, fv.d
    public void h(ev.a aVar) {
        CharSequence d10 = this.f7064b.d();
        if (d10.length() > 0) {
            aVar.a(d10.toString(), this.f7063a);
        }
    }

    public CharSequence i() {
        return this.f7064b.d();
    }

    public List j() {
        return this.f7064b.c();
    }
}
