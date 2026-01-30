package gc;

import gc.f;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends f.b {

    /* renamed from: a  reason: collision with root package name */
    private final long f26598a;

    /* renamed from: b  reason: collision with root package name */
    private final long f26599b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f26600c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends f.b.a {

        /* renamed from: a  reason: collision with root package name */
        private Long f26601a;

        /* renamed from: b  reason: collision with root package name */
        private Long f26602b;

        /* renamed from: c  reason: collision with root package name */
        private Set f26603c;

        @Override // gc.f.b.a
        public f.b a() {
            String str = "";
            if (this.f26601a == null) {
                str = " delta";
            }
            if (this.f26602b == null) {
                str = str + " maxAllowedDelay";
            }
            if (this.f26603c == null) {
                str = str + " flags";
            }
            if (str.isEmpty()) {
                return new c(this.f26601a.longValue(), this.f26602b.longValue(), this.f26603c);
            }
            throw new IllegalStateException("Missing required properties:" + str);
        }

        @Override // gc.f.b.a
        public f.b.a b(long j10) {
            this.f26601a = Long.valueOf(j10);
            return this;
        }

        @Override // gc.f.b.a
        public f.b.a c(Set set) {
            if (set != null) {
                this.f26603c = set;
                return this;
            }
            throw new NullPointerException("Null flags");
        }

        @Override // gc.f.b.a
        public f.b.a d(long j10) {
            this.f26602b = Long.valueOf(j10);
            return this;
        }
    }

    @Override // gc.f.b
    long b() {
        return this.f26598a;
    }

    @Override // gc.f.b
    Set c() {
        return this.f26600c;
    }

    @Override // gc.f.b
    long d() {
        return this.f26599b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f.b) {
            f.b bVar = (f.b) obj;
            if (this.f26598a == bVar.b() && this.f26599b == bVar.d() && this.f26600c.equals(bVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f26598a;
        long j11 = this.f26599b;
        return ((((((int) (j10 ^ (j10 >>> 32))) ^ 1000003) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ this.f26600c.hashCode();
    }

    public String toString() {
        return "ConfigValue{delta=" + this.f26598a + ", maxAllowedDelay=" + this.f26599b + ", flags=" + this.f26600c + "}";
    }

    private c(long j10, long j11, Set set) {
        this.f26598a = j10;
        this.f26599b = j11;
        this.f26600c = set;
    }
}
