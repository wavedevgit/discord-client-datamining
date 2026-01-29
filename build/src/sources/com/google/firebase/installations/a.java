package com.google.firebase.installations;

import com.google.firebase.installations.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends g {

    /* renamed from: a  reason: collision with root package name */
    private final String f17352a;

    /* renamed from: b  reason: collision with root package name */
    private final long f17353b;

    /* renamed from: c  reason: collision with root package name */
    private final long f17354c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends g.a {

        /* renamed from: a  reason: collision with root package name */
        private String f17355a;

        /* renamed from: b  reason: collision with root package name */
        private Long f17356b;

        /* renamed from: c  reason: collision with root package name */
        private Long f17357c;

        @Override // com.google.firebase.installations.g.a
        public g a() {
            String str = "";
            if (this.f17355a == null) {
                str = " token";
            }
            if (this.f17356b == null) {
                str = str + " tokenExpirationTimestamp";
            }
            if (this.f17357c == null) {
                str = str + " tokenCreationTimestamp";
            }
            if (str.isEmpty()) {
                return new a(this.f17355a, this.f17356b.longValue(), this.f17357c.longValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // com.google.firebase.installations.g.a
        public g.a b(String str) {
            if (str != null) {
                this.f17355a = str;
                return this;
            }
            throw new NullPointerException("Null token");
        }

        @Override // com.google.firebase.installations.g.a
        public g.a c(long j10) {
            this.f17357c = Long.valueOf(j10);
            return this;
        }

        @Override // com.google.firebase.installations.g.a
        public g.a d(long j10) {
            this.f17356b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // com.google.firebase.installations.g
    public String b() {
        return this.f17352a;
    }

    @Override // com.google.firebase.installations.g
    public long c() {
        return this.f17354c;
    }

    @Override // com.google.firebase.installations.g
    public long d() {
        return this.f17353b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f17352a.equals(gVar.b()) && this.f17353b == gVar.d() && this.f17354c == gVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f17353b;
        long j11 = this.f17354c;
        return ((((this.f17352a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)));
    }

    public String toString() {
        return "InstallationTokenResult{token=" + this.f17352a + ", tokenExpirationTimestamp=" + this.f17353b + ", tokenCreationTimestamp=" + this.f17354c + "}";
    }

    private a(String str, long j10, long j11) {
        this.f17352a = str;
        this.f17353b = j10;
        this.f17354c = j11;
    }
}
