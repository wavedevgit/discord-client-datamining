package dv;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends iv.a {

    /* renamed from: a  reason: collision with root package name */
    private final gv.t f21193a = new gv.t();

    /* renamed from: b  reason: collision with root package name */
    private o f21194b = new o();

    @Override // iv.a, iv.d
    public void a(hv.a aVar) {
        CharSequence d10 = this.f21194b.d();
        if (d10.length() > 0) {
            aVar.a(d10.toString(), this.f21193a);
        }
    }

    @Override // iv.a, iv.d
    public boolean c() {
        return true;
    }

    @Override // iv.d
    public gv.a d() {
        return this.f21193a;
    }

    @Override // iv.a, iv.d
    public void e(CharSequence charSequence) {
        this.f21194b.f(charSequence);
    }

    @Override // iv.a, iv.d
    public void f() {
        if (this.f21194b.d().length() == 0) {
            this.f21193a.l();
        }
    }

    @Override // iv.d
    public iv.c g(iv.h hVar) {
        if (!hVar.b()) {
            return iv.c.b(hVar.getIndex());
        }
        return iv.c.d();
    }

    public CharSequence i() {
        return this.f21194b.d();
    }

    public List j() {
        return this.f21194b.c();
    }
}
