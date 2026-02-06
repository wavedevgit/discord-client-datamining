package gc;

import gc.f;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final long f24858a;

    /* renamed from: b  reason: collision with root package name */
    private final long f24859b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f24860c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.b.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f24861a;

        /* renamed from: b  reason: collision with root package name */
        private Long f24862b;

        /* renamed from: c  reason: collision with root package name */
        private Set f24863c;

        @Override // gc.f.b.a
        public f.b a() {
            String str = "";
            if (this.f24861a == null) {
                str = " delta";
            }
            if (this.f24862b == null) {
                str = str + " maxAllowedDelay";
            }
            if (this.f24863c == null) {
                str = str + " flags";
            }
            if (str.isEmpty()) {
                return new c(this.f24861a.longValue(), this.f24862b.longValue(), this.f24863c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // gc.f.b.a
        public f.b.a b(long j10) {
            this.f24861a = Long.valueOf(j10);
            return this;
        }

        @Override // gc.f.b.a
        public f.b.a c(Set set) {
            if (set != null) {
                this.f24863c = set;
                return this;
            }
            throw new NullPointerException("Null flags");
        }

        @Override // gc.f.b.a
        public f.b.a d(long j10) {
            this.f24862b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // gc.f.b
    long b() {
        return this.f24858a;
    }

    @Override // gc.f.b
    Set c() {
        return this.f24860c;
    }

    @Override // gc.f.b
    long d() {
        return this.f24859b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f24858a == bVar.b() && this.f24859b == bVar.d() && this.f24860c.equals(bVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f24858a;
        long j11 = this.f24859b;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f24860c.hashCode();
    }

    public String toString() {
        return "ConfigValue{delta=" + this.f24858a + ", maxAllowedDelay=" + this.f24859b + ", flags=" + this.f24860c + "}";
    }

    private c(long j10, long j11, Set set) {
        this.f24858a = j10;
        this.f24859b = j11;
        this.f24860c = set;
    }
}
