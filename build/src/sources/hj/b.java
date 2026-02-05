package hj;

import hj.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f25903a;

    /* renamed from: b  reason: collision with root package name */
    private final long f25904b;

    /* renamed from: c  reason: collision with root package name */
    private final f.b f25905c;

    /* renamed from: hj.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0351b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private String f25906a;

        /* renamed from: b  reason: collision with root package name */
        private Long f25907b;

        /* renamed from: c  reason: collision with root package name */
        private f.b f25908c;

        @Override // hj.f.a
        public f a() {
            String str = "";
            if (this.f25907b == null) {
                str = " tokenExpirationTimestamp";
            }
            if (str.isEmpty()) {
                return new b(this.f25906a, this.f25907b.longValue(), this.f25908c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hj.f.a
        public f.a b(f.b bVar) {
            this.f25908c = bVar;
            return this;
        }

        @Override // hj.f.a
        public f.a c(String str) {
            this.f25906a = str;
            return this;
        }

        @Override // hj.f.a
        public f.a d(long j10) {
            this.f25907b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hj.f
    public f.b b() {
        return this.f25905c;
    }

    @Override // hj.f
    public String c() {
        return this.f25903a;
    }

    @Override // hj.f
    public long d() {
        return this.f25904b;
    }

    public boolean equals(Object obj) {
        f.b bVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            String str = this.f25903a;
            if (str != null ? str.equals(fVar.c()) : fVar.c() == null) {
                if (this.f25904b == fVar.d() && ((bVar = this.f25905c) != null ? bVar.equals(fVar.b()) : fVar.b() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f25903a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f25904b;
        int i11 = (((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003;
        f.b bVar = this.f25905c;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "TokenResult{token=" + this.f25903a + ", tokenExpirationTimestamp=" + this.f25904b + ", responseCode=" + this.f25905c + "}";
    }

    private b(String str, long j10, f.b bVar) {
        this.f25903a = str;
        this.f25904b = j10;
        this.f25905c = bVar;
    }
}
