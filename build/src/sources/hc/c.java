package hc;

import hc.f;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final long f27604a;

    /* renamed from: b  reason: collision with root package name */
    private final long f27605b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f27606c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.b.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f27607a;

        /* renamed from: b  reason: collision with root package name */
        private Long f27608b;

        /* renamed from: c  reason: collision with root package name */
        private Set f27609c;

        @Override // hc.f.b.a
        public f.b a() {
            String str = "";
            if (this.f27607a == null) {
                str = " delta";
            }
            if (this.f27608b == null) {
                str = str + " maxAllowedDelay";
            }
            if (this.f27609c == null) {
                str = str + " flags";
            }
            if (str.isEmpty()) {
                return new c(this.f27607a.longValue(), this.f27608b.longValue(), this.f27609c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.f.b.a
        public f.b.a b(long j10) {
            this.f27607a = Long.valueOf(j10);
            return this;
        }

        @Override // hc.f.b.a
        public f.b.a c(Set set) {
            if (set != null) {
                this.f27609c = set;
                return this;
            }
            throw new NullPointerException("Null flags");
        }

        @Override // hc.f.b.a
        public f.b.a d(long j10) {
            this.f27608b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.f.b
    long b() {
        return this.f27604a;
    }

    @Override // hc.f.b
    Set c() {
        return this.f27606c;
    }

    @Override // hc.f.b
    long d() {
        return this.f27605b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f27604a == bVar.b() && this.f27605b == bVar.d() && this.f27606c.equals(bVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f27604a;
        long j11 = this.f27605b;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f27606c.hashCode();
    }

    public String toString() {
        return "ConfigValue{delta=" + this.f27604a + ", maxAllowedDelay=" + this.f27605b + ", flags=" + this.f27606c + "}";
    }

    private c(long j10, long j11, Set set) {
        this.f27604a = j10;
        this.f27605b = j11;
        this.f27606c = set;
    }
}
