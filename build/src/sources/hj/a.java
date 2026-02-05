package hj;

import hj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final String f25893a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25894b;

    /* renamed from: c  reason: collision with root package name */
    private final String f25895c;

    /* renamed from: d  reason: collision with root package name */
    private final f f25896d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f25897e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f25898a;

        /* renamed from: b  reason: collision with root package name */
        private String f25899b;

        /* renamed from: c  reason: collision with root package name */
        private String f25900c;

        /* renamed from: d  reason: collision with root package name */
        private f f25901d;

        /* renamed from: e  reason: collision with root package name */
        private d.b f25902e;

        @Override // hj.d.a
        public d a() {
            return new a(this.f25898a, this.f25899b, this.f25900c, this.f25901d, this.f25902e);
        }

        @Override // hj.d.a
        public d.a b(f fVar) {
            this.f25901d = fVar;
            return this;
        }

        @Override // hj.d.a
        public d.a c(String str) {
            this.f25899b = str;
            return this;
        }

        @Override // hj.d.a
        public d.a d(String str) {
            this.f25900c = str;
            return this;
        }

        @Override // hj.d.a
        public d.a e(d.b bVar) {
            this.f25902e = bVar;
            return this;
        }

        @Override // hj.d.a
        public d.a f(String str) {
            this.f25898a = str;
            return this;
        }
    }

    @Override // hj.d
    public f b() {
        return this.f25896d;
    }

    @Override // hj.d
    public String c() {
        return this.f25894b;
    }

    @Override // hj.d
    public String d() {
        return this.f25895c;
    }

    @Override // hj.d
    public d.b e() {
        return this.f25897e;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            String str = this.f25893a;
            if (str != null ? str.equals(dVar.f()) : dVar.f() == null) {
                String str2 = this.f25894b;
                if (str2 != null ? str2.equals(dVar.c()) : dVar.c() == null) {
                    String str3 = this.f25895c;
                    if (str3 != null ? str3.equals(dVar.d()) : dVar.d() == null) {
                        f fVar = this.f25896d;
                        if (fVar != null ? fVar.equals(dVar.b()) : dVar.b() == null) {
                            d.b bVar = this.f25897e;
                            if (bVar != null ? bVar.equals(dVar.e()) : dVar.e() == null) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    @Override // hj.d
    public String f() {
        return this.f25893a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f25893a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        String str2 = this.f25894b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        String str3 = this.f25895c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 ^ hashCode3) * 1000003;
        f fVar = this.f25896d;
        if (fVar == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = fVar.hashCode();
        }
        int i14 = (i13 ^ hashCode4) * 1000003;
        d.b bVar = this.f25897e;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i14 ^ i10;
    }

    public String toString() {
        return "InstallationResponse{uri=" + this.f25893a + ", fid=" + this.f25894b + ", refreshToken=" + this.f25895c + ", authToken=" + this.f25896d + ", responseCode=" + this.f25897e + "}";
    }

    private a(String str, String str2, String str3, f fVar, d.b bVar) {
        this.f25893a = str;
        this.f25894b = str2;
        this.f25895c = str3;
        this.f25896d = fVar;
        this.f25897e = bVar;
    }
}
