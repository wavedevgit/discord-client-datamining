package net.time4j.calendar;

import java.text.ParsePosition;
import java.util.Locale;
import jt.x;
import jt.z;
import kt.t;
import kt.v;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum k implements jt.i {
    DANGI;
    

    /* renamed from: d  reason: collision with root package name */
    private final transient jt.p f40478d = new b();

    /* renamed from: e  reason: collision with root package name */
    private final transient jt.p f40479e = new e();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b extends kt.d implements t {
        private static final long serialVersionUID = -5179188137244162427L;

        private Object readResolve() {
            return k.DANGI.a();
        }

        @Override // jt.p
        public boolean C() {
            return false;
        }

        @Override // jt.e
        protected boolean E() {
            return true;
        }

        @Override // jt.p
        /* renamed from: F */
        public k e() {
            return k.DANGI;
        }

        @Override // jt.p
        /* renamed from: G */
        public k A() {
            return k.DANGI;
        }

        @Override // kt.t
        /* renamed from: H */
        public k z(CharSequence charSequence, ParsePosition parsePosition, jt.d dVar) {
            Locale locale = (Locale) dVar.b(kt.a.f36546c, Locale.ROOT);
            boolean booleanValue = ((Boolean) dVar.b(kt.a.f36552i, Boolean.TRUE)).booleanValue();
            boolean booleanValue2 = ((Boolean) dVar.b(kt.a.f36553j, Boolean.FALSE)).booleanValue();
            int index = parsePosition.getIndex();
            k kVar = k.DANGI;
            String d10 = kVar.d(locale, (v) dVar.b(kt.a.f36550g, v.WIDE));
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
        @Override // jt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f40589z)) {
                return null;
            }
            return new c();
        }

        @Override // jt.e, jt.p
        public char d() {
            return 'G';
        }

        @Override // jt.p
        public Class getType() {
            return k.class;
        }

        @Override // kt.t
        public void u(jt.o oVar, Appendable appendable, jt.d dVar) {
            appendable.append(k.DANGI.d((Locale) dVar.b(kt.a.f36546c, Locale.ROOT), (v) dVar.b(kt.a.f36550g, v.WIDE)));
        }

        @Override // jt.p
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

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(jt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(jt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // jt.z
        /* renamed from: d */
        public k j(jt.q qVar) {
            return k.DANGI;
        }

        @Override // jt.z
        /* renamed from: e */
        public k p(jt.q qVar) {
            return k.DANGI;
        }

        @Override // jt.z
        /* renamed from: f */
        public k x(jt.q qVar) {
            return k.DANGI;
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(jt.q qVar, k kVar) {
            if (kVar == k.DANGI) {
                return true;
            }
            return false;
        }

        @Override // jt.z
        /* renamed from: i */
        public jt.q w(jt.q qVar, k kVar, boolean z10) {
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

        private int d(jt.q qVar) {
            return ((f0) qVar.p(f0.f40589z)).f() + 2333;
        }

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(jt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(jt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // jt.z
        /* renamed from: e */
        public Integer j(jt.q qVar) {
            return 1000002332;
        }

        @Override // jt.z
        /* renamed from: f */
        public Integer p(jt.q qVar) {
            return -999997666;
        }

        @Override // jt.z
        /* renamed from: g */
        public Integer x(jt.q qVar) {
            return Integer.valueOf(d(qVar));
        }

        @Override // jt.z
        /* renamed from: i */
        public boolean l(jt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = p(qVar).intValue();
            int intValue2 = j(qVar).intValue();
            if (num.intValue() < intValue || num.intValue() > intValue2) {
                return false;
            }
            return true;
        }

        @Override // jt.z
        /* renamed from: m */
        public jt.q w(jt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                if (l(qVar, num)) {
                    int d10 = d(qVar);
                    net.time4j.e eVar = f0.f40589z;
                    return qVar.E(eVar, (f0) ((f0) qVar.p(eVar)).K(num.intValue() - d10, net.time4j.f.f40567o));
                }
                throw new IllegalArgumentException("Invalid year of era: " + num);
            }
            throw new IllegalArgumentException("Missing year of era.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e extends kt.d {
        private static final long serialVersionUID = -7864513245908399367L;

        private Object readResolve() {
            return k.DANGI.e();
        }

        @Override // jt.p
        public boolean C() {
            return false;
        }

        @Override // jt.e
        protected boolean E() {
            return true;
        }

        @Override // jt.p
        /* renamed from: F */
        public Integer e() {
            return 5332;
        }

        @Override // jt.p
        /* renamed from: G */
        public Integer A() {
            return 3978;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // jt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f40589z)) {
                return null;
            }
            return new d();
        }

        @Override // jt.e, jt.p
        public char d() {
            return 'y';
        }

        @Override // jt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // jt.p
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
    public jt.p a() {
        return this.f40478d;
    }

    public String d(Locale locale, v vVar) {
        return kt.b.c("dangi", locale).b(vVar).f(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public jt.p e() {
        return this.f40479e;
    }
}
