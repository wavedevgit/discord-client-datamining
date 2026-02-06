package hc;

import hc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f25860b;

    /* renamed from: c  reason: collision with root package name */
    private final int f25861c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25862d;

    /* renamed from: e  reason: collision with root package name */
    private final long f25863e;

    /* renamed from: f  reason: collision with root package name */
    private final int f25864f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f25865a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f25866b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f25867c;

        /* renamed from: d  reason: collision with root package name */
        private Long f25868d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f25869e;

        @Override // hc.e.a
        e a() {
            String str = "";
            if (this.f25865a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f25866b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f25867c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f25868d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f25869e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f25865a.longValue(), this.f25866b.intValue(), this.f25867c.intValue(), this.f25868d.longValue(), this.f25869e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.e.a
        e.a b(int i10) {
            this.f25867c = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a c(long j10) {
            this.f25868d = Long.valueOf(j10);
            return this;
        }

        @Override // hc.e.a
        e.a d(int i10) {
            this.f25866b = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a e(int i10) {
            this.f25869e = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a f(long j10) {
            this.f25865a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.e
    int b() {
        return this.f25862d;
    }

    @Override // hc.e
    long c() {
        return this.f25863e;
    }

    @Override // hc.e
    int d() {
        return this.f25861c;
    }

    @Override // hc.e
    int e() {
        return this.f25864f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f25860b == eVar.f() && this.f25861c == eVar.d() && this.f25862d == eVar.b() && this.f25863e == eVar.c() && this.f25864f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.e
    long f() {
        return this.f25860b;
    }

    public int hashCode() {
        long j10 = this.f25860b;
        long j11 = this.f25863e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f25861c) * 1000003) ^ this.f25862d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f25864f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f25860b + ", loadBatchSize=" + this.f25861c + ", criticalSectionEnterTimeoutMs=" + this.f25862d + ", eventCleanUpAge=" + this.f25863e + ", maxBlobByteSizePerRow=" + this.f25864f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f25860b = j10;
        this.f25861c = i10;
        this.f25862d = i11;
        this.f25863e = j11;
        this.f25864f = i12;
    }
}
