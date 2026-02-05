package gv;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r extends lv.a {

    /* renamed from: a  reason: collision with root package name */
    private final jv.t f25517a = new jv.t();

    /* renamed from: b  reason: collision with root package name */
    private o f25518b = new o();

    @Override // lv.a, lv.d
    public boolean b() {
        return true;
    }

    @Override // lv.d
    public jv.a c() {
        return this.f25517a;
    }

    @Override // lv.a, lv.d
    public void d(kv.a aVar) {
        CharSequence d10 = this.f25518b.d();
        if (d10.length() > 0) {
            aVar.a(d10.toString(), this.f25517a);
        }
    }

    @Override // lv.a, lv.d
    public void e(CharSequence charSequence) {
        this.f25518b.f(charSequence);
    }

    @Override // lv.a, lv.d
    public void f() {
        if (this.f25518b.d().length() == 0) {
            this.f25517a.l();
        }
    }

    @Override // lv.d
    public lv.c g(lv.h hVar) {
        if (!hVar.b()) {
            return lv.c.b(hVar.getIndex());
        }
        return lv.c.d();
    }

    public CharSequence i() {
        return this.f25518b.d();
    }

    public List j() {
        return this.f25518b.c();
    }
}
