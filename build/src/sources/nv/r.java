package nv;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends sv.a {

    /* renamed from: a  reason: collision with root package name */
    private final qv.t f41324a = new qv.t();

    /* renamed from: b  reason: collision with root package name */
    private o f41325b = new o();

    @Override // sv.a, sv.d
    public void b(rv.a aVar) {
        CharSequence d10 = this.f41325b.d();
        if (d10.length() > 0) {
            aVar.a(d10.toString(), this.f41324a);
        }
    }

    @Override // sv.d
    public sv.c c(sv.h hVar) {
        if (!hVar.b()) {
            return sv.c.b(hVar.getIndex());
        }
        return sv.c.d();
    }

    @Override // sv.a, sv.d
    public boolean d() {
        return true;
    }

    @Override // sv.d
    public qv.a e() {
        return this.f41324a;
    }

    @Override // sv.a, sv.d
    public void f(CharSequence charSequence) {
        this.f41325b.f(charSequence);
    }

    @Override // sv.a, sv.d
    public void g() {
        if (this.f41325b.d().length() == 0) {
            this.f41324a.l();
        }
    }

    public CharSequence i() {
        return this.f41325b.d();
    }

    public List j() {
        return this.f41325b.c();
    }
}
