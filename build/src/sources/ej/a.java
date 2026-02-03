package ej;

import ej.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final String f22890a;

    /* renamed from: b  reason: collision with root package name */
    private final String f22891b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22892c;

    /* renamed from: d  reason: collision with root package name */
    private final f f22893d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f22894e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f22895a;

        /* renamed from: b  reason: collision with root package name */
        private String f22896b;

        /* renamed from: c  reason: collision with root package name */
        private String f22897c;

        /* renamed from: d  reason: collision with root package name */
        private f f22898d;

        /* renamed from: e  reason: collision with root package name */
        private d.b f22899e;

        @Override // ej.d.a
        public d a() {
            return new a(this.f22895a, this.f22896b, this.f22897c, this.f22898d, this.f22899e);
        }

        @Override // ej.d.a
        public d.a b(f fVar) {
            this.f22898d = fVar;
            return this;
        }

        @Override // ej.d.a
        public d.a c(String str) {
            this.f22896b = str;
            return this;
        }

        @Override // ej.d.a
        public d.a d(String str) {
            this.f22897c = str;
            return this;
        }

        @Override // ej.d.a
        public d.a e(d.b bVar) {
            this.f22899e = bVar;
            return this;
        }

        @Override // ej.d.a
        public d.a f(String str) {
            this.f22895a = str;
            return this;
        }
    }

    @Override // ej.d
    public f b() {
        return this.f22893d;
    }

    @Override // ej.d
    public String c() {
        return this.f22891b;
    }

    @Override // ej.d
    public String d() {
        return this.f22892c;
    }

    @Override // ej.d
    public d.b e() {
        return this.f22894e;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            String str = this.f22890a;
            if (str != null ? str.equals(dVar.f()) : dVar.f() == null) {
                String str2 = this.f22891b;
                if (str2 != null ? str2.equals(dVar.c()) : dVar.c() == null) {
                    String str3 = this.f22892c;
                    if (str3 != null ? str3.equals(dVar.d()) : dVar.d() == null) {
                        f fVar = this.f22893d;
                        if (fVar != null ? fVar.equals(dVar.b()) : dVar.b() == null) {
                            d.b bVar = this.f22894e;
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

    @Override // ej.d
    public String f() {
        return this.f22890a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f22890a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        String str2 = this.f22891b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        String str3 = this.f22892c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 ^ hashCode3) * 1000003;
        f fVar = this.f22893d;
        if (fVar == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = fVar.hashCode();
        }
        int i14 = (i13 ^ hashCode4) * 1000003;
        d.b bVar = this.f22894e;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i14 ^ i10;
    }

    public String toString() {
        return "InstallationResponse{uri=" + this.f22890a + ", fid=" + this.f22891b + ", refreshToken=" + this.f22892c + ", authToken=" + this.f22893d + ", responseCode=" + this.f22894e + "}";
    }

    private a(String str, String str2, String str3, f fVar, d.b bVar) {
        this.f22890a = str;
        this.f22891b = str2;
        this.f22892c = str3;
        this.f22893d = fVar;
        this.f22894e = bVar;
    }
}
