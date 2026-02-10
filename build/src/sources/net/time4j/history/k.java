package net.time4j.history;

import java.text.ParsePosition;
import java.util.Locale;
import net.time4j.f0;
import st.p;
import st.q;
import st.r;
import st.x;
import st.z;
import tt.s;
import tt.t;
import tt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends tt.d implements t {

    /* renamed from: e  reason: collision with root package name */
    private static final Locale f38555e = new Locale("la");
    private static final long serialVersionUID = 5200533417265981438L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f38556d;

        a(d dVar) {
            this.f38556d = dVar;
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
        public j h(q qVar) {
            j y10 = y(qVar);
            if (y10 == j.BC) {
                return j.AD;
            }
            return y10;
        }

        @Override // st.z
        /* renamed from: e */
        public j m(q qVar) {
            j y10 = y(qVar);
            if (y10 == j.AD) {
                return j.BC;
            }
            return y10;
        }

        @Override // st.z
        /* renamed from: f */
        public j y(q qVar) {
            try {
                return this.f38556d.e((f0) qVar.t(f0.f38446z)).e();
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // st.z
        /* renamed from: j */
        public boolean k(q qVar, j jVar) {
            if (jVar == null) {
                return false;
            }
            if (this.f38556d.e((f0) qVar.t(f0.f38446z)).e() != jVar) {
                return false;
            }
            return true;
        }

        @Override // st.z
        /* renamed from: l */
        public q s(q qVar, j jVar, boolean z10) {
            if (jVar != null) {
                if (this.f38556d.e((f0) qVar.t(f0.f38446z)).e() == jVar) {
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

    private s F(st.d dVar) {
        st.c cVar = tt.a.f51008g;
        v vVar = v.WIDE;
        v vVar2 = (v) dVar.b(cVar, vVar);
        st.c cVar2 = xt.a.f55325c;
        Boolean bool = Boolean.FALSE;
        String str = "a";
        if (((Boolean) dVar.b(cVar2, bool)).booleanValue()) {
            tt.b c10 = tt.b.c("historic", f38555e);
            if (vVar2 == vVar) {
                str = "w";
            }
            return c10.o(this, str);
        }
        tt.b d10 = tt.b.d((Locale) dVar.b(tt.a.f51004c, Locale.ROOT));
        if (((Boolean) dVar.b(xt.a.f55324b, bool)).booleanValue()) {
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

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // st.p
    /* renamed from: G */
    public j e() {
        return j.AD;
    }

    @Override // st.p
    /* renamed from: H */
    public j B() {
        return j.BC;
    }

    @Override // tt.t
    /* renamed from: I */
    public j l(CharSequence charSequence, ParsePosition parsePosition, st.d dVar) {
        return (j) F(dVar).c(charSequence, parsePosition, getType(), dVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // st.e
    public z c(x xVar) {
        if (xVar.E(f0.f38446z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // st.e, st.p
    public char d() {
        return 'G';
    }

    @Override // st.p
    public Class getType() {
        return j.class;
    }

    @Override // st.e
    protected boolean j(st.e eVar) {
        return this.history.equals(((k) eVar).history);
    }

    @Override // tt.t
    public void o(st.o oVar, Appendable appendable, st.d dVar) {
        appendable.append(F(dVar).f((Enum) oVar.t(this)));
    }
}
