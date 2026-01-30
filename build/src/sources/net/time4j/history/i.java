package net.time4j.history;

import jt.p;
import jt.q;
import jt.r;
import jt.x;
import jt.z;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends jt.e {
    private static final long serialVersionUID = -5386613740709845550L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40690d;

        a(d dVar) {
            this.f40690d = dVar;
        }

        @Override // jt.z
        /* renamed from: b */
        public p a(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // jt.z
        /* renamed from: c */
        public p h(q qVar) {
            throw new UnsupportedOperationException("Never called.");
        }

        @Override // jt.z
        /* renamed from: d */
        public h j(q qVar) {
            d dVar = this.f40690d;
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

        @Override // jt.z
        /* renamed from: e */
        public h p(q qVar) {
            d dVar = this.f40690d;
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

        @Override // jt.z
        /* renamed from: f */
        public h x(q qVar) {
            try {
                return this.f40690d.e((f0) qVar.p(f0.f40589z));
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(q qVar, h hVar) {
            return this.f40690d.B(hVar);
        }

        @Override // jt.z
        /* renamed from: i */
        public q w(q qVar, h hVar, boolean z10) {
            if (hVar != null) {
                return qVar.E(f0.f40589z, this.f40690d.d(hVar));
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

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // jt.p
    /* renamed from: F */
    public h e() {
        return h.i(j.AD, 9999, 12, 31);
    }

    @Override // jt.p
    /* renamed from: G */
    public h A() {
        return h.i(j.BC, 45, 1, 1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.e
    public z c(x xVar) {
        if (xVar.E(f0.f40589z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // jt.p
    public Class getType() {
        return h.class;
    }

    @Override // jt.e
    protected boolean m(jt.e eVar) {
        return this.history.equals(((i) eVar).history);
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
