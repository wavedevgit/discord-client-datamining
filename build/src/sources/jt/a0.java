package jt;
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
        private final a0 f32751d;

        /* renamed from: e  reason: collision with root package name */
        private final k f32752e;

        a(a0 a0Var, k kVar) {
            this.f32751d = a0Var;
            this.f32752e = kVar;
        }

        @Override // jt.z
        /* renamed from: b */
        public p a(q qVar) {
            return null;
        }

        @Override // jt.z
        /* renamed from: c */
        public p h(q qVar) {
            return null;
        }

        @Override // jt.z
        /* renamed from: d */
        public Long j(q qVar) {
            return Long.valueOf(this.f32751d.l(this.f32752e.a() + 730, a0.UNIX));
        }

        @Override // jt.z
        /* renamed from: e */
        public Long p(q qVar) {
            return Long.valueOf(this.f32751d.l(this.f32752e.d() + 730, a0.UNIX));
        }

        @Override // jt.z
        /* renamed from: f */
        public Long x(q qVar) {
            return Long.valueOf(this.f32751d.l(this.f32752e.c(qVar) + 730, a0.UNIX));
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(q qVar, Long l10) {
            if (l10 == null) {
                return false;
            }
            try {
                long m10 = gt.c.m(a0.UNIX.l(l10.longValue(), this.f32751d), 730L);
                if (m10 > this.f32752e.a()) {
                    return false;
                }
                if (m10 < this.f32752e.d()) {
                    return false;
                }
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // jt.z
        /* renamed from: i */
        public q w(q qVar, Long l10, boolean z10) {
            if (l10 != null) {
                return (q) this.f32752e.b(gt.c.m(a0.UNIX.l(l10.longValue(), this.f32751d), 730L));
            }
            throw new IllegalArgumentException("Missing epoch day value.");
        }
    }

    a0(int i10) {
        this.offset = i10 - 2441317;
    }

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        return ((Long) oVar.p(this)).compareTo((Long) oVar2.p(this));
    }

    @Override // jt.p
    public char d() {
        if (this == MODIFIED_JULIAN_DATE) {
            return 'g';
        }
        return (char) 0;
    }

    @Override // jt.p
    public Class getType() {
        return Long.class;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z h(k kVar) {
        return new a(this, kVar);
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // jt.p
    /* renamed from: j */
    public Long e() {
        return Long.valueOf(365241779741L - this.offset);
    }

    @Override // jt.p
    /* renamed from: k */
    public Long A() {
        return Long.valueOf((-365243219892L) - this.offset);
    }

    public long l(long j10, a0 a0Var) {
        try {
            return gt.c.f(j10, a0Var.offset - this.offset);
        } catch (ArithmeticException e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
