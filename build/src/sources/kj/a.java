package kj;

import kj.c;
import kj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f31776b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f31777c;

    /* renamed from: d  reason: collision with root package name */
    private final String f31778d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31779e;

    /* renamed from: f  reason: collision with root package name */
    private final long f31780f;

    /* renamed from: g  reason: collision with root package name */
    private final long f31781g;

    /* renamed from: h  reason: collision with root package name */
    private final String f31782h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f31783a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f31784b;

        /* renamed from: c  reason: collision with root package name */
        private String f31785c;

        /* renamed from: d  reason: collision with root package name */
        private String f31786d;

        /* renamed from: e  reason: collision with root package name */
        private Long f31787e;

        /* renamed from: f  reason: collision with root package name */
        private Long f31788f;

        /* renamed from: g  reason: collision with root package name */
        private String f31789g;

        @Override // kj.d.a
        public d a() {
            String str = "";
            if (this.f31784b == null) {
                str = " registrationStatus";
            }
            if (this.f31787e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f31788f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f31783a, this.f31784b, this.f31785c, this.f31786d, this.f31787e.longValue(), this.f31788f.longValue(), this.f31789g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // kj.d.a
        public d.a b(String str) {
            this.f31785c = str;
            return this;
        }

        @Override // kj.d.a
        public d.a c(long j10) {
            this.f31787e = Long.valueOf(j10);
            return this;
        }

        @Override // kj.d.a
        public d.a d(String str) {
            this.f31783a = str;
            return this;
        }

        @Override // kj.d.a
        public d.a e(String str) {
            this.f31789g = str;
            return this;
        }

        @Override // kj.d.a
        public d.a f(String str) {
            this.f31786d = str;
            return this;
        }

        @Override // kj.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f31784b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // kj.d.a
        public d.a h(long j10) {
            this.f31788f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f31783a = dVar.d();
            this.f31784b = dVar.g();
            this.f31785c = dVar.b();
            this.f31786d = dVar.f();
            this.f31787e = Long.valueOf(dVar.c());
            this.f31788f = Long.valueOf(dVar.h());
            this.f31789g = dVar.e();
        }
    }

    @Override // kj.d
    public String b() {
        return this.f31778d;
    }

    @Override // kj.d
    public long c() {
        return this.f31780f;
    }

    @Override // kj.d
    public String d() {
        return this.f31776b;
    }

    @Override // kj.d
    public String e() {
        return this.f31782h;
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
            String str4 = this.f31776b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f31777c.equals(dVar.g()) && ((str = this.f31778d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f31779e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f31780f == dVar.c() && this.f31781g == dVar.h() && ((str3 = this.f31782h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // kj.d
    public String f() {
        return this.f31779e;
    }

    @Override // kj.d
    public c.a g() {
        return this.f31777c;
    }

    @Override // kj.d
    public long h() {
        return this.f31781g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f31776b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f31777c.hashCode()) * 1000003;
        String str2 = this.f31778d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f31779e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f31780f;
        long j11 = this.f31781g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f31782h;
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
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f31776b + ", registrationStatus=" + this.f31777c + ", authToken=" + this.f31778d + ", refreshToken=" + this.f31779e + ", expiresInSecs=" + this.f31780f + ", tokenCreationEpochInSecs=" + this.f31781g + ", fisError=" + this.f31782h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f31776b = str;
        this.f31777c = aVar;
        this.f31778d = str2;
        this.f31779e = str3;
        this.f31780f = j10;
        this.f31781g = j11;
        this.f31782h = str4;
    }
}
