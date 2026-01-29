package ej;

import ej.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final String f22858a;

    /* renamed from: b  reason: collision with root package name */
    private final String f22859b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22860c;

    /* renamed from: d  reason: collision with root package name */
    private final f f22861d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f22862e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f22863a;

        /* renamed from: b  reason: collision with root package name */
        private String f22864b;

        /* renamed from: c  reason: collision with root package name */
        private String f22865c;

        /* renamed from: d  reason: collision with root package name */
        private f f22866d;

        /* renamed from: e  reason: collision with root package name */
        private d.b f22867e;

        @Override // ej.d.a
        public d a() {
            return new a(this.f22863a, this.f22864b, this.f22865c, this.f22866d, this.f22867e);
        }

        @Override // ej.d.a
        public d.a b(f fVar) {
            this.f22866d = fVar;
            return this;
        }

        @Override // ej.d.a
        public d.a c(String str) {
            this.f22864b = str;
            return this;
        }

        @Override // ej.d.a
        public d.a d(String str) {
            this.f22865c = str;
            return this;
        }

        @Override // ej.d.a
        public d.a e(d.b bVar) {
            this.f22867e = bVar;
            return this;
        }

        @Override // ej.d.a
        public d.a f(String str) {
            this.f22863a = str;
            return this;
        }
    }

    @Override // ej.d
    public f b() {
        return this.f22861d;
    }

    @Override // ej.d
    public String c() {
        return this.f22859b;
    }

    @Override // ej.d
    public String d() {
        return this.f22860c;
    }

    @Override // ej.d
    public d.b e() {
        return this.f22862e;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            String str = this.f22858a;
            if (str != null ? str.equals(dVar.f()) : dVar.f() == null) {
                String str2 = this.f22859b;
                if (str2 != null ? str2.equals(dVar.c()) : dVar.c() == null) {
                    String str3 = this.f22860c;
                    if (str3 != null ? str3.equals(dVar.d()) : dVar.d() == null) {
                        f fVar = this.f22861d;
                        if (fVar != null ? fVar.equals(dVar.b()) : dVar.b() == null) {
                            d.b bVar = this.f22862e;
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
        return this.f22858a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f22858a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        String str2 = this.f22859b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        String str3 = this.f22860c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 ^ hashCode3) * 1000003;
        f fVar = this.f22861d;
        if (fVar == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = fVar.hashCode();
        }
        int i14 = (i13 ^ hashCode4) * 1000003;
        d.b bVar = this.f22862e;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i14 ^ i10;
    }

    public String toString() {
        return "InstallationResponse{uri=" + this.f22858a + ", fid=" + this.f22859b + ", refreshToken=" + this.f22860c + ", authToken=" + this.f22861d + ", responseCode=" + this.f22862e + "}";
    }

    private a(String str, String str2, String str3, f fVar, d.b bVar) {
        this.f22858a = str;
        this.f22859b = str2;
        this.f22860c = str3;
        this.f22861d = fVar;
        this.f22862e = bVar;
    }
}
