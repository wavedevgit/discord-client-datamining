package hc;

import hc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f27606b;

    /* renamed from: c  reason: collision with root package name */
    private final int f27607c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27608d;

    /* renamed from: e  reason: collision with root package name */
    private final long f27609e;

    /* renamed from: f  reason: collision with root package name */
    private final int f27610f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f27611a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f27612b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f27613c;

        /* renamed from: d  reason: collision with root package name */
        private Long f27614d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f27615e;

        @Override // hc.e.a
        e a() {
            String str = "";
            if (this.f27611a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f27612b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f27613c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f27614d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f27615e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f27611a.longValue(), this.f27612b.intValue(), this.f27613c.intValue(), this.f27614d.longValue(), this.f27615e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.e.a
        e.a b(int i10) {
            this.f27613c = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a c(long j10) {
            this.f27614d = Long.valueOf(j10);
            return this;
        }

        @Override // hc.e.a
        e.a d(int i10) {
            this.f27612b = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a e(int i10) {
            this.f27615e = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a f(long j10) {
            this.f27611a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.e
    int b() {
        return this.f27608d;
    }

    @Override // hc.e
    long c() {
        return this.f27609e;
    }

    @Override // hc.e
    int d() {
        return this.f27607c;
    }

    @Override // hc.e
    int e() {
        return this.f27610f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f27606b == eVar.f() && this.f27607c == eVar.d() && this.f27608d == eVar.b() && this.f27609e == eVar.c() && this.f27610f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.e
    long f() {
        return this.f27606b;
    }

    public int hashCode() {
        long j10 = this.f27606b;
        long j11 = this.f27609e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f27607c) * 1000003) ^ this.f27608d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f27610f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f27606b + ", loadBatchSize=" + this.f27607c + ", criticalSectionEnterTimeoutMs=" + this.f27608d + ", eventCleanUpAge=" + this.f27609e + ", maxBlobByteSizePerRow=" + this.f27610f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f27606b = j10;
        this.f27607c = i10;
        this.f27608d = i11;
        this.f27609e = j11;
        this.f27610f = i12;
    }
}
