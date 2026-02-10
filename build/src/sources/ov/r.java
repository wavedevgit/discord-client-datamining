package ov;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends tv.a {

    /* renamed from: a  reason: collision with root package name */
    private final rv.t f42852a = new rv.t();

    /* renamed from: b  reason: collision with root package name */
    private o f42853b = new o();

    @Override // tv.d
    public tv.c b(tv.h hVar) {
        if (!hVar.b()) {
            return tv.c.b(hVar.getIndex());
        }
        return tv.c.d();
    }

    @Override // tv.a, tv.d
    public boolean d() {
        return true;
    }

    @Override // tv.a, tv.d
    public void e(sv.a aVar) {
        CharSequence d10 = this.f42853b.d();
        if (d10.length() > 0) {
            aVar.a(d10.toString(), this.f42852a);
        }
    }

    @Override // tv.d
    public rv.a f() {
        return this.f42852a;
    }

    @Override // tv.a, tv.d
    public void g(CharSequence charSequence) {
        this.f42853b.f(charSequence);
    }

    @Override // tv.a, tv.d
    public void h() {
        if (this.f42853b.d().length() == 0) {
            this.f42852a.l();
        }
    }

    public CharSequence i() {
        return this.f42853b.d();
    }

    public List j() {
        return this.f42853b.c();
    }
}
