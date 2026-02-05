package gj;

import gj.c;
import gj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f24953b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f24954c;

    /* renamed from: d  reason: collision with root package name */
    private final String f24955d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24956e;

    /* renamed from: f  reason: collision with root package name */
    private final long f24957f;

    /* renamed from: g  reason: collision with root package name */
    private final long f24958g;

    /* renamed from: h  reason: collision with root package name */
    private final String f24959h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f24960a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f24961b;

        /* renamed from: c  reason: collision with root package name */
        private String f24962c;

        /* renamed from: d  reason: collision with root package name */
        private String f24963d;

        /* renamed from: e  reason: collision with root package name */
        private Long f24964e;

        /* renamed from: f  reason: collision with root package name */
        private Long f24965f;

        /* renamed from: g  reason: collision with root package name */
        private String f24966g;

        @Override // gj.d.a
        public d a() {
            String str = "";
            if (this.f24961b == null) {
                str = " registrationStatus";
            }
            if (this.f24964e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f24965f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f24960a, this.f24961b, this.f24962c, this.f24963d, this.f24964e.longValue(), this.f24965f.longValue(), this.f24966g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // gj.d.a
        public d.a b(String str) {
            this.f24962c = str;
            return this;
        }

        @Override // gj.d.a
        public d.a c(long j10) {
            this.f24964e = Long.valueOf(j10);
            return this;
        }

        @Override // gj.d.a
        public d.a d(String str) {
            this.f24960a = str;
            return this;
        }

        @Override // gj.d.a
        public d.a e(String str) {
            this.f24966g = str;
            return this;
        }

        @Override // gj.d.a
        public d.a f(String str) {
            this.f24963d = str;
            return this;
        }

        @Override // gj.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f24961b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // gj.d.a
        public d.a h(long j10) {
            this.f24965f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f24960a = dVar.d();
            this.f24961b = dVar.g();
            this.f24962c = dVar.b();
            this.f24963d = dVar.f();
            this.f24964e = Long.valueOf(dVar.c());
            this.f24965f = Long.valueOf(dVar.h());
            this.f24966g = dVar.e();
        }
    }

    @Override // gj.d
    public String b() {
        return this.f24955d;
    }

    @Override // gj.d
    public long c() {
        return this.f24957f;
    }

    @Override // gj.d
    public String d() {
        return this.f24953b;
    }

    @Override // gj.d
    public String e() {
        return this.f24959h;
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
            String str4 = this.f24953b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f24954c.equals(dVar.g()) && ((str = this.f24955d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f24956e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f24957f == dVar.c() && this.f24958g == dVar.h() && ((str3 = this.f24959h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // gj.d
    public String f() {
        return this.f24956e;
    }

    @Override // gj.d
    public c.a g() {
        return this.f24954c;
    }

    @Override // gj.d
    public long h() {
        return this.f24958g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f24953b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f24954c.hashCode()) * 1000003;
        String str2 = this.f24955d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f24956e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f24957f;
        long j11 = this.f24958g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f24959h;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i12 ^ i10;
    }

    @Override // gj.d
    public d.a n() {
        return new b(this);
    }

    public String toString() {
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f24953b + ", registrationStatus=" + this.f24954c + ", authToken=" + this.f24955d + ", refreshToken=" + this.f24956e + ", expiresInSecs=" + this.f24957f + ", tokenCreationEpochInSecs=" + this.f24958g + ", fisError=" + this.f24959h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f24953b = str;
        this.f24954c = aVar;
        this.f24955d = str2;
        this.f24956e = str3;
        this.f24957f = j10;
        this.f24958g = j11;
        this.f24959h = str4;
    }
}
