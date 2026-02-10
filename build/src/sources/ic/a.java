package ic;

import ic.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f27841b;

    /* renamed from: c  reason: collision with root package name */
    private final int f27842c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27843d;

    /* renamed from: e  reason: collision with root package name */
    private final long f27844e;

    /* renamed from: f  reason: collision with root package name */
    private final int f27845f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f27846a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f27847b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f27848c;

        /* renamed from: d  reason: collision with root package name */
        private Long f27849d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f27850e;

        @Override // ic.e.a
        e a() {
            String str = "";
            if (this.f27846a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f27847b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f27848c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f27849d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f27850e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f27846a.longValue(), this.f27847b.intValue(), this.f27848c.intValue(), this.f27849d.longValue(), this.f27850e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ic.e.a
        e.a b(int i10) {
            this.f27848c = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a c(long j10) {
            this.f27849d = Long.valueOf(j10);
            return this;
        }

        @Override // ic.e.a
        e.a d(int i10) {
            this.f27847b = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a e(int i10) {
            this.f27850e = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a f(long j10) {
            this.f27846a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // ic.e
    int b() {
        return this.f27843d;
    }

    @Override // ic.e
    long c() {
        return this.f27844e;
    }

    @Override // ic.e
    int d() {
        return this.f27842c;
    }

    @Override // ic.e
    int e() {
        return this.f27845f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f27841b == eVar.f() && this.f27842c == eVar.d() && this.f27843d == eVar.b() && this.f27844e == eVar.c() && this.f27845f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // ic.e
    long f() {
        return this.f27841b;
    }

    public int hashCode() {
        long j10 = this.f27841b;
        long j11 = this.f27844e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f27842c) * 1000003) ^ this.f27843d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f27845f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f27841b + ", loadBatchSize=" + this.f27842c + ", criticalSectionEnterTimeoutMs=" + this.f27843d + ", eventCleanUpAge=" + this.f27844e + ", maxBlobByteSizePerRow=" + this.f27845f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f27841b = j10;
        this.f27842c = i10;
        this.f27843d = i11;
        this.f27844e = j11;
        this.f27845f = i12;
    }
}
