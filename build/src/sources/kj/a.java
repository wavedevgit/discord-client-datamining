package kj;

import kj.c;
import kj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f31775b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f31776c;

    /* renamed from: d  reason: collision with root package name */
    private final String f31777d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31778e;

    /* renamed from: f  reason: collision with root package name */
    private final long f31779f;

    /* renamed from: g  reason: collision with root package name */
    private final long f31780g;

    /* renamed from: h  reason: collision with root package name */
    private final String f31781h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f31782a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f31783b;

        /* renamed from: c  reason: collision with root package name */
        private String f31784c;

        /* renamed from: d  reason: collision with root package name */
        private String f31785d;

        /* renamed from: e  reason: collision with root package name */
        private Long f31786e;

        /* renamed from: f  reason: collision with root package name */
        private Long f31787f;

        /* renamed from: g  reason: collision with root package name */
        private String f31788g;

        @Override // kj.d.a
        public d a() {
            String str = "";
            if (this.f31783b == null) {
                str = " registrationStatus";
            }
            if (this.f31786e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f31787f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f31782a, this.f31783b, this.f31784c, this.f31785d, this.f31786e.longValue(), this.f31787f.longValue(), this.f31788g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // kj.d.a
        public d.a b(String str) {
            this.f31784c = str;
            return this;
        }

        @Override // kj.d.a
        public d.a c(long j10) {
            this.f31786e = Long.valueOf(j10);
            return this;
        }

        @Override // kj.d.a
        public d.a d(String str) {
            this.f31782a = str;
            return this;
        }

        @Override // kj.d.a
        public d.a e(String str) {
            this.f31788g = str;
            return this;
        }

        @Override // kj.d.a
        public d.a f(String str) {
            this.f31785d = str;
            return this;
        }

        @Override // kj.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f31783b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // kj.d.a
        public d.a h(long j10) {
            this.f31787f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f31782a = dVar.d();
            this.f31783b = dVar.g();
            this.f31784c = dVar.b();
            this.f31785d = dVar.f();
            this.f31786e = Long.valueOf(dVar.c());
            this.f31787f = Long.valueOf(dVar.h());
            this.f31788g = dVar.e();
        }
    }

    @Override // kj.d
    public String b() {
        return this.f31777d;
    }

    @Override // kj.d
    public long c() {
        return this.f31779f;
    }

    @Override // kj.d
    public String d() {
        return this.f31775b;
    }

    @Override // kj.d
    public String e() {
        return this.f31781h;
    }

    public boolean equals(Object obj) {
        String str;
        String str2;
        String str3;
        if (obj == this) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            String str4 = this.f31775b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f31776c.equals(dVar.g()) && ((str = this.f31777d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f31778e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f31779f == dVar.c() && this.f31780g == dVar.h() && ((str3 = this.f31781h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // kj.d
    public String f() {
        return this.f31778e;
    }

    @Override // kj.d
    public c.a g() {
        return this.f31776c;
    }

    @Override // kj.d
    public long h() {
        return this.f31780g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f31775b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f31776c.hashCode()) * 1000003;
        String str2 = this.f31777d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f31778e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f31779f;
        long j11 = this.f31780g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f31781h;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i12 ^ i10;
    }

    @Override // kj.d
    public d.a n() {
        return new b(this);
    }

    public String toString() {
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f31775b + ", registrationStatus=" + this.f31776c + ", authToken=" + this.f31777d + ", refreshToken=" + this.f31778e + ", expiresInSecs=" + this.f31779f + ", tokenCreationEpochInSecs=" + this.f31780g + ", fisError=" + this.f31781h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f31775b = str;
        this.f31776c = aVar;
        this.f31777d = str2;
        this.f31778e = str3;
        this.f31779f = j10;
        this.f31780g = j11;
        this.f31781h = str4;
    }
}
