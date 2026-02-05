package gv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends lv.a {

    /* renamed from: a  reason: collision with root package name */
    private final jv.m f25463a = new jv.m();

    /* renamed from: b  reason: collision with root package name */
    private final List f25464b = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends lv.b {
        @Override // lv.e
        public lv.f a(lv.h hVar, lv.g gVar) {
            if (hVar.a() >= iv.d.f30397a && !hVar.b() && !(hVar.d().c() instanceof jv.t)) {
                return lv.f.d(new l()).a(hVar.getColumn() + iv.d.f30397a);
            }
            return lv.f.c();
        }
    }

    @Override // lv.d
    public jv.a c() {
        return this.f25463a;
    }

    @Override // lv.a, lv.d
    public void e(CharSequence charSequence) {
        this.f25464b.add(charSequence);
    }

    @Override // lv.a, lv.d
    public void f() {
        int size = this.f25464b.size() - 1;
        while (size >= 0 && iv.d.f((CharSequence) this.f25464b.get(size))) {
            size--;
        }
        StringBuilder sb2 = new StringBuilder();
        for (int i10 = 0; i10 < size + 1; i10++) {
            sb2.append((CharSequence) this.f25464b.get(i10));
            sb2.append('\n');
        }
        this.f25463a.o(sb2.toString());
    }

    @Override // lv.d
    public lv.c g(lv.h hVar) {
        if (hVar.a() >= iv.d.f30397a) {
            return lv.c.a(hVar.getColumn() + iv.d.f30397a);
        }
        if (hVar.b()) {
            return lv.c.b(hVar.c());
        }
        return lv.c.d();
    }
}
