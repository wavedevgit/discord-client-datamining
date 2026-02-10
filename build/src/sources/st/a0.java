package st;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum a0 implements p {
    UTC(2441317),
    UNIX(2440587),
    MODIFIED_JULIAN_DATE(2400000),
    EXCEL(2415019),
    ANSI(2305812),
    RATA_DIE(1721424),
    JULIAN_DAY_NUMBER(-1),
    LILIAN_DAY_NUMBER(2299159);
    
    private final int offset;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final a0 f50368d;

        /* renamed from: e  reason: collision with root package name */
        private final k f50369e;

        a(a0 a0Var, k kVar) {
            this.f50368d = a0Var;
            this.f50369e = kVar;
        }

        @Override // st.z
        /* renamed from: b */
        public p a(q qVar) {
            return null;
        }

        @Override // st.z
        /* renamed from: c */
        public p g(q qVar) {
            return null;
        }

        @Override // st.z
        /* renamed from: d */
        public Long h(q qVar) {
            return Long.valueOf(this.f50368d.k(this.f50369e.a() + 730, a0.UNIX));
        }

        @Override // st.z
        /* renamed from: e */
        public Long m(q qVar) {
            return Long.valueOf(this.f50368d.k(this.f50369e.d() + 730, a0.UNIX));
        }

        @Override // st.z
        /* renamed from: f */
        public Long y(q qVar) {
            return Long.valueOf(this.f50368d.k(this.f50369e.c(qVar) + 730, a0.UNIX));
        }

        @Override // st.z
        /* renamed from: j */
        public boolean k(q qVar, Long l10) {
            if (l10 == null) {
                return false;
            }
            try {
                long m10 = qt.c.m(a0.UNIX.k(l10.longValue(), this.f50368d), 730L);
                if (m10 > this.f50369e.a()) {
                    return false;
                }
                if (m10 < this.f50369e.d()) {
                    return false;
                }
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // st.z
        /* renamed from: l */
        public q s(q qVar, Long l10, boolean z10) {
            if (l10 != null) {
                return (q) this.f50369e.b(qt.c.m(a0.UNIX.k(l10.longValue(), this.f50368d), 730L));
            }
            throw new IllegalArgumentException("Missing epoch day value.");
        }
    }

    a0(int i10) {
        this.offset = i10 - 2441317;
    }

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        return ((Long) oVar.t(this)).compareTo((Long) oVar2.t(this));
    }

    @Override // st.p
    public char d() {
        if (this == MODIFIED_JULIAN_DATE) {
            return 'g';
        }
        return (char) 0;
    }

    @Override // st.p
    public boolean f() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z g(k kVar) {
        return new a(this, kVar);
    }

    @Override // st.p
    public Class getType() {
        return Long.class;
    }

    @Override // st.p
    /* renamed from: h */
    public Long e() {
        return Long.valueOf(365241779741L - this.offset);
    }

    @Override // st.p
    /* renamed from: i */
    public Long B() {
        return Long.valueOf((-365243219892L) - this.offset);
    }

    public long k(long j10, a0 a0Var) {
        try {
            return qt.c.f(j10, a0Var.offset - this.offset);
        } catch (ArithmeticException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
