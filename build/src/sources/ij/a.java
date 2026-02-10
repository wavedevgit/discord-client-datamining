package ij;

import ij.c;
import ij.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f26887b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f26888c;

    /* renamed from: d  reason: collision with root package name */
    private final String f26889d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26890e;

    /* renamed from: f  reason: collision with root package name */
    private final long f26891f;

    /* renamed from: g  reason: collision with root package name */
    private final long f26892g;

    /* renamed from: h  reason: collision with root package name */
    private final String f26893h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f26894a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f26895b;

        /* renamed from: c  reason: collision with root package name */
        private String f26896c;

        /* renamed from: d  reason: collision with root package name */
        private String f26897d;

        /* renamed from: e  reason: collision with root package name */
        private Long f26898e;

        /* renamed from: f  reason: collision with root package name */
        private Long f26899f;

        /* renamed from: g  reason: collision with root package name */
        private String f26900g;

        @Override // ij.d.a
        public d a() {
            String str = "";
            if (this.f26895b == null) {
                str = " registrationStatus";
            }
            if (this.f26898e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f26899f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f26894a, this.f26895b, this.f26896c, this.f26897d, this.f26898e.longValue(), this.f26899f.longValue(), this.f26900g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // ij.d.a
        public d.a b(String str) {
            this.f26896c = str;
            return this;
        }

        @Override // ij.d.a
        public d.a c(long j10) {
            this.f26898e = Long.valueOf(j10);
            return this;
        }

        @Override // ij.d.a
        public d.a d(String str) {
            this.f26894a = str;
            return this;
        }

        @Override // ij.d.a
        public d.a e(String str) {
            this.f26900g = str;
            return this;
        }

        @Override // ij.d.a
        public d.a f(String str) {
            this.f26897d = str;
            return this;
        }

        @Override // ij.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f26895b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // ij.d.a
        public d.a h(long j10) {
            this.f26899f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f26894a = dVar.d();
            this.f26895b = dVar.g();
            this.f26896c = dVar.b();
            this.f26897d = dVar.f();
            this.f26898e = Long.valueOf(dVar.c());
            this.f26899f = Long.valueOf(dVar.h());
            this.f26900g = dVar.e();
        }
    }

    @Override // ij.d
    public String b() {
        return this.f26889d;
    }

    @Override // ij.d
    public long c() {
        return this.f26891f;
    }

    @Override // ij.d
    public String d() {
        return this.f26887b;
    }

    @Override // ij.d
    public String e() {
        return this.f26893h;
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
            String str4 = this.f26887b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f26888c.equals(dVar.g()) && ((str = this.f26889d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f26890e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f26891f == dVar.c() && this.f26892g == dVar.h() && ((str3 = this.f26893h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // ij.d
    public String f() {
        return this.f26890e;
    }

    @Override // ij.d
    public c.a g() {
        return this.f26888c;
    }

    @Override // ij.d
    public long h() {
        return this.f26892g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f26887b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f26888c.hashCode()) * 1000003;
        String str2 = this.f26889d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f26890e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f26891f;
        long j11 = this.f26892g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f26893h;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i12 ^ i10;
    }

    @Override // ij.d
    public d.a n() {
        return new b(this);
    }

    public String toString() {
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f26887b + ", registrationStatus=" + this.f26888c + ", authToken=" + this.f26889d + ", refreshToken=" + this.f26890e + ", expiresInSecs=" + this.f26891f + ", tokenCreationEpochInSecs=" + this.f26892g + ", fisError=" + this.f26893h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f26887b = str;
        this.f26888c = aVar;
        this.f26889d = str2;
        this.f26890e = str3;
        this.f26891f = j10;
        this.f26892g = j11;
        this.f26893h = str4;
    }
}
