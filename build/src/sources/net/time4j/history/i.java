package net.time4j.history;

import net.time4j.f0;
import pt.p;
import pt.q;
import pt.r;
import pt.x;
import pt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends pt.e {
    private static final long serialVersionUID = -5386613740709845550L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40052d;

        a(d dVar) {
            this.f40052d = dVar;
        }

        @Override // pt.z
        /* renamed from: b */
        public p a(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // pt.z
        /* renamed from: c */
        public p h(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // pt.z
        /* renamed from: d */
        public h k(q qVar) {
            d dVar = this.f40052d;
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

        @Override // pt.z
        /* renamed from: e */
        public h r(q qVar) {
            d dVar = this.f40052d;
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

        @Override // pt.z
        /* renamed from: f */
        public h y(q qVar) {
            try {
                return this.f40052d.e((f0) qVar.v(f0.f39951z));
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // pt.z
        /* renamed from: g */
        public boolean p(q qVar, h hVar) {
            return this.f40052d.B(hVar);
        }

        @Override // pt.z
        /* renamed from: i */
        public q x(q qVar, h hVar, boolean z10) {
            if (hVar != null) {
                return qVar.E(f0.f39951z, this.f40052d.d(hVar));
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

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // pt.p
    /* renamed from: F */
    public h e() {
        return h.i(j.AD, 9999, 12, 31);
    }

    @Override // pt.p
    /* renamed from: G */
    public h A() {
        return h.i(j.BC, 45, 1, 1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // pt.e
    public z c(x xVar) {
        if (xVar.E(f0.f39951z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // pt.p
    public Class getType() {
        return h.class;
    }

    @Override // pt.e
    protected boolean j(pt.e eVar) {
        return this.history.equals(((i) eVar).history);
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
