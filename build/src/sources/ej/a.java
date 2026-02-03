package ej;

import ej.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final String f21581a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21582b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21583c;

    /* renamed from: d  reason: collision with root package name */
    private final f f21584d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f21585e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f21586a;

        /* renamed from: b  reason: collision with root package name */
        private String f21587b;

        /* renamed from: c  reason: collision with root package name */
        private String f21588c;

        /* renamed from: d  reason: collision with root package name */
        private f f21589d;

        /* renamed from: e  reason: collision with root package name */
        private d.b f21590e;

        @Override // ej.d.a
        public d a() {
            return new a(this.f21586a, this.f21587b, this.f21588c, this.f21589d, this.f21590e);
        }

        @Override // ej.d.a
        public d.a b(f fVar) {
            this.f21589d = fVar;
            return this;
        }

        @Override // ej.d.a
        public d.a c(String str) {
            this.f21587b = str;
            return this;
        }

        @Override // ej.d.a
        public d.a d(String str) {
            this.f21588c = str;
            return this;
        }

        @Override // ej.d.a
        public d.a e(d.b bVar) {
            this.f21590e = bVar;
            return this;
        }

        @Override // ej.d.a
        public d.a f(String str) {
            this.f21586a = str;
            return this;
        }
    }

    @Override // ej.d
    public f b() {
        return this.f21584d;
    }

    @Override // ej.d
    public String c() {
        return this.f21582b;
    }

    @Override // ej.d
    public String d() {
        return this.f21583c;
    }

    @Override // ej.d
    public d.b e() {
        return this.f21585e;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            String str = this.f21581a;
            if (str != null ? str.equals(dVar.f()) : dVar.f() == null) {
                String str2 = this.f21582b;
                if (str2 != null ? str2.equals(dVar.c()) : dVar.c() == null) {
                    String str3 = this.f21583c;
                    if (str3 != null ? str3.equals(dVar.d()) : dVar.d() == null) {
                        f fVar = this.f21584d;
                        if (fVar != null ? fVar.equals(dVar.b()) : dVar.b() == null) {
                            d.b bVar = this.f21585e;
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
        return this.f21581a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f21581a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        String str2 = this.f21582b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        String str3 = this.f21583c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 ^ hashCode3) * 1000003;
        f fVar = this.f21584d;
        if (fVar == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = fVar.hashCode();
        }
        int i14 = (i13 ^ hashCode4) * 1000003;
        d.b bVar = this.f21585e;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i14 ^ i10;
    }

    public String toString() {
        return "InstallationResponse{uri=" + this.f21581a + ", fid=" + this.f21582b + ", refreshToken=" + this.f21583c + ", authToken=" + this.f21584d + ", responseCode=" + this.f21585e + "}";
    }

    private a(String str, String str2, String str3, f fVar, d.b bVar) {
        this.f21581a = str;
        this.f21582b = str2;
        this.f21583c = str3;
        this.f21584d = fVar;
        this.f21585e = bVar;
    }
}
