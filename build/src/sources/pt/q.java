package pt;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class q implements o {
    public boolean A(p pVar, long j10) {
        return B(pVar, Long.valueOf(j10));
    }

    public boolean B(p pVar, Object obj) {
        if (pVar != null) {
            if (m(pVar) && z(pVar).p(x(), obj)) {
                return true;
            }
            return false;
        }
        throw new NullPointerException("Missing chronological element.");
    }

    public q C(p pVar, int i10) {
        c0 y10 = w().y(pVar);
        if (y10 != null) {
            return (q) y10.m(x(), i10, pVar.l());
        }
        return E(pVar, Integer.valueOf(i10));
    }

    public q D(p pVar, long j10) {
        return E(pVar, Long.valueOf(j10));
    }

    public q E(p pVar, Object obj) {
        return (q) z(pVar).x(x(), obj, pVar.l());
    }

    public q F(v vVar) {
        return (q) vVar.apply(x());
    }

    @Override // pt.o
    public boolean k() {
        return false;
    }

    @Override // pt.o
    public boolean m(p pVar) {
        return w().F(pVar);
    }

    @Override // pt.o
    public Object n(p pVar) {
        return z(pVar).k(x());
    }

    @Override // pt.o
    public int r(p pVar) {
        c0 y10 = w().y(pVar);
        try {
            if (y10 == null) {
                return ((Integer) v(pVar)).intValue();
            }
            return y10.w(x());
        } catch (r unused) {
            return Integer.MIN_VALUE;
        }
    }

    @Override // pt.o
    public Object s(p pVar) {
        return z(pVar).r(x());
    }

    @Override // pt.o
    public net.time4j.tz.k u() {
        throw new r("Timezone not available: " + this);
    }

    @Override // pt.o
    public Object v(p pVar) {
        return z(pVar).y(x());
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
        for (p pVar : w10.C()) {
            if (r10 == pVar.getType()) {
                return (q) r10.cast(v(pVar));
            }
        }
        throw new IllegalStateException("Implementation error: Cannot find entity context.");
    }

    public Set y() {
        return w().C();
    }

    z z(p pVar) {
        return w().D(pVar);
    }
}
