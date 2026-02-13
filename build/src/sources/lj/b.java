package lj;

import lj.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f36435a;

    /* renamed from: b  reason: collision with root package name */
    private final long f36436b;

    /* renamed from: c  reason: collision with root package name */
    private final f.b f36437c;

    /* renamed from: lj.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0493b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private String f36438a;

        /* renamed from: b  reason: collision with root package name */
        private Long f36439b;

        /* renamed from: c  reason: collision with root package name */
        private f.b f36440c;

        @Override // lj.f.a
        public f a() {
            String str = "";
            if (this.f36439b == null) {
                str = " tokenExpirationTimestamp";
            }
            if (str.isEmpty()) {
                return new b(this.f36438a, this.f36439b.longValue(), this.f36440c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // lj.f.a
        public f.a b(f.b bVar) {
            this.f36440c = bVar;
            return this;
        }

        @Override // lj.f.a
        public f.a c(String str) {
            this.f36438a = str;
            return this;
        }

        @Override // lj.f.a
        public f.a d(long j10) {
            this.f36439b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // lj.f
    public f.b b() {
        return this.f36437c;
    }

    @Override // lj.f
    public String c() {
        return this.f36435a;
    }

    @Override // lj.f
    public long d() {
        return this.f36436b;
    }

    public boolean equals(Object obj) {
        f.b bVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            String str = this.f36435a;
            if (str != null ? str.equals(fVar.c()) : fVar.c() == null) {
                if (this.f36436b == fVar.d() && ((bVar = this.f36437c) != null ? bVar.equals(fVar.b()) : fVar.b() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f36435a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f36436b;
        int i11 = (((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003;
        f.b bVar = this.f36437c;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "TokenResult{token=" + this.f36435a + ", tokenExpirationTimestamp=" + this.f36436b + ", responseCode=" + this.f36437c + "}";
    }

    private b(String str, long j10, f.b bVar) {
        this.f36435a = str;
        this.f36436b = j10;
        this.f36437c = bVar;
    }
}
