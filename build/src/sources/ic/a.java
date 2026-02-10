package ic;

import ic.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f26722b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26723c;

    /* renamed from: d  reason: collision with root package name */
    private final int f26724d;

    /* renamed from: e  reason: collision with root package name */
    private final long f26725e;

    /* renamed from: f  reason: collision with root package name */
    private final int f26726f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f26727a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f26728b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f26729c;

        /* renamed from: d  reason: collision with root package name */
        private Long f26730d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f26731e;

        @Override // ic.e.a
        e a() {
            String str = "";
            if (this.f26727a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f26728b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f26729c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f26730d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f26731e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f26727a.longValue(), this.f26728b.intValue(), this.f26729c.intValue(), this.f26730d.longValue(), this.f26731e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ic.e.a
        e.a b(int i10) {
            this.f26729c = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a c(long j10) {
            this.f26730d = Long.valueOf(j10);
            return this;
        }

        @Override // ic.e.a
        e.a d(int i10) {
            this.f26728b = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a e(int i10) {
            this.f26731e = Integer.valueOf(i10);
            return this;
        }

        @Override // ic.e.a
        e.a f(long j10) {
            this.f26727a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // ic.e
    int b() {
        return this.f26724d;
    }

    @Override // ic.e
    long c() {
        return this.f26725e;
    }

    @Override // ic.e
    int d() {
        return this.f26723c;
    }

    @Override // ic.e
    int e() {
        return this.f26726f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f26722b == eVar.f() && this.f26723c == eVar.d() && this.f26724d == eVar.b() && this.f26725e == eVar.c() && this.f26726f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // ic.e
    long f() {
        return this.f26722b;
    }

    public int hashCode() {
        long j10 = this.f26722b;
        long j11 = this.f26725e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f26723c) * 1000003) ^ this.f26724d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f26726f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f26722b + ", loadBatchSize=" + this.f26723c + ", criticalSectionEnterTimeoutMs=" + this.f26724d + ", eventCleanUpAge=" + this.f26725e + ", maxBlobByteSizePerRow=" + this.f26726f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f26722b = j10;
        this.f26723c = i10;
        this.f26724d = i11;
        this.f26725e = j11;
        this.f26726f = i12;
    }
}
