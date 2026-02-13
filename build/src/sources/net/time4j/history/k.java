package net.time4j.history;

import bu.p;
import bu.q;
import bu.r;
import bu.x;
import bu.z;
import cu.s;
import cu.t;
import cu.v;
import java.text.ParsePosition;
import java.util.Locale;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class k extends cu.d implements t {

    /* renamed from: e  reason: collision with root package name */
    private static final Locale f38128e = new Locale("la");
    private static final long serialVersionUID = 5200533417265981438L;
    private final d history;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f38129d;

        a(d dVar) {
            this.f38129d = dVar;
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
        public j m(q qVar) {
            j y10 = y(qVar);
            if (y10 == j.BC) {
                return j.AD;
            }
            return y10;
        }

        @Override // bu.z
        /* renamed from: e */
        public j q(q qVar) {
            j y10 = y(qVar);
            if (y10 == j.AD) {
                return j.BC;
            }
            return y10;
        }

        @Override // bu.z
        /* renamed from: f */
        public j y(q qVar) {
            try {
                return this.f38129d.e((f0) qVar.k(f0.f38019z)).e();
            } catch (IllegalArgumentException e10) {
                throw new r(e10.getMessage(), e10);
            }
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(q qVar, j jVar) {
            if (jVar == null) {
                return false;
            }
            if (this.f38129d.e((f0) qVar.k(f0.f38019z)).e() != jVar) {
                return false;
            }
            return true;
        }

        @Override // bu.z
        /* renamed from: i */
        public q x(q qVar, j jVar, boolean z10) {
            if (jVar != null) {
                if (this.f38129d.e((f0) qVar.k(f0.f38019z)).e() == jVar) {
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

    private s F(bu.d dVar) {
        bu.c cVar = cu.a.f21115g;
        v vVar = v.WIDE;
        v vVar2 = (v) dVar.b(cVar, vVar);
        bu.c cVar2 = gu.a.f26028c;
        Boolean bool = Boolean.FALSE;
        String str = "a";
        if (((Boolean) dVar.b(cVar2, bool)).booleanValue()) {
            cu.b c10 = cu.b.c("historic", f38128e);
            if (vVar2 == vVar) {
                str = "w";
            }
            return c10.m(this, str);
        }
        cu.b d10 = cu.b.d((Locale) dVar.b(cu.a.f21111c, Locale.ROOT));
        if (((Boolean) dVar.b(gu.a.f26027b, bool)).booleanValue()) {
            if (vVar2 == vVar) {
                str = "w";
            }
            return d10.m(this, str, "alt");
        }
        return d10.b(vVar2);
    }

    private Object readResolve() {
        return this.history.i();
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
    /* renamed from: G */
    public j f() {
        return j.AD;
    }

    @Override // bu.p
    /* renamed from: H */
    public j B() {
        return j.BC;
    }

    @Override // cu.t
    /* renamed from: I */
    public j l(CharSequence charSequence, ParsePosition parsePosition, bu.d dVar) {
        return (j) F(dVar).c(charSequence, parsePosition, getType(), dVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bu.e
    public z c(x xVar) {
        if (xVar.E(f0.f38019z)) {
            return new a(this.history);
        }
        return null;
    }

    @Override // bu.e, bu.p
    public char d() {
        return 'G';
    }

    @Override // bu.p
    public Class getType() {
        return j.class;
    }

    @Override // bu.e
    protected boolean j(bu.e eVar) {
        return this.history.equals(((k) eVar).history);
    }

    @Override // cu.t
    public void w(bu.o oVar, Appendable appendable, bu.d dVar) {
        appendable.append(F(dVar).f((Enum) oVar.k(this)));
    }
}
