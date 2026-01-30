package hc;

import hc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f27433b;

    /* renamed from: c  reason: collision with root package name */
    private final int f27434c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27435d;

    /* renamed from: e  reason: collision with root package name */
    private final long f27436e;

    /* renamed from: f  reason: collision with root package name */
    private final int f27437f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f27438a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f27439b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f27440c;

        /* renamed from: d  reason: collision with root package name */
        private Long f27441d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f27442e;

        @Override // hc.e.a
        e a() {
            String str = "";
            if (this.f27438a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f27439b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f27440c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f27441d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f27442e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f27438a.longValue(), this.f27439b.intValue(), this.f27440c.intValue(), this.f27441d.longValue(), this.f27442e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.e.a
        e.a b(int i10) {
            this.f27440c = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a c(long j10) {
            this.f27441d = Long.valueOf(j10);
            return this;
        }

        @Override // hc.e.a
        e.a d(int i10) {
            this.f27439b = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a e(int i10) {
            this.f27442e = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a f(long j10) {
            this.f27438a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.e
    int b() {
        return this.f27435d;
    }

    @Override // hc.e
    long c() {
        return this.f27436e;
    }

    @Override // hc.e
    int d() {
        return this.f27434c;
    }

    @Override // hc.e
    int e() {
        return this.f27437f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f27433b == eVar.f() && this.f27434c == eVar.d() && this.f27435d == eVar.b() && this.f27436e == eVar.c() && this.f27437f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.e
    long f() {
        return this.f27433b;
    }

    public int hashCode() {
        long j10 = this.f27433b;
        long j11 = this.f27436e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f27434c) * 1000003) ^ this.f27435d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f27437f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f27433b + ", loadBatchSize=" + this.f27434c + ", criticalSectionEnterTimeoutMs=" + this.f27435d + ", eventCleanUpAge=" + this.f27436e + ", maxBlobByteSizePerRow=" + this.f27437f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f27433b = j10;
        this.f27434c = i10;
        this.f27435d = i11;
        this.f27436e = j11;
        this.f27437f = i12;
    }
}
