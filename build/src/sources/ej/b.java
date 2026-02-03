package ej;

import ej.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final String f21591a;

    /* renamed from: b  reason: collision with root package name */
    private final long f21592b;

    /* renamed from: c  reason: collision with root package name */
    private final f.b f21593c;

    /* renamed from: ej.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0283b extends f.a {

        /* renamed from: a  reason: collision with root package name */
        private String f21594a;

        /* renamed from: b  reason: collision with root package name */
        private Long f21595b;

        /* renamed from: c  reason: collision with root package name */
        private f.b f21596c;

        @Override // ej.f.a
        public f a() {
            String str = "";
            if (this.f21595b == null) {
                str = " tokenExpirationTimestamp";
            }
            if (str.isEmpty()) {
                return new b(this.f21594a, this.f21595b.longValue(), this.f21596c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ej.f.a
        public f.a b(f.b bVar) {
            this.f21596c = bVar;
            return this;
        }

        @Override // ej.f.a
        public f.a c(String str) {
            this.f21594a = str;
            return this;
        }

        @Override // ej.f.a
        public f.a d(long j10) {
            this.f21595b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // ej.f
    public f.b b() {
        return this.f21593c;
    }

    @Override // ej.f
    public String c() {
        return this.f21591a;
    }

    @Override // ej.f
    public long d() {
        return this.f21592b;
    }

    public boolean equals(Object obj) {
        f.b bVar;
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            String str = this.f21591a;
            if (str != null ? str.equals(fVar.c()) : fVar.c() == null) {
                if (this.f21592b == fVar.d() && ((bVar = this.f21593c) != null ? bVar.equals(fVar.b()) : fVar.b() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f21591a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f21592b;
        int i11 = (((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003;
        f.b bVar = this.f21593c;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "TokenResult{token=" + this.f21591a + ", tokenExpirationTimestamp=" + this.f21592b + ", responseCode=" + this.f21593c + "}";
    }

    private b(String str, long j10, f.b bVar) {
        this.f21591a = str;
        this.f21592b = j10;
        this.f21593c = bVar;
    }
}
