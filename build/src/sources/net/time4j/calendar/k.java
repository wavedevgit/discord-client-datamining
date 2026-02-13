package net.time4j.calendar;

import bu.x;
import bu.z;
import cu.t;
import cu.v;
import java.text.ParsePosition;
import java.util.Locale;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum k implements bu.i {
    DANGI;
    

    /* renamed from: d  reason: collision with root package name */
    private final transient bu.p f37908d = new b();

    /* renamed from: e  reason: collision with root package name */
    private final transient bu.p f37909e = new e();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b extends cu.d implements t {
        private static final long serialVersionUID = -5179188137244162427L;

        private Object readResolve() {
            return k.DANGI.a();
        }

        @Override // bu.p
        public boolean A() {
            return true;
        }

        @Override // bu.p
        public boolean C() {
            return false;
        }

        @Override // bu.e
        protected boolean E() {
            return true;
        }

        @Override // bu.p
        /* renamed from: F */
        public k f() {
            return k.DANGI;
        }

        @Override // bu.p
        /* renamed from: G */
        public k B() {
            return k.DANGI;
        }

        @Override // cu.t
        /* renamed from: H */
        public k l(CharSequence charSequence, ParsePosition parsePosition, bu.d dVar) {
            Locale locale = (Locale) dVar.b(cu.a.f21111c, Locale.ROOT);
            boolean booleanValue = ((Boolean) dVar.b(cu.a.f21117i, Boolean.TRUE)).booleanValue();
            boolean booleanValue2 = ((Boolean) dVar.b(cu.a.f21118j, Boolean.FALSE)).booleanValue();
            int index = parsePosition.getIndex();
            k kVar = k.DANGI;
            String d10 = kVar.d(locale, (v) dVar.b(cu.a.f21115g, v.WIDE));
            int max = Math.max(Math.min(d10.length() + index, charSequence.length()), index);
            if (max > index) {
                String charSequence2 = charSequence.subSequence(index, max).toString();
                if (booleanValue) {
                    d10 = d10.toLowerCase(locale);
                    charSequence2 = charSequence2.toLowerCase(locale);
                }
                if (d10.equals(charSequence2) || (booleanValue2 && d10.startsWith(charSequence2))) {
                    parsePosition.setIndex(max);
                    return kVar;
                }
            }
            parsePosition.setErrorIndex(index);
            return null;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // bu.e
        public z c(x xVar) {
            if (!xVar.E(f0.f38019z)) {
                return null;
            }
            return new c();
        }

        @Override // bu.e, bu.p
        public char d() {
            return 'G';
        }

        @Override // bu.p
        public Class getType() {
            return k.class;
        }

        @Override // cu.t
        public void w(bu.o oVar, Appendable appendable, bu.d dVar) {
            appendable.append(k.DANGI.d((Locale) dVar.b(cu.a.f21111c, Locale.ROOT), (v) dVar.b(cu.a.f21115g, v.WIDE)));
        }

        private b() {
            super("ERA");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {
        private c() {
        }

        @Override // bu.z
        /* renamed from: b */
        public bu.p a(bu.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p h(bu.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // bu.z
        /* renamed from: d */
        public k m(bu.q qVar) {
            return k.DANGI;
        }

        @Override // bu.z
        /* renamed from: e */
        public k q(bu.q qVar) {
            return k.DANGI;
        }

        @Override // bu.z
        /* renamed from: f */
        public k y(bu.q qVar) {
            return k.DANGI;
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(bu.q qVar, k kVar) {
            if (kVar == k.DANGI) {
                return true;
            }
            return false;
        }

        @Override // bu.z
        /* renamed from: i */
        public bu.q x(bu.q qVar, k kVar, boolean z10) {
            if (o(qVar, kVar)) {
                return qVar;
            }
            throw new IllegalArgumentException("Invalid Korean era: " + kVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements z {
        private d() {
        }

        private int d(bu.q qVar) {
            return ((f0) qVar.k(f0.f38019z)).f() + 2333;
        }

        @Override // bu.z
        /* renamed from: b */
        public bu.p a(bu.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p h(bu.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // bu.z
        /* renamed from: e */
        public Integer m(bu.q qVar) {
            return 1000002332;
        }

        @Override // bu.z
        /* renamed from: f */
        public Integer q(bu.q qVar) {
            return -999997666;
        }

        @Override // bu.z
        /* renamed from: g */
        public Integer y(bu.q qVar) {
            return Integer.valueOf(d(qVar));
        }

        @Override // bu.z
        /* renamed from: i */
        public boolean o(bu.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = q(qVar).intValue();
            int intValue2 = m(qVar).intValue();
            if (num.intValue() < intValue || num.intValue() > intValue2) {
                return false;
            }
            return true;
        }

        @Override // bu.z
        /* renamed from: j */
        public bu.q x(bu.q qVar, Integer num, boolean z10) {
            if (num != null) {
                if (o(qVar, num)) {
                    int d10 = d(qVar);
                    net.time4j.e eVar = f0.f38019z;
                    return qVar.E(eVar, (f0) ((f0) qVar.k(eVar)).K(num.intValue() - d10, net.time4j.f.f37997o));
                }
                throw new IllegalArgumentException("Invalid year of era: " + num);
            }
            throw new IllegalArgumentException("Missing year of era.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e extends cu.d {
        private static final long serialVersionUID = -7864513245908399367L;

        private Object readResolve() {
            return k.DANGI.e();
        }

        @Override // bu.p
        public boolean A() {
            return true;
        }

        @Override // bu.p
        public boolean C() {
            return false;
        }

        @Override // bu.e
        protected boolean E() {
            return true;
        }

        @Override // bu.p
        /* renamed from: F */
        public Integer f() {
            return 5332;
        }

        @Override // bu.p
        /* renamed from: G */
        public Integer B() {
            return 3978;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // bu.e
        public z c(x xVar) {
            if (!xVar.E(f0.f38019z)) {
                return null;
            }
            return new d();
        }

        @Override // bu.e, bu.p
        public char d() {
            return 'y';
        }

        @Override // bu.p
        public Class getType() {
            return Integer.class;
        }

        private e() {
            super("YEAR_OF_ERA");
        }
    }

    k() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public bu.p a() {
        return this.f37908d;
    }

    public String d(Locale locale, v vVar) {
        return cu.b.c("dangi", locale).b(vVar).f(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public bu.p e() {
        return this.f37909e;
    }
}
