package com.google.firebase.installations;

import com.google.firebase.installations.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends g {

    /* renamed from: a  reason: collision with root package name */
    private final String f16323a;

    /* renamed from: b  reason: collision with root package name */
    private final long f16324b;

    /* renamed from: c  reason: collision with root package name */
    private final long f16325c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends g.a {

        /* renamed from: a  reason: collision with root package name */
        private String f16326a;

        /* renamed from: b  reason: collision with root package name */
        private Long f16327b;

        /* renamed from: c  reason: collision with root package name */
        private Long f16328c;

        @Override // com.google.firebase.installations.g.a
        public g a() {
            String str = "";
            if (this.f16326a == null) {
                str = " token";
            }
            if (this.f16327b == null) {
                str = str + " tokenExpirationTimestamp";
            }
            if (this.f16328c == null) {
                str = str + " tokenCreationTimestamp";
            }
            if (str.isEmpty()) {
                return new a(this.f16326a, this.f16327b.longValue(), this.f16328c.longValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // com.google.firebase.installations.g.a
        public g.a b(String str) {
            if (str != null) {
                this.f16326a = str;
                return this;
            }
            throw new NullPointerException("Null token");
        }

        @Override // com.google.firebase.installations.g.a
        public g.a c(long j10) {
            this.f16328c = Long.valueOf(j10);
            return this;
        }

        @Override // com.google.firebase.installations.g.a
        public g.a d(long j10) {
            this.f16327b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // com.google.firebase.installations.g
    public String b() {
        return this.f16323a;
    }

    @Override // com.google.firebase.installations.g
    public long c() {
        return this.f16325c;
    }

    @Override // com.google.firebase.installations.g
    public long d() {
        return this.f16324b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f16323a.equals(gVar.b()) && this.f16324b == gVar.d() && this.f16325c == gVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f16324b;
        long j11 = this.f16325c;
        return ((((this.f16323a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)));
    }

    public String toString() {
        return "InstallationTokenResult{token=" + this.f16323a + ", tokenExpirationTimestamp=" + this.f16324b + ", tokenCreationTimestamp=" + this.f16325c + "}";
    }

    private a(String str, long j10, long j11) {
        this.f16323a = str;
        this.f16324b = j10;
        this.f16325c = j11;
    }
}
