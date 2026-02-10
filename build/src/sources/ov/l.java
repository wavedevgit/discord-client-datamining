package ov;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends tv.a {

    /* renamed from: a  reason: collision with root package name */
    private final rv.m f42798a = new rv.m();

    /* renamed from: b  reason: collision with root package name */
    private final List f42799b = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends tv.b {
        @Override // tv.e
        public tv.f a(tv.h hVar, tv.g gVar) {
            if (hVar.a() >= qv.d.f47318a && !hVar.b() && !(hVar.d().f() instanceof rv.t)) {
                return tv.f.d(new l()).a(hVar.getColumn() + qv.d.f47318a);
            }
            return tv.f.c();
        }
    }

    @Override // tv.d
    public tv.c b(tv.h hVar) {
        if (hVar.a() >= qv.d.f47318a) {
            return tv.c.a(hVar.getColumn() + qv.d.f47318a);
        }
        if (hVar.b()) {
            return tv.c.b(hVar.c());
        }
        return tv.c.d();
    }

    @Override // tv.d
    public rv.a f() {
        return this.f42798a;
    }

    @Override // tv.a, tv.d
    public void g(CharSequence charSequence) {
        this.f42799b.add(charSequence);
    }

    @Override // tv.a, tv.d
    public void h() {
        int size = this.f42799b.size() - 1;
        while (size >= 0 && qv.d.f((CharSequence) this.f42799b.get(size))) {
            size--;
        }
        StringBuilder sb2 = new StringBuilder();
        for (int i10 = 0; i10 < size + 1; i10++) {
            sb2.append((CharSequence) this.f42799b.get(i10));
            sb2.append('\n');
        }
        this.f42798a.o(sb2.toString());
    }
}
