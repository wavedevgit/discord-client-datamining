package lj;

import lj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final String f35856a;

    /* renamed from: b  reason: collision with root package name */
    private final String f35857b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35858c;

    /* renamed from: d  reason: collision with root package name */
    private final f f35859d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f35860e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f35861a;

        /* renamed from: b  reason: collision with root package name */
        private String f35862b;

        /* renamed from: c  reason: collision with root package name */
        private String f35863c;

        /* renamed from: d  reason: collision with root package name */
        private f f35864d;

        /* renamed from: e  reason: collision with root package name */
        private d.b f35865e;

        @Override // lj.d.a
        public d a() {
            return new a(this.f35861a, this.f35862b, this.f35863c, this.f35864d, this.f35865e);
        }

        @Override // lj.d.a
        public d.a b(f fVar) {
            this.f35864d = fVar;
            return this;
        }

        @Override // lj.d.a
        public d.a c(String str) {
            this.f35862b = str;
            return this;
        }

        @Override // lj.d.a
        public d.a d(String str) {
            this.f35863c = str;
            return this;
        }

        @Override // lj.d.a
        public d.a e(d.b bVar) {
            this.f35865e = bVar;
            return this;
        }

        @Override // lj.d.a
        public d.a f(String str) {
            this.f35861a = str;
            return this;
        }
    }

    @Override // lj.d
    public f b() {
        return this.f35859d;
    }

    @Override // lj.d
    public String c() {
        return this.f35857b;
    }

    @Override // lj.d
    public String d() {
        return this.f35858c;
    }

    @Override // lj.d
    public d.b e() {
        return this.f35860e;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            String str = this.f35856a;
            if (str != null ? str.equals(dVar.f()) : dVar.f() == null) {
                String str2 = this.f35857b;
                if (str2 != null ? str2.equals(dVar.c()) : dVar.c() == null) {
                    String str3 = this.f35858c;
                    if (str3 != null ? str3.equals(dVar.d()) : dVar.d() == null) {
                        f fVar = this.f35859d;
                        if (fVar != null ? fVar.equals(dVar.b()) : dVar.b() == null) {
                            d.b bVar = this.f35860e;
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

    @Override // lj.d
    public String f() {
        return this.f35856a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f35856a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        String str2 = this.f35857b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        String str3 = this.f35858c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 ^ hashCode3) * 1000003;
        f fVar = this.f35859d;
        if (fVar == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = fVar.hashCode();
        }
        int i14 = (i13 ^ hashCode4) * 1000003;
        d.b bVar = this.f35860e;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i14 ^ i10;
    }

    public String toString() {
        return "InstallationResponse{uri=" + this.f35856a + ", fid=" + this.f35857b + ", refreshToken=" + this.f35858c + ", authToken=" + this.f35859d + ", responseCode=" + this.f35860e + "}";
    }

    private a(String str, String str2, String str3, f fVar, d.b bVar) {
        this.f35856a = str;
        this.f35857b = str2;
        this.f35858c = str3;
        this.f35859d = fVar;
        this.f35860e = bVar;
    }
}
