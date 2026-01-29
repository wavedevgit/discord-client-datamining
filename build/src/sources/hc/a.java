package hc;

import hc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f27417b;

    /* renamed from: c  reason: collision with root package name */
    private final int f27418c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27419d;

    /* renamed from: e  reason: collision with root package name */
    private final long f27420e;

    /* renamed from: f  reason: collision with root package name */
    private final int f27421f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f27422a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f27423b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f27424c;

        /* renamed from: d  reason: collision with root package name */
        private Long f27425d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f27426e;

        @Override // hc.e.a
        e a() {
            String str = "";
            if (this.f27422a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f27423b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f27424c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f27425d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f27426e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f27422a.longValue(), this.f27423b.intValue(), this.f27424c.intValue(), this.f27425d.longValue(), this.f27426e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.e.a
        e.a b(int i10) {
            this.f27424c = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a c(long j10) {
            this.f27425d = Long.valueOf(j10);
            return this;
        }

        @Override // hc.e.a
        e.a d(int i10) {
            this.f27423b = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a e(int i10) {
            this.f27426e = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a f(long j10) {
            this.f27422a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.e
    int b() {
        return this.f27419d;
    }

    @Override // hc.e
    long c() {
        return this.f27420e;
    }

    @Override // hc.e
    int d() {
        return this.f27418c;
    }

    @Override // hc.e
    int e() {
        return this.f27421f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f27417b == eVar.f() && this.f27418c == eVar.d() && this.f27419d == eVar.b() && this.f27420e == eVar.c() && this.f27421f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.e
    long f() {
        return this.f27417b;
    }

    public int hashCode() {
        long j10 = this.f27417b;
        long j11 = this.f27420e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f27418c) * 1000003) ^ this.f27419d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f27421f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f27417b + ", loadBatchSize=" + this.f27418c + ", criticalSectionEnterTimeoutMs=" + this.f27419d + ", eventCleanUpAge=" + this.f27420e + ", maxBlobByteSizePerRow=" + this.f27421f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f27417b = j10;
        this.f27418c = i10;
        this.f27419d = i11;
        this.f27420e = j11;
        this.f27421f = i12;
    }
}
