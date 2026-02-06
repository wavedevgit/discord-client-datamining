package rt;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q implements o {
    public boolean A(p pVar, long j10) {
        return B(pVar, Long.valueOf(j10));
    }

    public boolean B(p pVar, Object obj) {
        if (pVar != null) {
            if (n(pVar) && z(pVar).n(x(), obj)) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public q C(p pVar, int i10) {
        c0 y10 = w().y(pVar);
        if (y10 != null) {
            return (q) y10.m(x(), i10, pVar.i());
        }
        return E(pVar, Integer.valueOf(i10));
    }

    public q D(p pVar, long j10) {
        return E(pVar, Long.valueOf(j10));
    }

    public q E(p pVar, Object obj) {
        return (q) z(pVar).u(x(), obj, pVar.i());
    }

    public q F(v vVar) {
        return (q) vVar.apply(x());
    }

    @Override // rt.o
    public boolean k() {
        return false;
    }

    @Override // rt.o
    public boolean n(p pVar) {
        return w().F(pVar);
    }

    @Override // rt.o
    public int q(p pVar) {
        c0 y10 = w().y(pVar);
        try {
            if (y10 == null) {
                return ((Integer) s(pVar)).intValue();
            }
            return y10.s(x());
        } catch (r unused) {
            return Integer.MIN_VALUE;
        }
    }

    @Override // rt.o
    public Object s(p pVar) {
        return z(pVar).y(x());
    }

    @Override // rt.o
    public Object t(p pVar) {
        return z(pVar).k(x());
    }

    @Override // rt.o
    public net.time4j.tz.k u() {
        throw new r("Timezone not available: " + this);
    }

    @Override // rt.o
    public Object v(p pVar) {
        return z(pVar).o(x());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract x w();

    /* JADX INFO: Access modifiers changed from: protected */
    public q x() {
        x w10 = w();
        Class p10 = w10.p();
        if (p10.isInstance(this)) {
            return (q) p10.cast(this);
        }
        for (p pVar : w10.z()) {
            if (p10 == pVar.getType()) {
                return (q) p10.cast(s(pVar));
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
