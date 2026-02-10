package lj;

import lj.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f35866a;

    /* renamed from: b  reason: collision with root package name */
    private final long f35867b;

    /* renamed from: c  reason: collision with root package name */
    private final f.b f35868c;

    /* renamed from: lj.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0493b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private String f35869a;

        /* renamed from: b  reason: collision with root package name */
        private Long f35870b;

        /* renamed from: c  reason: collision with root package name */
        private f.b f35871c;

        @Override // lj.f.a
        public f a() {
            String str = "";
            if (this.f35870b == null) {
                str = " tokenExpirationTimestamp";
            }
            if (str.isEmpty()) {
                return new b(this.f35869a, this.f35870b.longValue(), this.f35871c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // lj.f.a
        public f.a b(f.b bVar) {
            this.f35871c = bVar;
            return this;
        }

        @Override // lj.f.a
        public f.a c(String str) {
            this.f35869a = str;
            return this;
        }

        @Override // lj.f.a
        public f.a d(long j10) {
            this.f35870b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // lj.f
    public f.b b() {
        return this.f35868c;
    }

    @Override // lj.f
    public String c() {
        return this.f35866a;
    }

    @Override // lj.f
    public long d() {
        return this.f35867b;
    }

    public boolean equals(Object obj) {
        f.b bVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            String str = this.f35866a;
            if (str != null ? str.equals(fVar.c()) : fVar.c() == null) {
                if (this.f35867b == fVar.d() && ((bVar = this.f35868c) != null ? bVar.equals(fVar.b()) : fVar.b() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f35866a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f35867b;
        int i11 = (((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003;
        f.b bVar = this.f35868c;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "TokenResult{token=" + this.f35866a + ", tokenExpirationTimestamp=" + this.f35867b + ", responseCode=" + this.f35868c + "}";
    }

    private b(String str, long j10, f.b bVar) {
        this.f35866a = str;
        this.f35867b = j10;
        this.f35868c = bVar;
    }
}
