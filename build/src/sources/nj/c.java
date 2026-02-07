package nj;

import java.util.Iterator;
import java.util.Set;
import ui.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements i {

    /* renamed from: a  reason: collision with root package name */
    private final String f40915a;

    /* renamed from: b  reason: collision with root package name */
    private final d f40916b;

    c(Set set, d dVar) {
        this.f40915a = d(set);
        this.f40916b = dVar;
    }

    public static /* synthetic */ i b(ui.d dVar) {
        return new c(dVar.b(f.class), d.a());
    }

    public static ui.c c() {
        return ui.c.c(i.class).b(q.m(f.class)).e(new ui.g() { // from class: nj.b
            @Override // ui.g
            public final Object a(ui.d dVar) {
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

    @Override // nj.i
    public String a() {
        if (this.f40916b.b().isEmpty()) {
            return this.f40915a;
        }
        return this.f40915a + ' ' + d(this.f40916b.b());
    }
}
