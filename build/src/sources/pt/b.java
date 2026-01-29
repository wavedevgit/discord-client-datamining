package pt;

import java.util.Locale;
import java.util.Set;
import jt.p;
import jt.q;
import jt.s;
import net.time4j.f0;
import net.time4j.history.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements s {
    private static net.time4j.history.d e(Locale locale, jt.d dVar) {
        jt.c cVar = kt.a.f36529b;
        if (((String) dVar.b(cVar, "iso8601")).equals("julian")) {
            return net.time4j.history.d.C;
        }
        jt.c cVar2 = ot.a.f44762a;
        if (dVar.a(cVar2)) {
            return (net.time4j.history.d) dVar.c(cVar2);
        }
        if (((String) dVar.b(cVar, "iso8601")).equals("historic")) {
            jt.c cVar3 = kt.a.f36547t;
            if (dVar.a(cVar3)) {
                return net.time4j.history.d.j((String) dVar.c(cVar3));
            }
        }
        return net.time4j.history.d.D(locale);
    }

    @Override // jt.s
    public boolean a(p pVar) {
        return pVar instanceof ot.c;
    }

    @Override // jt.s
    public boolean b(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    @Override // jt.s
    public Set c(Locale locale, jt.d dVar) {
        return e(locale, dVar).n();
    }

    @Override // jt.s
    public q d(q qVar, Locale locale, jt.d dVar) {
        return f(qVar, e(locale, dVar), dVar);
    }

    public q f(q qVar, net.time4j.history.d dVar, jt.d dVar2) {
        j jVar;
        j jVar2;
        if (qVar.o(dVar.i())) {
            jVar2 = (j) qVar.p(dVar.i());
        } else if (((kt.g) dVar2.b(kt.a.f36533f, kt.g.SMART)).a()) {
            jVar2 = j.AD;
        } else {
            jVar = null;
            if (jVar == null && qVar.o(dVar.M())) {
                int q10 = qVar.q(dVar.M());
                if (qVar.o(dVar.C()) && qVar.o(dVar.g())) {
                    f0 d10 = dVar.d(net.time4j.history.h.j(jVar, q10, qVar.q(dVar.C()), qVar.q(dVar.g()), (nt.a) dVar2.b(net.time4j.history.d.A, nt.a.DUAL_DATING), dVar.v()));
                    qVar.E(dVar.i(), null);
                    qVar.E(dVar.M(), null);
                    qVar.E(dVar.C(), null);
                    qVar.E(dVar.g(), null);
                    return qVar.E(f0.f40573z, d10);
                } else if (qVar.o(dVar.h())) {
                    int q11 = qVar.q(dVar.h());
                    p pVar = ot.c.f44773p;
                    if (qVar.o(pVar)) {
                        q10 = qVar.q(pVar);
                    }
                    return qVar.E(f0.f40573z, (f0) dVar.d(dVar.m(jVar, q10)).C(dVar.h(), q11));
                } else {
                    return qVar;
                }
            }
        }
        jVar = jVar2;
        return jVar == null ? qVar : qVar;
    }
}
