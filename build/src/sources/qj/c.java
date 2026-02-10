package qj;

import java.util.Iterator;
import java.util.Set;
import xi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements i {

    /* renamed from: a  reason: collision with root package name */
    private final String f45428a;

    /* renamed from: b  reason: collision with root package name */
    private final d f45429b;

    c(Set set, d dVar) {
        this.f45428a = d(set);
        this.f45429b = dVar;
    }

    public static /* synthetic */ i b(xi.d dVar) {
        return new c(dVar.e(f.class), d.a());
    }

    public static xi.c c() {
        return xi.c.c(i.class).b(q.m(f.class)).e(new xi.g() { // from class: qj.b
            @Override // xi.g
            public final Object a(xi.d dVar) {
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

    @Override // qj.i
    public String a() {
        if (this.f45429b.b().isEmpty()) {
            return this.f45428a;
        }
        return this.f45428a + ' ' + d(this.f45429b.b());
    }
}
