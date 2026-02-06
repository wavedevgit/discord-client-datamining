package xt;

import java.util.Locale;
import java.util.Set;
import net.time4j.f0;
import net.time4j.history.j;
import rt.p;
import rt.q;
import rt.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements s {
    private static net.time4j.history.d e(Locale locale, rt.d dVar) {
        rt.c cVar = st.a.f50111b;
        if (((String) dVar.b(cVar, "iso8601")).equals("julian")) {
            return net.time4j.history.d.C;
        }
        rt.c cVar2 = wt.a.f54112a;
        if (dVar.c(cVar2)) {
            return (net.time4j.history.d) dVar.a(cVar2);
        }
        if (((String) dVar.b(cVar, "iso8601")).equals("historic")) {
            rt.c cVar3 = st.a.f50129t;
            if (dVar.c(cVar3)) {
                return net.time4j.history.d.j((String) dVar.a(cVar3));
            }
        }
        return net.time4j.history.d.D(locale);
    }

    @Override // rt.s
    public boolean a(p pVar) {
        return pVar instanceof wt.c;
    }

    @Override // rt.s
    public q b(q qVar, Locale locale, rt.d dVar) {
        return f(qVar, e(locale, dVar), dVar);
    }

    @Override // rt.s
    public boolean c(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    @Override // rt.s
    public Set d(Locale locale, rt.d dVar) {
        return e(locale, dVar).n();
    }

    public q f(q qVar, net.time4j.history.d dVar, rt.d dVar2) {
        j jVar;
        j jVar2;
        if (qVar.n(dVar.i())) {
            jVar2 = (j) qVar.s(dVar.i());
        } else if (((st.g) dVar2.b(st.a.f50115f, st.g.SMART)).a()) {
            jVar2 = j.AD;
        } else {
            jVar = null;
            if (jVar == null && qVar.n(dVar.M())) {
                int q10 = qVar.q(dVar.M());
                if (qVar.n(dVar.C()) && qVar.n(dVar.g())) {
                    f0 d10 = dVar.d(net.time4j.history.h.j(jVar, q10, qVar.q(dVar.C()), qVar.q(dVar.g()), (vt.a) dVar2.b(net.time4j.history.d.A, vt.a.DUAL_DATING), dVar.v()));
                    qVar.E(dVar.i(), null);
                    qVar.E(dVar.M(), null);
                    qVar.E(dVar.C(), null);
                    qVar.E(dVar.g(), null);
                    return qVar.E(f0.f39306z, d10);
                } else if (qVar.n(dVar.h())) {
                    int q11 = qVar.q(dVar.h());
                    p pVar = wt.c.f54123p;
                    if (qVar.n(pVar)) {
                        q10 = qVar.q(pVar);
                    }
                    return qVar.E(f0.f39306z, (f0) dVar.d(dVar.m(jVar, q10)).C(dVar.h(), q11));
                } else {
                    return qVar;
                }
            }
        }
        jVar = jVar2;
        return jVar == null ? qVar : qVar;
    }
}
