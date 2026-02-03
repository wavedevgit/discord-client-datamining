package dj;

import dj.c;
import dj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f20629b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f20630c;

    /* renamed from: d  reason: collision with root package name */
    private final String f20631d;

    /* renamed from: e  reason: collision with root package name */
    private final String f20632e;

    /* renamed from: f  reason: collision with root package name */
    private final long f20633f;

    /* renamed from: g  reason: collision with root package name */
    private final long f20634g;

    /* renamed from: h  reason: collision with root package name */
    private final String f20635h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f20636a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f20637b;

        /* renamed from: c  reason: collision with root package name */
        private String f20638c;

        /* renamed from: d  reason: collision with root package name */
        private String f20639d;

        /* renamed from: e  reason: collision with root package name */
        private Long f20640e;

        /* renamed from: f  reason: collision with root package name */
        private Long f20641f;

        /* renamed from: g  reason: collision with root package name */
        private String f20642g;

        @Override // dj.d.a
        public d a() {
            String str = "";
            if (this.f20637b == null) {
                str = " registrationStatus";
            }
            if (this.f20640e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f20641f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f20636a, this.f20637b, this.f20638c, this.f20639d, this.f20640e.longValue(), this.f20641f.longValue(), this.f20642g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // dj.d.a
        public d.a b(String str) {
            this.f20638c = str;
            return this;
        }

        @Override // dj.d.a
        public d.a c(long j10) {
            this.f20640e = Long.valueOf(j10);
            return this;
        }

        @Override // dj.d.a
        public d.a d(String str) {
            this.f20636a = str;
            return this;
        }

        @Override // dj.d.a
        public d.a e(String str) {
            this.f20642g = str;
            return this;
        }

        @Override // dj.d.a
        public d.a f(String str) {
            this.f20639d = str;
            return this;
        }

        @Override // dj.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f20637b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // dj.d.a
        public d.a h(long j10) {
            this.f20641f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f20636a = dVar.d();
            this.f20637b = dVar.g();
            this.f20638c = dVar.b();
            this.f20639d = dVar.f();
            this.f20640e = Long.valueOf(dVar.c());
            this.f20641f = Long.valueOf(dVar.h());
            this.f20642g = dVar.e();
        }
    }

    @Override // dj.d
    public String b() {
        return this.f20631d;
    }

    @Override // dj.d
    public long c() {
        return this.f20633f;
    }

    @Override // dj.d
    public String d() {
        return this.f20629b;
    }

    @Override // dj.d
    public String e() {
        return this.f20635h;
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
            String str4 = this.f20629b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f20630c.equals(dVar.g()) && ((str = this.f20631d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f20632e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f20633f == dVar.c() && this.f20634g == dVar.h() && ((str3 = this.f20635h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // dj.d
    public String f() {
        return this.f20632e;
    }

    @Override // dj.d
    public c.a g() {
        return this.f20630c;
    }

    @Override // dj.d
    public long h() {
        return this.f20634g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f20629b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f20630c.hashCode()) * 1000003;
        String str2 = this.f20631d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f20632e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f20633f;
        long j11 = this.f20634g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f20635h;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i12 ^ i10;
    }

    @Override // dj.d
    public d.a n() {
        return new b(this);
    }

    public String toString() {
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f20629b + ", registrationStatus=" + this.f20630c + ", authToken=" + this.f20631d + ", refreshToken=" + this.f20632e + ", expiresInSecs=" + this.f20633f + ", tokenCreationEpochInSecs=" + this.f20634g + ", fisError=" + this.f20635h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f20629b = str;
        this.f20630c = aVar;
        this.f20631d = str2;
        this.f20632e = str3;
        this.f20633f = j10;
        this.f20634g = j11;
        this.f20635h = str4;
    }
}
