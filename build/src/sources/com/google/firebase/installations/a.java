package com.google.firebase.installations;

import com.google.firebase.installations.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends g {

    /* renamed from: a  reason: collision with root package name */
    private final String f16981a;

    /* renamed from: b  reason: collision with root package name */
    private final long f16982b;

    /* renamed from: c  reason: collision with root package name */
    private final long f16983c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends g.a {

        /* renamed from: a  reason: collision with root package name */
        private String f16984a;

        /* renamed from: b  reason: collision with root package name */
        private Long f16985b;

        /* renamed from: c  reason: collision with root package name */
        private Long f16986c;

        @Override // com.google.firebase.installations.g.a
        public g a() {
            String str = "";
            if (this.f16984a == null) {
                str = " token";
            }
            if (this.f16985b == null) {
                str = str + " tokenExpirationTimestamp";
            }
            if (this.f16986c == null) {
                str = str + " tokenCreationTimestamp";
            }
            if (str.isEmpty()) {
                return new a(this.f16984a, this.f16985b.longValue(), this.f16986c.longValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // com.google.firebase.installations.g.a
        public g.a b(String str) {
            if (str != null) {
                this.f16984a = str;
                return this;
            }
            throw new NullPointerException("Null token");
        }

        @Override // com.google.firebase.installations.g.a
        public g.a c(long j10) {
            this.f16986c = Long.valueOf(j10);
            return this;
        }

        @Override // com.google.firebase.installations.g.a
        public g.a d(long j10) {
            this.f16985b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // com.google.firebase.installations.g
    public String b() {
        return this.f16981a;
    }

    @Override // com.google.firebase.installations.g
    public long c() {
        return this.f16983c;
    }

    @Override // com.google.firebase.installations.g
    public long d() {
        return this.f16982b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f16981a.equals(gVar.b()) && this.f16982b == gVar.d() && this.f16983c == gVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f16982b;
        long j11 = this.f16983c;
        return ((((this.f16981a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)));
    }

    public String toString() {
        return "InstallationTokenResult{token=" + this.f16981a + ", tokenExpirationTimestamp=" + this.f16982b + ", tokenCreationTimestamp=" + this.f16983c + "}";
    }

    private a(String str, long j10, long j11) {
        this.f16981a = str;
        this.f16982b = j10;
        this.f16983c = j11;
    }
}
