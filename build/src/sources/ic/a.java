package ic;

import ic.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f27842b;

    /* renamed from: c  reason: collision with root package name */
    private final int f27843c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27844d;

    /* renamed from: e  reason: collision with root package name */
    private final long f27845e;

    /* renamed from: f  reason: collision with root package name */
    private final int f27846f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f27847a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f27848b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f27849c;

        /* renamed from: d  reason: collision with root package name */
        private Long f27850d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f27851e;

        @Override // ic.e.a
        e a() {
            String str = "";
            if (this.f27847a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f27848b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f27849c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f27850d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f27851e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f27847a.longValue(), this.f27848b.intValue(), this.f27849c.intValue(), this.f27850d.longValue(), this.f27851e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ic.e.a
        e.a b(int i10) {
            this.f27849c = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a c(long j10) {
            this.f27850d = Long.valueOf(j10);
            return this;
        }

        @Override // ic.e.a
        e.a d(int i10) {
            this.f27848b = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a e(int i10) {
            this.f27851e = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a f(long j10) {
            this.f27847a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // ic.e
    int b() {
        return this.f27844d;
    }

    @Override // ic.e
    long c() {
        return this.f27845e;
    }

    @Override // ic.e
    int d() {
        return this.f27843c;
    }

    @Override // ic.e
    int e() {
        return this.f27846f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f27842b == eVar.f() && this.f27843c == eVar.d() && this.f27844d == eVar.b() && this.f27845e == eVar.c() && this.f27846f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // ic.e
    long f() {
        return this.f27842b;
    }

    public int hashCode() {
        long j10 = this.f27842b;
        long j11 = this.f27845e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f27843c) * 1000003) ^ this.f27844d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f27846f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f27842b + ", loadBatchSize=" + this.f27843c + ", criticalSectionEnterTimeoutMs=" + this.f27844d + ", eventCleanUpAge=" + this.f27845e + ", maxBlobByteSizePerRow=" + this.f27846f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f27842b = j10;
        this.f27843c = i10;
        this.f27844d = i11;
        this.f27845e = j11;
        this.f27846f = i12;
    }
}
