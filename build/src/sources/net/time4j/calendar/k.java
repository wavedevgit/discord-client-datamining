package net.time4j.calendar;

import java.text.ParsePosition;
import java.util.Locale;
import net.time4j.f0;
import pt.x;
import pt.z;
import qt.t;
import qt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum k implements pt.i {
    DANGI;
    

    /* renamed from: d  reason: collision with root package name */
    private final transient pt.p f39840d = new b();

    /* renamed from: e  reason: collision with root package name */
    private final transient pt.p f39841e = new e();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b extends qt.d implements t {
        private static final long serialVersionUID = -5179188137244162427L;

        private Object readResolve() {
            return k.DANGI.a();
        }

        @Override // pt.p
        public boolean B() {
            return false;
        }

        @Override // pt.e
        protected boolean E() {
            return true;
        }

        @Override // pt.p
        /* renamed from: F */
        public k e() {
            return k.DANGI;
        }

        @Override // pt.p
        /* renamed from: G */
        public k A() {
            return k.DANGI;
        }

        @Override // qt.t
        /* renamed from: H */
        public k t(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar) {
            Locale locale = (Locale) dVar.a(qt.a.f48088c, Locale.ROOT);
            boolean booleanValue = ((Boolean) dVar.a(qt.a.f48094i, Boolean.TRUE)).booleanValue();
            boolean booleanValue2 = ((Boolean) dVar.a(qt.a.f48095j, Boolean.FALSE)).booleanValue();
            int index = parsePosition.getIndex();
            k kVar = k.DANGI;
            String d10 = kVar.d(locale, (v) dVar.a(qt.a.f48092g, v.WIDE));
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
        @Override // pt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f39951z)) {
                return null;
            }
            return new c();
        }

        @Override // pt.e, pt.p
        public char d() {
            return 'G';
        }

        @Override // pt.p
        public Class getType() {
            return k.class;
        }

        @Override // qt.t
        public void s(pt.o oVar, Appendable appendable, pt.d dVar) {
            appendable.append(k.DANGI.d((Locale) dVar.a(qt.a.f48088c, Locale.ROOT), (v) dVar.a(qt.a.f48092g, v.WIDE)));
        }

        @Override // pt.p
        public boolean z() {
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

        @Override // pt.z
        /* renamed from: b */
        public pt.p a(pt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // pt.z
        /* renamed from: c */
        public pt.p h(pt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // pt.z
        /* renamed from: d */
        public k k(pt.q qVar) {
            return k.DANGI;
        }

        @Override // pt.z
        /* renamed from: e */
        public k r(pt.q qVar) {
            return k.DANGI;
        }

        @Override // pt.z
        /* renamed from: f */
        public k y(pt.q qVar) {
            return k.DANGI;
        }

        @Override // pt.z
        /* renamed from: g */
        public boolean p(pt.q qVar, k kVar) {
            if (kVar == k.DANGI) {
                return true;
            }
            return false;
        }

        @Override // pt.z
        /* renamed from: i */
        public pt.q x(pt.q qVar, k kVar, boolean z10) {
            if (p(qVar, kVar)) {
                return qVar;
            }
            throw new IllegalArgumentException("Invalid Korean era: " + kVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements z {
        private d() {
        }

        private int d(pt.q qVar) {
            return ((f0) qVar.v(f0.f39951z)).f() + 2333;
        }

        @Override // pt.z
        /* renamed from: b */
        public pt.p a(pt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // pt.z
        /* renamed from: c */
        public pt.p h(pt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // pt.z
        /* renamed from: e */
        public Integer k(pt.q qVar) {
            return 1000002332;
        }

        @Override // pt.z
        /* renamed from: f */
        public Integer r(pt.q qVar) {
            return -999997666;
        }

        @Override // pt.z
        /* renamed from: g */
        public Integer y(pt.q qVar) {
            return Integer.valueOf(d(qVar));
        }

        @Override // pt.z
        /* renamed from: i */
        public boolean p(pt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = r(qVar).intValue();
            int intValue2 = k(qVar).intValue();
            if (num.intValue() < intValue || num.intValue() > intValue2) {
                return false;
            }
            return true;
        }

        @Override // pt.z
        /* renamed from: j */
        public pt.q x(pt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                if (p(qVar, num)) {
                    int d10 = d(qVar);
                    net.time4j.e eVar = f0.f39951z;
                    return qVar.E(eVar, (f0) ((f0) qVar.v(eVar)).K(num.intValue() - d10, net.time4j.f.f39929o));
                }
                throw new IllegalArgumentException("Invalid year of era: " + num);
            }
            throw new IllegalArgumentException("Missing year of era.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e extends qt.d {
        private static final long serialVersionUID = -7864513245908399367L;

        private Object readResolve() {
            return k.DANGI.e();
        }

        @Override // pt.p
        public boolean B() {
            return false;
        }

        @Override // pt.e
        protected boolean E() {
            return true;
        }

        @Override // pt.p
        /* renamed from: F */
        public Integer e() {
            return 5332;
        }

        @Override // pt.p
        /* renamed from: G */
        public Integer A() {
            return 3978;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // pt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f39951z)) {
                return null;
            }
            return new d();
        }

        @Override // pt.e, pt.p
        public char d() {
            return 'y';
        }

        @Override // pt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // pt.p
        public boolean z() {
            return true;
        }

        private e() {
            super("YEAR_OF_ERA");
        }
    }

    k() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pt.p a() {
        return this.f39840d;
    }

    public String d(Locale locale, v vVar) {
        return qt.b.c("dangi", locale).b(vVar).f(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public pt.p e() {
        return this.f39841e;
    }
}
