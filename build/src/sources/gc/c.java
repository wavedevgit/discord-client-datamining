package gc;

import gc.f;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final long f26582a;

    /* renamed from: b  reason: collision with root package name */
    private final long f26583b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f26584c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.b.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f26585a;

        /* renamed from: b  reason: collision with root package name */
        private Long f26586b;

        /* renamed from: c  reason: collision with root package name */
        private Set f26587c;

        @Override // gc.f.b.a
        public f.b a() {
            String str = "";
            if (this.f26585a == null) {
                str = " delta";
            }
            if (this.f26586b == null) {
                str = str + " maxAllowedDelay";
            }
            if (this.f26587c == null) {
                str = str + " flags";
            }
            if (str.isEmpty()) {
                return new c(this.f26585a.longValue(), this.f26586b.longValue(), this.f26587c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // gc.f.b.a
        public f.b.a b(long j10) {
            this.f26585a = Long.valueOf(j10);
            return this;
        }

        @Override // gc.f.b.a
        public f.b.a c(Set set) {
            if (set != null) {
                this.f26587c = set;
                return this;
            }
            throw new NullPointerException("Null flags");
        }

        @Override // gc.f.b.a
        public f.b.a d(long j10) {
            this.f26586b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // gc.f.b
    long b() {
        return this.f26582a;
    }

    @Override // gc.f.b
    Set c() {
        return this.f26584c;
    }

    @Override // gc.f.b
    long d() {
        return this.f26583b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f26582a == bVar.b() && this.f26583b == bVar.d() && this.f26584c.equals(bVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f26582a;
        long j11 = this.f26583b;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f26584c.hashCode();
    }

    public String toString() {
        return "ConfigValue{delta=" + this.f26582a + ", maxAllowedDelay=" + this.f26583b + ", flags=" + this.f26584c + "}";
    }

    private c(long j10, long j11, Set set) {
        this.f26582a = j10;
        this.f26583b = j11;
        this.f26584c = set;
    }
}
