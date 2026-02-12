package com.google.firebase.installations;

import com.google.firebase.installations.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends g {

    /* renamed from: a  reason: collision with root package name */
    private final String f17213a;

    /* renamed from: b  reason: collision with root package name */
    private final long f17214b;

    /* renamed from: c  reason: collision with root package name */
    private final long f17215c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends g.a {

        /* renamed from: a  reason: collision with root package name */
        private String f17216a;

        /* renamed from: b  reason: collision with root package name */
        private Long f17217b;

        /* renamed from: c  reason: collision with root package name */
        private Long f17218c;

        @Override // com.google.firebase.installations.g.a
        public g a() {
            String str = "";
            if (this.f17216a == null) {
                str = " token";
            }
            if (this.f17217b == null) {
                str = str + " tokenExpirationTimestamp";
            }
            if (this.f17218c == null) {
                str = str + " tokenCreationTimestamp";
            }
            if (str.isEmpty()) {
                return new a(this.f17216a, this.f17217b.longValue(), this.f17218c.longValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // com.google.firebase.installations.g.a
        public g.a b(String str) {
            if (str != null) {
                this.f17216a = str;
                return this;
            }
            throw new NullPointerException("Null token");
        }

        @Override // com.google.firebase.installations.g.a
        public g.a c(long j10) {
            this.f17218c = Long.valueOf(j10);
            return this;
        }

        @Override // com.google.firebase.installations.g.a
        public g.a d(long j10) {
            this.f17217b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // com.google.firebase.installations.g
    public String b() {
        return this.f17213a;
    }

    @Override // com.google.firebase.installations.g
    public long c() {
        return this.f17215c;
    }

    @Override // com.google.firebase.installations.g
    public long d() {
        return this.f17214b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f17213a.equals(gVar.b()) && this.f17214b == gVar.d() && this.f17215c == gVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f17214b;
        long j11 = this.f17215c;
        return ((((this.f17213a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)));
    }

    public String toString() {
        return "InstallationTokenResult{token=" + this.f17213a + ", tokenExpirationTimestamp=" + this.f17214b + ", tokenCreationTimestamp=" + this.f17215c + "}";
    }

    private a(String str, long j10, long j11) {
        this.f17213a = str;
        this.f17214b = j10;
        this.f17215c = j11;
    }
}
