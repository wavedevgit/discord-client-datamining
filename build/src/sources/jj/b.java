package jj;

import jj.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f30210a;

    /* renamed from: b  reason: collision with root package name */
    private final long f30211b;

    /* renamed from: c  reason: collision with root package name */
    private final f.b f30212c;

    /* renamed from: jj.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0453b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private String f30213a;

        /* renamed from: b  reason: collision with root package name */
        private Long f30214b;

        /* renamed from: c  reason: collision with root package name */
        private f.b f30215c;

        @Override // jj.f.a
        public f a() {
            String str = "";
            if (this.f30214b == null) {
                str = " tokenExpirationTimestamp";
            }
            if (str.isEmpty()) {
                return new b(this.f30213a, this.f30214b.longValue(), this.f30215c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // jj.f.a
        public f.a b(f.b bVar) {
            this.f30215c = bVar;
            return this;
        }

        @Override // jj.f.a
        public f.a c(String str) {
            this.f30213a = str;
            return this;
        }

        @Override // jj.f.a
        public f.a d(long j10) {
            this.f30214b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // jj.f
    public f.b b() {
        return this.f30212c;
    }

    @Override // jj.f
    public String c() {
        return this.f30210a;
    }

    @Override // jj.f
    public long d() {
        return this.f30211b;
    }

    public boolean equals(Object obj) {
        f.b bVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            String str = this.f30210a;
            if (str != null ? str.equals(fVar.c()) : fVar.c() == null) {
                if (this.f30211b == fVar.d() && ((bVar = this.f30212c) != null ? bVar.equals(fVar.b()) : fVar.b() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f30210a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f30211b;
        int i11 = (((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003;
        f.b bVar = this.f30212c;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "TokenResult{token=" + this.f30210a + ", tokenExpirationTimestamp=" + this.f30211b + ", responseCode=" + this.f30212c + "}";
    }

    private b(String str, long j10, f.b bVar) {
        this.f30210a = str;
        this.f30211b = j10;
        this.f30212c = bVar;
    }
}
