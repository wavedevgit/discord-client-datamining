package net.time4j.history;

import java.text.ParsePosition;
import java.util.Locale;
import net.time4j.f0;
import rt.p;
import rt.q;
import rt.r;
import rt.x;
import rt.z;
import st.s;
import st.t;
import st.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends st.d implements t {

    /* renamed from: e  reason: collision with root package name */
    private static final Locale f39415e = new Locale("la");
    private static final long serialVersionUID = 5200533417265981438L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39416d;

        a(d dVar) {
            this.f39416d = dVar;
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
        public j k(q qVar) {
            j y10 = y(qVar);
            if (y10 == j.BC) {
                return j.AD;
            }
            return y10;
        }

        @Override // rt.z
        /* renamed from: e */
        public j o(q qVar) {
            j y10 = y(qVar);
            if (y10 == j.AD) {
                return j.BC;
            }
            return y10;
        }

        @Override // rt.z
        /* renamed from: f */
        public j y(q qVar) {
            try {
                return this.f39416d.e((f0) qVar.s(f0.f39306z)).e();
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // rt.z
        /* renamed from: h */
        public boolean n(q qVar, j jVar) {
            if (jVar == null) {
                return false;
            }
            if (this.f39416d.e((f0) qVar.s(f0.f39306z)).e() != jVar) {
                return false;
            }
            return true;
        }

        @Override // rt.z
        /* renamed from: i */
        public q u(q qVar, j jVar, boolean z10) {
            if (jVar != null) {
                if (this.f39416d.e((f0) qVar.s(f0.f39306z)).e() == jVar) {
                    return qVar;
                }
                throw new IllegalArgumentException(jVar.name());
            }
            throw new IllegalArgumentException("Missing era value.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(d dVar) {
        super("ERA");
        this.history = dVar;
    }

    private s F(rt.d dVar) {
        rt.c cVar = st.a.f50116g;
        v vVar = v.WIDE;
        v vVar2 = (v) dVar.b(cVar, vVar);
        rt.c cVar2 = wt.a.f54114c;
        Boolean bool = Boolean.FALSE;
        String str = "a";
        if (((Boolean) dVar.b(cVar2, bool)).booleanValue()) {
            st.b c10 = st.b.c("historic", f39415e);
            if (vVar2 == vVar) {
                str = "w";
            }
            return c10.o(this, str);
        }
        st.b d10 = st.b.d((Locale) dVar.b(st.a.f50112c, Locale.ROOT));
        if (((Boolean) dVar.b(wt.a.f54113b, bool)).booleanValue()) {
            if (vVar2 == vVar) {
                str = "w";
            }
            return d10.o(this, str, "alt");
        }
        return d10.b(vVar2);
    }

    private Object readResolve() {
        return this.history.i();
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
    /* renamed from: G */
    public j e() {
        return j.AD;
    }

    @Override // rt.p
    /* renamed from: H */
    public j B() {
        return j.BC;
    }

    @Override // st.t
    /* renamed from: I */
    public j r(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar) {
        return (j) F(dVar).c(charSequence, parsePosition, getType(), dVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rt.e
    public z c(x xVar) {
        if (xVar.E(f0.f39306z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // rt.e, rt.p
    public char d() {
        return 'G';
    }

    @Override // rt.p
    public Class getType() {
        return j.class;
    }

    @Override // rt.e
    protected boolean l(rt.e eVar) {
        return this.history.equals(((k) eVar).history);
    }

    @Override // st.t
    public void v(rt.o oVar, Appendable appendable, rt.d dVar) {
        appendable.append(F(dVar).f((Enum) oVar.s(this)));
    }
}
