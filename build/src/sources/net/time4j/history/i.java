package net.time4j.history;

import net.time4j.f0;
import rt.p;
import rt.q;
import rt.r;
import rt.x;
import rt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends rt.e {
    private static final long serialVersionUID = -5386613740709845550L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39455d;

        a(d dVar) {
            this.f39455d = dVar;
        }

        @Override // rt.z
        /* renamed from: b */
        public p a(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // rt.z
        /* renamed from: c */
        public p g(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // rt.z
        /* renamed from: d */
        public h k(q qVar) {
            d dVar = this.f39455d;
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

        @Override // rt.z
        /* renamed from: e */
        public h o(q qVar) {
            d dVar = this.f39455d;
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

        @Override // rt.z
        /* renamed from: f */
        public h y(q qVar) {
            try {
                return this.f39455d.e((f0) qVar.s(f0.f39354z));
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // rt.z
        /* renamed from: h */
        public boolean n(q qVar, h hVar) {
            return this.f39455d.B(hVar);
        }

        @Override // rt.z
        /* renamed from: i */
        public q u(q qVar, h hVar, boolean z10) {
            if (hVar != null) {
                return qVar.E(f0.f39354z, this.f39455d.d(hVar));
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

    @Override // rt.p
    public boolean A() {
        return true;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // rt.p
    /* renamed from: F */
    public h e() {
        return h.i(j.AD, 9999, 12, 31);
    }

    @Override // rt.p
    /* renamed from: G */
    public h B() {
        return h.i(j.BC, 45, 1, 1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rt.e
    public z c(x xVar) {
        if (xVar.E(f0.f39354z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // rt.p
    public Class getType() {
        return h.class;
    }

    @Override // rt.e
    protected boolean l(rt.e eVar) {
        return this.history.equals(((i) eVar).history);
    }
}
