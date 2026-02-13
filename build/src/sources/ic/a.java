package ic;

import ic.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f28410b;

    /* renamed from: c  reason: collision with root package name */
    private final int f28411c;

    /* renamed from: d  reason: collision with root package name */
    private final int f28412d;

    /* renamed from: e  reason: collision with root package name */
    private final long f28413e;

    /* renamed from: f  reason: collision with root package name */
    private final int f28414f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f28415a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f28416b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f28417c;

        /* renamed from: d  reason: collision with root package name */
        private Long f28418d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f28419e;

        @Override // ic.e.a
        e a() {
            String str = "";
            if (this.f28415a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f28416b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f28417c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f28418d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f28419e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f28415a.longValue(), this.f28416b.intValue(), this.f28417c.intValue(), this.f28418d.longValue(), this.f28419e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ic.e.a
        e.a b(int i10) {
            this.f28417c = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a c(long j10) {
            this.f28418d = Long.valueOf(j10);
            return this;
        }

        @Override // ic.e.a
        e.a d(int i10) {
            this.f28416b = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a e(int i10) {
            this.f28419e = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a f(long j10) {
            this.f28415a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // ic.e
    int b() {
        return this.f28412d;
    }

    @Override // ic.e
    long c() {
        return this.f28413e;
    }

    @Override // ic.e
    int d() {
        return this.f28411c;
    }

    @Override // ic.e
    int e() {
        return this.f28414f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f28410b == eVar.f() && this.f28411c == eVar.d() && this.f28412d == eVar.b() && this.f28413e == eVar.c() && this.f28414f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // ic.e
    long f() {
        return this.f28410b;
    }

    public int hashCode() {
        long j10 = this.f28410b;
        long j11 = this.f28413e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f28411c) * 1000003) ^ this.f28412d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f28414f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f28410b + ", loadBatchSize=" + this.f28411c + ", criticalSectionEnterTimeoutMs=" + this.f28412d + ", eventCleanUpAge=" + this.f28413e + ", maxBlobByteSizePerRow=" + this.f28414f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f28410b = j10;
        this.f28411c = i10;
        this.f28412d = i11;
        this.f28413e = j11;
        this.f28414f = i12;
    }
}
