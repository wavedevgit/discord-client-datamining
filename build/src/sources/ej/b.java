package ej;

import ej.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f22900a;

    /* renamed from: b  reason: collision with root package name */
    private final long f22901b;

    /* renamed from: c  reason: collision with root package name */
    private final f.b f22902c;

    /* renamed from: ej.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0305b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private String f22903a;

        /* renamed from: b  reason: collision with root package name */
        private Long f22904b;

        /* renamed from: c  reason: collision with root package name */
        private f.b f22905c;

        @Override // ej.f.a
        public f a() {
            String str = "";
            if (this.f22904b == null) {
                str = " tokenExpirationTimestamp";
            }
            if (str.isEmpty()) {
                return new b(this.f22903a, this.f22904b.longValue(), this.f22905c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ej.f.a
        public f.a b(f.b bVar) {
            this.f22905c = bVar;
            return this;
        }

        @Override // ej.f.a
        public f.a c(String str) {
            this.f22903a = str;
            return this;
        }

        @Override // ej.f.a
        public f.a d(long j10) {
            this.f22904b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // ej.f
    public f.b b() {
        return this.f22902c;
    }

    @Override // ej.f
    public String c() {
        return this.f22900a;
    }

    @Override // ej.f
    public long d() {
        return this.f22901b;
    }

    public boolean equals(Object obj) {
        f.b bVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            String str = this.f22900a;
            if (str != null ? str.equals(fVar.c()) : fVar.c() == null) {
                if (this.f22901b == fVar.d() && ((bVar = this.f22902c) != null ? bVar.equals(fVar.b()) : fVar.b() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f22900a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f22901b;
        int i11 = (((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003;
        f.b bVar = this.f22902c;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "TokenResult{token=" + this.f22900a + ", tokenExpirationTimestamp=" + this.f22901b + ", responseCode=" + this.f22902c + "}";
    }

    private b(String str, long j10, f.b bVar) {
        this.f22900a = str;
        this.f22901b = j10;
        this.f22902c = bVar;
    }
}
