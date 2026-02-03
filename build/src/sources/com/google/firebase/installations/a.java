package com.google.firebase.installations;

import com.google.firebase.installations.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a extends g {

    /* renamed from: a  reason: collision with root package name */
    private final String f15949a;

    /* renamed from: b  reason: collision with root package name */
    private final long f15950b;

    /* renamed from: c  reason: collision with root package name */
    private final long f15951c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends g.a {

        /* renamed from: a  reason: collision with root package name */
        private String f15952a;

        /* renamed from: b  reason: collision with root package name */
        private Long f15953b;

        /* renamed from: c  reason: collision with root package name */
        private Long f15954c;

        @Override // com.google.firebase.installations.g.a
        public g a() {
            String str = "";
            if (this.f15952a == null) {
                str = " token";
            }
            if (this.f15953b == null) {
                str = str + " tokenExpirationTimestamp";
            }
            if (this.f15954c == null) {
                str = str + " tokenCreationTimestamp";
            }
            if (str.isEmpty()) {
                return new a(this.f15952a, this.f15953b.longValue(), this.f15954c.longValue());
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // com.google.firebase.installations.g.a
        public g.a b(String str) {
            if (str != null) {
                this.f15952a = str;
                return this;
            }
            throw new NullPointerException("Null token");
        }

        @Override // com.google.firebase.installations.g.a
        public g.a c(long j10) {
            this.f15954c = Long.valueOf(j10);
            return this;
        }

        @Override // com.google.firebase.installations.g.a
        public g.a d(long j10) {
            this.f15953b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // com.google.firebase.installations.g
    public String b() {
        return this.f15949a;
    }

    @Override // com.google.firebase.installations.g
    public long c() {
        return this.f15951c;
    }

    @Override // com.google.firebase.installations.g
    public long d() {
        return this.f15950b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (this.f15949a.equals(gVar.b()) && this.f15950b == gVar.d() && this.f15951c == gVar.c()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f15950b;
        long j11 = this.f15951c;
        return ((((this.f15949a.hashCode() ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)));
    }

    public String toString() {
        return "InstallationTokenResult{token=" + this.f15949a + ", tokenExpirationTimestamp=" + this.f15950b + ", tokenCreationTimestamp=" + this.f15951c + "}";
    }

    private a(String str, long j10, long j11) {
        this.f15949a = str;
        this.f15950b = j10;
        this.f15951c = j11;
    }
}
