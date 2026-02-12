package xv;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends cw.a {

    /* renamed from: a  reason: collision with root package name */
    private final aw.t f55275a = new aw.t();

    /* renamed from: b  reason: collision with root package name */
    private o f55276b = new o();

    @Override // cw.a, cw.d
    public boolean c() {
        return true;
    }

    @Override // cw.d
    public aw.a d() {
        return this.f55275a;
    }

    @Override // cw.a, cw.d
    public void e(CharSequence charSequence) {
        this.f55276b.f(charSequence);
    }

    @Override // cw.a, cw.d
    public void f() {
        if (this.f55276b.d().length() == 0) {
            this.f55275a.l();
        }
    }

    @Override // cw.d
    public cw.c g(cw.h hVar) {
        if (!hVar.b()) {
            return cw.c.b(hVar.getIndex());
        }
        return cw.c.d();
    }

    @Override // cw.a, cw.d
    public void h(bw.a aVar) {
        CharSequence d10 = this.f55276b.d();
        if (d10.length() > 0) {
            aVar.a(d10.toString(), this.f55275a);
        }
    }

    public CharSequence i() {
        return this.f55276b.d();
    }

    public List j() {
        return this.f55276b.c();
    }
}
