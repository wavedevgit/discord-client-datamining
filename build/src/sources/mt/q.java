package mt;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q implements o {
    public boolean A(p pVar, long j10) {
        return B(pVar, Long.valueOf(j10));
    }

    public boolean B(p pVar, Object obj) {
        if (pVar != null) {
            if (q(pVar) && z(pVar).q(x(), obj)) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public q C(p pVar, int i10) {
        c0 z10 = w().z(pVar);
        if (z10 != null) {
            return (q) z10.o(x(), i10, pVar.k());
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

    @Override // mt.o
    public int j(p pVar) {
        c0 z10 = w().z(pVar);
        try {
            if (z10 == null) {
                return ((Integer) o(pVar)).intValue();
            }
            return z10.w(x());
        } catch (r unused) {
            return Integer.MIN_VALUE;
        }
    }

    @Override // mt.o
    public boolean l() {
        return false;
    }

    @Override // mt.o
    public Object o(p pVar) {
        return z(pVar).z(x());
    }

    @Override // mt.o
    public boolean q(p pVar) {
        return w().F(pVar);
    }

    @Override // mt.o
    public net.time4j.tz.k t() {
        throw new r("Timezone not available: " + this);
    }

    @Override // mt.o
    public Object u(p pVar) {
        return z(pVar).l(x());
    }

    @Override // mt.o
    public Object v(p pVar) {
        return z(pVar).r(x());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract x w();

    /* JADX INFO: Access modifiers changed from: protected */
    public q x() {
        x w10 = w();
        Class r10 = w10.r();
        if (r10.isInstance(this)) {
            return (q) r10.cast(this);
        }
        for (p pVar : w10.B()) {
            if (r10 == pVar.getType()) {
                return (q) r10.cast(o(pVar));
            }
        }
        throw new IllegalStateException("Implementation error: Cannot find entity context.");
    }

    public Set y() {
        return w().B();
    }

    z z(p pVar) {
        return w().D(pVar);
    }
}
