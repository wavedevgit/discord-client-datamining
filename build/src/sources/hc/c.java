package hc;

import hc.f;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final long f27035a;

    /* renamed from: b  reason: collision with root package name */
    private final long f27036b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f27037c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.b.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f27038a;

        /* renamed from: b  reason: collision with root package name */
        private Long f27039b;

        /* renamed from: c  reason: collision with root package name */
        private Set f27040c;

        @Override // hc.f.b.a
        public f.b a() {
            String str = "";
            if (this.f27038a == null) {
                str = " delta";
            }
            if (this.f27039b == null) {
                str = str + " maxAllowedDelay";
            }
            if (this.f27040c == null) {
                str = str + " flags";
            }
            if (str.isEmpty()) {
                return new c(this.f27038a.longValue(), this.f27039b.longValue(), this.f27040c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // hc.f.b.a
        public f.b.a b(long j10) {
            this.f27038a = Long.valueOf(j10);
            return this;
        }

        @Override // hc.f.b.a
        public f.b.a c(Set set) {
            if (set != null) {
                this.f27040c = set;
                return this;
            }
            throw new NullPointerException("Null flags");
        }

        @Override // hc.f.b.a
        public f.b.a d(long j10) {
            this.f27039b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // hc.f.b
    long b() {
        return this.f27035a;
    }

    @Override // hc.f.b
    Set c() {
        return this.f27037c;
    }

    @Override // hc.f.b
    long d() {
        return this.f27036b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f27035a == bVar.b() && this.f27036b == bVar.d() && this.f27037c.equals(bVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f27035a;
        long j11 = this.f27036b;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f27037c.hashCode();
    }

    public String toString() {
        return "ConfigValue{delta=" + this.f27035a + ", maxAllowedDelay=" + this.f27036b + ", flags=" + this.f27037c + "}";
    }

    private c(long j10, long j11, Set set) {
        this.f27035a = j10;
        this.f27036b = j11;
        this.f27037c = set;
    }
}
