package gc;

import gc.f;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final long f24605a;

    /* renamed from: b  reason: collision with root package name */
    private final long f24606b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f24607c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.b.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f24608a;

        /* renamed from: b  reason: collision with root package name */
        private Long f24609b;

        /* renamed from: c  reason: collision with root package name */
        private Set f24610c;

        @Override // gc.f.b.a
        public f.b a() {
            String str = "";
            if (this.f24608a == null) {
                str = " delta";
            }
            if (this.f24609b == null) {
                str = str + " maxAllowedDelay";
            }
            if (this.f24610c == null) {
                str = str + " flags";
            }
            if (str.isEmpty()) {
                return new c(this.f24608a.longValue(), this.f24609b.longValue(), this.f24610c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // gc.f.b.a
        public f.b.a b(long j10) {
            this.f24608a = Long.valueOf(j10);
            return this;
        }

        @Override // gc.f.b.a
        public f.b.a c(Set set) {
            if (set != null) {
                this.f24610c = set;
                return this;
            }
            throw new NullPointerException("Null flags");
        }

        @Override // gc.f.b.a
        public f.b.a d(long j10) {
            this.f24609b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // gc.f.b
    long b() {
        return this.f24605a;
    }

    @Override // gc.f.b
    Set c() {
        return this.f24607c;
    }

    @Override // gc.f.b
    long d() {
        return this.f24606b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f24605a == bVar.b() && this.f24606b == bVar.d() && this.f24607c.equals(bVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f24605a;
        long j11 = this.f24606b;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f24607c.hashCode();
    }

    public String toString() {
        return "ConfigValue{delta=" + this.f24605a + ", maxAllowedDelay=" + this.f24606b + ", flags=" + this.f24607c + "}";
    }

    private c(long j10, long j11, Set set) {
        this.f24605a = j10;
        this.f24606b = j11;
        this.f24607c = set;
    }
}
