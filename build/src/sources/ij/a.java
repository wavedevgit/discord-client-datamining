package ij;

import ij.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final String f26748a;

    /* renamed from: b  reason: collision with root package name */
    private final String f26749b;

    /* renamed from: c  reason: collision with root package name */
    private final String f26750c;

    /* renamed from: d  reason: collision with root package name */
    private final f f26751d;

    /* renamed from: e  reason: collision with root package name */
    private final d.b f26752e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f26753a;

        /* renamed from: b  reason: collision with root package name */
        private String f26754b;

        /* renamed from: c  reason: collision with root package name */
        private String f26755c;

        /* renamed from: d  reason: collision with root package name */
        private f f26756d;

        /* renamed from: e  reason: collision with root package name */
        private d.b f26757e;

        @Override // ij.d.a
        public d a() {
            return new a(this.f26753a, this.f26754b, this.f26755c, this.f26756d, this.f26757e);
        }

        @Override // ij.d.a
        public d.a b(f fVar) {
            this.f26756d = fVar;
            return this;
        }

        @Override // ij.d.a
        public d.a c(String str) {
            this.f26754b = str;
            return this;
        }

        @Override // ij.d.a
        public d.a d(String str) {
            this.f26755c = str;
            return this;
        }

        @Override // ij.d.a
        public d.a e(d.b bVar) {
            this.f26757e = bVar;
            return this;
        }

        @Override // ij.d.a
        public d.a f(String str) {
            this.f26753a = str;
            return this;
        }
    }

    @Override // ij.d
    public f b() {
        return this.f26751d;
    }

    @Override // ij.d
    public String c() {
        return this.f26749b;
    }

    @Override // ij.d
    public String d() {
        return this.f26750c;
    }

    @Override // ij.d
    public d.b e() {
        return this.f26752e;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            String str = this.f26748a;
            if (str != null ? str.equals(dVar.f()) : dVar.f() == null) {
                String str2 = this.f26749b;
                if (str2 != null ? str2.equals(dVar.c()) : dVar.c() == null) {
                    String str3 = this.f26750c;
                    if (str3 != null ? str3.equals(dVar.d()) : dVar.d() == null) {
                        f fVar = this.f26751d;
                        if (fVar != null ? fVar.equals(dVar.b()) : dVar.b() == null) {
                            d.b bVar = this.f26752e;
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

    @Override // ij.d
    public String f() {
        return this.f26748a;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f26748a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = (hashCode ^ 1000003) * 1000003;
        String str2 = this.f26749b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 ^ hashCode2) * 1000003;
        String str3 = this.f26750c;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        int i13 = (i12 ^ hashCode3) * 1000003;
        f fVar = this.f26751d;
        if (fVar == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = fVar.hashCode();
        }
        int i14 = (i13 ^ hashCode4) * 1000003;
        d.b bVar = this.f26752e;
        if (bVar != null) {
            i10 = bVar.hashCode();
        }
        return i14 ^ i10;
    }

    public String toString() {
        return "InstallationResponse{uri=" + this.f26748a + ", fid=" + this.f26749b + ", refreshToken=" + this.f26750c + ", authToken=" + this.f26751d + ", responseCode=" + this.f26752e + "}";
    }

    private a(String str, String str2, String str3, f fVar, d.b bVar) {
        this.f26748a = str;
        this.f26749b = str2;
        this.f26750c = str3;
        this.f26751d = fVar;
        this.f26752e = bVar;
    }
}
