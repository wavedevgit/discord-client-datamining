package dj;

import dj.c;
import dj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f22194b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f22195c;

    /* renamed from: d  reason: collision with root package name */
    private final String f22196d;

    /* renamed from: e  reason: collision with root package name */
    private final String f22197e;

    /* renamed from: f  reason: collision with root package name */
    private final long f22198f;

    /* renamed from: g  reason: collision with root package name */
    private final long f22199g;

    /* renamed from: h  reason: collision with root package name */
    private final String f22200h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f22201a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f22202b;

        /* renamed from: c  reason: collision with root package name */
        private String f22203c;

        /* renamed from: d  reason: collision with root package name */
        private String f22204d;

        /* renamed from: e  reason: collision with root package name */
        private Long f22205e;

        /* renamed from: f  reason: collision with root package name */
        private Long f22206f;

        /* renamed from: g  reason: collision with root package name */
        private String f22207g;

        @Override // dj.d.a
        public d a() {
            String str = "";
            if (this.f22202b == null) {
                str = " registrationStatus";
            }
            if (this.f22205e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f22206f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f22201a, this.f22202b, this.f22203c, this.f22204d, this.f22205e.longValue(), this.f22206f.longValue(), this.f22207g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // dj.d.a
        public d.a b(String str) {
            this.f22203c = str;
            return this;
        }

        @Override // dj.d.a
        public d.a c(long j10) {
            this.f22205e = Long.valueOf(j10);
            return this;
        }

        @Override // dj.d.a
        public d.a d(String str) {
            this.f22201a = str;
            return this;
        }

        @Override // dj.d.a
        public d.a e(String str) {
            this.f22207g = str;
            return this;
        }

        @Override // dj.d.a
        public d.a f(String str) {
            this.f22204d = str;
            return this;
        }

        @Override // dj.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f22202b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // dj.d.a
        public d.a h(long j10) {
            this.f22206f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f22201a = dVar.d();
            this.f22202b = dVar.g();
            this.f22203c = dVar.b();
            this.f22204d = dVar.f();
            this.f22205e = Long.valueOf(dVar.c());
            this.f22206f = Long.valueOf(dVar.h());
            this.f22207g = dVar.e();
        }
    }

    @Override // dj.d
    public String b() {
        return this.f22196d;
    }

    @Override // dj.d
    public long c() {
        return this.f22198f;
    }

    @Override // dj.d
    public String d() {
        return this.f22194b;
    }

    @Override // dj.d
    public String e() {
        return this.f22200h;
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
            String str4 = this.f22194b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f22195c.equals(dVar.g()) && ((str = this.f22196d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f22197e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f22198f == dVar.c() && this.f22199g == dVar.h() && ((str3 = this.f22200h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // dj.d
    public String f() {
        return this.f22197e;
    }

    @Override // dj.d
    public c.a g() {
        return this.f22195c;
    }

    @Override // dj.d
    public long h() {
        return this.f22199g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f22194b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f22195c.hashCode()) * 1000003;
        String str2 = this.f22196d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f22197e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f22198f;
        long j11 = this.f22199g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f22200h;
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
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f22194b + ", registrationStatus=" + this.f22195c + ", authToken=" + this.f22196d + ", refreshToken=" + this.f22197e + ", expiresInSecs=" + this.f22198f + ", tokenCreationEpochInSecs=" + this.f22199g + ", fisError=" + this.f22200h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f22194b = str;
        this.f22195c = aVar;
        this.f22196d = str2;
        this.f22197e = str3;
        this.f22198f = j10;
        this.f22199g = j11;
        this.f22200h = str4;
    }
}
