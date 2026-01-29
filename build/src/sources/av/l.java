package av;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends fv.a {

    /* renamed from: a  reason: collision with root package name */
    private final dv.m f7009a = new dv.m();

    /* renamed from: b  reason: collision with root package name */
    private final List f7010b = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends fv.b {
        @Override // fv.e
        public fv.f a(fv.h hVar, fv.g gVar) {
            if (hVar.a() >= cv.d.f21448a && !hVar.b() && !(hVar.d().d() instanceof dv.t)) {
                return fv.f.d(new l()).a(hVar.getColumn() + cv.d.f21448a);
            }
            return fv.f.c();
        }
    }

    @Override // fv.d
    public fv.c a(fv.h hVar) {
        if (hVar.a() >= cv.d.f21448a) {
            return fv.c.a(hVar.getColumn() + cv.d.f21448a);
        }
        if (hVar.b()) {
            return fv.c.b(hVar.c());
        }
        return fv.c.d();
    }

    @Override // fv.d
    public dv.a d() {
        return this.f7009a;
    }

    @Override // fv.a, fv.d
    public void e(CharSequence charSequence) {
        this.f7010b.add(charSequence);
    }

    @Override // fv.a, fv.d
    public void g() {
        int size = this.f7010b.size() - 1;
        while (size >= 0 && cv.d.f((CharSequence) this.f7010b.get(size))) {
            size--;
        }
        StringBuilder sb2 = new StringBuilder();
        for (int i10 = 0; i10 < size + 1; i10++) {
            sb2.append((CharSequence) this.f7010b.get(i10));
            sb2.append('\n');
        }
        this.f7009a.o(sb2.toString());
    }
}
