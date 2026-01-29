package jt;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q implements o {
    public boolean A(p pVar, long j10) {
        return B(pVar, Long.valueOf(j10));
    }

    public boolean B(p pVar, Object obj) {
        if (pVar != null) {
            if (o(pVar) && z(pVar).l(x(), obj)) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public q C(p pVar, int i10) {
        c0 x10 = w().x(pVar);
        if (x10 != null) {
            return (q) x10.k(x(), i10, pVar.i());
        }
        return E(pVar, Integer.valueOf(i10));
    }

    public q D(p pVar, long j10) {
        return E(pVar, Long.valueOf(j10));
    }

    public q E(p pVar, Object obj) {
        return (q) z(pVar).w(x(), obj, pVar.i());
    }

    public q F(v vVar) {
        return (q) vVar.apply(x());
    }

    @Override // jt.o
    public Object i(p pVar) {
        return z(pVar).j(x());
    }

    @Override // jt.o
    public boolean l() {
        return false;
    }

    @Override // jt.o
    public boolean o(p pVar) {
        return w().F(pVar);
    }

    @Override // jt.o
    public Object p(p pVar) {
        return z(pVar).x(x());
    }

    @Override // jt.o
    public int q(p pVar) {
        c0 x10 = w().x(pVar);
        try {
            if (x10 == null) {
                return ((Integer) p(pVar)).intValue();
            }
            return x10.v(x());
        } catch (r unused) {
            return Integer.MIN_VALUE;
        }
    }

    @Override // jt.o
    public Object t(p pVar) {
        return z(pVar).p(x());
    }

    @Override // jt.o
    public net.time4j.tz.k v() {
        throw new r("Timezone not available: " + this);
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
        for (p pVar : w10.B()) {
            if (p10 == pVar.getType()) {
                return (q) p10.cast(p(pVar));
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
