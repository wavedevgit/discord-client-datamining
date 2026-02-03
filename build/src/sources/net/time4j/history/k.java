package net.time4j.history;

import java.text.ParsePosition;
import java.util.Locale;
import kt.p;
import kt.q;
import kt.r;
import kt.x;
import kt.z;
import lt.s;
import lt.t;
import lt.v;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends lt.d implements t {

    /* renamed from: e  reason: collision with root package name */
    private static final Locale f40561e = new Locale("la");
    private static final long serialVersionUID = 5200533417265981438L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40562d;

        a(d dVar) {
            this.f40562d = dVar;
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
        public j h(q qVar) {
            j x10 = x(qVar);
            if (x10 == j.BC) {
                return j.AD;
            }
            return x10;
        }

        @Override // kt.z
        /* renamed from: e */
        public j o(q qVar) {
            j x10 = x(qVar);
            if (x10 == j.AD) {
                return j.BC;
            }
            return x10;
        }

        @Override // kt.z
        /* renamed from: f */
        public j x(q qVar) {
            try {
                return this.f40562d.e((f0) qVar.v(f0.f40452z)).e();
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // kt.z
        /* renamed from: j */
        public boolean l(q qVar, j jVar) {
            if (jVar == null) {
                return false;
            }
            if (this.f40562d.e((f0) qVar.v(f0.f40452z)).e() != jVar) {
                return false;
            }
            return true;
        }

        @Override // kt.z
        /* renamed from: k */
        public q v(q qVar, j jVar, boolean z10) {
            if (jVar != null) {
                if (this.f40562d.e((f0) qVar.v(f0.f40452z)).e() == jVar) {
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

    private s F(kt.d dVar) {
        kt.c cVar = lt.a.f37632g;
        v vVar = v.WIDE;
        v vVar2 = (v) dVar.a(cVar, vVar);
        kt.c cVar2 = pt.a.f46479c;
        Boolean bool = Boolean.FALSE;
        String str = "a";
        if (((Boolean) dVar.a(cVar2, bool)).booleanValue()) {
            lt.b c10 = lt.b.c("historic", f40561e);
            if (vVar2 == vVar) {
                str = "w";
            }
            return c10.o(this, str);
        }
        lt.b d10 = lt.b.d((Locale) dVar.a(lt.a.f37628c, Locale.ROOT));
        if (((Boolean) dVar.a(pt.a.f46478b, bool)).booleanValue()) {
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

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // kt.p
    /* renamed from: G */
    public j e() {
        return j.AD;
    }

    @Override // kt.p
    /* renamed from: H */
    public j A() {
        return j.BC;
    }

    @Override // lt.t
    /* renamed from: I */
    public j k(CharSequence charSequence, ParsePosition parsePosition, kt.d dVar) {
        return (j) F(dVar).c(charSequence, parsePosition, getType(), dVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.e
    public z c(x xVar) {
        if (xVar.E(f0.f40452z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // kt.e, kt.p
    public char d() {
        return 'G';
    }

    @Override // kt.p
    public Class getType() {
        return j.class;
    }

    @Override // kt.e
    protected boolean j(kt.e eVar) {
        return this.history.equals(((k) eVar).history);
    }

    @Override // lt.t
    public void s(kt.o oVar, Appendable appendable, kt.d dVar) {
        appendable.append(F(dVar).f((Enum) oVar.v(this)));
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
