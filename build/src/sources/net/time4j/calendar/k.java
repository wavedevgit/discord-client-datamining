package net.time4j.calendar;

import java.text.ParsePosition;
import java.util.Locale;
import mt.x;
import mt.z;
import net.time4j.f0;
import nt.t;
import nt.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum k implements mt.i {
    DANGI;
    

    /* renamed from: d  reason: collision with root package name */
    private final transient mt.p f40380d = new b();

    /* renamed from: e  reason: collision with root package name */
    private final transient mt.p f40381e = new e();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b extends nt.d implements t {
        private static final long serialVersionUID = -5179188137244162427L;

        private Object readResolve() {
            return k.DANGI.a();
        }

        @Override // mt.p
        public boolean C() {
            return false;
        }

        @Override // mt.e
        protected boolean E() {
            return true;
        }

        @Override // mt.p
        /* renamed from: F */
        public k f() {
            return k.DANGI;
        }

        @Override // mt.p
        /* renamed from: G */
        public k A() {
            return k.DANGI;
        }

        @Override // nt.t
        /* renamed from: H */
        public k j(CharSequence charSequence, ParsePosition parsePosition, mt.d dVar) {
            Locale locale = (Locale) dVar.b(nt.a.f42028c, Locale.ROOT);
            boolean booleanValue = ((Boolean) dVar.b(nt.a.f42034i, Boolean.TRUE)).booleanValue();
            boolean booleanValue2 = ((Boolean) dVar.b(nt.a.f42035j, Boolean.FALSE)).booleanValue();
            int index = parsePosition.getIndex();
            k kVar = k.DANGI;
            String d10 = kVar.d(locale, (v) dVar.b(nt.a.f42032g, v.WIDE));
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
        @Override // mt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f40491z)) {
                return null;
            }
            return new c();
        }

        @Override // mt.e, mt.p
        public char d() {
            return 'G';
        }

        @Override // mt.p
        public Class getType() {
            return k.class;
        }

        @Override // nt.t
        public void s(mt.o oVar, Appendable appendable, mt.d dVar) {
            appendable.append(k.DANGI.d((Locale) dVar.b(nt.a.f42028c, Locale.ROOT), (v) dVar.b(nt.a.f42032g, v.WIDE)));
        }

        @Override // mt.p
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

        @Override // mt.z
        /* renamed from: b */
        public mt.p a(mt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p h(mt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // mt.z
        /* renamed from: d */
        public k l(mt.q qVar) {
            return k.DANGI;
        }

        @Override // mt.z
        /* renamed from: e */
        public k r(mt.q qVar) {
            return k.DANGI;
        }

        @Override // mt.z
        /* renamed from: f */
        public k z(mt.q qVar) {
            return k.DANGI;
        }

        @Override // mt.z
        /* renamed from: g */
        public boolean q(mt.q qVar, k kVar) {
            if (kVar == k.DANGI) {
                return true;
            }
            return false;
        }

        @Override // mt.z
        /* renamed from: i */
        public mt.q x(mt.q qVar, k kVar, boolean z10) {
            if (q(qVar, kVar)) {
                return qVar;
            }
            throw new IllegalArgumentException("Invalid Korean era: " + kVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class d implements z {
        private d() {
        }

        private int d(mt.q qVar) {
            return ((f0) qVar.o(f0.f40491z)).f() + 2333;
        }

        @Override // mt.z
        /* renamed from: b */
        public mt.p a(mt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p h(mt.q qVar) {
            throw new AbstractMethodError("Never called.");
        }

        @Override // mt.z
        /* renamed from: e */
        public Integer l(mt.q qVar) {
            return 1000002332;
        }

        @Override // mt.z
        /* renamed from: f */
        public Integer r(mt.q qVar) {
            return -999997666;
        }

        @Override // mt.z
        /* renamed from: g */
        public Integer z(mt.q qVar) {
            return Integer.valueOf(d(qVar));
        }

        @Override // mt.z
        /* renamed from: i */
        public boolean q(mt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = r(qVar).intValue();
            int intValue2 = l(qVar).intValue();
            if (num.intValue() < intValue || num.intValue() > intValue2) {
                return false;
            }
            return true;
        }

        @Override // mt.z
        /* renamed from: j */
        public mt.q x(mt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                if (q(qVar, num)) {
                    int d10 = d(qVar);
                    net.time4j.e eVar = f0.f40491z;
                    return qVar.E(eVar, (f0) ((f0) qVar.o(eVar)).K(num.intValue() - d10, net.time4j.f.f40469o));
                }
                throw new IllegalArgumentException("Invalid year of era: " + num);
            }
            throw new IllegalArgumentException("Missing year of era.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e extends nt.d {
        private static final long serialVersionUID = -7864513245908399367L;

        private Object readResolve() {
            return k.DANGI.e();
        }

        @Override // mt.p
        public boolean C() {
            return false;
        }

        @Override // mt.e
        protected boolean E() {
            return true;
        }

        @Override // mt.p
        /* renamed from: F */
        public Integer f() {
            return 5332;
        }

        @Override // mt.p
        /* renamed from: G */
        public Integer A() {
            return 3978;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // mt.e
        public z c(x xVar) {
            if (!xVar.E(f0.f40491z)) {
                return null;
            }
            return new d();
        }

        @Override // mt.e, mt.p
        public char d() {
            return 'y';
        }

        @Override // mt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // mt.p
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
    public mt.p a() {
        return this.f40380d;
    }

    public String d(Locale locale, v vVar) {
        return nt.b.c("dangi", locale).b(vVar).f(this);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public mt.p e() {
        return this.f40381e;
    }
}
