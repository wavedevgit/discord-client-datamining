package com.google.firebase.installations;

import com.google.firebase.installations.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends g {

    /* renamed from: a  reason: collision with root package name */
    private final String f16343a;

    /* renamed from: b  reason: collision with root package name */
    private final long f16344b;

    /* renamed from: c  reason: collision with root package name */
    private final long f16345c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends g.a {

        /* renamed from: a  reason: collision with root package name */
        private String f16346a;

        /* renamed from: b  reason: collision with root package name */
        private Long f16347b;

        /* renamed from: c  reason: collision with root package name */
        private Long f16348c;

        @Override // com.google.firebase.installations.g.a
        public g a() {
            String str = "";
            if (this.f16346a == null) {
                str = " token";
            }
            if (this.f16347b == null) {
                str = str + " tokenExpirationTimestamp";
            }
            if (this.f16348c == null) {
                str = str + " tokenCreationTimestamp";
            }
            if (str.isEmpty()) {
                return new a(this.f16346a, this.f16347b.longValue(), this.f16348c.longValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // com.google.firebase.installations.g.a
        public g.a b(String str) {
            if (str != null) {
                this.f16346a = str;
                return this;
            }
            throw new NullPointerException("Null token");
        }

        @Override // com.google.firebase.installations.g.a
        public g.a c(long j10) {
            this.f16348c = Long.valueOf(j10);
            return this;
        }

        @Override // com.google.firebase.installations.g.a
        public g.a d(long j10) {
            this.f16347b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // com.google.firebase.installations.g
    public String b() {
        return this.f16343a;
    }

    @Override // com.google.firebase.installations.g
    public long c() {
        return this.f16345c;
    }

    @Override // com.google.firebase.installations.g
    public long d() {
        return this.f16344b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f16343a.equals(gVar.b()) && this.f16344b == gVar.d() && this.f16345c == gVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f16344b;
        long j11 = this.f16345c;
        return ((((this.f16343a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)));
    }

    public String toString() {
        return "InstallationTokenResult{token=" + this.f16343a + ", tokenExpirationTimestamp=" + this.f16344b + ", tokenCreationTimestamp=" + this.f16345c + "}";
    }

    private a(String str, long j10, long j11) {
        this.f16343a = str;
        this.f16344b = j10;
        this.f16345c = j11;
    }
}
