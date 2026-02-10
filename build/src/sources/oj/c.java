package oj;

import java.util.Iterator;
import java.util.Set;
import vi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements i {

    /* renamed from: a  reason: collision with root package name */
    private final String f41940a;

    /* renamed from: b  reason: collision with root package name */
    private final d f41941b;

    c(Set set, d dVar) {
        this.f41940a = d(set);
        this.f41941b = dVar;
    }

    public static /* synthetic */ i b(vi.d dVar) {
        return new c(dVar.c(f.class), d.a());
    }

    public static vi.c c() {
        return vi.c.c(i.class).b(q.m(f.class)).e(new vi.g() { // from class: oj.b
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return c.b(dVar);
            }
        }).d();
    }

    private static String d(Set set) {
        StringBuilder sb2 = new StringBuilder();
        Iterator it = set.iterator();
        while (it.hasNext()) {
            f fVar = (f) it.next();
            sb2.append(fVar.b());
            sb2.append('/');
            sb2.append(fVar.c());
            if (it.hasNext()) {
                sb2.append(' ');
            }
        }
        return sb2.toString();
    }

    @Override // oj.i
    public String a() {
        if (this.f41941b.b().isEmpty()) {
            return this.f41940a;
        }
        return this.f41940a + ' ' + d(this.f41941b.b());
    }
}
