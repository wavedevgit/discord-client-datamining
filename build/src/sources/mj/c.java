package mj;

import java.util.Iterator;
import java.util.Set;
import ti.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements i {

    /* renamed from: a  reason: collision with root package name */
    private final String f38704a;

    /* renamed from: b  reason: collision with root package name */
    private final d f38705b;

    c(Set set, d dVar) {
        this.f38704a = d(set);
        this.f38705b = dVar;
    }

    public static /* synthetic */ i b(ti.d dVar) {
        return new c(dVar.b(f.class), d.a());
    }

    public static ti.c c() {
        return ti.c.c(i.class).b(q.m(f.class)).e(new ti.g() { // from class: mj.b
            @Override // ti.g
            public final Object a(ti.d dVar) {
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

    @Override // mj.i
    public String a() {
        if (this.f38705b.b().isEmpty()) {
            return this.f38704a;
        }
        return this.f38704a + ' ' + d(this.f38705b.b());
    }
}
