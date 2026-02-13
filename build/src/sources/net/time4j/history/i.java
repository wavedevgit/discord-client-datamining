package net.time4j.history;

import bu.p;
import bu.q;
import bu.r;
import bu.x;
import bu.z;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends bu.e {
    private static final long serialVersionUID = -5386613740709845550L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f38120d;

        a(d dVar) {
            this.f38120d = dVar;
        }

        @Override // bu.z
        /* renamed from: b */
        public p a(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // bu.z
        /* renamed from: c */
        public p h(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // bu.z
        /* renamed from: d */
        public h m(q qVar) {
            d dVar = this.f38120d;
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

        @Override // bu.z
        /* renamed from: e */
        public h q(q qVar) {
            d dVar = this.f38120d;
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

        @Override // bu.z
        /* renamed from: f */
        public h y(q qVar) {
            try {
                return this.f38120d.e((f0) qVar.k(f0.f38019z));
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(q qVar, h hVar) {
            return this.f38120d.B(hVar);
        }

        @Override // bu.z
        /* renamed from: i */
        public q x(q qVar, h hVar, boolean z10) {
            if (hVar != null) {
                return qVar.E(f0.f38019z, this.f38120d.d(hVar));
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

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // bu.p
    /* renamed from: F */
    public h f() {
        return h.i(j.AD, 9999, 12, 31);
    }

    @Override // bu.p
    /* renamed from: G */
    public h B() {
        return h.i(j.BC, 45, 1, 1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bu.e
    public z c(x xVar) {
        if (xVar.E(f0.f38019z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // bu.p
    public Class getType() {
        return h.class;
    }

    @Override // bu.e
    protected boolean j(bu.e eVar) {
        return this.history.equals(((i) eVar).history);
    }
}
