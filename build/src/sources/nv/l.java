package nv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends sv.a {

    /* renamed from: a  reason: collision with root package name */
    private final qv.m f41270a = new qv.m();

    /* renamed from: b  reason: collision with root package name */
    private final List f41271b = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends sv.b {
        @Override // sv.e
        public sv.f a(sv.h hVar, sv.g gVar) {
            if (hVar.a() >= pv.d.f45804a && !hVar.b() && !(hVar.d().e() instanceof qv.t)) {
                return sv.f.d(new l()).a(hVar.getColumn() + pv.d.f45804a);
            }
            return sv.f.c();
        }
    }

    @Override // sv.d
    public sv.c c(sv.h hVar) {
        if (hVar.a() >= pv.d.f45804a) {
            return sv.c.a(hVar.getColumn() + pv.d.f45804a);
        }
        if (hVar.b()) {
            return sv.c.b(hVar.c());
        }
        return sv.c.d();
    }

    @Override // sv.d
    public qv.a e() {
        return this.f41270a;
    }

    @Override // sv.a, sv.d
    public void f(CharSequence charSequence) {
        this.f41271b.add(charSequence);
    }

    @Override // sv.a, sv.d
    public void g() {
        int size = this.f41271b.size() - 1;
        while (size >= 0 && pv.d.f((CharSequence) this.f41271b.get(size))) {
            size--;
        }
        StringBuilder sb2 = new StringBuilder();
        for (int i10 = 0; i10 < size + 1; i10++) {
            sb2.append((CharSequence) this.f41271b.get(i10));
            sb2.append('\n');
        }
        this.f41270a.o(sb2.toString());
    }
}
