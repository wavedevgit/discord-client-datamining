package st;

import java.util.Locale;
import java.util.Set;
import mt.p;
import mt.q;
import mt.s;
import net.time4j.f0;
import net.time4j.history.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements s {
    private static net.time4j.history.d e(Locale locale, mt.d dVar) {
        mt.c cVar = nt.a.f42027b;
        if (((String) dVar.b(cVar, "iso8601")).equals("julian")) {
            return net.time4j.history.d.C;
        }
        mt.c cVar2 = rt.a.f49113a;
        if (dVar.a(cVar2)) {
            return (net.time4j.history.d) dVar.c(cVar2);
        }
        if (((String) dVar.b(cVar, "iso8601")).equals("historic")) {
            mt.c cVar3 = nt.a.f42045t;
            if (dVar.a(cVar3)) {
                return net.time4j.history.d.j((String) dVar.c(cVar3));
            }
        }
        return net.time4j.history.d.D(locale);
    }

    @Override // mt.s
    public boolean a(p pVar) {
        return pVar instanceof rt.c;
    }

    @Override // mt.s
    public Set b(Locale locale, mt.d dVar) {
        return e(locale, dVar).n();
    }

    @Override // mt.s
    public q c(q qVar, Locale locale, mt.d dVar) {
        return f(qVar, e(locale, dVar), dVar);
    }

    @Override // mt.s
    public boolean d(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    public q f(q qVar, net.time4j.history.d dVar, mt.d dVar2) {
        j jVar;
        j jVar2;
        if (qVar.q(dVar.i())) {
            jVar2 = (j) qVar.o(dVar.i());
        } else if (((nt.g) dVar2.b(nt.a.f42031f, nt.g.SMART)).a()) {
            jVar2 = j.AD;
        } else {
            jVar = null;
            if (jVar == null && qVar.q(dVar.M())) {
                int j10 = qVar.j(dVar.M());
                if (qVar.q(dVar.C()) && qVar.q(dVar.g())) {
                    f0 d10 = dVar.d(net.time4j.history.h.j(jVar, j10, qVar.j(dVar.C()), qVar.j(dVar.g()), (qt.a) dVar2.b(net.time4j.history.d.A, qt.a.DUAL_DATING), dVar.v()));
                    qVar.E(dVar.i(), null);
                    qVar.E(dVar.M(), null);
                    qVar.E(dVar.C(), null);
                    qVar.E(dVar.g(), null);
                    return qVar.E(f0.f40491z, d10);
                } else if (qVar.q(dVar.h())) {
                    int j11 = qVar.j(dVar.h());
                    p pVar = rt.c.f49124p;
                    if (qVar.q(pVar)) {
                        j10 = qVar.j(pVar);
                    }
                    return qVar.E(f0.f40491z, (f0) dVar.d(dVar.m(jVar, j10)).C(dVar.h(), j11));
                } else {
                    return qVar;
                }
            }
        }
        jVar = jVar2;
        return jVar == null ? qVar : qVar;
    }
}
