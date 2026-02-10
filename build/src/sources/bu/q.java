package bu;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q implements o {
    public boolean A(p pVar, long j10) {
        return B(pVar, Long.valueOf(j10));
    }

    public boolean B(p pVar, Object obj) {
        if (pVar != null) {
            if (n(pVar) && z(pVar).o(x(), obj)) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public q C(p pVar, int i10) {
        c0 y10 = w().y(pVar);
        if (y10 != null) {
            return (q) y10.n(x(), i10, pVar.k());
        }
        return E(pVar, Integer.valueOf(i10));
    }

    public q D(p pVar, long j10) {
        return E(pVar, Long.valueOf(j10));
    }

    public q E(p pVar, Object obj) {
        return (q) z(pVar).x(x(), obj, pVar.k());
    }

    public q F(v vVar) {
        return (q) vVar.apply(x());
    }

    @Override // bu.o
    public Object k(p pVar) {
        return z(pVar).y(x());
    }

    @Override // bu.o
    public boolean l() {
        return false;
    }

    @Override // bu.o
    public int m(p pVar) {
        c0 y10 = w().y(pVar);
        try {
            if (y10 == null) {
                return ((Integer) k(pVar)).intValue();
            }
            return y10.u(x());
        } catch (r unused) {
            return Integer.MIN_VALUE;
        }
    }

    @Override // bu.o
    public boolean n(p pVar) {
        return w().F(pVar);
    }

    @Override // bu.o
    public net.time4j.tz.k r() {
        throw new r("Timezone not available: " + this);
    }

    @Override // bu.o
    public Object t(p pVar) {
        return z(pVar).q(x());
    }

    @Override // bu.o
    public Object v(p pVar) {
        return z(pVar).m(x());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract x w();

    /* JADX INFO: Access modifiers changed from: protected */
    public q x() {
        x w10 = w();
        Class q10 = w10.q();
        if (q10.isInstance(this)) {
            return (q) q10.cast(this);
        }
        for (p pVar : w10.z()) {
            if (q10 == pVar.getType()) {
                return (q) q10.cast(k(pVar));
            }
        }
        throw new IllegalStateException("Implementation error: Cannot find entity context.");
    }

    public Set y() {
        return w().z();
    }

    z z(p pVar) {
        return w().D(pVar);
    }
}
