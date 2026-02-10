package yt;

import java.util.Locale;
import java.util.Set;
import net.time4j.f0;
import net.time4j.history.j;
import st.p;
import st.q;
import st.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements s {
    private static net.time4j.history.d e(Locale locale, st.d dVar) {
        st.c cVar = tt.a.f51003b;
        if (((String) dVar.b(cVar, "iso8601")).equals("julian")) {
            return net.time4j.history.d.C;
        }
        st.c cVar2 = xt.a.f55323a;
        if (dVar.c(cVar2)) {
            return (net.time4j.history.d) dVar.a(cVar2);
        }
        if (((String) dVar.b(cVar, "iso8601")).equals("historic")) {
            st.c cVar3 = tt.a.f51021t;
            if (dVar.c(cVar3)) {
                return net.time4j.history.d.j((String) dVar.a(cVar3));
            }
        }
        return net.time4j.history.d.D(locale);
    }

    @Override // st.s
    public q a(q qVar, Locale locale, st.d dVar) {
        return f(qVar, e(locale, dVar), dVar);
    }

    @Override // st.s
    public Set b(Locale locale, st.d dVar) {
        return e(locale, dVar).n();
    }

    @Override // st.s
    public boolean c(Class cls) {
        if (cls == f0.class) {
            return true;
        }
        return false;
    }

    @Override // st.s
    public boolean d(p pVar) {
        return pVar instanceof xt.c;
    }

    public q f(q qVar, net.time4j.history.d dVar, st.d dVar2) {
        j jVar;
        j jVar2;
        if (qVar.s(dVar.i())) {
            jVar2 = (j) qVar.t(dVar.i());
        } else if (((tt.g) dVar2.b(tt.a.f51007f, tt.g.SMART)).a()) {
            jVar2 = j.AD;
        } else {
            jVar = null;
            if (jVar == null && qVar.s(dVar.M())) {
                int v10 = qVar.v(dVar.M());
                if (qVar.s(dVar.C()) && qVar.s(dVar.g())) {
                    f0 d10 = dVar.d(net.time4j.history.h.k(jVar, v10, qVar.v(dVar.C()), qVar.v(dVar.g()), (wt.a) dVar2.b(net.time4j.history.d.A, wt.a.DUAL_DATING), dVar.v()));
                    qVar.E(dVar.i(), null);
                    qVar.E(dVar.M(), null);
                    qVar.E(dVar.C(), null);
                    qVar.E(dVar.g(), null);
                    return qVar.E(f0.f38446z, d10);
                } else if (qVar.s(dVar.h())) {
                    int v11 = qVar.v(dVar.h());
                    p pVar = xt.c.f55334p;
                    if (qVar.s(pVar)) {
                        v10 = qVar.v(pVar);
                    }
                    return qVar.E(f0.f38446z, (f0) dVar.d(dVar.m(jVar, v10)).C(dVar.h(), v11));
                } else {
                    return qVar;
                }
            }
        }
        jVar = jVar2;
        return jVar == null ? qVar : qVar;
    }
}
