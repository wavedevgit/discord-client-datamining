package net.time4j.calendar;

import java.text.ParsePosition;
import java.util.Locale;
import kt.x;
import kt.z;
import lt.t;
import lt.v;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum k implements kt.i {
    DANGI;
    

    /* renamed from: d  reason: collision with root package name */
    private final transient kt.p f40341d = new b();

    /* renamed from: e  reason: collision with root package name */
    private final transient kt.p f40342e = new e();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b extends lt.d implements t {
        private static final long serialVersionUID = -5179188137244162427L;

        private Object readResolve() {
            return k.DANGI.a();
        }

        @Override // kt.p
        public boolean C() {
            return false;
        }

        @Override // kt.e
        protected boolean E() {
            return true;
        }

        @Override // kt.p
        /* renamed from: F */
        public k e() {
            return k.DANGI;
        }

        @Override // kt.p
        /* renamed from: G */
        public k A() {
            return k.DANGI;
        }

        @Override // lt.t
        /* renamed from: H */
        public k k(CharSequence charSequence, ParsePosition parsePosition, kt.d dVar) {
            Locale locale = (Locale) dVar.a(lt.a.f37628c, Locale.ROOT);
            boolean booleanValue = ((Boolean) dVar.a(lt.a.f37634i, Boolean.TRUE)).booleanValue();
            boolean booleanValue2 = ((Boolean) dVar.a(lt.a.f37635j, Boolean.FALSE)).booleanValue();
            int index = parsePosition.getIndex();
            k kVar = k.DANGI;
            String d10 = kVar.d(locale, (v) dVar.a(lt.a.f37632g, v.WIDE));
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
        @Override // kt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f40452z)) {
                return null;
            }
            return new c();
        }

        @Override // kt.e, kt.p
        public char d() {
            return 'G';
        }

        @Override // kt.p
        public Class getType() {
            return k.class;
        }

        @Override // lt.t
        public void s(kt.o oVar, Appendable appendable, kt.d dVar) {
            appendable.append(k.DANGI.d((Locale) dVar.a(lt.a.f37628c, Locale.ROOT), (v) dVar.a(lt.a.f37632g, v.WIDE)));
        }

        @Override // kt.p
        public boolean y() {
            return true;
        }

        private b() {
            super("ERA");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {
        private c() {
        }

        @Override // kt.z
        /* renamed from: b */
        public kt.p a(kt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // kt.z
        /* renamed from: c */
        public kt.p g(kt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // kt.z
        /* renamed from: d */
        public k h(kt.q qVar) {
            return k.DANGI;
        }

        @Override // kt.z
        /* renamed from: e */
        public k o(kt.q qVar) {
            return k.DANGI;
        }

        @Override // kt.z
        /* renamed from: f */
        public k x(kt.q qVar) {
            return k.DANGI;
        }

        @Override // kt.z
        /* renamed from: j */
        public boolean l(kt.q qVar, k kVar) {
            if (kVar == k.DANGI) {
                return true;
            }
            return false;
        }

        @Override // kt.z
        /* renamed from: k */
        public kt.q v(kt.q qVar, k kVar, boolean z10) {
            if (l(qVar, kVar)) {
                return qVar;
            }
            throw new IllegalArgumentException("Invalid Korean era: " + kVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements z {
        private d() {
        }

        private int d(kt.q qVar) {
            return ((f0) qVar.v(f0.f40452z)).f() + 2333;
        }

        @Override // kt.z
        /* renamed from: b */
        public kt.p a(kt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // kt.z
        /* renamed from: c */
        public kt.p g(kt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // kt.z
        /* renamed from: e */
        public Integer h(kt.q qVar) {
            return 1000002332;
        }

        @Override // kt.z
        /* renamed from: f */
        public Integer o(kt.q qVar) {
            return -999997666;
        }

        @Override // kt.z
        /* renamed from: j */
        public Integer x(kt.q qVar) {
            return Integer.valueOf(d(qVar));
        }

        @Override // kt.z
        /* renamed from: k */
        public boolean l(kt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = o(qVar).intValue();
            int intValue2 = h(qVar).intValue();
            if (num.intValue() < intValue || num.intValue() > intValue2) {
                return false;
            }
            return true;
        }

        @Override // kt.z
        /* renamed from: m */
        public kt.q v(kt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                if (l(qVar, num)) {
                    int d10 = d(qVar);
                    net.time4j.e eVar = f0.f40452z;
                    return qVar.E(eVar, (f0) ((f0) qVar.v(eVar)).K(num.intValue() - d10, net.time4j.f.f40430o));
                }
                throw new IllegalArgumentException("Invalid year of era: " + num);
            }
            throw new IllegalArgumentException("Missing year of era.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e extends lt.d {
        private static final long serialVersionUID = -7864513245908399367L;

        private Object readResolve() {
            return k.DANGI.e();
        }

        @Override // kt.p
        public boolean C() {
            return false;
        }

        @Override // kt.e
        protected boolean E() {
            return true;
        }

        @Override // kt.p
        /* renamed from: F */
        public Integer e() {
            return 5332;
        }

        @Override // kt.p
        /* renamed from: G */
        public Integer A() {
            return 3978;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f40452z)) {
                return null;
            }
            return new d();
        }

        @Override // kt.e, kt.p
        public char d() {
            return 'y';
        }

        @Override // kt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // kt.p
        public boolean y() {
            return true;
        }

        private e() {
            super("YEAR_OF_ERA");
        }
    }

    k() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public kt.p a() {
        return this.f40341d;
    }

    public String d(Locale locale, v vVar) {
        return lt.b.c("dangi", locale).b(vVar).f(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public kt.p e() {
        return this.f40342e;
    }
}
