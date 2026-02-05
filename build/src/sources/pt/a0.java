package pt;
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
        private final a0 f46594d;

        /* renamed from: e  reason: collision with root package name */
        private final k f46595e;

        a(a0 a0Var, k kVar) {
            this.f46594d = a0Var;
            this.f46595e = kVar;
        }

        @Override // pt.z
        /* renamed from: b */
        public p a(q qVar) {
            return null;
        }

        @Override // pt.z
        /* renamed from: c */
        public p h(q qVar) {
            return null;
        }

        @Override // pt.z
        /* renamed from: d */
        public Long k(q qVar) {
            return Long.valueOf(this.f46594d.p(this.f46595e.a() + 730, a0.UNIX));
        }

        @Override // pt.z
        /* renamed from: e */
        public Long r(q qVar) {
            return Long.valueOf(this.f46594d.p(this.f46595e.d() + 730, a0.UNIX));
        }

        @Override // pt.z
        /* renamed from: f */
        public Long y(q qVar) {
            return Long.valueOf(this.f46594d.p(this.f46595e.c(qVar) + 730, a0.UNIX));
        }

        @Override // pt.z
        /* renamed from: g */
        public boolean p(q qVar, Long l10) {
            if (l10 == null) {
                return false;
            }
            try {
                long m10 = nt.c.m(a0.UNIX.p(l10.longValue(), this.f46594d), 730L);
                if (m10 > this.f46595e.a()) {
                    return false;
                }
                if (m10 < this.f46595e.d()) {
                    return false;
                }
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // pt.z
        /* renamed from: i */
        public q x(q qVar, Long l10, boolean z10) {
            if (l10 != null) {
                return (q) this.f46595e.b(nt.c.m(a0.UNIX.p(l10.longValue(), this.f46594d), 730L));
            }
            throw new IllegalArgumentException("Missing epoch day value.");
        }
    }

    a0(int i10) {
        this.offset = i10 - 2441317;
    }

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        return ((Long) oVar.v(this)).compareTo((Long) oVar2.v(this));
    }

    @Override // pt.p
    public char d() {
        if (this == MODIFIED_JULIAN_DATE) {
            return 'g';
        }
        return (char) 0;
    }

    @Override // pt.p
    public Class getType() {
        return Long.class;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z h(k kVar) {
        return new a(this, kVar);
    }

    @Override // pt.p
    /* renamed from: k */
    public Long e() {
        return Long.valueOf(365241779741L - this.offset);
    }

    @Override // pt.p
    public boolean l() {
        return false;
    }

    @Override // pt.p
    /* renamed from: m */
    public Long A() {
        return Long.valueOf((-365243219892L) - this.offset);
    }

    public long p(long j10, a0 a0Var) {
        try {
            return nt.c.f(j10, a0Var.offset - this.offset);
        } catch (ArithmeticException e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
