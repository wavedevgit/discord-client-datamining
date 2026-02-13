package xv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends cw.a {

    /* renamed from: a  reason: collision with root package name */
    private final aw.m f55789a = new aw.m();

    /* renamed from: b  reason: collision with root package name */
    private final List f55790b = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends cw.b {
        @Override // cw.e
        public cw.f a(cw.h hVar, cw.g gVar) {
            if (hVar.a() >= zv.d.f57790a && !hVar.b() && !(hVar.d().d() instanceof aw.t)) {
                return cw.f.d(new l()).a(hVar.getColumn() + zv.d.f57790a);
            }
            return cw.f.c();
        }
    }

    @Override // cw.d
    public aw.a d() {
        return this.f55789a;
    }

    @Override // cw.a, cw.d
    public void e(CharSequence charSequence) {
        this.f55790b.add(charSequence);
    }

    @Override // cw.a, cw.d
    public void f() {
        int size = this.f55790b.size() - 1;
        while (size >= 0 && zv.d.f((CharSequence) this.f55790b.get(size))) {
            size--;
        }
        StringBuilder sb2 = new StringBuilder();
        for (int i10 = 0; i10 < size + 1; i10++) {
            sb2.append((CharSequence) this.f55790b.get(i10));
            sb2.append('\n');
        }
        this.f55789a.o(sb2.toString());
    }

    @Override // cw.d
    public cw.c g(cw.h hVar) {
        if (hVar.a() >= zv.d.f57790a) {
            return cw.c.a(hVar.getColumn() + zv.d.f57790a);
        }
        if (hVar.b()) {
            return cw.c.b(hVar.c());
        }
        return cw.c.d();
    }
}
