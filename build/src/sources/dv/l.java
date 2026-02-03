package dv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends iv.a {

    /* renamed from: a  reason: collision with root package name */
    private final gv.m f21139a = new gv.m();

    /* renamed from: b  reason: collision with root package name */
    private final List f21140b = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends iv.b {
        @Override // iv.e
        public iv.f a(iv.h hVar, iv.g gVar) {
            if (hVar.a() >= fv.d.f24825a && !hVar.b() && !(hVar.d().d() instanceof gv.t)) {
                return iv.f.d(new l()).a(hVar.getColumn() + fv.d.f24825a);
            }
            return iv.f.c();
        }
    }

    @Override // iv.d
    public gv.a d() {
        return this.f21139a;
    }

    @Override // iv.a, iv.d
    public void e(CharSequence charSequence) {
        this.f21140b.add(charSequence);
    }

    @Override // iv.a, iv.d
    public void f() {
        int size = this.f21140b.size() - 1;
        while (size >= 0 && fv.d.f((CharSequence) this.f21140b.get(size))) {
            size--;
        }
        StringBuilder sb2 = new StringBuilder();
        for (int i10 = 0; i10 < size + 1; i10++) {
            sb2.append((CharSequence) this.f21140b.get(i10));
            sb2.append('\n');
        }
        this.f21139a.o(sb2.toString());
    }

    @Override // iv.d
    public iv.c g(iv.h hVar) {
        if (hVar.a() >= fv.d.f24825a) {
            return iv.c.a(hVar.getColumn() + fv.d.f24825a);
        }
        if (hVar.b()) {
            return iv.c.b(hVar.c());
        }
        return iv.c.d();
    }
}
