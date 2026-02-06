package hj;

import hj.c;
import hj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f26024b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f26025c;

    /* renamed from: d  reason: collision with root package name */
    private final String f26026d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26027e;

    /* renamed from: f  reason: collision with root package name */
    private final long f26028f;

    /* renamed from: g  reason: collision with root package name */
    private final long f26029g;

    /* renamed from: h  reason: collision with root package name */
    private final String f26030h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f26031a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f26032b;

        /* renamed from: c  reason: collision with root package name */
        private String f26033c;

        /* renamed from: d  reason: collision with root package name */
        private String f26034d;

        /* renamed from: e  reason: collision with root package name */
        private Long f26035e;

        /* renamed from: f  reason: collision with root package name */
        private Long f26036f;

        /* renamed from: g  reason: collision with root package name */
        private String f26037g;

        @Override // hj.d.a
        public d a() {
            String str = "";
            if (this.f26032b == null) {
                str = " registrationStatus";
            }
            if (this.f26035e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f26036f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f26031a, this.f26032b, this.f26033c, this.f26034d, this.f26035e.longValue(), this.f26036f.longValue(), this.f26037g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hj.d.a
        public d.a b(String str) {
            this.f26033c = str;
            return this;
        }

        @Override // hj.d.a
        public d.a c(long j10) {
            this.f26035e = Long.valueOf(j10);
            return this;
        }

        @Override // hj.d.a
        public d.a d(String str) {
            this.f26031a = str;
            return this;
        }

        @Override // hj.d.a
        public d.a e(String str) {
            this.f26037g = str;
            return this;
        }

        @Override // hj.d.a
        public d.a f(String str) {
            this.f26034d = str;
            return this;
        }

        @Override // hj.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f26032b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // hj.d.a
        public d.a h(long j10) {
            this.f26036f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f26031a = dVar.d();
            this.f26032b = dVar.g();
            this.f26033c = dVar.b();
            this.f26034d = dVar.f();
            this.f26035e = Long.valueOf(dVar.c());
            this.f26036f = Long.valueOf(dVar.h());
            this.f26037g = dVar.e();
        }
    }

    @Override // hj.d
    public String b() {
        return this.f26026d;
    }

    @Override // hj.d
    public long c() {
        return this.f26028f;
    }

    @Override // hj.d
    public String d() {
        return this.f26024b;
    }

    @Override // hj.d
    public String e() {
        return this.f26030h;
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
            String str4 = this.f26024b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f26025c.equals(dVar.g()) && ((str = this.f26026d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f26027e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f26028f == dVar.c() && this.f26029g == dVar.h() && ((str3 = this.f26030h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // hj.d
    public String f() {
        return this.f26027e;
    }

    @Override // hj.d
    public c.a g() {
        return this.f26025c;
    }

    @Override // hj.d
    public long h() {
        return this.f26029g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f26024b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f26025c.hashCode()) * 1000003;
        String str2 = this.f26026d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f26027e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f26028f;
        long j11 = this.f26029g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f26030h;
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
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f26024b + ", registrationStatus=" + this.f26025c + ", authToken=" + this.f26026d + ", refreshToken=" + this.f26027e + ", expiresInSecs=" + this.f26028f + ", tokenCreationEpochInSecs=" + this.f26029g + ", fisError=" + this.f26030h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f26024b = str;
        this.f26025c = aVar;
        this.f26026d = str2;
        this.f26027e = str3;
        this.f26028f = j10;
        this.f26029g = j11;
        this.f26030h = str4;
    }
}
