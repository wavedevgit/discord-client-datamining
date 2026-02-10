package net.time4j.calendar;

import java.text.ParsePosition;
import java.util.Locale;
import net.time4j.f0;
import st.x;
import st.z;
import tt.t;
import tt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum k implements st.i {
    DANGI;
    

    /* renamed from: d  reason: collision with root package name */
    private final transient st.p f38335d = new b();

    /* renamed from: e  reason: collision with root package name */
    private final transient st.p f38336e = new e();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b extends tt.d implements t {
        private static final long serialVersionUID = -5179188137244162427L;

        private Object readResolve() {
            return k.DANGI.a();
        }

        @Override // st.p
        public boolean A() {
            return true;
        }

        @Override // st.p
        public boolean D() {
            return false;
        }

        @Override // st.e
        protected boolean E() {
            return true;
        }

        @Override // st.p
        /* renamed from: F */
        public k e() {
            return k.DANGI;
        }

        @Override // st.p
        /* renamed from: G */
        public k B() {
            return k.DANGI;
        }

        @Override // tt.t
        /* renamed from: H */
        public k l(CharSequence charSequence, ParsePosition parsePosition, st.d dVar) {
            Locale locale = (Locale) dVar.b(tt.a.f51004c, Locale.ROOT);
            boolean booleanValue = ((Boolean) dVar.b(tt.a.f51010i, Boolean.TRUE)).booleanValue();
            boolean booleanValue2 = ((Boolean) dVar.b(tt.a.f51011j, Boolean.FALSE)).booleanValue();
            int index = parsePosition.getIndex();
            k kVar = k.DANGI;
            String d10 = kVar.d(locale, (v) dVar.b(tt.a.f51008g, v.WIDE));
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
        @Override // st.e
        public z c(x xVar) {
            if (!xVar.E(f0.f38446z)) {
                return null;
            }
            return new c();
        }

        @Override // st.e, st.p
        public char d() {
            return 'G';
        }

        @Override // st.p
        public Class getType() {
            return k.class;
        }

        @Override // tt.t
        public void o(st.o oVar, Appendable appendable, st.d dVar) {
            appendable.append(k.DANGI.d((Locale) dVar.b(tt.a.f51004c, Locale.ROOT), (v) dVar.b(tt.a.f51008g, v.WIDE)));
        }

        private b() {
            super("ERA");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {
        private c() {
        }

        @Override // st.z
        /* renamed from: b */
        public st.p a(st.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // st.z
        /* renamed from: c */
        public st.p g(st.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // st.z
        /* renamed from: d */
        public k h(st.q qVar) {
            return k.DANGI;
        }

        @Override // st.z
        /* renamed from: e */
        public k m(st.q qVar) {
            return k.DANGI;
        }

        @Override // st.z
        /* renamed from: f */
        public k y(st.q qVar) {
            return k.DANGI;
        }

        @Override // st.z
        /* renamed from: j */
        public boolean k(st.q qVar, k kVar) {
            if (kVar == k.DANGI) {
                return true;
            }
            return false;
        }

        @Override // st.z
        /* renamed from: l */
        public st.q s(st.q qVar, k kVar, boolean z10) {
            if (k(qVar, kVar)) {
                return qVar;
            }
            throw new IllegalArgumentException("Invalid Korean era: " + kVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements z {
        private d() {
        }

        private int d(st.q qVar) {
            return ((f0) qVar.t(f0.f38446z)).f() + 2333;
        }

        @Override // st.z
        /* renamed from: b */
        public st.p a(st.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // st.z
        /* renamed from: c */
        public st.p g(st.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // st.z
        /* renamed from: e */
        public Integer h(st.q qVar) {
            return 1000002332;
        }

        @Override // st.z
        /* renamed from: f */
        public Integer m(st.q qVar) {
            return -999997666;
        }

        @Override // st.z
        /* renamed from: j */
        public Integer y(st.q qVar) {
            return Integer.valueOf(d(qVar));
        }

        @Override // st.z
        /* renamed from: l */
        public boolean k(st.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = m(qVar).intValue();
            int intValue2 = h(qVar).intValue();
            if (num.intValue() < intValue || num.intValue() > intValue2) {
                return false;
            }
            return true;
        }

        @Override // st.z
        /* renamed from: o */
        public st.q s(st.q qVar, Integer num, boolean z10) {
            if (num != null) {
                if (k(qVar, num)) {
                    int d10 = d(qVar);
                    net.time4j.e eVar = f0.f38446z;
                    return qVar.E(eVar, (f0) ((f0) qVar.t(eVar)).K(num.intValue() - d10, net.time4j.f.f38424o));
                }
                throw new IllegalArgumentException("Invalid year of era: " + num);
            }
            throw new IllegalArgumentException("Missing year of era.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e extends tt.d {
        private static final long serialVersionUID = -7864513245908399367L;

        private Object readResolve() {
            return k.DANGI.e();
        }

        @Override // st.p
        public boolean A() {
            return true;
        }

        @Override // st.p
        public boolean D() {
            return false;
        }

        @Override // st.e
        protected boolean E() {
            return true;
        }

        @Override // st.p
        /* renamed from: F */
        public Integer e() {
            return 5332;
        }

        @Override // st.p
        /* renamed from: G */
        public Integer B() {
            return 3978;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.e
        public z c(x xVar) {
            if (!xVar.E(f0.f38446z)) {
                return null;
            }
            return new d();
        }

        @Override // st.e, st.p
        public char d() {
            return 'y';
        }

        @Override // st.p
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
    public st.p a() {
        return this.f38335d;
    }

    public String d(Locale locale, v vVar) {
        return tt.b.c("dangi", locale).b(vVar).f(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public st.p e() {
        return this.f38336e;
    }
}
