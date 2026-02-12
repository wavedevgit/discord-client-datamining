package hu;

import bu.p;
import bu.q;
import bu.s;
import java.util.Locale;
import java.util.Set;
import net.time4j.f0;
import net.time4j.history.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements s {
    private static net.time4j.history.d e(Locale locale, bu.d dVar) {
        bu.c cVar = cu.a.f21110b;
        if (((String) dVar.b(cVar, "iso8601")).equals("julian")) {
            return net.time4j.history.d.C;
        }
        bu.c cVar2 = gu.a.f26026a;
        if (dVar.a(cVar2)) {
            return (net.time4j.history.d) dVar.c(cVar2);
        }
        if (((String) dVar.b(cVar, "iso8601")).equals("historic")) {
            bu.c cVar3 = cu.a.f21128t;
            if (dVar.a(cVar3)) {
                return net.time4j.history.d.j((String) dVar.c(cVar3));
            }
        }
        return net.time4j.history.d.D(locale);
    }

    @Override // bu.s
    public Set a(Locale locale, bu.d dVar) {
        return e(locale, dVar).n();
    }

    @Override // bu.s
    public boolean b(p pVar) {
        return pVar instanceof gu.c;
    }

    @Override // bu.s
    public q c(q qVar, Locale locale, bu.d dVar) {
        return f(qVar, e(locale, dVar), dVar);
    }

    @Override // bu.s
    public boolean d(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    public q f(q qVar, net.time4j.history.d dVar, bu.d dVar2) {
        j jVar;
        j jVar2;
        if (qVar.n(dVar.i())) {
            jVar2 = (j) qVar.k(dVar.i());
        } else if (((cu.g) dVar2.b(cu.a.f21114f, cu.g.SMART)).a()) {
            jVar2 = j.AD;
        } else {
            jVar = null;
            if (jVar == null && qVar.n(dVar.M())) {
                int m10 = qVar.m(dVar.M());
                if (qVar.n(dVar.C()) && qVar.n(dVar.g())) {
                    f0 d10 = dVar.d(net.time4j.history.h.k(jVar, m10, qVar.m(dVar.C()), qVar.m(dVar.g()), (fu.a) dVar2.b(net.time4j.history.d.A, fu.a.DUAL_DATING), dVar.v()));
                    qVar.E(dVar.i(), null);
                    qVar.E(dVar.M(), null);
                    qVar.E(dVar.C(), null);
                    qVar.E(dVar.g(), null);
                    return qVar.E(f0.f37451z, d10);
                } else if (qVar.n(dVar.h())) {
                    int m11 = qVar.m(dVar.h());
                    p pVar = gu.c.f26037p;
                    if (qVar.n(pVar)) {
                        m10 = qVar.m(pVar);
                    }
                    return qVar.E(f0.f37451z, (f0) dVar.d(dVar.m(jVar, m10)).C(dVar.h(), m11));
                } else {
                    return qVar;
                }
            }
        }
        jVar = jVar2;
        return jVar == null ? qVar : qVar;
    }
}
