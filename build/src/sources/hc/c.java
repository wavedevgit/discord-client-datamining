package hc;

import hc.f;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final long f25817a;

    /* renamed from: b  reason: collision with root package name */
    private final long f25818b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f25819c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.b.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f25820a;

        /* renamed from: b  reason: collision with root package name */
        private Long f25821b;

        /* renamed from: c  reason: collision with root package name */
        private Set f25822c;

        @Override // hc.f.b.a
        public f.b a() {
            String str = "";
            if (this.f25820a == null) {
                str = " delta";
            }
            if (this.f25821b == null) {
                str = str + " maxAllowedDelay";
            }
            if (this.f25822c == null) {
                str = str + " flags";
            }
            if (str.isEmpty()) {
                return new c(this.f25820a.longValue(), this.f25821b.longValue(), this.f25822c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.f.b.a
        public f.b.a b(long j10) {
            this.f25820a = Long.valueOf(j10);
            return this;
        }

        @Override // hc.f.b.a
        public f.b.a c(Set set) {
            if (set != null) {
                this.f25822c = set;
                return this;
            }
            throw new NullPointerException("Null flags");
        }

        @Override // hc.f.b.a
        public f.b.a d(long j10) {
            this.f25821b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.f.b
    long b() {
        return this.f25817a;
    }

    @Override // hc.f.b
    Set c() {
        return this.f25819c;
    }

    @Override // hc.f.b
    long d() {
        return this.f25818b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f25817a == bVar.b() && this.f25818b == bVar.d() && this.f25819c.equals(bVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f25817a;
        long j11 = this.f25818b;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f25819c.hashCode();
    }

    public String toString() {
        return "ConfigValue{delta=" + this.f25817a + ", maxAllowedDelay=" + this.f25818b + ", flags=" + this.f25819c + "}";
    }

    private c(long j10, long j11, Set set) {
        this.f25817a = j10;
        this.f25818b = j11;
        this.f25819c = set;
    }
}
