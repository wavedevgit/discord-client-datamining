package bv;

import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l extends gv.a {

    /* renamed from: a  reason: collision with root package name */
    private final ev.m f7823a = new ev.m();

    /* renamed from: b  reason: collision with root package name */
    private final List f7824b = new ArrayList();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a extends gv.b {
        @Override // gv.e
        public gv.f a(gv.h hVar, gv.g gVar) {
            if (hVar.a() >= dv.d.f22507a && !hVar.b() && !(hVar.d().d() instanceof ev.t)) {
                return gv.f.d(new l()).a(hVar.getColumn() + dv.d.f22507a);
            }
            return gv.f.c();
        }
    }

    @Override // gv.d
    public gv.c b(gv.h hVar) {
        if (hVar.a() >= dv.d.f22507a) {
            return gv.c.a(hVar.getColumn() + dv.d.f22507a);
        }
        if (hVar.b()) {
            return gv.c.b(hVar.c());
        }
        return gv.c.d();
    }

    @Override // gv.d
    public ev.a d() {
        return this.f7823a;
    }

    @Override // gv.a, gv.d
    public void e(CharSequence charSequence) {
        this.f7824b.add(charSequence);
    }

    @Override // gv.a, gv.d
    public void g() {
        int size = this.f7824b.size() - 1;
        while (size >= 0 && dv.d.f((CharSequence) this.f7824b.get(size))) {
            size--;
        }
        StringBuilder sb2 = new StringBuilder();
        for (int i10 = 0; i10 < size + 1; i10++) {
            sb2.append((CharSequence) this.f7824b.get(i10));
            sb2.append('\n');
        }
        this.f7823a.o(sb2.toString());
    }
}
