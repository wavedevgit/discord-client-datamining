package ij;

import ij.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f26758a;

    /* renamed from: b  reason: collision with root package name */
    private final long f26759b;

    /* renamed from: c  reason: collision with root package name */
    private final f.b f26760c;

    /* renamed from: ij.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0380b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private String f26761a;

        /* renamed from: b  reason: collision with root package name */
        private Long f26762b;

        /* renamed from: c  reason: collision with root package name */
        private f.b f26763c;

        @Override // ij.f.a
        public f a() {
            String str = "";
            if (this.f26762b == null) {
                str = " tokenExpirationTimestamp";
            }
            if (str.isEmpty()) {
                return new b(this.f26761a, this.f26762b.longValue(), this.f26763c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ij.f.a
        public f.a b(f.b bVar) {
            this.f26763c = bVar;
            return this;
        }

        @Override // ij.f.a
        public f.a c(String str) {
            this.f26761a = str;
            return this;
        }

        @Override // ij.f.a
        public f.a d(long j10) {
            this.f26762b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // ij.f
    public f.b b() {
        return this.f26760c;
    }

    @Override // ij.f
    public String c() {
        return this.f26758a;
    }

    @Override // ij.f
    public long d() {
        return this.f26759b;
    }

    public boolean equals(Object obj) {
        f.b bVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            String str = this.f26758a;
            if (str != null ? str.equals(fVar.c()) : fVar.c() == null) {
                if (this.f26759b == fVar.d() && ((bVar = this.f26760c) != null ? bVar.equals(fVar.b()) : fVar.b() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f26758a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f26759b;
        int i11 = (((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003;
        f.b bVar = this.f26760c;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "TokenResult{token=" + this.f26758a + ", tokenExpirationTimestamp=" + this.f26759b + ", responseCode=" + this.f26760c + "}";
    }

    private b(String str, long j10, f.b bVar) {
        this.f26758a = str;
        this.f26759b = j10;
        this.f26760c = bVar;
    }
}
