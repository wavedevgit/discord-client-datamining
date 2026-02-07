package hj;

import hj.c;
import hj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f26072b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f26073c;

    /* renamed from: d  reason: collision with root package name */
    private final String f26074d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26075e;

    /* renamed from: f  reason: collision with root package name */
    private final long f26076f;

    /* renamed from: g  reason: collision with root package name */
    private final long f26077g;

    /* renamed from: h  reason: collision with root package name */
    private final String f26078h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f26079a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f26080b;

        /* renamed from: c  reason: collision with root package name */
        private String f26081c;

        /* renamed from: d  reason: collision with root package name */
        private String f26082d;

        /* renamed from: e  reason: collision with root package name */
        private Long f26083e;

        /* renamed from: f  reason: collision with root package name */
        private Long f26084f;

        /* renamed from: g  reason: collision with root package name */
        private String f26085g;

        @Override // hj.d.a
        public d a() {
            String str = "";
            if (this.f26080b == null) {
                str = " registrationStatus";
            }
            if (this.f26083e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f26084f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f26079a, this.f26080b, this.f26081c, this.f26082d, this.f26083e.longValue(), this.f26084f.longValue(), this.f26085g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hj.d.a
        public d.a b(String str) {
            this.f26081c = str;
            return this;
        }

        @Override // hj.d.a
        public d.a c(long j10) {
            this.f26083e = Long.valueOf(j10);
            return this;
        }

        @Override // hj.d.a
        public d.a d(String str) {
            this.f26079a = str;
            return this;
        }

        @Override // hj.d.a
        public d.a e(String str) {
            this.f26085g = str;
            return this;
        }

        @Override // hj.d.a
        public d.a f(String str) {
            this.f26082d = str;
            return this;
        }

        @Override // hj.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f26080b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // hj.d.a
        public d.a h(long j10) {
            this.f26084f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f26079a = dVar.d();
            this.f26080b = dVar.g();
            this.f26081c = dVar.b();
            this.f26082d = dVar.f();
            this.f26083e = Long.valueOf(dVar.c());
            this.f26084f = Long.valueOf(dVar.h());
            this.f26085g = dVar.e();
        }
    }

    @Override // hj.d
    public String b() {
        return this.f26074d;
    }

    @Override // hj.d
    public long c() {
        return this.f26076f;
    }

    @Override // hj.d
    public String d() {
        return this.f26072b;
    }

    @Override // hj.d
    public String e() {
        return this.f26078h;
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
            String str4 = this.f26072b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f26073c.equals(dVar.g()) && ((str = this.f26074d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f26075e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f26076f == dVar.c() && this.f26077g == dVar.h() && ((str3 = this.f26078h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // hj.d
    public String f() {
        return this.f26075e;
    }

    @Override // hj.d
    public c.a g() {
        return this.f26073c;
    }

    @Override // hj.d
    public long h() {
        return this.f26077g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f26072b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f26073c.hashCode()) * 1000003;
        String str2 = this.f26074d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f26075e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f26076f;
        long j11 = this.f26077g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f26078h;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i12 ^ i10;
    }

    @Override // hj.d
    public d.a n() {
        return new b(this);
    }

    public String toString() {
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f26072b + ", registrationStatus=" + this.f26073c + ", authToken=" + this.f26074d + ", refreshToken=" + this.f26075e + ", expiresInSecs=" + this.f26076f + ", tokenCreationEpochInSecs=" + this.f26077g + ", fisError=" + this.f26078h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f26072b = str;
        this.f26073c = aVar;
        this.f26074d = str2;
        this.f26075e = str3;
        this.f26076f = j10;
        this.f26077g = j11;
        this.f26078h = str4;
    }
}
