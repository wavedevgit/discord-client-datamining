package net.time4j.history;

import kt.p;
import kt.q;
import kt.r;
import kt.x;
import kt.z;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends kt.e {
    private static final long serialVersionUID = -5386613740709845550L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40553d;

        a(d dVar) {
            this.f40553d = dVar;
        }

        @Override // kt.z
        /* renamed from: b */
        public p a(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // kt.z
        /* renamed from: c */
        public p g(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // kt.z
        /* renamed from: d */
        public h h(q qVar) {
            d dVar = this.f40553d;
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

        @Override // kt.z
        /* renamed from: e */
        public h o(q qVar) {
            d dVar = this.f40553d;
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

        @Override // kt.z
        /* renamed from: f */
        public h x(q qVar) {
            try {
                return this.f40553d.e((f0) qVar.v(f0.f40452z));
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // kt.z
        /* renamed from: j */
        public boolean l(q qVar, h hVar) {
            return this.f40553d.B(hVar);
        }

        @Override // kt.z
        /* renamed from: k */
        public q v(q qVar, h hVar, boolean z10) {
            if (hVar != null) {
                return qVar.E(f0.f40452z, this.f40553d.d(hVar));
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

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // kt.p
    /* renamed from: F */
    public h e() {
        return h.i(j.AD, 9999, 12, 31);
    }

    @Override // kt.p
    /* renamed from: G */
    public h A() {
        return h.i(j.BC, 45, 1, 1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.e
    public z c(x xVar) {
        if (xVar.E(f0.f40452z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // kt.p
    public Class getType() {
        return h.class;
    }

    @Override // kt.e
    protected boolean j(kt.e eVar) {
        return this.history.equals(((i) eVar).history);
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
