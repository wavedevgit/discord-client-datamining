package vt;

import java.util.Locale;
import java.util.Set;
import net.time4j.f0;
import net.time4j.history.j;
import pt.p;
import pt.q;
import pt.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements s {
    private static net.time4j.history.d e(Locale locale, pt.d dVar) {
        pt.c cVar = qt.a.f48087b;
        if (((String) dVar.a(cVar, "iso8601")).equals("julian")) {
            return net.time4j.history.d.C;
        }
        pt.c cVar2 = ut.a.f51712a;
        if (dVar.b(cVar2)) {
            return (net.time4j.history.d) dVar.c(cVar2);
        }
        if (((String) dVar.a(cVar, "iso8601")).equals("historic")) {
            pt.c cVar3 = qt.a.f48105t;
            if (dVar.b(cVar3)) {
                return net.time4j.history.d.j((String) dVar.c(cVar3));
            }
        }
        return net.time4j.history.d.D(locale);
    }

    @Override // pt.s
    public Set a(Locale locale, pt.d dVar) {
        return e(locale, dVar).n();
    }

    @Override // pt.s
    public boolean b(p pVar) {
        return pVar instanceof ut.c;
    }

    @Override // pt.s
    public boolean c(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    @Override // pt.s
    public q d(q qVar, Locale locale, pt.d dVar) {
        return f(qVar, e(locale, dVar), dVar);
    }

    public q f(q qVar, net.time4j.history.d dVar, pt.d dVar2) {
        j jVar;
        j jVar2;
        if (qVar.m(dVar.i())) {
            jVar2 = (j) qVar.v(dVar.i());
        } else if (((qt.g) dVar2.a(qt.a.f48091f, qt.g.SMART)).a()) {
            jVar2 = j.AD;
        } else {
            jVar = null;
            if (jVar == null && qVar.m(dVar.M())) {
                int r10 = qVar.r(dVar.M());
                if (qVar.m(dVar.C()) && qVar.m(dVar.g())) {
                    f0 d10 = dVar.d(net.time4j.history.h.k(jVar, r10, qVar.r(dVar.C()), qVar.r(dVar.g()), (tt.a) dVar2.a(net.time4j.history.d.A, tt.a.DUAL_DATING), dVar.v()));
                    qVar.E(dVar.i(), null);
                    qVar.E(dVar.M(), null);
                    qVar.E(dVar.C(), null);
                    qVar.E(dVar.g(), null);
                    return qVar.E(f0.f39951z, d10);
                } else if (qVar.m(dVar.h())) {
                    int r11 = qVar.r(dVar.h());
                    p pVar = ut.c.f51723p;
                    if (qVar.m(pVar)) {
                        r10 = qVar.r(pVar);
                    }
                    return qVar.E(f0.f39951z, (f0) dVar.d(dVar.m(jVar, r10)).C(dVar.h(), r11));
                } else {
                    return qVar;
                }
            }
        }
        jVar = jVar2;
        return jVar == null ? qVar : qVar;
    }
}
