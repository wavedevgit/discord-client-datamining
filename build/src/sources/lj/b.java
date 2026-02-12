package lj;

import lj.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f35867a;

    /* renamed from: b  reason: collision with root package name */
    private final long f35868b;

    /* renamed from: c  reason: collision with root package name */
    private final f.b f35869c;

    /* renamed from: lj.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0493b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private String f35870a;

        /* renamed from: b  reason: collision with root package name */
        private Long f35871b;

        /* renamed from: c  reason: collision with root package name */
        private f.b f35872c;

        @Override // lj.f.a
        public f a() {
            String str = "";
            if (this.f35871b == null) {
                str = " tokenExpirationTimestamp";
            }
            if (str.isEmpty()) {
                return new b(this.f35870a, this.f35871b.longValue(), this.f35872c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // lj.f.a
        public f.a b(f.b bVar) {
            this.f35872c = bVar;
            return this;
        }

        @Override // lj.f.a
        public f.a c(String str) {
            this.f35870a = str;
            return this;
        }

        @Override // lj.f.a
        public f.a d(long j10) {
            this.f35871b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // lj.f
    public f.b b() {
        return this.f35869c;
    }

    @Override // lj.f
    public String c() {
        return this.f35867a;
    }

    @Override // lj.f
    public long d() {
        return this.f35868b;
    }

    public boolean equals(Object obj) {
        f.b bVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            String str = this.f35867a;
            if (str != null ? str.equals(fVar.c()) : fVar.c() == null) {
                if (this.f35868b == fVar.d() && ((bVar = this.f35869c) != null ? bVar.equals(fVar.b()) : fVar.b() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f35867a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f35868b;
        int i11 = (((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003;
        f.b bVar = this.f35869c;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "TokenResult{token=" + this.f35867a + ", tokenExpirationTimestamp=" + this.f35868b + ", responseCode=" + this.f35869c + "}";
    }

    private b(String str, long j10, f.b bVar) {
        this.f35867a = str;
        this.f35868b = j10;
        this.f35869c = bVar;
    }
}
