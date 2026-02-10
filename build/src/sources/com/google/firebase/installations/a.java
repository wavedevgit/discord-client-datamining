package com.google.firebase.installations;

import com.google.firebase.installations.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends g {

    /* renamed from: a  reason: collision with root package name */
    private final String f16463a;

    /* renamed from: b  reason: collision with root package name */
    private final long f16464b;

    /* renamed from: c  reason: collision with root package name */
    private final long f16465c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends g.a {

        /* renamed from: a  reason: collision with root package name */
        private String f16466a;

        /* renamed from: b  reason: collision with root package name */
        private Long f16467b;

        /* renamed from: c  reason: collision with root package name */
        private Long f16468c;

        @Override // com.google.firebase.installations.g.a
        public g a() {
            String str = "";
            if (this.f16466a == null) {
                str = " token";
            }
            if (this.f16467b == null) {
                str = str + " tokenExpirationTimestamp";
            }
            if (this.f16468c == null) {
                str = str + " tokenCreationTimestamp";
            }
            if (str.isEmpty()) {
                return new a(this.f16466a, this.f16467b.longValue(), this.f16468c.longValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // com.google.firebase.installations.g.a
        public g.a b(String str) {
            if (str != null) {
                this.f16466a = str;
                return this;
            }
            throw new NullPointerException("Null token");
        }

        @Override // com.google.firebase.installations.g.a
        public g.a c(long j10) {
            this.f16468c = Long.valueOf(j10);
            return this;
        }

        @Override // com.google.firebase.installations.g.a
        public g.a d(long j10) {
            this.f16467b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // com.google.firebase.installations.g
    public String b() {
        return this.f16463a;
    }

    @Override // com.google.firebase.installations.g
    public long c() {
        return this.f16465c;
    }

    @Override // com.google.firebase.installations.g
    public long d() {
        return this.f16464b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f16463a.equals(gVar.b()) && this.f16464b == gVar.d() && this.f16465c == gVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f16464b;
        long j11 = this.f16465c;
        return ((((this.f16463a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)));
    }

    public String toString() {
        return "InstallationTokenResult{token=" + this.f16463a + ", tokenExpirationTimestamp=" + this.f16464b + ", tokenCreationTimestamp=" + this.f16465c + "}";
    }

    private a(String str, long j10, long j11) {
        this.f16463a = str;
        this.f16464b = j10;
        this.f16465c = j11;
    }
}
