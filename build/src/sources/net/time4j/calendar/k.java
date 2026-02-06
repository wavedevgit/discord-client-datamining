package net.time4j.calendar;

import java.text.ParsePosition;
import java.util.Locale;
import net.time4j.f0;
import rt.x;
import rt.z;
import st.t;
import st.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum k implements rt.i {
    DANGI;
    

    /* renamed from: d  reason: collision with root package name */
    private final transient rt.p f39195d = new b();

    /* renamed from: e  reason: collision with root package name */
    private final transient rt.p f39196e = new e();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b extends st.d implements t {
        private static final long serialVersionUID = -5179188137244162427L;

        private Object readResolve() {
            return k.DANGI.a();
        }

        @Override // rt.p
        public boolean A() {
            return true;
        }

        @Override // rt.p
        public boolean D() {
            return false;
        }

        @Override // rt.e
        protected boolean E() {
            return true;
        }

        @Override // rt.p
        /* renamed from: F */
        public k e() {
            return k.DANGI;
        }

        @Override // rt.p
        /* renamed from: G */
        public k B() {
            return k.DANGI;
        }

        @Override // st.t
        /* renamed from: H */
        public k r(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar) {
            Locale locale = (Locale) dVar.b(st.a.f50112c, Locale.ROOT);
            boolean booleanValue = ((Boolean) dVar.b(st.a.f50118i, Boolean.TRUE)).booleanValue();
            boolean booleanValue2 = ((Boolean) dVar.b(st.a.f50119j, Boolean.FALSE)).booleanValue();
            int index = parsePosition.getIndex();
            k kVar = k.DANGI;
            String d10 = kVar.d(locale, (v) dVar.b(st.a.f50116g, v.WIDE));
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
        @Override // rt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f39306z)) {
                return null;
            }
            return new c();
        }

        @Override // rt.e, rt.p
        public char d() {
            return 'G';
        }

        @Override // rt.p
        public Class getType() {
            return k.class;
        }

        @Override // st.t
        public void v(rt.o oVar, Appendable appendable, rt.d dVar) {
            appendable.append(k.DANGI.d((Locale) dVar.b(st.a.f50112c, Locale.ROOT), (v) dVar.b(st.a.f50116g, v.WIDE)));
        }

        private b() {
            super("ERA");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {
        private c() {
        }

        @Override // rt.z
        /* renamed from: b */
        public rt.p a(rt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // rt.z
        /* renamed from: c */
        public rt.p g(rt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // rt.z
        /* renamed from: d */
        public k k(rt.q qVar) {
            return k.DANGI;
        }

        @Override // rt.z
        /* renamed from: e */
        public k o(rt.q qVar) {
            return k.DANGI;
        }

        @Override // rt.z
        /* renamed from: f */
        public k y(rt.q qVar) {
            return k.DANGI;
        }

        @Override // rt.z
        /* renamed from: h */
        public boolean n(rt.q qVar, k kVar) {
            if (kVar == k.DANGI) {
                return true;
            }
            return false;
        }

        @Override // rt.z
        /* renamed from: i */
        public rt.q u(rt.q qVar, k kVar, boolean z10) {
            if (n(qVar, kVar)) {
                return qVar;
            }
            throw new IllegalArgumentException("Invalid Korean era: " + kVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements z {
        private d() {
        }

        private int d(rt.q qVar) {
            return ((f0) qVar.s(f0.f39306z)).f() + 2333;
        }

        @Override // rt.z
        /* renamed from: b */
        public rt.p a(rt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // rt.z
        /* renamed from: c */
        public rt.p g(rt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // rt.z
        /* renamed from: e */
        public Integer k(rt.q qVar) {
            return 1000002332;
        }

        @Override // rt.z
        /* renamed from: f */
        public Integer o(rt.q qVar) {
            return -999997666;
        }

        @Override // rt.z
        /* renamed from: h */
        public Integer y(rt.q qVar) {
            return Integer.valueOf(d(qVar));
        }

        @Override // rt.z
        /* renamed from: i */
        public boolean n(rt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = o(qVar).intValue();
            int intValue2 = k(qVar).intValue();
            if (num.intValue() < intValue || num.intValue() > intValue2) {
                return false;
            }
            return true;
        }

        @Override // rt.z
        /* renamed from: j */
        public rt.q u(rt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                if (n(qVar, num)) {
                    int d10 = d(qVar);
                    net.time4j.e eVar = f0.f39306z;
                    return qVar.E(eVar, (f0) ((f0) qVar.s(eVar)).K(num.intValue() - d10, net.time4j.f.f39284o));
                }
                throw new IllegalArgumentException("Invalid year of era: " + num);
            }
            throw new IllegalArgumentException("Missing year of era.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e extends st.d {
        private static final long serialVersionUID = -7864513245908399367L;

        private Object readResolve() {
            return k.DANGI.e();
        }

        @Override // rt.p
        public boolean A() {
            return true;
        }

        @Override // rt.p
        public boolean D() {
            return false;
        }

        @Override // rt.e
        protected boolean E() {
            return true;
        }

        @Override // rt.p
        /* renamed from: F */
        public Integer e() {
            return 5332;
        }

        @Override // rt.p
        /* renamed from: G */
        public Integer B() {
            return 3978;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // rt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f39306z)) {
                return null;
            }
            return new d();
        }

        @Override // rt.e, rt.p
        public char d() {
            return 'y';
        }

        @Override // rt.p
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
    public rt.p a() {
        return this.f39195d;
    }

    public String d(Locale locale, v vVar) {
        return st.b.c("dangi", locale).b(vVar).f(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public rt.p e() {
        return this.f39196e;
    }
}
