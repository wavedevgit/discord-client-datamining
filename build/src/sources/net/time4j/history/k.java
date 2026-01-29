package net.time4j.history;

import java.text.ParsePosition;
import java.util.Locale;
import jt.p;
import jt.q;
import jt.r;
import jt.x;
import jt.z;
import kt.s;
import kt.t;
import kt.v;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends kt.d implements t {

    /* renamed from: e  reason: collision with root package name */
    private static final Locale f40682e = new Locale("la");
    private static final long serialVersionUID = 5200533417265981438L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40683d;

        a(d dVar) {
            this.f40683d = dVar;
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
        public j j(q qVar) {
            j x10 = x(qVar);
            if (x10 == j.BC) {
                return j.AD;
            }
            return x10;
        }

        @Override // jt.z
        /* renamed from: e */
        public j p(q qVar) {
            j x10 = x(qVar);
            if (x10 == j.AD) {
                return j.BC;
            }
            return x10;
        }

        @Override // jt.z
        /* renamed from: f */
        public j x(q qVar) {
            try {
                return this.f40683d.e((f0) qVar.p(f0.f40573z)).e();
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(q qVar, j jVar) {
            if (jVar == null) {
                return false;
            }
            if (this.f40683d.e((f0) qVar.p(f0.f40573z)).e() != jVar) {
                return false;
            }
            return true;
        }

        @Override // jt.z
        /* renamed from: i */
        public q w(q qVar, j jVar, boolean z10) {
            if (jVar != null) {
                if (this.f40683d.e((f0) qVar.p(f0.f40573z)).e() == jVar) {
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

    private s F(jt.d dVar) {
        jt.c cVar = kt.a.f36534g;
        v vVar = v.WIDE;
        v vVar2 = (v) dVar.b(cVar, vVar);
        jt.c cVar2 = ot.a.f44764c;
        Boolean bool = Boolean.FALSE;
        String str = "a";
        if (((Boolean) dVar.b(cVar2, bool)).booleanValue()) {
            kt.b c10 = kt.b.c("historic", f40682e);
            if (vVar2 == vVar) {
                str = "w";
            }
            return c10.o(this, str);
        }
        kt.b d10 = kt.b.d((Locale) dVar.b(kt.a.f36530c, Locale.ROOT));
        if (((Boolean) dVar.b(ot.a.f44763b, bool)).booleanValue()) {
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

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // jt.p
    /* renamed from: G */
    public j e() {
        return j.AD;
    }

    @Override // jt.p
    /* renamed from: H */
    public j A() {
        return j.BC;
    }

    @Override // kt.t
    /* renamed from: I */
    public j z(CharSequence charSequence, ParsePosition parsePosition, jt.d dVar) {
        return (j) F(dVar).c(charSequence, parsePosition, getType(), dVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.e
    public z c(x xVar) {
        if (xVar.E(f0.f40573z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // jt.e, jt.p
    public char d() {
        return 'G';
    }

    @Override // jt.p
    public Class getType() {
        return j.class;
    }

    @Override // jt.e
    protected boolean m(jt.e eVar) {
        return this.history.equals(((k) eVar).history);
    }

    @Override // kt.t
    public void u(jt.o oVar, Appendable appendable, jt.d dVar) {
        appendable.append(F(dVar).f((Enum) oVar.p(this)));
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
