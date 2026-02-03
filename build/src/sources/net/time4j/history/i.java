package net.time4j.history;

import mt.p;
import mt.q;
import mt.r;
import mt.x;
import mt.z;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends mt.e {
    private static final long serialVersionUID = -5386613740709845550L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40592d;

        a(d dVar) {
            this.f40592d = dVar;
        }

        @Override // mt.z
        /* renamed from: b */
        public p a(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // mt.z
        /* renamed from: c */
        public p h(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // mt.z
        /* renamed from: d */
        public h l(q qVar) {
            d dVar = this.f40592d;
            if (dVar == d.D) {
                return h.i(j.BYZANTINE, 999984973, 8, 31);
            }
            if (dVar == d.C) {
                return h.i(j.AD, 999979465, 12, 31);
            }
            if (dVar == d.B) {
                return h.i(j.AD, 999999999, 12, 31);
            }
            return h.i(j.AD, 9999, 12, 31);
        }

        @Override // mt.z
        /* renamed from: e */
        public h r(q qVar) {
            d dVar = this.f40592d;
            if (dVar == d.D) {
                return h.i(j.BYZANTINE, 0, 9, 1);
            }
            if (dVar == d.C) {
                return h.i(j.BC, 999979466, 1, 1);
            }
            if (dVar == d.B) {
                return h.i(j.BC, 1000000000, 1, 1);
            }
            return h.i(j.BC, 45, 1, 1);
        }

        @Override // mt.z
        /* renamed from: f */
        public h z(q qVar) {
            try {
                return this.f40592d.e((f0) qVar.o(f0.f40491z));
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // mt.z
        /* renamed from: g */
        public boolean q(q qVar, h hVar) {
            return this.f40592d.B(hVar);
        }

        @Override // mt.z
        /* renamed from: i */
        public q x(q qVar, h hVar, boolean z10) {
            if (hVar != null) {
                return qVar.E(f0.f40491z, this.f40592d.d(hVar));
            }
            throw new IllegalArgumentException("Missing historic date.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(d dVar) {
        super("HISTORIC_DATE");
        this.history = dVar;
    }

    private Object readResolve() {
        return this.history.f();
    }

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // mt.p
    /* renamed from: F */
    public h f() {
        return h.i(j.AD, 9999, 12, 31);
    }

    @Override // mt.p
    /* renamed from: G */
    public h A() {
        return h.i(j.BC, 45, 1, 1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // mt.e
    public z c(x xVar) {
        if (xVar.E(f0.f40491z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // mt.p
    public Class getType() {
        return h.class;
    }

    @Override // mt.e
    protected boolean m(mt.e eVar) {
        return this.history.equals(((i) eVar).history);
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
