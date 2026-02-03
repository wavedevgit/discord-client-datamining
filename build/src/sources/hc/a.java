package hc;

import hc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f26891b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26892c;

    /* renamed from: d  reason: collision with root package name */
    private final int f26893d;

    /* renamed from: e  reason: collision with root package name */
    private final long f26894e;

    /* renamed from: f  reason: collision with root package name */
    private final int f26895f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f26896a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f26897b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f26898c;

        /* renamed from: d  reason: collision with root package name */
        private Long f26899d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f26900e;

        @Override // hc.e.a
        e a() {
            String str = "";
            if (this.f26896a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f26897b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f26898c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f26899d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f26900e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f26896a.longValue(), this.f26897b.intValue(), this.f26898c.intValue(), this.f26899d.longValue(), this.f26900e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.e.a
        e.a b(int i10) {
            this.f26898c = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a c(long j10) {
            this.f26899d = Long.valueOf(j10);
            return this;
        }

        @Override // hc.e.a
        e.a d(int i10) {
            this.f26897b = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a e(int i10) {
            this.f26900e = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a f(long j10) {
            this.f26896a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.e
    int b() {
        return this.f26893d;
    }

    @Override // hc.e
    long c() {
        return this.f26894e;
    }

    @Override // hc.e
    int d() {
        return this.f26892c;
    }

    @Override // hc.e
    int e() {
        return this.f26895f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f26891b == eVar.f() && this.f26892c == eVar.d() && this.f26893d == eVar.b() && this.f26894e == eVar.c() && this.f26895f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.e
    long f() {
        return this.f26891b;
    }

    public int hashCode() {
        long j10 = this.f26891b;
        long j11 = this.f26894e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f26892c) * 1000003) ^ this.f26893d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f26895f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f26891b + ", loadBatchSize=" + this.f26892c + ", criticalSectionEnterTimeoutMs=" + this.f26893d + ", eventCleanUpAge=" + this.f26894e + ", maxBlobByteSizePerRow=" + this.f26895f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f26891b = j10;
        this.f26892c = i10;
        this.f26893d = i11;
        this.f26894e = j11;
        this.f26895f = i12;
    }
}
