package qt;

import java.util.Locale;
import java.util.Set;
import kt.p;
import kt.q;
import kt.s;
import net.time4j.f0;
import net.time4j.history.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements s {
    private static net.time4j.history.d e(Locale locale, kt.d dVar) {
        kt.c cVar = lt.a.f37627b;
        if (((String) dVar.a(cVar, "iso8601")).equals("julian")) {
            return net.time4j.history.d.C;
        }
        kt.c cVar2 = pt.a.f46477a;
        if (dVar.c(cVar2)) {
            return (net.time4j.history.d) dVar.b(cVar2);
        }
        if (((String) dVar.a(cVar, "iso8601")).equals("historic")) {
            kt.c cVar3 = lt.a.f37645t;
            if (dVar.c(cVar3)) {
                return net.time4j.history.d.j((String) dVar.b(cVar3));
            }
        }
        return net.time4j.history.d.D(locale);
    }

    @Override // kt.s
    public q a(q qVar, Locale locale, kt.d dVar) {
        return f(qVar, e(locale, dVar), dVar);
    }

    @Override // kt.s
    public boolean b(p pVar) {
        return pVar instanceof pt.c;
    }

    @Override // kt.s
    public Set c(Locale locale, kt.d dVar) {
        return e(locale, dVar).n();
    }

    @Override // kt.s
    public boolean d(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    public q f(q qVar, net.time4j.history.d dVar, kt.d dVar2) {
        j jVar;
        j jVar2;
        if (qVar.s(dVar.i())) {
            jVar2 = (j) qVar.v(dVar.i());
        } else if (((lt.g) dVar2.a(lt.a.f37631f, lt.g.SMART)).a()) {
            jVar2 = j.AD;
        } else {
            jVar = null;
            if (jVar == null && qVar.s(dVar.M())) {
                int t10 = qVar.t(dVar.M());
                if (qVar.s(dVar.C()) && qVar.s(dVar.g())) {
                    f0 d10 = dVar.d(net.time4j.history.h.k(jVar, t10, qVar.t(dVar.C()), qVar.t(dVar.g()), (ot.a) dVar2.a(net.time4j.history.d.A, ot.a.DUAL_DATING), dVar.v()));
                    qVar.E(dVar.i(), null);
                    qVar.E(dVar.M(), null);
                    qVar.E(dVar.C(), null);
                    qVar.E(dVar.g(), null);
                    return qVar.E(f0.f40452z, d10);
                } else if (qVar.s(dVar.h())) {
                    int t11 = qVar.t(dVar.h());
                    p pVar = pt.c.f46488p;
                    if (qVar.s(pVar)) {
                        t10 = qVar.t(pVar);
                    }
                    return qVar.E(f0.f40452z, (f0) dVar.d(dVar.m(jVar, t10)).C(dVar.h(), t11));
                } else {
                    return qVar;
                }
            }
        }
        jVar = jVar2;
        return jVar == null ? qVar : qVar;
    }
}
