package net.time4j.history;

import net.time4j.f0;
import st.p;
import st.q;
import st.r;
import st.x;
import st.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends st.e {
    private static final long serialVersionUID = -5386613740709845550L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f38547d;

        a(d dVar) {
            this.f38547d = dVar;
        }

        @Override // st.z
        /* renamed from: b */
        public p a(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // st.z
        /* renamed from: c */
        public p g(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // st.z
        /* renamed from: d */
        public h h(q qVar) {
            d dVar = this.f38547d;
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

        @Override // st.z
        /* renamed from: e */
        public h m(q qVar) {
            d dVar = this.f38547d;
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

        @Override // st.z
        /* renamed from: f */
        public h y(q qVar) {
            try {
                return this.f38547d.e((f0) qVar.t(f0.f38446z));
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // st.z
        /* renamed from: j */
        public boolean k(q qVar, h hVar) {
            return this.f38547d.B(hVar);
        }

        @Override // st.z
        /* renamed from: l */
        public q s(q qVar, h hVar, boolean z10) {
            if (hVar != null) {
                return qVar.E(f0.f38446z, this.f38547d.d(hVar));
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

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // st.p
    /* renamed from: F */
    public h e() {
        return h.i(j.AD, 9999, 12, 31);
    }

    @Override // st.p
    /* renamed from: G */
    public h B() {
        return h.i(j.BC, 45, 1, 1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // st.e
    public z c(x xVar) {
        if (xVar.E(f0.f38446z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // st.p
    public Class getType() {
        return h.class;
    }

    @Override // st.e
    protected boolean j(st.e eVar) {
        return this.history.equals(((i) eVar).history);
    }
}
