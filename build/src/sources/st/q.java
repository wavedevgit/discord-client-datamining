package st;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q implements o {
    public boolean A(p pVar, long j10) {
        return B(pVar, Long.valueOf(j10));
    }

    public boolean B(p pVar, Object obj) {
        if (pVar != null) {
            if (s(pVar) && z(pVar).k(x(), obj)) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public q C(p pVar, int i10) {
        c0 y10 = w().y(pVar);
        if (y10 != null) {
            return (q) y10.i(x(), i10, pVar.f());
        }
        return E(pVar, Integer.valueOf(i10));
    }

    public q D(p pVar, long j10) {
        return E(pVar, Long.valueOf(j10));
    }

    public q E(p pVar, Object obj) {
        return (q) z(pVar).s(x(), obj, pVar.f());
    }

    public q F(v vVar) {
        return (q) vVar.apply(x());
    }

    @Override // st.o
    public boolean k() {
        return false;
    }

    @Override // st.o
    public Object m(p pVar) {
        return z(pVar).m(x());
    }

    @Override // st.o
    public Object n(p pVar) {
        return z(pVar).h(x());
    }

    @Override // st.o
    public boolean s(p pVar) {
        return w().F(pVar);
    }

    @Override // st.o
    public Object t(p pVar) {
        return z(pVar).y(x());
    }

    @Override // st.o
    public net.time4j.tz.k u() {
        throw new r("Timezone not available: " + this);
    }

    @Override // st.o
    public int v(p pVar) {
        c0 y10 = w().y(pVar);
        try {
            if (y10 == null) {
                return ((Integer) t(pVar)).intValue();
            }
            return y10.n(x());
        } catch (r unused) {
            return Integer.MIN_VALUE;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract x w();

    /* JADX INFO: Access modifiers changed from: protected */
    public q x() {
        x w10 = w();
        Class n10 = w10.n();
        if (n10.isInstance(this)) {
            return (q) n10.cast(this);
        }
        for (p pVar : w10.z()) {
            if (n10 == pVar.getType()) {
                return (q) n10.cast(t(pVar));
            }
        }
        throw new IllegalStateException("Implementation error: Cannot find entity context.");
    }

    public Set y() {
        return w().z();
    }

    z z(p pVar) {
        return w().C(pVar);
    }
}
