package net.time4j.history;

import java.text.ParsePosition;
import java.util.Locale;
import mt.p;
import mt.q;
import mt.r;
import mt.x;
import mt.z;
import net.time4j.f0;
import nt.s;
import nt.t;
import nt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends nt.d implements t {

    /* renamed from: e  reason: collision with root package name */
    private static final Locale f40600e = new Locale("la");
    private static final long serialVersionUID = 5200533417265981438L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40601d;

        a(d dVar) {
            this.f40601d = dVar;
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
        public j l(q qVar) {
            j z10 = z(qVar);
            if (z10 == j.BC) {
                return j.AD;
            }
            return z10;
        }

        @Override // mt.z
        /* renamed from: e */
        public j r(q qVar) {
            j z10 = z(qVar);
            if (z10 == j.AD) {
                return j.BC;
            }
            return z10;
        }

        @Override // mt.z
        /* renamed from: f */
        public j z(q qVar) {
            try {
                return this.f40601d.e((f0) qVar.o(f0.f40491z)).e();
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // mt.z
        /* renamed from: g */
        public boolean q(q qVar, j jVar) {
            if (jVar == null) {
                return false;
            }
            if (this.f40601d.e((f0) qVar.o(f0.f40491z)).e() != jVar) {
                return false;
            }
            return true;
        }

        @Override // mt.z
        /* renamed from: i */
        public q x(q qVar, j jVar, boolean z10) {
            if (jVar != null) {
                if (this.f40601d.e((f0) qVar.o(f0.f40491z)).e() == jVar) {
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

    private s F(mt.d dVar) {
        mt.c cVar = nt.a.f42032g;
        v vVar = v.WIDE;
        v vVar2 = (v) dVar.b(cVar, vVar);
        mt.c cVar2 = rt.a.f49112c;
        Boolean bool = Boolean.FALSE;
        String str = "a";
        if (((Boolean) dVar.b(cVar2, bool)).booleanValue()) {
            nt.b c10 = nt.b.c("historic", f40600e);
            if (vVar2 == vVar) {
                str = "w";
            }
            return c10.o(this, str);
        }
        nt.b d10 = nt.b.d((Locale) dVar.b(nt.a.f42028c, Locale.ROOT));
        if (((Boolean) dVar.b(rt.a.f49111b, bool)).booleanValue()) {
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

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // mt.p
    /* renamed from: G */
    public j f() {
        return j.AD;
    }

    @Override // mt.p
    /* renamed from: H */
    public j A() {
        return j.BC;
    }

    @Override // nt.t
    /* renamed from: I */
    public j j(CharSequence charSequence, ParsePosition parsePosition, mt.d dVar) {
        return (j) F(dVar).c(charSequence, parsePosition, getType(), dVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // mt.e
    public z c(x xVar) {
        if (xVar.E(f0.f40491z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // mt.e, mt.p
    public char d() {
        return 'G';
    }

    @Override // mt.p
    public Class getType() {
        return j.class;
    }

    @Override // mt.e
    protected boolean m(mt.e eVar) {
        return this.history.equals(((k) eVar).history);
    }

    @Override // nt.t
    public void s(mt.o oVar, Appendable appendable, mt.d dVar) {
        appendable.append(F(dVar).f((Enum) oVar.o(this)));
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
