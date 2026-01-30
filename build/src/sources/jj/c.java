package jj;

import java.util.Iterator;
import java.util.Set;
import qi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements i {

    /* renamed from: a  reason: collision with root package name */
    private final String f32208a;

    /* renamed from: b  reason: collision with root package name */
    private final d f32209b;

    c(Set set, d dVar) {
        this.f32208a = d(set);
        this.f32209b = dVar;
    }

    public static /* synthetic */ i b(qi.d dVar) {
        return new c(dVar.b(f.class), d.a());
    }

    public static qi.c c() {
        return qi.c.c(i.class).b(q.m(f.class)).e(new qi.g() { // from class: jj.b
            @Override // qi.g
            public final Object a(qi.d dVar) {
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

    @Override // jj.i
    public String a() {
        if (this.f32209b.b().isEmpty()) {
            return this.f32208a;
        }
        return this.f32208a + ' ' + d(this.f32209b.b());
    }
}
