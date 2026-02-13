package lj;

import lj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final String f36425a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36426b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36427c;

    /* renamed from: d  reason: collision with root package name */
    private final f f36428d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f36429e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f36430a;

        /* renamed from: b  reason: collision with root package name */
        private String f36431b;

        /* renamed from: c  reason: collision with root package name */
        private String f36432c;

        /* renamed from: d  reason: collision with root package name */
        private f f36433d;

        /* renamed from: e  reason: collision with root package name */
        private d.b f36434e;

        @Override // lj.d.a
        public d a() {
            return new a(this.f36430a, this.f36431b, this.f36432c, this.f36433d, this.f36434e);
        }

        @Override // lj.d.a
        public d.a b(f fVar) {
            this.f36433d = fVar;
            return this;
        }

        @Override // lj.d.a
        public d.a c(String str) {
            this.f36431b = str;
            return this;
        }

        @Override // lj.d.a
        public d.a d(String str) {
            this.f36432c = str;
            return this;
        }

        @Override // lj.d.a
        public d.a e(d.b bVar) {
            this.f36434e = bVar;
            return this;
        }

        @Override // lj.d.a
        public d.a f(String str) {
            this.f36430a = str;
            return this;
        }
    }

    @Override // lj.d
    public f b() {
        return this.f36428d;
    }

    @Override // lj.d
    public String c() {
        return this.f36426b;
    }

    @Override // lj.d
    public String d() {
        return this.f36427c;
    }

    @Override // lj.d
    public d.b e() {
        return this.f36429e;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            String str = this.f36425a;
            if (str != null ? str.equals(dVar.f()) : dVar.f() == null) {
                String str2 = this.f36426b;
                if (str2 != null ? str2.equals(dVar.c()) : dVar.c() == null) {
                    String str3 = this.f36427c;
                    if (str3 != null ? str3.equals(dVar.d()) : dVar.d() == null) {
                        f fVar = this.f36428d;
                        if (fVar != null ? fVar.equals(dVar.b()) : dVar.b() == null) {
                            d.b bVar = this.f36429e;
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
        return this.f36425a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f36425a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        String str2 = this.f36426b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        String str3 = this.f36427c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 ^ hashCode3) * 1000003;
        f fVar = this.f36428d;
        if (fVar == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = fVar.hashCode();
        }
        int i14 = (i13 ^ hashCode4) * 1000003;
        d.b bVar = this.f36429e;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i14 ^ i10;
    }

    public String toString() {
        return "InstallationResponse{uri=" + this.f36425a + ", fid=" + this.f36426b + ", refreshToken=" + this.f36427c + ", authToken=" + this.f36428d + ", responseCode=" + this.f36429e + "}";
    }

    private a(String str, String str2, String str3, f fVar, d.b bVar) {
        this.f36425a = str;
        this.f36426b = str2;
        this.f36427c = str3;
        this.f36428d = fVar;
        this.f36429e = bVar;
    }
}
