package dj;

import dj.c;
import dj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f21770b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f21771c;

    /* renamed from: d  reason: collision with root package name */
    private final String f21772d;

    /* renamed from: e  reason: collision with root package name */
    private final String f21773e;

    /* renamed from: f  reason: collision with root package name */
    private final long f21774f;

    /* renamed from: g  reason: collision with root package name */
    private final long f21775g;

    /* renamed from: h  reason: collision with root package name */
    private final String f21776h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f21777a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f21778b;

        /* renamed from: c  reason: collision with root package name */
        private String f21779c;

        /* renamed from: d  reason: collision with root package name */
        private String f21780d;

        /* renamed from: e  reason: collision with root package name */
        private Long f21781e;

        /* renamed from: f  reason: collision with root package name */
        private Long f21782f;

        /* renamed from: g  reason: collision with root package name */
        private String f21783g;

        @Override // dj.d.a
        public d a() {
            String str = "";
            if (this.f21778b == null) {
                str = " registrationStatus";
            }
            if (this.f21781e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f21782f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f21777a, this.f21778b, this.f21779c, this.f21780d, this.f21781e.longValue(), this.f21782f.longValue(), this.f21783g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // dj.d.a
        public d.a b(String str) {
            this.f21779c = str;
            return this;
        }

        @Override // dj.d.a
        public d.a c(long j10) {
            this.f21781e = Long.valueOf(j10);
            return this;
        }

        @Override // dj.d.a
        public d.a d(String str) {
            this.f21777a = str;
            return this;
        }

        @Override // dj.d.a
        public d.a e(String str) {
            this.f21783g = str;
            return this;
        }

        @Override // dj.d.a
        public d.a f(String str) {
            this.f21780d = str;
            return this;
        }

        @Override // dj.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f21778b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // dj.d.a
        public d.a h(long j10) {
            this.f21782f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f21777a = dVar.d();
            this.f21778b = dVar.g();
            this.f21779c = dVar.b();
            this.f21780d = dVar.f();
            this.f21781e = Long.valueOf(dVar.c());
            this.f21782f = Long.valueOf(dVar.h());
            this.f21783g = dVar.e();
        }
    }

    @Override // dj.d
    public String b() {
        return this.f21772d;
    }

    @Override // dj.d
    public long c() {
        return this.f21774f;
    }

    @Override // dj.d
    public String d() {
        return this.f21770b;
    }

    @Override // dj.d
    public String e() {
        return this.f21776h;
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
            String str4 = this.f21770b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f21771c.equals(dVar.g()) && ((str = this.f21772d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f21773e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f21774f == dVar.c() && this.f21775g == dVar.h() && ((str3 = this.f21776h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // dj.d
    public String f() {
        return this.f21773e;
    }

    @Override // dj.d
    public c.a g() {
        return this.f21771c;
    }

    @Override // dj.d
    public long h() {
        return this.f21775g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f21770b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f21771c.hashCode()) * 1000003;
        String str2 = this.f21772d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f21773e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f21774f;
        long j11 = this.f21775g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f21776h;
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
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f21770b + ", registrationStatus=" + this.f21771c + ", authToken=" + this.f21772d + ", refreshToken=" + this.f21773e + ", expiresInSecs=" + this.f21774f + ", tokenCreationEpochInSecs=" + this.f21775g + ", fisError=" + this.f21776h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f21770b = str;
        this.f21771c = aVar;
        this.f21772d = str2;
        this.f21773e = str3;
        this.f21774f = j10;
        this.f21775g = j11;
        this.f21776h = str4;
    }
}
