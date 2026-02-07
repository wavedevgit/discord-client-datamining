package hc;

import hc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: b  reason: collision with root package name */
    private final long f25908b;

    /* renamed from: c  reason: collision with root package name */
    private final int f25909c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25910d;

    /* renamed from: e  reason: collision with root package name */
    private final long f25911e;

    /* renamed from: f  reason: collision with root package name */
    private final int f25912f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends e.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f25913a;

        /* renamed from: b  reason: collision with root package name */
        private Integer f25914b;

        /* renamed from: c  reason: collision with root package name */
        private Integer f25915c;

        /* renamed from: d  reason: collision with root package name */
        private Long f25916d;

        /* renamed from: e  reason: collision with root package name */
        private Integer f25917e;

        @Override // hc.e.a
        e a() {
            String str = "";
            if (this.f25913a == null) {
                str = " maxStorageSizeInBytes";
            }
            if (this.f25914b == null) {
                str = str + " loadBatchSize";
            }
            if (this.f25915c == null) {
                str = str + " criticalSectionEnterTimeoutMs";
            }
            if (this.f25916d == null) {
                str = str + " eventCleanUpAge";
            }
            if (this.f25917e == null) {
                str = str + " maxBlobByteSizePerRow";
            }
            if (str.isEmpty()) {
                return new a(this.f25913a.longValue(), this.f25914b.intValue(), this.f25915c.intValue(), this.f25916d.longValue(), this.f25917e.intValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.e.a
        e.a b(int i10) {
            this.f25915c = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a c(long j10) {
            this.f25916d = Long.valueOf(j10);
            return this;
        }

        @Override // hc.e.a
        e.a d(int i10) {
            this.f25914b = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a e(int i10) {
            this.f25917e = Integer.valueOf(i10);
            return this;
        }

        @Override // hc.e.a
        e.a f(long j10) {
            this.f25913a = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.e
    int b() {
        return this.f25910d;
    }

    @Override // hc.e
    long c() {
        return this.f25911e;
    }

    @Override // hc.e
    int d() {
        return this.f25909c;
    }

    @Override // hc.e
    int e() {
        return this.f25912f;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            e eVar = (e) obj;
            if (this.f25908b == eVar.f() && this.f25909c == eVar.d() && this.f25910d == eVar.b() && this.f25911e == eVar.c() && this.f25912f == eVar.e()) {
                return true;
            }
        }
        return false;
    }

    @Override // hc.e
    long f() {
        return this.f25908b;
    }

    public int hashCode() {
        long j10 = this.f25908b;
        long j11 = this.f25911e;
        return ((((((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ this.f25909c) * 1000003) ^ this.f25910d) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f25912f;
    }

    public String toString() {
        return "EventStoreConfig{maxStorageSizeInBytes=" + this.f25908b + ", loadBatchSize=" + this.f25909c + ", criticalSectionEnterTimeoutMs=" + this.f25910d + ", eventCleanUpAge=" + this.f25911e + ", maxBlobByteSizePerRow=" + this.f25912f + "}";
    }

    private a(long j10, int i10, int i11, long j11, int i12) {
        this.f25908b = j10;
        this.f25909c = i10;
        this.f25910d = i11;
        this.f25911e = j11;
        this.f25912f = i12;
    }
}
