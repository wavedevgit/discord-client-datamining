package kt;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q implements o {
    public boolean A(p pVar, long j10) {
        return B(pVar, Long.valueOf(j10));
    }

    public boolean B(p pVar, Object obj) {
        if (pVar != null) {
            if (s(pVar) && z(pVar).l(x(), obj)) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public q C(p pVar, int i10) {
        c0 x10 = w().x(pVar);
        if (x10 != null) {
            return (q) x10.i(x(), i10, pVar.f());
        }
        return E(pVar, Integer.valueOf(i10));
    }

    public q D(p pVar, long j10) {
        return E(pVar, Long.valueOf(j10));
    }

    public q E(p pVar, Object obj) {
        return (q) z(pVar).v(x(), obj, pVar.f());
    }

    public q F(v vVar) {
        return (q) vVar.apply(x());
    }

    @Override // kt.o
    public Object k(p pVar) {
        return z(pVar).o(x());
    }

    @Override // kt.o
    public boolean l() {
        return false;
    }

    @Override // kt.o
    public Object p(p pVar) {
        return z(pVar).h(x());
    }

    @Override // kt.o
    public boolean s(p pVar) {
        return w().F(pVar);
    }

    @Override // kt.o
    public int t(p pVar) {
        c0 x10 = w().x(pVar);
        try {
            if (x10 == null) {
                return ((Integer) v(pVar)).intValue();
            }
            return x10.t(x());
        } catch (r unused) {
            return Integer.MIN_VALUE;
        }
    }

    @Override // kt.o
    public net.time4j.tz.k u() {
        throw new r("Timezone not available: " + this);
    }

    @Override // kt.o
    public Object v(p pVar) {
        return z(pVar).x(x());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract x w();

    /* JADX INFO: Access modifiers changed from: protected */
    public q x() {
        x w10 = w();
        Class o10 = w10.o();
        if (o10.isInstance(this)) {
            return (q) o10.cast(this);
        }
        for (p pVar : w10.B()) {
            if (o10 == pVar.getType()) {
                return (q) o10.cast(v(pVar));
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
