package net.time4j.history;

import java.text.ParsePosition;
import java.util.Locale;
import net.time4j.f0;
import pt.p;
import pt.q;
import pt.r;
import pt.x;
import pt.z;
import qt.s;
import qt.t;
import qt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends qt.d implements t {

    /* renamed from: e  reason: collision with root package name */
    private static final Locale f40060e = new Locale("la");
    private static final long serialVersionUID = 5200533417265981438L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40061d;

        a(d dVar) {
            this.f40061d = dVar;
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
        public j k(q qVar) {
            j y10 = y(qVar);
            if (y10 == j.BC) {
                return j.AD;
            }
            return y10;
        }

        @Override // pt.z
        /* renamed from: e */
        public j r(q qVar) {
            j y10 = y(qVar);
            if (y10 == j.AD) {
                return j.BC;
            }
            return y10;
        }

        @Override // pt.z
        /* renamed from: f */
        public j y(q qVar) {
            try {
                return this.f40061d.e((f0) qVar.v(f0.f39951z)).e();
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // pt.z
        /* renamed from: g */
        public boolean p(q qVar, j jVar) {
            if (jVar == null) {
                return false;
            }
            if (this.f40061d.e((f0) qVar.v(f0.f39951z)).e() != jVar) {
                return false;
            }
            return true;
        }

        @Override // pt.z
        /* renamed from: i */
        public q x(q qVar, j jVar, boolean z10) {
            if (jVar != null) {
                if (this.f40061d.e((f0) qVar.v(f0.f39951z)).e() == jVar) {
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

    private s F(pt.d dVar) {
        pt.c cVar = qt.a.f48092g;
        v vVar = v.WIDE;
        v vVar2 = (v) dVar.a(cVar, vVar);
        pt.c cVar2 = ut.a.f51714c;
        Boolean bool = Boolean.FALSE;
        String str = "a";
        if (((Boolean) dVar.a(cVar2, bool)).booleanValue()) {
            qt.b c10 = qt.b.c("historic", f40060e);
            if (vVar2 == vVar) {
                str = "w";
            }
            return c10.o(this, str);
        }
        qt.b d10 = qt.b.d((Locale) dVar.a(qt.a.f48088c, Locale.ROOT));
        if (((Boolean) dVar.a(ut.a.f51713b, bool)).booleanValue()) {
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

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // pt.p
    /* renamed from: G */
    public j e() {
        return j.AD;
    }

    @Override // pt.p
    /* renamed from: H */
    public j A() {
        return j.BC;
    }

    @Override // qt.t
    /* renamed from: I */
    public j t(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar) {
        return (j) F(dVar).c(charSequence, parsePosition, getType(), dVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // pt.e
    public z c(x xVar) {
        if (xVar.E(f0.f39951z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // pt.e, pt.p
    public char d() {
        return 'G';
    }

    @Override // pt.p
    public Class getType() {
        return j.class;
    }

    @Override // pt.e
    protected boolean j(pt.e eVar) {
        return this.history.equals(((k) eVar).history);
    }

    @Override // qt.t
    public void s(pt.o oVar, Appendable appendable, pt.d dVar) {
        appendable.append(F(dVar).f((Enum) oVar.v(this)));
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
