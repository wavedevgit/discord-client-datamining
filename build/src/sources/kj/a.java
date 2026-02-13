package kj;

import kj.c;
import kj.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends d {

    /* renamed from: b  reason: collision with root package name */
    private final String f32344b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f32345c;

    /* renamed from: d  reason: collision with root package name */
    private final String f32346d;

    /* renamed from: e  reason: collision with root package name */
    private final String f32347e;

    /* renamed from: f  reason: collision with root package name */
    private final long f32348f;

    /* renamed from: g  reason: collision with root package name */
    private final long f32349g;

    /* renamed from: h  reason: collision with root package name */
    private final String f32350h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends d.a {

        /* renamed from: a  reason: collision with root package name */
        private String f32351a;

        /* renamed from: b  reason: collision with root package name */
        private c.a f32352b;

        /* renamed from: c  reason: collision with root package name */
        private String f32353c;

        /* renamed from: d  reason: collision with root package name */
        private String f32354d;

        /* renamed from: e  reason: collision with root package name */
        private Long f32355e;

        /* renamed from: f  reason: collision with root package name */
        private Long f32356f;

        /* renamed from: g  reason: collision with root package name */
        private String f32357g;

        @Override // kj.d.a
        public d a() {
            String str = "";
            if (this.f32352b == null) {
                str = " registrationStatus";
            }
            if (this.f32355e == null) {
                str = str + " expiresInSecs";
            }
            if (this.f32356f == null) {
                str = str + " tokenCreationEpochInSecs";
            }
            if (str.isEmpty()) {
                return new a(this.f32351a, this.f32352b, this.f32353c, this.f32354d, this.f32355e.longValue(), this.f32356f.longValue(), this.f32357g);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // kj.d.a
        public d.a b(String str) {
            this.f32353c = str;
            return this;
        }

        @Override // kj.d.a
        public d.a c(long j10) {
            this.f32355e = Long.valueOf(j10);
            return this;
        }

        @Override // kj.d.a
        public d.a d(String str) {
            this.f32351a = str;
            return this;
        }

        @Override // kj.d.a
        public d.a e(String str) {
            this.f32357g = str;
            return this;
        }

        @Override // kj.d.a
        public d.a f(String str) {
            this.f32354d = str;
            return this;
        }

        @Override // kj.d.a
        public d.a g(c.a aVar) {
            if (aVar != null) {
                this.f32352b = aVar;
                return this;
            }
            throw new NullPointerException("Null registrationStatus");
        }

        @Override // kj.d.a
        public d.a h(long j10) {
            this.f32356f = Long.valueOf(j10);
            return this;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b() {
        }

        private b(d dVar) {
            this.f32351a = dVar.d();
            this.f32352b = dVar.g();
            this.f32353c = dVar.b();
            this.f32354d = dVar.f();
            this.f32355e = Long.valueOf(dVar.c());
            this.f32356f = Long.valueOf(dVar.h());
            this.f32357g = dVar.e();
        }
    }

    @Override // kj.d
    public String b() {
        return this.f32346d;
    }

    @Override // kj.d
    public long c() {
        return this.f32348f;
    }

    @Override // kj.d
    public String d() {
        return this.f32344b;
    }

    @Override // kj.d
    public String e() {
        return this.f32350h;
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
            String str4 = this.f32344b;
            if (str4 != null ? str4.equals(dVar.d()) : dVar.d() == null) {
                if (this.f32345c.equals(dVar.g()) && ((str = this.f32346d) != null ? str.equals(dVar.b()) : dVar.b() == null) && ((str2 = this.f32347e) != null ? str2.equals(dVar.f()) : dVar.f() == null) && this.f32348f == dVar.c() && this.f32349g == dVar.h() && ((str3 = this.f32350h) != null ? str3.equals(dVar.e()) : dVar.e() == null)) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // kj.d
    public String f() {
        return this.f32347e;
    }

    @Override // kj.d
    public c.a g() {
        return this.f32345c;
    }

    @Override // kj.d
    public long h() {
        return this.f32349g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        String str = this.f32344b;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode ^ 1000003) * 1000003) ^ this.f32345c.hashCode()) * 1000003;
        String str2 = this.f32346d;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i11 = (hashCode4 ^ hashCode2) * 1000003;
        String str3 = this.f32347e;
        if (str3 == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = str3.hashCode();
        }
        long j10 = this.f32348f;
        long j11 = this.f32349g;
        int i12 = (((((i11 ^ hashCode3) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003;
        String str4 = this.f32350h;
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
        return "PersistedInstallationEntry{firebaseInstallationId=" + this.f32344b + ", registrationStatus=" + this.f32345c + ", authToken=" + this.f32346d + ", refreshToken=" + this.f32347e + ", expiresInSecs=" + this.f32348f + ", tokenCreationEpochInSecs=" + this.f32349g + ", fisError=" + this.f32350h + "}";
    }

    private a(String str, c.a aVar, String str2, String str3, long j10, long j11, String str4) {
        this.f32344b = str;
        this.f32345c = aVar;
        this.f32346d = str2;
        this.f32347e = str3;
        this.f32348f = j10;
        this.f32349g = j11;
        this.f32350h = str4;
    }
}
