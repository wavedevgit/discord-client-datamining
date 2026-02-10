package jj;

import jj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final String f30200a;

    /* renamed from: b  reason: collision with root package name */
    private final String f30201b;

    /* renamed from: c  reason: collision with root package name */
    private final String f30202c;

    /* renamed from: d  reason: collision with root package name */
    private final f f30203d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f30204e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f30205a;

        /* renamed from: b  reason: collision with root package name */
        private String f30206b;

        /* renamed from: c  reason: collision with root package name */
        private String f30207c;

        /* renamed from: d  reason: collision with root package name */
        private f f30208d;

        /* renamed from: e  reason: collision with root package name */
        private d.b f30209e;

        @Override // jj.d.a
        public d a() {
            return new a(this.f30205a, this.f30206b, this.f30207c, this.f30208d, this.f30209e);
        }

        @Override // jj.d.a
        public d.a b(f fVar) {
            this.f30208d = fVar;
            return this;
        }

        @Override // jj.d.a
        public d.a c(String str) {
            this.f30206b = str;
            return this;
        }

        @Override // jj.d.a
        public d.a d(String str) {
            this.f30207c = str;
            return this;
        }

        @Override // jj.d.a
        public d.a e(d.b bVar) {
            this.f30209e = bVar;
            return this;
        }

        @Override // jj.d.a
        public d.a f(String str) {
            this.f30205a = str;
            return this;
        }
    }

    @Override // jj.d
    public f b() {
        return this.f30203d;
    }

    @Override // jj.d
    public String c() {
        return this.f30201b;
    }

    @Override // jj.d
    public String d() {
        return this.f30202c;
    }

    @Override // jj.d
    public d.b e() {
        return this.f30204e;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            String str = this.f30200a;
            if (str != null ? str.equals(dVar.f()) : dVar.f() == null) {
                String str2 = this.f30201b;
                if (str2 != null ? str2.equals(dVar.c()) : dVar.c() == null) {
                    String str3 = this.f30202c;
                    if (str3 != null ? str3.equals(dVar.d()) : dVar.d() == null) {
                        f fVar = this.f30203d;
                        if (fVar != null ? fVar.equals(dVar.b()) : dVar.b() == null) {
                            d.b bVar = this.f30204e;
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

    @Override // jj.d
    public String f() {
        return this.f30200a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f30200a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        String str2 = this.f30201b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        String str3 = this.f30202c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 ^ hashCode3) * 1000003;
        f fVar = this.f30203d;
        if (fVar == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = fVar.hashCode();
        }
        int i14 = (i13 ^ hashCode4) * 1000003;
        d.b bVar = this.f30204e;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i14 ^ i10;
    }

    public String toString() {
        return "InstallationResponse{uri=" + this.f30200a + ", fid=" + this.f30201b + ", refreshToken=" + this.f30202c + ", authToken=" + this.f30203d + ", responseCode=" + this.f30204e + "}";
    }

    private a(String str, String str2, String str3, f fVar, d.b bVar) {
        this.f30200a = str;
        this.f30201b = str2;
        this.f30202c = str3;
        this.f30203d = fVar;
        this.f30204e = bVar;
    }
}
