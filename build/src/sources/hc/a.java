package hc;

import hc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f25732b;

    /* renamed from: c  reason: collision with root package name */
    private final int f25733c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25734d;

    /* renamed from: e  reason: collision with root package name */
    private final long f25735e;

    /* renamed from: f  reason: collision with root package name */
    private final int f25736f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f25737a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f25738b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f25739c;

        /* renamed from: d  reason: collision with root package name */
        private Long f25740d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f25741e;

        @Override // hc.e.a
        e a() {
            String str = "";
            if (this.f25737a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f25738b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f25739c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f25740d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f25741e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f25737a.longValue(), this.f25738b.intValue(), this.f25739c.intValue(), this.f25740d.longValue(), this.f25741e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.e.a
        e.a b(int i10) {
            this.f25739c = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a c(long j10) {
            this.f25740d = Long.valueOf(j10);
            return this;
        }

        @Override // hc.e.a
        e.a d(int i10) {
            this.f25738b = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a e(int i10) {
            this.f25741e = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a f(long j10) {
            this.f25737a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.e
    int b() {
        return this.f25734d;
    }

    @Override // hc.e
    long c() {
        return this.f25735e;
    }

    @Override // hc.e
    int d() {
        return this.f25733c;
    }

    @Override // hc.e
    int e() {
        return this.f25736f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f25732b == eVar.f() && this.f25733c == eVar.d() && this.f25734d == eVar.b() && this.f25735e == eVar.c() && this.f25736f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.e
    long f() {
        return this.f25732b;
    }

    public int hashCode() {
        long j10 = this.f25732b;
        long j11 = this.f25735e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f25733c) * 1000003) ^ this.f25734d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f25736f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f25732b + ", loadBatchSize=" + this.f25733c + ", criticalSectionEnterTimeoutMs=" + this.f25734d + ", eventCleanUpAge=" + this.f25735e + ", maxBlobByteSizePerRow=" + this.f25736f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f25732b = j10;
        this.f25733c = i10;
        this.f25734d = i11;
        this.f25735e = j11;
        this.f25736f = i12;
    }
}
